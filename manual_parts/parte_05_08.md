# 5. Fórmulas de crecimiento

El crecimiento responde una pregunta sencilla: **¿cuánto cambió una magnitud y con qué rapidez?** Antes de elegir una fórmula hay que definir el período, la serie, la moneda y la base de comparación. “Crecimiento de 20 %” no significa lo mismo durante un mes que durante diez años.

## 5.1 Crecimiento porcentual

### Ficha de la fórmula: crecimiento porcentual simple

1. **Nombre:** crecimiento porcentual simple o tasa de variación.
2. **Propósito:** medir cuánto aumenta o disminuye una magnitud respecto de un período o punto de comparación.
3. **Variables:** valor actual `V₁`, valor anterior `V₀` y variación `ΔV = V₁ − V₀`.
4. **Fórmula:** `g = (V₁ − V₀) / V₀ = V₁ / V₀ − 1`. Para expresar el resultado en porcentaje, `g × 100`.
5. **Pasos:** identificar `V₀` y `V₁`; calcular la diferencia; dividir por la base; convertir a porcentaje; conservar el signo y redondear al final.
6. **Ejemplo numérico:** los ingresos pasan de 100 a 110: `g = (110 − 100) / 100 = 0,10 = 10 %`. Si pasan de 110 a 99: `g = (99 − 110) / 110 = −10 %`.
7. **Interpretación:** +10 % significa que la cifra nueva es 1,10 veces la anterior; −10 %, que es 0,90 veces. No equivale a diez puntos porcentuales de margen.
8. **Rangos/cautelas:** no usar cuando `V₀ = 0` o es negativo. Con series volátiles, un pequeño cambio puede producir porcentajes enormes. No mezclar monedas, normas contables o períodos sin ajustar.
9. **Favorable:** suele ser favorable cuando es sostenido, rentable y se apoya en caja. Una expansión improbable puede elevar los ingresos sin crear valor.
10. **Desfavorable:** es desfavorable si la caída es estructural, prolongada, reduce el margen o se consigue con descuentos que destruyen rentabilidad.
11. **Errores:** dividir por el valor final, mezclar datos trimestrales con anuales, sumar porcentajes de años distintos o interpretar 10 % como diez puntos de margen.
12. **Cuándo no usarla:** con cero, signos negativos, cambios contables, fusiones o cuando se busca resumir una trayectoria de varios años.
13. **Indicadores complementarios:** margen EBITDA, FCF, ROIC, participación de mercado, retención de clientes y calidad del crecimiento.

### Aplicación a ingresos, beneficio y caja

| Magnitud | Anterior | Actual | Cálculo | Crecimiento |
|---|---:|---:|---:|---:|
| Ingresos | 100 | 110 | `10 / 100` | +10,0 % |
| Beneficio por acción | 5,00 | 4,50 | `−0,50 / 5,00` | −10,0 % |
| Flujo de caja libre | 8 | 9,6 | `1,6 / 8` | +20,0 % |

El crecimiento de cada indicador cuenta una historia distinta. Los ingresos y el beneficio pueden crecer mientras el FCF cae por inventarios, cuentas por cobrar o capex. Conviene observar simultáneamente el margen, la conversión de beneficio a caja y el capital invertido.

## 5.2 CAGR: tasa de crecimiento anual compuesta

### Ficha de la fórmula: CAGR

1. **Nombre:** Compound Annual Growth Rate, tasa compuesta de crecimiento anual.
2. **Propósito:** resumir en una sola tasa anual equivalente el cambio de una cifra positiva entre un inicio y un final separados por varios años.
3. **Variables:** valor inicial `V₀`, valor final `Vₙ` y número de años o períodos `n`.
4. **Fórmula:** `CAGR = (Vₙ / V₀)^(1/n) − 1`.
5. **Pasos:** dividir el valor final por el inicial; calcular la raíz `n`; restar 1; expresar el resultado en porcentaje; reconstruir la trayectoria para comprobarlo.
6. **Ejemplo numérico:** una serie pasa de 100 a 180 en cinco años: `CAGR = (180 / 100)^(1/5) − 1 = 12,4746 %`.
7. **Interpretación:** 12,4746 % anual compuesto lleva exactamente 100 a 180 en cinco años; no afirma que cada año haya crecido 12,4746 %. Para una serie real multianual, `CAGR_real = [(V_n/V_0)/(CPI_n/CPI_0)]^(1/n)−1`; no se sustituye por `CAGR_nominal−inflación`.
8. **Rangos/cautelas:** requiere `V₀` y `Vₙ` positivos, `n > 0` y unidades homogéneas. Si hay adquisiciones, desconsolidaciones o cambios contables, reconstruir una serie comparable.
9. **Favorable:** una CAGR alta y persistente es favorable si la respaldan los márgenes, el ROIC y el FCF, y no exige un nivel perverso de inversión.
10. **Desfavorable:** una CAGR alta financiada con deuda cara, consumo de caja o dilución puede reducir el valor por acción.
11. **Errores:** usar aritmética en lugar de `1/n`, cambiar la base, olvidar contar años o tomar un CAGR pasado como crecimiento futuro garantizado.
12. **Cuándo no usarla:** con valor inicial cero o negativo, datos no comparables, un solo año o cuando importa una trayectoria irregular. Si el FCF parte de cero o es negativo, la CAGR puede no ser interpretable.
13. **Indicadores complementarios:** CAGR de cada año, margen, conversión de FCF, ROIC, concentración, retención y métricas por acción.

### Cálculo de 100 a 180 en cinco años, paso a paso

1. **Identificar los extremos:** `V₀ = 100`, `V₅ = 180`, `n = 5`.
2. **Calcular el factor total:** `180 / 100 = 1,80`.
3. **Obtener una raíz quinta:** `1,80^(1/5) = 1,124746113`.
4. **Restar uno:** `1,124746113 − 1 = 0,124746113`.
5. **Expresar en porcentaje:** `0,124746113 × 100 = 12,4746 % anual`.
6. **Reconstruir cada año:** 100 × 1,124746113 = 112,4746; 112,4746 × 1,124746113 = 126,5054; 126,5054 × 1,124746113 = 142,2864; 142,2864 × 1,124746113 = 160,0361; 160,0361 × 1,124746113 = 180,0000.
7. **Comprobar:** `100 × 1,124746113^5 = 180`.

| Año | Inicio | Crecimiento | Cálculo | Final |
|---:|---:|---:|---:|---:|
| 0 | — | — | — | 100,0000 |
| 1 | 100,0000 | 12,4746 % | `100 × 1,124746113` | 112,4746 |
| 2 | 112,4746 | 12,4746 % | `112,4746 × 1,124746113` | 126,5054 |
| 3 | 126,5054 | 12,4746 % | `126,5054 × 1,124746113` | 142,2864 |
| 4 | 142,2864 | 12,4746 % | `142,2864 × 1,124746113` | 160,0361 |
| 5 | 160,0361 | 12,4746 % | `160,0361 × 1,124746113` | 180,0000 |

Si se redondea la tasa a 12,47 % antes de proyectar, el resultado es aproximadamente 179,96, no exactamente 180. Los modelos financieros deben conservar precisión internamente.

## 5.3 CAGR de Revenue, EPS y FCF

La fórmula es la misma, pero la lectura económica cambia según la métrica.

### Ficha de la fórmula: CAGR aplicado a Revenue, EPS y FCF

1. **Nombre:** CAGR de ingresos, beneficio por acción y flujo de caja libre.
2. **Propósito:** comparar la trayectoria de escala, beneficio por acción y generación de efectivo.
3. **Variables:** métrica inicial `M₀`, métrica final `Mₙ`, períodos `n` y, para EPS, el número de acciones y su dilución.
4. **Fórmula:** `CAGR_M = (Mₙ / M₀)^(1/n) − 1`.
5. **Pasos:** seleccionar la misma métrica y la misma base; ajustar splits y adquisiciones; calcular; comparar crecimiento de la métrica con rentabilidad y caja.
6. **Ejemplo numérico:** Revenue pasa de 100 a 180 en cinco años: CAGR 12,47 %; EPS pasa de 4 a 6: CAGR 8,45 %; FCF pasa de 5 a 9: CAGR 12,47 %.
7. **Interpretación:** Revenue mide escala; EPS mide beneficio por acción; FCF mide efectivo. Una métrica puede crecer y otra no.
8. **Rangos/cautelas:** EPS debe reconciliarse con el beneficio total y las recompras; FCF con capex y capital trabajo; Revenue con precio, volumen y adquisiciones.
9. **Favorable:** es favorable cuando Revenue, EPS y FCF crecen de forma coherente y el ROIC supera el coste de capital.
10. **Desfavorable:** es desfavorable cuando el crecimiento requiere descuentos, deuda cara, más capital trabajo o dilución.
11. **Errores:** mezclar EBITDA con beneficio, comparar una serie nominal con otra real, ignorar splits o usar CAGR de una métrica para justificar otra.
12. **Cuándo no usarla:** con base cero o negativa, series no comparables, un período demasiado corto o cuando el FCF cambia de signo. Un CAGR de FCF con años intermedios negativos no resume la trayectoria; mostrar FCF absoluto, cambios de signo y, cuando proceda, XIRR/IRR de flujos comparables.
13. **Indicadores complementarios:** margen EBITDA, margen NOPAT, ROIC, FCF por acción, payout, capital invertido y participación de mercado.

