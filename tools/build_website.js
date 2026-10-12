const fs = require('fs');
const path = require('path');
const { placa } = require('./casos_reales');
const { formatNum, formatPct } = require('./casos_reales_render');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'site');
const buildSource = fs.readFileSync(path.join(__dirname, 'build_manual.js'), 'utf8');
const parts = [...buildSource.matchAll(/'manual_parts\/([^']+\.md)'/g)].map((match) => match[1]);
if (parts.length !== 15) throw new Error(`Se esperaban 15 partes canónicas en build_manual.js; se encontraron ${parts.length}.`);
const missing = parts.filter((part) => !fs.existsSync(path.join(root, 'manual_parts', part)));
if (missing.length) throw new Error(`Faltan partes canónicas: ${missing.join(', ')}`);

const rawContent = parts.map((part) => fs.readFileSync(path.join(root, 'manual_parts', part), 'utf8').trim()).join('\n\n---\n\n');
const chapterPattern = /^#\s+(?:(?:Capítulo\s+)?(\d+)[.)]\s+(.+))$/gm;
const chapterMatches = [...rawContent.matchAll(chapterPattern)];
if (chapterMatches.length !== 34) throw new Error(`Se esperaban 34 capítulos canónicos; se encontraron ${chapterMatches.length}.`);
const chapterNumbers = chapterMatches.map((match) => Number(match[1]));
if (chapterNumbers.some((number, index) => number !== index + 1)) throw new Error('La secuencia de capítulos debe ser 1–34, sin huecos ni duplicados.');

