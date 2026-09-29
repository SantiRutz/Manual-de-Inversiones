// Sensibilidad del caso canónico C del capítulo 30; USD por acción salvo indicación.
const assert = require('assert');
function value(fcf, growth, wacc, terminalGrowth, netDebt, shares) {
  let pv = 0;
  for (let t = 1; t <= 5; t++) pv += fcf * (1 + growth) ** t / (1 + wacc) ** t;
  const tv = fcf * (1 + growth) ** 5 * (1 + terminalGrowth) / (wacc - terminalGrowth);
  return (pv + tv / (1 + wacc) ** 5 - netDebt) / shares;
}
assert(Math.abs(value(300, .08, .10, .025, 1000, 100) - 41.6072069) < 1e-6, 'El valor central no coincide');
assert(Math.abs(value(300, .08, .10, .035, 1000, 100) - 47.78) < 0.01, 'La sensibilidad terminal no coincide');
const growths=[.04,.06,.08,.10,.12], waccs=[.09,.10,.11,.12,.13];
console.log('Crecimiento\\WACC', ...waccs.map(x=>`${(x*100).toFixed(0)}%`).join('\t'));
for(const g of growths) console.log(`${(g*100).toFixed(0)}%\t`+waccs.map(w=>value(300,g,w,.025,1000,100).toFixed(2)).join('\t'));
console.log('\nTerminal growth con g=8%, WACC=10%');
for(const t of [.015,.02,.025,.03,.035]) console.log(`${(t*100).toFixed(1)}%\t${value(300,.08,.10,t,1000,100).toFixed(2)}`);
console.log('\nEscenarios'); 
for(const s of [
 {name:'pesimista',fcf:220,g:.03,w:.12,t:.015},
 {name:'base',fcf:300,g:.08,w:.10,t:.025},
 {name:'optimista',fcf:370,g:.12,w:.09,t:.03},
]) console.log(s.name, value(s.fcf,s.g,s.w,s.t,1000,100).toFixed(2));
