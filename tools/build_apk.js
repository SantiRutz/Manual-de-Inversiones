// Construye el APK de lectura sin conexión a partir del sitio generado en site/.
// Requisitos: JDK 17 (JAVA_HOME o PATH) y Android SDK con una plataforma y build-tools
// (ANDROID_HOME, ANDROID_SDK_ROOT o ~/Android/Sdk). No usa Gradle ni descarga nada.
//
//   node tools/build_apk.js
//
// Salidas: dist/manual-inversion.apk y site/descargas/manual-inversion.apk (enlace de la portada).
// Firma: keystore propio fuera del repositorio (APK_KEYSTORE, por defecto ~/.android/manual-inversion.jks;
// contraseña en APK_KEYSTORE_PASS). Si no existe, se crea. Conserve ese archivo: las actualizaciones
// del APK deben firmarse con la misma clave.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const site = path.join(root, 'site');
const androidDir = path.join(root, 'android');
const work = path.join(root, 'build', 'android');
const apkName = 'manual-inversion.apk';
const versionName = '1.0 · edición 24 sep 2026';
const versionCode = Math.floor(Date.now() / 60000); // minutos desde 1970: crece en cada construcción
const minSdk = 26;
const targetSdk = 35;

function run(cmd, args, options = {}) {
  try {
    return execFileSync(cmd, args, { stdio: ['ignore', 'pipe', 'pipe'], ...options }).toString();
  } catch (error) {
    const detail = [error.stdout, error.stderr].filter(Boolean).map(String).join('\n');
    throw new Error(`Falló ${path.basename(cmd)} ${args.join(' ')}\n${detail}`);
  }
}
function highest(dir, filter = () => true) {
  if (!fs.existsSync(dir)) return null;
  const entries = fs.readdirSync(dir).filter(filter).sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
  return entries.length ? path.join(dir, entries[entries.length - 1]) : null;
}
function findSdk() {
  const candidates = [process.env.ANDROID_HOME, process.env.ANDROID_SDK_ROOT, path.join(os.homedir(), 'Android', 'Sdk')].filter(Boolean);
  const sdk = candidates.find((dir) => fs.existsSync(path.join(dir, 'platforms')));
  if (!sdk) throw new Error('No se encontró el Android SDK (ANDROID_HOME, ANDROID_SDK_ROOT o ~/Android/Sdk).');
  const buildTools = highest(path.join(sdk, 'build-tools'));
  const platform = highest(path.join(sdk, 'platforms'), (name) => /^android-\d+$/.test(name));
  if (!buildTools || !platform) throw new Error('El SDK necesita build-tools y una plataforma android-NN.');
  return { buildTools, androidJar: path.join(platform, 'android.jar') };
}
function jdkTool(name) {
  const home = process.env.JAVA_HOME;
  const fromHome = home && path.join(home, 'bin', name);
  return fromHome && fs.existsSync(fromHome) ? fromHome : name;
}
function walk(dir, predicate, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, predicate, out);
    else if (predicate(full)) out.push(full);
  }
  return out;
}

// 1. Sitio al día (mismo generador que la web).
run(process.execPath, [path.join(__dirname, 'build_website.js')]);
if (!fs.existsSync(path.join(site, 'index.html'))) throw new Error('Falta site/index.html.');

const { buildTools, androidJar } = findSdk();
const tool = (name) => path.join(buildTools, name);
fs.rmSync(work, { recursive: true, force: true });
for (const dir of ['compiled', 'gen', 'classes', 'dex', 'assets']) fs.mkdirSync(path.join(work, dir), { recursive: true });

// 2. Recursos y assets (el sitio, sin la carpeta de descargas para no meter el APK dentro de sí mismo).
const resZip = path.join(work, 'compiled', 'res.zip');
run(tool('aapt2'), ['compile', '--dir', path.join(androidDir, 'res'), '-o', resZip]);
fs.cpSync(site, path.join(work, 'assets', 'site'), {
  recursive: true,
  filter: (source) => !source.startsWith(path.join(site, 'descargas')) && path.basename(source) !== '.nojekyll',
});
const unsigned = path.join(work, 'app-unsigned.apk');
run(tool('aapt2'), ['link', '-o', unsigned, '-I', androidJar,
  '--manifest', path.join(androidDir, 'AndroidManifest.xml'),
  '-A', path.join(work, 'assets'),
  '--java', path.join(work, 'gen'),
  '--min-sdk-version', String(minSdk), '--target-sdk-version', String(targetSdk),
  '--version-code', String(versionCode), '--version-name', versionName,
  resZip]);

// 3. Java → bytecode → DEX.
const sources = [...walk(path.join(androidDir, 'src'), (f) => f.endsWith('.java')), ...walk(path.join(work, 'gen'), (f) => f.endsWith('.java'))];
run(jdkTool('javac'), ['-nowarn', '--release', '8', '-encoding', 'UTF-8',
  '-classpath', androidJar, '-d', path.join(work, 'classes'), ...sources]);
const classes = walk(path.join(work, 'classes'), (f) => f.endsWith('.class'));
run(tool('d8'), ['--release', '--min-api', String(minSdk), '--lib', androidJar, '--output', path.join(work, 'dex'), ...classes]);
run(jdkTool('jar'), ['--update', '--no-manifest', '--file', unsigned, '-C', path.join(work, 'dex'), 'classes.dex']);

// 4. Alinear y firmar.
const aligned = path.join(work, 'app-aligned.apk');
run(tool('zipalign'), ['-p', '-f', '4', unsigned, aligned]);
const keystore = process.env.APK_KEYSTORE || path.join(os.homedir(), '.android', 'manual-inversion.jks');
const storePass = process.env.APK_KEYSTORE_PASS || 'manual-inversion';
if (!fs.existsSync(keystore)) {
  fs.mkdirSync(path.dirname(keystore), { recursive: true });
  run(jdkTool('keytool'), ['-genkeypair', '-keystore', keystore, '-storetype', 'PKCS12', '-alias', 'manual',
    '-keyalg', 'RSA', '-keysize', '3072', '-validity', '10000', '-storepass', storePass, '-keypass', storePass,
    '-dname', 'CN=Manual de inversion, O=Manual de inversion, C=ES']);
  console.log(`Keystore nuevo: ${keystore} (guárdelo: las actualizaciones requieren la misma clave).`);
}
const distDir = path.join(root, 'dist');
fs.mkdirSync(distDir, { recursive: true });
const signed = path.join(distDir, apkName);
run(tool('apksigner'), ['sign', '--ks', keystore, '--ks-key-alias', 'manual', '--ks-pass', `pass:${storePass}`,
  '--key-pass', `pass:${storePass}`, '--out', signed, aligned]);
run(tool('apksigner'), ['verify', signed]);
fs.rmSync(`${signed}.idsig`, { force: true });

// 5. Copia descargable desde la portada de la web.
const downloads = path.join(site, 'descargas');
fs.mkdirSync(downloads, { recursive: true });
fs.copyFileSync(signed, path.join(downloads, apkName));

const size = (fs.statSync(signed).size / 1024 / 1024).toFixed(2);
console.log(`APK firmado: ${path.relative(root, signed)} (${size} MB, versionCode ${versionCode}, minSdk ${minSdk}, targetSdk ${targetSdk})`);
console.log(`Copia para la web: site/descargas/${apkName}`);
