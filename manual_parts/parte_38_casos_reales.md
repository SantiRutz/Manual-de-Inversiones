# Casos reales

Esta sección se genera desde `tools/casos_reales.js`. Editar este archivo a mano no sirve: el siguiente build lo sobrescribe.

## Qué cambia respecto al capítulo 30

El capítulo 30 usa empresas ficticias con un corte común. Aquí cada ficha declara su informe, su ejercicio, si ese documento está auditado y la fecha en que se consultó. Las fechas no se alinean entre empresas. El valor intrínseco se publica como rango. Cada empresa permanece en su moneda: el margen de seguridad es comparable; el valor absoluto, no.

## Sesgo de supervivencia

Elegir empresas a las que les ha ido bien no demuestra que el filtro funcione. Seis aciertos, o uno, no son seis pruebas: faltan las que el mismo filtro habría descartado y las que pasó y luego fallaron. El capítulo 29 trata ese error. Cada ficha incluye la línea de por qué el filtro casi la rechaza, para que el caso no se lea como una confirmación.

## Comparativa

| Empresa | Sector | País | Ejercicio | Auditoría | Precio | IV rango | MoS | Método |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Microsoft Corporation | Software y servicios en la nube | Estados Unidos | 2026 | Auditado | 516,17 | 349,55–419,82 | -47,7 % | FCFF/WACC |
| Costco Wholesale Corporation | Distribución minorista (membresía) | Estados Unidos | 2025 | Auditado | 922,77 | 364,52–431,39 | -153,1 % | FCFF/WACC |
| JPMorgan Chase & Co. | Banca universal | Estados Unidos | 2025 | Auditado | 343,06 | 148,21–171,44 | -131,5 % | FCFE/Ke |
| Taiwan Semiconductor Manufacturing Company Limited | Fundición de semiconductores | Taiwán | 2025 | Auditado | 2.475,00 | 1.009,43–1.210,23 | -145,2 % | FCFF/WACC |
| LVMH Moët Hennessy Louis Vuitton SE | Lujo (moda, cuero, vinos, joyería) | Francia | 2025 | Auditado | 396,85 | 301,22–360,96 | -31,7 % | FCFF/WACC |
| Toyota Motor Corporation | Automoción (incluye servicios financieros) | Japón | 2026 | Auditado | 3.031,00 | 3.081,68–3.576,18 | 1,6 % | FCFF/WACC |

## Esquema y método

La comparativa usa las mismas claves en todas las fichas. Si un dato no está en el informe, se escribe `n/d`: no se estima en silencio. Un banco no entra por FCFF y WACC, porque la deuda es un insumo del negocio y no apalancamiento. Esa ficha, cuando exista, descuenta FCFE a `K_e` y marca `n/d` en el valor de empresa y en los múltiplos que no aplican.

El flujo terminal es `FCFF_n × (1+g)`, descontado una sola vez. No se multiplica otra vez por `(1+g)`. El margen es `(IV bajo − precio) / IV bajo`. Un IV negativo no se expresa como porcentaje.

## Microsoft Corporation



Microsoft Corporation (MSFT) es una ficha del generador, no un caso. Sirve para comprobar que el margen, el puente y el valor terminal salen del mismo cálculo que la portada.

| Campo | Dato |
| --- | --- |
| Sector | Software y servicios en la nube |
| Norma | US GAAP |
| Método | FCFF/WACC |
| Ejercicio | FY2026 (cerrado 30 jun 2026) |
| Documento | Form 10-K depositado 29 jul 2026 (CIK 0000789019) |
| Auditado | Sí |
| Precio | 516,17 |
| IV bajo | 349,55 |
| IV alto | 419,82 |
| MoS conservador | -47,7 % |

El margen se calcula contra el extremo bajo, no contra el alto:

\[
MoS = (IV_{bajo} - precio) / IV_{bajo} = (349,55 - 516,17) / 349,55 = -47,7 %
\]

Con estos supuestos, el precio no queda por debajo del extremo bajo del rango. El flujo terminal es el último FCFF crecido una sola vez: 186.300,00. No se vuelve a multiplicar por (1+g) al descontarlo con WACC.

### Por qué casi la rechaza el filtro

