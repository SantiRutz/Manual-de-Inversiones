# Capítulo 30. Ejemplos completos: cinco empresas ficticias

## 30.1 Propósito y advertencia de los datos

Este capítulo aplica los indicadores del manual a cinco empresas **totalmente ficticias**. El objetivo no es declarar cuál es mejor, sino mostrar que “calidad”, “precio”, “crecimiento”, “barato” y “trampa de valor” son dimensiones diferentes.

Todos los datos son sintéticos. No representan empresas, cotizaciones, resultados reales, recomendaciones ni rentabilidades. Los precios de referencia son ficticios y están fechados el **31 de diciembre de 2025**; el corte editorial del manual es el **24 de septiembre de 2026**. No se han incorporado datos de mercado posteriores.

Las cifras monetarias están en **millones de USD (USD m)**, salvo el precio, EPS y DPS, que están en **USD por acción**. Las cifras se redondean solo para presentación; los cálculos se realizan con la precisión interna.

> **Regla de lectura:** un múltiplo bajo no es una recomendación y un múltiplo alto no es una prohibición. Primero hay que entender el negocio, la calidad de los beneficios, la deuda, la reinvestición y la duración de la ventaja competitiva.

---

## 30.2 Supuestos comunes y convenciones

1. El ejercicio representa un año terminado el 31-12-2025.
2. Hay 100 millones de acciones ordinarias y diluidas medias en A, C, D y E; B tiene 200 millones. No hay acciones preferentes ni planes de dilución en el ejemplo.
3. La capitalización bursátil es `precio por acción × acciones en circulación`.
4. La deuda neta es `deuda bruta − efectivo y equivalentes`.
5. El EV simplificado es `capitalización bursátil + deuda neta`. En una investigación real se revisarían preferentes, intereses no controlantes, arrendamientos, pensiones, inversiones no operativas y otros derechos sobre el negocio.
6. El ROE usa el patrimonio medio: `(patrimonio inicial + patrimonio final) / 2`.
7. El ROIC usa NOPAT y capital invertido medio. Para el DCF se utiliza una estimación normalizada de FCFF distinta del FCF histórico, porque el FCF histórico se aproxima mediante `CFO − CapEx` después de intereses.
8. El DCF proyecta cinco años y utiliza un valor terminal de perpetuidad. En todos los casos se exige `WACC > g`.
9. El crecimiento terminal no es una promesa: es un supuesto de largo plazo que debe ser compatible con el mercado, la economía y la duración del negocio.
10. El margen de seguridad se calcula solo cuando el valor intrínseco es positivo. Si el valor es negativo, el resultado porcentual no se interpreta como una oportunidad.

---

## 30.3 Datos de entrada

### 30.3.1 Cuenta de resultados

| Concepto | A | B | C | D | E |
|---|---:|---:|---:|---:|---:|
| Ingresos 2025 | 5.000,00 | 2.000,00 | 3.000,00 | 1.500,00 | 1.200,00 |
| Ingresos 2024 | 4.600,00 | 2.100,00 | 2.600,00 | 2.000,00 | 800,00 |
| Ingresos 2021 | 3.500,00 | 1.810,00 | 1.900,00 | 3.000,00 | 350,00 |
| Beneficio bruto | 3.100,00 | 560,00 | 1.350,00 | 300,00 | 660,00 |
| EBIT / Operating Income | 1.250,00 | 160,00 | 540,00 | 45,00 | 144,00 |
| D&A | 100,00 | 40,00 | 60,00 | 15,00 | 36,00 |
| EBITDA | 1.350,00 | 200,00 | 600,00 | 60,00 | 180,00 |
| Intereses | 120,00 | 80,00 | 70,00 | 32,50 | 30,00 |
| EBT | 1.130,00 | 80,00 | 470,00 | 12,50 | 114,00 |
| Impuestos efectivos | 130,00 | 20,00 | 70,00 | 3,13 | 24,00 |
| Beneficio neto | 1.000,00 | 60,00 | 400,00 | 9,38 | 90,00 |
| EPS | 10,00 | 0,30 | 4,00 | 0,0938 | 0,90 |
| DPS | 2,40 | 0,60 | 1,20 | 0,20 | 0,05 |