| Métrica | Inicial | Final | Períodos | CAGR |
|---|---:|---:|---:|---:|
| Revenue | 100 | 180 | 5 | 12,47 % |
| EPS | 4 | 6 | 5 | 8,45 % |
| FCF | 5 | 9 | 5 | 12,47 % |

## 5.4 Crecimiento de dividendo

### Ficha de la fórmula: crecimiento del dividendo

1. **Nombre:** tasa de crecimiento del dividendo por acción.
2. **Propósito:** estimar la velocidad con que aumenta o disminuye la distribución por acción.
3. **Variables:** dividendo actual `D₁`, dividendo anterior `D₀` y, para varios años, `n`.
4. **Fórmula:** anual: `g_D = (D₁ − D₀) / D₀`; multianual: `CAGR_D = (Dₙ / D₀)^(1/n) − 1`.
5. **Pasos:** usar DPS del mismo tipo de acción; verificar splits; calcular año a año o como CAGR; revisar payout, FCF y deuda.
6. **Ejemplo numérico:** DPS pasa de 2,00 a 2,20: `(2,20 − 2,00) / 2,00 = 10 %`. Si crece de 2,00 a 3,00 en tres años: `(3 / 2)^(1/3) − 1 = 14,47 %`.
7. **Interpretación:** mide distribución, no rentabilidad del negocio. Un aumento puede financiarse con deuda o con activos, aunque una empresa sana suele sostenerlo.
8. **Rangos/cautelas:** distinguir dividendo ordinario, especial y retorno total; controlar splits, fecha de pago y ejercicio fiscal.
9. **Favorable:** es favorable cuando el dividendo crece de forma sostenible con beneficios, FCF y balance, sin aumentar exageradamente el payout.
10. **Desfavorable:** es desfavorable si hay recortes, payout superior al 100 %, congelación por liquidez o dividendo insostenible.
11. **Errores:** usar el precio de la acción, omitir una distribución especial, tomar la fecha de pago en vez del período devengado o confundir rentabilidad por dividendo con crecimiento.
12. **Cuándo no usarla:** en empresas sin dividendo, con datos no ajustados por splits o cuando se busca medir creación de valor por acción.
13. **Indicadores complementarios:** payout ratio, FCF por acción, cobertura del dividendo, apalancamiento, política de inversión y retorno total para el accionista.

## 5.5 Crecimiento esperado

No existe una única fórmula universal: el crecimiento esperado depende del negocio, del horizonte, de la fuente y de la incertidumbre. Puede definirse como el CAGR implícito de una previsión.

### Ficha de la fórmula: crecimiento esperado

1. **Nombre:** crecimiento esperado o CAGR implícito de una previsión.
2. **Propósito:** convertir una trayectoria proyectada en una tasa anual comparable.
3. **Variables:** métrica inicial `M₀`, métrica final esperada `M_f`, horizonte `n` y fuente de la previsión.
4. **Fórmula:** `g_e = (M_f / M₀)^(1/n) − 1`.
5. **Pasos:** escoger una serie homogénea; documentar supuestos; calcular; contrastar con histórico y mercado; asignar escenarios y probabilidades.
6. **Ejemplo numérico:** Revenue pasa de 100 a 125 en cuatro años: `(125 / 100)^(1/4) − 1 = 5,74 %`.
7. **Interpretación:** es una hipótesis, no un hecho. La tasa implícita no describe cada año ni elimina incertidumbre.
8. **Rangos/cautelas:** no extrapolar mecánicamente; separar CAGR de ingresos de crecimiento de FCF; revisar dependencia de adquisiciones y crecimiento orgánico.
9. **Favorable:** expectativas moderadas y ejecutables, respaldadas por capacidad, demanda y rentabilidades.
10. **Desfavorable:** expectativas agresivas, expansión del múltiplo sin fundamentos o crecimiento que deteriora ROIC.
11. **Errores:** presentar el consenso como certeza, mezclar años fiscales, redondear demasiado pronto o usar un CAGR pasado como previsión sin un puente explícito.
12. **Cuándo no usarla:** sin base comparable, con horizontes muy cortos, métricas volátiles o cuando se necesita una probabilidad para cada año.
13. **Indicadores complementarios:** guía de gestión, cartera de pedidos, abandono, cartera de proyectos, consenso, revisiones de analistas, sensibilidad y análisis contrafactual.

| Horizonte | Revenue inicial | Revenue final esperado | CAGR implícito |
|---|---:|---:|---:|
| 4 años | 100 | 125 | 5,74 % |
| 4 años | 100 | 150 | 10,67 % |

---

# 6. Interés compuesto

El interés compuesto reinvierte los rendimientos. Es la matemática básica del ahorro y, en un sentido amplio, del valor temporal del dinero. En DCF, el mismo principio se usa para descontar flujos futuros.

## 6.1 Valor futuro de una inversión inicial

### Ficha de la fórmula: capitalización compuesta

1. **Nombre:** valor futuro de un capital único, `FV = PV(1+r)^n`.
2. **Propósito:** calcular cuánto valdrá una inversión hoy si crece a una tasa fija hasta el futuro.
3. **Variables:** valor presente `PV`, tasa por período `r` y número de períodos `n`.
4. **Fórmula:** `FV = PV(1+r)^n`.
5. **Pasos:** convertir tasas y períodos a la misma frecuencia; elevar `1+r` a `n`; multiplicar por el capital; revisar signos y unidades.
6. **Ejemplo numérico:** 1.000 al 8 % anual durante diez años: `FV = 1.000 × 1,08^10 = 2.158,92`.
7. **Interpretación:** el capital más las reinversiones producen 1.158,92 de rendimientos; el interés compuesto también hace crecer el interés.
8. **Rangos/cautelas:** frecuencia de capitalización, impuestos, comisiones, inflación y tasa variable. No mezclar 8 % anual con doce períodos mensuales.
9. **Favorable:** es útil para acumulación patrimonial, comparabilidad y planificación de capital.
10. **Desfavorable:** un alto rendimiento puede coexistir con riesgo alto, inflación o deuda cara; no implica que sea adecuado.
11. **Errores:** usar `1 + n × r` en lugar de `(1+r)^n`, contar años de más o convertir incorrectamente una tasa mensual.
12. **Cuándo no usarla:** con flujo variable, tasa no estable o necesidad de liquidez; en ese caso se modela cada flujo por separado.
13. **Indicadores complementarios:** CAGR real, carga fiscal, volatilidad, liquidez, comisión y CAGR del consumo.

### Ejemplo de inversión inicial y horizontes

Capital inicial: **10.000**. Se supone capitalización anual, sin impuestos, comisiones ni aportes.

| Horizonte | 4 % | 6 % | 8 % | 10 % |
|---:|---:|---:|---:|---:|
| 10 años | 14.802,44 | 17.908,48 | 21.589,25 | 25.937,42 |
| 20 años | 21.911,23 | 32.071,35 | 46.609,57 | 67.275,00 |
| 30 años | 32.433,98 | 57.434,91 | 100.626,57 | 174.494,02 |

> Esta tabla es matemática de capitalización, no una promesa de rentabilidad. Los mercados reales pueden perder principal.

## 6.2 Aportes periódicos y anualidad ordinaria

### Ficha de la fórmula: valor futuro de una anualidad ordinaria

1. **Nombre:** valor futuro de una anualidad ordinaria.
2. **Propósito:** acumular capital cuando se aporta una cantidad fija al final de cada período.
3. **Variables:** aporte `A`, tasa por período `r`, número de períodos `n` y, si existe, capital inicial separado.
4. **Fórmula:** `FV = A × [(1+r)^n − 1] / r` para `r ≠ 0`; si `r = 0`, el límite es `FV = A n`.
5. **Pasos:** confirmar que el aporte es al final; homologar frecuencia; sustituir; comprobar `r ≠ 0` o usar el límite; sumar aparte el capital inicial.
6. **Ejemplo numérico:** 500 al final de cada mes, `r = 0,5 %` mensual y `n = 120`: `FV = 500[(1,005)^120−1]/0,005 = 81.939,67`.
7. **Interpretación:** incluye únicamente los aportes periódicos; no incluye un capital inicial salvo que se sume aparte.
8. **Rangos/cautelas:** aporte y tasa constantes, calendario de pagos y cargos definidos. No sumar el primer aporte como si ocurriera al final del período.
9. **Favorable:** permite disciplinar el ahorro y compararlo con un objetivo de capital.
10. **Desfavorable:** comisiones crecientes, retiradas anticipadas y una tasa nominal engañosamente aplicada reducen el resultado real.
11. **Errores:** usar `n = años` con `r` mensual, tratar una aportación anticipada como ordinaria u olvidar sumar el capital inicial.
12. **Cuándo no usarla:** con aportes variables, irregulares o con una distribución distinta; usar un flujo a flujo.
13. **Indicadores complementarios:** ahorro real, fondo de emergencia, impuestos, inflación, trayectoria de ahorro y liquidez.

