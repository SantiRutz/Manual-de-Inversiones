# Parte 09/13 — Capítulos 9 a 13

## Alcance, convenciones y advertencia

Todos los datos de este manual son **ficticios**. No representan precios, resultados, rentabilidades ni clasificaciones, y tampoco información actual de ninguna empresa. Las cifras se expresan en **u.m.** (unidades monetarias), salvo que se indique porcentaje, acción o múltiplo.

Los ejemplos se presentan antes de impuestos y retenciones. El tratamiento fiscal puede variar según país, residencia fiscal, domicilio del pagador, tipo de dividendo, tratados, retenciones, créditos fiscales, vehículos de inversión, planes de pensiones y normativa aplicable. **Este material no constituye asesoramiento financiero, fiscal, legal ni contable.** Para una situación real, las consecuencias dependen de las reglas de la jurisdicción y de las circunstancias concretas.

> **Nota de coherencia numérica:** salvo que se indique otro caso, los capítulos 10 a 13 utilizan la misma empresa ficticia, **Alfa**, con 100.000 acciones básicas y 100.000 acciones totalmente diluidas equivalentes; se supone que no existen preferentes, opciones, RSUs ni convertibles relevantes. Sus cifras principales son: precio 20 u.m.; valor de mercado 2.000.000 u.m.; ingresos 1.000.000 u.m.; EBIT 200.000 u.m.; D&A 50.000 u.m.; EBITDA 250.000 u.m.; beneficio neto 100.000 u.m.; flujo de caja operativo 130.000 u.m.; capex total 120.000 u.m.; capex de mantenimiento 80.000 u.m.; capex de crecimiento 40.000 u.m.; incremento del capital circulante 20.000 u.m.; efectivo disponible no operativo 100.000 u.m.; deuda con intereses 300.000 u.m. —sin incluir arrendamientos, pensiones ni financiación de proveedores—; patrimonio contable atribuible 800.000 u.m. y dividendos comunes 40.000 u.m. El CFO se presenta después de los intereses pagados; por eso el `CFO − CapEx` de estos capítulos es FCF histórico apalancado, no FCFF ni FCFE puros.

---

# Capítulo 9. Margen de seguridad

## 9.1. Concepto

El **margen de seguridad** es la diferencia relativa entre el precio considerado y una estimación del valor intrínseco o valor económico del activo. Expresa cuánto queda el precio por debajo de la estimación central; no garantiza que la estimación sea correcta.

Toda valoración depende de supuestos sobre flujos futuros, tasa de descuento, crecimiento, riesgos, deuda, dilución, calidad de la gerencia y horizonte temporal. El margen de seguridad sirve para absorber errores de estimación, pero no elimina el riesgo.

## 9.2. Fórmula exacta

Cuando el precio y el valor intrínseco se expresan por acción:

\[
\text{Margen de seguridad} =
\frac{\text{Valor intrínseco estimado} - \text{Precio de compra}}{\text{Valor intrínseco estimado}} \times 100
\]

El denominador es el **valor intrínseco estimado**, no el precio. Con un valor intrínseco de 100 u.m. y un precio de compra de 70 u.m. (ejemplo 100/70), el margen es 30%. Otra convención, `(valor intrínseco - precio)/precio`, mide el potencial de recuperación respecto al precio y no se mezcla con este margen. Si se invirtieran las etiquetas y se tomara precio 100 y valor intrínseco 70, esta fórmula daría −30%, no una holgura positiva.

## 9.3. Ficha de 13 puntos: margen de seguridad

1. **Fórmula.** `Margen de seguridad = (valor intrínseco estimado - precio de compra) / valor intrínseco estimado × 100`. En forma decimal, `1 - precio / valor intrínseco`.
2. **Variables.** `Precio` es el precio de entrada considerado; `valor intrínseco estimado` es el valor económico central calculado antes de comprar, no el precio observado después de la decisión.
3. **Datos requeridos.** Precio, valor intrínseco, fecha, moneda, horizonte, deuda neta, acciones diluidas, estados normalizados, tasa de descuento, crecimiento y riesgos. La calidad de los supuestos importa más que la cantidad de cifras.
4. **Pasos.** Estimar el valor intrínseco; documentar supuestos; restar el precio del valor intrínseco; dividir entre el valor intrínseco; expresar como porcentaje; repetir el cálculo con escenarios y sensibilidad.
5. **Ejemplo.** Valor intrínseco estimado: 100 u.m. por acción. Precio de compra: 70 u.m. por acción.
6. **Resultado.** `(100 - 70) / 100 = 0,30 = 30%`. La diferencia absoluta es 30 u.m. por acción y la relación precio/valor intrínseco es `70/100 = 0,70`.
7. **Interpretación.** El precio es un 30% inferior al valor intrínseco estimado. La holgura de 30 u.m. es un colchón frente a errores ordinarios, no un precio mínimo garantizado.
8. **Lectura temporal y comparativa.** Conviene recalcular el margen con precios nuevos y con valores actualizados. Un margen que aumenta porque cae el precio puede coincidir con un deterioro del negocio; uno que se reduce porque aumenta la estimación exige revisar qué cambió.
9. **Rangos y cautelas.** No existe un rango universal. Un margen del 30% puede ser amplio para un negocio predecible y estrecho para uno cíclico, apalancado o con pasivos no reflejados. El descuento debe relacionarse con la incertidumbre.
10. **Señal favorable.** Un margen amplio puede proteger frente a errores ordinarios de previsión si el valor intrínseco está respaldado por evidencia y escenarios. También es favorable que el margen se mantenga tras revisar los datos.
11. **Señal desfavorable.** Un margen pequeño o negativo deja poca protección. También es desfavorable un margen aparentemente grande si depende de un valor terminal dominante, un crecimiento sin respaldo o una estimación de deuda demasiado baja.
12. **Errores comunes.** Usar el precio actual como precio de compra; mezclar valor empresarial con capital propio; contar dos veces la deuda; mezclar acciones básicas y diluidas; cambiar moneda, fecha o período; confundir el margen con `precio/valor intrínseco`; mostrar un único escenario como certeza.
13. **Cuándo no usarlo y complementarios.** No es una medida de rentabilidad ni una previsión de precio. Si el valor intrínseco no puede estimarse razonablemente, el margen es calculable pero poco informativo. Complementar con escenarios, sensibilidad, balance, calidad de los flujos, valor liquidativo y horizonte de recuperación.

## 9.4. Ejemplo ampliado

| Elemento | Importe por acción | Lectura |
|---|---:|---|
| Valor intrínseco central | 100 u.m. | Estimación, no precio de mercado |
| Precio considerado | 70 u.m. | Entrada hipotética |
| Diferencia absoluta | 30 u.m. | Holgura lineal |
| Margen de seguridad | 30% | Holgura relativa sobre el valor intrínseco |

Si el precio fuera 85 u.m. con el mismo valor intrínseco de 100 u.m.:

\[
\frac{100-85}{100}=15\%
\]

La diferencia absoluta es 15 u.m. y el margen baja de 30% a 15%. La expresión alternativa `(100-85)/85 = 17,65%` mide el potencial de recuperación respecto al precio; no es el mismo indicador.

## 9.5. Por qué no elimina el riesgo

- **Riesgo de modelo:** una tasa, un crecimiento o un valor terminal equivocados reducen el valor intrínseco.
- **Riesgo de balance:** deuda, arrendamientos, litigios, pensiones o compromisos fuera del estado de resultados pueden exigir más caja de la prevista.
- **Riesgo de negocio:** demanda, competencia, tecnología, regulación o concentración de clientes pueden deteriorar los flujos.
- **Riesgo de gobierno:** controles débiles, fraude, mala auditoría o conflictos de interés pueden destruir el valor intrínseco.
- **Riesgo de liquidez y horizonte:** un activo puede parecer barato y tardar años en realizarse o no poder financiarse mientras se espera.
- **Riesgo de momento de mercado:** el precio puede caer antes de que la tesis se cumpla; el margen no fija un suelo temporal.
- **Riesgo de oportunidad:** otro activo puede ofrecer una mejor relación entre riesgo, precio y tiempo.
- **Riesgo de sesgo:** aceptar un valor intrínseco de 100 u.m. sin análisis independiente porque se desea comprar es un error de confirmación, no una estimación independiente.

El margen de seguridad es una protección analítica, no un seguro contra la pérdida.

---

# Capítulo 10. Owner Earnings

## 10.1. Concepto

**Owner Earnings** es una estimación del beneficio económico que un propietario podría retirar de un negocio sin reducir su capacidad futura de generar beneficios. El foco no es sólo el beneficio contable, sino el efectivo disponible después de conservar la capacidad productiva y financiar el crecimiento operativo.

La aproximación utilizada en este manual es una estimación de Owner Earnings normalizado:

\[
\text{Owner Earnings normalizado aproximado} \approx \text{NI} + \text{D\&A} - \text{Capex de mantenimiento} - \Delta \text{capital circulante incremental}
\]

La D&A debe normalizarse: la depreciación de activos físicos normalmente requiere reposición, pero la amortización de una marca, software o una relación adquirida puede no exigir un capex equivalente. Los cargos no monetarios sólo se suman cuando su reversión no representa un coste futuro. La SBC se analiza como coste económico y dilución, no como un añadido automático.