La diferencia entre EBIT y EBT se explica por intereses y otras partidas financieras. La línea de impuestos efectivos no tiene por qué coincidir con la tasa normalizada del 25 % usada para NOPAT: puede incluir créditos, diferencias permanentes o ajustes didácticos. En un análisis real se estudia la reconciliación y se normaliza el impuesto.

### 30.3.2 Balance, caja y distribución

| Concepto | A | B | C | D | E |
|---|---:|---:|---:|---:|---:|
| Patrimonio final | 4.000,00 | 1.500,00 | 2.500,00 | 800,00 | 1.000,00 |
| Patrimonio inicial | 3.600,00 | 1.450,00 | 2.300,00 | 850,00 | 800,00 |
| Capital invertido final | 6.200,00 | 2.300,00 | 3.500,00 | 2.700,00 | 1.600,00 |
| Capital invertido inicial | 5.900,00 | 2.250,00 | 3.300,00 | 2.850,00 | 1.400,00 |
| Deuda bruta | 3.000,00 | 1.100,00 | 1.500,00 | 2.000,00 | 800,00 |
| Efectivo | 800,00 | 300,00 | 500,00 | 100,00 | 200,00 |
| CFO | 1.050,00 | 160,00 | 480,00 | 10,00 | 150,00 |
| CapEx | 200,00 | 100,00 | 100,00 | 30,00 | 50,00 |
| FCF histórico `CFO − CapEx` | 850,00 | 60,00 | 380,00 | −20,00 | 100,00 |
| Precio ficticio | 220,00 | 3,50 | 32,00 | 0,80 | 20,00 |
| FCFF normalizado para DCF | 900,00 | 100,00 | 300,00 | 5,00 | 120,00 |

El FCF histórico y el FCFF del DCF no se han igualado artificialmente. El primero se presenta para calcular FCF yield y Debt/FCF; el segundo es una estimación normalizada para valorar la empresa en conjunto. En una tesorería real habría que reconciliar CFO, CapEx, capital circulante, impuestos, intereses, arrendamientos y opciones.

### 30.3.3 Supuestos de crecimiento y DCF

| Parámetro | A | B | C | D | E |
|---|---:|---:|---:|---:|---:|
| Crecimiento FCF 2026 | 7,0 % | 3,0 % | 8,0 % | −5,0 % | 20,0 % |
| Crecimiento FCF 2027 | 7,0 % | 3,0 % | 8,0 % | −5,0 % | 20,0 % |
| Crecimiento FCF 2028 | 7,0 % | 3,0 % | 8,0 % | −5,0 % | 20,0 % |
| Crecimiento FCF 2029 | 7,0 % | 3,0 % | 8,0 % | −5,0 % | 20,0 % |
| Crecimiento FCF 2030 | 7,0 % | 3,0 % | 8,0 % | −5,0 % | 20,0 % |
| WACC supuesto | 8,0 % | 9,0 % | 10,0 % | 12,0 % | 11,0 % |
| Crecimiento terminal `g` | 3,0 % | 2,5 % | 2,5 % | 1,0 % | 4,0 % |
| Acciones diluidas (millones) | 100 | 200 | 100 | 100 | 100 |

El WACC y el crecimiento terminal son escenarios, no datos observados. En un caso real habría que documentar la tasa libre de riesgo, la prima de riesgo, el beta, el coste de deuda, los impuestos, la estructura de capital y los riesgos del país.

---

## 30.4 Fórmulas y pasos de cálculo

### 30.4.1 Escalera de crecimiento

- **Ingresos Growth:** `Ingresos 2025 / Ingresos 2024 − 1`.
- **CAGR:** `(Ingresos 2025 / Ingresos 2021)^(1/4) − 1`, porque entre 2021 y 2025 hay cuatro intervalos anuales.
- **Gross Margin:** `Beneficio bruto / Ingresos`.
- **Operating Margin:** `EBIT / Ingresos`.
- **Net Margin:** `Beneficio neto / Ingresos`.
- **EPS:** `Beneficio neto / acciones diluidas`.

