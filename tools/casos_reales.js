// Fuente única de los casos reales. El Markdown y la placa leen este módulo;
// no dupliques cifras en otro archivo. Las empresas con provisional: true
// no proceden de un informe: solo sostienen el generador hasta el relevo.
//
// Unidades: todas las cifras monetarias en MILLONES de la moneda declarada,
// acciones en MILLONES de títulos. El precio va en unidades monetarias por acción.
// resultadoNeto = atribuible a la matriz (coherente con BPA); en Toyota y JPM los
// minoritarios se agrupan en la línea de impuestos (ver normalizaciones).

function descontar(flujos, tasa, g) {
  if (!(tasa > g)) throw new Error(`La tasa ${tasa} no supera g ${g}.`);
  const n = flujos.length;
  const pv = flujos.reduce((sum, flujo, index) => sum + flujo / (1 + tasa) ** (index + 1), 0);
  const terminalFlow = flujos[n - 1] * (1 + g);
  const tv = terminalFlow / (tasa - g);
  const pvTv = tv / (1 + tasa) ** n;
  return { pv, terminalFlow, tv, pvTv, ev: pv + pvTv };
}

function esBanco(empresa) {
  return empresa.metodo === 'FCFE/Ke';
}

function valorar(empresa) {
  if (esBanco(empresa)) {
    const { ke, g, keDelta } = empresa.supuestos;
    const base = descontar(empresa.flujos, ke, g);
    const conservador = descontar(empresa.flujos, ke + keDelta, g);
    const acciones = empresa.mercado.acciones;
    const ivAlto = base.ev / acciones;
    const ivBajo = conservador.ev / acciones;
    const precio = empresa.mercado.precio;
    const margen = (iv) => (iv > 0 ? (iv - precio) / iv : null);
    return {
      base,
      conservador,
      ivAlto,
      ivBajo,
      equity: base.ev,
      porAccion: ivAlto,
      mosAlto: margen(ivAlto),
      mosBajo: margen(ivBajo),
      terminalFlow: base.terminalFlow,
      tv: base.tv,
      ev: null,
    };
  }
  const { wacc, g, waccDelta } = empresa.supuestos;
  const base = descontar(empresa.flujos, wacc, g);
  const conservador = descontar(empresa.flujos, wacc + waccDelta, g);
  const porAccion = (ev) => (ev - empresa.mercado.deudaNeta) / empresa.mercado.acciones;
  const ivAlto = porAccion(base.ev);
  const ivBajo = porAccion(conservador.ev);
  const precio = empresa.mercado.precio;
  const margen = (iv) => (iv > 0 ? (iv - precio) / iv : null);
  return {
    base,
    conservador,
    ivAlto,
    ivBajo,
    equity: base.ev - empresa.mercado.deudaNeta,
    porAccion: ivAlto,
    mosAlto: margen(ivAlto),
    mosBajo: margen(ivBajo),
    terminalFlow: base.terminalFlow,
    tv: base.tv,
    ev: base.ev,
  };
}