- **NI:** beneficio neto, después de intereses e impuestos.
- **D&A:** depreciación y amortización.
- **Capex de mantenimiento:** inversión necesaria para mantener la capacidad productiva.
- **Δcapital circulante incremental:** recursos inmovilizados para financiar el crecimiento.

Si el capital circulante se libera, su incremento es negativo y la fórmula puede aumentar el efectivo disponible. Si el capex incluye crecimiento, debe separarse del mantenimiento.

## 10.2. Ficha de 13 puntos: Owner Earnings

1. **Fórmula.** `OE ≈ NI + D&A - capex de mantenimiento - ΔWC incremental`.
2. **Variables.** NI es beneficio neto; D&A es depreciación y amortización; capex de mantenimiento es la inversión recurrente; ΔWC incremental es el aumento de capital circulante asociado al crecimiento, medido de forma comparable.
3. **Datos requeridos.** Estado de resultados, flujo de caja, desglose del capex, ciclo de conversión de clientes y proveedores, arrendamientos, activos biológicos, deuda, emisión de acciones y ajustes no recurrentes. Es preferible normalizar varios años.
4. **Pasos.** Partir del NI; añadir D&A; identificar el capex que preserva la capacidad; descontarlo; medir el aumento del capital circulante; calcular OE; contrastarlo con CFO y FCF; expresar el resultado por acción.
5. **Ejemplo de Alfa.** NI = 100.000; D&A = 50.000; capex de mantenimiento = 80.000; ΔWC incremental = 20.000 u.m.
6. **Resultado.** `100.000 + 50.000 - 80.000 - 20.000 = 50.000 u.m.` OE por acción = `50.000/100.000 = 0,50 u.m.`.
7. **Interpretación.** El negocio generó aproximadamente 50.000 u.m. de excedente económico después de cubrir la carga de depreciación, el mantenimiento y el capital circulante necesario. No es necesariamente la caja exacta de un período.
8. **Lectura temporal y comparativa.** En el ejemplo de dos años de Alfa, OE pasa de 45.000 a 50.000 u.m., +11,1%. El NI sube de 80.000 a 100.000 (+25%), mientras el FCF baja de 20.000 a 10.000 (-50%). La divergencia merece investigación.
9. **Rangos y cautelas.** No hay un porcentaje universal de “buen” OE. D&A puede no equivaler a reposición; el mantenimiento se estima; el capital circulante puede ser temporal; hay que separar crecimiento defectuoso de crecimiento rentable y normalizar varios años.
10. **Señal favorable.** OE creciente por acción, cobertura de dividendos con OE, conversión estable de NI en OE y capex que no obliga a reducir la capacidad operativa. La liberación de circulante puede mejorar OE, aunque no necesariamente el negocio estructural.
11. **Señal desfavorable.** OE persistente inferior al NI, caída por acción, inventario y cobros crecientes sin ventas, capex de mantenimiento insuficiente o beneficios no recurrentes. Un mantenimiento demasiado alto reduce OE aunque el negocio crezca.
12. **Errores comunes.** Restar todo el capex de crecimiento y llamarlo mantenimiento; sumar D&A sin estudiar reposición; usar ΔWC sin corregir estacionalidad; ignorar compensación basada en acciones; mezclar OE consolidado con beneficio atribuible; elegir un año de crisis como “normal”.
13. **Cuándo no usarlo y complementarios.** No sustituye a CFO, FCF ni estados auditados; tampoco captura de forma homogénea opciones, activos no registrados o pasivos contingentes. Complementar con FCF, CFO, ROIC, capex de crecimiento, deuda, calidad del balance y valor de reposición.

## 10.3. Ejemplo numérico de dos años

| Magnitud | Año anterior u.m. | Año actual u.m. | Cambio |
|---|---:|---:|---:|
| Beneficio neto | 80.000 | 100.000 | +25,0% |
| D&A | 45.000 | 50.000 | +11,1% |
| Capex de mantenimiento | 70.000 | 80.000 | +14,3% |
| ΔWC incremental | 10.000 | 20.000 | +100,0% |
| **Owner Earnings** | **45.000** | **50.000** | **+11,1%** |
| CFO | 120.000 | 130.000 | +8,3% |
| Capex total | 100.000 | 120.000 | +20,0% |
| **FCF histórico apalancado** | **20.000** | **10.000** | **-50,0%** |

Los CFO se presentan como cifras reportadas; por eso no deben forzarse a coincidir con `NI + D&A - ΔWC`, que excluye otros ajustes no monetarios y clasificaciones del estado de flujos.

Cálculo del año anterior: `80.000 + 45.000 - 70.000 - 10.000 = 45.000 u.m.`  
Cálculo del año actual: `100.000 + 50.000 - 80.000 - 20.000 = 50.000 u.m.`.

El OE supera al FCF porque la aproximación resta el capex de mantenimiento (80.000), mientras el FCF de este manual resta todo el capex (120.000). La diferencia de 40.000 u.m. coincide con el capex de crecimiento del ejemplo, no necesariamente con efectivo retirable sin evaluar la disciplina de inversión.

## 10.4. Owner Earnings frente a NI, CFO y FCF

| Métrica | Qué representa | Punto fuerte | Limitación principal |
|---|---|---|---|
| NI | Resultado contable atribuible a los accionistas | Refleja el efecto de intereses e impuestos del modelo | Depende de políticas contables y partidas no monetarias |
| CFO | Caja generada por las operaciones | Relaciona el resultado con la caja y el capital circulante | Puede mejorar por una liberación puntual de circulante |
| FCF | CFO menos capex total en esta convención | Muestra la caja después de toda la inversión física del período | Puede penalizar temporalmente el crecimiento |
| Owner Earnings | NI ajustado por D&A, mantenimiento y capital circulante | Estima la capacidad de retirar efectivo sin reducir capacidad | Depende de estimaciones de mantenimiento y normalización |

En Alfa:

- NI por acción: `100.000/100.000 = 1,00 u.m.`.
- CFO por acción: `130.000/100.000 = 1,30 u.m.`.
- FCF por acción: `10.000/100.000 = 0,10 u.m.`.
- Owner Earnings por acción: `50.000/100.000 = 0,50 u.m.`.

Las cuatro cifras cuentan historias diferentes. La comparación debe ser temporal y por acción, no una suma entre ellas.

## 10.5. Cómo normalizar Owner Earnings

1. Elegir varios años que incluyan crecimiento, inversión y un ciclo razonable.
2. Ajustar NI por partidas no recurrentes sin borrar costes futuros.
3. Estimar el capex de mantenimiento con reposición de activos, depreciación histórica, capacidad y planes de la empresa.
4. Separar el capex de crecimiento y medir su retorno incremental.
5. Normalizar el capital circulante con ventas, inventario y días de cobro y pago.
6. Revisar compensación por acciones, arrendamientos, intangibles, costos ocultos y compromisos de mantenimiento.
7. Calcular OE por acción después de cualquier dilución.
8. Comparar con CFO y FCF y explicar cada reconciliación.

Una estimación de OE no reemplaza un plan de caja. Ayuda a formular una pregunta: ¿cuánto efectivo podría retirar el propietario sin quitar al negocio la capacidad de generar ese mismo efectivo?

---

# Capítulo 11. Flujo de caja libre (Free Cash Flow, FCF)

## 11.1. Concepto

En este manual, el **Free Cash Flow (FCF)** se define como:

\[
\text{FCF} = \text{CFO} - \text{CapEx}
\]

`CFO` es el flujo de caja de las operaciones y `CapEx` es la inversión de capital. El FCF representa la caja que queda después de la operación y la inversión física, antes de dividendos, recompras y otras salidas financieras. En este manual se etiqueta como **FCF histórico apalancado**: si el CFO incluye intereses pagados, el flujo está después de ellos y no incorpora la emisión o amortización neta de deuda. No es FCFF —que se usa para el EV— ni FCFE estricto —que se usa para el patrimonio— sin un puente explícito.

Como puentes simplificados, cuando el CFO contiene intereses pagados: `FCFF ≈ FCF histórico apalancado + intereses después de impuestos ± ajustes no operativos y de arrendamientos`; y `FCFE ≈ FCF histórico apalancado + endeudamiento neto`, bajo el supuesto de que no hay otros ajustes relevantes. Para usar `FCFF` se descuenta con WACC y se llega a EV; para usar `FCFE` se descuenta con el coste del patrimonio y no se resta deuda otra vez.

## 11.2. Ficha de 13 puntos: flujo de caja libre (FCF)

