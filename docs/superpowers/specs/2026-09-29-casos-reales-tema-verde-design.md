# Manual de inversión: tema verde, placa rediseñada y sección de casos reales

- **Fecha:** 2026-09-29
- **Camino:** arquitectónico
- **Estado:** aprobado en diseño conversacional; implementado 2026-09-30 (6 empresas, sin andamiaje)
- **Alcance:** tres frentes en un repositorio de manual educativo con generador propio

---

## 1. Objetivo

Tres mejoras al sitio estático generado en `site/`:

1. Rediseñar el cuadro "Lectura del valor" de la portada, que hoy se ve descuadrado y difícil de leer.
2. Invertir los roles de color: el **verde pasa a ser el color principal** y el crema/blanco a secundario. Hoy el tema claro es el predeterminado.
3. Añadir una **sección de casos reales**: seis empresas con estados financieros, ratios, DCF y lectura del filtro, extraídos de informes publicados y fechados.

El punto 3 rompe un invariante del repositorio a propósito, y el propio `AGENTS.md` contempla ese caso: *"do not add current market data without an explicit request and dated sources"*. Esta es la petición explícita.

---

## 2. Decisiones cerradas

| # | Decisión | Elección | Alternativa descartada |
|---|---|---|---|
| 1 | Cuadro "Lectura del valor" | Opción **B**: comparación con cifras, en SVG, con un caso real fechado en el pie | A (regla graduada) y C (tarjeta de dato) |
| 2 | Tema | Dirección **A**: el verde profundo actual pasa a ser el predeterminado | B (verde saturado de marca), que obligaba a revalidar contraste |
| 3 | Ubicación de los casos | Sección de primer nivel con página propia `casos-reales.html` | Apéndice E, o una página por empresa |
| 4 | Profundidad | Ficha completa: estados financieros, ratios por año, DCF de 5 años, lectura del filtro | Lectura sin proyección, o tabla comparativa ligera |
| 5 | Empresas | Microsoft, Costco, JPMorgan · TSMC, LVMH, Toyota | Banca sustituida por industrial (descartada: se pierde la salvedad metodológica) |
| 6 | Sesgo de supervivencia | Se mantienen las 6 y **se nombra el sesgo dentro**, con línea por ficha | Contraejemplos adicionales, o no tratarlo |
| 7 | Origen de los datos | Los busca el agente; **las cifras se enseñan al usuario antes de escribir** | Que el usuario los aporte |
| 8 | Estructura de la página | **Comparativa primero**, luego las fichas | Índice de tarjetas, o ficha directa |
| 9 | Fuente única de números | Módulo `tools/casos_reales.js`; el Markdown se genera desde él | Parsear el Markdown canónico al construir |
| 10 | Veredicto por empresa | **Lectura del filtro**, sin comprar ni vender | Recomendación explícita por empresa |

---

## 3. Estado del repositorio (leer antes de tocar nada)

- No hay `package.json`, lockfile, CI, lint, typecheck ni tests. Node.js es el único runtime.
- El orden canónico de las 14 partes vive **solo** en `tools/build_manual.js:5-20`. No se deduce por glob.
- `tools/build_website.js:6-8` lee ese array del fuente de `build_manual.js` mediante regex y exige 14.
- El manual publicado debe conservar **34 capítulos** y el protocolo (`parte_37`) como sección final.
- Todo el contenido de los capítulos 1–34 es ficticio, con corte 31 dic 2025 y fecha editorial 24 sep 2026.
- Invariantes de contenido en `AGENTS.md`: convenciones de flujo (`CFO − CapEx` apalancado, FCFF con WACC, FCFE con `K_e`), `MoS = (IV − precio)/IV` contra el IV, terminal sin doble indexación, separación ROIC/WACC histórico frente a ROIC incremental.
- Cadena de validación obligatoria (11 pasos, en orden):
  `build_manual` → `validate_manual` → `validate_html` → `verify_reviewed_numbers` → `canonical_cases` → `dcf_sensitivity` → `scan_master` → `scan_question_artifacts` → `build_website` → `validate_website`.