Por ejemplo, A pasa de 4.600 a 5.000: `5.000 / 4.600 − 1 = 8,70 %`. C pasa de 2.600 a 3.000: `15,38 %`. D pasa de 2.000 a 1.500: `−25,00 %`. E pasa de 800 a 1.200: `50,00 %`.

### 30.4.2 Rentabilidad y caja

- **ROE:** `Beneficio neto / patrimonio medio`.
- **NOPAT:** `EBIT × (1 − tasa fiscal normalizada)`.
- **ROIC:** `NOPAT / capital invertido medio`.
- **FCF histórico:** `CFO − CapEx`.
- **FCF Yield:** `FCF histórico / capitalización bursátil`.
- **Payout Ratio:** `Dividendos totales / Beneficio neto`, equivalente a `DPS / EPS` si se utiliza el mismo número de acciones.

### 30.4.3 Valoración de mercado

- **P/E:** `Precio / EPS`.
- **P/B:** `Precio / valor contable por acción`.
- **EV:** `Capitalización bursátil + deuda neta`.
- **EV/EBITDA:** `EV / EBITDA`.
- **Debt/EBITDA:** `Deuda bruta / EBITDA`.
- **Dividend Yield:** `DPS / Precio`.

### 30.4.4 DCF

Para `t = 1,...,5`:

`FCF_t = FCFF_0 × (1 + g_t)`.

`PV(FCF_t) = FCF_t / (1 + WACC)^t`.

`TV_5 = FCF_5 × (1 + g) / (WACC − g)`.

`PV(TV) = TV_5 / (1 + WACC)^5`.

`EV DCF = Σ PV(FCF_t) + PV(TV)`.

`Valor del patrimonio = EV DCF − Net Debt`.

`Valor intrínseco por acción = Valor del patrimonio / acciones totalmente diluidas`.

`Margen de seguridad = (Valor intrínseco − Precio de mercado) / Valor intrínseco`.

El signo del margen de seguridad se calcula con la fórmula del manual: si el precio es mayor que el valor intrínseco, el resultado es negativo. En la práctica se suele escribir también como `1 − precio / valor intrínseco`, pero se debe conservar la misma definición.

---

## 30.5 Cálculo de todos los campos solicitados

### 30.5.1 Resumen operativo y financiero

| Indicador | A | B | C | D | E |
|---|---:|---:|---:|---:|---:|
| Ingresos (USD m) | 5.000,00 | 2.000,00 | 3.000,00 | 1.500,00 | 1.200,00 |
| Ingresos Growth | 8,70 % | −4,76 % | 15,38 % | −25,00 % | 50,00 % |
| Gross Margin | 62,00 % | 28,00 % | 45,00 % | 20,00 % | 55,00 % |
| Operating Margin | 25,00 % | 8,00 % | 18,00 % | 3,00 % | 12,00 % |
| Net Margin | 20,00 % | 3,00 % | 13,33 % | 0,63 % | 7,50 % |
| EPS (USD/acción) | 10,00 | 0,30 | 4,00 | 0,0938 | 0,90 |
| P/E | 22,00x | 11,67x | 8,00x | 8,53x | 22,22x |
| P/B | 5,50x | 0,47x | 1,28x | 0,10x | 2,00x |
| EV/EBITDA | 17,93x | 7,50x | 7,00x | 33,00x | 14,44x |
| Debt/EBITDA | 2,22x | 5,50x | 2,50x | 33,33x | 4,44x |
| ROE | 26,32 % | 4,07 % | 16,67 % | 1,14 % | 10,00 % |
| ROIC | 15,50 % | 5,27 % | 11,91 % | 1,22 % | 7,20 % |
| FCF histórico (USD m) | 850,00 | 60,00 | 380,00 | −20,00 | 100,00 |
| FCF Yield | 3,86 % | 8,57 % | 11,88 % | −25,00 % | 5,00 % |
| Dividend Yield | 1,09 % | 17,14 % | 3,75 % | 25,00 % | 0,25 % |
| Payout Ratio | 24,00 % | 200,00 % | 30,00 % | 213,33 % | 5,56 % |
| Ingresos CAGR 2021–2025 | 9,33 % | 2,53 % | 12,10 % | −15,91 % | 36,07 % |