La recompra masiva y la caja neta inflan el ROE y el FCF por acción; sin ellas, la rentabilidad sobre capital propio cae. La concentración en OpenAI añade riesgo de contraparte no diversificable.

### Qué invalidaría el cálculo

- Cambio de clasificación de leases (financiero → operativo) altera CapEx y FCF comparables: corregir antes de comparar
- Si el crecimiento de Azure se desacelera por debajo del 15 %, la proyección de flujos se rompe
- Si la recompra se detiene, el BPA y el MoS caen de forma material
## Costco Wholesale Corporation



Costco Wholesale Corporation (COST) es una ficha del generador, no un caso. Sirve para comprobar que el margen, el puente y el valor terminal salen del mismo cálculo que la portada.

| Campo | Dato |
| --- | --- |
| Sector | Distribución minorista (membresía) |
| Norma | US GAAP |
| Método | FCFF/WACC |
| Ejercicio | FY2025 (cerrado 31 ago 2025) |
| Documento | Form 10-K FY2025 (CIK 0000909832) |
| Auditado | Sí |
| Precio | 922,77 |
| IV bajo | 364,52 |
| IV alto | 431,39 |
| MoS conservador | -153,1 % |

El margen se calcula contra el extremo bajo, no contra el alto:

\[
MoS = (IV_{bajo} - precio) / IV_{bajo} = (364,52 - 922,77) / 364,52 = -153,1 %
\]

Con estos supuestos, el precio no queda por debajo del extremo bajo del rango. El flujo terminal es el último FCFF crecido una sola vez: 12.360,00. No se vuelve a multiplicar por (1+g) al descontarlo con WACC.

### Por qué casi la rechaza el filtro

A 50 veces el FCF, el filtro la rechaza por precio aunque el negocio sea excelente: el margen que exige el método no existe a este múltiplo. La calidad no convierte un precio alto en barato.

### Qué invalidaría el cálculo

- Si el crecimiento de comparables cae por debajo del 4 %, el FCF proyectado no se sostiene
- Si sube la rotación de personal o los salarios, el SG&A se come el margen operativo del 3,5 %
- Una g terminal del 3 % ya es generosa para distribución; con 2,5 % el IV cae ~15 %
## JPMorgan Chase & Co.



JPMorgan Chase & Co. (JPM) es una ficha del generador, no un caso. Sirve para comprobar que el margen, el puente y el valor terminal salen del mismo cálculo que la portada.

| Campo | Dato |
| --- | --- |
| Sector | Banca universal |
| Norma | US GAAP |
| Método | FCFE/Ke |
| Ejercicio | FY2025 (cerrado 31 dic 2025) |
| Documento | Form 10-K FY2025 (CIK 0000019617) y earnings release Q4 2025 |
| Auditado | Sí |
| Precio | 343,06 |
| IV bajo | 148,21 |
| IV alto | 171,44 |
| MoS conservador | -131,5 % |

El margen se calcula contra el extremo bajo, no contra el alto:

\[
MoS = (IV_{bajo} - precio) / IV_{bajo} = (148,21 - 343,06) / 148,21 = -131,5 %
\]

Con estos supuestos, el precio no queda por debajo del extremo bajo del rango. El flujo terminal es el último FCFE crecido una sola vez: 35.020,00. No se vuelve a multiplicar por (1+g) al descontarlo con K_e.

### Por qué casi la rechaza el filtro

El DDM solo captura lo distribuido y el precio paga 2,5 veces el valor contable: el filtro la rechaza porque el mercado ya descuenta un ROE del 17 % sostenido. Un banco que gana mucho puede seguir siendo caro.

### Qué invalidaría el cálculo

- Si la morosidad sube y las provisiones se normalizan, el distribuible cae 20–30 %
- Si los tipos bajan, el margen de intereses se comprime y el ROE vuelve al 12–13 %
- El DDM ignora el exceso de capital: si se libera con recompras extraordinarias, el IV sube
## Taiwan Semiconductor Manufacturing Company Limited



Taiwan Semiconductor Manufacturing Company Limited (2330) es una ficha del generador, no un caso. Sirve para comprobar que el margen, el puente y el valor terminal salen del mismo cálculo que la portada.