Archivos con números mágicos que habrá que actualizar:

| Ubicación | Actual | Nuevo |
|---|---|---|
| `tools/build_website.js:38` | `pageStarts.length !== 36` | `37` |
| `tools/validate_website.js:22` | `htmlFiles.length === 38` | `39` |
| `tools/validate_website.js:78` | `searchIndex.length === 37` | `38` |

---

## 4. Alcance y no-alcance

**Alcance**

- Tema por defecto y reparto del acento.
- Rediseño de la placa.
- Sección nueva de casos reales, con su módulo de datos, su renderizador y sus validadores.
- Textos de portada, footer y aviso legal a dos niveles.
- Actualización de `AGENTS.md`.

**No-alcance**

- Cambiar el contenido de los capítulos 1–34.
- Añadir un capítulo 35.
- Reordenar el manual más allá de insertar la sección nueva antes del protocolo.
- Migrar a un generador de sitio distinto.
- Añadir dependencias npm, build system o framework.
- Revisar el contraste de una paleta nueva (decisión 2 lo hace innecesario).

---

## 5. Arquitectura: una sola fuente para los números

El riesgo central es que la portada y la ficha de Costco muestren precios distintos. Si los números están escritos en dos sitios, divergen.

**Solución:** un módulo de datos, `tools/casos_reales.js`, es la única fuente.

```
tools/casos_reales.js          ← única fuente (identidad, corte, precios, históricos, supuestos, DCF)
        │
        ├── tools/casos_reales_render.js  →  Markdown de la sección
        │            │
        │            └── tools/build_manual.js  →  manual_parts/parte_38_casos_reales.md
        │                        │                        │
        │                        │                        └── master .md  →  master .html
        │                        │
        └── tools/build_website.js  →  lee el mismo módulo para pintar la placa de la portada
```

Consecuencias aceptadas:

- `manual_parts/parte_38_casos_reales.md` es un **artefacto generado**. No se edita a mano. Se declara así en `AGENTS.md`.
- El texto de la ficha se compone desde plantillas, así que el redactor de las fichas vive en el renderizador, no en el Markdown.
- Se añade un check en `validate_website.js` que compara los números de la placa contra el módulo. Si divergen, la validación falla.

### 5.1 Forma del módulo

```js
module.exports = {
  edicion: { corteMercado, editorial },
  esquema: [ { clave, etiqueta, bloque, nota } ],       // el esquema normalizado, §8.2
  empresas: [ {
    id, nombre, ticker, mercado, pais, sector, norma, moneda,
    fiscal:     { etiqueta, ultimo, periodo, cincoAnios, documento, auditado, fechaConsulta },
    mercado:    { precio, fechaPrecio, capitalizacion, acciones, deudaNeta },
    normalizaciones: [ { linea, partidaReportada, salvedad } ],
    historico:  [ { ejercicio, ventas, ... } ],           // 5 filas, claves del esquema
    supuestos:  { rf, erp, beta, ke, kd, fiscalTasa, pesoDeuda, g },
    proyeccion: [ { anio, ... } ],                        // 5 filas
    resultado:  { metodo, ivBajo, ivAlto, ev, equity, mosBajo, mosAlto },
    lectura:    { cumple, texto, casiRechazada, invalidadores: [] },
    fuentes:    [ { documento, ejercicio, fechaConsulta, url, cifras } ],
  } ],
};
```

El módulo no se puede comentar con cifras a medias: `validate_website.js` y `verify_reviewed_numbers.js` fallan si falta un campo obligatorio.

---

## 6. Cambio 1 — Tema: verde principal

### 6.1 Conmutación

