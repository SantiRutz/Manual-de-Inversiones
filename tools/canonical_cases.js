// Verificación independiente de los cinco casos canónicos del capítulo 30.
// Todos los datos son ficticios. Los importes están en USD millones salvo
// precio, EPS y DPS, que están en USD por acción.
const assert = require('assert');
const cases = [
  { key: 'A', price: 220, shares: 100, revenue: 5000, priorRevenue: 4600, revenue2021: 3500, grossProfit: 3100, ebit: 1250, da: 100, ebitda: 1350, netIncome: 1000, equity: 4000, equityBegin: 3600, debt: 3000, cash: 800, cfo: 1050, capex: 200, dps: 2.4, investedEnd: 6200, investedBegin: 5900, fcff: 900, wacc: 0.08, terminalGrowth: 0.03, growth: 0.07 },
  { key: 'B', price: 3.5, shares: 200, revenue: 2000, priorRevenue: 2100, revenue2021: 1810, grossProfit: 560, ebit: 160, da: 40, ebitda: 200, netIncome: 60, equity: 1500, equityBegin: 1450, debt: 1100, cash: 300, cfo: 160, capex: 100, dps: 0.6, investedEnd: 2300, investedBegin: 2250, fcff: 100, wacc: 0.09, terminalGrowth: 0.025, growth: 0.03 },
  { key: 'C', price: 32, shares: 100, revenue: 3000, priorRevenue: 2600, revenue2021: 1900, grossProfit: 1350, ebit: 540, da: 60, ebitda: 600, netIncome: 400, equity: 2500, equityBegin: 2300, debt: 1500, cash: 500, cfo: 480, capex: 100, dps: 1.2, investedEnd: 3500, investedBegin: 3300, fcff: 300, wacc: 0.10, terminalGrowth: 0.025, growth: 0.08 },
  { key: 'D', price: 0.8, shares: 100, revenue: 1500, priorRevenue: 2000, revenue2021: 3000, grossProfit: 300, ebit: 45, da: 15, ebitda: 60, netIncome: 9.375, equity: 800, equityBegin: 850, debt: 2000, cash: 100, cfo: 10, capex: 30, dps: 0.2, investedEnd: 2700, investedBegin: 2850, fcff: 5, wacc: 0.12, terminalGrowth: 0.01, growth: -0.05 },
  { key: 'E', price: 20, shares: 100, revenue: 1200, priorRevenue: 800, revenue2021: 350, grossProfit: 660, ebit: 144, da: 36, ebitda: 180, netIncome: 90, equity: 1000, equityBegin: 800, debt: 800, cash: 200, cfo: 150, capex: 50, dps: 0.05, investedEnd: 1600, investedBegin: 1400, fcff: 120, wacc: 0.11, terminalGrowth: 0.04, growth: 0.20 },
];

function dcf(c) {
  let pvExplicit = 0;
  let fcf = c.fcff;
  const flows = [];
  for (let t = 1; t <= 5; t += 1) {
    fcf *= 1 + c.growth;
    const pv = fcf / ((1 + c.wacc) ** t);
    pvExplicit += pv;
    flows.push({ year: t, fcf, pv });
  }
  const tv = fcf * (1 + c.terminalGrowth) / (c.wacc - c.terminalGrowth);
  const pvTv = tv / ((1 + c.wacc) ** 5);
  const ev = pvExplicit + pvTv;
  const netDebt = c.debt - c.cash;
  const equityValue = ev - netDebt;
  const perShare = equityValue / c.shares;
  const mos = perShare > 0 ? (perShare - c.price) / perShare : null;
  return { pvExplicit, tv, pvTv, ev, netDebt, equityValue, perShare, mos, flows };
}

const expected = {
  A: { cagr: 0.0932651139, ev: 24200, roe: 0.2631578947, roic: 0.1549586777, fcfYield: 0.0386363636, pe: 22, pb: 5.5, evEbitda: 17.9259259259, perShare: 198.7394776, mos: -0.1069768453 },
  B: { cagr: 0.0252690683, ev: 1500, roe: 0.0406779661, roic: 0.0527472527, fcfYield: 0.0857142857, pe: 11.6666666667, pb: 0.4666666667, evEbitda: 7.5, perShare: 4.0568853, mos: 0.1372691688 },
  C: { cagr: 0.1209646403, ev: 4200, roe: 0.1666666667, roic: 0.1191176471, fcfYield: 0.11875, pe: 8, pb: 1.28, evEbitda: 7, perShare: 41.6072069, mos: 0.2309024705 },
  D: { cagr: -0.1591035847, ev: 1980, roe: 0.0113636364, roic: 0.0121621622, fcfYield: -0.25, pe: 8.5333333333, pb: 0.1, evEbitda: 33, perShare: -18.6416976, mos: null },
  E: { cagr: 0.3607498666, ev: 2600, roe: 0.1, roic: 0.072, fcfYield: 0.05, pe: 22.2222222222, pb: 2, evEbitda: 14.4444444444, perShare: 27.9545435, mos: 0.2845527947 },
};
const close = (actual, wanted, label) => assert(Math.abs(actual - wanted) < 1e-6, `${label}: ${actual} != ${wanted}`);
let ok = true;
for (const c of cases) {
  const marketCap = c.price * c.shares;
  const netDebt = c.debt - c.cash;
  const ev = marketCap + netDebt;
  const roe = c.netIncome / ((c.equity + c.equityBegin) / 2);
  const nopat = c.ebit * 0.75;
  const roic = nopat / ((c.investedEnd + c.investedBegin) / 2);
  const cagr = (c.revenue / c.revenue2021) ** (1 / 4) - 1;
  const value = dcf(c);
  const result = {
    key: c.key,
    revenueGrowth: c.revenue / c.priorRevenue - 1,
    cagr,
    marketCap,
    netDebt,
    ev,
    roe,
    roic,
    fcf: c.cfo - c.capex,
    fcfYield: (c.cfo - c.capex) / marketCap,
    pe: c.price / (c.netIncome / c.shares),
    pb: marketCap / c.equity,
    evEbitda: ev / c.ebitda,
    dcf: value,
  };
  const e = expected[c.key];
  close(result.cagr, e.cagr, `${c.key} CAGR`);
  close(result.ev, e.ev, `${c.key} EV`);
  close(result.roe, e.roe, `${c.key} ROE`);
  close(result.roic, e.roic, `${c.key} ROIC`);
  close(result.fcfYield, e.fcfYield, `${c.key} FCF yield`);
  close(result.pe, e.pe, `${c.key} P/E`);
  close(result.pb, e.pb, `${c.key} P/B`);
  close(result.evEbitda, e.evEbitda, `${c.key} EV/EBITDA`);
  close(result.dcf.perShare, e.perShare, `${c.key} IV/acción`);
  if (e.mos === null) assert(result.dcf.mos === null, `${c.key}: MoS de IV negativa`);
  else close(result.dcf.mos, e.mos, `${c.key} MoS`);
  console.log(JSON.stringify(result, null, 2));
  if (c.wacc <= c.terminalGrowth) ok = false;
}
if (!ok) {
  console.error('Fallo: algún caso no cumple WACC > g.');
  process.exit(1);
}