**Nota sobre FCF Yield.** La tabla usa FCF histórico después de intereses dividido por la capitalización, por lo que es un rendimiento para el accionista. Para comparar el rendimiento operativo de la empresa con su valor empresa se puede calcular además `FCFF/EV`: A `3,72 %`, B `6,67 %`, C `7,14 %`, D `0,25 %` y E `4,62 %`. No se deben mezclar los dos denominadores en una misma comparación.

### 30.5.2 Auditoría de los cálculos

**Empresa A.** Capitalización: `220 × 100 = 22.000`. EV: `22.000 + (3.000 − 800) = 24.200`. P/E: `220 / 10 = 22,00x`. P/B: `22.000 / 4.000 = 5,50x`. EV/EBITDA: `24.200 / 1.350 = 17,93x`. Debt/EBITDA: `3.000 / 1.350 = 2,22x`. ROE: `1.000 / ((3.600 + 4.000)/2) = 26,32 %`. NOPAT: `1.250 × 0,75 = 937,50`; ROIC: `937,50 / ((5.900 + 6.200)/2) = 15,50 %`. FCF yield: `850 / 22.000 = 3,86 %`. Dividend yield: `2,40 / 220 = 1,09 %`. Payout: `(2,40 × 100) / 1.000 = 24,00 %`.

**Empresa B.** Capitalización: `3,50 × 200 = 700`. EV: `700 + (1.100 − 300) = 1.500`. P/E: `3,50 / 0,30 = 11,67x`. P/B: `700 / 1.500 = 0,47x`. EV/EBITDA: `1.500 / 200 = 7,50x`. Debt/EBITDA: `1.100 / 200 = 5,50x`. ROE: `60 / ((1.450 + 1.500)/2) = 4,07 %`. NOPAT: `160 × 0,75 = 120`; ROIC: `120 / ((2.250 + 2.300)/2) = 5,27 %`. FCF yield: `60 / 700 = 8,57 %`. Dividend yield: `0,60 / 3,50 = 17,14 %`. Payout: `(0,60 × 200) / 60 = 200 %`.

**Empresa C.** Capitalización: `32 × 100 = 3.200`. EV: `3.200 + (1.500 − 500) = 4.200`. P/E: `32 / 4 = 8,00x`. P/B: `3.200 / 2.500 = 1,28x`. EV/EBITDA: `4.200 / 600 = 7,00x`. Debt/EBITDA: `1.500 / 600 = 2,50x`. ROE: `400 / ((2.300 + 2.500)/2) = 16,67 %`. NOPAT: `540 × 0,75 = 405`; ROIC: `405 / ((3.300 + 3.500)/2) = 11,91 %`. FCF yield: `380 / 3.200 = 11,88 %`. Dividend yield: `1,20 / 32 = 3,75 %`. Payout: `(1,20 × 100) / 400 = 30 %`.

**Empresa D.** Capitalización: `0,80 × 100 = 80`. EV: `80 + (2.000 − 100) = 1.980`. P/E: `0,80 / 0,0938 = 8,53x` aproximadamente. P/B: `80 / 800 = 0,10x`. EV/EBITDA: `1.980 / 60 = 33,00x`. Debt/EBITDA: `2.000 / 60 = 33,33x`. ROE: `9,38 / ((850 + 800)/2) = 1,14 %`. NOPAT: `45 × 0,75 = 33,75`; ROIC: `33,75 / ((2.850 + 2.700)/2) = 1,22 %`. FCF yield: `−20 / 80 = −25 %`. Dividend yield: `0,20 / 0,80 = 25 %`. Payout: `(0,20 × 100) / 9,38 = 213,33 %`.