- `tools/build_website.js:267` emite `data-theme="light"` → `data-theme="dark"`.
- `tools/site_template/site.js:124-125` fuerza `'light'` como valor inicial → `'dark'`.
- La clave de `localStorage` sigue siendo `manual-theme`, y se sigue aceptando `light`. Quien ya tenía el tema claro elegido lo conserva; solo cambia el primer arranque.
- `build_website.js:267` declara `<meta name="theme-color" content="#10273d">`; se ajusta al verde profundo real (`#171f1d`) para que la barra del navegador móvil no cante.
- El icono del botón (`site.js:85-88`, `☼`/`◐`) se queda como está: ya distingue los dos estados.

### 6.2 Reparto del acento

**Ningún valor de la paleta cambia.** Solo cambia qué token se usa en cada sitio. Es un fichero de CSS, no un cambio de identidad visual.

**Verde** — acción y datos:

| Selector actual | Token hoy | Token nuevo |
|---|---|---|
| `.reading-progress` (`:63`) | `--gold` | `--teal` |
| `.chapter-progress progress` valor (`:144-145`) | `--gold` | `--teal` |
| `.nav-dot` (`:114`) | `--gold` | `--teal` |
| `.part-kicker` color y borde (`:147`) | `--gold` | `--teal` |
| `.topic-icon` (`:242`) | `--gold` | `--teal` |
| `.topic-arrow` (`:247`) | `--gold` | `--teal` |
| `.quick-arrow` (`:257`) | `--gold` | `--teal` |
| `.print-button span:last-child` (`:90`) | `--gold` | `--teal` |
| `.contents-sticky a.is-current` borde (`:132`) | `--gold` | `--teal` |
| `.prose th` fondo (`:172`) | `--navy-2` | mezcla de `--teal` sobre `--surface-soft` |
| `.button-primary` fondo (`:202`) | `--navy` | `--teal-dark` en claro, `--teal` en oscuro |
| `.button-primary:hover` (`:203`) | `--teal-dark` | `--teal` en claro, `--teal-dark` en oscuro |
| `.button-primary span` (`:204`) | `--gold` | tono claro fijo, para contraste sobre verde |
| `.hero-dot` (`:194`) | `--gold` | `--teal` |

**Dorado** — solo remate de dato. Se queda donde está:

- `.prose .math` fondo y borde (`:168`)
- `.prose blockquote` fondo y borde (`:162`)
- `.prose th` filete superior de 2 px (`:172`)
- `.prose h1::after`, la regla de 52 px (`:153`)
- `.disclaimer-strip` (`:258-261`)
- La placa: descriptor DESCUENTO, cifra del MoS y bloque de cálculo
- `.brand-mark` color y borde (`:71`)

**Crema/blanco** — superficie y texto de apoyo. Sin cambios.

### 6.3 Contraste

La decisión 2 (dirección A) se eligió precisamente para **no** tener que revalidar contraste. Aun así, los tres cambios que sí alteran color sobre fondo exigen comprobación con el par de themes:

- `.button-primary`: en claro, `--teal-dark #3e644f` con texto `#f3f0e7`; en oscuro, `--teal #91b59a` con texto `--navy #14221f`.
- `.prose th`: la mezcla de `--teal` sobre `--surface-soft` debe mantener ≥ 4,5:1 con el color de texto de cabecera.
- `.reading-progress` y `.chapter-progress`: sin texto, solo requisito de visibilidad.

Se comprueba con el bloque `html[data-theme="dark"]` y con `prefers-color-scheme` forzado en ambos sentidos.

### 6.4 Impresión

`site.css:378` redefine `--ink`, `--ink-soft`, `--muted`, `--paper`, `--surface`, `--surface-soft` y `--line`, pero **no** `--teal`, `--teal-dark`, `--gold`, `--navy`. Hoy eso ya es un problema para la barra superior; con el verde como color de marca pasa a ser visible en la placa. Se añaden los tokens restantes al bloque de impresión, de modo que cualquier elemento impreso use la paleta clara.

---

## 7. Cambio 2 — La placa "Lectura del valor"

### 7.1 Por qué SVG