### Tabla de aportes mensuales: 500 al mes

La tasa de la tabla es nominal anual, con capitalización mensual: `r_m = tasa nominal / 12`. El aporte se realiza al final de cada mes.

| Horizonte | 4 % nominal | 6 % nominal | 8 % nominal | 10 % nominal |
|---:|---:|---:|---:|---:|
| 10 años | 73.624,90 | 81.939,67 | 91.473,02 | 102.422,49 |
| 20 años | 183.387,31 | 231.020,45 | 294.510,21 | 379.684,42 |
| 30 años | 347.024,70 | 502.257,52 | 745.179,72 | 1.130.243,96 |

## 6.3 Anualidad anticipada

### Ficha de la fórmula: valor futuro de una anualidad anticipada

1. **Nombre:** valor futuro de una anualidad anticipada.
2. **Propósito:** acumular aportes realizados al principio de cada período.
3. **Variables:** aporte anticipado `A`, tasa por período `r` y número de períodos `n`.
4. **Fórmula:** `FV = A × [(1+r)^n − 1]/r × (1+r)`.
5. **Pasos:** confirmar que el aporte es al inicio; calcular la anualidad ordinaria; multiplicar por `1+r`; verificar el calendario.
6. **Ejemplo numérico:** los mismos 500 mensuales, pero al inicio de mes: `81.939,67 × 1,005 = 82.349,37`.
7. **Interpretación:** cada aporte tiene un período adicional de interés; el resultado es superior al ordinario si todo lo demás es igual.
8. **Rangos/cautelas:** no usarla si el aporte es al cierre. El multiplicador `1+r` aplica a toda la serie, no solo al último aporte.
9. **Favorable:** convierte el momento del aporte en una ventaja temporal.
10. **Desfavorable:** puede crear un error de calendario o no representa por sí sola una mejor rentabilidad total.
11. **Errores:** olvidar `1+r`, usar la tabla ordinaria o cambiar `n` para el primer pago.
12. **Cuándo no usarla:** cuando no existe depósito anticipado o el calendario exacto es distinto.
13. **Indicadores complementarios:** fecha de cobro, liquidez, rendimiento neto y comparación con la aportación ordinaria.

## 6.4 Tasas nominal, efectiva y períodos

### Ficha de la fórmula: conversión de tasas nominales y efectivas

1. **Nombre:** tasa efectiva anual y tasa equivalente por período.
2. **Propósito:** comparar tasas expresadas en frecuencias distintas.
3. **Variables:** tasa por período `r_p`, número de períodos `m` por año y tasa efectiva anual.
4. **Fórmula:** `r_efectiva = (1+r_p)^m − 1`; inversa, sólo si `r_anual` es una tasa efectiva anual: `r_p = (1+r_efectiva)^(1/m) − 1`. Si la tasa anual es nominal, la relación es `r_nominal = m[(1+r_efectiva)^(1/m)−1]`.
5. **Pasos:** identificar la frecuencia; aplicar la potencia; no sumar tasas simples; distinguir nominal de efectivo.
6. **Ejemplo numérico:** `(1,005)^12 − 1 = 6,1678 %`.
7. **Interpretación:** compone todos los períodos del año; 0,5 % mensual equivale a 6,1678 % efectivo anual, no a 6 %.
8. **Rangos/cautelas:** comprobar capitalización, comisiones, impuestos y frecuencia de cobro. Una tasa nominal puede parecer más alta por su frecuencia.
9. **Favorable:** permite comparaciones honestas entre productos y horizontes.
10. **Desfavorable:** el marketing puede presentar una tasa nominal como si fuera efectiva.
11. **Errores:** dividir la tasa anual entre 12 sin indicar frecuencia, usar 6 % donde corresponde 6,1678 % o mezclar tasas simples y compuestas.
12. **Cuándo no usarla:** con flujo irregular o tasa variable; en ese caso hay que simular cada período.
13. **Indicadores complementarios:** APY, TAE, TER, inflación, carga fiscal, comisión y frecuencia de capitalización.

---

# 7. Valor presente y descuento

## 7.1 Fundamento del descuento

### Ficha de la fórmula: valor presente de un flujo futuro

1. **Nombre:** valor presente de un flujo: `PV = FV/(1+r)^n`.
2. **Propósito:** convertir un flujo futuro a moneda de hoy según su horizonte y tasa de descuento.
3. **Variables:** flujo futuro `FV`, tasa por período `r` y períodos hasta el flujo `n`.
4. **Fórmula:** `PV = FV/(1+r)^n`; su inversa es `FV = PV(1+r)^n`.
5. **Pasos:** identificar la fecha del flujo; usar una tasa coherente con la moneda; elevar; dividir; sumar los flujos descontados.
6. **Ejemplo numérico:** `PV = 1.000/(1,08)^10 = 463,19`.
7. **Interpretación:** 463,19 hoy y 1.000 dentro de diez años tienen el mismo valor a 8 %, según ese supuesto.
8. **Rangos/cautelas:** tasa, moneda, calendario y signo deben ser coherentes. No descontar un flujo ya ocurrido.
9. **Favorable:** hace comparables flujos que ocurren en distintos momentos y permite valorar activos y proyectos.
10. **Desfavorable:** una tasa demasiado baja infla el valor; una tasa demasiado alta lo deprime. Ninguna tasa es objetivamente correcta sin justificar sus supuestos.
11. **Errores:** usar `(FV/r)` en lugar de `FV/(1+r)^n`, olvidar períodos, mezclar flujos reales y nominales o sumar el valor terminal dos veces.
12. **Cuándo no usarla:** cuando el flujo es tan incierto que conviene un análisis probabilístico o cuando hay opciones y flexibilidad operativa.
13. **Indicadores complementarios:** curva de rendimientos, duración, spread, inflación, escenarios, cobertura de riesgos y riesgo del flujo.

| Horizonte | 4 % | 6 % | 8 % | 10 % |
|---:|---:|---:|---:|---:|
| 10 años | 675,56 | 558,39 | 463,19 | 385,54 |
| 20 años | 456,39 | 311,80 | 214,55 | 148,64 |

## 7.2 Componentes de la tasa de descuento (discount rate)

### Ficha de la fórmula: coste de capital propio o tasa de descuento build-up

1. **Nombre:** coste de capital propio o tasa de descuento aproximada.
2. **Propósito:** medir el coste requerido por el accionista o construir una tasa de proyecto; no es automáticamente un WACC.
3. **Variables:** tasa sin riesgo `r_f`, beta de equity `β`, prima de mercado `ERP`, prima país, prima específica y, cuando proceda, prima de tamaño o liquidez.
4. **Fórmula:** `r_e = r_f + β × ERP`; una tasa build-up aproximada puede añadir `prima país + prima específica`, sólo si no están ya embebidas en ERP o beta. Para FCFE se usa `K_e`; para FCFF se usa WACC, no esta tasa por sí sola.
5. **Pasos:** elegir moneda; estimar `r_f` con un instrumento de calidad y plazo similar; estimar beta de equity; usar un ERP razonable; añadir ajustes justificables; contrastar con el WACC y el perfil del negocio.
6. **Ejemplo numérico:** `r_f = 3 %`, `β = 1,1`, `ERP = 5,5 %`; `r_e = 3 % + 1,1 × 5,5 % = 9,05 %`. Con prima país/negocio de 0,25 %, la tasa exigida sería aproximadamente 9,30 %; no se debe llamar WACC a 9,30 % sin construir los pesos y el coste de deuda.
7. **Interpretación:** es el coste de capital y la compensación exigida por el riesgo; no es “el interés que quiero” ni una rentabilidad garantizada.
8. **Rangos/cautelas:** coherencia entre moneda, inflación e impuestos; no usar una prima si ya está incluida en el catálogo; evitar el doble conteo.
9. **Favorable:** una tasa fundamentada reduce la falsa precisión y hace comparables los supuestos con el negocio.
10. **Desfavorable:** una tasa arbitraria puede hacer que la valoración dependa casi por completo del valor terminal.
11. **Errores:** sumar la prima de mercado dos veces, tomar un rendimiento de corto plazo para un activo largo o usar una tasa nominal con flujos reales.
12. **Cuándo no usarla:** no sustituye el análisis del negocio, la calidad de los flujos ni el balance; siempre debe contextualizarse.
13. **Indicadores complementarios:** WACC, tasa mínima de rentabilidad, beta, coste de deuda, spread, apalancamiento y volatilidad.

