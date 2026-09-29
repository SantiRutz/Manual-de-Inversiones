# Apéndices

## Apéndice A. Conciliación y mapa de fórmulas del capítulo 30

### A.1 Datos de entrada y resultados

Todos los casos del capítulo 30 son ficticios. Las cifras monetarias están en millones de USD (USD m), salvo precio, EPS y DPS, que están en USD por acción. Los datos de mercado son del 31 de diciembre de 2025; el corte editorial es del 24 de septiembre de 2026.

| Concepto | A | B | C | D | E |
|---|---:|---:|---:|---:|---:|
| Ingresos 2025 (USD m) | 5.000 | 2.000 | 3.000 | 1.500 | 1.200 |
| Ingresos 2024 (USD m) | 4.600 | 2.100 | 2.600 | 2.000 | 800 |
| Ingresos 2021 (USD m) | 3.500 | 1.810 | 1.900 | 3.000 | 350 |
| Beneficio neto (USD m) | 1.000 | 60 | 400 | 9,38 | 90 |
| EPS (USD/acción) | 10,00 | 0,30 | 4,00 | 0,0938 | 0,90 |
| Capitalización (USD m) | 22.000 | 700 | 3.200 | 80 | 2.000 |
| Deuda neta (USD m) | 2.200 | 800 | 1.000 | 1.900 | 600 |
| EV de mercado (USD m) | 24.200 | 1.500 | 4.200 | 1.980 | 2.600 |
| EBITDA (USD m) | 1.350 | 200 | 600 | 60 | 180 |
| FCF histórico (USD m) | 850 | 60 | 380 | −20 | 100 |
| FCFF normalizado para DCF (USD m) | 900 | 100 | 300 | 5 | 120 |
| WACC supuesto | 8,0 % | 9,0 % | 10,0 % | 12,0 % | 11,0 % |
| Crecimiento terminal `g` | 3,0 % | 2,5 % | 2,5 % | 1,0 % | 4,0 % |
| IV/acción central (USD) | 198,74 | 4,06 | 41,61 | −18,64 | 27,95 |
| Precio (USD) | 220,00 | 3,50 | 32,00 | 0,80 | 20,00 |
| Margen de seguridad | −10,70 % | 13,73 % | 23,09 % | No interpretable | 28,46 % |

El margen de seguridad usa siempre `MoS = (IV − precio) / IV` cuando la IV es positiva. En D la IV es negativa: el porcentaje se marca como no interpretable y no se presenta como una oportunidad automática. `1 − precio/IV` es la misma expresión; `1 − IV/precio` es una brecha inversa y no debe llamarse margen de seguridad.

### A.2 Fórmulas de control

- `Revenue Growth = Revenue_2025 / Revenue_2024 − 1`.
- `CAGR = (Revenue_2025 / Revenue_2021)^(1/4) − 1`.
- `P/E = precio / EPS`.
- `P/B = capitalización / patrimonio final`.
- `EV = capitalización + deuda neta` en la simplificación del caso; en un análisis real se ajustan preferentes, no controlantes, arrendamientos, pensiones y otros derechos.
- `EV/EBITDA = EV / EBITDA`.
- `Debt/EBITDA = deuda bruta / EBITDA`; no se debe sustituir inadvertidamente por deuda neta.
- `ROE = beneficio neto / ((patrimonio inicial + patrimonio final)/2)`.
- `NOPAT = EBIT × (1 − tasa fiscal normalizada)`.
- `ROIC = NOPAT / ((capital invertido inicial + capital invertido final)/2)`.
- `FCF histórico = CFO − CapEx`; en estos casos es un flujo histórico apalancado, no FCFF puro.
- `FCF Yield = FCF histórico / capitalización`; no mezclarlo con `FCFF/EV`.
- `Dividend Yield = DPS / precio`.
- `Payout Ratio = dividendos totales / beneficio neto`, equivalente a `DPS/EPS` con la misma base de acciones.

Los resultados del capítulo 30 deben recalcularse si se cambia una fecha, una acción, una definición de deuda o un flujo. No se deben copiar números de otro caso.

### A.3 DCF de control

Para `t = 1,...,5`:

`FCF_t = FCFF_0 × (1 + g_t)`.

`PV(FCFF_t) = FCFF_t / (1 + WACC)^t`.

`TV_5 = FCFF_5 × (1 + g) / (WACC − g)`.

`PV(TV) = TV_5 / (1 + WACC)^5`.

`EV DCF = Σ PV(FCFF_t) + PV(TV)`.

`Equity Value = EV DCF − deuda neta`.