Hoy son cinco elementos (`build_website.js:298-305`) posicionados en absoluto con porcentajes: `.plate-price-pin` a `left:13%`, `.plate-safety-band` a `left:18% / width:36%`, `.plate-value-range` a `right:6% / width:39%`, dos ticks. Con porcentajes, el hueco entre la banda y el rango varía con el ancho y las tres piezas dejan de encajar. En móvil, donde la placa pasa a `width: min(100%, 500px)`, es donde peor se ve.

Un SVG con `viewBox` y coordenadas fijas escala sin descuadre, es resoluble, y permite etiquetas dentro del dibujo.

### 7.2 Geometría

Escala compartida, máximo 150 unidades sobre 366 px. Con precio 100 y rango 118–141:

| Elemento | Posición |
|---|---|
Rejillas verticales | x = 122 y 244 (unidades 50 y 100) |
Barra de precio | x 0→244, y 18→33, contorno de 1,5 px |
Cifra `100` | **dentro** de la barra, alineada a la derecha en x=237 |
Descriptor DESCUENTO | texto centrado en x=266, y=47, dorado |
Corchete de descuento | x 244→288, y 50→56, dorado |
Barra de IV | x 0→366, y 77→104, relleno `--teal` al 10 % |
Segmento del rango | x 288→344, relleno `--teal` al 40 %, borde `--teal` |
Cifras `118` y `141` | x=284 (fin) y x=348 (comienzo), y=119 |

**La cifra del precio va dentro de la barra.** Es el arreglo del solape que se detectó en la maqueta: fuera, chocaba con el descriptor dorado.

### 7.3 Contenido y enlaces

- Tres celdas de lectura: precio, IV (rango) y margen de seguridad.
- El **MoS se calcula contra el extremo bajo** del rango: `(118 − 100) / 118 = 15 %`. Contra el extremo alto daría 29 %, y esa cifra aparece explicada, no oculta. Es la regla de `AGENTS.md` puesta a la vista.
- Bloque de cálculo bajo las celdas, con la fórmula y una línea que explica por qué se cotiza contra el extremo conservador.
- Pie con **empresa, fecha de cierre, ejercicio y fuente**, y enlace a `casos-reales.html`.
- El pie del caso de la portada es el mismo dato que alimenta la ficha. La divergencia la detecta el validador.

### 7.4 Accesibilidad y responsive

- La tarjeta conserva `role="img"` y `aria-label`.
- El SVG lleva `<title>` y `<desc>` con la lectura en texto.
- Por debajo de 520 px la fila de tres celdas pasa a una columna. Se elimina el bloque `.plate-legend` y su regla de una columna (`site.css:335-342`), que ya no existe.
- `prefers-reduced-motion` no aplica: la placa es estática.

### 7.5 CSS a retirar

`site.css:211-224` (`.plate-scale`, `.plate-axis`, `.plate-price-pin`, `.plate-safety-band`, `.plate-value-range`, `.plate-tick`, `.plate-legend`, `.plate-key*`) y las reglas responsive de `site.css:336-342`. Se conservan `.valuation-plate`, `.plate-top` y `.plate-foot` porque siguen aplicándose.

---

## 8. Cambio 3 — Sección de casos reales

### 8.1 Ubicación

Parte canónica `manual_parts/parte_38_casos_reales.md`, insertada en `build_manual.js` **después** de `parte_35_aliases.md` y **antes** de `parte_37_protocolo_tiempos.md`. Así el protocolo sigue siendo la sección final y los 34 capítulos no se tocan.

Cambios en `tools/build_website.js`:

| Línea | Cambio |
|---|---|
`:31` | `sectionPattern` reconoce `Casos reales` |
`:35` | `kind: 'cases'` para ese patrón |
`:38` | `pageStarts.length !== 37` |
`:47` | `id: 'casos-reales'`, `file: 'casos-reales.html'` |
`:54` | título por defecto para `cases` |
`:71` | `sectionFor()` devuelve `'Casos reales'` |
`:265` | `pageLabel` devuelve `'DATOS REALES'` |
`:244` | grupo nuevo de sidebar |

Grupo de sidebar, entre "Casos y referencia · 30–34" y "Consulta rápida": `Casos reales · informes públicos`, con la página nueva.