## 7.3 Tasa sin riesgo, prima y coste de oportunidad

### Ficha de la fórmula: prima de riesgo total aproximada

1. **Nombre:** prima de riesgo requerida o spread de descuento.
2. **Propósito:** resumir la compensación adicional sobre activos sin riesgo.
3. **Variables:** `r_d`, `r_f` y, opcionalmente, ERP, beta, país y riesgo específico.
4. **Fórmula:** `prima total = r_d − r_f`; con CAPM, `prima de mercado = β × ERP`.
5. **Pasos:** fijar `r_f`; estimar la rentabilidad requerida; restar; separar componentes; probar sensibilidad.
6. **Ejemplo numérico:** `r_d = 9,30 %` y `r_f = 3,00 %`; prima total = 6,30 puntos porcentuales. Con beta 1,1 y ERP 5,5 %, la prima de mercado es 6,05 puntos.
7. **Interpretación:** son puntos porcentuales exigidos por riesgo, no un ingreso garantizado.
8. **Rangos/cautelas:** el ERP debe ser pertinente al país; no confundir el spread de crédito con la prima de capital propio.
9. **Favorable:** hace explícito el coste del riesgo y permite justificar el descuento.
10. **Desfavorable:** una prima demasiado alta reduce el valor; demasiado baja lo infla.
11. **Errores:** usar una prima fija para todos los negocios, olvidar la moneda o contar un riesgo ya incluido en el FCF.
12. **Cuándo no usarla:** no separa de forma fiable las primas país, mercado y empresa; modelar escenarios y covariancias.
13. **Indicadores complementarios:** CDS, beta, rendimientos, probabilidad de default, comparables y prima de crédito.

### Tasa sin riesgo

Es la rentabilidad teórica de un activo con riesgo de crédito y liquidez insignificantes en la moneda nominal elegida. En la práctica se usa un instrumento público con un plazo similar al del flujo. No es “rentabilidad mínima del mercado” ni elimina toda incertidumbre: el precio puede variar y el cupón puede reinvertirse a otra tasa.

### Coste de oportunidad

Es la mejor alternativa razonable a la que se renuncia al invertir. En una empresa se expresa normalmente con el WACC; para un accionista puede ser la rentabilidad esperada de otra inversión con riesgo equivalente, no la apreciación de la bolsa completa. Una deuda financiable al 5 % no se compara directamente con una rentabilidad del capital propio del 12 % sin ajustar riesgo, impuestos y plazo.

## 7.4 Inflación y tasa real

### Ficha de la fórmula: relación Fisher exacta

1. **Nombre:** tasa real exacta.
2. **Propósito:** separar la rentabilidad nominal de la variación del poder adquisitivo.
3. **Variables:** tasa nominal `r_nom`, inflación `π` y tasa real `r_real`.
4. **Fórmula:** `1+r_real = (1+r_nom)/(1+π)`; por tanto, `r_real = (1+r_nom)/(1+π) − 1`. Aproximación: `r_real ≈ r_nom − π`.
5. **Pasos:** usar tasas del mismo período; preferir la relación exacta; expresar los flujos en moneda constante cuando sea necesario.
6. **Ejemplo numérico:** nominal 8 % e inflación 3 %: `(1,08/1,03) − 1 = 4,8544 %`, no exactamente 5 %.
7. **Interpretación:** 100 unidades nominales conservan aproximadamente 97,09 unidades de poder de compra al inicio del período.
8. **Rangos/cautelas:** la inflación puede ser volátil; usar el índice correcto; no mezclar flujos reales y nominales.
9. **Favorable:** permite comparar rentabilidad real, poder de compra y rendimientos de activos con riesgos distintos.
10. **Desfavorable:** usar la aproximación con inflación alta puede sesgar la decisión.
11. **Errores:** tratar `r_nom − π` como exacta, usar la inflación de otro país o descontar un flujo nominal con una tasa real.
12. **Cuándo no usarla:** cuando los flujos y la tasa ya están expresados de forma coherente en términos reales o nominales.
13. **Indicadores complementarios:** IPC, deflactor, rendimiento real, poder de compra, paridad de poder adquisitivo y tasa nominal.

## 7.5 Sensibilidad del descuento

### Ficha de la fórmula: sensibilidad aproximada a la tasa

1. **Nombre:** sensibilidad del valor presente a un cambio de tasa.
2. **Propósito:** estimar cuánto cambia el PV ante una variación pequeña de `r`.
3. **Variables:** `PV`, `r`, cambio de tasa `Δr` y duración modificada `D_mod`.
4. **Fórmula:** `ΔPV/PV ≈ −D_mod × Δr`; para un cupón cero de un solo pago, `D_mod = n/(1+r)`. Si se usa la duración de Macaulay `D`, la forma equivalente es `ΔPV/PV ≈ −D × Δr/(1+r)`.
5. **Pasos:** elegir el shock; recalcular todos los flujos; revisar la duración; presentar un rango, no solo un punto.
6. **Ejemplo numérico:** `PV = 1.000`, `r = 8 %`, un año: `ΔPV/PV ≈ −0,9259 %` por 100 pb. A 20 años, el efecto aproximado es mayor.
7. **Interpretación:** un shock de tasa no equivale a un cambio uniforme del negocio; la duración mide sensibilidad mecánica.
8. **Rangos/cautelas:** la aproximación es lineal; para cambios grandes hay que recalcular exactamente. La curva de rendimientos puede girar y el spread puede cambiar.
9. **Favorable:** permite priorizar riesgos y fijar límites de estrés antes de construir el DCF.
10. **Desfavorable:** extrapolar la duración fuera de rango puede ocultar cambios no lineales y dar una falsa seguridad.
11. **Errores:** tratar 100 pb como 1 %, mezclar cupón y rendimiento o ignorar la reinversión.
12. **Cuándo no usarla:** para saltos grandes, opciones, valores de mercado volátiles o flujos no estables; rehacer el modelo.
13. **Indicadores complementarios:** duración, convexidad, OAS, spread, estrés, escenarios y análisis de reversibilidad.

---

# 8. DCF muy detallado

> **Advertencia central:** un DCF es un **modelo**, no la verdad. Convierte supuestos en una estimación. **No garantiza** precios futuros, rentabilidad, dividendos, múltiplos ni que el valor intrínseco se alcance. Úsalo como herramienta de razonamiento, no como garantía.

## 8.1 FCF futuro: flujo de caja libre unlevered (FCFF)

Para valorar la empresa en conjunto se usa el flujo de caja libre para la empresa, FCFF: antes de decisiones de financiación, pero después de impuestos operativos, inversiones y capital trabajo.

### Esquema de FCF sin financiación (unlevered)

```text
Ingresos
− Costes operativos
= EBIT
× (1 − tasa fiscal)
= NOPAT
+ Depreciación y amortización
− Capex
− Aumento del capital trabajo
= FCFF / flujo de caja libre para la empresa
```

### Ficha de la fórmula: FCFF

1. **Nombre:** flujo de caja libre para la empresa, FCFF (unlevered).
2. **Propósito:** medir el efectivo disponible para todos los proveedores de capital después de la reinversión operativa.
3. **Variables:** EBIT, tasa fiscal `T`, D&A, capex, variación del capital trabajo `ΔNWC`, NOPAT y ajustes extraordinarios relevantes.
4. **Fórmula:** `NOPAT = EBIT × (1−T)`; `FCFF = NOPAT + D&A − Capex − ΔNWC`.
5. **Pasos:** normalizar EBIT; aplicar la tasa fiscal efectiva; sumar D&A, que no es efectivo; restar capex; restar el aumento del capital trabajo; revisar partidas no recurrentes.
6. **Ejemplo numérico:** EBIT 20, impuesto 25 %, D&A 5, capex 7 y `ΔNWC = 3`: `NOPAT = 15`; `FCFF = 15 + 5 − 7 − 3 = 10`.
7. **Interpretación:** es caja teórica antes de deuda, no necesariamente caja bancaria del período ni beneficio de efectivo disponible para un accionista.
8. **Rangos/cautelas:** separar capex de mantenimiento y crecimiento; D&A no implica que la reposición sea igual; revisar NWC positivo o negativo, arrendamientos y ajustes contables.
9. **Favorable:** FCFF positivo, creciente y sostenible con ROIC; conversión de caja alta.
10. **Desfavorable:** FCFF persistentemente negativo, capital trabajo que no se rota o capex crónicamente insuficiente.
11. **Errores:** sumar D&A y no restar capex; usar EBITDA después de impuestos incorrectamente; sumar deuda; tratar la compensación en acciones como gratis; duplicar arrendamientos.
12. **Cuándo no usarla:** bancos, aseguradoras, inmobiliarias y algunos negocios de recursos cuyo FCF estructural no sea comparable; usar modelos específicos del sector.
13. **Indicadores complementarios:** ROIC, margen NOPAT, capex/ingresos, D&A/capex, NWC/ingresos, conversión de caja y apalancamiento.