1. **Fórmula.** `FCF histórico apalancado = CFO − CapEx total`, usando ambos importes del mismo período y una clasificación comparable del capital circulante.
2. **Variables.** CFO es flujo de caja de las operaciones; CapEx es compra de activos de larga duración y otros proyectos de inversión, según la clasificación adoptada. Se necesitan también NI, ingresos, capital circulante y el desglose de la inversión.
3. **Datos requeridos.** Estado de flujos, estados financieros, capex de mantenimiento y crecimiento, arrendamientos, activos biológicos, adquisiciones y pagos no recurrentes. El tratamiento debe ser uniforme entre años.
4. **Pasos.** Obtener CFO; clasificar el capex; separar adquisiciones y pagos extraordinarios; restar capex; comparar con el período anterior; observar FCF por acción y rendimiento del FCF.
5. **Ejemplo de Alfa.** CFO = 130.000 u.m.; capex total = 120.000 u.m.
6. **Resultado.** `130.000 - 120.000 = 10.000 u.m.`; margen FCF sobre ingresos = `10.000/1.000.000 = 1,0%`; FCF por acción = `10.000/100.000 = 0,10 u.m.`.
7. **Interpretación.** La operación generó 130.000 y la inversión consumió 120.000; quedan 10.000 según esta definición. El resultado todavía no mide financiación ni la rentabilidad del capex de crecimiento.
8. **Lectura temporal y comparativa.** Alfa pasó de FCF de 20.000 a 10.000 u.m., una caída del 50%, aunque el NI aumentó. FCF creciente significa más caja por acción bajo la misma definición; FCF decreciente significa lo contrario, pero puede reflejar una inversión ordenada.
9. **Rangos y cautelas.** Positivo, negativo o cero no es una clasificación de calidad por sí solo. Un FCF positivo puede ser consecuencia de no invertir, vender activos o liberar capital circulante; uno negativo puede ser capex de crecimiento ordenado. Revisar márgenes, uso de capacidad y retorno del capital incremental.
10. **Señal favorable.** FCF positivo, estable o creciente por acción, acompañado de crecimiento operativo, márgenes aguanten y retorno del capex incremental superior a sus costes. También es favorable una ruta clara de financiación durante un período temporal negativo.
11. **Señal desfavorable.** FCF negativo recurrente junto a caída de ingresos, deterioro del capital circulante, bajo uso de capacidad, deuda creciente o incapacidad de financiar el mantenimiento. Un FCF muy alto por no invertir puede deteriorar el negocio a medio plazo.
12. **Errores comunes.** Sumar capex en vez de restarlo; mezclar FCF de subsudiarias; usar capex de crecimiento y mantenimiento indistintamente; excluir capex porque es crecimiento sin evaluar necesidad; mezclar políticas contables; tomar una liberación de inventario como mejora estructural.
13. **Cuándo no usarlo y complementarios.** FCF aislado puede ser engañoso para bancos, aseguradoras o negocios cuya clasificación CFO–capex no representa bien la actividad. Complementar con Owner Earnings, ROIC, CFO, calidad del beneficio, deuda, dividendos y plan de inversión.

## 11.3. FCF positivo, negativo, creciente y decreciente

| Situación | Definición operativa | Interpretación mínima | Pregunta adicional |
|---|---|---|---|
| FCF positivo | `CFO > CapEx` | La operación cubre la inversión física del período | ¿Es calidad o subinversión? |
| FCF negativo | `CFO < CapEx` | La inversión supera la caja operativa | ¿Es una inversión de crecimiento verificable? |
| FCF creciente | FCF por acción actual superior al comparable | Más caja por acción | ¿Aumenta también el retorno del capital? |
| FCF decreciente | FCF por acción actual inferior al comparable | Menos caja por acción | ¿Es ciclo, capital circulante o deterioro? |
| FCF cercano a cero | Diferencia pequeña entre CFO y CapEx | Margen financiero reducido | ¿Qué desviación provoca déficit? |

Un FCF negativo no equivale automáticamente a mala calidad. Un FCF positivo tampoco equivale a sostenibilidad. La señal depende de qué inversiones producen la caja, cuánto capital se necesita y qué alternativas se están rechazando. Si el FCF pasa de negativo a positivo, la variación porcentual no es interpretable; se usa el cambio absoluto y la normalización del negocio.

## 11.4. Rendimiento del FCF (FCF yield)

El rendimiento del FCF sobre el valor de mercado del capital propio se define aquí como:

\[
\text{rendimiento del FCF} =
\frac{\text{FCF}}{\text{Valor de mercado del capital propio}} \times 100
\]

También puede escribirse como FCF por acción dividido por precio por acción. En Alfa:

\[
\frac{10.000}{2.000.000}=0{,}5\%
\]

o, equivalentemente:

\[
\frac{0{,}10}{20}=0{,}5\%
\]

Un rendimiento del FCF más alto puede indicar una valoración más baja respecto al flujo de caja actual, pero también puede reflejar un FCF excepcional, una caída próxima o una inversión temporal. La ficha completa de 13 puntos aparece en el capítulo 12, dentro de los múltiplos.

## 11.5. FCF negativo: razonable o alerta

### Puede ser razonable cuando

- la inversión es capex de crecimiento identificado, con capacidad, productos o demanda validada;
- la empresa tiene liquidez, acceso razonable a financiación y un plan de caja;
- el retorno esperado del proyecto supera sus costes y riesgos;
- el negocio tiene una base instalada rentable y el déficit es temporal;
- existen hitos verificables de capacidad, cliente o contrato.

### Es una señal de alerta cuando

- el negativo se repite sin explicación ni hitos;
- el capex de mantenimiento se reduce para proteger el FCF;
- los ingresos y márgenes caen mientras aumenta la inversión;
- el circulante se deteriora por inventario, cobros o proveedores;
- la deuda sube sólo para sostener el modelo;
- no existe un plan de caja ni un retorno verificable.

Un ejemplo separado: una empresa con CFO de 80.000 y capex total de 110.000 tiene FCF de -30.000 u.m. Si 40.000 son mantenimiento y 70.000 crecimiento, el dato puede ser compatible con expansión. Si 100.000 son mantenimiento y el negocio se deteriora, la lectura cambia aunque el número sea idéntico.

## 11.6. Owner Earnings frente a FCF

| Concepto | Fórmula | Resultado de Alfa |
|---|---|---:|
| Owner Earnings aproximado | `NI + D&A - mantenimiento - ΔWC` | 50.000 u.m. |
| FCF histórico apalancado | `CFO − CapEx total` | 10.000 u.m. |
| Capex de crecimiento | Parte del capex no incluida en mantenimiento | 40.000 u.m. |
| Diferencia OE - FCF | capex de crecimiento en este ejemplo | 40.000 u.m. |

La relación no es universal: depende de la clasificación del capex, de los ajustes no monetarios y de la definición de CFO. Owner Earnings pregunta por la capacidad de retirada sostenible; FCF pregunta por la caja después de toda la inversión del período. En expansión, FCF puede ser negativo y OE positivo. En negocios maduros con mucho mantenimiento, FCF puede ser positivo y OE menor.

---

# Capítulo 12. Valoración por múltiplos

## 12.1. Marco de lectura

Los múltiplos comparan el precio de un activo con una magnitud financiera. Son útiles cuando el denominador es del mismo período para todos los comparables, tiene una definición contable homogénea, es positivo y normal en el ciclo, representa la generación de caja y es coherente con país, moneda, impuestos y estructura de capital.

No existe un múltiplo correcto universal. Un múltiplo bajo puede ser una oportunidad o la señal de un negocio en declive; uno alto puede quedar justificado por crecimiento, calidad, riesgo o estructura de capital.

### Valor empresarial para las métricas EV

\[
\text{Valor empresarial (EV)} =
\text{Valor de mercado del capital propio} + \text{Deuda y obligaciones financieras} + \text{Preferentes y minoritarios} - \text{Efectivo e inversiones no operativas}
\]

En Alfa:

\[
EV = 2.000.000 + 300.000 - 100.000 = 2.200.000 \text{ u.m.}
\]

No se incluyen preferentes ni minoritarios porque son cero. Los 100.000 de efectivo se restan porque el ejemplo los define como efectivo disponible no operativo; si fueran caja necesaria para operar, no se restarían sin ajustar el denominador y el FCFF. En un análisis real, arrendamientos, pensiones, sociedades conjuntos y otros conceptos deben tratarse de forma consistente.

### 12.1.1 Ficha de 13 puntos: valor empresarial (EV)

1. **Fórmula.** `EV = valor de mercado del capital propio + deuda y obligaciones financieras + preferentes + participaciones no controlantes - efectivo e inversiones no operativas`.
2. **Variables.** Capital propio, deuda con intereses, preferentes, participaciones no controlantes, efectivo, inversiones no operativas, arrendamientos y otras obligaciones financieras.
3. **Datos requeridos.** Precio de las acciones, número de acciones, balance, detalle de deuda, efectivo, participaciones no controlantes y criterio de tratamiento de arrendamientos. Todos los comparables deben usar la misma definición.
4. **Pasos.** Calcular el valor de mercado del capital propio; sumar deuda y obligaciones; sumar preferentes y no controlantes; restar efectivo e inversiones no operativas; registrar los ajustes; comparar con el denominador usado.
5. **Ejemplo.** Alfa: valor de mercado del capital propio 2.000.000; deuda 300.000; efectivo 100.000; preferentes y no controlantes cero.
6. **Resultado.** `EV = 2.000.000 + 300.000 - 100.000 = 2.200.000 u.m.`
7. **Interpretación.** EV representa el valor aproximado de la operación, independiente de cómo se financia parte del negocio. No equivale al precio de la acción ni al valor liquidativo.
8. **Lectura temporal y comparativa.** EV cambia por el precio, la deuda, el efectivo y las transacciones. Comparar EV sólo si la estructura de capital y las partidas no operativas están homogeneizadas.
9. **Rangos y cautelas.** No existe un EV correcto universal. El efectivo no siempre es completamente disponible y las obligaciones de arrendamiento, pensiones, inversiones en empresas participadas y deuda pueden requerir un tratamiento adicional. EV no captura calidad, crecimiento ni ciclicidad por sí solo.
10. **Señal favorable.** EV bajo respecto de pares con calidad, crecimiento, rentabilidad y riesgo comparables, junto con una estructura de capital sostenible y transparente.
11. **Señal desfavorable.** EV alto por expectativas no respaldadas, deuda oculta, efectivo no disponible o comparables con tratamientos incompatibles. Un EV menor tampoco basta si el negocio se deteriora.
12. **Errores comunes.** Olvidar sumar deuda; no restar efectivo; incluir efectivo restringido; mezclar EV con capitalización bursátil; no tratar los arrendamientos; usar EV con EBITDA de otra fecha; ignorar no controlantes.
13. **Cuándo no usarlo y complementarios.** EV es necesario para EV/EBITDA y EV/EBIT, pero no debe ser el único insumo. Complementar con P/E, P/B, rendimiento del FCF, capital circulante, deuda neta, ROIC y sensibilidad del negocio.