**Empresa E.** Capitalización: `20 × 100 = 2.000`. EV: `2.000 + (800 − 200) = 2.600`. P/E: `20 / 0,90 = 22,22x`. P/B: `2.000 / 1.000 = 2,00x`. EV/EBITDA: `2.600 / 180 = 14,44x`. Debt/EBITDA: `800 / 180 = 4,44x`. ROE: `90 / ((800 + 1.000)/2) = 10 %`. NOPAT: `144 × 0,75 = 108`; ROIC: `108 / ((1.400 + 1.600)/2) = 7,20 %`. FCF yield: `100 / 2.000 = 5,00 %`. Dividend yield: `0,05 / 20 = 0,25 %`. Payout: `(0,05 × 100) / 90 = 5,56 %`.

---

## 30.6 DCF completo de los cinco casos

### 30.6.1 Resultado del escenario central

| Empresa | PV FCF explícitos | TV | PV de TV | EV DCF | Deuda neta | Valor del patrimonio | IV/acción | Precio | Margen de seguridad |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| A | 4.376,53 | 26.003,31 | 17.697,42 | 22.073,95 | 2.200,00 | 19.873,95 | 198,74 | 220,00 | **−10,70 %** |
| B | 423,25 | 1.828,09 | 1.188,13 | 1.611,38 | 800,00 | 811,38 | 4,06 | 3,50 | **13,73 %** |
| C | 1.420,14 | 6.024,25 | 3.740,58 | 5.160,72 | 1.000,00 | 4.160,72 | 41,61 | 32,00 | **23,09 %** |
| D | 15,67 | 35,52 | 20,16 | 35,83 | 1.900,00 | −1.864,17 | −18,64 | 0,80 | **No interpretable** |
| E | 762,71 | 4.436,32 | 2.632,74 | 3.395,45 | 600,00 | 2.795,45 | 27,95 | 20,00 | **28,46 %** |

Los valores están en USD m, excepto IV/acción, precio y margen. El valor terminal de A representa aproximadamente el 80 % de su EV DCF; en C, aproximadamente el 73 %. Esa concentración es una advertencia: el valor depende mucho de la duración de la ventaja y de la tasa de descuento.

### 30.6.2 Ejemplo de cálculo de A

1. FCFF base: `900`.
2. Crecimiento anual del FCF: `7 %`.
3. WACC: `8 %`; crecimiento terminal: `3 %`.
4. FCF del año 1: `900 × 1,07 = 963`.
5. PV del año 1: `963 / 1,08 = 891,67`.
6. FCF del año 5: `900 × 1,07^5 = 1.262,30`.
7. Valor terminal: `1.262,30 × 1,03 / (0,08 − 0,03) = 26.003,31`.
8. PV del valor terminal: `26.003,31 / 1,08^5 = 17.697,42`.
9. Suma de flujos explícitos: `4.376,53`.
10. EV: `4.376,53 + 17.697,42 = 22.073,95`.
11. Equity: `22.073,95 − 2.200 = 19.873,95`.
12. IV/acción: `19.873,95 / 100 = 198,74`.
13. Margen: `(198,74 − 220) / 198,74 = −10,70 %`.

El resultado no dice que A sea mala empresa. Dice que, bajo esos supuestos, el precio de 220 supera el valor central estimado y no ofrece margen de seguridad.

### 30.6.3 Sensibilidad del caso C

Se mantiene el FCFF base de 300, la deuda neta de 1.000 y 100 millones de acciones. Cada celda es IV/acción.

| Crecimiento FCF \ WACC | 9 % | 10 % | 11 % | 12 % | 13 % |
|---:|---:|---:|---:|---:|---:|
| 4 % | 40,47 | 33,69 | 28,51 | 24,42 | 21,11 |
| 6 % | 44,95 | 37,51 | 31,82 | 27,33 | 23,70 |
| 8 % | 49,77 | 41,61 | 35,37 | 30,45 | 26,48 |
| 10 % | 54,94 | 46,00 | 39,18 | 33,80 | 29,45 |
| 12 % | 60,47 | 50,70 | 43,25 | 37,37 | 32,62 |