const partNotes = new Map();
const partPattern = /^#\s+Parte\s+([^\r\n]+)$/gm;
for (const match of rawContent.matchAll(partPattern)) {
  const nextChapter = chapterPattern.exec(rawContent.slice(match.index + match[0].length));
  chapterPattern.lastIndex = 0;
  if (!nextChapter) continue;
  const chapterNumber = Number(nextChapter[1]);
  const note = match[1].replace(/^\d+[–—/-]+\d+\s*[:—–/-]?\s*/i, '').trim();
  if (note && chapterNumber >= 1 && chapterNumber <= 34) partNotes.set(chapterNumber, note);
}
const content = rawContent.replace(/^#\s+Parte\s+[^\r\n]+\r?\n/gm, '');

const sectionPattern = /^#\s+(Apéndices|Sección final|Casos reales)\b[^\r\n]*$/gm;
const specialKind = { Apéndices: 'appendix', 'Casos reales': 'cases', 'Sección final': 'protocol' };
const specialMatches = [...content.matchAll(sectionPattern)];
const pageStarts = [
  ...chapterMatches.map((match) => ({ index: content.indexOf(match[0]), kind: 'chapter', number: Number(match[1]), title: match[2].trim() })),
  ...specialMatches.map((match) => ({ index: match.index, kind: specialKind[match[1]], title: match[0].replace(/^#\s+/, '').trim() })),
].sort((a, b) => a.index - b.index);

if (pageStarts.length !== 37) throw new Error(`Se esperaban 34 capítulos, casos reales, apéndices y protocolo; se encontraron ${pageStarts.length} secciones.`);
const guideMarkdown = cleanSection(content.slice(0, pageStarts[0].index));
const pages = [{
  id: 'guia', file: 'guia.html', kind: 'guide', title: 'Presentación y guía', section: 'Inicio', markdown: guideMarkdown,
}];
for (let i = 0; i < pageStarts.length; i += 1) {
  const start = pageStarts[i];
  const end = i + 1 < pageStarts.length ? pageStarts[i + 1].index : content.length;
  const markdown = cleanSection(content.slice(start.index, end));
  const id = start.kind === 'chapter' ? `capitulo-${String(start.number).padStart(2, '0')}` : start.kind === 'appendix' ? 'apendices' : start.kind === 'cases' ? 'casos-reales' : 'protocolo';
  const file = `${id}.html`;
  pages.push({
    id,
    file,
    kind: start.kind,
    number: start.number,
    title: start.title || (start.kind === 'appendix' ? 'Apéndices y equivalencias' : start.kind === 'cases' ? 'Casos reales' : 'Análisis en 30 minutos, 1 hora y 3 horas'),
    section: sectionFor(start.number, start.kind),
    kicker: start.kind === 'chapter' ? partNotes.get(start.number) || '' : '',
    markdown,
  });
}
const splitSource = [guideMarkdown, ...pages.slice(1).map((page) => page.markdown)].join('\n');
const normalizeSource = (value) => value.replace(/^\s*---+\s*$/gm, '').replace(/\s+/g, ' ').trim();
if (normalizeSource(splitSource) !== normalizeSource(content)) throw new Error('El corte de páginas no conserva el contenido de las partes canónicas.');
const chapters = pages.filter((page) => page.kind === 'chapter');
const guide = pages.find((page) => page.kind === 'guide');
const appendices = pages.find((page) => page.kind === 'appendix');
const protocol = pages.find((page) => page.kind === 'protocol');
const casesPage = pages.find((page) => page.kind === 'cases');

function cleanSection(value) {
  return value.replace(/^\s*---+\s*$/gm, '').trim();
}
function sectionFor(number, kind) {
  if (kind === 'appendix') return 'Apéndices y referencia';
  if (kind === 'protocol') return 'Herramientas prácticas';
  if (kind === 'cases') return 'Casos reales';
  if (number <= 8) return 'Fundamentos';
  if (number <= 13) return 'Valoración';
  if (number <= 20) return 'Calidad y capital';
  if (number <= 25) return 'Riesgo e instrumentos';
  if (number <= 29) return 'Proceso de inversión';
  return 'Casos y referencia';
}
function slug(text) {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'seccion';
}
function escapeHtml(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
function inline(text) {
  let html = escapeHtml(text);
  const tokens = [];
  html = html.replace(/`([^`]+)`/g, (_, value) => { tokens.push(`<code>${value}</code>`); return `\u0000${tokens.length - 1}\u0000`; });
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => `<a href="${escapeHtml(href)}">${label}</a>`);
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__([^_]+)__/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  html = html.replace(/_([^_]+)_/g, '<em>$1</em>');
  return html.replace(/\u0000(\d+)\u0000/g, (_, index) => tokens[Number(index)]);
}
function mathText(raw) {
  let text = raw.replace(/\r/g, '').trim().replace(/^\\\[|\\\]$/g, '');
  text = text.replace(/\\begin\{[^}]+\}|\\end\{[^}]+\}/g, '');
  text = text.replace(/\\text\{([^}]*)\}|\\mathrm\{([^}]*)\}|\\operatorname\{([^}]*)\}/g, (_, a, b, c) => a || b || c || '');
  for (let i = 0; i < 5; i += 1) {
    text = text.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '($1) / ($2)');
    text = text.replace(/\\sqrt\{([^{}]*)\}/g, '√($1)');
  }
  return escapeHtml(text.replace(/\\left|\\right/g, '')
    .replace(/\\times/g, '×').replace(/\\cdot/g, '·')
    .replace(/\\Delta/g, 'Δ').replace(/\\sigma/g, 'σ').replace(/\\rho/g, 'ρ').replace(/\\pi/g, 'π')
    .replace(/\\sum/g, 'Σ').replace(/\\min/g, 'min').replace(/\\max/g, 'max')
    .replace(/\\approx/g, '≈').replace(/\\ge/g, '≥').replace(/\\le/g, '≤')
    .replace(/\\%/g, '%').replace(/\\,/g, ',').replace(/\\;/g, ' ').replace(/\\!/g, '')
    .replace(/\\mid/g, '|').replace(/\\to/g, '→').replace(/[{}]/g, '')
    .replace(/\\/g, '').replace(/\s+/g, ' ').trim());
}
function splitTableRow(row) {
  const cells = [];
  let cell = '';
  let inCode = false;
  const source = row.trim().replace(/^\|/, '').replace(/\|$/, '');
  for (let i = 0; i < source.length; i += 1) {
    const char = source[i];
    if (char === '`') inCode = !inCode;
    if (char === '|' && !inCode && source[i - 1] !== '\\') {
      cells.push(cell.trim());
      cell = '';
    } else {
      cell += char;
    }
  }
  cells.push(cell.trim());
  return cells.map((value) => value.replace(/\\\|/g, '|'));
}
function renderTable(lines, start, output) {
  const rows = [];
  let i = start;
  while (i < lines.length && /^\s*\|/.test(lines[i])) rows.push(lines[i++].trim());
  if (rows.length < 2) return i;
  const header = splitTableRow(rows[0]);
  const body = rows.slice(1).filter((row) => !/^\|?\s*:?-{3,}/.test(row)).map(splitTableRow);
  output.push('<div class="table-wrap" role="region" tabindex="0" aria-label="Tabla desplazable"><table><thead><tr>' + header.map((cell) => `<th>${inline(cell)}</th>`).join('') + '</tr></thead><tbody>');
  for (const row of body) output.push('<tr>' + header.map((_, index) => `<td>${inline(row[index] || '')}</td>`).join('') + '</tr>');
  output.push('</tbody></table></div>');
  return i;
}
function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const output = [];
  const headings = [];
  const usedIds = new Map();
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (/^\s*\\\[/.test(line)) {
      const math = [];
      while (i < lines.length) {
        const mathLine = lines[i++];
        if (/\\\]/.test(mathLine)) {
          const close = mathLine.indexOf('\\]');
          if (close >= 0) math.push(mathLine.slice(0, close));
          break;
        }
        math.push(mathLine.replace(/^\\\[/, ''));
      }
      output.push(`<div class="math" role="math">${mathText(math.join('\n'))}</div>`);
      continue;
    }
    if (/^\s*```/.test(line)) {
      const code = [];
      i += 1;
      while (i < lines.length && !/^\s*```/.test(lines[i])) code.push(lines[i++]);
      i += 1;
      output.push(`<pre class="code"><code>${escapeHtml(code.join('\n'))}</code></pre>`);
      continue;
    }
    if (/^\s*\|/.test(line)) { i = renderTable(lines, i, output); continue; }
    if (/^\s*(?:[-*+] |\d+[.)] )/.test(line)) {
      const ordered = /^\s*\d+[.)] /.test(line);
      const items = [];
      while (i < lines.length && (ordered ? /^\s*\d+[.)] /.test(lines[i]) : /^\s*[-*+] /.test(lines[i]))) {
        items.push(lines[i].replace(ordered ? /^\s*\d+[.)] / : /^\s*[-*+] /, ''));
        i += 1;
      }
      const tag = ordered ? 'ol' : 'ul';
      output.push(`<${tag}>${items.map((item) => {
        const checkbox = item.match(/^\[([ xX])\]\s*(.*)$/);
        if (!checkbox) return `<li>${inline(item)}</li>`;
        return `<li><span class="check">${checkbox[1].toLowerCase() === 'x' ? '☑' : '☐'}</span> ${inline(checkbox[2])}</li>`;
      }).join('')}</${tag}>`);
      continue;
    }
    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const title = heading[2].trim();
      let id = slug(title);
      const chapterNumber = title.match(/^(?:Capítulo\s+)?(\d+)(?:[.)](?!\d)|\s+[-—–:])?\s+/i);
      if (level === 1 && chapterNumber) id = `capitulo-${Number(chapterNumber[1])}`;
      const duplicates = usedIds.get(id) || 0;
      usedIds.set(id, duplicates + 1);
      if (duplicates) id = `${id}-${duplicates + 1}`;
      headings.push({ level, title, id });
      output.push(`<h${level} id="${escapeHtml(id)}">${inline(title)}</h${level}>`);
      i += 1;
      continue;
    }
    if (/^\s*>\s?/.test(line)) {
      const quote = [];
      while (i < lines.length && /^\s*>\s?/.test(lines[i])) quote.push(lines[i++].replace(/^\s*>\s?/, ''));
      output.push(`<blockquote>${inline(quote.join(' '))}</blockquote>`);
      continue;
    }
    if (/^\s*---+\s*$/.test(line)) { output.push('<hr>'); i += 1; continue; }
    if (/^\s*$/.test(line)) { i += 1; continue; }
    const paragraph = [];
    while (i < lines.length && !/^\s*$/.test(lines[i]) && !/^(#{1,6})\s+/.test(lines[i]) && !/^\s*\|/.test(lines[i]) && !/^\s*```/.test(lines[i]) && !/^\s*>/.test(lines[i]) && !/^\s*---+\s*$/.test(lines[i]) && !/^\s*(?:[-*+] |\d+[.)] )/.test(lines[i])) paragraph.push(lines[i++].trim());
    if (paragraph.length) output.push(`<p>${inline(paragraph.join(' '))}</p>`);
    else i += 1;
  }
  return { html: output.join('\n'), headings };
}
function plainText(markdown) {
  return markdown.replace(/^```[^\r\n]*\r?\n|^```\s*$/gm, ' ')
    .replace(/\\\[([\s\S]*?)\\\]/g, ' $1 ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[`*_>#|~]/g, ' ').replace(/\\/g, ' ')
    .replace(/\s+/g, ' ').trim();
}
function safeJson(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
}
function hrefFor(page) { return page ? page.file : 'index.html'; }
function chapterHref(number) { return `capitulo-${String(number).padStart(2, '0')}.html`; }
function sidebarHtml(activeId) {
  const groups = [
    { title: 'Inicio', entries: [guide] },
    { title: 'Fundamentos · 1–8', entries: chapters.filter((page) => page.number <= 8) },
    { title: 'Valoración · 9–13', entries: chapters.filter((page) => page.number >= 9 && page.number <= 13) },
    { title: 'Calidad y capital · 14–20', entries: chapters.filter((page) => page.number >= 14 && page.number <= 20) },
    { title: 'Riesgo e instrumentos · 21–25', entries: chapters.filter((page) => page.number >= 21 && page.number <= 25) },
    { title: 'Proceso · 26–29', entries: chapters.filter((page) => page.number >= 26 && page.number <= 29) },
    { title: 'Casos y referencia · 30–34', entries: chapters.filter((page) => page.number >= 30) },
    { title: 'Casos reales · informes públicos', entries: [casesPage] },
    { title: 'Consulta rápida', entries: [appendices, protocol] },
  ];
  return `<a class="sidebar-home ${activeId === 'inicio' ? 'is-active' : ''}" href="index.html"><span class="nav-number">⌂</span><span>Portada</span></a>${groups.map((group) => `<section class="nav-group"><h2>${escapeHtml(group.title)}</h2><ul>${group.entries.map((page) => {
    if (!page) return '';
    const number = page.number ? `<span class="nav-number">${String(page.number).padStart(2, '0')}</span>` : '<span class="nav-dot">•</span>';
    return `<li><a class="nav-link ${activeId === page.id ? 'is-active' : ''}" href="${hrefFor(page)}">${number}<span>${escapeHtml(page.kind === 'guide' ? 'Presentación' : page.title)}</span></a></li>`;
  }).join('')}</ul></section>`).join('')}`;
}
function tableOfContents(headings) {
  const items = headings.filter((heading) => heading.level === 2 || heading.level === 3);
  if (!items.length) return '<p class="toc-empty">Sin subsecciones.</p>';
  return `<ol>${items.map((heading) => `<li class="toc-level-${heading.level}"><a href="#${escapeHtml(heading.id)}">${escapeHtml(heading.title)}</a></li>`).join('')}</ol>`;
}
function footerHtml() {
  return '<footer class="site-footer"><span>Capítulos 1–34: datos ficticios (corte 31 dic 2025) · Casos reales: informes públicos (corte por empresa)</span><span>Edición: 24 sep 2026</span><a href="index.html">Volver a portada ↑</a></footer>';
}
function pageShell({ title, description, activeId, body, toc, page, isHome = false }) {
  const pageIndex = page ? pages.findIndex((item) => item.id === page.id) : -1;
  const prev = pageIndex > 0 ? pages[pageIndex - 1] : null;
  const next = pageIndex >= 0 && pageIndex + 1 < pages.length ? pages[pageIndex + 1] : null;
  const pageNav = page ? `<nav class="chapter-nav" aria-label="Navegación entre secciones">${prev ? `<a class="chapter-nav-card previous" href="${hrefFor(prev)}"><span>← Anterior</span><strong>${escapeHtml(prev.title)}</strong></a>` : '<span></span>'}${next ? `<a class="chapter-nav-card next" href="${hrefFor(next)}"><span>Siguiente →</span><strong>${escapeHtml(next.title)}</strong></a>` : '<span></span>'}</nav>` : '';
  const articleToc = !isHome ? `<aside class="contents-panel"><div class="contents-sticky"><p class="panel-kicker">EN ESTA PÁGINA</p>${toc}</div></aside>` : '';
  const pageLabel = page?.kind === 'chapter' ? `CAPÍTULO ${String(page.number).padStart(2, '0')} / 34` : page?.kind === 'protocol' ? 'GUÍA PRÁCTICA' : page?.kind === 'cases' ? 'DATOS REALES' : page?.kind === 'appendix' ? 'REFERENCIA' : 'ORIENTACIÓN';
  const kicker = page ? `<div class="reader-meta"><div class="reader-meta-heading"><span class="reader-meta-section">${escapeHtml(page.section)}</span></div>${page.kind === 'chapter' ? `<div class="chapter-progress"><span>${String(page.number).padStart(2, '0')}</span><progress max="34" value="${page.number}" aria-label="Avance del capítulo ${page.number} de 34">${page.number} de 34</progress><span class="chapter-progress-total">34</span></div>` : ''}${page.kicker ? `<p class="part-kicker">${escapeHtml(page.kicker)}</p>` : ''}</div>` : '';
  return `<!doctype html><html lang="es" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#171f1d"><meta name="description" content="${escapeHtml(description)}"><title>${escapeHtml(title)} · Manual de inversiones</title><link rel="icon" href="assets/mark.svg" type="image/svg+xml"><link rel="stylesheet" href="assets/site.css"></head><body data-page="${escapeHtml(activeId)}" class="${isHome ? 'home-page' : 'reader-page'}"><a class="skip-link" href="#contenido">Saltar al contenido</a><div class="reading-progress" id="readingProgress"></div><header class="topbar"><a class="brand" href="index.html" aria-label="Manual de inversiones, inicio"><span class="brand-mark">V</span><span class="brand-copy"><strong>MANUAL DE INVERSIÓN</strong><small>VALOR · ANÁLISIS · CRITERIO</small></span></a><div class="topbar-tools"><div class="search-box"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"></circle><path d="m16 16 5 5"></path></svg><input id="siteSearch" type="search" placeholder="Buscar en el manual…" aria-label="Buscar en todo el manual" autocomplete="off"><kbd>Ctrl/⌘&nbsp;K</kbd><div class="search-results" id="searchResults" role="listbox" aria-live="polite" aria-label="Resultados de búsqueda" hidden></div></div><button class="icon-button menu-toggle" id="menuToggle" type="button" aria-label="Abrir navegación" aria-expanded="false"><span></span><span></span></button><button class="icon-button theme-toggle" id="themeToggle" type="button" aria-label="Cambiar tema" title="Cambiar tema"><span class="theme-sun">☼</span><span class="theme-moon">◐</span></button><button class="print-button" type="button" onclick="window.print()"><span>Imprimir</span><span aria-hidden="true">↗</span></button></div></header><div class="mobile-scrim" id="mobileScrim"></div><div class="site-layout"><aside class="sidebar" id="sidebar"><div class="sidebar-top"><p class="panel-kicker">CONTENIDO</p><button class="sidebar-close" id="sidebarClose" type="button" aria-label="Cerrar navegación">×</button></div><nav class="sidebar-nav" aria-label="Índice principal">${sidebarHtml(activeId)}</nav><div class="sidebar-note"><span class="status-dot"></span><span>Edición revisada<br><strong>24 septiembre 2026</strong></span></div></aside><main class="main-column" id="contenido"><div class="page-breadcrumb"><a href="index.html">Inicio</a><span>/</span><span>${escapeHtml(isHome ? 'Manual completo' : pageLabel)}</span></div>${kicker}<article class="prose ${isHome ? 'home-content' : ''}">${body}</article>${pageNav}${footerHtml()}</main>${articleToc}</div><script src="assets/search-index.js"></script><script src="assets/site.js" defer></script></body></html>`;
}
function plateMarkup() {
  const { empresa, valor } = placa();
  const precio = empresa.mercado.precio;
  const bajo = valor.ivBajo;
  const alto = valor.ivAlto;
  const width = 366;
  const pad = 4;
  const scaleMax = Math.max(precio, bajo, alto) * 1.08;
  const x = (v) => pad + (v / scaleMax) * (width - pad * 2);
  const r = (v) => Math.round(v * 10) / 10;
  const xp = x(precio);
  const xb = x(bajo);
  const xa = x(alto);
  const inside = xp - pad >= 52;
  const priceX = inside ? xp - 8 : xp + 6;
  const priceAnchor = inside ? 'end' : 'start';
  const relacion = precio < bajo ? 'DESCUENTO' : precio > alto ? 'PRIMA' : 'DENTRO';
  const gapMid = (Math.min(xp, xb) + Math.max(xp, xb)) / 2;
  const bracket = relacion === 'DENTRO' ? '' : `<path d="M${r(xp)} 50 L${r(xp)} 56 L${r(xb)} 56 L${r(xb)} 50" fill="none" class="plate-gold" stroke="currentColor" stroke-width="1"/>`;
  const highAnchor = xa + 42 > width - 4 ? 'end' : 'start';
  const highX = highAnchor === 'end' ? xa : Math.min(xa + 4, width - 4);
  const lectura = `Precio ${formatNum(precio, 2)} frente a un rango de ${formatNum(bajo, 2)} a ${formatNum(alto, 2)}. Margen conservador ${formatPct(valor.mosBajo)}, calculado contra el extremo bajo.`;
  const footLeft = empresa.provisional
    ? 'ANDAMIAJE · NO ES UNA COTIZACIÓN'
    : `${escapeHtml(empresa.ticker)} · ${escapeHtml(empresa.mercado.fechaPrecio)}`;
  const notaAlto = valor.mosAlto === null
    ? 'El extremo alto no tiene un margen expresable.'
    : `Contra el extremo alto el margen es ${formatPct(valor.mosAlto)}. El valor intrínseco es un intervalo, y se cotiza contra el extremo conservador.`;
  return `<div class="valuation-plate" data-plate-id="${escapeHtml(empresa.id)}" data-plate-price="${precio}" data-plate-iv-low="${bajo.toFixed(4)}" data-plate-iv-high="${alto.toFixed(4)}" data-plate-mos="${valor.mosBajo.toFixed(6)}">
          <div class="plate-top"><span>LECTURA DEL VALOR</span><span>PRECIO ↔ VALOR</span></div>
          <div class="plate-figure" role="group" aria-label="${escapeHtml(lectura)}">
            <svg class="plate-svg" viewBox="0 0 366 124" aria-hidden="true">
              <line x1="${r(xp)}" y1="8" x2="${r(xp)}" y2="104" stroke="var(--line)" stroke-width="1"/>
              <line x1="${r(xb)}" y1="8" x2="${r(xb)}" y2="104" stroke="var(--line)" stroke-width="1"/>
              <text x="0" y="12" class="plate-muted" font-size="8.5" font-weight="700" letter-spacing="1">PRECIO DE MERCADO</text>
              <rect x="0" y="18" width="${r(Math.max(xp, 1))}" height="15" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
              <text x="${r(priceX)}" y="29.5" class="plate-ink" font-size="12" font-weight="700" text-anchor="${priceAnchor}">${formatNum(precio, 0)}</text>
              <text x="${r(gapMid)}" y="47" class="plate-gold" font-size="8" font-weight="700" text-anchor="middle" letter-spacing=".6">${relacion}</text>
              ${bracket}
              <text x="0" y="71" class="plate-teal" font-size="8.5" font-weight="700" letter-spacing="1">VALOR INTRÍNSECO ESTIMADO</text>
              <rect x="0" y="77" width="${r(x(scaleMax))}" height="27" fill="var(--teal)" opacity=".10" stroke="var(--line)" stroke-width="1"/>
              <rect x="${r(Math.min(xb, xa))}" y="77" width="${r(Math.max(xa - xb, 1))}" height="27" fill="var(--teal)" opacity=".40" stroke="var(--teal)" stroke-width="1"/>
              <text x="${r(xb)}" y="118" class="plate-teal" font-size="11" font-weight="700" text-anchor="end">${formatNum(bajo, 0)}</text>
              <text x="${r(highX)}" y="118" class="plate-teal" font-size="11" font-weight="700" text-anchor="${highAnchor}">${formatNum(alto, 0)}</text>
            </svg>
            <div class="plate-read">
              <div><span class="k">PRECIO</span><strong>${formatNum(precio, 2)}</strong><small>De mercado</small></div>
              <div><span class="k">IV (RANGO)</span><strong class="plate-iv">${formatNum(bajo, 2)}–${formatNum(alto, 2)}</strong><small>Estimado, no un punto</small></div>
              <div><span class="k">MARGEN MoS</span><strong class="plate-mos">${formatPct(valor.mosBajo)}</strong><small>Contra el extremo bajo</small></div>
            </div>
            <div class="plate-deriv">
              <span>MoS = (IV − precio) / IV = (${formatNum(bajo, 2)} − ${formatNum(precio, 2)}) / ${formatNum(bajo, 2)} = <b>${formatPct(valor.mosBajo)}</b></span>
              <small>${escapeHtml(notaAlto)}</small>
            </div>
          </div>
          <div class="plate-foot"><span>${footLeft}</span><a href="casos-reales.html">Ver el cálculo →</a></div>
        </div>`;
}
function renderHome() {
  const cards = [
    { eyebrow: '01—08', title: 'Fundamentos', desc: 'Riesgo, crecimiento, interés compuesto, valor presente y DCF.', href: chapterHref(1), icon: '01' },
    { eyebrow: '09—13', title: 'Valoración', desc: 'Owner Earnings, flujo libre, múltiplos y dividendos.', href: chapterHref(9), icon: '02' },
    { eyebrow: '14—20', title: 'Calidad y capital', desc: 'Ventajas competitivas, gestión, recompras, ROIC y WACC.', href: chapterHref(14), icon: '03' },
    { eyebrow: '21—25', title: 'Riesgo e instrumentos', desc: 'Inflación, cartera, bonos, ETF y riesgo de mercado.', href: chapterHref(21), icon: '04' },
    { eyebrow: '26—29', title: 'Proceso de inversión', desc: 'Investigación, checklist, trampas de valor y sesgos.', href: chapterHref(26), icon: '05' },
    { eyebrow: '30—34', title: 'Casos y referencia', desc: 'Cinco casos ficticios, tabla maestra, glosario y reglas. Casos reales aparte con datos de mercado.', href: chapterHref(30), icon: '06' },
  ];
  const quick = [
    { label: 'Empezar por la guía', detail: 'Cómo usar el manual y sus convenciones', href: 'guia.html', icon: '↗' },
    { label: 'Ver los casos completos', detail: 'Cinco empresas ficticias y sus DCF', href: chapterHref(30), icon: '↗' },
    { label: 'Ver los casos reales', detail: 'Seis empresas con informes públicos y DCF', href: 'casos-reales.html', icon: '↗' },
    { label: 'Abrir el protocolo rápido', detail: '30 minutos · 1 hora · 3 horas', href: protocol.file, icon: '↗' },
  ];
  return `
    <section class="hero">
      <div class="hero-grid">
        <div class="hero-copy">
          <p class="hero-eyebrow"><span class="hero-dot"></span> GUÍA DE ESTUDIO Y CONSULTA</p>
          <h1>Invertir con<br><em>criterio y valor.</em></h1>
          <p class="hero-lead">Un sistema práctico para leer estados financieros, valorar negocios y tomar decisiones bajo incertidumbre.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="guia.html">Explorar el manual <span>→</span></a>
            <a class="button button-quiet" href="${protocol.file}">Análisis en 30 min <span>↗</span></a>
          </div>
          <div class="hero-meta"><span>34 capítulos</span><span>·</span><span>Casos ficticios</span><span>·</span><span>Casos reales</span><span>·</span><span>Edición revisada</span></div>
        </div>
        ${plateMarkup()}
      </div>
      <div class="hero-foot"><span>EDICIÓN FINANCIERA Y EDITORIAL</span><span>24 SEP 2026</span></div>
    </section>
    <section class="stats-row" aria-label="Datos de la edición">
      <div><strong>34</strong><span>capítulos</span></div>
      <div><strong>5</strong><span>casos ficticios</span></div>
      <div><strong>6</strong><span>casos reales</span></div>
      <div><strong>2026</strong><span>corte de mercado</span></div>
    </section>
    <section class="home-section">
      <div class="section-heading">
        <div><p class="section-eyebrow">RECORRIDO</p><h2>Un método, de principio a fin.</h2></div>
        <a class="text-link" href="guia.html">Cómo usar esta guía <span>→</span></a>
      </div>
      <div class="topic-grid">${cards.map((card) => `<a class="topic-card" href="${card.href}">
        <span class="topic-icon">${card.icon}</span>
        <span class="topic-range">${card.eyebrow}</span>
        <h3>${card.title}</h3>
        <p>${card.desc}</p>
        <span class="topic-arrow" aria-hidden="true">↗</span>
      </a>`).join('')}</div>
    </section>
    <section class="quick-section">
      <div class="quick-copy">
        <p class="section-eyebrow">IR AL GRANO</p>
        <h2>¿Por dónde quieres empezar?</h2>
        <p>Busca un concepto, sigue los capítulos en orden o ve directamente al caso que necesitas consultar.</p>
      </div>
      <div class="quick-links">${quick.map((item) => `<a class="quick-link" href="${item.href}">
        <span class="quick-copy"><strong>${item.label}</strong><small>${item.detail}</small></span>
        <span class="quick-arrow" aria-hidden="true">${item.icon}</span>
      </a>`).join('')}</div>
    </section>
    <section class="disclaimer-strip">
      <span class="disclaimer-mark" aria-hidden="true">i</span>
      <p><strong>Material educativo.</strong> Capítulos 1–34 y apéndices: datos ficticios (corte 31 dic 2025). Casos reales: datos de informes públicos, con ejercicio, auditoría, fuente y fecha de consulta por empresa. No es asesoramiento financiero ni una recomendación de compra.</p>
      <a href="${appendices.file}">Convenciones y fuentes →</a>
    </section>`;
}

function headingIdMap(pagesWithHtml) {
  const map = new Map();
  for (const page of pagesWithHtml) for (const heading of page.headings) {
    if (!map.has(heading.id)) map.set(heading.id, page.file);
    else map.set(heading.id, null);
  }
  return map;
}
function rewriteLinks(html, currentFile, ids) {
  return html.replace(/href="#([^"]+)"/g, (whole, fragment) => {
    const destination = ids.get(fragment);
    if (!destination || destination === currentFile) return whole;
    return `href="${destination}#${escapeHtml(fragment)}"`;
  });
}
function writeFile(file, text) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text, 'utf8');
}