### 8.2 Estructura de la sección

| | |
|---|---|
`R.1` | Qué cambia respecto al capítulo 30: datos de informes publicados, corte distinto por empresa, IV siempre como rango, cada empresa en su moneda, sin conversión |
`R.2` | **Sesgo de supervivencia**: seis aciertos no son seis pruebas, remisión al capítulo 29, y qué habría rechazado el filtro en las empresas que no están aquí |
`R.3` | **Comparativa de las seis**: empresa, sector, país, norma contable, **ejercicio más reciente**, condición de auditoría, cierre de mercado, precio, rango IV, MoS, ROIC−WACC, fuente, método |
`R.4` | **Esquema normalizado y norma contable**: las líneas comunes, la tabla de normalizaciones por empresa, y las salvedades por norma |
`R.5` | **Método común**: FCFF, WACC, valor terminal, puente EV→equity, MoS contra el extremo bajo |
`R.6`–`R.11` | Una ficha por empresa: Microsoft, Costco, JPMorgan, TSMC, LVMH, Toyota |
`R.12` | Registro de fuentes: documento, ejercicio, fecha de consulta y qué cifras salen de cada uno |

### 8.3 Anatomía de la ficha

Cada ficha, en este orden:

1. **Identidad y negocio** — qué hace, cómo gana dinero, por qué se mira.
2. **Estados financieros** — cuenta de resultados, balance y flujos de 5 años, **con el análisis de qué ha cambiado** frente al año anterior, no solo la tabla.
3. **Ratios año a año** — márgenes, rentabilidad, apalancamiento, liquidez, rotación, conversión de caja.
4. **Calidad del beneficio y dónde aparece el dinero** — owner earnings, FCF, devoluciones de capital.
5. **DCF** — entradas, supuestos (`g`, WACC, β, `R_f`, ERP, tasa fiscal), proyección de 5 años, puente EV→equity, rango IV y MoS.
6. **Sensibilidad** — WACC ±1 pp y `g` ±0,5 pp.
7. **Lectura del filtro** — qué concluye el método del manual y bajo qué supuestos. **No dice comprar ni vender.**
8. **Por qué casi la rechaza el filtro** — el caso que el filtro habría descartado. Es la contramedida del sesgo de supervivencia, y va en las seis.
9. **Qué invalidaría el cálculo** — 3 o 4 condiciones concretas.
10. **Fuentes** — documento, ejercicio, fecha de consulta.

### 8.4 Esquema normalizado

Las seis usan tres normas. Sin normalizar, la comparativa no significa nada.

| Empresa | Norma | Consecuencia para el esquema |
|---|---|---|
Microsoft | US GAAP | Reclasificaciones de leases y concentración en partes relacionadas declaradas por la propia empresa
Costco | US GAAP | Ventas separadas de cuotas de socio; partida no recurrente en FY2026
JPMorgan | US GAAP | Sin inventario; la deuda es insumo, no apalancamiento; el EV no es útil |
TSMC | IFRS | Actúa como agente en operaciones puntuales: ventas brutas frente a netas
LVMH | IFRS | Ingresos por división, efecto de tipo de cambio y operaciones no corrientes
Toyota | Japanese GAAP | Publica JGAAP e IFRS; se elige una y se declara. Las partidas "otros ingresos y gastos operativos" mueven resultado frente a IFRS |

Líneas del esquema, agrupadas en tres bloques. Todas las empresas las rellenan con las mismas claves:

**Resultado (11):** ventas · coste de ventas · beneficio bruto · gastos operativos · resultado operativo · resultado no operativo · resultado antes de impuestos · impuestos · resultado neto · acciones diluidas · BPA

**Balance (12):** efectivo y equivalentes · inversiones a corto plazo · cuentas por cobrar · inventarios · activos corrientes · activo total · cuentas por pagar · deuda a corto plazo · deuda a largo plazo · pasivo total · patrimonio · capital invertido bruto