Con WACC de 10 % y crecimiento FCF de 8 %, el crecimiento terminal de 1,5 %, 2,0 %, 2,5 %, 3,0 % y 3,5 % produce respectivamente 36,88, 39,10, 41,61, 44,47 y 47,78 USD/acción. La diferencia entre 2,5 % y 3,5 % ya es de 6,17 USD por acción; por eso el supuesto debe justificarse.

### 30.6.4 Escenarios de C

| Escenario | FCFF base | Crecimiento FCF | WACC | `g` terminal | IV/acción | Lectura |
|---|---:|---:|---:|---:|---:|---|
| Pesimista | 220 | 3 % | 12 % | 1,5 % | 12,61 | Requisitos más difíciles, múltiplo y presión de financiación |
| Base | 300 | 8 % | 10 % | 2,5 % | 41,61 | Supuestos centrales |
| Optimista | 370 | 12 % | 9 % | 3,0 % | 82,84 | Mejor ejecución y menor riesgo |

Un escenario no es una predicción. Su función es hacer explícito qué tendría que ser cierto para que el precio tenga sentido.

---

## 30.7 Diferencias entre las empresas y riesgos

### A — Excelente, pero cara

**Operación:** Ingresos Growth de 8,70 %, CAGR de 9,33 %, margen bruto de 62 %, margen operativo de 25 %, ROIC de 15,50 % y Debt/EBITDA de 2,22x. El negocio parece tener una gran capacidad de caja y rentabilidad.

**Precio:** P/E de 22x, P/B de 5,50x, EV/EBITDA de 17,93x y FCF Yield de 3,86 %. El precio exige que los márgenes y el crecimiento duren. El DCF central da 198,74 USD/acción frente a 220; el margen de seguridad es negativo.

**Riesgos:** compresión del P/E, desaceleración del crecimiento, obsolescencia, concentración y un WACC mayor. El ROIC superior al WACC no protege frente a una sobrevaloración de entrada.

### B — Operación floja, precio relativamente bajo y equilibrio frágil

**Operación:** Ingresos Growth de −4,76 %, CAGR de 2,53 %, margen operativo de 8 %, ROE de 4,07 % y ROIC de 5,27 %. El crecimiento y la rentabilidad son débiles.

**Precio:** P/E de 11,67x, P/B de 0,47x, EV/EBITDA de 7,50x y FCF Yield de 8,57 %. Frente a los demás casos, los múltiplos son más bajos, pero la empresa tiene Debt/EBITDA de 5,50x y un payout de 200 %. El dividendo del 17,14 % no está cubierto por el beneficio y probablemente obliga a usar deuda o reservas; el DCF central da un margen de seguridad positivo moderado, no una compra automática.

**Riesgos:** caída de ingresos, baja liquidez, vencimientos, recorte del dividendo, ROIC inferior al WACC del 9 % y erosión de caja. El DCF central de 4,06 USD/acción ofrece solo un margen moderado; no convierte el caso en una compra automática.

### C — Calidad operativa alta y precio razonable sólo bajo el escenario central

**Operación:** Ingresos Growth de 15,38 %, CAGR de 12,10 %, margen bruto de 45 %, margen operativo de 18 %, ROIC de 11,91 %, Debt/EBITDA de 2,50x y FCF Yield de 11,88 %.

**Precio:** P/E de 8x, P/B de 1,28x, EV/EBITDA de 7x y DCF central de 41,61 USD/acción. El margen de seguridad central es 23,09 %, pero depende de que el crecimiento del FCF y el WACC supuestos se materialicen; no es una etiqueta permanente de empresa barata.

**Riesgos:** el supuesto de 8 % de crecimiento FCF y 2,5 % terminal, la sensibilidad a WACC y la posibilidad de que los múltiplos sectoriales sean más bajos. La calidad y el precio razonable siguen requiriendo seguimiento de competencia, retención y deuda.

### D — Deterioro y apalancamiento: posible trampa de valor