const renderedPages = pages.map((page) => ({ ...page, ...markdownToHtml(page.markdown), text: plainText(page.markdown) }));
const ids = headingIdMap(renderedPages);
const searchDocuments = renderedPages.map((page) => ({
  title: page.title,
  kind: page.kind,
  number: page.number || null,
  section: page.section,
  href: page.file,
  text: page.text,
}));
fs.mkdirSync(path.join(output, 'assets'), { recursive: true });
for (const asset of ['site.css', 'site.js', 'mark.svg']) {
  const assetPath = path.join(__dirname, 'site_template', asset);
  if (!fs.existsSync(assetPath)) throw new Error(`Falta la plantilla de sitio ${assetPath}`);
  fs.copyFileSync(assetPath, path.join(output, 'assets', asset));
}

const homeHtml = renderHome();
writeFile(path.join(output, 'index.html'), pageShell({
  title: 'Manual profesional de inversiones y Value Investing',
  description: 'Guía educativa de análisis fundamental, valoración, gestión del riesgo y Value Investing.',
  activeId: 'inicio', body: homeHtml, toc: '', isHome: true,
}));
for (const page of renderedPages) {
  const body = rewriteLinks(page.html, page.file, ids);
  const label = page.kind === 'chapter' ? `Capítulo ${page.number}: ${page.title}` : page.title;
  const html = pageShell({
    title: label,
    description: `${label}. Manual educativo de inversiones y análisis financiero.`,
    activeId: page.id,
    body,
    toc: tableOfContents(page.headings),
    page,
  });
  writeFile(path.join(output, page.file), html);
}
writeFile(path.join(output, '.nojekyll'), '');
writeFile(path.join(output, 'assets', 'search-index.js'), `window.MANUAL_SEARCH_INDEX=${safeJson(searchDocuments)};\n`);
console.log(`Sitio estático generado en ${output}`);
console.log(`Páginas: ${renderedPages.length + 1} (guía, 34 capítulos, casos reales, apéndices, protocolo y portada); partes fuente: ${parts.length}.`);