## 8.2 DCF paso a paso

Un DCF intrínseco se puede organizar así:

1. Definir la fecha de valoración, la moneda y la perspectiva de la empresa.
2. Normalizar el último año y construir ingresos, EBIT, impuestos, D&A, capex y NWC.
3. Pronosticar un período explícito, por ejemplo cinco o diez años.
4. Estimar una tasa de descuento: WACC para FCFF o coste del capital propio para FCFE.
5. Calcular el valor terminal al final del período explícito.
6. Descontar cada FCFF y el valor terminal.
7. Calcular el valor total de la empresa (Enterprise Value, EV).
8. Restar deuda y otros compromisos; sumar efectivo y activos no operativos.
9. Dividir el valor del patrimonio (Equity Value) por las acciones totalmente diluidas.
10. Comparar con el mercado, ejecutar sensibilidad y pruebas de estrés.

## 8.3 WACC y tasa de descuento

### Ficha de la fórmula: WACC

1. **Nombre:** coste promedio ponderado del capital (WACC).
2. **Propósito:** estimar el coste promedio ponderado de deuda y capital propio.
3. **Variables:** valor del capital propio `E`, deuda `D`, coste del capital propio `Re`, coste de deuda `Rd` y tasa fiscal `T`.
4. **Fórmula:** `WACC = (E/(D+E)) × Re + (D/(D+E)) × Rd × (1−T)`.
5. **Pasos:** calcular pesos a valor de mercado; estimar `Re`; estimar `Rd`; aplicar el escudo fiscal de la deuda; comprobar moneda y estructura objetivo.
6. **Ejemplo numérico:** `E = 600`, `D = 400`, `Re = 10 %`, `Rd = 6 %`, `T = 25 %`: `WACC = (0,6 × 10 %) + (0,4 × 6 % × 0,75) = 7,8 %`.
7. **Interpretación:** es el coste medio requerido del capital; no es una rentabilidad garantizada.
8. **Rangos/cautelas:** estructura objetivo frente a actual, escudo fiscal, riesgo país, beta, acciones preferentes y arrendamientos. Usar FCFF con WACC y FCFE con coste del capital propio.
9. **Favorable:** es coherente con la moneda, el negocio y una estructura de capital deliberada.
10. **Desfavorable:** un WACC demasiado bajo infla el valor; uno demasiado alto lo deprime. La estructura elegida también puede no ser realista.
11. **Errores:** usar deuda histórica como peso, olvidar el efecto fiscal, incluir deuda en FCFF o sumar beta de empresa con beta de industria.
12. **Cuándo no usarla:** en dificultades financieras o con información limitada; usar el coste del capital propio con supuestos explícitos.
13. **Indicadores complementarios:** `ROIC−WACC`, cobertura de intereses, deuda neta/EBITDA, beta, spread y estructura objetivo.

## 8.4 Valor terminal y crecimiento terminal

### Ficha de la fórmula: valor terminal por crecimiento perpetuo

1. **Nombre:** valor terminal por crecimiento perpetuo (modelo de Gordon).
2. **Propósito:** estimar el valor de los flujos posteriores al período explícito.
3. **Variables:** `FCFFₙ` y `FCFFₙ₊₁` para el DCF de empresa; alternativamente `FCFEₙ` y `FCFEₙ₊₁` con `K_e`; WACC y crecimiento terminal `g`.
4. **Fórmula:** `TV = FCFFₙ(1+g)/(WACC−g) = FCFFₙ₊₁/(WACC−g)`; para FCFE se sustituyen flujo y tasa por `FCFE` y `K_e`.
5. **Pasos:** verificar que el flujo final esté normalizado; fijar `g` de forma defendible; comprobar `WACC > g`; calcular TV al final del año `n`; descontarlo una sola vez.
6. **Ejemplo numérico:** `FCFF₅ = 13,8556`, `g = 2,5 %` y `WACC = 9 %`: `TV = 13,8556 × 1,025/(0,09−0,025) = 218,4928`.
7. **Interpretación:** TV es el valor, al final del año `n`, de una perpetuidad; no es el efectivo de un solo año.
8. **Rangos/cautelas:** `g` suele anclarse a un crecimiento nominal de largo plazo defendible, pero no existe un techo universal; no usar `WACC ≤ g`; revisar el EV/EBITDA implícito.
9. **Favorable:** un negocio maduro, estable y con reinversión consistente puede sustentar una perpetuidad.
10. **Desfavorable:** crecimiento muy alto, economía disruptiva o un TV que represente una concentración muy alta del EV; el umbral de 90–95 % es una convención de cautela, no una regla matemática.
11. **Errores:** usar `FCFFₙ` sin multiplicar `(1+g)`, mezclar FCFE con WACC, descontar TV en el momento incorrecto o usar `g = WACC`.
12. **Cuándo no usarla:** en negocios pre-ingresos, biotecnología, minería o ciclos muy cortos; considerar múltiplo de salida, valor de activos o probabilidades.
13. **Indicadores complementarios:** EV/EBITDA terminal, tasa de reparto, ROIC terminal, diferencia `g/WACC` y DCF inverso.

### Ficha de la fórmula: crecimiento terminal `g`

1. **Nombre:** crecimiento terminal del flujo de caja.
2. **Propósito:** definir la tasa de crecimiento sostenible que se supone después del período explícito.
3. **Variables:** `FCFFₙ`, `FCFFₙ₊₁` (o `FCFEₙ`, `FCFEₙ₊₁`) y tasa terminal `g`.
4. **Fórmula:** `FCFFₙ₊₁ = FCFFₙ(1+g)`; por crecimiento implícito, `g = FCFFₙ₊₁/FCFFₙ − 1`.
5. **Pasos:** normalizar el FCFF final; elegir un horizonte terminal; fijar `g`; comprobar que sea menor que WACC; recalcular TV y el valor por acción.
6. **Ejemplo numérico:** `FCFF₅ = 13,8556` y `FCFF₆ = 14,2020`: `g = 14,2020/13,8556 − 1 = 2,5 %`.
7. **Interpretación:** `g` es la tasa anual compuesta que se proyecta para el FCFF durante la perpetuidad; no es necesariamente el crecimiento de ingresos.
8. **Rangos/cautelas:** suele ser una tasa nominal de largo plazo defendible, pero no existe un techo universal; debe ser menor que WACC. Revisar reinversión, ROIC, márgenes y expansión de la empresa.
9. **Favorable:** es favorable cuando está respaldado por una estructura de negocio madura, estable y con una economía de capital coherente.
10. **Desfavorable:** es desfavorable si se acerca a WACC, depende de un año atípico o hace implausible el múltiplo terminal.
11. **Errores:** confundir crecimiento de ingresos con crecimiento de FCF; extrapolar el CAGR de los primeros años; usar `g` con series de FCF negativas; mezclar tasa nominal y real.
12. **Cuándo no usarla:** cuando el negocio aún no tiene una base de FCF normalizada o cuando la estructura de costes y competencia cambia estructuralmente; usar escenarios o múltiplo de salida.
13. **Indicadores complementarios:** crecimiento nominal de la economía, crecimiento del mercado, cuota, ROIC terminal, inversión de capital, margen de EBIT y EV/EBITDA implícito.

### La variable `g`

La tasa terminal no debe ser una expectativa de marketing. Puede justificarse con un crecimiento nominal de largo plazo, una recuperación de la economía, una mejora de la participación de mercado o una combinación de crecimiento y eficiencia. Si `g` se acerca a `WACC`, el denominador se reduce y el valor terminal se dispara. Por eso conviene probar varios valores y comprobar el múltiplo implícito.

## 8.5 PV de los FCF y Enterprise Value

### Ficha de la fórmula: valor presente de los FCFF

1. **Nombre:** valor presente de los flujos de caja libre.
2. **Propósito:** hacer comparables los FCFF que ocurren en años distintos.
3. **Variables:** `FCFF_t`, WACC, período `t` y fecha de los flujos.
4. **Fórmula:** `PV(FCFF_t) = FCFF_t/(1+WACC)^t`.
5. **Pasos:** proyectar cada FCFF; identificar su año; aplicar el factor de descuento; conservar signo; sumar los PV.
6. **Ejemplo numérico:** en el caso base, los PV de los años 1 a 5 son 7,6606, 8,1232, 8,5085, 8,8055 y 9,0052; su suma es 42,1029.
7. **Interpretación:** cada PV representa el valor que el flujo tendría hoy bajo la tasa y las fechas supuestas.
8. **Rangos/cautelas:** usar la misma frecuencia, moneda y convención de tiempo. Un flujo a mitad de año puede usar un exponente de descuento `t−0,5` en algunos modelos.
9. **Favorable:** muestra de forma explícita cuánto depende el valor de cada período.
10. **Desfavorable:** un WACC demasiado bajo o una fecha incorrecta infla el PV; un WACC demasiado alto lo reduce.
11. **Errores:** descontar un flujo dos veces, usar años naturales en lugar de períodos del modelo o mezclar FCFE con WACC.
12. **Cuándo no usarla:** cuando los flujos son tan inciertos que un único punto no es informativo; usar escenarios o probabilidad.
13. **Indicadores complementarios:** factor de descuento, duración, TV/EV, sensibilidad de tasa, ROIC y conversión de caja.

