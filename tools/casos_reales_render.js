const { empresas, valorar } = require('./casos_reales');

function formatNum(value, digits = 2) {
  const sign = value < 0 ? '-' : '';
  const [int, dec] = Math.abs(value).toFixed(digits).split('.');
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return dec === undefined ? `${sign}${grouped}` : `${sign}${grouped},${dec}`;
}

function formatPct(value) {
  if (value === null || value === undefined || Number.isNaN(value)) return 'n/d';
  return `${formatNum(value * 100, 1)} %`;
}

function fila(cells) {
  return `| ${cells.join(' | ')} |`;
}

function ficha(empresa) {
  const valor = valorar(empresa);
  const aviso = empresa.provisional
    ? '> **Cifras de andamiaje.** No proceden de un informe, no son una cotización y el siguiente caso real las sustituye. No las uses para juzgar una empresa.\n'
    : '';
  const flujoNombre = empresa.metodo === 'FCFE/Ke' ? 'FCFE' : 'FCFF';
  const tasaNombre = empresa.metodo === 'FCFE/Ke' ? 'K_e' : 'WACC';
  const lectura = valor.mosBajo > 0
    ? 'el precio queda por debajo del extremo bajo del rango'
    : 'el precio no queda por debajo del extremo bajo del rango';
  return [
    `## ${empresa.nombre}`,
    '',
    aviso.trimEnd(),
    '',
    `${empresa.nombre} (${empresa.ticker}) es una ficha del generador, no un caso. Sirve para comprobar que el margen, el puente y el valor terminal salen del mismo cálculo que la portada.`,
    '',
    fila(['Campo', 'Dato']),
    fila(['---', '---']),
    fila(['Sector', empresa.sector]),
    fila(['Norma', empresa.norma]),
    fila(['Método', empresa.metodo]),
    fila(['Ejercicio', empresa.fiscal.etiqueta]),
    fila(['Documento', empresa.fiscal.documento]),
    fila(['Auditado', empresa.fiscal.auditado ? 'Sí' : 'No']),
    fila(['Precio', formatNum(empresa.mercado.precio, 2)]),
    fila(['IV bajo', formatNum(valor.ivBajo, 2)]),
    fila(['IV alto', formatNum(valor.ivAlto, 2)]),
    fila(['MoS conservador', formatPct(valor.mosBajo)]),
    '',
    'El margen se calcula contra el extremo bajo, no contra el alto:',
    '',
    '\\[',
    `MoS = (IV_{bajo} - precio) / IV_{bajo} = (${formatNum(valor.ivBajo, 2)} - ${formatNum(empresa.mercado.precio, 2)}) / ${formatNum(valor.ivBajo, 2)} = ${formatPct(valor.mosBajo)}`,
    '\\]',
    '',
    `Con estos supuestos, ${lectura}. El flujo terminal es el último ${flujoNombre} crecido una sola vez: ${formatNum(valor.terminalFlow, 2)}. No se vuelve a multiplicar por (1+g) al descontarlo con ${tasaNombre}.`,
    '',
    '### Por qué casi la rechaza el filtro',
    '',
    empresa.lectura.casiRechazada,
    '',
    '### Qué invalidaría el cálculo',
    '',
    ...empresa.lectura.invalidadores.map((item) => `- ${item}`),
    '',
  ].filter((line) => line !== undefined).join('\n');
}

function renderCasesMarkdown() {
  const rows = empresas.map((empresa) => {
    const valor = valorar(empresa);
    return fila([
      empresa.nombre,
      empresa.sector,
      empresa.pais,
      empresa.fiscal.ultimo,
      empresa.fiscal.auditado ? 'Auditado' : 'No auditado',
      formatNum(empresa.mercado.precio, 2),
      `${formatNum(valor.ivBajo, 2)}–${formatNum(valor.ivAlto, 2)}`,
      formatPct(valor.mosBajo),
      empresa.metodo,
    ]);
  });
  const fuentes = empresas.flatMap((empresa) => empresa.fuentes.map((fuente) => fila([
    empresa.nombre,
    fuente.documento,
    fuente.ejercicio,
    fuente.fechaConsulta,
    fuente.condicion,
    fuente.cifras,
  ])));
  return [
    '# Casos reales',
    '',
    'Esta sección se genera desde `tools/casos_reales.js`. Editar este archivo a mano no sirve: el siguiente build lo sobrescribe.',
    '',
    '## Qué cambia respecto al capítulo 30',
    '',
    'El capítulo 30 usa empresas ficticias con un corte común. Aquí cada ficha declara su informe, su ejercicio, si ese documento está auditado y la fecha en que se consultó. Las fechas no se alinean entre empresas. El valor intrínseco se publica como rango. Cada empresa permanece en su moneda: el margen de seguridad es comparable; el valor absoluto, no.',
    '',
    '## Sesgo de supervivencia',
    '',
    'Elegir empresas a las que les ha ido bien no demuestra que el filtro funcione. Seis aciertos, o uno, no son seis pruebas: faltan las que el mismo filtro habría descartado y las que pasó y luego fallaron. El capítulo 29 trata ese error. Cada ficha incluye la línea de por qué el filtro casi la rechaza, para que el caso no se lea como una confirmación.',
    '',
    '## Comparativa',
    '',
    fila(['Empresa', 'Sector', 'País', 'Ejercicio', 'Auditoría', 'Precio', 'IV rango', 'MoS', 'Método']),
    fila(['---', '---', '---', '---', '---', '---', '---', '---', '---']),
    ...rows,
    '',
    '## Esquema y método',
    '',
    'La comparativa usa las mismas claves en todas las fichas. Si un dato no está en el informe, se escribe `n/d`: no se estima en silencio. Un banco no entra por FCFF y WACC, porque la deuda es un insumo del negocio y no apalancamiento. Esa ficha, cuando exista, descuenta FCFE a `K_e` y marca `n/d` en el valor de empresa y en los múltiplos que no aplican.',
    '',
    'El flujo terminal es `FCFF_n × (1+g)`, descontado una sola vez. No se multiplica otra vez por `(1+g)`. El margen es `(IV bajo − precio) / IV bajo`. Un IV negativo no se expresa como porcentaje.',
    '',
    ...empresas.map((empresa) => ficha(empresa).trimEnd()),
    '',
    '## Registro de fuentes',
    '',
    fila(['Empresa', 'Documento', 'Ejercicio', 'Consulta', 'Condición', 'Cifras']),
    fila(['---', '---', '---', '---', '---', '---']),
    ...fuentes,
    '',
  ].join('\n');
}

function writeCasesPart(file) {
  const fs = require('fs');
  fs.writeFileSync(file, `${renderCasesMarkdown().trim()}\n`, 'utf8');
}

module.exports = { renderCasesMarkdown, writeCasesPart, formatNum, formatPct };