## 12.2. Fichas de 13 puntos de los múltiplos

### 12.2.1. P/E: precio/beneficio

1. **Fórmula.** `P/E = precio por acción / EPS diluido`, equivalente a `valor de mercado del capital propio / beneficio neto atribuible`.
2. **Variables.** Precio, número de acciones, EPS, beneficio neto, dividendos extraordinarios, partidas no recurrentes y política de dilución.
3. **Datos requeridos.** Precio en la fecha de valoración y beneficios de los últimos doce meses o estimaciones consistentes. Usar el mismo criterio de acciones básicas y diluidas para todos.
4. **Pasos.** Determinar beneficios normalizados; calcular EPS; dividir precio entre EPS; comparar con el propio histórico y pares similares; revisar la calidad del denominador.
5. **Ejemplo.** Precio de Alfa: 20 u.m. EPS = `100.000/100.000 = 1,00 u.m.`.
6. **Resultado.** `P/E = 20/1 = 20x`. No significa que la acción vaya a subir 20 veces ni que la empresa valga necesariamente 20 u.m. de utilidad futura.
7. **Interpretación.** A nivel simplificado, el precio representa 20 veces las ganancias actuales normalizadas. Es útil para empresas rentables con una base de beneficio interpretable.
8. **Lectura temporal y comparativa.** Un 20x no es caro en abstracto. La comparación relevante puede ser Alfa frente a pares de similar crecimiento, ROIC, riesgo, contabilidad y apalancamiento, además de su propio rango histórico.
9. **Rangos y cautelas.** El P/E es poco útil o no está definido con beneficio negativo, muy volátil, cíclico en un pico o dominado por partidas únicas. Cada sector requiere una lectura propia; no usar un promedio sectorial sin homogeneizar.
10. **Señal favorable.** Relativamente menor frente a empresas comparables con calidad, crecimiento, riesgo y capacidad de reinversión semejantes, sin deterioro oculto en el EPS.
11. **Señal desfavorable.** Múltiplo elevado frente a pares sin explicación, apoyado en beneficios no recurrentes o expectativas sin respaldo. También es desfavorable un múltiplo bajo si el beneficio caerá o la estructura de capital es frágil.
12. **Errores comunes.** Usar precio de una fecha y beneficio de otra; mezclar EPS ajustado con beneficio publicado sin explicar; ignorar opciones, convertibles o acciones de empleados; aplicar un P/E de empresas de consumo a banca o servicios públicos sin ajustes; tratar un EPS pico como normal.
13. **Cuándo no usarlo y complementarios.** No usarlo como indicador principal en pérdidas, beneficios muy inestables o cuando el balance tiene un fuerte apalancamiento. Complementar con EV/EBIT, rendimiento del FCF, Owner Earnings, P/B cuando proceda, ROIC y calidad del beneficio.

### 12.2.2. P/B: precio/valor contable

1. **Fórmula.** `P/B = precio por acción / valor contable por acción`, equivalente a `valor de mercado del capital propio / patrimonio contable atribuible`.
2. **Variables.** Precio, acciones, patrimonio neto atribuible, utilidades retenidas, intangibles, provisiones y cambios contables.
3. **Datos requeridos.** Balance auditado, número de acciones, misma moneda, tratamiento de intangibles, política de depreciación y activos o pasivos no reconocidos. Preferir valor contable tangible cuando el modelo lo justifique.
4. **Pasos.** Calcular capital propio atribuible; dividir entre acciones; dividir precio entre BVPS; identificar intangibles y deterioros; comparar con ROE, costo de capital propio y pares con intensidad de activos similar.
5. **Ejemplo.** Capital propio de Alfa = 800.000 u.m.; acciones = 100.000; BVPS = 8 u.m.; precio = 20 u.m.
6. **Resultado.** `P/B = 20/8 = 2,5x`; el mercado asigna 2,50 u.m. de valor de mercado por cada 1 u.m. de patrimonio contable.
7. **Interpretación.** En empresas con activos identificables, P/B ayuda a valorar el capital existente; con pocos intangibles registrados puede subestimar una franquicia y con contabilidad conservador puede inflarla.
8. **Lectura temporal y comparativa.** Un P/B alto puede ser razonable con ROE y crecimiento superiores; uno bajo puede reflejar mala calidad de activos, pasivos ocultos o expectativas de deterioro. Comparar con el valor contable histórico y con activos tangibles.
9. **Rangos y cautelas.** Valores contables negativos o cercanos a cero producen ratios no interpretables; intangibles, comercio minorista, petróleo y gas, bancos, aseguradoras y propietarios requieren ajustes diferentes. El mismo P/B puede ser distinto según contabilidad, inflación y país.
10. **Señal favorable.** P/B moderado o bajo junto a activos verificables, ROE sostenible, buen gobierno y balance sólido; o P/B alto si la rentabilidad y el crecimiento del franquicia lo justifican.
11. **Señal desfavorable.** P/B alto sin ROE superior, o P/B bajo porque el patrimonio no es realizable. Un descuento de valor contable puede reflejar pasivos o activos de mala calidad, no una ganga automática.
12. **Errores comunes.** Confundir BVPS con valor contable tangible; ignorar participaciones no controlantes, preferentes o arrendamientos; comparar bancos con software; no separar fondo de comercio de activos físicos; usar capital propio medio sin explicar la fecha.
13. **Cuándo no usarlo y complementarios.** Es poco útil para marcas, plataformas y servicios cuyo valor está en intangibles o conocimiento especializado no registrado. Complementar con ROE, ROIC, P/E, EV/EBIT, rendimiento del FCF y calidad de la dirección.

### 12.2.3. P/S: precio/ventas

1. **Fórmula.** `P/S = valor de mercado del capital propio / ingresos`, o `precio por acción / ventas por acción`.
2. **Variables.** Precio, acciones, ingresos netos, devoluciones, descuentos, reconocimiento de ingresos, inflación y mezcla de clientes.
3. **Datos requeridos.** Ingresos del mismo período, política contable, moneda, número de acciones y, especialmente, margen bruto y operativo, crecimiento y calidad de las ventas. Una venta no equivale a otra según su calidad.
4. **Pasos.** Calcular ventas; dividir el valor de mercado del capital propio entre las ventas; separar ingresos brutos y netos; controlar la política contable; comparar márgenes y crecimiento antes de interpretar.
5. **Ejemplo.** Alfa: valor de mercado del capital propio = 2.000.000; ingresos = 1.000.000 u.m.
6. **Resultado.** `P/S = 2,0x`. Cada 1 u.m. de ventas actuales tiene asociados 2 u.m. de valor de mercado.
7. **Interpretación.** P/S puede ser útil para negocios con márgenes volubles o pérdidas, pero una venta con bajo margen crea mucho menos valor que una venta con margen alto.
8. **Lectura temporal y comparativa.** Dos empresas con P/S de 2x no son equivalentes si una tiene margen FCF de 1% y otra 20%, o si una tiene ventas orgánicas del 3% y otra del 25%. Comparar margen, crecimiento, retención y ROIC.
9. **Rangos y cautelas.** Sectores de bajo margen pueden soportar múltiplos de ventas distintos de los de alto margen, pero no existe una regla universal. No usar P/S sin investigar devoluciones, momento de reconocimiento de ingresos o cambios contables.
10. **Señal favorable.** P/S relativamente bajo para un negocio con márgenes, crecimiento y conversión de caja superiores, o alto sólo cuando la expansión tiene evidencia y perspectivas duraderas.
11. **Señal desfavorable.** P/S elevado con ventas estancadas y márgenes decrecientes; P/S bajo con baja conversión, inventario creciente o ventas de baja calidad. Múltiplo de ventas no mide por sí solo rentabilidad ni solvencia.
12. **Errores comunes.** Utilizar ventas brutas en vez de netas; mezclar ingresos con devoluciones; ignorar las diferentes duraciones de los contratos; comparar retail, software, banca y servicios públicos únicamente por P/S; no ajustar por inflación o moneda.
13. **Cuándo no usarlo y complementarios.** No es suficiente cuando los ingresos no expresan la capacidad de monetización. Complementar con EV/EBITDA, EV/EBIT, margen FCF, crecimiento por acción, ROIC y cohortes de clientes.

### 12.2.4. EV/EBITDA

