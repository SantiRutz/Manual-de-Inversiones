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