**Flujos (9):** amortizaciones · CapEx · variación del NWC · CFO · FCF histórico (`CFO − CapEx`, declarado apalancado) · dividendos · recompras · caja neta del periodo · devoluciones totales al accionista

Regla dura: **si un dato no está en el informe, `n/d`**. Nunca se rellena con una estimación silenciosa.

### 8.5 Salvedades por norma

Se documentan en `R.4` y se repiten donde afecten a una ficha:

- **Resultado operativo.** Las tres normas lo definen de forma distinta. En Japanese GAAP conviven el beneficio operativo y el beneficio ordinario; el segundo incluye partidas que en IFRS están fuera del resultado operativo. El texto generado no usa los kanji: `validate_manual.js` rechaza caracteres CJK.
- **Arrendamientos.** IFRS 16 y ASC 842 capitalizan los dos, pero IFRS 16 elimina la categoría de lease financiero para el arrendatario y ASC 842 la mantiene. Rompe la comparabilidad de EBIT y EBITDA, y por tanto del margen operativo.
- **Bruto contra neto.** TSMC actúa como agente en operaciones puntuales, Costco separa las cuotas de socio de las ventas, y Microsoft presenta la publicidad de búsqueda antes y después de costes de adquisición de tráfico. Cambia la cifra de ventas y el margen sin que cambie nada del negocio.
- **Reclasificaciones.** Microsoft ha desplazado obligaciones de arrendamiento de lease financiero a lease operativo, y la propia empresa advierte de que altera la interpretación del CapEx y del FCF. Cualquier comparativa de FCF tiene que corregirlo.
- **Partidas no recurrentes.** El FY2026 de Costco incluye un beneficio no recurrente por devoluciones arancelarias IEEPA de 0,15 $/acción. Entra en el beneficio y no vuelve. Es un caso limpio de owner earnings ajustado.
- **Concentración de partes relacionadas.** Microsoft declara 24.100 M USD de ingresos y 6.000 M de cuentas por cobrar frente a OpenAI. Va por escrito en la ficha.
- **Moneda.** Cada empresa en la suya: USD, TWD, EUR, JPY. **No se convierte.** El MoS es un ratio y por tanto sí es comparable; el valor intrínseco absoluto no lo es, y así se dice.

### 8.6 El caso de JPMorgan

Único caso que se desvía del formato común, y la desviación es el contenido.

- La comparativa lo marca con `n/d` en todo lo que no tiene sentido para banca: EV, EV/EBITDA, ROIC−WACC en sentido industrial.
- Lleva columna de **método**: `FCFE / K_e` en vez de `FCFF / WACC`.
- Su ficha tiene un apartado propio: por qué el FCFF con WACC no es válido cuando la deuda es insumo operativo, y qué se usa en su lugar.
- Es también el que sostiene el sesgo de supervivencia: un banco que pasa el filtro de ROIC y aun así no ofrece margen de seguridad.

---

## 9. Datos, fuentes y aviso legal

### 9.1 Política de datos

- Se usa **el último periodo publicado por cada empresa** en la fecha de construcción, no una fecha común. No se alinean los cortes entre empresas.
- Cada empresa declara: etiqueta del ejercicio, fecha de fin de periodo, documento de origen, condición de auditoría, fecha de consulta.
- La comparativa lleva columna de **ejercicio más reciente** porque las ventanas de 5 años no coinciden.
- Datos de mercado: el último cierre disponible, con su fecha, declarado por empresa.
- Estado verificado al escribir este spec: Microsoft publicó el 10-K de FY2026 (cerrado 30 jun 2026); Costco publicó resultados de FY2026 (cerrado 30 ago 2026) el 24 sep 2026, en nota de prensa **sin auditar**, con el 10-K todavía no depositado. Esa diferencia de condición se declara en el registro de fuentes.
- Si un campo no aparece en el informe: `n/d`. No se estima.

### 9.2 Registro de fuentes

`R.12` es el registro completo: una fila por documento, con ejercicio, fecha de consulta, enlace o archivo, y qué cifras salen de ahí. El Apéndice D (`parte_36_apendices.md:121`) deja de duplicar el registro y pasa a apuntar a `R.12`.

