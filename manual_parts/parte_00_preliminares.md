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