1. **Fórmula.** `EV/EBITDA = Valor empresarial / EBITDA`, donde `EBITDA = EBIT + D&A` si la definición de D&A coincide con la del negocio.
2. **Variables.** EV, deuda, efectivo, preferentes, minoritarios, EBIT, D&A, arrendamientos y cualquier elemento no operativo incluido o excluido de EV.
3. **Datos requeridos.** Valor de mercado, balance de deuda y efectivo, EBITDA de los últimos doce meses o normalizado y criterios consistentes de exclusión de partidas no recurrentes.
4. **Pasos.** Calcular el valor de mercado del capital propio; construir EV; obtener EBITDA normalizado; dividir EV por EBITDA; revisar capex, impuestos, arrendamientos y compensación por acciones antes de comparar.
5. **Ejemplo.** EV = 2.200.000; EBIT = 200.000; D&A = 50.000; EBITDA = 250.000 u.m.
6. **Resultado.** `EV/EBITDA = 2.200.000/250.000 = 8,8x`. El ejemplo no incluye preferentes ni minoritarios.
7. **Interpretación.** EV intenta neutralizar diferencias de estructura de capital; EBITDA mide beneficios antes de intereses, impuestos, depreciación y amortización. No incorpora directamente cuánto capex se necesita para mantener EBITDA.
8. **Lectura temporal y comparativa.** Un EV/EBITDA menor puede ser más comparable entre empresas con distinto apalancamiento, pero no si una tiene EBITDA de baja calidad, arrendamientos tratados de forma distinta o un ciclo diferente. Comparar con EV/EBIT y rendimiento del FCF.
9. **Rangos y cautelas.** EBITDA negativo o casi cero vuelve el ratio inestable. Para activos con capex elevado, el mismo EBITDA puede tener menor convertibilidad en caja. Resultados cíclicos en pico requieren normalización.
10. **Señal favorable.** Múltiplo moderado respecto a pares con calidad, crecimiento y intensidad de capex comparables, y suficiente FCF después de toda la inversión.
11. **Señal desfavorable.** EV/EBITDA alto por estructura de capital, fondo de comercio o expectativas de crecimiento; múltiplo bajo si EBITDA no cubre reposición, capital circulante o deuda. Menos deuda no siempre significa mejor negocio si la empresa es de baja calidad.
12. **Errores comunes.** Olvidar sumar deuda o restar efectivo; usar EV con EBITDA atribuible a minoritarios; tratar arrendamientos de dos formas; sumar D&A que no pertenece a EBIT; normalizar EBITDA añadiendo gastos recurrentes; ignorar capital circulante.
13. **Cuándo no usarlo y complementarios.** No usarlo si la estructura de costes hace EBITDA poco informativo, si hay grandes ajustes contables o si el negocio tiene ciclos muy extremos. Complementar con EV/EBIT, P/E, rendimiento del FCF, ROIC, capex/EBITDA y balance.

### 12.2.5. EV/EBIT

1. **Fórmula.** `EV/EBIT = Valor empresarial / EBIT normalizado`, con EBIT antes de intereses e impuestos, pero después de D&A.
2. **Variables.** EV, EBIT, partidas no recurrentes, impuestos, depreciación y amortización, deuda, efectivo, preferentes y minoritarios.
3. **Datos requeridos.** EV homogéneo y EBIT del mismo período, con ajustes transparentes y sin tratar D&A como un coste evitable inexistente.
4. **Pasos.** Construir EV; identificar EBIT económico; normalizarlo; dividir; comparar capex y crecimiento; contrastar con EBITDA y FCF.
5. **Ejemplo.** EV = 2.200.000; EBIT de Alfa = 200.000 u.m.
6. **Resultado.** `EV/EBIT = 2.200.000/200.000 = 11x`.
7. **Interpretación.** El mercado asigna 11 u.m. de valor empresarial por cada 1 u.m. de EBIT actual normalizado. A diferencia de EBITDA, EBIT reconoce el consumo económico de activos mediante D&A, aunque no elimina las diferencias contables.
8. **Lectura temporal y comparativa.** Es útil para comparar empresas intensivas en capital y con D&A significativa, pero un múltiplo menor no siempre indica mejor negocio si el capex de crecimiento y el capital circulante son mayores. Comparar con EV/EBITDA y FCF.
9. **Rangos y cautelas.** EBIT negativo o inestable no produce un múltiplo interpretable. Diferencias de método de depreciación, arrendamientos, capitalización de software, impuestos y participaciones pueden alterar el denominador. En ciclos extremos, usar EBIT normalizado.
10. **Señal favorable.** Múltiplo relativamente contenido con ROIC, conversión y crecimiento consistentes; mejor aún si FCF confirma la capacidad de EBIT.
11. **Señal desfavorable.** EV/EBIT elevado con retornos bajos, o bajo porque EBIT no cubre capex de mantenimiento y deuda. Un menor número puede ocultar una estructura de capital o clasificación diferente.
12. **Errores comunes.** Usar EBITDA y llamarlo EBIT; no normalizar ventas; sumar deuda sólo a EV y no al denominador correcto; incluir ajustes no recurrentes; no deduplicar arrendamientos; comparar EBIT de un ejercicio con EV de otro.
13. **Cuándo no usarlo y complementarios.** No es la métrica principal para políticas contables muy distintas o cuando EBIT no representa la generación de capacidad. Complementar con EV/EBITDA, P/E, rendimiento del FCF, ROIC, intensidad de capex, impuestos y capital circulante.

### 12.2.6. Rendimiento del FCF (FCF yield)

1. **Fórmula.** En la convención de este capítulo, `rendimiento del FCF histórico apalancado = FCF histórico / capitalización bursátil × 100`, o `FCF por acción / precio por acción × 100`. No se llama cobertura exacta del capital propio: el flujo puede estar después de intereses y antes de los movimientos netos de deuda. Para comparación operativa puede usarse `FCFF / EV`, pero es otra métrica y exige definirlo.
2. **Variables.** FCF, CFO, capex total, valor de mercado del capital propio, acciones, precio, deuda, efectivo y la definición de FCF utilizada.
3. **Datos requeridos.** Estado de flujos, capex, balance, precio y número de acciones del mismo período. Separar FCF de crecimiento, mantenimiento y adquisiciones.
4. **Pasos.** Calcular CFO; restar capex; dividir por capitalización bursátil; convertir a porcentaje; comparar en serie temporal, por acción y con Owner Earnings.
5. **Ejemplo.** FCF histórico apalancado de Alfa = 10.000; capitalización bursátil = 2.000.000 u.m.
6. **Resultado.** `10.000/2.000.000 = 0,005 = 0,5%`. También `0,10/20 = 0,5%`.
7. **Interpretación.** El rendimiento del FCF actual respecto al precio es bajo en el ejemplo; no significa que el valor vaya a caer, sino que la caja actual representa una proporción pequeña del precio. Si el FCF crece, el rendimiento puede mejorar sin movimiento de precio.
8. **Lectura temporal y comparativa.** Un rendimiento alto puede ser compatible con FCF normalizado y duradero; uno bajo puede ser razonable en un negocio con crecimiento. Comparar rendimiento del FCF con rendimiento de Owner Earnings y EV/EBIT usando la misma definición.
9. **Rangos y cautelas.** Un FCF negativo produce rendimiento negativo, pero no es comparable con un rendimiento positivo. CFO puede mejorar por capital circulante y el capex puede estar temporalmente deprimido o inflado. No llamar rendimiento del FCF a FCFF/EV sin definirlo.
10. **Señal favorable.** Rendimiento superior al de pares y al propio histórico, con FCF por acción creciente, conversión estable y balance que permite mantener la distribución o inversión.
11. **Señal desfavorable.** Rendimiento persistente bajo sin crecimiento verificable, o rendimiento muy alto por caída del denominador, riesgo de reducción de dividendos, mantenimiento oculto o capital circulante deteriorado. Un rendimiento alto no es automáticamente mejor.
12. **Errores comunes.** Usar capitalización bursátil de una fecha y FCF de otra; dividir por valor empresarial sin ajustar; restar sólo capex de mantenimiento sin justificar; ignorar adquisiciones; usar FCF de un grupo con capital propio parcial; llamar rendimiento a una variación de precio.
13. **Cuándo no usarlo y complementarios.** Es poco útil para empresas en rápida expansión con FCF negativo o con clasificación CFO–CapEx no representativa. Complementar con Owner Earnings, EV/EBIT, ROIC, cobertura de dividendos, deuda, crecimiento y sensibilidad del FCF.

### 12.2.7. Rendimiento del dividendo (dividend yield)