| Campo | Dato |
| --- | --- |
| Sector | Fundición de semiconductores |
| Norma | IFRS (IASB) |
| Método | FCFF/WACC |
| Ejercicio | FY2025 (cerrado 31 dic 2025) |
| Documento | Form 20-F depositado 16 abr 2026 (CIK 1046179) |
| Auditado | Sí |
| Precio | 2.475,00 |
| IV bajo | 1.009,43 |
| IV alto | 1.210,23 |
| MoS conservador | -145,2 % |

El margen se calcula contra el extremo bajo, no contra el alto:

\[
MoS = (IV_{bajo} - precio) / IV_{bajo} = (1.009,43 - 2.475,00) / 1.009,43 = -145,2 %
\]

Con estos supuestos, el precio no queda por debajo del extremo bajo del rango. El flujo terminal es el último FCFF crecido una sola vez: 1.863.000,00. No se vuelve a multiplicar por (1+g) al descontarlo con WACC.

### Por qué casi la rechaza el filtro

El 74 % de los ingresos viene de nodos de 7 nm o menores; un retraso en el siguiente nodo o un exceso de capacidad haría colapsar el margen. La concentración geográfica (Taiwán) es un riesgo de cola no diversificable.

### Qué invalidaría el cálculo

- Si la utilización de capacidad cae por debajo del 80 %, el margen bruto pierde 400–600 pb
- Si el gasto en I+D no escala con los ingresos (hoy ~6,5 %), la ventaja tecnológica se erosiona
- Riesgo geopolítico: cualquier bloqueo de Taiwán anula el valor intrínseco
## LVMH Moët Hennessy Louis Vuitton SE



LVMH Moët Hennessy Louis Vuitton SE (MC) es una ficha del generador, no un caso. Sirve para comprobar que el margen, el puente y el valor terminal salen del mismo cálculo que la portada.

| Campo | Dato |
| --- | --- |
| Sector | Lujo (moda, cuero, vinos, joyería) |
| Norma | IFRS (UE) |
| Método | FCFF/WACC |
| Ejercicio | FY2025 (cerrado 31 dic 2025) |
| Documento | Document d’enregistrement universel 2025 (AMF D.26-0195) |
| Auditado | Sí |
| Precio | 396,85 |
| IV bajo | 301,22 |
| IV alto | 360,96 |
| MoS conservador | -31,7 % |

El margen se calcula contra el extremo bajo, no contra el alto:

\[
MoS = (IV_{bajo} - precio) / IV_{bajo} = (301,22 - 396,85) / 301,22 = -31,7 %
\]

Con estos supuestos, el precio no queda por debajo del extremo bajo del rango. El flujo terminal es el último FCFF crecido una sola vez: 12.095,00. No se vuelve a multiplicar por (1+g) al descontarlo con WACC.

### Por qué casi la rechaza el filtro

Dos años seguidos de caída en beneficio (−17 % y −13 %) con el precio un 40 % por debajo de máximos: el filtro dudaría por deterioro, no por precio. El lujo cíclico castiga tarde y recupera tarde.

### Qué invalidaría el cálculo

- Si China no recupera el tráfico de lujo, el crecimiento orgánico se queda en 0–2 %
- El efecto divisa (euro fuerte) resta 3–5 % a ventas y más al resultado cada año que persiste
- Si el margen de Moda y Marroquinería cae del 35 %, el múltiplo histórico no se sostiene
## Toyota Motor Corporation



Toyota Motor Corporation (7203) es una ficha del generador, no un caso. Sirve para comprobar que el margen, el puente y el valor terminal salen del mismo cálculo que la portada.

| Campo | Dato |
| --- | --- |
| Sector | Automoción (incluye servicios financieros) |
| Norma | IFRS (IASB) |
| Método | FCFF/WACC |
| Ejercicio | FY2026 (cerrado 31 mar 2026) |
| Documento | Yuukashouken houkokusho FY2026 + Financial Summary (6-K) |
| Auditado | Sí |
| Precio | 3.031,00 |
| IV bajo | 3.081,68 |
| IV alto | 3.576,18 |
| MoS conservador | 1,6 % |

El margen se calcula contra el extremo bajo, no contra el alto:

\[
MoS = (IV_{bajo} - precio) / IV_{bajo} = (3.081,68 - 3.031,00) / 3.081,68 = 1,6 %
\]

