// Validación básica del HTML autónomo generado por build_manual.js.
const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, '..', process.argv[2] || 'MANUAL_VALUE_INVESTING_Y_ANALISIS_FINANCIERO_REVISADO.html');
if (!fs.existsSync(file)) { console.error('No existe el HTML; ejecuta build_manual.js primero.'); process.exit(2); }
const html = fs.readFileSync(file, 'utf8');
const checks = [
  ['doctype', html.startsWith('<!doctype html>')],
  ['idioma', html.includes('lang="es"')],
  ['cierre HTML', html.trim().endsWith('</html>')],
  ['navegación', html.includes('class="toc"')],
  ['tablas', (html.match(/<table>/g) || []).length > 0],
  ['fórmulas HTML', (html.match(/class="math"/g) || []).length > 0],
  ['bloques LaTeX sin convertir', !/\\\[[\s\S]*?\\\]/.test(html)],
  ['casillas sin convertir', !/\[x\]|\[ \]/i.test(html)],
  ['caracteres de reemplazo', ![...html].some(c => c.codePointAt(0) === 0xfffd)],
  ['bloques CJK/coreanos', !/[\u3000-\u9fff\uac00-\ud7af]/u.test(html)],
];
let ok = true;
for (const [name, passed] of checks) {
  console.log(`${passed ? 'OK' : 'FALLA'} ${name}`);
  if (!passed) ok = false;
}
console.log(JSON.stringify({ ok, tables: (html.match(/<table>/g) || []).length, mathBlocks: (html.match(/class="math"/g) || []).length }));
process.exit(ok ? 0 : 1);
