const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const parts = [
  'manual_parts/parte_00_preliminares.md',
  'manual_parts/parte_01_02.md',
  'manual_parts/parte_03.md',
  'manual_parts/parte_04.md',
  'manual_parts/parte_05_08.md',
  'manual_parts/parte_09_13.md',
  'manual_parts/parte_14_20.md',
  'manual_parts/parte_21_25.md',
  'manual_parts/parte_26_29.md',
  'manual_parts/parte_30.md',
  'manual_parts/parte_31_34.md',
  'manual_parts/parte_36_apendices.md',
  'manual_parts/parte_35_aliases.md',
  'manual_parts/parte_37_protocolo_tiempos.md',
];
const missing = parts.filter((p) => !fs.existsSync(path.join(root, p)));
if (missing.length) {
  console.error('Faltan partes:', missing.join(', '));
  process.exit(1);
}
const content = parts.map((p) => fs.readFileSync(path.join(root, p), 'utf8').trim()).join('\n\n---\n\n');
const master = path.join(root, 'MANUAL_VALUE_INVESTING_Y_ANALISIS_FINANCIERO_REVISADO.md');
fs.writeFileSync(master, content + '\n', 'utf8');
console.log(`Master Markdown creado: ${master}`);
console.log(`Caracteres: ${content.length.toLocaleString('es-ES')}`);

