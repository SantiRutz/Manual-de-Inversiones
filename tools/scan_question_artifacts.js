// Escanea placeholders y marcadores de edición, no preguntas normales en español.
const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, '..', process.argv[2] || 'MANUAL_VALUE_INVESTING_Y_ANALISIS_FINANCIERO_REVISADO.md');
const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
const bad = /\bTODO\b|\bTBD\b|pendiente de (?:verificaci[oó]n|completar)|fuente pendiente|\?\?\?|\[\.\.\.\]|lorem ipsum/i;
const englishMarker = /\bTODO\b|\bTBD\b/;
const badLine = (line) => englishMarker.test(line) || bad.test(line.replace(/\btodo\b/gi, ''));
let hits = 0;
lines.forEach((line, i) => { if (badLine(line)) { console.log(`${i + 1}: ${line}`); hits += 1; } });
console.log(`placeholders: ${hits}`);
process.exitCode = hits ? 1 : 0;