### Ficha de la fórmula: Enterprise Value

1. **Nombre:** valor total de la empresa (Enterprise Value, EV).
2. **Propósito:** representar el valor presente de los flujos operativos antes de la estructura de capital.
3. **Variables:** FCFF, WACC, TV, horizontes y activos o pasivos no operativos.
4. **Fórmula:** `EV = Σ[t=1..n] FCFF_t/(1+WACC)^t + TV/(1+WACC)^n`.
5. **Pasos:** sumar los PV explícitos; descontar el TV; sumar; revisar activos y pasivos fuera del negocio.
6. **Ejemplo numérico:** `PV FCFF = 42,1029` y `PV TV = 142,0054`; `EV = 184,1083`.
7. **Interpretación:** EV es el valor de las operaciones antes de la estructura de capital, no el precio final de la acción.
8. **Rangos/cautelas:** convención de fin o mitad de año, moneda, consistencia entre WACC y FCFF, activos no operativos, arrendamientos y participaciones minoritarias.
9. **Favorable:** se apoya en balance y flujos trazables, con una serie de supuestos explícita.
10. **Desfavorable:** el TV domina, la precisión aparente es falsa o existe financiación circular entre deuda, intereses y flujo.
11. **Errores:** sumar TV sin descontar, usar FCFE con WACC, omitir un año o tratar EV como Equity Value.
12. **Cuándo no usarla:** con flujos no normalizados, ciclos extremos o cuando los métodos de activos son más relevantes.
13. **Indicadores complementarios:** EV/ingresos, EV/EBITDA, múltiplo de salida implícito, DCF inverso y porcentaje de TV sobre EV.

## 8.6 Equity Value, Net Debt, acciones (shares) y valor intrínseco por acción

### Ficha de la fórmula: Equity Value

1. **Nombre:** valor del patrimonio accionista (Equity Value).
2. **Propósito:** convertir EV en el valor atribuible a los accionistas comunes.
3. **Variables:** EV, deuda, efectivo, participación minoritaria, acciones preferentes, pensiones y otros compromisos.
4. **Fórmula:** `Equity Value = EV − Deuda + Efectivo − Participación minoritaria − Preferentes − Otros derechos`.
5. **Pasos:** listar todos los derechos; usar valores coherentes; restar deuda; añadir efectivo no operativo; revisar arrendamientos y pensiones.
6. **Ejemplo numérico:** `EV = 184,1083`, deuda = 28 y efectivo = 8: `Equity Value = 184,1083 − 28 + 8 = 164,1083`.
7. **Interpretación:** valor del equity común según el modelo.
8. **Rangos/cautelas:** no restar dos veces; distinguir efectivo disponible de efectivo restringido; incluir participaciones minoritarias, acciones preferentes, opciones y pensiones cuando sean relevantes.
9. **Favorable:** balance completo, transparente y con una clasificación clara entre operaciones y activos no operativos.
10. **Desfavorable:** ocultar deuda, contingentes o ajustes puede hacer que el equity parezca mejor de lo que es.
11. **Errores:** descontar la financiación de deuda dos veces, omitir efectivo o usar acciones básicas en vez de totalmente diluidas.
12. **Cuándo no usarla:** cuando no existe EV confiable o hay complejidades societarias que requieren otro modelo.
13. **Indicadores complementarios:** deuda neta/EBITDA, patrimonio contable, valor de liquidación, participación minoritaria y emisiones de derechos.

### Ficha de la fórmula: Net Debt

1. **Nombre:** deuda neta (Net Debt).
2. **Propósito:** resumir la obligación financiera menos el efectivo disponible.
3. **Variables:** deuda bruta, arrendamientos incluidos, efectivo e inversiones líquidas.
4. **Fórmula:** `Net Debt = Deuda − Efectivo − Inversiones líquidas`.
5. **Pasos:** enumerar deuda; aplicar IFRS 16/GAAP de forma consistente; identificar efectivo no restringido; restar.
6. **Ejemplo numérico:** `28 − 8 = 20`.
7. **Interpretación:** 20 unidades de reclamación neta antes de otros ajustes.
8. **Rangos/cautelas:** no confundir con deuda/EBITDA; revisar efectivo restringido, participación minoritaria, arrendamientos y deuda fuera de balance.
9. **Favorable:** menor deuda neta, mejor liquidez y mayor acceso a financiación.
10. **Desfavorable:** un alto apalancamiento limita el equity y aumenta el riesgo de dificultad financiera.
11. **Errores:** restar efectivo no disponible, ignorar deuda fuera de balance o duplicar arrendamientos.
12. **Cuándo no usarla:** para comparaciones intersectoriales sin ajustes; cada sector requiere una definición consistente.
13. **Indicadores complementarios:** cobertura de intereses, vencimientos, liquidez, calificación crediticia y deuda neta por acción.

### Ficha de la fórmula: valor intrínseco por acción (intrinsic value/share)

1. **Nombre:** valor intrínseco por acción.
2. **Propósito:** distribuir el Equity Value entre acciones de capital común.
3. **Variables:** Equity Value, acciones básicas y acciones totalmente diluidas equivalentes.
4. **Fórmula:** `Valor por acción = Equity Value / número de acciones totalmente diluidas`.
5. **Pasos:** revisar preferentes, opciones y convertibles; usar acciones totalmente diluidas; dividir; comparar con el precio de mercado.
6. **Ejemplo numérico:** `164,1083 / 10 = 16,4108` por acción.
7. **Interpretación:** es una salida del modelo, no un precio garantizado ni una subida segura.
8. **Rangos/cautelas:** método de acciones en tesorería, convertibles, opciones, duración y planes de dilución.
9. **Favorable:** un valor superior al precio, con un margen de seguridad suficiente frente al riesgo, puede ser una señal favorable.
10. **Desfavorable:** brecha pequeña frente al precio o dilución no modelada deja poco margen de error.
11. **Errores:** usar precio de mercado como valor intrínseco, acciones básicas con convertibles o mezclar monedas.
12. **Cuándo no usarla:** con patrimonio (equity) negativo, estructura de capital en transformación o cuando el DCF no capture adecuadamente el riesgo.
13. **Indicadores complementarios:** P/E, EV/EBITDA, P/FCF, ROIC, deuda neta por acción y margen de seguridad.

## 8.7 Ejemplo completo desde cero: empresa ficticia “Nova Alimentos”

- Empresa: **Nova Alimentos, S.A.**
- Moneda: **millones de euros (m€)**.
- Fecha de valoración: **31 de diciembre de 2025**.
- Convenciones: todos los flujos, WACC y `g` son **nominales** en m€; se usa un WACC constante como simplificación. Un modelo real podría usar una curva o escenarios.
- Ingresos del año 0: **100**.
- Margen EBIT del año 0: **12 %**; EBIT: **12**.
- Impuesto efectivo: **25 %**.
- D&A proyectado: **6 % de ingresos**.
- Capex proyectado: **6,5 % de ingresos**.
- Aumento de NWC: **10 % del incremento de ingresos**.
- WACC supuesto: **9,0 %**.
- Crecimiento terminal: `g = 2,5 %`.
- Deuda: **28**; efectivo no operativo: **8**; minoritarios/otros derechos: **0**.
- Acciones totalmente diluidas: **10 millones**.
- No se modelan SBC, dilución adicional, leases fuera del tratamiento IFRS, adquisiciones ni cambios de capital; en un caso real deben documentarse.

La tasa impositiva se aplica a EBIT para obtener NOPAT. D&A se suma porque no es efectivo; capex y aumento de NWC se restan porque exigen caja. Se supone que los flujos se reciben al final de cada año. El WACC de 9 % es un supuesto didáctico, no un dato de mercado; por ejemplo, sería reproducible con `E=600`, `D=400`, `K_e=11 %`, `K_d=8 %` y `T=25 %`: `0,6×11% + 0,4×8%×0,75 = 9,0 %`.

### 8.7.1 Previsión de FCFF: escenario base

Supuestos de crecimiento de Revenue: `10 %, 9 %, 8 %, 7 %, 6 %`. Márgenes EBIT: `12 %, 12,5 %, 13 %, 13,5 %, 14 %`.