### 9.3 Aviso legal a dos niveles

El aviso deja de ser único, porque ahora conviven datos ficticios y datos reales en el mismo documento.

| Ubicación | Texto |
|---|---|
`footerHtml()` (`build_website.js:257`) | `Capítulos 1–34: datos ficticios (corte 31 dic 2025) · Casos reales: informes públicos (corte por empresa)` |
`disclaimer-strip` (`:346-349`) | Dos niveles: qué es real, qué no, y se mantiene explícitamente "no es asesoramiento financiero ni una recomendación de compra" |
`hero-meta` (`:294`) | `34 capítulos · Casos ficticios · Casos reales` |
`stats-row` (`:316-321`) | `34` capítulos · `5` casos ficticios · `6` casos reales · `2026` corte de mercado |
`topic-card` 06 (`:276`) | Menciona que la sección de casos reales es aparte y con datos de mercado |
`quick` (`:278-282`) | Nuevo enlace "Ver los casos reales" |

El veredicto por empresa es **lectura del filtro**, nunca recomendación. Se mantiene la línea que hoy ya existe en `:348` porque ahora es más necesaria que antes, no menos.

### 9.4 `AGENTS.md`

El invariante pasa a ser de dos niveles:

- Capítulos 1–34 y apéndices: datos ficticios, corte 31 dic 2025.
- Sección de casos reales: datos de informes públicos, con ejercicio, condición de auditoría, fuente y fecha de consulta por empresa, sin alinear fechas entre empresas.

Se conservan sus condiciones actuales (petición explícita y fuentes fechadas) y se añade que `manual_parts/parte_38_casos_reales.md` es un artefacto generado por `tools/casos_reales_render.js` desde `tools/casos_reales.js`, y que editarla a mano se sobrescribe.

Se añade un paso a la cadena: `verify_reviewed_numbers.js` cubre también los casos reales.

El material generado —master, HTML y la parte `parte_38`— no puede contener caracteres cirílicos, CJK ni hangul. `validate_manual.js` los rechaza. Los nombres de partidas japonesas se escriben en castellano.

---

## 10. Cambios en la validación

| Fichero | Cambio |
|---|---|
`tools/validate_website.js` | `requiredFiles` += `casos-reales.html`; 38→39 páginas; 37→38 documentos de búsqueda; **check nuevo** que compara precio, rango IV y MoS de la placa contra `casos_reales.js` |
`tools/validate_manual.js` | Exigir `CASOS REALES` y `SESGO DE SUPERVIVENCIA` en la lista `required` |
`tools/verify_reviewed_numbers.js` | Bloque nuevo: recalcula desde el módulo, para cada empresa, IV bajo y alto, MoS, puente EV→equity y valor terminal, y los compara con lo esperado. Mismo patrón que el capítulo 30 |
`tools/canonical_cases.js` | Sin cambios: cubre el capítulo 30 |
`tools/validate_html.js` | Sin cambios, salvo que aparezcan bloques de fórmula nuevos |

El check de coherencia placa↔módulo es la pieza que hace que la decisión 9 no dependa de la disciplina: si alguien edita el módulo y olvida la placa, la validación falla.

---

## 11. Orden de ejecución

Cada paso deja el repositorio en un estado que pasa la cadena completa.

1. **Tema.** No depende de nada. Theme toggle, tokens, reparto del acento, impresión. Sin datos.
2. **Maquinaria.** `casos_reales.js` con **una** empresa de datos provisionales, `casos_reales_render.js`, parte generada, splitter de `build_website.js`, sidebar, `validate_website.js` y `verify_reviewed_numbers.js`. Hasta que esto pasa, nada más es comprobable.
3. **Placa y portada.** Con la empresa provisional, para ver el resultado entero antes de invertir en datos.
4. **Los seis casos.** Primero **Microsoft y TSMC** — una de cada bloque, Estados Unidos e internacional. Se enseña al usuario la tabla de cifras del par. Con esas dos ya montadas y validadas, se hacen las cuatro restantes.
5. **Textos.** Portada, footer, aviso legal, `AGENTS.md`.
6. **Cadena completa** de los once scripts.

