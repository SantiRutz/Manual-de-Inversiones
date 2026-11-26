# Manual de inversiones y Value Investing

Este directorio contiene un manual educativo en español sobre inversiones, análisis fundamental y Value Investing.

## Archivos principales

- `MANUAL_VALUE_INVESTING_Y_ANALISIS_FINANCIERO_REVISADO.md`: documento maestro final revisado, editable en Markdown.
- `MANUAL_VALUE_INVESTING_Y_ANALISIS_FINANCIERO_REVISADO.html`: versión final revisada, autónoma, con estilos, navegación y diseño preparado para imprimir o guardar como PDF.
- `site/index.html`: portada de la web estática. El directorio `site/` incluye páginas por capítulo, búsqueda y recursos locales para funcionar offline o publicarse como sitio estático.

El documento incluye 34 capítulos, fórmulas con ejemplos y límites, estados financieros, ratios, DCF, escenarios, Owner Earnings, múltiplos, dividendos, WACC/CAPM, riesgo, bonos, ETF, proceso de análisis, checklist, value traps, errores conductuales, casos ficticios, tabla maestra, glosario, apéndices y una sección final de análisis de una acción en 30 minutos, 1 hora y 3 horas.

Para obtener un PDF, abra `MANUAL_VALUE_INVESTING_Y_ANALISIS_FINANCIERO_REVISADO.html` en un navegador, use **Imprimir → Guardar como PDF** y active los gráficos de fondo si desea conservar el diseño.

## Sitio web estático

```powershell
node tools/build_website.js
node tools/validate_website.js
```

Abra `site/index.html` para leerlo localmente sin conexión. Para publicarlo, suba el contenido completo del directorio `site/` a cualquier alojamiento de archivos estáticos. No requiere servidor de aplicación, base de datos, paquetes npm ni servicios externos. El generador usa las mismas partes canónicas en `manual_parts/`; `site/` es salida generada y no se edita a mano. Los estilos y el JavaScript fuente viven en `tools/site_template/`.

Al imprimir una página del sitio (botón **Imprimir** o Ctrl/⌘ P) se obtiene una edición formal en A4: membrete, encabezados y numeración de página, tablas y fórmulas maquetadas y la portada como cubierta. Active «Gráficos de fondo» para conservar los colores.

## App Android sin conexión

```powershell
node tools/build_apk.js
```

Genera `dist/manual-inversion.apk` y la copia descargable `site/descargas/manual-inversion.apk`, enlazada desde la portada. Usa el JDK 17 y el Android SDK instalados (sin Gradle ni descargas). La app no pide permisos: el manual completo va dentro del APK y funciona sin Internet. Requiere Android 8.0 o superior. Se firma con `~/.android/manual-inversion.jks`; conserve ese archivo, porque las actualizaciones deben firmarse con la misma clave.

## Reconstrucción

Si se editan los archivos de `manual_parts/`, se puede regenerar el documento maestro, el HTML y el sitio. `tools/build_manual.js` define las 14 partes canónicas y su orden; los borradores y reportes históricos se retiraron para evitar reconstrucciones ambiguas.

```powershell
node tools/build_manual.js
node tools/validate_manual.js
node tools/validate_html.js
node tools/verify_reviewed_numbers.js
node tools/scan_master.js MANUAL_VALUE_INVESTING_Y_ANALISIS_FINANCIERO_REVISADO.md
node tools/scan_question_artifacts.js MANUAL_VALUE_INVESTING_Y_ANALISIS_FINANCIERO_REVISADO.md
node tools/build_website.js
node tools/validate_website.js
```

## Advertencia

Los datos de empresas, precios, portafolios y rentabilidades de los ejemplos son hipotéticos. El material no es asesoramiento financiero y no garantiza resultados. Para una decisión real se deben consultar fuentes primarias, presentaciones de estados financieros y la fecha de cada dato.
