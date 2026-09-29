// Escaneo de artefactos en las fuentes canónicas incluidas por el ensamblador.
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const files = [
  'parte_00_preliminares.md', 'parte_01_02.md', 'parte_03.md', 'parte_04.md', 'parte_05_08.md',
  'parte_09_13.md', 'parte_14_20.md', 'parte_21_25.md', 'parte_26_29.md', 'parte_30.md',
  'parte_31_34.md', 'parte_35_aliases.md', 'parte_36_apendices.md', 'parte_37_protocolo_tiempos.md',
];
const bad = /[\u3400-\u9fff\uf900-\ufaff\u0400-\u04ff]|Tenshoots|accompanied|WTF|Prosecutions|hiddenING|ROICFuture|retornocheckout|no secante|antes del movimientos|no una sustituto|reporta la grupo|14,6870×1,025|1 − IV\/Price|capital intensity|rates;|�/i;
let hits = 0;
for (const file of files) {
  const p = path.join(root, 'manual_parts', file);
  const lines = fs.readFileSync(p, 'utf8').split(/\r?\n/);
  lines.forEach((line, i) => {
    if (bad.test(line)) { console.log(`${file}:${i + 1}: ${line}`); hits += 1; }
  });
}
console.log(`artefactos: ${hits}`);
process.exitCode = hits ? 1 : 0;