function slug(s) {
  return s.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'seccion';
}
function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function inline(s) {
  let x = esc(s);
  // code first, then links, bold/italic. Escape generated HTML labels only as needed.
  const tokens = [];
  x = x.replace(/`([^`]+)`/g, (_, v) => { tokens.push(`<code>${v}</code>`); return `\u0000${tokens.length - 1}\u0000`; });
  x = x.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => `<a href="${esc(href)}">${label}</a>`);
  x = x.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  x = x.replace(/__([^_]+)__/g, '<strong>$1</strong>');
  x = x.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  x = x.replace(/_([^_]+)_/g, '<em>$1</em>');
  x = x.replace(/\u0000(\d+)\u0000/g, (_, i) => tokens[Number(i)]);
  return x;
}
function mathText(raw) {
  let x = raw.replace(/\r/g, '').trim();
  x = x.replace(/^\\\[|\\\]$/g, '');
  x = x.replace(/\\begin\{[^}]+\}|\\end\{[^}]+\}/g, '');
  x = x.replace(/\\text\{([^}]*)\}/g, '$1');
  x = x.replace(/\\mathrm\{([^}]*)\}/g, '$1');
  x = x.replace(/\\operatorname\{([^}]*)\}/g, '$1');
  for (let i = 0; i < 4; i += 1) {
    x = x.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '($1) / ($2)');
    x = x.replace(/\\sqrt\{([^{}]*)\}/g, '√($1)');
  }
  x = x.replace(/\\left|\\right/g, '');
  x = x.replace(/\\times/g, '×').replace(/\\cdot/g, '·');
  x = x.replace(/\\Delta/g, 'Δ').replace(/\\sigma/g, 'σ').replace(/\\rho/g, 'ρ').replace(/\\pi/g, 'π');
  x = x.replace(/\\sum/g, 'Σ').replace(/\\min/g, 'min').replace(/\\max/g, 'max');
  x = x.replace(/\\approx/g, '≈').replace(/\\ge/g, '≥').replace(/\\le/g, '≤');
  x = x.replace(/\\%/g, '%').replace(/\\,/g, ',').replace(/\\;/g, ' ').replace(/\\!/g, '');
  x = x.replace(/\\mid/g, '|').replace(/\\to/g, '→');
  x = x.replace(/[{}]/g, '');
  x = x.replace(/\\/g, '').replace(/\s+/g, ' ').trim();
  return esc(x);
}
function renderTable(lines, i, out) {
  const rows = [];
  let j = i;
  while (j < lines.length && /^\s*\|/.test(lines[j])) {
    rows.push(lines[j].trim());
    j++;
  }
  if (rows.length < 2) return j;
  const cells = (row) => row.replace(/^\|/, '').replace(/\|$/, '').split('|').map((v) => v.trim());
  const header = cells(rows[0]);
  const body = rows.slice(1).filter((r) => !/^\s*\|?\s*:?-{3,}/.test(r)).map(cells);
  out.push('<table><thead><tr>' + header.map((c) => `<th>${inline(c)}</th>`).join('') + '</tr></thead><tbody>');
  for (const row of body) out.push('<tr>' + header.map((_, n) => `<td>${inline(row[n] || '')}</td>`).join('') + '</tr>');
  out.push('</tbody></table>');
  return j;
}
function renderList(lines, i, out) {
  const start = lines[i];
  const ordered = /^\s*\d+[.)]\s+/.test(start);
  const items = [];
  let j = i;
  while (j < lines.length) {
    const line = lines[j];
    if (ordered && /^\s*\d+[.)]\s+/.test(line)) items.push(line.replace(/^\s*\d+[.)]\s+/, ''));
    else if (!ordered && /^\s*[-*+]\s+/.test(line)) items.push(line.replace(/^\s*[-*+]\s+/, ''));
    else break;
    j++;
  }
  const tag = ordered ? 'ol' : 'ul';
  out.push(`<${tag}>` + items.map((x) => {
    const m = x.match(/^\[([ xX])\]\s*(.*)$/);
    if (!m) return `<li>${inline(x)}</li>`;
    const mark = m[1].toLowerCase() === 'x' ? '☑' : '☐';
    return `<li><span class="check">${mark}</span> ${inline(m[2])}</li>`;
  }).join('') + `</${tag}>`);
  return j;
}
function markdownToHtml(md) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  const toc = [];
  const usedIds = new Map();
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (/^\s*\\\[/.test(line)) {
      const buf = [];
      while (i < lines.length) {
        const mathLine = lines[i++];
        if (/\\\]/.test(mathLine)) {
          const cut = mathLine.indexOf('\\]');
          if (cut >= 0) buf.push(mathLine.slice(0, cut));
          break;
        }
        buf.push(mathLine.replace(/^\\\[/, ''));
      }
      out.push(`<div class="math">${mathText(buf.join('\n'))}</div>`);
      continue;
    }
    if (/^\s*```/.test(line)) {
      const lang = line.trim().slice(3).trim();
      const buf = []; i++;
      while (i < lines.length && !/^\s*```/.test(lines[i])) buf.push(lines[i++]);
      i++;
      out.push(`<pre class="code"><code>${esc(buf.join('\n'))}</code></pre>`);
      continue;
    }
    if (/^\s*\|/.test(line)) { i = renderTable(lines, i, out); continue; }
    if (/^\s*(?:[-*+] |\d+[.)] )/.test(line)) { i = renderList(lines, i, out); continue; }
    const h = line.match(/^(#{1,6})\s+(.+)$/);
    if (h) {
      const level = h[1].length;
      const raw = h[2].trim();
      let id = slug(raw);
      let cap = null;
      if (level <= 2) cap = raw.match(/^(?:CAP[IÍ]TULO\s+|CHAPTER\s+)?(\d+)(?:[.)](?!\d)|\s+[-—–:])?\s+/i);
      if (cap) id = `capitulo-${cap[1]}`;
      const baseId = id;
      const seen = usedIds.get(baseId) || 0;
      usedIds.set(baseId, seen + 1);
      if (seen) id = `${baseId}-${seen + 1}`;
      if (level <= 2) toc.push({ level, raw, id });
      out.push(`<h${level} id="${esc(id)}">${inline(raw)}</h${level}>`);
      i++; continue;
    }
    if (/^\s*>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^\s*>\s?/.test(lines[i])) buf.push(lines[i++].replace(/^\s*>\s?/, ''));
      out.push(`<blockquote>${inline(buf.join(' '))}</blockquote>`);
      continue;
    }
    if (/^\s*---+\s*$/.test(line)) { out.push('<hr>'); i++; continue; }
    if (/^\s*$/.test(line)) { i++; continue; }
    const buf = [];
    while (i < lines.length && !/^\s*$/.test(lines[i]) && !/^(#{1,6})\s+/.test(lines[i]) && !/^\s*\|/.test(lines[i]) && !/^\s*```/.test(lines[i]) && !/^\s*>/.test(lines[i]) && !/^\s*---+\s*$/.test(lines[i]) && !/^\s*(?:[-*+] |\d+[.)] )/.test(lines[i])) buf.push(lines[i++].trim());
    if (buf.length) out.push(`<p>${inline(buf.join(' '))}</p>`); else i++;
  }
  return { html: out.join('\n'), toc };
}
const { html, toc } = markdownToHtml(content);
const tocHtml = toc.filter((x) => x.level <= 2).map((x) => `<li class="toc-l${x.level}"><a href="#${esc(x.id)}">${esc(x.raw.replace(/^#+\s*/, ''))}</a></li>`).join('');
const css = `
:root{color-scheme:light;--ink:#222b2a;--ink-soft:#4a5752;--muted:#777d74;--paper:#faf8f1;--canvas:#e7e3d9;--surface-soft:#eeeadd;--line:#d9d4c7;--navy:#273e3b;--navy-soft:#344c47;--ledger:#3e644f;--brass:#af8954;--brass-soft:#f1eadb;--risk:#a6533e;--font-interface:"Segoe UI","Aptos",Arial,sans-serif;--font-editorial:"Palatino Linotype","Book Antiqua",Georgia,serif}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; background: var(--canvas); }
body {
  max-width: 1000px;
  min-height: 100vh;
  margin: 30px auto;
  padding: 58px clamp(22px, 7vw, 88px) 76px;
  color: var(--ink);
  background: var(--paper);
  border: 1px solid var(--line);
  font-family: var(--font-editorial);
  font-size: 16px;
  line-height: 1.75;
  -webkit-font-smoothing: antialiased;
}
h1, h2, h3, h4, h5 {
  color: var(--navy);
  font-family: var(--font-editorial);
  line-height: 1.2;
  text-wrap: balance;
  break-after: avoid;
}
h1 {
  margin: 2.7rem 0 1rem;
  padding-bottom: .55rem;
  border-bottom: 1px solid var(--line);
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 500;
  letter-spacing: -.035em;
}
body > h1:first-child {
  max-width: 760px;
  margin: 10vh 0 1.5rem;
  padding: 1.35rem 0 .25rem;
  border-top: 5px solid var(--navy);
  border-bottom: 0;
  font-size: clamp(2.6rem, 6vw, 4.25rem);
  line-height: 1.04;
}
body > h1:first-child + h2 {
  max-width: 700px;
  margin: 0 0 1.5rem;
  padding: 0;
  border: 0;
  color: var(--ledger);
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 400;
}
body > h1:first-child + h2 + p {
  max-width: 700px;
  margin: 1.6rem 0 2rem;
  padding-left: 14px;
  border-left: 2px solid var(--brass);
  color: var(--muted);
  font-family: var(--font-interface);
  font-size: 11px;
  line-height: 1.8;
}
h2 {
  margin: 2.7rem 0 .8rem;
  padding-left: 12px;
  border-left: 2px solid var(--ledger);
  font-size: 1.55rem;
  font-weight: 500;
  letter-spacing: -.02em;
}
h3 { margin: 1.8rem 0 .55rem; color: var(--ledger); font-size: 1.24rem; font-weight: 500; }
h4 { margin: 1.25rem 0 .45rem; color: var(--ink); font-family: var(--font-interface); font-size: 1rem; font-weight: 700; }
p { margin: .8rem 0; color: var(--ink-soft); text-wrap: pretty; }
strong { color: var(--ink); }
a { color: var(--ledger); text-decoration: none; text-underline-offset: 3px; }
a:hover { text-decoration: underline; }
hr { height: 1px; margin: 2.5rem 0; background: var(--line); border: 0; }
blockquote { margin: 1.25rem 0; padding: .9rem 1.1rem; background: var(--brass-soft); border-left: 2px solid var(--brass); }
code { padding: .08rem .3rem; color: var(--ledger); background: var(--surface-soft); border: 1px solid var(--line); border-radius: 3px; font-family: Consolas, "Liberation Mono", monospace; font-size: .88em; overflow-wrap: anywhere; }
.math { margin: 1rem 0; padding: .85rem 1rem; overflow-x: auto; color: var(--navy); background: var(--brass-soft); border: 1px solid color-mix(in srgb, var(--brass) 28%, var(--line)); border-left: 2px solid var(--brass); font-family: var(--font-editorial); font-size: 1.02rem; line-height: 1.6; }
pre.code { margin: 1.1rem 0; padding: 1rem 1.1rem; overflow: auto; color: #e9e5d9; background: #1d2927; border: 1px solid #35413b; }
pre.code code { padding: 0; color: inherit; background: none; border: 0; }
table { width: 100%; margin: 1.2rem 0 1.5rem; border-collapse: collapse; font-family: var(--font-interface); font-size: .82rem; line-height: 1.5; font-variant-numeric: tabular-nums; page-break-inside: auto; }
thead { display: table-header-group; }
tr { page-break-inside: avoid; }
th { color: #f2efe6; background: var(--navy-soft); border-top: 2px solid var(--brass); font-size: .73rem; font-weight: 700; letter-spacing: .045em; text-align: left; }
th, td { padding: .58rem .62rem; border-bottom: 1px solid var(--line); vertical-align: top; }
td { color: var(--ink-soft); }
tr:nth-child(even) { background: var(--surface-soft); }
ul, ol { margin: .7rem 0 1.1rem; padding-left: 1.5rem; color: var(--ink-soft); }
li { margin: .34rem 0; padding-left: .1rem; }
li::marker { color: var(--ledger); }
.check { color: var(--ledger); font-family: var(--font-interface); font-size: 1.05em; }
.meta { color: var(--muted); font-family: var(--font-interface); font-size: .85rem; }
.toc {
  margin: 2rem 0;
  padding: 1.1rem 1.4rem;
  background: var(--surface-soft);
  border: 1px solid var(--line);
  border-left: 2px solid var(--ledger);
  columns: 2;
  column-gap: 2.3rem;
}
.toc > strong { display: block; margin-bottom: .65rem; font-family: var(--font-interface); font-size: .72rem; letter-spacing: .11em; text-transform: uppercase; }
.toc li { break-inside: avoid; margin: .2rem 0; }
.toc-l1 { font-weight: 700; }
.toc-l2 { padding-left: 1rem; color: var(--muted); font-size: .9em; }
.formula { margin: .9rem 0; padding: .75rem .9rem; background: var(--brass-soft); border-left: 2px solid var(--brass); }
.note { margin: .9rem 0; padding: .75rem .9rem; background: color-mix(in srgb, var(--ledger) 9%, var(--paper)); border-left: 2px solid var(--ledger); }
.warning, .danger { margin: .9rem 0; padding: .75rem .9rem; background: color-mix(in srgb, var(--risk) 9%, var(--paper)); border-left: 2px solid var(--risk); }
@media (max-width: 800px) {
  body { margin: 0; padding: 36px clamp(18px, 5vw, 36px) 52px; border: 0; font-size: 15px; }
  body > h1:first-child { margin-top: 8vh; font-size: clamp(2.45rem, 9vw, 3.5rem); }
  .toc { columns: 1; }
  table { display: block; overflow-x: auto; font-size: .78rem; }
}
@media print {
  @page { size: A4; margin: 16mm 14mm; }
  html, body { max-width: none; margin: 0; padding: 0; background: #fff; border: 0; }
  body { font-size: 10.25pt; line-height: 1.55; }
  h1 { margin-top: 2rem; font-size: 21pt; page-break-before: always; break-before: page; }
  body > h1:first-child { margin: 20mm 0 5mm; padding-top: 8mm; border-top-width: 4px; font-size: 30pt; page-break-before: auto; break-before: auto; }
  body > h1:first-child + h2 { margin: 0 0 8mm; font-size: 16pt; }
  body > h1:first-child + h2 + p { margin: 0 0 10mm; font-size: 9pt; }
  h2 { margin-top: 1.9rem; font-size: 14.5pt; }
  h3 { font-size: 12pt; }
  h4 { font-size: 10pt; }
  p, ul, ol { font-size: 9.6pt; }
  a { color: inherit; text-decoration: none; }
  .toc { margin: 0 0 1.2rem; padding: 8mm; columns: 2; break-before: page; break-inside: avoid; }
  table { display: table; width: 100%; font-size: 7.8pt; }
  th, td { padding: 4pt 5pt; }
  th { print-color-adjust: exact; }
  tr { break-inside: avoid; }
  .math, blockquote, .formula, .note, .warning, .danger { print-color-adjust: exact; break-inside: avoid; }
  pre.code { white-space: pre-wrap; overflow-wrap: anywhere; print-color-adjust: exact; }
}
`;
const nav = `<nav class="toc"><strong>Índice de navegación</strong><ul>${tocHtml}</ul></nav>`;
const indexMarker = '<h2 id="indice-general">';
const navPos = html.indexOf(indexMarker);
const bodyHtml = navPos >= 0 ? `${html.slice(0, navPos)}${nav}${html.slice(navPos)}` : `${nav}${html}`;
const htmlDoc = `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Manual profesional de inversiones y Value Investing</title><style>${css}</style></head><body>${bodyHtml}</body></html>`;
const htmlPath = path.join(root, 'MANUAL_VALUE_INVESTING_Y_ANALISIS_FINANCIERO_REVISADO.html');
fs.writeFileSync(htmlPath, htmlDoc, 'utf8');
console.log(`HTML creado: ${htmlPath}`);
console.log(`Encabezados: ${toc.length}; tablas renderizadas: ${(html.match(/<table>/g) || []).length}`);
