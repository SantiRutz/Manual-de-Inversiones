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