`Valor intrínseco por acción = Equity Value / acciones totalmente diluidas`.

`Margen de seguridad = (Valor intrínseco − Precio) / Valor intrínseco`.

El WACC se utiliza con FCFF para obtener EV. Si se utilizara FCFE, se descontaría con el coste del patrimonio y se llegaría directamente al Equity Value; no se aplicarían ambas tasas al mismo flujo.

### A.4 Resultados centrales del DCF

| Caso | PV de flujos explícitos | PV del valor terminal | EV DCF | Equity DCF | IV/acción | Precio | MoS |
|---|---:|---:|---:|---:|---:|---:|---:|
| A | 4.376,53 | 17.697,42 | 22.073,95 | 19.873,95 | 198,74 | 220,00 | −10,70 % |
| B | 423,25 | 1.188,13 | 1.611,38 | 811,38 | 4,06 | 3,50 | 13,73 % |
| C | 1.420,14 | 3.740,58 | 5.160,72 | 4.160,72 | 41,61 | 32,00 | 23,09 % |
| D | 15,67 | 20,16 | 35,83 | −1.864,17 | −18,64 | 0,80 | No interpretable |
| E | 762,71 | 2.632,74 | 3.395,45 | 2.795,45 | 27,95 | 20,00 | 28,46 % |

El valor terminal representa aproximadamente el 80 % del EV de A y el 73 % del EV de C. Esa concentración es una advertencia de fragilidad del modelo, no un error aritmético.

---

## Apéndice B. Sensibilidad del DCF del caso C

Se usa FCFF base de 300, deuda neta de 1.000 y 100 millones de acciones. Cada celda es el valor intrínseco por acción.

| Crecimiento del FCF / WACC | 9 % | 10 % | 11 % | 12 % | 13 % |
|---:|---:|---:|---:|---:|---:|
| 4 % | 40,47 | 33,69 | 28,51 | 24,42 | 21,11 |
| 6 % | 44,95 | 37,51 | 31,82 | 27,33 | 23,70 |
| 8 % | 49,77 | 41,61 | 35,37 | 30,45 | 26,48 |
| 10 % | 54,94 | 46,00 | 39,18 | 33,80 | 29,45 |
| 12 % | 60,47 | 50,70 | 43,25 | 37,37 | 32,62 |

Con WACC de 10 % y crecimiento del FCF de 8 %, los valores terminales de 1,5 %, 2,0 %, 2,5 %, 3,0 % y 3,5 % producen 36,88, 39,10, 41,61, 44,47 y 47,78 USD/acción. La matriz demuestra que `g` y WACC deben justificarse, no elegirse para obtener el precio deseado.

---

## Apéndice C. Unidades, signos y estados

| Elemento | Convención del manual |
|---|---|
| `M` | Millones de USD |
| `B` | Miles de millones de USD |
| Precio, EPS, DPS | USD por acción |
| Porcentaje | Tasa decimal expresada en %, por ejemplo 8 % = 0,08 |
| Múltiplo | `x`, por ejemplo 12x |
| Puntos porcentuales | `pp`; 8 % a 10 % es +2 pp |
| WACC | Tasa anual compatible con los flujos y su moneda |
| Inflación | Tasa del periodo y de la moneda de comparación |
| Positivo en flujo | Entrada de efectivo o mayor resultado |
| Negativo en flujo | Salida de efectivo o menor resultado |
| `NM` | No significativo o no interpretable |

Antes de comparar, comprobar que ambas empresas usan la misma moneda, fecha, norma contable, perímetro, definición de acciones y convención de deuda.

---

## Apéndice D. Registro de fuentes, fechas y versiones

- Fecha de corte editorial: **24 de septiembre de 2026**.
- Fecha de los datos de los casos: **31 de diciembre de 2025**, datos sintéticos.
- Fuentes de referencia: IFRS Foundation, SEC EDGAR e Investor.gov, CFA Institute, FINRA, Federal Reserve Economic Data, U.S. Bureau of Labor Statistics y materiales públicos de Aswath Damodaran.
- No se incorporan datos actuales de cotizaciones, tipos, inflación o resultados de empresas reales.
- Para actualizar un caso real: registrar emisor, ticker/ISIN, moneda, fecha de precio, fuente de acciones, deuda, efectivo, estados financieros, norma contable, tipo de cambio y supuesto de valoración.

### Nota final

El valor de un manual no está en producir una cifra, sino en hacer visible la relación entre esa cifra, sus supuestos y los riesgos. Si una conclusión no puede explicarse con evidencia, debe permanecer como una hipótesis y no como una tesis.
