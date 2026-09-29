# MANUAL PROFESIONAL DE INVERSIONES Y VALUE INVESTING

## Guía de estudio y consulta: análisis fundamental, valoración y gestión de riesgos

**Edición:** 1.1 — revisión financiera y editorial  
**Fecha de corte editorial:** 24 de septiembre de 2026  
**Moneda de los ejemplos:** dólares estadounidenses (USD), salvo que se indique lo contrario  
**Naturaleza del documento:** material educativo; no es asesoramiento financiero, fiscal ni legal

---

## Portada

Este manual reúne, en un sistema progresivo, los fundamentos de la inversión, el análisis de estados financieros, los múltiplos de valoración, el discounted cash flow (DCF), el concepto de *owner earnings*, la evaluación de la calidad de un negocio y la construcción de una tesis de inversión.

La exposición comienza con los principios esenciales y avanza hacia el análisis cuantitativo. Se insiste en una idea central: una cifra aislada no es una tesis. Un múltiplo no es barato o caro por sí solo; un crecimiento no crea valor si exige un capital insuficiente; un dividendo elevado no es seguro si no está respaldado por caja; y un balance aparentemente sólido puede ocultar pasivos fuera del balance o un riesgo económico que todavía no se ha materializado.

Todos los cálculos de empresas son **hipotéticos**, se presentan con datos redondeados y sirven para ganar soltura matemática. No representan resultados de empresas reales, precios de mercado, recomendaciones ni rentabilidades pasadas o futuras.

### Cómo utilizar este manual

1. Lea primero los capítulos 1, 2 y 26: los conceptos que enmarcan el resto del método.
2. Utilice el capítulo 3 para traducir la información publicada en los estados financieros.
3. Utilice el capítulo 4 para construir una radiografía inicial; no para comprar o vender de forma mecánica.
4. Utilice los capítulos 5–13 para estimar crecimiento, caja, valor y margen de seguridad.
5. Utilice los capítulos 14–25 para valorar el negocio, el management, el coste de capital, el riesgo y las alternativas de inversión.
6. Aplique el procedimiento, la checklist y el registro de tesis de los capítulos 26–29.
7. Practique con los casos totalmente ficticios del capítulo 30 antes de utilizar el método con datos reales.
8. Consulte la tabla maestra de fórmulas y el glosario como referencia rápida.
9. Utilice la sección final para estructurar una primera lectura de 30 minutos, una primera pasada de una hora o un memorando reproducible de tres horas.

> **Regla de seguridad:** el valor intrínseco nunca es una verdad oculta que se pueda calcular con una única fórmula. Es una estimación dependiente de supuestos. Antes de invertir, compruebe la fuente, la fecha, la calidad y la comparabilidad de los datos.

---

## Índice general

El índice es temático; los enlaces de un lector Markdown se generan a partir de los encabezados. En la versión HTML los capítulos se pueden navegar mediante el menú y los enlaces internos.

### Parte I. Fundamentos y filosofía

1. [Fundamentos de inversión](#capitulo-1)
2. [Value Investing](#capitulo-2)

### Parte II. Lectura de la empresa

3. [Estados financieros](#capitulo-3)
4. [Ratios financieros](#capitulo-4)

### Parte III. Crecimiento, caja y valoración

5. [Fórmulas de crecimiento](#capitulo-5)
6. [Interés compuesto](#capitulo-6)
7. [Valor presente y descuento](#capitulo-7)
8. [DCF — Discounted Cash Flow](#capitulo-8)
9. [Margen de seguridad](#capitulo-9)
10. [Owner Earnings](#capitulo-10)
11. [Free Cash Flow](#capitulo-11)
12. [Valuación por múltiplos](#capitulo-12)
13. [Dividendos](#capitulo-13)

### Parte IV. Calidad, management y coste de capital

14. [Calidad del negocio](#capitulo-14)
15. [Management](#capitulo-15)
16. [Recompras de acciones](#capitulo-16)
17. [ROIC y creación de valor](#capitulo-17)
18. [WACC](#capitulo-18)
19. [CAPM](#capitulo-19)
20. [Beta](#capitulo-20)

### Parte V. Rendimiento real, riesgo y portafolio

21. [Inflación y rendimiento real](#capitulo-21)
22. [Riesgo y retorno](#capitulo-22)
23. [Portafolio](#capitulo-23)

### Parte VI. Otros instrumentos

24. [Bonos](#capitulo-24)
25. [ETF](#capitulo-25)

### Parte VII. Proceso, checklist y comportamiento

26. [Análisis de una empresa paso a paso](#capitulo-26)
27. [Checklist de Value Investing](#capitulo-27)
28. [Value Traps](#capitulo-28)
29. [Errores del inversor](#capitulo-29)

### Parte VIII. Práctica y referencia

30. [Ejemplos completos](#capitulo-30)
31. [Tabla maestra de fórmulas](#capitulo-31)
32. [Glosario](#capitulo-32)
33. [Reglas importantes](#capitulo-33)
34. [Formato y convenciones editoriales](#capitulo-34)
- [Sección final: análisis de una acción en 30 minutos, 1 hora y 3 horas](#seccion-final-como-analizar-una-accion-desde-cero-en-30-minutos-1-hora-y-3-horas)

---

## Convenciones de notación y lectura

- **Cifras:** los importes monetarios se expresan en USD. `M` significa millones y `B` significa miles de millones, salvo que el ejemplo indique otra cosa.
- **Signos:** los signos positivos y negativos se escriben explícitamente cuando afectan a la interpretación.
- **Fórmulas:** se muestran en notación matemática legible y, cuando conviene, también en una versión textual que se puede copiar.
- **ROE, ROA, ROIC y ROCE:** cuando se usan saldos promedio, el ejemplo lo indica; algunas empresas solo facilitan saldos de cierre. Nunca se mezclan denominadores de cierre y promedio sin advertirlo.
- **EBITDA:** no es flujo de caja y no sustituye al FCF. Puede ser útil para comparar estructuras de capital, pero depende de cómo se calculen ajustes y arrendamientos.
- **Deuda:** se usa deuda con interés, no necesariamente todo pasivo. En sectores con arrendamientos, banca, aviación, servicios públicos u otros sectores regulados, la definición debe ampliarse y justificarse.
- **FCF:** el FCF histórico se calcula, salvo indicación contraria, como CFO menos CapEx y se etiqueta como apalancado. En un DCF de empresa se utiliza FCFF con WACC; para el patrimonio se utiliza FCFE con coste del patrimonio. No se mezclan denominadores ni flujos.
- **Crecimiento:** se distingue entre crecimiento nominal, crecimiento real, crecimiento anual simple y CAGR. No se llama “sostenible” a un CAGR sin examinar su base, reinversión y duración.
- **Múltiplos:** un múltiplo no se interpreta sin tipo de empresa, país, moneda, principios contables, ciclo, crecimiento, deuda y calidad de la gerencia.
- **“Valor intrínseco”:** es un rango o escenario estimado, no un punto exacto. En los casos se muestra el valor central y, cuando es posible, sensibilidad.
- **Fechas:** toda cifra de mercado, tasa o dato actual que se incorpore en una versión posterior debe incluir la fecha de corte y la fuente primaria.

---

## Aviso educativo y límites de la evidencia

La información de este manual no garantiza resultados y no sustituye un análisis financiero personalizado. Las empresas y los portafolios de los capítulos 30 y de los ejemplos son ficticios. Las definiciones se han preparado para un uso educativo general; al analizar una cuenta real se debe revisar la norma contable, las políticas de la compañía, las notas de los estados financieros y la presentación del informe anual. Valores de referencia, umbrales o rangos son puntos de comparación iniciales, no reglas de compra.

Las fuentes de referencia sugeridas para una investigación real incluyen:

- IFRS Foundation, normas IAS 1, IAS 7, IAS 38 e IFRS 3: <https://www.ifrs.org/issued-standards/list-of-standards/>
- U.S. Securities and Exchange Commission, EDGAR e Investor.gov: <https://www.sec.gov/edgar/search/> y <https://www.investor.gov/>
- CFA Institute, Research Foundation y normas de educación financiera: <https://www.cfainstitute.org/insights/professional-learning/reflections>
- Aswath Damodaran, materiales de valuation, datos y hojas de cálculo: <https://pages.stern.nyu.edu/~adamodar/>
- FINRA, información sobre riesgo, screeners e inversión: <https://www.finra.org/investors>
- Federal Reserve Economic Data (FRED) y Bureau of Labor Statistics, para tasas e inflación: <https://fred.stlouisfed.org/> y <https://www.bls.gov/cpi/>

**Fecha de consulta de las referencias de navegación:** 24 de septiembre de 2026. No se incorporan en los cálculos datos actuales de cotizaciones o empresas concretas.

---

## Método de lectura de cada fórmula

Para facilitar la consulta, las fórmulas importantes se presentan con una ficha uniforme: **nombre y propósito; variables; expresión matemática; pasos de cálculo; ejemplo; interpretación; rangos orientativos y límites; caso favorable; caso desfavorable; errores frecuentes; cuándo no utilizarla; e indicadores complementarios**. Cuando una fórmula aparece dentro de otra, se remite a la ficha principal para evitar duplicación.

Un rango no es una señal de compra. Antes de convertirlo en una decisión, pregunte: ¿qué periodo? ¿qué norma contable? ¿qué unidad? ¿qué estructura de capital? ¿qué fase del ciclo? ¿qué crecimiento? ¿qué calidad del beneficio? ¿qué riesgos no aparecen en el número?

---

*El desarrollo de los capítulos comienza en el siguiente bloque.*

---

# PARTE I

# 1. Fundamentos de inversión

> **Nota de alcance.** Este material es educativo y sirve para organizar conceptos de inversión. No es asesoramiento financiero, una recomendación de compra o venta ni una promesa de rentabilidad. Antes de actuar, conviene revisar la normativa fiscal, regulatoria y de protección aplicable en la jurisdicción del inversor, así como la documentación del producto y las circunstancias personales. Todos los importes de los ejemplos son hipotéticos y no representan datos de empresas reales.

## 1.1 Índice interno del capítulo

- 1.2 Ahorrar, invertir y especular
- 1.3 El mercado y los instrumentos financieros
- 1.4 Renta fija, renta variable y atributos transversales
- 1.5 Fichas matemáticas de los fundamentos
- 1.6 Diversificación, crédito, inflación y riesgo cambiario
- 1.7 Checklist básico antes de invertir

## 1.2 Ahorrar, invertir y especular

### 1.2.1 La pregunta que precede al producto

Antes de elegir un instrumento conviene identificar:

1. **Necesidad:** ¿cuánto dinero se necesita y en qué fecha? Liquidar una emergencia y comprar un activo a largo plazo no son la misma decisión.
2. **Horizonte:** ¿el plazo permite atravesar crisis, inflaciones y cambios de precios?
3. **Prioridad:** ¿se busca conservar poder de compra, generar ingresos, hacer crecer el capital o combinar esos objetivos?
4. **Tolerancia:** ¿qué pérdida temporal o permanente podría provocar una venta precipitada?
5. **Capacidad:** ¿qué parte del patrimonio puede destinarse a una inversión sin comprometer obligaciones próximas?

Una cartera bien diseñada no es necesariamente la que tiene el rendimiento más alto en un mes. Es la que puede sostener su estrategia durante el horizonte requerido.

### 1.2.2 Comparación de las tres actitudes

| Actitud | Objetivo principal | Horizonte habitual | Relación con el riesgo | Error frecuente |
|---|---|---|---|---|
| **Ahorrar** | Conservar liquidez y disponibilidad de fondos | Corto o medio | Prioriza la estabilidad y la pérdida mínima frente al máximo rendimiento | Confundir disponibilidad con rentabilidad real después de inflación |
| **Invertir** | Transferir capital a un activo o negocio para obtener un retorno económico esperado | Medio o largo | Se acepta variación de precio para aumentar el poder de compra o generar flujos | Confundir la expectativa de retorno con una garantía |
| **Especular** | Obtener un resultado que depende de reglas, plazo, información y posición; puede ser una actividad planificada | Variable, a menudo corto | La incertidumbre y la pérdida pueden ser elevadas | Usar «apuesta» para justificar decisiones sin análisis, tamaño o plan de salida |

Ahorrar e invertir no son categorías totalmente separadas: un depósito es un producto financiero y, a la vez, una forma de conservar liquidez. La frontera está en el propósito, el horizonte y el riesgo que se acepta. La especulación tampoco es necesariamente irracional: puede tener lugar dentro de una estrategia de cobertura, arbitraje o gestión de riesgos, siempre que se comprendan las reglas y el peor resultado posible.

### 1.2.3 El proceso económico detrás de una inversión

Un inversor aporta recursos a una empresa, un gobierno, un inmueble, un fondo o un intermediario. Ese receptor utiliza el capital para producir bienes y servicios, prestar o explorar oportunidades. El inversor puede recibir:

- **Rendimiento del capital:** apreciación, distribución o resultado de una venta.
- **Rendimiento de un flujo:** interés, cupón, alquiler o distribución.
- **Compensación por servicios:** comisión, spread o contraprestación.
- **Protección o cobertura:** una pérdida evitada o una variabilidad reducida.

El retorno económico solo tiene sentido cuando se compara con el poder de compra, el coste de oportunidad, la inflación, los impuestos, las comisiones, el riesgo y la posibilidad real de recuperar el capital.

## 1.3 El mercado y los instrumentos financieros

### 1.3.1 Qué es un mercado financiero

Un mercado financiero es un mecanismo en el que compradores y vendedores intercambian capital, crédito, tiempo o riesgo mediante precios. Sus funciones principales son:

- **Descubrimiento de precios:** centraliza órdenes de compra y venta y ayuda a formar precios de referencia.
- **Movilización de fondos:** conecta ahorradores con empresas, gobiernos y otros solicitantes de capital.
- **Distribución de riesgo:** permite transferir riesgos de precio, crédito, liquidez o interés a quien pueda asumirlos.
- **Formación de liquidez:** ofrece mecanismos para comprar o vender sin una negociación privada distinta para cada operación.
- **Información:** las transacciones, las comunicaciones de los emisores y los datos públicos ayudan a actualizar expectativas.

El precio de mercado es una señal útil, pero no es idéntico al valor económico. Puede verse afectado por liquidez, adversidades, límites de venta, comportamiento colectivo, regulación, pánico o expectativas sobre el futuro. El mercado puede ser eficiente en unos segmentos y menos en otros; la eficiencia es un grado, no un interruptor.

El **mercado primario** es donde el emisor coloca el instrumento por primera vez y recibe los recursos. El **mercado secundario** es donde los participantes intercambian unidades ya emitidas. Que exista un mercado secundario no implica que haya siempre liquidez: la profundidad del libro de órdenes, el diferencial comprador-vendedor, la concentración de tenedores y la capacidad de entrega determinan si una venta puede ejecutarse con un impacto limitado.

### 1.3.2 Acciones

Una acción representa una participación económica en una empresa. Según la jurisdicción y la forma societaria, puede conferir derechos de voto, derecho a dividendos, derecho sobre activos residuales y otros derechos. El accionista no es normalmente un acreedor de la empresa: si no puede pagar sus deudas, su recuperación puede ser inferior a la de un bonista.

Las principales fuentes de retorno son:

1. **Dividendos y otras distribuciones:** no son obligatorias de forma general y pueden cambiar o suspenderse.
2. **Apreciación de la acción:** depende de expectativas sobre beneficios, flujos, activos, competencia y tasa de descuento.
3. **Recompras o reducción de capital:** pueden aumentar o reducir la participación individual según el precio y la ejecución.

Los riesgos característicos incluyen pérdida de control del negocio, dilución, deuda, fraude, deterioro competitivo, cambios regulatorios, iliquidez y una valoración exigente. La cotización no es el activo subyacente: es el precio de una participación en expectativas sobre ese activo y su gobernanza.

### 1.3.3 Bonos y obligaciones

Un bono es, en términos generales, un contrato de deuda. El emisor promete pagos de cupón —o, en estructuras más complejas, otros flujos— y la devolución del principal en la fecha de vencimiento, sujeto a las condiciones del contrato.

Riesgos principales:

- **Riesgo de crédito o incumplimiento:** el emisor no paga.
- **Riesgo de tasa:** el precio de un flujo fijo cambia cuando cambian las tasas; en general, tasa al alza y precio a la baja para un bono de cupón fijo.
- **Riesgo de reinversión:** los cupones pueden tener que reinvertirse a tasas menores.
- **Riesgo de liquidez:** algunos bonos no se venden fácilmente o con un diferencial amplio.
- **Riesgo de extensión y ejercicio de una opción:** el emisor puede alargar el vencimiento o ejercer una opción de rescate o amortización anticipada.
- **Riesgo de recuperación:** en un impago, la recuperación depende de garantías, prioridad, costes y activos disponibles.

El cupón es una tasa pactada sobre el valor nominal; no equivale al retorno total de la posición. El precio comprado o vendido, los cupones, la reinversión, el spread y el cambio de valor del capital forman el retorno.

### 1.3.4 ETFs

Un ETF (*exchange-traded fund*) es una estructura de fondo que cotiza en un mercado y ofrece exposición a un conjunto de activos. Según su diseño puede seguir un índice, un sector, un factor, una estrategia, un producto concreto o una combinación.

Aspectos que deben revisarse:

- **Subyacente:** ETFs de acciones, bonos, materias primas, inmuebles y otros activos tienen riesgos diferentes.
- **Índice de referencia y metodología:** define qué incluye, cómo rebalancea, cómo pondera y cómo puede modificar.
- **Gastos y comisiones:** el *expense ratio* no es el único coste; también pueden existir diferenciales, costes de creación o redención, seguimiento y transacción.
- **NAV y desviación:** el precio de mercado puede diferir del valor liquidativo, especialmente en mercados ilíquidos o con tensión.
- **Liquidez del subyacente:** un ETF puede ser líquido mientras el activo que replica no lo es.
- **Fiscalidad y normativa:** cambian por país, emisor, estructura y operación.

Un ETF no elimina el riesgo del índice. En una crisis, varios activos pueden caer simultáneamente por una correlación elevada.

### 1.3.5 Fondos de inversión

Un fondo reúne aportaciones de inversores y compra activos conforme a su estrategia. Puede ser abierto, cerrado, indexado, activo, sectorial o equilibrado. Las diferencias relevantes incluyen:

| Característica | Fondo indexado | Fondo activo |
|---|---|---|
| Objetivo | Replicar o seguir un índice | Intentar superar un índice después de costes |
| Riesgo de gestión | Principalmente diseño, costes y seguimiento | Añade riesgo de decisiones del gestor y del equipo |
| Coste habitual | Normalmente menor, no necesariamente | Normalmente mayor, no necesariamente |
| Resultado | Puede recibir ingresos o realizar operaciones | Requiere evaluar consistencia, proceso y riesgo ajustado |

Un fondo no es un depósito garantizado. El NAV puede caer, la liquidez puede limitar los reembolsos y la rentabilidad histórica no demuestra que el proceso vaya a continuar funcionando.

### 1.3.6 REITs

Un REIT es una estructura orientada a generar ingresos relacionados con inmuebles mediante propiedades, préstamos, hoteles, almacenes u otros activos. Para sus inversores puede representar una participación o un producto de exposición, según la jurisdicción.

Se deben distinguir:

- **Inmobiliario subyacente:** ubicación, calidad del activo, inquilinos, permisos, mantenimiento y perspectivas de alquiler.
- **Financiación:** deuda, tipos de interés, vencimientos y *covenants*.
- **Estructura fiscal y operativa:** requisitos de distribución, retención de beneficios y gobierno.
- **Precio:** un NAV teórico no se convierte automáticamente en precio de mercado.

Las distribuciones pueden variar o reducirse. Un REIT de oficinas, uno logístico y uno sanitario no pueden evaluarse solo por un mismo *yield*. El valor total incluye retención, depreciación del inmueble, financiación, costes y posibles ajustes de valoración.

### 1.3.7 Commodities y materias primas

Las *commodities* —metales, energía y productos agrícolas— no producen por sí mismas un flujo de dividendos o intereses. La exposición puede obtenerse mediante contratos físicos, futuros y *forwards*, ETFs o fondos de materias primas, o acciones de productores e intermediarios.

En futuros existe el **efecto *roll***: al vencimiento se sustituye un contrato por otro, y el resultado no depende solo del precio al contado. En un mercado en *backwardation* puede haber un beneficio de arrastre; en *contango* puede haber un coste. El resultado final depende también de precios, colateral, liquidez, almacenamiento, fiscalidad y *tracking error*. Un producto sintético puede incluir riesgo de contraparte y de la contraparte del *swap*.

### 1.3.8 Criptomonedas

Una criptomoneda es un activo digital basado en una red o protocolo concreto. No representa automáticamente una participación en una empresa, un derecho sobre un activo tangible o un depósito bancario. Deben distinguirse los tokens con derechos diferentes y analizar el mecanismo de consenso, las comisiones, la custodia, stablecoins, la posibilidad de congelación, la liquidez, los ataques, los puentes y los contratos inteligentes.

La negociación 24/7 puede aumentar la disponibilidad aparente, no necesariamente la calidad del precio ni la facilidad de salida. Una *wallet* no equivale a una cuenta segura: la clave privada, el custodio, la plataforma y la configuración de acceso forman parte del análisis de riesgo. La regulación y la fiscalidad pueden variar y cambiar. No se debe suponer que el comportamiento histórico de un token basta para estimar un valor intrínseco.

### 1.3.9 Efectivo y equivalentes de efectivo

Efectivo y equivalentes incluyen, según el marco contable o regulatorio aplicable, efectivo, depósitos a corto plazo e inversiones de alta liquidez con vencimiento próximo y riesgo de valor insignificante. No son siempre equivalentes:

- un depósito puede tener riesgo de contraparte y una cobertura de garantía distinta;
- un pagaré puede tener riesgo de tasa o de crédito aunque sea liquidable;
- un *money market* puede ser «efectivo» por política interna, pero no por toda definición legal;
- la liquidez nominal no garantiza que una venta grande no tenga impacto.

La decisión de conservar efectivo debe equilibrarse con la inflación, el coste de oportunidad, la estabilidad de los ingresos y las necesidades de liquidez.

## 1.4 Renta fija, renta variable y atributos transversales

### 1.4.1 Renta fija y renta variable

La clasificación no describe por sí sola el riesgo:

- **Renta fija:** el contrato fija, total o parcialmente, el cupón, el principal o la forma de calcular los pagos. Riesgo de tasa, crédito, liquidez, reinversión y duración.
- **Renta variable:** el flujo depende del beneficio, la distribución, el precio del activo, el dividendo o el resultado operativo. Riesgo de precio, negocio, competencia, gobierno y múltiplo.
- **Mixtas:** muchas soluciones combinan bonos, acciones, inmuebles, activos alternativos y otros activos. Es importante observar cada vínculo económico y cada fuente de retorno.

Un cupón alto puede compensar un riesgo alto; no es «renta fija segura» por definición. Una acción con distribución estable sigue teniendo riesgo de precio y de negocio.

### 1.4.2 Riesgo y rendimiento

El riesgo puede entenderse como la incertidumbre de resultados y la posibilidad de pérdida permanente o de no alcanzar un objetivo. El rendimiento es el resultado obtenido o esperado, no necesariamente la recompensa que se recibirá. Para comparar oportunidades deben armonizarse:

- el periodo y la frecuencia de medición;
- la moneda;
- la reinversión de distribuciones;
- impuestos, comisiones y costes de transacción;
- el nivel de apalancamiento;
- el activo de referencia y el poder de compra.

La frase «más riesgo, más rentabilidad» describe una prima esperada, no un intercambio exacto. En una crisis, la prima puede ser insuficiente y las correlaciones pueden aumentar.

### 1.4.3 Volatilidad

La volatilidad es la dispersión de los retornos alrededor de su media. Es una medida de incertidumbre estadística; no mide todos los riesgos. Un activo puede tener baja volatilidad y perder mucho por iliquidez, fraude o insolvencia; y uno puede ser muy volátil sin perder permanentemente si el horizonte, el tamaño y las reglas de salida son adecuados.

La volatilidad se expresa mejor junto con el horizonte y el periodo de observación, la forma de la distribución y los eventos extremos, el riesgo de cola, la liquidez y el tamaño de la posición, la exposición cambiaria y el apalancamiento.

### 1.4.4 Liquidez

La liquidez es la posibilidad de comprar o vender rápidamente, con un impacto pequeño sobre el precio y sin necesidad urgente de aceptar un precio muy desfavorable.

- **Liquidez del activo:** diferencial, profundidad, capacidad de entrega y rango de cotización.
- **Liquidez del inversor:** capacidad de recibir efectivo y cumplir obligaciones.
- **Liquidez de financiación:** capacidad de refinanciar una posición sin condiciones desfavorables.

El efectivo suele tener alta liquidez, aunque con riesgo de inflación, de contraparte o de límites de protección. Un activo cotizado puede tener pantalla de precio, pero una venta grande puede desplazar el mercado. Renunciar a liquidez suele requerir una prima; un activo líquido también puede estar caro.

### 1.4.5 Inflación y poder de compra

La inflación es el aumento sostenido del nivel general de precios. Reduce el valor de una cantidad nominal fija. Un activo con pago fijo puede perder poder de compra aunque no haya incumplimiento. La inflación puede mejorar los ingresos nominales de ciertos negocios, pero también aumentar costes, salarios, *capex*, deuda nominal y necesidades de capital circulante.

### 1.4.6 Horizonte temporal

El horizonte determina qué datos y qué riesgos son relevantes. Un inversor de largo plazo no debe ignorar un problema de solvencia; uno de corto plazo no debe depender de que una empresa en recuperación se repare en cinco años. En general:

- más plazo puede permitir que los flujos de negocio se manifiesten;
- más plazo también aumenta la exposición a inflación, cambio normativo y dilución de capital;
- un pasivo con fecha fija exige más liquidez que un pasivo distante;
- un activo ilíquido debe tener un horizonte compatible con su capacidad de salida.

### 1.4.7 Diversificación y correlación

Diversificar reduce la dependencia de un único resultado, pero no elimina el riesgo de mercado. Dos activos con nombres, sectores o características diferentes pueden comportarse de forma idéntica. La correlación mide asociación lineal entre retornos; una correlación baja o negativa en un periodo puede no persistir en otro.

La diversificación debe abarcar riesgos que no se observan solo en el código del activo: moneda, duración, contraparte, iliquidez y riesgos macro. Demasiados instrumentos idénticos crean diversificación aparente, no diversificación económica.

### 1.4.8 Riesgo sistemático y no sistemático

- **Riesgo sistemático:** afecta a buena parte del mercado: tipos, inflación, recesiones, pánico, liquidez sistémica o geopolítica. La diversificación reduce el riesgo idiosincrático, pero no elimina el factor de mercado.
- **Riesgo no sistemático o idiosincrático:** específico de una empresa, sector, contrato, moneda, gestor o instalación: competencia, obsolescencia, fraude, deuda, litigio o dependencia de una persona.

La frontera puede cambiar: un riesgo aislado se vuelve sistémico si se repite en varios activos o proveedores. La diversificación tampoco garantiza un resultado en un evento extremo.

## 1.5 Fichas matemáticas de los fundamentos

Las fichas siguientes son herramientas de lectura. Una fórmula no sustituye los datos, el criterio ni la comprensión de la estructura del instrumento.

**Convenciones de notación:** `USD` significa dólares estadounidenses; cuando se indica «millones», las cifras están en millones de USD. `FCF` es flujo de caja libre, `WACC` es el coste promedio ponderado de capital, `ROIC` es el retorno sobre capital invertido y `NAV` es el valor de activos netos. Las tasas se expresan en la moneda y periodicidad indicadas.

### Ficha matemática 1.1 — Rendimiento total de un período

- **Nombre:** rendimiento total simple de un período.
- **Para qué sirve:** mide el resultado de una posición entre una fecha inicial y una final, incluyendo el precio y los cobros del período, sin confundir una distribución con un rendimiento no realizado.
- **Variables:** `P_0` es el precio o valor inicial; `P_1`, el precio o valor final; `D_t`, los cobros o distribuciones recibidos durante el período; `C_t`, los costes o pagos asociados que se deduzcan del resultado; `R_t`, el resultado en fracción decimal.
- **Fórmula:**

  `R_t = (P_1 - P_0 + D_t - C_t) / P_0`.

  Si las distribuciones se reinvierten, conviene usar un índice de riqueza total o calcular el resultado de cada flujo en la fecha de reinversión. No deben descontarse dos veces los mismos costes.
- **Pasos:** 1) identificar precios y moneda; 2) registrar todos los cobros y salidas; 3) dividir la ganancia neta por el capital inicialmente invertido; 4) comprobar la coherencia con el flujo de caja; 5) comparar con un índice y con la inflación.
- **Ejemplo numérico:** una posición empieza en `USD 100`, termina en `USD 112`, recibe `USD 3` y paga `USD 1` de costes. `R_t = (112 - 100 + 3 - 1) / 100 = 14%`.
- **Interpretación:** un 14% es una ganancia periódica, no una promesa anual. Si el mismo resultado se repite en un año y el capital se mantiene, la tasa anual es 14%; si se produce en un mes, el resultado mensual es 14% y anualizarlo requiere una hipótesis adicional.
- **Rangos orientativos dependientes del sector y contexto:** no existe un rango universal. Un retorno del 5% puede ser fuerte frente a inflación del 1% y débil frente a inflación del 8%; para acciones, bonos, materias primas y cripto no se usan los mismos umbrales. Se compara con el horizonte, el activo de referencia y el riesgo asumido.
- **Ejemplo favorable:** un activo llega a 8% nominal, la inflación es 2%, los costes son bajos y el balance no se deteriora. La diferencia real y el cumplimiento del objetivo resultan más pertinentes que el resultado aislado.
- **Ejemplo desfavorable:** la posición cae 30% por un bloqueo operativo y, además, tiene una deuda que puede ser impagable. El rendimiento negativo revela que el coste de capital no compensó el riesgo.
- **Errores frecuentes:** confundir precio con precio total; omitir cupones, dividendos o devaluación de la moneda; no reinvertir; sumar distribuciones ya incluidas en el precio; comparar periodos con frecuencia distinta; ignorar impuestos y costes; interpretar un resultado de un periodo como tendencia permanente.
- **Cuándo no usarla:** cuando hay aportaciones o retiradas externas, apalancamiento complejo, muchos activos con fechas de flujo distintas o un periodo demasiado corto. Se necesitan entonces medidas de retorno ponderadas por dinero o por tiempo.
- **Indicadores complementarios:** CAGR, inflación, volatilidad, drawdown, flujo de caja, coste total de propiedad y desglose del riesgo de la fuente.

### Ficha matemática 1.2 — Tasa de crecimiento anual compuesta (CAGR)

- **Nombre:** CAGR o tasa de crecimiento anual compuesta.
- **Para qué sirve:** resume la tasa anual que, compuesta, lleva una riqueza inicial a una riqueza final durante `n` años.
- **Variables:** `W_0` es la riqueza inicial; `W_n`, la riqueza final; `n`, el número de años o períodos anuales; `g_CAGR`, la tasa anualizada.
- **Fórmula:**

  `g_CAGR = (W_n / W_0)^(1/n) - 1`.

  `W_n` debe incluir cobros reinvertidos y el mismo perímetro de costes que `W_0`; requiere `W_0>0`, `W_n>0` y `n>0`.
- **Pasos:** 1) fijar la fecha inicial y final; 2) reunir valores totales, no solo el precio del activo; 3) calcular el número de años; 4) elevar la razón final/inicial a `1/n`; 5) comparar con inflación y con el índice de referencia.
- **Ejemplo numérico:** una cartera pasa de `USD 100` a `USD 121` en dos años. `CAGR = (121/100)^(1/2)-1 = 10% anual`.
- **Interpretación:** la cartera creció a una velocidad anual compuesta del 10%, independientemente de que el camino haya sido irregular. Es una medida de pendiente terminal, no de riesgo, calidad del retorno ni facilidad para salir del mercado.
- **Rangos orientativos dependientes del sector y contexto:** no hay un CAGR «correcto». En procesos estables, un 8% nominal puede ser razonable; en activos de alto riesgo o corto plazo puede ser mediocre o irrealista. Se compara en poder de compra y con el coste de la alternativa.
- **Ejemplo favorable:** `USD 100` pasa a `USD 164,1` en cinco años; el CAGR es cercano al 10%, con distribuciones, gobierno estable y costes bajos.
- **Ejemplo desfavorable:** `USD 100` pasa a `USD 60` en tres años; el CAGR es aproximadamente `−15,66 %` anual, porque `(60/100)^(1/3)−1`. Un punto final favorable podría ocultar un camino con iliquidez o una ejecución deficiente.
- **Errores frecuentes:** usar precio en lugar de riqueza; mezclar periodos; no ajustar por inflación; redondear prematuramente; usar un valor terminal afectado por una operación excepcional; interpretar CAGR como volatilidad mínima; olvidar dividendos reinvertidos.
- **Cuándo no usarla:** no describe la secuencia de resultados, las máximas caídas ni el riesgo; tampoco sirve directamente para carteras con aportaciones periódicas.
- **Indicadores complementarios:** rendimiento total anual, volatilidad, drawdown, rentabilidad ajustada por riesgo, impuestos y liquidez.

### Ficha matemática 1.3 — Interés compuesto y valor futuro

- **Nombre:** interés compuesto; incluye el efecto de reinversión de los rendimientos.
- **Para qué sirve:** proyecta cómo un capital inicial y, opcionalmente, aportaciones periódicas pueden crecer si se cumplen una tasa y una frecuencia de capitalización constantes.
- **Variables:** `PV` es el valor presente; `r_p`, la tasa por período; `n`, el número de períodos; `C`, una aportación igual al final de cada período; `FV`, el valor futuro; `m`, el número de períodos por año.
- **Fórmula:**

  `FV = PV(1 + r_p)^n`.

  Para aportaciones ordinarias al final de cada período:

  `FV = PV(1 + r_p)^n + C[((1 + r_p)^n - 1) / r_p]`.

  Si `r_p` es una tasa mensual, la tasa anual efectiva puede calcularse como `(1 + r_p)^m - 1`; no siempre coincide con la tasa nominal anunciada.
- **Pasos:** 1) identificar la tasa y si es bruta o neta; 2) expresar la tasa en la misma frecuencia que los flujos; 3) contar períodos; 4) comprobar si las aportaciones se hacen al inicio o al final; 5) ajustar por inflación, impuestos y comisiones antes de usar el resultado.
- **Ejemplo numérico:** `USD 10.000` al 7% anual, con capitalización anual, durante 10 años: `FV = 10.000(1,07)^10 ≈ USD 19.671,5`. Una cartera que aporta `USD 200` al final de cada mes al 0,5% mensual durante 120 meses alcanza aproximadamente `USD 32.775,9` antes de impuestos y costes.
- **Interpretación:** el interés compuesto convierte la consistencia en una ventaja acumulativa. La proyección es una hipótesis matemática, no una promesa de que un activo vaya a producir necesariamente esa tasa.
- **Rangos orientativos dependientes del sector y contexto:** las tasas dependen de la moneda, el emisor, el plazo y la inflación. Una tasa nominal positiva puede ser realmente negativa si la inflación supera la tasa después de costes. No existe un rango universal de «buena» rentabilidad.
- **Ejemplo favorable:** capital estable, tasa real positiva, costes bajos, horizonte largo y capacidad de mantener las aportaciones; el capital puede crecer y conservar capacidad de compra.
- **Ejemplo desfavorable:** capital del 2% nominal, inflación del 5%, comisión del 1% y reinversión a menor tasa; el capital compra cada vez menos y la comisión erosiona la ventaja.
- **Errores frecuentes:** confundir tasa nominal y efectiva; omitir comisiones; suponer reinversión a la misma tasa; no ajustar por inflación; usar un horizonte que no permite la recuperación; usar la fórmula como garantía de rentabilidad de un activo volátil; olvidar impuestos.
- **Cuándo no usarla:** para acciones, materias primas o cripto sin una distribución de flujos suficientemente estable; para empresas en etapa de inversión con FCF negativo; cuando la tasa de reinversión y las salidas de capital son impredecibles.
- **Indicadores complementarios:** tasa real, flujo de caja del negocio, coste de oportunidad, volatilidad, capacidad de ahorro, fiscalidad y plan de aportaciones.

### Ficha matemática 1.4 — Volatilidad anualizada

- **Nombre:** desviación típica de rentabilidades y volatilidad anualizada.
- **Para qué sirve:** resume la dispersión histórica de los retornos y ayuda a dimensionar posiciones y comparar estrategias con una misma frecuencia.
- **Variables:** `R_t` son los retornos periódicos; `s`, la desviación típica muestral; `k`, el número de períodos por año; `σ_a`, la volatilidad anualizada.
- **Fórmula:**

  `s = [Σ(R_t - R̄)^2/(n-1)]^(1/2)`.

  `σ_a = s√k`.

  La anualización supone que los períodos observados son suficientemente comparables y que la volatilidad se repite; no es una predicción.
- **Pasos:** 1) calcular retornos totales en la misma frecuencia; 2) decidir si se usan retornos logarítmicos o simples y mantener el criterio; 3) calcular la media y la desviación; 4) anualizar con el número correcto de períodos; 5) comparar con el horizonte y con el riesgo no captado.
- **Ejemplo numérico:** retornos trimestrales hipotéticos de `-2%, 4%, -1%, 3%`; media cercana a `1%`, desviación muestral trimestral cercana a `2,94%`; con cuatro trimestres al año, `σ_a ≈ 2,94%√4 = 5,9%` anualizada.
- **Interpretación:** 5,9% indica dispersión histórica del ejemplo, no que el resultado futuro esté contenido en ese intervalo. En una crisis, la distribución puede ampliarse y la volatilidad realizada superar la estimación.
- **Rangos orientativos dependientes del sector y contexto:** una acción diversificada suele tener menor volatilidad que una acción individual de un mismo sector; bonos, propiedades y cripto tienen rangos distintos. Son órdenes de magnitud contextuales, no umbrales de compra o venta.
- **Ejemplo favorable:** una estrategia de 8% de volatilidad con buena resistencia a costes y *stress tests* puede ser más fácil de sostener que una de 20%, aunque su CAGR sea menor.
- **Ejemplo desfavorable:** un producto apalancado con 45% de volatilidad y un evento de salto de precio puede producir una pérdida superior al capital disponible; la volatilidad subestima ese camino extremo.
- **Errores frecuentes:** anualizar con `k` incorrecto; mezclar precios y totales; usar una muestra pequeña; olvidar moneda o distribuciones; asumir normalidad; no separar volatilidad realizada de riesgo de cola; incluir una posición apalancada como si su riesgo fuera estable.
- **Cuándo no usarla:** no es una medida suficiente de insolvencia, fraude, iliquidez o riesgo de cola. Tampoco debe usarse sola para decidir el tamaño de una posición.
- **Indicadores complementarios:** drawdown, VaR o escenarios, *stress test*, beta, correlación, liquidez, tamaño de posición y pérdida permanente.

### Ficha matemática 1.5 — Correlación de retornos

- **Nombre:** coeficiente de correlación de Pearson entre dos series de retornos.
- **Para qué sirve:** mide la relación lineal entre los movimientos de dos activos y ayuda a identificar diversificación aparente o real.
- **Variables:** `R_A,t` y `R_B,t` son retornos de los activos A y B; `R̄_A` y `R̄_B`, sus medias; `σ_A` y `σ_B`, sus desviaciones; `ρ_AB`, la correlación.
- **Fórmula:**

  `ρ_AB = Cov(R_A,R_B)/(σ_Aσ_B)`.

  El rango matemático es `[-1,+1]`, pero el significado económico depende de los activos, periodos, moneda y régimen.
- **Pasos:** 1) calcular retornos comparables; 2) alinear fechas; 3) eliminar o justificar datos faltantes; 4) estimar covarianza y desviaciones; 5) observar si la relación es estable en varios regímenes.
- **Ejemplo numérico:** A devuelve `[10%, -5%, 8%]` y B devuelve `[8%, -2%, 6%]` en los mismos tres periodos. Las medias y desviaciones dan una correlación cercana a `+1,00`: ambos se mueven casi igual, por lo que la diversificación es limitada.
- **Interpretación:** `+1` indica asociación lineal positiva perfecta; `0` indica ausencia de asociación lineal en la muestra, no independencia; `-1` indica asociación negativa perfecta. Correlación no significa causalidad.
- **Rangos orientativos dependientes del sector y contexto:** una correlación cercana a cero puede ser útil en un periodo, pero los activos pueden compartir un factor de crisis. Dos activos con correlación negativa también pueden ser volátiles y perder ambos por otras causas.
- **Ejemplo favorable:** una cartera combina activos con baja correlación y define un rebalanceo; la combinación puede reducir la volatilidad sin abandonar el objetivo.
- **Ejemplo desfavorable:** dos fondos de la misma empresa, país y duración se complementan en apariencia, pero correlacionan 0,95 durante una crisis; la pérdida conjunta es alta.
- **Errores frecuentes:** correlación con precios en lugar de retornos; muestras demasiado cortas; usar Pearson para relaciones no lineales; olvidar moneda o datos faltantes; asumir que una correlación histórica es estable; confundir diversificación con número de líneas.
- **Cuándo no usarla:** no basta para dos activos con distribuciones no lineales, eventos raros o cambios de régimen; debe complementarse con escenarios de estrés y análisis de los activos subyacentes.
- **Indicadores complementarios:** volatilidad de cartera, contribución al riesgo, beta, covarianza en estrés, drawdown y liquidez.

### Ficha matemática 1.6 — Efecto de diversificación en la volatilidad de cartera

- **Nombre:** varianza de una cartera de dos o más activos.
- **Para qué sirve:** muestra que el resultado conjunto depende de los pesos y de las correlaciones, no solo de la volatilidad de cada componente.
- **Variables:** `w_i` es el peso del activo `i`; `σ_i`, su volatilidad; `ρ_ij`, la correlación entre `i` y `j`; `σ_p`, la volatilidad de cartera.
- **Fórmula:**

  `σ_p^2 = Σ_i w_i^2σ_i^2 + 2Σ_{i<j}w_iw_jρ_ijσ_iσ_j`.

  La suma de pesos debe ser uno si no existe efectivo o apalancamiento adicional; el efectivo y las posiciones apalancadas cambian el resultado.
- **Pasos:** 1) fijar pesos y moneda; 2) usar volatilidad y correlación del mismo periodo; 3) calcular términos de covarianza; 4) comprobar que los pesos no son negativos; 5) repetir el cálculo con correlaciones de estrés.
- **Ejemplo numérico:** dos activos con pesos 50/50, volatilidades 10% y 20% y correlación 0,20. `σ_p = √(0,5²·10² + 0,5²·20² + 2·0,5·0,5·0,20·10·20)% ≈ 12,0%`. Con correlación 1, el resultado sería aproximadamente 15%.
- **Interpretación:** la diversificación puede reducir la volatilidad si los activos no se mueven exactamente igual. Con correlación negativa, el riesgo puede ser menor, pero la concentración sectorial y la iliquidez siguen importando.
- **Rangos orientativos dependientes del sector y contexto:** no hay un número universal de activos ni una correlación «mínima» segura. La reducción del riesgo depende de los activos subyacentes y de la posibilidad de rebalancear; una cartera de muchos activos de la misma fuente de riesgo puede ser más concentrada que otra con pocos activos diversificados.
- **Ejemplo favorable:** 50% de un activo de 10% y 50% de uno de 20% con correlación 0,2 reduce la volatilidad a 12% frente a 15% con correlación perfecta.
- **Ejemplo desfavorable:** cinco ETF de empresas de tecnología con productos casi idénticos pueden compartir un mismo factor de crecimiento y de tipos de interés; la diversificación nominal no compensa un factor común.
- **Errores frecuentes:** usar correlaciones de periodos distintos; usar retornos incompletos; no actualizar pesos tras una variación de precio; ignorar que el activo con más peso no es necesariamente el de más riesgo; no considerar rebalanceo y costes; suponer diversificación estable en estrés.
- **Cuándo no usarla:** con distribuciones asimétricas, microcap con covarianza no fiable o muchas posiciones con datos faltantes. Se necesitan modelos de escenarios, además de un análisis cualitativo.
- **Indicadores complementarios:** contribución al riesgo, *stress test*, concentración por emisor y factor, correlación de ingresos, liquidez y drawdown.

### Ficha matemática 1.7 — Rentabilidad real ajustada por inflación

- **Nombre:** rentabilidad real o poder de compra.
- **Para qué sirve:** expresa cuánto ha cambiado la capacidad de compra de un capital nominal, después de considerar el nivel general de precios.
- **Variables:** `R_n` es el rendimiento nominal total; `π`, la inflación medida en la misma moneda y horizonte; `R_r`, el rendimiento real; `C_t/C_0`, el factor de poder de compra.
- **Fórmula:**

  `R_r = (1 + R_n)/(1 + π) - 1`.

  La cantidad que mantiene el poder de compra se obtiene de forma inversa: `P_0(C_t/C_0)`, donde `P_0` es la cantidad nominal inicial.
- **Pasos:** 1) elegir un índice de precios coherente; 2) ajustar el rendimiento nominal por costes e impuestos; 3) usar inflación acumulada del periodo, no solo la tasa anual puntual; 4) calcular el poder de compra final; 5) separar el riesgo cambiario si el inversor mide en otra moneda.
- **Ejemplo numérico:** rendimiento nominal de 8% e inflación de 3%: `R_r = 1,08/1,03 - 1 ≈ 4,85%` real. `USD 100` mantiene un poder de compra equivalente a aproximadamente `USD 104,85` en términos reales.
- **Interpretación:** un rendimiento nominal del 8% no equivale a comprar un 8% más. En el ejemplo, el poder de compra aumentó aproximadamente 4,85% antes de impuestos y costes adicionales.
- **Rangos orientativos dependientes del sector y contexto:** la inflación de un país y de una moneda puede ser muy distinta. En una economía con inflación estable y baja, un cupón modesto puede conservar poder de compra; en inflación alta o volátil, un activo de renta fija corto puede perder valor real aunque tenga riesgo de crédito moderado.
- **Ejemplo favorable:** rendimiento nominal 7%, inflación 2%, impuestos y costes 1%: existe una mejora real aproximada antes de considerar el riesgo.
- **Ejemplo desfavorable:** rendimiento nominal 3%, inflación 7% y coste del 1%: el capital pierde poder de compra aunque el pago haya sido puntual.
- **Errores frecuentes:** usar inflación anual para un periodo de varios años; mezclar países o monedas; usar un índice de precios que no represente el consumo relevante; ignorar impuestos; tratar inflación realizada como inflación futura; no distinguir tasa nominal de real.
- **Cuándo no usarla:** cuando la inversión mide en una moneda distinta de la actividad principal, el efecto cambiario debe incorporarse por separado; tampoco es suficiente para medir riesgo de hiperinflación o de indexación contractual.
- **Indicadores complementarios:** índice oficial de precios al consumidor, tasas nominales y reales, fiscalidad, poder de compra de los flujos, cobertura cambiaria y bonos vinculados a inflación.

### Ficha matemática 1.8 — Drawdown y caída máxima

- **Nombre:** drawdown; también se usa «caída máxima» para el peor drawdown de una serie.
- **Para qué sirve:** mide cuánto se ha alejado el valor de una cartera o cuenta respecto de su máximo anterior, sin ignorar el efecto psicológico y de financiación de una racha de pérdidas.
- **Variables:** `V_t` es el valor de la cartera en el tiempo `t`; `P_t` es el máximo alcanzado hasta `t`; `DD_t`, el drawdown; `MDD`, el máximo drawdown.
- **Fórmula:**

  `DD_t = V_t/P_t - 1`, con `P_t = max(V_s)` para `s ≤ t`.

  `MDD = min_t(DD_t)`.
- **Pasos:** 1) definir si la serie usa valores de mercado o de caja; 2) registrar máximos y valles; 3) medir desde el pico, no desde el inicio; 4) separar el drawdown instantáneo del máximo drawdown; 5) documentar el periodo y las entradas o salidas de dinero.
- **Ejemplo numérico:** una cuenta pasa por `100, 120, 90, 105`. Desde el máximo de 120, la caída a 90 es `90/120 - 1 = -25%`; desde 120 a 105 es `-12,5%`. El máximo drawdown de la serie es `-25%`.
- **Interpretación:** el drawdown no dice cuánto se recupera después ni si la pérdida es permanente. Una cuenta con menor MDD puede tener una recuperación más larga; por eso se acompaña del tiempo de recuperación.
- **Rangos orientativos dependientes del sector y contexto:** no existe un umbral universal. Un fondo de renta variable puede tener un drawdown de dos dígitos; un activo apalancado o una tecnología emergente puede mostrar uno o dos órdenes de magnitud; un fondo con NAV estable puede mostrar caídas menores. El activo base y la frecuencia importan.
- **Ejemplo favorable:** cartera diversificada con MDD de 10% y suficiente efectivo para no vender en pánico; la pérdida sigue existiendo, pero es compatible con el plan.
- **Ejemplo desfavorable:** cartera apalancada con MDD de 45% y una caída de liquidez; el inversor no puede permanecer invertido y convierte el drawdown en pérdida realizada.
- **Errores frecuentes:** medir desde el valor inicial; ignorar distribuciones; ignorar depósitos o retiradas; calcular con precios diarios cuando la estrategia es de largo plazo; confundir drawdown con una distribución de probabilidades; no mirar la recuperación posterior.
- **Cuándo no usarla:** no mide por sí solo la insolvencia, el riesgo de cola o la calidad de los flujos; puede ser engañoso en carteras con ingresos o aportes regulares.
- **Indicadores complementarios:** volatilidad, tiempo bajo el agua, VaR o escenarios, *stress test*, distribución de la cartera y liquidez de salida.

### Ficha matemática 1.9 — Precio de un bono y rendimiento al vencimiento

- **Nombre:** valor presente de los flujos de un bono y rendimiento al vencimiento (*yield to maturity*, YTM).
- **Para qué sirve:** compara el precio de un contrato de renta fija con los flujos prometidos e implica una tasa de descuento aproximada.
- **Variables:** `F` es el valor nominal; `C`, el cupón por período; `n`, el número de períodos hasta el vencimiento; `y`, la tasa por período del YTM; `P`, el precio teórico del bono; `t`, el período de cada flujo.
- **Fórmula:**

  `P = Σ_{t=1}^n C/(1+y)^t + F/(1+y)^n`.

  La tasa implícita `y` se obtiene resolviendo esa igualdad; normalmente se expresa como YTM anualizada usando la frecuencia del cupón.
- **Pasos:** 1) identificar nominal, cupón, frecuencia, vencimiento y fecha de liquidación; 2) listar cada flujo; 3) resolver `y` o usar una tabla de precios; 4) comprobar precio limpio frente a precio sucio; 5) comparar el YTM con una curva comparable, no solo con el cupón.
- **Ejemplo numérico:** bono con nominal `USD 1.000`, cupón anual de 5% (`USD 50`), cinco años y YTM de 6%: `P ≈ 50·4,2124 + 1.000/1,3382 ≈ USD 957,9`. Se compra por debajo de 1.000 y el cupón es menor que la tasa implícita.
- **Interpretación:** a igualdad de condiciones, un precio inferior al nominal con cupón fijo suele corresponder a un YTM superior al cupón. «Barato» no significa «seguro»: puede haber riesgo de crédito, opción de rescate o amortización anticipada, iliquidez o una duración larga.
- **Rangos orientativos dependientes del sector y contexto:** el YTM depende de la moneda, el emisor, la prioridad, la calificación implícita, la duración, la curva, la liquidez, la fiscalidad y la opcionalidad. No hay un nivel universal de YTM bajo o alto; un rendimiento alto puede ser compensación o una señal de deterioro.
- **Ejemplo favorable:** el precio cae más de lo razonable por iliquidez temporal, la situación de crédito sigue siendo sólida y el YTM ofrece un margen suficiente frente a la curva; el comprador acepta la duración y el riesgo de tasa.
- **Ejemplo desfavorable:** un YTM alto proviene de una caída inminente de calidad, existe alto apalancamiento, la recuperación puede ser baja y el cupón no compensa la probabilidad de incumplimiento.
- **Errores frecuentes:** confundir nominal, precio y rendimiento; mezclar frecuencia anual y semanal; ignorar la fecha de liquidación; tratar el YTM como rentabilidad garantizada; no considerar *call*, *put*, escalones de cupón, convertibles o subordinación; asumir que un fondo de bonos elimina el riesgo de tasa.
- **Cuándo no usarla:** para bonos perpetuos sin flujo finito, instrumentos con flujos contingentes complejos, deuda en dificultad con recuperación incierta o productos con opacidad derivada. En esos casos, el análisis del flujo de efectivo y del contrato es prioritario.
- **Indicadores complementarios:** duración, convexidad, *spread* y OAS, calificación crediticia, cobertura, ratio de deuda, prioridad, *covenants*, liquidez y escenarios de estrés.

### Ficha matemática 1.10 — Rendimiento ajustado por el tipo de cambio

- **Nombre:** retorno en la moneda del inversor.
- **Para qué sirve:** mide cómo una inversión en moneda local afecta al patrimonio de un inversor que mide en otra moneda.
- **Variables:** `R_L` es el retorno del activo en moneda local; `C_0` y `C_1` son USD por una unidad de moneda local al inicio y al final; `R_FX`, la variación cambiaria; `R_USD`, el retorno total en USD.
- **Fórmula:**

  `R_FX = C_1/C_0 - 1`.

  `R_USD = (1 + R_L)(1 + R_FX) - 1`.

  Si se usa la cotización de moneda local por USD, la convención debe invertirse para no invertir el signo.
- **Pasos:** 1) identificar la moneda del activo y la del patrimonio; 2) convertir valor y distribuciones a la moneda base; 3) calcular la variación del tipo; 4) componer los efectos, no sumarlos; 5) considerar cobertura, impuestos y costes de conversión.
- **Ejemplo numérico:** un activo local sube 10%; mientras tanto, la moneda local se deprecia 6% frente al USD. `R_USD = 1,10·0,94 - 1 = 3,4%`, no 4% ni 16%.
- **Interpretación:** el retorno local puede quedar neutralizado o revertido por la depreciación. La diversificación geográfica solo reduce el riesgo cambiario si existe una fuente real de diversificación y, si procede, una política de cobertura.
- **Rangos orientativos dependientes del sector y contexto:** el impacto depende de la moneda, la duración de la exposición, la política cambiaria, las correlaciones con otras clases y el grado de cobertura. Monedas con flotación, convertibilidad restringida o riesgo soberano requieren un análisis distinto de una moneda de una economía diversificada.
- **Ejemplo favorable:** una exposición local junto con una cobertura parcial y un flujo en USD reduce la sensibilidad cambiaria sin eliminar el retorno operativo.
- **Ejemplo desfavorable:** un inversor local compra una exposición en USD para diversificar, pero la moneda local se aprecia y destruye el retorno; la diversificación no era neutral.
- **Errores frecuentes:** sumar porcentajes en lugar de componer; invertir mal la cotización; olvidar distribuciones y costes; medir precio y resultado en monedas diferentes; asumir que la gestión de un emisor elimina el riesgo monetario.
- **Cuándo no usarla:** cuando se usa un valor ya convertido a la moneda del inversor, salvo que se documente correctamente la convención; para riesgos de convertibilidad o controles de capital puede necesitar un análisis adicional.
- **Indicadores complementarios:** exposición por moneda, *hedging ratio*, *forward points*, volatilidad de la moneda, diferenciales de inflación, contraparte y fiscalidad.

## 1.6 Diversificación, crédito, inflación y riesgo cambiario

### 1.6.1 Diversificar factores, no solo nombres

Antes de añadir una posición conviene preguntar qué riesgo se está comprando:

- **Económico:** ¿se depende de las mismas ventas, clientes o proveedores?
- **Financiero:** ¿qué ocurre si suben los tipos, cae el PIB o se endurecen las condiciones de crédito?
- **Normativo:** ¿las normas pueden cambiar el modelo o el coste?
- **Tecnológico:** ¿la ventaja depende de una tecnología que pueda quedar obsoleta?
- **Liquidez:** ¿todos los activos se pueden vender en el momento necesario?
- **Monetario:** ¿todos los flujos están ligados a la misma moneda?
- **Geopolítico:** ¿hay exposiciones a fronteras, sanciones o rutas de suministro comunes?
- **De mando:** ¿muchos activos dependen de la misma persona, empresa, banco o proveedor?

Una cartera con muchos nombres puede tener una concentración económica de 80%. Es mejor medir la exposición a los factores y a los emisores que contar cuántos productos hay.

### 1.6.2 Riesgo de crédito

El riesgo de crédito incluye la posibilidad de que el deudor no cumpla en tiempo o forma. Se descompone, de forma simplificada, en:

- **Probabilidad de incumplimiento (PD):** probabilidad de llegar al evento de incumplimiento.
- **Pérdida dado el incumplimiento (LGD):** porcentaje de pérdida si ocurre, después de recuperación, costes y tiempo.
- **Exposición (EAD):** saldo que se puede perder.
- **Spread:** compensación adicional respecto a un instrumento de riesgo similar sin el mismo crédito.
- **Prioridad y recuperación:** un acreedor *senior* no tiene la misma posición que uno subordinado.

El *rating* es una opinión, no una garantía. Los bonos de alto rendimiento tienen spreads que pueden incluir una probabilidad de estrés. El análisis debe mirar el balance, la cobertura de intereses, los vencimientos, las facilidades de crédito, los *covenants*, las garantías, los estados financieros y la estructura legal. El cupón es un contrato; la solvencia es la capacidad y la estructura para pagarlo.

### 1.6.3 Riesgo de liquidez

La liquidez puede desaparecer justo cuando se necesita. Un inversor debe contestar por escrito:

1. ¿Cuántos días o semanas tardaría en cerrar la posición en un volumen razonable?
2. ¿Cuál es el diferencial que se observa normalmente en el mercado?
3. ¿Qué parte de los activos del fondo es realmente liquidable?
4. ¿Hay ventanas de reembolso, límites o penalizaciones por salida temprana?
5. ¿La financiación depende del mismo activo o colateral?

En activos privados, inmuebles, infraestructura o crédito, el precio teórico y la liquidez suelen ser conceptos separados. Una valoración no garantiza una venta a ese precio y en una fecha concreta.

### 1.6.4 Inflación

La inflación puede ser favorable para un ingreso indexado, neutral para una empresa que puede subir precios o perjudicial para un cupón fijo. El análisis debe preguntarse:

- ¿Quién posee el poder de fijación de precios?
- ¿Cuánto tarda la empresa en trasladar costes a clientes?
- ¿Cuánto capital circulante necesita para financiar ventas nominalmente mayores?
- ¿La deuda tiene tasa fija o variable?
- ¿La distribución depende de compras de activos o de un beneficio artificialmente alto?
- ¿El precio terminal depende de un múltiplo nominal?

Un negocio puede crecer ventas y perder beneficio por inflación, capital circulante y *capex*. La rentabilidad nominal no sustituye al resultado real ni al retorno sobre el capital realmente invertido.

### 1.6.5 Riesgo cambiario

La diversificación internacional introduce riesgo cambiario. Para medirlo hay que separar:

- **Riesgo operativo:** el negocio gana en moneda local porque sus ingresos, exportaciones o costes están en esa moneda.
- **Riesgo de traducción:** convertir estados financieros a la moneda de presentación.
- **Riesgo de transacción:** flujos futuros en moneda distinta.
- **Riesgo de conversión:** la liquidez o el acceso al mercado puede estar restringido.

Un inversor puede aceptar, cubrir parcialmente o aceptar deliberadamente el riesgo. La decisión depende del horizonte, de la diversificación, de los costes del instrumento de cobertura y del riesgo de la contraparte.

### 1.6.6 Nota de riesgo de la Parte I

La diversificación, la volatilidad histórica y el cálculo de un rendimiento esperado no protegen del error, del fraude, de la insolvencia, de un salto de liquidez o de un cambio regulatorio. Las correlaciones pueden aumentar precisamente en una crisis. El tamaño de la posición, la posibilidad de añadir capital y la disciplina de revisión deben acompañar cualquier modelo cuantitativo.

## 1.7 Checklist básico antes de invertir

### Objetivo y situación personal

- [ ] Sé qué necesidad, horizonte y moneda miden el objetivo.
- [ ] He separado el capital de emergencia y las obligaciones próximas.
- [ ] He comprobado que puedo asumir una pérdida sin vender activos a la fuerza.
- [ ] Entiendo que el capital y el rendimiento no están garantizados.

### Instrumento y complejo legal

- [ ] Sé qué estoy comprando: empresa, deuda, participación, derivado o vehículo de inversión.
- [ ] Conozco la prioridad, el derecho a votar, la distribución y las condiciones de salida.
- [ ] He leído la documentación, las advertencias de riesgo y los costes aplicables.
- [ ] Sé quién custodia el activo y qué sucede si el emisor, intermediario o custodio falla.

### Rentabilidad y comparaciones

- [ ] El rendimiento está medido en la moneda relevante y con el periodo correcto.
- [ ] He incluido comisiones, impuestos, diferenciales, *tracking error* y costes de cambio.
- [ ] He comparado poder de compra y riesgo, no solo CAGR o rentabilidad pasada.
- [ ] He calculado escenarios de al menos una variable adversa: tasa, moneda, precio, crédito o demanda.

### Cartera

- [ ] Conozco la exposición por emisor, país, sector, moneda, duración y factor.
- [ ] El conjunto no depende de una misma condición macro o de una misma contraparte.
- [ ] Puedo vender o reducir la posición en un escenario ilíquido sin romper el resto de la cartera.
- [ ] He revisado concentración, correlación y el efecto de nuevas aportaciones.

### Control posterior

- [ ] He definido qué hechos podrían invalidar la tesis.
- [ ] He fijado una revisión periódica y un procedimiento para cambios materiales.
- [ ] He distinguido un precio favorable de un buen negocio.
- [ ] No estoy usando apalancamiento para ocultar que la tesis no funciona.

# 2. Value Investing

> **Aviso.** El Value Investing es un marco de análisis, no una promesa de alfa ni una recomendación de seguridad. Un valor contable bajo puede ser una trampa; un negocio excelente puede estar sobrevalorado. Las decisiones requieren debida diligencia, comprender los términos y considerar impuestos, regulación y circunstancias personales.

## 2.1 Definición y principios

El **Value Investing** busca estimar el valor económico de un negocio o activo y comprarlo por debajo de ese valor, con un margen suficiente para cubrir la incertidumbre, el error de estimación y el peor escenario razonable. La relación **precio/valor** es el núcleo del método: el precio no es el valor. El precio es lo que hoy paga el mercado; el valor es una estimación del beneficio futuro y de los activos que respaldan el derecho del inversor.

La formulación mínima tiene cuatro pasos:

1. Comprender qué activos, flujos, clientes, personas y derechos se compran.
2. Estimar un valor intrínseco con hipótesis explícitas.
3. Comparar precio y valor bajo escenarios razonables.
4. Esperar con paciencia mientras se reduce la incertidumbre o aparece un flujo de caja.

«Barato» es una relación entre precio y valor. Si no existe un medio razonable para estimar el valor, la palabra pierde contenido.

## 2.2 Historia: hechos y lectura de inversión

La historia permite entender el origen de las ideas; no convierte a una persona histórica en fuente de una recomendación para el presente. Se separan los hechos documentados de la interpretación que este manual utiliza.

| Figura | Hechos históricos documentados | Lectura aplicada en este manual |
|---|---|---|
| **Benjamin Graham** | Fue coautor de *Security Analysis* (1934) y autor de *The Intelligent Investor* (1949). Es asociado al análisis de seguridad, a la relación entre precio y valor y a la metáfora de «Mr. Market». | Comprar un negocio por debajo de su valor intrínseco y exigir un margen para tolerar el error. «Mr. Market» es una metáfora de un mercado fluctuante, no un pronóstico. |
| **Warren Buffett** | Ha dirigido Berkshire Hathaway durante décadas y ha publicado cartas anuales que hacen énfasis en la economía del negocio, la asignación de capital, la calidad y el precio. Su enfoque suele describirse como orientación al propietario. | Pensar en beneficios, flujo de caja, gestión y retención de capital, no solo en la cotización. La frase «propietario» es una metáfora de largo plazo. |
| **Charlie Munger** | Ha influido en la cultura de Berkshire y es asociado a la pluralidad de modelos mentales, listas de comprobación, inversión contra la apariencia y evitación de la estupidez. | Invertir con disciplina: buscar los supuestos que podrían hacer fracasar la tesis, evitar complejidades innecesarias y actuar más por cómo no invertir que por una historia emocionante. |
| **Desarrollo posterior** | El método ha sido adaptado por muchos inversores a estrategias de calidad, situaciones especiales, GARP, energía y activos cíclicos. | La aplicación contemporánea separa valoración, calidad del negocio y momento de mercado; ninguna etiqueta sustituye la evidencia. |

**Precisión sobre las fuentes.** Las frases y perspectivas atribuidas a autores pueden tener múltiples versiones o haber sido formuladas en cartas y entrevistas distintas. Cuando se utiliza una idea histórica como principio, este manual no afirma que esas palabras constituyan un protocolo cuantitativo actual ni que exista una definición única del Value Investing.

## 2.3 Conceptos centrales

### 2.3.1 Precio frente a valor

- **Precio:** valor que se paga en una fecha. Puede estar influido por liquidez, una oferta puntual, límites de venta, pánico, prima de riesgo o expectativas sobre los fundamentales.
- **Valor:** estimación del beneficio económico que el activo puede entregar a su propietario, sujet a un horizonte y a una tasa de descuento.
- **Precio bajo:** no implica valor alto. Puede ser un negocio en declive, un activo sobreendeudado o un balance con poca recuperabilidad.
- **Precio alto:** puede ser razonable si los flujos y las oportunidades de reinversión son muy superiores a los de la competencia.

Ejemplo: dos empresas tienen el mismo precio, pero una genera un flujo de caja estable y tiene deuda controlable; la otra depende de una mina finita. Sus precios son iguales, pero sus valores pueden ser muy diferentes.

### 2.3.2 Valor intrínseco

Es una estimación del valor presente de los beneficios que corresponden al inversor. Puede estimarse con:

- flujo de caja descontado;
- owner earnings o beneficios normalizados;
- múltiplos de beneficios, ventas, activos o capital, con sus ajustes;
- valor de liquidación o suma de las partes;
- derechos contractuales, como una cartera de opciones o deuda.

El valor intrínseco no es un punto exacto ni un pronóstico fiable. Es una distribución de resultados condicionada por supuestos. Conviene mostrar el valor bajo escenarios conservador, base y favorable, y preguntar qué parte de la tesis depende de un único supuesto.

### 2.3.3 Margen de seguridad

El margen de seguridad es la distancia entre el precio y una estimación de valor intrínseco. No es solo un número: incluye la tolerancia a errores, el riesgo de negocio, la calidad de la estimación y la posibilidad de que el valor caiga antes de que aparezca un catalizador.

Un margen grande puede ser necesario para un negocio cíclico, poco transparente o con riesgo de balance. Un margen pequeño puede ser razonable para un negocio estable y diverso, aunque sigue habiendo incertidumbre. El margen no garantiza una ganancia ni protege del error de tesis.

### 2.3.4 Mr. Market

«Mr. Market» es una metáfora de Benjamin Graham: el mercado es un mecanismo que cotiza, pero también puede ser un compañero volátil que ofrece precios absurdos. Si una lista de acciones es útil para el conjunto, un precio bajo permite comprar y un precio alto permite vender. La aplicación práctica exige separar la emoción de la valoración:

- ¿el precio ha bajado por un motivo permanente o temporal?
- ¿la tesis original se mantiene?
- ¿hay un hecho que invalida el supuesto de valor?
- ¿se está usando la volatilidad para tomar decisiones o para dimensionar?

### 2.3.5 Círculo de competencia

El círculo de competencia define lo que un inversor puede entender razonablemente: una empresa, un sector, un tipo de contrato, una tecnología, un país o un régimen regulatorio. Dentro del círculo se pueden formular hipótesis, identificar riesgos y calcular un rango. Fuera, la invitación a invertir suele convertirse en especulación.

La competencia no significa saberlo todo. Exige conocer los límites de lo que se sabe, evitar argumentos de autoridad, buscar fuentes primarias y declarar los supuestos críticos. Un profesional puede ser competente en varias industrias; no debe parecer competente solo por una etiqueta.

### 2.3.6 Moat o foso competitivo

Un moat es una ventaja estructural que dificulta que un competidor capture clientes, mantenga precios, reduzca costes o elimine la posición. Puede surgir de:

- escala y costes bajos;
- marca y confianza;
- efectos de red;
- contratos o licencias exclusivas, con duración jurídica real;
- procesos y conocimiento acumulado;
- costes de cambio;
- canales de distribución;
- ventajas de datos, solo si son defendibles y lícitas.

Un moat no es una promesa de duración. Hay que observar su duración, la inversión necesaria para mantenerlo, la competencia, los cambios tecnológicos, el poder de negociación de los clientes y el marco regulatorio.

### 2.3.7 Calidad

La calidad no es una marca ni un adjetivo publicitario. Puede evaluarse mediante:

- generación de caja y estabilidad;
- ROIC y rotación del capital;
- márgenes y poder de precios;
- balance y deuda moderada;
- diversificación de clientes y proveedores;
- retención y límites de concentración;
- gestión del capital;
- capacidad de mantener o ampliar el moat;
- transparencia y disciplina de asignación.

Una empresa de calidad puede ser una mala inversión a un precio excesivo. Un negocio mediocre puede ser una inversión atractiva si el precio refleja degradación y el downside está limitado.

### 2.3.8 Management, dirección y asignación de capital

El *management* —la dirección— de una empresa debe tomar decisiones sobre:

- qué proyectos desarrollar o comprar;
- cuánto conservar como efectivo;
- deuda, amortización y estructura;
- capex de mantenimiento y de crecimiento;
- adquisiciones y su integración;
- dividendos, recompras y emisiones;
- compensación y alineamiento de incentivos;
- cumplimiento, auditoría y transacciones con partes relacionadas.

No se evalúa el *management* solo por el estilo de crecimiento. Se analiza el historial de decisiones, los retornos sobre el capital invertido, el uso de deuda, la dilución, la honestidad de la comunicación y la forma en que la gerencia actúa en periodos de estrés. Las recompras no son siempre positivas: si se ejecutan a precios muy superiores al valor, pueden destruir valor.

### 2.3.9 ROIC y crecimiento sostenible

El **ROIC** (*return on invested capital*) mide el beneficio operativo después de impuestos sobre el capital realmente utilizado para operar. El **crecimiento sostenible** relaciona el retorno de la reinversión con la capacidad de crecer sin destruir valor. Ambas métricas requieren definiciones consistentes; el nombre exacto de la partida contable puede cambiar.

En el lenguaje de valor, un ROIC alto y estable permite financiar más crecimiento con menos capital externo. Si el capital se reinvierte a un retorno inferior al coste de capital, crecer puede destruir valor.

### 2.3.10 Riesgo permanente

El riesgo permanente es aquel que puede impedir recuperar el capital o alcanzar el objetivo, no solo provocar una oscilación. Ejemplos:

- insolvencia o deuda impagable;
- fraude o falsificación;
- obsolescencia tecnológica;
- pérdida irreversible de licencia o acceso;
- cambio regulatorio o fiscal;
- concentración en un cliente que desaparece;
- litigio o contaminación con pasivo no acotado;
- una posición apalancada que obliga a vender en el peor momento.

La volatilidad es una medida de movimiento; el riesgo permanente es una amenaza a la existencia, la propiedad o la capacidad de alcanzar el resultado. Ambos pueden coexistir, pero no deben confundirse.

### 2.3.11 Calidad frente a barato

| Dimensión | Barato o Value clásico | Calidad | Relación |
|---|---|---|---|
| Pregunta | ¿Cuánto vale el negocio frente a lo que pago? | ¿Qué tan durable y rentable es el negocio? | Un buen negocio puede ser caro; un negocio barato puede deteriorarse |
| Evidencia | Activos, flujo de caja normalizado, liquidación, múltiplos y deuda | ROIC frente a WACC, moat, márgenes, balance, retención y gestión | La calidad ayuda a estimar el valor y limita la probabilidad de trampa |
| Principal peligro | Value trap y normalización errónea | Sobrepagar y exceso de confianza | Ambos necesitan margen y control |
| Horizonte | Puede exigir reparación o realización | Puede ser largo y compuesto | El valor no se materializa si la calidad cae |

### 2.3.12 Value trap

Una **value trap** es un activo cuyo precio parece barato porque el denominador —beneficios, activos o ventas— es insostenible o engañoso. Señales de alerta:

- beneficio en pico o por una ganancia no recurrente;
- activos que no pueden venderse al valor contable;
- deuda fuera de balance o pasivos contingentes;
- moat en desaparición;
- clientes que necesitan descuentos constantes;
- caja positiva solo por aumento de inventario o capital circulante;
- dividendo elevado incompatible con la reinversión o la solvencia;
- dirección que cambia repetidamente los criterios contables;
- un catalizador que depende de un supuesto no verificable.

Para distinguir valor de trampa, el análisis debe probar ingresos, márgenes, deuda, capex y valor de liquidación; no basta con que el múltiplo sea bajo.

### 2.3.13 GARP: Growth at a Reasonable Price

GARP busca un equilibrio entre crecimiento y precio. La tesis no es «crecer a cualquier precio», sino que el crecimiento pueda aumentar los beneficios por encima del coste de oportunidad y que el precio no haya descontado demasiado.

Preguntas mínimas:

- ¿El crecimiento es estructural, cíclico o una recuperación?
- ¿Cuánto capital y trabajo se necesitan para sostenerlo?
- ¿El crecimiento crea valor sobre ROIC?
- ¿La tasa puede continuar o está cerca de un techo?
- ¿Qué múltiplo paga el mercado por ese crecimiento?
- ¿Qué sucede si el crecimiento cae a la mitad?

La etiqueta GARP no reduce el riesgo. Puede ser una forma de comprar crecimiento con múltiplos altos y expectativas demasiado optimistas.

### 2.3.14 Contrarian

El enfoque contrarian no es «comprar lo que cae». Es investigar una tesis que difiere del consenso y exigir evidencia de que el mercado está equivocado, no solo de que tiene un precio elevado. Puede ser por:

- precio extremo;
- cambio temporal del entorno;
- malentendido estructural;
- activo o efectivo ignorado;
- venta forzada o iliquidez;
- expectativa irreal.

Una posición contrarian puede ser correcta en el diagnóstico y equivocada en el timing, o correcta en el largo plazo y perdedora en el corto. Debe existir un camino de activación, un horizonte y un criterio de abandono.

## 2.4 Fichas matemáticas del Value Investing

### Ficha matemática 2.1 — Valor intrínseco por flujo de caja descontado (DCF)

- **Nombre:** *discounted cash flow*, valor intrínseco por *enterprise value* y *equity value*.
- **Para qué sirve:** convierte flujos futuros estimados en un valor actual y, después de ajustar deuda, efectivo y otros derechos, en un valor por acción.
- **Variables:** `FCF_t` debe identificarse como `FCFF_t` (flujo antes del servicio de deuda) o `FCFE_t` (flujo disponible para el patrimonio); `r` es la tasa compatible (`WACC` para FCFF o `K_e` para FCFE); `N` es el horizonte explícito; `g_T` es el crecimiento terminal; `TV` es el valor terminal; `EV` es el *enterprise value*; `Deuda`, `Efectivo` y `Otros derechos` son ajustes; `Acciones` es el número de acciones plenamente diluidas.
- **Fórmula:** en las fórmulas siguientes, `FCF_t` es un marcador que debe sustituirse por `FCFF_t` o `FCFE_t`; no representa sin más el FCF histórico `CFO−CapEx`.

  `EV = Σ_{t=1}^N FCF_t/(1+r)^t + TV/(1+r)^N`.

  En un crecimiento perpetuo terminal simplificado:

  `TV = FCF_{N+1}/(r - g_T)`, y `FCF_{N+1} = FCF_N(1+g_T)`.

  `Equity Value = EV - Deuda + Efectivo - Otros derechos`.

  `Valor por acción = Equity Value/Acciones`.

  Si `FCF_t = FCFF_t`, la tasa debe ser `WACC`, el resultado inicial es EV y se resta deuda una sola vez en el puente a Equity Value. Si `FCF_t = FCFE_t`, la tasa debe ser el coste del patrimonio y el resultado es Equity Value; no se resta deuda nuevamente. Todos los flujos, la tasa y el crecimiento deben ser nominales o reales de forma coherente.
- **Pasos:** 1) normalizar el negocio y definir si los flujos son FCFF, FCFE o beneficio del propietario; 2) declarar si todos los flujos, la tasa y `g_T` son nominales o reales; 3) estimar los años 1 a N; 4) escoger `r` con referencia justificable a moneda, tasa sin riesgo, prima y riesgo; 5) calcular el terminal sin usar un crecimiento superior a `r`; 6) hacer el puente EV–Equity sólo para FCFF; 7) dividir por acciones plenamente diluidas; 8) construir escenarios y sensibilidad.
- **Ejemplo numérico:** un negocio hipotético genera `USD 100 millones` de **FCFF** anual durante cinco años; `WACC=10%`, `g_T=3%`, deuda `USD 300 millones`, efectivo no operativo `USD 100 millones` y `50 millones` de acciones. El valor presente de los flujos explícitos es aproximadamente `USD 379,1 millones`; el valor terminal es `USD 1.471,4 millones` y su valor presente, `USD 913,7 millones`; el EV total es `USD 1.292,8 millones`; el equity value es `USD 1.092,8 millones`; el valor por acción es aproximadamente `USD 21,85`. Si esos mismos `100` fueran FCFE y `10 %` fuera `K_e`, el valor por acción sería aproximadamente `USD 25,85` y no se restaría deuda.
- **Interpretación:** `USD 21,85` es una estimación bajo esas hipótesis, no una verdad oculta. Aproximadamente el 71% del EV proviene del valor terminal; por eso el crecimiento terminal, la tasa y el FCF normalizado son especialmente críticos.
- **Rangos orientativos dependientes del sector y contexto:** `g_T` suele situarse por debajo del crecimiento nominal sostenible de la economía y, en todo caso, por debajo de `r`; no es una regla exacta. La tasa de descuento debe variar con moneda, duración, apalancamiento, beta, calidad y riesgo del país. Los múltiplos terminales y rangos de valor intrínseco cambian para negocios de bienes de consumo, software, banca, minerales, servicios públicos e inmuebles.
- **Ejemplo favorable:** un negocio estable con FCF convertido, deuda moderada, ROIC superior al coste de capital y un terminal conservador; varias estimaciones independientes convergen alrededor de un rango.
- **Ejemplo desfavorable:** el 80% del valor depende de un crecimiento perpetuo del 6%, la tasa es baja y la deuda está oculta; una pequeña modificación del supuesto de tasa o demanda reduce o destruye el margen de seguridad.
- **Errores frecuentes:** mezclar FCFF y FCFE; usar un WACC sin ajustar el riesgo del proyecto; sumar efectivo ya incluido en el FCF; olvidar deuda, participaciones no controlantes, opciones, arrendamientos o pasivos; contar acciones plenamente diluidas incorrectamente; usar `g_T` cercano o superior a `r`; presentar un decimal como precisión; usar datos cíclicos de pico; ocultar la sensibilidad.
- **Cuándo no usarla:** cuando no existe una estimación razonable de flujos, en empresas sin ingresos, bancos, activos extractivos muy jóvenes, activos opacos o negocios con opcionalidad difícil; usar activos, SOTP, *replacement cost* o múltiplos, con sus límites correspondientes.
- **Indicadores complementarios:** owner earnings, ROIC frente a WACC, deuda neta, capital circulante, capex, dilución, SOTP, valor de liquidación, sensibilidad y moat.

### Ficha matemática 2.2 — Owner earnings o beneficios del propietario

- **Nombre:** *owner earnings*.
- **Para qué sirve:** aproxima el efectivo que un propietario podría extraer sin deteriorar la capacidad productiva del negocio.
- **Variables:** `NI` es el beneficio neto normalizado; `D&A`, depreciación y amortización; `CapEx_m`, capex de mantenimiento; `ΔWC_n`, inversión normalizada en capital circulante; `OE`, el resultado del propietario.
- **Fórmula:**

  `OE normalizado aproximado = NI normalizado + D&A y otros cargos no monetarios relevantes − CapEx de mantenimiento − ΔWC normalizado`.

  La D&A se normaliza y sólo se suma cuando no exige reposición económica; la SBC se analiza como coste económico y dilución. La identidad `OE = FCF + CapEx de crecimiento` es sólo una aproximación: exige reconciliar `CFO` con `NI`, otros ajustes, impuestos, capital circulante, CapEx bruto/neto y SBC.
- **Pasos:** 1) partir de beneficio normalizado, no de un pico; 2) identificar D&A; 3) separar mantenimiento de crecimiento cuando la información lo permita; 4) normalizar cambios de inventario, cuentas a cobrar y cuentas a pagar; 5) comparar OE con beneficio, FCF y conversión de caja; 6) investigar diferencias persistentes.
- **Ejemplo numérico:** un negocio hipotético tiene beneficio neto `USD 80 millones`, D&A `USD 30 millones`, capex de mantenimiento `USD 25 millones` e inversión normalizada en circulante `USD 10 millones`: `OE = 80 + 30 - 25 - 10 = USD 75 millones`.
- **Interpretación:** el resultado representa caja disponible aproximada para el propietario; no es necesariamente un dividendo posible. Si reinvertir en crecimiento produce un retorno alto, reducir el capex para extraer más puede destruir el valor.
- **Rangos orientativos dependientes del sector y contexto:** no existe un ratio universal de OE/beneficio. En negocios con mantenimiento moderado puede aproximarse al FCF; en industrias intensivas en capex, capital circulante o crecimiento, la estimación puede ser muy inferior al beneficio contable.
- **Ejemplo favorable:** OE estable, cerca o por encima del beneficio, con capex de crecimiento identificado y ROIC mantenido; el propietario conserva capacidad de mantenimiento y expansión.
- **Ejemplo desfavorable:** beneficio contable de 100, pero capex de mantenimiento de 60 y capital circulante de 30; OE de 10 o negativo. El P/E puede parecer barato aunque falte caja.
- **Errores frecuentes:** confundir todo el capex con mantenimiento; no distinguir crecimiento; ignorar D&A; sumar deuda; doble contar el capital circulante; usar EBITDA como owner earnings; normalizar mal un ciclo; tratar el resultado como dividendo garantizado.
- **Cuándo no usarla:** no es suficientemente informativo en bancos, aseguradoras, activos de recursos, proyectos con opciones o activos jóvenes sin contabilidad fiable. Puede necesitar SOTP, NAV o un análisis de activos por separado.
- **Indicadores complementarios:** FCF, CFO, *accruals*, capex, ROIC, dividendos, ciclo del capital circulante, deuda y capacidad de mantenimiento.

### Ficha matemática 2.3 — Margen de seguridad

- **Nombre:** descuento al valor intrínseco o margen de seguridad.
- **Para qué sirve:** expresa cuánto se está pagando por debajo de una estimación central de valor y fija una holgura frente a errores de modelo y escenarios adversos.
- **Variables:** `V` es el valor intrínseco central; `P` es el precio; `m` es el margen; `P_objetivo` es el precio máximo que el inversor está dispuesto a considerar.
- **Fórmula:**

  `m = (V - P)/V`.

  `P_objetivo = V(1 - m)`.

  Si `P > V`, el margen es negativo y la relación se interpreta como una prima sobre el valor estimado.
- **Pasos:** 1) estimar un intervalo de valor, no solo un punto; 2) elegir el valor central y documentar el supuesto; 3) calcular el descuento; 4) comprobar el balance y el peor escenario; 5) definir un precio objetivo y un margen para el horizonte; 6) no ampliar el margen retroactivamente solo porque el precio cayó.
- **Ejemplo numérico:** con valor intrínseco `USD 21,85` y precio `USD 15`, `m = (21,85-15)/21,85 ≈ 31,4%`. Con un requisito de 25%, el precio máximo sería `21,85×0,75 = USD 16,39`.
- **Interpretación:** el 31,4% no es un rendimiento esperado ni una seguridad; es una distancia entre precio y una estimación. En el ejemplo DCF, esa distancia se vuelve más valiosa si el negocio puede devolver capital, mientras que no protege frente a una tesis falsa.
- **Rangos orientativos dependientes del sector y contexto:** un negocio estable y transparente puede ser analizado con un margen más pequeño que uno opaco, cíclico o apalancado, pero no existe un porcentaje universal. En activos con alternativas reales, eventos binarios y liquidación, el margen debe incorporar el tiempo, la incertidumbre y la prioridad de los reclamantes.
- **Ejemplo favorable:** valor central 100, rango 75-115, precio 70, balance sólido y tesis verificable; el precio está por debajo incluso del extremo prudente del rango.
- **Ejemplo desfavorable:** valor central 100 por un crecimiento terminal sin respaldo, precio 97 y deuda elevada; el margen nominal de 3% es insuficiente para los riesgos de la estimación.
- **Errores frecuentes:** confundir margen con alfa; usar el valor de un DCF demasiado preciso; no descontar deuda, impuestos o dilución; comprar más cuanto más cae; tratar un P/E bajo como margen; usar un único escenario; que el valor se ajuste al precio.
- **Cuándo no usarla:** cuando el valor intrínseco no puede estimarse razonablemente, cuando el activo tiene una estructura de opcionalidad compleja o cuando la posición depende casi exclusivamente de un evento binario. Puede servir como rango, no como respuesta definitiva.
- **Indicadores complementarios:** tabla de sensibilidad, NAV/SOTP, valor de liquidación, deuda neta, cobertura, escenarios, catalizadores y moat.

### Ficha matemática 2.4 — Graham number o número de Graham

- **Nombre:** heurístico clásico asociado a Benjamin Graham para acciones defensivas con beneficio y valor contable positivos.
- **Para qué sirve:** ofrece una referencia histórica sencilla para evitar comprar acciones con precio y múltiplo extremos; no sustituye un modelo de valor.
- **Variables:** `EPS` es el beneficio por acción; `BVPS` es el valor contable por acción; `GN` es el número de Graham; `P` es el precio de mercado.
- **Fórmula:**

  `GN = √(22,5 × EPS × BVPS)`.

  Es una regla heurística multiplicativa, no una ecuación de flujo de caja. Si el EPS o BVPS es negativo, la raíz puede no tener interpretación económica útil.
- **Pasos:** 1) comprobar la fuente y calidad del beneficio; 2) comprobar si el valor contable es tangible y realizable; 3) normalizar beneficios extraordinarios; 4) calcular GN; 5) comparar el precio y revisar que la empresa no esté en declive o apalancamiento excesivo.
- **Ejemplo numérico:** empresa hipotética con `EPS = USD 2` y `BVPS = USD 10`: `GN = √(22,5×2×10) = √450 ≈ USD 21,21`. Un precio de `USD 16` queda un 24,5% por debajo del número, pero el dato no demuestra que el negocio valga 21,21.
- **Interpretación:** el número ofrece un filtro de precio para una categoría relativamente acotada. Un precio inferior al GN puede ser una pista, no una tesis; un precio superior puede ser razonable si el crecimiento, la calidad o los activos son muy superiores.
- **Rangos orientativos dependientes del sector y contexto:** el 22,5 es un parámetro histórico, no un óptimo actual. La utilidad es distinta en bancos, negocios sin grandes activos tangibles, empresas con intangibles, negocios cíclicos y empresas con BVPS artificialmente elevado. Se compara con activos netos, FCF y ROIC, no con el GN aislado.
- **Ejemplo favorable:** empresa estable con beneficio en efectivo, balance patrimonial prudente, diversificación y BVPS respaldado por activos realizables; el GN actúa como una comprobación adicional.
- **Ejemplo desfavorable:** el beneficio de 2,00 USD incluye una ganancia de venta, el valor contable depende de propiedades no líquidas y la deuda aumenta cada año; el GN no protege de una value trap.
- **Errores frecuentes:** tratar el GN como precio objetivo; usar beneficios en pico; ignorar acciones preferentes, participaciones no controlantes y deuda; no ajustar intangibles; aplicarlo a bancos; creer que por debajo del número el downside está limitado; olvidar inflación y cambio de calidad.
- **Cuándo no usarla:** con EPS o BVPS negativos, actividades financieras cuyo capital regulatorio tiene otra interpretación, empresas muy intensivas en intangibles, *startups* o negocios en reorganización. Tampoco es la mejor herramienta para estimar valor de opcionalidad.
- **Indicadores complementarios:** P/E, P/B tangible, ROE/ROIC, owner earnings, FCF yield, deuda, liquidez y tendencia de beneficios.

### Ficha matemática 2.5 — ROIC y relación con el coste de capital

- **Nombre:** *return on invested capital*, retorno sobre capital invertido.
- **Para qué sirve:** mide la rentabilidad del capital empleado en la operación, separando en la medida de lo posible el beneficio económico del beneficio financiero.
- **Variables:** `EBIT` es el beneficio operativo antes de intereses e impuestos; `t` es la tasa fiscal efectiva normalizada; `NOPAT` es el beneficio operativo después de impuestos; `Deuda` es deuda remunerada; `Capital` es capital operativo; `Efectivo_no_operativo` es efectivo que no se necesita para operar; `IC` es invested capital; `ROIC` es el resultado.
- **Fórmula:**

  `NOPAT = EBIT(1 - t)`.

  Una definición habitual es `IC = Deuda remunerada + Capital - Efectivo_no_operativo`.

  `ROIC = NOPAT/IC`.

  Para compararlo con el coste de capital, se usa `ROIC - WACC`; la relación debe hacerse con un denominador y un periodo coherentes.
- **Pasos:** 1) normalizar EBIT; 2) separar operaciones de participaciones financieras y efectos extraordinarios; 3) estimar impuestos; 4) definir capital invertido con detalle; 5) usar promedio o capital de cierre y documentar la elección; 6) comparar varios años con el coste de capital.
- **Ejemplo numérico:** un negocio hipotético tiene `EBIT = USD 100 millones`, tasa fiscal 25%, deuda remunerada `USD 300 millones`, capital `USD 500 millones` y efectivo no operativo `USD 50 millones`. `NOPAT = 75`; `IC = 300+500-50 = USD 750 millones`; `ROIC = 10%`.
- **Interpretación:** 10% no significa 10% de rentabilidad para el accionista. El accionista también asume deuda, estructura de capital, impuestos, crecimiento y riesgo de precio. El ROIC es más útil al lado del coste del capital.
- **Rangos orientativos dependientes del sector y contexto:** un ROIC superior al WACC puede crear valor, pero no existe un mínimo universal. Una empresa energética con activos jóvenes puede mostrar un ROIC elevado por una base pequeña; un banco necesita otra definición; un negocio *asset-light* puede necesitar excluir capital intangible con cuidado. Se prefieren la tendencia y la normalización a un único año.
- **Ejemplo favorable:** `EBIT = 150`, `NOPAT = 112,5`, `IC = 750`; ROIC 15% frente a WACC 9%, un spread de 6 puntos y margen para crecer sin destruir valor.
- **Ejemplo desfavorable:** `EBIT = 50`, `NOPAT = 37,5`, `IC = 750`; ROIC 5% frente a WACC 10%, un spread negativo: crecer con capital nuevo puede empeorar el valor por acción.
- **Errores frecuentes:** usar beneficio neto en vez de NOPAT; incluir todo el efectivo; excluir capital operativo necesario; sumar goodwill sin ajuste; usar una tasa fiscal de un año anómalo; olvidar arrendamientos, deuda no remunerada, participaciones no controlantes, acciones preferentes o capital circulante; comparar ROIC con un WACC incorrecto.
- **Cuándo no usarla:** en bancos, aseguradoras, fondos, empresas con capital definido por regulación o estructuras donde el capital económico no es observable; el ROE, capital regulatorio, ROA y medidas de solvencia pueden ser más apropiadas.
- **Indicadores complementarios:** WACC, spread, ROIC incremental, conversión de NOPAT a caja, ROE, deuda, capex, crecimiento, número de acciones y economía de la empresa.

### Ficha matemática 2.6 — Economía y pérdida de valor por spread

- **Nombre:** *economic profit* o efecto del spread entre ROIC y coste de capital.
- **Para qué sirve:** conecta la rentabilidad operativa con la creación o destrucción de valor cuando una empresa reinvierte capital.
- **Variables:** `ROIC` es el retorno sobre capital; `WACC` o coste de referencia es el coste de los recursos; `IC` es el capital invertido; `EP` es el resultado económico del período.
- **Fórmula:**

  `EP = (ROIC - WACC) × IC`.

  Cuando el spread histórico es positivo, el capital genera un EVA anual positivo bajo el modelo; no demuestra por sí solo que el precio esté infravalorado. El retorno de cada inversión incremental por encima del WACC sí produce VNP positivo. Cuando el spread es negativo, la misma inversión tiene retorno inferior al coste y puede destruir valor en el periodo modelado; la magnitud del VNP depende del flujo y del horizonte.
- **Pasos:** 1) obtener ROIC y WACC en la misma moneda y periodo; 2) calcular el capital; 3) aplicar el spread; 4) separar capital existente de nuevas inversiones; 5) comprobar si el crecimiento aporta o retira capital.
- **Ejemplo numérico:** con ROIC 15%, WACC 9% y capital invertido `USD 500 millones`, `EP = (0,15-0,09)×500 = USD 30 millones` al año. Si ROIC cae a 7%, el mismo capital genera `USD -10 millones` de economía respecto del coste.
- **Interpretación:** el spread mide oportunidad, no rentabilidad realizada para el accionista. Un WACC demasiado bajo puede hacer parecer atractivo un negocio; uno demasiado alto puede ocultarlo. La estimación debe documentar sus componentes.
- **Rangos orientativos dependientes del sector y contexto:** un spread pequeño puede ser suficiente en un negocio estable, pero insuficiente en un negocio cíclico o con mucho riesgo. Los rangos de WACC no son universales y cambian con tasas, moneda, beta, apalancamiento, calidad y país.
- **Ejemplo favorable:** ROIC 20%, WACC 10%, capital 1.000 millones: `EP = USD 100 millones` antes de impuestos personales y costes financieros; la reinversión puede aumentar el valor.
- **Ejemplo desfavorable:** ROIC 6%, WACC 11%, capital 1.000 millones: `EP = -USD 50 millones`; crecer puede transferir valor a nuevos compradores de capital o a deudores.
- **Errores frecuentes:** confundir WACC con la tasa de préstamo; usar ROIC medio y capital final sin coherencia; no ajustar riesgo del país o moneda; olvidar que el capital histórico y el incremental tienen costes distintos; interpretar el resultado como caja.
- **Cuándo no usarla:** si el WACC no es defendible, si el capital es mayoritariamente regulatorio o si la estructura de capital cambia continuamente. En esos casos, completar con sensibilidad y análisis de casos.
- **Indicadores complementarios:** ROIC incremental, FCF, tasa de crecimiento, vencimientos de deuda, asignación de capital, dilución, IRR de proyectos y sensibilidad del WACC.

### Ficha matemática 2.7 — Crecimiento sostenible por reinversión

- **Nombre:** *sustainable growth rate* aproximada.
- **Para qué sirve:** estima cuánto puede crecer el negocio o los beneficios por año manteniendo una relación razonable entre capacidad de generación y capital reinvertido.
- **Variables:** `ROIC` es el retorno del capital; `b` es la tasa de reinversión definida como `reinversión neta / NOPAT`; `g_s` es la tasa de crecimiento sostenible; `g_retenido` es crecimiento de beneficios por retención, en modelos contables más específicos.
- **Fórmula:**

  `b = reinversión neta / NOPAT`; en estado estable, `g_s ≈ ROIC × b`. Esta relación es condicional: el ROIC debe ser el retorno del capital inicial o reinvertido, y el crecimiento sólo se aplica a la magnitud modelada (beneficio, ingreso o capital) bajo supuestos de margen, intensidad de capital y demanda.

  En el modelo contable más simple:

  `g_retenido ≈ ROE × retención de beneficios`.

  Son aproximaciones y no deben confundirse con el crecimiento de ventas, el crecimiento por acción ni una promesa de composición.
- **Pasos:** 1) estimar ROIC normalizado; 2) identificar cuánto capital puede reinvertirse sin rebajas de retorno; 3) separar mantenimiento y crecimiento; 4) comprobar si el capital disponible es una necesidad real o solo una exigencia de crecimiento; 5) modelar competencia, capacidad, clientes y financiación; 6) probar escenarios de menor crecimiento.
- **Ejemplo numérico:** si ROIC es 20% y la reinversión sostenible es 40%, `g_s ≈ 8%`. Si la empresa reinvierte 70% con el mismo ROIC, el crecimiento teórico sube a 14%, pero debe existir demanda, capacidad y financiación; si la reinversión ocurre a ROIC inferior al WACC, el crecimiento puede ser destructivo.
- **Interpretación:** 8% es una capacidad aproximada de crecer, no una meta que deba perseguirse. El crecimiento que reduce ROIC o aumenta deuda puede ser una forma de ocultar el daño.
- **Rangos orientativos dependientes del sector y contexto:** una empresa madura puede tener una capacidad de crecimiento superior a su demanda; un sector de innovación puede necesitar mucho capital intangible; un banco utiliza otras relaciones. La tasa sostenible no se compara con un CAGR de cotizaciones para decidir sin más.
- **Ejemplo favorable:** ROIC 20%, reinversión 30% y WACC 11%; crecimiento aproximado 6% y spread positivo.
- **Ejemplo desfavorable:** ROIC 5%, reinversión 80% y WACC 10%; crecimiento aproximado 4% pero cada nuevo capital pierde valor y aumenta el riesgo.
- **Errores frecuentes:** usar ROE en lugar de ROIC; llamar reinversión a todo el crecimiento de ventas; ignorar mantenimiento capex; asumir que el beneficio retendido se reinvierte físicamente; no descontar dilución; usar g terminal sin comprobar capacidad.
- **Cuándo no usarla:** en negocios en creación, mercados en rápida transformación, adquisiciones, emisores con capital negativo o estructuras financieras. El modelo de estado estable puede no ser representativo.
- **Indicadores complementarios:** FCF, ROIC incremental, capex, capital circulante, WACC, deuda, número de acciones, capacidad instalada, saturación de mercado y retención de clientes.

### Ficha matemática 2.8 — Earnings yield y retorno esperado aproximado

- **Nombre:** *earnings yield* y relación de retorno esperado por beneficio, crecimiento y cambio de valoración.
- **Para qué sirve:** convierte el precio de una acción en una renta de beneficios y ofrece un marco —no una promesa— para pensar en el retorno de un periodo.
- **Variables:** `E` es el beneficio normalizado; `P` es el precio; `E/P` es el rendimiento de beneficios; `M=P/E` es el múltiplo; `g_E` es el crecimiento esperado de beneficios; `c_M=M_1/M_0−1` es el cambio relativo del P/E; `R_precio` es el retorno del precio; los dividendos y otros cobros se añaden por separado.
- **Fórmula:**

  `E/P = Beneficio por acción / Precio por acción = 1/(P/E)`.

  Si el cambio del múltiplo es `c_M=M_1/M_0−1`, la relación exacta del precio es:

  `P_1=P_0(1+g_E)(1+c_M)`, y `R_precio=(1+g_E)(1+c_M)−1`.

  Si se define el cambio sobre el rendimiento `E/P`, la relación es distinta: `R_precio=(1+g_E)/(1+c_y)−1`, donde `c_y=(E/P)_1/(E/P)_0−1`. No se suman E/P y g_E como si E/P fuera un pago.
- **Pasos:** 1) normalizar el beneficio; 2) calcular E/P y P/E; 3) definir si el 5 % es compresión del P/E o del E/P; 4) estimar crecimiento con evidencia; 5) modelar compresión o expansión; 6) añadir dividendos, recompras netas, impuestos y costes; 7) comparar con WACC y el coste de oportunidad.
- **Ejemplo numérico:** beneficio por acción `USD 5` y precio `USD 25`; P/E inicial `5x` y E/P `20 %`. Si el beneficio crece 4 % hasta `5,20` y el P/E se contrae 5 % hasta `4,75x`, `P_1=5,20×4,75=24,70` y `R_precio=24,70/25−1=−1,20 %` antes de dividendos. Si el 5 % se definiera como compresión del E/P, el resultado sería `1,04/0,95−1=9,47 %`; son dos definiciones distintas.
- **Interpretación:** un E/P alto puede indicar precio bajo o beneficios inflados. Por eso hay que examinar la calidad, la normalización y el balance. Un E/P bajo puede ser razonable si el crecimiento y la reinversión son excepcionalmente superiores.
- **Rangos orientativos dependientes del sector y contexto:** no existe un E/P mínimo universal. La comparación debe hacerse con el coste de capital, la tasa de crecimiento, la calidad del beneficio, el ciclo, la capitalización y la moneda. Los múltiplos de bienes, software, banca y servicios responden a factores distintos.
- **Ejemplo favorable:** E/P 18% con beneficios diversificados, balance controlado, crecimiento moderado y múltiplo estable; el margen de retorno es más comprensible.
- **Ejemplo desfavorable:** E/P 25% porque el beneficio está en pico, la deuda es alta y el crecimiento es -10%; la cifra parece barata, pero el yield puede ser una trampa.
- **Errores frecuentes:** no normalizar beneficios; mezclar tipos de beneficio; usar P/E negativo; olvidar deuda, dilución o acciones preferentes; contar crecimiento que requiere grandes emisiones; no modelar compresión de múltiplo; usar beneficio contable en vez de flujo de caja.
- **Cuándo no usarla:** cuando los beneficios son negativos, muy cíclicos, temporales o la estructura contable es compleja; también cuando la tesis depende de opcionalidad y no de beneficios actuales. El balance, SOTP o DCF pueden ser más útiles.
- **Indicadores complementarios:** P/E, E/P, FCF yield, ROIC frente a WACC, crecimiento, deuda, dilución, normalización y sensibilidad del múltiplo.

### Ficha matemática 2.9 — PEG y GARP

- **Nombre:** *Price/Earnings to Growth* (PEG), regla de cribado GARP.
- **Para qué sirve:** compara el múltiplo de beneficio con una estimación de crecimiento para identificar posibles candidatos cuyo precio no refleje todo su crecimiento.
- **Variables:** `PE` es el precio dividido por el beneficio; `g` es el crecimiento esperado de beneficios, expresado como porcentaje; `PEG` es la razón resultante.
- **Fórmula:**

  `PEG = PE/g`, cuando `PE` y `g` usan la misma convención de periodos.

  Un PEG menor que uno no es automáticamente mejor; la convención, el horizonte y la calidad del crecimiento importan.
- **Pasos:** 1) normalizar PE con beneficios verificables; 2) definir g a uno a cinco años; 3) no mezclar crecimiento de ventas con beneficio; 4) ajustar por cíclicos; 5) comprobar ROIC, debt y dilución; 6) pedir un nombre de salida si el crecimiento se desacelera.
- **Ejemplo numérico:** PE 18 y crecimiento esperado 12% da `PEG = 1,5`. Si el crecimiento solo es temporal y en dos años cae a 2%, el indicador inicial deja de ser útil.
- **Interpretación:** 1,5 no significa que la acción vaya a superar al mercado. Es una medida de precio por crecimiento que obliga a explicitar cuánto crecimiento, cuánto tiempo y qué riesgo se están comprando.
- **Rangos orientativos dependientes del sector y contexto:** no existe un PEG aceptable universal. Un 1,0 puede ser caro en un negocio de bajo ROIC y barato en uno con moat; un crecimiento del 30% generado por adquisiciones, deuda o un mercado pequeño puede ser menos durable.
- **Ejemplo favorable:** PE 18, crecimiento 12%, ROIC 25% frente a WACC 9%, caja positiva y baja concentración de clientes; el crecimiento puede crear valor.
- **Ejemplo desfavorable:** PE 10 y crecimiento aparente de 50%, pero el beneficio contiene un elemento extraordinario y el nuevo capex supera la caja; el PEG aparenta oportunidad sin sostenibilidad.
- **Errores frecuentes:** usar crecimiento histórico como si fuera futuro; mezclar unidades; ignorar inflación; ignorar que un múltiplo puede ser irreducible por ciclicidad; no comprobar que sea crecimiento por acción, no solo beneficio total; no ajustar por dilución.
- **Cuándo no usarla:** con beneficio negativo, crecimiento no fiable, negocios en pérdida, biotecnología pre-revenue o estructuras donde el nuevo capex y la financiación determinan el resultado. Conviene usar runway de caja, NAV, probabilidades de la cartera de proyectos o SOTP según el sector.
- **Indicadores complementarios:** E/P, FCF yield, ROIC, WACC, crecimiento por acción, retención, deuda, cuota de mercado, calidad de la estimación y escenarios de desaceleración.

## 2.5 Proceso de inversión Value Investing

### 2.5.1 Paso 1 — Definir el perímetro

Escribir en una frase qué se compra: «participación económica en una empresa», «bono», «ETF de deuda», «participación en un fondo» o «un inmueble mediante un vehículo». Definir moneda, clase, liquidez, horizonte, fiscalidad y derechos. No se puede hacer un *debida diligencia* de un símbolo si no se sabe qué unidad se posee.

### 2.5.2 Paso 2 — Entender el negocio o contrato

Describir clientes, productos, canales, costes, ciclo, competidores, proveedores, regulación, capital humano e incentivos. El círculo de competencia puede ser estrecho: un inversor puede analizar una sola actividad y no inferir sobre las demás.

Preguntas:

- ¿Qué se paga realmente y quién lo controla?
- ¿Qué flujo recibe el propietario después de pagar a empleados, proveedores, mantenimiento, deuda e impuestos?
- ¿Qué puede deteriorarse aunque el sector sea favorable?
- ¿Qué parte de la rentabilidad depende de un supuesto poco razonable?

### 2.5.3 Paso 3 — Normalizar los números

Separar:

- beneficios recurrentes de ganancias o pérdidas no recurrentes;
- flujo de caja de beneficio contable;
- deuda bruta de deuda neta;
- activos realizables de valor contable;
- crecimiento orgánico de crecimiento adquirido;
- ROIC de ROE;
- nominal de real;
- moneda local de moneda del inversor.

Una normalización no consiste en borrar los malos años. Consiste en explicar por qué difieren, qué podría repetirse y qué rango se debe usar.

### 2.5.4 Paso 4 — Estimar el valor

Usar dos métodos independientes cuando sea posible: por ejemplo, DCF y SOTP; múltiplo de beneficios normalizados y P/FCF; valor liquidativo y capacidad de beneficio. El objetivo no es encontrar dos números idénticos, sino identificar qué supuestos explican la diferencia.

Registrar:

- intervalo de valor;
- valor central;
- supuestos de volumen, precio, margen, capex, capital circulante, deuda y tasa de descuento;
- contribución del valor terminal;
- sensibilidad a cada variable;
- fecha y moneda.

### 2.5.5 Paso 5 — Evaluar calidad y gestión

Aplicar la pregunta: «aunque el precio sea correcto, ¿el negocio puede convertir el capital en efectivo y conservar la ventaja?». Evaluar ROIC, WACC, moat, deuda, retención, capital circulante, capex, retención de clientes, historial de la dirección, auditoría, compensación y dilución.

La dirección puede crear valor con:

- rechazar proyectos con retorno inferior al coste;
- reinvertir donde el ROIC es alto;
- mantener deuda razonable;
- comprar acciones por debajo del valor intrínseco;
- devolver excedentes cuando escasean oportunidades.

También puede destruirlo con:

- sobrepagar adquisiciones;
- emitir acciones a precio bajo;
- aumentar deuda para financiar expansión sin retornos;
- pagar por resultados de corto plazo;
- ocultar pasivos o cambiar criterios contables.

### 2.5.6 Paso 6 — Aplicar el margen de seguridad

Comprar no es solo detectar una discrepancia. Es aceptar una asimetría favorable: el downside se puede estimar y el upside tiene una tesis que no depende de un múltiplo heroico. Definir qué se hará si:

- el precio cae 20%;
- el beneficio cae 20%;
- sube el tipo de interés;
- se retrasa un catalizador;
- cambia la gerencia.

Un margen amplio no justifica ignorar el riesgo; un margen pequeño no se convierte en «mucho valor» por repetición de la palabra.

### 2.5.7 Paso 7 — Vigilar el expediente

Revisar periódicamente y ante eventos relevantes:

- resultados y caja;
- ROIC, márgenes y deuda;
- moat y competencia;
- decisiones de gestión y asignación;
- cambios regulatorios;
- clientes, proveedores y concentración;
- precio, liquidez y amortización;
- modificación de la tesis.

Un aumento de precio no elimina un negocio malo; una caída de precio no convierte automáticamente un negocio deteriorado en oportunidad.

## 2.6 Diferencias entre los cuatro enfoques

La siguiente taxonomía es una herramienta de este manual y no una clasificación universal de todos los gestores. Los cuatro enfoques son **Value profundo**, **Calidad (Quality)**, **GARP** y **Contrarian**. Un profesional puede combinar dos o más, pero debe saber cuál es la fuente principal de ventaja y qué riesgo está aceptando.

| Enfoque | Hipótesis central | Pregunta decisiva | Evidencia preferente | Riesgo principal | Error típico |
|---|---|---|---|---|---|
| **Value profundo** | El precio está muy por debajo de un valor conservador | ¿Cuánto vale el negocio aunque no haya expansión? | Activos, FCF normalizado, liquidación, múltiplo y deuda | Value trap y normalización errónea | Comprar solo porque el múltiplo es bajo |
| **Calidad (Quality)** | Un negocio superior puede mantener retornos elevados y reinvertir bien | ¿Por qué la calidad justifica el precio y la duración? | ROIC frente a WACC, moat, márgenes, balance, retención y gestión | Sobrepagar y complacencia | Confundir una marca fuerte con una tesis completa |
| **GARP** | Hay crecimiento razonable y el precio no lo capitaliza totalmente | ¿El crecimiento por acción puede justificar el múltiplo? | P/E, PEG, E/P, crecimiento, FCF, ROIC y catalizadores | Extrapolación, desaceleración y compresión de múltiplo | Confiar en una tasa de crecimiento publicitaria |
| **Contrarian** | El consenso está equivocado o no está valorando correctamente un hecho | ¿Qué evidencia prueba que el consenso no es realista? | Datos primarios, balance, ventas forzadas, historial y escenario | La tesis puede ser correcta pero fallar el timing o la liquidez | Ser contrarian porque el precio cae |

### 2.6.1 Value profundo

- **Fuente de ventaja:** discrepancia amplia entre precio y valor.
- **Necesidad:** paciencia y análisis de liquidación; a veces el negocio no mejora, solo deja de empeorar.
- **Indicadores:** descuento al flujo de caja, NAV tangible, deuda neta, activos realizables y normalización.
- **Descalificador:** deuda senior enorme, beneficios no recuperables, regulación terminal o gestión no confiable.

### 2.6.2 Calidad (Quality)

- **Fuente de ventaja:** foso competitivo durable, ROIC elevado y reinversión a buen coste.
- **Necesidad:** pagar un precio que no convierta cada punto de calidad en un múltiplo irracional.
- **Indicadores:** spread ROIC/WACC, retornos incrementales, conversión de caja, poder de precios, retención y apalancamiento.
- **Descalificador:** crecimiento que requiere cada vez más capital, clientes cautivos a bajo margen o una dirección sin plan de sucesión.

### 2.6.3 GARP

- **Fuente de ventaja:** crecimiento por acción por encima de lo incorporado en el precio.
- **Necesidad:** identificar catalizadores y duración del crecimiento.
- **Indicadores:** PEG, E/P, crecimiento orgánico, ROIC, FCF, capacidad y revisiones de expectativas.
- **Descalificador:** beneficio de un año fuera de norma, adquisiciones caras, emisiones nuevas o desaceleración inevitable.

### 2.6.4 Contrarian

- **Fuente de ventaja:** mejor análisis que el consenso, no simplemente un precio bajo.
- **Necesidad:** identificar el mecanismo por el que el mercado se equivoca.
- **Indicadores:** hechos temporales, ventas forzadas, calidad de la divulgación, liquidez, tiempo hasta la realización.
- **Descalificador:** una tesis que solo dice «el mercado es estúpido», sin balance, flujo o mecanismo.

### 2.6.5 Cómo se relacionan

Los enfoques no son cajas separadas:

- Un activo puede ser **Value + Calidad**: un gran negocio en pánico, con un precio deprimido.
- Puede ser **Calidad + GARP**: una empresa en crecimiento con ROIC excelente, pero cuyo precio depende de mantener el crecimiento.
- Puede ser **Contrarian + Value**: un activo ilíquido cuyo descuento por liquidez domina.
- Puede ser **Value + GARP**, pero solo si el crecimiento no destruye capital.
- Un negocio **Contrarian sin valor ni calidad** suele ser una opción especulativa; no es Value Investing.

La clasificación ayuda a evitar una mezcla confusa: no se puede exigir a una value trap «más crecimiento» para justificar una compra y, al mismo tiempo, usar un múltiplo alto sin evaluar su duración.

## 2.7 Ejemplos numéricos integrados

Los siguientes casos son **hipotéticos**. Las cifras se presentan en millones de USD salvo que se indique lo contrario.

### 2.7.1 Caso A — DCF y margen de seguridad

- FCFF de los años 1 a 5: `100` por año, antes del servicio de deuda.
- Tasa de descuento: `WACC = 10%`.
- Crecimiento terminal: `3%`.
- Deuda: `300`; efectivo no operativo: `100`.
- Acciones: `50`.
- Precio de mercado: `15` por acción.
- Valor intrínseco central del caso: aproximadamente `21,85` por acción.
- Margen de seguridad: aproximadamente `31,4%`.
- El puente `EV − deuda + efectivo` sólo es válido porque el flujo es FCFF; si fuera FCFE se descontaría con `K_e` y no se restaría deuda.

La tesis no termina en el decimal. Si la tasa de descuento sube a 11% y el crecimiento terminal baja a 2%, el mismo modelo puede producir un valor cercano a `16,84` por acción según los supuestos exactos. El nuevo precio sigue pareciendo una pequeña oportunidad, pero el margen se ha reducido. Esto muestra por qué el rango, la sensibilidad y el balance son tan importantes como el punto central.

### 2.7.2 Caso B — ROIC y crecimiento

- EBIT: `150`.
- Tasa fiscal: `25%`; NOPAT: `112,5`.
- Capital invertido: `750`; ROIC: `15%`.
- WACC estimado: `9%`; spread: `6 puntos`.
- Reinversión sostenible: `30%`; crecimiento aproximado: `15%×30%=4,5%`.

El negocio puede crecer un 4,5% y seguir creando valor en términos incrementales. Si, en cambio, la dirección intenta crecer 15% reinvirtiendo `100%` de los recursos, el resultado no es automáticamente mejor: puede necesitar deuda, reducir ROIC o aceptar proyectos por debajo del WACC. La pregunta no es solo «¿puede crecer?», sino «¿puede crecer con una economía razonable por cada unidad de capital?».

### 2.7.3 Caso C — Calidad a precio razonable

- Beneficio por acción normalizado: `USD 8`.
- Precio: `USD 24`; P/E: `3,0x`; E/P: `33,3%`.
- ROIC estable: `18%`; WACC: `10%`; deuda moderada.
- Crecimiento esperado: `5%`; *dividend payout ratio*: `30%`.

El E/P parece elevado y el precio puede ser razonable, pero hay que investigar si el beneficio normalizado, el foso competitivo y la deuda son reales. Si el P/E sube a 8 por una expansión y luego vuelve a 3, la acción puede no ser un negocio de composición: puede haber sido una operación temporal de valor y no una inversión de calidad compuesta.

### 2.7.4 Caso D — GARP con riesgo de desaceleración

- Beneficio por acción: `USD 10`.
- Precio: `USD 180`; P/E: `18x`.
- Crecimiento esperado inicial: `12%`; PEG: `1,5`.
- FCF: menor que el beneficio por acción debido a capex y circulante.
- El mercado puede ser correcto mientras dure el crecimiento, pero existe riesgo si el crecimiento cae a 4% y el P/E vuelve a 12x.

En ese escenario, el crecimiento de beneficios no es lo mismo que el retorno de precio. El inversor debe estimar las revisiones de expectativas, la capacidad de inversión, el ROIC incremental y el valor del nuevo capex. La etiqueta GARP no sustituye esa investigación.

## 2.8 Checklist de inversión Value Investing

### Comprensión

- [ ] Sé qué activo, clase, moneda, liquidez y derechos se compran.
- [ ] Puedo explicar el negocio o contrato sin depender de una etiqueta.
- [ ] Mi círculo de competencia incluye la regulación, la competencia y los riesgos técnicos relevantes.
- [ ] He leído fuentes primarias y he distinguido hechos de estimaciones.

### Negocio y calidad

- [ ] He descrito clientes, proveedores, canales, costes y concentración.
- [ ] He identificado el moat y qué inversión lo mantendría.
- [ ] He normalizado beneficios, caja, deuda, activos y crecimiento.
- [ ] He comparado ROIC con un coste de capital razonado.
- [ ] He evaluado la gestión, la asignación de capital, la auditoría y la dilución.
- [ ] He definido qué puede causar una pérdida permanente.

### Valor

- [ ] Tengo al menos una estimación central y un rango de valor.
- [ ] He probado sensibilidad de precio, volumen, margen, capex, capital circulante, tasa y moneda.
- [ ] He restado deuda, pasivos, participaciones no controlantes y acciones plenamente diluidas.
- [ ] He separado owner earnings, FCF y beneficio contable.
- [ ] He calculado el margen de seguridad sin convertirlo en garantía.
- [ ] He comprobado que el valor terminal no domina silenciosamente el modelo.

### Precio, cartera y seguimiento

- [ ] He comparado con el coste de oportunidad y la inflación.
- [ ] He definido qué revisar, con qué frecuencia y qué señales invalidan la tesis.
- [ ] La tesis funciona en un escenario moderado, no solo en el caso de «todo sale bien».
- [ ] He explicado por qué el enfoque es Value, Calidad, GARP o Contrarian.
- [ ] He revisado concentración, liquidez, moneda, impuestos y costes totales.

## 2.9 Notas de riesgo finales

1. **No hay precio objetivo sin supuestos.** Una valoración es un argumento cuantificado sobre el futuro; debe mostrar su incertidumbre.
2. **El valor contable no es caja.** Los activos pueden no liquidarse al libro y los beneficios pueden no convertirse en efectivo.
3. **El crecimiento no es gratis.** Si exige capex, capital circulante, deuda o emisiones, debe aparecer en el cálculo.
4. **La calidad puede estar sobreprecio.** Un ROIC alto pasado no garantiza un moat o un WACC bajo.
5. **El consenso puede ser correcto.** Ser contrarian no crea ventaja; un balance, un mecanismo y una ejecución convincente son necesarios.
6. **La liquidez cambia el valor.** Un inversor que no puede esperar puede aceptar un precio muy inferior al valor teórico.
7. **Los efectos fiscales y regulatorios importan.** Las reglas varían por país, producto, cuenta y momento; deben revisarse con profesionales cuando corresponda.
8. **El proceso es más importante que la etiqueta.** «Value», «GARP», «Calidad» o «Contrarian» son etiquetas; la evidencia y el control del riesgo son la inversión.

> **Recordatorio final.** Este capítulo ofrece un marco educativo para investigar. No constituye asesoramiento financiero, una recomendación personalizada ni una garantía de beneficios. Cualquier decisión debe basarse en la documentación real del instrumento, una evaluación independiente de los riesgos y la situación financiera, fiscal y regulatoria de la persona inversora.

---

# 3. Estados financieros

Los estados financieros presentan, de forma cuantificada y ordenada, la actividad económica de una entidad. Permiten responder tres preguntas distintas: **qué posee y debe una empresa en una fecha**, **qué resultados generó durante un período** y **cómo se financiaron o distribuyó el efectivo**. Ninguna de las tres respuestas es completa por separado.

> **Todos los casos de este capítulo son hipotéticos.** La empresa «Industrias Aurora, S.A.», las cifras, las políticas contables, los porcentajes y los escenarios son enteramente ficticios y se emplean únicamente con fines educativos. Los importes de los ejemplos se expresan en millones de dólares estadounidenses (USD m), salvo que se indique lo contrario.

## 3.1 Función de los tres estados y principios de lectura

| Estado | Pregunta principal | Momento o período | Representación | Uso esencial |
|---|---|---|---|---|
| Balance Sheet o estado de posición financiera | ¿Qué activos, pasivos y patrimonio existen? | Fecha de cierre | Fotografía | Evaluar solvencia, liquidez, apalancamiento y valor contable |
| Income Statement o estado de resultados | ¿Qué ingresos, costos y beneficios se generaron? | Ejercicio o período | Película | Analizar crecimiento, rentabilidad, márgenes y calidad de los beneficios |
| Cash Flow Statement o estado de flujos de efectivo | ¿Cuánto efectivo entró, salió y de dónde procedió? | Ejercicio o período | Película de caja | Comprobar la calidad del beneficio, el CapEx, la financiación y la liquidez |

### 3.1.1 Ecuación fundamental del balance

La ecuación contable es la identidad central: los recursos y obligaciones de la entidad están financiados por acreedores y propietarios. No significa que todos los activos sean realizables ni que el patrimonio pueda gastarse sin restricciones; expresa una igualdad contable, no calidad financiera.

#### Ficha de 13 puntos: ecuación de balance o identidad contable

1. **Nombre:** ecuación de balance, identidad contable o ecuación fundamental del patrimonio.
2. **Para qué sirve:** demuestra que lo que posee una entidad está financiado por sus obligaciones y sus propietarios, y permite detectar errores de registro o clasificación.
3. **Variables:** `A` = activos; `P` = pasivos; `PN` = patrimonio neto; `AC` = activo corriente; `ANC` = activo no corriente; `PC` = pasivo corriente; `PNC` = pasivo no corriente.
4. **Fórmula matemática:** `A = P + PN`; con clasificación corriente/no corriente, `AC + ANC = PC + PNC + PN`.
5. **Pasos:** (1) fijar la fecha de corte; (2) sumar activos corrientes y no corrientes; (3) sumar pasivos corrientes y no corrientes; (4) sumar patrimonio atribuible y no controlante, si existe; (5) comprobar ambos lados; (6) revisar notas, intereses devengados y saldos negativos.
6. **Ejemplo hipotético:** Aurora presenta `A = 3.580`, `P = 2.070` y `PN = 1.510`; `3.580 = 2.070 + 1.510`.
7. **Interpretación:** el patrimonio es el valor contable residual después de reconocer todas las obligaciones. Un patrimonio pequeño no implica necesariamente un negocio débil, pues puede financiarse con deuda estable; uno grande tampoco garantiza calidad si contiene goodwill o activos poco realizables.
8. **Valores orientativos dependientes del sector/contexto:** no existe un porcentaje único de activos financiados con patrimonio. Depende de la estabilidad del flujo, la calidad de los activos, el sector, los vencimientos y el acceso a crédito.
9. **Ejemplo hipotético favorable:** `PN/A = 42,2 %`, flujo estable, vencimientos escalonados y poca deuda corriente; la estructura financiera tiene una protección razonable.
10. **Ejemplo hipotético desfavorable:** `PN/A = 5 %` porque el pasivo no está respaldado por activos productivos; una caída de flujos o un deterioro puede producir patrimonio negativo.
11. **Errores frecuentes:** mezclar fechas, omitir intereses devengados o participación no controlante, clasificar incorrectamente deuda de largo plazo, doble contar efectivo o confundir reserva con caja.
12. **Cuándo no conviene:** no usar la igualdad mecánica para inferir liquidez, valor realizable o rentabilidad; es un control de integridad, no una prueba de solvencia.
13. **Otros indicadores:** ratio corriente, ratio rápido, deuda neta, deuda neta/EBITDA, cobertura de intereses, ROE, ROIC, capital circulante y pruebas de deterioro.

**Ejemplo hipotético completo del balance de Aurora al 31 de diciembre de 2025:**

| Activo | USD m | Pasivo y patrimonio | USD m |
|---|---:|---|---:|
| Efectivo y equivalentes | 250 | Cuentas por pagar | 450 |
| Inversiones financieras corrientes | 50 | Gastos acumulados | 180 |
| Cuentas por cobrar | 600 | Ingresos diferidos | 120 |
| Inventarios | 400 | Deuda corriente | 150 |
| Otros activos corrientes | 100 | Arrendamientos corrientes | 40 |
| **Total activo corriente** | **1.400** | Provisiones corrientes | 60 |
| Propiedades, planta y equipo | 1.100 | **Total pasivo corriente** | **1.000** |
| Activos por derecho de uso | 180 | Deuda no corriente | 650 |
| Intangibles | 300 | Arrendamientos no corrientes | 160 |
| Goodwill | 450 | Pasivo por impuestos diferidos | 130 |
| Inversiones no corrientes | 100 | Provisión de pensiones | 80 |
| Activo por impuestos diferidos | 50 | Otros pasivos no corrientes | 50 |
| **Total activo no corriente** | **2.180** | **Total pasivo no corriente** | **1.070** |
|  |  | **Total pasivos** | **2.070** |
|  |  | Capital social | 200 |
|  |  | Prima de emisión | 650 |
|  |  | Reservas | 210 |
|  |  | Resultados acumulados | 480 |
|  |  | Otro resultado integral acumulado | −10 |
|  |  | Acciones en tesorería | −20 |
|  |  | **Total patrimonio neto** | **1.510** |
| **Total activo** | **3.580** | **Pasivos + patrimonio** | **3.580** |

### 3.1.2 Principios de lectura profesional

- **Misma frontera y misma fecha:** comparar una empresa consigo misma exige mantener el perímetro de consolidación, ejercicio, moneda y políticas contables. Una compra, una venta o un cambio normativo puede explicar un crecimiento que no es orgánico.
- **Serie de varios años:** un cierre aislado puede ocultar un ciclo. Conviene observar entre tres y diez años, separando años favorables de los años de crisis.
- **Las notas importan:** cifras resumidas pueden ocultar cambios de estimación, concentración de clientes, deuda fuera de balance, compromisos, contingencias y covenants.
- **Devengo frente a efectivo:** el beneficio reconoce devengos y estimaciones; el flujo registra cobros y pagos. Una venta aún no cobrada puede elevar el beneficio sin elevar la caja; un anticipo puede reducir la caja antes de afectar el gasto.
- **Fotografía y no precio de mercado:** el balance no indica a cuánto puede venderse un inventario, cuánto vale una patente ni cuánto generará una fábrica. Esa valoración requiere notas, pruebas de deterioro, precios de mercado y flujos futuros.
- **Rentabilidad y creación de valor:** un beneficio alto puede exigir descuentos, deuda o capital adicional. Deben juzgarse conjuntamente beneficio, caja y capital invertido.

### 3.1.3 Normas contables que cambian la presentación

| Tema | IFRS | US GAAP | Lectura para el analista |
|---|---|---|---|
| Corriente/no corriente | IAS 1 clasifica como corriente lo que se espera realizar, vender o consumir en el ciclo normal, mantener para negociación o realizar dentro de doce meses; también regula la deuda con derecho condicionado a refinanciar | Criterio generalmente similar, con reglas específicas de refinanciación y cláusulas | No basta la etiqueta: revisar vencimiento, cláusulas y derecho efectivo de postergar el pago |
| Arrendamientos | IFRS 16 reconoce un activo por derecho de uso y un pasivo por arrendamiento para la mayoría de los arrendamientos | Los arrendamientos operativos suelen registrarse como gasto; los financieros sí activan activo y pasivo | EBITDA y apalancamiento cambian; comparar con IFRS 16 o ajustar |
| Ingresos | IFRS 15, con cinco etapas y reglas sobre obligaciones de desempeño | ASC 606 sigue un enfoque contractual de cinco etapas | Analizar devengos, devoluciones, anticipos y activos o pasivos contractuales |
| Pérdas crediticias | IFRS 9 utiliza pérdidas esperadas | ASC 326 emplea pérdidas crediticias esperadas para los activos financieros aplicables | La provisión de cuentas por cobrar puede variar según metodología |
| Goodwill | No se amortiza; se prueba deterioro anual y ante indicadores | En la mayoría de los casos no se amortiza; prueba anual o por evento | La falta de amortización no implica falta de riesgo |
| Inventarios | Generalmente, menor de costo y valor realizable neto | Criterio general análogo, con diferencias de medición o presentación | Ajustar normas al comparar márgenes y capital empleado |
| Impuestos y flujo | IAS 12 y IAS 7; el impuesto diferido puede diferir del impuesto pagado | ASC 740 y ASC 230; criterios de presentación relacionados | Conciliar beneficio fiscal, efectivo y diferido |

## 3.2 Balance Sheet o estado de posición financiera

El balance muestra la situación en una fecha determinada. Se lee en tres bloques: activos, pasivos y patrimonio neto. No basta con saber que el activo es grande: hay que comprender liquidez, calidad, vidas útiles, restricciones de uso, financiación y sensibilidad a una menor demanda.

### 3.2.1 Activos: liquidez, conversión y valor recuperable

| Elemento | Qué significa y cómo se calcula | Por qué importa | Una cifra alta o baja puede indicar |
|---|---|---|---|
| Activo corriente | Activos que se esperan realizar, vender o consumir en el ciclo normal o dentro de doce meses, conforme a IAS 1 | Alimenta la capacidad de atender obligaciones cercanas | Alto: más recursos nominalmente disponibles, aunque pueden ser de baja calidad; bajo: eficiencia o falta de liquidez |
| Efectivo y equivalentes | Efectivo e inversiones de alta liquidez, normalmente con vencimiento de tres meses o menos y riesgo insignificante de cambio de valor | Paga obligaciones y reduce necesidad de refinanciación | Alto: reserva contra imprevistos, aunque puede indicar fondos infrautilizados; bajo: eficiencia o estrés, según deuda y flujo |
| Cuentas por cobrar | Ventas devengadas pendientes de cobro, netas de pérdidas crediticias esperadas | Mide la conversión del beneficio en cobros | Alto: más crédito comercial; demasiado alto: mora, concentración o devoluciones |
| Inventarios | Mercancías, materiales, producción en proceso y productos terminados, al costo o menor valor realizable | Inmoviliza capital y puede ocultar obsolescencia | Alto: demanda o stock de seguridad; alto con menor rotación: descuentos, obsolescencia y presión de caja |
| Otros activos corrientes | Anticipos, impuestos recuperables y gastos pagados por adelantado | Pueden convertirse en efectivo después | Alto: no siempre es mejor; requiere soporte y un calendario de cobro |
| Activo no corriente | Activos que se esperan utilizar después del ciclo normal | Aporta capacidad productiva y opciones de crecimiento | Alto: capacidad instalada o más riesgo de deterioro; bajo: estructura ligera o menor capacidad |
| Propiedades, planta y equipo | Activos tangibles de uso productivo menos depreciación e deterioro | Generan capacidad y requieren inversión de mantenimiento | Alto: más capacidad o más capital inmovilizado; bajo: no implica menor capacidad si la operación es ligera en activos |
| Activos por derecho de uso | Derecho contractual a usar un activo arrendado, menos amortización e deterioro | Hace visible el uso de activos obtenidos mediante arrendamiento | Alto: capacidad sin compra total, pero también deuda; bajo: menor dependencia de arrendamientos |
| Intangibles | Activos no materiales controlables, como software, patentes, marcas y licencias | Pueden representar conocimiento, acceso a clientes o capacidad futura | Alto: barreras de entrada y activos estratégicos; muy alto: riesgo de deterioro o sobreprecio |
| Goodwill | Residual de la compra sobre el valor razonable de los activos identificables y pasivos adquiridos | Resume expectativas sobre el conjunto adquirido, no un activo tangible separado | Alto: posible ventaja económica, pero también sobreprecio; el deterioro reduce patrimonio y beneficio |
| Inversiones no corrientes | Participaciones, préstamos a terceros o activos financieros de largo plazo | Pueden aportar ingresos, control o valor estratégico | Alto: diversificación, aunque también activos ilíquidos o de baja rentabilidad |
| Activo por impuestos diferidos | Derechos de recuperar o compensar impuestos por diferencias temporales sujetas a probabilidad de recuperación | Conecta beneficios contables y pagos fiscales; no es caja disponible | Alto: puede reflejar activos o pérdidas fiscales; bajo: menor beneficio fiscal esperado |

#### Ficha de 13 puntos: capital circulante, working capital o NWC

1. **Nombre:** capital circulante, capital de trabajo, working capital o NWC.
2. **Para qué sirve:** mide la diferencia entre recursos clasificados como corrientes y obligaciones clasificadas como corrientes en una fecha.
3. **Variables:** `AC` = activo corriente; `PC` = pasivo corriente; `NOWC` = NWC operativo; `NWC` = capital circulante.
4. **Fórmula matemática:** `NWC = AC − PC`; en la variante operativa, `NOWC = cuentas por cobrar + inventarios + otros activos operativos − cuentas por pagar − gastos acumulados − ingresos diferidos`.
5. **Pasos:** (1) fijar la fecha; (2) reunir activos corrientes; (3) reunir pasivos corrientes; (4) calcular la diferencia; (5) separar caja/deuda del componente operativo; (6) comparar con estacionalidad y ciclo de conversión.
6. **Ejemplo hipotético:** Aurora tiene `AC = 1.400` y `PC = 1.000`; `NWC = 400 USD m`.
7. **Interpretación:** Aurora tiene 400 más de activos corrientes que pasivos corrientes; no significa que pueda pagar cualquier deuda ni que 400 sean efectivo.
8. **Valores orientativos dependientes del sector/contexto:** puede ser ligeramente negativo en comercio con ciclos de cobro muy rápidos; puede ser muy positivo en manufactura con largos ciclos de inventario. Compare con DIO, DSO, DPO, deuda corriente y consumo mensual de caja.
9. **Ejemplo hipotético favorable:** NWC positivo moderado, caja suficiente, deuda corriente refinanciable y circulante de operación; una caída estacional de 50 no compromete los pagos.
10. **Ejemplo hipotético desfavorable:** NWC de 900 por inventarios lentos y cuentas dudosas, mientras vencen 700 de deuda y obligaciones; el balance parece líquido, pero el inventario puede requerir descuentos.
11. **Errores frecuentes:** incluir activos fijos en AC, excluir impuestos o anticipos, mezclar fechas, usar NWC bruto para evaluar liquidez o interpretar un cierre favorable como permanente.
12. **Cuándo no conviene:** en bancos, aseguradoras, grupos financieros o negocios regulados con dependencias específicas; tampoco cuando no se dispone de saldos comparables.
13. **Otros indicadores:** ratio corriente, ratio rápido, NWC/ingresos, ciclo de conversión, DSO, DIO, DPO, runway, vencimientos y CFO estacionalizado.

**Ejemplo hipotético de los componentes del NWC operativo de Aurora:**

| Componente | 2025 | 2024 | Cambio | Efecto en caja |
|---|---:|---:|---:|---:|
| Cuentas por cobrar | 600 | 620 | −20 | +20 |
| Inventarios | 400 | 410 | −10 | +10 |
| Cuentas por pagar | 450 | 425 | +25 | +25 |
| Gastos acumulados | 180 | 160 | +20 | +20 |
| Ingresos diferidos | 120 | 110 | +10 | +10 |
| **NWC operativo** | **250** | **335** | **−85** | **+85** |

El descenso del NWC operativo libera caja. En cambio, una empresa en crecimiento puede aumentar el NWC y consumir efectivo. Por ello, un CFO alto no siempre es mejor si se debe a retrasar pagos a proveedores o cobrar clientes por adelantado.

#### Ficha de 13 puntos: efectivo y equivalentes de efectivo

1. **Nombre:** efectivo y equivalentes de efectivo, cash and cash equivalents.
2. **Para qué sirve:** mide la liquidez inmediatamente disponible, sin incluir efectivo restringido ni inversiones que no puedan convertirse rápidamente en importe conocido.
3. **Variables:** `C` = efectivo y equivalentes; `CI` = inversiones corrientes líquidas; `RC` = efectivo restringido.
4. **Fórmula matemática:** `C = efectivo + depósitos a la vista + inversiones que cumplen los criterios de equivalente`; `liquidez ampliada = C + CI no restringida`.
5. **Pasos:** (1) listar efectivo y depósitos; (2) revisar plazo, liquidez y riesgo insignificante; (3) separar saldos restringidos; (4) excluir cheques no cobrables y fondos de terceros; (5) conciliar con el final del estado de flujos; (6) comparar con vencimientos y salida operativa.
6. **Ejemplo hipotético:** Aurora tiene 250 de efectivo, 50 de inversiones líquidas y 15 de efectivo restringido. El efectivo y equivalentes reconocidos es 250; la liquidez ampliada es 300.
7. **Interpretación:** 250 es una reserva de tesorería; 50 son inversiones con una liquidez distinta; los 15 restringidos no están disponibles para deuda general.
8. **Valores orientativos dependientes del sector/contexto:** compare meses de salida de caja y cobertura de vencimientos. Un negocio con flujo estable puede requerir menos reserva que una plataforma preoperativa o una empresa de construcción.
9. **Ejemplo hipotético favorable:** Aurora mantiene caja para ocho meses de salida operativa y una línea de crédito no utilizada; no tiene restricciones relevantes y sus vencimientos están escalonados.
10. **Ejemplo hipotético desfavorable:** la caja baja a 20, hay 140 de deuda corriente y 80 vencen en 90 días; el calendario de liquidez revela el riesgo.
11. **Errores frecuentes:** incluir cuentas bloqueadas, cheques pendientes, anticipos de clientes, títulos de un año o inversiones con riesgo de mercado; comparar una fecha con un promedio sin explicarlo.
12. **Cuándo no conviene:** no usar la caja aislada en bancos, aseguradoras, fondos o entidades con restricciones regulatorias; tampoco confundir liquidez con rentabilidad.
13. **Otros indicadores:** deuda neta, ratio rápido, runway, covenant de caja mínima, líneas de crédito, cobertura de intereses y concentración bancaria.

#### Ficha de 13 puntos: cuentas por cobrar y pérdida crediticia esperada

1. **Nombre:** cuentas por cobrar netas, trade receivables y provisión por pérdidas crediticias.
2. **Para qué sirve:** mide ventas devengadas pendientes de cobro y estima la parte que probablemente no se recuperará.
3. **Variables:** `AR_b` = cuentas por cobrar brutas; `PE` = provisión por pérdidas crediticias; `AR_n = AR_b − PE`.
4. **Fórmula matemática:** `AR_n = AR_b − PE`; DSO aproximado: `DSO = AR_n / ingresos × días del período`.
5. **Pasos:** (1) reconciliar facturas, notas de crédito y cobros; (2) separar vencidas y no vencidas; (3) revisar historial, garantías y concentración; (4) estimar la provisión; (5) observar la relación entre ventas y cobros; (6) separar ventas a partes relacionadas.
6. **Ejemplo hipotético:** Aurora registra 660 brutas y una provisión de 60; `AR_n = 600`. Con ingresos de 2.000 y un año de 365 días, `DSO = 600/2.000×365 = 109,5 días`.
7. **Interpretación:** 660 no son caja; la provisión reconoce la parte que podría perderse. Un DSO de 109,5 días solo es positivo o negativo al compararlo con el sector y la historia.
8. **Valores orientativos dependientes del sector/contexto:** el software suele cobrar rápido; distribución industrial y construcción pueden tener plazos mayores. Un aumento de 20 días respecto de sí mismo merece explicación.
9. **Ejemplo hipotético favorable:** ventas crecen 10 %, DSO permanece estable, vencidos bajan y la concentración moderada; CFO acompaña al beneficio.
10. **Ejemplo hipotético desfavorable:** ventas crecen 30 %, DSO pasa de 50 a 110 días, tres clientes superan 60 % del saldo y se revierten provisiones; el beneficio puede ser de baja calidad.
11. **Errores frecuentes:** usar saldo bruto, omitir notas de crédito, anualizar mal datos trimestrales, ignorar factorización o confundir cuentas por cobrar con ingresos diferidos.
12. **Cuándo no conviene:** no usar DSO cuando hay ventas muy estacionales, prepagos, cambios fuertes de precio o contratos complejos; revisar antigüedad y cobros reales.
13. **Otros indicadores:** gasto de provisión, antigüedad, proporción vencida, concentración de clientes, ingresos diferidos, DSO comparativo y CFO/NI.

#### Ficha de 13 puntos: inventarios

1. **Nombre:** inventarios, inventory y días de inventario.
2. **Para qué sirve:** mide bienes mantenidos para vender o consumir y estima cuánto tiempo queda inmovilizado el capital.
3. **Variables:** `I_b` = inventario bruto; `PR` = provisión por obsolescencia o menor valor realizable; `I_n = I_b − PR`; `DIO`.
4. **Fórmula matemática:** `I_n = I_b − provisión`; `DIO = I_n / COGS × días del período`.
5. **Pasos:** (1) clasificar materiales, producción y productos terminados; (2) revisar método de costeo; (3) identificar obsolescencia; (4) comparar con ventas; (5) calcular días y rotación; (6) comprobar si la reducción refleja eficiencia o falta de producto.
6. **Ejemplo hipotético:** Aurora tiene 430 brutos y 30 de provisión; `I_n = 400`. Con COGS de 1.200, `DIO = 400/1.200×365 = 121,7 días`.
7. **Interpretación:** Aurora mantiene aproximadamente 122 días de costo en inventario neto; el saldo no garantiza que pueda vender todo a su costo.
8. **Valores orientativos dependientes del sector/contexto:** alimentación, moda y tecnología pueden tener ciclos muy distintos; usar DIO, reducciones de valor, niveles de servicio y demanda, no un rango universal.
9. **Ejemplo hipotético favorable:** DIO baja de 122 a 90 días, se mantiene el servicio y se libera caja sin agotamientos relevantes.
10. **Ejemplo hipotético desfavorable:** DIO sube a 240 días, aparecen modelos antiguos, descuentos y provisiones; la caja queda inmovilizada y aumenta el riesgo de deterioro.
11. **Errores frecuentes:** incluir anticipos a proveedores como inventario, usar COGS no estacional, ignorar calidad, mezclar inventarios con I+D capitalizado y usar saldos de cierre como promedio.
12. **Cuándo no conviene:** no usarlo aisladamente cuando hay metales preciosos, productos farmacéuticos, inventarios en consignación o materias primas con precio cambiante; revisar contratos y valoración.
13. **Otros indicadores:** rotación, reducciones de valor, porcentaje obsoleto, margen bruto, quiebres de stock, venta por inventario, ciclo de conversión y NWC/ingresos.

#### Ficha de 13 puntos: propiedades, planta y equipo y depreciación

1. **Nombre:** propiedades, planta y equipo, PP&E, activos fijos y depreciación.
2. **Para qué sirve:** mide activos tangibles usados para producir bienes o servicios y distribuye su consumo económico.
3. **Variables:** `PP&E_b` = costo bruto; `DA` = depreciación acumulada; `IP` = deterioro; `PP&E_n = PP&E_b − DA − IP`; `CapEx`.
4. **Fórmula matemática:** `PP&E_n = PP&E_b − DA − IP`; la depreciación suele basarse en costo, valor residual y vida útil.
5. **Pasos:** (1) identificar costo inicial; (2) separar mantenimiento y expansión; (3) determinar vida útil; (4) calcular depreciación; (5) probar deterioro; (6) revisar ventas y bajas; (7) comparar CapEx con D&A.
6. **Ejemplo hipotético:** Aurora tiene 1.700 brutos, 580 de depreciación y 20 de deterioro; `PP&E_n = 1.100`.
7. **Interpretación:** 1.100 es valor contable residual, no valor de mercado ni coste de reposición; la depreciación no equivale necesariamente al CapEx de mantenimiento.
8. **Valores orientativos dependientes del sector/contexto:** una máquina de quince años no se compara con un servidor de tres. CapEx/ingresos de 2–10 % puede ser normal en industria, pero no es un rango universal.
9. **Ejemplo hipotético favorable:** CapEx de 200 cubre renovación y expansión moderada, aumenta la capacidad utilizada y mantiene ROIC y FCF sólidos.
10. **Ejemplo hipotético desfavorable:** se compran 300 de activos al año, los ingresos no crecen, hay deterioro de 100 y D&A de 80; el capital no produce retornos.
11. **Errores frecuentes:** usar CapEx como D&A, no separar crecimiento y mantenimiento, depreciar un terreno, olvidar deterioro o asumir que valor libro es valor de mercado.
12. **Cuándo no conviene:** en empresas cuyo activo principal es conocimiento, software o servicios, el PP&E neto puede subestimar el capital productivo; usar el capital invertido.
13. **Otros indicadores:** CapEx/D&A, rotación de activos, ROIC, utilización de capacidad, mantenimiento de CapEx, PP&E/ingresos y edad de activos.

#### Ficha de 13 puntos: intangibles y amortización

1. **Nombre:** activos intangibles y amortización de intangibles.
2. **Para qué sirve:** reconoce recursos no materiales controlables que generan beneficios económicos, como software, patentes, licencias, marcas y relaciones con clientes.
3. **Variables:** `I_b` = costo bruto; `Am` = amortización acumulada; `IP` = deterioro; `I_n = I_b − Am − IP`; vida útil.
4. **Fórmula matemática:** `I_n = costo − amortización acumulada − deterioro`; en amortización lineal, `cargo anual ≈ costo no residual / vida útil`.
5. **Pasos:** (1) identificar criterio de reconocimiento; (2) separar software, licencias, marcas y relaciones; (3) asignar vida útil; (4) amortizar o probar deterioro; (5) revisar tecnología y demanda; (6) separar desarrollo capitalizado de investigación.
6. **Ejemplo hipotético:** Aurora tiene 520 brutos, 200 de amortización y 20 de deterioro; `I_n = 300`. Una relación con clientes de costo 140 y vida útil siete años genera `140/7 = 20` anual.
7. **Interpretación:** 300 es el valor contable de beneficios futuros bajo la política y vida útil; no implica que todos valgan 300 hoy.
8. **Valores orientativos dependientes del sector/contexto:** farmacia y software tienen perfiles distintos. Intangibles/ingresos superior a 50 % puede ser normal en suscripción, pero importa si genera margen, retención y caja.
9. **Ejemplo hipotético favorable:** software desarrollado genera suscripciones, con bajo mantenimiento y CapEx que se convierte en ingresos; amortización y FCF están correlacionados.
10. **Ejemplo hipotético desfavorable:** una licencia depende de tecnología sustituida y aparece deterioro; el valor contable permanece, pero el valor económico cae.
11. **Errores frecuentes:** tratar todo software como intangible, capitalizar gasto de I+D, ignorar deterioro, no separar marcas y relaciones y asumir que todo activo es realizable.
12. **Cuándo no conviene:** no usar intangibles/ingresos como señal universal; las intensidades de I+D y modelos de negocio son muy diferentes.
13. **Otros indicadores:** intensidad de I+D, tasa de capitalización, ingresos por cliente, margen, retención, amortización/ingresos y conversión en FCF.

#### Ficha de 13 puntos: goodwill e deterioro

1. **Nombre:** goodwill, fondo de comercio e impairment.
2. **Para qué sirve:** representa, en una combinación de negocios, la diferencia entre el precio de compra y el valor razonable neto de activos identificables y pasivos adquiridos.
3. **Variables:** `GW` = goodwill; `Consideración` = precio de compra; `VRNA` = valor razonable neto identificable adquirido; `GW = Consideración − VRNA`.
4. **Fórmula matemática:** `GW inicial = Consideración − VRNA`; si aparece deterioro, `GW reconocido = GW anterior − pérdida por deterioro`, con límites y asignación normativos.
5. **Pasos:** (1) identificar combinación; (2) revisar valoración de activos y pasivos; (3) asignar goodwill a unidades generadoras; (4) comparar importe recuperable y valor contable; (5) realizar la prueba; (6) revisar sensibilidad; (7) separar goodwill de intangibles identificables.
6. **Ejemplo hipotético:** Aurora compra por 900 y el valor razonable neto identificable es 450; `GW = 450`. Si el importe recuperable cae a 360 frente a un valor contable de 450, se reconoce deterioro de hasta 90, sujeto a asignación.
7. **Interpretación:** goodwill resume expectativas sobre el conjunto adquirido; no es efectivo, no se cobra por separado y no tiene un flujo identificable separado. Sus beneficios se incorporan a los flujos de la unidad generadora.
8. **Valores orientativos dependientes del sector/contexto:** `Goodwill/Patrimonio >50 %` puede ser normal en software con pocos activos tangibles; en una industrial exige más explicación. El deterioro no prueba fraude.
9. **Ejemplo hipotético favorable:** crecimiento, márgenes, retención y caja respaldan el goodwill; las pruebas muestran margen de seguridad.
10. **Ejemplo hipotético desfavorable:** 80 % del patrimonio es goodwill, la unidad pierde clientes y el deterioro borra equity; el múltiplo de libro ya no describe valor de caja.
11. **Errores frecuentes:** tratar goodwill como tangible, no probarlo porque EBITDA crece, comparar sin mismo perímetro o usar precio de compra como si fuera activo tangible.
12. **Cuándo no conviene:** no usar goodwill/patrimonio como única señal de calidad; revisar unidad generadora, impuestos, tasa de descuento y sinergias estimadas.
13. **Otros indicadores:** deterioro, ROIC de adquisiciones, retención, margen posterior, amortización de intangibles y FCF posterior al deal.

### 3.2.2 Pasivos: obligaciones, vencimiento y deuda

Los pasivos representan obligaciones presentes derivadas de eventos pasados. Para valorar solvencia se deben separar obligaciones comerciales recurrentes, deuda con interés, arrendamientos, impuestos, pensiones, provisiones contingentes y compromisos fuera de balance.

| Pasivo | Significado y cálculo | Por qué importa | Una cifra alta o baja puede indicar |
|---|---|---|---|
| Cuentas por pagar | Compras devengadas aún no pagadas; suele medirse al costo amortizado | Representa crédito de proveedores y ciclo de conversión | Alto: puede financiar NWC; si aumenta por pago tardío, puede indicar estrés |
| Gastos acumulados y provisiones de corto plazo | Obligaciones de servicios, vacaciones, garantías, litigios y otros estimados | Muestran costos reconocidos pero aún no pagados | Alto: obligación o provisión; demasiado alto: estimaciones pueden ser optimistas |
| Ingresos diferidos | Cobros o facturación recibida antes de reconocer el derecho completo | Indica obligaciones de desempeño futuro, no beneficio ya reconocido | Alto: prepago favorable si se entrega; si hay cancelaciones, la calidad cae |
| Deuda corriente | Principal, cupón y otras partes exigibles en corto plazo | Muestra presión de liquidez y refinanciación | Alta: vencimientos concentrados; baja: disciplina o falta de acceso a crédito |
| Provisiones contingentes | Estimaciones de salidas futuras, normalmente inciertas al cierre | Reflejan litigios, garantías, contingencias o riesgos de operación | Alta: puede consumir caja; baja: no implica que no exista riesgo fuera de balance |
| Deuda no corriente | Principal y costos exigibles después del ciclo normal | Permite financiar capacidad y apalancamiento | Alta: más riesgo; baja: menor riesgo o menor capacidad de inversión |
| Arrendamientos | Obligación de pago por usar activos; IFRS 16 reconoce pasivo en la mayoría de los casos | Se compara con CapEx, deuda y EBITDA de forma coherente | Alto: deuda operativa; bajo: menor uso de arrendamientos, no necesariamente menor capacidad |
| Impuestos diferidos | Obligaciones fiscales futuras por diferencias temporales | Afectan CFO, EBT, NOPAT e impuestos pagados | Alto: presión fiscal futura; puede reflejar diferencias que se revertirán |
| Pensiones y otras obligaciones | Provisiones, planes definidos, rehabilitaciones, litigios y compromisos | Obligan a asignar caja futura | Alto: pasivo económico; pequeño: no elimina contingencias futuras |

#### Ficha de 13 puntos: deuda, deuda neta y apalancamiento

1. **Nombre:** deuda bruta, debt, deuda neta, net debt y deuda similar.
2. **Para qué sirve:** identifica financiación con interés, mide obligaciones netas de efectivo y compara apalancamiento con la capacidad de generar beneficios.
3. **Variables:** `D` = deuda con interés; `L` = arrendamientos y otras obligaciones similares; `C` = efectivo e inversiones elegibles; `ND = D − C`; `NDa = D + L − C`.
4. **Fórmula matemática:** `Deuda financiera remunerada = préstamos + bonos + overdrafts + deuda similar`; `Reclamaciones preferentes o híbridas = acciones preferentes y otros instrumentos`; `Deuda-like para EV = deuda remunerada + preferentes + arrendamientos + pensiones, según criterio`; `Deuda neta = Deuda financiera remunerada − Efectivo`; `Deuda neta ajustada = Deuda remunerada + Arrendamientos − Efectivo`. Las preferentes no se incluyen automáticamente en el denominador de cobertura de intereses ni en el coste de deuda fiscal.
5. **Pasos:** (1) listar deuda remunerada, preferentes, arrendamientos y deuda similar por separado; (2) separar efectivo restringido; (3) identificar inversiones líquidas; (4) calcular bruto y neto; (5) separar instrumentos con interés, híbridos y provisiones; (6) comparar vencimientos, moneda y tasa.
6. **Ejemplo hipotético:** Aurora tiene deuda con interés de 800, arrendamientos de 200, efectivo de 250 e inversiones de 50. `Net Debt = 800 − 300 = 500`; `Adjusted Net Debt = 800 + 200 − 300 = 700`.
7. **Interpretación:** sin arrendamientos, Aurora debe 500 más que efectivo líquido; incluyendo arrendamientos, la obligación comparable es 700. La elección debe ser explícita.
8. **Valores orientativos dependientes del sector/contexto:** `Deuda neta/EBITDA <2×` puede ser una referencia favorable en ciertos negocios estables, pero no es un umbral universal de solvencia; `2–3×` requiere análisis y `>4×` puede elevar el riesgo. El ciclo, los activos, el flujo, los covenants y el sector mandan. No es válido para bancos sin adaptación.
9. **Ejemplo hipotético favorable:** deuda neta de 500, EBITDA de 300 y deuda ajustada de 700; vencimientos alejados y EBITDA diversificado.
10. **Ejemplo hipotético desfavorable:** deuda ajustada de 1.500 y EBITDA de 200; `7,5×` y posible concentración de vencimientos. El riesgo depende también de la deuda corriente y la tasa.
11. **Errores frecuentes:** olvidar arrendamientos, interés devengado, costos de emisión, acciones preferentes, déficit de pensiones o restar efectivo restringido; confundir valor nominal y libro.
12. **Cuándo no conviene:** para bancos y aseguradoras la deuda es parte del modelo; para subsidiarias reguladas o efectivo no disponible, la deuda neta necesita ajustes específicos.
13. **Otros indicadores:** cobertura de intereses, deuda neta/FCF, vencimientos, mix fijo/variable, tasa media ponderada, runway, margen de covenants y FCF después de dividendos.

### 3.2.3 Patrimonio neto: financiación permanente y valor residual

El patrimonio neto incluye capital aportado, reservas, diferencias de contabilidad, resultados acumulados y otros componentes. Puede ser positivo, cero o negativo. Un patrimonio negativo no siempre implica insolvencia inmediata, pero sí poca protección frente a pérdidas; uno grande tampoco garantiza calidad si contiene goodwill, revaluaciones o activos no realizables.

| Componente | Significado | Lectura |
|---|---|---|
| Capital social | Aportes de accionistas según la norma jurídica | Mide capital nominal, no valor de mercado |
| Prima de emisión o cuentas de patrimonio | Diferencia entre precio de emisión y nominal, o recursos aportados bajo reglas específicas | Indica financiación histórica, no beneficio del período |
| Reservas | Resultados retenidos, legales u otras acumulaciones | Indica acumulación contable, no caja disponible |
| Resultados acumulados | Beneficios acumulados menos dividendos y otros cargos | Revisar la distribución de caja y la política de retención de beneficios |
| Otro resultado integral | Ganancias o pérdidas que pueden no pasar por beneficio neto | Puede ser volátil y no siempre reciclable |
| Acciones en tesorería | Acciones recompradas y no reemitidas | Reduce patrimonio y puede elevar EPS; comparar por acción |
| Participación no controlante | Parte de subsidiarias no atribuible a la matriz | Incluirla en enterprise value y en el flujo atribuible |

#### Ficha de 13 puntos: patrimonio neto y movimiento del patrimonio

1. **Nombre:** equity, patrimonio neto, book value y movimiento de patrimonio.
2. **Para qué sirve:** mide el valor contable residual y distingue financiación de proveedores de capital, reservas, resultados y otras partidas.
3. **Variables:** `PN_t` = patrimonio final; `PN_{t−1}` = inicial; `NI` = beneficio; `OCI`; dividendos; capital; recompras; NCI.
4. **Fórmula matemática:** `PN_t = PN_{t−1} + NI + OCI + aportes − dividendos − recompras ± transacciones con NCI ± ajustes`.
5. **Pasos:** (1) abrir con el patrimonio anterior; (2) añadir beneficio y OCI; (3) identificar dividendos, recompras y emisiones; (4) separar NCI; (5) conciliar con el balance; (6) revisar el esquema contable.
6. **Ejemplo hipotético:** Aurora comienza con 1.481, gana 94, paga 45 de dividendos y recompra 20; `1.481 + 94 − 45 − 20 = 1.510`.
7. **Interpretación:** el movimiento refleja retención, distribución y financiación, no una valoración de mercado; el book value por acción depende del número de acciones en circulación.
8. **Valores orientativos dependientes del sector/contexto:** el patrimonio es útil para ROE y estabilidad, pero puede estar inflado por revaluaciones o goodwill. Un ROE alto con equity negativo puede ser engañoso.
9. **Ejemplo hipotético favorable:** el patrimonio crece porque el negocio retiene beneficios y genera ROIC, no por revaluación; mantiene deuda moderada.
10. **Ejemplo hipotético desfavorable:** una recompra masiva reduce equity y aumenta ROE, pero deja menos protección frente a shocks; si se compra sobrevaluado, el EPS mejora artificialmente.
11. **Errores frecuentes:** sumar OCI y beneficio dos veces, ignorar NCI, usar acciones de cierre en vez de promedio, mezclar acciones en tesorería y tratar capital nominal como efectivo.
12. **Cuándo no conviene:** para empresas con grandes goodwill o intangibles, el equity contable no representa liquidación; en bancos la solvencia se regula de otra forma.
13. **Otros indicadores:** book value por acción, ROE, ROIC, deuda/equity, crecimiento de resultados acumulados, volatilidad del OCI, número de acciones y calidad del capital.

## 3.3 Income Statement o estado de resultados

El estado de resultados mide ingresos, costos y beneficios devengados durante un período. No es una cuenta bancaria: un ingreso puede no haber generado efectivo y un gasto puede no haber sido pagado todavía. La calidad de los beneficios se debe observar simultáneamente con el balance, el estado de flujos y las notas.

### 3.3.1 Puente del estado de resultados de Aurora

**Ejemplo hipotético del ejercicio finalizado el 31 de diciembre de 2025:**

| Línea | USD m | Relación matemática |
|---|---:|---|
| Revenue neto o ingresos | 2.000 | Punto de partida |
| − COGS o costo de ventas | 1.200 | `2.000 − 1.200` |
| **= Gross Profit o beneficio bruto** | **800** | `Revenue − COGS` |
| − Gastos de venta y administración | 400 | Incluidos en gastos operativos |
| − Investigación y desarrollo | 100 | Incluidos en gastos operativos |
| − Depreciación y amortización | 120 | Incluida en gastos operativos |
| **= Operating Income o beneficio operativo** | **180** | `800 − 400 − 100 − 120` |
| − Intereses y gastos financieros netos | 55 | Coste de la financiación |
| **= EBT o beneficio antes de impuestos** | **125** | `180 − 55` |
| − Impuesto sobre beneficios | 31 | `31/125 = 24,8 %` efectivo |
| **= Net Income o beneficio neto** | **94** | `125 − 31` |
| Weighted average shares | 100 | Millones de acciones equivalentes |
| **EPS básico** | **0,94** | `94/100` |
| EBITDA | 300 | `Operating Income + D&A` |
| NOPAT a tasa fiscal normalizada de 25 % | 135 | `180×(1−0,25)` |

#### Ficha de 13 puntos: Revenue o ingresos

1. **Nombre:** revenue, sales, ventas netas o ingresos.
2. **Para qué sirve:** mide el valor devengado de bienes, servicios y otros beneficios económicos entregados a clientes.
3. **Variables:** `Revenue = ventas brutas − descuentos − devoluciones − rebates − impuestos indirectos no incluidos, según presentación`; no confundir con cobros o facturación.
4. **Fórmula matemática:** `Revenue neto = Ventas − descuentos concedidos − devoluciones − rebates`; `cobros ≠ Revenue` cuando hay crédito, prepago o ingresos diferidos.
5. **Pasos:** (1) identificar moneda y perímetro; (2) separar volumen, precio y mix; (3) conciliar con flujo; (4) revisar contratos; (5) separar crecimiento orgánico, adquirido y por moneda; (6) revisar concentración y devoluciones.
6. **Ejemplo hipotético independiente del puente de estados:** Aurora tiene ventas brutas de `2.120`, concede `80` de descuentos, devuelve `30` y concede `10` de rebates; `Revenue neto = 2.000`. Si se parte de `2.000` de ventas brutas, el Revenue neto sería `1.880`; no se deben mezclar ambos ejemplos.
7. **Interpretación:** los ingresos muestran escala, no rentabilidad; pueden crecer por precio, volumen, mix, adquisición, moneda o política de reconocimiento.
8. **Valores orientativos dependientes del sector/contexto:** 5–15 % puede ser sólido en un negocio maduro; 30 % puede ser normal en una startup pagada por suscripción o en adopción temprana. Compare con mercado y retención.
9. **Ejemplo hipotético favorable:** Revenue crece 12 % por volumen y mix, los clientes recurrentes aumentan, DSO es estable y COGS/ingresos mejora.
10. **Ejemplo hipotético desfavorable:** Revenue crece 20 % por un único cliente a precio de dumping; hay devoluciones, DSO alto y concentración; la escala oculta mala calidad.
11. **Errores frecuentes:** usar ventas brutas, mezclar ingresos, sumar contratos firmados, aplicar un CAGR con bases distintas o consolidar ingresos de una subsidiaria sin el perímetro correcto.
12. **Cuándo no conviene:** no usarlo como sustituto de valor si los márgenes son bajos y el consumo de capital alto; en proyectos y construcción, backlog y cobros pueden importar más.
13. **Otros indicadores:** crecimiento orgánico, Gross Margin, crecimiento a moneda constante, ARPU, churn, ingresos diferidos, LTV/CAC y precio/volumen/mix.

#### Ficha de 13 puntos: COGS y Gross Profit

1. **Nombre:** cost of goods sold, COGS, costo de ventas, Gross Profit y Gross Margin.
2. **Para qué sirve:** muestra cuánto costo se atribuye directamente a generar ingresos y cuánto queda para cubrir gastos operativos, estructura y beneficio.
3. **Variables:** `COGS`; `Gross Profit = Revenue − COGS`; `Gross Margin = Gross Profit/Revenue`.
4. **Fórmula matemática:** `Gross Profit = Revenue − COGS`; `Gross Margin = (Revenue−COGS)/Revenue×100`.
5. **Pasos:** (1) clasificar costes directos e indirectos; (2) incluir transporte y servicios según la norma; (3) separar D&A y estructura; (4) calcular Gross Profit; (5) dividir por Revenue; (6) comparar con pares, mix, inflación y moneda.
6. **Ejemplo hipotético:** Aurora tiene Revenue 2.000 y COGS 1.200; `Gross Profit = 800`; `Gross Margin = 40 %`.
7. **Interpretación:** por cada dólar de venta, 0,60 se atribuye a COGS y 0,40 queda antes de gastos operativos; el mix puede cambiar el margen.
8. **Valores orientativos dependientes del sector/contexto:** distribución suele tener márgenes brutos bajos; software, propiedad intelectual y servicios pueden ser altos. Un margen de 10 % puede ser excelente en un sector y débil en otro.
9. **Ejemplo hipotético favorable:** el margen bruto sube de 36 % a 40 % por mejor mix, compras y precios, sin reducir calidad; EBIT y CFO mejoran.
10. **Ejemplo hipotético desfavorable:** Revenue crece, pero el margen cae de 40 % a 28 % por descuentos, fletes e inflación; Gross Profit puede caer.
11. **Errores frecuentes:** no separar COGS de SG&A, incluir I+D o D&A con criterios incompatibles, olvidar devoluciones o comparar bases desiguales.
12. **Cuándo no conviene:** no usarlo aislado si hay controles de inventario, canal, valor de vida de cliente o distinta norma; complementar con caja y capital.
13. **Otros indicadores:** margen EBITDA, margen operativo, Gross Profit/FCF, DIO, DPO, precio/mix, contribución unitaria y rotación.

#### Ficha de 13 puntos: Operating Income y EBIT

1. **Nombre:** Operating Income, beneficio operativo y EBIT, beneficio antes de intereses e impuestos.
2. **Para qué sirve:** mide el resultado de las operaciones antes de la estructura de financiación y, según definición, antes de impuestos.
3. **Variables:** `Operating Income = Revenue − COGS − Operating Expenses`; `EBIT = EBT + net interest expense` en muchas reconciliaciones.
4. **Fórmula matemática:** `Operating Income = Gross Profit − SG&A − I+D − D&A ± partidas operativas`; `EBIT aproximado = Net Income + impuestos + costos financieros netos`.
5. **Pasos:** (1) identificar qué considera la entidad operación; (2) separar D&A, reestructuración y ajustes; (3) reconstruir EBIT desde EBT; (4) revisar partidas no operativas; (5) calcular margen; (6) comparar con caja y capital.
6. **Ejemplo hipotético:** Aurora presenta `Operating Income = 180`; desde beneficio neto, `EBIT aproximado = 94 + 31 + 55 = 180`.
7. **Interpretación:** 180 es el resultado operativo antes de financiación e impuestos; no equivale a EBITDA ni a caja.
8. **Valores orientativos dependientes del sector/contexto:** márgenes de 5–15 % pueden ser normales en retail o industria; 25 % o más pueden ser posibles en software o propiedad intelectual, pero no son universales.
9. **Ejemplo hipotético favorable:** EBIT sube de 140 a 180, el margen de 7 % a 9 % y CFO/EBIT supera 1; la rentabilidad se convierte en caja.
10. **Ejemplo hipotético desfavorable:** EBIT cae a 20 por ventas menores, inflación y reestructuración; el apalancamiento convierte el descenso en pérdida neta.
11. **Errores frecuentes:** llamar EBIT a todo beneficio antes de impuestos, excluir restructuring sin explicar, anualizar un trimestre o mezclar EBIT con CFO.
12. **Cuándo no conviene:** no usarlo si las partidas “excepcionales” se repiten o la entidad capitaliza la mayoría de costes; normalizar con un criterio explícito.
13. **Otros indicadores:** EBIT margin, NOPAT, EBIT/FCF, ROIC, apalancamiento operativo, EBITDA margin y conversión de caja.

#### Ficha de 13 puntos: EBITDA

1. **Nombre:** earnings before interest, taxes, depreciation and amortization, EBITDA.
2. **Para qué sirve:** compara rentabilidad operativa antes de intereses, impuestos, D&A y, según el cálculo, otros elementos; es una medida aproximada, no un flujo de caja.
3. **Variables:** `EBITDA = EBIT + D&A` o `Net Income + impuestos + intereses + D&A`; en la práctica pueden existir ajustes discrecionales.
4. **Fórmula matemática:** `EBITDA = EBIT + D&A`; `Adjusted EBITDA = EBITDA + restructuring + stock comp + otros ajustes`, si así se define.
5. **Pasos:** (1) identificar EBIT; (2) identificar D&A; (3) separar depreciación, amortización, arrendamientos y ajustes; (4) reconciliar; (5) revisar adquisiciones y SBC; (6) comparar con CFO y CapEx.
6. **Ejemplo hipotético:** Aurora tiene EBIT 180 y D&A 120; `EBITDA = 300`; margen EBITDA = `300/2.000 = 15 %`.
7. **Interpretación:** 300 mide resultado antes de D&A; no significa que sean caja, pues pueden ser necesarios 200 de CapEx y cambios de NWC.
8. **Valores orientativos dependientes del sector/contexto:** 10–20 % puede ser normal en empresas maduras; 30 % en software no es necesariamente superior a 8 % en un negocio con mucho menos capital. Ajustar arrendamientos, SBC y M&A.
9. **Ejemplo hipotético favorable:** EBITDA 300 crece, el CapEx de mantenimiento está cerca de D&A, el capital circulante está controlado y FCF es positivo.
10. **Ejemplo hipotético desfavorable:** EBITDA 300 se obtiene añadiendo 80 de reestructuración y 20 de SBC; el CapEx de 200 deja muy poco efectivo disponible.
11. **Errores frecuentes:** sumar D&A dos veces, usar EBIT mal calculado, añadir gastos recurrentes, ignorar SBC o arrendamientos y tratar D&A como caja.
12. **Cuándo no conviene:** en negocios intensivos en capital, con arrendamientos, SaaS con SBC material o durante adquisiciones; FCF, Owner Earnings y NOPAT son preferibles.
13. **Otros indicadores:** EBITDA margin, deuda neta/EBITDA, CFO/EBITDA, CapEx/EBITDA, FCF/EBITDA, EBITDA ajustado por arrendamientos y ROIC.

#### Ficha de 13 puntos: EBT o beneficio antes de impuestos

1. **Nombre:** earnings before tax, EBT, pretax income o beneficio antes de impuestos.
2. **Para qué sirve:** mide el beneficio después de ingresos, costos operativos e intereses, pero antes del gasto de impuestos.
3. **Variables:** `EBT = EBIT − net finance cost − other non-operating expense + other non-operating income`; `Tax Expense`; `NI = EBT − Tax Expense`.
4. **Fórmula matemática:** `EBT = ingresos − todos los gastos antes de impuestos`; `tasa efectiva = Tax Expense/EBT`.
5. **Pasos:** (1) partir de EBIT; (2) identificar intereses; (3) separar partidas no operativas; (4) calcular EBT; (5) calcular tasa efectiva; (6) normalizar partidas atípicas.
6. **Ejemplo hipotético:** Aurora tiene EBIT 180, intereses 55 y ningún otro resultado relevante; `EBT = 125`; impuesto 31; `Net Income = 94`; tasa efectiva = `24,8 %`.
7. **Interpretación:** 125 es el resultado antes de impuestos y 94 después de 31 de impuesto; los intereses ya redujeron el beneficio disponible.
8. **Valores orientativos dependientes del sector/contexto:** no existe un rango universal de EBT. Una tasa efectiva baja puede deberse a ganancias exentas, créditos o pérdidas y no ser sostenible.
9. **Ejemplo hipotético favorable:** EBT 125 crece, la tasa efectiva es estable y los intereses se pagan con caja; existe margen para CapEx, deuda y dividendos.
10. **Ejemplo hipotético desfavorable:** EBT cae de 125 a 15 por aumento de EBIT negativo, intereses y menor beneficio; el servicio de deuda queda expuesto.
11. **Errores frecuentes:** mezclar EBT con Net Income, omitir otros ingresos, usar tasa nominal como efectiva o olvidar que el impuesto diferido no es impuesto pagado.
12. **Cuándo no conviene:** no usarlo para medir capacidad de deuda con ganancias binarias o pérdidas financieras volátiles; reconstruir EBT recurrente y los impuestos pagados.
13. **Otros indicadores:** margen neto, tasa fiscal, cobertura de intereses, NOPAT, CFO/EBT, impuestos pagados/EBT y EBT normalizado.

#### Ficha de 13 puntos: Net Income o beneficio neto

1. **Nombre:** net income, net earnings, beneficio neto o resultado del ejercicio.
2. **Para qué sirve:** mide ganancia o pérdida después de gastos, intereses e impuestos, incluyendo las partidas del período.
3. **Variables:** `NI = beneficio neto`; `NI consolidado`; `NCI`; dividendos preferentes; `EPS = beneficio disponible para comunes / weighted shares`.
4. **Fórmula matemática:** `Beneficio neto consolidado = EBT − Tax Expense`; `Beneficio atribuible a la matriz = beneficio neto consolidado − asignación a NCI ± ajustes`; `Beneficio disponible para comunes = beneficio atribuible − dividendos preferentes`, cuando corresponda.
5. **Pasos:** (1) partir de EBT; (2) separar impuestos corrientes y diferidos; (3) identificar NCI y preferentes; (4) identificar partidas atípicas; (5) conciliar con CFO y patrimonio; (6) comparar con EPS, FCF y ROE.
6. **Ejemplo hipotético:** Aurora tiene EBT 125, impuesto 31, NCI 0 y dividendos preferentes 0; `Net Income = 94`.
7. **Interpretación:** 94 es beneficio contable atribuible; no implica que haya 94 de caja disponible ni que todos sean recurrentes.
8. **Valores orientativos dependientes del sector/contexto:** margen neto de 3–10 % puede ser normal; servicios pueden superar 20 % y comercio o manufactura pueden ser menores. Calidad y capital importan más que el porcentaje aislado.
9. **Ejemplo hipotético favorable:** NI 94 crece con Revenue, EBIT y CFO; `CFO/NI = 3,18×` y `FCF/NI = 1,05×` en Aurora, explicados por D&A y liberación de NWC.
10. **Ejemplo hipotético desfavorable:** NI 94 depende de venta de activo o ganancia legal, mientras CFO es 20 y FCF −30; el beneficio normal es inferior.
11. **Errores frecuentes:** ignorar NCI, sumar D&A dos veces, no separar preferentes, llamar beneficio neto al resultado antes de NCI sin aclaración o usar beneficios que no representan efectivo.
12. **Cuándo no conviene:** no usarlo aislado en ciclos de materias primas, M&A, litigios binarios o ganancias de valor razonable; normalizar y reconciliar con Owner Earnings y FCFF.
13. **Otros indicadores:** EPS, ROE, ROIC, CFO/NI, FCF/NI, devengos, conversión de caja, margen neto normalizado y calidad de beneficios.

#### Ficha de 13 puntos: EPS, beneficio por acción y dilución

1. **Nombre:** earnings per share, EPS o BPA.
2. **Para qué sirve:** distribuye el beneficio atribuible a accionistas ordinarios entre un número relevante de acciones equivalentes.
3. **Variables:** `NI_ordinaria`; `WABS` = weighted average basic shares; acciones potenciales; `EPS básico`; `EPS diluido`.
4. **Fórmula matemática:** `EPS básico = beneficio disponible para ordinarias / WABS`; `EPS diluido = beneficio Numerador diluido / WADS`. `WADS` no es simplemente el número de opciones: las opciones suelen usar el método del tesoro, las convertibles pueden exigir efecto después de impuestos y las acciones contingentes o preferentes tienen reglas distintas. Se aplica la norma contable y se revela el efecto de cada instrumento.
5. **Pasos:** (1) partir de beneficio consolidado y atribuir a la matriz; (2) reconciliar NCI; (3) restar preferentes; (4) usar el promedio ponderado; (5) revisar divisiones, acciones en tesorería y potencial dilución; (6) calcular básico y diluido por separado; (7) comparar con FCF por acción.
6. **Ejemplo hipotético:** Aurora tiene 94 de beneficio y 100 millones de acciones promedio; `EPS = 0,94`. Con 102 millones de acciones dilutivas equivalentes, `EPS diluido = 94/102 = 0,92`.
7. **Interpretación:** 0,94 representa beneficio por acción; no dice si el beneficio se cobró en caja ni si la acción está barata.
8. **Valores orientativos dependientes del sector/contexto:** no hay un EPS correcto universal; compare con el crecimiento, número de acciones, capital empleado, ROIC y FCF por acción.
9. **Ejemplo hipotético favorable:** EPS crece 12 %, Net Income 14 %, acciones diluidas caen 2 % y FCF por acción 11 %; la mejora no es solo recompra.
10. **Ejemplo hipotético desfavorable:** EPS crece 20 % porque las acciones caen 30 % mediante recompra sobrevaluada, mientras NI y FCF por acción bajan.
11. **Errores frecuentes:** usar cierre de acciones, ignorar potencial dilución, no restar preferentes, mezclar básico y diluido, ignorar divisiones de acciones o acciones en tesorería.
12. **Cuándo no conviene:** no usarlo aislado con ganancias binarias, deuda convertible compleja o SBC material; usar acciones totalmente diluidas y métricas por acción de caja.
13. **Otros indicadores:** crecimiento de EPS diluido, FCF/share, book value/share, ROE, share count, SBC, buyback yield y deuda neta por acción.

## 3.4 Cash Flow Statement o estado de flujos de efectivo

El estado de flujos explica el cambio del efectivo y equivalentes durante el período. En el método indirecto parte del beneficio neto y corrige partidas devengadas; en el método directo clasifica cobros y pagos operativos. Ambos deben reconciliar con el cambio de caja del balance. Una empresa puede tener efectivo positivo y, aun así, estar sobreendeudada o descapitalizándose.

### 3.4.1 Clasificación CFO, CFI y CFF

| Flujo | Qué recoge | Ejemplos | Pregunta de control |
|---|---|---|---|
| CFO: cash flow from operating activities | Cobros y pagos necesarios para operar y obtener beneficio | Clientes, proveedores, salarios, impuestos e intereses pagados | ¿El beneficio se convierte en caja? |
| CFI: cash flow from investing activities | Compra y venta de activos e inversiones de largo plazo | CapEx, adquisiciones, ventas de planta e inversiones financieras | ¿Se invierte para crecer o mantener? |
| CFF: cash flow from financing activities | Financiación con acreedores y accionistas | Deuda emitida o repagada, acciones, dividendos, recompras y arrendamientos | ¿Cómo se financian activos y distribuciones? |

#### Ficha de 13 puntos: CFO o flujo de efectivo de las operaciones

1. **Nombre:** cash flow from operating activities, CFO o flujo de caja operativo.
2. **Para qué sirve:** mide efectivo generado o consumido por la operación después de cobros, pagos, impuestos e intereses pagados, según la presentación.
3. **Variables:** `CFO = beneficio neto consolidado + cargos no monetarios − ΔNWC operativo ± ajustes operativos`; D&A, SBC, impuestos diferidos y provisiones. La clasificación de intereses pagados debe verificarse en la norma y en la política de presentación: pueden aparecer en CFO o CFF. `ΔNWC = NWC_t − NWC_(t−1)`; una liberación tiene ΔNWC negativo.
4. **Fórmula matemática:** `CFO = NI consolidado + D&A + otros no monetarios − ΔNWC operativo ± ajustes`. Si se parte de beneficio atribuible a la matriz, hay que reconciliar NCI y el perímetro consolidado.
5. **Pasos:** (1) partir del beneficio neto o EBIT reconciliado; (2) añadir D&A; (3) tratar SBC con criterio económico; (4) identificar cambios de NWC; (5) separar partidas atípicas; (6) conciliar con impuestos e intereses pagados; (7) normalizar estacionalidad.
6. **Ejemplo hipotético:** Aurora parte de NI 94, añade D&A 120, SBC 20 e impuesto diferido 10, registra liberación neta de NWC de 85 y deduce 30 por un pago de reestructuración no recurrente: `CFO = 94 + 120 + 20 + 10 + 85 − 30 = 299`.
7. **Interpretación:** 299 es efectivo operativo del período; incluye liberación de NWC y no es necesariamente el CFO recurrente.
8. **Valores orientativos dependientes del sector/contexto:** `CFO/NI > 1` puede ser favorable en un negocio estable, y un valor bajo merece investigación, pero no existe un umbral universal; en software, SaaS, inventarios, M&A o crecimiento estacional la explicación puede ser distinta. Usar varios años y saldos promedio.
9. **Ejemplo hipotético favorable:** CFO positivo en crecimiento, DSO estable, inventario bien rotado y NWC controlado; la diferencia con NI proviene principalmente de D&A.
10. **Ejemplo hipotético desfavorable:** CFO cae por aumento de cuentas por cobrar e inventarios o pagos extraordinarios; el balance crece, pero la caja se consume.
11. **Errores frecuentes:** sumar D&A a una cifra ya basada en efectivo, olvidar SBC, tratar cambios de provisiones como caja, no revisar partidas atípicas o sumar NI atribuible y NCI incorrectamente.
12. **Cuándo no conviene:** un único CFO de cierre no representa negocios estacionales; en bancos y financieras la lógica de flujo operativo es diferente.
13. **Otros indicadores:** CFO/NI, CFO/EBITDA, FCF/CFO, impuestos pagados, días de NWC, devengos, intereses pagados y CFO normalizado.

#### Ficha de 13 puntos: CFI o flujo de efectivo de inversión

1. **Nombre:** cash flow from investing activities, CFI o flujo de efectivo de inversión.
2. **Para qué sirve:** muestra cuánto efectivo se destina o recibe por activos, inversiones y adquisiciones que sostienen o expanden el negocio.
3. **Variables:** `CFI = −CapEx − adquisiciones − inversiones netas + ventas de activos + inversiones recuperadas + dividendos recibidos`, según presentación.
4. **Fórmula matemática:** `CFI = entradas de inversión − salidas de inversión`; `CapEx tangible neto = compras tangibles − ventas tangibles`; `CapEx amplio neto = compras tangibles + intangibles − ventas de activos`.
5. **Pasos:** (1) listar compras de activos; (2) separar adquisiciones, crecimiento y mantenimiento; (3) añadir ventas; (4) identificar inversiones; (5) normalizar operaciones no recurrentes; (6) conectar CFI con D&A, intangibles, goodwill y deuda.
6. **Ejemplo hipotético:** Aurora compra 200 de PP&E y 20 de intangibles y vende activos por 25; `CFI = −200 − 20 + 25 = −195`.
7. **Interpretación:** 195 fue la inversión neta; un CFI negativo no es malo si financia capacidad con retornos superiores al coste de capital.
8. **Valores orientativos dependientes del sector/contexto:** CFI/ingresos puede ser cercano a cero en software o elevado en semiconductores, energía, redes y manufactura; importa el retorno incremental.
9. **Ejemplo hipotético favorable:** CapEx 200 con crecimiento moderado, D&A 120, capacidad utilizada y FCF positivo; CFI negativo pero productivo.
10. **Ejemplo hipotético desfavorable:** CFI −500 por adquisición a múltiplo elevado, estancamiento de ingresos, deterioro y bajo ROIC.
11. **Errores frecuentes:** no separar crecimiento de mantenimiento, tratar adquisición pagada como CapEx operativo, reducir CapEx por ventas sin separar reposición o ignorar IFRS 16/US GAAP.
12. **Cuándo no conviene:** no medir capacidad de caja solo con CFI; incluye adquisiciones, inversiones y desfases de reconocimiento, por lo que debe combinarse con CapEx y capacidad.
13. **Otros indicadores:** mantenimiento de CapEx, CapEx/D&A, utilización de capacidad, ROIC, rotación, múltiplo de adquisición y FCF posterior.

#### Ficha de 13 puntos: CFF o flujo de efectivo de financiación

1. **Nombre:** cash flow from financing activities, CFF o flujo de financiación.
2. **Para qué sirve:** mide entradas y salidas de efectivo relacionadas con deuda, equity, dividendos, recompras y otras transacciones de capital.
3. **Variables:** `CFF = deuda emitida − deuda repagada + equity emitido − caja utilizada en recompras de acciones − dividendos ± principal de arrendamientos ± otros flujos`. Las acciones en tesorería son una cuenta de patrimonio; no son una salida de efectivo por sí mismas.
4. **Fórmula matemática:** `CFF = entradas de financiación − salidas de financiación`; no confundir cambio contable de deuda con flujo de efectivo.
5. **Pasos:** (1) listar emisiones y pagos; (2) separar principal e intereses; (3) identificar dividendos y recompras; (4) incluir principal de arrendamientos según presentación; (5) comprobar movimientos de equity; (6) revisar covenants y vencimientos.
6. **Ejemplo hipotético:** Aurora emite 100, repaga 50, paga 45 de dividendos, recompra 20 de acciones y amortiza 35 del principal del arrendamiento; `CFF = −50`.
7. **Interpretación:** Aurora presenta saldo de financiación negativo; puede ser disciplina de repago o distribución excesiva, no necesariamente deterioro.
8. **Valores orientativos dependientes del sector/contexto:** CFF positivo puede financiar crecimiento o tapar CFO negativo; CFF negativo puede ser desendeudamiento o distribución insostenible. El propósito importa más que el signo.
9. **Ejemplo hipotético favorable:** CFO 299, inversión 220 y CFF −50 por repago y distribución; deuda neta moderada y política de dividendos sostenible.
10. **Ejemplo hipotético desfavorable:** CFO −40, deuda emitida 300, dividendos 100 y recompras; la caja temporal oculta una estructura frágil.
11. **Errores frecuentes:** incluir intereses en CFF, tratar toda deuda como caja, no separar dividendos de recompras, omitir principal de arrendamientos o capital minoritario.
12. **Cuándo no conviene:** no usar CFF como medida de rentabilidad ni suponer que deuda nueva crea valor; compararlo con CFO, CapEx y vencimientos.
13. **Otros indicadores:** cambio de deuda neta, deuda emitida y vencida, proporción de dividendos, cobertura de dividendos, rendimiento de la recompra, cobertura de intereses y apalancamiento.

### 3.4.2 Reconciliación completa del estado de flujos de Aurora

**Ejemplo hipotético:**

| Estado de flujos | USD m |
|---|---:|
| Beneficio neto | 94 |
| D&A | +120 |
| Compensación basada en acciones | +20 |
| Impuesto diferido | +10 |
| Cambio en cuentas por cobrar | +20 |
| Cambio en inventarios | +10 |
| Cambio en cuentas por pagar | +25 |
| Cambio en gastos acumulados | +20 |
| Cambio en ingresos diferidos | +10 |
| Pago de reestructuración no recurrente | −30 |
| Otros ajustes operativos | 0 |
| **CFO** | **299** |
| CapEx de propiedades, planta y equipo | −200 |
| Adquisiciones de intangibles | −20 |
| Venta de activos | +25 |
| **CFI** | **−195** |
| Deuda emitida | +100 |
| Deuda repagada | −50 |
| Dividendos | −45 |
| Recompra de acciones | −20 |
| Principal de arrendamientos | −35 |
| **CFF** | **−50** |
| **Cambio neto de efectivo** | **54** |
| Efectivo al inicio | 196 |
| **Efectivo al final** | **250** |

La suma `299 − 195 − 50 = 54` coincide con el aumento de efectivo entre 196 y 250. CFO no equivale a Net Income porque incluye D&A, SBC, impuestos diferidos y NWC; CFI no equivale a CapEx porque también incluye intangibles y ventas; CFF no equivale a deuda porque incluye equity y distribución.

#### Ficha de 13 puntos: CapEx o inversión de capital

1. **Nombre:** capital expenditures, CapEx, inversiones de capital o compras de activos de larga duración.
2. **Para qué sirve:** mide efectivo invertido en activos que mantienen o amplían la capacidad productiva, incluidos ciertos intangibles.
3. **Variables:** `CapEx = compras de PP&E + software/intangibles capitalizados, según definición`; `CapEx neto`; mantenimiento; crecimiento.
4. **Fórmula matemática:** `CapEx bruto = salida de efectivo por activos de larga duración`; `CapEx tangible neto = compras tangibles − ventas de activos tangibles`; `CapEx amplio neto = compras tangibles + intangibles − ventas de activos`; `CapEx de mantenimiento` es el promedio requerido para mantener capacidad.
5. **Pasos:** (1) revisar flujo y notas; (2) identificar activos tangibles, software y arrendamientos; (3) separar mantenimiento, crecimiento y reemplazo; (4) capitalizar sólo si procede; (5) comparar D&A y capacidad; (6) normalizar adquisiciones.
6. **Ejemplo hipotético:** Aurora compra 200 de equipos y 20 de intangibles y vende activos por 25; `CapEx tangible neto = 200 − 25 = 175`; `CapEx amplio neto = 200 + 20 − 25 = 195`. El CFI es `−195` si sólo existen esos flujos.
7. **Interpretación:** no toda compra crea crecimiento; parte repone capacidad y evita obsolescencia. Un CapEx alto puede crear barreras o carga de mantenimiento.
8. **Valores orientativos dependientes del sector/contexto:** manufactura y servicios públicos pueden tener CapEx/ingresos de 4–12 %, software 1–5 %, energía o centros de datos más; usar capacidad y empresas comparables.
9. **Ejemplo hipotético favorable:** CapEx 200 incluye 100 de mantenimiento y 100 de expansión; EBITDA 300, CFO 299 y ROIC post-expansión suben.
10. **Ejemplo hipotético desfavorable:** CapEx 500 durante dos años mientras Revenue cae, CapEx/D&A supera 3×, aparece deterioro y FCF negativo.
11. **Errores frecuentes:** confundir CapEx con D&A, no separar ventas, sumar adquisiciones a CapEx, olvidar software capitalizado o usar CapEx contable en vez de salida de caja.
12. **Cuándo no conviene:** no usar un único año de CapEx en negocios con ciclos de inversión irregulares; normalizar mantenimiento, crecimiento y reemplazo.
13. **Otros indicadores:** CapEx/D&A, mantenimiento/ingresos, crecimiento/ingresos, capacidad, ROIC, FCF posterior a CapEx y CapEx por cliente nuevo.

#### Ficha de 13 puntos: FCF histórico o flujo de caja libre

1. **Nombre:** free cash flow histórico, FCF o flujo de caja libre.
2. **Para qué sirve:** aproxima el efectivo que queda después de la operación y las inversiones necesarias, con una definición explícita.
3. **Variables:** `CFO`, `CapEx`, intangibles, adquisiciones, arrendamientos y otros elementos; definición de este manual: `FCF_t = CFO_t − CapEx_t`.
4. **Fórmula matemática:** `FCF histórico apalancado = CFO − CapEx`; variante amplia: `FCF amplio histórico = CFO − CapEx tangible − software capitalizado − inversiones no corrientes requeridas`.
5. **Pasos:** (1) fijar definición; (2) obtener CFO; (3) identificar CapEx bruto; (4) decidir si intangibles, arrendamientos y adquisiciones entran; (5) calcular; (6) normalizar NWC y estacionalidad; (7) distinguir FCF histórico de FCFF.
6. **Ejemplo hipotético:** Aurora tiene CFO 299 y CapEx tangible 200; el FCF histórico apalancado es 99. Incluyendo intangibles de 20, el FCF histórico amplio es 79.
7. **Interpretación:** 99 es caja histórica después de operación y activos tangibles; no es necesariamente caja disponible para todos los proveedores de capital ni FCFF para DCF.
8. **Valores orientativos dependientes del sector/contexto:** FCF margin de 5–15 % puede ser sólido en empresas maduras; 20 % o más puede reflejar una estructura con pocos activos o márgenes máximos. FCF negativo puede ser fase de inversión o deterioro.
9. **Ejemplo hipotético favorable:** FCF 99, Net Income 94 y FCF/NI 1,05×; CFO positivo en varios años y CapEx cercano a mantenimiento.
10. **Ejemplo hipotético desfavorable:** Revenue sube y CFO es 299, pero CapEx amplio de 350 da FCF amplio −51; el crecimiento todavía no crea caja.
11. **Errores frecuentes:** usar EBITDA menos CapEx, llamar FCF a CFO sin CapEx, omitir software o arrendamientos, no restar CapEx de crecimiento requerido y usar un año estacional.
12. **Cuándo no conviene:** en extracción, construcción irregular, M&A, ventas de activos o empresas con FCF negativo estratégico; usar escenarios, Owner Earnings y FCFF.
13. **Otros indicadores:** FCF margin, CFO/NI, FCF/EBITDA, CapEx/ingresos, FCF por acción, deuda/FCF, cobertura de dividendos y ROIC.

#### Ficha de 13 puntos: FCFF o flujo de caja libre al capital total

1. **Nombre:** free cash flow to the firm, FCFF, flujo para la empresa o flujo basado en NOPAT.
2. **Para qué sirve:** estima efectivo disponible para todos los proveedores de capital, con independencia de la financiación, para el flujo de efectivo descontado con WACC.
3. **Variables:** `EBIT`; tasa fiscal operativa; `NOPAT = EBIT×(1−t)`; D&A; CapEx; `ΔNWC`; SBC económico y ajustes.
4. **Fórmula matemática:** `FCFF = EBIT×(1−t) + D&A − CapEx − ΔNWC`; forma ajustada desde CFO: `FCFF ≈ CFO − CapEx + interés después de impuestos ± ajustes no operativos y de arrendamientos`.
5. **Pasos:** (1) normalizar EBIT; (2) aplicar tasa fiscal operativa; (3) añadir D&A; (4) restar CapEx amplio; (5) restar aumento de NWC; (6) decidir el tratamiento de arrendamientos y SBC; (7) reconciliar con FCF histórico y WACC.
6. **Ejemplo hipotético:** Aurora tiene EBIT 180, tasa operativa 25 %, D&A 120, CapEx 200 y cambio de NWC −85; `FCFF = 180×0,75 + 120 − 200 − (−85) = 140,0`. Con cifras internas sin redondear, EBT es 125, el impuesto 31,25, NI 93,75, CFO 298,75 y FCF tangible 98,75; el puente desde CFO da `98,75 + 55×0,75 = 140,00`. La tabla redondeada muestra 31, 94, 299 y 99, lo que produce 140,25 si se recalcula con esos enteros; se debe conservar la precisión interna. Si SBC 20 se trata como coste económico, el resultado normalizado es aproximadamente 120.
7. **Interpretación:** aproximadamente 140 es efectivo hipotético antes de financiación, después de impuestos operativos, CapEx y cambio de NWC; no se distribuye automáticamente a proveedores de capital.
8. **Valores orientativos dependientes del sector/contexto:** FCFF no tiene umbral universal; compare con Revenue, EBIT, capital invertido, WACC y crecimiento. Negativo puede ser aceptable si la inversión tiene perspectivas de retorno y financiación controlada.
9. **Ejemplo hipotético favorable:** FCFF positivo en varios años, CapEx de crecimiento financiable internamente y ROIC superior a WACC.
10. **Ejemplo hipotético desfavorable:** el cálculo parte de EBIT normalizado inexistente, omite CapEx de crecimiento o cuenta SBC dos veces; produce un FCFF alto que no se convierte en caja.
11. **Errores frecuentes:** descontar CFO−CapEx directamente a WACC, no ajustar impuestos, ignorar ΔNWC, mezclar arrendamientos IFRS 16 con US GAAP o tratar FCFF como FCFE.
12. **Cuándo no conviene:** no usarlo para medir cobertura de dividendos ni caja disponible para proveedores de capital sin reconciliar norma, arrendamientos, partidas atípicas y ciclo.
13. **Otros indicadores:** NOPAT, ROIC, WACC, FCFF/Revenue, FCFF/EBIT, tasa de reinversión, CapEx de crecimiento y creación de valor.

### 3.4.3 FCF histórico frente a FCFF: no son el mismo flujo

| Tema | FCF histórico `CFO−CapEx` | FCFF `NOPAT+D&A−CapEx−ΔNWC` |
|---|---|---|
| Punto de partida | CFO, que parte de Net Income y contiene intereses pagados | EBIT, antes del costo financiero neto |
| Tratamiento del interés | Ya afecta al resultado y, por tanto, al CFO | Se excluye del flujo y se compensa mediante WACC |
| Tratamiento fiscal | Usa impuestos reconocidos o pagados y puede incluir desfases temporales | Usa NOPAT con tasa operativa normalizada, que puede diferir del efectivo |
| NWC | El cambio ya está dentro de CFO | Se presenta explícitamente como `−ΔNWC` |
| Arrendamientos y SBC | Depende de norma y política; CFO puede añadir SBC | Debe normalizarse; IFRS 16 cambia CapEx, arrendamientos y EV |
| Uso en DCF | No descontar a WACC sin ajuste explícito | Adecuado para WACC |
| Distribución a proveedores de capital | Aproximación de caja después de deuda e intereses pagados, pero no FCFE puro | Flujo de la empresa; se distribuye mediante valoración de deuda y equity |
| CapEx | Puede ser tangible, amplio o neto según definición | Debe ser el CapEx requerido, incluyendo crecimiento y mantenimiento |

**Reconciliación hipotética entre ambas medidas de Aurora:**

- FCF histórico amplio con cifras internas: `CFO 298,75 − CapEx tangible 200 = 98,75`.
- Añadir interés después de impuestos: `55×(1−0,25) = 41,25`; `FCFF desde CFO = 98,75 + 41,25 = 140,00`.
- FCFF desde EBIT: `135 + 120 − 200 + 85 = 140,00`; ambos puentes coinciden con precisión interna. Los enteros 299, 94 y 31 de la tabla son sólo presentación redondeada.
- Si se resta SBC 20 como coste económico recurrente, el FCFF normalizado es aproximadamente `120`; el FCF histórico no debe llamarse caja disponible para proveedores de capital sin explicar esa decisión.

> **Regla de coherencia:** si el flujo histórico contiene cargo de intereses porque CFO parte de Net Income, no descontar ese FCF al WACC sin convertirlo a una aproximación de FCFF. Para valorar el equity se usa FCFE o se descuenta EV y se resta deuda neta.

### 3.4.4 FCFE o flujo de caja disponible para el patrimonio

El FCFE parte del beneficio disponible para acciones ordinarias y llega al efectivo después del servicio de deuda y de los flujos de financiación que corresponde explicitar.

1. **Nombre.** Free Cash Flow to Equity (FCFE) o flujo disponible para el patrimonio.
2. **Uso.** Estimar el efectivo que puede corresponder a los accionistas después del servicio de deuda y de los movimientos de financiación explícitos.
3. **Variables.** Beneficio disponible para comunes; D&A y otros cargos no monetarios; CapEx; ΔNWC; deuda emitida y repagada; equity emitido; recompras; leases y otros flujos financieros.
4. **Fórmula aproximada.** `FCFE ≈ NI común + D&A + otros cargos no monetarios − CapEx − ΔNWC + deuda emitida − deuda repagada + equity emitido − recompras ± principal, leases y otros flujos financieros`.
5. **Pasos.** Identificar el perímetro y el beneficio común; determinar qué líneas ya están en CFO y CapEx; añadir o restar deuda, equity, leases y recompras; normalizar el capital circulante y calcular.
6. **Ejemplo.** Si `NI común=100`, `D&A=20`, `CapEx=40`, `ΔNWC=10` y `Δdeuda neta=5`, el FCFE aproximado es `100+20−40−10+5=75`; no se resta deuda otra vez en el valor.
7. **Interpretación.** Es un flujo para el patrimonio bajo los supuestos indicados; no es un dividendo garantizado.
8. **Rangos y cautelas.** Puede ser negativo durante una inversión financiada; la magnitud debe justificarse.
9. **Señal favorable.** Positivo y recurrente, con cobertura de deuda y distribución y sin depender de una emisión futura.
10. **Señal desfavorable.** Negativo por reinversión o refinanciación; no se debe ocultar como “crecimiento”.
11. **Errores comunes.** Usar beneficio consolidado, omitir emisión de deuda o equity, tratar `CFO−CapEx` como FCFE o restar deuda dos veces.
12. **Cuándo no usarlo.** Cuando no se conocen los movimientos de financiación, la estructura de capital es inestable o el sector tiene restricciones regulatorias que impiden una lectura industrial.
13. **Complementarios.** `K_e`, FCFF/WACC, ROE, Debt/FCF, dilución, leases, capital regulatorio y plan de caja.

La suma depende de qué líneas ya estén incluidas en el CFO, en el CapEx y en el beneficio. `FCFE` se descuenta con el coste del patrimonio y produce Equity Value; no se vuelve a restar deuda en un puente EV–Equity. `FCFF`, en cambio, se descuenta con WACC, produce EV y la deuda se resta una sola vez en el puente. No se debe llamar FCFE a `CFO−CapEx` sin movimientos explícitos de deuda y equity.

#### Ficha de 13 puntos: Owner Earnings

1. **Nombre:** Owner Earnings o beneficios del propietario.
2. **Para qué sirve:** estima la capacidad razonable de generar y distribuir efectivo mientras se mantiene la posición competitiva y el volumen del negocio.
3. **Variables:** `NI`, D&A, otros cargos no monetarios, CapEx de mantenimiento, capital circulante adicional para crecimiento, SBC económico y partidas atípicas.
4. **Fórmula matemática:** `Owner Earnings normalizado = Net Income normalizado + cargos no monetarios que realmente no exigen reposición − CapEx de mantenimiento promedio − capital circulante adicional requerido para crecimiento ± ajustes económicos declarados`. El impuesto diferido no se suma automáticamente: puede representar un pago fiscal futuro. La SBC se analiza como coste económico y dilución, no como una simple adición.
5. **Pasos:** (1) partir del beneficio reportado o normalizado; (2) separar D&A de amortización de adquisiciones; (3) identificar cargos no monetarios y su reversión; (4) no añadir automáticamente todo SBC; (5) estimar CapEx de mantenimiento; (6) identificar NWC adicional; (7) normalizar partidas atípicas; (8) comparar con FCF y FCFF.
6. **Ejemplo hipotético:** Aurora tiene NI 94, D&A 120, mantenimiento 100 y NWC adicional normalizado 35. Si todo el D&A requiere reposición y no hay otros ajustes, `Owner Earnings = 94 + 120 − 100 − 35 = 79`. Si sólo 90 de la D&A tienen reposición económica y existe un ajuste no monetario justificado de 5, el resultado sería `88`; el tratamiento del impuesto diferido y la SBC debe justificarse por separado.
7. **Interpretación:** 79 —o 88 bajo el ajuste no monetario explícito del ejemplo— aproxima la caja generadora disponible después de mantener capacidad y financiar crecimiento requerido; es una estimación, no un dividendo garantizado.
8. **Valores orientativos dependientes del sector/contexto:** compare con beneficio, FCF, mantenimiento, NWC y crecimiento. Owner Earnings persistentemente superior al FCF puede excluir inversión necesaria; persistentemente inferior puede ser una normalización conservadora.
9. **Ejemplo hipotético favorable:** Owner Earnings 88 bajo un ajuste económico justificado, FCF amplio 79, NI 94 y ROIC superior a WACC; la diferencia se explica por momento y definición.
10. **Ejemplo hipotético desfavorable:** Owner Earnings 140 porque solo resta 30 de mantenimiento aunque la empresa gasta 200 y depende de reposición; el valor intrínseco queda inflado.
11. **Errores frecuentes:** restar todo CapEx de crecimiento y todo NWC sin modelar, añadir beneficios no recurrentes, usar un año pico, no tratar SBC o confundir Owner Earnings con dividendo y FCFF.
12. **Cuándo no conviene:** en empresas cuyo crecimiento requiere I+D continuo o en negocios con CapEx muy irregular; usar un rango y escenarios.
13. **Otros indicadores:** crecimiento de Owner Earnings, Owner Earnings/NI, Owner Earnings/ingresos, FCF/Owner Earnings, mantenimiento, reinversión, ROIC y WACC.

## 3.5 Calidad de beneficios, trabajo capital, estacionalidad y normas

### 3.5.1 Calidad de beneficios o earnings quality

La calidad de beneficios evalúa cuánto del beneficio reportado es económico, recurrente y convertible en efectivo. No se determina por el tamaño de Net Income, sino por su origen y su relación con el balance y el flujo.

| Prueba | Resultado potencialmente favorable | Resultado potencialmente desfavorable | Pregunta adicional |
|---|---|---|---|
| CFO/NI | Estable o superior a 1 en varios años | Bajo o negativo repetidamente | ¿La diferencia es D&A legítima o aumento de activos que no producen caja? |
| FCF/NI | Cercano o superior a 1 en un negocio maduro | Muy bajo o negativo | ¿CapEx es crecimiento o mantenimiento? |
| Ingresos frente a cuentas por cobrar | Cuentas por cobrar crecen en proporción o menos | Crecen mucho más y hay vencidos | ¿Ventas reales, devoluciones o crédito concedido? |
| Beneficio frente a inventarios | Inventarios crecen con demanda y rotación | Crecen mientras caen ventas | ¿Obsolescencia, producción parada o preparación? |
| Ajustes | Pocas adiciones recurrentes | Muchos cargos “excepcionales” cada año | ¿Qué habría pasado sin ajustes? |
| Capitalización | Política consistente y soporte | Gastos de I+D capitalizados crecientes | ¿Se está moviendo gasto al balance? |
| Impuestos diferidos y partidas atípicas | Reversión compatible con planificación | Ganancias fiscales o legales difíciles de repetir | ¿El beneficio normal está sobreestimado? |
| Auditoría y notas | Políticas claras y consistentes | Cambios, salvedades o estimaciones agresivas | ¿Qué riesgo no aparece en las cifras? |

**Ejemplo hipotético completo de calidad de beneficios de Aurora:**

- Net Income = 94.
- CFO = 299, por D&A 120, SBC 20, impuesto diferido 10, liberación de NWC 85 y un pago de reestructuración no recurrente de 30.
- FCF amplio = 79 después de incluir intangibles.
- `CFO/NI = 3,18×`; `FCF amplio/NI = 0,84×`; la diferencia se explica por D&A y liberación de NWC.
- Si la liberación de NWC de 85 se normaliza a una liberación de 25, el CFO recurrente estimado baja a 239 y el FCF amplio recurrente a 19. Esto no cambia el balance, pero cambia la calidad esperada.
- Si Aurora sustituye D&A de 120 por deterioro recurrente, EBITDA puede permanecer alto y FCF no mejorar necesariamente.

#### Ficha de 13 puntos: conversión de beneficio a efectivo

1. **Nombre:** cash conversion, conversión de caja o conversión de beneficios a caja.
2. **Para qué sirve:** compara el beneficio contable con el efectivo generado por la operación para detectar diferencias persistentes.
3. **Variables:** `NI`; `CFO`; `FCF`; `EBITDA`; `ingresos`; `devengos`.
4. **Fórmula matemática:** `CFO/NI = CFO/Net Income`; `FCF/NI = FCF/Net Income`; otras variantes: `CFO/EBITDA` y `FCF/Revenue`.
5. **Pasos:** (1) comparar varios años; (2) revisar D&A; (3) ajustar SBC; (4) explicar NWC; (5) separar partidas atípicas; (6) normalizar CapEx; (7) investigar desviaciones.
6. **Ejemplo hipotético:** Aurora tiene `CFO/NI = 299/94 = 3,18×` y `FCF amplio/NI = 79/94 = 0,84×`; la diferencia refleja D&A y liberación de NWC.
7. **Interpretación:** 3,18× parece alta, pero en Aurora depende de activos depreciables y capital circulante liberado; no implica que cada dólar de beneficio sea 3,18 de caja sostenible.
8. **Valores orientativos dependientes del sector/contexto:** `CFO/NI > 1` durante varios años puede ser favorable, pero no es una regla de compra; un valor menor de 0,5 o negativo merece investigación según el sector, el ciclo y las adquisiciones.
9. **Ejemplo hipotético favorable:** CFO/NI se mantiene sobre 1, FCF/NI cerca de 1 y no aumenta la mora ni la existencia; el beneficio se convierte en caja.
10. **Ejemplo hipotético desfavorable:** NI crece 20 %, CFO/NI cae a 0,3 y FCF/NI es negativo; suben cuentas por cobrar e inventarios y el beneficio pierde calidad.
11. **Errores frecuentes:** usar un solo año, no normalizar estacionalidad, añadir D&A dos veces, ignorar CapEx, tratar la liberación de NWC como recurrente o no separar beneficios no recurrentes.
12. **Cuándo no conviene:** no usar un umbral universal en biotecnología con grandes D&A, SaaS, construcción o M&A; revisar la naturaleza del negocio.
13. **Otros indicadores:** CFO/EBITDA, margen de FCF, devengos, DSO, DIO, DPO, CapEx/D&A, FCF por acción y FCF después de dividendos.

### 3.5.2 Trabajo capital y ciclo de conversión

El trabajo capital no es solo el inventario. En una operación, el capital queda inmovilizado desde que se paga al proveedor hasta que se cobra al cliente. Las piezas más comunes son inventarios, cuentas por cobrar, cuentas por pagar, gastos acumulados e ingresos diferidos.

```text
Ciclo de conversión de efectivo ≈ DIO + DSO − DPO
```

- **DIO:** días de inventario.
- **DSO:** días de cuentas por cobrar.
- **DPO:** días de cuentas por pagar.
- Un ciclo más largo suele consumir más efectivo, salvo que exista una ventaja comercial o financiera.
- Un ciclo negativo puede ser eficiente en comercio con pago rápido a proveedores y cobro inmediato, pero no si deteriora la relación con proveedores.
- El trabajo capital debe medirse en moneda constante y ajustarse por inflación, crecimiento, mix y adquisiciones.

**Ejemplo hipotético:** Aurora tiene DIO 121,7 días, DSO 109,5 y DPO 136,9 (`450/1.200×365`). El ciclo aproximado es `121,7 + 109,5 − 136,9 = 94,3 días`. Para reducir caja, Aurora puede negociar DPO con prudencia, mejorar DSO o bajar DIO sin deteriorar proveedores, calidad o servicio.

### 3.5.3 Estacionalidad y cifras móviles de doce meses

Un ejercicio completo no siempre es la mejor unidad si el negocio tiene estacionalidad fuerte. Un minorista puede vender más en un trimestre, un proyecto de construcción puede cobrar irregularmente y una empresa agrícola puede reconocer ingresos en cosecha. Las cifras móviles de doce meses, o trailing, suavizan, pero no eliminan, la distribución temporal.

| Herramienta | Qué hace | Cuándo usarla | Riesgo |
|---|---|---|---|
| Trimestre actual | Muestra el último período | Diagnóstico inmediato | Puede ser excepcional |
| LTM/TMM | Suma los últimos 12 meses | Suavizar estacionalidad | Mezcla años y no elimina adquisiciones |
| Mismo trimestre del año anterior | Compara estacionalidad | Comercio, turismo, energía | No elimina otros factores |
| Promedio móvil | Reduce ruido de una variable | Ratios de NWC y cuentas por cobrar | Puede ocultar cambios de tendencia |
| Normalización | Ajusta partidas atípicas y desfases temporales | Valoración | Depende del supuesto del analista |
| Serie estacionalmente ajustada | Utiliza datos oficiales de ajuste | Inflación o macro | No siempre disponible para ratios micro |

**Ejemplo hipotético estacional:** Aurora vende más en el cuarto trimestre. El trimestre actual muestra Revenue 800 y CFO 150; no se debe concluir que ese ritmo anual es sostenible sin observar LTM, NWC, inventarios y cobros de enero.

## 3.6 Notas operativas y contables: qué revisar antes de confiar en las cifras

1. **Base de consolidación:** subsidiarias, controladas, negocios conjuntos, asociadas y entidades de interés variable; ingresos y deuda deben consolidarse de forma consistente.
2. **Moneda y tipo de cambio:** nominal, real, moneda constante y efectos de traducción; una ventaja cambiaria puede parecer crecimiento orgánico.
3. **Reconocimiento de ingresos:** IFRS 15/ASC 606, obligaciones de desempeño, activos y pasivos contractuales, venta y entrega posterior (bill-and-hold), consignación, agente-principal, fidelización, descuentos y devoluciones.
4. **Políticas y estimaciones:** corte de ingresos, vidas útiles, valores residuales, pérdidas crediticias, reservas de inventario, garantías, litigios, pensiones, posiciones fiscales y valor razonable.
5. **Arrendamientos:** IFRS 16 cambia el balance y la presentación del EBITDA; comparar con empresas que registran gasto operativo o ajustar EV y deuda.
6. **Goodwill y deterioro:** identificar unidades, supuestos, tasas de descuento, márgenes terminales, crecimiento perpetuo, sinergias y margen de seguridad.
7. **Compensación basada en acciones:** considerar el gasto como coste económico, junto con dilución y recompras, y preguntar si se añade a CFO o EBITDA.
8. **Capital circulante:** revisar antigüedad de clientes e inventarios, condiciones de proveedores, factorización, factorización inversa, anticipos, avances de clientes y estacionalidad.
9. **Deuda:** valor nominal y libro, mix fijo/variable, moneda, escalera de vencimientos, covenants, garantías, colaterales y necesidades de refinanciación.
10. **Caja:** efectivo restringido, depósitos pignorados, caja atrapada, fondos de clientes, caja mínima, barrido de caja y líneas de crédito.
11. **Impuestos:** corriente frente a diferido, tasa efectiva, impuesto pagado, posiciones fiscales inciertas, pérdidas transportables, retenciones y límites de deducción.
12. **Partes relacionadas:** ventas, compras, préstamos, garantías, honorarios y transacciones con accionistas controladores.
13. **Fuera de balance:** compromisos de compra y take-or-pay, arrendamientos, concesiones, garantías, litigios, financiación de proveedores y pensiones no financiadas.
14. **Reexpresiones y cambios contables:** combinación de negocios, operaciones discontinuadas, reclasificaciones, hiperinflación y políticas modificadas.
15. **Informe de auditoría:** incertidumbre material, continuidad operativa, limitación de alcance, párrafo de énfasis y opinión modificada.

### 3.6.1 Diferencias de presentación que no deben ignorarse

| Comparación aparentemente equivalente | Posible diferencia | Ajuste recomendado |
|---|---|---|
| EBITDA de dos empresas | IFRS 16, arrendamientos, SBC, reestructuración o EBITDA “ajustado” | Reconstruir EBITDAR o EBITDA posterior a arrendamientos y conciliar las partidas |
| CFO de dos empresas | Método directo/indirecto, presentación de intereses y partidas atípicas | Recalcular desde Net Income/EBIT y añadir intereses e impuestos |
| Net debt | Arrendamientos, déficit de pensiones, minorías, acciones preferentes y efectivo restringido | Definir una única lista y reconciliarla con EV |
| CapEx | Software, adquisiciones, arrendamientos y compras netas/brutas | Separar tangible, intangible, crecimiento y mantenimiento |
| EPS | Básico/diluido, opciones, convertibles y acciones en tesorería | Reconstruir acciones totalmente diluidas |
| Gross Margin | Asignación de COGS, D&A y fletes | Comparar políticas y notas |
| ROE/ROIC | Capital promedio o final, goodwill, deuda y arrendamientos | Usar mismo denominador y normalizar |

## 3.7 Patrones que un inversor debe investigar

### 3.7.1 Balance

- La caja cae cada año mientras la deuda y el CapEx suben.
- Goodwill o intangibles representan una proporción creciente del patrimonio sin deterioro ni mejora de ROIC.
- Las cuentas por cobrar crecen más rápido que los ingresos o la antigüedad de los cobros se deteriora.
- Los días de inventario se duplican y aparecen reducciones de valor.
- Los pasivos corrientes crecen y se utiliza refinanciación de corto plazo.
- Los ingresos diferidos crecen sin clientes activos o con cancelaciones.
- La concentración de vencimientos de deuda aumenta después de un año de crecimiento de CapEx.
- El patrimonio aumenta solo por OCI, venta de activos o emisión de derechos.
- Provisiones y contingencias crecen con litigios o garantías.

### 3.7.2 Income Statement

- Revenue crece mientras Gross Margin cae.
- Una “reestructuración de una vez” aparece todos los años.
- EBITDA crece pero EBIT y Net Income se deterioran.
- Los gastos de I+D se capitalizan cada vez más.
- EPS crece por reducción de acciones mientras FCF/share cae.
- Intereses y deuda financian beneficios o dividendos.
- Otros ingresos, variaciones de valor razonable o diferencias de cambio sostienen el beneficio neto.
- La compensación pasa de salarios a acciones basadas en compensaciones sin explicación.

### 3.7.3 Cash Flow

- CFO permanece por debajo de Net Income.
- FCF es negativo mientras los dividendos o las recompras continúan.
- CFI es negativo sin crecimiento de capacidad o activos antiguos.
- CFF es positivo cada año para cubrir un CFO insuficiente.
- CapEx cae justo cuando el negocio crece o la industria exige renovación.
- FCF mejora solo por retraso de pagos a proveedores y luego se paga de golpe.
- Intereses e impuestos se separan y comparan con EBT.
- El efectivo final no reconcilia con el balance después de ajustar efectivo restringido.

## 3.8 Listas de verificación de los tres estados

### Balance Sheet

- [ ] ¿La fecha, moneda, perímetro y norma son comparables?
- [ ] ¿Los activos corrientes son realmente líquidos y realizables?
- [ ] ¿Qué proporción del activo es goodwill, intangibles o inmovilizado?
- [ ] ¿La caja está restringida o separada de la disponible?
- [ ] ¿La deuda incluye arrendamientos, acciones preferentes, déficit de pensiones y deuda similar?
- [ ] ¿Hay vencimientos, cláusulas o refinancing en los próximos 12–24 meses?
- [ ] ¿El patrimonio tiene calidad y no solo goodwill?
- [ ] ¿El NWC es coherente con la estacionalidad?

### Income Statement

- [ ] ¿Qué parte del Revenue es orgánica, adquirida o atribuible a cambios de FX?
- [ ] ¿Gross Profit y Gross Margin evolucionan juntos?
- [ ] ¿EBIT y EBITDA están reconciliados con D&A y arrendamientos?
- [ ] ¿Las partidas puntuales realmente no se repiten?
- [ ] ¿EBT incorpora intereses y partidas no operativas?
- [ ] ¿Net Income atribuible y EPS diluido usan las acciones correctas?
- [ ] ¿La tasa fiscal es sostenible y compatible con impuestos pagados?

### Cash Flow Statement

- [ ] ¿CFO reconcilia con NI, D&A, SBC y cambios de NWC?
- [ ] ¿CFO/NI y FCF/NI son consistentes en varios años?
- [ ] ¿CapEx separa mantenimiento, crecimiento y activos intangibles?
- [ ] ¿CFI incluye adquisiciones o solo activos físicos?
- [ ] ¿CFF refleja deuda, patrimonio, dividendos, recompras y arrendamientos?
- [ ] ¿El FCF histórico se convierte a FCFF antes de usar WACC?
- [ ] ¿Owner Earnings tiene supuestos explícitos de mantenimiento y crecimiento?
- [ ] ¿La estacionalidad está normalizada?

## 3.9 Síntesis práctica

El balance se lee como una estructura de recursos y obligaciones: caja, activos realizables, capacidad productiva, intangibles, deuda y patrimonio. El estado de resultados describe la economía devengada del período: Revenue, COGS, Gross Profit, EBIT, EBITDA, EBT, Net Income y EPS. El estado de flujos explica la caja: CFO, CFI, CFF, CapEx, FCF histórico, FCFF y Owner Earnings.

La secuencia analítica más segura es:

1. Confirmar que cifras y políticas son comparables.
2. Reconstruir el balance y comprobar `A = P + PN`.
3. Separar NWC operativo, caja, deuda y obligaciones similares.
4. Seguir Revenue hasta COGS, Gross Profit, EBIT, EBT y Net Income.
5. Conciliar Net Income con CFO y revisar la calidad de beneficios.
6. Separar CapEx de mantenimiento, crecimiento, intangibles y adquisiciones.
7. Calcular FCF histórico y convertirlo explícitamente a FCFF si se usará con WACC.
8. Normalizar estacionalidad, partidas atípicas, impuestos diferidos, arrendamientos, SBC y crecimiento.
9. Comparar ROIC, WACC, servicio de deuda, dividendos y valor por acción.
10. Convertir el resultado en escenarios, no en una conclusión automática de compra o venta.

---

# 4. Ratios financieros

Los ratios financieros comprimen estados financieros complejos en pocas relaciones. Ayudan a comparar rentabilidad, liquidez, endeudamiento, eficiencia, valoración y crecimiento, pero no sustituyen la lectura de las notas contables, el flujo de caja ni la tesis de inversión. Un ratio favorable puede coexistir con un apalancamiento elevado, beneficios extraordinarios, capitalización excesiva, crecimiento adquirido o efectivo que no puede repartirse. A la inversa, un ratio aparentemente pobre puede reflejar una fase de inversión y no una destrucción de valor.

Todas las cifras, perfiles y “empresas” de los ejemplos son **hipotéticos**. No representan cotizaciones, resultados ni datos de compañías reales. Los promedios solo sirven para ilustrar cómo se leería un conjunto comparativo: **no son umbrales universales ni señales automáticas de compra o venta**.

## 4.1 Reglas de construcción y lectura

### 4.1.1 Periodo, saldos promedio y estacionalidad

- Para un flujo del ejercicio —ingresos, beneficio, EBITDA o flujo de caja— se prefieren cifras anuales comparables. Si se dispone de trimestres, puede construirse **TTM** (*trailing twelve months*, últimos doce meses) sumando cuatro trimestres distintos, sin contar dos veces un trimestre.
- Para un saldo —activos, pasivos, patrimonio o capital— conviene usar el promedio entre apertura y cierre: `Promedio = (saldo inicial + saldo final) / 2`. El promedio es una aproximación: no representa todos los días del año y puede ser engañoso ante cambios bruscos, adquisiciones o estacionalidad extrema. Si se usa el saldo final, debe indicarse expresamente.
- Los ratios de días usan **365 días calendario**: `Días = 365 / rotación del periodo`. Para un trimestre o semestre se anualiza el flujo y el inventario medio antes de aplicar 365. Cuando el balance cae en un pico estacional, conviene comparar con la misma fecha estacional de otros años o usar promedios mensuales, no con un cierre excepcional.
- Un resultado TTM que mezcla fechas de balance y un precio de mercado de otra fecha puede combinar información incompatible. Para valoración se sincronizan precio, acciones, deuda, efectivo y balance, y se documentan las adquisiciones posteriores al balance.
- Las cifras trimestrales no se comparan directamente con anuales: deben anualizarse de forma homogénea o compararse con el mismo trimestre del año anterior.

### 4.1.2 Deuda con interés, deuda neta y valor empresa

En este capítulo, **deuda con interés** significa obligaciones cuyo servicio financiero es explícito: préstamos bancarios, bonos, pagarés, papel comercial, obligaciones de arrendamiento financiero y otra financiación análoga, no necesariamente la totalidad de los pasivos. Las cuentas comerciales por pagar, anticipos de clientes, provisiones, impuestos diferidos y otros conceptos operativos no se incluyen solo por aparecer bajo “pasivo”. Los arrendamientos financieros y, según el analista y la política adoptada, los contratos de arrendamiento operativo pueden incluirse como deuda; hay que hacerlo de forma uniforme y explicar el criterio.

`Deuda neta = deuda con interés − efectivo y equivalentes de efectivo − inversiones líquidas no operativas`

Solo se resta efectivo **disponible y no restringido** que la empresa puede usar para cancelar deuda. El efectivo de clientes, fondos regulados, depósitos de terceros o caja necesaria para la operación pueden no estar realmente disponibles. Cuando no se dispone de efectivo separado, se usa el saldo de cierre y se advierte. Una deuda neta negativa significa **efecto neto de caja** bajo esa definición, no que la empresa no tenga otras obligaciones.

`Valor empresa (EV) = capitalización bursátil + deuda con interés + acciones preferentes + participación no controlante (NCI) + otras obligaciones semejantes a deuda − efectivo e inversiones no operativas`

EV representa el valor del negocio operativo financiado por todos los proveedores de capital; no es el precio de las acciones. Los déficits de pensiones, litigios, provisiones y arrendamientos de largo plazo pueden exigir ajustes analíticos separados. Las subsidiarias, asociadas e intereses no controlantes deben valorarse de forma coherente: si el EBITDA incluye el 100 % de una sociedad consolidada, no se omite su deuda ni su interés no controlante. Bancos, aseguradoras y otras entidades financieras necesitan una lógica de EV propia; la fórmula industrial suele ser inadecuada.

### 4.1.3 FCF histórico, FCFF y FCFE

Para evitar una confusión frecuente, el capítulo adopta estas convenciones:

- **FCF histórico apalancado**: `CFO − CapEx`. El flujo de actividades ordinarias suele estar después de intereses y impuestos; por tanto, no incorpora necesariamente la financiación neta de deuda. No es el flujo que debe descontarse directamente contra EV ni se llama FCFE sin puente.
- **FCFF, flujo libre hacia la estructura de capital**: `EBIT × (1 − tasa fiscal operativa) + D&A − CapEx − inversión en capital circulante + otros ajustes operativos no dinerarios`. Está antes del servicio de deuda. Es el flujo conceptualmente apropiado para muchos DCF de empresa y comparaciones con EV.
- **FCFE, flujo hacia el patrimonio**: una aproximación es `NI común + D&A + otros no monetarios − CapEx − ΔNWC + deuda emitida − deuda repagada + equity emitido − recompras ± otros flujos financieros`. La fórmula exacta depende de qué líneas ya estén incluidas en CFO, CapEx y beneficio.

Una misma etiqueta “FCF” puede ocultar una de estas definiciones. En **FCF Margin, Debt/FCF y FCF Yield histórico** se utiliza, salvo indicación, FCF histórico `CFO − CapEx`, después de intereses. Para un DCF de empresa se utiliza y justifica FCFF; para uno del patrimonio se utiliza FCFE y `K_e`. EBITDA no es FCF: ignora el capital circulante, el CapEx, los impuestos y otros flujos necesarios.

### 4.1.4 Cómo evitar el mal uso de promedios

No hay un número “correcto” que sirva para todas las empresas. Antes de calificar un ratio se debe:

1. Definir fórmula, perímetro de consolidación, norma contable, moneda y ejercicio fiscal.
2. Comparar la misma fórmula con empresas de modelo de negocio, intensidad de capital, madurez, geografía y ciclo similares.
3. Usar la historia de la empresa a lo largo de un ciclo completo cuando sea posible, sin escoger solo el mejor año.
4. Separar factores temporales de precio, volumen, divisas, inflación, adquisiciones, ventas y cambios contables.
5. Contrastar con caja, balance y evidencia cualitativa. Un filtro puede identificar candidatos; no demuestra valor ni calidad.

Los perfiles “excelente”, “promedio” y “problemático” que siguen son patrones didácticos. “Excelente” no significa el valor más alto posible: un ROIC elevado pero no respaldado por caja, o un dividendo enorme pagado con deuda, puede ser destructivo. “Promedio” significa una referencia hipotética y neutral, no una mediana sectorial citada de una fuente.
## 4.2 Rentabilidad

La rentabilidad pregunta cuánto resultado genera una base de capital, activos o ventas. Antes de comparar empresas debe aclararse qué beneficio se mide, si es atribuible a los propietarios, si está antes o después de impuestos y si el retorno proviene de la operación, de activos no operativos o de decisiones de balance.

### 4.2.1 Return on Equity (ROE)

1. **Nombre:** Return on Equity (ROE), retorno o rentabilidad sobre el patrimonio.
2. **Para qué sirve:** mide el beneficio generado por cada unidad de patrimonio de los accionistas después de todos los costes de financiación. Ayuda a observar el retorno del accionista ordinario y a explicar sus cambios mediante DuPont.
3. **Variables:** beneficio neto atribuible a los propietarios de la matriz; patrimonio atribuible a esos propietarios al inicio y al cierre; acciones ordinarias, si se expresa como rentabilidad por acción. No debe usarse beneficio consolidado si incluye intereses no controlantes que no pertenecen a los accionistas de la matriz.
4. **Fórmula:** `ROE = beneficio neto atribuible a la matriz / patrimonio promedio atribuible × 100`. `Patrimonio promedio = (patrimonio inicial + patrimonio final) / 2`. Con saldos de cierre: `ROE de cierre = beneficio neto atribuible / patrimonio final × 100`, siempre etiquetado así.
5. **Pasos:** (1) identificar beneficio y patrimonio del mismo perímetro; (2) obtener saldos de apertura y cierre; (3) calcular el promedio; (4) dividir; (5) convertir a porcentaje; (6) contrastar durante varios años y descomponer en `margen neto × rotación de activos × multiplicador de patrimonio`.
6. **Ejemplo numérico:** beneficio atribuible `48`, patrimonio inicial `500` y final `700`; promedio `600`; `ROE = 48/600 = 8,0 %`.
7. **Interpretación:** por cada unidad monetaria de patrimonio promedio se generaron `0,08` de beneficio neto en el período. Un ROE del 20 % no es una rentabilidad anual compuesta del accionista: solo resume el resultado contable del ejercicio.
8. **Rangos y cautelas por sector/contexto:** resulta útil en empresas con capital estable, bancos, aseguradoras e industria convencional; es menos informativo en fases tempranas o con recompras masivas. Un valor alto puede proceder de deuda, patrimonio reducido o negativo, pérdidas temporales, beneficios fiscales o ventas de activos. Las entidades financieras necesitan una variante basada en capital regulatorio y rentabilidades regulatorias.
9. **Ejemplo de empresa excelente (hipotético):** ROE estable de 12–14 %, ROIC superior al coste de capital, alta conversión de beneficio en FCF y deuda controlada. El patrimonio crece principalmente por beneficios retenidos, de modo que el retorno no es un artefacto de haber reducido el denominador.
10. **Promedio de referencia (hipotético):** una mediana hipotética de pares comparables es 9 %. Ese valor carece de sentido sin conocer el sector, la contabilidad y el contexto de todo el ciclo. Importa contrastar el 8 % con esa referencia, con la historia propia y con la rentabilidad requerida del accionista.
11. **Caso problemático:** el patrimonio disminuye por recompras o pérdidas, mientras el beneficio neto sigue temporalmente elevado; el ROE sube aunque la actividad y la generación de caja se debilitan. Además, la deuda aumenta la volatilidad sobre un patrimonio menor.
12. **Caso en que el ratio engañe:** una empresa financiada sobre todo con deuda informa de un ROE del 25 %, pero su ROIC es del 5 % y el FCF no cubre la inversión. El apalancamiento amplifica tanto el beneficio residual como el riesgo de pérdidas para el accionista.
13. **Errores frecuentes:** usar beneficio total con patrimonio atribuible; integrar o desintegrar subsidiarias sin homogeneizar; mezclar saldos de cierre de años distintos; omitir el promedio; mezclar beneficios ajustados y no ajustados; o atribuir crecimiento económico a un dividendo en acciones.
14. **Cuándo no usarlo:** como medida principal cuando el patrimonio es negativo, insignificante o está temporalmente deteriorado, o cuando la empresa es un intermediario financiero regulado cuyo apalancamiento forma parte de su operación. Tampoco mide el retorno del capital operativo.
15. **Indicadores complementarios:** ROIC, ROA, ROCE, DuPont, Debt-to-Equity, conversión de FCF, dividendos, recompras, dilución y efecto acumulado de las recompras.

### 4.2.2 Return on Assets (ROA)

1. **Nombre:** Return on Assets (ROA), retorno o rentabilidad sobre los activos.
2. **Para qué sirve:** mide el beneficio generado por el conjunto de recursos de la empresa y permite comparar eficiencia con una base de activos más amplia que el patrimonio.
3. **Variables:** beneficio neto atribuible —o EBIT según la convención elegida— y total de activos promedio. Se deben distinguir ROA neta, ROA antes de impuestos y ROA operativa; no deben mezclarse.
4. **Fórmula:** con beneficio neto: `ROA = beneficio neto atribuible / activos totales promedio × 100`, donde `activos promedio = (activos iniciales + activos finales)/2`.
5. **Pasos:** (1) alinear perímetro y beneficio; (2) obtener activos de ambos extremos; (3) calcular el promedio; (4) dividir; (5) expresar como porcentaje; (6) separar activos operativos, efectivo, inversiones, deterioros y activos con deterioro.
6. **Ejemplo numérico:** beneficio `48`, activos iniciales `1.000` y finales `1.400`; promedio `1.200`; `ROA = 48/1.200 = 4,0 %`.
7. **Interpretación:** el activo promedio produjo `0,04` de beneficio neto por unidad monetaria. Un ROA del 6 % puede coexistir con un ROE del 15 % mediante un apalancamiento moderado.
8. **Rangos y cautelas por sector/contexto:** la intensidad de capital, el capital regulatorio y la estacionalidad cambian mucho la comparabilidad. Bancos, aseguradoras y servicios públicos requieren bases sectoriales específicas. Grandes saldos de efectivo y adquisiciones recientes pueden hacer que el activo promedio o final sea un mal sustituto de los activos operativos.
9. **Ejemplo de empresa excelente (hipotético):** ROA del 6 % durante varios años, con margen, rotación y ROIC también fuertes; los activos crecen orgánicamente y el denominador no se ha reducido artificialmente.
10. **Promedio de referencia (hipotético):** una mediana hipotética de pares es 4 %, solo un punto de partida. Una empresa madura con un ROA del 3 % puede superar su coste de capital mientras que una empresa nueva con un ROA del 8 %, pero corta historia y gran reinversión, aún no lo hace.
11. **Caso problemático:** una adquisición importante aumenta de inmediato los activos promedio, pero solo parte del beneficio adquirido se consolida o las sinergias tardan en llegar; el ROA cae durante la integración aunque el potencial de largo plazo sea positivo.
12. **Caso en que el ratio engañe:** una empresa compra activos de mala calidad y los registra íntegros en el denominador, pero generan pocas ganancias. Tras varios deterioros, la base de activos se reduce y el ROA parece recuperarse sin que haya cambiado la economía unitaria.
13. **Errores frecuentes:** mezclar EBIT y beneficio neto en una serie; usar solo el cierre; incluir o excluir intereses no controlantes de forma inconsistente; comparar ejercicios con fechas de consolidación diferentes; o confundir un cambio contable con mejora económica.
14. **Cuándo no usarlo:** cuando el valor de los activos es muy incierto, la empresa tiene activos negativos o estructuralmente inestables, o la presentación contable impide construir un denominador operativo comparable. No aísla el capital empleado y no sustituye al ROIC.
15. **Indicadores complementarios:** ROE, ROIC, Asset Turnover, Net Margin, ROA operativa, CapEx, fondo de comercio, deterioro y FCF/activo.

### 4.2.3 Return on Invested Capital (ROIC)

1. **Nombre:** Return on Invested Capital (ROIC), retorno sobre el capital invertido.
2. **Para qué sirve:** mide el beneficio operativo después de impuestos generado por el capital necesario para operar, con independencia de cómo se financie. Ayuda a distinguir la creación de valor de los meros efectos del apalancamiento.
3. **Variables:** EBIT o beneficio operativo; tasa fiscal operativa; NOPAT; capital invertido operativo promedio. `NOPAT = EBIT × (1 − tasa fiscal operativa)`. Una definición habitual de capital invertido es `activos operativos − pasivos operativos sin interés − efectivo excedente`, aunque cada ajuste debe documentarse.
4. **Fórmula:** `ROIC = NOPAT / capital invertido operativo promedio × 100`, con `capital promedio = (capital invertido inicial + capital invertido final)/2`. Una aproximación habitual es `deuda con interés + patrimonio − efectivo no operativo`, ajustada por los demás conceptos que se documenten.
5. **Pasos:** (1) obtener EBIT operativo; (2) normalizar impuestos; (3) calcular NOPAT; (4) identificar activos operativos; (5) restar financiación espontánea y efectivo no necesario; (6) promediar saldos; (7) comparar con WACC y con el coste de cada tramo de capital.
6. **Ejemplo numérico:** EBIT `100`, tasa fiscal operativa `28 %`, NOPAT `72`; capital invertido inicial `700` y final `900`; promedio `800`; `ROIC = 72/800 = 9,0 %`.
7. **Interpretación:** cada unidad de capital operativo invertido produjo `0,09` de NOPAT. Un ROIC histórico superior al WACC indica EVA positivo bajo el modelo, pero no basta para afirmar que la acción está infravalorada. El crecimiento incremental crea VNP sólo cuando el retorno de cada nuevo capital supera el WACC; un ROIC alto por precios o márgenes temporales puede desaparecer.
8. **Rangos y cautelas por sector/contexto:** el resultado depende de qué activos y pasivos se consideran operativos. Marcas, desarrollo de software, bancos, aseguradoras y empresas en fase muy temprana requieren una definición adaptada. La tasa fiscal, los arrendamientos, el fondo de comercio y las adquisiciones deben tratarse igual en todos los pares.
9. **Ejemplo de empresa excelente (hipotético):** ROIC del 14 %, WACC del 9 %, reinversión disciplinada, conversión de FCF cercana al 80 % y economía unitaria estable. El crecimiento aumenta el valor por acción sin necesitar apalancamiento para fabricar el retorno.
10. **Promedio de referencia (hipotético):** un grupo hipotético tiene un ROIC del 8 %. No es una nota de corte universal; la pregunta relevante es el diferencial sobre el WACC ajustado al riesgo y su duración.
11. **Caso problemático:** un conglomerado incluye efectivo, una subsidiaria financiera de baja rentabilidad y una operativa de alta rentabilidad. Un ROIC consolidado oculta dónde se despliega el capital; además, el efectivo central reduce mecánicamente el denominador.
12. **Caso en que el ratio engañe:** una adquisición genera fondo de comercio, mientras todas las sinergías previstas se incluyen hoy en el EBIT y el precio completo figura en el capital invertido. El ROIC parece alto, pero gran parte del beneficio es una previsión no realizada y no es caja.
13. **Errores frecuentes:** usar beneficio bruto o EBITDA; comparar NOPAT con patrimonio; mezclar deuda neta y deuda bruta; añadir efectivo excedente; usar el impuesto puntual en vez de una tasa sostenible; o tratar los arrendamientos como inexistentes mientras se deduce su renta del EBIT.
14. **Cuándo no usarlo:** cuando no se puede reconstruir la base de capital operativo, o cuando una venta puntual, pérdida de arranque o saldo regulatorio hace que el resultado no sea representativo. El ROIC por sí solo no dice si la caja puede repartirse.
15. **Indicadores complementarios:** WACC, NOPAT, puente de capital invertido, FCFF, CapEx, capital circulante, beneficio económico, diferencial ROIC-WACC, ROE y crecimiento orgánico.

### 4.2.4 Return on Capital Employed (ROCE)

1. **Nombre:** Return on Capital Employed (ROCE), retorno sobre el capital empleado.
2. **Para qué sirve:** mide el beneficio operativo generado por el conjunto de capital de largo plazo empleado, normalmente deuda y patrimonio, para evaluar si los fondos del negocio producen una rentabilidad suficiente.
3. **Variables:** EBIT o, en una variante, beneficio operativo después de impuestos; capital empleado promedio. `Capital empleado = total de activos − pasivos corrientes` es una definición antes de impuestos habitual, pero hay que comprobar qué incluye la fuente.
4. **Fórmula:** antes de impuestos: `ROCE = EBIT / capital empleado promedio × 100`. Variante después de impuestos: `ROCE después de impuestos = EBIT × (1 − tasa fiscal) / capital empleado promedio × 100`.
5. **Pasos:** (1) elegir ROCE antes o después de impuestos; (2) reconstruir activos totales y pasivos corrientes; (3) calcular el capital empleado al inicio y al cierre; (4) promediar; (5) dividir un EBIT coherente; (6) comparar con el coste de deuda, el coste de patrimonio y el WACC.
6. **Ejemplo numérico:** EBIT `100`; capital empleado inicial `900` y final `1.100`; promedio `1.000`; `ROCE = 100/1.000 = 10,0 %`.
7. **Interpretación:** el negocio operativo generó `0,10` de EBIT por unidad de capital de largo plazo. ROCE se aproxima más al retorno del negocio que ROE cuando existe apalancamiento, pero depende de la definición de capital empleado. Para compararlo con WACC se usa la variante después de impuestos o se convierte el WACC a la misma base; no se compara ROCE antes de impuestos con un WACC después de impuestos.
8. **Rangos y cautelas por sector/contexto:** resulta útil en servicios públicos, industria, telecomunicaciones e inmobiliaria, siempre que las políticas de depreciación y arrendamiento sean comparables. En bancos y aseguradoras, activos y pasivos son parte de la operación; la fórmula estándar suele necesitar una adaptación regulatoria.
9. **Ejemplo de empresa excelente (hipotético):** ROCE después de impuestos del 11 %, WACC del 8 %, utilización estable de activos y rentabilidad mantenida durante una fase recesiva sin reducir el mantenimiento esencial.
10. **Promedio de referencia (hipotético):** una mediana hipotética de pares es 8 %. ROCE debe juzgarse según la intensidad de capital sectorial y el coste de capital, no comparándolo sin matiz con empresas de pocos activos.
11. **Caso problemático:** una empresa capitaliza gasto de desarrollo que antes se imputaba al ejercicio. El EBIT sube y también el capital promedio; ROCE puede mejorar o empeorar según el momento, aunque no se haya creado caja nueva.
12. **Caso en que el ratio engañe:** `total de activos − pasivos corrientes` incluye efectivo e inversiones no operativas a largo plazo, por lo que ROCE cae aunque las fábricas, el software y la red de distribución —el núcleo productivo— no hayan cambiado.
13. **Errores frecuentes:** confundir ROCE con ROIC; usar un EBIT con ajustes inconsistentes; cambiar la clasificación de pasivos corrientes; usar solo el capital de cierre; o comparar un operador con arrendamientos con otro que posee sus activos.
14. **Cuándo no usarlo:** como ratio principal en entidades financieras, situaciones de capital negativo o cuando una definición alternativa de capital de la gerencia omite operaciones materiales. Tampoco mide por sí sola el retorno al accionista después del riesgo financiero.
15. **Indicadores complementarios:** ROIC, WACC, Asset Turnover, CapEx, Debt-to-Equity, ROCE antes/después de impuestos, beneficio económico y puente del margen operativo.

### 4.2.5 Gross Margin

1. **Nombre:** Gross Margin, margen bruto o margen de contribución inicial.
2. **Para qué sirve:** muestra cuánto ingreso queda tras cubrir el coste directo necesario para prestar el producto o servicio, antes de gastos comerciales, generales, financieros e impuestos.
3. **Variables:** ingresos y beneficio bruto —ingresos menos coste de ventas o coste directo— del mismo periodo. En servicios, el equivalente es ingresos menos mano de obra directa, entrega del proyecto y demás coste de ingresos.
4. **Fórmula:** `Gross Margin = beneficio bruto / ingresos × 100 = (ingresos − COGS) / ingresos × 100`.
5. **Pasos:** (1) conciliar ingresos; (2) identificar COGS según la presentación contable; (3) restar; (4) dividir por los mismos ingresos consolidados; (5) analizar por producto, geografía y canal; (6) comparar beneficio bruto y margen por separado.
6. **Ejemplo numérico:** ingresos `1.000`, COGS `600`; beneficio bruto `400`; `Gross Margin = 400/1.000 = 40,0 %`.
7. **Interpretación:** cada `1,00` de ventas dejó `0,40` antes de gastos operativos, impuestos y financiación. Una caída del margen mientras crecen los ingresos puede indicar presión de precios, inflación de insumos o un cambio de mezcla.
8. **Rangos y cautelas por sector/contexto:** no existe un nivel universalmente bueno. Software, bienes de consumo de marca, servicios públicos, aerolíneas, comercio, farmacéutica y manufactura a contrato tienen estructuras distintas. Algunas empresas presentan beneficio bruto “ajustado” que excluye costes de producción económicos reales.
9. **Ejemplo de empresa excelente (hipotético):** margen bruto estable del 42 %, poder de fijación de precios, alta retención de clientes y mejora de mezcla que no depende de una deflation temporal de insumos.
10. **Promedio de referencia (hipotético):** una mediana hipotética de pares es 32 %, solo descriptiva. Un mayorista de margen bajo puede ser excelente si su rotación, capital circulante, ROIC y caja son superiores.
11. **Caso problemático:** la empresa congela precios mientras suben los insumos o desplaza ventas a productos de margen bajo; los ingresos y las unidades crecen, pero el beneficio bruto por unidad se deteriora.
12. **Caso en que el ratio engañe:** una baja de inventario por obsolescencia se excluye repetidamente del beneficio bruto “ajustado”. El margen ajustado parece estable, aunque la economía de las devoluciones, mermas y obsolescencia haya cambiado.
13. **Errores frecuentes:** usar ingresos netos en un numerador y brutos en otro; clasificar de forma distinta el transporte o la nube; comparar empresas con reconocimiento de ingresos diferente; excluir devoluciones o mano de obra remota; o llamar “crecimiento” a una variación en puntos porcentuales.
14. **Cuándo no usarlo:** cuando el COGS no tiene significado económico, la presentación contable no es comparable o costes semejantes a la depreciación aparecen en gastos operativos. No sirve para inferir generación de caja sin mirar CapEx y capital circulante.
15. **Indicadores complementarios:** Operating Margin, margen bruto por producto, mezcla de ingresos, COGS por unidad, Inventory Turnover, precios de insumos, retención de clientes y FCF Margin.

### 4.2.6 Operating Margin

1. **Nombre:** Operating Margin, margen operativo.
2. **Para qué sirve:** mide la rentabilidad de las operaciones antes de intereses, impuestos y otros ingresos o gastos no operativos, reduciendo el ruido de la estructura financiera.
3. **Variables:** ingresos y EBIT o beneficio operativo de operaciones continuadas bajo una definición coherente. Deterioros, reestructuraciones, adquisiciones y otros ajustes se excluyen o se identifican por separado.
4. **Fórmula:** `Operating Margin = EBIT / ingresos × 100`.
5. **Pasos:** (1) conciliar beneficio neto con EBIT; (2) retirar intereses, impuestos y partidas no operativas; (3) decidir si permanecen las partidas realmente excepcionales; (4) dividir por ingresos comparables; (5) analizar el puente y la tendencia multianual.
6. **Ejemplo numérico:** ingresos `1.000`, EBIT `120`; `Operating Margin = 120/1.000 = 12,0 %`.
7. **Interpretación:** cada `1,00` de ventas generó `0,12` antes de financiación e impuestos. Ayuda a explicar si un cambio del margen neto provino de la operación o del apalancamiento y de partidas puntuales.
8. **Rangos y cautelas por sector/contexto:** varían según modelo de negocio, escala, depreciación, arrendamientos y reconocimiento de ingresos. Las funciones centralizadas, la capitalización de I+D y las reestructuraciones afectan la línea. Los bancos suelen necesitar otra medida.
9. **Ejemplo de empresa excelente (hipotético):** el margen operativo sube del 9 % al 12 % en cinco años por precio, mezcla y productividad, mientras el servicio y la conversión a FCF también mejoran.
10. **Promedio de referencia (hipotético):** una mediana hipotética de fabricantes es 8 %, pero sería engañosa para un distribuidor de software. En una empresa madura, un margen estable es más informativo que un máximo puntual.
11. **Caso problemático:** la empresa recorta I+D, mantenimiento y atención al cliente durante un año, eleva el margen y después pierde ventas. El margen del año siguiente cae al reparar el negocio.
12. **Caso en que el ratio engañe:** un EBIT “ajustado” excluye reestructuraciones recurrentes, remuneración en acciones o gastos de arrendamiento. El beneficio neto publicado es menor, pero el margen operativo elegido parece superior al de pares equivalentes.
13. **Errores frecuentes:** usar un EBIT antes de intereses pero después de ajustes inconsistentes; tomar el flujo operativo como EBIT; mezclar ingresos consolidados y atribuibles; añadir subvenciones o ingresos financieros; o comparar el pico de un ciclo con años normales.
14. **Cuándo no usarlo:** cuando no se puede reconstruir EBIT, cuando operaciones y financiación están inseparables —como ocurre en algunas entidades financieras— o cuando las políticas de arrendamiento y depreciación destruyen la comparabilidad. No demuestra por sí solo la conversión a caja.
15. **Indicadores complementarios:** Gross Margin, EBITDA Margin, Net Margin, conversión EBIT/FCF, CapEx/ingresos, intensidad de I+D, economía unitaria y margen normalizado.

### 4.2.7 Net Margin

1. **Nombre:** Net Margin, margen neto o beneficio neto sobre ingresos.
2. **Para qué sirve:** muestra qué porcentaje de las ventas permanece después de costes operativos, intereses, impuestos y partidas no ordinarias atribuidas al negocio.
3. **Variables:** ingresos y beneficio neto atribuible a los propietarios de la matriz durante el mismo periodo consolidado. El beneficio neto consolidado es otra base cuando existen intereses no controlantes.
4. **Fórmula:** `Net Margin = beneficio neto atribuible a la matriz / ingresos × 100`.
5. **Pasos:** (1) conciliar ingresos; (2) tomar el beneficio neto atribuible a la matriz; (3) revisar impuestos, intereses y partidas no recurrentes; (4) dividir; (5) comparar el margen publicado y el normalizado; (6) relacionarlo con EPS y caja.
6. **Ejemplo numérico:** ingresos `1.000`, beneficio neto atribuible `60`; `Net Margin = 60/1.000 = 6,0 %`.
7. **Interpretación:** cada `1,00` de ventas produjo `0,06` para los accionistas de la matriz después de financiación e impuestos. Resume el resultado final, pero no es el retorno sobre el patrimonio construido sobre el patrimonio.
8. **Rangos y cautelas por sector/contexto:** la interpretación depende del margen bruto, intensidad de capital, apalancamiento, fiscalidad y riesgo. Un margen neto alto con deuda muy elevada puede coexistir con escasa resiliencia del patrimonio; un margen bajo puede compensarse con una rotación de activos elevada.
9. **Ejemplo de empresa excelente (hipotético):** margen neto del 8 %, ROIC del 14 %, WACC del 9 % y conversión de caja estable; la rentabilidad no se genera solo mediante deuda.
10. **Promedio de referencia (hipotético):** una mediana hipotética de pares es 5 %, un punto de partida. No tiene sentido sin crecimiento, intensidad de capital y apalancamiento en el escenario adverso; la mediana sectorial debe recalcularse con un conjunto documentado.
11. **Caso problemático:** beneficios fiscales, reversiones de litigios, ganancias por venta de activos y divisas crean un margen neto del 12 %, mientras el margen operativo normalizado es del 4 % y el FCF es débil.
12. **Caso en que el ratio engañe:** una empresa en fase temprana tiene ingresos negativos o muy pequeños después de una inversión grande en costes fijos. El crecimiento de ingresos puede elevar temporalmente el margen neto mientras empeora la economía de adquisición de clientes.
13. **Errores frecuentes:** usar beneficio consolidado con ingresos de la matriz; anualizar un trimestre sin ajuste estacional; llamar “crecimiento” a una subida de puntos porcentuales; ignorar intereses no controlantes; o comparar beneficios ajustados y legales sin puente.
14. **Cuándo no usarlo:** si el numerador incluye una partida no operativa muy grande, la propiedad minoritaria distorsiona la comparación o los ingresos no constituyen un denominador significativo. No sustituye a ROIC ni al análisis de caja.
15. **Indicadores complementarios:** Operating Margin, tasa efectiva de impuestos, Interest Coverage, ROE, EPS, FCF Margin, partidas excepcionales, divisas y acciones diluidas.

### 4.2.8 EBITDA Margin

1. **Nombre:** EBITDA Margin, margen EBITDA.
2. **Para qué sirve:** compara la rentabilidad antes de intereses, impuestos, depreciaciones y amortizaciones. Resulta útil para separar el margen operativo de financiación y asignación de capital, especialmente en sectores de alta intensidad de capital.
3. **Variables:** ingresos y EBITDA con una política coherente. EBITDA debe conciliarse desde EBIT más D&A, no tomarse como una etiqueta no auditada de la gerencia.
4. **Fórmula:** `EBITDA Margin = EBITDA / ingresos × 100`.
5. **Pasos:** (1) partir de EBIT; (2) añadir solo D&A incluidos en EBIT; (3) revisar arrendamientos, remuneración en acciones, reestructuraciones y adquisiciones; (4) conciliar con el estado de flujos; (5) dividir por ingresos; (6) comparar con CapEx y capital circulante.
6. **Ejemplo numérico:** ingresos `1.000`, EBIT `120`, D&A `60`; EBITDA `180`; `EBITDA Margin = 180/1.000 = 18,0 %`.
7. **Interpretación:** cada `1,00` de ingresos dejó `0,18` antes de D&A e impuestos. No es beneficio disponible para el accionista ni significa que el CapEx de mantenimiento ya esté pagado.
8. **Rangos y cautelas por sector/contexto:** es más útil donde difieren la depreciación y la financiación, pero la presentación de arrendamientos puede modificar EBITDA y D&A. Bancos, aseguradoras y empresas con pocos activos pueden darle un significado limitado. El EBITDA ajustado puede excluir costes recurrentes.
9. **Ejemplo de empresa excelente (hipotético):** margen EBITDA del 18 %, alta conversión después del CapEx de mantenimiento, apalancamiento moderado y ningún ajuste que se repita todos los años.
10. **Promedio de referencia (hipotético):** una mediana industrial hipotética es 14 %, pero no es un objetivo para una empresa de software. Se compara con pares de intensidad de capital y política de arrendamiento semejantes.
11. **Caso problemático:** I+D, reestructuración y coste de nube se clasifican repetidamente como “puntuales”. EBITDA aumenta, pero el negocio sigue consumiendo los mismos recursos para operar.
12. **Caso en que el ratio engañe:** una empresa de alta intensidad de capital tiene EBITDA elevado y poco FCF porque el CapEx representa el 18 % de los ingresos. Un competidor con menos activos y un margen EBITDA del 13 % puede generar mucha más caja distribuible.
13. **Errores frecuentes:** usar una cifra no GAAP sin auditar; añadir amortización de adquisiciones sin separar su economía; tratar los arrendamientos de forma inconsistente; comparar EBITDA con ingresos de otro perímetro; o inferir FCF.
14. **Cuándo no usarlo:** cuando la D&A no representa un coste económico relevante, la empresa es un intermediario financiero o EBITDA, CapEx y capital circulante están inseparables. No basta para decidir la sostenibilidad de un dividendo.
15. **Indicadores complementarios:** Operating Margin, EBIT margin, CapEx/ingresos, conversión EBITDA/FCF, apalancamiento ajustado por arrendamientos, ROIC, Net Debt/EBITDA y FCFF.

### 4.2.9 Free Cash Flow (FCF) Margin

1. **Nombre:** FCF Margin, margen de flujo de caja libre histórico.
2. **Para qué sirve:** mide el FCF histórico generado por cada unidad de ingresos después de operación, impuestos e intereses, pero antes de dividendos y financiación neta. En este capítulo, `FCF histórico apalancado = CFO − CapEx` salvo otra indicación.
3. **Variables:** ingresos, CFO y CapEx del mismo periodo. En la fórmula `CFO − CapEx`, CapEx se introduce como salida positiva. Se documenta si incluye adquisiciones, arrendamientos o desarrollo capitalizado.
4. **Fórmula:** `FCF Margin = (CFO − CapEx) / ingresos × 100`.
5. **Pasos:** (1) conciliar CFO; (2) separar CapEx de mantenimiento y crecimiento; (3) restar CapEx dinerario sin descontar dos veces las ventas de activos; (4) calcular FCF; (5) dividir por los mismos ingresos; (6) comparar varios años y usar FCFF si se implica EV.
6. **Ejemplo numérico:** CFO `230`, CapEx `120`, ingresos `1.000`; FCF `110`; `FCF Margin = 110/1.000 = 11,0 %`.
7. **Interpretación:** cada `1,00` de ventas dejó `0,11` de caja histórica después de CapEx y de intereses. Es una medida de conversión de caja, no un margen operativo ni una promesa de efectivo distribuible.
8. **Rangos y cautelas por sector/contexto:** intensidad de capital, etapa, capital circulante y adquisiciones importan más que un porcentaje universal. Una empresa pública madura de bajo CapEx y una empresa de software en crecimiento no comparten un umbral. Una CFO estacional o negativa requiere datos TTM y por trimestre.
9. **Ejemplo de empresa excelente (hipotético):** FCF Margin del 12 % a lo largo del ciclo, con CapEx de mantenimiento identificado, capital circulante estable y FCF después de intereses suficiente para financiar crecimiento, dividendos y una reducción prudente de deuda.
10. **Promedio de referencia (hipotético):** una mediana hipotética de pares es 7 %, solo descriptiva. Una empresa de margen menor puede generar más FCF mediante rotación; otra de margen alto puede reinvertir casi toda la caja.
11. **Caso problemático:** el CapEx se recorta dos años por debajo del mantenimiento; el FCF Margin sube, pero después bajan la fiabilidad y la capacidad productiva y se destinan recursos a recuperar esa capacidad.
12. **Caso en que el ratio engañe:** un proveedor estira las cuentas por pagar, el inventario aumenta o los clientes pagan tarde. La CFO mejora temporalmente gracias a la financiación del ciclo y el FCF parece alto, aunque la financiación recibida de clientes haya crecido.
13. **Errores frecuentes:** llamar FCF a CFO; restar adquisiciones como si fueran CapEx sin advertencia; anular dos veces CapEx en otro ajuste; usar FCFF contra patrimonio; ignorar cuentas por pagar, arrendamientos o remuneración; o comparar FCF TTM con un trimestre estacional.
14. **Cuándo no usarlo:** cuando no puede conciliarse CFO y CapEx, CapEx consiste principalmente en adquisiciones no operativas o una entidad financiera hace irrelevante la mecánica industrial. Un FCF negativo debe explicarse por causas, no solo por su signo.
15. **Indicadores complementarios:** CFO/EBITDA, FCF/beneficio neto, CapEx/ingresos, días del ciclo, ROIC, FCFF, Debt-to-Equity, dividendos y recompras.

## 4.3 Liquidez y capital circulante

La liquidez responde si la empresa puede pagar sus obligaciones próximas con recursos disponibles. El balance presenta existencias de activos y pasivos en una fecha, no un flujo automático de cobros y pagos. Por eso, un ratio de liquidez alto no siempre es mejor: puede reflejar efectivo o existencias inmóviles; uno bajo puede ser coherente con cobros rápidos, proveedores financiadores o un modelo de suscripción.

### 4.3.1 Current Ratio

1. **Nombre:** Current Ratio, ratio de liquidez corriente o ratio corriente.
2. **Para qué sirve:** compara el valor de los activos corrientes con las obligaciones corrientes y ofrece una primera medida de cobertura a corto plazo. No indica la velocidad de cobro ni la calidad de los activos.
3. **Variables:** activos corrientes y pasivos corrientes, con importes y clasificación tomados del mismo balance, perímetro de consolidación, moneda y fecha.
4. **Fórmula:** `Current Ratio = activos corrientes / pasivos corrientes`. Se expresa en veces, no como porcentaje.
5. **Pasos:** (1) identificar qué se clasifica a corto plazo; (2) incluir todos los pasivos corrientes; (3) excluir activos no corrientes; (4) dividir; (5) comparar con la historia y pares; (6) revisar composición, vencimientos y fecha estacional.
6. **Ejemplo numérico:** activos corrientes `150`, pasivos corrientes `100`; `Current Ratio = 150/100 = 1,50x`.
7. **Interpretación:** la empresa dispone de `1,50` unidades de activo corriente por cada unidad de pasivo corriente en esa fecha. No significa que pueda pagar todo sin vender existencias ni aceptar una pérdida en su venta.
8. **Rangos y cautelas por sector/contexto:** superar 1 no constituye una garantía. Comercio, suscripción, servicios públicos, construcción y distribución pueden funcionar con niveles diferentes. Bancos y aseguradoras requieren análisis regulatorio de liquidez.
9. **Ejemplo de empresa excelente (hipotético):** Current Ratio de 2,1x con efectivo, inversiones líquidas y cuentas por cobrar realizables; vencimientos bien escalonados y pocas renovaciones de deuda con vencimientos inciertos.
10. **Promedio de referencia (hipotético):** una mediana hipotética de distribuidores es 1,4x. Un minorista especializado puede operar en 0,8x con cobros diarios; la mediana no establece un objetivo.
11. **Caso problemático:** la empresa acumula inventario de 180 días y presenta un Current Ratio de 1,8x. Si ese inventario no se convierte a su valor contable, la cobertura aparente no representa liquidez real.
12. **Caso en que el ratio engañe:** antes de una fecha de pago, la empresa obtiene un préstamo a corto plazo y lo mantiene en efectivo. El Current Ratio sube aunque el coste y el riesgo de refinanciación hayan aumentado; días después ambos saldos desaparecen.
13. **Errores frecuentes:** usar solo efectivo frente a todos los pasivos; mezclar activos y pasivos de distinta fecha; omitir descubiertos, devoluciones o deuda corriente; clasificar mal una deuda a largo plazo; o usar un cierre estacional como representativo.
14. **Cuándo no usarlo:** como prueba suficiente de solvencia, en intermediarios financieros y cuando se desconoce el calendario de vencimientos. Tampoco responde si el inventario puede venderse a su valor contable.
15. **Indicadores complementarios:** Quick Ratio, Cash Ratio, Working Capital, DIO, DSO, DPO, CCC, Debt-to-Assets, flujo de caja y calendario de vencimientos.

### 4.3.2 Quick Ratio

1. **Nombre:** Quick Ratio, ratio de liquidez rápida o prueba ácida.
2. **Para qué sirve:** mide la cobertura de pasivos corrientes con activos que pueden convertirse con rapidez en efectivo y reduce la incertidumbre asociada al inventario.
3. **Variables:** efectivo y equivalentes; inversiones líquidas cuando correspondan; cuentas por cobrar netas; pasivos corrientes. No incluye inventarios, anticipos ni otros activos que no sean de cobro inmediato.
4. **Fórmula:** `Quick Ratio = (efectivo + inversiones líquidas incluidas + cuentas por cobrar netas) / pasivos corrientes`.
5. **Pasos:** (1) partir de activos corrientes; (2) retirar inventarios y prepagos; (3) revisar cobranza; (4) añadir solo inversiones de rápida realizabilidad; (5) dividir; (6) comparar antigüedad de cuentas con el pasivo exigible.
6. **Ejemplo numérico:** efectivo e inversiones `55`, cuentas por cobrar `45`, pasivos corrientes `100`; activos rápidos `100`; `Quick Ratio = 100/100 = 1,00x`.
7. **Interpretación:** hay `1,00` de activo rápido por unidad de pasivo corriente. Un valor de `0,50` indicaría cobertura parcial sin depender del inventario, pero no demostraría insolvencia.
8. **Rangos y cautelas por sector/contexto:** es útil en comercio y manufactura con existencias. Servicios con cobro inmediato pueden necesitar menos. Las entidades financieras requieren otros indicadores. Las cuentas por cobrar con síntoma de deterioro deben descontarse.
9. **Ejemplo de empresa excelente (hipotético):** Quick Ratio de 1,3x, DSO bajo, pocas existencias, efectivo suficiente y un pasivo corriente estable frente a un ciclo de cobro poco variable.
10. **Promedio de referencia (hipotético):** una mediana hipotética de comercio es 0,9x. Una empresa de suscripción con cobros antecipados puede ser solvente con menos de 1,0x si no tiene existencias.
11. **Caso problemático:** un cliente problemático representa 30 % de las cuentas por cobrar. El Quick Ratio es 1,2x sobre el papel, pero una recuperación adversa puede reducirlo a 0,7x.
12. **Caso en que el ratio engañe:** la empresa vende facturas y transfiere el riesgo de crédito; reduce cuentas por cobrar y mejora el Quick Ratio, aunque necesite más descuentos y capital de trabajo para mantener las ventas.
13. **Errores frecuentes:** incluir inventarios o prepagos; usar cuentas por cobrar brutas sin provisión; clasificar inversiones de largo plazo como líquidas; omitir pasivos corrientes; o mezclar normas contables.
14. **Cuándo no usarlo:** cuando el inventario se vende con rapidez y margen estable, en un intermediario financiero o cuando la clasificación contable no refleja el cobro real. No sustituye un análisis de estrés.
15. **Indicadores complementarios:** Current Ratio, Cash Ratio, DSO, cuentas por cobrar vencidas, concentración de deudores, flujo de caja y disponibilidad de líneas de crédito.

### 4.3.3 Cash Ratio

1. **Nombre:** Cash Ratio, ratio de caja o liquidez inmediata.
2. **Para qué sirve:** mide la cobertura inmediata de pasivos corrientes con efectivo y equivalentes, sin depender de cobros ni ventas de inventario.
3. **Variables:** efectivo y equivalentes; inversiones a muy corto plazo de alta liquidez, si se incluyen; pasivos corrientes. Debe distinguirse el efectivo restringido y el efectivo de terceros.
4. **Fórmula:** `Cash Ratio = (efectivo y equivalentes + inversiones líquidas incluidas) / pasivos corrientes`.
5. **Pasos:** (1) identificar efectivo no restringido; (2) comprobar fondos de clientes y fondos regulados; (3) añadir solo inversiones claramente líquidas; (4) dividir; (5) comparar con obligaciones inmediatas, no solo con el total.
6. **Ejemplo numérico:** efectivo e inversiones líquidas `55`, pasivos corrientes `100`; `Cash Ratio = 55/100 = 0,55x`.
7. **Interpretación:** la empresa tiene `0,55` de efectivo e inversión líquida inmediata por unidad de pasivo corriente. No mide cobros futuros ni la rentabilidad de ese efectivo.
8. **Rangos y cautelas por sector/contexto:** es útil con vencimientos próximos o riesgo de cierre de mercados. Mantener demasiado efectivo puede ser ineficaz; en jurisdicciones con déficit o mercados disfuncionales puede ser prudencial. Bancos y aseguradoras necesitan otro enfoque.
9. **Ejemplo de empresa excelente (hipotético):** Cash Ratio de 0,7x con deuda a corto plazo bien calendarizada, cobro rápido y efectivo no restringido. Existe además un piso de efectivo fijado por la política de riesgos.
10. **Promedio de referencia (hipotético):** una mediana hipotética de industria es 0,4x. Una empresa de suscripción puede operar con 0,2x; una naviera con compras internacionales puede necesitar más por la incertidumbre de los insumos y los plazos de pago.
11. **Caso problemático:** se anuncia un dividendo grande que se cubre con efectivo y cheques pendientes, pero aún figura como patrimonio. El ratio de cierre refleja una posición de caja que ya tiene una obligación legal.
12. **Caso en que el ratio engañe:** la empresa mantiene efectivo en una jurisdicción donde la conversión, el cambio o la transferencia están restringidos. El balance lo clasifica como efectivo, pero no está disponible para cancelar deuda en la matriz.
13. **Errores frecuentes:** incluir efectivo de clientes; añadir instrumentos ilíquidos; mezclar monedas; contar fondos restringidos; usar un solo cierre; o suponer que todo efectivo pertenece al accionista.
14. **Cuándo no usarlo:** como medida principal de eficiencia del capital, en bancos, aseguradoras y cualquier contexto con normas de tesorería que impidan usar libremente el efectivo. No reemplaza el análisis contractual de obligaciones.
15. **Indicadores complementarios:** Current Ratio, Quick Ratio, Debt-to-Assets, vencimientos, líneas de crédito, flujo de caja, nota de efectivo restringido y presión fiscal.

### 4.3.4 Working Capital

1. **Nombre:** Working Capital, capital circulante o fondo de trabajo.
2. **Para qué sirve:** mide los recursos netos de corto plazo que financian las operaciones. Como variante, el capital circulante operativo excluye efectivo y financiación para mostrar la inversión en el ciclo comercial.
3. **Variables:** activos corrientes; pasivos corrientes; y, en la variante operativa, cuentas por cobrar, inventarios y otros activos operativos menos cuentas por pagar y otros pasivos operativos.
4. **Fórmula:** `Working Capital = activos corrientes − pasivos corrientes = CC`. `Operating Working Capital = activos operativos corrientes − pasivos operativos corrientes`; se excluyen efectivo y deuda con interés.
5. **Pasos:** (1) clasificar saldos; (2) identificar efectivo y deuda; (3) calcular el importe contable y, si procede, el operativo; (4) dividir por ingresos si se desea intensidad; (5) comparar con la misma fecha estacional; (6) observar tendencia y componentes.
6. **Ejemplo numérico:** activos corrientes `150`, pasivos corrientes `100`; `Working Capital = 150−100 = 50`.
7. **Interpretación:** hay `50` de recursos corrientes netos para respaldar la operación en esa fecha. Un valor positivo no garantiza rentabilidad; uno negativo puede ser eficiente si el modelo cobra antes de pagar.
8. **Rangos y cautelas por sector/contexto:** comercio, manufactura, suscripción, proyectos, servicios públicos y construcción tienen necesidades opuestas. En una venta con anticipo, el cliente financia la operación; en distribución, el proveedor suele financiar inventario.
9. **Ejemplo de empresa excelente (hipotético):** Working Capital positivo y moderado, estable como porcentaje de ingresos, con DSO y DIO controlados y proveedores diversificados. La caja no está atrapada en inventario ni en un solo cliente.
10. **Promedio de referencia (hipotético):** el grupo hipotético presenta `4 %` de ingresos en Working Capital operativo. Una mediana sectorial calculada con el mismo modelo puede ser muy superior o nula.
11. **Caso problemático:** los ingresos crecen 30 %, el inventario 45 % y los proveedores exigen prepago. Working Capital se vuelve negativo y aparece una necesidad de financiación que el margen contable no muestra.
12. **Caso en que el ratio engañe:** una empresa vende con 50 % de anticipo y presenta un capital circulante negativo; otra con los mismos ingresos devuelve el efectivo en dos años. La primera es mucho más líquida aunque ambas tengan importes contables iguales.
13. **Errores frecuentes:** incluir efectivo y deuda en el capital circulante operativo; usar un cierre estacional; no separar pasivos con interés; mezclar ingresos de un periodo no comparable; o creer que un valor positivo siempre es mejor.
14. **Cuándo no usarlo:** en intermediarios financieros o cuando la estructura de cobros y pagos hace el balance poco significativo. Para medir la financiación del crecimiento conviene observar el capital circulante operativo.
15. **Indicadores complementarios:** Current Ratio, Quick Ratio, DIO, DSO, DPO, CCC, CFO, CapEx, Debt-to-Assets, concentración de clientes y ciclo de conversión de caja.

## 4.4 Endeudamiento y cobertura

El endeudamiento no es malo por definición: permite financiar inversiones, diferencias del ciclo o activos de larga duración. La pregunta es si la deuda tiene un coste, vencimiento y riesgo controlables, y si la caja del negocio puede cubrirla. En todas las fichas se distingue **deuda con interés** de las cuentas comerciales por pagar. Arrendamientos, pensiones, litigios y otros compromisos pueden mostrarse aparte o como ajustes semejantes a deuda, pero nunca se ocultan mediante una definición favorable.

### 4.4.1 Debt-to-Equity (D/E)

1. **Nombre:** Debt-to-Equity (D/E), deuda con interés sobre patrimonio o apalancamiento financiero.
2. **Para qué sirve:** mide cuántas unidades de deuda con interés hay por cada unidad de patrimonio contable. Ayuda a observar el riesgo que asume el accionista y los cambios en la estructura de capital.
3. **Variables:** deuda con interés corriente y no corriente; patrimonio atribuible a la matriz; inclusiones de arrendamientos, preferentes y otros instrumentos, que deben quedar explícitas.
4. **Fórmula:** `D/E = deuda con interés / patrimonio atribuible × 100`. La variante con deuda neta se escribe y etiqueta por separado.
5. **Pasos:** (1) listar deuda corriente y no corriente; (2) decidir si entran los arrendamientos; (3) obtener patrimonio atribuible; (4) dividir; (5) comparar con el ciclo y el sector; (6) observar si el patrimonio está reducido artificialmente.
6. **Ejemplo numérico:** deuda con interés `300`, patrimonio `700`; `D/E = 300/700 × 100 = 42,9 %`.
7. **Interpretación:** hay `0,43` unidades de deuda con interés por unidad de patrimonio. Con ROIC superior al coste de deuda, cierta deuda puede crear valor; con ROIC menor, amplifica las pérdidas.
8. **Rangos y cautelas por sector/contexto:** no existe un D/E prudente universal. Servicios públicos, inmobiliaria, aerolíneas, bancos y software con pocos activos requieren comparaciones distintas. El patrimonio contable puede no reflejar el valor de una marca o una base de clientes.
9. **Ejemplo de empresa excelente (hipotético):** D/E de 0,35x, Debt-to-Assets de 0,20x, ROIC del 14 % frente a WACC del 9 %, Debt/FCF de 1,8x y vencimientos escalonados. La deuda financia activos productivos.
10. **Promedio de referencia (hipotético):** la mediana hipotética del sector es 0,8x. No es mejor automáticamente la empresa con menor D/E; una empresa estable puede asumir más deuda si su cobertura y solvencia son fuertes.
11. **Caso problemático:** D/E de 3x por una adquisición pagada con deuda, mientras el ROIC cae durante la integración y el FCF se vuelve negativo. El patrimonio todavía parece amplio, pero la deuda vence antes de la recuperación.
12. **Caso en que el ratio engañe:** una empresa cuyo patrimonio es casi todo fondo de comercio compra deuda. D/E parece moderado, pero los intangibles no respaldan la proporción de deuda que sí respaldarían efectivo o equipos tangibles.
13. **Errores frecuentes:** usar todos los pasivos como deuda; usar beneficio en vez de patrimonio; mezclar patrimonio consolidado con beneficio atribuible; olvidar obligaciones semejantes a deuda; o presentar deuda neta como si fuera bruta.
14. **Cuándo no usarlo:** como único indicador cuando el patrimonio es negativo, en bancos según la lógica ordinaria de acciones, o cuando la estructura de capital hace inaplicable la categoría. Para política de crédito se necesitan flujo y vencimientos.
15. **Indicadores complementarios:** Debt-to-Assets, Net Debt, Net Debt/EBITDA, Debt/FCF, Interest Coverage, DSCR, diferencial ROIC-WACC, capital tangible y calendario de vencimientos.

### 4.4.2 Debt-to-Assets

1. **Nombre:** Debt-to-Assets, deuda con interés sobre activos o proporción de financiación con deuda.
2. **Para qué sirve:** mide qué proporción de la base de activos está financiada con deuda con interés y complementa al D/E con una medida de estructura de balance.
3. **Variables:** deuda con interés total; total de activos; criterio de saldos promedio o de cierre; inclusiones de arrendamientos y obligaciones semejantes a deuda.
4. **Fórmula:** `Debt-to-Assets = deuda con interés / total de activos × 100`.
5. **Pasos:** (1) identificar deuda corriente y no corriente; (2) incluir los ajustes acordados; (3) obtener activos totales; (4) dividir; (5) revisar fondo de comercio y activos restringidos; (6) comparar con una estructura de capital histórica.
6. **Ejemplo numérico:** deuda `300`, activos totales `1.500`; `Debt-to-Assets = 300/1.500 × 100 = 20,0 %`.
7. **Interpretación:** `0,20` de cada unidad de activo está financiada con deuda con interés. Describe estructura, no capacidad de pago ni rentabilidad.
8. **Rangos y cautelas por sector/contexto:** es útil en industria, servicios públicos, inmobiliaria y comercio. En bancos, los depósitos tienen función operativa. Un activo contable elevado puede ser intangible o tener recuperación incierta y no equivale a garantía líquida.
9. **Ejemplo de empresa excelente (hipotético):** Debt-to-Assets del 20 % con activos tangibles productivos, vencimientos largos, Interest Coverage de 8x y D/E moderado. La estructura resiste un escenario recesivo sin refinanciación urgente.
10. **Promedio de referencia (hipotético):** una mediana hipotética industrial es 30 %. Un 40 % puede ser manejable con FCF fuerte y uno 20 % puede ocultar compromisos fuera del balance.
11. **Caso problemático:** la deuda aumenta para financiar crecimiento, pero los activos solo crecen por capitalización interna o anticipos. Debt-to-Assets sube sin producir caja y la capacidad de servicio disminuye.
12. **Caso en que el ratio engañe:** una adquisición crea mucho fondo de comercio y mantiene bajo Debt-to-Assets, aunque no exista garantía tangible y los beneficios comprados sean solo expectativas.
13. **Errores frecuentes:** sumar todos los pasivos; confundir D/E con Debt-to-Assets; omitir preferentes u obligaciones semejantes a deuda; comparar fechas distintas; o tratar los intereses no controlantes como deuda.
14. **Cuándo no usarlo:** en intermediarios financieros o cuando los activos totales no representan recursos disponibles para acreedores. No debe ser el único criterio de solvencia; si se usa deuda neta, se identifica expresamente.
15. **Indicadores complementarios:** Current Ratio, D/E, Net Debt/EBITDA, Interest Coverage, DSCR, patrimonio tangible, fondo de comercio, CapEx y calendario de vencimientos.

### 4.4.3 Net Debt

1. **Nombre:** Net Debt, deuda neta o posición neta de deuda.
2. **Para qué sirve:** mide la deuda con interés menos efectivo e inversiones no operativas. Distingue la financiación bruta de la posición que queda después del efectivo realmente disponible.
3. **Variables:** deuda con interés corriente y no corriente; efectivo y equivalentes; inversiones líquidas no operativas; arrendamientos incluidos; y, opcionalmente, otras obligaciones semejantes a deuda.
4. **Fórmula:** `Net Debt = deuda con interés − efectivo no restringido − inversiones líquidas no operativas`. Si el resultado es negativo, hay efecto neto de caja o *net cash*.
5. **Pasos:** (1) listar deuda; (2) identificar arrendamientos y obligaciones semejantes; (3) clasificar efectivo disponible; (4) restar inversiones no operativas; (5) documentar un puente; (6) fechar antes de compararlo con EBITDA o FCF.
6. **Ejemplo numérico:** deuda `300`, efectivo `120`; `Net Debt = 300−120 = 180`.
7. **Interpretación:** la empresa conserva `180` de deuda neta. Un valor negativo no elimina cuentas por pagar, anticipos de clientes ni otras obligaciones de compra y servicio.
8. **Rangos y cautelas por sector/contexto:** se compara con la capacidad de caja y la volatilidad del negocio. En sectores regulados el efectivo puede no estar disponible; en operaciones prepagadas puede ser transitorio; en bancos, la lógica industrial no es adecuada.
9. **Ejemplo de empresa excelente (hipotético):** efecto neto de caja de 150, Interest Coverage de 10x, Debt/FCF menor de 1x y efectivo restringido reducido. La empresa no depende de refinanciación.
10. **Promedio de referencia (hipotético):** una deuda neta de 300 y EBITDA de 200 equivale a 1,5x, pero “300” no tiene un promedio útil aislado. La comparación exige flujo de caja, sector y fecha.
11. **Caso problemático:** Net Debt pasa de 0 a 700 al adquirir una empresa; Net Debt/EBITDA llega a 4x y Debt/FCF a 6x. La operación puede tener sentido estratégico, pero deja poco margen ante una caída.
12. **Caso en que el ratio engañe:** la empresa recibe un anticipo de cliente de 500 y lo muestra como efectivo. Net Debt parece muy negativo, pero gran parte de esa caja está comprometida contractualmente y no puede destinarse a cancelar deuda.
13. **Errores frecuentes:** restar todo el efectivo; no restar inversiones; sumar cuentas comerciales; mezclar deuda bruta y neta; ignorar filiales no consolidadas; o fechar el efectivo y la deuda de forma distinta.
14. **Cuándo no usarlo:** como único indicador y en bancos, aseguradoras o empresas con tesorería restringida. No se confunde con EV: EV también contiene capitalización bursátil, preferentes e intereses no controlantes.
15. **Indicadores complementarios:** Net Debt/EBITDA, Debt/FCF, Interest Coverage, DSCR, Cash Ratio, calendario de vencimientos de deuda, calidad del efectivo y compromisos de compra.

### 4.4.4 Net Debt/EBITDA

1. **Nombre:** Net Debt/EBITDA, deuda neta sobre EBITDA.
2. **Para qué sirve:** compara la deuda neta con el EBITDA anual y estima cuántos años de resultado operativo actual representaría aproximadamente. Complementa la visión de caja.
3. **Variables:** Net Debt; EBITDA LTM o TTM; política de arrendamientos; ajustes de adquisiciones, reestructuración y partidas puntuales; fecha y moneda.
4. **Fórmula:** `Net Debt/EBITDA = Net Debt / EBITDA TTM`. Se expresa en `x`; un Net Debt negativo produce un múltiplo negativo, no un múltiplo de cobertura.
5. **Pasos:** (1) calcular deuda y efectivo en la misma fecha; (2) restar efectivo no restringido; (3) construir EBITDA TTM reproducible; (4) dividir; (5) normalizar ajustes; (6) contrastar con FCF y vencimientos.
6. **Ejemplo numérico:** deuda `480`, efectivo `80`, EBITDA `200`; Net Debt `400`; `400/200 = 2,00x`.
7. **Interpretación:** la deuda neta equivale aproximadamente a dos años del EBITDA actual. No significa que la empresa tarde exactamente dos años en pagar: EBITDA puede caer y no todo EBITDA se convierte en caja.
8. **Rangos y cautelas por sector/contexto:** es útil en industria, consumo, telecomunicaciones y comercio; menos útil en bancos, servicios públicos regulados, biotecnología y negocios con EBITDA volátil o negativo. La política de arrendamientos debe ser coherente con el EBITDA.
9. **Ejemplo de empresa excelente (hipotético):** Net Debt/EBITDA de 0,5x, DSCR de 3x, conversión de EBITDA a FCF alta y vencimientos diversificados. El apalancamiento puede reducirse incluso con crecimiento moderado.
10. **Promedio de referencia (hipotético):** una mediana hipotética de un conjunto industrial es 2,0x y otra de empresas de calidad es 1,2x. No existe un único nivel aceptable y el indicador debe mejorar al atravesar el ciclo.
11. **Caso problemático:** el múltiplo es 0,5x porque la empresa acaba de vender un activo, recibe el efectivo y luego paga un dividendo especial. El punto de partida no es operativo ni sostenible.
12. **Caso en que el ratio engañe:** un minorista tiene deuda neta negativa en diciembre por un pico estacional de inventario y cobros. En enero la posición cambia; una única fecha no resiste un análisis de estrés.
13. **Errores frecuentes:** tomar un EBITDA ajustado no auditado; mezclar EV y Net Debt; usar EBITDA consolidado con deuda solo de la matriz; ignorar efectivo restringido; o mezclar fechas de numerador y denominador.
14. **Cuándo no usarlo:** con EBITDA cero o negativo, en intermediarios financieros o cuando los ajustes no son reproducibles. No reemplaza Debt/FCF, DSCR ni un plan de vencimientos.
15. **Indicadores complementarios:** Debt/FCF, Net Debt, Interest Coverage, DSCR, FCF/EBITDA, CapEx/EBITDA, calendario de vencimientos y cláusulas de deuda.

### 4.4.5 Debt/FCF

1. **Nombre:** Debt/FCF, deuda con interés sobre flujo de caja libre.
2. **Para qué sirve:** compara la deuda con el FCF histórico disponible y aproxima la capacidad de amortizar deuda con caja después de la inversión. Complementa al apalancamiento sobre EBITDA.
3. **Variables:** deuda con interés bruta —o neta, si se declara—; FCF histórico `CFO−CapEx`; preferiblemente FCF TTM normalizado; CapEx de mantenimiento; política de servicio de deuda.
4. **Fórmula:** `Debt/FCF = deuda con interés / FCF histórico`, expresado en `x` o número de años de FCF. `Net Debt/FCF = deuda neta / FCF histórico` es una variante distinta.
5. **Pasos:** (1) calcular FCF con CFO menos CapEx; (2) separar inversión de crecimiento y mantenimiento; (3) normalizar el ciclo; (4) dividir solo con FCF positivo; (5) contrastar dividendos, recompras y vencimientos; (6) usar FCFF si se analiza EV.
6. **Ejemplo numérico:** deuda con interés `500`, FCF histórico `100`; `Debt/FCF = 500/100 = 5,00x`.
7. **Interpretación:** la deuda equivale a cinco veces el FCF de un año. Si el FCF se mantuviera, cancelarla requeriría cinco años antes de crecimiento, dividendos o nuevas inversiones; no es un calendario contractual.
8. **Rangos y cautelas por sector/contexto:** es más informativo que Debt/EBITDA cuando el CapEx es elevado, pero muy sensible al capital circulante. Construcción, biotecnología, minería, software y sectores cíclicos requieren FCF normalizado. En bancos no es la medida adecuada.
9. **Ejemplo de empresa excelente (hipotético):** Debt/FCF de 1,5x, FCF estable después del mantenimiento y reinversión con ROIC superior al WACC. La deuda no obliga a cortar inversiones esenciales.
10. **Promedio de referencia (hipotético):** una mediana hipotética del sector industrial con FCF normalizado es 3,0x. Un minorista de baja deuda puede estar en 0,5x; una biotecnología en expansión puede no tener FCF interpretable.
11. **Caso problemático:** Debt/FCF de 8x porque el CapEx de crecimiento se trata como una decisión aislada. La empresa puede ser excelente a largo plazo, pero no pagar deuda con el FCF de un solo año sin un plan prospectivo.
12. **Caso en que el ratio engañe:** la CFO sube por aumento de cuentas por pagar y el FCF parece `100`, por lo que Debt/FCF cae. Al año siguiente los proveedores exigen pago y la deuda no se canceló realmente con caja generada por la operación.
13. **Errores frecuentes:** usar FCFF contra deuda; llamar EBITDA FCF; usar un trimestre estacional; no separar CapEx de crecimiento; omitir deuda con interés; o presentar un valor sin indicar si es bruto o neto.
14. **Cuándo no usarlo:** con FCF cero o negativo, en intermediarios financieros o con flujos no comparables. En una fase fuerte de inversión se acompaña con FCF normalizado, CapEx futuro y un plan de cancelación.
15. **Indicadores complementarios:** Net Debt/EBITDA, Debt-to-Assets, Interest Coverage, DSCR, CFO/beneficio neto, CapEx, capital circulante y calendario de vencimientos.

### 4.4.6 Interest Coverage

1. **Nombre:** Interest Coverage, cobertura de intereses o EBIT/Interés.
2. **Para qué sirve:** mide la capacidad del beneficio operativo para cubrir el gasto de interés antes de impuestos y distribución de capital. Es un control temprano de solvencia.
3. **Variables:** EBIT; interés devengado y efectivo, según la variante; arrendamientos y otros cargos financieros; periodo TTM. El numerador y denominador deben cubrir la misma obligación.
4. **Fórmula:** `Interest Coverage = EBIT / gasto de interés`, expresado en `x`. Una variante de servicio fijo puede ser `(EBITDA−CapEx)/(interés efectivo+carga fija)`, pero no es la misma.
5. **Pasos:** (1) obtener EBIT antes de intereses; (2) identificar interés incluido y capitalizado; (3) normalizarlo; (4) separar arrendamientos; (5) dividir; (6) probar una caída de EBIT y una subida del tipo de interés.
6. **Ejemplo numérico:** EBIT `150`, interés `25`; `Interest Coverage = 150/25 = 6,00x`.
7. **Interpretación:** el EBIT cubre seis veces el gasto de interés. No demuestra que el EBIT sea caja ni que la deuda total pueda pagarse; mide un servicio concreto.
8. **Rangos y cautelas por sector/contexto:** resulta útil con EBIT positivo y estable, pero no en bancos, aseguradoras, proyectos sin EBIT o negocios muy cíclicos. La cobertura puede caer aunque EBITDA no cambie si sube el coste de deuda.
9. **Ejemplo de empresa excelente (hipotético):** Interest Coverage de 9x, EBIT/FCF de 2x, vencimientos diversificados y sensibilidad moderada. En un escenario recesivo la cobertura sigue siendo suficiente.
10. **Promedio de referencia (hipotético):** una mediana hipotética de un sector regulado es 4x, pero sus reglas pueden ser distintas. Un valor de 2x puede ser manejable con deuda barata; uno de 5x puede ser insuficiente si las amortizaciones son estrictas.
11. **Caso problemático:** la cobertura es 8x porque la empresa capitaliza interés y difiere el gasto. El interés efectivo sube y la cobertura económica de caja es mucho menor.
12. **Caso en que el ratio engañe:** el EBIT incluye una ganancia por venta de activos y una subvención no recurrente. Ninguno se repetirá para pagar intereses; la cobertura aparente no representa la cobertura recurrente.
13. **Errores frecuentes:** usar EBITDA contra interés pero llamarlo cobertura EBIT; mezclar interés pagado y devengado; ignorar arrendamientos; mezclar fechas; o normalizar un año de interés muy bajo sin explicar la causa.
14. **Cuándo no usarlo:** en una entidad financiera, con EBIT negativo o cuando solo se dispone de EBITDA. Para deuda con amortización, Debt/FCF y DSCR son necesarios.
15. **Indicadores complementarios:** DSCR, Net Debt/EBITDA, Debt/FCF, EBIT/FCF, cobertura de cargos fijos, calendario de vencimientos, cobertura de tipos y cláusulas de deuda.

### 4.4.7 Debt Service Coverage Ratio (DSCR)

1. **Nombre:** Debt Service Coverage Ratio (DSCR), cobertura del servicio de deuda.
2. **Para qué sirve:** compara el flujo disponible para atender deuda con el interés y el principal programados en el mismo periodo. Mide capacidad de pago, no solo rentabilidad.
3. **Variables:** CFADS antes del servicio de deuda; CapEx de mantenimiento; interés efectivo; principal programado; impuestos y capital circulante normalizados. En inmobiliaria puede usarse NOI o AFFO como aproximación de CFADS, pero se documenta.
4. **Fórmula:** `DSCR = (CFADS−CapEx de mantenimiento) / (interés efectivo + principal programado)`, expresado en `x`. Si CapEx ya está incluido en CFADS, no se resta otra vez.
5. **Pasos:** (1) reconstruir CFADS; (2) identificar flujo antes de interés y amortización; (3) restar CapEx de mantenimiento una sola vez; (4) sumar el servicio de deuda; (5) dividir; (6) proyectar cada año, incluidas las amortizaciones concentradas en un solo vencimiento.
6. **Ejemplo numérico:** CFADS `180`, CapEx de mantenimiento `30`, interés efectivo `20`, principal programado `40`; `DSCR = (180−30)/(20+40) = 2,50x`.
7. **Interpretación:** el flujo disponible cubre `2,50` veces el servicio de deuda. Un DSCR de 1,0x consume todo el flujo modelado y no deja reserva para limpieza, crecimiento o imprevistos.
8. **Rangos y cautelas por sector/contexto:** es especialmente importante en financiación de proyectos, inmobiliaria, servicios públicos y negocios de alta inversión. Un contrato puede definir CFADS de otra manera; debe respetarse esa definición.
9. **Ejemplo de empresa excelente (hipotético):** DSCR de 3,0x en el caso base, 2,0x con crecimiento y 1,5x en un escenario recesivo, con reservas y vencimientos escalonados. El plan de caja sigue siendo creíble.
10. **Promedio de referencia (hipotético):** un conjunto hipotético de proyectos de infraestructura tiene un DSCR base de 1,8x. No es un covenant universal; la vida del activo, el plazo y la regulación cambian lo razonable.
11. **Caso problemático:** un desarrollador termina la construcción y reduce el CapEx de mantenimiento durante dos años. El DSCR sube a 3x y después cae cuando comienza la operación y la amortización.
12. **Caso en que el ratio engañe:** CFADS incluye una liberación de capital circulante, el cobro de una cuenta antigua y una venta de activos. El DSCR es alto, pero el ingreso operativo recurrente no puede sostener el mismo principal.
13. **Errores frecuentes:** usar CFO después de interés y añadir el interés otra vez; restar CapEx dos veces; omitir principal; usar NOI sin impuestos ni CapEx; o ignorar una amortización concentrada.
14. **Cuándo no usarlo:** cuando faltan datos de CFADS, CapEx de mantenimiento o amortización; en intermediarios financieros; y cuando la deuda se paga con una venta puntual de activos. Exige un modelo de flujo, no solo un balance.
15. **Indicadores complementarios:** Interest Coverage, Debt/FCF, Debt/EBITDA, CapEx de mantenimiento, cobertura de ingresos, calendario de vencimientos, reservas y cláusulas de deuda.

## 4.5 Eficiencia de activos y capital circulante

Las rotaciones conectan flujos con saldos. Un numerador anual y un denominador de cierre no son comparables si la empresa cambia rápidamente; por ello se prefieren saldos promedio. Los ratios de días de este capítulo emplean **365 días calendario** y, cuando el flujo corresponde a un trimestre o semestre, primero se anualiza de manera homogénea. Un pico estacional requiere comparación con la misma fecha o con promedios mensuales.

### 4.5.1 Asset Turnover

1. **Nombre:** Asset Turnover, rotación de activos o eficiencia de los activos.
2. **Para qué sirve:** mide cuántos turnos de la base de activos genera el ingreso y ayuda a descomponer ROA o ROE en margen y uso del activo.
3. **Variables:** ingresos del periodo; total de activos promedio, o solo activos operativos promedio según variante; perímetro y fecha.
4. **Fórmula:** `Asset Turnover = ingresos / activos totales promedio`, con `activos promedio = (activos iniciales+activos finales)/2`.
5. **Pasos:** (1) obtener ingresos del ejercicio; (2) construir activos de apertura y cierre; (3) promediar; (4) dividir; (5) separar efectivo, inversiones y activos no productivos; (6) comparar con intensidad de capital del sector.
6. **Ejemplo numérico:** ingresos `1.200`, activos iniciales `800` y finales `1.200`; promedio `1.000`; `Asset Turnover = 1,20x`.
7. **Interpretación:** cada unidad de activo promedio generó `1,20` unidades de ingreso en el año. Una rotación alta puede indicar eficiencia, pero también venta de bajo margen o capacidad subutilizada que el promedio no captura.
8. **Rangos y cautelas por sector/contexto:** comercio y servicios pueden girar varias veces; los activos pesados se utilizan con mucha menor frecuencia. Bancos y aseguradoras necesitan una rotación de activos adaptada a sus estados financieros. En proyectos y construcción, una cartera de obras puede distorsionar el ratio.
9. **Ejemplo de empresa excelente (hipotético):** rotación de 1,3x, ROIC del 14 % y margen operativo del 12 %; los activos crecen solo cuando la capacidad se utiliza y la caja confirma eficiencia.
10. **Promedio de referencia (hipotético):** una mediana hipotética de comercio es 2,0x, mientras una industrial es 0,8x. No se necesita alcanzar el valor del comercio minorista en una fábrica.
11. **Caso problemático:** los ingresos caen durante una caída de demanda, pero los activos se mantienen; la rotación baja. Puede ser una capacidad de reserva útil o una carga obsoleta, y la calidad del activo decide.
12. **Caso en que el ratio engañe:** una empresa de bajo margen compra inventarios y los vende rápidamente, generando muchas ventas; Asset Turnover sube a 3x, pero el margen bruto cae al 5 % y no mejora el ROIC.
13. **Errores frecuentes:** ingresos netos con activos brutos; cierre de un año con flujo de otro; no separar activos no operativos; incluir ingresos de una adquisición solo por un mes; o asumir que una rotación alta es buena.
14. **Cuándo no usarlo:** en bancos, aseguradoras o empresas donde los “activos” son el instrumento de operación y la fórmula industrial no aporta. También es poco informativo cuando el valor del negocio depende de intangibles que el balance no captura.
15. **Indicadores complementarios:** ROA, Operating Margin, ROIC, CapEx/ingresos, Asset Turnover operativo, DIO, DSO, DPO y tasa de utilización de capacidad.

### 4.5.2 Inventory Turnover

1. **Nombre:** Inventory Turnover, rotación de inventarios.
2. **Para qué sirve:** mide cuántas veces se renueva el inventario durante el periodo y ayuda a evaluar si los bienes comprados o producidos se convierten en ventas a un ritmo compatible con el modelo.
3. **Variables:** COGS o coste de ventas; inventario promedio; método de valoración; productos no negociables, obsolescencia y ajustes de provisión correctamente incluidos o excluidos.
4. **Fórmula:** `Inventory Turnover = COGS / inventario promedio`, con `inventario promedio = (inventario inicial+inventario final)/2`.
5. **Pasos:** (1) identificar COGS; (2) obtener saldos de inventario; (3) promediar; (4) dividir; (5) separar productos obsoletos y reservas; (6) relacionar con margen, provisiones y estacionalidad.
6. **Ejemplo numérico:** COGS `600`, inventario inicial `100` y final `140`; promedio `120`; `Inventory Turnover = 600/120 = 5,00x`.
7. **Interpretación:** el inventario promedio se renovó cinco veces en el año. No significa cinco ventas netas si hay devoluciones, lotes de producción o cambios de precio; es una aproximación de la velocidad de salida.
8. **Rangos y cautelas por sector/contexto:** resulta útil en comercio, manufactura y productos físicos. Alimentos, farmacia, moda, tecnología y construcción tienen obsolescencia y plazos de entrega distintos. Las empresas sin inventario no deben fabricar una rotación con denominador cero.
9. **Ejemplo de empresa excelente (hipotético):** rotación de 6x, DIO de 61 días, márgenes de inventario positivos y baja obsolescencia; la mejora de velocidad no depende de faltantes de inventario.
10. **Promedio de referencia (hipotético):** una mediana hipotética de distribución es 5x, mientras una mediana de fabricación es 3x. El nivel depende de la profundidad del inventario y del servicio al cliente.
11. **Caso problemático:** el COGS baja y el inventario aumenta por exceso de compras. La rotación cae, pero el margen aparentemente mejora con descuentos; la empresa acumula obsolescencia y aumenta el coste del capital circulante.
12. **Caso en que el ratio engañe:** un minorista vende inventario antiguo a precio de liquidación. DIO cae y la rotación sube, pero la pérdida se reconoce en provisiones y el margen de reposición empeora.
13. **Errores frecuentes:** usar ingresos en lugar de COGS; inventarios netos que ocultan una provisión excesiva; mezclar inventario final; excluir materiales importantes; o usar días de un trimestre sin anualizar el inventario.
14. **Cuándo no usarlo:** cuando el inventario es insignificante, en un servicio puro o cuando el coste de flujos no está claramente definido. En una fusión o un cambio contable no debe hacerse un puente automático.
15. **Indicadores complementarios:** DIO, Gross Margin, COGS, provisión por obsolescencia, deterioros de inventario, niveles de seguridad, capacidad de producción y Cash Conversion Cycle.

### 4.5.3 Receivables Turnover

1. **Nombre:** Receivables Turnover, rotación de cuentas por cobrar.
2. **Para qué sirve:** mide la velocidad con que se convierte en caja una cartera de clientes y ayuda a evaluar la calidad del crédito y la eficacia del cobro.
3. **Variables:** ventas netas al crédito —preferiblemente—; cuentas por cobrar netas; provisión por incobrabilidad; y en menor lugar ingresos netos si no hay separación de crédito.
4. **Fórmula:** `Receivables Turnover = ventas netas a crédito / cuentas por cobrar netas promedio`.
5. **Pasos:** (1) obtener ventas de crédito; (2) identificar cartera bruta y provisión; (3) promediar saldos; (4) dividir; (5) separar clientes principales, préstamos y otras líneas de ingresos; (6) revisar antigüedad de cartera.
6. **Ejemplo numérico:** ventas a crédito `900`, cuentas por cobrar iniciales `80` y finales `100`; promedio `90`; `Receivables Turnover = 900/90 = 10,00x`.
7. **Interpretación:** la cartera promedio se cobró alrededor de diez veces en el año. Es una velocidad teórica; no dice qué porcentaje se recupera realmente ni el margen de la venta.
8. **Rangos y cautelas por sector/contexto:** resulta útil en crédito comercial, distribución y B2B. Los servicios públicos y muchos usuarios finales suelen prepagar; los contratos de construcción tienen otros riesgos. Los grupos con contratos a largo plazo pueden tener un DSO elevado sin necesariamente registrar pérdidas.
9. **Ejemplo de empresa excelente (hipotético):** rotación de 10x, DSO de 36,5 días, provisión prudente y ausencia de concentración. El equipo de cobro y los términos contractuales se sostienen.
10. **Promedio de referencia (hipotético):** una mediana hipotética B2B es 8x, mientras una mediana de software contractual es 5x. El contrato y la concentración pesan más que una regla fija.
11. **Caso problemático:** la rotación baja de 10x a 6x mientras los ingresos crecen. Puede indicar ventas a crédito más arriesgadas o una nueva cláusula; en cualquier caso, aumenta el capital circulante.
12. **Caso en que el ratio engañe:** la empresa vende facturas con recurso y transfiere riesgo de crédito, reduce cuentas por cobrar y sube la rotación. La mejora contable no equivale a mejor cobro del cliente final.
13. **Errores frecuentes:** usar ingresos brutos; omitir cuentas por cobrar de operaciones distintas; ignorar que las ventas netas a crédito no están publicadas; no usar el valor neto contable; o utilizar un solo cierre estacional.
14. **Cuándo no usarlo:** cuando se cobra por adelantado y no existe una cartera comercial significativa, o cuando ingresos y cuentas por cobrar pertenecen a modelos distintos. En bancos y aseguradoras se usan indicadores de calidad de activo y duración.
15. **Indicadores complementarios:** DSO, provisión por incobrabilidad, antigüedad de cartera, concentración de clientes, Cash Conversion Cycle, CFO y cumplimiento de términos.

### 4.5.4 Payables Turnover

1. **Nombre:** Payables Turnover, rotación de cuentas por pagar.
2. **Para qué sirve:** mide con qué frecuencia la empresa utiliza y cancela sus obligaciones con proveedores; ayuda a observar el crédito comercial recibido y las condiciones de compra.
3. **Variables:** compras o costo de bienes y servicios comprados; cuentas por pagar promedio; proveedores, otras obligaciones comerciales y facturas pendientes de capital cuando corresponda separarlas.
4. **Fórmula:** `Payables Turnover = compras / cuentas por pagar promedio`. Cuando el balance solo ofrece COGS y existe inventario, `compras = COGS + inventario final−inventario inicial` antes de ajustes.
5. **Pasos:** (1) estimar compras; (2) obtener cuentas por pagar; (3) promediar; (4) dividir; (5) separar proveedores, compras de capital y partes relacionadas; (6) revisar términos y vencimientos.
6. **Ejemplo numérico:** compras `500`, cuentas por pagar iniciales `80` y finales `120`; promedio `100`; `Payables Turnover = 500/100 = 5,00x`.
7. **Interpretación:** el pasivo comercial promedio se canceló alrededor de cinco veces. Una rotación alta puede indicar pagos rápidos y buenos términos, o una empresa que presiona excesivamente a los proveedores.
8. **Rangos y cautelas por sector/contexto:** depende de los términos de crédito del sector: comercio, construcción, manufactura y servicios públicos tienen DPO distintos. Los anticipos, pagos a partes relacionadas y facturas de capital no se comportan como crédito rutinario de proveedores.
9. **Ejemplo de empresa excelente (hipotético):** rotación de 5x, DPO de 73 días y proveedores con términos estables; no hay retrasos sistemáticos, pagos a empresas relacionadas ni riesgo de incumplimiento.
10. **Promedio de referencia (hipotético):** una mediana hipotética de distribución es 5x y una de manufactura es 6x. Esta diferencia no es una regla sin comprobar los días contractuales de pago.
11. **Caso problemático:** DPO se eleva de 45 a 100 días para financiar caja. El CCC mejora, pero aumenta la tensión con proveedores, la pérdida de descuentos y la concentración de pagos.
12. **Caso en que el ratio engañe:** la empresa pospone el pago de facturas vencidas y clasifica el saldo como “comercial”. Payables Turnover baja, pero algunos proveedores dejan de entregar, sube el coste de producción y el ratio ya no refleja el efecto económico.
13. **Errores frecuentes:** usar COGS sin corregir inventario; mezclar compras de capital; omitir cuentas por pagar de servicios; usar inventario bruto y provisiones; o tomar proveedores no relacionados como si el crédito fuese gratuito.
14. **Cuándo no usarlo:** cuando no pueden reconstruirse las compras, en empresas financieras o cuando las cuentas por pagar están dominadas por impuestos, beneficios de empleados o acreedores de capital. Un DPO elevado debe leerse con concentración de proveedores y riesgo de pago.
15. **Indicadores complementarios:** DPO, DIO, DSO, CCC, condiciones contractuales, cuentas por pagar vencidas, descuentos perdidos, concentración de proveedores y flujo de caja.

### 4.5.5 Days Inventory Outstanding (DIO)

1. **Nombre:** Days Inventory Outstanding (DIO), días de inventario o días que permanecen las existencias.
2. **Para qué sirve:** expresa cuántos días de coste de ventas, aproximadamente, permanece el inventario antes de salir. Facilita comparar la gestión de existencias y su financiación.
3. **Variables:** inventario promedio; COGS del periodo; rotación de inventario; método de valoración; provisiones, productos obsoletos y estacionalidad.
4. **Fórmula:** `DIO = inventario promedio / COGS × 365`, equivalente a `DIO = 365 / Inventory Turnover` si ambos usan el mismo periodo anualizado.
5. **Pasos:** (1) calcular COGS; (2) promediar inventario; (3) dividir; (4) multiplicar por 365; (5) verificar que el flujo y el saldo sean del mismo periodo; (6) comparar con proveedores y demanda.
6. **Ejemplo numérico:** inventario promedio `120`, COGS `600`; `DIO = 120/600 × 365 = 73,0 días`.
7. **Interpretación:** el inventario promedio representa unos 73 días de coste de ventas. No significa que cada unidad permanezca exactamente 73 días: puede haber artículos muy lentos y otros muy rápidos.
8. **Rangos y cautelas por sector/contexto:** alimentos, farmacia, moda, tecnología, manufactura y comercio tienen ciclos y obsolescencia diferentes. Un DIO bajo puede significar eficiencia o faltantes de inventario; uno alto puede ser servicio al cliente o capital muerto.
9. **Ejemplo de empresa excelente (hipotético):** DIO de 60 días, baja obsolescencia, nivel de servicio alto y DPO de 55 días; la cadena de suministro financia parte del ciclo sin tensión.
10. **Promedio de referencia (hipotético):** un minorista hipotético tiene DIO de 70 días y un fabricante 90 días. La mediana debe calcularse con la misma valoración y fecha.
11. **Caso problemático:** DIO baja de 90 a 55 días porque se recortan inventarios de seguridad. La caja mejora, pero después aumentan los faltantes, las reclamaciones de clientes y los costes de urgencia.
12. **Caso en que el ratio engañe:** se reduce el inventario a mitad de ejercicio y luego se lanza una campaña de descuentos. El DIO mejora mientras la provisión por obsolescencia y el coste de reposición aumentan.
13. **Errores frecuentes:** usar inventario final sin promedio; usar ingresos en vez de COGS; no anualizar un trimestre; mezclar inventario bruto y neto; o tratar inventario de terceros como propio.
14. **Cuándo no usarlo:** cuando no exista inventario significativo, en un servicio puro sin COGS definido o cuando la empresa haya sufrido un cambio estructural. No puede interpretarse sin información de cadena de suministro y nivel de servicio.
15. **Indicadores complementarios:** Inventory Turnover, Gross Margin, DSO, DPO, CCC, nivel de servicio, faltantes, provisión por obsolescencia y capacidad de producción.

### 4.5.6 Days Sales Outstanding (DSO)

1. **Nombre:** Days Sales Outstanding (DSO), días de ventas pendientes de cobro o días de cuentas por cobrar.
2. **Para qué sirve:** estima cuántos días de ventas permanecen pendientes de cobro. Ayuda a evaluar crédito, condiciones contractuales, cobro y riesgo de morosidad.
3. **Variables:** cuentas por cobrar netas promedio; ventas netas a crédito, o ingresos netos si no se conoce la mezcla; provisión por incobrabilidad; devoluciones y anticipos.
4. **Fórmula:** `DSO = cuentas por cobrar netas promedio / ventas netas a crédito × 365`, equivalente a `365 / Receivables Turnover`.
5. **Pasos:** (1) identificar ventas a crédito; (2) obtener cuentas por cobrar netas; (3) promediar; (4) dividir; (5) multiplicar por 365; (6) comparar con términos contractuales y antigüedad real.
6. **Ejemplo numérico:** cuentas por cobrar promedio `90`, ventas a crédito `900`; `DSO = 90/900 × 365 = 36,5 días`.
7. **Interpretación:** la cartera promedio equivale a 36,5 días de ventas. No es una promesa de cobro: depende de la calidad de los clientes, la estacionalidad y las reservas de la cartera.
8. **Rangos y cautelas por sector/contexto:** B2B, construcción, servicios públicos, salud y exportación tienen plazos muy distintos. Los contratos con hitos, retenciones y anticipos a clientes pueden alargarlo sin implicar morosidad.
9. **Ejemplo de empresa excelente (hipotético):** DSO de 38 días, términos de 30 días más una prórroga comercial controlada, concentración moderada y provisión alineada con la antigüedad.
10. **Promedio de referencia (hipotético):** una mediana hipotética de crédito comercial es 45 días, mientras una empresa de software contractual es 60. El punto de partida sectorial no fija un objetivo.
11. **Caso problemático:** DSO sube de 40 a 70 días mientras los ingresos crecen. Puede ser una venta nueva de largo crédito, pero inmoviliza caja y puede esconder mora.
12. **Caso en que el ratio engañe:** la empresa factura antes de entregar y registra todas las ventas como a crédito; DSO mejora porque el cobro llega casi de inmediato, pero se ha desplazado el riesgo de entrega. También puede usar factoring con recurso.
13. **Errores frecuentes:** usar ingresos brutos; no separar efectivo y crédito; omitir devoluciones; usar saldo final; compensar saldos de forma impropia; o llamar “mejor” a un DSO menor cuando el sector necesita más plazo.
14. **Cuándo no usarlo:** cuando existe poco crédito comercial, cuando la facturación está vinculada a contratos de largo plazo con calendarios de caja distintos o en entidades financieras. No sustituye el informe de antigüedad de cuentas por cobrar.
15. **Indicadores complementarios:** Receivables Turnover, provisión por incobrabilidad, antigüedad de cartera, concentración de clientes, DIO, DPO, CCC y CFO.

### 4.5.7 Days Payable Outstanding (DPO)

1. **Nombre:** Days Payable Outstanding (DPO), días de cuentas por pagar o días de crédito de proveedores.
2. **Para qué sirve:** estima cuántos días de compras quedan pendientes de pago y muestra el crédito comercial obtenido de proveedores, además del riesgo de retrasar obligaciones.
3. **Variables:** cuentas por pagar comerciales promedio; compras del periodo —o COGS ajustado por cambio de inventario—; cuentas de proveedores relacionados, anticipos y facturas de capital, que deben separarse.
4. **Fórmula:** `DPO = cuentas por pagar promedio / compras × 365`, equivalente a `365 / Payables Turnover`.
5. **Pasos:** (1) reconstruir compras; (2) obtener cuentas por pagar; (3) promediar; (4) dividir; (5) multiplicar por 365; (6) comparar con términos contractuales, descuentos e incidencias de pago.
6. **Ejemplo numérico:** cuentas por pagar promedio `100`, compras `500`; `DPO = 100/500 × 365 = 73,0 días`.
7. **Interpretación:** el pasivo comercial promedio equivale a 73 días de compras. Un DPO alto puede mejorar la caja, pero no es mejor si viola los contratos o deteriora la relación con proveedores.
8. **Rangos y cautelas por sector/contexto:** comercio, industria, construcción y servicios tienen plazos de pago distintos. Las empresas con plazos cortos de proveedores o integración vertical estratégica requieren otra interpretación; el DPO no puede ampliarse indefinidamente.
9. **Ejemplo de empresa excelente (hipotético):** DPO de 65 días frente a términos de 60 más 5 días de margen estable, sin facturas vencidas relevantes ni proveedores dependientes de la empresa.
10. **Promedio de referencia (hipotético):** una mediana hipotética de distribución es 60 días y una mediana de manufactura es 55. El término contractual es la referencia primaria.
11. **Caso problemático:** DPO pasa de 45 a 100 días para financiar crecimiento. El CCC mejora, pero aparecen mora, pérdida de descuentos, concentración de pagos y deterioro del suministro.
12. **Caso en que el ratio engañe:** el ratio mejora porque la empresa deja de comprar y las compras caen a cero; el DPO puede volverse inestable. También puede aumentar una factura aislada de una operación de capital.
13. **Errores frecuentes:** usar COGS sin cambio de inventario; mezclar proveedores de capital; omitir anticipos; usar saldo final; o llamar crédito gratuito a una demora contractual.
14. **Cuándo no usarlo:** cuando no pueden reconstruirse las compras, la empresa no tiene cuentas comerciales por pagar o las entidades financieras dominan el balance. Debe leerse con saldos vencidos y concentración de proveedores.
15. **Indicadores complementarios:** Payables Turnover, DIO, DSO, CCC, términos de pago, cuentas vencidas, descuentos, concentración de proveedores y Debt/FCF.

### 4.5.8 Cash Conversion Cycle (CCC)

1. **Nombre:** Cash Conversion Cycle (CCC), ciclo de conversión de caja o ciclo de caja.
2. **Para qué sirve:** resume cuántos días permanecen inmovilizados los recursos entre pagar el inventario y cobrar la venta. Integra DIO, DSO y DPO.
3. **Variables:** DIO; DSO; DPO; todos calculados con el mismo periodo anualizado, inventario y cuentas promedio y criterio de ventas/compras coherente.
4. **Fórmula:** `CCC = DIO + DSO−DPO`. Un resultado negativo significa que el crédito de proveedores financia, en términos netos, el inventario y las cuentas por cobrar; no significa que el modelo no tenga riesgo.
5. **Pasos:** (1) calcular DIO; (2) calcular DSO; (3) calcular DPO; (4) restar; (5) verificar que los tres flujos sean del mismo periodo; (6) comparar con tendencia, proveedores y necesidad de capital circulante.
6. **Ejemplo numérico:** DIO `73`, DSO `36,5`, DPO `73`; `CCC = 73+36,5−73 = 36,5 días`.
7. **Interpretación:** la empresa necesita inmovilizar caja durante unos 36,5 días entre el pago a proveedores y el cobro a clientes. El ciclo corto suele reducir la financiación del crecimiento.
8. **Rangos y cautelas por sector/contexto:** comercio, manufactura, proyectos, suscripción y servicios tienen ciclos distintos. Un CCC negativo puede ser excelente en un modelo estable, pero frágil si los proveedores cambian sus términos.
9. **Ejemplo de empresa excelente (hipotético):** CCC de 25 días, DIO de 60, DSO de 35 y DPO de 70; hay proveedores diversificados, términos transparentes y nivel de servicio estable.
10. **Promedio de referencia (hipotético):** una mediana hipotética de distribución es 45 días y una mediana de manufactura es 60. La comparación sectorial debe usar la misma definición.
11. **Caso problemático:** DPO aumenta de 45 a 100 y reduce el CCC a 10 días, pero la empresa acumula facturas vencidas y pierde proveedores. El ciclo aparentemente mejora mientras la operación se vuelve más frágil.
12. **Caso en que el ratio engañe:** la empresa acelera cobros con descuentos y retrasa pagos para reducir el CCC, pero pierde margen y confirma la caída de DSO; el ciclo de caja no mide la rentabilidad de esas decisiones.
13. **Errores frecuentes:** sumar DPO en vez de restarlo; mezclar DSO con ingresos totales y DIO con COGS; usar cierres estacionales; omitir proveedores relacionados; o considerar automáticamente bueno un CCC negativo sin analizar la situación de los proveedores.
14. **Cuándo no usarlo:** cuando no hay inventario, no hay crédito comercial o los ciclos de cada segmento son tan distintos que un único CCC promedio oculta la realidad. Para una empresa multidominio se calculan por segmento cuando sea posible.
15. **Indicadores complementarios:** DIO, DSO, DPO, Working Capital, CFO, Net Debt, ROIC, términos de proveedores, concentración de clientes y estacionalidad.

## 4.6 Valoración

Los múltiplos de mercado cambian con la cotización, mientras los ratios contables dependen de los estados financieros. Para compararlos hay que fijar una fecha de corte, moneda, perímetro de consolidación, número de acciones, beneficio atribuible y tratamiento de deuda, efectivo, arrendamientos e intereses no controlantes. Los múltiplos de patrimonio usan capitalización bursátil; los múltiplos de empresa usan EV. Un múltiplo bajo no siempre significa Infravaloración y uno alto no siempre significa sobrevaloración: también importan calidad, ciclo, crecimiento, riesgo, sensibilidad a tipos y capacidad de convertir beneficios en caja.

### 4.6.1 Price-to-Earnings (P/E)

1. **Nombre:** Price-to-Earnings o P/E, precio/beneficio, precio/ganancia o múltiplo de beneficio.
2. **Para qué sirve:** indica cuántas unidades monetarias de mercado se pagan por cada unidad de beneficio atribuible a las acciones ordinarias. Permite comparar precios por beneficio, sujeto a homogeneidad contable y financiera.
3. **Variables:** precio por acción; EPS diluido TTM atribuible a los propietarios de la matriz; o capitalización bursátil y beneficio neto atribuido. Acciones, ADR, preferentes y gastos de conversión deben armonizarse.
4. **Fórmula:** `P/E = precio por acción / EPS diluido TTM`. Es equivalente a `capitalización bursátil / beneficio neto atribuible TTM` sólo cuando el número de acciones, clase, ADR y perímetro son los mismos; con recompras o cambios de acciones se necesita una reconciliación.
5. **Pasos:** (1) fijar fecha y moneda; (2) verificar acciones y clase; (3) obtener beneficio TTM atribuible; (4) calcular EPS con el mismo criterio; (5) dividir; (6) normalizar partidas no ordinarias y revisar la calidad del beneficio.
6. **Ejemplo numérico:** precio `40`, EPS diluido TTM `2,00`; `P/E = 40/2,00 = 20,0x`.
7. **Interpretación:** el mercado paga 20 unidades por cada unidad de beneficio anual. No es una rentabilidad del 20 % ni un Earnings Yield del 5 %; es un precio por beneficio y debe combinarse con crecimiento, riesgo y calidad.
8. **Rangos y cautelas por sector/contexto:** no existe un P/E universal. Bancos, tecnología, cíclicos, empresas con pérdidas, inmobiliaria y servicios públicos regulados tienen beneficios muy distintos. Los beneficios negativos y los picos cíclicos hacen que P/E sea menos interpretable; EV/EBIT o FCF pueden ayudar en algunos casos.
9. **Ejemplo de empresa excelente (hipotético):** P/E de 20x con ROIC del 14 %, WACC del 9 %, conversión de FCF del 80 % y crecimiento orgánico moderado. El beneficio tiene calidad y no depende de un único pico.
10. **Promedio de referencia (hipotético):** una mediana de pares comparable, calculada con la misma fecha y definición, es 18x. Un P/E de 20x no es universalmente barato ni caro; se compara con crecimiento, retornos, riesgo y contabilidad.
11. **Caso problemático:** P/E de 7x en una industria en el pico de precios. El beneficio caerá, y el múltiplo aparente barato puede ser un múltiplo alto sobre beneficio normalizado.
12. **Caso en que el ratio engañe:** la empresa compra acciones y reduce la emisión media, elevando EPS un 15 % mientras el beneficio total no crece. El P/E baja por el denominador, no por una mejora del negocio.
13. **Errores frecuentes:** mezclar beneficios legales y ajustados; usar beneficio consolidado con patrimonio de la matriz; mezclar histórico y futuro; omitir preferentes y convertibles; contar solo acciones básicas frente a EPS diluido; o inferir el Dividend Yield.
14. **Cuándo no usarlo:** cuando los beneficios son negativos, muy cíclicos, están dominados por partidas puntuales o el valor tiene derechos de voto y económicos diferentes. En entidades con capital inestable se usan métricas de capital regulatorio y valoración sectorial.
15. **Indicadores complementarios:** Forward P/E, PEG, P/B, EV/EBIT, EV/EBITDA, FCF Yield, ROE, ROIC, calidad del beneficio, dilución y criterios de Graham.

### 4.6.2 Forward P/E

1. **Nombre:** Forward P/E, P/E futuro o precio/beneficio esperado.
2. **Para qué sirve:** usa el beneficio esperado para un horizonte futuro explícito, normalmente NTM, para adelantar parcialmente el perfil de rentabilidad. Permite valorar una empresa en crecimiento, pero añade incertidumbre a las estimaciones.
3. **Variables:** precio actual; EPS esperado para NTM o el próximo ejercicio; número de acciones; fuente y fecha de la previsión; coherencia entre beneficios ajustados y legales.
4. **Fórmula:** `Forward P/E = precio por acción actual / EPS esperado`. Debe indicarse si EPS es NTM, FY+1 o FY+2 y si es básico, diluido o ajustado.
5. **Pasos:** (1) fijar horizonte; (2) obtener consenso o modelo propio; (3) revisar supuestos; (4) convertir a EPS con acciones actuales; (5) dividir; (6) comparar con P/E histórico y con el mismo horizonte entre pares.
6. **Ejemplo numérico:** precio `40`, EPS NTM esperado `2,50`; `Forward P/E = 40/2,50 = 16,0x`.
7. **Interpretación:** el mercado paga 16 veces el beneficio esperado de los próximos doce meses. No demuestra que la previsión se cumpla; una sorpresa negativa puede elevar el múltiplo efectivo incluso con precio constante.
8. **Rangos y cautelas por sector/contexto:** resulta útil para crecimiento, PEG y comparación temporal, pero es frágil en cíclicos: el consenso puede anticipar el pico. Gestoras de activos, bancos y reestructuración requieren definiciones sectoriales; no deben mezclarse beneficios fiscales puntuales con ingresos recurrentes.
9. **Ejemplo de empresa excelente (hipotético):** Forward P/E de 16x para NTM, con CAGR de beneficio de 12 %, ROIC superior al WACC y una previsión que el balance y el flujo de caja respaldan. El múltiplo no exige una aceleración heroica.
10. **Promedio de referencia (hipotético):** la mediana hipotética de pares con el mismo horizonte NTM es 17x. Un valor de 16x se lee mejor con crecimiento, riesgo, márgenes y dispersión de estimaciones; no con el P/E histórico aislado.
11. **Caso problemático:** Forward P/E de 9x porque el consenso espera una caída del beneficio del 30 % y la empresa se encuentra cerca del final del ciclo. El múltiplo bajo anticipa malas noticias y no necesariamente es una oportunidad.
12. **Caso en que el ratio engañe:** la gerencia publica un EBITDA “ajustado” elevado, el consenso lo traslada a EPS y el Forward P/E cae. La calidad del beneficio y las partidas puntuales no fueron eliminadas; el P/E normal puede ser mucho mayor.
13. **Errores frecuentes:** usar el próximo ejercicio para una empresa y NTM para otra; mezclar EPS ajustado y legal; ignorar emisiones; usar consenso antiguo; o dividir el precio actual por un EPS de otra fecha o moneda.
14. **Cuándo no usarlo:** cuando las estimaciones están demasiado dispersas o no son fiables, los beneficios son negativos o muy cíclicos, o la previsión es solo una guía de la gerencia. En bancos y aseguradoras se consideran métricas futuras y supuestos de capital sectoriales.
15. **Indicadores complementarios:** P/E histórico, PEG, EV/EBIT, FCF Yield, ROIC, WACC, revisiones de estimaciones, dilución y guía de la gerencia.

### 4.6.3 PEG (Price/Earnings to Growth)

1. **Nombre:** PEG, Price/Earnings to Growth o precio/beneficio respecto al crecimiento.
2. **Para qué sirve:** intenta relacionar el P/E con una tasa de crecimiento de beneficios para comparar empresas de niveles de precio y crecimiento diferentes.
3. **Variables:** P/E resultante de un EPS positivo; tasa de crecimiento esperado del beneficio, expresada en porcentaje; horizonte de tres a cinco años o el que justifique el modelo; definición de crecimiento.
4. **Fórmula:** `PEG = P/E ÷ g`, donde `g` se expresa como puntos porcentuales; si el crecimiento es 15 %, se usa 15, no 0,15.
5. **Pasos:** (1) calcular un P/E comparable; (2) definir el horizonte; (3) elegir crecimiento nominal, por acción o total; (4) expresarlo en porcentaje; (5) dividir; (6) comprobar ROIC, reinversión y riesgo.
6. **Ejemplo numérico:** P/E `20`, crecimiento esperado del beneficio `15 %`; `PEG = 20/15 = 1,33`.
7. **Interpretación:** 1,33 significa que el P/E es 1,33 veces la tasa de crecimiento. No significa que la acción vaya a subir un 33 % ni que 1,0 sea un precio justo universal.
8. **Rangos y cautelas por sector/contexto:** puede ser útil entre empresas con modelo y riesgo semejantes, pero el crecimiento de un año puede ser un pico cíclico, un rebote o una adquisición. La duración, el coste de capital y la calidad del crecimiento importan más que un valor único.
9. **Ejemplo de empresa excelente (hipotético):** P/E de 20x y crecimiento de beneficio del 25 % durante tres años, con ROIC del 14 %, FCF positiva y crecimiento orgánico. El perfil de reinversión respalda la estimación.
10. **Promedio de referencia (hipotético):** una mediana hipotética de pares con crecimiento y riesgo comparables es 1,3. No se adopta una regla universal “PEG menor que 1”.
11. **Caso problemático:** P/E bajo 8x y beneficio con crecimiento del 80 % por recuperación de una base de pérdida; PEG de 0,1. El denominador no es un crecimiento orgánico sostenible y puede desaparecer.
12. **Caso en que el ratio engañe:** una empresa recorta I+D y marketing, eleva el beneficio un 25 % durante un año y el PEG baja. La caída posterior de demanda hace que la g usada no sea representativa.
13. **Errores frecuentes:** usar 0,15 en vez de 15; mezclar P/E futuro con beneficio histórico; usar beneficio total cuando se habla de EPS; confundir crecimiento nominal y real; no ajustar por división de acciones; o no documentar la fuente de la estimación.
14. **Cuándo no usarlo:** cuando el crecimiento es negativo, cero, muy inestable, se basa en una base mínima o no existe una previsión con sentido. También es débil cuando el crecimiento por acción depende sobre todo de dividendos, deuda o adquisiciones.
15. **Indicadores complementarios:** P/E, Forward P/E, ROIC, WACC, reinversión, FCF Growth, EPS Growth, payout y calidad de estimaciones.

### 4.6.4 Price-to-Book (P/B)

1. **Nombre:** Price-to-Book (P/B), precio/valor contable o múltiplo de patrimonio.
2. **Para qué sirve:** mide cuánto paga el mercado por cada unidad de patrimonio contable atribuible a los accionistas ordinarios. Resulta especialmente relevante para bancos y empresas cuyo principal valor está en activos y pasivos regulados.
3. **Variables:** precio por acción; valor contable por acción; patrimonio atribuible a la matriz; acciones ordinarias; patrimonio preferente, intangibles y tipo de valor contable.
4. **Fórmula:** `P/B = precio por acción / valor contable por acción`. Equivalente: `P/B = capitalización bursátil / patrimonio atribuible`.
5. **Pasos:** (1) fijar fecha; (2) obtener patrimonio atribuible, no el patrimonio total consolidado; (3) decidir si se usa el valor contable tangible; (4) calcular por acción; (5) dividir; (6) comparar con ROE y capital regulatorio.
6. **Ejemplo numérico:** precio `40`, valor contable por acción `8`; `P/B = 40/8 = 5,0x`.
7. **Interpretación:** el mercado paga cinco unidades por cada unidad de patrimonio contable. Si el ROE es alto y el capital genera valor por encima de su coste, un P/B superior puede justificarse; no es una medida directa de valor.
8. **Rangos y cautelas por sector/contexto:** resulta útil en bancos, aseguradoras, industria y empresas con muchos activos. Tecnología, marcas y negocios ricos en intangibles pueden tener poco valor contable y un negocio valioso; el patrimonio negativo hace P/B no interpretable. El valor tangible puede ser más conservador.
9. **Ejemplo de empresa excelente (hipotético):** P/B de 1,5x con ROE del 12 %, capital tangible, Dividend Yield moderado y ausencia de apalancamiento excesivo. El retorno sobre patrimonio proviene de la calidad del negocio, no de lagunas contables.
10. **Promedio de referencia (hipotético):** la mediana hipotética del sector financiero es 1,1x. No se aplica a una empresa de software cuyo patrimonio es principalmente intangible por política contable.
11. **Caso problemático:** P/B de 0,5x porque el patrimonio fue deteriorado por deterioros excesivos o recompras por encima del valor contable. El precio puede ser bajo, pero la capacidad futura de beneficios también se ha deteriorado.
12. **Caso en que el ratio engañe:** un banco compra acciones y crea crecimiento del valor contable mediante beneficios retenidos, pero sus pérdidas crediticias aún no se reconocen. P/B parece bajo y ROE alto, aunque la base de capital está sobrestimada económicamente.
13. **Errores frecuentes:** usar patrimonio total con intereses no controlantes; usar valor contable por acción con el número de acciones equivocado; comparar P/B tangible y no tangible; omitir preferentes; o escoger un trimestre con una operación de capital inusual.
14. **Cuándo no usarlo:** cuando el patrimonio es negativo o está muy deteriorado, cuando el balance no captura activos económicos o en empresas muy intensivas en intangibles. Las entidades financieras requieren análisis de capital regulatorio, calidad de activos y reparto.
15. **Indicadores complementarios:** ROE, P/E, P/TBV, ROIC, crecimiento del capital, Dividend Yield, crecimiento del valor contable, calidad de los activos y reservas de capital.

### 4.6.5 Price-to-Sales (P/S)

1. **Nombre:** Price-to-Sales (P/S), precio/ventas o capitalización sobre ingresos.
2. **Para qué sirve:** compara la capitalización bursátil con los ingresos y puede ser útil cuando el beneficio es negativo o muy bajo, aunque pierde información sobre margen y deuda.
3. **Variables:** capitalización bursátil; ingresos netos TTM del perímetro consolidado; fecha, moneda y acciones ordinarias; alternativa EV/Sales cuando el apalancamiento es material.
4. **Fórmula:** `P/S = capitalización bursátil / ingresos TTM`. Equivalente: `precio por acción / ingresos por acción`.
5. **Pasos:** (1) calcular capitalización; (2) obtener ingresos atribuibles al perímetro; (3) dividir; (4) observar margen; (5) ajustar apalancamiento con EV/Sales; (6) separar crecimiento orgánico y adquirido.
6. **Ejemplo numérico:** capitalización `1.000`, ingresos TTM `1.000`; `P/S = 1,00x`.
7. **Interpretación:** el mercado paga una unidad de valor del patrimonio (*equity*) por cada unidad de ingreso. Si se quiere incluir la financiación de terceros, debe usarse `EV/Sales`. Dos empresas con el mismo P/S pueden tener márgenes, deuda y calidad muy diferentes.
8. **Rangos y cautelas por sector/contexto:** resulta útil en empresas en crecimiento, software y comercio de margen bajo, pero P/S no puede compararse entre márgenes sin ajuste. Servicios públicos, entidades financieras y materias primas tienen estructuras distintas; los ingresos negativos o muy bajos impiden una lectura útil.
9. **Ejemplo de empresa excelente (hipotético):** P/S de 2x con Net Margin del 10 %, ROIC del 15 %, conversión de FCF estable y crecimiento orgánico del 12 %. El múltiplo compra margen y calidad, no ventas brutas.
10. **Promedio de referencia (hipotético):** una mediana hipotética de software es 4x y una de manufactura 1x. Esas medianas no son comparables porque difieren los márgenes y la intensidad de capital.
11. **Caso problemático:** P/S de 5x en una empresa cuyo margen cae del 12 % al 2 %. Aunque las ventas crecen, el valor por beneficio es mucho peor y el P/S ya no explica la economía.
12. **Caso en que el ratio engañe:** una empresa con Net Debt/EBITDA de 5x y EV/Sales de 1x presenta P/S de 0,2x. El múltiplo de equity parece barato, pero los proveedores de deuda tienen prioridad sobre el accionista.
13. **Errores frecuentes:** mezclar ventas brutas e ingresos netos; incluir una adquisición solo por un mes como un año completo; dividir por un número de acciones incorrecto; omitir intereses no controlantes; o interpretar un P/S bajo como alta calidad sin mirar el margen.
14. **Cuándo no usarlo:** cuando los ingresos son negativos, insignificantes, muy cíclicos o el perímetro contable cambia con frecuencia. No sustituye a los márgenes, el flujo de caja ni los múltiplos de valor empresa.
15. **Indicadores complementarios:** EV/Sales, Net Margin, Operating Margin, ROIC, FCF Yield, Revenue Growth, Net Debt y rentabilidad por segmento.

### 4.6.6 EV/EBITDA

1. **Nombre:** EV/EBITDA, valor empresa sobre EBITDA o múltiplo operativo de empresa.
2. **Para qué sirve:** compara el valor total del negocio con su EBITDA y permite comparar empresas con distinta estructura de capital, siempre que la política de arrendamientos y los ajustes sean homogéneos.
3. **Variables:** EV; EBITDA TTM; deuda con interés; efectivo; preferentes; intereses no controlantes; obligaciones semejantes a deuda; capitalización; fecha, moneda y arrendamientos.
4. **Fórmula:** `EV/EBITDA = EV / EBITDA TTM`. `EV = capitalización + deuda con interés + preferentes + intereses no controlantes + obligaciones semejantes a deuda − efectivo e inversiones no operativas`.
5. **Pasos:** (1) calcular capitalización; (2) reunir deuda y efectivo en fecha sincronizada; (3) añadir preferentes e intereses no controlantes; (4) obtener EBITDA TTM reconciliado; (5) dividir; (6) ajustar arrendamientos y partidas repetidas.
6. **Ejemplo numérico:** capitalización `1.000`, deuda `300`, preferentes `40`, intereses no controlantes `20`, efectivo `80`; EV `1.280`; EBITDA `200`; `EV/EBITDA = 1.280/200 = 6,40x`.
7. **Interpretación:** EV representa 6,4 veces el EBITDA TTM. No es EBIT, FCF ni beneficio del accionista; un múltiplo menor puede ser razonable si el CapEx y la deuda son elevados.
8. **Rangos y cautelas por sector/contexto:** resulta útil en industria, comercio, telecomunicaciones y servicios con EBITDA positivo. No usar en bancos, aseguradoras, inmobiliaria ni negocios con EBITDA volátil o no auditado. IFRS 16 y otras políticas de arrendamiento deben armonizarse.
9. **Ejemplo de empresa excelente (hipotético):** EV/EBITDA de 7x, ROIC del 14 %, CapEx/EBITDA moderado, Debt/FCF de 1,5x y margen estable. El múltiplo no oculta la intensidad de capital ni el apalancamiento.
10. **Promedio de referencia (hipotético):** una mediana hipotética de una industrial comparable es 8x; una empresa de consumo con mayor crecimiento puede estar en 10x. Ningún nivel universal sustituye un modelo prospectivo y el análisis de caja.
11. **Caso problemático:** EV/EBITDA de 5x en una empresa cuyo EBITDA incluye ajustes de reestructuración recurrentes. El EBITDA publicado cae, el EV también cae con el precio, pero el múltiplo parece bajo mientras el margen económico se ha debilitado.
12. **Caso en que el ratio engañe:** un minorista tiene EBITDA elevado, pero el CapEx equivale al 18 % de los ingresos y el capital circulante absorbe caja. Un par industrial con múltiplo menor puede crear más FCF y valor para el accionista; EBITDA oculta la reinversión.
13. **Errores frecuentes:** sumar deuda dos veces; omitir efectivo; usar solo capitalización; mezclar EBITDA consolidado con deuda de la matriz; ignorar interés no controlante; comparar EBITDA antes y después de IFRS 16; o llamar auditado a un EBITDA ajustado.
14. **Cuándo no usarlo:** con EBITDA cero o negativo, en una entidad financiera o cuando no puede normalizarse la estructura de capital y la política de arrendamientos. No debe usarse solo para inferir capacidad de dividendos.
15. **Indicadores complementarios:** EV/EBIT, EV/Sales, P/E, FCF Yield, Debt/EBITDA, ROIC, CapEx/EBITDA, CFO/EBITDA y apalancamiento ajustado por arrendamientos.

### 4.6.7 EV/EBIT

1. **Nombre:** EV/EBIT, valor empresa sobre beneficio operativo antes de intereses e impuestos.
2. **Para qué sirve:** compara el valor total del negocio con EBIT y ofrece una medida menos sensible a las diferencias de EBITDA que EV/EBITDA, aunque sigue afectada por la intensidad de capital, la depreciación y la política de arrendamientos.
3. **Variables:** EV; EBIT TTM atribuible al negocio consolidado; deuda con interés; efectivo; preferentes; intereses no controlantes; fecha y política de arrendamientos.
4. **Fórmula:** `EV/EBIT = EV / EBIT TTM`. EV debe incluir capitalización, deuda con interés, preferentes, intereses no controlantes y obligaciones semejantes a deuda menos efectivo e inversiones no operativas.
5. **Pasos:** (1) construir EV; (2) reconciliar EBIT desde beneficio neto; (3) normalizar deterioro y partidas operativas; (4) asegurar coherencia con los arrendamientos; (5) dividir; (6) comparar con EV/EBITDA y FCFF.
6. **Ejemplo numérico:** EV `1.280`, EBIT `120`; `EV/EBIT = 1.280/120 = 10,67x`.
7. **Interpretación:** EV representa aproximadamente 10,7 veces el EBIT TTM. Al incluir la depreciación, el múltiplo reconoce más coste de capital que EV/EBITDA, pero no deduce el CapEx necesario para mantener el EBIT.
8. **Rangos y cautelas por sector/contexto:** resulta útil en empresas con muchos activos y alta intensidad de capital si la depreciación y los arrendamientos son comparables. Bancos, aseguradoras y empresas tempranas con EBIT negativo necesitan alternativas. Los deterioros de activos pueden hacer que EBIT no sea representativo.
9. **Ejemplo de empresa excelente (hipotético):** EV/EBIT de 11x, ROIC del 14 %, WACC del 9 % y FCFF positiva después de toda la reinversión. El negocio gana por encima de su coste de capital.
10. **Promedio de referencia (hipotético):** una mediana hipotética industrial es 12x; un par de software con menor intensidad de capital puede estar en 20x. La diferencia debe justificarse con crecimiento, márgenes y eficiencia de capital.
11. **Caso problemático:** EV/EBIT de 7x porque el EBIT incluye una ganancia temporal por venta de un activo. El múltiplo aparente cae, pero el beneficio operativo normalizado es mucho menor.
12. **Caso en que el ratio engañe:** un operador tiene muchos arrendamientos y presenta EBIT después del gasto de alquiler, mientras un par posee activos y los deprecia. El múltiplo puede parecer mayor o menor sin un cambio real en la economía operativa.
13. **Errores frecuentes:** usar EBIT ajustado sin puente; añadir intereses dos veces; tomar flujo operativo como EBIT; mezclar EV y capitalización; ignorar intereses no controlantes; o comparar empresas antes y después de IFRS 16 sin ajuste.
14. **Cuándo no usarlo:** con EBIT negativo, distorsionado por un deterioro importante o no separable de la financiación en una entidad financiera. No debe sustituir a FCFF cuando la pregunta es la caja disponible para todo el capital.
15. **Indicadores complementarios:** EV/EBITDA, EV/Sales, P/E, FCF Yield, ROIC, WACC, CapEx/EBIT, CFO/EBIT y tratamiento de arrendamientos.

### 4.6.8 EV/Sales

1. **Nombre:** EV/Sales, valor empresa sobre ingresos.
2. **Para qué sirve:** compara el valor total del negocio con las ventas, incluye la estructura de capital y resulta útil para empresas con beneficio bajo o negativo, siempre que el margen sea comparable.
3. **Variables:** EV; ingresos netos TTM; capitalización, deuda, efectivo, preferentes, intereses no controlantes y obligaciones semejantes; fecha y moneda.
4. **Fórmula:** `EV/Sales = EV / ingresos TTM`.
5. **Pasos:** (1) calcular EV; (2) obtener ingresos consolidados; (3) dividir; (4) observar margen y crecimiento; (5) separar crecimiento orgánico y adquirido; (6) comparar con intensidad de capital y FCF.
6. **Ejemplo numérico:** EV `1.280`, ingresos `1.000`; `EV/Sales = 1.280/1.000 = 1,28x`.
7. **Interpretación:** el valor del negocio equivale a 1,28 veces sus ingresos. Incluye la financiación de terceros, a diferencia de P/S; no incorpora por sí mismo el margen.
8. **Rangos y cautelas por sector/contexto:** resulta útil para empresas intensivas en capital y apalancadas, pero los márgenes deben ser comparables. Un minorista de margen bajo y una empresa de software de margen alto no pueden compartir un umbral; las entidades financieras requieren una lógica sectorial. Los ingresos negativos lo hacen inutilizable.
9. **Ejemplo de empresa excelente (hipotético):** EV/Sales de 1,3x con Operating Margin del 12 %, ROIC del 14 % y crecimiento orgánico estable. El múltiplo refleja un modelo económico sólido, no solo la escala.
10. **Promedio de referencia (hipotético):** una mediana hipotética industrial es 1,0x y una mediana de software es 4x. La diferencia no es una “regla de prima” universal; debe justificarse con eficiencia de capital, crecimiento y riesgo.
11. **Caso problemático:** EV/Sales de 2x mientras el margen cae de 15 % a 3 % y el CapEx permanece alto. El múltiplo se expandió por la caída del denominador de beneficios, no por mejor calidad.
12. **Caso en que el ratio engañe:** una adquisición aumenta EV y ventas solo durante un trimestre. El denominador no es anual y el múltiplo parece alto o bajo; falta comparabilidad pro forma.
13. **Errores frecuentes:** usar capitalización de P/S en vez de EV; omitir deuda o efectivo; usar ingresos brutos; combinar perímetros de consolidación distintos; tratar el crecimiento por divisas como orgánico; o inferir generación de caja a partir de ventas.
14. **Cuándo no usarlo:** cuando los ingresos son negativos, los cambios contables rompen la comparabilidad o la empresa es una entidad financiera cuyos saldos son operativos. Es débil cuando la intensidad de capital difiere mucho.
15. **Indicadores complementarios:** P/S, EV/EBITDA, EV/EBIT, Operating Margin, ROIC, Revenue Growth, FCF Yield y Net Debt.

### 4.6.9 Free Cash Flow Yield (FCF Yield)

1. **Nombre:** FCF Yield, rendimiento histórico sobre flujo de caja libre.
2. **Para qué sirve:** mide el FCF histórico apalancado por unidad de capitalización; acerca la valoración a la caja, aunque no es un rendimiento realizado ni una cobertura exacta del accionista.
3. **Variables:** FCF histórico `CFO−CapEx` después de intereses; capitalización bursátil; precio, acciones y fecha; normalización de CapEx y capital circulante. Para una comparación de empresa se puede usar `FCFF/EV`, que es otra métrica.
4. **Fórmula:** `FCF Yield histórico = FCF histórico / capitalización bursátil × 100`; `FCFE Yield = FCFE / capitalización`; `FCFF Yield empresarial = FCFF / EV`. No se llama equivalente a FCFE al `CFO−CapEx` sin incorporar movimientos de deuda, equity y leases.
5. **Pasos:** (1) calcular FCF TTM; (2) normalizar un año estacional; (3) obtener capitalización; (4) dividir; (5) comparar con crecimiento, reinversión y deuda; (6) hacer prueba de resistencia.
6. **Ejemplo numérico:** FCF histórico `80`, capitalización `1.000`; `FCF Yield = 80/1.000 = 8,0 %`.
7. **Interpretación:** la caja libre anual representa el 8 % de la capitalización. No es un interés garantizado ni una rentabilidad futura; si FCF cae, el yield sube por un mal motivo.
8. **Rangos y cautelas por sector/contexto:** resulta útil para empresas con CFO y CapEx conciliables, pero las medianas de comercio, software y proyectos no son comparables. Un FCF negativo o distorsionado hace inválido el ratio; `FCFF/EV` es más coherente para un DCF de empresa.
9. **Ejemplo de empresa excelente (hipotético):** FCF Yield del 8 % con ROIC del 14 %, crecimiento moderado y Debt/FCF de 1,2x. La caja se convierte en valor y no solo en un saldo inactivo.
10. **Promedio de referencia (hipotético):** una mediana hipotética de empresas de calidad es 5 %. Un 8 % puede ser atractivo, pero se examina con WACC, crecimiento, calidad del beneficio y riesgo.
11. **Caso problemático:** FCF Yield del 14 % porque la empresa pospone mantenimiento y capital circulante. El rendimiento sube, pero la capacidad futura y el balance se deterioran.
12. **Caso en que el ratio engañe:** la CFO incluye una liberación puntual del capital circulante y el CapEx es inusualmente bajo. El ratio es alto durante un periodo temporal y no representa un rendimiento sostenible.
13. **Errores frecuentes:** llamar FCF a CFO; usar FCFF contra capitalización; anualizar un trimestre estacional; usar CFO ajustado; incluir ventas de activos; o ignorar dilución y deuda necesarias para generar la caja.
14. **Cuándo no usarlo:** cuando el FCF es negativo, no puede reconstruirse o está dominado por capital circulante y CapEx puntuales. En entidades financieras se usan medidas de caja sectoriales, no CFO industrial menos CapEx.
15. **Indicadores complementarios:** FCF/NI, CFO/EBITDA, P/FCF, P/E, ROIC, Net Debt, Dividend Yield, crecimiento y calidad de la caja.

### 4.6.10 Earnings Yield

1. **Nombre:** Earnings Yield, rendimiento sobre beneficio o rentabilidad del beneficio.
2. **Para qué sirve:** expresa el beneficio por acción como porcentaje del precio; es el recíproco de P/E y permite ordenar rendimientos implícitos, sin llamarlos rentabilidad realizada.
3. **Variables:** beneficio neto atribuible TTM; capitalización bursátil; precio y EPS; beneficio legal o ajustado; moneda y fecha.
4. **Fórmula:** `Earnings Yield = beneficio neto atribuible / capitalización bursátil × 100`. Con P/E positivo: `Earnings Yield = 1/P/E × 100`.
5. **Pasos:** (1) obtener beneficio TTM; (2) calcular capitalización; (3) dividir; (4) si P/E es positivo, comprobar el recíproco; (5) normalizar partidas puntuales; (6) comparar con el rendimiento libre de riesgo y la rentabilidad requerida, con cautela.
6. **Ejemplo numérico:** beneficio `50`, capitalización `1.000`; `Earnings Yield = 50/1.000 = 5,0 %`; P/E equivalente `20x`.
7. **Interpretación:** cada unidad de capitalización representa `0,05` de beneficio anual. No es una tasa pagada, no garantiza crecimiento y no debe compararse sin ajustes con un cupón.
8. **Rangos y cautelas por sector/contexto:** resulta útil como comparación ordinal, especialmente junto con P/E, pero es vulnerable a beneficios negativos, ajustes contables y picos cíclicos. Un rendimiento alto puede advertir que el denominador va a caer.
9. **Ejemplo de empresa excelente (hipotético):** Earnings Yield del 5 % con ROIC superior al WACC, conversión de FCF del 80 % y crecimiento orgánico del 8 %. El beneficio tiene calidad y el rendimiento implícito no depende de una caída puntual.
10. **Promedio de referencia (hipotético):** una mediana hipotética de pares es 4,5 %. No es un hurdle universal: se compara con WACC, el rendimiento libre de riesgo, el crecimiento y el escenario adverso.
11. **Caso problemático:** Earnings Yield del 12 % en una empresa cuyo beneficio incluye un beneficio fiscal puntual. El rendimiento parece alto, pero el beneficio recurrente solo representa el 4 %.
12. **Caso en que el ratio engañe:** un P/E negativo produce un recíproco que no tiene sentido económico. Calcular el inverso mecánicamente puede producir una cifra aparentemente positiva si se manejan mal los signos.
13. **Errores frecuentes:** usar beneficio consolidado con capitalización de la matriz; mezclar ajustado y legal; usar EPS futuro con precio histórico; usar P/E negativo; o comparar el rendimiento como si fuera un cupón.
14. **Cuándo no usarlo:** cuando los beneficios son negativos, cero, muy volátiles o no atribuibles a los accionistas ordinarios. En entidades financieras, el capital regulatorio y los beneficios normalizados pueden ser más informativos.
15. **Indicadores complementarios:** P/E, Forward P/E, FCF Yield, ROE, ROIC, crecimiento, WACC, rendimiento libre de riesgo y calidad del beneficio.

### 4.6.11 Dividend Yield

1. **Nombre:** Dividend Yield, rendimiento o rentabilidad de dividendos.
2. **Para qué sirve:** mide el dividendo anual por acción respecto al precio; ayuda a estimar la distribución de efectivo al accionista, no la rentabilidad total ni la calidad del negocio.
3. **Variables:** DPS ordinario declarado o pagado en el periodo; precio por acción; fecha; moneda; dividendos especiales; impuestos y calendario de pagos.
4. **Fórmula:** `Dividend Yield = DPS anual / precio por acción × 100`. Si hay dividendo especial, se muestra por separado o se etiqueta como rendimiento incluyendo especiales.
5. **Pasos:** (1) identificar DPS; (2) separar ordinario y especial; (3) elegir precio y fecha; (4) dividir; (5) comprobar payout, FCF y deuda; (6) no confundir rendimiento sobre coste con rendimiento del periodo.
6. **Ejemplo numérico:** DPS ordinario `1,50`, precio `30`; `Dividend Yield = 1,50/30 = 5,0 %`.
7. **Interpretación:** el accionista recibe 0,05 unidades de dividendo anual por cada unidad de precio, según ese supuesto. No incluye retención fiscal, cambio del precio ni crecimiento del dividendo.
8. **Rangos y cautelas por sector/contexto:** resulta útil en servicios públicos, bancos, empresas de consumo maduras y REITs, pero las reglas de reparto y los impuestos difieren. Los dividendos especiales, las recompras y el dividendo ordinario sostenible deben separarse; un rendimiento alto puede anticipar un recorte.
9. **Ejemplo de empresa excelente (hipotético):** Dividend Yield del 3 % con payout del 55 %, cobertura de FCF de 1,8x, Net Debt/EBITDA de 1x y un dividendo que crece con los beneficios. La distribución no pone en riesgo la inversión.
10. **Promedio de referencia (hipotético):** una mediana hipotética de servicios públicos es 4 %, mientras una de software es 0 %. Ninguna es mejor en abstracto; importan la calidad de la caja y las opciones de reinversión.
11. **Caso problemático:** Dividend Yield del 9 % porque la empresa paga un dividendo especial con el producto de una venta de activos. El rendimiento parece excelente, pero la distribución recurrente es menor y la inversión futura puede caer.
12. **Caso en que el ratio engañe:** la empresa pide deuda para mantener el dividendo mientras FCF y beneficios caen. El rendimiento actual parece atractivo, pero el reparto no está cubierto y el balance se vuelve más frágil.
13. **Errores frecuentes:** usar un precio posterior a la fecha ex-dividendo con un dividendo no declarado; incluir un especial como ordinario; ignorar retención fiscal; mezclar clases de acciones; o llamar rendimiento sobre coste al rendimiento de mercado actual.
14. **Cuándo no usarlo:** cuando la empresa no paga dividendo, la política es irregular o el reparto es una distribución especial temporal. No es una valoración completa de empresas que reinvierten.
15. **Indicadores complementarios:** payout ratio, FCF/dividend, crecimiento del dividendo por acción, Debt/FCF, ROIC, recompras, asignación de capital y FCF por acción.

## 4.7 Crecimiento

El crecimiento expresa una variación, pero no dice si es orgánica, rentable, sostenible o creada para el accionista. Se debe distinguir crecimiento nominal de real, beneficio total de crecimiento por acción, CAGR de crecimiento simple y FCF de beneficio. Una tasa positiva puede exigir más capital, deuda o dilución y, aun así, destruir valor.

### 4.7.1 Revenue Growth

1. **Nombre:** Revenue Growth, crecimiento de ingresos o crecimiento de ventas.
2. **Para qué sirve:** mide la expansión de la escala de negocio y separa, cuando es posible, crecimiento orgánico, precio, volumen, adquisiciones y efecto cambiario.
3. **Variables:** ingresos netos del periodo actual y anterior; perímetro de consolidación; moneda; crecimiento orgánico, adquirido, precio, volumen y estacionalidad.
4. **Fórmula:** `Revenue Growth = (ingresos actuales/ingresos anteriores−1)×100`. Para crecimiento orgánico se usa la misma fórmula con ingresos comparables, no el total consolidado si hay adquisiciones.
5. **Pasos:** (1) fijar ejercicio; (2) conciliar ingresos; (3) comparar igual perímetro y moneda; (4) separar orgánico y adquirido; (5) separar precio y volumen; (6) calcular y repetir por segmento.
6. **Ejemplo numérico:** ingresos `1.000` frente a `900`; `Revenue Growth = (1.000/900−1)×100 = 11,1 %`.
7. **Interpretación:** los ingresos actuales son un 11,1 % mayores. La tasa no dice si el margen, la caja o el beneficio por acción mejoraron; una venta adicional puede tener menor margen.
8. **Rangos y cautelas por sector/contexto:** no existe crecimiento objetivo universal. Software, comercio, industria, servicios públicos y productos básicos tienen tasas y ciclos diferentes. La inflación nominal, las divisas, las adquisiciones, los cambios contables y una base anterior diminuta requieren ajuste.
9. **Ejemplo de empresa excelente (hipotético):** crecimiento orgánico del 10 %, ROIC del 14 %, conversión de FCF del 80 % y participación de mercado estable. El crecimiento procede de producto, precio o volumen repetibles.
10. **Promedio de referencia (hipotético):** una mediana hipotética de comercio es 6 %; una de software es 14 %. La cifra de software no es mejor: puede exigir ventas, I+D y capital que el comercio no necesita.
11. **Caso problemático:** ingresos crecen 25 %, pero un nuevo segmento de bajo margen representa `80 %` del crecimiento. El Revenue Growth mejora, mientras Gross Margin y ROIC caen.
12. **Caso en que el ratio engañe:** la empresa compra otra empresa y presenta los ingresos adquiridos durante todo el año contra un año anterior sin ella. El crecimiento aparenta ser orgánico y no es comparable.
13. **Errores frecuentes:** comparar crecimiento consolidado con orgánico; mezclar ingresos brutos y netos; usar periodos fiscales distintos; atribuir divisas a volumen; llamar “crecimiento” a una variación de puntos porcentuales; o incluir una adquisición sin comparación pro forma.
14. **Cuándo no usarlo:** cuando la base es cero o negativa, cambió el perímetro o dominan la inflación y las divisas. Es insuficiente para juzgar el crecimiento sostenible sin márgenes, reinversión y flujo de caja.
15. **Indicadores complementarios:** Organic Growth, Gross Margin, Operating Margin, ROIC, FCF Growth, Market Share, Customer Retention, adquisiciones, divisas y CapEx.

### 4.7.2 EPS Growth

1. **Nombre:** EPS Growth, crecimiento del beneficio por acción.
2. **Para qué sirve:** mide cómo cambia el beneficio disponible por acción, incorporando el beneficio de la matriz, el número de acciones, divisiones y recompras; es más relevante que el beneficio total al evaluar la capitalización por acción.
3. **Variables:** EPS diluido; beneficio neto atribuible; número de acciones; divisiones, emisiones, recompras, opciones, dividendos preferentes y partidas extraordinarias.
4. **Fórmula:** `EPS Growth = (EPS actual/EPS anterior−1)×100`. Con beneficio y acciones, `EPS Growth` debe reconciliarse con `crecimiento del beneficio + efecto de las acciones`.
5. **Pasos:** (1) fijar EPS diluido; (2) ajustar divisiones; (3) conciliar beneficio y acciones; (4) separar partidas puntuales; (5) calcular; (6) revisar por acción y por beneficio total.
6. **Ejemplo numérico:** EPS `1,50` frente a `1,20`; `EPS Growth = (1,50/1,20−1)×100 = 25,0 %`.
7. **Interpretación:** el beneficio por acción subió 25 %. No significa que el beneficio total haya subido 25 %: una recompra puede producir una parte importante del crecimiento.
8. **Rangos y cautelas por sector/contexto:** resulta útil para empresas en crecimiento y el historial de dividendos, pero opciones, convertibles y recompras pueden distorsionarlo. Bancos con capital regulado y empresas con pérdidas necesitan análisis por acción y ajustado por capital. Las divisiones se ajustan, pero no son crecimiento económico.
9. **Ejemplo de empresa excelente (hipotético):** EPS crece 12 %, beneficio neto 10 %, ROIC 14 %, conversión de FCF 80 % y dilución 0 %. La recompra no oculta el deterioro del negocio total.
10. **Promedio de referencia (hipotético):** una mediana hipotética de software es 15 % y una de servicios públicos 5 %. No es un ranking: la calidad del crecimiento, el capital y el riesgo deciden la creación de valor.
11. **Caso problemático:** EPS crece 20 % porque las recompras reducen las acciones un 18 %, mientras el beneficio total cae un 2 % y Debt/EBITDA sube. La apariencia por acción mejora, pero el riesgo empeora.
12. **Caso en que el ratio engañe:** una adquisición financiada con acciones genera dilución posterior; el crecimiento actual de EPS es real, pero las acciones futuras y los costes de integración pueden revertirlo. El EPS ajustado puede eliminar costes recurrentes.
13. **Errores frecuentes:** no ajustar por divisiones; usar EPS básico con capitalización diluida; usar beneficio consolidado para EPS de la matriz; ignorar dividendos preferentes; mezclar ajustado y legal; u ocultar dilución en opciones y convertibles.
14. **Cuándo no usarlo:** cuando el EPS es negativo, está afectado por una operación de capital inusual o la empresa tiene dilución significativa y pérdidas. En bancos se usan también capital por acción y ROE normalizado.
15. **Indicadores complementarios:** crecimiento del beneficio neto, EPS diluido, P/E, ROE, ROIC, FCF por acción, dilución, recompras, precio ajustado por divisiones y Dividend Yield.

### 4.7.3 FCF Growth

1. **Nombre:** FCF Growth, crecimiento del flujo de caja libre.
2. **Para qué sirve:** mide cómo cambia la capacidad histórica de generar caja después de la inversión y permite contrastar si acompaña al beneficio, los ingresos y la rentabilidad.
3. **Variables:** FCF histórico `CFO−CapEx`; periodo actual y anterior; CapEx de mantenimiento y crecimiento; capital circulante; deuda; gasto de adquisiciones y partidas puntuales.
4. **Fórmula:** `FCF Growth = (FCF actual/FCF anterior−1)×100`, sólo si ambos FCF son positivos. Si cualquiera es cero o negativo, mostrar `ΔFCF`, el cambio de signo y sus causas en vez de un porcentaje engañoso.
5. **Pasos:** (1) calcular FCF de ambos periodos; (2) normalizar CapEx y ciclo; (3) verificar CFO; (4) dividir; (5) examinar causa; (6) comparar con beneficio y crecimiento orgánico.
6. **Ejemplo numérico:** FCF actual `60`, anterior `50`; `FCF Growth = (60/50−1)×100 = 20,0 %`.
7. **Interpretación:** el FCF aumentó un 20 %. Puede deberse a mayor beneficio, menor capital circulante, CapEx inusualmente bajo o deuda; no implica por sí solo crecimiento orgánico.
8. **Rangos y cautelas por sector/contexto:** FCF Growth es importante en empresas intensivas en capital y cíclicas, pero puede distorsionar por mantenimiento, capital circulante y adquisiciones. Una base negativa o casi cero hace inválido el porcentaje; usar FCF absoluto y análisis a todo el ciclo.
9. **Ejemplo de empresa excelente (hipotético):** FCF crece 12 % durante cuatro años, con ROIC 14 %, CFO/NI 90 %, CapEx estable como porcentaje de ventas y ningún aumento del apalancamiento. El crecimiento de caja respalda dividendos y reducción de deuda.
10. **Promedio de referencia (hipotético):** una mediana hipotética de un sector industrial maduro es 7 %; una de software es 20 %. Esta última puede reinvertir mucho, por lo que la tasa aislada no ordena calidad.
11. **Caso problemático:** FCF crece 50 % porque el inventario baja y los proveedores pagan más tarde. El año siguiente la inversión de capital circulante se recupera y el crecimiento desaparece.
12. **Caso en que el ratio engañe:** la empresa vende una fábrica y clasifica el producto como FCF. La caja es real, pero no es operativa recurrente y el denominador queda inflado.
13. **Errores frecuentes:** usar CFO en vez de CFO menos CapEx; ignorar adquisiciones; mezclar definiciones de CapEx; anualizar un trimestre estacional; comparar bases negativas; o mezclar FCFF y FCF apalancado.
14. **Cuándo no usarlo:** cuando el FCF es negativo, cero o demasiado volátil, o cuando no pueden separarse CapEx y capital circulante. En entidades financieras se usan medidas de caja sectoriales y beneficios normalizados.
15. **Indicadores complementarios:** FCF Margin, FCF/NI, CFO/EBITDA, CapEx/revenue, Revenue Growth, ROIC, Net Debt, Dividend Yield y FCFF.

### 4.7.4 Book Value Growth

1. **Nombre:** Book Value Growth, crecimiento del valor o patrimonio contable.
2. **Para qué sirve:** mide cómo aumenta el patrimonio contable atribuible, útil para observar retención, autofinanciación y resultados acumulados; no equivale a crecimiento del valor de mercado.
3. **Variables:** patrimonio contable atribuible inicial y final; beneficios retenidos; dividendos; recompras; OCI; emisiones; deterioro; patrimonio preferente y minorías.
4. **Fórmula:** `Book Value Growth = (patrimonio final/patrimonio inicial−1)×100`. Para BVPS, usar `(BVPS final/BVPS inicial−1)×100` y ajustar por acciones.
5. **Pasos:** (1) obtener patrimonio atribuible; (2) distinguir patrimonio total y atribuible; (3) identificar OCI y emisiones; (4) conciliar beneficios retenidos y dividendos; (5) dividir; (6) comparar con ROE y requisitos de capital.
6. **Ejemplo numérico:** patrimonio inicial `600`, final `700`; `Book Value Growth = (700/600−1)×100 = 16,7 %`.
7. **Interpretación:** el patrimonio contable subió un 16,7 %. Puede proceder de beneficios retenidos, emisión de acciones o revaluación; solo la parte retenida por rentabilidad mejora la base orgánicamente.
8. **Rangos y cautelas por sector/contexto:** resulta útil en bancos, aseguradoras e industria; en negocios ricos en intangibles, el valor contable puede ser un mal sustituto del capital económico. Una disminución por dividendos o recompras no implica necesariamente deterioro operativo, y OCI puede crear volatilidad.
9. **Ejemplo de empresa excelente (hipotético):** Book Value Growth del 10 %, ROE 13 %, payout 40 %, capital tangible y ninguna dilución. La empresa retiene suficiente beneficio para financiar crecimiento y proteger a acreedores.
10. **Promedio de referencia (hipotético):** una mediana hipotética de un banco es 7 %; una mediana industrial es 9 %. No son objetivos universales y dependen de requisitos de capital y rentabilidad.
11. **Caso problemático:** el patrimonio baja 15 % porque la empresa recompra acciones por encima del valor contable y paga un dividendo elevado. La caída del valor contable no prueba que el negocio gane menos, pero sí reduce la colchonería.
12. **Caso en que el ratio engañe:** OCI aumenta el patrimonio un 20 % porque sube el valor de un activo financiero. El crecimiento del valor contable parece fuerte, mientras los beneficios retenidos y el ROE operativo no cambian.
13. **Errores frecuentes:** usar patrimonio total con beneficios atribuibles; ignorar minorías; tratar recompras como crecimiento orgánico; mezclar OCI con beneficio; usar número de acciones incorrecto para BVPS; o suponer que el crecimiento del libro crea rentabilidad.
14. **Cuándo no usarlo:** cuando el patrimonio es negativo, la contabilidad está dominada por cambios de valor razonable o los intangibles hacen que el balance sea una mala medida del capital invertido. No es un múltiplo de valoración.
15. **Indicadores complementarios:** ROE, ROIC, P/B, P/TBV, valor contable por acción, payout, Dividend Yield, suficiencia de capital, OCI y emisiones.

### 4.7.5 Compound Annual Growth Rate (CAGR)

1. **Nombre:** Compound Annual Growth Rate (CAGR), tasa de crecimiento anual compuesta.
2. **Para qué sirve:** resume en una tasa anual equivalente el cambio de una magnitud positiva entre un inicio y un final separados por varios años. No sustituye la trayectoria anual.
3. **Variables:** valor inicial `V₀`; valor final `Vₙ`; número de períodos `n`; serie homogénea, moneda, perímetro y medida: ingresos, EPS, FCF, valor contable o dividendo.
4. **Fórmula:** `CAGR = (Vₙ/V₀)^(1/n)−1`. En porcentaje, multiplicar por 100. Requiere `V₀>0`, `Vₙ>0` y `n>0`.
5. **Pasos:** (1) escoger serie positiva; (2) documentar inicio y final; (3) contar períodos; (4) dividir final por inicial; (5) calcular raíz `n`; (6) restar uno; (7) reconstruir la trayectoria y revisar cambios de perímetro.
6. **Ejemplo numérico:** una serie pasa de `100` a `180` en cinco años; `CAGR = (180/100)^(1/5)−1 = 12,47 % anual`.
7. **Interpretación:** 12,47 % anual compuesto lleva exactamente 100 a 180 en cinco años; no afirma que cada año creciera 12,47 %. El CAGR resume extremos y puede ocultar volatilidad. Para una tasa real multianual se calcula como `CAGR_real = [(V_n/V_0)/(CPI_n/CPI_0)]^(1/n)−1`, no simplemente `CAGR_nominal − inflación`. Un CAGR de FCF sólo es un resumen de extremos positivos; no debe usarse sin revisar años intermedios negativos, cambios de CapEx, adquisiciones o aportes.
8. **Rangos y cautelas por sector/contexto:** resulta útil para ingresos, EPS, FCF, valor contable y dividendos, pero no se comparan series con bases distintas. Adquisiciones, desconsolidaciones, divisiones, inflación, ciclos y cambios contables deben ajustarse; un CAGR pasado no es un CAGR futuro.
9. **Ejemplo de empresa excelente (hipotético):** Revenue CAGR del 12 % en cinco años, FCF CAGR del 14 %, ROIC del 15 % y Debt/EBITDA estable. La capitalización se acompaña de caja y eficiencia de capital.
10. **Promedio de referencia (hipotético):** una mediana hipotética de un sector es 9 % para Revenue CAGR. Un 12 % es atractivo solo si también son favorables los márgenes, la reinversión y el riesgo.
11. **Caso problemático:** Revenue CAGR del 20 % porque una base pequeña se multiplica durante una adquisición y luego la empresa deja de crecer. El CAGR final es alto, pero la tasa sostenible es mucho menor.
12. **Caso en que el ratio engañe:** EPS CAGR del 18 % por recompras y una base inicial baja, mientras el beneficio total y el FCF por acción permanecen planos. La fórmula es correcta, pero no representa crecimiento económico.
13. **Errores frecuentes:** usar `n+1` en vez de `n`; usar promedio aritmético; usar valores cero o negativos sin advertencia; contar años de forma incorrecta; cambiar el número de acciones; o tratar el CAGR pasado como previsión.
14. **Cuándo no usarlo:** cuando `V₀` o `Vₙ` es cero o negativo, los datos no son comparables, la serie cubre un solo año o la trayectoria irregular es más importante que los extremos. El CAGR de FCF con años negativos suele no ser interpretable.
15. **Indicadores complementarios:** crecimiento anual, Revenue Growth, EPS Growth, FCF Growth, Book Value Growth, márgenes, ROIC, reinversión, dilución, crecimiento del dividendo y CAGR implícito de la valoración.

## 4.8 Síntesis práctica del capítulo

Un diagnóstico financiero no debe sumar puntuaciones indiscriminadamente. La secuencia más útil es:

1. **Entender el negocio:** identificar unidades económicas, reconocimiento de ingresos, ciclo y diferencias entre crecimiento nominal y real.
2. **Comprobar rentabilidad:** observar ROIC frente a WACC y márgenes a lo largo del tiempo, no solo ROE.
3. **Comprobar caja:** reconstruir CFO, CapEx y FCF; no sustituir EBITDA por caja.
4. **Medir solvencia:** distinguir deuda con interés, deuda neta y EV; observar Debt/FCF, Interest Coverage y DSCR.
5. **Observar eficiencia:** DIO, DSO, DPO y CCC con 365 días y una fecha comparable.
6. **Valorar con coherencia:** múltiplos de patrimonio con capitalización; múltiplos de empresa con EV y FCFF cuando se usa caja de la estructura de capital.
7. **Comprobar crecimiento:** separar orgánico, adquirido, por acción, FCF, capital y CAGR.
8. **Buscar señales de engaño:** adquisiciones, partidas puntuales, capital circulante temporal, partes relacionadas, compromisos fuera del balance, dilución y obligaciones semejantes a deuda.

Una tabla final puede registrar para cada ratio: valor actual, valor del año anterior, mediana de pares, definición, fuente, fecha, tendencia y una pregunta que invalide la tesis. La lectura debe terminar en la documentación de la fuente y en un rango de valoración; nunca debe terminar en la afirmación mecánica de que un ratio es “verde” o “barato”.

---

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

---

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

---

# Parte 14–20: calidad del negocio, management, recompras, ROIC, WACC, CAPM y beta

> **Aviso:** todas las cifras, empresas y relaciones de mercado de este manual son ficticias. No son datos actuales ni recomendaciones de inversión. Los importes monetarios están expresados en euros.

---

# Capítulo 14. Calidad del negocio

## 14.1. Concepto de calidad

Un negocio de alta calidad puede conservar clientes, defender precios, controlar costes y reinvertir capital con una rentabilidad superior a la de sus competidores. La calidad se refiere a la capacidad futura de mantener esas ventajas, no solo a los resultados del último ejercicio.

La pregunta central es: **¿qué impide que un competidor copie el producto, abarate los precios o se lleve a los mejores clientes?**

Una definición práctica es la siguiente:

> Un negocio de alta calidad posee mecanismos que le permiten obtener retornos superiores durante más tiempo del que un competidor ordinario puede igualar.

## 14.2. Fuentes de ventaja competitiva

| Fuente | Cómo protege al negocio | Evidencia útil | Riesgo principal |
|---|---|---|---|
| **Marca (*brand*)** | Aporta confianza y puede permitir cobrar más | Precio medio, recomendación, baja sensibilidad a descuentos | La confianza no puede medirse o la competencia la imita |
| **Efectos de red (*network effects*)** | El valor para cada usuario aumenta con más usuarios | Mayor densidad, liquidez o información compartida | Una red pequeña pierde utilidad |
| **Costes de cambio (*switching costs*)** | Abandonar al proveedor resulta caro o incómodo | Renovación, migración, retención de ingresos | El cliente puede aceptar una pérdida de coste |
| **Ventaja de costes** | Permite obtener un coste unitario menor | Coste por unidad comparable | Puede desaparecer con precios de rivales o nuevas tecnologías |
| **Economías de escala** | Permite obtener un coste unitario menor al aumentar el volumen | Curva de costes y capacidad utilizada | El volumen adicional puede no tener demanda rentable |
| **Patentes** | Ofrecen exclusión legal temporal | Patente vigente, ingresos protegidos, litigios | Caducidad, elusión o cambios legales |
| **Distribución** | Da acceso económico y estable a clientes | Exclusividad de canal, integración y bajos costes de venta | Dependencia de intermediarios |

### Distinciones importantes

- Una cuota de mercado alta no prueba por sí sola que exista una ventaja duradera.
- Una suscripción recurrente no obliga al cliente a permanecer si el valor del servicio es bajo.
- Una patente protege una invención concreta, no necesariamente toda la empresa.
- Una economía de escala solo crea valor si el volumen adicional aporta un beneficio superior a su coste.
- El coste de cambio debe ser menor que el valor que el cliente espera obtener al cambiar.
- Una gran base instalada puede generar referencias, datos o servicios adicionales; si no aporta ninguna ventaja, solo representa volumen.

## 14.3. Características que suelen acompañar a un buen negocio

| Característica | Qué mide | Lectura correcta |
|---|---|---|
| **Ingresos recurrentes** | Parte de ventas que vuelve a producirse | Exige analizar contratos, renovaciones y cobros |
| **Poder de precios** | Capacidad de aumentar el precio cobrado | Debe observarse volumen, margen y retención después del aumento |
| **Retención** | Conservación de clientes o ingresos | Debe medirse por cohortes, no solo con cifras agregadas |
| **Cuota de mercado** | Peso de la compañía en un mercado definido | Crece si supera al mercado; no mide rentabilidad |
| **Margen estable** | Poder para conservar el resultado de cada venta | Un margen alto puede caer al aumentar el precio de insumos |
| **ROIC elevado** | Retorno del capital operativo | Debe compararse con WACC y con nuevas inversiones |
| **Caja disponible** | Capacidad de financiar crecimiento y distribución | Debe conciliarse con el beneficio y el capital de trabajo |

### Retención

Conviene diferenciar:

- **Retención de clientes:** porcentaje de clientes que permanece.
- **Retención de ingresos:** porcentaje de ingresos de la base existente que se conserva, incluyendo expansión.
- **Renovación:** cumplimiento del contrato al llegar a su vencimiento.
- **Churn:** clientes o ingresos perdidos en un periodo.

Las cohortes permiten saber si una empresa mejora. Si cada nuevo grupo de clientes tiene una retención mayor, la mejora puede ser real. Si la tasa agregada sube porque cambió la mezcla de clientes, puede ser un efecto estadístico.

### Poder de precios

El precio de lista no es el precio realizado. Para evaluar poder de precios hay que revisar descuentos, devoluciones, productos incluidos, mezcla de clientes y condiciones comerciales. Un aumento de precio solo es favorable si el margen y el valor de la relación siguen después del cambio.

### Ingresos recurrentes

No todos los ingresos repetibles tienen la misma calidad. Un contrato de un mes que se renueva repetidamente es más frágil que uno de tres años. También hay que comprobar que el cliente paga, que el coste de servir no aumenta y que no existe una concentración excesiva.

## 14.4. Cómo verificar una ventaja

Utilice una cadena de pruebas:

| Prueba | Pregunta | Evidencia |
|---|---|---|
| Mecanismo | ¿Por qué el rival no puede replicarlo? | Patente, datos, escala, contrato, red o proceso |
| Unidad económica | ¿Cada cliente deja contribución después de servirlo? | Margen de contribución y coste de adquisición |
| Durabilidad | ¿La ventaja se mantiene en el tiempo? | Cohortes y posición frente a rivales |
| Rentabilidad | ¿La ventaja crea más valor que el capital usado? | ROIC incremental y WACC |
| Caja | ¿El beneficio se convierte en efectivo? | Flujo de caja y capital circulante |
| Resiliencia | ¿Soporta una reacción de la competencia? | Margen, caja, deuda y alternativas de proveedor |

### Prueba de duración

1. Identificar qué recurso o capacidad está protegido.
2. Describir cómo mejora el precio, el coste, la retención o la velocidad de innovación.
3. Medir el resultado por cohortes y por segmentos.
4. Comprobar si un rival ha intentado replicar la estrategia y qué coste asume.
5. Estimar cuánto tiempo puede durar la ventaja.
6. Comprobar que la gerencia puede repetir la inversión con retornos similares.

> **Advertencia:** una buena historia no es una ventaja competitiva. La ventaja debe producir precios, costes, retención o retornos de capital que se puedan observar.

## 14.5. Fichas de fórmulas

### Ficha 14.1 — Retención de clientes y churn

1. **Nombre.** Retención de clientes y tasa de abandono.
2. **Uso.** Medir si una base de clientes se conserva durante un periodo determinado.
3. **Variables.** `C₀` es el número de clientes al inicio; `C₁` es el número de clientes equivalentes al final.
4. **Fórmula.** `Retención = C₁ / C₀`; `Churn = 1 − Retención`.
5. **Pasos.** Definir la cohorte y el periodo; contar los clientes iniciales; contar los que permanecen; dividir ambos importes; calcular el churn como complemento.
6. **Ejemplo.** Bruma tiene 1.000 clientes al inicio y 800 al final. La retención es `800 / 1.000 = 80 %` y el churn es `20 %`.
7. **Interpretación.** De cada 100 clientes iniciales, permanecen 80, si la comparación es homogénea.
8. **Rangos y cautelas.** No existe un rango universal. Debe indicarse si el periodo es mensual, anual o de una cohorte.
9. **Señal favorable.** Retención alta y estable, sin concentración excesiva ni bajas de clientes importantes.
10. **Señal desfavorable.** Churn creciente, principalmente de clientes pequeños, o pérdida de grupos enteros de clientes.
11. **Errores.** Mezclar clientes de diferentes cohortes; contar los que se incorporan durante el periodo como supervivientes; usar una base contractual distinta de la real.
12. **Cuándo no usarla.** Si no hay una definición fiable de cliente, si la actividad es estacional o si se trata de una base recién creada.
13. **Indicadores complementarios.** Retención de ingresos, expansión, concentración, renovación, cobro y motivos de baja.

### Ficha 14.2 — Mix de ingresos recurrentes

1. **Nombre.** Proporción de ingresos recurrentes.
2. **Uso.** Describir qué parte de las ventas depende de una relación repetible o contratada.
3. **Variables.** `IR` son ingresos recurrentes del periodo; `IT` son ingresos totales del mismo periodo.
4. **Fórmula.** `Mix recurrente = IR / IT`.
5. **Pasos.** Definir qué contratos se consideran recurrentes; separar renovaciones, suscripciones y ventas nuevas; dividir los ingresos recurrentes entre el total; comparar periodos equivalentes.
6. **Ejemplo.** Bruma factura `€100 millones`, de los cuales `€80 millones` son recurrentes: el mix es `80 %`.
7. **Interpretación.** El 80 % de la facturación cumple la definición elegida. No significa que el 80 % de la caja sea inmediata ni que los contratos sean inseparables.
8. **Rangos y cautelas.** No hay un umbral universal. Un contrato corto y no cobrado puede ser peor que una venta nueva con buenas condiciones de pago.
9. **Señal favorable.** Mix elevado, creciente, con buenos cobros y sin depender de un solo contrato.
10. **Señal desfavorable.** Mix elevado por prepagos, renovaciones inciertas o clientes que cancelan de inmediato.
11. **Errores.** Llamar recurrente a una venta que solo se repite por casualidad; mezclar ingresos reconocidos y cobros; incluir una cuenta de cliente distinta.
12. **Cuándo no usarla.** En ventas de proyecto, materias primas sin relación de servicio o en negocios donde cada pedido es independiente.
13. **Indicadores complementarios.** Retención de ingresos, duración de contratos, cuentas por cobrar, concentración y cartera de pedidos.

### Ficha 14.3 — Cuota de mercado

1. **Nombre.** Cuota de mercado por ventas.
2. **Uso.** Situar la escala de una empresa dentro de un mercado definido.
3. **Variables.** `V` son las ventas de la empresa; `M` son las ventas totales del mercado en el mismo perímetro y periodo.
4. **Fórmula.** `Cuota de mercado = V / M`.
5. **Pasos.** Definir país, producto, canal y clientes; medir numerador y denominador con la misma base; convertir a la misma moneda y criterio contable; dividir.
6. **Ejemplo.** Vértice vende `€40 millones` en un mercado de `€200 millones`: su cuota es `20 %`.
7. **Interpretación.** Una de cada cinco unidades de venta del mercado definido corresponde a Vértice. La cuota no mide beneficio.
8. **Rangos y cautelas.** El porcentaje depende del mercado elegido. Una cuota pequeña puede ser atractiva en un mercado grande y rentable.
9. **Señal favorable.** Cuota estable o creciente mientras la empresa mantiene margen y retención.
10. **Señal desfavorable.** La cuota cae más rápido que el mercado, o sube mediante descuentos que reducen el valor.
11. **Errores.** Usar un mercado teórico demasiado amplio; mezclar ventas de fabricante y distribución; cambiar el perímetro entre años.
12. **Cuándo no usarla.** Si no hay ventas comparables, si el mercado es inexistente o si la unidad de medida no es homogénea.
13. **Indicadores complementarios.** Crecimiento del mercado, ROIC, margen, concentración, precio medio y participación por segmento.

### Ficha 14.4 — Cambio del precio por cliente

1. **Nombre.** Variación del precio realizado por cliente.
2. **Uso.** Medir si la empresa cobra más por una oferta comparable.
3. **Variables.** `P₀` es el precio inicial por cliente; `P₁` es el precio final; se ajustan por mezcla, descuentos y producto.
4. **Fórmula.** `Cambio de precio = P₁ / P₀ − 1`.
5. **Pasos.** Definir cliente comparable; usar precio cobrado, no tarifa; ajustar por descuentos y mezcla; comparar dos periodos; dividir; observar volumen y retención.
6. **Ejemplo.** Bruma pasa de `€1.000` a `€1.040`: `1.040 / 1.000 − 1 = 4 %`.
7. **Interpretación.** El precio medio sube un 4 %. Solo es poder de precios si el aumento no procede solo de una mezcla de clientes y no destruye volumen.
8. **Rangos y cautelas.** No hay umbral universal; un aumento nominal puede esconder descuentos o una menor cantidad vendida.
9. **Señal favorable.** El precio aumenta junto con retención, margen y cuota, sin un aumento de los descuentos.
10. **Señal desfavorable.** El precio sube mientras caen clientes, volumen o margen de forma persistente.
11. **Errores.** Confundir el ticket con el precio; incluir productos nuevos; mezclar clientes; usar el precio de lista; ignorar impuestos.
12. **Cuándo no usarla.** En cambios fuertes de mezcla, escasez de oferta, productos de un solo uso o cuando no hay datos comparables.
13. **Indicadores complementarios.** Retención por cohorte, descuentos, margen, cuota, volumen y coste de adquisición.

## 14.6. Checklist de calidad

- [ ] Existe una explicación concreta de por qué los clientes eligen a la empresa.
- [ ] La ventaja se observa en cohortes nuevas, no solo en clientes antiguos.
- [ ] El poder de precios se refleja en el precio cobrado y en el margen.
- [ ] La retención se mide por clientes, ingresos y motivos de baja.
- [ ] Los ingresos recurrentes tienen duración y calidad de cobro adecuadas.
- [ ] La cuota de mercado usa un denominador verificable.
- [ ] La ventaja de costes se mide por unidad comparable.
- [ ] Los efectos de red tienen suficiente escala y liquidez.
- [ ] La protección legal no termina antes de la fuente principal de ingresos.
- [ ] La distribución no depende de un único intermediario.
- [ ] El crecimiento incremental no exige más capital del que genera.
- [ ] El ROIC y el ROIC incremental superan el coste de capital.
- [ ] La empresa puede resistir una reducción de precios de la competencia.
- [ ] La gerencia explica cómo se amplía o degrada la ventaja.
- [ ] La caja concuerda razonablemente con el beneficio económico.
- [ ] El moat se revisa al menos una vez al año.

## 14.7. Casos

| Empresa ficticia | Señal aparente | Comprobación | Diagnóstico |
|---|---|---|---|
| Aldea Verde | Cuota del 18 % y margen del 25 % | Pierde dos puntos de cuota y aumenta el churn | No hay ventaja demostrada |
| Ruta Azul | Miles de usuarios | La red pierde utilidad si desaparece la financiación externa | Efecto de red frágil |
| Bruma | Retención de clientes del 90 % | Las cohortes nuevas retienen el 86 % y los cobros mejoran | Retención y cobranza favorables, calidad todavía no demostrada |
| Nébula | Patente exclusiva | El rival ofrece un sustituto y la patente vence pronto | Ventana temporal, no foso |

> **Conclusión del capítulo:** el moat no se posee porque el margen sea alto hoy. Se verifica cuando se traduce en precios, costes, retención, caja y retornos de capital duraderos.

---

# Capítulo 15. Management y asignación de capital

## 15.1. El papel del CEO y del CFO

El equipo ejecutivo debe responder de tres maneras:

1. **Estrategia:** qué mercado atenderá la empresa y cómo defenderá a sus clientes.
2. **Ejecución:** qué procesos, personas e inversiones convierten la estrategia en resultados.
3. **Asignación de capital:** cómo se distribuye cada euro disponible entre crecimiento, deuda, adquisiciones y devoluciones a accionistas.

| Función | CEO | CFO |
|---|---|---|
| Responsabilidad principal | Dirección y estrategia competitiva | Finanzas, riesgo y asignación de capital |
| Horizonte habitual | Producto, clientes y planes de largo plazo | Liquidez, inversión y estructura de capital |
| Pregunta clave | ¿Dónde podemos crear ventaja? | ¿Cuánto capital necesitamos y cuál es su retorno? |
| Riesgo de sobrecarga | Control excesivo de los detalles | Control insuficiente del negocio |

La separación no significa que el CFO sea un administrador. Un buen CFO influye en la inversión, la concentración de clientes, las políticas de precio y los riesgos. El consejo debe cuestionar a ambos, no limitarse a ratificar sus decisiones.

## 15.2. Asignación de capital

La caja disponible puede tener varios destinos. La elección debe basarse en el retorno esperado, el riesgo, el momento del desembolso y la posibilidad de revertir la decisión.

| Destino | Justificación | Riesgo principal |
|---|---|---|
| Mantenimiento | Conservar la capacidad y la calidad existentes | Subinversión |
| Crecimiento orgánico | Ampliar capacidad, productos o canales | Sobreinversión |
| Adquisiciones | Comprar acceso, tecnología o distribución | Precio excesivo e integración |
| Deuda | Repagar deuda cara o financiar activos | Apalancamiento excesivo |
| Recompras | Comprar acciones por debajo del valor | Ejecutar a precio alto |
| Dividendos | Devolver caja a los accionistas | Retener caja necesaria o aumentar el apalancamiento |
| Reserva | Liquidez para imprevistos | Acumulación ineficaz |

Una jerarquía útil es: obligaciones y necesidades de seguridad; mantenimiento necesario; inversiones con retorno superior al coste de capital; y devolución del exceso de caja. No es una regla universal: una empresa joven puede necesitar retener caja para evitar la dilución.

## 15.3. Recompras y dividendos

Las recompras destinan capital a la compra de acciones de la propia compañía. El detalle matemático se desarrolla en el capítulo 16. En este capítulo conviene evaluar:

- precio y valoración;
- generación de caja y necesidad de liquidez;
- efecto sobre el beneficio por acción;
- opciones y compensación del equipo;
- señal que la dirección transmite al mercado;
- mecanismo y momento de ejecución.

Un dividendo sostenido puede exigir un pago constante. Las recompras son más flexibles, pero pueden utilizar caja en el momento equivocado. En la práctica, muchas empresas combinan ambas políticas.

## 15.4. Adquisiciones y emisiones

Una adquisición puede crear valor si compra una ventaja difícil de construir. El análisis debe responder:

1. ¿La operación mejora el ROIC?
2. ¿El precio depende de similitudes aparentes o del crecimiento esperado del negocio?
3. ¿Se pueden integrar la cultura y los sistemas?
4. ¿Existe riesgo de concentración de clientes o proveedores?
5. ¿La estimación de integración es realista?
6. ¿El negocio combinado tiene caja y un balance suficiente para resistir una crisis?

Una emisión puede ser positiva si financia una expansión con ROIC muy alto y diluye poco a los accionistas. Puede ser negativa si la empresa tiene proyectos de baja rentabilidad y necesita emitir repetidamente. Una emisión que compensa una dilución por opciones solo conserva el número de acciones; no crea valor por sí sola.

## 15.5. Remuneración basada en acciones (SBC)

La compensación con acciones puede retener al equipo y alinear sus intereses con los accionistas. Sin embargo, puede provocar dilución si se entrega de forma generosa o sin exigir resultados. Para distinguir valor real de transferencia de riqueza:

- medir el ROIC, el crecimiento, el flujo de caja libre y el riesgo ajustado;
- exigir que el ejercicio se haya cerrado, no solo que la acción haya subido;
- fijar un periodo mínimo de permanencia;
- limitar la dilución máxima;
- usar métricas de varios años y no solo el resultado trimestral;
- recuperar parte de la remuneración cuando la información resulta incorrecta.

> **Advertencia:** el gasto contable por SBC puede diferir del valor de las acciones entregadas. Conviene observar el aumento de acciones y la calidad de los programas.

## 15.6. Propiedad de los directivos y comunicación

La propiedad de los directivos o de personas relacionadas puede alinear sus intereses con los accionistas. Sin embargo, puede ser pequeña por una estructura muy capitalizada o grande por un fundador controlador. Debe analizarse junto con el consejo, las remuneraciones y las transacciones.

| Señal | Posible lectura | Comprobación |
|---|---|---|
| Directivo mantiene acciones | Alineamiento de largo plazo | ¿Hay ventas por liquidez, impuestos o diversificación? |
| Directivo vende en grandes cantidades | Puede indicar falta de confianza | ¿Venta planificada, opciones ejercidas o cambio de control? |
| Comunicación muy detallada | Transparencia o selección de mensajes | Contrastar con informes, auditorías y flujo de caja |
| Silencio ante preguntas relevantes | Riesgo de gobierno | Revisar actas, riesgos y respuestas públicas |

La comunicación debe ser comprensible y verificable. Métricas como «crecimiento total» necesitan indicar si incluyen adquisiciones, nuevas ventas, cambios de perímetro o efectos de tipo de cambio.

## 15.7. Fichas de fórmulas

### Ficha 15.1 — Proporción de devoluciones con flujo de caja libre

1. **Nombre.** Tasa de distribución de devoluciones con flujo de caja libre.
2. **Uso.** Comparar el dinero devuelto con la caja generada después de las inversiones necesarias.
3. **Variables.** `D` son dividendos; `B` son recompras brutas; `FCF` es el flujo de caja libre del periodo.
4. **Fórmula.** `Tasa de distribución = (D + B) / FCF`. Si se desea una **cobertura** de devoluciones, la métrica inversa es `Cobertura de devoluciones = FCF / (D + B)`.
5. **Pasos.** Calcular FCF con una definición estable; identificar dividendos y recompras realmente pagados; sumar; dividir. Si FCF es negativo, interpretarlo aparte y no presentar una cobertura negativa como si fuera accionable.
6. **Ejemplo.** Cobalto genera `€80 millones` de FCF, paga `€20 millones` de dividendos y ejecuta `€28 millones` de recompras: tasa de distribución `48 / 80 = 60 %`; cobertura inversa `80 / 48 = 1,67x`.
7. **Interpretación.** La compañía devuelve 60 céntimos por cada euro de FCF del periodo; el resto puede aumentar la caja o financiar otras necesidades. La cobertura inversa indica 1,67 euros de FCF por cada euro distribuido.
8. **Rangos y cautelas.** No hay un valor óptimo universal. FCF puede ser volátil y la distribución puede superar el 100 % durante un año de inversión extraordinaria. No llamar cobertura a una tasa de distribución.
9. **Señal favorable.** Devoluciones cubiertas de forma sostenida por caja recurrente y sin aumentar la dependencia de deuda.
10. **Señal desfavorable.** El FCF es persistentemente negativo, la cobertura es volátil o las devoluciones se financian con deuda.
11. **Errores.** Usar beneficio en vez de caja; incluir recompras anunciadas pero no ejecutadas; ignorar el capital necesario para crecer; confundir tasa de distribución con cobertura.
12. **Cuándo no usarla.** En empresas en construcción, con FCF muy negativo por una inversión puntual, o durante un cambio grande de modelo de negocio.
13. **Indicadores complementarios.** Conversión del FCF, deuda neta, caja mínima, inversiones, ROIC y política de dividendos.

### Ficha 15.2 — Dilución por compensación con acciones

1. **Nombre.** Cambio neto del número de acciones por compensación, emisión o recompra.
2. **Uso.** Medir cómo cambia la participación de un accionista que no participa en nuevos planes.
3. **Variables.** `S₀` son acciones al inicio; `S₁` son acciones al final; debe usarse el mismo criterio en ambas fechas.
4. **Fórmula.** `Cambio neto de acciones = S₁ / S₀ − 1`. Si el resultado es positivo, hay emisión neta o dilución; si es negativo, hay reducción neta de acciones. Reservar `dilución` para el caso positivo o para una emisión identificada.
5. **Pasos.** Usar acciones en circulación o totalmente diluidas; ajustar divisiones de acciones y conversiones; obtener las dos fechas; dividir; separar emisiones, recompras y acciones de tesorería.
6. **Ejemplo.** La compañía pasa de `120` a `126 millones` de acciones: `126 / 120 − 1 = 5 %` de cambio neto positivo, equivalente a dilución bruta en este caso.
7. **Interpretación.** Un accionista que conserva el mismo número de acciones mantiene una participación relativa de aproximadamente 95,24 por cada 100 que tenía antes. Si las acciones disminuyen, su participación relativa aumenta, siempre que conserve el mismo derecho económico.
8. **Rangos y cautelas.** Debe distinguirse la dilución de las acciones emitidas de la reducción por recompras. El número debe corresponder al mismo derecho de voto.
9. **Señal favorable.** La compensación con acciones está ligada a retornos específicos y el cambio neto de acciones está controlado.
10. **Señal desfavorable.** Aumentan las acciones cada año sin mejora proporcional del beneficio por acción, la caja o la retención.
11. **Errores.** Usar solo acciones básicas; ignorar opciones, RSUs o conversiones; mezclar una división de acciones con una emisión.
12. **Cuándo no usarla.** Cuando la acción tiene una clase o los derechos de voto son complejos, o cuando el plan aún no está aprobado.
13. **Indicadores complementarios.** Gasto SBC, acciones en circulación, EPS, FCF por acción, opciones pendientes y política de recompra.

### Ficha 15.3 — Propiedad de los insiders

1. **Nombre.** Insider ownership o propiedad de los insiders.
2. **Uso.** Describir qué parte de las acciones está en manos de directores, fundadores o controladores relacionados.
3. **Variables.** `AI` son acciones atribuibles a insiders con derecho de voto; `AT` son acciones totales con derecho de voto.
4. **Fórmula.** `Insider ownership = AI / AT`.
5. **Pasos.** Definir qué personas cuentan como insiders; incluir la tenencia indirecta; usar el mismo derecho de voto; dividir.
6. **Ejemplo.** Una familia ficticia posee `12 millones` de `100 millones` de acciones: `12/100 = 12 %`.
7. **Interpretación.** La propiedad es una señal de posible alineamiento, no una prueba de competencia ni de honradez.
8. **Rangos y cautelas.** No existe un nivel óptimo. Una participación pequeña puede ser razonable en una empresa muy capitalizada; una grande puede reducir los derechos del accionista minorista.
9. **Señal favorable.** Propiedad estable y relevante, con exposición de largo plazo y sin conflictos con los minoristas.
10. **Señal desfavorable.** Propiedad mínima junto con ventas frecuentes, o propiedad tan grande que limita la influencia de los accionistas minoristas.
11. **Errores.** Incluir fondos sin control; mezclar derechos de voto y económicos; no medir la propiedad indirecta; omitir planes y privilegios.
12. **Cuándo no usarla.** Cuando hay varias clases de acciones, derechos especiales, propiedad indirecta difícil de medir o información no disponible.
13. **Indicadores complementarios.** Venta de insiders, decisiones del consejo, remuneraciones, transacciones y derechos de voto.

## 15.8. Señales positivas y de alerta

| Área | Señal positiva | Señal de alerta |
|---|---|---|
| Asignación | Inversiones con ROIC alto y disciplina | Proyectos sin retorno, adquisiciones caras o crecimiento de baja rentabilidad |
| Recompras | Precio bajo y FCF fuerte | Recompra de volumen para sostener el precio |
| Dividendos | Compatibles con caja y política clara | Aumento artificial con deuda creciente |
| Emisiones | Financian crecimiento de alto retorno | Emisiones repetidas para cubrir pérdidas |
| SBC | Métricas de largo plazo y recuperación de remuneración | Premios por volumen, precio o una sola métrica |
| Remuneración | Alineada con ROIC, FCF y riesgo | Basada en resultados que luego se revisan |
| Propiedad | Participación estable y relevante | Venta continua o control excesivamente concentrado |
| Comunicación | Clara, coherente y verificable | Oculta fracasos, cambia perímetro o usa métricas ambiguas |
| Consejo | Independiente y con experiencia | CEO sin freno y comité de auditoría débil |

## 15.9. Caso: Cobalto

**Cobalto — escenario de asignación (independiente de los ejemplos de recompras y WACC):** tiene ROIC histórico del 14 %, FCF de €80 millones y deuda neta de €200 millones. El CEO quiere comprar una empresa de software por €250 millones; el CFO propone reinvertir €60 millones en capacidad y devolver €20 millones en dividendos. El consejo aprueba, pero los datos no demuestran que la decisión cree valor: no se cuantifican el NOPAT ni las sinergias de la adquisición, su horizonte, WACC, financiación, precio de la capacidad ni el efecto sobre la caja mínima. Además, `80 − 60 − 20 = 0` deja sin reserva explícita.

El análisis debe preguntar:

- ¿El precio de adquisición está cerca del valor o depende de un crecimiento que no puede comprobarse?
- ¿La capacidad constituye crecimiento incremental con un ROIC del 14 % o solo racionaliza activos existentes?
- ¿La deuda neta sigue siendo manejable si cae la demanda y cómo se financia la compra?
- ¿Qué VNP produce cada euro invertido a la tasa de capital pertinente?
- ¿La remuneración premia crear valor por acción o simplemente añadir tamaño?
- ¿La comunicación explica el retorno esperado y qué ocurre si las sinergias no se cumplen?

> **Conclusión:** un buen equipo no solo ejecuta. También decide dónde colocar el capital, con qué riesgos y cómo comunica sus decisiones. Este caso sirve para identificar datos faltantes, no para aprobar una adquisición por intuición.

---

# Capítulo 16. Recompras de acciones

## 16.1. Qué es un buyback

Una recompra permite a la empresa adquirir acciones en el mercado y retirarlas o mantenerlas como acciones de tesorería. Si las retira, reduce el número de acciones en circulación. Si las mantiene, el efecto económico futuro depende de si vuelven a emitirse.

Una recompra bien planteada responde a tres preguntas:

1. ¿La acción está barata respecto de su valor y del coste de capital?
2. ¿La empresa puede permitírsela sin poner en riesgo su solvencia?
3. ¿Qué alternativas de inversión ofrece la misma caja?

> **Advertencia:** comprar acciones no crea valor automáticamente. La cuenta se reduce, pero la empresa pierde la caja y se renuncia a otras oportunidades.

## 16.2. Efecto sobre el beneficio por acción

El EPS divide el beneficio disponible entre el número medio de acciones. Si la recompra reduce acciones y el beneficio no cambia, el EPS sube por aritmética. Ese efecto no demuestra que la empresa valga más.

### Ejemplo básico

- Beneficio: €120 millones.
- Acciones antes: 120 millones.
- EPS anterior: `120 / 120 = €1,00`.
- Precio de recompra: €12.
- Caja usada: `€240 millones`.
- Acciones recompradas: `€240 / €12 = 20 millones`.
- Acciones después: `120 − 20 = 100 millones`.
- EPS posterior, sin otros cambios: `120 / 100 = €1,20`.

El EPS aumenta un 20 %, pero el valor de la compañía no aumenta un 20 %: la caja simplemente sale de la empresa.

## 16.3. Barato o caro

Una acción barata en términos absolutos puede ser cara respecto de sus beneficios. Una acción de €10 no está necesariamente barata. El P/E es una primera comparación:

- precio de €10 y beneficio de €2: P/E de 5;
- precio de €10 y beneficio de €0,20: P/E de 50.

La primera puede estar cara si el beneficio es temporal. La segunda puede ser barata si €0,20 es normalizado y creíble. Por eso el P/E debe compararse con:

- P/E histórico y de competidores;
- crecimiento y calidad del beneficio;
- deuda, riesgo y concentración;
- tipo impositivo;
- necesidad de reinversión;
- valor de activos sustitutivos y coste de capital.

La recompra solo es rentable si el valor recibido por la acción supera el valor de la caja entregada. Si el precio de mercado aproxima razonablemente el valor, el resultado será aproximadamente neutro.

## 16.4. Efecto de la caja y del beneficio

En el ejemplo anterior se asumió que la caja no esperaba generar rentabilidad. En la práctica, la caja retirada habría podido producir un rendimiento. Para un análisis conservador:

1. Estimar el rendimiento después de impuestos de la caja o deuda evitada.
2. Restar ese beneficio perdido al beneficio futuro.
3. Dividir por el número de acciones posterior.
4. Comparar el EPS ajustado con el EPS anterior.

Si una empresa tiene caja sobrante, el coste de oportunidad puede ser bajo. Si esa caja financia una expansión con ROIC de 15 %, entregarla para recomprar acciones puede destruir valor aunque el EPS aumente.

## 16.5. Fichas de fórmulas

### Ficha 16.1 — EPS básico y diluido

1. **Nombre.** Beneficio por acción.
2. **Uso.** Medir el beneficio disponible para los accionistas ordinarios dividido por las acciones que lo comparten.
3. **Variables.** `NI_com` es el beneficio del periodo disponible para comunes —normalmente beneficio atribuible a la matriz menos dividendos preferentes—; `S̄` es el número medio ponderado de acciones básicas o totalmente diluidas, según el método.
4. **Fórmula.** `EPS = NI_com / S̄`.
5. **Pasos.** Elegir beneficio atribuible disponible para comunes y periodo; obtener el número medio ponderado pertinente; incluir dilución si corresponde; dividir. No usar beneficio consolidado con acciones de la matriz ni saldos finales como si fueran el denominador anual.
6. **Ejemplo.** Cobalto —escenario independiente— obtiene `€120 millones` disponibles para comunes con `120 millones` de acciones medias: EPS de `€1,00`. Si las recompras ocurren durante el ejercicio, deben usarse acciones medias ponderadas; un estado final no basta para el EPS reportado.
7. **Interpretación.** Cada acción representa €1,00 de beneficio disponible para comunes del periodo bajo esa base.
8. **Rangos y cautelas.** Puede ser negativo. El EPS no mide caja, riesgo ni valor de la acción.
9. **Señal favorable.** Crecimiento por acción con beneficio, caja y retorno de capital coherentes.
10. **Señal desfavorable.** El EPS sube solo por recompras mientras la caja, el negocio o la calidad se deterioran.
11. **Errores.** Usar beneficio del periodo anterior; mezclar acciones básicas con diluidas; ignorar acciones de la tesorería; no explicar ajustes extraordinarios.
12. **Cuándo no usarla.** Como única medida en reestructuraciones, beneficios extraordinarios, acciones con clase diferente o empresas autofinanciadas con beneficio no comparable.
13. **Indicadores complementarios.** Beneficio normalizado, FCF por acción, ROIC, crecimiento y número totalmente diluido.

### Ficha 16.2 — Número de acciones recompradas

1. **Nombre.** Acciones adquiridas en una recompra.
2. **Uso.** Calcular cuántas acciones se pueden comprar con una cantidad de caja.
3. **Variables.** `B` es la caja usada; `P` es el precio medio por acción; `S₀` son las acciones antes de la recompra; despreciar comisiones para la simplicidad del ejemplo.
4. **Fórmula.** `Acciones recompradas = B / P`; `Acciones después = S₀ − (B / P)`.
5. **Pasos.** Fijar presupuesto; estimar precio medio; dividir; ajustar por impuestos, comisiones, acciones fraccionarias y restricciones; restar las acciones recompradas de las acciones iniciales.
6. **Ejemplo.** Con `€240 millones` a `€12` por acción, Cobalto compra `20 millones` de acciones; si tenía 120 millones, quedan 100 millones.
7. **Interpretación.** El presupuesto permite adquirir veinte millones de acciones al precio medio supuesto y reduce el número de acciones en esa cantidad.
8. **Rangos y cautelas.** El resultado es muy sensible al precio. Si se compra a precio más alto, se retiran menos acciones.
9. **Señal favorable.** Comprar una cantidad suficiente sin comprometer la caja mínima ni la inversión necesaria.
10. **Señal desfavorable.** Gastar toda la caja para sostener el precio o comprar con un valor intrínseco inferior.
11. **Errores.** Confundir euros con acciones; usar un precio muy distinto del real; ignorar que las acciones se cancelan; no ajustar por opciones.
12. **Cuándo no usarla.** Si existen ofertas, contratos de compra futura, restricciones o mecanismos que no compran acciones a un precio único.
13. **Indicadores complementarios.** Precio medio, valor intrínseco, caja mínima, deuda, dilución y autorización disponible.

### Ficha 16.3 — Acreción o dilución del EPS

1. **Nombre.** Efecto porcentual de una recompra sobre el EPS.
2. **Uso.** Medir el cambio mecánico del beneficio por acción.
3. **Variables.** `EPS₀` y `EPS₁` son el EPS anterior y posterior; ambos deben usar la misma base y el mismo beneficio comparable.
4. **Fórmula.** `Cambio del EPS = EPS₁ / EPS₀ − 1`.
5. **Pasos.** Calcular EPS antes; aplicar la recompra; ajustar el beneficio por el coste de oportunidad; calcular EPS después; dividir entre EPS anterior y restar uno.
6. **Ejemplo.** Si EPS pasa de `€1,00` a `€1,10`, el cambio es `10 %`. Si pasa a `€0,95`, es `−5 %`.
7. **Interpretación.** Indica el cambio por acción, no la creación de valor para todos los accionistas.
8. **Rangos y cautelas.** Con beneficio constante y acciones retiradas, el EPS normalmente sube. Ese resultado no dice si la recompra fue barata.
9. **Señal favorable.** Acreción después de ajustar caja perdida, impuestos y riesgo de la valoración.
10. **Señal desfavorable.** EPS menor aunque caiga el número de acciones, o acreción solo por beneficio extraordinario.
11. **Errores.** Mantener beneficio constante; usar un precio de mercado incorrecto; no ajustar el coste de la caja; comparar EPS básico y diluido.
12. **Cuándo no usarla.** Si hay conversión de deuda, cambio de acciones, adquisición, pérdida extraordinaria o un plan simultáneo de emisión.
13. **Indicadores complementarios.** Valor intrínseco, WACC, FCF por acción, ROIC y valoración.

### Ficha 16.4 — Rendimiento de la recompra

1. **Nombre.** Buyback yield.
2. **Uso.** Medir qué proporción de la capitalización se ha destinado a recomprar acciones.
3. **Variables.** `B` es el importe de recompra; `MC` es la capitalización de mercado antes de la operación.
4. **Fórmula.** `Buyback yield = B / MC`.
5. **Pasos.** Calcular la capitalización con el precio antes de la operación; identificar el importe efectivamente recomprado; dividir; expresar como porcentaje.
6. **Ejemplo.** Si la capitalización es `€1.440 millones` y la recompra es `€240 millones`, el rendimiento es `16,7 %`.
7. **Interpretación.** La compañía ha devuelto el equivalente a una sexta parte de su valor de mercado mediante recompras en el periodo.
8. **Rangos y cautelas.** No es un rendimiento financiero garantizado. Si el precio cae después, la capitalización se reduce aunque la compañía no haya recibido el mismo valor.
9. **Señal favorable.** Recompra alta y sostenible, respaldada por caja y ejecutada por debajo del valor razonable.
10. **Señal desfavorable.** Rendimiento elevado por una capitalización muy baja, o recompras que agotan la caja.
11. **Errores.** Usar capitalización posterior; llamar rendimiento a un descuento; no ajustar por varias series de recompras; integrar anuncios no ejecutados.
12. **Cuándo no usarla.** En empresas en dificultades o momentos de alta volatilidad, o si la capitalización no representa el valor económico.
13. **Indicadores complementarios.** P/E, rendimiento del FCF, deuda neta, caja, ROIC y precio relativo al valor intrínseco.

### Ficha 16.5 — P/E de la acción recomprada

1. **Nombre.** P/E de compra y rendimiento del beneficio.
2. **Uso.** Relacionar el precio pagado con el beneficio por acción disponible.
3. **Variables.** `P` es el precio pagado por acción; `E` es el beneficio normalizado por acción; no confundir con el valor contable.
4. **Fórmula.** `P/E de recompra = P / E`; `rendimiento del beneficio = E / P`.
5. **Pasos.** Normalizar el beneficio; identificar el precio; dividir; comparar con un múltiplo justo y con las alternativas; ajustar por deuda y riesgo.
6. **Ejemplo.** Comprar a `€10` con `€2` de beneficio normalizado implica P/E `5` y rendimiento del beneficio `20 %`. Comprar a `€15` con `€1,20` implica P/E `12,5` y `8 %`.
7. **Interpretación.** El múltiplo solo es útil si el beneficio es sostenible y si el precio no incorpora un riesgo excesivo.
8. **Rangos y cautelas.** Un P/E bajo puede indicar riesgo de beneficio; un P/E alto puede ser razonable con un crecimiento excepcional y duradero.
9. **Señal favorable.** Múltiplo inferior al valor razonable o crecimiento que compensa el precio.
10. **Señal desfavorable.** Se paga un múltiplo alto por un beneficio frágil, o se usa un beneficio no normalizado.
11. **Errores.** Comparar P/E con empresas con un apalancamiento distinto; no ajustar por crecimiento, contratos de leasing, SBC ni deuda; usar el beneficio contable como si fuera caja.
12. **Cuándo no usarla.** En beneficios negativos, negocios en pérdida, negocios muy cíclicos o cuando no se puede estimar un beneficio normalizado.
13. **Indicadores complementarios.** FCF, WACC, ROIC, crecimiento, deuda, personal y riesgo del negocio.

## 16.6. Ejemplos numéricos

Cobalto —**escenario de recompras independiente**, no el mismo escenario de los casos de ROIC o WACC— tiene:

- beneficio disponible para comunes: €120 millones;
- acciones: 120 millones;
- precio: €12;
- capitalización: €1.440 millones;
- caja disponible: €300 millones;
- deuda neta: €200 millones.

Si estos datos se pretendieran combinar con otro caso de Cobalto en la misma fecha, habría que reconciliarlos: con caja de 300 y deuda neta de 200, la deuda bruta sería 500 si no existen otras inversiones líquidas restadas.

### Caso A: precio €12 (pro forma de estado final)

Compra €240 millones a €12 y retira 20 millones de acciones. Si se supone que la recompra ocurre al inicio del periodo o que se mantiene constante el estado final durante todo el ejercicio, el EPS pro forma pasa de €1,00 a `120 / 100 = €1,20`. Si la recompra se distribuye uniformemente durante el año, las acciones medias serían aproximadamente 110 millones y el EPS mecánico anual sería `120 / 110 = €1,0909`. En ninguno de los dos casos el EPS demuestra que €12 sea un precio bajo.

### Caso B: precio €15 (pro forma y coste de oportunidad)

Compra 16 millones de acciones y quedan 104 millones. Bajo el supuesto pro forma de estado final constante, el EPS pasa a `120 / 104 = €1,1538`, un aumento de `15,4 %` frente a €1,00. Si la recompra se hace uniformemente durante el año, las acciones medias serían aproximadamente 112 millones. Si la caja retirada habría generado un 8 % después de impuestos, el beneficio disponible para comunes se reduce en €19,2 millones: el EPS pro forma ajustado es `100,8 / 104 = €0,9692`; con acciones medias aproximadas de 112 millones sería `100,8 / 112 = €0,90`. Comprar más caro, por tanto, puede destruir valor.

### Caso C: precio €8 (pro forma de estado final)

Compra 30 millones de acciones y quedan 90 millones. Bajo el supuesto pro forma de estado final constante, el EPS pasa a `120 / 90 = €1,3333`, un aumento de `33,3 %`. Si la recompra se realiza uniformemente durante el ejercicio, el denominador medio aproximado sería 105 millones y el EPS sería `120 / 105 = €1,1429`. Si el P/E de compra es bajo y el beneficio es sólido, puede ser una decisión favorable, pero el EPS por sí solo no demuestra creación de valor.

### Caso D: caja necesaria

Si la empresa necesita €250 millones para operar, no puede gastar €300 millones en recompras aunque el EPS mejore. La solvencia y la inversión necesaria tienen prioridad.

### Caso E: compensación con acciones

Si la compañía compra 20 millones de acciones pero emite 6 millones por planes de compensación, la reducción neta es de 14 millones. Esto compensa la dilución en número de acciones, pero no permite concluir que la recompra cree o destruya valor. Hay que comparar el valor recibido por las acciones recompradas, el precio y el coste de oportunidad de la caja entregada, el valor económico de las acciones emitidas o de la SBC, y los impuestos y costes. Como control, `ΔV ≈ valor recibido por las 20m − caja entregada − coste económico de las 6m`; el signo depende de esos importes, no del cambio neto de acciones.

## 16.7. Métodos y buenas prácticas

| Método | Descripción | Riesgo |
|---|---|---|
| Compra en mercado | Se compran acciones a precios variables | Precio medio incierto |
| Oferta de compra | La empresa fija condiciones | Puede obligar a vender y generar presión temporal |
| Compra acelerada | Se acelera la compra dentro de un límite | Puede concentrar la ejecución y las compras |
| Contrato de compra futura | Se compra un volumen a futuro | Puede exponer a la empresa a futuros cambios de precio |
| Ejecución algorítmica | Se distribuye la orden en el tiempo | Reduce impacto, pero no garantiza precio favorable |

Buenas prácticas:

- fijar un presupuesto y un periodo;
- describir la intención sobre cancelación o tesorería;
- conservar caja mínima y acceso a crédito;
- revisar la valoración antes y después;
- comunicar el efecto potencial sobre el número de acciones;
- no presentar una estimación de EPS como certeza;
- evaluar el coste de oportunidad de cada euro.

## 16.8. Checklist de recompras

- [ ] La empresa tiene caja excedente después de financiar crecimiento y riesgos.
- [ ] El precio de compra se compara con un valor intrínseco conservador.
- [ ] Se conoce el efecto sobre acciones básicas y diluidas.
- [ ] El beneficio se normaliza y se incorpora la pérdida de rentabilidad de la caja.
- [ ] Se revisan deuda neta, covenants y liquidez.
- [ ] La recompra no se usa para ocultar una emisión por SBC.
- [ ] Se distingue una necesidad estructural de un apoyo temporal al precio.
- [ ] El consejo aprueba un límite y un mecanismo de ejecución.
- [ ] Se mide el resultado después de uno, tres y cinco años.
- [ ] La operación no impide invertir en proyectos de ROIC superior.

> **Conclusión:** el EPS es una consecuencia mecánica. La pregunta importante es si la compañía compra sus acciones con una caja cuyo valor para el accionista es mayor al precio pagado.

---

# Capítulo 17. ROIC y creación de valor

## 17.1. La idea central

El ROIC mide el beneficio operativo generado por el capital invertido. El WACC estima cuánto cuesta ese capital para sus proveedores. Un ROIC histórico superior al WACC indica un EVA anual positivo bajo las convenciones elegidas; no demuestra por sí solo que la acción esté infravalorada. El retorno de cada inversión incremental por encima del WACC sí crea VNP positivo, si el flujo, horizonte y riesgo están correctamente modelados.

`ROIC − WACC` multiplicado por el capital es un **EVA anual**, no un VNP. El VNP de un proyecto exige sus flujos, el momento de inversión, el horizonte y una tasa de descuento coherente. Esta distinción no mide la cotización bursátil: una empresa puede crear valor y sus acciones caer, o destruir valor y subir si cambian las expectativas.

## 17.2. NOPAT

El NOPAT es el beneficio operativo después de impuestos. Se utiliza para que el numerador del ROIC no esté distorsiondo por la estructura de financiación.

- EBIT: beneficio operativo antes de intereses e impuestos.
- Tasa fiscal efectiva: impuestos aplicables al EBIT.
- NOPAT: EBIT después de impuestos.

No se debe añadir el resultado financiero, porque los intereses pertenecen a la estructura de capital. En negocios con muchos elementos extraordinarios, conviene normalizar el EBIT.

## 17.3. Capital invertido

El capital invertido son los recursos utilizados para operar. Una definición habitual es:

- capital circulante operativo;
- inmovilizado material operativo;
- otros activos operativos, como licencias;
- menos efectivo y activos financieros no necesarios para operar.

El pasivo corriente no operativo, como proveedores, puede estar incluido indirectamente en el capital circulante. No se debe incluir deuda financiera como si fuera capital operativo. El fondo de comercio puede incluirse, pero el derivado de una adquisición puede ocultar un precio pagado demasiado alto. La definición debe mantenerse estable.

## 17.4. ROIC, WACC y la condición de creación de valor

El ROIC se expresa como porcentaje. La diferencia entre ROIC y WACC se expresa en puntos porcentuales:

- ROIC 12 % y WACC 9 %: ventaja de 3 puntos.
- ROIC 12 % y WACC 9 %, no significa 3 % de mejora sobre el WACC.

La comparación debe hacerse con un NOPAT normalizado, un capital invertido medio y un WACC apropiado al riesgo del negocio.

## 17.5. Crecer destruyendo valor

Crecer no es siempre crear valor. Si una empresa invierte €100 millones y genera €8 millones de NOPAT, el retorno de ese capital nuevo es 8 %. Si su WACC es 10 %, el proyecto produce un déficit anual de EVA de `100 × (8% − 10%) = −€2 millones`; no significa que cada euro destruya €2 de forma inmediata. Con un único flujo de €8 millones al final de un año, el VNP es `8 − 10 = −€2 millones`; bajo el supuesto de perpetuidad inmediata, sería `8 / 0,10 − 100 = −€20 millones`. El resultado depende del horizonte.

Un ROIC histórico por debajo del WACC puede mejorarse mediante:

- cerrar activos de baja rentabilidad;
- vender líneas no competitivas;
- subir precios;
- reducir activos ociosos;
- redirigir inversión a proyectos por encima del coste de capital.

La reducción de capital también puede crear valor cuando elimina inversiones que no alcanzan el coste de capital.

## 17.6. Fichas de fórmulas

### Ficha 17.1 — NOPAT

1. **Nombre.** Beneficio operativo neto después de impuestos.
2. **Uso.** Medir el beneficio generado por la operación antes de decisiones de financiación.
3. **Variables.** `EBIT` es beneficio operativo antes de impuestos; `T` es la tasa impositiva efectiva normalizada.
4. **Fórmula.** `NOPAT = EBIT × (1 − T)`.
5. **Pasos.** Calcular EBIT operativo; identificar impuestos que corresponden a EBIT; normalizar elementos extraordinarios; aplicar `1 − T`; comparar con años anteriores.
6. **Ejemplo.** Cobalto obtiene EBIT de `€60 millones` y paga una tasa efectiva del `25 %`: NOPAT `60 × 0,75 = €45 millones`.
7. **Interpretación.** Las operaciones generan €45 millones después de impuestos antes de reconocer el coste de la deuda y del capital propio.
8. **Rangos y cautelas.** Puede ser negativo. En el primer año, una tasa fiscal muy baja puede inflar el NOPAT; conviene normalizarla.
9. **Señal favorable.** NOPAT positivo y creciente con tasa fiscal realista.
10. **Señal desfavorable.** Crecimiento del EBIT basado en beneficios fiscales temporales, subsidios o partidas extraordinarias.
11. **Errores.** Usar beneficio neto; añadir intereses al EBIT; usar la tasa fiscal nominal cuando hay créditos extraordinarios; capitalizar costes operativos.
12. **Cuándo no usarla.** Cuando el negocio no tiene EBIT representativo, durante una reestructuración completa o cuando la base imponible no refleja la operación.
13. **Indicadores complementarios.** EBIT normalizado, impuestos efectivos, EBITDA, caja de operaciones, capex y cambios en el capital circulante.

### Ficha 17.2 — Capital invertido

1. **Nombre.** Capital invertido operativo.
2. **Uso.** Medir el capital necesario para operar y generar NOPAT.
3. **Variables.** `Activos operativos` incluye circulante operativo, activos fijos e intangibles operativos; `Pasivos operativos sin interés` incluye proveedores, impuestos devengados y otros pasivos de operación; `Efectivo no operativo` es el efectivo e inversiones no necesarios para operar.
4. **Fórmula.** `CI = activos operativos − pasivos operativos sin interés − efectivo e inversiones no operativos`.
5. **Pasos.** Listar activos operativos; identificar y restar los pasivos operativos sin interés; excluir efectivo e inversiones financieras no necesarios; incluir intangibles con criterio estable; calcular el saldo inicial y final y, cuando se usa ROIC, su promedio.
6. **Ejemplo.** Para hacer reproducible el ejemplo se fijan `CI₀ = €340 millones` y `CI₁ = €380 millones`; el capital invertido medio es `(340 + 380)/2 = €360 millones`. Un único saldo de €360 millones sólo permitiría un ROIC de cierre, no un ROIC medio auditado.
7. **Interpretación.** La operación utiliza, en promedio, €360 millones de capital productivo para generar NOPAT durante el periodo.
8. **Rangos y cautelas.** El resultado cambia con la definición. El fondo de comercio y los contratos de leasing deben tratarse de manera explícita y consistente.
9. **Señal favorable.** El capital operativo crece más lentamente que el NOPAT.
10. **Señal desfavorable.** El capital crece por adquisiciones o existencias mientras el NOPAT no aumenta.
11. **Errores.** Incluir caja disponible; excluir capital circulante; sumar deuda; mezclar valor medio con final; cambiar de definición entre años.
12. **Cuándo no usarla.** Para medir el valor de mercado de la empresa; cuando los estados financieros no separan activos operativos y financieros.
13. **Indicadores complementarios.** Activos totales, deuda, capital circulante, leasing, fondo de comercio, capex y ventas por euro de capital.

### Ficha 17.3 — ROIC

1. **Nombre.** Retorno sobre el capital invertido.
2. **Uso.** Medir la rentabilidad del capital empleado en el negocio.
3. **Variables.** `NOPAT` es beneficio operativo después de impuestos; `CI` es capital invertido, preferiblemente medio.
4. **Fórmula.** `ROIC = NOPAT / CI`.
5. **Pasos.** Calcular NOPAT normalizado; calcular capital invertido con la misma definición en inicio y fin; usar el promedio; dividir; expresar como porcentaje.
6. **Ejemplo.** Cobalto tiene NOPAT de `€45 millones` y capital invertido medio de `€360 millones`: ROIC `45 / 360 = 12,5 %`.
7. **Interpretación.** Cada euro de capital operativo genera €0,125 de NOPAT anual.
8. **Rangos y cautelas.** No existe un rango universal. Un ROIC de 10 % puede ser excelente en un negocio de bajo riesgo y pobre en otro de alto riesgo.
9. **Señal favorable.** ROIC estable o creciente y por encima del WACC.
10. **Señal desfavorable.** ROIC por debajo del WACC, en descenso o apoyado en inflación y en la contabilidad.
11. **Errores.** Usar beneficio neto; mezclar NOPAT y capital de otra fecha; incluir efectivo; ignorar normalización; interpretar un ROIC alto como una ventaja competitiva probada.
12. **Cuándo no usarla.** Como medida única en negocios en fase de inversión, con contabilidad deteriorada o cuando el capital invertido no es representativo.
13. **Indicadores complementarios.** ROIC incremental, WACC, EVA, margen operativo, caja, ROIC sin fondo de comercio y crecimiento.

### Ficha 17.4 — Diferencia entre ROIC y WACC

1. **Nombre.** Diferencial de rentabilidad económica.
2. **Uso.** Medir cuánto supera el retorno operativo al coste del capital o cuánto queda por debajo.
3. **Variables.** `ROIC` es el retorno operativo; `WACC` es el coste medio ponderado de capital.
4. **Fórmula.** `Diferencial = ROIC − WACC`.
5. **Pasos.** Calcular ROIC con capital medio; estimar WACC con pesos de mercado; comprobar moneda, impuestos y periodo; restar; interpretar en puntos porcentuales.
6. **Ejemplo.** ROIC `12,5 %` menos WACC `9,1 %` da un diferencial de `3,4 puntos porcentuales`.
7. **Interpretación.** Cada euro de capital invertido genera, en promedio, €0,034 más de NOPAT que el coste de capital.
8. **Rangos y cautelas.** Un diferencial pequeño puede desaparecer con pequeños errores de cálculo. La comparación debe usar el mismo horizonte.
9. **Señal favorable.** Diferencial positivo y estable durante varios años.
10. **Señal desfavorable.** Diferencial negativo, decreciente o basado en estimaciones optimistas.
11. **Errores.** Comparar ROIC nominal con WACC real; usar el WACC de otra industria; olvidar impuestos; usar el ROIC de un año excepcional.
12. **Cuándo no usarla.** En una empresa en construcción, con riesgo no representado en el WACC o durante un periodo de reorganización.
13. **Indicadores complementarios.** ROIC incremental, coste de capital por proyecto, sensibilidad, deuda, calidad del beneficio y concentración.

### Ficha 17.5 — EVA

1. **Nombre.** Valor económico añadido.
2. **Uso.** Traducir el diferencial de ROIC y WACC en un importe anual.
3. **Variables.** `NOPAT` es el beneficio operativo neto; `WACC` es el coste de capital; `CI` es el capital invertido medio.
4. **Fórmula.** `EVA = NOPAT − (WACC × CI)`.
5. **Pasos.** Calcular NOPAT; calcular coste de capital aplicado al CI; restar; observar la serie temporal y no solo un año.
6. **Ejemplo.** Cobalto obtiene `45 − (9,1 % × 360) = 45 − 32,76 = €12,24 millones` de EVA.
7. **Interpretación.** El negocio genera €12,24 millones de resultado económico después de cubrir el coste de capital.
8. **Rangos y cautelas.** EVA es una medida anual y contable. Un WACC menor infla EVA, y una adquisición puede elevar el capital y el fondo de comercio.
9. **Señal favorable.** EVA positivo, creciente y respaldado por caja.
10. **Señal desfavorable.** EVA negativo durante varios años y financiado con deuda creciente.
11. **Errores.** Confundir EVA con flujo de caja; usar el WACC de una empresa distinta; no ajustar una adquisición; evaluar solo el primer año.
12. **Cuándo no usarla.** Como única medida en negocios con muchos intangibles, en un periodo transitorio o cuando la depreciación no representa las necesidades de capital.
13. **Indicadores complementarios.** FCF, ROIC incremental, WACC, crecimiento, caja y retención.

### Ficha 17.6 — Tasa de reinversión, crecimiento y ROIC

1. **Nombre.** Relación entre crecimiento, reinversión y retorno.
2. **Uso.** Analizar si la reinversión necesaria para crecer tiene un retorno superior al coste de capital.
3. **Variables.** `I` es la inversión neta de operación; `NOPAT` es el beneficio operativo; `g` es el crecimiento; `r_nuevo` es el retorno del capital inicial o reinvertido; `ROIC_medio` es el retorno calculado con capital medio; `RR` es la tasa de reinversión.
4. **Fórmula.** `RR = I / NOPAT`; en estado estable, `g ≈ RR × r_nuevo`, donde `r_nuevo` es el retorno del capital inicial o reinvertido. Si se usa ROIC calculado con saldos medios, no se debe identificar automáticamente ese ROIC con `r_nuevo`; en ese caso, `RR ≈ g / r_nuevo`.
5. **Pasos.** Estimar crecimiento; medir inversión del periodo; normalizar NOPAT; calcular por separado el retorno sobre capital medio y el retorno de proyectos nuevos; obtener RR; comparar el retorno incremental con WACC; revisar capacidad ociosa, inflación, adquisiciones y crecimiento irregular.
6. **Ejemplo.** Si NOPAT es `€40 millones`, el capital inicial o nuevo es `€400 millones`, `r_nuevo = 10 %`, WACC `12 %` y crecimiento `10 %`, se necesitan unos `€40 millones` de reinversión. El retorno implícito es `10 %`, inferior al WACC: ese crecimiento incremental puede destruir valor.
7. **Interpretación.** El crecimiento es una consecuencia del capital reinvertido y de su rentabilidad. No es gratis. La identidad es aproximada y sólo es coherente en estado estable.
8. **Rangos y cautelas.** La relación es aproximada: hay capacidad ociosa, inflación, activos existentes, ajustes de perímetro y crecimiento irregular. No debe aplicarse mecánicamente a series breves.
9. **Señal favorable.** ROIC nuevo por encima del WACC y crecimiento que no exige una distorsión de RR.
10. **Señal desfavorable.** RR creciente, proyectos marginales por debajo del WACC y crecimiento financiado con deuda costosa.
11. **Errores.** Confundir crecimiento orgánico con una asociación empresarial; usar capex sin incluir el capital circulante; ignorar activos ya disponibles; usar el ROIC de un año.
12. **Cuándo no usarla.** Cuando hay capacidad disponible, la empresa tiene cambios fiscales grandes, la historia de crecimiento es inestable o los activos están muy amortizados.
13. **Indicadores complementarios.** ROIC incremental, flujo de caja, ventas por activo, capacidad utilizada, deuda y WACC.

## 17.7. Caso numérico

Supongamos que una empresa tiene NOPAT de €40 millones y capital invertido de €400 millones. Su ROIC es 10 % y su WACC es 12 %.

- Si reinvierte €24 millones y genera €4 millones adicionales, el retorno del capital nuevo es 16,7 %: esas inversiones crean valor aunque el ROIC global sea menor que el WACC.
- Si necesita €40 millones para añadir €4 millones de NOPAT, su retorno marginal es 10 %, inferior al WACC: ese crecimiento destruye valor.

> **Matiz importante:** `ROIC < WACC` no significa que toda inversión sea mala. La decisión depende del retorno de los proyectos nuevos. Un negocio puede mejorar su ROIC seleccionando mejores inversiones.

## 17.8. Checklist

- [ ] El EBIT se separa de los resultados financieros.
- [ ] La tasa fiscal se normaliza.
- [ ] El capital invertido tiene una definición estable.
- [ ] Se usa capital medio cuando la inversión cambia.
- [ ] Se revisa la naturaleza del fondo de comercio y los contratos de leasing.
- [ ] El ROIC se compara con un WACC coherente.
- [ ] Se analiza el ROIC incremental, no solo el histórico.
- [ ] El crecimiento se vincula con la reinversión necesaria.
- [ ] Se revisan activos ociosos y proyectos de baja rentabilidad.
- [ ] Se observa caja, deuda y capacidad financiera.
- [ ] No se confunde creación de valor con subida del precio bursátil.
- [ ] La gerencia puede explicar qué inversiones destruyen o crean valor.

> **Conclusión:** para una inversión concreta, crear valor requiere que su retorno incremental sea superior al coste de capital. Un ROIC histórico superior al WACC indica EVA anual positivo bajo el modelo, pero no es condición necesaria para que un proyecto marginal sea rentable; crecer sólo amplifica el resultado de la inversión y no garantiza que toda la empresa retorne ese coste.

---

# Capítulo 18. WACC: fórmula, variables y ejemplo

## 18.1. Qué es el WACC

El WACC es el coste promedio ponderado de las fuentes de financiación de una empresa: capital propio y deuda. Se usa para descontar flujos operativos, comparar proyectos, valorar empresas y contrastar con el ROIC.

El nombre tiene tres palabras:

- **W**: ponderado;
- **A**: promedio;
- **CC**: coste de capital.

El WACC debe corresponder a la moneda, el horizonte y el riesgo del análisis. No se debe mezclar un WACC nominal en euros con un flujo real, o un coste de capital propio de una empresa cotizada con un proyecto de riesgo distinto. El WACC se aplica normalmente a FCFF y produce un EV; para FCFE se usa el coste del patrimonio y se llega directamente al equity.

## 18.2. Variables necesarias

| Variable | Significado | Ejemplo ficticio |
|---|---|---|
| `E` | Valor de mercado del capital propio | €600 millones |
| `D` | Valor de mercado de la deuda con interés (no deuda neta) | €200 millones |
| `Ke` | Coste del capital propio | 10,6 % |
| `Kd` | Coste de deuda antes de impuestos | 6,0 % |
| `T` | Tasa fiscal marginal normalizada | 25,0 % |
| `V` | Valor total de capital | `E + D` |
| `Rf` | Tasa sin riesgo | 4,0 % |
| `β` | Beta del capital propio | 1,2 |
| `ERP` | Prima de riesgo de mercado | 5,5 % |

### Coste del capital propio

Se puede estimar con CAPM:

- tasa sin riesgo: 4,0 %;
- beta: 1,2;
- prima de mercado: 5,5 %;
- coste del capital propio: `4,0 % + 1,2 × 5,5 % = 10,6 %`.

El capítulo 19 explica CAPM con más detalle.

### Coste de deuda

El coste de deuda puede estimarse con el rendimiento al vencimiento, el tipo de interés efectivo o una prima de crédito. Si el coste antes de impuestos es 6,0 % y la tasa fiscal es 25 %, el coste posterior es `6,0 % × (1 − 0,25) = 4,5 %`.

El efecto fiscal se usa solo si los intereses son deducibles y si el beneficio fiscal se puede aprovechar. En una empresa con pérdidas, el escudo fiscal puede no tener valor inmediato.

## 18.3. Fórmulas

### Ficha 18.1 — Pesos de capital

1. **Nombre.** Pesos de capital propio y deuda.
2. **Uso.** Calcular cuánto peso tiene cada fuente de financiación en el WACC.
3. **Variables.** `E` es el valor de mercado del capital propio; `D` es el valor de mercado de la deuda; `V = E + D`.
4. **Fórmula.** `E/V = E / (E + D)`; `D/V = D / (E + D)`.
5. **Pasos.** Reunir valores de mercado comparables; no usar solo el valor contable; sumar el capital total; dividir cada fuente; comprobar que los pesos suman uno.
6. **Ejemplo.** Con `E = €600 millones` y `D = €200 millones`, `E/V = 75 %` y `D/V = 25 %`.
7. **Interpretación.** El 75 % del capital de mercado es capital propio y el 25 % es deuda.
8. **Rangos y cautelas.** Los pesos cambian cuando cambia el precio de la acción o el precio de la deuda. Las empresas con acciones no cotizadas o deuda ilíquida requieren estimaciones adicionales.
9. **Señal favorable.** Estructura diversificada y coste total de capital estable.
10. **Señal desfavorable.** Apalancamiento extremo, deuda cara o estructura elegida solo para reducir el WACC.
11. **Errores.** Usar deuda contable sin ajuste; mezclar fechas de capital propio y deuda; ignorar leasing, pensiones o acciones preferentes; sumar porcentajes dos veces.
12. **Cuándo no usarla.** Cuando no hay una estimación razonable de valor de mercado o cuando se valora un flujo con una estructura de capital muy distinta.
13. **Indicadores complementarios.** Deuda neta, valor de empresa, cobertura de intereses, vencimientos, acciones preferentes y leasing.

### Ficha 18.2 — Coste de deuda después de impuestos

1. **Nombre.** Coste de deuda posterior a impuestos.
2. **Uso.** Incorporar el efecto fiscal de los intereses en el WACC.
3. **Variables.** `I` son los intereses efectivos; `DM` es la deuda media; `Kd` es el coste de deuda antes de impuestos; `T` es la tasa fiscal marginal aplicable.
4. **Fórmula.** `Kd = I / DM`; `Kd después de impuestos = Kd × (1 − T)`.
5. **Pasos.** Calcular los intereses efectivos; estimar la deuda media; dividir; normalizar la tasa fiscal; comprobar la deducibilidad; aplicar el escudo; comparar con el coste de otras fuentes.
6. **Ejemplo.** Si los intereses son `€12 millones` y la deuda media es `€200 millones`, `Kd = 12 / 200 = 6,0 %`; después de impuestos, `6,0 % × (1 − 25 %) = 4,5 %`.
7. **Interpretación.** Cada euro de deuda tiene un coste fiscal esperado de 4,5 % en este supuesto.
8. **Rangos y cautelas.** El escudo no es infinito. Si la empresa no puede aprovechar el interés, el ajuste puede ser demasiado optimista.
9. **Señal favorable.** Coste de deuda bajo y beneficio fiscal utilizable.
10. **Señal desfavorable.** Deuda cara, interés volátil o ninguna capacidad real para deducir.
11. **Errores.** Aplicar el ajuste a una deuda sin interés; usar la tasa fiscal histórica sin normalizar; olvidar límites legales.
12. **Cuándo no usarla.** Cuando la tasa efectiva es cero, la empresa tiene pérdidas persistentes, o cuando la deuda no tiene componente de interés.
13. **Indicadores complementarios.** Tasa efectiva, impuestos de caja, cobertura de intereses, vencimiento, calificación crediticia y prima de crédito.

### Ficha 18.3 — WACC

1. **Nombre.** Coste promedio ponderado de capital.
2. **Uso.** Estimar el coste anual del capital de una empresa y compararlo con retornos operativos.
3. **Variables.** `Ke` es coste del capital propio; `Kd` es coste de deuda antes de impuestos; `T` es tasa fiscal; `E/V` y `D/V` son los pesos.
4. **Fórmula.** `WACC = (E/V) × Ke + (D/V) × Kd × (1 − T)`.
5. **Pasos.** Calcular valor de mercado del capital propio y deuda; calcular pesos; estimar Ke; estimar Kd; normalizar impuestos; aplicar la fórmula; revisar sensibilidad y compatibilidad con los flujos.
6. **Ejemplo.** `0,75 × 10,6 % + 0,25 × 6,0 % × 0,75 = 9,075 %`, aproximadamente `9,1 %`.
7. **Interpretación.** La empresa necesita generar aproximadamente 9,1 % anual sobre el capital total para cubrir el coste financiero, antes de crear valor.
8. **Rangos y cautelas.** El WACC no es un tipo legal ni una promesa de rentabilidad. Puede ser bajo en un sector regulado o alto en uno volátil.
9. **Señal favorable.** WACC estable, coherente con el riesgo y menor que el ROIC normalizado.
10. **Señal desfavorable.** WACC inestable, subestimado o comparado con un flujo de riesgo distinto.
11. **Errores.** Usar valor contable; mezclar moneda; ignorar riesgo país; doble descontar impuestos; añadir prima de tamaño sin justificación; usar beta de otra empresa.
12. **Cuándo no usarla.** Para un proyecto cuyo riesgo, moneda o estructura de capital difiere del negocio consolidado.
13. **Indicadores complementarios.** ROIC, ROIC incremental, sensibilidad, prima de crédito, beta, ERP, deuda y flujo de caja.

## 18.4. Ejemplo completo

La compañía ficticia Cobalto —**escenario WACC independiente**, no una combinación de las cifras de los capítulos 15–16— tiene:

- capitalización del capital propio: €600 millones;
- valor de deuda: €200 millones;
- tasa sin riesgo: 4,0 %;
- beta: 1,2;
- prima de mercado: 5,5 %;
- coste de deuda antes de impuestos: 6,0 %;
- tasa fiscal: 25 %.

Todos estos valores son hipótesis didácticas, no una serie de mercado fechada. En un análisis real se deben registrar país, índice, moneda, fecha de `Rf`, fuente y método de `ERP`, ventana y frecuencia de beta, prima de crédito y calendario de deuda. Si se usa una prima país, tamaño o liquidez adicional, hay que documentar si ya está embebida en el ERP o en el beta para evitar doble conteo.

### Paso 1: coste del capital propio

`Ke = Rf + β × ERP = 4,0 % + 1,2 × 5,5 % = 10,6 %`.

### Paso 2: pesos

`V = 600 + 200 = 800`.

`E/V = 600 / 800 = 75 %`.

`D/V = 200 / 800 = 25 %`.

### Paso 3: coste de deuda después de impuestos

`Kd(1 − T) = 6,0 % × (1 − 25 %) = 4,5 %`.

### Paso 4: WACC

`WACC = 75 % × 10,6 % + 25 % × 4,5 %`.

`WACC = 7,95 % + 1,125 % = 9,075 %`.

El WACC aproximado es **9,1 %**. Si el ROIC normalizado de Cobalto es 12,5 %, la diferencia favorable es 3,4 puntos porcentuales.

## 18.5. Sensibilidad mecánica del WACC con costes fijos

Con Ke de 10,6 %, Kd después de impuestos de 4,5 % y los demás supuestos constantes:

| Deuda / capital | Capital propio / capital | WACC aproximado |
|---:|---:|---:|
| 0 % | 100 % | 10,60 % |
| 20 % | 80 % | 9,38 % |
| 40 % | 60 % | 8,16 % |
| 60 % | 40 % | 6,94 % |
| 80 % | 20 % | 5,72 % |

La tabla muestra una sensibilidad mecánica con `Ke` y `Kd` fijos, no un WACC realizable para cada estructura. En la práctica, al aumentar la deuda también pueden subir el beta, la prima de crédito, los límites de crédito y el riesgo de insolvencia; para cada nivel deberían recalcularse o sustituirse esos componentes. Un WACC menor no equivale a una empresa más segura.

## 18.6. Errores frecuentes

- Usar el valor contable de la deuda y el valor de mercado del capital propio sin justificarlo.
- Aplicar CAPM a una empresa con calificación crediticia negativa o un riesgo no representado.
- Usar una prima de riesgo de un país y un beta de otro.
- Usar una tasa fiscal histórica que incluye créditos extraordinarios.
- Ignorar deudas por leasing y otras obligaciones contractuales similares.
- Usar el WACC nominal con un flujo real o un flujo después de impuestos con un WACC antes de impuestos.
- Tratar el WACC de la empresa como coste de todos sus proyectos.

> **Advertencia:** un WACC bajo puede ser el resultado de una deuda peligrosa. El coste de capital y la probabilidad de insolvencia están relacionados.

## 18.7. Checklist del WACC

- [ ] La moneda del WACC coincide con la del flujo.
- [ ] El horizonte del WACC coincide con el del análisis.
- [ ] Se usa valor de mercado de capital propio y deuda.
- [ ] Los pesos suman 100 %.
- [ ] La tasa fiscal está normalizada.
- [ ] El escudo de intereses es realmente aprovechable.
- [ ] El beta y la prima de mercado son coherentes.
- [ ] Se revisan riesgo país, tamaño y riesgo de liquidez.
- [ ] Se hace sensibilidad al apalancamiento y al coste de deuda.
- [ ] Se compara con ROIC y ROIC incremental normalizados.
- [ ] El WACC no se utiliza como si fuera el riesgo de un proyecto concreto.
- [ ] Se documentan las fuentes y los supuestos.

> **Conclusión del capítulo:** el WACC es una estimación del coste de oportunidad del capital. Su utilidad depende de la coherencia entre sus variables y los flujos que se desean descontar.

---

# Capítulo 19. CAPM: coste del capital propio

## 19.1. Qué es el CAPM

El CAPM, o modelo de valoración de activos de capital, estima el coste del capital propio a partir de tres elementos: una tasa sin riesgo, un beta y una prima de mercado.

La idea es sencilla: el inversor recibe la tasa sin riesgo por aceptar un riesgo de crédito mínimo y exige una compensación adicional por asumir riesgo sistemático.

- **Rf:** tasa sin riesgo.
- **Beta:** sensibilidad del activo al mercado.
- **ERP:** prima de riesgo de mercado.
- **Ke:** coste requerido del capital propio.

## 19.2. Componentes

### Tasa sin riesgo

Es el rendimiento de un activo con riesgo de crédito y de impago insignificante en el horizonte analizado. En la práctica se usa un título público de largo plazo en la misma moneda y con duración parecida a la del análisis.

No se debe mezclar:

- tasa de un activo a tres meses con un proyecto de diez años;
- tasa nominal con flujo real;
- tasa de un país con flujos de otro;
- rendimiento pasado con rendimiento futuro garantizado.

### Prima de mercado

La prima de mercado es la compensación adicional esperada por asumir el riesgo de mercado en lugar de un activo sin riesgo. Puede estimarse con datos históricos, con un enfoque prospectivo o con un modelo de precio implícito.

No es lo mismo que la rentabilidad total del mercado. Si el mercado espera un 9 % y el activo sin riesgo es 4 %, la prima implícita puede ser 5 %, sujeto a los supuestos utilizados.

### Beta

El beta mide la sensibilidad del activo a los movimientos del mercado. Se explica en detalle en el capítulo 20. En CAPM se usa normalmente un beta histórico, un beta sectorial o un beta fundamental. Todos tienen límites.

## 19.3. Ficha del CAPM

### Ficha 19.1 — CAPM

1. **Nombre.** Modelo de valoración de activos de capital.
2. **Uso.** Estimar el coste requerido del capital propio y el retorno esperado de un activo según su riesgo sistemático.
3. **Variables.** `Rf` es la tasa sin riesgo; `ERP` es la prima de mercado; `β` es el beta; `Ke` es el coste del capital propio o retorno requerido.
4. **Fórmula.** `Ke = Rf + β × ERP`.
5. **Pasos.** Elegir moneda y horizonte; escoger una tasa sin riesgo coherente; estimar prima de mercado; estimar beta; comprobar que el resultado sea razonable; hacer sensibilidad.
6. **Ejemplo.** Con `Rf = 4 %`, `β = 1,2` y `ERP = 5,5 %`, `Ke = 4 % + 1,2 × 5,5 % = 10,6 %`.
7. **Interpretación.** El modelo exige 10,6 % anual como retorno requerido para un activo con ese beta. Es una estimación, no una predicción.
8. **Rangos y cautelas.** El resultado depende mucho de los tres parámetros. El beta puede ser negativo, cero, menor que uno o mayor que uno.
9. **Señal favorable.** El coste estimado es coherente con el riesgo, la moneda, el horizonte y la situación de la empresa.
10. **Señal desfavorable.** El beta cambia de forma extrema, la prima de mercado no es comparable o el resultado se usa para ocultar un riesgo no modelado.
11. **Errores.** Usar tasa sin riesgo incompatible; mezclar beta de una industria con otra; olvidar el horizonte; usar prima histórica sin explicar; interpretar retorno requerido como retorno realizado.
12. **Cuándo no usarla.** Cuando el flujo no se puede representar como un activo de mercado, cuando el riesgo no sistémico domina, en empresas privadas con muy pocos datos o cuando se necesita un WACC de proyecto con riesgos particulares.
13. **Indicadores complementarios.** WACC, beta sectorial, volatilidad, tamaño, apalancamiento, calificación crediticia, riesgo país y sensibilidad.

## 19.4. Ejemplos adicionales

Suponiendo `Rf = 4 %` y `ERP = 5,5 %`:

| Beta | Cálculo | Coste del capital propio |
|---:|---|---:|
| 0,4 | `4 % + 0,4 × 5,5 %` | 6,20 % |
| 0,8 | `4 % + 0,8 × 5,5 %` | 8,40 % |
| 1,0 | `4 % + 1 × 5,5 %` | 9,50 % |
| 1,2 | `4 % + 1,2 × 5,5 %` | 10,60 % |
| 1,5 | `4 % + 1,5 × 5,5 %` | 12,25 % |
| −0,2 | `4 % − 0,2 × 5,5 %` | 2,90 % |

> **Advertencia:** una beta negativa o un coste del capital propio muy bajo no implican que el activo sea seguro. Un beta negativo puede ser un artefacto de un periodo excepcional, una cobertura o una estructura poco común.

## 19.5. Uso en el WACC

En el WACC, el CAPM suele alimentar el coste del capital propio:

`WACC = (E/V) × Ke + (D/V) × Kd(1 − T)`.

El CAPM no calcula directamente el coste de la deuda. La deuda tiene un coste de crédito, una prima, un riesgo de impago y un efecto fiscal distinto del beta del capital propio. En el WACC se utiliza el **beta de equity** observado o reaplancado para la estructura objetivo; un beta operativo sin reaplancar no es un sustituto automático del beta de equity.

## 19.6. Proceso recomendado

1. Definir si el análisis es nominal o real.
2. Igualar la moneda del activo sin riesgo y del flujo.
3. Ajustar el plazo del activo sin riesgo al horizonte.
4. Estimar una prima de mercado documentada.
5. Estimar beta con una ventana y frecuencia razonables.
6. Contrastar el beta con el apalancamiento y la industria.
7. Calcular el coste del capital propio.
8. Hacer sensibilidad del resultado.
9. Comparar el resultado con otros métodos de estimación.
10. Documentar los límites.

## 19.7. Limitaciones

- El CAPM relaciona el retorno requerido con el beta, pero no explica todos los riesgos.
- La prima de mercado es una hipótesis y cambia con la métrica y el periodo.
- El beta histórico puede ser inestable en cambios de régimen.
- El riesgo de empresa, el riesgo de liquidez y el riesgo de concentración pueden ser más importantes que el beta.
- El retorno requerido no es una promesa de rentabilidad.
- Un WACC calculado con CAPM no sustituye el análisis de flujo de caja ni el precio de mercado.

> **Conclusión del capítulo:** CAPM ofrece una regla disciplinada y reproducible para estimar el coste del capital propio. Su resultado debe entenderse como un rango dependiente de supuestos, no como un dato exacto.

---

# Capítulo 20. Beta: sensibilidad al mercado, volatilidad y riesgo

## 20.1. Qué mide el beta

El beta mide cómo se mueve un activo respecto del mercado. No mide directamente la calidad del negocio, la solvencia ni la probabilidad de quiebra. Mide sensibilidad histórica o modelizada al movimiento del mercado.

- `0 ≤ β < 1`: el activo suele moverse menos que el mercado en la misma dirección.
- `β = 1`: el activo se mueve, en promedio, como el mercado.
- `β > 1`: el activo suele moverse más que el mercado.
- `β < 0`: el activo se ha movido, en la muestra, en sentido contrario al mercado.

La clasificación describe el comportamiento relativo del activo frente al mercado. Un beta bajo no significa que el riesgo total sea bajo.

## 20.2. Fórmula y pasos

### Ficha 20.1 — Beta

1. **Nombre.** Beta de mercado o coeficiente de sensibilidad sistémica.
2. **Uso.** Medir la sensibilidad de un activo a los movimientos del mercado y alimentar un modelo como CAPM.
3. **Variables.** `Cov(Ri, Rm)` es la covarianza entre los retornos del activo y del mercado; `Var(Rm)` es la varianza del mercado; `β` es el beta.
4. **Fórmula.** `β = Cov(Ri, Rm) / Var(Rm)`.
5. **Pasos.** Escoger activos y mercado; usar la misma frecuencia; alinear los retornos; calcular covarianza y varianza; dividir; comprobar estabilidad, valores atípicos y apalancamiento.
6. **Ejemplo.** Si la covarianza es `0,02` y la varianza del mercado es `0,04`, el beta es `0,02 / 0,04 = 0,50`.
7. **Interpretación.** Una variación de 1 unidad en el retorno del mercado se asocia, en la muestra, con una variación de 0,50 unidades en el activo. El beta de equity observado es el que debe introducirse en CAPM. Para estimar un beta operativo se puede usar, como aproximación Hamada, `βU = βL / [1 + (1−T)D/E]`; después se vuelve a apalancar con `βL = βU × [1 + (1−T)D/E]` para la estructura objetivo. Estos ajustes requieren método, fecha y tasa fiscal coherentes, y no sustituyen el beta observado cuando CAPM estima el coste del equity. Por ejemplo, con `βL=1,5`, `D/E=1` y `T=25 %`, `βU=1,5/[1+0,75]=0,857`; al reaplancar se recupera `1,5`.
9. **Señal favorable.** Beta estable y coherente con el negocio y el apalancamiento.
10. **Señal desfavorable.** Beta extremo, inestable o basado en un periodo que no representa el negocio futuro.
11. **Errores.** Usar datos de frecuencias distintas; omitir dividendos; mezclar índices de referencia; interpretar la covarianza como riesgo total; usar un beta operativo sin reaplancarlo para el capital propio. El beta observado del equity ya está apalancado y es el que usa CAPM.
12. **Cuándo no usarla.** Cuando hay muy pocas observaciones, el activo no tiene relación estable con el mercado o la sensibilidad relevante es un riesgo de empresa que CAPM no captura.
13. **Indicadores complementarios.** Volatilidad, correlación, R al cuadrado, beta sectorial, apalancamiento, liquidez y riesgo de negocio.

### Ficha 20.2 — Varianza sistemática y riesgo total

1. **Nombre.** Varianza sistemática frente a varianza total.
2. **Uso.** Separar la parte del movimiento explicada por el mercado de la parte específica del activo.
3. **Variables.** `Var(Rm)` es varianza del mercado; `Var(Ri)` es varianza total del activo; `β` es el beta; `Var_sist` es la parte sistemática.
4. **Fórmula.** `Var_sist = β² × Var(Rm)`; la fracción sistemática aproximada es `Var_sist / Var(Ri)`.
5. **Pasos.** Calcular varianzas de retornos alineados; calcular beta; elevar el beta al cuadrado; multiplicar por la varianza del mercado; dividir por la varianza total; interpretar junto con el error de la regresión.
6. **Ejemplo.** Con `β = 0,5`, `Var(Rm) = 0,04` y `Var(Ri) = 0,09`, la varianza sistemática es `0,25 × 0,04 = 0,01`. La fracción sistemática es `0,01 / 0,09 = 11,1 %`.
7. **Interpretación.** Aproximadamente 11,1 % de la varianza del activo se explica por el movimiento del mercado en esa relación; el resto es específico del activo o del modelo.
8. **Rangos y cautelas.** La fracción está entre 0 y 100 % en una regresión básica, pero puede ser inestable. Volatilidad alta no equivale a beta alto.
9. **Señal favorable.** Alta fracción sistemática cuando el coste de capital se basa en el mercado y el riesgo total se ha comprobado por otras vías.
10. **Señal desfavorable.** Mucha varianza específica, iliquidez o eventos binarios pueden hacer que un promedio de beta engañe.
11. **Errores.** Confundir beta con volatilidad; usar `β² × Var(Rm)` como varianza total; olvidar que las varianzas dependen de la frecuencia; ignorar residuos autocorrelacionados.
12. **Cuándo no usarla.** Cuando la relación con el mercado es no lineal, el periodo es muy corto o la varianza de los retornos no es estable.
13. **Indicadores complementarios.** Correlación, desviación estándar, máxima caída, liquidez, concentración, deuda y eventos operativos.

## 20.3. Interpretación de las categorías

| Beta | Lectura habitual | Precauciones |
|---:|---|---|
| `β < 0` | Puede moverse en dirección contraria al mercado | No suele ser estructural ni permanente |
| 0 | Sin correlación lineal estimada en la muestra | No significa ausencia de riesgo |
| `0 < β < 1` | Menor sensibilidad al mercado | No implica baja volatilidad total |
| `β = 1` | Sensibilidad similar a la del mercado | Aún puede existir riesgo no sistémico |
| `β > 1` | Mayor sensibilidad al mercado | Requiere mayor compensación esperada según CAPM |
| Valores atípicos | Puede indicar una estimación en un régimen muy diferente | Revisar datos, periodo y modelo |

## 20.4. Beta y volatilidad

La volatilidad mide cuánto se mueve un activo, normalmente con desviación estándar. El beta mide cuánto se mueve **respecto del mercado**. Son relaciones diferentes.

| Ejemplo | Alta volatilidad | Beta alto | Lectura |
|---|---:|---:|---|
| Acción con flujo errático y buena diversificación | Sí | Puede ser moderado | Mucha varianza específica |
| Sector regulado con poco riesgo de mercado, pero con riesgo normativo | No necesariamente | Bajo | Riesgo fundamental no captado por beta |
| Empresa apalancada | Sí | Probablemente sí | El apalancamiento amplifica el mercado y el riesgo financiero |

> **Advertencia:** una acción con beta 0,4 puede tener una volatilidad absoluta mayor que otra con beta 1,0. La beta es relativa; la volatilidad es absoluta.

## 20.5. Beta y riesgo fundamental

El riesgo fundamental incluye:

- concentración de clientes o proveedores;
- dependencia de una patente, producto o persona;
- deuda y vencimientos;
- riesgos regulatorios y fiscales;
- tecnología disruptiva;
- calidad del beneficio y de la caja;
- liquidez y acceso a financiación;
- competencia y poder de precios;
- exposición a un país o una moneda.

El beta no observa directamente estos factores. Puede subestimar el riesgo de una empresa que tiene poca sensibilidad al mercado, pero puede perder toda su caja por un problema regulatorio. También puede sobreestimar el riesgo de un negocio cuyo precio se mueve mucho por el beta de la industria, aunque sus fundamentos sean sólidos.

Además, la estimación puede sufrir precios rancios, mercados poco líquidos, bid-ask bounce, negociación no síncrona con el índice, cambios de capital o perímetro y cambios de régimen. Conviene probar razonables rezagos y comparaciones de frecuencia, y distinguir el beta de equity del beta operativo. Ninguna de estas pruebas elimina el riesgo no sistémico.

## 20.6. Beta negativa

Un beta negativo puede aparecer en:

- una estrategia de cobertura;
- algunos fondos o vehículos de inversión;
- un periodo con datos aislados;
- una empresa con un tipo de ingresos o deuda que cambia de signo frente al mercado;
- una muestra donde un movimiento excepcional domina la estimación.

No debe interpretarse como una cuenta segura. Se debe revisar la fuente de la cobertura, la estabilidad del beta, la liquidez, el apalancamiento y los riesgos no sistémicos. Para una mayoría de empresas, una beta negativa requiere una explicación adicional.

## 20.7. Cómo estimar un beta

1. Escoger un índice de mercado coherente con país, moneda y sector.
2. Usar una frecuencia y ventana de tiempo definidas.
3. Alinear los precios y los dividendos.
4. Calcular el beta bruto con todas las observaciones; reportar además una estimación robusta o de sensibilidad si hay crisis, saltos o atípicos, sin borrar automáticamente eventos económicos reales.
5. Estimar beta, desviación estándar, correlación y R al cuadrado.
6. Comparar con el beta de la industria y con el apalancamiento.
7. Revisar sensibilidad a una crisis y a un periodo de bonanza.
8. Documentar el resultado y no presentarlo como una verdad fija.

Un beta sectorial puede ser más estable para una empresa pequeña, pero también puede ocultar diferencias de tamaño, apalancamiento o calidad. El beta fundamental puede ser más difícil de estimar y más estable conceptualmente, pero requiere más juicio.

## 20.8. Caso de contraste

### Caso A: Caudal

Caudal tiene beta 0,50 y volatilidad moderada. Sin embargo, el 35 % de sus ingresos proceden de un cliente, tiene deuda neta equivalente a dos años de EBITDA y sus contratos vencen en dos años. El riesgo fundamental es alto aunque el beta sea moderado.

### Caso B: Ala

Ala tiene beta 1,70 porque reacciona mucho al mercado, pero tiene contratos regulados, caja neta y una base de clientes diversificada. Su sensibilidad al mercado es alta, aunque otros riesgos sean controlables. Beta y calidad no son la misma cosa.

## 20.9. Checklist de beta

- [ ] Se usa un índice de mercado correcto.
- [ ] La frecuencia y la ventana están documentadas.
- [ ] Los retornos están alineados y ajustados por splits y acciones corporativas.
- [ ] Se reportan el beta bruto y, cuando sea relevante, una sensibilidad robusta; los atípicos no se eliminan sin justificar.
- [ ] El beta se compara con el de la industria.
- [ ] Se observa el efecto del apalancamiento.
- [ ] Se reportan volatilidad, correlación y R al cuadrado.
- [ ] Se distingue beta de riesgo total.
- [ ] Se revisa si un beta negativo es estructural o temporal.
- [ ] Se complementa con riesgos de clientes, deuda, regulación y liquidez.
- [ ] Se hace sensibilidad ante cambios del WACC.
- [ ] No se interpreta el CAPM como una promesa de retorno.

> **Conclusión del capítulo:** el beta ayuda a estimar la sensibilidad al mercado, pero no resume todo el riesgo. Para tomar una decisión hay que combinarlo con volatilidad, estabilidad del negocio, apalancamiento, liquidez y análisis fundamental.

---

## Cierre de la parte

La calidad de un negocio se observa en precios, costes, retención y retornos de capital. La gerencia demuestra su calidad mediante asignación de capital, disciplina de recompra, control de dilución y comunicación transparente. Un ROIC histórico superior al WACC indica EVA positivo bajo el modelo, mientras que las inversiones incrementales por encima del WACC crean VNP positivo; el WACC depende de una estimación disciplinada del coste del capital propio y de la deuda; CAPM es una herramienta útil dentro de esa estimación; y beta es sólo una medida de sensibilidad al mercado. Ninguna de estas herramientas debe utilizarse sin advertencia, coherencia y sentido crítico.

---

# Parte 21–25: rendimiento, riesgo, portafolios, bonos y ETF

## Convenciones y advertencia general

- Todos los datos de esta parte son **ficticios** y sirven únicamente para explicar los cálculos.
- Los retornos se expresan como tasas por período. Si se mezclan porcentajes y decimales, los resultados no son comparables: `8 % = 0,08`.
- Un retorno pasado, un retorno esperado, un YTM o una proyección **no es una rentabilidad garantizada**. El resultado real puede ser inferior, e incluso negativo.
- “Liquidez”, “valor de mercado” y “valor liquidativo” no son sinónimos. Se dedica una comparación específica al capítulo 25.
- Las fórmulas de riesgo deben usar información del mismo período, frecuencia y base: anual frente a mensual, precios frente a totales con dividendos, etc.

---

# Capítulo 21. Inflación y rendimiento real

La rentabilidad nominal mide el aumento nominal de una cantidad. La rentabilidad real mide cuánto poder de compra se conserva después de la inflación. La relación aproximada es intuitiva, pero la fórmula exacta evita un error acumulativo, especialmente con inflaciones o rentabilidades elevadas.

## 21.1 Inflación

### Ficha completa de 13 puntos: tasa de inflación

1. **Nombre.** Tasa de inflación de un período.

2. **Uso.** Mide el cambio general de precios y sirve para convertir una rentabilidad nominal en una estimación de rentabilidad real.

3. **Variables.**
   - `IPC_t`: índice de precios al cierre del período `t`.
   - `IPC_{t-1}`: índice de precios al cierre del período anterior.
   - `π_t`: inflación del período, expresada como tasa.

4. **Fórmula.**

   \[
   \pi_t=\frac{IPC_t}{IPC_{t-1}}-1
   \]

   Para expresarla en porcentaje, se multiplica el resultado por 100.

5. **Pasos.**
   1. Identificar dos niveles consecutivos y comparables del índice de precios.
   2. Dividir el nivel final entre el inicial.
   3. Restar uno.
   4. Expresar el resultado en porcentaje y comprobar el período.

6. **Ejemplo.** Si un índice ficticio de precios pasa de `125,0` a `127,5`, la inflación es:

   \[
   \frac{127,5}{125,0}-1=0,02=2\%
   \]

   Un euro poseído al inicio conserva aproximadamente el `98 %` de su poder de compra.

7. **Interpretación.** Un `2 %` de inflación significa que el nivel general de precios subió un 2 %. No significa que todos los bienes, servicios o salarios suban exactamente un 2 %.

8. **Rangos y cautelas.** No existe un rango universal de inflación “buena” o “mala”: depende del país, el nivel de desarrollo, el contexto y la tolerancia del ahorrante. Debe considerarse la composición de la cesta, la revisión del índice y la posibilidad de valores negativos. Comparar inflaciones de países distintos exige ajustes metodológicos y monetarios coherentes.

9. **Lectura favorable.** Una inflación baja, estable y cercana al objetivo de la autoridad monetaria suele facilitar planificación y puede hacer más predecible el retorno real. No asegura un rendimiento positivo.

10. **Lectura desfavorable.** Una inflación alta, volatile o sorpresa respecto de lo esperado reduce el poder de compra y puede erosionar el capital nominal aunque la cuenta muestre una rentabilidad positiva.

11. **Errores comunes.**
   - Confundir el aumento del índice, por ejemplo `2,5 puntos`, con la tasa relativa, que es `2 %`.
   - Usar dos índices con metodología o cobertura distinta.
   - Interpretar inflación como un interés que se suma automáticamente a una rentabilidad.
   - Olvidar que inflación positiva y rentabilidad real negativa pueden coexistir.

12. **Cuándo no usarla.** No sirve para medir el riesgo específico de un activo, la volatilidad de precios de una acción, ni la rentabilidad de un producto con una exposición geográfica distinta a la del índice utilizado.

13. **Complementarios.** Rendimiento real aproximado, rendimiento real exacto, revisión del índice de precios, poder de compra, objetivo de política monetaria, protección frente a inflación, activos ligados a inflación y fiscalidad.

## 21.2 Rendimiento real aproximado

### Ficha completa de 13 puntos: rendimiento real aproximado

1. **Nombre.** Tasa real de retorno aproximada.

2. **Uso.** Estima de forma rápida el retorno nominal menos la inflación. Es especialmente conocida como aproximación de Fisher.

3. **Variables.**
   - `R_N`: retorno nominal como decimal, por ejemplo `0,08` para 8 %.
   - `π`: inflación del mismo período como decimal, por ejemplo `0,03` para 3 %.
   - `r_real,aprox`: estimación del retorno real.

4. **Fórmula.**

   \[
   r_{real,aprox}=R_N-\pi
   \]

   Si ambas tasas se expresan en porcentaje, el resultado también se expresa en puntos porcentuales.

5. **Pasos.**
   1. Convertir ambas tasas a porcentajes o a decimales.
   2. Verificar que nominal e inflación correspondan al mismo período.
   3. Restar la inflación al retorno nominal.
   4. Presentar el resultado como aproximación, no como igualdad exacta.

6. **Ejemplo.** Una inversión ficticia rinde `8 %` nominal en un año y la inflación es `3 %`:

   \[
   8\%-3\%\approx5\%
   \]

   El resultado exacto, que se calcula en el apartado siguiente, es ligeramente menor.

7. **Interpretación.** Indica aproximadamente cuánto aumenta el poder de compra. No mide la cantidad final de dinero y no elimina las diferencias entre activos.

8. **Rangos y cautelas.** La diferencia entre aproximación y valor exacto aumenta con las magnitudes. Aproximar `50 %-40 %=10 %` sobrestima el resultado real, que es aproximadamente `7,14 %`; la diferencia es de unos `2,86 pp`. Deben descontarse además las comisiones y los gastos cuando correspondan.

9. **Lectura favorable.** Un resultado real positivo indica que, bajo los datos supuestos, la inversión superó el aumento del nivel de precios. No implica que todas sus partes hayan subido de precio ni que la conclusión se mantenga en el futuro.

10. **Lectura desfavorable.** Un resultado real negativo significa que el poder de compra disminuyó aunque el valor nominal haya subido. Un cero real equivale a haber conservado el poder de compra, no a haber obtenido una rentabilidad nominal de cero.

11. **Errores comunes.**
   - Restar puntos porcentuales de cantidades expresadas en decimales sin convertirlas.
   - Usar inflación esperada como si fuera inflación realizada.
   - Ignorar impuestos, comisiones o cambios en el índice de precios.
   - Interpretar la aproximación como exacta cuando la inflación es alta.

12. **Cuándo no usarla.** Debe evitarse cuando se requiere precisión, cuando los porcentajes son grandes o cuando se necesita el valor final exacto. Tampoco sirve para evaluar un activo monetario con una exposición alternativa a inflación sin un análisis adicional.

13. **Complementarios.** Fórmula exacta de retorno real, valor real del poder de compra, impuestos, expectativas de inflación y bonos indexados a inflación, como los TIPS.

## 21.3 Rendimiento real exacto

### Ficha completa de 13 puntos: rendimiento real exacto

1. **Nombre.** Tasa real de retorno exacta.

2. **Uso.** Ajusta simultáneamente el crecimiento del capital nominal y el aumento del nivel general de precios.

3. **Variables.**
   - `R_N`: retorno nominal como decimal.
   - `π`: inflación del mismo período como decimal.
   - `r_real`: retorno real exacto.

4. **Fórmula.**

   \[
   r_{real}=\frac{1+R_N}{1+\pi}-1
   \]

   La relación equivalente es:

   \[
   1+R_N=(1+r_{real})(1+\pi)
   \]

5. **Pasos.**
   1. Calcular el factor de acumulación nominal, `1+R_N`.
   2. Calcular el factor de precios, `1+π`.
   3. Dividir ambos factores.
   4. Restar uno y expresar el resultado como porcentaje.
   5. Si se desea, convertir el resultado en dinero y separar el efecto nominal del efecto de inflación.

6. **Ejemplo.** Con `R_N=0,08` y `π=0,03`:

   \[
   r_{real}=\frac{1,08}{1,03}-1=0,0485437\approx4,85\%
   \]

   Sobre `1.000 €` ficticios, el valor nominal sería `1.080 €`, pero su poder de compra equivaldría a `1.030 €` del inicio. El capital real comparable es aproximadamente `1.048,54 €`.

7. **Interpretación.** `4,85 %` significa que el capital final conserva un poder de compra equivalente al de un incremento real del 4,85 %, según el índice utilizado. No implica que el inversionista pueda consumir necesariamente esos importes de forma literal.

8. **Rangos y cautelas.** Debe emplearse el IPC correcto, incluidas sus revisiones. En inflaciones negativas, por ejemplo `-2 %`, el denominador es `0,98` y el ajuste de poder de compra funciona en sentido contrario. Los gastos y los impuestos pueden alterar el resultado.

9. **Lectura favorable.** Un retorno real positivo supone una mejora frente al costo de vida del período. Es una medida histórica o estimada; no asegura que se repita.

10. **Lectura desfavorable.** Un retorno real negativo muestra pérdida de poder de compra. La pérdida puede ser mayor en un activo volátil si, al bajar la inflación, su valor nominal cae más que el nivel de precios.

11. **Errores comunes.**
   - Confundir la aproximación `R_N−π` con la fórmula exacta `(1+R_N)/(1+π)−1`.
   - Aplicar la inflación después de sumar reinversiones cuando corresponde hacerlo.
   - Comparar una inflación anual con un retorno de varios meses.
   - Ignorar cambios en la cesta o diferencias geográficas.
   - Interpretar el retorno real por sí solo como un ingreso distribuido.

12. **Cuándo no usarla.** No es una medida adecuada de riesgo de mercado, de liquidez o de la probabilidad de alcanzar un objetivo financiero. Tampoco debe usarse sin explicar el índice de precios y el horizonte.

13. **Complementarios.** Tasa de inflación, retorno total de un activo, TRI, TIPS, activos reales, horizonte temporal, impuestos, índice del costo de vida y activos ligados a inflación.

### Ejemplo comparado de inflaciones elevadas

Supongamos, solo con fines didácticos, un retorno nominal de `50 %` y una inflación de `40 %`.

- Aproximación: `50 %-40 %=10 %`.
- Resultado exacto:

  \[
  \frac{1,50}{1,40}-1=0,0714286\approx7,14\%
  \]

La diferencia de casi `2,86` puntos porcentuales demuestra que la resta simple puede ser engañosa en casos extremos. Ninguno de estos dos resultados garantiza un retorno futuro.

---

# Capítulo 22. Riesgo y retorno

El riesgo no se resume en una sola cifra. La volatilidad describe variación, el retorno esperado resume un conjunto de escenarios, Sharpe y Sortino ajustan por el tipo de resultado adverso relevante y el *maximum drawdown* depende del camino recorrido. Ninguna métrica captura todos los riesgos.

## 22.1 Retorno total de un activo

### Ficha completa de 13 puntos: retorno de un activo en un período

1. **Nombre.** Retorno total simple de un activo.

2. **Uso.** Mide el cambio de precio más los cobros recibidos durante un período. Es la base de los ejemplos de riesgo y retorno.

3. **Variables.**
   - `P_{t-1}`: precio al inicio.
   - `P_t`: precio al final.
   - `D_t`: dividendo, cupón u otra distribución recibida durante el período.
   - `R_t`: retorno total.

4. **Fórmula.**

   \[
   R_t=\frac{P_t+D_t-P_{t-1}}{P_{t-1}}
   \]

5. **Pasos.**
   1. Identificar los precios de inicio y fin del período.
   2. Registrar distribuciones por acción o unidad, sin sumar de nuevo cobros ya incluidos en el precio inicial.
   3. Calcular la ganancia o pérdida más el ingreso.
   4. Dividir por el precio inicial.
   5. Para varios períodos, decidir si se encadenan los retornos y documentar la frecuencia.

6. **Ejemplo.** Una acción ficticia pasa de `100` a `105` y paga un dividendo de `2`:

   \[
   R_t=\frac{105+2-100}{100}=0,07=7\%
   \]

   Si el precio cae a `98` y no hay distribución, el retorno es `-2 %`, aunque el cotice por encima de `96`.

7. **Interpretación.** Mide la riqueza producida durante un período. No tiene en cuenta por sí sola el camino, el nivel ni el costo de liquidez, y no es necesariamente realizable si no se puede vender al precio final.

8. **Rangos y cautelas.** Debe emparejarse correctamente el precio con la distribución. En activos con cotizaciones continuas, contratos de permutas o intereses acumulados, el tratamiento puede ser más complejo. Las rentabilidades negativas pueden ser menores que `-100 %` en derivados apalancados.

9. **Lectura favorable.** Un retorno total positivo aumenta la riqueza del inversionista en el período, pero puede ser insuficiente para superar la inflación, impuestos o su alternativa de referencia.

10. **Lectura desfavorable.** Un retorno negativo reduce la riqueza. Una distribución alta no compensa necesariamente una caída del precio mayor y una evaluación separada del riesgo.

11. **Errores comunes.**
   - Olvidar dividendos o cupones.
   - Usar precio de cierre como precio de salida realmente disponible.
   - Mezclar frecuencias de los retornos.
   - Tratar una proyección como un retorno realizado.
   - Sumar distribuciones dos veces al encadenar períodos.

12. **Cuándo no usarla.** No basta por sí sola para comparar riesgos, sensibilidad o liquidez a largo plazo. Tampoco debe interpretarse como medida de la calidad del proceso de inversión.

13. **Complementarios.** Retorno geométrico, TRI, volatilidad, drawdown, valor liquidativo, precio de mercado, dividendos brutos o netos y fiscalidad.

## 22.2 Retorno esperado

### Ficha completa de 13 puntos: retorno esperado

1. **Nombre.** Retorno esperado, `E(R)`.

2. **Uso.** Resume en un número la media ponderada de varios escenarios posibles. Sirve para planificación, comparación y cálculo de métricas de riesgo.

3. **Variables.**
   - `R_s`: retorno del escenario `s`.
   - `p_s`: probabilidad del escenario `s`.
   - `E(R)`: retorno esperado.
   - `\sum p_s=1`.

4. **Fórmula.**

   \[
   E(R)=\sum_s p_sR_s
   \]

   En porcentaje: `E(R) % = Σ p_s × R_s %`.

5. **Pasos.**
   1. Definir escenarios mutuamente excluyentes y exhaustivos.
   2. Estimar una probabilidad para cada uno.
   3. Comprobar que las probabilidades suman uno.
   4. Multiplicar cada retorno por su probabilidad.
   5. Sumar y revisar el horizonte y la unidad.

6. **Ejemplo.** Una acción ficticia tiene estos escenarios:

   | Escenario | Retorno | Probabilidad | Contribución |
   |---|---:|---:|---:|
   | Recesión | -5 % | 20 % | -1,0 % |
   | Base | 8 % | 50 % | 4,0 % |
   | Expansión | 15 % | 30 % | 4,5 % |

   \[
   E(R)=0,20(-0,05)+0,50(0,08)+0,30(0,15)=0,075=7,5\%
   \]

7. **Interpretación.** Es la media de los resultados de un modelo, no una cifra prometida. Informa cuánto se espera ganar “en promedio” si los escenarios y probabilidades fueran correctos.

8. **Rangos y cautelas.** No debe mezclarse un retorno anual con otro mensual. Las probabilidades suelen ser subjetivas y pueden quedar obsoletas. El retorno esperado no indica qué ocurrirá en una fecha concreta ni qué parte del resultado se podrá reinvertir.

9. **Lectura favorable.** Un retorno esperado superior al objetivo o a una alternativa comparable puede apoyar una decisión, siempre que los riesgos, costos y probabilidades se analicen.

10. **Lectura desfavorable.** Un retorno esperado bajo puede indicar una mala relación entre objetivo y riesgo. También es desfavorable una estimación alta obtenida con probabilidades optimistas y sin escenario adverso suficiente.

11. **Errores comunes.**
   - Confundir retorno esperado con retorno real.
   - Usar probabilidades que no suman uno.
   - Ponderar escenarios por precios sin una justificación coherente.
   - Ignorar sesgos, cambios regulatorios o riesgos de cola.
   - Usar el retorno esperado para garantizar una ganancia futura.

12. **Cuándo no usarla.** No sirve como sustituto de una prueba de estrés, un horizonte adecuado ni un plan de liquidez. Tampoco es suficiente para valorar un activo con resultados muy asimétricos sin modelar su distribución.

13. **Complementarios.** Varianza, desviación estándar, escenarios, prueba de estrés, retorno ponderado por probabilidad, probabilidad de pérdida y Sharpe.

## 22.3 Varianza

### Ficha completa de 13 puntos: varianza de retornos

1. **Nombre.** Varianza de la distribución de retornos.

2. **Uso.** Resume qué tan alejados están los resultados de su media en unidades al cuadrado. Es la base matemática de la desviación estándar.

3. **Variables.**
   - `p_s`: probabilidad del escenario `s`.
   - `R_s`: retorno del escenario.
   - `E(R)`: retorno esperado.
   - `σ²`: varianza.

4. **Fórmula.**

   \[
   σ^2=\sum_s p_s\left(R_s-E(R)\right)^2
   \]

   Si se trabaja con una muestra histórica y se quiere estimar la varianza poblacional, el denominador suele ser `n-1`, no `n`.

5. **Pasos.**
   1. Calcular `E(R)`.
   2. Restar la media a cada retorno.
   3. Elevar cada desviación al cuadrado.
   4. Ponderar por probabilidad.
   5. Sumar y no olvidar la unidad elevada al cuadrado.

6. **Ejemplo.** Con los escenarios del apartado anterior, usando porcentajes como números:

   \[
   \begin{aligned}
   σ²={}&0,20(-5-7,5)^2+0,50(8-7,5)^2\\
       &+0,30(15-7,5)^2\\
       ={}&48,25\;(\text{puntos porcentuales})^2
   \end{aligned}
   \]

   Como decimal, la varianza es `0,004825`.

7. **Interpretación.** Una varianza mayor indica mayor dispersión bajo el modelo. `48,25 (puntos porcentuales)^2` no significa que el activo normalmente pierda o gane `48,25 %`.

8. **Rangos y cautelas.** Es sensible a observaciones extremas y puede sobreestimar o subestimar si se cambia el denominador. La varianza de una muestra pequeña es inestable. El retorno geométrico y el aritmético no deben mezclarse sin criterio.

9. **Lectura favorable.** Una varianza menor, si todo lo demás se mantiene igual, ofrece mayor estabilidad y suele facilitar la comparación de eficiencia de portafolio.

10. **Lectura desfavorable.** Una varianza alta puede indicar incertidumbre, aunque por sí sola no distingue entre riesgo de insolvencia, de tipos de interés, de cambio de divisa o de liquidez. Una varianza baja no implica ausencia de riesgo de cola.

11. **Errores comunes.**
   - Interpretar las unidades al cuadrado como una rentabilidad.
   - Usar `n` en una muestra cuando se pretende estimar la varianza poblacional.
   - Calcular la varianza alrededor de cero en lugar de la media.
   - Omitir una observación o cambiar pesos.
   - Ignorar la no normalidad y la dependencia temporal.

12. **Cuándo no usarla.** Por sí sola no es una buena medida de riesgo para distribuciones muy asimétricas, ilíquidas o con eventos discretos. Tampoco sirve como medida directa de pérdida máxima.

13. **Complementarios.** Desviación estándar, desviación a la baja, VaR, drawdown, covarianza, estrés y análisis de escenarios.

## 22.4 Desviación estándar

### Ficha completa de 13 puntos: desviación estándar de retornos

1. **Nombre.** Desviación estándar o volatilidad de retornos.

2. **Uso.** Expresa la dispersión de los retornos en las mismas unidades que la tasa y facilita su interpretación.

3. **Variables.**
   - `σ²`: varianza.
   - `σ`: desviación estándar.
   - `R_s`, `p_s` y `E(R)`: escenarios, probabilidades y media.

4. **Fórmula.**

   \[
   σ=\sqrt{σ^2}
   =\sqrt{\sum_s p_s(R_s-E(R))^2}
   \]

5. **Pasos.**
   1. Calcular la varianza.
   2. Verificar que la varianza no sea negativa.
   3. Tomar la raíz cuadrada.
   4. Expresarla en la unidad original, por ejemplo puntos porcentuales.
   5. Mantener el mismo período que el retorno.

6. **Ejemplo.** Para el activo anterior:

   \[
   σ=\sqrt{48,25}\approx6,94\ \text{puntos porcentuales}
   \]

   Si la varianza se exprese en decimal, `σ≈0,0694=6,94 %`.

7. **Interpretación.** Indica la dispersión alrededor del retorno esperado. No significa que el retorno se sitúe entre la media menos y más `σ` con una probabilidad fija.

8. **Rangos y cautelas.** No hay un umbral universal de volatilidad. Debe indicarse el período, la fuente y si se usan retornos logarítmicos o simples. La volatilidad anualizada de una serie corta y autocorrelacionada puede ser engañosa.

9. **Lectura favorable.** Una volatilidad menor, con retornos esperados y costos comparables, suele indicar un perfil más estable y puede mejorar medidas de riesgo ajustado.

10. **Lectura desfavorable.** Una volatilidad alta puede producir mayor incertidumbre y cambios de precio rápidos, aun cuando el retorno promedio sea positivo en el modelo.

11. **Errores comunes.**
   - Confundir varianza con desviación estándar.
   - Usar `σ` para un precio en vez de un retorno.
   - Omitir los dividendos.
   - Anualizar sin indicar la frecuencia.
   - Interpretar menor volatilidad como menor probabilidad de insolvencia o iliquidez.

12. **Cuándo no usarla.** Es insuficiente para activos con saltos, sesgo extremo o riesgos no lineales. Para un inversionista con horizonte corto, el drawdown y una prueba de estrés pueden ser más informativos.

13. **Complementarios.** Varianza, VaR, expected shortfall, maximum drawdown, beta, correlación y pruebas de estrés.

## 22.5 Ratio de Sharpe

### Ficha completa de 13 puntos: ratio de Sharpe

1. **Nombre.** Ratio de Sharpe.

2. **Uso.** Compara el retorno esperado de un activo o portafolio con el de una referencia libre de riesgo, ajustado por su volatilidad.

3. **Variables.**
   - `E(R_p)`: retorno esperado del portafolio.
   - `r_f`: retorno de la referencia libre de riesgo para el mismo período.
   - `σ_p`: desviación estándar del portafolio.
   - `S_p`: ratio de Sharpe.

4. **Fórmula.**

   \[
   S_p=\frac{E(R_p)-r_f}{σ_p}
   \]

   El exceso de retorno también puede expresarse como `R_p-r_f` cuando se usa el retorno realizado del período, siempre que la convención sea coherente.

5. **Pasos.**
   1. Fijar un período y una referencia, por ejemplo un pagaré público o un depósito indexado, no “libre de riesgo” absoluto.
   2. Calcular el retorno esperado o realizado según el enfoque.
   3. Calcular la volatilidad del mismo período.
   4. Restar la referencia.
   5. Dividir por la volatilidad y comparar con otros portafolios bajo supuestos similares.

6. **Ejemplo.** Un portafolio ficticio tiene retorno esperado de `8 %`, una referencia de `3 %` y desviación estándar de `10 %`:

   \[
   S_p=\frac{0,08-0,03}{0,10}=0,50
   \]

   La interpretación no es “gana 50 %”; significa que el exceso de retorno modelado equivale a `0,50` unidades de volatilidad.

7. **Interpretación.** Un Sharpe mayor puede indicar mejor eficiencia modelada. También puede reflejar una estimación demasiado optimista de retorno o una volatilidad insostenible.

8. **Rangos y cautelas.** No hay punto de corte universal. La referencia puede tener riesgo y cambiar de duración o de exposición. Las cifras negativas, cercanas a cero o con un denominador muy pequeño requieren especial cautela.

9. **Lectura favorable.** Un Sharpe positivo y relativamente alto, con mediciones comparables y robustas, sugiere una buena relación esperada entre exceso de retorno y volatilidad.

10. **Lectura desfavorable.** Un Sharpe negativo o bajo indica que el exceso de retorno no compensa la volatilidad del modelo. También es desfavorable usarlo para ocultar concentraciones o riesgos de cola.

11. **Errores comunes.**
   - Usar tasa libre de riesgo de un período y volatilidad de otro.
   - Usar retornos geométricos y aritméticos sin declararlo.
   - Ignorar comisiones, impuestos y diferenciales comprador-vendedor.
   - Comparar Sharpe de ETFs con índices de referencia distintos.
   - Confundir Sharpe con retorno esperado garantizado.

12. **Cuándo no usarla.** Funciona mejor con distribuciones aproximadamente estables y para horizontes suficientemente largos. En estrategias con asimetría fuerte, iliquidez o drawdown dominante, conviene complementarlo o usar otra métrica.

13. **Complementarios.** Sortino, maximum drawdown, alfa, beta, tracking error, métricas de riesgo ajustado y revisión de supuestos.

## 22.6 Ratio de Sortino

### Ficha completa de 13 puntos: ratio de Sortino

1. **Nombre.** Ratio de Sortino.

2. **Uso.** Ajusta el retorno por la magnitud de los resultados inferiores a un mínimo aceptable, en vez de penalizar por toda la volatilidad.

3. **Variables.**
   - `E(R_p)`: retorno esperado del portafolio.
   - `MAR`: tasa mínima aceptable o *minimum acceptable return*.
   - `DD`: desviación a la baja.
   - `S_p,S`: ratio de Sortino.

4. **Fórmula.**

   \[
   DD=\sqrt{\sum_s p_s\min(R_s-MAR,0)^2}
   \]

   \[
   S_{p,S}=\frac{E(R_p)-MAR}{DD}
   \]

5. **Pasos.**
   1. Definir `MAR` antes de observar el resultado.
   2. Calcular la brecha `R_s-MAR` de cada escenario.
   3. Poner en cero las brechas positivas y elevar al cuadrado las negativas.
   4. Ponderar y tomar la raíz para obtener `DD`.
   5. Restar `MAR` al retorno esperado y dividir por `DD`.

6. **Ejemplo.** Supongamos un activo ficticio con escenarios `-4 %`, `8 %` y `14 %`, probabilidades `10 %`, `60 %` y `30 %`, y `MAR=3 %`.

   El retorno esperado es `8,6 %`. Solo el primer escenario queda por debajo de `MAR`:

   \[
   DD=\sqrt{0,10(-0,04-0,03)^2}\approx2,21\%
   \]

   \[
   S_{p,S}=\frac{8,6\%-3\%}{2,21\%}\approx2,53
   \]

7. **Interpretación.** Mide cuánto retorno por unidad de “mala” desviación aporta el portafolio. Una parte alta de la dispersión por encima de `MAR` queda excluida del denominador.

8. **Rangos y cautelas.** El resultado depende mucho de `MAR` y de si se usa toda la muestra o solo las observaciones negativas. Debe especificarse la convención. No sustituye una prueba de estrés de insolvencia.

9. **Lectura favorable.** Un Sortino alto puede ser útil para un inversionista que valore especialmente evitar resultados inferiores al mínimo. Solo es comparable con otro usando el mismo `MAR`.

10. **Lectura desfavorable.** Un valor bajo puede indicar que el retorno no cubre el resultado adverso modelado. También es engañoso si `MAR` se elige después de conocer los resultados.

11. **Errores comunes.**
   - Elegir `MAR` retrospectivamente.
   - Usar desviación estándar en el denominador y llamarlo Sortino.
   - Mezclar períodos mensuales y anuales.
   - Ignorar que un valor negativo de `R_s-MAR` puede ser muy grande.
   - Olvidar que la dispersión por encima de `MAR` también puede contener riesgo.

12. **Cuándo no usarla.** No es suficiente para medir riesgo de liquidez, apalancamiento, incumplimiento o pérdida máxima. Si `DD=0` por construcción o por redondeo, el ratio no es interpretable.

13. **Complementarios.** Sharpe, captura de resultados a la baja, maximum drawdown, expected shortfall, VaR y objetivo de retorno.

## 22.7 Maximum drawdown

### Ficha completa de 13 puntos: maximum drawdown

1. **Nombre.** Drawdown máximo o caída máxima desde un máximo anterior.

2. **Uso.** Resume la peor caída experimentada entre el valor observado y un máximo previo, sin considerar cuánto duró.

3. **Variables.**
   - `V_t`: valor de la cuenta o activo en el tiempo `t`.
   - `Peak_t`: máximo de `V` hasta `t`.
   - `DD_t`: caída actual desde el máximo.
   - `MDD`: caída máxima.

4. **Fórmula.**

   \[
   DD_t=\frac{V_t}{\max_{0\le s\le t}V_s}-1
   \]

   \[
   MDD=\min_t(DD_t)
   \]

   Si se expresa la magnitud positiva, se cambia el signo o se toma el valor absoluto.

5. **Pasos.**
   1. Construir una serie de valores con la misma frecuencia y ajustada por flujos externos.
   2. Registrar máximos acumulados.
   3. Calcular cada caída desde el máximo vigente.
   4. Conservar la caída más negativa.
   5. Medir además la fecha del máximo, la fecha del mínimo y el tiempo de recuperación.

6. **Ejemplo.** Serie ficticia de valores:

   | Fecha | Valor |
   |---|---:|
   | t0 | 100 |
   | t1 | 110 |
   | t2 | 99 |
   | t3 | 104 |
   | t4 | 92 |
   | t5 | 115 |
   | t6 | 108 |

   El máximo previo al valor `92` es `110`:

   \[
   DD_{t4}=\frac{92}{110}-1=-16,36\%
   \]

   El MDD es `16,36 %`. El valor de `108` al final cae `6,09 %` desde `115`, pero no supera la caída anterior.

7. **Interpretación.** Indica la peor pérdida de pico a valle observada en la muestra. No dice cuánto tiempo tardó en recuperarse ni predice la próxima caída.

8. **Rangos y cautelas.** Puede variar mucho según la frecuencia y el período. Una serie mensual no ve una caída intradía. Un valor positivo al final puede ocultar una pérdida grande si hubo aportaciones externas. Una caída de la serie ajustada no equivale necesariamente a una pérdida si se hicieron depósitos o retiros.

9. **Lectura favorable.** Un MDD pequeño y una recuperación razonable pueden indicar una trayectoria de riesgo más llevadera. “Pequeño” depende del horizonte y la tolerancia.

10. **Lectura desfavorable.** Un MDD grande puede hacer difícil mantener el plan, provocar ventas en el peor momento y reducir la probabilidad de cumplir objetivos. No captura todas las pérdidas si la serie es incompleta.

11. **Errores comunes.**
   - Usar el valor inicial en vez de máximos sucesivos.
   - Calcular solo la caída final.
   - Ignorar dividendos o flujos de caja.
   - Usar precios de cierre para una estrategia que pudo quedar abierta.
   - Confundir la fecha del mínimo con la fecha de recuperación.

12. **Cuándo no usarla.** No describe la frecuencia de pérdidas moderadas, el riesgo de cola positiva, el costo de liquidez ni todos los riesgos no lineales. Debe complementarse con escenarios y una definición precisa de la serie.

13. **Complementarios.** Drawdown actual, periodo de recuperación, índice de ulceración, Sharpe, Sortino, expected shortfall y pruebas de estrés.

### Limitaciones generales de las métricas

- Las métricas históricas dependen de la ventana, la frecuencia y la limpieza de los datos.
- El supuesto de normalidad puede fallar, especialmente con eventos de insolvencia, saltos o falta de liquidez.
- La volatilidad y el drawdown no describen todo el riesgo asimétrico.
- Las referencias de “sin riesgo” no están exentas de riesgo y pueden cambiar de instrumento, horizonte o política monetaria.
- Cualquier esperado, Sharpe, Sortino o YTM debe presentarse como una estimación bajo supuestos, nunca como una promesa de rentabilidad.

---

# Capítulo 23. Portafolio, diversificación y asset allocation

Un portafolio combina activos. El resultado no depende solo de los retornos y riesgos individuales: también dependen de las covarianzas, los precios y el momento de los rebalanceos. La diversificación puede reducir riesgo, pero no elimina el riesgo común de mercado.

## 23.1 Ejemplo integrado de tres activos

Se seguirá un portafolio ficticio a largo plazo, totalmente invertido y sin apalancamiento:

| Activo | Peso | Retorno esperado anual | Desviación estándar anual | Explicación |
|---|---:|---:|---:|---|
| A | 50 % | 8 % | 15 % | Acción de crecimiento |
| B | 30 % | 12 % | 20 % | Acción cíclica |
| C | 20 % | 5 % | 8 % | Activo defensivo |
| **Total** | **100 %** | — | — | — |

Correlaciones anualizadas hipotéticas:

| | A | B | C |
|---|---:|---:|---:|
| **A** | 1,00 | 0,65 | 0,25 |
| **B** | 0,65 | 1,00 | 0,30 |
| **C** | 0,25 | 0,30 | 1,00 |

Con estos datos, el retorno esperado es `8,60 %`, la varianza es `0,016507` en retornos decimales al cuadrado y la desviación estándar es aproximadamente `12,85 %`. El detalle aparece en las fichas siguientes.

## 23.2 Retorno esperado del portafolio

### Ficha completa de 13 puntos: retorno esperado del portafolio

1. **Nombre.** Retorno esperado de un portafolio como suma de activos.

2. **Uso.** Estima la rentabilidad esperada de la combinación según sus pesos y los retornos esperados de cada componente.

3. **Variables.**
   - `w_i`: peso del activo `i`.
   - `E(R_i)`: retorno esperado del activo `i`.
   - `E(R_p)`: retorno esperado del portafolio.
   - `n`: número de activos.

4. **Fórmula.**

   \[
   E(R_p)=\sum_{i=1}^{n}w_iE(R_i)
   \]

5. **Pasos.**
   1. Definir los pesos y verificar que sumen uno, salvo efectivo o apalancamiento explícito.
   2. Obtener retornos esperados comparables.
   3. Multiplicar cada retorno por su peso.
   4. Sumar las contribuciones.
   5. Revisar que la unidad y el horizonte sean los mismos.

6. **Ejemplo.** Con el portafolio de tres activos:

   \[
   E(R_p)=0,50(8\%)+0,30(12\%)+0,20(5\%)
   =4,0\%+3,6\%+1,0\%=8,60\%
   \]

7. **Interpretación.** El retorno esperado es la media ponderada de los retornos esperados. No indica que se cumpla en cada año ni que el resultado real sea `8,60 %`.

8. **Rangos y cautelas.** Los pesos deben corresponder al mismo momento y mecanismo. Con exposición cambiaria, productos apalancados o posiciones cortas, la fórmula requiere más cuidado. Las correlaciones pueden cambiar en una crisis.

9. **Lectura favorable.** Una combinación puede alcanzar el retorno esperado deseado con un perfil de riesgo menor que el de una concentración en un solo activo. Eso debe verificarse con varianza y no solo con retorno.

10. **Lectura desfavorable.** Un retorno esperado alto puede estar concentrado en un activo frágil, apalancado o con una probabilidad adversa mal estimada. Un retorno esperado bajo tampoco basta para decidir sin considerar necesidades y riesgos.

11. **Errores comunes.**
   - Usar pesos que no suman uno.
   - Mezclar retornos anualizados con retornos diarios.
   - Usar pesos iniciales después de un período de crecimiento.
   - Confundir el retorno esperado con el realizado.
   - Olvidar el coste o el deslizamiento de una operación de rebalanceo de un ETF.

12. **Cuándo no usarla.** No es suficiente para evaluar riesgo, liquidez, concentración o viabilidad. Si los pesos cambian con los precios, usar un modelo de rebalanceo y valores de mercado reales.

13. **Complementarios.** Varianza de portafolio, correlación, covarianza, límites de concentración y asset allocation.

## 23.3 Retorno ponderado realizado

### Ficha completa de 13 puntos: retorno ponderado realizado del portafolio

1. **Nombre.** Retorno realizado de un período con pesos de cartera.

2. **Uso.** Calcula la ganancia o pérdida de la cartera en un período concreto, después de mantener los pesos indicados al inicio.

3. **Variables.**
   - `w_i`: peso mantenido del activo `i` durante el período.
   - `R_i`: retorno realizado del activo `i`.
   - `R_p`: retorno realizado del portafolio.

4. **Fórmula.**

   \[
   R_p=\sum_{i=1}^{n}w_iR_i
   \]

5. **Pasos.**
   1. Fijar los pesos al inicio del período.
   2. Calcular el retorno total de cada activo.
   3. Multiplicar cada retorno por su peso.
   4. Sumar las contribuciones.
   5. Comparar con el valor de la cartera y revisar distribución, porcentajes y flujo externo.

6. **Ejemplo.** Con `50 %`, `30 %` y `20 %`, si A devuelve `12 %`, B devuelve `-5 %` y C devuelve `-1 %`:

   \[
   R_p=0,50(12\%)+0,30(-5\%)+0,20(-1\%)
   =6,0\%-1,5\%-0,2\%=4,30\%
   \]

   Una cartera inicial de `1.000` termina en `1.043`, antes de costos y declaraciones fiscales.

7. **Interpretación.** Es el resultado ponderado de ese período, no una expectativa. Puede ser positivo incluso con un componente negativo si el peso y la contribución de los demás activos son suficientes.

8. **Rangos y cautelas.** Solo es exacto con los pesos del período y sin operaciones que cambien la exposición. Si se rebalancea durante el período, usar valores de cada fecha o retornos por subperíodos.

9. **Lectura favorable.** Un retorno realizado positivo y sostenido puede indicar que el proceso capturó las oportunidades del período; no debe confundirse con un criterio retrospectivo de rentabilidad.

10. **Lectura desfavorable.** Un retorno positivo aislado puede ocultar una concentración, una pérdida fuerte en un componente o un resultado dominado por un solo activo. Un período negativo no describe todo el riesgo futuro.

11. **Errores comunes.**
   - Usar pesos finales en vez de iniciales.
   - Ignorar un rebalanceo intermedio.
   - Calcular el retorno como variación del precio de la cartera sin distribuciones.
   - Sumar porcentajes sin convertirlos a contribuciones.

12. **Cuándo no usarla.** No describe el camino de la cartera, la volatilidad de cada activo ni la pérdida máxima. Tampoco es adecuada para comparar portafolios si cambian los pesos iniciales.

13. **Complementarios.** Retorno geométrico, TRI, varianza, maximum drawdown, valor liquidativo y retorno por peso.

## 23.4 Varianza del portafolio con covarianza

### Ficha completa de 13 puntos: varianza de un portafolio

1. **Nombre.** Varianza de la cartera usando varianzas y covarianzas.

2. **Uso.** Incorpora el riesgo individual de cada activo y la forma en que sus retornos se mueven simultáneamente.

3. **Variables.**
   - `w_i`, `w_j`: pesos de los activos.
   - `σ_i²`: varianza del activo `i`.
   - `ρ_{ij}`: correlación entre `i` y `j`.
   - `σ_i`, `σ_j`: desviaciones estándar.
   - `σ_p²`: varianza del portafolio.

4. **Fórmula.**

   \[
   σ_p^2=\sum_{i=1}^{n}w_i^2σ_i^2
   +2\sum_{i<j}w_iw_jρ_{ij}σ_iσ_j
   \]

   Como la covarianza es `Cov(R_i,R_j)=ρ_{ij}σ_iσ_j`, la segunda parte puede escribirse como `2Σ_{i<j}w_iw_jCov(R_i,R_j)`.

5. **Pasos.**
   1. Definir pesos y varianzas en el mismo período.
   2. Estimar las correlaciones o covarianzas.
   3. Calcular las contribuciones individuales.
   4. Calcular cada término cruzado, contando cada par una sola vez y multiplicándolo por dos.
   5. Sumar y tomar la raíz si se quiere desviación estándar.

6. **Ejemplo.** Con los tres activos, usando retornos anuales en forma decimal:

   \[
   \begin{aligned}
   σ_p²={}&(0,50^2)(0,15^2)+(0,30^2)(0,20^2)+(0,20^2)(0,08^2)\\
   &+2(0,50)(0,30)(0,65)(0,15)(0,20)\\
   &+2(0,50)(0,20)(0,25)(0,15)(0,08)\\
   &+2(0,30)(0,20)(0,30)(0,20)(0,08)\\
   ={}&0,016507
   \end{aligned}
   \]

   En puntos porcentuales al cuadrado, equivale a `165,07`.

7. **Interpretación.** Los pesos cuadrados miden el riesgo por activo; los términos cruzados miden el efecto conjunto. Las correlaciones negativas pueden reducir la varianza total, pero no garantizan por sí solas una buena reducción del riesgo.

8. **Rangos y cautelas.** La fórmula es lineal en pesos, pero la optimización puede ser no lineal y sensible a la matriz. Correlaciones estimadas con pocos datos pueden ser inestables. En crisis, las correlaciones suelen aumentar.

9. **Lectura favorable.** Una combinación con covarianzas bajas o negativas puede lograr más diversificación que la simple suma de riesgos individuales.

10. **Lectura desfavorable.** Una alta concentración, las correlaciones positivas y los activos con la misma exposición pueden elevar el riesgo agregado. Una diversificación aparente puede desaparecer en un evento de estrés.

11. **Errores comunes.**
   - Olvidar el factor dos en los pares cruzados.
   - Usar `σ_i` donde corresponde `σ_i²`.
   - Usar correlación con signo invertido.
   - Usar retornos de precios y de distribuciones de forma incoherente.
   - Confundir menor varianza con mayor retorno esperado.

12. **Cuándo no usarla.** Requiere una estimación razonable de las relaciones históricas. Para activos con cambios de régimen, poca liquidez o relaciones no lineales, conviene complementar con escenarios de estrés y análisis de concentraciones.

13. **Complementarios.** Correlación, covarianza, desviación estándar del portafolio, contribución al riesgo y pruebas de estrés.

## 23.5 Riesgo total del portafolio

### Ficha completa de 13 puntos: desviación estándar del portafolio

1. **Nombre.** Desviación estándar o volatilidad del portafolio.

2. **Uso.** Expresa la dispersión del retorno de la cartera en puntos porcentuales y permite compararla con carteras de igual horizonte.

3. **Variables.**
   - `σ_p²`: varianza calculada con pesos, varianzas y covarianzas.
   - `σ_p`: desviación estándar del portafolio.

4. **Fórmula.**

   \[
   σ_p=\sqrt{σ_p^2}
   \]

5. **Pasos.**
   1. Calcular la varianza con la fórmula de covarianza.
   2. Comprobar que el resultado sea no negativo.
   3. Tomar la raíz cuadrada.
   4. Expresar en la misma unidad que los retornos.
   5. Mantener el mismo horizonte y periodicidad.

6. **Ejemplo.** Para el portafolio anterior:

   \[
   σ_p=\sqrt{0,016507}\approx0,1285=12,85\%
   \]

   La media ponderada de las volatilidades individuales sería `15,10 %`; el resultado de `12,85 %` refleja diversificación bajo las correlaciones hipotéticas.

7. **Interpretación.** Mide la dispersión de la cartera completa. No es “la probabilidad de perder” ni una pérdida máxima.

8. **Rangos y cautelas.** Un valor bajo puede coexistir con un riesgo de salto, incumplimiento o iliquidez. Una cartera con muchos activos puede parecer diversificada, pero tener un factor común dominante.

9. **Lectura favorable.** Una volatilidad moderada y coherente con el objetivo puede ayudar a sostener el plan, siempre que se examine el origen del riesgo.

10. **Lectura desfavorable.** Una volatilidad alta puede aumentar la probabilidad de decisiones emocionales durante una caída y hacer que el horizonte de recuperación se alargue.

11. **Errores comunes.**
   - Tomar la media ponderada de volatilidades como si fuera la volatilidad de la cartera.
   - Usar una frecuencia distinta a la del retorno.
   - Confundir diversificación con eliminación de riesgo.
   - Olvidar la concentración por emisor, país, sector o factor.

12. **Cuándo no usarla.** Por sí sola no mide asimetría de pérdidas, drawdown máximo, liquidez ni tracking error. Debe usarse con métricas apropiadas al instrumento y al objetivo.

13. **Complementarios.** Varianza de cartera, correlación, maximum drawdown, VaR, expected shortfall y límites de exposición.

## 23.6 Correlación y covarianza

### Ficha completa de 13 puntos: correlación entre retornos

1. **Nombre.** Correlación de retornos, con su equivalente en covarianza.

2. **Uso.** Mide la relación lineal entre dos activos y permite explicar por qué combinar sus riesgos puede ser más o menos eficiente.

3. **Variables.**
   - `ρ_{ij}`: correlación entre los retornos de `i` y `j`.
   - `Cov(R_i,R_j)`: covarianza.
   - `σ_i`, `σ_j`: desviaciones estándar.
   - `E(R_i)`, `E(R_j)`: medias de los retornos.

4. **Fórmula.**

   \[
   ρ_{ij}=\frac{Cov(R_i,R_j)}{σ_iσ_j}
   \]

   \[
   Cov(R_i,R_j)=\sum_s p_s(R_{i,s}-E(R_i))(R_{j,s}-E(R_j))
   \]

5. **Pasos.**
   1. Calcular las medias de ambos retornos.
   2. Calcular las desviaciones de cada observación.
   3. Multiplicar desviaciones y promediar para obtener la covarianza.
   4. Dividir por el producto de las desviaciones estándar.
   5. Comprobar que el resultado esté entre `-1` y `1` y observar la ventana.

6. **Ejemplo.** Si `σ_A=15 %`, `σ_B=20 %` y `ρ_{AB}=0,65`:

   \[
   Cov(R_A,R_B)=0,65(0,15)(0,20)=0,0195
   \]

   En puntos porcentuales al cuadrado, es `195`. Una correlación de `0,65` es positiva, pero no perfecta; los activos no se mueven en proporción fija.

7. **Interpretación.** `ρ=+1` indica una relación lineal positiva perfecta en la muestra; `ρ=-1`, negativa perfecta; `ρ≈0`, poca relación lineal. Una covarianza positiva hace que las desviaciones tiendan a moverse en el mismo sentido.

8. **Rangos y cautelas.** Correlación no equivale a causalidad. Cambia con el período, la moneda, la frecuencia y el régimen. Los ETFs de un mismo sector pueden parecer diversificados por tener muchos nombres y, a la vez, tener una concentración común.

9. **Lectura favorable.** Correlaciones bajas o negativas entre componentes pueden reducir el riesgo de la cartera y mejorar la diversificación.

10. **Lectura desfavorable.** Correlaciones positivas y altas hacen que las pérdidas ocurran simultáneamente. En una crisis, las correlaciones pueden aumentar y la diversificación histórica volverse menos útil.

11. **Errores comunes.**
   - Interpretar correlación como causalidad.
   - Usar covarianza como correlación.
   - Ignorar signo o periodicidad.
   - Tratar `ρ=0,30` como “30 % de diversificación”.
   - Suponer que una correlación negativa protege siempre frente a una pérdida.

12. **Cuándo no usarla.** Es poco informativa para relaciones no lineales, eventos de salto o muestras pequeñas. Para productos apalancados, inversos o con dependencias complejas, conviene complementar el análisis con pruebas de estrés.

13. **Complementarios.** Varianza de cartera, correlación móvil, pruebas de estrés, correlaciones en escenarios de estrés y exposición por factor.

## 23.7 Rebalanceo

### Ficha completa de 13 puntos: operación de rebalanceo

1. **Nombre.** Ajuste de pesos o operación de rebalanceo.

2. **Uso.** Recalcula cuánto comprar o vender para volver a una asignación objetivo después de la evolución de los precios o de aportes y retiros.

3. **Variables.**
   - `V_{after}`: valor total de la cartera después del período.
   - `w_i^*`: peso objetivo del activo `i`.
   - `V_{i,after}`: valor actual del activo `i`.
   - `Δ_i`: importe de compra o venta; positivo es compra.

4. **Fórmula.**

   \[
   Δ_i=w_i^*V_{after}-V_{i,after}
   \]

   Si `Δ_i>0`, se compra; si `Δ_i<0`, se vende. En una cartera sin posiciones cortas, el total de compras debe coincidir con el total de ventas más el efectivo disponible.

5. **Pasos.**
   1. Actualizar el valor de cada activo y el total.
   2. Calcular los pesos objetivo.
   3. Calcular los valores objetivo.
   4. Comparar valor actual y objetivo.
   5. Ejecutar solo las desviaciones que superen el umbral, banda o revisión programada.
   6. Registrar impuestos, comisiones y deslizamiento.

6. **Ejemplo.** Cartera inicial de `1.000` con `500` en A, `300` en B y `200` en C. Supongamos un período con retornos de `12 %`, `-5 %` y `-1 %`:

   | Activo | Valor final | Peso actual | Valor objetivo | Operación |
   |---|---:|---:|---:|---:|
   | A | 560,00 | 53,69 % | 521,50 | -38,50 |
   | B | 285,00 | 27,33 % | 312,90 | +27,90 |
   | C | 198,00 | 18,98 % | 208,60 | +10,60 |
   | **Total** | **1.043,00** | **100 %** | **1.043,00** | **0,00** |

   La cartera ganó `4,30 %` antes de costos. Se venden `38,50` de A y se compran `38,50` combinados de B y C para volver a `50/30/20`.

7. **Interpretación.** El rebalanceo mantiene la política de pesos; no crea rendimiento por sí mismo. Puede activar compras de activos que suben y ventas de los que bajan, por lo que la ventaja depende de los precios posteriores y de los costos.

8. **Rangos y cautelas.** No hay una frecuencia óptima universal. Pueden existir bandas de tolerancia, fechas límite, restricciones fiscales, liquidez y costes de compraventa. Rebalancear con una frecuencia demasiado alta puede destruir valor.

9. **Lectura favorable.** Un rebalanceo disciplinado puede mantener la concentración, el riesgo y la exposición dentro de límites definidos.

10. **Lectura desfavorable.** Un rebalanceo mecánico puede ampliar pérdidas, pagar impuestos y obligar a vender activos ilíquidos. Una política que no contempla los flujos externos puede quedar obsoleta.

11. **Errores comunes.**
   - Calcular la operación sobre valores antiguos.
   - Ignorar que vender y comprar cambia la base imponible.
   - No incluir el pago de dividendos o las comisiones.
   - Rebalancear un activo que no está dentro del universo.
   - Confundir mantener la asignación con una promesa de rentabilidad.

12. **Cuándo no usarla.** No es necesario operar si las desviaciones son pequeñas, el costo es alto o la banda de tolerancia ya se cumple. Puede ser inadecuada para objetivos de largo plazo, con restricciones legales o cuando los pesos objetivo no se han revisado.

13. **Complementarios.** Asignación de activos, bandas de rebalanceo, flujo de caja, impuestos, liquidez, tracking error y declaración de política de inversión.

## 23.8 Interpretación de diversificación y asset allocation

- **Diversificación:** combinar activos cuyos riesgos no se mueven exactamente igual. La reducción depende de pesos y covarianzas, no del simple número de posiciones.
- **Concentración:** un ETF amplio puede estar diversificado por emisor, pero un ETF sectorial puede concentrar toda la cartera en una industria, un país o una tecnología.
- **Asset allocation estratégico:** distribución de largo plazo entre clases como acciones, bonos, efectivo o activos reales. Se define según objetivo, horizonte, tolerancia al drawdown, liquidez, impuestos y exposición cambiaria.
- **Asset allocation táctico:** cambios temporales de pesos. Puede aumentar el riesgo de sincronización y no mejora automáticamente el resultado.
- **Rebalancing:** mecanismo para volver a los pesos objetivo; no equivale a adivinar el mercado.
- **Riesgo de concentración:** una sola empresa, un emisor soberano, un sector, una moneda o un factor puede dominar el resultado.
- No existe una composición universalmente óptima. El mismo `8,60 %` de retorno esperado puede ser adecuado para una persona y excesivo para otra.

---

# Capítulo 24. Bonos

Un bono es un contrato en el que el emisor promete pagos según sus términos, sujeto a las condiciones del contrato y al riesgo de insolvencia. El valor nominal, el precio de mercado, el cupón y el rendimiento son conceptos diferentes.

## 24.1 Conceptos principales

### Face value o valor nominal

Es la cantidad de referencia del contrato, por ejemplo `1.000`. El emisor suele pagar el cupón calculado sobre ese valor y, si cumple sus obligaciones, devuelve el nominal al vencimiento. No significa que el precio de mercado sea siempre `1.000`.

### Cupón

Es el pago periódico asociado al bono. Puede ser fijo, flotante, indexado, convertible o cero. En un bono de cupón fijo, el importe contractual se calcula sobre el valor nominal; el pago recibido en relación con el precio pagado puede ser distinto.

### Tasa de cupón

Es la tasa contractual que relaciona el cupón con el valor nominal. `6 %` significa que el cupón anual es `60` por cada `1.000` de nominal, si la frecuencia y convención son las indicadas. No es lo mismo que el rendimiento al vencimiento.

### Maturity o vencimiento

Es la fecha en que el contrato exige, en principio, la amortización del nominal, después de los pagos intermedios previstos. El tiempo hasta esa fecha se llama **vencimiento residual**. Una opción de amortización anticipada o una restructuración puede alterar el resultado práctico.

### Credit risk o riesgo de crédito

Es la posibilidad de que el emisor no cumpla o deba renegociar. Puede generar pérdida de capital, extensiones, intercambios, recortes, retrasos o litigios. Una calificación alta no elimina el riesgo; un YTM alto puede ser compensación por riesgo de crédito, falta de liquidez o riesgo de amortización anticipada. Se debe distinguir el cupón contratado de la recuperación efectiva en un escenario de incumplimiento.

### Precio sucio, precio limpio y valor liquidativo

El **precio de mercado** es el precio al que una parte compra o vende el bono en un momento. El **precio limpio** suele excluir los intereses acumulados; el precio sucio los incluye. El valor liquidativo de un fondo o vehículo se calcula con los valores de sus activos menos pasivos. Ninguno de esos conceptos es “liquidez” ni una garantía de venta futura.

## 24.2 Cupón y tasa de cupón

### Ficha completa de 13 puntos: cupón y tasa de cupón

1. **Nombre.** Pago de cupón y tasa de cupón.

2. **Uso.** Determina el pago contractual periódico de un bono calculado sobre su valor nominal.

3. **Variables.**
   - `F`: valor nominal.
   - `c_N`: tasa de cupón **nominal anual contractual**.
   - `C`: cupón anual total.
   - `m`: frecuencia de pagos por año.

4. **Fórmula.**

   \[
   C=F\times c_N
   \]

   Si hay `m` pagos iguales, el pago periódico es `C/m = F c_N/m`. La tasa contractual se cumple `c_N=C/F`. Si se desea conocer una tasa efectiva anual, debe relacionarse por separado con la frecuencia; no sustituir `c_N` por una tasa efectiva en `F×c`.

5. **Pasos.**
   1. Identificar el valor nominal.
   2. Identificar la tasa de cupón nominal anual y la frecuencia de pagos; separar cualquier tasa efectiva anual.
   3. Comprobar la frecuencia de pago.
   4. Calcular el cupón anual.
   5. Dividirlo por `m` para obtener el pago de cada fecha.

6. **Ejemplo.** Un bono ficticio tiene `F=1.000` y `c=6 %`:

   \[
   C=1.000(0,06)=60
   \]

   Con pago semestral, cada cupón es `30`. La tasa de cupón contractual continúa siendo `6 %` nominal anual bajo esta convención.

7. **Interpretación.** `60` es el pago anual contractual, mientras que el retorno sobre el precio pagado depende también de la cotización y del YTM. El cupón puede ser fijo, pero eso no elimina el riesgo de crédito ni las fluctuaciones del precio.

8. **Rangos y cautelas.** Debe revisarse la convención de frecuencia, el método de conteo de días, la acumulación, la posibilidad de amortización anticipada y si el cupón es fijo o variable. Un cupón cero tiene cupón contractual cero, no significa “sin riesgo”.

9. **Lectura favorable.** Un cupón conocido puede ser útil para estimar flujos y hacer comparables bonos con vencimientos y riesgos similares. No garantiza que el emisor pague.

10. **Lectura desfavorable.** Si el mercado exige un rendimiento alto, el cupón puede ser insuficiente para compensar una pérdida de capital por caída de precios, incumplimiento o amortización anticipada.

11. **Errores comunes.**
   - Calcular el cupón sobre el precio de mercado.
   - Confundir una tasa nominal con una tasa efectiva.
   - Olvidar la frecuencia de pago.
   - Sumar el cupón a una cotización que ya incluye intereses acumulados sin distinguir.
   - Suponer que un cupón fijo es fijo también en valor de mercado.

12. **Cuándo no usarla.** Para bonos flotantes, indexados o con pagos contingentes, la tasa simple puede no describir todos los flujos. Para bonos sin cupón, el cupón es cero, pero el retorno depende del precio y del vencimiento.

13. **Complementarios.** Tasa de cupón, rentabilidad corriente, YTM, intereses acumulados, duración, spread de crédito y calendario de pagos.

## 24.3 Rentabilidad corriente (*current yield*)

### Ficha completa de 13 puntos: rentabilidad corriente (*current yield*)

1. **Nombre.** Rentabilidad corriente o *current yield*.

2. **Uso.** Compara el cupón anual con el precio de mercado actual. Es una medida sencilla de ingreso relativo al precio, pero ignora la evolución futura del precio.

3. **Variables.**
   - `C`: cupón anual.
   - `P`: precio de mercado actual por unidad de valor nominal.
   - `CY`: rentabilidad corriente.

4. **Fórmula.**

   \[
   CY=\frac{C}{P}
   \]

5. **Pasos.**
   1. Obtener el cupón anual del período.
   2. Obtener el precio de mercado comparable, preferiblemente en la misma convención.
   3. Dividir cupón por precio.
   4. Expresar el resultado como porcentaje.
   5. No confundirlo con YTM.

6. **Ejemplo.** Para el bono de nominal `1.000`, cupón anual `60` y precio de mercado `959`:

   \[
   CY=\frac{60}{959}=0,06257\approx6,26\%
   \]

   Con un precio de `950`, la misma tasa contractual produciría `6,32 %`, aunque el cupón siga siendo `60`.

7. **Interpretación.** Mide cuánto cupón anual se obtiene sobre el precio actual. No incluye una ganancia o pérdida por cambio de precio, reinversión ni cambio en el valor del cupón.

8. **Rangos y cautelas.** Puede ser engañoso en bonos largos: una rentabilidad corriente pequeña puede coexistir con elevada sensibilidad a los tipos. Si el cupón es variable, el cálculo cambia con la referencia.

9. **Lectura favorable.** Una rentabilidad corriente alta puede ser útil como cribado de ingreso, siempre que se analice el riesgo de crédito, duración, liquidez y precio.

10. **Lectura desfavorable.** Una rentabilidad corriente alta también puede reflejar un precio muy bajo, proximidad al vencimiento, riesgo de incumplimiento o una duración elevada. No implica mejor retorno total.

11. **Errores comunes.**
   - Confundirlo con la tasa de cupón.
   - Usar el nominal como precio.
   - Sumar el cupón dos veces si el precio es sucio y el cupón no está convertido.
   - Comparar un cupón anual con un precio sucio sin documentar los intereses acumulados.
   - Interpretarlo como rendimiento realizado.

12. **Cuándo no usarla.** No es suficiente para un horizonte largo, para bonos con pagos contingentes o para medir retorno total. En un bono de tasa flotante, el cupón puede cambiar.

13. **Complementarios.** YTM, precio limpio/sucio, intereses acumulados, duración, OAS, spread y riesgo de crédito.

## 24.4 Valor presente del precio de un bono

### Ficha completa de 13 puntos: precio presente de un bono

1. **Nombre.** Valor presente o precio teórico de un bono.

2. **Uso.** Relaciona el precio con los flujos contractuales descontados y la tasa de rendimiento. Permite ver por qué un cupón fijo puede cotizar por debajo o por encima del valor nominal.

3. **Variables.**
   - `F`: valor nominal.
   - `C`: cupón anual total.
   - `n`: años hasta el vencimiento.
   - `m`: pagos por año.
   - `t`: índice del período de pago, desde `1` hasta `mn`.
   - `y`: rendimiento anual nominal usado para descontar.
   - `P`: precio teórico por unidad de nominal.

4. **Fórmula.**

   \[
   P=\sum_{t=1}^{mn}\frac{C/m}{(1+y/m)^t}
   +\frac{F}{(1+y/m)^{mn}}
   \]

   Para un único cupón anual, `m=1`.

5. **Pasos.**
   1. Identificar nominal, cupones, fechas y calendario.
   2. Convertir la tasa a una tasa de descuento por período.
   3. Descontar cada cupón a su fecha.
   4. Descontar el nominal al vencimiento.
   5. Sumar los valores presentes y comparar con el precio negociado.
   6. Si hay un precio de mercado, resolver el rendimiento implícito o comparar con una curva de tasas.

6. **Ejemplo.** Bono anual ficticio con `F=1.000`, `C=60`, `n=5` y `y=7 %`. El precio teórico es aproximadamente:

   \[
   P=\frac{60}{1,07}+\frac{60}{1,07^2}+\frac{60}{1,07^3}
   +\frac{60}{1,07^4}+\frac{1060}{1,07^5}
   \approx958,998
   \]

   Redondeado, `959,00`.

7. **Interpretación.** Con un rendimiento de `7 %`, el precio esperado de esos flujos es `959,00`, inferior al nominal porque el cupón de `6 %` queda por debajo del rendimiento de descuento.

8. **Rangos y cautelas.** El precio real incluye curva de tasas, spread de crédito, liquidez, impuestos, amortización anticipada y cambios en la curva. El modelo es más complejo si los pagos dependen de la tasa o del mercado.

9. **Lectura favorable.** Una comparación transparente entre precio, flujos y rendimiento ayuda a valorar el instrumento. No protege contra incumplimiento ni limita la pérdida.

10. **Lectura desfavorable.** Un precio calculado con un rendimiento bajo puede ser demasiado alto si luego el mercado exige más rendimiento o si se materializa riesgo de crédito. Un modelo de DCF no anticipa todos los eventos.

11. **Errores comunes.**
   - Descontar el cupón con una tasa anual cuando el cupón es semestral.
   - Mezclar precio limpio y sucio.
   - Olvidar la fecha de valoración y los intereses acumulados del primer cupón.
   - Suponer que el valor nominal coincide con el precio.
   - Usar un rendimiento de un índice sin explicar el spread.

12. **Cuándo no usarla.** No basta para bonos con amortización anticipada probable, pagos contingentes o estructuras sin flujo determinista. En esos casos conviene modelar cada flujo y su probabilidad.

13. **Complementarios.** YTM, YTM aproximado, rentabilidad corriente, duración, convexidad, OAS, calificación crediticia y precio limpio/sucio.

## 24.5 YTM exacto

### Ficha completa de 13 puntos: rendimiento al vencimiento exacto

1. **Nombre.** Rendimiento al vencimiento exacto (YTM).

2. **Uso.** Calcula la tasa de descuento que iguala el precio de mercado con los flujos contractuales del bono, usando el calendario de pagos.

3. **Variables.**
   - `P`: precio de mercado en la fecha de valoración.
   - `C`: cupón anual total.
   - `F`: valor nominal.
   - `n`: años hasta el vencimiento.
   - `m`: frecuencia de cupón.
   - `t`: índice del período de pago, desde `1` hasta `mn`.
   - `y`: YTM anual con la convención indicada.

4. **Fórmula.**

   \[
   P=\sum_{t=1}^{mn}\frac{C/m}{(1+y/m)^t}
   +\frac{F}{(1+y/m)^{mn}}
   \]

   Para hallar `y`, se resuelve esta igualdad; no se trata de una suma lineal.

5. **Pasos.**
   1. Definir precio, fecha de liquidación y calendario de flujos.
   2. Especificar frecuencia, convención y si el precio es limpio o sucio.
   3. Elegir una tasa inicial cercana al mercado.
   4. Calcular el valor presente.
   5. Ajustar `y` hasta que el valor presente sea igual a `P`.
   6. Verificar sensibilidad, intereses acumulados, amortización anticipada y riesgo de incumplimiento.

6. **Ejemplo.** Para `P≈959,00`, `F=1.000`, cinco cupones anuales de `60` y principal al final, el rendimiento que hace coincidir el precio teórico con el mercado es aproximadamente `7,00 %`, según el modelo anterior. La cifra depende de la fecha y del precio exactos.

7. **Interpretación.** Es la tasa de rendimiento anual implícita en el precio, bajo los supuestos del instrumento. Se suele usar para comparar bonos, no como un interés asegurado por el mercado.

8. **Rangos y cautelas.** En bonos largos, pequeños cambios en `y` producen grandes cambios de precio. El YTM puede ignorar insolvencia, amortización anticipada, ejercicio de opciones, impuestos, inflación, costes y liquidez. Un rendimiento alto puede estar compensando riesgo; no implica por sí mismo una oportunidad.

9. **Lectura favorable.** Bajo supuestos comparables, un YTM superior al de alternativas con riesgo y liquidez semejantes puede ser más atractivo para el modelo. La comparación debe usar el mismo tipo de obligación y convención.

10. **Lectura desfavorable.** Un YTM elevado junto a un emisor débil o un periodo de bloqueo puede parecer atractivo y resultar engañoso. Un rendimiento calculado sobre un instrumento amortizable anticipadamente puede no ser alcanzable.

11. **Errores comunes.**
   - Interpretar YTM como rentabilidad garantizada.
   - Ignorar el cupón siguiente, los intereses acumulados o la fecha de liquidación.
   - Comparar rendimientos de frecuencias diferentes sin annualizar de forma coherente.
   - No distinguir el rendimiento nominal del rendimiento real o del OAS.
   - Olvidar el riesgo de reinversión de cupones.

12. **Cuándo no usarla.** Es poco fiable para bonos con incumplimiento probable, amortización anticipada aleatoria, pagos contingentes o estructuras sin flujo determinista. En esos casos, usar métricas de flujo, escenarios de recuperación y precio de mercado.

13. **Complementarios.** YTM aproximado, rentabilidad corriente, duración modificada, convexidad, spread de crédito, precio de mercado y liquidez.

## 24.6 YTM aproximado

### Ficha completa de 13 puntos: rendimiento al vencimiento aproximado

1. **Nombre.** Fórmula aproximada de YTM.

2. **Uso.** Ofrece una estimación rápida del rendimiento cuando se dispone de nominal, precio, cupón y años al vencimiento. Es útil como primera comparación, no como sustituto de la solución exacta.

3. **Variables.**
   - `F`: valor nominal.
   - `P`: precio actual.
   - `C`: cupón anual.
   - `n`: años al vencimiento.

4. **Fórmula.**

   \[
   YTM_{aprox}\approx\frac{C+(F-P)/n}{(F+P)/2}
   \]

5. **Pasos.**
   1. Obtener `F`, `P`, `C` y `n` con la misma convención.
   2. Calcular la ganancia o pérdida de capital anualizada, `(F-P)/n`.
   3. Sumar el cupón anual.
   4. Dividir por el precio promedio aproximado, `(F+P)/2`.
   5. Comparar con el YTM exacto y explicar cualquier diferencia.

6. **Ejemplo.** Con `F=1.000`, `P=959`, `C=60` y `n=5`:

   \[
   YTM_{aprox}\approx
   \frac{60+(1.000-959)/5}{(1.000+959)/2}
   \approx6,96\%
   \]

   El YTM exacto del modelo de la sección anterior es aproximadamente `7,00 %`; la diferencia pequeña se debe a la aproximación y al redondeo del precio.

7. **Interpretación.** Estima la rentabilidad anual bajo una dinámica simplificada. A menor duración o menor desviación de precio, suele ser más útil; en bonos largos se degrada.

8. **Rangos y cautelas.** La expresión mostrada supone un cupón anual fijo; si hay pagos semestrales o trimestrales, hay que adaptar el número de períodos y el cupón. Tampoco funciona bien con cupones irregulares, amortización anticipada, incumplimiento o cambios grandes de tasa. El resultado puede ser muy sensible al redondeo.

9. **Lectura favorable.** Es conveniente para una pantalla de precios cuando el cálculo exacto no está disponible. Una aproximación razonablemente cercana puede facilitar un triaje inicial.

10. **Lectura desfavorable.** Una diferencia de varios puntos básicos puede ser material en decisiones de duración o riesgo. Un valor aproximado no debe presentarse como rendimiento real del mercado.

11. **Errores comunes.**
   - Usar meses como años.
   - Ignorar la frecuencia de cupón.
   - Confundir `F-P` con un flujo que será recibido.
   - Usar un precio sucio sin contabilizar correctamente los intereses acumulados.
   - Sustituir el cálculo exacto sin indicar el supuesto.

12. **Cuándo no usarla.** No es adecuado para precios muy distantes del nominal, horizontes largos, bonos con amortización anticipada o flujos contingentes. En esos casos, resolver el YTM exacto o modelar el flujo de efectivo.

13. **Complementarios.** YTM exacto, rentabilidad corriente, duración modificada, convexidad y sensibilidad del precio.

## 24.7 Duración de Macaulay y duración modificada

### Ficha completa de 13 puntos: duración

1. **Nombre.** Duración de Macaulay y duración modificada.

2. **Uso.** La duración de Macaulay mide el tiempo ponderado de los flujos; la duración modificada estima la sensibilidad del precio ante un cambio pequeño de rendimiento.

3. **Variables.**
   - `i`: índice del período de pago; el tiempo del flujo es `i/m` años en un calendario regular.
   - `PV(CF_t)`: valor presente de cada flujo.
   - `P`: precio del bono.
   - `D_M`: duración de Macaulay.
   - `D_{mod}`: duración modificada.
   - `y`: rendimiento anual nominal.
   - `m`: frecuencia de cupón.

4. **Fórmula.**

   Si `m` es la frecuencia anual de pagos y `i=1,...,mn` es el índice del período, la duración de Macaulay en **años** es:

   \[
   D_M(\text{años})=\frac{\sum_{i=1}^{mn}(i/m)\,PV(CF_i)}{P}
   \]

   \[
   D_{mod}(\text{años})=\frac{D_M(\text{años})}{1+y/m}
   \]

   Si se calcula la duración en períodos, `D_M^{períodos}=\sum i\,PV(CF_i)/P` y entonces `D_{mod}=D_M^{períodos}/[m(1+y/m)]`. Para un primer cupón irregular se usan los tiempos reales `τ_i`, no `i/m`.

   Para un cambio pequeño del rendimiento, `ΔP/P≈-D_{mod}Δy`.

5. **Pasos.**
   1. Construir el calendario de cupones y nominal.
   2. Descontar cada flujo a la tasa de rendimiento.
   3. Dividir cada valor presente por el precio.
   4. Ponderar cada proporción por su tiempo y sumar para `D_M`.
   5. Dividir por `1+y/m` para `D_mod`.
   6. Aplicar la sensibilidad solo a cambios pequeños y aclarar supuestos.

6. **Ejemplo.** Para el bono anual de `F=1.000`, cupón `60`, cinco años y `y=7 %`, el precio es aproximadamente `958,998` y los valores presentes son aproximadamente `56,075`, `52,406`, `48,978`, `45,774` y `755,765`; el último incluye cupón y nominal.

   \[
   D_M\approx4,452\ \text{años}
   \]

   \[
   D_{mod}\approx\frac{4,452}{1,07}=4,161\ \text{años}
   \]

   Si el rendimiento sube `1 punto porcentual` de forma pequeña:

   \[
   \Delta P/P\approx-4,161(0,01)=-4,161\%
   \]

   Sobre un precio de `959,00`, el cambio lineal aproximado es unos `-39,90`, antes de convexidad, cambios de spread y otros efectos.

7. **Interpretación.** `4,452` no es la fecha en que se recibe el nominal. Es una media ponderada de los flujos por tiempo. `4,161` indica aproximadamente cuántos puntos porcentuales cambia el precio por cada punto de rendimiento, bajo el modelo y manteniendo el resto constante.

8. **Rangos y cautelas.** La sensibilidad es local: no vale para cambios grandes. No captura convexidad, cambios de cupón flotante, OAS, insolvencia, opciones de amortización ni iliquidez. La duración expresada en años depende de la convención.

9. **Lectura favorable.** Una duración moderada puede ser más compatible con un horizonte corto o con una tolerancia limitada a variaciones de precio, si el riesgo de crédito y la liquidez son aceptables.

10. **Lectura desfavorable.** Una duración alta magnifica movimientos de tipos. Una duración baja no evita una pérdida por incumplimiento ni una cotización ilíquida.

11. **Errores comunes.**
   - Confundir duración de Macaulay con modificada.
   - Usar `D_M` directamente en `ΔP/P`.
   - Ignorar la frecuencia de cupón.
   - Tratar la aproximación lineal como exacta.
   - Calcularla con flujos descontados a una tasa distinta de la del mercado.

12. **Cuándo no usarla.** Es insuficiente para cambios grandes del rendimiento, perfiles de flujo no lineales, bonos con amortización anticipada probable o cambios grandes del spread de crédito. En esos casos, usar reprecio de flujos, convexidad y escenarios.

13. **Complementarios.** Convexidad, YTM, YTM aproximado, OAS, spread de crédito, duración efectiva, liquidez y pruebas de estrés.

## 24.8 Lectura integral de un bono

Para el mismo bono ficticio con valor nominal de `1.000`, cupón anual `60`, precio `959` y vencimiento a cinco años:

- Cupón anual: `60`.
- Tasa de cupón: `6 %`.
- Rentabilidad corriente aproximada: `6,26 %`.
- Precio por debajo del nominal: el mercado exige un rendimiento superior al cupón.
- YTM aproximado: `6,96 %`; YTM exacto del modelo: aproximadamente `7 %`.
- Duración de Macaulay: aproximadamente `4,452 años`.
- Duración modificada: aproximadamente `4,161 años`.
- Riesgo adicional: aunque el pagador nunca entre en incumplimiento, una subida del rendimiento puede reducir el precio antes del vencimiento.
- Resultado realizado: depende del precio de reventa, cupones efectivamente cobrados y reinvertidos, impuestos, costes, amortización anticipada y situación del emisor. No se obtiene simplemente porque el contrato mencione un cupón fijo.

---

# Capítulo 25. ETF

Un **ETF** (*Exchange-Traded Fund*) es un vehículo de inversión cotizado en una bolsa que normalmente sigue un índice, una cesta o una estrategia. La exposición del ETF depende de sus posiciones; tener un ETF no elimina el riesgo del índice que replica.

## 25.1 Definición y estructura

Un ETF ficticio, llamado `Índice 100 FTSE Universal`, podría mantener una cesta de 500 acciones de grandes y medianas empresas de varios países. Cada unidad del ETF representa una participación económica en el conjunto, no una acción de una empresa directamente.

La estructura general suele funcionar así:

1. El patrocinador crea el fondo y define el índice de referencia.
2. Los proveedores de liquidez o participantes autorizados pueden crear y redimir unidades mediante canastas de activos o efectivo según las reglas.
3. Las unidades cotizan en el mercado, de modo que un inversionista puede comprar o vender durante la sesión.
4. Las creaciones y redenciones, junto con la actividad de los intermediarios, ayudan a reducir las diferencias entre precio y valor liquidativo, pero no garantizan que sean idénticas.

La clasificación legal y fiscal varía por país. Debe leerse el prospecto y el documento de datos fundamentales, no asumir que todos los ETF tienen la misma estructura, comisión, exposición o tratamiento tributario.

## 25.2 Expense ratio o ratio de gastos

### Ficha completa de 13 puntos: ratio de gastos del ETF

1. **Nombre.** Expense ratio o ratio de gastos corrientes.

2. **Uso.** Compara los gastos operativos del ETF con sus activos o patrimonio y sirve para estimar el costo recurrente de mantener la exposición.

3. **Variables.**
   - `G`: gastos anuales netos atribuibles al fondo.
   - `A`: patrimonio o valor liquidativo promedio del período.
   - `ER`: ratio de gastos.

4. **Fórmula.**

   \[
   ER=\frac{G}{A}\times100
   \]

   Si se expresa como decimal, `ER=G/A`.

5. **Pasos.**
   1. Leer si la cifra es bruta o neta y qué gastos incluye.
   2. Identificar el período y el patrimonio base.
   3. Dividir los gastos por el patrimonio promedio.
   4. Expresar el resultado como porcentaje anual.
   5. Comparar con otros ETF solo si el índice, la clase y la estructura son similares.

6. **Ejemplo.** Un ETF ficticio tiene gastos de `1,8 millones` sobre un patrimonio promedio de `1.000 millones`:

   \[
   ER=\frac{1,8}{1.000}\times100=0,18\%
   \]

   Una posición de `10.000` estaría asociada a unos `18` al año de forma proporcional; el efecto real depende del devengo, la distribución, el diferencial, los impuestos y la evolución del patrimonio.

7. **Interpretación.** `0,18 %` es el gasto anual declarado o estimado en relación con el patrimonio; no implica una pérdida automática de `0,18 %` en cada período. El efecto exacto depende de la base, del devengo y de la valorización.

8. **Rangos y cautelas.** No existe un rango universalmente correcto. Un gasto bajo puede compensarse con una diferencia de seguimiento, mientras que un gasto alto puede ser coherente con una estrategia más específica. Revisar también los costes de negociación, impuestos y cualquier gasto no incluido.

9. **Lectura favorable.** Un ratio de gastos bajo, junto con buena liquidez y seguimiento razonable, puede reducir el costo recurrente. No prueba que el ETF tenga mejor retorno.

10. **Lectura desfavorable.** Un gasto elevado reduce de forma persistente el resultado neto si no se compensa con una ventaja operativa o de exposición. El impacto puede amplificarse en una cartera de largo plazo.

11. **Errores comunes.**
   - Confundir el ratio de gastos con el retorno esperado.
   - Usar una cifra de otra clase de acciones o de otro período.
   - Ignorar que el fondo puede tener gastos dentro o fuera del ratio.
   - Suponer que el ETF no tiene costes de negociación.
   - Olvidar impuestos y distribución de dividendos.

12. **Cuándo no usarla.** No sirve como medida única de calidad, riesgo o rentabilidad. Para ETF de materias primas, apalancados, internacionales o sintéticos, revisar el prospecto y la estructura completa de costos.

13. **Complementarios.** Tracking error, tracking difference, spread bid-ask, profundidad, liquidez, impuestos, devengo y costo total de propiedad.

## 25.3 Valor liquidativo y valor de mercado

### Ficha completa de 13 puntos: valor liquidativo por unidad de ETF

1. **Nombre.** NAV o valor liquidativo por unidad.

2. **Uso.** Resume el valor contable de los activos menos los pasivos del fondo, dividido por sus unidades. Se usa para comparaciones y para el proceso de creación y redención.

3. **Variables.**
   - `V_activos`: valor de los activos del ETF.
   - `L_pasivos`: pasivos y obligaciones deducibles.
   - `U`: número de unidades en circulación.
   - `NAV_u`: valor liquidativo por unidad.

4. **Fórmula.**

   \[
   NAV_u=\frac{V_{\text{activos}}-L_{\text{pasivos}}}{U}
   \]

5. **Pasos.**
   1. Reunir los valores de las posiciones, el efectivo y otros activos.
   2. Restar pasivos, comisiones y obligaciones aplicables.
   3. Dividir por el número de unidades.
   4. Aplicar la política de valoración y la moneda del prospecto.
   5. Comparar con el precio de mercado solo en la misma fecha, hora y moneda.

6. **Ejemplo.** Un ETF ficticio tiene `500 millones` de activos, `5 millones` de pasivos y `10 millones` de unidades:

   \[
   NAV_u=\frac{500-5}{10}=49,50
   \]

   Este es un valor contable por unidad, no necesariamente el precio al que se puede vender inmediatamente.

7. **Interpretación.** El NAV es una fotografía de valoración del fondo. En un ETF abierto, suele publicarse con una frecuencia determinada y puede no incorporar en tiempo real todos los movimientos de los mercados subyacentes.

8. **Rangos y cautelas.** El NAV puede ser positivo, pequeño o, en casos extremos, cercano a cero; no es un seguro de capital. El valor de un ETF que replica un índice puede variar por movimientos de mercado, cambio de divisa, límites, precios desactualizados, comisiones y diferencias de horarios.

9. **Lectura favorable.** Un NAV actualizado y transparente facilita evaluar si el precio de mercado está cerca o lejos de los activos. No garantiza una buena inversión.

10. **Lectura desfavorable.** Un NAV desactualizado o basado en precios poco representativos puede inducir a comparaciones erróneas. Una prima elevada puede persistir en un mercado ilíquido.

11. **Errores comunes.**
   - Confundir NAV con liquidez.
   - Usar NAV como precio de salida garantizado.
   - Comparar NAV de una hora con precio de cierre de otra.
   - Ignorar la moneda, los dividendos, los intereses acumulados o las diferencias de calendario.

12. **Cuándo no usarla.** No sirve para medir profundidad, spread, velocidad de negociación ni la posibilidad de vender. Para fondos cerrados o con restricciones, el precio puede desviarse estructuralmente.

13. **Complementarios.** Precio de mercado, prima o descuento, iNAV, creación y redención, spread bid-ask y nivel de inventario.

## 25.4 Prima o descuento del ETF

### Ficha completa de 13 puntos: prima o descuento sobre el valor liquidativo

1. **Nombre.** Prima o descuento del precio de mercado respecto al NAV.

2. **Uso.** Compara el precio de negociación de una unidad con su NAV y ayuda a observar eficiencia, restricciones y efectos de liquidez.

3. **Variables.**
   - `P_m`: precio de mercado por unidad.
   - `NAV_u`: valor liquidativo por unidad.
   - `PD`: prima o descuento en porcentaje.

4. **Fórmula.**

   \[
   PD=\frac{P_m-NAV_u}{NAV_u}\times100
   \]

   Si `PD>0`, hay prima; si `PD<0`, hay descuento.

5. **Pasos.**
   1. Obtener el precio de mercado en un momento definido.
   2. Obtener el NAV o iNAV correspondiente, con la misma moneda y fecha.
   3. Restar el NAV al precio.
   4. Dividir por el NAV.
   5. Expresar en porcentaje y revisar si la diferencia es grande frente al spread y la volatilidad intradía.

6. **Ejemplo.** Si `P_m=50,10` y `NAV_u=49,50`:

   \[
   PD=\frac{50,10-49,50}{49,50}\times100\approx1,21\%
   \]

   Es una prima de aproximadamente `1,21 %`, no una rentabilidad obtenida por el inversionista.

7. **Interpretación.** Una prima indica que el precio de mercado está por encima del NAV reportado; un descuento, lo contrario. La creación/redención y los intermediarios suelen empujar hacia la convergencia, pero no pueden eliminar todas las fricciones.

8. **Rangos y cautelas.** Puede haber diferencias por horario, mercados cerrados, NAV antiguo, volatilidad, restricciones de creación o redención, clases de acciones distintas o un iNAV estimado. El valor liquidativo no es un precio de mercado.

9. **Lectura favorable.** Una prima o descuento pequeño y transitorio puede ser compatible con un mercado eficiente. Con volumen, spread y mecanismos activos, la alineación suele ser más útil.

10. **Lectura desfavorable.** Una desviación grande y persistente puede indicar iliquidez, alta incertidumbre, límites de arbitraje o un NAV poco representativo. Comprar con prima alta puede producir una pérdida si se revierte.

11. **Errores comunes.**
   - Comparar NAV de cierre diario con precio intradía sin contexto.
   - Confundir prima con retorno del índice.
   - Ignorar que el ETF puede tener acciones de distintas clases.
   - Tomar el iNAV como NAV oficial definitivo.
   - Olvidar la hora, la moneda y los dividendos pendientes.

12. **Cuándo no usarla.** Es poco útil si el NAV es antiguo o si el mercado subyacente está cerrado y el ETF tiene una desviación estructural. Para medir calidad de ejecución, revisar también profundidad, volumen y spread.

13. **Complementarios.** NAV, iNAV, spread bid-ask, profundidad, creación y redención, liquidación y tracking error.

## 25.5 Tracking error

### Ficha completa de 13 puntos: tracking error o error de seguimiento

1. **Nombre.** Tracking error o error de seguimiento.

2. **Uso.** Mide cuánto se aparta el retorno total del ETF del retorno de su índice de referencia. Refleja diferencias de estrategia, momento de las operaciones y costes.

3. **Variables.**
   - `R_ETF,t`: retorno total del ETF en el tiempo `t`.
   - `R_b,t`: retorno del índice de referencia con la misma frecuencia.
   - `D_t`: diferencia de retorno.
   - `\bar D`: diferencia media.
   - `TE`: desviación estándar de las diferencias.

4. **Fórmula.**

   \[
   D_t=R_{ETF,t}-R_{b,t}
   \]

   \[
   TE=\sqrt{\frac{1}{N-1}\sum_{t=1}^{N}(D_t-\bar D)^2}
   \]

   La annualización y el ajuste por frecuencia deben indicarse; no todos los proveedores calculan igual.

5. **Pasos.**
   1. Elegir un índice de referencia de retorno total, no solo de precio.
   2. Usar la misma frecuencia, fechas, moneda y política de dividendos.
   3. Calcular la diferencia en cada período.
   4. Calcular la media y las desviaciones.
   5. Usar `N-1` para una muestra y tomar la raíz.
   6. Annualizar o no según el período y documentar el método.

6. **Ejemplo.** Un ETF ficticio tiene diferencias de retorno anual frente a su índice de `+0,6 %`, `-0,2 %`, `+0,4 %` y `+0,1 %`. La diferencia media es `+0,225 %`. Con la fórmula muestral:

   \[
   TE=\sqrt{\frac{(0,6-0,225)^2+(-0,2-0,225)^2+(0,4-0,225)^2+(0,1-0,225)^2}{3}}
   =0,35\%
   \]

   Cuatro observaciones son solo un ejemplo didáctico y no una estimación robusta.

7. **Interpretación.** Un TE bajo indica que el ETF suele seguir de cerca los movimientos del índice de referencia. La diferencia media —tracking difference— mide el sesgo o costo acumulado, mientras que el TE mide la variabilidad de esa diferencia.

8. **Rangos y cautelas.** Debe compararse con el índice correcto, el período correcto y la política de distribuciones. Un ETF puede tener TE bajo y tracking difference muy negativo por gastos; o TE alto por una operación puntual. La estadística no elimina riesgo.

9. **Lectura favorable.** Un TE bajo y estable junto con un índice de referencia adecuado puede indicar una réplica eficiente. No garantiza retorno positivo.

10. **Lectura desfavorable.** Un TE alto puede producir desviaciones difíciles de explicar y puede indicar una estrategia más activa, costes altos, iliquidez, implementación imperfecta o falta de adecuación al índice de referencia.

11. **Errores comunes.**
   - Comparar precio del ETF con índice de precio y omitir dividendos.
   - Usar una serie de retornos incompatible con el índice de referencia.
   - Calcular solo la diferencia media y llamarla TE.
   - Annualizar sin explicar frecuencia.
   - Interpretar un TE bajo como ausencia de riesgo o réplica exacta.

12. **Cuándo no usarla.** Es insuficiente para un ETF nuevo con pocos datos, para índices que cambian, para productos apalancados o inversos o cuando el índice de referencia no representa la exposición. En esos casos, revisar el prospecto, la metodología y las pruebas de réplica.

13. **Complementarios.** Diferencia de seguimiento, ratio de gastos, estructura, fiscalidad, NAV, índice de referencia y diligencia debida.

## 25.6 Tipos principales de ETF

| Tipo | Qué suele replicar | Ventaja potencial | Riesgo o cautela principal |
|---|---|---|---|
| **ETF de mercado** | Índice amplio de un país, región o mundo | Diversificación y participaciones muchas | Sigue sujeta al mercado, al índice y a la concentración sectorial/geográfica |
| **ETF sectorial** | Industria, sector o tema | Exposición específica a una tendencia | Alta concentración; puede ser muy volátil y sensible a una regulación o tecnología |
| **ETF de bonos** | Índices de deuda pública, corporativa, municipal o de duración | Exposición a flujos y política monetaria | Sensibilidad a tipos, spread de crédito, duración, calidad del índice y liquidez |
| **ETF internacional** | Mercados de varios países | Diversificación geográfica | Moneda, fiscalidad, horarios y costes de negociación |
| **ETF de factor o estrategia** | Tamaño, valor, calidad, dividendos, momentum u otra regla | Puede obtener exposición a un factor definido | El factor puede ser cíclico, caro o rendir de forma persistentemente inferior al mercado |
| **ETF apalancado o inverso** | Exposición diaria a un índice | Apalancamiento o inversión a la baja | Dependencia del camino, reajuste diario, riesgo de pérdida superior y períodos de pérdida prolongados |

Los ETF de mercado pueden ser la base de una cartera diversificada, pero no todos tienen la misma exposición. Un ETF con cinco sectores puede ser mucho más concentrado que uno con miles de empresas de muchas industrias. Revisar el índice, los pesos, el número de posiciones, la concentración y el país de cada posición.

## 25.7 ETF y acciones individuales: comparación descriptiva

| Aspecto | ETF | Acción individual |
|---|---|---|
| Exposición | Normalmente muchas posiciones o un índice | Exposición económica a una empresa |
| Selección | Se delega la selección al índice o estrategia | Requiere analizar la empresa y su gobierno |
| Riesgo de empresa | Puede reducir dependencia de un emisor, pero no eliminar el riesgo del índice | Riesgo concentrado en el negocio, balance y gobierno |
| Costes | Ratio de gastos, spread, seguimiento y, en su caso, impuestos | Comisión de compraventa, spread, impuestos y coste de oportunidad |
| Votación | Normalmente se vota como una instrucción al fondo, con reglas del prospecto | Puede dar derecho a voto directamente, según la jurisdicción y la acción |
| Gestión | El patrocinador mantiene la estructura; el inversor no elige cada operación | El inversor puede necesitar un seguimiento continuo |
| Diversificación | Alta en ETF amplios; baja en ETF sectoriales | La acción individual es una sola posición, aunque la empresa tenga muchos negocios |
| Riesgo de índice | El ETF puede quedar expuesto a concentración, país, sector o factor | El riesgo no viene del índice, sino de la compañía y su contexto |
| Liquidez | Spread, volumen, profundidad y prima/descuento del ETF | Spread, volumen y límites de concentración de la acción |
| Precio | NAV, precio de mercado, ratio de gastos y tracking error | Precio, dividendo, balance, valoración y tesis individual |
| Costes fiscales | Depende de la jurisdicción, la estructura y la distribución | Depende de la jurisdicción, la cuenta y el tratamiento de dividendos |
| Resultado | Puede reducir la necesidad de elegir una sola empresa | Puede ser más adecuado para una tesis específica, con más riesgo de concentración |

### Diferencia entre liquidez, valor de mercado y valor liquidativo

Esta distinción es especialmente importante con ETF:

- **Liquidez:** capacidad de negociar con rapidez y a un costo razonable. Se observa con el volumen, el spread bid-ask, la profundidad del libro de órdenes, el tiempo de liquidación y la posibilidad de ejecutar sin mover demasiado el precio. Liquidez no es “cantidad de efectivo” ni “valor liquidativo”.
- **Valor de mercado:** precio al que una parte acepta pagar y otra acepta vender en un momento concreto. El valor de mercado de una unidad ETF cambia con la oferta y la demanda. También puede haber un valor de mercado distinto para cada activo subyacente.
- **Valor liquidativo (NAV):** valor contable por unidad de los activos menos pasivos, según las reglas de valoración del fondo. Puede calcularse una vez al día o con otra frecuencia. No es una oferta de compra ni garantiza que exista un comprador al NAV.
- Un ETF puede tener un NAV de `49,50` y un precio de mercado de `50,10`: hay una prima de aproximadamente `1,21 %`, no necesariamente una rentabilidad del inversionista. Puede parecer líquida, con un spread de `0,05`, y tener una prima que se cierra; también puede ser ilíquida aunque el NAV sea estable.
- El precio de mercado de un activo subyacente y el valor liquidativo del ETF son cosas diferentes. El primero se negocia; el segundo agrega posiciones, efectivo y pasivos y aplica la política de valoración.

## 25.8 Conclusiones prácticas

1. Un ETF puede reducir la concentración en una sola empresa, pero hereda los riesgos del índice, el país, el sector, la moneda y la duración que replica.
2. El ratio de gastos y el tracking error son medidas diferentes: el primero mide gastos recurrentes y el segundo, la variabilidad de las diferencias de retorno.
3. El NAV no es liquidez ni precio de mercado garantizado.
4. Para un ETF de bonos, duración, calidad crediticia, spread, moneda y liquidez pueden importar tanto como la capitalización del índice.
5. Un ETF de mercado puede ser más diversificado que un ETF sectorial, pero “ETF” no significa automáticamente “seguro” o “rentabilidad garantizada”.
6. Antes de invertir, revisar el prospecto, el índice, los pesos, la política de rebalanceo, los gastos, el seguimiento, el horizonte, la fiscalidad y la estrategia de entrada y salida.

---

# Capítulo 26. Procedimiento paso a paso para analizar una empresa

## 26.1 Finalidad y reglas de uso

Analizar una empresa no consiste en encontrar una gráfica ascendente ni en demostrar que una cotización es baja. Consiste en construir una decisión reproducible que responda a cinco preguntas:

- **Qué se compra:** el negocio, la participación económica y los riesgos que se asumen.
- **Qué se sabe:** qué está respaldado por documentos y qué es todavía una hipótesis.
- **Qué debe ser cierto:** el conjunto mínimo de condiciones que permiten que el valor se realise.
- **A qué precio:** qué rango de valor conservador hace aceptable la compra.
- **Qué invalida la tesis:** qué hecho obligaría a revisar, reducir o cerrar la posición.

El procedimiento siguiente tiene exactamente quince pasos. Cada paso produce un entregable y termina con preguntas de control. No todas las preguntas tienen una respuesta positiva: una respuesta desconocida debe permanecer visible y, si afecta a la solvencia, la propiedad o la valoración, puede impedir la inversión.

Las cifras que aparecen como ejemplos son deliberadamente hipotéticas y no representan datos de empresas reales. Antes de utilizar cualquier cifra, hay que sustituirla por información fechada, trazable y verificada.

### Convenciones de evidencia

Para evitar que una opinión parezca un dato, el cuaderno de análisis puede marcar cada afirmación como:

- **Verificado:** figura en un documento identificable o se ha reconstruido de forma reproducible.
- **Hipótesis:** explicación razonada que todavía debe comprobarse.
- **Desconocido:** no hay evidencia suficiente; no se sustituye por una suposición optimista.
- **Riesgo:** aspecto que puede cambiar el resultado y que tiene un disparador de seguimiento.

Un entregable no está terminado solo porque esté lleno de gráficos. Está terminado cuando otra persona puede seguir el razonamiento, reproducir los cálculos y detectar dónde falta información.

## 26.2 Los quince pasos

### Paso 1. Definir el encargo, el horizonte y los límites de la inversión

Antes de mirar la cotización, hay que fijar el papel que desempeña el análisis. Esto evita que una investigación se convierta en una búsqueda de argumentos para comprar.

**Acciones y preguntas de control**

- ¿El objetivo es conservar capital, obtener ingresos, mantener una posición ya existente o estudiar una posible compra?
- ¿Cuál es el horizonte mínimo de tenencia y qué necesidad de liquidez existe?
- ¿Qué tamaño máximo de posición y qué nivel de pérdida o volatilidad resultaría tolerables?
- ¿Hay moneda, país, sector, tamaño, propiedad, estrategia o práctica de gobierno excluidos?
- ¿La decisión se puede tomar con la información disponible y sin apostar con dinero prestado?
- ¿Qué evidencia mínima —no qué sensación— sería necesaria para pasar a la siguiente etapa?

**Entregable:** ficha de encargo con objetivo, horizonte, restricciones, tolerancia de riesgo y criterios de suspensión. Incluir una frase que explique por qué vale la pena dedicar tiempo a esta oportunidad.

### Paso 2. Identificar con precisión la empresa y el valor analizado

Una etiqueta bursátil puede ocultar distintas participaciones, clases de acciones, títulos o mercados. Antes de valorar hay que saber qué derecho se posee realmente.

**Acciones y preguntas de control**

- ¿Cuál es el nombre legal, el emisor y el identificador del valor?
- ¿La cotización corresponde a acciones ordinarias, preferentes, un ADR, un certificado, un CEDEAR o un derivado?
- ¿Qué derechos de accionista existen: voto, dividendos, información y liquidación, y en qué medida?
- ¿Hay acciones de doble voto, límites de transferencia, acciones de clase con derechos diferentes o pactos parasociales?
- ¿Qué número de acciones existe, incluyendo acciones en tesorería y las que pueden emitirse?
- ¿Qué moneda, ejercicio contable, zona horaria y jurisdicción aplican a los estados financieros?
- ¿Qué parte del grupo es realmente la que genera el negocio estudiado?

**Entregable:** ficha de identidad del activo con estructura de propiedad, derechos por acción, acciones ordinarias y dilución potencial, perímetro de consolidación, fecha de corte y fechas de las fuentes.

### Paso 3. Reconstruir el modelo de negocio y el flujo de caja

El precio de una acción es un derecho sobre un negocio; el negocio se explica por los flujos que produce y por quién los captura.

**Acciones y preguntas de control**

- ¿Qué producto o servicio se vende, a quién y para resolver qué necesidad?
- ¿Cómo se obtiene el ingreso: venta única, suscripción, contrato, comisión, alquiler, licencia u otra forma?
- ¿Cuál es la unidad económica: cliente, contrato, kilogramo, usuario, punto de venta, activo o transacción?
- ¿Qué variables de precio, volumen, retención, mezcla, capacidad e instalación influyen en el resultado?
- ¿Dónde se cobran y dónde se pagan? ¿Qué se hace con el efectivo entre la venta y su disponibilidad?
- ¿Qué capital circulante, capex, mantenimiento y crecimiento necesita cada venta?
- ¿Quiénes son los clientes, acreedores y accionistas que quedan después de cubrir la operación?

**Entregable:** diagrama en una página que conecte clientes, canales, ingresos, costos, Inversiones, capital circulante y fuentes de efectivo. Añadir una explicación de la propuesta de valor y de la duración del ciclo de conversión de caja.

### Paso 4. Analizar la demanda, la industria, la competencia y el marco externo

El mismo beneficio puede ser muy duradero en una industria estable y muy frágil en un mercado saturado, regulado o tecnológicamente obsoleto.

**Acciones y preguntas de control**

- ¿Cuál es el mercado relevante y cómo se mide? ¿Crece por volumen, por precio, por ambos o por sustitución?
- ¿La demanda es estructural o depende de un ciclo, una promoción, una cosecha, un proyecto o de la estacionalidad?
- ¿Quiénes son competidores directos e indirectos? ¿Qué parte del valor capturan y por qué?
- ¿Existen barreras de entrada, costes de cambio, licencias, escala, datos, red, marca o confianza?
- ¿Qué sustitutos, productos emergentes o cambios de consumo pueden reducir la demanda?
- ¿Qué normas, impuestos, licencias, medidas regulatorias, decisiones judiciales o cambios de consumo pueden afectar al negocio?
- ¿Qué macrofactores —tipos de interés, inflación, empleo y especialmente el comercio exterior— tienen una relación causal con el negocio?

**Entregable:** mapa de la industria y de la competencia, con una lista de los tres o cuatro factores más importantes y de las señales que medirán si el escenario cambia.

### Paso 5. Poner a prueba la ventaja competitiva y la durabilidad del negocio

Una etiqueta como “líder” no es una ventaja. La ventaja debe explicar por qué la empresa puede mantener un margen, un crecimiento o un retorno superior sin depender de condiciones temporales.

**Acciones y preguntas de control**

- ¿Qué ventaja concreta tiene la empresa y dónde aparece en los estados financieros?
- ¿La ventaja proviene de producto, coste, costes de cambio, red, datos, escala, distribución, reputación o regulación?
- ¿Se ha ampliado con el tiempo o se está reduciendo? ¿Quién la puede copiar?
- ¿Cuánto capital y cuánto tiempo se necesitan para entrar o sobrevivir en el mercado?
- ¿La administración reinvierte para defender la posición o se limita a extraer excedentes?
- ¿Qué evidencia contradice la tesis de que la posición es duradera?
- ¿Qué ocurriría si un competidor bajara precios, lanzara un sustituto o ayudara a crear un canal alternativo?

**Entregable:** nota de ventaja competitiva con cinco pruebas: origen, evidencia financiera, duración, amenazas de imitación y referencias para invalidarla. Incluir al menos un argumento en contra.

### Paso 6. Evaluar gobierno, gestión y asignación de capital

La calidad de las decisiones de capital suele ser más importante que la genialidad de una campaña aislada. No se debe inferir buena gestión únicamente de una presentación aislada o de un resultado puntual.

**Acciones y preguntas de control**

- ¿Quiénes son los administradores, accionistas de control, consejo y comité de auditoría?
- ¿Hay experiencia, independencia y conflictos de interés relevantes?
- ¿Cómo se han dirigido las adquisiciones, ventas de activos, reorganizaciones corporativas y proyectos grandes?
- ¿Cuánto capital se ha destinado a crecimiento, mantenimiento, deuda, dividendos y recompras?
- ¿Las recompras han ocurrido por debajo, alrededor o por encima del valor contable e intrínseco?
- ¿Hay planes de acciones para empleados, convertibles, opciones o políticas que transfieren valor de los accionistas?
- ¿Hay litigios, partes relacionadas, garantías, compromisos fuera del balance o salvedades de auditoría?
- ¿La comunicación es comprensible y distingue hechos, estimaciones y objetivos?

**Entregable:** historial de decisiones de gestión y asignación de capital, con fechas, importes, resultados posteriores y una conclusión separando ejecución, azar y apalancamiento.

### Paso 7. Formular una tesis de inversión, una variante perceptiva y un falsador

Una tesis no es un resumen de la empresa. Es una afirmación condicional sobre lo que el mercado puede estar subestimando.

**Acciones y preguntas de control**

- ¿Qué entiende el mercado, según precio y comunicaciones, sobre esta empresa?
- ¿Cuál es la discrepancia concreta entre la interpretación del mercado y la propia?
- ¿La tesis depende de una mejora, de resiliencia, de un activo oculto, de una administración subóptima o de otra condición identificable?
- ¿Qué debe ocurrir en los próximos doce a treinta y seis meses para que el mercado revise su opinión?
- ¿Qué dos o tres hechos podrían demostrar que la tesis es falsa?
- ¿El resultado depende de un único evento, de una persona o de un supuesto heroico?
- ¿Qué parte es verificable hoy y qué parte solo puede especularse?

**Entregable:** tesis de una página con tres elementos separados: lo que se cree, por qué podría estar equivocado el mercado y qué evidencia la resolverá. Añadir escenarios alcista, base y bajista, todos etiquetados como hipótesis.

### Paso 8. Reunir, contrastar y fechar las fuentes

Una investigación sólida separa el dato de la interpretación y conserva la procedencia de cada cifra.

**Fuentes mínimas**

- Informes anuales e intermedios auditados, cuando existan.
- Notas, políticas contables y cuadros de cambios patrimoniales.
- Presentaciones, llamadas de resultados, comunicaciones regulatorias y actas relevantes.
- Documentación de deuda, opciones, convertibles y planes de capital.
- Fuentes públicas y datos de industria verificables, con fecha y metodología.

**Preguntas de control**

- ¿Qué cifras están auditadas y cuáles son estimaciones de la dirección?
- ¿Hay estados financieros reexpresados, cambios contables o saldos de difícil trazabilidad?
- ¿La cifra proviene del grupo consolidado, de una filial o de una operación puntual?
- ¿La moneda y la fecha son comparables entre periodos?
- ¿Las cifras citadas proceden del mismo perímetro y criterio?
- ¿Qué dato no se ha podido encontrar y cómo afecta a la decisión?

**Entregable:** libro de fuentes con enlace o ubicación, fecha del documento, cifra, unidades, perímetro, responsable de la comprobación y nivel de confianza. Registrar discrepancias, no ocultarlas.

### Paso 9. Reconstruir los estados financieros históricos y normalizarlos

El análisis requiere una serie temporal suficientemente larga para distinguir una tendencia de un ciclo o de un evento excepcional. Cinco a diez años puede ser un punto de partida, no una regla universal.

**Acciones y preguntas de control**

- ¿Cómo evolucionan ingresos, márgenes, beneficio operativo, beneficio neto y efectivo?
- ¿Hay adquisiciones, ventas, conversiones, inflación o cambios de perímetro que impidan comparar?
- ¿Qué partidas son recurrentes y cuáles parecen puntuales?
- ¿Cómo se han tratado los arrendamientos, el software capitalizado, las provisiones, las pensiones, la investigación y la compensación en acciones?
- ¿El crecimiento procede de volumen, precio, combinación de productos, adquisiciones o una base especialmente baja?
- ¿Las cifras reportadas concuerdan con caja, balance y notas?
- ¿La mejora aparente se debe a una decisión contable o a una mejora económica real?

**Entregable:** modelo histórico de tres estados, con una columna de normalizaciones y otra de cifras reportadas. Cada ajuste debe tener una explicación, un importe y una fuente; no se debe “normalizar” una cifra para que la tesis resulte más atractiva.

### Paso 10. Evaluar la calidad del beneficio y la conversión en efectivo

El beneficio contable es una hipótesis sobre el futuro; el efectivo es una prueba más exigente, aunque tampoco es perfecto.

**Acciones y preguntas de control**

- ¿El beneficio operativo se convierte en flujo de caja operativo?
- ¿Qué parte del beneficio son provisiones, ingresos devengados, ingresos diferidos o cambios de capital circulante?
- ¿El capex es de mantenimiento, crecimiento o sustitución?
- ¿El negocio necesita más capital circulante para crecer?
- ¿Hay ingresos no cobrados, inventarios antiguos, proveedores financiando el ciclo o pagos anticipados? ¿Hay ganancias por venta de activos, subsidios, reclamaciones legales o ajustes extraordinarios?
- ¿Las acciones de empleados consumen valor aunque figuren como beneficio no monetario?
- ¿La caja libre sigue siendo positiva en un año de tensión y no solo en la expansión?

**Entregable:** puente de beneficio a caja libre y lista de partidas que requieren normalización. Separar la caja libre reportada de la estimación de caja libre de mantenimiento, indicando la incertidumbre asociada.

### Paso 11. Analizar el balance, la liquidez y la deuda

Una empresa con un balance sólido puede quebrar si no puede refinanciar una deuda exigible; una empresa apalancada puede ser barata y aun así no ser financiable.

**Acciones y preguntas de control**

- ¿Cuál es la deuda neta y qué vencimientos se producen en los próximos años?
- ¿La deuda es fija o variable? ¿Su moneda coincide con la de los ingresos?
- ¿Cuánto interés se paga y qué habría ocurrido con un aumento de tasas?
- ¿Hay covenants (cláusulas contractuales), garantías, arrendamientos, pensiones, litigios o compromisos fuera del balance?
- ¿El efectivo es realmente disponible o está restringido o en otra entidad?
- ¿La empresa puede sobrevivir con ingresos y márgenes inferiores durante un ciclo completo?
- ¿El cálculo del coste de refinanciación y del evento de impago está documentado?

**Entregable:** tabla de vencimientos, mapa de covenants y prueba de estrés con escenarios de venta, margen, tipos de interés y tipo de cambio. Definir qué hecho concreto activa una alerta.

### Paso 12. Comprobar la estructura de capital, la dilución y el valor por acción

El accionista no compra simplemente la suma de los beneficios: compra una fracción de esos beneficios después de todas las obligaciones y emisiones.

**Acciones y preguntas de control**

- ¿Cuántas acciones están en circulación y cuántas totalmente diluidas pueden existir?
- ¿Hay opciones, acciones restringidas, convertibles, warrants (derechos de compra), planes para empleados o compromisos de pago contingente?
- ¿La acción, la gobernanza y el dividendo están calculados sobre acciones básicas o totalmente diluidas?
- ¿La compañía emite acciones para financiar pérdidas, deuda, adquisiciones o compensación?
- ¿Las recompras compensan la dilución o solo reducen el número de acciones por un beneficio limitado?
- ¿Hay clases con derechos económicos o de voto diferentes?
- ¿El crecimiento del beneficio por acción supera al crecimiento del beneficio total?

**Entregable:** recuento de acciones totalmente diluidas, calendario de posibles emisiones, sensibilidad del beneficio y del flujo de caja por acción y explicación de los derechos de cada clase. El recuento debe revisarse en cada informe relevante.

### Paso 13. Elaborar escenarios operativos y normalizados

El pronóstico debe ser una herramienta para probar la sensibilidad a los supuestos, no una afirmación de precisión. El escenario base no es “lo que ocurrirá”; es una combinación explícita de supuestos.

**Acciones y preguntas de control**

- ¿Qué volumen, precio, combinación de productos y capacidad sustentan el ingreso futuro?
- ¿Qué márgenes son alcanzables y qué inversión los requiere?
- ¿Cómo se modelan capital circulante, capex, impuestos, deuda y dilución?
- ¿Qué sucede si el mercado cae, si la competencia responde o si el tipo de cambio cambia?
- ¿Cuántos años de crecimiento excepcional se están incorporando?
- ¿El balance puede financiar el plan sin emitir acciones o acumular deuda inestable?
- ¿Qué evidencia observará para cambiar un supuesto?
- ¿El escenario adverso todavía permite que la empresa sobreviva y conserve su tesis estructural?

**Entregable:** modelo de escenarios con una serie mínima, un escenario base, uno favorable y otro adverso. Cada escenario debe mostrar supuestos, beneficios por acción, caja, deuda y acciones, además de una explicación de qué se está suponiendo.

### Paso 14. Estimar el valor y exigir un margen de seguridad

La valoración es una forma de disciplinar el precio de entrada, no de adivinar el valor exacto. Se debe triangular un valor intrínseco central y un rango de decisión, no un único decimal.

**Métodos que pueden combinarse**

- Valor de los flujos de caja descontados (DCF) cuando la calidad y la visibilidad de la caja sean razonables.
- Beneficio normalizado o flujo de caja libre, con una comparación de múltiplos y de la propia historia.
- Valor de activos o enfoque de liquidación cuando proceda y el formato del balance tenga sentido.
- Valor relativo frente a empresas comparables, ajustando diferencias de crecimiento, riesgo, deuda y capital.
- Valor inverso: partir del precio de mercado y preguntarse qué crecimiento, margen o riesgo tendría que asumir el mercado.

**Acciones y preguntas de control**

- ¿Cuál es el valor intrínseco conservador y cuál es el rango razonable?
- ¿Qué precio dejaría un margen de seguridad suficiente para la incertidumbre?
- ¿Qué está incluido y qué está excluido: deuda, arrendamientos, impuestos, pensiones, dilución y capex?
- ¿La valoración depende de un valor terminal importante o de un margen de finales de periodo?
- ¿Qué tendría que creer el mercado para justificar el precio actual?
- ¿El potencial alcista compensa el potencial bajista y la probabilidad de error?
- ¿Qué precio evita comprar y qué precio solo sería aceptable con nueva evidencia?

**Entregable:** tabla de valoración con método, supuestos, rango, valor por acción, sensibilidad y precio máximo de decisión. Documentar qué cifras podrían cambiar materialmente el resultado. La decisión no debe depender de una precisión que los datos no tienen.

### Paso 15. Decidir, dimensionar, registrar y monitorizar

La investigación termina en una regla de acción. El proceso posterior evita que la opinión inicial se convierta en una identidad emocional.

**Acciones y preguntas de control**

- ¿La tesis pasa todos los umbrales críticos y no quedan “No sé” en solvencia, propiedad o valoración?
- ¿Se decide comprar, mantener, esperar, reducir o rechazar? ¿La razón está escrita y es reversible?
- ¿Cuál es el tamaño máximo, cómo se calcula y qué concentración crea?
- ¿Qué evento, fecha o indicador clave (KPI) se revisará antes de tomar otra decisión?
- ¿Qué tres hechos invalidan la tesis y exigen una señal de venta o reducción?
- ¿Qué error máximo se acepta y qué se hace si se alcanza?
- ¿Cómo se separará el resultado de la suerte de la calidad de la decisión?

**Entregable:** tarjeta de decisión con tesis, precio y rango de valor, tamaño, riesgos, calendario de seguimiento, indicadores clave (KPI), condiciones de revisión y política de salida. Guardar también el argumento en contra y un breve análisis posterior cuando se cierre la posición.

## 26.3 Entregable final del procedimiento

El expediente completo debe contener, como mínimo:

- ficha de identidad y delimitación del activo;
- mapa del negocio, industria, competencia y ventaja;
- tesis, variante perceptiva, catalizadores y falsadores;
- estados financieros históricos y ajustes documentados;
- análisis de calidad del beneficio, caja, balance y dilución;
- escenarios y valoración con rango;
- registro de riesgos, señales de alerta y plan de seguimiento;
- tarjeta de decisión y tamaño de posición;
- fecha de revisión.

La secuencia no elimina la incertidumbre. Su propósito es hacer visible la incertidumbre y evitar que una cifra favorable sustituya a la comprensión del negocio.

## 26.4 Fórmulas de apoyo: definición, ejemplo y limitaciones

Las fórmulas siguientes son ayudas de lectura. **Todos los números de los ejemplos son hipotéticos.**

### Crecimiento de ingresos

**Definición:** mide el cambio relativo de los ingresos entre dos periodos:

`g = (Ingresos del periodo actual / Ingresos del periodo anterior) - 1`

**Ejemplo:** si los ingresos pasan de 100 a 110 unidades monetarias, `g = (110 / 100) - 1 = 10 %`. En otro caso, si pasan de 80 a 110, el cálculo es 37,5 %, aunque el negocio puede seguir creciendo lentamente en términos absolutos.

**Limitaciones:** no distingue crecimiento orgánico de adquisiciones, inflación, cambios de tipo de cambio o reconocimiento diferido de ingresos. Un crecimiento contable puede no equivaler a crecimiento del poder adquisitivo o del flujo de caja.

### Flujo de caja libre

**Definición:** una aproximación al efectivo disponible después de la operación y de la inversión de capital:

`FCF histórico apalancado = flujo de caja operativo − inversión de capital (CapEx)`; si el CFO incluye intereses pagados, no es FCFF ni FCFE puro.

**Ejemplo:** con flujo operativo de 80 y CapEx de 30, el FCF histórico es 50. No significa que se pueda distribuir todo: también pueden existir requerimientos de deuda, impuestos, adquisiciones y capital circulante. Para un DCF de empresa se usa FCFF con WACC; para Equity Value se usa FCFE con `K_e`.

**Limitaciones:** el flujo puede alterarse por inventarios, cuentas por cobrar y proveedores. El capex de crecimiento se mezcla con el de mantenimiento, y no todos los arrendamientos o pasivos aparecen igual en el flujo reportado. La medida requiere contexto.

### Deuda neta

**Definición:** deuda financiera menos efectivo y equivalentes que estén efectivamente disponibles:

`Deuda neta = deuda financiera total - efectivo y equivalentes`

**Ejemplo:** con deuda de 180 y efectivo de 20, la deuda neta es 160. Si una parte del efectivo está restringida o en una filial inaccesible, el análisis debe ajustarla.

**Limitaciones:** pueden existir arrendamientos, pensiones, garantías, negocios conjuntos y compromisos fuera del balance. La cifra sirve junto con vencimientos, flujo de caja y condiciones contractuales, no como medidor aislado de riesgo.

### Deuda neta sobre EBITDA

**Definición:** compara la deuda neta con una medida de resultado operativo antes de intereses, impuestos, depreciaciones y amortizaciones:

`Deuda neta / EBITDA = deuda neta / EBITDA`

**Ejemplo:** deuda neta de 160 y EBITDA de 30 dan 5,3 veces. El resultado es una señal de apalancamiento, no un veredicto.

**Limitaciones:** EBITDA no es flujo de caja; puede excluir inversiones necesarias o incluir ajustes. En negocios cíclicos, el denominador cambia bruscamente. Arrendamientos, estructura de capital, vencimientos próximos y empresas con EBITDA negativo requieren otro análisis.

### Cobertura de intereses

**Definición:** mide cuántas veces el resultado operativo EBIT (resultado antes de intereses e impuestos) podría cubrir el gasto de intereses, usando una simplificación:

`Cobertura de intereses = EBIT / gasto financiero`

**Ejemplo:** EBIT de 45 y gasto de intereses de 15 producen una cobertura de 3 veces. Es una medida estática y no considera todos los pagos de deuda.

**Limitaciones:** EBIT puede no representar el efectivo disponible; no incorpora vencimientos, amortización, covenants, pagos del capital circulante ni una subida de tasas. Una empresa con beneficios contables puede tener una cobertura aparente mejor que su situación de caja.

### Acciones totalmente diluidas

**Definición:** estimación del número de acciones que podrían existir después de considerar los instrumentos que pueden crear acciones. Una forma simplificada es:

`Acciones totalmente diluidas = acciones básicas + dilución potencial`

**Ejemplo:** 100 millones de acciones básicas más 5 millones de acciones potenciales equivalen a 105 millones, antes de considerar el precio de ejercicio, las recompras y otras condiciones.

**Limitaciones:** el cálculo correcto requiere el detalle de opciones, convertibles, warrants (derechos de compra), acciones restringidas y métodos contables. Un instrumento puede no estar en circulación, depender del precio o no emitirse; una estimación agregada puede ocultar diferencias entre clases.

### Valor presente de flujos de caja descontados

**Definición:** aproxima el valor actual de los flujos de caja futuros:

`V₀ = Σ FCFₜ / (1 + r)ᵗ + VF / (1 + r)ⁿ`

Aquí `FCFₜ` es el flujo del año `t`, `r` es la tasa de descuento, `n` es el último año explícito y `VF` es el valor de los flujos posteriores. La suma se hace desde `t = 1` hasta `n`. **Si `FCFₜ` es FCFF, se descuenta con WACC; si es FCFE, se descuenta con el coste del patrimonio. No se mezclan ambos flujos.**

**Ejemplo simplificado:** si el único flujo previsto es 100 dentro de un año y la tasa de descuento es 10 %, el valor presente es aproximadamente 90,9. Es una ilustración; un análisis real debe añadir los flujos posteriores y justificar cada supuesto.

**Limitaciones:** el resultado es muy sensible a la tasa, al crecimiento, al margen, al capex, a la deuda, a la dilución y al valor residual. Un modelo puede parecer preciso y seguir siendo falso si la calidad de los beneficios o la visibilidad del negocio son deficientes. El DCF no elimina la incertidumbre.

### Margen de seguridad

**Definición:** distancia, expresada como porcentaje del valor estimado, entre una valoración conservadora y el precio:

`Margen de seguridad = (valor intrínseco conservador - precio) / valor intrínseco conservador`

**Ejemplo:** con una estimación conservadora de valor de 20 y un precio de 15, el margen es 25 %. La operación no quedaría protegida frente a errores; simplemente habría una distancia adicional frente a la estimación.

**Limitaciones:** se apoya en un valor que puede ser incierto. Si el valor real es 12, un margen calculado sobre 20 no ofrece seguridad. Por eso se acompaña de escenarios, incertidumbre explícita y precio máximo de decisión.

# Capítulo 27. Checklist de Value Investing antes de comprar

## 27.1 Función del checklist

Un checklist de Value Investing no predice el mercado ni convierte una empresa en una buena inversión. Su función es impedir que una decisión emocional omita una comprobación importante. Debe aplicarse **antes de comprar**, revisar cuando cambia un dato relevante y conservarse después de la decisión.

Cómo usarlo:

- Marcar **Sí** solo si hay evidencia verificable.
- Marcar **No** cuando la evidencia contradice el requisito.
- Marcar **No sé** cuando falta información o no se ha comprobado.
- Marcar **N/A** solo si la excepción está razonada y anotada.
- Anotar fecha, fuente y responsable de cada respuesta.
- Un “No sé” crítico no se convierte en “Sí” por entusiasmo.

Un resultado conveniente no es una recomendación. Sirve para descubrir qué falta antes de arriesgar capital.

## 27.2 Checklist de investigación

### A. Comprensión y tesis

- [ ] Sé explicar qué producto se vende, quién lo compra y por qué lo compra.
- [ ] Sé explicar cómo la empresa gana dinero y genera efectivo.
- [ ] Tengo una tesis escrita con una discrepancia identificable frente al mercado.
- [ ] He separado hechos, hipótesis, estimaciones y opiniones.
- [ ] He definido al menos tres hechos que invalidarían la tesis.
- [ ] Conozco el horizonte de la decisión y la necesidad de liquidez.

**Preguntas de control:** ¿puedo defender la tesis sin diagramas? ¿Qué parte depende de que el mercado tenga razón? ¿Qué evidencia me haría cambiar de opinión?

**Entregable:** tesis de una página y registro de falsadores.

### B. Negocio, industria y ventaja

- [ ] Conozco clientes, canales, productos, precios y competidores relevantes.
- [ ] He evaluado sustitutos, barreras de entrada y poder de negociación.
- [ ] La ventaja competitiva aparece en alguna métrica, no solo en adjetivos.
- [ ] He comprobado si la ventaja se está ampliando o erosionando.
- [ ] He identificado el riesgo de obsolescencia, regulación o cambio de hábitos.
- [ ] He construido al menos un escenario en el que la tesis no funciona.

**Preguntas de control:** ¿qué hace la competencia si baja precio? ¿qué inversión necesita para sobrevivir? ¿qué parte del negocio puede desaparecer sin quebrar la tesis?

### C. Calidad de los beneficios y de la caja

- [ ] He reconstruido varios años de ingresos, beneficios, caja y balance.
- [ ] Sé distinguir beneficio recurrente de partidas extraordinarias.
- [ ] He comparado beneficio con flujo de caja operativo y flujo de caja libre.
- [ ] He explicado capital circulante, capex y necesidades de mantenimiento.
- [ ] He revisado provisiones, ingresos diferidos, arrendamientos y compensación en acciones.
- [ ] He buscado señales de contabilidad agresiva, ajustes o políticas de gobierno difíciles de sostener.

**Preguntas de control:** ¿el beneficio se convierte en caja? ¿qué crecimiento requiere capital? ¿la mejora viene de mejor economía o de un cambio contable?

### D. Balance, liquidez y deuda

- [ ] He identificado deuda neta, vencimientos e intereses.
- [ ] He comprobado covenants, garantías, arrendamientos, pensiones y compromisos fuera del balance.
- [ ] He realizado una prueba de estrés con ingresos, márgenes y tipos de interés más hostiles.
- [ ] He determinado qué efectivo es restringido o no está disponible.
- [ ] El plan no depende de una refinanciación que no esté razonablemente asegurada.

**Preguntas de control:** ¿qué ocurre si los cobros se retrasan seis meses? ¿qué ocurre si los tipos suben? ¿qué condición de deuda activa una venta o reducción forzada?

### E. Gestión, gobierno y asignación de capital

- [ ] Conozco el historial de reinversión, adquisiciones, recompras y dividendos.
- [ ] He evaluado la alineación de los incentivos y los conflictos de interés.
- [ ] He comprobado los auditores, litigios y partes relacionadas.
- [ ] He separado el resultado afortunado de una buena decisión.
- [ ] La política de comunicación permite distinguir datos de objetivos.

**Preguntas de control:** ¿La dirección comunica con transparencia? ¿Se ha destruido valor? ¿La comunicación distingue los hechos de las promesas?

### F. Valoración y precio de entrada

- [ ] He triangularizado el valor con al menos dos enfoques que no dependan del mismo supuesto.
- [ ] He considerado deuda, arrendamientos, impuestos, capex y dilución.
- [ ] He calculado un rango conservador, no un punto exacto.
- [ ] El precio de compra deja un margen de seguridad compatible con la incertidumbre.
- [ ] He realizado una valoración inversa para entender qué asume el mercado.
- [ ] He definido un precio máximo y una condición para revisarlo.

**Preguntas de control:** ¿qué parte de mi valoración depende de crecer? ¿qué valor se obtiene si el mercado no reconoce la tesis? ¿puedo comprar por tramos? ¿la rentabilidad potencial paga el riesgo y el coste de oportunidad?

### G. Perímetro de la decisión

- [ ] La acción no supera mis límites de concentración, liquidez o calidad.
- [ ] Puedo explicar por qué encaja con el resto de la cartera.
- [ ] No dependo de una venta en fecha próxima ni de un crédito barato.
- [ ] He calculado el impacto de una nueva emisión sobre el valor por acción.
- [ ] Tengo un plan de seguimiento y una regla de revisión.

**Preguntas de control:** ¿qué pasa si cae a la mitad junto con el sector? ¿qué parte de la cartera depende de la misma idea? ¿puedo mantenerla durante años sin usarla para demostrar que tengo razón?

## 27.3 `pestscheckbox`: revisión externa y de sector

La etiqueta `pestscheckbox` se usa aquí como una lista de comprobación explícita para no mezclar un buen negocio con un contexto exterior hostil. Se aplica como **PEST + S**: PEST cubre el entorno macro y la S adicional revisa el sector y su estructura competitiva.

### P — Entorno político y regulatorio

- [ ] ¿Las normas actuales favorecen o perjudican la demanda del negocio?
- [ ] ¿Existe riesgo de cambios históricos o regulatorios relevantes?
- [ ] ¿Hay licencias, aranceles, límites de exportación o restricciones de competencia?
- [ ] ¿Qué litigios regulatorios o fiscales pueden durar más de un ejercicio?

### E — Entorno económico

- [ ] ¿Cómo afectan la inflación, los tipos y el crecimiento a ingresos y márgenes?
- [ ] ¿El negocio necesita financiación externa en un escenario de crisis?
- [ ] ¿Los clientes pueden retrasar compras o renegociar precios?
- [ ] ¿El valor está concentrado en un solo precio, cliente o canal?

### S — Entorno social y de comportamiento

- [ ] ¿Cambian las preferencias, hábitos o expectativas de los clientes?
- [ ] ¿La marca, la privacidad, la seguridad o la responsabilidad social afectan a la demanda?
- [ ] ¿La empresa necesita talento escaso o tiene una cultura difícil de replicar?
- [ ] ¿Existe riesgo reputacional o un producto que pueda quedar socialmente obsoleto?

### T — Entorno tecnológico

- [ ] ¿La tecnología puede reducir costos o mejorar la propuesta de valor?
- [ ] ¿Puede una nueva tecnología sustituir el producto o el canal?
- [ ] ¿La empresa puede integrar tecnología sin aumentar desproporcionadamente el capex?
- [ ] ¿La ventaja de datos o de plataforma está protegida o se puede copiar con facilidad?

### S — Sector y estructura competitiva

- [ ] ¿El sector está en expansión, maduro, saturado o decadente?
- [ ] ¿Puede haber presión estructural sobre precios y márgenes?
- [ ] ¿La concentración de clientes, proveedores o competidores cambia el poder de negociación?
- [ ] ¿El balance del sector es saludable o depende de refinanciación y de un momento temporal favorable?

**Uso recomendado:** si dos o más respuestas críticas son “No sé”, no comprar todavía. Registrar quién verificará cada respuesta y en qué fecha. Un enlace o un dato de prensa no sustituye un documento primario.

## 27.4 Semáforo de decisión

Antes de marcar “comprar”, clasificar cada punto crítico:

- **Verde:** evidencia suficiente, seguimiento definido y supuesto razonablemente conservador.
- **Amarillo:** existe una incertidumbre controlable; se acepta un rango de precio menor o un tamaño menor.
- **Rojo:** evidencia contradictoria, información que puede ser engañosa, riesgo de solvencia o dilución no resuelto, o dependencia de un supuesto central no probado.

Las reglas mínimas son:

- Un **No** en la identidad del activo, la propiedad, la capacidad de pago o el cálculo por acción es motivo de rechazo o de espera hasta aclararlo.
- Un **No sé** en valoración, deuda, dilución o calidad del beneficio exige una investigación adicional, no una apuesta.
- La ausencia de todos los verdes no siempre significa vender una posición existente, pero sí impide aumentar la exposición sin revisar la tesis y sus cambios.

## 27.5 Versión imprimible

La siguiente ficha puede copiarse a una hoja y completarse a mano. Es un control de proceso; no sustituye la debida diligencia.

**Empresa / activo:** ______________________________________________________

**Fecha:** __________________  **Analista:** ______________________________

**Precio observado:** ______________  **Moneda:** ______________________

**Rango de valor conservador:** ____________________  **Precio máximo:** ______________

### Identidad, negocio y tesis

- [ ] Sé qué compro y qué derechos tengo.
- [ ] Puedo explicar clientes, ingresos, costos y caja.
- [ ] Tengo una tesis escrita con falsadores.
- [ ] He separado hechos de hipótesis.
- [ ] He identificado competencia, sustitutos y ventaja.

### Calidad financiera

- [ ] Estados financieros reconstruidos y fuentes fechadas.
- [ ] Beneficio normalizado y flujo de caja examinados.
- [ ] Capex, capital circulante y arrendamientos entendidos.
- [ ] Deuda neta, vencimientos y covenants revisados.
- [ ] Prueba de estrés realizada.
- [ ] Dilución y acciones por acción calculadas.

### Valoración y decisión

- [ ] Al menos dos métodos de valor utilizados.
- [ ] Precio deja margen de seguridad.
- [ ] Valoración inversa completada.
- [ ] Tamaño de posición y concentración definidos.
- [ ] No dependo de una refinanciación no probada.
- [ ] No quedan “No sé” críticos.

### `pestscheckbox`

- [ ] P: político/regulatorio revisado.
- [ ] E: económico revisado.
- [ ] S: social y hábitos revisado.
- [ ] T: tecnología revisada.
- [ ] S: sector y competencia revisados.

**Riesgos prioritarios:** ________________________________________________

**Falsadores que obligan a revisar:** ____________________________________

**Próxima revisión:** __________________  **Decisión:** _________________________

# Capítulo 28. Value Traps: activos baratos que pueden seguir cayendo

## 28.1 “Barato” no significa “infravalorado”

**Barato** es una descripción relativa: un precio parece bajo si se compara con el beneficio publicado, el valor contable, un múltiplo de mercado, el precio de otra empresa o la cotización anterior. La comparación es útil, pero no identifica la causa del precio bajo.

**Infravalorado** es un juicio sobre la relación entre el precio actual y el valor que un negocio puede conservar o crear en el futuro. Para llamarlo infravalorado, el inversor debe tener evidencia de que la situación deteriorada es temporal o corregible, que el balance permite sobrevivir y que existe un margen de seguridad.

Una acción puede parecer barata y ser una trampa de valor. También puede parecer cara en relación con un múltiplo y estar infravalorada si sus activos, capacidad de generación u opcionalidad no están reflejados correctamente. La pregunta correcta no es “¿es barato?”, sino:

> ¿Qué estoy pagando exactamente, qué estoy comprando con ese precio y qué tendría que ser cierto para que el precio sea razonable?

La discusión siguiente usa números de empresas hipotéticas. Los nombres Alfa, Beta, Gamma, Delta, Epsilon y Zeta son etiquetas ficticias creadas solo para ilustrar los casos; no identifican empresas reales ni representan datos de mercado. Ninguno de los ejemplos es una recomendación de inversión.

## 28.2 Múltiplos y rendimiento: definición, ejemplo y limitaciones

### P/E

**Definición:** el precio por beneficio es el precio de mercado de una acción dividido por el beneficio por acción atribuible a los accionistas ordinarios:

`P/E = precio de la acción / beneficio por acción`

También puede expresarse como `capitalización / beneficio neto`, siempre que se usen cifras comparables y el mismo perímetro.

**Ejemplo hipotético:** si el precio es 10 y el beneficio por acción del último ejercicio es 1,50, el P/E es aproximadamente 6,7 veces. A primera vista parece bajo, pero solo describe el beneficio de referencia.

**Limitaciones:** no sirve con pérdidas negativas; puede ser baja porque el beneficio es cíclico, puntual o manipulado; las partidas puntuales, los impuestos extraordinarios y los cambios contables distorsionan. Un P/E bajo no dice si los beneficios actuales son cobrables ni si la deuda está correctamente reflejada.

### P/B

**Definición:** el precio por valor contable divide el precio de mercado por el valor contable por acción:

`P/B = precio de la acción / valor contable por acción`

**Ejemplo hipotético:** con precio de 5 y valor contable de 10 por acción, el P/B es 0,5 veces.

**Limitaciones:** los activos pueden estar sobrevalorados en libros, obsoletos o no ser capaces de generar su valor; los intangibles no siempre están reconocidos; una empresa de servicios puede tener pocos activos tangibles. Si el valor contable es negativo o muy bajo, el P/B pierde utilidad. Un precio bajo sobre el valor contable no implica que el negocio valga la mitad de la empresa.

### Rendimiento por dividendo

**Definición:** el rendimiento de dividendo relaciona el dividendo anual por acción con el precio:

`Rendimiento por dividendo = dividendo anual por acción / precio de la acción`

**Ejemplo hipotético:** un dividendo anual de 2,40 y un precio de 20 dan un rendimiento del 12 %.

**Limitaciones:** el dividendo puede ser especial, insostenible, financiado con deuda, inferior a la caja libre o pagado con recursos no recurrentes. Si el precio es cero o negativo, el rendimiento no es interpretable. La acción puede caer tras el pago, los impuestos y las fechas de cotización importan, y el rendimiento retrospectivo no describe el rendimiento total.

## 28.3 Seis trampas de valor habituales

### 1. P/E muy bajo por beneficio máximo o no repetible

**Ejemplo hipotético:** la empresa hipotética Alfa cotiza a 10 y presenta un beneficio por acción de 1,50; su P/E es 6,7. El beneficio de ese año incluye la venta de una filial no recurrente y un ciclo de precios excepcionalmente favorable. Si el beneficio normalizado fuera 0,50, el mismo precio implicaría un P/E de 20.

**Por qué puede ser una trampa**

- El mercado está capitalizando una ganancia que no se repetirá.
- El negocio es cíclico y está cerca del pico del ciclo.
- Hay provisiones insuficientes o políticas contables agresivas.
- El beneficio contable no se convierte en caja.

**Preguntas antes de comprar**

- ¿Cuál es el beneficio normalizado en un año medio, no en el mejor año?
- ¿Qué parte del beneficio es puntual o depende del precio de un producto?
- ¿El flujo de caja y el balance respaldan el beneficio?
- ¿Qué evidencia indicaría que el supuesto ciclo de bajada ya terminó?

**Defensa:** normalizar varios años, separar lo recurrente de lo excepcional y exigir que el precio cubra una recuperación moderada, no una recuperación perfecta.

### 2. P/B muy bajo por activos de baja calidad

**Ejemplo hipotético:** la empresa hipotética Beta cotiza a 5 y declara 10 por acción de valor contable. El P/B es 0,5. Sin embargo, la mayor parte de los activos son equipos antiguos cuya capacidad productiva se ha reducido, existen litigios y la compañía necesita capex para mantener su operación.

**Por qué puede ser una trampa**

- El libro contiene activos que no generan el retorno esperado.
- Hay deudas, arrendamientos, pasivos u obligaciones que el balance no refleja completamente.
- La empresa tiene necesidades de capital o de inversión que erosionan el valor.
- La rotación de activos y el bajo retorno sobre el capital destruyen valor.

**Preguntas antes de comprar**

- ¿Qué parte del activo tangible está realmente en uso y cuánto costaría reemplazarlo?
- ¿Qué pasivos, contingencias y compromisos están fuera de las cifras principales?
- ¿Qué retorno produce el capital instalado y quién lo compite?
- ¿La diferencia entre valor de mercado y valor libro es una oportunidad o una advertencia?

**Defensa:** tratar el libro como un punto de partida, aplicar descuentos a los activos y a las contingencias, y comparar el valor con la capacidad de generar caja y con el coste de reparar el negocio.

### 3. *Dividend yield* alto (rendimiento por dividendo) por distribución insostenible

**Ejemplo hipotético:** la empresa hipotética Gamma paga 2,40 por acción y cotiza a 20, un rendimiento por dividendo del 12 %. Su beneficio normalizado es 1,00 y la caja libre disponible es 0,80. El dividendo de 2,40 no puede sostenerse con el negocio actual.

**Por qué puede ser una trampa**

- El dividendo se paga con deuda, ventas de activos o capital circulante.
- La tasa de reparto del dividendo consume la inversión necesaria para competir.
- El dividendo es especial y no responde a una política estable.
- La empresa recorta el dividendo justo cuando el inversor más depende de él.

**Preguntas antes de comprar**

- ¿El dividendo está cubierto por beneficio normalizado y flujo de caja libre?
- ¿Cuál es la tasa de reparto del dividendo esperada en un año malo?
- ¿La política requiere crecer o puede mantener la distribución con deuda razonable?
- ¿Qué ocurre si la dirección cambia o necesita capital?

**Defensa:** valorar el negocio antes que el rendimiento por dividendo; usar un dividendo normalizado y comprobar el efecto del pago sobre deuda, capex y solvencia. Un rendimiento pasado no es una tasa garantizada.

### 4. Deuda excesiva y refinanciación

**Ejemplo hipotético:** la empresa hipotética Delta tiene una capitalización de 100 unidades monetarias, deuda de 180 y efectivo de 20. Su deuda neta es 160; si el EBITDA hipotético es 30, la relación deuda neta/EBITDA es 5,3. La deuda vence a corto plazo y los activos son ilíquidos.

**Por qué puede ser una trampa**

- El múltiplo de beneficio o valor libro no incorpora la prioridad de los acreedores.
- Un pequeño descenso de EBITDA aumenta mucho la carga de deuda.
- La refinanciación puede exigir más garantía, venta de activos o dilución.
- La Tesorería puede estar en otra entidad y no estar disponible.

**Preguntas antes de comprar**

- ¿Cuál es la deuda neta y el calendario de vencimientos?
- ¿Qué ocurre con una caída de ingresos, un aumento de intereses o un estrés de caja?
- ¿Hay covenants, cláusulas de impago cruzado, garantías o costos de financiación que limiten la flexibilidad?
- ¿El negocio genera caja después de capex y deuda en un año adverso?

**Defensa:** modelar vencimientos y caja, analizar la deuda legal y no tratar el precio de la acción como un colchón suficiente. Si la supervivencia depende de una refinanciación incierta, el proyecto no pasa el filtro de valor.

### 5. Beneficios cayendo aunque el P/E parezca bajo

**Ejemplo hipotético:** el beneficio por acción de la empresa hipotética Epsilon desciende de 2,00 a 1,20 y después a 0,60. A un precio de 5, el P/E sobre el último beneficio es 8,3. No es necesariamente barato: el beneficio se está acercando a cero o a pérdidas.

**Por qué puede ser una trampa**

- El P/E puede ser bajo porque utiliza como denominador un beneficio en descenso.
- La caída puede ser estructural: tecnología, clientes, regulación, saturación o pérdida de economías de escala.
- Un dividendo o una recompra puede ocultar la mala evolución del negocio.
- El mercado puede estar descontando un futuro todavía peor.

**Preguntas antes de comprar**

- ¿La caída es de ingresos, margen, o simplemente un efecto contable?
- ¿Cuál es la tendencia de la caja, el capex y la participación de mercado?
- ¿Qué parte de la caída es reversible y qué parte es permanente?
- ¿La nueva valoración sigue siendo razonable si el beneficio no vuelve a crecer?

**Defensa:** no comprar sólo porque el P/E del último año es bajo; modelar una recuperación conservadora y comprobar que la propia estructura del negocio puede producirla.

### 6. Sector decadente: múltiplos bajos por una razón estructural

**Ejemplo hipotético:** los ingresos de la empresa hipotética Zeta caen de 8 a 6 a 3 unidades en tres ejercicios, mientras todos sus competidores reducen ingresos, precios y márgenes. Su cotización representa 0,8 veces el valor libro y 7 veces el beneficio actual.

**Por qué puede ser una trampa**

- Los activos están diseñados para una demanda que se reduce.
- La tecnología o los hábitos desplazan el producto.
- Los competidores salen, pero los márgenes también se reducen.
- El valor libro no puede convertirse en caja sin descuentos, costos o una venta larga.

**Preguntas antes de comprar**

- ¿El descenso es cíclico o estructural?
- ¿Cuál es la vida útil y el coste de reposición de los activos?
- ¿Existe una ruta creíble hacia caja libre, cierre, venta o transformación?
- ¿Quién asumirá el coste de la transición y cuánto tiempo puede financiarla?

**Defensa:** evitar comprar un “superdividendo” de un sector en declive. Exigir una tesis de recuperación, un plan de conversión o un activo liquidable con protección frente a pasivos; si no existe, un P/B bajo no es una oportunidad.

## 28.4 Tabla de diagnóstico de una trampa de valor

Antes de comprar, responder estas preguntas y anotar la evidencia:

- **Causa del descuento:** ¿es beneficio máximo, deuda, obsolescencia, un activo dudoso, riesgo legal o una expectativa excesiva?
- **Beneficio normalizado:** ¿qué beneficio se repetirá en un año medio?
- **Solvencia:** ¿puede la empresa sobrevivir y financiarse hasta que la tesis se resuelva?
- **Competencia:** ¿la baja valoración atrae a competidores o está acompañada de una ventaja?
- **Gestión:** ¿la dirección ha tratado bien el capital en resultados buenos y malos?
- **Catalizador:** ¿qué cambia la percepción y en qué plazo? Si no hay catalizador, ¿cómo se realiza el valor?
- **Falsador:** ¿qué observación demostraría que esperar o vender es mejor que mantener?

Una trampa puede pasar varios filtros y fallar en uno. La regla de seguridad es identificar ese filtro crítico antes de convertir la oportunidad en una posición.

## 28.5 Barato, infravalorado y valor de liquidación: no confundirlos

- **Activo barato:** precio relativo bajo frente a una métrica, con poca información sobre la causa.
- **Activo infravalorado:** precio inferior a un rango conservador de valor realizable, con evidencia de la calidad y realizabilidad de los activos, balance y una tesis de generación de efectivo.
- **Valor de liquidación:** lo que se espera recibir después de vender activos y pagar pasivos. Puede ser una protección, pero no siempre es realizable: hay costos, impuestos, descuentos y tiempo.

La decisión debe indicar cuál de los tres casos se está comprando. Una empresa con P/B de 0,5 puede ser una oportunidad de liquidación, una trampa de activos declasados o un negocio cuyo valor proviene de beneficios que el mercado desprecia. Los tres casos exigen análisis distintos.

# Capítulo 29. Errores del inversor y defensas de comportamiento

## 29.1 Por qué el sesgo gana al análisis

El inversor no decide como una calculadora. El cansancio, el miedo al arrepentimiento, el deseo de demostrar una tesis y la presión social cambian el peso de una evidencia. Un análisis escrito reduce esos sesgos, pero no los elimina. La defensa no consiste en confiar en la objetividad, sino en crear pasos que obliguen a corregir una decisión.

La palabra inglesa **bias** se usa aquí como sesgo. Un sesgo puede producir una respuesta favorable o desfavorable; el error aparece cuando una regla interna sustituye la evidencia y la investigación no la pone a prueba.

## 29.2 Catálogo de errores solicitados y defensas

### FOMO — miedo a perderse una oportunidad

El deseo de comprar después de una subida o de una atención media puede hacer que se pague un precio sin análisis. **Defensa:** aplicar un periodo de espera, escribir la tesis antes de mirar la cotización y comparar la oportunidad con las alternativas disponibles. No comprar una emoción.

### Excesiva confianza o *overconfidence*

Sobreestimar la propia capacidad para prever, elegir o salir puede llevar a concentrar la cartera, usar apalancamiento o ignorar datos contrarios. **Defensa:** separar la calidad de la tesis de los resultados pasados, usar límites de posición, pedir una revisión independiente y construir un rango de error.

### Sesgo de confirmación (*confirmation bias*)

Se buscan noticias y cifras que apoyan la compra y se descartan las que la contradicen. **Defensa:** exigir una sección obligatoria “qué tendría que ver para tener razón” y “qué prueba me obligaría a vender”. Leer la fuente primaria y una crítica razonable.

### *Anchoring* o anclaje

Quedarse atrapado en un precio anterior, un máximo histórico, un objetivo de terceros o un precio de compra. **Defensa:** volver a estimar el valor con la información disponible hoy; el pasado no es un ancla, sino un dato más. El precio pagado no cambia el valor del activo.

### Aversión a la pérdida (*loss aversion*)

Sentir más dolor por una pérdida que por una ganancia equivalente puede llevar a vender una posición ganadora demasiado pronto o mantener una perdedora esperando que vuelva al punto de entrada. **Defensa:** revisar por tesis, falsadores, valoración y necesidad de capital, no por miedo o alivio. Usar reglas de decisión anteriores a la emoción.

### Sesgo de recencia (*recency bias*)

Dar demasiado peso a los últimos resultados, meses o titulares y extrapolar un momento favorable. **Defensa:** analizar varios años y separar tendencia, ciclo, estacionalidad y evento. Usar escenarios normalizados y no una única cifra como ancla.

### *Herding* o comportamiento gregario

Comprar porque “todos” lo hacen, porque un grupo lo recomienda o porque la cotización parece popular. **Defensa:** escribir antes la tesis, preguntar qué está descontado en el precio y mantener límites de concentración. La popularidad no es evidencia de valor.

### Comprar porque cayó

Confundir una bajada con una rebaja automática. A veces la caída informa de un deterioro del negocio, dilución, deuda o un cambio estructural. **Defensa:** preguntar qué cambió, qué evidencia distingue una oportunidad de una trampa y cuál es el precio máximo después de estudiar el deterioro.

### Vender porque subió

Vender únicamente para realizar una ganancia, temiendo perderla, o asumir que una subida demuestra que el valor era mayor. **Defensa:** comparar el precio nuevo con el valor actualizado y revisar costes, impuestos y tesis. Una ganancia realizada no reemplaza una buena decisión.

### Enamoramiento de la inversión

Convertir la identidad del inversor en la identidad de la empresa: defenderla porque es “la suya”, porque un gestor admirado le dio una recomendación o porque comprarla da sensación de pertenecer. **Defensa:** hablar de ella como un expediente, asignar un revisor crítico, aceptar una decisión contraria al relato personal y usar falsadores operativos y financieros.

### Ignorar valoración, deuda o dilución

Dejarse fascinar por la historia, el producto o el crecimiento y pasar por alto que el precio ya es alto, que hay vencimientos o que el beneficio por acción se encoge. **Defensa:** convertir la valoración, la solvencia y el recuento de acciones totalmente diluidas en filtros obligatorios. Si alguno falla, no comprar; si se deteriora, no defender la posición con narrativa.

## 29.3 Disparadores conductuales: diez ejemplos

Los siguientes son **disparadores conductuales**, es decir, diez ejemplos de conducta en situaciones hipotéticas. No describen empresas reales ni inversores identificables. Cada ejemplo incluye una defensa concreta.

### Ten shot 1. El FOMO en la subida

El precio de una acción sube durante semanas después de varias noticias positivas. El inversor, que no la había estudiado, compra porque cree que la siguiente subida será la última.

**Defensa:** escribir una tesis antes de operar; si no puede explicar el negocio y el precio en cinco minutos, se deja pasar la oportunidad. Esperar no es perder una tesis; es evitar pagar una emoción.

### Ten shot 2. La confianza después de una racha ganadora

Tras varias decisiones acertadas, el inversor cree que su método infalible y aumenta la posición en un activo que casi ha duplicado su valor. No revisa la deuda ni la concentración.

**Defensa:** documentar una base de resultados, fijar límites de posición y pedir una revisión por alguien que conozca la tesis pero no comparta la confianza del titular.

### Ten shot 3. La confirmación selectiva

El equipo ha escrito que la empresa crecerá. El inversor lee ese informe, omite un informe sobre litigios y conserva únicamente las métricas que respaldan la tesis.

**Defensa:** hacer una lista de evidencia contradictoria antes de comprar. Exigir una fuente primaria para cada afirmación, asignar a alguien a buscar evidencia contraria y documentar el peor caso.

### Ten shot 4. El anclaje al máximo anterior

Una acción cayó desde 100 a 40. El inversor cree que “volverá a 100” y considera 40 barato sin analizar qué cambió en el balance.

**Defensa:** ignorar la trayectoria del precio y valorar el negocio con los datos actuales. El máximo anterior no tiene valor económico automático. Comparar con la caja normalizada, la deuda y los activos, no solo con un gráfico.

### Ten shot 5. La pérdida condiciona la decisión

El inversor conserva una posición perdedora porque vender significaría “reconocer” el error, mientras ha vendido una ganadora para evitar sentir que había ganado demasiado tarde.

**Defensa:** usar la misma hoja de revisión para posiciones ganadoras y perdedoras: tesis, falsadores, efectivo esperado, valor, deuda y dilución. No decidir por comodidad.

### Ten shot 6. La extrapolación de la recencia

Los últimos dos trimestres fueron excepcionalmente buenos. El inversor proyecta ese crecimiento durante diez años y no considera la normalización, la capacidad ni la competencia.

**Defensa:** usar series largas, separar estacionalidad de crecimiento y crear escenarios que mulai desde un año medio, no desde el máximo reciente.

### Ten shot 7. El rebaño

Tres personas de una comunidad recomiendan el mismo activo; los mensajes son optimistas y nadie publica los riesgos. El inversor compra para no quedarse fuera.

**Defensa:** medir qué porcentaje del negocio y del precio ya está explicado por el consenso. Preguntar qué caso no está viendo el grupo. Una tesis debe poder sostenerse aunque la mayoría opine lo contrario.

### Ten shot 8. La compra por caída

El precio baja un 30 % tras resultados débiles. El inversor asume que una acción que “cae” se está volviendo barata y compra sin comprobar si el beneficio, la deuda o la cuota se han deteriorado.

**Defensa:** separar precio de valor. Investigar causa, mecanismo de recuperación, balance y precio máximo. Una caída puede mejorar una inversión; también puede estar comunicando un problema.

### Ten shot 9. La venta por subida

Después de subir un 60 %, el inversor vende una parte para asegurar la ganancia, aunque la tesis sigue intacta y la nueva valoración no se ha estudiado.

**Defensa:** usar un plan de reequilibrio o una regla basada en la tesis, no en una meta de ganancia. Vender porque el número bonito puede producir tan mala ejecución como comprar por FOMO.

### Ten shot 10. El enamoramiento

La empresa es la favorita del inversor, que llama “calidad” a cualquier métrica favorable y llama “temporal” a cada deterioro. Para evitar admitir el error, aumenta la posición sin revisar la valoración, mientras aumenta la deuda y se acerca una emisión que diluye las acciones.

**Defensa:** pedir a un revisor que intente demostrar que la tesis es falsa; revisar tres filtros obligatorios (valoración, deuda y dilución); escribir qué evidencia fuerza una reducción antes de que ocurra.

## 29.4 Tres errores de proceso que merecen una puerta obligatoria

### Ignorar la valoración

Un negocio puede ser excelente y una acción puede ser una mala inversión si el precio ya incorpora décadas de crecimiento. La narrativa no sustituye al precio. **Defensa:** fijar un rango conservador, un margen de seguridad y un precio máximo; no comprar si la tesis solo funciona con un múltiplo heroico.

### Ignorar la deuda

El beneficio se reparte entre todos los reclamantes de la estructura de capital, no solo entre los accionistas. **Defensa:** tener una prueba de deuda neta, vencimientos, intereses y estrés. Si la empresa necesita refinanciar para sobrevivir, la valoración se calcula después de esa incertidumbre.

### Ignorar la dilución

El beneficio total puede crecer mientras el beneficio por acción cae. **Defensa:** mantener un recuento de acciones totalmente diluidas, revisar opciones, convertibles, compensación y emisiones, y recalcular el valor por acción en cada informe. Una adquisición financiada con acciones puede ser excelente para el negocio y perjudicial para el accionista existente.

## 29.5 Checklist de control conductual antes y después de operar

### Antes de investigar

- [ ] ¿Estoy buscando una empresa o una excusa para justificar una compra?
- [ ] ¿Puedo nombrar un riesgo que contradiga mi tesis?
- [ ] ¿Qué precio hace que la operación sea razonable?
- [ ] ¿Estoy comprando porque cayó, subió, por FOMO o por presión del grupo?

### Durante el análisis

- [ ] ¿He buscado fuentes que contradigan mi idea?
- [ ] ¿He separado hechos, estimaciones y emociones?
- [ ] ¿He comprobado deuda y dilución antes de mirar el potencial alcista?
- [ ] ¿He escrito al menos un escenario en el que no quiero estar invertido?
- [ ] ¿He esperado un periodo de reflexión sin listas de seguimiento ni mensajes apremiantes?

### Antes de cerrar la orden

- [ ] ¿La tesis sigue siendo válida con la información disponible?
- [ ] ¿El tamaño de la posición está definido y no depende de una ganancia futura?
- [ ] ¿Existe un límite de pérdida o un riesgo de liquidez que deba conocer?
- [ ] ¿He registrado fecha, precio, motivo, riesgo y condiciones de revisión?
- [ ] ¿Puedo aceptar que la decisión no sea la más emocionante?

### Después de operar

- [ ] ¿He comparado el resultado con la hipótesis original, no solo con la ganancia?
- [ ] ¿He revisado el expediente al aparecer un nuevo dato relevante?
- [ ] ¿He separado la suerte de la calidad de la decisión?
- [ ] ¿He actualizado los falsadores y el coste de oportunidad?
- [ ] ¿He archivado un análisis posterior útil para la siguiente investigación?

## 29.6 Versión imprimible de control de errores

**Activo:** __________________________________  **Fecha:** __________________

**Decisión:** ________________________________  **Precio / rango de valor:** __________________

**Motivación en una frase:** ________________________________________________________

| Error a vigilar | Respuesta honesta | Defensa o acción |
|---|---|---|
| FOMO o prisa | __________________________________ | __________________________________ |
| Excesiva confianza | __________________________________ | __________________________________ |
| Confirmación | __________________________________ | __________________________________ |
| Anclaje a un precio anterior | __________________________________ | __________________________________ |
| Aversión a la pérdida | __________________________________ | __________________________________ |
| Recencia | __________________________________ | __________________________________ |
| Rebaño | __________________________________ | __________________________________ |
| Comprar porque cayó | __________________________________ | __________________________________ |
| Vender porque subió | __________________________________ | __________________________________ |
| Enamoramiento | __________________________________ | __________________________________ |
| Valoración, deuda o dilución ignoradas | __________________________________ | __________________________________ |

**Evidencia que me haría cambiar de opinión:**

1. ______________________________________________________________________
2. ______________________________________________________________________
3. ______________________________________________________________________

**Tamaño máximo:** ____________  **Riesgo máximo:** ____________

**Fecha de revisión:** __________________  **Decisión del revisor:** __________________

## 29.7 Idea final

La disciplina no consiste en tener siempre razón. Consiste en construir un proceso que permita equivocarse con un tamaño controlado, reconocer la evidencia cuando cambia y evitar que el miedo, la vanidad o la pertenencia decidan por nosotros. Una tesis sin precio, sin balance y sin falsadores es una historia; una tesis con esos elementos es una hipótesis que puede investigarse, discutirse y abandonarse.

Este material es educativo y general. No constituye asesoramiento financiero personalizado ni garantiza rentabilidad. Las decisiones de inversión requieren validar los datos aplicables a la situación concreta, considerar impuestos, liquidez, riesgo y objetivos personales.

---

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

---

# Capítulo 31. Tabla maestra de indicadores y fórmulas de los capítulos 1–30

## 31.1 Cómo usar esta tabla

La tabla normaliza nombre, fórmula, finalidad, interpretación y limitaciones de los indicadores empleados en el manual. No vuelve a explicar los capítulos 1–30: funciona como índice de consulta, control de coherencia y lista de verificación editorial. Cuando dos capítulos usen sinónimos, se debe elegir **una forma primaria** y conservar el alias entre paréntesis.

**Convenciones de la tabla:**

- `t` es el periodo actual; `t−1`, el periodo anterior; `n`, el número de años o períodos.
- Los saldos de balance se especifican como final, medio o inicio; no deben sustituirse sin indicación.
- Los importes monetarios deben declarar USD m, USD/acción o moneda equivalente.
- Un porcentaje es una tasa; un múltiplo se expresa con `x`; una variación de margen se expresa en `pp` (puntos porcentuales).
- `NM` significa “no significativo/no interpretable” y no equivale a cero.

## 31.2 Escala, crecimiento y resultados por acción

| Indicador | Fórmula | Para qué sirve | Interpretación | Limitaciones |
|---|---|---|---|---|
| **Ingresos / Ingresos** | `Ventas netas: ingresos por contratos con clientes` | Medir escala y tendencia operativa | Más ingresos no implican más rentabilidad ni más caja | No revela mezcla, crecimiento orgánico frente a adquirido, concentración, divisas ni devoluciones; GAAP/IFRS pueden reconocer de forma distinta |
| **Ingresos Growth** | `Ingresos_t / Ingresos_(t−1) − 1` | Detectar aceleración o desaceleración | Positivo indica expansión del periodo; negativo indica contracción | Efecto base, inflación, M&A, estacionalidad y cambios contables limitan comparabilidad |
| **Gross Profit** | `Ingresos − COGS` | Medir resultado tras costes directos | Es el punto de partida del margen bruto | La clasificación de costes varía; no incluye gastos operativos, impuestos o capital |
| **Gross Profit Growth** | `GP_t / GP_(t−1) − 1` | Separar crecimiento de volumen y precio | Si crece menos que Ingresos, puede haber presión de mezcla o coste | No sustituye el desglose por producto, cliente o región |
| **Gross Margin** | `Gross Profit / Ingresos` | Evaluar margen bruto | Porcentaje de cada unidad de ingreso que queda antes de gastos operativos y otros costes | Sectores con costes de producción diferentes no son comparables; sensible a inventario, mezcla y prorrateo |
| **EBITDA** | `EBIT + D&A` | Aproximar resultado operativo antes de depreciación y amortización | Facilita comparaciones antes de políticas contables de activos | No resta Capex, intereses, impuestos ni capital circulante; puede ser engañoso en activos intensivos en capital |
| **EBITDA Margin** | `EBITDA / Ingresos` | Normalizar EBITDA por escala | Porcentaje de ingreso convertido en EBITDA | No mide calidad de la cifra ni consumo de capital; conserva las limitaciones del EBITDA |
| **D&A** | `Depreciación + Amortización` | Separar coste no dinerario de la inversión | Forma parte de la diferencia entre EBIT y EBITDA y del FCF | Incluye políticas contables, vida útil, deterioro y activos intangibles; no implica flujo libre total |
| **EBIT / Operating Income** | Ingresos − costes operativos, según política | Medir resultado operativo antes de intereses e impuestos | Indica rentabilidad del negocio antes del apalancamiento | La definición de “operativo” varía; puede excluir o incluir partidas no recurrentes |
| **Operating Margin** | `EBIT / Ingresos` | Evaluar rentabilidad operativa | Porcentaje de ingresos que queda como EBIT | No mide capital empleado, caja ni diferencias de estructura de costes |
| **EBT / Preimpuesto Income** | `EBIT + ingresos financieros − gastos financieros +/− otras partidas` | Medir resultado antes de impuestos | Muestra el efecto de la financiación sobre el resultado | Otras partidas, ingresos extraordinarios y jurisdicciones fiscales distorsionan la comparación |
| **Net Income** | `Beneficio neto consolidado = EBT − gasto fiscal`; `Beneficio atribuible a la matriz = beneficio consolidado − asignación a NCI ± ajustes` | Medir beneficio según el perímetro solicitado | Base de EPS, ROE y payout sólo si se usa la parte atribuible a comunes | La participación no controlante no es un interés financiero; no mezclar bases ni restarla como gasto |
| **Net Margin** | `Net Income / Ingresos` | Normalizar beneficio neto | Mide cuánto beneficio neto queda por unidad de ingresos | Puede mejorar por apalancamiento o impuestos, no solo por operación |
| **EPS básico** | `Beneficio neto atribuible / acciones básicas medias ponderadas` | Valorar beneficio por acción | Permite comparar beneficio disponible por acción | Cambios de acciones, splits y elementos extraordinarios reducen comparabilidad |
| **EPS diluido** | `Beneficio neto atribuible / acciones diluidas medias ponderadas` | Ajustar EPS por potencial dilución | Refleja el efecto de opciones, convertibles o acciones contingentes | El número futuro de acciones puede ser incierto; la emisión puede destruir valor por acción |
| **EPS Growth** | `EPS_t / EPS_(t−1) − 1` | Medir crecimiento del beneficio por acción | Positivo indica expansión, si el capital por acción no empeora | Compras de acciones y mayor emisión cambian la lectura; usar denominador positivo |
| **BVPS / Valor contable por acción** | `Patrimonio atribuible / acciones en circulación` | Usar en P/B y medir capital contable | Libro por acción, no valor de mercado | Patrimonio negativo, intangibles, inflación y deterioros limitan su interpretación |
| **CFPS** | `CFO / acciones medias ponderadas` | Medir caja operativa por acción | Complementa al EPS con flujo de caja | El momento del capital de trabajo y las partidas no recurrentes distorsionan |
| **FCFPS** | `FCF / acciones medias ponderadas` | Medir flujo libre por acción | Útil para distribuciones y capacidad de inversión | La definición de FCF varía; si es FCFF, no es efectivo directamente disponible para accionistas |
| **DPS** | `Dividendos por acción` | Medir distribución por acción | Divide la distribución entre accionistas | No dice si el dividendo es sostenible ni si proviene de beneficios recurrentes |
| **Crecimiento simple genérico** | `(V_t / V_(t−1) − 1) × 100` | Medir variación de una magnitud | Es una tasa de un periodo, no una trayectoria | Base cero/negativa, cambios de perímetro y efecto base limitan la lectura |
| **Crecimiento esperado / CAGR implícito** | `(M_f / M_0)^(1/n) − 1` | Traducir una previsión de beneficios, ingresos o FCF en tasa anual | Es un supuesto, no una probabilidad | No iguala CAGR a PEG ni sustituye el modelo de flujos y riesgos |
| **FCF Growth** | `(FCF_t / FCF_(t−1) − 1) × 100` sólo si ambos FCF son positivos | Medir cambio de caja histórica | Positivo indica mayor FCF bajo la misma definición | Con FCF cero/negativo mostrar `ΔFCF` y cambio de signo; capital circulante, CapEx y M&A distorsionan |
| **Book Value Growth** | `(Patrimonio final / patrimonio inicial − 1) × 100` | Medir cambio del patrimonio contable atribuible | Puede reflejar retención, emisiones, OCI o recompras | No es crecimiento de valor de mercado; usar BVPS y base de acciones declarada |
| **CAGR** | `(Valor final / Valor inicial)^(1/n) − 1` | Suavizar crecimiento de un periodo | Resume una trayectoria, no cada año | Muy sensible a los extremos; requiere extremos positivos y puede ocultar volatilidad, adquisiciones y cambios contables |
| **CAGR real** | `[(V_n/V_0)/(CPI_n/CPI_0)]^(1/n) − 1` | Ajustar crecimiento nominal por poder de compra | Expresa tasa real multianual | Requiere índices de precios comparables; no usar `CAGR nominal − inflación` en varios años |
| **Ingresos CAGR** | `(Ingresos_final / Ingresos_inicial)^(1/n) − 1` | Comparar trayectorias de escala | Positivo indica crecimiento compuesto | No separa crecimiento orgánico, adquisiciones, precio o moneda |
| **Beneficio neto CAGR** | `(NI_final / NI_inicial)^(1/n) − 1` | Verificar si el beneficio crece con los ingresos | Positivo indica expansión compuesta si capital y riesgo son comparables | Un beneficio inicial bajo produce un CAGR enorme y engañoso |

## 31.3 Rentabilidad, capital y calidad de beneficios

| Indicador | Fórmula | Para qué sirve | Interpretación | Limitaciones |
|---|---|---|---|---|
| **ROA** | `Beneficio neto / activos totales medios` | Medir rentabilidad sobre activos | Indica retorno del activo total | Política de activos, fondo de comercio, impuestos y tamaño distorsionan |
| **ROE** | `Beneficio disponible para comunes / patrimonio común medio` | Medir retorno para accionistas | Cuantifica beneficio por capital contable | El apalancamiento puede elevar ROE; no equivale a retorno económico del negocio |
| **ROIC** | `NOPAT / capital invertido medio` | Medir retorno del capital operativo | Permite comparar retorno con coste de capital | Depende de cómo se define el capital invertido; ignora la financiación directamente, pero sus efectos pueden estar en EBIT |
| **ROIC incremental** | `ΔNOPAT de la inversión / Δcapital invertido` | Evaluar retorno de una inversión nueva | Si supera WACC, el proyecto tiene VNP positivo bajo supuestos coherentes | Requiere aislar la inversión, periodo, capital base y flujos; no sustituirlo por ROIC histórico |
| **NOPAT** | `EBIT × (1 − tasa fiscal efectiva)` | Eliminar el efecto fiscal de la financiación al medir retorno operativo | Base comparable para ROIC y FCFF | La tasa efectiva y los ajustes extraordinarios pueden ser volátiles |
| **Capital invertido** | `Activos operativos − pasivos operativos sin interés − efectivo e inversiones no operativos`; alternativamente, un puente de financiación documentado | Base de activos que financian la operación | Define el capital empleado por el negocio | No hay una única definición; goodwill, leases, pensiones, NCI e inversiones cambian el resultado; usar saldos iniciales/finales si se afirma que es promedio |
| **ROIC − WACC** | `ROIC − WACC` | Aproximar EVA anual y comparar retornos | Positivo indica EVA anual positivo bajo el modelo; no prueba por sí solo infravaloración | El VNP depende de flujos incrementales, horizonte, moneda, riesgo y bases; no confundir spread con VNP |
| **Beneficio económico** | `NOPAT − WACC × capital invertido` | Medir valor creado en un periodo | Positivo indica contribución después del coste de capital | Depende de proyecciones, WACC y capital promedio; no equivale a caja ni a la cuenta de resultados |
| **ROE DuPont** | `Margen neto × rotación de activos × multiplicador de patrimonio` | Descomponer ROE | Identifica el origen del margen, la rotación y el apalancamiento | Las tres piezas pueden cambiar simultáneamente; con patrimonio negativo se vuelve inestable |
| **Margen bruto Δ** | `GM_t − GM_(t−1)` | Detectar presión de rentabilidad | Negativo puede indicar presión de costes o mezcla | No identifica la causa; debe usarse con precio, volumen y datos de producto |
| **Margen operativo Δ** | `OM_t − OM_(t−1)` | Observar cambio de eficiencia operativa | Un cambio negativo puede anticipar presión en beneficios | Partidas no recurrentes, reorganizaciones y estacionalidad pueden distorsionar |
| **Margen neto Δ** | `NM_t − NM_(t−1)` | Seguir la conversión final | Muestra el cambio después de impuestos y financiación | Puede cambiar por deuda, impuestos o partidas no operativas |
| **CFO / Net Income** | `Flujo operativo / beneficio neto` | Evaluar conversión de beneficios en efectivo | Cercano a 1 puede indicar buena conversión en muchos casos | Capital de trabajo, deterioro y partidas no recurrentes distorsionan; no existe umbral universal |
| **Calidad de beneficios** | Relación entre beneficio, CFO, FCF, ROIC y persistencia | Evaluar sostenibilidad del beneficio | Requiere triangulación, no un único ratio | Es un método cualitativo; puede fallar en ciclos de crecimiento o cambios de capital de trabajo |
| **Razón de devengo** | `(Beneficio neto − CFO) / activos totales medios` | Identificar beneficios no respaldados por caja en el periodo | Valores positivos pueden indicar mayor devengo | No siempre es mala noticia: el crecimiento puede justificar capital de trabajo |
| **Rotación de activos** | `Ingresos / activos totales medios` | Medir eficiencia de activos | Más alta sugiere más ingresos por activo, si el margen es comparable | Activos ociosos, valoraciones infladas y distinta intensidad de capital |
| **Rotación de activos fijos** | `Ingresos / PP&E neto medio` | Aislar capacidad productive | Evalúa la utilización de activos fijos | Depende de la edad del activo, subcontratación y arrendamientos |
| **Capital circulante operativo** | `Activos corrientes operativos − pasivos corrientes operativos` | Medir financiación del ciclo corto | Positivo puede requerir financiación | No incluye efectivo, deuda ni todas las obligaciones; cambia con la estacionalidad |
| **Rotación de capital circulante** | `Ingresos / NWC operativo medio` | Medir eficiencia del capital de trabajo | Alta rotación reduce la financiación necesaria por venta | Un capital de trabajo negativo puede ser eficiente o indicar que proveedores financian la empresa |

## 31.4 Flujo de caja, liquidez y ciclo de conversión

| Indicador | Fórmula | Para qué sirve | Interpretación | Limitaciones |
|---|---|---|---|---|
| **CFO** | `Beneficio neto consolidado + cargos no monetarios − ΔNWC ± ajustes operativos` | Medir efectivo generado por operación | Positivo es condición necesaria, no suficiente, para calidad | `ΔNWC=NWC_t−NWC_(t−1)`; los intereses pueden estar en CFO o CFF según norma y política; NCI y estacionalidad importan |
| **CFO Growth** | `CFO_t / CFO_(t−1) − 1` | Verificar si la caja sigue a los beneficios | Positivo indica expansión de caja, si hay base comparable | El capital de trabajo puede hacer que un año crezca y otro caiga |
| **Capex** | `CapEx tangible neto = compras tangibles − ventas de activos tangibles`; `CapEx amplio neto = compras tangibles + intangibles − ventas de activos`; CapEx bruto no resta ventas | Medir inversión necesaria | Alto Capex puede permitir crecimiento o ser una carga | Mantenimiento frente a expansión; no siempre produce retornos; los arrendamientos y adquisiciones deben separarse |
| **Capex intensity** | `Capex / Ingresos` | Comparar necesidad de inversión | Alta intensidad suele indicar más capital por venta | Sectores y ciclos diferentes; las adquisiciones pueden distorsionar |
| **FCF histórico apalancado** | `CFO − CapEx`; el CFO puede incluir intereses pagados | Medir caja histórica después de la inversión | No es FCFF ni FCFE puros; el rendimiento debe conservar esa etiqueta | La clasificación de intereses, deuda, CapEx, leases y periodo debe documentarse |
| **FCFF** | `EBIT(1−T) + D&A − Capex − ΔNWC` | Valorar el negocio con WACC | Representa flujo antes del servicio de deuda | Depende de proyección, impuestos, Capex y capital de trabajo; no es dividendo disponible |
| **FCFE** | Aproximación: `NI común + D&A + otros no monetarios − CapEx − ΔNWC + deuda emitida − deuda repagada + equity emitido − recompras ± otros flujos financieros` | Valorar el patrimonio con `K_e` | Flujo después del servicio y movimientos de financiación | La fórmula depende de qué flujos ya estén incluidos; no restar deuda después |
| **FCF margin** | `FCF / Ingresos`, indicando si es histórico, FCFF o FCFE | Normalizar caja libre por escala | Indica conversión de ventas en caja bajo una definición | La elección de flujo y el sector cambian la lectura |
| **FCF yield histórico** | `FCF histórico apalancado / capitalización` | Relacionar flujo histórico con equity | Ratio descriptivo, no cobertura exacta del accionista | No mezclar con `FCFF/EV`; el CFO–CapEx no incorpora necesariamente movimientos de deuda |
| **FCFE yield** | `FCFE / capitalización` | Relacionar flujo disponible para accionistas con equity | Coherente con valor del patrimonio | Requiere movimientos de deuda, equity, leases y acciones diluidas |
| **FCFF yield** | `FCFF / EV` | Relacionar flujo operativo con valor empresa | Coherente con DCF de empresa | Muy sensible a EV, WACC, g, márgenes y crecimiento terminal |
| **FCF conversion** | `FCF / beneficio neto` o `FCF / EBITDA`, indicando denominador | Medir conversión de beneficio o EBITDA | Cercano a 1 puede ser sano en muchas operaciones | Una conversión alta por liberación de capital de trabajo no es necesariamente recurrente |
| **NWC** | `Activos corrientes operativos − pasivos corrientes operativos` | Medir capital de trabajo | Los cambios consumen o liberan caja | No todos los pasivos son operativos; la clasificación es específica |
| **Current ratio** | `Activos corrientes / pasivos corrientes` | Medir cobertura de corto plazo | Por encima de 1 indica cobertura en términos brutos | No mide calidad ni vencimiento; puede esconder inventario ilíquido y refinanciación |
| **Quick ratio** | `(Efectivo + inversiones a corto plazo + cuentas por cobrar) / pasivos corrientes` | Excluir inventarios de la cobertura | Mide liquidez de forma más conservadora | Las definiciones de activos líquidos y cuentas deudores varían |
| **Cash ratio** | `Efectivo y equivalentes / pasivos corrientes` | Medir cobertura con efectivo | Muestra colchón inmediato | Puede ser bajo en negocios con ciclo de cobro rápido y no mide acceso a crédito |
| **Inventory turnover** | `COGS / inventario medio` | Medir velocidad de inventario | Alta rotación puede indicar eficiencia o faltantes | Estacionalidad, existencias obsoletas, provisiones y precios distorsionan |
| **DIO / Días de inventario** | `365 × inventario medio / COGS` | Expresar inventario en días | Más días pueden dar mejor servicio, no solo peor eficiencia | Suministro, existencias de seguridad, obsolescencia y demanda variable |
| **Receivables turnover** | `Ventas netas a crédito / cuentas por cobrar medias` | Medir velocidad de cobro | Alta rotación suele implicar cobro relativo más rápido | Ventas a crédito, anticipos y cancelaciones cambian el resultado |
| **DSO / Días de cobro** | `365 × cuentas por cobrar medias / ventas netas a crédito` | Expresar cobro en días | Más días elevan la financiación necesaria | Condiciones, cobranza, impuestos y estacionalidad |
| **Payables turnover** | `compras / cuentas por pagar comerciales medias`; `compras = COGS + inventario final − inventario inicial` antes de ajustes | Medir uso de crédito de proveedores | Más rotación puede liberar caja o indicar presión de pago | Si sólo se dispone de COGS, etiquetar como aproximación; no mezclar facturas de capital, impuestos o partes relacionadas |
| **DPO / Días de pago** | `365 × cuentas por pagar comerciales medias / compras` | Expresar crédito de proveedores en días | Más días pueden mejorar liquidez pero aumentar riesgo | No usar COGS sin ajuste de inventario; separar proveedores, anticipos y facturas de capital |
| **Cash Conversion Cycle / CCC** | `DIO + DSO − DPO` | Medir días de caja inmovilizada | Un CCC menor suele reducir la necesidad de NWC | Estacionalidad, anticipos, pagos anticipados de clientes y negocios mixtos |
| **Cash conversion** | `CFO / EBITDA` o variante | Ver si EBITDA llega a efectivo | Alto suele indicar mejor conversión, si no hay una liberación puntual | Depende de la definición; no reemplaza FCF |

## 31.5 Estructura de capital y riesgo crediticio

| Indicador | Fórmula | Para qué sirve | Interpretación | Limitaciones |
|---|---|---|---|---|
| **Deuda bruta** | Deuda que paga interés y financia la operación | Dimensionar obligaciones | Más deuda puede aumentar capacidad y riesgo | No identifica vencimiento, moneda, garantías ni deuda a corto plazo |
| **Deuda neta** | `Deuda bruta − efectivo − inversiones líquidas`, con criterio explícito | Medir obligaciones netas | Útil para EV y solvencia | El efectivo restringido y las inversiones no son equivalentes a efectivo libre |
| **Deuda/Capital propio** | `Deuda bruta / patrimonio total` | Medir apalancamiento contable | Alta razón indica deuda relativa al patrimonio | Un patrimonio negativo hace el ratio inútil; no distingue coste o vencimiento de la deuda |
| **Deuda neta/Capital propio** | `Deuda neta / patrimonio` | Medir apalancamiento neto | Reduce el efecto del efectivo | Patrimonio negativo; no recoge todos los compromisos fuera de balance ni arrendamientos |
| **Deuda/Activos** | `Deuda bruta / activos totales` | Medir financiación mediante deuda | Alta razón puede ser normal para el sector o un indicio de apalancamiento | Activos escritos, fondo de comercio y normas contables limitan la comparación |
| **Capital propio/Activos** | `Patrimonio / activos` | Medir capitalización | Complementa el análisis de solvencia | No aparecen liquidez ni valor de mercado de los activos |
| **Debt/EBITDA** | `Deuda bruta / EBITDA` | Comparar apalancamiento operativo | Menor suele dar más flexibilidad si EBITDA es estable | EBITDA puede ser temporal; el tratamiento de arrendamientos y preferentes varía |
| **Net Debt/EBITDA** | `Deuda neta / EBITDA` | Medir apalancamiento neto | Ajusta la deuda al efectivo | El efectivo puede ser necesario para operar; los ratios son cíclicos |
| **Deuda/FCF** | `Deuda bruta / FCF` | Medir años de flujo de caja | Menor puede implicar más flexibilidad de refinanciación | FCF volátil, dependiente de la definición y con vencimientos distintos |
| **Deuda/EBIT** | `Deuda bruta / EBIT` | Evitar el ajuste de D&A del EBITDA | Útil si Capex es alto | EBIT puede ser negativo; no captura Capex |
| **Interés Coverage** | `EBIT / gasto de intereses en efectivo` | Medir capacidad de pagar intereses | Una cobertura mayor suele dar más margen | EBIT e intereses pueden pertenecer a períodos distintos; deuda fija y variable |
| **Fixed Charge Coverage** | `(EBIT + gasto de arrendamiento − dividendos preferentes) / (intereses + principal que vence)` | Incluir cargos fijos y deuda amortizante | Indica capacidad de cubrir obligaciones fijas | Las definiciones de arrendamiento, principal y preferentes varían; no cubre toda deuda |
| **Multiplicador de patrimonio (equity multiplier)** | `Activos totales / patrimonio atribuido` | Descomponer el efecto del apalancamiento sobre ROE | Mide cuántas unidades de activos se financian por unidad de patrimonio | No es cobertura de intereses ni mide coste, vencimiento o riesgo de refinanciación |
| **Interest coverage** | `EBIT / gasto de intereses` | Medir cobertura del servicio de intereses | Mide capacidad operativa, no multiplicador patrimonial | EBIT, intereses y periodos deben ser comparables; no sustituye DSCR |
| **Credit spread / prima de riesgo crediticio** | `Rendimiento de crédito − referencia comparable` | Medir compensación por riesgo crediticio | Un diferencial mayor suele compensar mayor riesgo | Liquidez, opciones de recompra anticipada, cláusulas financieras y expectativas de default influyen |
| **Covenant** | Condición máxima de un contrato de deuda | Medir restricción de financiación | El incumplimiento puede activar amortización acelerada | No captura toda la liquidez; la definición contractual es específica |
| **Refinanciación risk** | `Deuda a vencer / fuentes de liquidez disponibles` | Medir necesidad de emitir o refinanciar | Alto riesgo si vencen sin efectivo | Incluye condiciones de mercado, cláusulas financieras y cambios de tipos |
| **Default risk** | Probabilidad de incumplimiento | Evaluar solvencia | No se reduce a un único ratio | Modelos, rating, ciclos y documentos legales son determinantes |

## 31.6 Valoración por múltiplos, rendimiento y distribución

| Indicador | Fórmula | Para qué sirve | Interpretación | Limitaciones |
|---|---|---|---|---|
| **Capitalización bursátil** | `Precio × acciones en circulación` | Valorar el patrimonio público | Es el precio agregado de las acciones | No incluye deuda; puede reflejar iliquidez o prima de control |
| **Valor empresa (EV)** | `Capitalización + deuda remunerada + preferentes + NCI + obligaciones semejantes a deuda − efectivo e inversiones no operativas` | Comparar valor operativo con deuda y caja | Neutraliza aproximadamente la estructura de capital | El tratamiento de arrendamientos, pensiones, empresas conjuntos, adquisiciones e inversiones debe ser consistente con el denominador |
| **P/E** | `Capitalización / beneficio neto` o `Precio / EPS` | Valorar beneficios del patrimonio | Menor suele indicar menor precio relativo, si riesgo y crecimiento son comparables | Beneficios negativos = NM; ciclos, partidas no recurrentes y contabilidad |
| **Forward P/E** | `Precio / EPS futuro` | Valorar beneficios esperados | Permite mirar el denominador futuro, no el realizado | Depende de proyecciones; el mismo “forward” puede usar supuestos distintos |
| **PEG** | `Forward P/E / crecimiento esperado del EPS en porcentaje` | Ajustar P/E al crecimiento | Menor puede indicar crecimiento no excesivamente caro | No controla calidad del crecimiento, intensidad de capital ni riesgo |
| **P/B** | `Capitalización / patrimonio común` o `Precio / BVPS` | Valorar capital contable | Útil para bancos y empresas con muchos activos | El valor contable no es valor razonable; intangibles, deterioro y patrimonio negativo limitan |
| **P/S** | `Capitalización / Ingresos` | Valorar escala antes del beneficio | Útil para empresas con beneficios bajos o negativos | Ignora capital, margen, impuestos y estructuras de costes distintas |
| **P/CF** | `Capitalización / CFO` | Valorar flujo operativo | Puede ser más estable que P/E en ciertos períodos | El CFO puede variar por el momento del cobro y pago; no se resta Capex |
| **P/FCF** | `Capitalización / FCF` | Valorar flujo libre | Relación precio/FCF, complementaria al rendimiento | FCF negativo o definición distinta producen NM; ciclo y capital de trabajo importan |
| **EV/Ingresos** | `EV / Ingresos` | Comparar escala operativa con EV neutral | Útil antes de la rentabilidad | No refleja margen, eficiencia de capital ni conversión de caja |
| **EV/EBITDA** | `EV / EBITDA` | Comparar capacidad operativa antes de financiación | Múltiplo habitual para comparaciones con apalancamiento | EBITDA ignora Capex, capital de trabajo, impuestos y calidad; la D&A contable importa |
| **EV/EBIT** | `EV / EBIT` | Reflejar coste de capital operativo | Más exigente que EV/EBITDA si la D&A es económicamente sustancial | EBIT negativo, arrendamientos, reestructuración e intensidad de capital |
| **EV/Invested Capital** | `EV / capital invertido medio` | Valorar capital operativo | Relaciona valor con capacidad productiva | La definición de capital varía; fondo de comercio y prima de adquisición |
| **Earnings yield** | `Beneficio disponible para comunes / capitalización = EPS / precio` | Invertir P/E | Mayor indica menor precio por beneficio, no rendimiento sin riesgo | No incluye riesgo, crecimiento ni capital; puede ser engañoso con beneficios cíclicos |
| **Sales yield** | `Ingresos / capitalización` | Invertir P/S | Mide ingreso por peso del patrimonio | No equivale a rentabilidad ni a caja |
| **FCF yield histórico** | `FCF histórico apalancado / capitalización` | Relacionar caja histórica con equity | Ratio descriptivo, no rendimiento de FCFE | No mezclar con `FCFE/capitalización` o `FCFF/EV`; declarar flujo, denominador y periodo |
| **Dividend Yield** | `Dividendos anuales / capitalización = DPS / precio` | Medir distribución respecto del precio | Es ingreso potencial, no retorno total | Recortes, dividendos especiales, impuestos, retención y sostenibilidad |
| **Payout Ratio** | `Dividendos / beneficio disponible para comunes` o `DPS / EPS` | Evaluar política de distribución | Menor conserva más capital; mayor paga más ahora | No revela sostenibilidad; más de 100 % puede usar reservas o deuda; no mezclar beneficio consolidado |
| **Retention Ratio** | `1 − payout ratio` | Medir proporción de beneficios retenida | Indica financiación interna | La política de dividendos puede cambiar; las recompras no son dividendos |
| **Precio de compra implícito** | `Porcentaje de propiedad deseado × valor del patrimonio` | Calcular precio para un objetivo de propiedad | Traduce valor total a precio por acción | No incluye prima de control, descuento por minoría, costes ni impuestos |
| **Price target** | Valor intrínseco, NAV, múltiplo o escenario ponderado | Expresar una hipótesis de valor razonable | Solo debe publicarse con supuestos y horizonte | No es predicción ni garantía; cambia con nueva evidencia |
| **Upside/downside** | `Price target / precio actual − 1` | Traducir valor a variación potencial | Positivo indica prima potencial en el escenario | No es retorno total; no incorpora tiempo, dividendos ni probabilidad |
| **Diferencia de múltiplo relativo** | `Múltiplo objetivo − múltiplo de referencia` o ratio entre ambos | Comparar con sector o historia | Puede revelar prima o descuento | Requiere pares, fecha, contabilidad, riesgo y crecimiento comparables |
## 31.7 DCF, WACC y valor terminal

| Indicador o concepto | Fórmula | Para qué sirve | Interpretación | Limitaciones |
|---|---|---|---|---|
| **DCF** | `PV(FCF explícitos) + PV(valor terminal)`, con puente a equity | Valorar según flujos futuros | Es un resultado condicionado a supuestos, no un hecho | Pronóstico, WACC, terminal y estructura pueden ser muy sensibles |
| **WACC** | `(E/(D+E))×K_e + (D/(D+E))×K_d×(1−T)` | Descontar FCFF | Menor WACC, en igualdad de otros supuestos, aumenta el DCF | Pesos y costes de capital deben ser comparables; el escudo fiscal de deuda puede ser limitado |
| **Coste del patrimonio (`K_e`)** | `R_f + β×ERP`, o el modelo requerido | Coste del patrimonio para WACC/CAPM | Mínimo requerido por mantener capital propio | La beta estimada tiene error; tamaño, país, liquidez y prima de apalancamiento pueden faltar |
| **CAPM** | `E[R_i] = R_f + β_i(E[R_m]−R_f)` | Estimar el retorno requerido | Expresa una prima de riesgo de mercado | No modela todos los riesgos; la beta puede cambiar y no predice crisis |
| **Tasa libre de riesgo** | Rendimiento de un instrumento soberano con plazo y moneda comparables | Anclar el descuento | Debe ser nominal, del mismo plazo y moneda | Cambia en el tiempo; no es libre de riesgo para cualquier emisor |
| **Equity Risk Premium (ERP)** | Prima esperada del mercado sobre el activo libre de riesgo | Capturar prima de mercado | Es un supuesto, no un hecho medible | Metodología, periodo, país, moneda y riesgo de cola influyen |
| **Beta** | `Cov(R_i,R_m)/Var(R_m)`, o beta de industria | Medir sensibilidad al mercado | Mayor beta implica mayor sensibilidad según CAPM | Frecuencia, índices, ventana de estimación, crisis y apalancamiento limitan |
| **Coste de deuda** | Rendimiento esperado o coste marginal de la deuda | Descontar deuda y estimar WACC | Debe reflejar riesgo, vencimiento, rango y cláusulas financieras | El rendimiento histórico no es el coste marginal; pueden existir opciones contingentes |
| **Impuesto shield** | `T × gasto de intereses` como aproximación | Reflejar el efecto fiscal de la deuda | Puede reducir el coste después de impuestos de la deuda | No siempre es realizable; límites, pérdidas fiscales y jurisdicciones importan |
| **Crecimiento terminal (`g`)** | Crecimiento nominal de FCF después del horizonte, a perpetuidad | Extender el flujo más allá de la proyección | Debe ser menor que WACC y sostenible | No puede suponerse igual al crecimiento de Ingresos sin verificar márgenes y reinversión |
| **FCF proyectado** | FCFF_t según FCF del año anterior y crecimiento supuesto | Construir el flujo explícito | Las proyecciones deben estar conectadas con el negocio y la reinversión | Es el supuesto de entrada más subjetivo; no confundir proyección con histórico |
| **Valor terminal** | `FCFF_(n+1)/(WACC−g)` para FCFF; `FCFE_(n+1)/(K_e−g)` para FCFE | Capturar el valor posterior a la proyección | Si domina el EV, el DCF es muy frágil | Supone perpetuidad y economía estable; no modela crisis ni agotamiento |
| **PV de FCF explícitos** | `Σ FCF_t/(1+WACC)^t` | Valorar los años 1–n | Suma de flujos descontados | No considera bandas de incertidumbre; depende del momento y de la convención |
| **EV DCF** | `PV de FCF explícitos + PV del valor terminal` | Valorar la operación antes de financiación | Es un EV, no un valor del patrimonio | Puede no ser válido si FCFF no se usa de forma consistente |
| **Valor del patrimonio DCF** | `EV DCF − deuda bruta + efectivo − minoritarios − preferentes` | Llevar el EV al patrimonio | El resultado depende del puente de balance | Olvidar deuda o efectivo cambia el precio por acción; no todos los reclamantes están en EV |
| **Valor intrínseco por acción** | `Equity value / acciones totalmente diluidas` | Expresar un valor razonable por acción | Depende del escenario | No es precio de mercado ni precio mínimo; puede ser muy sensible |
| **Margen de seguridad** | `(valor intrínseco por acción − precio de mercado) / valor intrínseco por acción` | Medir la distancia entre precio e hipótesis de valor | Positivo indica descuento según esa IV | No mide probabilidad ni calidad; puede ser engañoso si la IV es errónea |
| **Reverse DCF** | Resolver crecimiento, WACC o FCF implícitos en el precio | Inferir expectativas del mercado | Útil para no esconder supuestos | Puede tener múltiples soluciones; no demuestra que el precio sea “correcto” |
| **Valor por escenario** | `Σ probabilidad_i × valor_i` | Incorporar alternativas | El resultado depende de probabilidades subjetivas | Las probabilidades no son frecuencias; deben justificarse |
| **Sensibilidad DCF** | Variar `WACC`, `g`, márgenes, Capex y crecimiento | Mostrar un rango, no un punto único | Un rango amplio indica incertidumbre | No cubre todos los riesgos ni cambios de régimen |
| **Duración efectiva / convexidad / OAS** | Aproximaciones de sensibilidad y opcionalidad para bonos; `OAS` es un spread opcional de mercado | Complementos para crédito con opción de compra y riesgo de opciones | No sustituyen YTM, deuda contractual y análisis de liquidez | Dependen del modelo; deben especificarse frecuencia, ejercicio, curva, liquidez y cancelabilidad |
| **Monte Carlo** | Repeticiones aleatorias de supuestos según distribuciones | Explorar combinaciones | Puede mostrar una distribución de frecuencias | Modelo, distribuciones, dependencias y tamaño de muestra importan; no elimina sesgos |
| **SOTP** | `Σ valor_segmento_i − deuda neta + activos no operativos` | Valorar segmentos con métricas distintas | Útil en conglomerados | Depende de proyecciones, descuentos por suma de partes y asignación de costes corporativos |
| **Valor de liquidación** | Valor presente de activos netos puestos en venta, con descuentos y pasivos | Estimar el descenso basado en activos | Importa cuando no se sostiene el principio de continuidad operativa | Costes de venta, impuestos, tiempo, prioridad legal y comportamiento de precios |
| **Valor de reposición** | Coste de reemplazar capacidad productiva equivalente | Estimar el valor de activos | Útil para fábricas o activos específicos | No captura intangibles, marca, conocimiento, regulación, localización o demanda |
| **Valor residual** | `Patrimonio contable + PV[(ROE−K_e) × patrimonio contable]` | Valorar por desviaciones de ROE | Puede funcionar con ROE volátil | Depende de la hipótesis de beneficios residuales, valor contable estable y coste del patrimonio |
| **Economic Value Added** | `NOPAT − WACC × capital invertido` | Medir creación de valor | Positivo indica un diferencial favorable según el modelo | Un periodo no equivale a valor terminal ni a caja realizada |

## 31.8 Riesgo, cartera y métricas de mercado

| Indicador | Fórmula | Para qué sirve | Interpretación | Limitaciones |
|---|---|---|---|---|
| **Retorno esperado** | `E(R_s) = Σ_s p_s R_s`, con `Σp_s=1` | Estimar retorno bajo escenarios | Es un promedio ponderado, no un retorno realizado | Las probabilidades son supuestos; deben coincidir frecuencia, moneda y horizonte |
| **Varianza de retornos** | `Var(R) = E[(R−E(R))²]`; en una muestra, `Σ(R−R̄)²/(n−1)` | Medir dispersión cuadrática | Cuantifica incertidumbre alrededor del retorno medio | Valores extremos, laza de la muestra, frecuencia y Normalidad importan; no mezclar unidades con pp |
| **Desviación estándar** | `σ(R)=√Var(R)` | Expresar dispersión en las mismas unidades que el retorno | Positiva y comparable sólo con misma frecuencia y periodo | No captura toda la cola, liquidez o cambios de régimen |
| **Volatilidad** | `σ(r)` o desviación estándar de rentabilidades | Medir dispersión de rentabilidades | Mayor suele implicar más incertidumbre | Depende de frecuencia, valores extremos, distribución de cola y definición del activo sin riesgo |
| **Downside deviation** | `DD = √[Σ_s p_s · min(R_s − MAR, 0)²]` | Capturar sólo el riesgo de bajada respecto de un MAR | Útil cuando el riesgo de bajar es el foco | No captura toda la volatilidad ni la cola; MAR, probabilidades y frecuencia deben fijarse |
| **VaR** | Percentil de pérdida a un nivel y horizonte | Estimar pérdida en un percentil | “Máxima” no garantizada; el VaR puede ignorar la cola | No dice qué pérdida media ocurre cuando se supera; depende del modelo |
| **Expected Shortfall / CVaR** | Promedio condicional de pérdidas en el peor `α` de escenarios | Medir riesgo de cola | Incluye severidad condicional más allá del VaR | Necesita probabilidades de escenarios y supuestos de liquidez; tiene riesgo de modelo |
| **Covarianza** | `Cov(r_i,r_j)` | Medir movimiento conjunto | Positiva sugiere que se mueven en la misma dirección | No elimina no linealidad y depende del periodo y de la frecuencia |
| **Correlación** | `Cov/σ_iσ_j` | Medir diversificación | Menor correlación suele reducir la diversificación de dos activos | No garantiza diversificación en crisis; las correlaciones pueden aumentar |
| **Beta de cartera** | `w'β` | Medir sensibilidad de cartera | Similar a la suma de pesos por betas individuales | No captura todo el riesgo no lineal |
| **Alpha de cartera** | `R_p − [R_f + β_p(R_m−R_f)]` | Separar retorno de exposición | Un alpha histórico positivo puede indicar valor añadido | Minería de datos, costes, riesgo y suerte pueden confundirse con habilidad |
| **Sharpe** | `(R_p−R_f)/σ_p` | Medir retorno exceso por riesgo | Mayor suele indicar mejor ratio en el mismo periodo | `R_f` y `σ_p` deben usar el mismo horizonte y frecuencia; no mezclar con `σ(R_p−R_f)` sin convención |
| **Sortino** | `(R_p−MAR)/downside deviation` | Medir retorno por riesgo de bajada | Útil si el riesgo de bajar es el foco | No modela volatilidad alcista ni cola más allá del MAR elegido |
| **Caída máxima** | Máxima caída desde máximo anterior hasta mínimo posterior | Medir la peor caída entre máximos y mínimos | Negativo representa severidad | Depende de la ventana y no resume frecuencia ni recuperación |
| **Tracking error** | `σ(R_p−R_benchmark)` | Medir desviación respecto del benchmark | Menor puede indicar réplica más estable | No mide éxito absoluto ni riesgo asimétrico |
| **Information ratio** | `Retorno exceso / error de seguimiento` | Medir retorno activo por riesgo activo | Mayor denota mejor eficiencia según el modelo | Depende del índice de referencia y del modelo de costes; no garantiza futuro |
| **Benchmark** | Índice o cartera de referencia | Contextualizar el rendimiento | Permite separar retorno de exposición | El índice de referencia adecuado depende de la clase de activo, el riesgo y el objetivo |
| **Diversificación** | Combinación de activos con diferentes motores de riesgo | Reducir concentración | Puede mejorar estabilidad, no retorno garantizado | Las correlaciones cambian y pueden aparecer restricciones de liquidez |
| **Riesgo de liquidez** | Volumen, bid-ask spread, días para liquidar y fuentes de efectivo | Medir capacidad de realizar posiciones | Menor liquidez puede elevar el descuento y los costes de venta forzosa | Profundidad de mercado, límites y concentración de propiedad importan |
| **Riesgo cambiario** | Exposición por moneda y cambio potencial | Medir impacto del tipo de cambio | Puede cambiar Ingresos, costes, deuda y valoración juntos | Cobertura, transferencia de precios y contabilidad son específicos de cada empresa |
| **Riesgo de tipos de interés** | Sensibilidad de ingresos, deuda y múltiplos a los tipos | Medir impacto de las tasas | Mayor deuda, refinanciación o duración puede aumentar sensibilidad | Mezcla de tipos fijo/variable, curva de rendimientos y retraso de la reprecificación |

## 31.9 Fórmulas transversales de control

Estas fórmulas no son indicadores de calidad por sí solas, pero evitan errores de recálculo y hacen auditable el trabajo:

| Control | Fórmula | Resultado esperado | Limitación principal |
|---|---|---|---|
| **Duplicación de EV** | `EV = Market cap + Debt + Preferred + NCI + otras obligaciones − Cash` | Igual al valor usado en EV/EBITDA | Solo si se usa el mismo puente de deuda, preferentes, NCI, otras obligaciones y efectivo |
| **Identidad de FCFF** | `FCFF = NOPAT + D&A − Capex − ΔNWC` | Debe coincidir con el FCFF normalizado, no con el FCF histórico `CFO−CapEx` | Cambia si se define otra base de EBIT, impuestos, Capex o capital circulante |
| **Puente DCF** | `Equity value = EV − Debt − Preferred − NCI − otras obligaciones + Cash` | EV DCF y valor por acción reconciliables | Debe usar el mismo corte, moneda y perímetro; no restar deuda dos veces |
| **Identidad de TV** | `TV = FCFF_(n+1)/(WACC−g)` para FCFF; `FCFE_(n+1)/(K_e−g)` para FCFE | Coherente con el modelo de perpetuidad | Inestable cuando la tasa de descuento se aproxima a `g` |
| **Identidad de MoS** | `(IV − Price) / IV` | Puede ser positivo, cero o negativo | MoS no es probabilidad ni garantía |
| **Identidad de unidades** | `USD m / acciones m = USD/acción` | EPS y BVPS correctamente dimensionados | No mezclar acciones básicas y diluidas |
| **Identidad porcentual** | `100 × numerador / denominador` | Resultado expresado en % | Usar `pp` para diferencias de porcentajes |
| **Identidad de redondeo** | `Mostrado = round(calculado, 2)` | Puede no sumar exactamente por redondeo | No corregir la fuente con ajustes arbitrarios |
| **Identidad NM** | Política por indicador: P/E, P/B, PEG y payout sin sentido económico pueden ser NM; Net Debt/EBITDA negativo es válido y significa net cash; FCF yield negativo es información válida | Evita etiquetas que ocultan el signo o la causa | No aplicar una regla global de denominador ≤0 ni sustituir NM por cero |
| **Identidad de fuente** | `Fuente + fecha + unidades + supuesto` | Permite auditar cada cifra | Una fuente sintética no es evidencia de una entidad real |

---

## 31.10 Fórmulas adicionales de estados, ratios y capital

Esta sección completa la tabla con fórmulas que aparecen en los capítulos 1–4, 9–20 y 26–29 y que no deben quedar implícitas en una tabla maestra. Si un indicador ya aparece antes, se conserva aquí la definición específica de su capítulo.

| Indicador | Fórmula | Para qué sirve | Interpretación | Limitaciones |
|---|---|---|---|---|
| **Ecuación de balance** | `Activos = Pasivos + Patrimonio` | Comprobar la integridad del estado de posición | La igualdad debe cumplirse en la misma fecha y perímetro | No demuestra liquidez, calidad de activos ni solvencia |
| **NWC operativo** | `Activos corrientes operativos − pasivos corrientes operativos` | Medir recursos inmovilizados en el ciclo comercial | Un aumento puede consumir caja durante el crecimiento | Excluye efectivo y deuda con interés; cambia con la estacionalidad |
| **Efectivo y equivalentes** | `Efectivo + depósitos a la vista + inversiones con vencimiento próximo y riesgo de valor insignificante` | Identificar recursos inmediatamente disponibles | Una cifra mayor puede mejorar la liquidez, pero también indicar capital infrautilizado | No incluye necesariamente fondos de terceros ni efectivo restringido |
| **Cuentas por cobrar netas** | `Cuentas por cobrar brutas − provisión por pérdidas crediticias` | Medir ventas pendientes de cobro después de la pérdida esperada | Refleja crédito comercial y riesgo de cobro | La antigüedad, concentración y cobranza real importan más que el saldo |
| **Inventario neto** | `Inventario bruto − provisión por obsolescencia o menor valor realizable` | Medir existencias y exposición al deterioro | Un saldo neto más alto no siempre es mejor | Método de coste, rotación, obsolescencia y demanda variable |
| **DIO** | `Inventario neto medio / COGS × días` o `365 / rotación de inventario` | Expresar inventario en días de coste | Más días pueden dar servicio o inmovilizar capital | No funciona igual con estacionalidad, productos obsoletos o precios de materias primas |
| **PP&E neto** | `PP&E bruto − depreciación acumulada − deterioro` | Medir capacidad productiva en libros | Un valor alto puede ser capacidad o capital ocioso | No es valor de mercado ni coste de reposición; arrendamientos y subcontratación cambian la lectura |
| **Amortización lineal** | `Cargo anual ≈ (costo no residual − valor residual) / vida útil` | Distribuir el consumo económico de intangibles o activos | Una asignación menor o mayor cambia el beneficio y el EBITDA | La vida útil y el valor residual son estimaciones; el deterioro puede anular el efecto |
| **Fondo de comercio** | `Consideración de compra − valor razonable neto de activos identificables y pasivos adquiridos` | Medir la diferencia de precio en una combinación de negocios | No es efectivo ni activo tangible separable | Puede reflejar sobreprecio y deterioro; no se compara sin adquirir operaciones |
| **Movimiento del patrimonio** | `Patrimonio final = Patrimonio inicial + beneficio + OCI + aportes − dividendos − recompras ± ajustes` | Conciliar cambios del patrimonio | Permite ver financiación, retención y distribución | No es valor de mercado; OCI, NCI y recompras requieren desglose |
| **Ingresos neto** | `Ventas − descuentos − devoluciones − rebates` | Medir ingresos netos reconocidos | Es la base de márgenes cuando el perímetro es homogéneo | Cobros, ingresos diferidos y reconocimiento contractual pueden diferir |
| **COGS** | `Coste de ventas atribuible a productos o servicios vendidos` | Calcular el beneficio bruto | Un COGS menor puede elevar el margen, pero también reflejar clasificación | La inclusión de transporte, mano de obra o servicios varía |
| **Operating Income** | `Beneficio bruto − SG&A − I+D − D&A ± partidas operativas` | Medir el EBIT operativo | Aísla el resultado antes de financiación en la mayoría de los casos | Reestructuraciones, ajustes y partidas no operativas cambian el EBIT normalizado |
| **Adjusted EBITDA** | `EBITDA + reestructuración + compensación en acciones + ajustes definidos` | Comparar capacidad operativa ajustada | Solo es válido si los ajustes son pertinentes y no recurrentes | Puede excluir costes económicamente necesarios; no sustituye un EBITDA reconciliado |
| **EBT** | `EBIT − gasto financiero neto + ingresos o pérdidas no operativas` | Medir el resultado antes de impuestos | La financiación y las partidas no operativas ya han influido en EBIT | Una tasa efectiva baja puede ser temporal; no medir calidad con ella |
| **Tasa fiscal efectiva** | `Impuesto sobre beneficios / EBT` | Verificar el efecto fiscal del resultado | Coherente con el resultado del mismo perímetro | Discrepancias, créditos, pérdidas y cambios de tasas distorsionan |
| **NI atribuible** | `Beneficio neto consolidado − asignación a NCI ± ajustes − dividendos preferentes, cuando corresponda` | Definir el beneficio disponible para acciones ordinarias | Es el numerador habitual de EPS y payout | No mezclar beneficio consolidado con el de la matriz; NCI no es interés financiero |
| **CFO** | `Beneficio neto consolidado + cargos no monetarios − ΔNWC ± ajustes operativos` | Medir el efectivo de las operaciones | Positivo es necesario, pero no suficiente, para la calidad | `ΔNWC=NWC_t−NWC_(t−1)`; clasificar intereses, impuestos y partidas no recurrentes; conciliar NCI y estacionalidad |
| **CFI** | `Entradas de inversión − salidas de inversión` | Ver entradas y salidas de inversión | Separa la financiación de la inversión, pero no siempre la calidad del Capex | Adquisiciones, ventas de activos y software pueden mezclarse |
| **CFF** | `Entradas de financiación − salidas de financiación` | Medir financiación y distribución | Positivo puede ser emisión o deuda; negativo puede ser amortización o distribución | No confundir cambio contable de deuda con flujo de efectivo |
| **CapEx neto** | `CapEx tangible neto = compras tangibles − ventas tangibles`; `CapEx amplio neto = compras tangibles + intangibles − ventas` | Ajustar la inversión a la salida neta de recursos | Puede reducir la inversión aparente por una venta puntual | No separa crecimiento, mantenimiento y activos no operativos |
| **FCF amplio** | `CFO − CapEx tangible − software capitalizado − inversiones no corrientes requeridas` | Capturar inversiones necesarias para el negocio | Reduce el flujo disponible para distribución | Exige identificar qué inversiones son realmente necesarias |
| **Cash conversion** | `CFO / beneficio neto`, `FCF / beneficio neto`, `CFO / EBITDA` o `FCF / EBITDA` | Evaluar conversión de beneficios o EBITDA en caja | Una relación cercana a 1 puede ser favorable en muchos casos | El capital de trabajo y las partidas no recurrentes distorsionan; hay que declarar denominador |
| **Owner Earnings** | `NI + D&A − CapEx de mantenimiento − ΔWC incremental requerido` | Estimar efectivo retirable sin reducir capacidad | Compara capacidad de distribución con inversión necesaria | El mantenimiento y el capital circulante incremental son estimaciones |
| **Graham number** | `√(22,5 × EPS × BVPS)` | Filtro heurístico de valor normalizado | No es un valor intrínseco ni una regla universal | Depende de EPS y BVPS positivos; omite calidad, deuda, riesgo y crecimiento |
| **Crecimiento sostenible** | `b=reinversión neta/NOPAT`; `g≈b×r_nuevo` en estado estable | Estimar crecimiento financiable con retención | `r_nuevo` es el retorno del capital inicial o reinvertido | No usar automáticamente ROIC con saldos medios; depende de márgenes, capacidad, capital de trabajo y operación |
| **ROCE** | `EBIT / capital empleado medio` o `EBIT×(1−T) / capital empleado medio` | Medir retorno del capital de largo plazo | Complementa ROIC, pero usa otra base de capital | La definición `activos totales − pasivos corrientes` puede incluir efectivo y no ser comparable |
| **Asset Turnover** | `Ingresos / activos totales medios` | Medir ingresos por activo | Mayor suele sugerir mayor eficiencia, si el margen es comparable | Activos ociosos, intangibles, bancos y operaciones reguladas requieren adaptación |
| **D/E** | `Deuda con interés / patrimonio atribuible` | Medir financiación mediante deuda | Alto puede amplificar ROE y riesgo | Patrimonio negativo hace el ratio inútil; no expresa coste ni vencimiento |
| **Debt-to-Assets** | `Deuda con interés / activos totales` | Medir proporción de activos financiada con deuda | Complementa solvencia y estructura de capital | Activos escritos, fondo de comercio y normas contables limitan la comparación |
| **DSCR** | `(CFADS − CapEx de mantenimiento) / (interés efectivo + principal programado)` | Medir capacidad de servicio de deuda | Mayor cobertura suele dar más margen contractual | No restar CapEx dos veces; CFADS, principal y calendario deben ser contractualmente correctos |
| **Retención de clientes** | `Clientes al final / clientes al inicio` | Medir conservación de una base | Más retención puede indicar mayor valor futuro | Se necesita una definición estable de cliente y una cohorte |
| **Churn** | `1 − retención` | Medir salidas de clientes o ingresos | Positivo representa abandono | No todas las salidas son pérdidas económicas; distinguir cancelaciones y reducciones |
| **Mix de ingresos recurrentes** | `Ingresos recurrentes / ingresos totales` | Describir proporción de ventas repetibles | Más recurrentes puede reducir incertidumbre de demanda | Contratos cortos, prepagos y renovaciones inciertas cambian la calidad |
| **Cuota de mercado** | `Ventas de la empresa / ventas del mercado definido` | Situar la escala en un mercado | Positivo indica participación, no rentabilidad | Denominador, geografía, canal y producto deben estar definidos |
| **Tasa de distribución de devoluciones** | `(Dividendos + recompras brutas) / FCF` | Medir cuánto FCF se devuelve | 60 % significa 0,60 u.m. de distribución por u.m. de FCF; no es cobertura | Si se desea cobertura, usar `FCF/(dividendos+recompras)`; FCF negativo o volátil requiere otra lectura |
| **Cambio neto del número de acciones** | `Acciones finales / acciones iniciales − 1` | Medir cambio de participación por emisión, recompra o ambos | Positivo es emisión neta/dilución; negativo es reducción neta | Dividir acciones, recompras, SBC y emisión condicional deben reconciliarse |
| **Insider ownership** | `Acciones de insider / acciones totales` | Describir propiedad de directivos o controladores | Puede indicar alineamiento | No prueba competencia ni decisiones futuras; definir insider y derechos de voto |
| **Acciones totalmente diluidas equivalentes** | `Acciones básicas + dilución potencial equivalente` | Usar una base coherente para Equity Value por acción | No es un simple recuento de opciones; requiere método y fecha | Opciones, convertibles, RSUs, acciones contingentes y tesorería requieren el método contable |
| **Cambio del precio realizado por cliente** | `P_1 / P_0 − 1` | Separar precio de volumen y mix | No es poder de precios sin revisar descuentos, mezcla y volumen | Las comparaciones deben ser por cliente y producto comparables |
| **Acciones recompradas** | `Caja utilizada / precio medio de recompra` | Estimar reducción de acciones | A mayor precio se compran menos acciones | Comisiones, acciones fraccionarias, restricciones y momento cambian el resultado |
| **Acreción o dilución del EPS** | `EPS posterior / EPS anterior − 1` | Medir efecto mecánico de recompra sobre beneficio por acción | Positivo no demuestra creación de valor | Debe ajustar caja perdida, coste de oportunidad, emisiones y beneficio comparable |
| **Buyback yield** | `Caja de recompra / capitalización previa` | Medir proporción de capitalización destinada a recompras | Alto no significa retorno ni buena ejecución | Puede reflejar una capitalización baja; anuncios no ejecutados no cuentan |
| **P/E de recompra** | `Precio pagado / EPS normalizado` | Comparar precio de recompra con beneficio | Un múltiplo menor puede ser favorable bajo supuestos | No incluye dilución, caja perdida, momento ni riesgo de ejecución |
| **Tasa de reinversión (RR)** | `Inversión neta / NOPAT`; `g≈RR×r_nuevo` | Medir proporción de NOPAT reinvertida | En equilibrio, sólo si el retorno es del capital inicial/reinvertido | Depende de capacidad, calidad del Capex, capital de trabajo y mantenimiento |
| **Pesos de capital** | `E/V = E/(E+D)`; `D/V = D/(E+D)` | Calcular pesos de WACC | La estructura objetivo debe ser coherente con el riesgo | No usar pesos históricos sin justificar objetivo, obligaciones semejantes a deuda y moneda |
| **Coste de deuda después de impuestos** | `Kd × (1−T)` | Incorporar el efecto fiscal aproximado al WACC | Reduce el coste nominal después de impuestos | El escudo fiscal puede no ser realizable; límites, pérdidas fiscales y jurisdicciones importan |
| **Varianza sistemática** | `β² × Var(Rm)`; fracción aproximada `β²×Var(Rm)/Var(Ri)` | Separar la varianza asociada al mercado de la total | Mide la parte sistemática bajo el modelo | No captura toda varianza, riesgo de cola, liquidez o eventos idiosincráticos |

## 31.11 Fórmulas de fundamentos, mercado, bonos y ETF

| Indicador | Fórmula | Para qué sirve | Interpretación | Limitaciones |
|---|---|---|---|---|
| **Rendimiento total de un periodo** | `(P₁ − P₀ + distribuciones − costes) / P₀` | Medir el resultado económico de una posición | Incluye precio, cobros y costes del periodo | Aportaciones, retiradas, frecuencias y precio frente a valor total deben documentarse |
| **Interés compuesto y FV** | `FV = PV×(1+r)^n` | Calcular el valor futuro de un capital | La capitalización hace crecer el resultado de forma compuesta | Tasa, frecuencia e inflación; no sustituye un plan de flujos variables |
| **Anualidad ordinaria** | `FV=A[(1+r)^n−1]/r` para `r≠0`; `FV=A n` si `r=0` | Calcular el valor futuro de aportes iguales al final de cada periodo | El capital inicial se suma aparte si existe | Calendario, frecuencia y signo de la tasa deben coincidir |
| **Anualidad anticipada** | `FV = A×[(1+r)^n−1]/r×(1+r)` | Calcular aportes iguales al inicio de cada periodo | Los aportes tienen un periodo adicional de capitalización | No usarla con aportes al final; el calendario cambia el resultado |
| **Tasa nominal y efectiva** | `r_efectiva=(1+r_periodo)^m−1`; inversa sólo para tasa efectiva anual `r_periodo=(1+r_efectiva)^(1/m)−1` | Comparar tasas con frecuencias distintas | La efectiva compone todos los periodos del año | No mezclar frecuencia, nominal/efectiva ni capitalización; no es rendimiento neto |
| **PV de un flujo** | `PV = FV/(1+r)^n` | Convertir un flujo futuro a moneda de hoy | Depende de tasa, moneda, fecha y signo | No descontar flujos ya ocurridos ni usar tasa nominal con flujo real |
| **Coste de capital propio / build-up** | `K_e=R_f+β_equity×ERP`; añadir prima país o específica sólo si no está embebida | Estimar la rentabilidad requerida del equity | Para FCFE se usa `K_e`; para FCFF se usa WACC | No llamar WACC a una tasa de equity; evitar doble conteo de prima |
| **Prima de riesgo total** | `rd − Rf`; prima de mercado `β×ERP` | Separar la compensación por riesgo | Mide prima, no flujo garantizado | La prima depende de país, moneda, periodo y método |
| **Fisher exacta** | `1+r_real=(1+r_nom)/(1+inflación)`; `r_real=(1+r_nom)/(1+π)−1` | Medir poder de compra | Evita el error acumulado de la aproximación | Usar inflación del mismo periodo y moneda; impuestos y costes aparte |
| **Fisher aproximada** | `r_real ≈ r_nom − π` | Estimación rápida | Aceptable solo con tasas moderadas | No usar para alta precisión o periodos largos sin la fórmula exacta |
| **Sensibilidad de tasa al PV** | `ΔPV/PV ≈ −D_mod×Δy`; alternativamente `≈ −D_Mac×Δy/(1+y/m)` | Estimar la respuesta mecánica a un cambio de tasa | Un aumento de tasas reduce el PV, todo lo demás igual | No aplicar dos veces el denominador; recalcular para saltos grandes y cambios de spread |
| **Volatilidad anualizada** | `s = [Σ(Rt−R̄)^2/(n−1)]^(1/2)`; `σ_a=s√k` | Estandarizar la dispersión por frecuencia | Más volatilidad significa más dispersión, no una pérdida garantizada | Muestras pequeñas, retornos no normales y crisis invalidan la estimación |
| **Covarianza de cartera** | `Σ_iΣ_j w_iw_j Cov(R_i,R_j)` | Capturar dependencia entre activos | Correlaciones altas elevan el riesgo conjunto | No captura no linealidades, cambios de régimen ni liquidez |
| **Retorno esperado de cartera** | `E(Rp)=Σ_i w_iE(R_i)` | Mostrar el retorno esperado como promedio ponderado | Pesos, covarianzas y supuestos deben tener la misma fecha | Las expectativas no son retornos realizados; el apalancamiento y el efectivo alteran el resultado |
| **Retorno realizado ponderado** | `Rp=Σ_i w_(i,0) R_i` o retorno ponderado en el tiempo | Medir el resultado del periodo con pesos | Debe distinguir los pesos iniciales del rebalanceo | Aportaciones, flujos de efectivo y rebalanceo requieren tratamiento por fecha |
| **Desviación estándar de cartera** | `σp=√[Σ_i w_i²σ_i²+2Σ_i<j w_iw_jρ_ijσ_iσ_j]` | Medir el riesgo total aproximado | Valores menores indican menos dispersión, no ausencia de pérdidas | Correlaciones inestables; se ignoran riesgo de cola y no linealidades |
| **Rebalanceo** | `w_objetivo = valor objetivo / valor total; w_nuevo = w_actual + flujo + operación` | Restaurar pesos objetivo después de la deriva o de nuevos flujos | Hace explícitas las reglas, pero no es automáticamente óptimo | Impuestos, diferencial, liquidez y costes de oportunidad; no hay pesos universales |
| **Inflación** | `(Índice de precios final / índice de precios inicial)−1` | Medir el cambio general de precios | Reduce el poder de compra real de los flujos nominales | IPC o deflactor, país, periodo base y expectativas importan |
| **Rendimiento real aproximado** | `r_real ≈ r_nominal − inflación` | Ajuste rápido del poder de compra | Útil como aproximación inicial | Preferir Fisher exacto cuando inflación o retornos son altos |
| **Rendimiento por tipo de cambio** | `R_FX = C₁/C₀−1`; `R_USD=(1+R_local)(1+R_FX)−1` | Convertir el retorno local a la moneda del inversor | Componer retornos, no sumarlos | Dirección de cotización, transferencia de precios, cobertura, fiscalidad y restricciones importan |
| **Cupón de bono** | Pago anual `C=F×c_N`; pago periódico `C/m` si hay `m` pagos, con `c_N` tasa nominal anual | Medir el pago contractual de efectivo | La tasa de cupón no es el retorno total | Rescate anticipado, escalones, incumplimiento, precio y reinversión cambian el resultado |
| **Current yield** | `Cupón anual / precio actual del bono` | Relacionar el ingreso corriente con el precio de mercado | Es una medida simple de ingreso, no YTM | Precio, interés acumulado, rescate anticipado e impuestos quedan fuera |
| **Precio presente de bono** | `P = Σ_{i=1}^{mn} (C/m)/(1+y/m)^i + F/(1+y/m)^{mn}` | Comparar todos los flujos contractuales con el precio | `m` es la frecuencia de cupón y `y` la tasa nominal anual | Precio limpio/sucio, fecha de liquidación, cupón irregular, opciones y amortización importan |
| **YTM exacto** | Resolver `P = Σ_{i=1}^{mn} (C/m)/(1+y/m)^i + F/(1+y/m)^{mn}` para `y` | Medir la tasa interna bajo supuestos | Es el rendimiento si se mantiene y reinvierte al mismo rendimiento | No hay retorno único realizado si se vende, se rescata o se reinvierte distinto; es tasa nominal, no efectiva |
| **YTM aproximado** | `YTM ≈ [C+(F−P)/n]/[(F+P)/2]` | Estimación rápida para cupón anual | Útil para una primera criba | Ajustar a frecuencia, cupones irregulares, opción de rescate y precio sucio; usar solver para decisión |
| **Duración de Macaulay** | `D_Mac(años) = Σ_i (i/m) PV(CF_i)/P` | Medir el tiempo ponderado de los flujos | Mayor duración suele implicar mayor sensibilidad a tasas | `C_i` incluye cupón y principal cuando corresponda; usar tiempo real `τ_i` si el calendario no es regular |
| **Duración modificada** | `D_mod = D_Mac/(1+y/m)` | Aproximar el cambio de precio ante un cambio de tasa | Sensibilidad más directa que Macaulay | Aproximación lineal; movimientos grandes, convexidad y opciones requieren recálculo |
| **Expense ratio ETF** | `gastos totales / activos netos × 100` | Medir el coste operativo anual | Un coste menor puede ayudar a la capitalización, no garantiza retorno | No captura diferenciales, impuestos, financiación o costes de seguimiento |
| **NAV ETF** | `Valor liquidativo total / unidades en circulación` | Medir el valor liquidativo por unidad | Es una referencia para prima o descuento | Precio intradía, distribuciones y creación/redención afectan la comparación |
| **Prima o descuento ETF** | `(precio de mercado/NAV)−1` | Medir la desviación del mercado frente al NAV | Positivo es prima; negativo es descuento | Arbitraje, liquidez, horario de mercado y costes de creación/redención importan |
| **Tracking error ETF** | `σ(R_ETF−R_índice)` | Medir divergencia frente al índice de referencia | Menor puede indicar una réplica más cercana | Muestra, dividendos, gastos, rebalanceo y falta de correspondencia del índice importan |

## 31.12 Fórmulas de dividendos, calidad y proceso de decisión

| Indicador | Fórmula | Para qué sirve | Interpretación | Limitaciones |
|---|---|---|---|---|
| **Crecimiento del dividendo** | `D_t/D_(t−1)−1`; multianual `(D_n/D_0)^(1/n)−1` | Medir la evolución de la distribución | Positivo refleja crecimiento, no necesariamente sostenibilidad | Dividendos especiales, splits, payout y financiación con deuda distorsionan |
| **Cobertura de dividendos** | `OE/dividendos`, `NI disponible para comunes/dividendos` o `FCFE/dividendos`; `FCF histórico/dividendos` como variante explícita | Verificar el soporte de la distribución | Más cobertura puede ser favorable | Elegir el mismo periodo y flujo; no llamar FCFE a `CFO−CapEx`; los especiales son puntuales |
| **Retención** | `1−payout = (NI−dividendos)/NI` | Medir la proporción retenida | Más retención conserva capital, pero puede ser ineficaz | Política, retorno de reinversión y oportunidades de crecimiento importan |
| **GARP / PEG** | `PEG = Forward P/E ÷ crecimiento esperado del EPS expresado en porcentaje` | Combinar valoración y crecimiento | Un ratio menor puede ser más moderado bajo supuestos comparables | Previsión, calidad, intensidad de capital, horizonte y riesgo no están controlados; no mezclar P/E trailing y forward |
| **Retorno esperado de precio desde P/E** | `R_precio=(1+g_E)(1+c_M)−1` si `c_M=(P/E)_1/(P/E)_0−1`; si se define `c_y` sobre earnings yield, `R_precio=(1+g_E)/(1+c_y)−1` | Modelar beneficio y cambio de múltiplo | Es una identidad del precio bajo el supuesto del múltiplo, no una suma de earnings yield | Debe añadirse dividendos, costes, impuestos, recompras y horizonte; no usar `E/P + g − c` como exacto |
| **Diagnóstico de trampa de valor** | `precio relativo + normalización del beneficio + solvencia + causa del descuento` | Evitar que un múltiplo bajo se lea automáticamente como ganga | Requiere evidencia cualitativa y falsadores | No es una fórmula única; sector y ciclo son esenciales |
| **Precio implícito por propiedad** | `porcentaje de propiedad × valor del equity` | Convertir el valor total en un precio de entrada | Útil para transacciones negociadas | Prima de control, descuento por minoría, costes e impuestos no incluidos |
| **Price target** | `IV, NAV, múltiplo de salida o escenario ponderado` | Expresar una hipótesis de valoración bajo supuestos | Debe indicar horizonte, método y fuente | No es predicción, garantía ni valor razonable actual |
| **Upside/downside** | `objetivo/precio−1` | Convertir el valor en cambio potencial | Positivo es potencial bajo el escenario | No incluye tiempo, dividendos, impuestos ni probabilidad |
| **Reverse DCF** | Resolver `g`, `WACC` o `FCF` implícitos en el precio de mercado | Identificar expectativas incorporadas en el precio | Útil para cuestionar, no como prueba de un precio correcto | Múltiples soluciones y no garantiza la previsión |
| **Valor por escenario** | `Σ probabilidad_i×valor_i` | Combinar resultados alternativos | El resultado depende de probabilidades y valores | Las probabilidades son subjetivas y las distribuciones pueden cambiar |
| **Cobertura de Owner Earnings** | `OE/(dividendos+recompras)` | Comparar caja distribuible con devoluciones | Más cobertura puede indicar disciplina | El CapEx de mantenimiento y el capital de crecimiento son estimaciones inciertas |
| **Control de recurrencia y calidad** | Sin número universal: contrastar Ingresos, margen, CFO, FCF, ROIC, retención y dilución | Evitar que un único ratio favorable domine | Requiere evidencia multianual y contexto del negocio | El juicio cualitativo puede estar sesgado; documentar evidencia y falsadores |

**Nota de cobertura:** las filas de las secciones 31.2–31.12, junto con el glosario, cubren las fórmulas usadas en los capítulos 1–30; las variantes y aliases se mantienen separados. La tabla es un índice de consulta, no una sustituta de las fichas completas: cada fórmula conserva su capítulo, periodo, denominador y unidades.

# Capítulo 32. Glosario amplio de términos financieros, de valoración y editoriales

## 32.1 Conceptos básicos, empresas y estados financieros

- **ACCOUNTING / Contabilidad:** proceso de registrar, clasificar, resumir e interpretar información económica bajo reglas y supuestos.
- **ACCRUAL ACCOUNTING / Contabilidad de devengo:** reconoce ingresos y gastos cuando ocurren o cuando generan obligaciones, aunque el cobro o pago sea posterior.
- **CASH BASIS / Base de efectivo:** reconoce la operación cuando se recibe o paga efectivo; no coincide necesariamente con el devengo.
- **GAAP:** conjunto de normas contables usado en un país; no es universal.
- **IFRS:** conjunto internacional de normas financieras; cada entidad debe indicar la base aplicada.
- **ANNUAL REPORT / Informe anual:** conjunto de estados financieros, notas, gobierno, riesgos y explicación de la administración.
- **CONSOLIDATED STATEMENTS / Estados financieros consolidados:** combinan la matriz y sus subsidiarias según reglas de control.
- **INCOME STATEMENT / Cuenta de resultados:** muestra ingresos, gastos y beneficio de un periodo.
- **BALANCE SHEET / Balance:** muestra activos, pasivos y patrimonio en una fecha.
- **CASH FLOW STATEMENT / Estado de flujos de efectivo:** clasifica cobros y pagos por operación, inversión y financiación.
- **NOTES TO THE ACCOUNTS / Notas:** explican criterios contables, desgloses y riesgos que los estados principales no muestran.
- **FISCAL YEAR / Ejercicio fiscal:** periodo anual usado para cerrar estados; puede no coincidir con el año natural.
- **CUT-OFF DATE / Fecha de corte:** momento hasta el que una fuente se considera vigente.
- **CURRENCY / Moneda:** unidad monetaria; en este manual, USD nominal salvo indicación contraria.
- **USD:** dólar estadounidense; no confundir con otras monedas, dólares ajustados por inflación o poder de compra real.
- **NOMINAL USD:** dólares actuales, sin>deflactor de inflación.
- **REAL USD:** dólares ajustados por poder adquisitivo o inflación.
- **USD m / USD mm:** millones de dólares; `USD bn` son miles de millones.
- **ENTITY / Entidad:** organización económica considerada en el análisis; puede ser una empresa, un negocio o una unidad consolidada.
- **SEGMENT / Segmento:** unidad operativa o geográfica usada para hacer comparables los negocios.
- **SUBSIDIARY / Subsidiaria:** entidad controlada por otra, consolidada según criterios de control.
- **PARENT COMPANY / Empresa matriz:** entidad que controla y, en un caso consolidado, reporta al grupo.
- **NCI / PARTICIPACIÓN NO CONTROLANTE:** parte del patrimonio y del resultado de subsidiarias que no pertenece completamente a la matriz; no es un interés financiero.
- **PREFERRED STOCK / Acciones preferentes:** acciones con derechos de preferencia, normalmente sobre dividendos; deben separarse del patrimonio común.
- **COMMON EQUITY / Patrimonio común:** derecho residual de los accionistas ordinarios después de deudas y otras reclamaciones.
- **CONTINGENT LIABILITIES / Pasivos contingentes:** obligaciones posibles, dependientes de eventos futuros.
- **OFF-BALANCE-SHEET / Fuera de balance:** compromisos o recursos no reflejados plenamente en el balance. Algunos arrendamientos están reconocidos bajo IFRS 16 y US GAAP, mientras otros compromisos siguen fuera de balance; hay que identificar el tratamiento contable concreto.
- **GOODWILL / Fondo de comercio:** activo intangible que aparece en combinaciones de negocios; su deterioro puede afectar al patrimonio.
- **INTANGIBLES / Activos intangibles:** activos sin existencia física, como patentes, marcas o software; su valor contable puede no reflejar valor de mercado.
- **PROVISION / Provisión:** partida registrada para cubrir una obligación probable y estimable.
- **IMPAIRMENT / Deterioro:** reducción del valor recuperable de un activo; puede ser no dineraria y una pérdida económica real.
- **ONE-OFF / Partida no recurrente:** evento puntual que no debe repetirse; requiere evidencia y no siempre es realmente único.
- **RESTRUCTURING / Reestructuración:** cambio de operaciones, personal o costes; puede ser estratégico o de dificultad financiera.

## 32.2 Ingresos, crecimiento y rentabilidad

- **REVENUE / Ingresos:** venta de productos o prestación de servicios, neta de descuentos y devoluciones según la norma aplicada.
- **COGS / Coste de ventas:** costes directamente relacionados con productos o servicios vendidos.
- **GROSS PROFIT / Beneficio bruto:** ingresos menos coste de ventas.
- **GROSS MARGIN / Margen bruto:** beneficio bruto dividido por ingresos.
- **OPERATING INCOME / EBIT:** beneficio operativo antes de intereses e impuestos, con las excepciones contables declaradas.
- **OPERATING MARGIN / Margen operativo:** EBIT dividido por ingresos.
- **NET INCOME / Beneficio neto:** el beneficio consolidado se obtiene de EBT menos el gasto fiscal; el beneficio atribuible a la matriz resta la asignación a participación no controlante y, para acciones ordinarias, dividendos preferentes y otros ajustes. No se llama “interés minoritario” a la NCI.
- **NET MARGIN / Margen neto:** beneficio neto dividido por ingresos.
- **REVENUE GROWTH / Crecimiento de ingresos:** variación relativa de ingresos entre dos períodos.
- **YOY / Year over year:** comparación con el mismo periodo del año anterior.
- **CAGR:** tasa anual compuesta entre un valor inicial y final.
- **ORGANIC GROWTH:** crecimiento generado por la operación existente, sin adquirir otra empresa.
- **MARKET SHARE / Cuota de mercado:** participación de ventas o usuarios frente al mercado definido.
- **CUSTOMER CONCENTRATION / Concentración de clientes:** dependencia de pocos clientes; puede aumentar el riesgo de pérdida.
- **COMMODITY / Materia prima homogénea:** producto básicamente homogéneo cuyo precio lo fija el mercado.
- **PRICING POWER / Poder de fijación de precios:** capacidad de mantener el precio o aumentar el ingreso unitario sin perder volumen.
- **EBIT:** resultado operativo antes de intereses netos e impuestos; debe indicarse la definición.
- **EBITDA:** EBIT más depreciación y amortización; no es flujo de caja libre.
- **D&A:** depreciación y amortización; puede ser un coste no monetario pero representa consumo económico de activos.
- **EPS / Beneficio por acción:** beneficio atribuible dividido por las acciones medias aplicables.
- **DILUTED EPS / EPS diluido:** incluye acciones potenciales con efecto dilutivo bajo la norma elegida.
- **BVPS / Valor contable por acción:** patrimonio común dividido por acciones.
- **NOPAT:** EBIT después de impuestos, usado para medir retorno operativo antes de financiación.
- **ROA:** retorno sobre activos.
- **ROE / Retorno sobre patrimonio:** beneficio neto dividido por patrimonio medio o final según convención.
- **ROIC / Retorno sobre capital invertido:** NOPAT dividido por capital invertido.
- **OPERATING LEVERAGE / Apalancamiento operativo:** sensibilidad del EBIT ante cambios de ventas; cambia con costes fijos.
- **FINANCIAL LEVERAGE / Apalancamiento financiero:** sensibilidad del beneficio o ROE ante deuda; el multiplicador de patrimonio (`Activos/Patrimonio`) y la cobertura de intereses (`EBIT/Intereses`) son métricas distintas.
- **EBIT MARGIN CHANGE:** variación del margen operativo en puntos porcentuales.
- **MIX:** composición de productos, clientes, regiones o canales dentro de Ingresos.
- **ECONOMIC MOAT / Ventaja competitiva:** capacidad estructural de mantener retornos frente a competidores.

## 32.3 Flujo de caja, capital de trabajo y liquidez

- **CFO / Flujo operativo:** efectivo generado o utilizado por las operaciones antes de inversión y financiación, con ajustes contables.
- **CAPEX / Inversión de capital:** gasto en activos productivos de larga duración; la definición exacta debe incluir o excluir intangibles.
- **MAINTENANCE CAPEX / Capex de mantenimiento:** inversión necesaria para mantener capacidad y posición competitiva.
- **GROWTH CAPEX / Capex de crecimiento:** inversión destinada a aumentar capacidad, cuota o eficiencia futura.
- **FCF / Flujo de caja libre:** efectivo disponible según una definición explícita; puede ser FCFE o FCFF.
- **FCFF:** flujo sin deuda, normalmente `NOPAT + D&A − Capex − ΔNWC`.
- **FCFE:** flujo después de la financiación para accionistas, normalmente con coste del patrimonio.
- **FCF YIELD:** FCF histórico dividido por capitalización, FCFE dividido por capitalización o FCFF dividido por EV; el flujo y el denominador deben aparecer juntos y no son intercambiables.
- **FCF MARGIN:** FCF dividido por ingresos.
- **FCF CONVERSION:** FCF dividido por beneficio neto o EBITDA, según definición.
- **CASH CONVERSION CYCLE / CCC:** DIO + DSO − DPO; días aproximados de efectivo inmovilizado en operaciones.
- **NWC / Capital de trabajo operativo:** activos corrientes operativos menos pasivos corrientes operativos.
- **WORKING CAPITAL / Capital de trabajo:** recursos necesarios para sostener el ciclo de operación; puede incluir o no efectivo y deuda.
- **CURRENT RATIO:** activos corrientes dividido por pasivos corrientes.
- **QUICK RATIO:** activos líquidos más acotados dividido por pasivos corrientes.
- **CASH RATIO:** efectivo y equivalentes dividido por pasivos corrientes.
- **DIO / Días de inventario:** inventario promedio expresado en días de COGS.
- **DSO / Días de cobro:** cuentas por cobrar expresadas en días de ventas.
- **DPO / Días de pago:** cuentas por pagar comerciales expresadas en días de compras; si se usa COGS sin ajuste, se identifica como aproximación.
- **CASH RELEASE / Liberación de caja:** reducción de NWC que genera efectivo; no siempre es recurrente.
- **CASH BURN / Quema de caja:** consumo neto de efectivo por operación e inversión.
- **QUALITY OF EARNINGS / Calidad de beneficios:** evaluación de persistencia, conversión y sostenibilidad de beneficios.
- **ACCRUALS / Devengos:** ingresos y gastos reconocidos que aún no son efectivo; su relación con activos y beneficios debe vigilarse.
- **NON-CASH CHARGE:** cargo económico sin salida de efectivo, como parte de D&A; no significa ausencia de coste económico.

## 32.4 Deuda, solvencia y crédito

- **DEBT / Deuda:** obligaciones financieras con contrato y coste; distinguir deuda bruta de deuda neta.
- **GROSS DEBT:** total de deuda antes de restar efectivo.
- **NET DEBT:** deuda bruta menos efectivo e inversiones líquidas, con criterio explícito.
- **DEBT/EQUITY:** deuda dividida por patrimonio; puede ser inestable con patrimonio negativo.
- **DEBT/EBITDA:** deuda bruta dividida por EBITDA.
- **NET DEBT/EBITDA:** deuda neta dividida por EBITDA.
- **INTEREST COVERAGE:** EBIT dividido por gasto de intereses; mide capacidad operativa de cubrir intereses.
- **FIXED CHARGE COVERAGE:** cobertura de intereses y otros cargos obligatorios; la definición contractual es importante.
- **COVENANT:** condición que limita o vincula el comportamiento financiero de una entidad.
- **MATURITY:** fecha o periodo de vencimiento de una obligación.
- **REFINANCING / Refinanciación:** sustitución o renovación de deuda vencida; puede cambiar coste y cláusulas financieras.
- **CREDIT SPREAD:** prima de rendimiento de un crédito sobre una referencia.
- **RATING:** evaluación ordinal de capacidad de pago; no es una verdad fija.
- **DEFAULT:** incumplimiento de una obligación; puede tener consecuencias legales y de mercado.
- **COVENANT HEADROOM:** margen entre el límite contractual y la métrica real.
- **LIQUIDITY / Liquidez:** capacidad de cumplir obligaciones tempestivas con activos o financiación disponibles.
- **SOLVENCY / Solvencia:** capacidad de asumir obligaciones en el horizonte relevante; distinta de liquidez inmediata.
- **BALANCE-SHEET LEVERAGE:** uso de deuda y otras obligaciones para financiar activos.
- **CAPITAL STRUCTURE:** combinación de deuda, patrimonio y otros recursos de capital.

## 32.5 Valoración y múltiplos

- **MARKET CAP / Capitalización bursátil:** precio de mercado por acción multiplicado por acciones en circulación.
- **ENTERPRISE VALUE / Valor empresa:** valor de la operación según puente de capitalización, deuda, efectivo y otros reclamantes.
- **MULTIPLE / Múltiplo:** precio relativo a una cifra financiera; normalmente se expresa con `x`.
- **P/E:** precio por acción dividido por EPS.
- **FORWARD P/E:** precio dividido por EPS futuro estimado.
- **PEG:** P/E forward dividido por porcentaje de crecimiento esperado; definición y horizonte deben indicarse.
- **P/B:** precio por acción dividido por valor contable por acción.
- **P/S:** capitalización dividida por Ingresos.
- **P/CF:** capitalización dividida por CFO.
- **P/FCF:** capitalización dividida por FCF.
- **EV/REVENUE:** EV dividido por Ingresos.
- **EV/EBITDA:** EV dividido por EBITDA.
- **EV/EBIT:** EV dividido por EBIT.
- **EARNINGS YIELD:** beneficio neto dividido por capitalización; recíproco de P/E solo con bases idénticas.
- **SALES YIELD:** ingresos divididos por capitalización; recíproco de P/S.
- **DIVIDEND YIELD:** dividendos por acción divididos por precio.
- **PAYOUT RATIO:** dividendos divididos por beneficio neto o DPS dividido por EPS.
- **RETENTION RATIO:** uno menos payout; porcentaje de beneficios no distribuido.
- **INTRINSIC VALUE / Valor intrínseco:** estimación del valor económico según flujos, activos y supuestos; no es un precio de mercado.
- **FAIR VALUE / Valor razonable:** estimación conforme a un marco y criterios explícitos; puede ser más amplia que valor intrínseco.
- **MARGIN OF SAFETY / Margen de seguridad:** `(IV − precio)/IV`; si la IV es negativa, el porcentaje no se interpreta. `(IV−precio)/precio` es una brecha de recuperación distinta.
- **PRICE TARGET / Precio objetivo:** precio resultante de una hipótesis de valoración, con horizonte y supuestos.
- **UPSIDE / DOWNSIDE:** variación potencial entre precio actual y precio objetivo; no es retorno garantizado.
- **SOTP / Sum-of-the-parts:** valoración por suma de segmentos o activos.
- **LIQUIDATION VALUE / Valor de liquidación:** valor de activos liquidados en venta forzada o voluntaria, neto de costes.
- **REPLACEMENT COST / Valor de reposición:** coste de recrear capacidad económica comparable.
- **BOOK VALUE / Valor contable:** valor registrado en contabilidad; no equivale a valor razonable.
- **VALUE TRAP / Trampa de valor:** activo cuyo precio bajo puede ocultar deterioro, mala calidad, deuda o expectativas irrealistas.
- **REVERSE DCF:** resolución de supuestos implícitos en el precio de mercado.
- **BEAR CASE / Caso bajista:** escenario de resultados menos favorables.
- **BASE CASE / Caso base:** escenario central bajo supuestos explícitos.
- **BULL CASE / Caso alcista:** escenario de resultados más favorables.
- **CATALYST / Catalizador:** evento que puede modificar expectativas o flujos; no implica que ocurra.

## 32.6 DCF, tasas de descuento y sensibilidad

- **DCF / Discounted Cash Flow:** método que descuenta flujos futuros a una tasa y estima un valor actual.
- **WACC / Weighted Average Cost of Capital:** coste promedio ponderado de las fuentes de capital; el término de deuda se ajusta por impuestos cuando el escudo es realizable, mientras el coste del patrimonio permanece antes de impuestos para el accionista. Se usa con FCFF y produce EV.
- **COST OF EQUITY / Coste del patrimonio:** retorno requerido por los accionistas.
- **COST OF DEBT / Coste de deuda:** coste de financiación de la deuda.
- **CAPM:** modelo de `K_e = R_f + β×ERP`.
- **RISK-FREE RATE:** rendimiento del activo sin riesgo de crédito usado como referencia; no es “sin riesgo real”.
- **EQUITY RISK PREMIUM:** prima esperada del patrimonio sobre el activo libre de riesgo.
- **BETA:** sensibilidad sistemática de un activo al mercado.
- **TERMINAL GROWTH:** crecimiento nominal de los flujos después del horizonte explícito.
- **TERMINAL VALUE:** valor de los flujos en el momento terminal; se calcula con `WACC` para FCFF o `K_e` para FCFE.
- **PRESENT VALUE / Valor presente:** valor de un flujo futuro descontado.
- **DISCOUNT FACTOR:** `1/(1+r)^t`; reduce el peso de flujos lejanos.
- **SCENARIO ANALYSIS:** valoración separada de escenarios central, alcista y bajista.
- **SENSITIVITY ANALYSIS:** variación de una o dos variables para medir el impacto.
- **MONTE CARLO:** simulación repetida con inputs aleatorios y distribuciones declaradas.
- **SPREAD / Diferencial:** diferencia entre dos tasas o múltiplos.
- **DURATION / Duración:** hay que separar la duración de Macaulay —tiempo ponderado por los flujos— de la duración modificada —sensibilidad aproximada del precio ante cambios de tasas—.

## 32.7 Riesgo, cartera y estadística

- **VOLATILITY / Volatilidad:** dispersión estadística de rentabilidades.
- **DOWNSIDE DEVIATION:** dispersión de resultados inferiores al mínimo de referencia.
- **VAR / Value at Risk:** pérdida en un percentil a un nivel y horizonte especificados.
- **EXPECTED SHORTFALL / CVaR:** pérdida media en la cola más adversa.
- **COVARIANCE / Covarianza:** medida de movimiento conjunto de dos rentabilidades.
- **CORRELATION / Correlación:** covarianza normalizada por volatilidades; no implica causalidad.
- **DIVERSIFICATION / Diversificación:** combinación de activos con distintos factores de riesgo.
- **SHARPE RATIO:** retorno exceso dividido por volatilidad total.
- **SORTINO RATIO:** retorno exceso dividido por downside deviation.
- **MAXIMUM DRAWDOWN:** mayor caída desde un máximo hasta un mínimo posterior.
- **TRACKING ERROR:** desviación estándar de la diferencia con un índice de referencia.
- **INFORMATION RATIO:** retorno activo dividido por error de seguimiento.
- **BENCHMARK / Índice de referencia:** referencia de rendimiento.
- **LIQUIDITY RISK / Riesgo de liquidez:** dificultad para vender un activo sin impacto material.
- **MARKET RISK / Riesgo de mercado:** sensibilidad a factores de mercado.
- **COUNTERPARTY RISK / Riesgo de contraparte:** riesgo de que la otra parte no cumpla.
- **OPERATIONAL RISK / Riesgo operativo:** riesgo de procesos, personas, sistemas, proveedores o fraude.
- **REGULATORY RISK / Riesgo regulatorio:** riesgo de cambios legales, fiscales, de supervisión o de licencias.
- **TAIL RISK / Riesgo de cola:** riesgo de eventos extremos más allá de un percentil.
- **MODEL RISK / Riesgo de modelo:** riesgo de que un modelo sea incorrecto, mal especificado o sensible a sus inputs.

## 32.8 Editorial, unidades y etiquetas de lectura

- **SOURCE / Fuente:** documento, base de datos o autor que respalda un dato; debe distinguirse una fuente real de un supuesto.
- **CUT-OFF:** fecha después de la cual no se incorpora información.
- **ASSUMPTION / Supuesto:** proposición usada para producir un resultado; no es un hecho observado.
- **NOMINAL / Nominal:** incluye efecto de precios corrientes.
- **REAL / Real:** ajustado por inflación o poder de compra.
- **PERCENTAGE POINT / Punto porcentual (`pp`):** diferencia aritmética entre dos porcentajes.
- **BASIS POINT / Punto básico (`bps`):** 0,01 punto porcentual.
- **MULTIPLE (`x`):** cuántas veces una cifra de mercado representa otra cifra financiera.
- **NM / No significativo:** se aplica por indicador; un denominador no económico puede ser NM, pero un Net Debt/EBITDA negativo o un FCF yield negativo pueden ser valores informativos.
- **N/A / No disponible:** dato que no se ha proporcionado o no puede observarse en la fuente.
- **HYPOTHETICAL / Hipotético:** dato construido para enseñanza y no destinado a describir una entidad real.
- **DATE OF INFORMATION:** fecha de publicación, consulta, cierre y actualización de un dato.
- **RECONCILIATION / Conciliación:** comprobación de que dos formas de calcular un mismo número coinciden.
- **ROUNDING / Redondeo:** aproximación de presentación; no es una discrepancia necesariamente.
- **MATERIALITY / Materialidad:** magnitud que puede cambiar una decisión o conclusión.
- **DISCLOSURE / Divulgación:** información suficiente para que un lector entienda límites y supuestos.
- **GOVERNANCE / Gobierno corporativo:** reglas, supervisión y responsabilidad.
- **ESG:** factores ambientales, sociales y de gobierno; deben definirse porque “sostenible” no es una categoría universal.
- **AUDIT / Auditoría:** revisión de evidencia y controles; una auditoría de estados financieros no garantiza el futuro.
- **DUE DILIGENCE / Diligencia debida:** investigación de negocio, balance, riesgo, gobierno y precio.
- **THESIS / Tesis:** explicación de por qué una valoración o decisión podría funcionar; debe incluir condiciones de invalidación.
- **MATERIAL FORWARD-LOOKING STATEMENT:** afirmación prospectiva cuyo resultado depende de incertidumbre.

---

## 32.9 Términos de fundamentos, activos y proceso de inversión

- **RENDIMIENTO TOTAL:** resultado de una posición que combina cambio de precio, distribuciones y costes del periodo.
- **INTERÉS COMPUESTO:** mecanismo por el cual los rendimientos se incorporan al capital y generan rendimientos posteriores.
- **VALOR FUTURO (FV):** valor estimado de una cantidad después de un periodo y una tasa de capitalización.
- **ANUALIDAD ORDINARIA:** serie de aportes iguales realizados al final de cada periodo.
- **ANUALIDAD ANTICIPADA:** serie de aportes iguales realizados al inicio de cada periodo.
- **TASA NOMINAL:** tasa expresada como porcentaje para un periodo de referencia, a veces sin anualización compuesta.
- **TASA EFECTIVA:** tasa compuesta equivalente al número de periodos reales del año.
- **VALOR PRESENTE (PV):** valor hoy de un flujo futuro después de descontarlo.
- **TASA DE DESCUENTO:** tasa utilizada para traer flujos futuros al valor presente.
- **PRIMA DE RIESGO:** compensación adicional exigida por asumir riesgo.
- **FISHER:** relación entre tasa nominal, inflación y tasa real.
- **RENTABILIDAD REAL:** variación del poder de compra después de inflación.
- **TIPO DE CAMBIO:** precio relativo entre dos monedas; puede cambiar el retorno para el inversor.
- **YTM / RENDIMIENTO AL VENCIMIENTO:** tasa implícita que iguala el precio de un bono con sus flujos contractuales.
- **CUPÓN:** pago contractual de un bono; con frecuencia `m`, el pago periódico es `F×c_N/m`; no es el retorno total.
- **CURRENT YIELD / RENTABILIDAD CORRIENTE:** cupón anual dividido por el precio actual del bono.
- **DURACIÓN DE MACAULAY:** tiempo ponderado de los flujos de un instrumento.
- **DURACIÓN MODIFICADA:** aproximación de sensibilidad del precio ante cambios de tipos.
- **REBALANCEO:** operación que devuelve una cartera a sus pesos objetivo.
- **INFLACIÓN:** aumento sostenido del nivel general de precios.
- **OWNER EARNINGS:** estimación del efectivo que un propietario podría retirar sin reducir capacidad futura.
- **GRAHAM NUMBER:** heurística clásica que combina EPS y valor contable por acción; no es un valor intrínseco.
- **CRECIMIENTO SOSTENIBLE:** en estado estable, `g≈(reinversión neta/NOPAT)×retorno del capital reinvertido`; no identificar automáticamente ese retorno con un ROIC calculado sobre saldos medios.
- **ROCE:** retorno sobre capital empleado; su base puede ser activos totales menos pasivos corrientes.
- **DSCR:** cobertura del servicio de deuda, con CFADS, mantenimiento, intereses y principal.
- **CASH CONVERSION:** relación entre CFO o FCF y beneficio, EBITDA o ingresos.
- **RETENCIÓN DE CLIENTES:** proporción de una cohorte que permanece en el periodo.
- **CHURN:** abandono de clientes, ingresos o suscripciones.
- **MIX RECURRENTE:** proporción de ingresos que se repite o contractualiza.
- **CUOTA DE MERCADO:** ventas de la entidad divididas por las ventas del mercado definido.
- **BUYBACK:** recompra de acciones propias.
- **BUYBACK YIELD:** caja utilizada en recompras dividida por la capitalización previa.
- **CAMBIO NETO DEL NÚMERO DE ACCIONES:** `S_1/S_0−1`; positivo es emisión neta/dilución y negativo reducción neta.
- **INSIDER OWNERSHIP:** proporción de acciones en manos de directivos, fundadores o controladores.
- **SBC:** compensación mediante acciones; puede crear dilución y gasto económico.
- **PEST:** marco político, económico, social y tecnológico; cuando se añade el análisis sectorial se denomina **PEST+S** o PEST sectorial.
- **FALSADOR:** evidencia que obligaría a abandonar o revisar una tesis.
- **PREMISA DE VALORACIÓN:** supuesto explícito que sostiene un resultado, como WACC, crecimiento o margen.
- **PRECIO OBJETIVO:** precio resultante de un método y un horizonte; no es una garantía.
- **VALOR DE LIQUIDACIÓN:** importe esperado después de vender activos y pagar pasivos.
- **INFRAVALORADO:** precio inferior a un rango conservador de valor, con evidencia y tesis de recuperación.
- **TRAMPA DE VALOR:** activo barato cuyo deterioro, deuda o riesgo estructural puede continuar o empeorar.

# Capítulo 33. Reglas importantes, límites y disciplina de interpretación

## 33.1 No hay una fórmula universal

Un mismo nombre puede cambiar de significado según el analista. Antes de escribir un número hay que declarar:

1. **Denominador:** Ingresos, EBIT, EBITDA, patrimonio, EV, activos u otro.
2. **Numerador y signo:** beneficio, caja, deuda, flujo negativo o dividendo especial.
3. **Periodo:** anual, trimestral, TTM, ejercicio fiscal o proyección.
4. **Base de saldos:** final, medio, inicial o promedio ponderado.
5. **Moneda y unidades:** USD m, USD/acción, moneda constante, nominal o real.
6. **Norma contable:** IFRS, GAAP local, ajustes pro forma y tratamiento de arrendamientos.
7. **Universo de comparación:** pares, historia, sector, país, tamaño y fecha.

Ejemplo: `P/E = precio/EPS` no es comparable con `EV/EBITDA`; tienen numerador, denominador y estructura de capital diferentes. `ROE = beneficio neto/patrimonio final` y `ROE = beneficio neto/patrimonio medio` pueden dar resultados distintos en una empresa que emite o recompra acciones.

## 33.2 Histórico frente a proyecciones

- **Histórico:** describe hechos contables o de mercado de un periodo ya terminado; puede revisarse, pero sigue sujeto a errores, estimaciones y políticas contables.
- **Proyección:** expresa una hipótesis sobre el futuro; debe conservar supuestos, rango, fecha y escenarios.
- No se debe presentar una proyección con el mismo lenguaje de un hecho realizado.
- Los múltiplos deben decir si usan `LTM`, el año fiscal más reciente o `FY+1`.
- Un DCF es una estructura de proyección; no se audita como un beneficio realizado.
- La evidencia histórica puede reducir incertidumbre, pero no demuestra que un pasado crecimiento continúe.
- Los cambios de definición, fusiones, divisiones, spin-offs, hiperinflación, impuestos y monedas deben documentarse.

**Regla editorial:** usar “estimamos”, “suponemos” o “proyectamos” para supuestos y “reportó”, “registró” o “se observó” solo para datos verificables.

## 33.3 Múltiples sectoriales y comparables

- Comparar una empresa de software con una empresa de servicios públicos, un banco, un minorista o una manufactura sin ajustes puede ser engañoso.
- Elegir pares por **modelo de negocio, intensidad de capital, crecimiento, riesgo, geografía, regulación, concentración de clientes y contabilidad**.
- Usar mediana, media ponderada, percentiles y rango; no presentar un único par como “el correcto”.
- Ajustar por estructura de capital: EV/EBITDA suele ser más neutral que P/E para comparar deuda, pero no elimina todas las diferencias.
- Normalizar partidas no recurrentes, criterios contables, arrendamientos, I+D capitalizado y ciclo operativo.
- Documentar la fecha del precio, del balance y del consenso; los desajustes invalidan la precisión.
- No comparar múltiplos con denominadores negativos o económicamente no representativos como si fueran múltiplos normales.
- La historia de múltiplos de la propia empresa solo es relevante si el régimen de negocio y capital permanece comparable.

## 33.4 Supuestos de valoración

Todo precio objetivo o valor intrínseco debe mostrar, como mínimo:

- moneda, fecha de corte y horizonte;
- definición de FCF y puente de EV a patrimonio;
- WACC, sus componentes, pesos y tasa fiscal;
- crecimiento explícito, márgenes, Capex y ΔNWC;
- crecimiento terminal y justificación económica;
- número de acciones, opciones y potencial dilución;
- deuda, efectivo, minoritarios, preferentes, arrendamientos y pensiones;
- escenarios, sensibilidad, rango y fuente de cada supuesto de entrada;
- condición de invalidación o “qué nos haría cambiar de opinión”.

En DCF, comprobar siempre `WACC > g` en perpetuidad. Si la diferencia es pequeña, el valor terminal puede dominar. Si FCF es negativo, un valor intrínseco negativo no debe convertirse artificialmente en un “precio cero”; se debe explicar la falta de viabilidad del flujo de efectivo bajo el escenario.

## 33.5 No hay garantías

- Ningún ratio, múltiplo, DCF, margen de seguridad o precio objetivo garantiza retorno, beneficio, volatilidad o liquidez.
- Un MoS alto puede reflejar una estimación errónea, no una protección real.
- Un dividendo alto puede recortarse; una deuda baja puede aumentar; un crecimiento puede desacelerar.
- “Seguro” solo debe usarse si se define el contexto, la probabilidad, el horizonte y el riesgo residual.
- Las proyecciones se actualizan con nueva información; un valor de un corte no es permanente.

## 33.6 Hipotético, real y verificable

Este manual utiliza entidades, precios y flujos ficticios. En un caso real:

- identificar nombre legal, ticker, ISIN, jurisdicción, ejercicio fiscal y documento de presentación;
- citar estado consolidado, notas y conciliaciones;
- diferenciar importes reportados, ajustados, pro forma, estimaciones y previsiones de la dirección;
- indicar si la cifra viene de un documento regulatorio, proveedor de datos, transcripción o cálculo propio;
- conservar un archivo de extractos y fecha de descarga;
- no convertir un supuesto en un hecho por repetición.

**Etiquetas recomendadas:** `FICTICIO`, `HISTÓRICO`, `PROYECCIÓN`, `SUPUESTO`, `REAL/VERIFICADO` y `NO VERIFICADO`.

## 33.7 Unidades, porcentajes y denominadores

- Escribir `USD 1.234,56 m`, no “1.234,56” sin unidad.
- En tablas, separar valor, fecha y fuente.
- Usar `x` para múltiplos, `%` para tasas y `pp` para cambios de porcentajes.
- Cuando el denominador sea cero, negativo o NM, explicar y no ocultar el signo.
- Para cifras muy pequeñas o muy grandes, usar notación científica o unidades escaladas.
- No sumar porcentajes de entidades con denominadores o períodos diferentes.
- No sumar balances de una ronda de suscripción a un consolidado después de ajustes intercompany.
- No comparar USD nominal con USD real sin una conversión documentada.

## 33.8 Auditoría numérica y fuentes

Cada caso debe acompañarse de estas comprobaciones:

1. `Beneficio bruto = Ingresos − COGS`.
2. `EBITDA = EBIT + D&A`.
3. `EPS = beneficio disponible para comunes / acciones diluidas medias ponderadas`.
4. `EV = capitalización + deuda − efectivo` después de ajustes explícitos.
5. `FCFF = NOPAT + D&A − Capex − ΔNWC` si se elige FCFF; no sustituirlo por `CFO−Capex`.
6. `ROIC = NOPAT / capital invertido medio`.
7. `Equity value DCF = EV − deuda + efectivo − otros reclamantes`.
8. `(IV/acción − precio de mercado) / (IV/acción)`.
9. Ingresos Growth y CAGR se recalculan desde los valores base mostrados.
10. Los totales se comprueban antes del redondeo.

Las fuentes deben incluir URL o identificador del documento, fecha de publicación, fecha de consulta, página o sección, unidades, moneda y si el valor fue copiado o calculado. Un supuesto sintético debe decirlo de forma explícita.

## 33.9 Sesgos comunes que el manual debe señalar

- **Anclaje:** aferrarse a un precio o múltiplo pasado.
- **Confirmación:** buscar solo datos que confirmen la tesis.
- **Disponibilidad:** preferir datos fáciles o cuadrantes publicados.
- **Narrativa:** convertir una historia plausible en una proyección verificable.
- **Recencia:** usar el último trimestre como si definiera toda la estructura.
- **Supervivencia:** comparar solo con empresas que sobrevivieron.
- **Expansión de múltiplos:** asumir que un múltiplo alto continuará indefinidamente.
- **Efecto base:** ignorar un denominador pequeño.
- **Contabilidad:** tratar todo el valor contable como tangible o todo EBITDA como caja.
- **Apalancamiento:** interpretar ROE alto sin mirar la estructura de capital.
- **País y modelo:** omitir riesgo monetario, fiscal o jurídico.
- **Falsa precisión:** publicar más decimales que la calidad de la fuente permite.

## 33.10 Reglas de comunicación

- Escribir “en este escenario” antes de una cifra proyectada.
- No llamar “subvalorado” o “sobrevalorado” sin definir la referencia y el horizonte.
- No usar “mejor” o “peor” cuando la pregunta sea comparar; hablar de perfiles, compromisos y riesgos.
- Separar **hecho**, **cálculo**, **supuesto** y **opinión**.
- Indicar incertidumbre con rangos, no con falsa exactitud.
- En tablas, poner unidades y fecha de corte en el encabezado o en una nota inmediatamente debajo.
- Añadir una leyenda de datos ficticios a cualquier tabla reutilizada.
- La fecha de una cifra histórica no es necesariamente la fecha de su publicación; registrar ambas cuando proceda.

---

# Capítulo 34. Formato editorial final, portada, índice, notación y control de calidad

## 34.1 Especificación de portada

La portada y el índice se insertan una sola vez desde `parte_00_preliminares.md`; no se duplican en el capítulo 34. La edición final queda identificada como **revisión financiera y editorial del 24 de septiembre de 2026**. Los casos de empresas, precios, balances y proyecciones son ficticios y no representan datos reales ni recomendaciones de inversión.

## 34.2 Control de ensamblaje

La portada y el índice general están en la parte preliminar. Esta sección sólo registra qué se integra y evita una segunda lista de lectura:

| Bloque | Contenido | Estado de ensamblaje |
|---|---|---|
| 1–29 | Capítulo y ejemplos | Integrados una sola vez |
| 30 | Cinco empresas ficticias, DCF y riesgos | Integrado |
| 31 | Tabla maestra de indicadores y fórmulas | Integrada |
| 32 | Glosario amplio | Integrado |
| 33 | Reglas, límites y fuentes | Integrados |
| 34 | Formato editorial, notación y control | Integrado sin duplicar portada |
| Apéndices A–D | Conciliación, sensibilidad, unidades y fuentes | Integrados |
| Anexo de aliases | Equivalencias inglés/español | Integrado |
| Sección final | Protocolo de análisis en 30 minutos, 1 hora y 3 horas | Integrado |

## 34.3 Convenciones de notación

| Convención | Uso | Ejemplo | Regla editorial |
|---|---|---|---|
| `USD` | Dólar estadounidense | `USD 1,20 m` | Declarar nominal/real una vez y en cada fuente cambiarlo |
| `USD m` | Millones de dólares | `Ingresos = 1.200,00 USD m` | No mezclar con miles en una misma columna |
| `USD/acción` | Valor por acción | `EPS = USD 1,26` | Revisar split, dilución y moneda |
| `x` | Múltiplo | `P/E = 25,00x` | No escribir `25 %` para un múltiplo |
| `%` | Porcentaje | `ROE = 18,00 %` | Indicar período y base |
| `pp` | Puntos porcentuales | `GM Δ = −2,00 pp` | No llamar “2 % de caída” a una diferencia de porcentajes |
| `bps` | Puntos básicos | `+50 bps` | 1 pp = 100 bps |
| `t` | Periodo actual | `Ingresos_t` | Definir si es ejercicio fiscal o LTM |
| `t−1` | Periodo anterior | `Ingresos_(t−1)` | No mezclar trimestre con año |
| `n` | Número de períodos | `CAGR con n = 4` | Para 2021–2025 son cuatro intervalos |
| `+g` | Crecimiento terminal | `g = 3 %` | Debe ser menor que WACC |
| `PV` | Valor presente | `PV(FCF_t)` | Indicar tasa y fecha de descuento |
| `NM` | No significativo | `P/E = NM` | Acompañar la razón de la indefinición |
| `N/A` | No disponible | `Beta = N/A` | No se rellena con cero |
| `≈` | Aproximación | `≈ 20,5x` | Indica redondeo o input aproximado |
| `Escenario` | Proyección | `Escenario base 2026–2030` | No se mezcla con histórico |

## 34.4 Estándar de tablas

1. Poner **unidad y fecha de corte** en el título o debajo de la tabla.
2. Poner `Concepto | Fórmula | Resultado | Fuente/fecha | Estado` cuando la tabla contenga datos no ficticios.
3. Alinear números a la derecha; texto a la izquierda.
4. Usar `—` para no disponible y `NM` para no interpretable; no usar el mismo símbolo para ambos.
5. No mezclar negativos entre paréntesis y signo menos sin una convención declarada.
6. Si hay unidades diferentes, repetir la unidad en cada columna o crear una tabla separada.
7. Añadir una nota de redondeo cuando la suma visible no coincida exactamente.
8. Para cifras de más de tres dígitos, usar separador de miles consistente; el punto decimal y la coma de miles deben quedar definidos por idioma.
9. Resaltar el resultado principal, pero no ocultar los inputs que lo producen.
10. En DCF, mostrar como mínimo WACC, g, FCF0, FCF1–5, TV, PV TV, EV, net debt, valor del patrimonio, shares, IV/share y MoS.
11. En comparativas, usar la misma definición y periodo para todas las entidades.
12. Marcar cualquier dato sintético con `FICTICIO`; no reutilizar la tabla sin la advertencia.

## 34.5 Checklist de contenido

Las casillas vacías son una plantilla de control reutilizable para cada nueva versión; no representan controles de publicación incompletos en este documento.

### Antes de ensamblar

- [ ] Se ha confirmado que los capítulos 1–29 tienen una numeración única.
- [ ] No se ha copiado un capítulo anterior en la parte final.
- [ ] Los nombres de empresas de los casos son ficticios y no se usan inadvertidamente como datos reales.
- [ ] Todos los importes tienen USD y unidad.
- [ ] La fecha de corte de datos y precios es explícita.
- [ ] Se distingue histórico, proyección, supuesto, cálculo y opinión.
- [ ] Se han definido Ingresos, EBIT, EBITDA, FCF, FCFF, ROE, ROIC, EV y DCF.
- [ ] Se han declarado WACC, g, impuestos, acciones, deuda, efectivo y puente de EV a patrimonio.
- [ ] Se han justificado los múltiplos de cada caso con supuestos, no con umbrales universales.

### Control de cálculos

- [ ] `Gross Profit = Ingresos − COGS`.
- [ ] `EBITDA = EBIT + D&A`.
- [ ] `EPS = Beneficio disponible para comunes / acciones diluidas medias`.
- [ ] `EV = Market Cap + Debt + Preferred + NCI + otras obligaciones − Cash` con ajustes declarados.
- [ ] `Debt/EBITDA` usa la misma deuda que el resto del análisis.
- [ ] `ROE` y `ROIC` usan el mismo criterio de saldos.
- [ ] `FCF` tiene fórmula visible.
- [ ] `CAGR` usa el número correcto de intervalos.
- [ ] `DCF` descuenta cada flujo en el año correcto.
- [ ] `TV` usa `FCF_(n+1)`, no `FCF_n` accidentalmente.
- [ ] El valor terminal se ha descontado al año 5.
- [ ] El puente de EV a patrimonio descuenta deuda y suma efectivo una sola vez.
- [ ] `MoS` se calcula con IV por acción y precio de la misma fecha.
- [ ] Los porcentajes se muestran con signo y unidad.
- [ ] Los NM tienen explicación.

### Control editorial y de riesgo

- [ ] Se identifica toda fuente externa, con URL/documento, fecha y página.
- [ ] Se identifica todo supuesto no observado.
- [ ] Se advierte que los casos son ficticios.
- [ ] Se evita lenguaje de garantía (`garantiza`, `seguro`, `no puede caer`) salvo justificación técnica explícita.
- [ ] Se evita decir “la mejor” sin criterio y sin pregunta de comparación.
- [ ] Se explican diferencias y riesgos de cada entidad.
- [ ] Se muestran escenarios y sensibilidad al menos para el caso central.
- [ ] Se distingue recomendación de análisis descriptivo.
- [ ] Se comprueba la ortografía de `trampa de valor`, `margen de seguridad`, `flujo de caja libre` y `coste de capital`.

## 34.6 Resumen de fórmulas para la tarjeta de referencia

```text
Gross Profit = Ingresos − COGS
Gross Margin = Gross Profit / Ingresos
EBITDA = EBIT + D&A
Operating Margin = EBIT / Ingresos
Net Margin = Net Income / Ingresos
EPS = Beneficio disponible para comunes / Acciones diluidas medias
BVPS = Common Equity / Shares
ROE = Beneficio atribuible / Average Common Equity
NOPAT = EBIT × (1 − Tasa fiscal normalizada)
ROIC = NOPAT / Average Invested Capital
FCF histórico apalancado = CFO − Capex
FCFF = NOPAT + D&A − Capex − ΔNWC
FCFE ≈ NI común + D&A + otros no monetarios − Capex − ΔNWC + deuda emitida − deuda repagada + equity emitido − recompras ± otros
FCF Yield histórico = FCF histórico / Market Capitalization
Dividend Yield = Dividends / Market Capitalization
Payout Ratio = Dividends / Beneficio disponible para comunes
CAGR = (End / Begin)^(1/n) − 1
Market Cap = Price × Shares
EV = Market Cap + Debt + Preferred + NCI + Otras obligaciones semejantes a deuda − Cash
P/E = Price / EPS
P/B = Price / BVPS
EV/EBITDA = EV / EBITDA
Debt/EBITDA = Gross Debt / EBITDA
DCF EV = Σ FCFF_t/(1+WACC)^t + TV/(1+WACC)^n
TV = FCFF_(n+1)/(WACC−g)
Valor del patrimonio = DCF EV − Debt − Preferred − NCI − otras obligaciones + Cash
Valor intrínseco por acción = Valor del patrimonio / Acciones totalmente diluidas
Margen de seguridad = (Valor intrínseco/share − Precio de mercado) / (Valor intrínseco/share)
ROIC spread = ROIC − WACC
Economic profit = NOPAT − WACC × Invested Capital
```

**No olvidar:** una fórmula identifica cómo se obtiene un número; no determina si el número es relevante, comparable, fiable o adecuado para la decisión.

---

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

---

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

---

# Sección final. Cómo analizar una acción desde cero en 30 minutos, 1 hora y 3 horas

## Antes de empezar: qué significan los tres presupuestos

Este protocolo organiza el trabajo; no es una recomendación de compra ni una regla que produzca una decisión completa en un tiempo fijo. El tiempo obliga a decidir qué preguntas son imprescindibles, qué datos pueden ser provisionales y qué incertidumbre debe permanecer explícita.

| Presupuesto | Objetivo | Resultado esperado | Lo que todavía no permite concluir |
|---|---|---|---|
| **30 minutos** | Cribado rápido y detección de riesgos | Ficha de triaje, lista de preguntas y decisión de continuar o descartar | No permite sustentar una decisión de compra disciplinada, valorar con precisión ni conocer suficientemente la calidad de la dirección |
| **1 hora** | Tesis preliminar y comprobación de cifras clave | Resumen normalizado, valoración simple y borrador de tesis | No sustituye el informe anual, la debida diligencia ni el análisis de competencia |
| **3 horas** | Investigación reproducible de inversión | Memorando de tesis, DCF o múltiplos con escenarios, riesgos, catalizadores e invalidación | Sigue necesitando fuentes primarias y juicio; tres horas no convierten una incertidumbre en certeza |

La diferencia principal no es el número de fórmulas, sino la calidad de las fuentes y la disciplina para no convertir una aproximación en una certeza.

---

## 1. Análisis en 30 minutos: cribado y triaje

### 1.1 Objetivo

En 30 minutos no se intenta descubrir el valor intrínseco exacto de una empresa. Se responden cinco preguntas:

1. ¿Qué se está comprando y qué derechos económicos se poseen?
2. ¿El negocio genera beneficio y caja, y cómo está financiada?
3. ¿El precio actual exige crecimiento, calidad o una cifra de beneficios que podría ser temporal?
4. ¿Hay riesgo de solvencia, fraude, dilución o deterioro que invalide el análisis?
5. ¿Merece la pena dedicar más tiempo y qué falta verificar?

### 1.2 Primeros 5 minutos: identificar el instrumento

Antes de mirar un gráfico o un múltiplo, registrar:

- nombre legal del emisor y ticker o ISIN;
- clase de acción, derechos de voto y derechos de dividendo;
- país, moneda de cotización y moneda de los estados financieros;
- fecha del precio y fuente;
- número de acciones básicas y diluidas;
- cierre fiscal y fecha del último estado financiero;
- si el valor es una acción ordinaria, preferente, ADR, certificado, REIT u otro instrumento.

Una acción de una empresa no es necesariamente el mismo derecho económico que un ADR, una acción preferente o un derivado. No se debe comparar el P/E de acciones ordinarias con un múltiplo de preferentes sin ajustar el contrato.

### 1.3 Siguientes 10 minutos: entender el negocio en una página

Leer el resumen del informe anual, la descripción del negocio y las notas de los segmentos. Escribir en una frase:

> La empresa vende **[producto o servicio]** a **[cliente]**, cobra por **[mecanismo]** y reinvierte por **[capital, trabajo o tecnología]**.

Después identificar:

- fuente principal de ingresos y beneficio;
- clientes, geografía y concentración;
- modelo de suscripción, venta única, transaccional, industrial, financiero o de servicios;
- costes principales y sensibilidad a precios, volumen, inflación y tipo de cambio;
- ventajas competitivas verificables: marca, red, escala, costes de cambio, patente, distribución o datos;
- riesgos de ciclo, regulación, tecnología y competencia.

No se debe concluir que una empresa es de calidad solo porque su margen bruto sea alto. La calidad exige entender por qué los clientes permanecen, por qué un competidor no puede copiar la ventaja y si la ventaja puede desaparecer.

### 1.4 Siguientes 10 minutos: extraer cinco cifras y cuatro señales

Del último estado financiero y del mercado, extraer, en la misma fecha y moneda:

1. Ingresos y crecimiento interanual o trimestral comparable.
2. EBIT o beneficio operativo y margen.
3. CFO y CapEx; calcular `FCF histórico apalancado = CFO − CapEx` con una definición explícita.
4. Deuda neta, efectivo y vencimientos próximos.
5. Número de acciones y capitalización bursátil.

Calculaciones mínimas:

- `P/E = precio / EPS`, solo si el EPS es positivo y sostenible.
- `EV = capitalización + deuda + preferentes + intereses no controlantes − efectivo`, en una primera aproximación.
- `EV/EBITDA = EV / EBITDA`, solo si EBITDA es positivo y comparable.
- `FCF Yield = FCF / capitalización`, si FCF es histórico; no mezclarlo silenciosamente con `FCFF / EV`.
- `Debt/EBITDA = deuda neta o bruta / EBITDA`, declarando qué deuda se usa.
- `ROIC = NOPAT / capital invertido` y `ROE = beneficio neto / patrimonio promedio`; son preguntas distintas.

### 1.5 Señales de alarma inmediata

Marcar como “no invertir todavía” si se observa:

- opinión de auditoría adversa, incertidumbre sobre la continuidad o salvedad material;
- deuda con vencimientos próximos y sin liquidez visible;
- existencia de deuda, arrendamientos o instrumentos regulatorios que no aparecen en el resumen;
- caja restringida que no está disponible para melayani deuda;
- dependencia de una sola persona, cliente o proveedor sin plan de continuidad;
- beneficios ocasionales, venta de activos o créditos fiscales que explican todo el EPS;
- FCF negativo durante varios años sin explicación de inversión y financiación;
- emisiones, opciones o convertibles que hacen crecer las acciones mientras el beneficio por acción no mejora;
- P/E, EV/EBITDA o crecimiento aparentemente atractivos porque el denominador está en un pico;
- conflictos relacionados, litigios, pasivos contingentes o auditoría débil.

### 1.6 Resultado del cribado de 30 minutos

La ficha de 30 minutos debe tener este formato:

| Campo | Respuesta |
|---|---|
| Instrumento y derechos | |
| Negocio en una frase | |
| Fecha del precio y de los estados | |
| Ingresos y crecimiento | |
| Margen operativo | |
| CFO / CapEx / FCF | |
| Deuda neta y vencimientos | |
| ROIC frente a WACC, si son estimables | |
| Múltiplos de cribado | |
| Tres riesgos principales | |
| Tres preguntas que deben responderse | |
| Decisión: continuar / descartar / esperar | |

**Regla de salida:** a los 30 minutos solo se decide si merece la pena investigar. Esta criba no es una señal de compra ni sustituye una decisión disciplinada. Una decisión especulativa requeriría un proceso separado, con tamaño de posición, límites de pérdida y controles de liquidez explícitos.

---

## 2. Análisis en 1 hora: tesis preliminar y números normalizados

### 2.1 Objetivo

En una hora se busca un borrador de tesis que pueda ser refutado: qué se cree, qué tendría que ocurrir para que el mercado tenga razón y qué datos podrían invalidar la opinión. La valoración puede ser sencilla, pero debe utilizar una convención explícita.

### 2.2 Minutos 0–15: estados y reconciliación

Leer el último informe anual y el trimestre más reciente. Revisar, como mínimo:

- balance: efectivo, inventarios, cuentas por cobrar, cuentas por pagar, deuda, arrendamientos y patrimonio;
- estado de resultados: ingresos, beneficio bruto, EBIT, beneficio neto y EPS;
- estado de flujos: CFO, CFI, CFF, CapEx y variaciones del capital de trabajo;
- notas: deuda, cláusulas, arrendamientos, SBC, fondo de comercio, contingencias, adquisiciones y auditoría.

Reconciliar:

`CFO ≈ Net Income + cargos no monetarios − ΔNWC + otros ajustes operativos`.

`FCF histórico apalancado = CFO − CapEx`. Si el CFO contiene intereses pagados, este flujo no es FCFF ni FCFE puro; el puente debe declarar esa clasificación y los movimientos de deuda. Si el DCF utiliza FCFF:

`FCFF = NOPAT + D&A − CapEx − ΔNWC`.

Si utiliza FCFE, la tasa de descuento debe ser el coste del patrimonio y el puente de EV a Equity no se aplica de la misma forma.

### 2.3 Minutos 15–30: normalizar tres a cinco años

Construir una tabla con tres a cinco años de:

- ingresos;
- crecimiento orgánico y adquirido;
- margen bruto, operativo y neto;
- EBIT, beneficio neto y EPS;
- CFO/NI;
- CapEx, CapEx/ingresos y D&A;
- FCF y FCF/NI;
- ROE, ROIC y ROCE;
- deuda, deuda neta, cobertura de intereses y acciones en circulación.

Separar:

- crecimiento por volumen, precio, mezcla, inflación, divisas y adquisiciones;
- partidas no recurrentes, reestructuraciones, litigios, beneficios fiscales y ventas de activos;
- CapEx de mantenimiento y de crecimiento;
- dividendos ordinarios y extraordinarios;
- compensación en acciones y dilución;
- deuda bruta, deuda neta, arrendamientos y acciones preferentes.

Un beneficio normalizado no se obtiene borrando años malos. Es la cifra que explica qué parte puede repetirse en condiciones normales y qué parte depende de un pico o de un supuesto heroico.

### 2.4 Minutos 30–45: solvencia y calidad del beneficio

Comprobar:

- caja disponible frente a deuda de corto plazo;
- calendario de vencimientos y cláusulas financieras;
- cobertura de intereses y DSCR;
- Debt/FCF y Net Debt/EBITDA;
- concentración de clientes, proveedores y bancos;
- cuentas por cobrar, inventarios, ingresos diferidos y capital de trabajo;
- fondo de comercio e intangibles sobre el patrimonio;
- opinión de auditoría y contingencias.

Preguntar:

1. ¿La empresa puede sobrevivir con ingresos 10–20 % menores durante un año?
2. ¿Puede pagar deuda y CapEx con CFO en un año de estrés?
3. ¿El beneficio se convierte en caja o requiere ventas de activos y financiación?
4. ¿El crecimiento de capital produce retornos superiores al WACC?
5. ¿La gerencia explica la diferencia entre beneficio neto, CFO y FCF?

### 2.5 Minutos 45–55: valoración simple con dos métodos

Utilizar dos métodos independientes de triangulación, no un único múltiplo.

**Método de múltiplos:**

- P/E o EV/EBITDA frente a pares del sector, con crecimiento, márgenes, apalancamiento y contabilidad comparables.
- P/S solo si la empresa tiene márgenes e intensidad de capital comparables.
- FCF Yield y Dividend Yield como rendimientos complementarios, no como precio de salida.

**Método DCF simplificado:**

- proyectar tres o cinco años de FCF normalizado;
- escoger WACC o coste del patrimonio según FCFF/FCFE;
- calcular el valor terminal por separado;
- sensibilidad de WACC ±1–2 pp, `g` ±0,5–1 pp y margen ±1–2 pp;
- puente EV–Equity: `Equity Value = EV − Debt − Preferred − Minority + Cash + otros activos no operativos`; sólo se resta efectivo disponible y no operativo, y se registra cualquier ajuste equivalente.

Documentar si el valor terminal representa una proporción material del EV. Si `r <= g`, el modelo no es válido.

### 2.6 Minutos 55–60: borrador de tesis

Escribir:

> **Tesis preliminar:** la empresa vale más que el precio porque [ventaja, crecimiento o FCF]. El mercado puede estar equivocándose porque [desalineación]. La tesis se confirma si [evidencia]. Se invalida si [hechos]. A [precio] existe un margen de seguridad estimado; mi límite de entrada sería [rango], no un punto.

Incluir:

- catalizador y mecanismo de revaluación;
- horizonte;
- escenario bajista, base y alcista;
- liquidez y tamaño de posición;
- fecha de revisión.

Una hora no elimina los sesgos. Sirve para crear un borrador que pueda ser refutado.

---

## 3. Análisis en 3 horas: memorando de inversión reproducible

### 3.1 Objetivo

Tres horas permiten construir un caso de inversión más completo si la empresa tiene un negocio comprensible y datos públicos suficientes. No sustituyen la lectura crítica de un sector complejo, una debida diligencia legal ni una conversación con la gerencia.

### 3.2 Fase 1 — Entender la unidad económica y el sector (0–30 min)

Definir:

- producto, cliente, precio, volumen y frecuencia;
- economía unitaria y margen de contribución;
- canales, distribuidores, concentración y retención;
- ciclo de demanda y estacionalidad;
- estructura de costes y sensibilidad;
- mapa competitivo y evidencia de ventaja.

Comparar el sector por riesgos, no solo por nombre:

- ciclicalidad;
- regulación;
- cambio tecnológico;
- materias primas;
- tipos de interés;
- divisas;
- intensidad de capital;
- poder de negociación de clientes.

Entregable: un diagrama de “cómo gana dinero la empresa” y tres mecanismos de ventaja competitiva con evidencia.

### 3.3 Fase 2 — Reconstruir los estados y la calidad (30–70 min)

Analizar tres a cinco años y los últimos cuatro trimestres:

- puente de ingresos: volumen, precio, mezcla, divisas y adquisiciones;
- márgenes bruto, operativo y neto y partidas excepcionales;
- CFO/NI y capital de trabajo;
- CapEx de mantenimiento y crecimiento;
- FCF histórico y FCFF normalizado;
- deuda y calendario de vencimientos;
- acciones, SBC, recompras y dilución;
- fondo de comercio, deterioro y pasivos contingentes.

Construir una reconciliación:

`Net Income → CFO → FCF histórico → Owner Earnings aproximado → FCFF` (con ajustes documentados; no es una identidad contable directa).

Cada diferencia debe tener una explicación. “Es temporal” sin importes y evidencia no es una explicación.

### 3.4 Fase 3 — Dirección, asignación de capital y gobierno (70–90 min)

Revisar:

- historial de previsiones y comunicación;
- adquisiciones y retorno posterior;
- emisión y refinanciación de deuda;
- dividendos, recompras y emisiones;
- inversión en crecimiento y ROIC incremental;
- remuneración ligada al valor por acción o al tamaño;
- propiedad de insiders, partes relacionadas y comité de auditoría.

Preguntar:

1. ¿La gerencia reinvierte en proyectos con ROIC>WACC?
2. ¿Compra acciones por debajo o por encima del valor intrínseco?
3. ¿Emite acciones para financiar un crecimiento que destruye valor por acción?
4. ¿El historial de previsiones es creíble?
5. ¿Hay incentivos que premien el tamaño en lugar del retorno?

### 3.5 Fase 4 — Modelo de valoración y escenarios (90–140 min)

Construir:

- DCF FCFF con WACC;
- alternativa de múltiplos o SOTP;
- puente completo de Equity Value;
- DCF inverso: ¿qué crecimiento, margen, WACC o crecimiento terminal implicaría el precio?;
- matriz de sensibilidad WACC/g y escenario de estrés.

El DCF inverso es especialmente útil: si el precio solo funciona con un supuesto heroico, el múltiplo no es atractivo aunque el P/E parezca bajo.

### 3.6 Fase 5 — Riesgos, catalizadores e invalidación (140–165 min)

Dividir los riesgos en:

- **pérdida permanente:** solvencia, fraude, obsolescencia, regulación, pérdida de clientes, litigios y dilución;
- **precio o ciclo:** volatilidad, compresión de múltiplos y recesión;
- **ejecución:** integración, capacidad, producto y dirección;
- **liquidez o tiempo:** imposibilidad de vender, bloqueo, diferencial y no poder esperar;
- **riesgo de modelo:** WACC, margen, valor terminal y número de acciones.

Para cada riesgo escribir probabilidad, impacto, indicador temprano y mitigación. Un riesgo sin indicador de seguimiento no está completamente analizado.

### 3.7 Fase 6 — Memorando de inversión y decisión (165–180 min)

El memorando final debe contener:

1. **Decisión operativa:** investigar, observar, comprar, mantener, vender o no asignar capital.
2. **Tesis:** una frase.
3. **Calidad del negocio:** moat, ROIC, reinversión y dirección.
4. **Calidad financiera:** crecimiento, márgenes, conversión de caja y deuda.
5. **Valoración:** rango, métodos, supuestos, sensibilidad y DCF inverso.
6. **Catalizadores:** qué cambia la conversación del mercado.
7. **Riesgos:** qué puede romper la tesis.
8. **Invalidación:** hechos observables que obligarían a cerrar o reducir.
9. **Liquidez y tamaño:** posición, horizonte y posible pérdida.
10. **Checklist de seguimiento:** próximos resultados, deuda, indicadores operativos, moat y cambios regulatorios.

No escribir “seguro” ni “garantizado”; escribir qué se sabe, qué no se sabe y qué observación cambiaría la decisión.

---

## 4. Fuentes y prioridad de verificación

Para una acción real, utilizar fuentes primarias antes que agregadores:

1. Informe anual, 10-K, 20-F o equivalente.
2. Memoria, notas y auditoría.
3. Comunicación de resultados, presentación y transcripción de la llamada.
4. SEC o bolsa, Euronext, CNMV, Banco Central o regulador equivalente.
5. Precio, acciones, deuda y valor empresa de una fuente de mercado fechada.
6. Datos del sector, competidores y documentos del regulador.
7. Agregadores y noticias solo como punto de partida, nunca como única evidencia.

Registrar para cada número: emisor, página o URL, fecha de corte, fecha de publicación, moneda y si es reportado o calculado. No usar un precio actual junto con un balance de hace dos años sin ajustar.

---

## 5. Errores que una revisión de 30/60/180 minutos debe evitar

- Confundir un P/E bajo con un negocio de calidad.
- Usar EV/EBITDA sin ajustar deuda, arrendamientos, minoritarios o preferentes.
- Usar FCF Yield de FCFF con denominador de capitalización, o viceversa.
- Comparar un ROE alto causado por apalancamiento con un ROIC sano.
- Aplicar WACC a FCFE o coste del patrimonio a FCFF.
- Restar la deuda neta dos veces en Equity Value.
- Usar un crecimiento terminal cercano al WACC.
- Contar acciones emitidas en lugar de acciones diluidas ponderadas.
- Tratar SBC como no económico solo porque no es efectivo.
- Tratar una liberación de capital de trabajo como FCF sostenible.
- Usar beneficios de pico con múltiplos de un año normal.
- Considerar seguro un dividendo porque su rendimiento es alto.
- Extrapolar el crecimiento de ingresos sin medir la reinversión.
- Comprar después de una caída sin determinar si es temporal o permanente.
- Concluir que existe un moat a partir de un vídeo breve.
- Tratar la presión de tiempo como una razón para omitir fuentes.

---

## 6. Regla final para los tres presupuestos

El presupuesto determina la profundidad, no la responsabilidad. En 30 minutos, ser disciplinado significa hacer un cribado; en una hora, formular una tesis; en tres horas, construir un modelo y sus riesgos. En todos los casos:

> **No comprar algo que no se puede explicar, no presentar una proyección como un hecho y no usar una fórmula para ocultar una falta de comprensión.**

La calidad del proceso se observa en la trazabilidad: otra persona debe poder seguir cada cifra, supuesto, riesgo, escenario e invalidación hasta la fuente primaria.

---

## Nota de revisión financiera y editorial

Esta versión final fue revisada para mejorar la coherencia de las definiciones, la consistencia entre FCF, FCFF y FCFE, los puentes EV–Equity, WACC, ROIC, los ratios, la sensibilidad del DCF, YTM, las métricas de portafolio y los cálculos de los casos ficticios. La revisión no convierte el manual en asesoramiento financiero ni elimina la incertidumbre de los mercados. Fecha de revisión editorial: 24 de septiembre de 2026.