El paso 4 es deliberadamente el más largo y el que más veces se repite sobre un par antes de escalar. La regla acordada: **no se escribe una línea de manual sin que las cifras estén verificadas**.

---

## 12. Riesgos

| Riesgo | Cobertura |
|---|---|
Errores en las cifras transcritas | Dos empresas primero; verificación con el usuario antes de escribir; `n/d` en vez de rellenar; `verify_reviewed_numbers.js` recalcula desde el módulo |
La placa contradice a la ficha | Fuente única más check de validación que compara ambos |
La banca no encaja en la comparativa | Columna de método, `n/d` en lo no comparable, apartado propio en la ficha |
El sesgo de supervivencia queda sin nombrar | `R.2` más la línea "casi la rechaza el filtro" en las seis fichas |
Comparar tres normas contables sin normalizar | Esquema común, tabla de normalizaciones por empresa, salvedades por norma |
Clasificación de leases que altera el FCF | Documentado en `R.4` y corregido antes de comparar FCF |
Tablas reales más anchas que las del capítulo 30 | Revisión del salto de página; las tablas usan `min-width` con desplazamiento y en impresión se ponen a ancho completo |
Contraste tras mover acentos | Solo tres selectores cambian fondo; se comprueban en los dos temas |
La parte generada se edita a mano y se pierde | Se declara en `AGENTS.md` y el texto de las plantillas vive en el renderizador |

---

## 13. Criterios de aceptación

1. Los once scripts de la cadena pasan, en orden.
2. `site/` tiene 39 páginas HTML y el índice de búsqueda tiene 38 documentos.
3. El master Markdown es idéntico a la concatenación de las 14 partes canónicas.
4. Hay 34 capítulos, sin huecos ni duplicados, y el protocolo es la sección final.
5. El tema por defecto es el verde; el claro sigue disponible y persiste entre páginas.
6. La placa muestra precio, rango IV y MoS idénticos a los de la ficha de Costco, y el validador lo comprueba.
7. El MoS de la placa se calcula contra el extremo bajo del rango.
8. Las seis fichas declaran ejercicio, condición de auditoría, fuente y fecha de consulta.
9. No hay ninguna cifra real sin fuente fechada.
10. `R.2` nombra el sesgo de supervivencia y cada ficha tiene su línea "casi la rechaza el filtro".
11. Ninguna ficha dice comprar ni vender.
12. Los datos no comparables de banca aparecen como `n/d`, nunca como número.

---

## 14. Registro de decisiones

| Fecha | Decisión | Contexto |
|---|---|---|
2026-09-29 | Sección de primer nivel con página propia | Se descartó el apéndice por enterrar 6 casos completos en material de consulta |
2026-09-29 | Ficha completa con DCF de 5 años | Descartada la lectura sin proyección: no se vería el DCF paso a paso como en el capítulo 30 |
2026-09-29 | JPMorgan entra, con desviación declarada | El caso que mejor enseña por qué el FCFF/WACC no es universal |
2026-09-29 | Sesgo de supervivencia nombrado, no eliminado contraejemplos | Mantener las 6 empresas pedidas y enseñar el riesgo dentro |
2026-09-29 | Dirección A del tema | La B obligaba a revalidar contraste en todo el sitio |
2026-09-29 | Lectura del filtro, sin recomendación | 6 empresas reales con veredicto se leen como asesoramiento financiero |
2026-09-29 | Módulo de datos como fuente única | La alternativa de parsear el Markdown es frágil en silencio |
2026-09-29 | Comparativa antes que fichas | Aprovecha que por primera vez hay datos comparables |
2026-09-29 | Último dato publicado por empresa, sin alinear fechas | Detectado al comprobar que Microsoft tiene FY2026 y Costco también, con auditorías distintas |
