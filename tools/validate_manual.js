const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, '..', process.argv[2] || 'MANUAL_VALUE_INVESTING_Y_ANALISIS_FINANCIERO_REVISADO.md');
if (!fs.existsSync(file)) { console.error('No existe el master; ejecuta build_manual.js primero.'); process.exit(2); }
const text = fs.readFileSync(file, 'utf8');
const root = path.resolve(__dirname, '..');
const buildScript = fs.readFileSync(path.join(__dirname, 'build_manual.js'), 'utf8');
const partMatches = [...buildScript.matchAll(/'manual_parts\/([^']+\.md)'/g)].map((m) => m[1]);
const canonicalParts = partMatches.length ? partMatches : [];
const rebuilt = canonicalParts.map((p) => fs.readFileSync(path.join(root, 'manual_parts', p), 'utf8').trim()).join('\n\n---\n\n') + '\n';
const sourceParity = rebuilt === text;
if (!sourceParity) console.error('PARIDAD DE FUENTES: el master no coincide con las partes canónicas');
const required = [
  'FUNDAMENTOS DE INVERSIÓN', 'VALUE INVESTING', 'ESTADOS FINANCIEROS', 'RATIOS FINANCIEROS',
  'FÓRMULAS DE CRECIMIENTO', 'INTERÉS COMPUESTO', 'VALOR PRESENTE', 'DCF', 'MARGEN DE SEGURIDAD',
  'OWNER EARNINGS', 'FREE CASH FLOW', 'VALUACIÓN POR MÚLTIPLOS', 'DIVIDENDOS', 'CALIDAD DEL NEGOCIO',
  'MANAGEMENT', 'RECOMPRAS DE ACCIONES', 'ROIC', 'WACC', 'CAPM', 'BETA', 'INFLACIÓN', 'RIESGO Y RETORNO',
  'PORTAFOLIO', 'BONOS', 'ETF', 'ANÁLISIS DE UNA EMPRESA', 'CHECKLIST', 'VALUE TRAPS', 'ERRORES DEL INVERSOR',
  'EJEMPLOS COMPLETOS', 'TABLA MAESTRA', 'GLOSARIO', 'REGLAS IMPORTANTES', 'FORMATO', 'CÓMO ANALIZAR UNA ACCIÓN DESDE CERO',
  'CASOS REALES', 'SESGO DE SUPERVIVENCIA'
];
const terms = ['ROE','ROA','ROIC','ROCE','Gross Margin','Operating Margin','Net Margin','EBITDA Margin','FCF Margin','Current Ratio','Quick Ratio','Cash Ratio','Working Capital','Debt-to-Equity','Debt-to-Assets','Net Debt','Net Debt/EBITDA','Debt/FCF','Interest Coverage','DSCR','Asset Turnover','Inventory Turnover','Receivables Turnover','Payables Turnover','DIO','DSO','DPO','Cash Conversion Cycle','P/E','Forward P/E','PEG','P/B','P/S','EV/EBITDA','EV/EBIT','EV/Sales','FCF Yield','Earnings Yield','Dividend Yield','Revenue Growth','EPS Growth','FCF Growth','Book Value Growth','CAGR','Owner Earnings','Terminal Value','Intrinsic Value','Margin of Safety','NOPAT','Standard Deviation','Variance','Sharpe','Sortino','Maximum Drawdown','Gross Profit','Operating Income','EBIT','EBITDA','EBT','Net Income','EPS','CFO','CFI','CFF','CapEx','Free Cash Flow','Debt Service Coverage Ratio','Days Inventory Outstanding','Days Sales Outstanding','Days Payable Outstanding','Expected Return','Asset Allocation','Correlation','Portfolio Return','Rebalancing','Face Value','Coupon','Coupon Rate','YTM','Duration','Maturity','Credit Risk','Expense Ratio','Tracking Error','WACC','CAPM','Beta','Real Return','Value Trap','Moat'];
let ok = sourceParity;
for (const x of required) if (!text.toLowerCase().includes(x.toLowerCase())) { console.error('FALTA:', x); ok = false; }
for (const x of terms) if (!text.toLowerCase().includes(x.toLowerCase())) { console.error('TÉRMINO AUSENTE:', x); ok = false; }
const suspicious = ['apparently', 'Tenshoots', 'nirentabilidades', 'resbal', 'deon.', 'economies', 'noapalancable', 'accompanied', '0,04826125', '6.167,78', '7,32 %', 'ROICFuture', 'retornocheckout', 'no secante', 'antes del movimientos', 'no una sustituto', 'reporta la grupo', '14,6870×1,025', '1 − IV/Price', '− acciones en tesorería', 'capital intensity', 'rates;', '�', '水准', '三维', '还会'];
const requiredFormulas = [
  'FCF histórico apalancado = CFO − CapEx',
  'FCFF = NOPAT + D&A − CapEx − ΔNWC',
  'FCFE',
  'FCFF_6/(WACC−g)',
  'Identidad de FCFF',
  'Margen de seguridad = (Valor intrínseco',
  'WACC',
  'ROIC',
  'Cómo analizar una acción desde cero en 30 minutos, 1 hora y 3 horas'
];
for (const x of requiredFormulas) if (!text.toLowerCase().includes(x.toLowerCase())) { console.error('FÓRMULA O SECCIÓN AUSENTE:', x); ok = false; }
for (const x of suspicious) if (text.includes(x)) { console.error('POSIBLE ARTEFACTO:', x); ok = false; }
if (/[\u0400-\u04ff\u3000-\u9fff\uac00-\ud7af]/u.test(text)) { console.error('POSIBLES CARACTERES NO LATINOS NO DESEADOS'); ok = false; }
const fences = (text.match(/^```/gm) || []).length;
if (fences % 2) { console.error('Fences de código impares:', fences); ok = false; }
const headings = (text.match(/^#{1,6}\s+/gm) || []).length;
const chapterNums = [...text.matchAll(/^#\s+(.+)$/gm)].map((m) => m[1]).map((h) => h.match(/^(?:Cap[^0-9]*)?(\d+)/i)).filter(Boolean).map((m) => Number(m[1]));
const chapterSet = new Set(chapterNums);
const missingChapters = Array.from({ length: 34 }, (_, i) => i + 1).filter((n) => !chapterSet.has(n));
const duplicateChapters = chapterNums.filter((n, i) => chapterNums.indexOf(n) !== i);
if (missingChapters.length || duplicateChapters.length) { console.error('Numeración de capítulos incompleta o duplicada', { missingChapters, duplicateChapters }); ok = false; }
const words = text.replace(/[`*_>#|]/g, ' ').split(/\s+/).filter(Boolean).length;
console.log(JSON.stringify({ok, sourceParity, canonicalParts:canonicalParts.length, chapters:chapterNums.length, chars:text.length, words, headings, fences, required:required.length, terms:terms.length}, null, 2));
process.exit(ok ? 0 : 1);
