# 7. Consolidación definitiva de Swiss Blueprint como identidad oficial

Fecha: 2026-10-21

## Estado

Aceptado

## Contexto

Tras la evaluación de prototipos visuales para la plataforma **Ingtelecto**, se seleccionó **Swiss Blueprint** como la identidad visual definitiva debido a su rigor gráfico, precisión industrial y alta legibilidad sobre fondo blanco milimétrico con acentos en azul cobalto.

Una vez tomada la decisión de diseño, mantener barras flotantes o menús de conmutación de temas en la interfaz genera ruido visual innecesario y complejidad en el código.

## Decisión

1. **Fijación exclusiva de Swiss Blueprint**:
   - Se estableció `swiss-blueprint` como el único esquema visual en [`src/styles/themes.css`](file:///home/carlosdev/projects/aprender-arduino/src/styles/themes.css), mapeado directamente a las variables de `:root` y `body`.
   - Se actualizó [`index.html`](file:///home/carlosdev/projects/aprender-arduino/index.html) con `data-theme="swiss-blueprint"` y meta etiqueta de color `#f4f7fb`.

2. **Eliminación de la barra flotante y selectores de tema**:
   - Se retiró la barra flotante `#theme-toolbar` del DOM y de la lógica de [`src/main.js`](file:///home/carlosdev/projects/aprender-arduino/src/main.js).
   - Se removió el selector de temas del panel lateral de configuración en [`src/ui/sidebar.js`](file:///home/carlosdev/projects/aprender-arduino/src/ui/sidebar.js).

3. **Simplificación del ciclo de vida**:
   - La aplicación arranca de forma directa y determinista en Swiss Blueprint sin dependencias de lectura/escritura de temas alternativos en `localStorage`.

## Consecuencias

### Positivas
- Código más limpio, ligero y mantenible: se eliminaron ~120 líneas de CSS y JS dedicadas a la alternancia de temas.
- Interfaz completamente despejada: el usuario interactúa directamente con la placa 3D y el código sin elementos distractores.
- La identidad visual de **Ingtelecto** queda formalizada y lista para su integración embebida en artículos técnicos.

### Negativas / Mitigaciones
- Ninguna. Las pruebas en navegador confirmaron el renderizado óptimo y la estabilidad de la escena 3D y los componentes 2D.
