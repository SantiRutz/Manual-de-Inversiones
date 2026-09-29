// Comprobaciones numéricas independientes de los ejemplos revisados.
// Las tolerancias se aplican a resultados redondeados del manual.
const assert = require('assert');
const close = (actual, expected, tolerance, label) => {
  assert(Math.abs(actual - expected) <= tolerance, `${label}: ${actual} != ${expected}`);
  console.log(`OK ${label}: ${actual}`);
};

close((1.5 / 1.4) - 1, 0.0714285714, 1e-9, 'retorno real 50%/40%');
const variance = 0.20 * (-0.05 - 0.075) ** 2 + 0.50 * (0.08 - 0.075) ** 2 + 0.30 * (0.15 - 0.075) ** 2;
close(variance, 0.004825, 1e-12, 'varianza decimal');
const ordinary = 500 * ((1.005 ** 120) - 1) / 0.005;
close(ordinary, 81939.67, 0.01, 'anualidad ordinaria');
const due = ordinary * 1.005;
close(due, 82349.37, 0.01, 'anualidad anticipada');
close(5.2 * 4.75 / 25 - 1, -0.012, 1e-12, 'retorno precio con P/E');
close(200 + 20 - 25, 195, 1e-12, 'CapEx amplio neto');
close(959 * (-4.16102387) * 0.01, -39.9041, 0.001, 'sensibilidad de duración');

const cases = [
  { key: 'A', rev: 5000, rev2021: 3500, cagr: 0.0932651139, iv: 198.7394776, price: 220, mos: -0.1069768453 },
  { key: 'B', rev: 2000, rev2021: 1810, cagr: 0.0252690683, iv: 4.0568853, price: 3.5, mos: 0.1372691688 },
  { key: 'C', rev: 3000, rev2021: 1900, cagr: 0.1209646403, iv: 41.6072069, price: 32, mos: 0.2309024705 },
  { key: 'D', rev: 1500, rev2021: 3000, cagr: -0.1591035847, iv: -18.6416976, price: 0.8, mos: null },
  { key: 'E', rev: 1200, rev2021: 350, cagr: 0.3607498666, iv: 27.9545435, price: 20, mos: 0.2845527947 },
];
for (const c of cases) {
  close((c.rev / c.rev2021) ** (1 / 4) - 1, c.cagr, 1e-8, `CAGR caso ${c.key}`);
  if (c.mos === null) assert(c.iv < 0, `caso ${c.key}: IV negativa`);
  else close((c.iv - c.price) / c.iv, c.mos, 1e-7, `MoS caso ${c.key}`);
}

const novaPvExplicit = 42.1029;
const novaTerminalFcf = 14.6870;
const novaTv = novaTerminalFcf / (0.09 - 0.025);
const novaPvTerminal = novaTv / (1.09 ** 5);
const novaEquity = novaPvExplicit + novaPvTerminal - 28 + 8;
close(novaTv, 225.9538, 0.001, 'TV normalizado Nova');
close(novaPvTerminal, 146.8545, 0.001, 'PV del TV normalizado Nova');
close(novaEquity / 10, 16.8957, 0.001, 'valor por acción con TV normalizado Nova');
console.log('Todas las comprobaciones revisadas pasan.');