| Año | Ingresos | Margen EBIT | EBIT | NOPAT | D&A | Capex | ΔNWC | FCFF |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 110,0000 | 12,00 % | 13,2000 | 9,9000 | 6,6000 | 7,1500 | 1,0000 | 8,3500 |
| 2 | 119,9000 | 12,50 % | 14,9875 | 11,2406 | 7,1940 | 7,7935 | 0,9900 | 9,6511 |
| 3 | 129,4920 | 13,00 % | 16,8340 | 12,6255 | 7,7695 | 8,4170 | 0,9592 | 11,0188 |
| 4 | 138,5564 | 13,50 % | 18,7051 | 14,0288 | 8,3134 | 9,0062 | 0,9064 | 12,4296 |
| 5 | 146,8698 | 14,00 % | 20,5618 | 15,4213 | 8,8122 | 9,5465 | 0,8313 | 13,8556 |

**Comprobación del año 1:** `NOPAT = 13,2 × (1−0,25) = 9,9`; `FCFF = 9,9 + 6,6 − 7,15 − 1 = 8,35`.

### 8.7.2 Descontar cada FCFF

| Año | FCFF | WACC | Factor `(1+r)^−t` | PV FCFF |
|---:|---:|---:|---:|---:|
| 1 | 8,3500 | 9,0 % | 0,917431 | 7,6606 |
| 2 | 9,6511 | 9,0 % | 0,841680 | 8,1232 |
| 3 | 11,0188 | 9,0 % | 0,772183 | 8,5085 |
| 4 | 12,4296 | 9,0 % | 0,708425 | 8,8055 |
| 5 | 13,8556 | 9,0 % | 0,649931 | 9,0052 |
| **Suma PV explícitos** |  |  |  | **42,1029** |

### 8.7.3 Terminal value y Enterprise Value

1. FCF siguiente al año 5: `13,8556 × 1,025 = 14,2020`.
2. TV al final del año 5: `14,2020/(0,09−0,025) = 218,4928`.
3. PV de TV: `218,4928/(1,09)^5 = 142,0054`.
4. Enterprise Value: `42,1029 + 142,0054 = 184,1083`.

| Componente | m€ |
|---|---:|
| PV FCFF años 1–5 | 42,1029 |
| PV del valor terminal | 142,0054 |
| **Enterprise Value** | **184,1083** |
| Menos deuda | (28,0000) |
| Más efectivo | 8,0000 |
| **Equity Value** | **164,1083** |
| Acciones totalmente diluidas (millones) | 10,0000 |
| **Valor intrínseco por acción (m€)** | **16,4108** |

El terminal representa `142,0054 / 184,1083 = 77,1 %` de EV. Es material; una concentración muy alta suele aumentar la sensibilidad, pero el umbral de 90–95 % es sólo una convención de revisión.

### 8.7.4 Normalización terminal y prueba de reinversión

El caso central usa `FCFF_6^{directo} = FCFF_5 × 1,025` como una hipótesis de crecimiento del FCF. Eso es un supuesto de flujo, no una identidad. Para comprobarlo, se recalcula el año 6 con los mismos ratios operativos del año 5 y un crecimiento de ingresos de 2,5 %:

| Concepto terminal | Cálculo | Importe |
|---|---|---:|
| Revenue 6 | `146,8698 × 1,025` | 150,5416 |
| EBIT 6 | `150,5416 × 14 %` | 21,0758 |
| NOPAT 6 | `21,0758 × 0,75` | 15,8069 |
| D&A 6 | `150,5416 × 6 %` | 9,0325 |
| CapEx 6 | `150,5416 × 6,5 %` | 9,7852 |
| ΔNWC 6 | `(150,5416−146,8698) × 10 %` | 0,3672 |
| FCFF 6 normalizado | `15,8069 + 9,0325 − 9,7852 − 0,3672` | **14,6870** |

Con este flujo terminal ya está indexado como año 6, `TV_5 = FCFF_6/(WACC−g) = 14,6870/(0,09−0,025) = 225,9538`; `PV(TV) = 146,8545`, `EV = 188,9574`, valor del patrimonio `168,9574` y valor por acción `16,8957` (aprox. `16,90`), frente a `16,41` en el escenario de crecimiento directo de FCF. No se multiplica otra vez `FCFF_6` por `(1+g)`: en la convención de Gordon, `FCFF_6` ya es el primer flujo posterior al año 5. La diferencia no es un error de la fórmula de Gordon: muestra que el valor terminal debe justificarse con una reinversión y un retorno terminal coherentes. El manual conserva `16,41` como escenario explícito de crecimiento de FCF, pero no lo presenta como una salida inevitable.

También debe revisarse el ROIC terminal, la tasa de reinversión, el CapEx de mantenimiento y el EV/EBITDA implícito antes de aceptar una perpetuidad. En industria extractiva, biotecnología y otros negocios con ciclos finitos o eventos binarios puede ser más adecuado un modelo de vida finita o una probabilidad de recuperación.

Los escenarios cambian crecimiento, margen, WACC, `g` y, en pesimista y optimista, la relación entre D&A y capex. No son predicciones; son hipótesis coherentes.

### 8.8.1 Escenario pesimista

Supuestos: crecimiento `[5 %, 4 %, 3 %, 3 %, 2 %]`; márgenes EBIT `[10,5 %, 10,5 %, 11 %, 11 %, 11,5 %]`; D&A 6 % de ingresos; capex 7 %; `ΔNWC = 10 %` del incremento de ingresos; WACC 10,5 %; `g = 1,5 %`.

| Año | Ingresos | EBIT | NOPAT | D&A | Capex | ΔNWC | FCFF | PV FCFF |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 105,0000 | 11,0250 | 8,2688 | 6,3000 | 7,3500 | 0,5000 | 6,7188 | 6,0803 |
| 2 | 109,2000 | 11,4660 | 8,5995 | 6,5520 | 7,6440 | 0,4200 | 7,0875 | 5,8045 |
| 3 | 112,4760 | 12,3724 | 9,2793 | 6,7486 | 7,8733 | 0,3276 | 7,8269 | 5,8010 |
| 4 | 115,8503 | 12,7435 | 9,5576 | 6,9510 | 8,1095 | 0,3374 | 8,0617 | 5,4073 |
| 5 | 118,1673 | 13,5892 | 10,1919 | 7,0900 | 8,2717 | 0,2317 | 8,7786 | 5,3286 |

TV = `8,7786 × 1,015/(0,105−0,015) = 99,0026`; PV TV = `60,0946`; PV FCFF explícitos = `28,4217`; EV = `88,5163`; Equity Value = `88,5163−28+8 = 68,5163`; valor/acción = `6,8516`.

### 8.8.2 Escenario base

Los resultados ya calculados son: EV `184,1083`; Equity Value `164,1083`; valor/acción `16,4108`; PV FCFF explícitos `42,1029`; PV TV `142,0054`.

### 8.8.3 Escenario optimista

Supuestos: crecimiento `[14 %, 13 %, 12 %, 10 %, 8 %]`; márgenes EBIT `[13 %, 14 %, 15 %, 16 %, 17 %]`; D&A 5,5 % de ingresos; capex 6 %; `ΔNWC = 10 %` del incremento; WACC 8 %; `g = 3 %`.

| Año | Ingresos | EBIT | NOPAT | D&A | Capex | ΔNWC | FCFF | PV FCFF |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 114,0000 | 14,8200 | 11,1150 | 6,2700 | 6,8400 | 1,4000 | 9,1450 | 8,4676 |
| 2 | 128,8200 | 18,0348 | 13,5261 | 7,0851 | 7,7292 | 1,4820 | 11,4000 | 9,7737 |
| 3 | 144,2784 | 21,6418 | 16,2313 | 7,9353 | 8,6567 | 1,5458 | 13,9641 | 11,0851 |
| 4 | 158,7062 | 25,3930 | 19,0447 | 8,7288 | 9,5224 | 1,4428 | 16,8084 | 12,3547 |
| 5 | 171,4027 | 29,1385 | 21,8538 | 9,4272 | 10,2842 | 1,2696 | 19,7272 | 13,4260 |

TV = `19,7272 × 1,03/(0,08−0,03) = 406,3800`; PV TV = `276,5754`; PV FCFF explícitos = `55,1071`; EV = `331,6825`; Equity Value = `311,6825`; valor/acción = `31,1683`.

### 8.8.4 Resumen comparativo

| Métrica | Pesimista | Base | Optimista |
|---|---:|---:|---:|
| PV FCFF 1–5 | 28,4217 | 42,1029 | 55,1071 |
| PV TV | 60,0946 | 142,0054 | 276,5754 |
| Enterprise Value | 88,5163 | 184,1083 | 331,6825 |
| Equity Value | 68,5163 | 164,1083 | 311,6825 |
| Valor/acción | 6,8516 | 16,4108 | 31,1683 |
| TV como % de EV | 67,9 % | 77,1 % | 83,4 % |