1. **Fórmula.** `rendimiento del dividendo = dividendo anual por acción / precio por acción × 100`, equivalente a `dividendos pagados / capitalización bursátil × 100` con el mismo período y base.
2. **Variables.** DPS, precio, acciones, dividendos ordinarios o especiales, fecha de cotización, retención fiscal y distribución total.
3. **Datos requeridos.** Frecuencia y fecha de pago, dividendo declarado o pagado, ex-dividend, precio en la fecha de cotización y dividendos especiales separados.
4. **Pasos.** Calcular DPS anual; dividir por precio; expresar en porcentaje; separar dividendo ordinario y dividendo especial; verificar cobertura y sostenibilidad.
5. **Ejemplo.** Alfa paga 40.000 u.m. al año y tiene 100.000 acciones: DPS = 0,40 u.m. Precio = 20 u.m.
6. **Resultado.** `0,40/20 = 0,02 = 2%`. El ingreso anual bruto equivale a 2 u.m. por cada 100 u.m. de precio.
7. **Interpretación.** Rendimiento es una relación de ingreso con precio, no la rentabilidad total. El precio puede caer, el dividendo puede recortarse y los impuestos pueden reducir el cobro neto.
8. **Lectura temporal y comparativa.** Un rendimiento 2% puede subir sólo porque el precio baja; un rendimiento 8% puede caer por una reducción del dividendo. Comparar rendimiento con payout, cobertura, crecimiento y política de retención, no sólo con el porcentaje.
9. **Rangos y cautelas.** Separar dividendos especiales de ordinarios; usar rendimiento bruto o neto de forma consistente; no mezclar monedas; revisar retenciones, impuestos y fecha. El rendimiento no es útil por sí solo si la empresa no puede pagarlo.
10. **Señal favorable.** Rendimiento razonable frente a pares y creciente, con dividendos cubiertos por beneficios y caja, balance sólido y política de distribución sostenible.
11. **Señal desfavorable.** Alto rendimiento por caída del precio, recortes inminentes, cobertura débil, dependencia de deuda o crecimiento que exige todo el efectivo. Un rendimiento bajo puede ser consecuencia de una empresa aún reinvirtiendo.
12. **Errores comunes.** Usar dividendos de un año y precio de otro; sumar un especial como recurrente; llamar rendimiento a payout; usar DPS bruto sin impuestos; no verificar frecuencia; ignorar dilución.
13. **Cuándo no usarlo y complementarios.** No usarlo para empresas sin dividendos, con distribución irregular o cuando el ingreso no es el objetivo de la tesis. Complementar con payout, cobertura, crecimiento, FCF, balance, recompras y reglas fiscales de cada jurisdicción.

### 12.2.8. PEG: P/E / crecimiento esperado

1. **Fórmula.** En su forma más común, `PEG = P/E ÷ crecimiento esperado de EPS expresado en porcentaje`. Por ejemplo, `20x ÷ 10% = 2,0`.
2. **Variables.** P/E normalizado, crecimiento esperado del EPS, horizonte, base de comparación, calidad del crecimiento, retención y política de acciones.
3. **Datos requeridos.** P/E estable, previsión explícita o CAGR (tasa compuesta anual) de varios años, período, moneda, riesgo y consistencia de los pares.
4. **Pasos.** Calcular P/E; definir un crecimiento no trivial; convertirlo a la misma unidad; dividir; comprobar que el crecimiento sea normalizado; comparar con pares y con la serie propia.
5. **Ejemplo.** Alfa tiene P/E de 20x. Supongamos un crecimiento esperado de EPS del 10% anual durante varios años.
6. **Resultado.** `PEG = 20/10 = 2,0`. No significa que la acción tenga un rendimiento de 2; es una relación precio-crecimiento bajo una convención concreta.
7. **Interpretación.** Un PEG menor puede ser compatible con una combinación más moderada de precio y crecimiento, pero depende de calidad, duración y financiación. Un PEG alto puede ser razonable si el crecimiento es de alta calidad y muy duradero.
8. **Lectura temporal y comparativa.** Comparar el mismo horizonte y la misma base. Un PEG calculado con 30% de crecimiento de un año puede parecer mejor que otro con 12% estructural, aunque el primero sea más frágil.
9. **Rangos y cautelas.** El denominador debe ser positivo y significativo. No usar P/E negativo, crecimiento cero, cíclico, por efecto base o dependiente de una adquisición. El crecimiento de EPS puede venir de apalancamiento o recompras, no del negocio.
10. **Señal favorable.** PEG relativamente contenido con crecimiento respaldado por ventas, margen, ROIC, conversión de caja y un balance capaz de financiar la expansión.
11. **Señal desfavorable.** PEG bajo por crecimiento insostenible, base baja, normalización posterior o manipulación contable; PEG alto por expectativas optimistas o riesgo de dilución.
12. **Errores comunes.** Mezclar P/E histórico con crecimiento futuro; omitir que el crecimiento va en porcentaje; comparar crecimiento de ventas con crecimiento de EPS; usar CAGR sin definir años; no ajustar por inflación, moneda o partidas extraordinarias.
13. **Cuándo no usarlo y complementarios.** No usar como principal en pérdidas, crecimiento negativo, negocios no comparables o datos poco fiables. Complementar con P/E, P/S, EV/EBIT, EV/EBITDA, ROIC, FCF, margen de seguridad y escenarios de reversión.

## 12.3. Resumen numérico de los múltiplos de Alfa

Todos los denominadores usan los mismos datos base de la nota de coherencia: precio 20 u.m., capitalización bursátil 2.000.000 u.m., EV 2.200.000 u.m., beneficio neto 100.000 u.m., patrimonio 800.000 u.m., ingresos 1.000.000 u.m., EBIT 200.000 u.m., EBITDA 250.000 u.m., FCF 10.000 u.m. y dividendos 40.000 u.m.

| Múltiplo | Cálculo | Resultado |
|---|---|---:|
| P/E | `20/1,00` | 20,0x |
| P/B | `20/8,00` | 2,5x |
| P/S | `2.000.000/1.000.000` | 2,0x |
| EV/EBITDA | `2.200.000/250.000` | 8,8x |
| EV/EBIT | `2.200.000/200.000` | 11,0x |
| Rendimiento del FCF | `10.000/2.000.000` | 0,5% |
| Rendimiento del dividendo | `40.000/2.000.000` | 2,0% |
| PEG | `20/10` | 2,0 |

Estos ocho valores no se interpretan aisladamente. Por ejemplo, un P/E de 20x convive con un rendimiento del FCF de 0,5% porque el beneficio contable y el flujo de caja después de todo el capex son magnitudes diferentes. Un FCF bajo puede ser temporal, pero también puede advertir que la caja no acompaña al beneficio.

**Control de rentabilidad de Alfa.** Con los datos publicados, sólo puede calcularse un ROE de cierre provisional: `100.000 / 800.000 = 12,5 %`. El ROE medio requiere el patrimonio inicial; el ROA requiere activos totales medios, por lo que no es calculable con esta ficha. La identidad `P/B = P/E × ROE de cierre` da `20 × 0,125 = 2,5x`, pero no sustituye al ROE medio. El ROIC tampoco es calculable aquí sin tasa fiscal y capital invertido inicial y final.

## 12.4. Ventajas, desventajas, uso y elementos a evitar

### Comparación intersectorial

- **Bancos, aseguradoras y otros intermediarios financieros:** P/B y P/E suelen ser más útiles que P/S; el patrimonio, la calidad de los activos y el ROE son centrales. EV/EBITDA requiere un tratamiento homogéneo del capital y de la estructura financiera.
- **Software, plataformas y servicios intangibles:** P/S, EV/EBIT, rendimiento del FCF y métricas de crecimiento pueden ser más informativos que P/B; el valor depende de la retención, la economía de escala y la calidad del beneficio.
- **Servicios públicos, telecomunicaciones e infraestructura:** EV/EBITDA, EV/EBIT y FCF ayudan a valorar la operación, pero la deuda, los contratos, el capex regulatorio y la estructura de capital son esenciales. Un P/E aparentemente bajo puede reflejar apalancamiento.
- **Comercio minorista y consumo:** P/E, P/S, EV/EBIT y FCF deben leerse junto con el margen, el inventario, las devoluciones y la velocidad de rotación.
- **Recursos naturales, energía y otros sectores cíclicos:** normalizar beneficios y FCF; no comparar un pico de EBIT/EBITDA con un año de inversión intensiva.
- **Salud y servicios profesionales:** EV/EBIT, P/E y FCF son útiles si la remuneración, el crecimiento y el ciclo de cobro se normalizan; P/B suele ser menos informativo.

| Múltiplo | Uso principal | Ventajas | Desventajas | Evitar |
|---|---|---|---|---|
| P/E | Empresas rentables con beneficios normalizados | Rápido, familiar y ligado al accionista | Sensible a ciclos, contabilidad, apalancamiento y crecimiento | EPS pico, negativos o seleccionados |
| P/B | Bancos, aseguradoras y empresas con capital verificable | Enlaza precio con activos y ROE | Intangibles y deterioros distorsionan; cero o negativo | Usarlo igual para software y bancos |
| P/S | Negocios con márgenes volubles o pérdidas | No exige beneficio positivo; útil para ventas | No mide margen, caja ni calidad de ingresos | Ignorar devoluciones, márgenes y crecimiento |
| EV/EBITDA | Empresas con distinto apalancamiento | Neutraliza parte del apalancamiento | Omite capex, impuestos, arrendamientos y CFO | EV inconsistente o EBITDA no normalizado |
| EV/EBIT | Activos con D&A relevante | Refleja mejor el coste económico de activos | Depende de políticas contables e impuestos | EBIT negativo o no homogéneo |
| Rendimiento del FCF | Negocios con caja estable | Conecta precio con efectivo disponible | FCF puede ser volátil o negativo | Confundir rendimiento con calidad o rentabilidad total |
| Rendimiento del dividendo | Empresas maduras con distribución | Muestra ingreso potencial en precio | No mide crecimiento y puede reflejar un recorte | Tratar rendimiento alto como sostenibilidad |
| PEG | Empresas con crecimiento esperado positivo | Relaciona precio y crecimiento | Muy sensible a la previsión y a la base | Crecimiento cíclico, cero o no verificable |

---

# Capítulo 13. Dividendos

## 13.1. Concepto

El dividendo es una distribución de efectivo a los accionistas. Para analizarlo conviene separar cinco preguntas:

1. ¿Cuánto se recibe respecto al precio? **Rendimiento.**
2. ¿Cuánto del beneficio se reparte? **Payout (porcentaje de distribución).**
3. ¿Con qué ritmo crece? **Crecimiento.**
4. ¿Cuántas veces lo cubre el negocio? **Cobertura.**
5. ¿Cuánto se retiene para invertir? **Retención.**

Ninguna de estas preguntas responde por sí sola si la distribución es sostenible. Un dividendo grande puede obligar a refinanciar deuda, perder capacidad de inversión o exigir una ampliación de capital.

> **Advertencia fiscal y de jurisdicción:** los importes de rendimiento y cobertura son brutos y anteriores a impuestos. La tributación puede variar según residencia fiscal, domicilio del pagador, retenciones, tratados, vehículos de inversión y normas locales; el mismo dividendo puede tener un resultado neto distinto en cada jurisdicción. Este apartado no ofrece asesoramiento fiscal.

## 13.2. Ficha de 13 puntos: rendimiento del dividendo (dividend yield)

1. **Fórmula.** `rendimiento del dividendo = DPS anual / precio por acción × 100`, o `dividendos pagados / capitalización bursátil × 100`.
2. **Variables.** DPS, precio, acciones, dividendos ordinarios y especiales, fecha de cotización, moneda y retención fiscal.
3. **Datos requeridos.** Días de pago, dividendo declarado o pagado, ex-dividend, frecuencia de distribución y precio de la misma fecha.
4. **Pasos.** Calcular DPS anual; dividir por precio; convertir a porcentaje; separar especiales; revisar payout, cobertura y crecimiento.
5. **Ejemplo.** Alfa: 40.000 u.m. de dividendos y 100.000 acciones producen DPS = 0,40 u.m. Precio = 20 u.m.
6. **Resultado.** `0,40/20 = 2%`.
7. **Interpretación.** Es el ingreso bruto anual como porcentaje del precio, no la rentabilidad total. No incluye cambios del precio de la acción ni impuestos.
8. **Lectura temporal y comparativa.** Un rendimiento alto puede aumentar por caída del precio; uno bajo puede ser normal en una empresa que reinvierte. Comparar con pares, con el propio histórico y con payout y cobertura.
9. **Rangos y cautelas.** Rendimiento especial no es rendimiento recurrente. Debe indicarse si es bruto o neto y qué fecha de precio se usa. No hay umbral universal.
10. **Señal favorable.** Rendimiento estable o creciente, compatible con beneficio, caja y balance, sin depender de deuda ni de recortes de inversión.
11. **Señal desfavorable.** Rendimiento alto por una caída del precio, beneficios decrecientes, cobertura débil o dividendos financiados con deuda. Rendimiento bajo no es malo por sí mismo.
12. **Errores comunes.** Mezclar fechas, monedas o bases de acciones; sumar un dividendo especial a la distribución ordinaria; llamar rendimiento a payout; ignorar retención; usar dividendos declarados como si fueran pagados.
13. **Cuándo no usarlo y complementarios.** No usar para empresas sin distribución, políticas irregulares o cuando el objetivo no es el ingreso. Complementar con payout, cobertura, crecimiento, retención, FCF, deuda y fiscalidad.

## 13.3. Ficha de 13 puntos: porcentaje de distribución (payout ratio)

1. **Fórmula.** `Payout ratio = dividendos comunes / beneficio neto atribuible × 100`. Con acciones y EPS homogéneos, equivale a `DPS/EPS × 100`.
2. **Variables.** Dividendos comunes, beneficio neto atribuible, acciones, EPS, dividendos especiales, prima de emisión y resultado normalizado.
3. **Datos requeridos.** Beneficio neto del mismo período, dividendos pagados o declarados, número de acciones, partidas no recurrentes y dilución.
4. **Pasos.** Normalizar el beneficio; identificar dividendos comunes; dividir; expresar en porcentaje; comparar tendencia, balance y cobertura de caja.
5. **Ejemplo.** Alfa: dividendos 40.000; beneficio neto 100.000 u.m.
6. **Resultado.** `40.000/100.000 = 40%`. La retención es 60.000 u.m. antes de otras partidas.
7. **Interpretación.** El 40% del beneficio del ejemplo se distribuye y el 60% queda en el negocio según la simplificación. Un payout del 100% no significa automáticamente insostenibilidad, pero deja poca holgura.
8. **Lectura temporal y comparativa.** Un payout del mismo nivel puede ser sostenible con beneficios crecientes o peligroso con beneficios decrecientes. Comparar payout con crecimiento, ROE, FCF y deuda.
9. **Rangos y cautelas.** El payout puede superar 100% por un beneficio débil o distribución puntual. No confundir payout contable con cobertura de caja. Separar especiales y recompras.
10. **Señal favorable.** Payout moderado y estable, compatible con beneficios normalizados, crecimiento y capacidad de reinversión.
11. **Señal desfavorable.** Payout alto y creciente mientras cae el beneficio, aumenta la deuda o se reduce el mantenimiento. Un payout bajo no garantiza que el dividendo crezca.
12. **Errores comunes.** Usar NI consolidado con dividendos de una filial; mezclar beneficio extraordinario; dividir por acciones equivocadas; tratar retención contable como caja; usar payout como medida de rentabilidad.
13. **Cuándo no usarlo y complementarios.** No usar solo en negocios con beneficios volátiles o grandes partidas no monetarias. Complementar con crecimiento del EPS, FCF, cobertura por OE, balance, retención y política de capital.

## 13.4. Ficha de 13 puntos: crecimiento del dividendo (dividend growth)

1. **Fórmula.** Para un año, `g_D = (D_t/D_{t-1} - 1) × 100`, donde `D_t` es el dividendo anual por acción del año actual y `D_{t-1}` el anterior. Para varios años se usa una tasa compuesta, definiendo inicio, fin y número de años.
2. **Variables.** Dividendo actual, dividendo anterior, frecuencia, acciones, divisiones de acciones, dividendos especiales y norma de distribución.
3. **Datos requeridos.** Serie de dividendos ordinarios, política de payout, beneficios y caja. Separar crecimiento por acción de crecimiento total de la empresa.
4. **Pasos.** Igualar la frecuencia de los dividendos; ajustar por divisiones de acciones; calcular la tasa; comprobar que el dividendo sea ordinario; comparar con crecimiento del beneficio y de la caja.
5. **Ejemplo.** Alfa paga hoy DPS 0,40 u.m. y se proyecta DPS 0,44 u.m. para el año siguiente.
6. **Resultado.** `(0,44/0,40 - 1) × 100 = 10%`.
7. **Interpretación.** El dividendo proyectado crece 10% en el ejemplo. Es una previsión ficticia y no una garantía; exige que el beneficio y la caja también puedan sostenerlo. Con beneficio neto constante en 100.000, el payout del dividendo proyectado de 44.000 sería 44%; si el beneficio creciera 10% a 110.000, sería 40%. Con el ROE de cierre provisional de 12,5% y retención de 60%, el crecimiento sostenible aproximado sería `0,60 × 12,5% = 7,5%`; sostener 10% con payout de 40% requeriría un ROE aproximado de 16,67%. El dividendo actual de 40.000 también supera el FCF histórico de 10.000 en 30.000: esa brecha debe financiarse con caja, deuda u otra fuente y no se debe ocultar.
8. **Lectura temporal y comparativa.** El crecimiento aislado puede ser un efecto base. Comparar varios años, crecimiento por acción, payout, ROE y FCF. Una empresa puede aumentar el dividendo mientras pierde dinero si reduce el payout.
9. **Rangos y cautelas.** No existe una tasa universal. El crecimiento de una empresa joven puede ser alto, pero inestable; una empresa madura puede crecer poco y tener más estabilidad. Un dividendo especial no es crecimiento recurrente.
10. **Señal favorable.** Crecimiento por acción sostenido, compatible con crecimiento del beneficio, cobertura de caja y política de reinversión viable.
11. **Señal desfavorable.** Crecimiento ligado a un payout máximo, beneficios decrecientes, deuda creciente o un dividendo especial presentado como ordinario.
12. **Errores comunes.** Comparar un payout especial con uno ordinario; no ajustar por divisiones de acciones; mezclar moneda; usar sólo crecimiento nominal en un país con inflación; confundir crecimiento de dividendo con crecimiento de precio.
13. **Cuándo no usarlo y complementarios.** No usar cuando sólo hay un año, distribución irregular o datos incompletos. Complementar con payout, cobertura, retención, FCF, balance y calidad del beneficio.

## 13.5. Ficha de 13 puntos: cobertura de dividendos (dividend coverage)