Con estos supuestos, el precio queda por debajo del extremo bajo del rango. El flujo terminal es el último FCFF crecido una sola vez: 2.550.000,00. No se vuelve a multiplicar por (1+g) al descontarlo con WACC.

### Por qué casi la rechaza el filtro

El beneficio cae dos años seguidos (−4 % y −19 %) y la guía FY2027 recorta otro 22 %: el filtro exigiría normalizar el ciclo antes de fiarse del múltiplo. Los aranceles de EE. UU. son el riesgo que el precio ya descuenta.

### Qué invalidaría el cálculo

- Si los aranceles estadounidenses se consolidan, el coste anual supera el billón de yenes
- El capex en baterías e híbridos puede deprimir el FCF varios años aunque el beneficio aguante
- Un yen fuerte (¥130/$) resta ~400.000 M al operativo anual

## Registro de fuentes

| Empresa | Documento | Ejercicio | Consulta | Condición | Cifras |
| --- | --- | --- | --- | --- | --- |
| Microsoft Corporation | Form 10-K FY2026 | FY2026 | 2026-09-30 | Auditado por Deloitte | Estados financieros completos, notas, MD&A |
| Microsoft Corporation | FY2026 Q4 Earnings Press Release | FY2026 | 2026-09-30 | No auditado, confirmado por 10-K | Balance y flujos a 30 jun 2026 |
| Costco Wholesale Corporation | Form 10-K FY2025 | FY2025 | 2026-09-30 | Auditado | Ventas, resultado neto, acciones, dividendos |
| Costco Wholesale Corporation | Form 10-K FY2023 | FY2023 | 2026-09-30 | Auditado | Comparativas FY2021–FY2023, BPA, dividendos |
| Costco Wholesale Corporation | Q4 FY2025 Earnings Press Release | FY2025 | 2026-09-30 | No auditado | Ventas 275.235 M, neto 8.099 M, OCF 13.335 M |
| JPMorgan Chase & Co. | Earnings release Q4/FY2025 (8-K) | FY2025 | 2026-09-30 | No auditado, cifras firmes | Neto 57.000 M, BPA 20,02, ROE 17 %, ROTCE 20 % |
| JPMorgan Chase & Co. | Annual Report 2025 | FY2025 | 2026-09-30 | Auditado | Ingresos 182.447 M, ganancia Visa 7.900 M |
| JPMorgan Chase & Co. | Form 10-K FY2025 y anteriores | 2021–2025 | 2026-09-30 | Auditado | Acciones en circulación por año, dividendos |
| Taiwan Semiconductor Manufacturing Company Limited | Form 20-F FY2025 | FY2025 | 2026-09-30 | Auditado por Deloitte (Taiwán) | Estados financieros consolidados IFRS, notas, MD&A |
| Taiwan Semiconductor Manufacturing Company Limited | 2025 Annual Report (inglés) | FY2025 | 2026-09-30 | No auditado, confirmado por 20-F | Resaltos financieros, tabla de 5 años, wafer shipments |
| LVMH Moët Hennessy Louis Vuitton SE | Document d’enregistrement universel 2025 | FY2025 | 2026-09-30 | Auditado (Deloitte, Mazars) | Ventas 80.807 M, operativo recurrente 17.755 M, neto grupo 10.878 M |
| LVMH Moët Hennessy Louis Vuitton SE | LVMH Key Figures + FY2021/FY2023 press releases | 2021–2024 | 2026-09-30 | Auditado (comparativas) | Ventas y neto grupo por año, dividendo 13 € (2024) |
| Toyota Motor Corporation | FY2026 Financial Summary (6-K/press) | FY2026 | 2026-09-30 | Auditado (resumen) | Ventas 50.685 B¥, operativo 3.766 B¥, neto matriz 3.848 B¥, BPA 295,25 ¥ |
| Toyota Motor Corporation | Yuukashouken houkokusho FY2026 | FY2022–FY2026 | 2026-09-30 | Auditado | Tabla 5 años, patrimonio, acciones, dividendos |
| Toyota Motor Corporation | FY2025 Financial Summary | FY2025 | 2026-09-30 | Auditado (resumen) | Ventas 48.037 B¥, operativo 4.796 B¥, neto matriz 4.765 B¥ |