## 8.9 Sensibilidades obligatorias

Una valoración con un solo número es frágil. Las tablas mantienen constantes las demás variables salvo la indicada.

### 8.9.1 Crecimiento de ingresos y margen EBIT

Se aplica un desplazamiento de ±2 puntos porcentuales a cada crecimiento y ±2 pp a cada margen; WACC 9 % y `g = 2,5 %`.

| Desplazamiento de crecimiento / Margen | −2 pp | Base | +2 pp |
|---:|---:|---:|---:|
| −2 pp | 12,4814 | 15,2413 | 18,0012 |
| Base | 13,4098 | 16,4108 | 19,4119 |
| +2 pp | 14,3843 | 17,6440 | 20,9037 |

| Desplazamiento de crecimiento | Valor/acción |
|---:|---:|
| −4 pp | 14,1332 |
| −2 pp | 15,2413 |
| Base | 16,4108 |
| +2 pp | 17,6440 |
| +4 pp | 18,9432 |

| Desplazamiento de margen EBIT | Valor/acción |
|---:|---:|
| −2 pp | 13,4098 |
| −1 pp | 14,9103 |
| Base | 16,4108 |
| +1 pp | 17,9113 |
| +2 pp | 19,4119 |

### 8.9.2 WACC y crecimiento terminal

Valor por acción (m€), con el FCFF explícito base y la fórmula Gordon.

| WACC / g terminal | 1,5 % | 2,0 % | 2,5 % | 3,0 % | 3,5 % |
|---:|---:|---:|---:|---:|---:|
| 8,0 % | 17,0571 | 18,3628 | 19,9058 | 21,7575 | 24,0207 |
| 8,5 % | 15,6316 | 16,7303 | 18,0121 | 19,5269 | 21,3447 |
| 9,0 % | 14,3974 | 15,3322 | 16,4108 | 17,6692 | 19,1565 |
| 9,5 % | 13,3183 | 14,1215 | 15,0393 | 16,0984 | 17,3340 |
| 10,0 % | 12,3672 | 13,0630 | 13,8516 | 14,7529 | 15,7929 |

Un WACC un punto más alto, de 8 % a 9 %, puede reducir el valor por acción de 19,91 a 16,41 en esta tabla. La sensibilidad no es lineal.

### 8.9.3 WACC aislado

| WACC | EV | Valor/acción | TV/EV |
|---:|---:|---:|---:|
| 8,0 % | 219,0583 | 19,9058 | 80,2 % |
| 8,5 % | 200,1209 | 18,0121 | 78,7 % |
| 9,0 % | 184,1083 | 16,4108 | 77,1 % |
| 9,5 % | 170,3934 | 15,0393 | 75,6 % |
| 10,0 % | 158,5165 | 13,8516 | 74,2 % |

## 8.9.4 Aplicabilidad por sector

Las fórmulas universales no deben desplazar el modelo económico del sector:

| Sector | Métricas que necesitan adaptación | Advertencia esencial |
|---|---|---|
| Bancos y aseguradoras | ROE, ROA, P/B, capital y calidad de activos | Usar capital regulatorio, pérdidas crediticias, spread y beneficios distribuibles; no trasladar la lógica industrial de FCFF sin adaptación |
| REITs e inmobiliaria | FFO/AFFO, NAV, CapEx recurrente, Debt/EBITDA | Modelar ocupación, alquileres, mantenimiento, deuda y vida del activo; una perpetuidad puede no ser el horizonte natural |
| Servicios públicos, infraestructura y financiación de proyectos | WACC, DSCR, CFADS, CapEx y deuda | Incluir vida de concesión, inflación, tarifas reguladas, amortización y servicio de deuda |
| Minería y recursos | TV, reservas, CapEx de sostenimiento y ROIC | Usar vida de reservas, agotamiento, precios y escenarios; no asumir crecimiento perpetuo en activos finitos |
| Biotecnología y farma | DCF, P/E, EV/EBITDA, FCF y dilución | Incorporar probabilidades, patentes, I+D, runway financiero y eventos binarios; un FCF negativo no prueba por sí solo destrucción de valor |
| Software y SaaS | EV/Sales, PEG, margen de FCF, SBC y CapEx | Ajustar SBC, acciones diluidas, capitalización de I+D, ingresos diferidos, retención y arrendamientos |
| Construcción y proyectos | Ingresos, DSO, NWC, backlog y cobros | Analizar el método de porcentaje de finalización, cobros por hitos, anticipos y activos/pasivos contractuales |
| Retail y suscripción | DIO, DSO, DPO, CCC, devoluciones y arrendamientos | Separar inventario, prepagos, logística, devoluciones y crecimiento de inventario |
| Multinacionales | CAGR, WACC, FX y real/nominal | Separar transacción, traducción y conversión; documentar moneda funcional, presentación, controles de capital e hiperinflación |

## 8.10 Errores comunes y limitaciones

### Errores comunes

1. Confundir ingresos (Revenue), EBITDA, EBIT y NOPAT, o usar un flujo inapropiado para el WACC.
2. Mezclar FCFE con FCFF: FCFE ya descuenta el servicio de deuda y se descuenta con el coste del capital propio; FCFF se descuenta con WACC.
3. Usar EBITDA y olvidar capex, impuestos, arrendamientos o capital trabajo.
4. Sumar D&A sin preguntarse si la reposición de activos exige un capex equivalente.
5. Usar `g` mayor que WACC, hacer la fórmula indefinida o usar un `g` de 10 % en una economía madura.
6. No descontar TV, descontarlo un año incorrecto o usar una convención de fin de año cuando el negocio cobra a mitad de año.
7. Duplicar el valor terminal en EV.
8. Usar deuda a valor contable en vez de valor de mercado, o ignorar minoritarios, opciones, convertibles, pensiones y arrendamientos.
9. Dividir por acciones básicas cuando existen diluciones.
10. Tratar WACC como un dato observable y no como una hipótesis.
11. Redondear cada año a una precisión que distorsione acumulativamente la valoración.
12. Usar una tasa de crecimiento pasada como previsión sin verificar capacidad instalada, competencia y ciclo.
13. Llamar “precio objetivo” a una salida del DCF sin margen de seguridad.
14. Ignorar dilución por planes de acciones, opciones o convertibles.
15. Presentar un único escenario como certeza.

### Limitaciones estructurales

- **Sensibilidad terminal:** el TV suele representar la mayor parte del EV.
- **Dependencia de supuestos:** pequeñas variaciones en `g`, WACC, márgenes o crecimiento pueden cambiar mucho el resultado.
- **No es predicción:** no captura eventos discretos, cambios regulatorios, recesiones o innovación.
- **Calidad del dato:** ajustes contables, normalización y clasificación de capex son subjetivos.
- **Horizonte finito:** el modelo explícito puede no capturar la transición de crecimiento a madurez.
- **Moneda e inflación:** ingresos y costes deben tener el mismo índice; los nominales y reales no se mezclan.
- **Estructura de capital:** los cambios de apalancamiento posteriores a la valoración no quedan reflejados automáticamente.
- **Riesgo de modelo:** errores, celdas copiadas, signos y fechas pueden invalidar el resultado.

## 8.11 Checklist de control

Antes de aceptar el resultado, comprobar:

- [ ] La fecha de valoración y la fecha de cada flujo están definidas.
- [ ] FCFF usa EBIT, impuestos, D&A, capex y ΔNWC de forma consistente.
- [ ] WACC usa moneda, tasa sin riesgo, ERP, beta, deuda y tasa impositiva coherentes.
- [ ] `WACC > g` y `g` es defendible.
- [ ] TV se calcula al final del año explícito y se descuenta una vez.
- [ ] El porcentaje de TV sobre EV está identificado.
- [ ] EV → Equity incluye deuda, efectivo, participación minoritaria, acciones preferentes y otros derechos.
- [ ] Se usan acciones totalmente diluidas, no sólo básicas.
- [ ] Se ejecutan sensibilidad de crecimiento, margen, WACC y g.
- [ ] Se muestran escenarios pesimista, base y optimista.
- [ ] Se ha realizado un DCF inverso: ¿qué crecimiento, margen y WACC implicaría el precio de mercado?
- [ ] Se contrastan EV/EBITDA y P/E con comparables.
- [ ] Se investigan los cambios de capital trabajo y capex.
- [ ] Se diferencia una estimación del modelo de un precio garantizado.

**Conclusión:** las fórmulas de crecimiento, el interés compuesto y el descuento hacen explícitos los supuestos. El DCF integra esos supuestos en una visión de valor, pero nunca elimina la incertidumbre. La conclusión responsable no es “esto valdrá X”, sino: “bajo estos supuestos, el valor estimado es X; si los supuestos cambian, el valor cambia”.