1. **Fórmula.** En este manual, la cobertura principal es `cobertura por OE = OE / dividendos comunes`. Como referencias adicionales se pueden mostrar cobertura de beneficio `NI/dividendos` y cobertura de FCF histórico `FCF histórico/dividendos`.
2. **Variables.** Owner Earnings, FCF, NI, dividendos comunes, acciones, capex de mantenimiento, capital circulante y distribución pagada.
3. **Datos requeridos.** Beneficio neto, estado de flujos, OE normalizado, capex, capital circulante y dividendos del mismo período.
4. **Pasos.** Calcular OE; identificar dividendos comunes; dividir; interpretar junto con payout, tendencia del beneficio y deuda; separar coberturas de caja y beneficio.
5. **Ejemplo.** Alfa: OE = 50.000; dividendos = 40.000 u.m.
6. **Resultado.** `50.000/40.000 = 1,25x`. La cobertura de beneficio es `100.000/40.000 = 2,50x`; la cobertura por FCF histórico es `10.000/40.000 = 0,25x`.
7. **Interpretación.** Según Owner Earnings, la caja recurrente cubre 1,25 veces el dividendo. Según FCF después de todo el capex, no lo cubre; la diferencia refleja principalmente el capex de crecimiento y la elección de la definición.
8. **Lectura temporal y comparativa.** Una cobertura alta puede ser consecuencia de un OE inflado por baja inversión. Una cobertura cercana a uno puede ser aceptable en una empresa estable, pero frágil ante una caída. Comparar la serie y la política de reinversión.
9. **Rangos y cautelas.** No hay un mínimo universal. La cobertura debe ajustarse por estacionalidad, impuestos, deuda y planes de crecimiento. Un dividendo especial puede tener una cobertura puntual calculable, por ejemplo OE 50 / especial 10 = 5x, pero no debe confundirse con la cobertura recurrente del dividendo ordinario.
10. **Señal favorable.** Cobertura estable por Owner Earnings y FCF después de un crecimiento financiado de manera ordenada, con payout moderado y balance sólido.
11. **Señal desfavorable.** Cobertura de beneficio positiva pero FCF muy débil, dividendos financiados con deuda o cobertura calculada excluyendo mantenimiento necesario.
12. **Errores comunes.** Usar sólo NI; olvidar capex; usar dividendos declarados y no pagados; mezclar operaciones de subsidiarias; normalizar OE con una estimación optimista; no separar especiales.
13. **Cuándo no usarlo y complementarios.** No usar una sola cobertura como veredicto. Complementar con payout, rendimiento del dividendo, rendimiento del FCF, OE, deuda, flujo de caja disponible y calidad de la distribución.

## 13.6. Ficha de 13 puntos: retención (retention ratio)

1. **Fórmula.** `Retención simple = 1 - payout ratio = (NI - dividendos comunes)/NI`. En el ejemplo, también puede interpretarse como beneficio retenido dividido por beneficio total.
2. **Variables.** NI, dividendos comunes, acciones, emisiones, reservas, otras partidas de patrimonio y cambios de contabilidad.
3. **Datos requeridos.** Beneficio neto, dividendos, movimientos de patrimonio, emisión de acciones, compensación basada en acciones y políticas de reinversión.
4. **Pasos.** Calcular payout; restarlo de uno; identificar cuánto se conserva; comprobar si la retención se ha invertido productivamente; observar crecimiento por acción.
5. **Ejemplo.** Alfa: NI 100.000; dividendos 40.000 u.m.; payout 40%.
6. **Resultado.** `1 - 0,40 = 0,60 = 60%`. La retención simple es 60.000 u.m.
7. **Interpretación.** El 60% queda como beneficio retenido en la simplificación. Retener no significa que el dinero esté disponible para dividendos ni que se haya invertido con retorno.
8. **Lectura temporal y comparativa.** Una retención alta puede financiar crecimiento o acumular efectivo. Una retención baja puede ser razonable en una empresa madura. Comparar retención con crecimiento, ROE y FCF.
9. **Rangos y cautelas.** La relación es una simplificación contable. El patrimonio puede cambiar por OCI, entre otras partidas, recompras, emisiones o ajustes; no toda retención es caja ni reinversión.
10. **Señal favorable.** Retención suficiente para financiar oportunidades con retorno verificable, manteniendo payout y cobertura sostenibles.
11. **Señal desfavorable.** Retención alta que acumula caja sin retorno, o retención baja que obliga a financiarse para mantener el dividendo y la capacidad.
12. **Errores comunes.** Confundir retención contable con caja; ignorar emisiones; no ajustar por beneficio extraordinario; usar retención sin revisar capex de crecimiento o deuda.
13. **Cuándo no usarlo y complementarios.** No usar como medida aislada de calidad. Complementar con payout, crecimiento, ROIC, OE, FCF, saldo de efectivo, deuda y plan de inversión.

## 13.7. Ejemplo integrado de dividendos de Alfa

| Métrica | Cálculo | Resultado |
|---|---|---:|
| DPS | `40.000/100.000` | 0,40 u.m. |
| Rendimiento del dividendo | `0,40/20` | 2,00% |
| Payout ratio | `40.000/100.000` | 40,00% |
| Retención simple | `1 - 40%` | 60,00% |
| Cobertura por Owner Earnings | `50.000/40.000` | 1,25x |
| Cobertura por beneficio | `100.000/40.000` | 2,50x |
| Cobertura por FCF histórico | `10.000/40.000` | 0,25x |
| Crecimiento proyectado del DPS | `0,44/0,40 - 1` | 10,00% |

La tabla no contiene una contradicción: muestra definiciones diferentes. Para un año con crecimiento fuerte, el FCF puede caer por capex de crecimiento y, aun así, Owner Earnings y beneficio pueden cubrir el dividendo. Para pagar de forma sostenible un dividendo, deben analizarse la calidad del beneficio, el mantenimiento necesario, la deuda, el capital circulante y el calendario de inversión.

## 13.8. Sostenibilidad del dividendo

Una distribución es más creíble cuando:

- el beneficio por acción tiene una base normalizada;
- los dividendos se cubren con beneficio y con caja después del mantenimiento;
- el payout no obliga a abandonar proyectos con retorno razonable;
- el balance puede absorber un período de inversión;
- no hay una concentración excesiva de clientes o proveedores que amenace el flujo;
- el crecimiento del dividendo es compatible con el crecimiento de la empresa;
- la política es estable y los especiales están separados;
- el número de acciones no crece de forma que anule el crecimiento por acción;
- no se ignora la fiscalidad del inversor ni la de la empresa.

La sostenibilidad se revisa en varios años, no en un único trimestre. También conviene separar el dividendo de una compra de acciones: ambas pueden distribuir capital, pero tienen efectos distintos sobre el número de acciones, el balance y la fiscalidad.

**Distribución total a accionistas.** Para no confundir el dividendo con toda la devolución de capital, se puede calcular `rendimiento total de distribución = (dividendos + recompras brutas) / capitalización bursátil`. Las recompras netas de emisiones o SBC se analizan por separado; una recompra no es un rendimiento del accionista y puede destruir valor si se paga demasiado. En Alfa, sin recompras computables, el rendimiento total es sólo `40.000 / 2.000.000 = 2 %`.

## 13.9. Aristocrats y kings (aristócratas y reyes de los dividendos)

En la terminología de índices y manuales financieros:

- **Dividend Aristocrat** suele designar a una empresa con una larga serie de aumentos anuales del dividendo, a menudo 25 años o más.
- **Dividend King** suele reservar esa etiqueta para una serie aún más larga, por ejemplo 50 años o más.

Los nombres y los años de referencia dependen del índice y del proveedor; se mencionan aquí sólo como definiciones terminológicas, no como datos actuales de empresas. La antigüedad no demuestra por sí sola que el dividendo sea seguro: puede esconder un payout creciente, un beneficio decreciente o un negocio que ya no se parece al original. Conviene revisar la calidad de la serie, no sólo el récord.

## 13.10. Dividend trap (trampa de dividendos)

Un **dividend trap** es un dividendo aparentemente atractivo que se sostiene con una situación financiera frágil o que probablemente será reducido. Las señales suelen incluir:

- rendimiento alto porque el precio ha caído;
- payout que sube mientras baja el beneficio;
- cobertura de caja débil;
- deuda creciente para financiar el pago;
- inventario o cobros deteriorados;
- crecimiento basado en proyectos que no generan caja;
- riesgo de recorte próximo o dividendo especial confundido con ordinario.

### Ejemplo ficticio de trampa

**Gamma** tiene 1.000.000 acciones, precio 10 u.m., beneficio neto 200.000 u.m. y dividendos de 80.000 u.m.

- EPS = `200.000/1.000.000 = 0,20 u.m.`.
- DPS = `80.000/1.000.000 = 0,80 u.m.`.
- Rendimiento = `0,80/10 = 8%`.
- Payout = `80.000/200.000 = 40%`.
- Cobertura de beneficio = `200.000/80.000 = 2,50x`.

En apariencia, la distribución parece cubierta. Si el beneficio del año siguiente fuera sólo 120.000 u.m. y el dividendo permaneciera en 80.000 u.m., la cobertura de beneficio sería `120.000/80.000 = 1,50x` y el payout sería `80.000/120.000 = 66,7%`. Si además FCF fuera de sólo 20.000 u.m., la cobertura de FCF sería `20.000/80.000 = 0,25x`. El 8% de rendimiento no elimina el riesgo de reducción.

## 13.11. Conclusión sobre dividendos

El dividendo más elevado no es necesariamente el mejor dividendo. Una distribución útil combina rendimiento razonable, payout controlado, crecimiento sostenido, cobertura por beneficio y caja, retención productiva y un balance que soporte la distribución. La comparación debe hacerse con datos normalizados, por acción, después de impuestos cuando corresponda y dentro de la misma jurisdicción fiscal.

La evaluación debe incluir rendimiento, payout, crecimiento, cobertura y retención, además de la pregunta central: ¿la empresa puede mantener esta distribución si el crecimiento se ralentiza, aumenta el mantenimiento o sube el coste de capital?
