const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const site = path.join(root, 'site');
const requiredFiles = [
  'index.html', 'guia.html', 'apendices.html', 'protocolo.html',
  'assets/site.css', 'assets/site.js', 'assets/mark.svg', 'assets/search-index.js', '.nojekyll',
  ...Array.from({ length: 34 }, (_, index) => `capitulo-${String(index + 1).padStart(2, '0')}.html`),
];
let ok = true;
let checksRun = 0;
function check(label, passed, detail = '') {
  checksRun += 1;
  if (!passed) console.error(`FALLA ${label}${detail ? `: ${detail}` : ''}`);
  if (!passed) ok = false;
}
for (const file of requiredFiles) check(`existe ${file}`, fs.existsSync(path.join(site, file)));
if (!fs.existsSync(site)) process.exit(1);

const htmlFiles = fs.readdirSync(site).filter((file) => file.endsWith('.html'));
check('38 páginas HTML', htmlFiles.length === 38, String(htmlFiles.length));
const pages = new Map(htmlFiles.map((file) => [file, fs.readFileSync(path.join(site, file), 'utf8')]));
let localLinks = 0;
let brokenLinks = 0;
let mathBlocks = 0;
for (const [file, html] of pages) {
  check(`${file} declara español`, /<html lang="es"/.test(html));
  check(`${file} contiene navegación principal`, html.includes('class="sidebar-nav"'));
  check(`${file} tiene título`, /<title>[^<]+<\/title>/.test(html));
  check(`${file} cierra HTML`, html.trim().endsWith('</html>'));
  check(`${file} no contiene reemplazo Unicode`, ![...html].some((char) => char.codePointAt(0) === 0xfffd));
  check(`${file} no solicita scripts externos`, !/<script\b[^>]*\bsrc=["']https?:/i.test(html));
  check(`${file} no solicita estilos externos`, !/<link\b[^>]*\bhref=["']https?:/i.test(html));
  mathBlocks += (html.match(/class="math"/g) || []).length;

  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const href = match[1].replace(/&amp;/g, '&');
    if (/^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(href) || href.startsWith('//')) continue;
    const [filePart, fragment = ''] = href.split('#');
    const targetFile = filePart || file;
    const targetPath = path.resolve(site, targetFile);
    if (!targetPath.startsWith(`${site}${path.sep}`) && targetPath !== path.join(site, 'index.html')) {
      brokenLinks += 1;
      console.error(`FALLA ruta fuera del sitio en ${file}: ${href}`);
      continue;
    }
    if (!fs.existsSync(targetPath)) {
      brokenLinks += 1;
      console.error(`FALLA enlace local roto en ${file}: ${href}`);
      continue;
    }
    localLinks += 1;
    if (fragment) {
      const targetHtml = targetFile === file ? html : pages.get(targetFile);
      if (targetHtml && !new RegExp(`\\bid="${fragment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`).test(targetHtml)) {
        brokenLinks += 1;
        console.error(`FALLA ancla rota en ${file}: ${href}`);
      }
    }
  }
}
check('enlaces locales válidos', brokenLinks === 0, `${localLinks} verificados; ${brokenLinks} rotos`);
check('fórmulas en bloques legibles', mathBlocks >= 60, String(mathBlocks));

const chapterLinks = (pages.get('index.html') || '').match(/href="capitulo-\d{2}\.html"/g) || [];
check('portada enlaza a bloques de capítulos', chapterLinks.length >= 6, String(chapterLinks.length));
const searchSource = fs.readFileSync(path.join(site, 'assets', 'search-index.js'), 'utf8');
let searchIndex = [];
try {
  const json = searchSource.replace(/^window\.MANUAL_SEARCH_INDEX=/, '').replace(/;\s*$/, '');
  searchIndex = JSON.parse(json);
} catch (error) {
  console.error(`No se pudo leer search-index.js: ${error.message}`);
  ok = false;
}
check('índice de búsqueda cubre guía, capítulos, apéndices y protocolo', searchIndex.length === 37, String(searchIndex.length));
check('búsqueda incluye los 34 capítulos', new Set(searchIndex.map((item) => item.number).filter(Boolean)).size === 34);
const indexedText = searchIndex.map((item) => `${item.title} ${item.text}`).join(' ').toLowerCase();
for (const term of ['owner earnings', 'fcff', 'fcfe', 'bonos', 'glosario', '30 minutos', '1 hora', '3 horas']) {
  check(`índice permite buscar ${term}`, indexedText.includes(term));
}
check('búsqueda no requiere fetch/red', !/\bfetch\s*\(/.test(fs.readFileSync(path.join(site, 'assets', 'site.js'), 'utf8')));
check('no hay archivos externos de fuentes o red', !/(?:fonts\.googleapis|cdnjs\.cloudflare|unpkg\.com|jsdelivr\.net)/i.test(searchSource + fs.readFileSync(path.join(site, 'assets', 'site.css'), 'utf8') + fs.readFileSync(path.join(site, 'assets', 'site.js'), 'utf8')));

const totalBytes = requiredFiles.filter((file) => fs.existsSync(path.join(site, file))).reduce((sum, file) => sum + fs.statSync(path.join(site, file)).size, 0);
console.log(JSON.stringify({ ok, checks: checksRun, pages: htmlFiles.length, searchDocuments: searchIndex.length, localLinks, brokenLinks, mathBlocks, totalBytes }, null, 2));
process.exit(ok ? 0 : 1);