**Operación:** Ingresos Growth de −25 %, CAGR de −15,91 %, margen operativo de 3 %, ROE de 1,14 %, ROIC de 1,22 % y Debt/EBITDA de 33,33x. FCF histórico negativo.

**Apariencia de oportunidad:** P/E aproximado de 8,53x, P/B de 0,10x y Dividend Yield de 25 %. El dividendo consume más de 200 % del beneficio y no está respaldado por FCF; por ello el P/B bajo no prueba una ganga.

**DCF:** el valor central del equity es negativo porque la deuda absorbe casi todo el EV. El margen porcentual no es interpretable. Esto no demuestra que el equity no pueda tener valor en un escenario de recuperación; demuestra que el precio de las acciones no puede analizarse ignorando la deuda y la caída del negocio.

**Riesgos:** deterioro estructural, refinanciación, cláusulas financieras, litigios, seguridad, remediación ambiental y obligación de recapitalización. Un P/B bajo puede ser una señal de activos de mala calidad, no de infravaloración.

### E — Empresa en crecimiento

**Operación:** Ingresos Growth de 50 %, CAGR de 36,07 %, margen bruto de 55 %, margen operativo de 12 % y ROIC de 7,20 %. El crecimiento es rápido, pero el ROIC actual está por debajo del WACC supuesto de 11 %.

**Precio:** P/E de 22,22x, P/B de 2x, EV/EBITDA de 14,44x y FCF Yield de 5 %. El DCF central da 27,95 USD/acción y un margen de 28,46 %, pero depende de que el crecimiento se mantenga y el ROIC futuro mejore.

**Riesgos:** ejecución, retención, CapEx, financiación, dilución y múltiplo. Crecer no crea valor si cada unidad de capital nuevo devuelve menos que su coste; una empresa puede crecer y, al mismo tiempo, destruir valor.

---

## 30.8 Lectura conjunta: sin declarar una ganadora

| Dimensión | A | B | C | D | E |
|---|---|---|---|---|---|
| Calidad operativa actual | Alta | Baja/media | Alta | Baja | Media y en mejora |
| Precio relativo | Exigente | Bajo, pero con riesgo | Razonable en el caso | Engañoso | Exigente si falla el crecimiento |
| Crecimiento | Moderado | Débil/estable | Bueno | Negativo | Muy alto |
| Caja | Fuerte | Positiva, pero vulnerable | Fuerte | Negativa | Positiva y en expansión |
| Deuda | Manejable | Alta | Manejable | Crítica | Elevada para una empresa joven |
| Riesgo principal | Compresión del múltiplo | Solvencia y dividendo | Supuestos del DCF | Descenso y deuda | Retorno insuficiente y financiación |
| Pregunta de tesis | ¿Cuánto crecimiento falta? | ¿Puede sobrevivir y pagar? | ¿Puede mantener ROIC>WACC? | ¿Cuánto vale el patrimonio después de la deuda? | ¿Cuándo superará ROIC al WACC? |

No existe una respuesta única. Un inversor de largo plazo con horizonte y tolerancia distintos puede valorar C de forma diferente de E; un inversor que necesita liquidez puede preferir un ETF; un portafolio puede necesitar bonos. La calidad se combina con precio, diversificación, fiscalidad, liquidez y objetivos.

## 30.9 Conclusiones del ejercicio

1. Un P/E bajo puede ser una señal de beneficio en pico, un ciclo o un balance frágil.
2. Un P/B bajo puede reflejar activos deteriorados, no una ganga.
3. Un Dividend Yield alto puede ser una distribución de reservas o una señal de peligro.
4. El ROE debe leerse junto con ROIC y deuda.
5. El FCF positivo no basta: hay que preguntarse cuánto CapEx era necesario para mantenerlo.
6. El DCF es especialmente sensible a WACC, crecimiento terminal y margen terminal.
7. El margen de seguridad reduce la incertidumbre, pero no elimina el riesgo de modelo, de negocio, de mercado o de conducta.

---

*Los cálculos de este capítulo son hipotéticos y no constituyen una recomendación.*
