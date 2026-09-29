## Anexo terminológico y aliases de fórmulas

Este anexo conserva los nombres ingleses habituales que aparecen en bases de datos, proveedores y textos de CFA, junto con su equivalente en español. Los alias no cambian la metodología: todas las filas deben leerse con las variables, el periodo y las definiciones del capítulo correspondiente.

| Alias inglés | Equivalente en español | Fórmula o definición breve | Advertencia de uso |
|---|---|---|---|
| **EV/Sales** | EV/ventas o valor empresa/ingresos | `EV / Revenue` | No neutraliza márgenes, intensidad de capital ni calidad del beneficio; comparar dentro del sector. |
| **FCF Growth** | Crecimiento del FCF | `FCF_t / FCF_(t−1) − 1` sólo si ambos son positivos | Si cualquiera es cero/negativo, mostrar `ΔFCF` y el cambio de signo; no usar CAGR con FCF negativo. |
| **Book Value Growth** | Crecimiento del valor contable | `Book Equity_t / Book Equity_(t−1) − 1` | El patrimonio puede crecer por OCI, emisiones o recompras, no solo por beneficios. |
| **Standard Deviation** | Desviación estándar | `σ = √[Σ(R_i − R̄)^2 / N]` o `/(N−1)` | Mide dispersión de retornos, no pérdida permanente ni riesgo fundamental. |
| **Expected Return** | Retorno esperado | `E(R) = Σ p_s R_s` | Es una media ponderada por probabilidades, no una predicción. |
| **Portfolio Return** | Retorno del portafolio | `R_p = Σ w_i R_i` | Usar la misma periodicidad y reconocer comisiones, impuestos y reequilibrio. |
| **Coupon** | Cupón | `C = F × c_N`; pago periódico `C/m` | `c_N` es la tasa nominal anual; no equivale al rendimiento total. |
| **Coupon Rate** | Tasa de cupón | `c_N = C/F` (tasa nominal anual contractual) | El cupón fijo no protege frente a cambios de precio por tasas. |
| **Real Return** | Retorno real | `(1 + R_nominal)/(1 + inflación) − 1` | La aproximación `R_nominal − inflación` falla con tasas extremas o periodos largos. |
| **Intrinsic Value** | Valor intrínseco | `PV de flujos futuros normalizados` | Es un intervalo dependiente de supuestos, no un precio que se pueda descubrir. |
| **Margin of Safety** | Margen de seguridad | `(Valor intrínseco − precio) / valor intrínseco` | No es válido como porcentaje automático si el valor intrínseco es negativo. |
| **Terminal Value** | Valor terminal | `FCFF_(n+1)/(WACC−g)` o `FCFE_(n+1)/(K_e−g)` | El tipo de flujo determina la tasa; requiere `r>g`, horizonte coherente y revisión de concentración. |
| **WACC** | Coste medio ponderado de capital | `(E/V)Re + (D/V)Rd(1−T)` | Usar pesos de mercado y coherencia con FCFF. |
| **CAPM** | Modelo de valoración de activos de capital | `E(R_i)=R_f+β_i(E(R_m)−R_f)` | Es un modelo de equilibrio bajo supuestos; no captura todo el riesgo. |
| **EV** | Valor empresa | `Market cap + debt + preferred + NCI + otras obligaciones semejantes a deuda − cash` | Ajustar obligaciones semejantes a deuda, participaciones no controlantes, inversiones y arrendamientos de forma coherente; el denominador debe usar el mismo perímetro. |
| **FCF Yield** | Rendimiento del flujo de caja libre | `FCF histórico / market cap`, `FCFE / market cap` o `FCFF / EV` | Declarar siempre flujo, denominador y periodo; `CFO−CapEx` no es FCFE puro. |
| **Dividend Yield** | Rentabilidad por dividendo | `DPS / precio` | No es retorno total ni está garantizado. |
| **Payout Ratio** | Ratio de reparto | `dividendos / beneficio disponible para comunes` | Puede superar 100 % si se pagan reservas o se financia con deuda; no confundir con cobertura. |
| **ROE** | Rentabilidad sobre patrimonio | `Beneficio atribuible a comunes / patrimonio común medio` | El apalancamiento y el patrimonio negativo pueden distorsionarlo; no mezclar bases. |
| **ROIC** | Rentabilidad sobre capital invertido | `NOPAT / capital invertido medio` | Definir capital, fondo de comercio, arrendamientos y tasa fiscal con consistencia. |
| **ROCE** | Rentabilidad sobre capital empleado | `EBIT / average capital employed` | Útil para eliminar la financiación, pero sensible a clasificación de activos. |
| **NOPAT** | Beneficio operativo neto después de impuestos | `EBIT × (1−T)` | Usar una tasa normalizada y explicar partidas no operativas. |
| **CAGR** | Tasa compuesta de crecimiento anual | `(V_final/V_inicial)^(1/n)−1` | Necesita extremos positivos y comparables. |
| **DCF** | Flujos de caja descontados | `Σ FCFF_t/(1+WACC)^t + PV(TV)` para empresa; FCFE usa `K_e` y Valor del patrimonio | Es un modelo; declarar flujo, tasa, moneda, WACC/g y calidad del flujo. |
| **Value Trap** | Trampa de valor | Activo aparentemente barato cuyo valor intrínseco es menor | No se diagnostica solo con un múltiplo bajo. |
| **Moat** | Ventaja competitiva | Capacidad de proteger retornos frente a competidores | Debe verificarse con precios, retención, cuota y estructura de costes. |

### Fórmulas de transversales que conviene tener a mano

| Fórmula | Uso | Limitación principal |
|---|---|---|
| `Retorno total = (P_1 − P_0 + distribuciones − costes)/P_0` | Medir precio, distribución y costes del periodo | Es un retorno bruto o neto según los costes incluidos; no incluye automáticamente impuestos o inflación. |
| `Correlación = Cov(R_i,R_j)/(σ_iσ_j)` | Medir movimiento conjunto | Puede cambiar en una crisis y no mide causalidad. |
| `Varianza = σ²` | Describir dispersión | Depende de la frecuencia, la muestra y las ventanas. |
| `Sharpe = (R_p − R_f)/σ_p` | Retorno exceso por riesgo de volatilidad | Depende del periodo, la frecuencia y no ignora la máxima caída. |
| `Sortino = (R_p − MAR)/downside deviation` | Penalizar solo downside | No captura todas las asimetrías de cola. |
| `Maximum Drawdown = min(V_t/peak_t −1)` | Describir la mayor caída desde un máximo | Es retrospectivo y depende de la ruta. |
| `WACC spread = ROIC − WACC` | Aproximar EVA anual | No sustituye el VNP de un flujo, el análisis de reinversión ni la duración. |
| `Payout cover = FCFE / dividends` o `OE / dividends` | Comprobar cobertura de distribución | FCF histórico, FCFE y Owner Earnings son flujos distintos; no intercambiarlos. |
| `Debt service cover = (CFADS − CapEx de mantenimiento)/(intereses + principal programado)` | Medir servicio de deuda | CFADS, mantenimiento, calendario y principal deben ser contractualmente reproducibles. |

> **Nota de terminología:** “renta fija” no significa retorno fijo; “capital preservation” no significa capital garantizado; “high yield” no significa dividendo seguro. Las etiquetas de proveedores son atajos y deben sustituirse por la definición, fecha y contexto.