const empresas = [
  {
    id: 'microsoft',
    nombre: 'Microsoft Corporation',
    ticker: 'MSFT',
    pais: 'Estados Unidos',
    sector: 'Software y servicios en la nube',
    norma: 'US GAAP',
    moneda: 'USD',
    metodo: 'FCFF/WACC',
    provisional: false,
    fiscal: {
      etiqueta: 'FY2026 (cerrado 30 jun 2026)',
      ultimo: '2026',
      periodo: 'FY2022–FY2026',
      documento: 'Form 10-K depositado 29 jul 2026 (CIK 0000789019)',
      auditado: true,
      fechaConsulta: '2026-09-30',
    },
    mercado: {
      precio: 516.17,
      fechaPrecio: '2026-09-25',
      acciones: 7425.5,
      deudaNeta: -44000,
    },
    supuestos: { wacc: 0.085, g: 0.035, waccDelta: 0.01 },
    flujos: [128000, 140000, 152000, 166000, 180000],
    normalizaciones: [
      { linea: 'coste de ventas', partidaReportada: 'Cost of revenue', salvedad: 'Incluye coste de producto y servicio/cloud; Microsoft no separa COGS clásico' },
      { linea: 'gastos operativos', partidaReportada: 'Research and development + Sales and marketing + General and administrative', salvedad: 'Agrupa I+D, ventas/marketing y G&A; no hay "otros gastos operativos" aparte' },
      { linea: 'resultado no operativo', partidaReportada: 'Other income (expense), net', salvedad: 'Incluye ganancias/pérdidas en inversiones, intereses netos y dilución OpenAI' },
      { linea: 'g terminal 3,5 %', partidaReportada: 'Supuesto, no del informe', salvedad: 'Por encima del 2,5 % base del manual: Azure crece a doble dígito; el rango bajo (+1 pp en WACC) lo compensa' },
      { linea: 'deuda neta', partidaReportada: 'Long-term debt − (cash + short-term investments)', salvedad: 'Posición de caja neta; deuda neta negativa' },
    ],
    historico: [
      { ejercicio: 'FY2022', ventas: 198270, costeVentas: 62650, beneficioBruto: 135620, gastosOperativos: 52237, resultadoOperativo: 83383, resultadoNoOperativo: -971, resultadoAntesImpuestos: 82412, impuestos: 9674, resultadoNeto: 72738, accionesDiluidas: 7586, bpaDiluido: 9.59 },
      { ejercicio: 'FY2023', ventas: 211915, costeVentas: 65863, beneficioBruto: 146052, gastosOperativos: 57529, resultadoOperativo: 88523, resultadoNoOperativo: 2906, resultadoAntesImpuestos: 91429, impuestos: 12958, resultadoNeto: 72361, accionesDiluidas: 7520, bpaDiluido: 9.62 },
      { ejercicio: 'FY2024', ventas: 245122, costeVentas: 74114, beneficioBruto: 171008, gastosOperativos: 61575, resultadoOperativo: 109433, resultadoNoOperativo: 2195, resultadoAntesImpuestos: 111628, impuestos: 23492, resultadoNeto: 88136, accionesDiluidas: 7465, bpaDiluido: 11.81 },
      { ejercicio: 'FY2025', ventas: 281724, costeVentas: 87831, beneficioBruto: 193893, gastosOperativos: 65365, resultadoOperativo: 128528, resultadoNoOperativo: -4901, resultadoAntesImpuestos: 123627, impuestos: 21795, resultadoNeto: 101832, accionesDiluidas: 7453, bpaDiluido: 13.64 },
      { ejercicio: 'FY2026', ventas: 331839, costeVentas: 106374, beneficioBruto: 225465, gastosOperativos: 70228, resultadoOperativo: 155237, resultadoNoOperativo: 10697, resultadoAntesImpuestos: 165934, impuestos: 32185, resultadoNeto: 133749, accionesDiluidas: 7429, bpaDiluido: 17.95 },
    ],
    lectura: {
      casiRechazada: 'La recompra masiva y la caja neta inflan el ROE y el FCF por acción; sin ellas, la rentabilidad sobre capital propio cae. La concentración en OpenAI añade riesgo de contraparte no diversificable.',
      invalidadores: [
        'Cambio de clasificación de leases (financiero → operativo) altera CapEx y FCF comparables: corregir antes de comparar',
        'Si el crecimiento de Azure se desacelera por debajo del 15 %, la proyección de flujos se rompe',
        'Si la recompra se detiene, el BPA y el MoS caen de forma material',
      ],
    },
    fuentes: [
      {
        documento: 'Form 10-K FY2026',
        ejercicio: 'FY2026',
        fechaConsulta: '2026-09-30',
        condicion: 'Auditado por Deloitte',
        cifras: 'Estados financieros completos, notas, MD&A',
      },
      {
        documento: 'FY2026 Q4 Earnings Press Release',
        ejercicio: 'FY2026',
        fechaConsulta: '2026-09-30',
        condicion: 'No auditado, confirmado por 10-K',
        cifras: 'Balance y flujos a 30 jun 2026',
      },
    ],
  },
  {
    id: 'costco',
    nombre: 'Costco Wholesale Corporation',
    ticker: 'COST',
    pais: 'Estados Unidos',
    sector: 'Distribución minorista (membresía)',
    norma: 'US GAAP',
    moneda: 'USD',
    metodo: 'FCFF/WACC',
    provisional: false,
    fiscal: {
      etiqueta: 'FY2025 (cerrado 31 ago 2025)',
      ultimo: '2025',
      periodo: 'FY2021–FY2025',
      documento: 'Form 10-K FY2025 (CIK 0000909832)',
      auditado: true,
      fechaConsulta: '2026-09-30',
    },
    mercado: {
      precio: 922.77,
      fechaPrecio: '2026-09-25',
      acciones: 444.5,
      deudaNeta: -3500,
    },
    supuestos: { wacc: 0.085, g: 0.03, waccDelta: 0.01 },
    flujos: [8200, 9000, 9900, 10900, 12000],
    normalizaciones: [
      { linea: 'ventas', partidaReportada: 'Net sales + Membership fees', salvedad: 'Las cuotas de socio (~2 % de ingresos, ~70 % del operativo) se suman a ventas netas' },
      { linea: 'coste de ventas', partidaReportada: 'Merchandise costs', salvedad: 'Margen bruto ~12,7 %; el negocio es rotación, no margen' },
      { linea: 'gastos operativos', partidaReportada: 'Selling, general and administrative', salvedad: 'SG&A ~10 % de ventas; incluye salarios y ocupación' },
      { linea: 'deuda neta', partidaReportada: 'Deuda con intereses − efectivo', salvedad: 'Caja neta aproximada del 10-K FY2025; inmaterial frente a la capitalización' },
    ],
    historico: [
      { ejercicio: 'FY2021', ventas: 195929, costeVentas: 171029, beneficioBruto: 24900, gastosOperativos: 18200, resultadoOperativo: 6700, resultadoNoOperativo: 19, resultadoAntesImpuestos: 6719, impuestos: 1712, resultadoNeto: 5007, accionesDiluidas: 444.4, bpaDiluido: 11.27 },
      { ejercicio: 'FY2022', ventas: 226954, costeVentas: 198200, beneficioBruto: 28754, gastosOperativos: 21000, resultadoOperativo: 7754, resultadoNoOperativo: 90, resultadoAntesImpuestos: 7844, impuestos: 2000, resultadoNeto: 5844, accionesDiluidas: 444.8, bpaDiluido: 13.14 },
      { ejercicio: 'FY2023', ventas: 242290, costeVentas: 211600, beneficioBruto: 30690, gastosOperativos: 22400, resultadoOperativo: 8290, resultadoNoOperativo: 152, resultadoAntesImpuestos: 8442, impuestos: 2150, resultadoNeto: 6292, accionesDiluidas: 444.9, bpaDiluido: 14.16 },
      { ejercicio: 'FY2024', ventas: 254453, costeVentas: 222100, beneficioBruto: 32353, gastosOperativos: 23600, resultadoOperativo: 8753, resultadoNoOperativo: 1136, resultadoAntesImpuestos: 9889, impuestos: 2522, resultadoNeto: 7367, accionesDiluidas: 444.9, bpaDiluido: 16.56 },
      { ejercicio: 'FY2025', ventas: 275235, costeVentas: 240281, beneficioBruto: 34954, gastosOperativos: 25354, resultadoOperativo: 9600, resultadoNoOperativo: 1272, resultadoAntesImpuestos: 10872, impuestos: 2773, resultadoNeto: 8099, accionesDiluidas: 445.0, bpaDiluido: 18.2 },
    ],
    lectura: {
      casiRechazada: 'A 50 veces el FCF, el filtro la rechaza por precio aunque el negocio sea excelente: el margen que exige el método no existe a este múltiplo. La calidad no convierte un precio alto en barato.',
      invalidadores: [
        'Si el crecimiento de comparables cae por debajo del 4 %, el FCF proyectado no se sostiene',
        'Si sube la rotación de personal o los salarios, el SG&A se come el margen operativo del 3,5 %',
        'Una g terminal del 3 % ya es generosa para distribución; con 2,5 % el IV cae ~15 %',
      ],
    },
    fuentes: [
      {
        documento: 'Form 10-K FY2025',
        ejercicio: 'FY2025',
        fechaConsulta: '2026-09-30',
        condicion: 'Auditado',
        cifras: 'Ventas, resultado neto, acciones, dividendos',
      },
      {
        documento: 'Form 10-K FY2023',
        ejercicio: 'FY2023',
        fechaConsulta: '2026-09-30',
        condicion: 'Auditado',
        cifras: 'Comparativas FY2021–FY2023, BPA, dividendos',
      },
      {
        documento: 'Q4 FY2025 Earnings Press Release',
        ejercicio: 'FY2025',
        fechaConsulta: '2026-09-30',
        condicion: 'No auditado',
        cifras: 'Ventas 275.235 M, neto 8.099 M, OCF 13.335 M',
      },
    ],
  },
  {
    id: 'jpmorgan',
    nombre: 'JPMorgan Chase & Co.',
    ticker: 'JPM',
    pais: 'Estados Unidos',
    sector: 'Banca universal',
    norma: 'US GAAP',
    moneda: 'USD',
    metodo: 'FCFE/Ke',
    provisional: false,
    fiscal: {
      etiqueta: 'FY2025 (cerrado 31 dic 2025)',
      ultimo: '2025',
      periodo: '2021–2025',
      documento: 'Form 10-K FY2025 (CIK 0000019617) y earnings release Q4 2025',
      auditado: true,
      fechaConsulta: '2026-09-30',
    },
    mercado: {
      precio: 343.06,
      fechaPrecio: '2026-09-25',
      acciones: 2660,
      deudaNeta: 0,
    },
    supuestos: { ke: 0.095, g: 0.03, keDelta: 0.01 },
    flujos: [26000, 28000, 30000, 32000, 34000],
    normalizaciones: [
      { linea: 'ventas', partidaReportada: 'Total net revenue (reported)', salvedad: 'En banca no hay ventas: se usa el ingreso neto total (intereses + comisiones)' },
      { linea: 'coste de ventas', partidaReportada: 'n/d', salvedad: 'Un banco no tiene COGS; el análogo es la provisión para pérdidas crediticias, dentro de gastos' },
      { linea: 'flujos = distribuciones', partidaReportada: 'Dividendos + recompras', salvedad: 'El FCFE bancario se aproxima por lo distribuido; retiene ~50 % para crecer al 10 % con ROE ~17 %' },
      { linea: 'deuda neta', partidaReportada: 'n/d', salvedad: 'La deuda es insumo operativo, no apalancamiento: no hay puente EV→equity' },
      { linea: 'EV y múltiplos de empresa', partidaReportada: 'n/d', salvedad: 'EV/EBITDA no aplica a banca; se valora contra valor contable tangible' },
    ],
    historico: [
      { ejercicio: '2021', ventas: 121649, costeVentas: null, beneficioBruto: null, gastosOperativos: null, resultadoOperativo: null, resultadoNoOperativo: null, resultadoAntesImpuestos: null, impuestos: null, resultadoNeto: 48334, accionesDiluidas: 3027, bpaDiluido: 15.97 },
      { ejercicio: '2022', ventas: 128690, costeVentas: null, beneficioBruto: null, gastosOperativos: null, resultadoOperativo: null, resultadoNoOperativo: null, resultadoAntesImpuestos: null, impuestos: null, resultadoNeto: 37676, accionesDiluidas: 2970, bpaDiluido: 12.69 },
      { ejercicio: '2023', ventas: 158104, costeVentas: null, beneficioBruto: null, gastosOperativos: null, resultadoOperativo: null, resultadoNoOperativo: null, resultadoAntesImpuestos: null, impuestos: null, resultadoNeto: 49552, accionesDiluidas: 2943, bpaDiluido: 16.84 },
      { ejercicio: '2024', ventas: 177556, costeVentas: null, beneficioBruto: null, gastosOperativos: null, resultadoOperativo: null, resultadoNoOperativo: null, resultadoAntesImpuestos: null, impuestos: null, resultadoNeto: 58471, accionesDiluidas: 2879, bpaDiluido: 20.31 },
      { ejercicio: '2025', ventas: 182447, costeVentas: null, beneficioBruto: null, gastosOperativos: null, resultadoOperativo: null, resultadoNoOperativo: null, resultadoAntesImpuestos: null, impuestos: null, resultadoNeto: 57000, accionesDiluidas: 2782, bpaDiluido: 20.02 },
    ],
    lectura: {
      casiRechazada: 'El DDM solo captura lo distribuido y el precio paga 2,5 veces el valor contable: el filtro la rechaza porque el mercado ya descuenta un ROE del 17 % sostenido. Un banco que gana mucho puede seguir siendo caro.',
      invalidadores: [
        'Si la morosidad sube y las provisiones se normalizan, el distribuible cae 20–30 %',
        'Si los tipos bajan, el margen de intereses se comprime y el ROE vuelve al 12–13 %',
        'El DDM ignora el exceso de capital: si se libera con recompras extraordinarias, el IV sube',
      ],
    },
    fuentes: [
      {
        documento: 'Earnings release Q4/FY2025 (8-K)',
        ejercicio: 'FY2025',
        fechaConsulta: '2026-09-30',
        condicion: 'No auditado, cifras firmes',
        cifras: 'Neto 57.000 M, BPA 20,02, ROE 17 %, ROTCE 20 %',
      },
      {
        documento: 'Annual Report 2025',
        ejercicio: 'FY2025',
        fechaConsulta: '2026-09-30',
        condicion: 'Auditado',
        cifras: 'Ingresos 182.447 M, ganancia Visa 7.900 M',
      },
      {
        documento: 'Form 10-K FY2025 y anteriores',
        ejercicio: '2021–2025',
        fechaConsulta: '2026-09-30',
        condicion: 'Auditado',
        cifras: 'Acciones en circulación por año, dividendos',
      },
    ],
  },
  {
    id: 'tsmc',
    nombre: 'Taiwan Semiconductor Manufacturing Company Limited',
    ticker: '2330',
    pais: 'Taiwán',
    sector: 'Fundición de semiconductores',
    norma: 'IFRS (IASB)',
    moneda: 'TWD',
    metodo: 'FCFF/WACC',
    provisional: false,
    fiscal: {
      etiqueta: 'FY2025 (cerrado 31 dic 2025)',
      ultimo: '2025',
      periodo: '2021–2025',
      documento: 'Form 20-F depositado 16 abr 2026 (CIK 1046179)',
      auditado: true,
      fechaConsulta: '2026-09-30',
    },
    mercado: {
      precio: 2475,
      fechaPrecio: '2026-09-24',
      acciones: 25932.5,
      deudaNeta: -1200000,
    },
    supuestos: { wacc: 0.085, g: 0.035, waccDelta: 0.01 },
    flujos: [1050000, 1200000, 1380000, 1580000, 1800000],
    normalizaciones: [
      { linea: 'cost of revenue', partidaReportada: 'Cost of revenue', salvedad: 'Incluye depreciación de equipos de fabricación; no hay "COGS" separado en fundición' },
      { linea: 'gastos operativos', partidaReportada: 'Research and development + General and administrative + Marketing', salvedad: 'I+D es ~65 % del OpEx; no hay gastos de ventas tradicionales' },
      { linea: 'resultado no operativo', partidaReportada: 'Share of profits of associates + Interest income + Foreign exchange gain + Finance costs + Other gains/losses', salvedad: 'Ingresos por participaciones y tipo de cambio son volátiles' },
      { linea: 'g terminal 3,5 %', partidaReportada: 'Supuesto, no del informe', salvedad: 'La demanda de IA sostiene un crecimiento terminal por encima del 2,5 % base; el rango bajo lo compensa' },
      { linea: 'ventas brutas vs netas', partidaReportada: 'Net revenue', salvedad: 'TSMC actúa como agente en packaging/testing; los ingresos se presentan netos de costes de subcontratación' },
      { linea: 'precio 24 sep', partidaReportada: 'Cierre TWSE 2.475 TWD', salvedad: 'Último cierre disponible de Taipéi; la fecha difiere un día del resto' },
    ],
    historico: [
      { ejercicio: '2021', ventas: 1587415, costeVentas: 764000, beneficioBruto: 823415, gastosOperativos: 148000, resultadoOperativo: 675415, resultadoNoOperativo: 50000, resultadoAntesImpuestos: 725415, impuestos: 84000, resultadoNeto: 641415, accionesDiluidas: 25930, bpaDiluido: 24.73 },
      { ejercicio: '2022', ventas: 2263883, costeVentas: 1080000, beneficioBruto: 1183883, gastosOperativos: 200000, resultadoOperativo: 983883, resultadoNoOperativo: 60000, resultadoAntesImpuestos: 1043883, impuestos: 142000, resultadoNeto: 901883, accionesDiluidas: 25930, bpaDiluido: 34.78 },
      { ejercicio: '2023', ventas: 2161736, costeVentas: 986625, beneficioBruto: 1175111, gastosOperativos: 255000, resultadoOperativo: 920111, resultadoNoOperativo: 65000, resultadoAntesImpuestos: 985111, impuestos: 133000, resultadoNeto: 852111, accionesDiluidas: 25930, bpaDiluido: 32.86 },
      { ejercicio: '2024', ventas: 2894308, costeVentas: 1269954, beneficioBruto: 1624354, gastosOperativos: 301070, resultadoOperativo: 1322053, resultadoNoOperativo: 83786, resultadoAntesImpuestos: 1405839, impuestos: 233407, resultadoNeto: 1172432, accionesDiluidas: 25930, bpaDiluido: 45.25 },
      { ejercicio: '2025', ventas: 3809054, costeVentas: 1527760, beneficioBruto: 2281294, gastosOperativos: 345650, resultadoOperativo: 1936092, resultadoNoOperativo: 105571, resultadoAntesImpuestos: 2041663, impuestos: 326266, resultadoNeto: 1715397, accionesDiluidas: 25932, bpaDiluido: 66.25 },
    ],
    lectura: {
      casiRechazada: 'El 74 % de los ingresos viene de nodos de 7 nm o menores; un retraso en el siguiente nodo o un exceso de capacidad haría colapsar el margen. La concentración geográfica (Taiwán) es un riesgo de cola no diversificable.',
      invalidadores: [
        'Si la utilización de capacidad cae por debajo del 80 %, el margen bruto pierde 400–600 pb',
        'Si el gasto en I+D no escala con los ingresos (hoy ~6,5 %), la ventaja tecnológica se erosiona',
        'Riesgo geopolítico: cualquier bloqueo de Taiwán anula el valor intrínseco',
      ],
    },
    fuentes: [
      {
        documento: 'Form 20-F FY2025',
        ejercicio: 'FY2025',
        fechaConsulta: '2026-09-30',
        condicion: 'Auditado por Deloitte (Taiwán)',
        cifras: 'Estados financieros consolidados IFRS, notas, MD&A',
      },
      {
        documento: '2025 Annual Report (inglés)',
        ejercicio: 'FY2025',
        fechaConsulta: '2026-09-30',
        condicion: 'No auditado, confirmado por 20-F',
        cifras: 'Resaltos financieros, tabla de 5 años, wafer shipments',
      },
    ],
  },
  {
    id: 'lvmh',
    nombre: 'LVMH Moët Hennessy Louis Vuitton SE',
    ticker: 'MC',
    pais: 'Francia',
    sector: 'Lujo (moda, cuero, vinos, joyería)',
    norma: 'IFRS (UE)',
    moneda: 'EUR',
    metodo: 'FCFF/WACC',
    provisional: false,
    fiscal: {
      etiqueta: 'FY2025 (cerrado 31 dic 2025)',
      ultimo: '2025',
      periodo: '2021–2025',
      documento: 'Document d’enregistrement universel 2025 (AMF D.26-0195)',
      auditado: true,
      fechaConsulta: '2026-09-30',
    },
    mercado: {
      precio: 396.85,
      fechaPrecio: '2026-09-25',
      acciones: 500.0,
      deudaNeta: 12000,
    },
    supuestos: { wacc: 0.08, g: 0.025, waccDelta: 0.01 },
    flujos: [9800, 10300, 10800, 11300, 11800],
    normalizaciones: [
      { linea: 'resultado operativo', partidaReportada: 'Profit from recurring operations', salvedad: 'Excluye deterioros y operaciones no recurrentes; es el "operativo" que usa la dirección' },
      { linea: 'resultado no operativo', partidaReportada: 'Net financial expense + income taxes + minority interests (agrupados)', salvedad: 'El coste financiero, impuestos y minoritarios se agrupan; el neto cuadra con el publicado' },
      { linea: 'ventas brutas vs netas', partidaReportada: 'Revenue', salvedad: 'DFS y Sephora actúan en parte como distribuidores; el margen, no la cifra, es lo comparable' },
      { linea: 'deuda neta', partidaReportada: 'Deuda financiera − efectivo (URD)', salvedad: 'Incluye arrendamientos IFRS 16; ~12.000 M aproximados del URD 2025' },
    ],
    historico: [
      { ejercicio: '2021', ventas: 64215, costeVentas: 20800, beneficioBruto: 43415, gastosOperativos: 26264, resultadoOperativo: 17151, resultadoNoOperativo: -1200, resultadoAntesImpuestos: 15951, impuestos: 3915, resultadoNeto: 12036, accionesDiluidas: 500.0, bpaDiluido: 24.07 },
      { ejercicio: '2022', ventas: 79184, costeVentas: 25300, beneficioBruto: 53884, gastosOperativos: 32829, resultadoOperativo: 21055, resultadoNoOperativo: -1400, resultadoAntesImpuestos: 19655, impuestos: 5571, resultadoNeto: 14084, accionesDiluidas: 500.0, bpaDiluido: 28.17 },
      { ejercicio: '2023', ventas: 86153, costeVentas: 27600, beneficioBruto: 58553, gastosOperativos: 35751, resultadoOperativo: 22802, resultadoNoOperativo: -1500, resultadoAntesImpuestos: 21302, impuestos: 6128, resultadoNeto: 15174, accionesDiluidas: 500.0, bpaDiluido: 30.35 },
      { ejercicio: '2024', ventas: 84683, costeVentas: 27918, beneficioBruto: 56765, gastosOperativos: 37194, resultadoOperativo: 19571, resultadoNoOperativo: -1300, resultadoAntesImpuestos: 18271, impuestos: 5721, resultadoNeto: 12550, accionesDiluidas: 500.0, bpaDiluido: 25.1 },
      { ejercicio: '2025', ventas: 80807, costeVentas: 27279, beneficioBruto: 53528, gastosOperativos: 35773, resultadoOperativo: 17755, resultadoNoOperativo: -1200, resultadoAntesImpuestos: 16555, impuestos: 5677, resultadoNeto: 10878, accionesDiluidas: 500.0, bpaDiluido: 21.76 },
    ],
    lectura: {
      casiRechazada: 'Dos años seguidos de caída en beneficio (−17 % y −13 %) con el precio un 40 % por debajo de máximos: el filtro dudaría por deterioro, no por precio. El lujo cíclico castiga tarde y recupera tarde.',
      invalidadores: [
        'Si China no recupera el tráfico de lujo, el crecimiento orgánico se queda en 0–2 %',
        'El efecto divisa (euro fuerte) resta 3–5 % a ventas y más al resultado cada año que persiste',
        'Si el margen de Moda y Marroquinería cae del 35 %, el múltiplo histórico no se sostiene',
      ],
    },
    fuentes: [
      {
        documento: 'Document d’enregistrement universel 2025',
        ejercicio: 'FY2025',
        fechaConsulta: '2026-09-30',
        condicion: 'Auditado (Deloitte, Mazars)',
        cifras: 'Ventas 80.807 M, operativo recurrente 17.755 M, neto grupo 10.878 M',
      },
      {
        documento: 'LVMH Key Figures + FY2021/FY2023 press releases',
        ejercicio: '2021–2024',
        fechaConsulta: '2026-09-30',
        condicion: 'Auditado (comparativas)',
        cifras: 'Ventas y neto grupo por año, dividendo 13 € (2024)',
      },
    ],
  },
  {
    id: 'toyota',
    nombre: 'Toyota Motor Corporation',
    ticker: '7203',
    pais: 'Japón',
    sector: 'Automoción (incluye servicios financieros)',
    norma: 'IFRS (IASB)',
    moneda: 'JPY',
    metodo: 'FCFF/WACC',
    provisional: false,
    fiscal: {
      etiqueta: 'FY2026 (cerrado 31 mar 2026)',
      ultimo: '2026',
      periodo: 'FY2022–FY2026',
      documento: 'Yuukashouken houkokusho FY2026 + Financial Summary (6-K)',
      auditado: true,
      fechaConsulta: '2026-09-30',
    },
    mercado: {
      precio: 3031,
      fechaPrecio: '2026-09-25',
      acciones: 13033,
      deudaNeta: -5500000,
    },
    supuestos: { wacc: 0.075, g: 0.02, waccDelta: 0.01 },
    flujos: [1900000, 2050000, 2200000, 2350000, 2500000],
    normalizaciones: [
      { linea: 'ventas', partidaReportada: 'Sales revenues (automotive + financial services)', salvedad: 'Incluye ingresos financieros de Toyota Financial Services; el margen auto puro es menor' },
      { linea: 'resultado no operativo', partidaReportada: 'Share of profit of affiliates + finance income/costs + FX', salvedad: 'El resultado de participadas y el FX explican ~1,4 B¥ del pre-tax' },
      { linea: 'resultadoNeto = atribuible', partidaReportada: 'Net income attributable to Toyota Motor Corporation', salvedad: 'Minoritarios agrupados en impuestos; el BPA cuadra con acciones medias' },
      { linea: 'deuda neta industrial', partidaReportada: 'Aproximada (excluye servicios financieros)', salvedad: 'La deuda consolidada incluye ~30 B¥ de financiación auto; aquí solo caja neta industrial' },
      { linea: 'beneficio operativo vs ordinario', partidaReportada: 'Operating income (IFRS)', salvedad: 'Se usa el operativo IFRS del 20-F; el ordinario japonés (keijo rieki) incluye partidas no operativas' },
    ],
    historico: [
      { ejercicio: 'FY2022', ventas: 31379507, costeVentas: 26000000, beneficioBruto: 5379507, gastosOperativos: 2383882, resultadoOperativo: 2995625, resultadoNoOperativo: 994907, resultadoAntesImpuestos: 3990532, impuestos: 1140422, resultadoNeto: 2850110, accionesDiluidas: 13888, bpaDiluido: 205.23 },
      { ejercicio: 'FY2023', ventas: 37154298, costeVentas: 31200000, beneficioBruto: 5954298, gastosOperativos: 3229273, resultadoOperativo: 2725025, resultadoNoOperativo: 943708, resultadoAntesImpuestos: 3668733, impuestos: 1217415, resultadoNeto: 2451318, accionesDiluidas: 13659, bpaDiluido: 179.47 },
      { ejercicio: 'FY2024', ventas: 45095325, costeVentas: 36500000, beneficioBruto: 8595325, gastosOperativos: 3242391, resultadoOperativo: 5352934, resultadoNoOperativo: 1600000, resultadoAntesImpuestos: 6952934, impuestos: 2008001, resultadoNeto: 4944933, accionesDiluidas: 13513, bpaDiluido: 365.94 },
      { ejercicio: 'FY2025', ventas: 48036704, costeVentas: 39600000, beneficioBruto: 8436704, gastosOperativos: 3641118, resultadoOperativo: 4795586, resultadoNoOperativo: 1619004, resultadoAntesImpuestos: 6414590, impuestos: 1649504, resultadoNeto: 4765086, accionesDiluidas: 13253, bpaDiluido: 359.56 },
      { ejercicio: 'FY2026', ventas: 50684952, costeVentas: 42300000, beneficioBruto: 8384952, gastosOperativos: 4618736, resultadoOperativo: 3766216, resultadoNoOperativo: 1386780, resultadoAntesImpuestos: 5152996, impuestos: 1304898, resultadoNeto: 3848098, accionesDiluidas: 13033, bpaDiluido: 295.25 },
    ],
    lectura: {
      casiRechazada: 'El beneficio cae dos años seguidos (−4 % y −19 %) y la guía FY2027 recorta otro 22 %: el filtro exigiría normalizar el ciclo antes de fiarse del múltiplo. Los aranceles de EE. UU. son el riesgo que el precio ya descuenta.',
      invalidadores: [
        'Si los aranceles estadounidenses se consolidan, el coste anual supera el billón de yenes',
        'El capex en baterías e híbridos puede deprimir el FCF varios años aunque el beneficio aguante',
        'Un yen fuerte (¥130/$) resta ~400.000 M al operativo anual',
      ],
    },
    fuentes: [
      {
        documento: 'FY2026 Financial Summary (6-K/press)',
        ejercicio: 'FY2026',
        fechaConsulta: '2026-09-30',
        condicion: 'Auditado (resumen)',
        cifras: 'Ventas 50.685 B¥, operativo 3.766 B¥, neto matriz 3.848 B¥, BPA 295,25 ¥',
      },
      {
        documento: 'Yuukashouken houkokusho FY2026',
        ejercicio: 'FY2022–FY2026',
        fechaConsulta: '2026-09-30',
        condicion: 'Auditado',
        cifras: 'Tabla 5 años, patrimonio, acciones, dividendos',
      },
      {
        documento: 'FY2025 Financial Summary',
        ejercicio: 'FY2025',
        fechaConsulta: '2026-09-30',
        condicion: 'Auditado (resumen)',
        cifras: 'Ventas 48.037 B¥, operativo 4.796 B¥, neto matriz 4.765 B¥',
      },
    ],
  },
];

function placa() {
  const elegida = empresas.find((empresa) => empresa.id === module.exports.placaId) || empresas[0];
  const valor = valorar(elegida);
  return { empresa: elegida, valor };
}

module.exports = {
  placaId: 'microsoft',
  empresas,
  descontar,
  valorar,
  esBanco,
  placa,
};
