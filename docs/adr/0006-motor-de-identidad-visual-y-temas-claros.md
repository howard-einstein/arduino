# 6. Motor de identidades visuales y erradicación de fondos oscuros

Fecha: 2026-10-21

## Estado

Aceptado

## Contexto

El diseño heredado y las primeras propuestas de interfaz incluían temas oscuros (`dark-obsidian` y `workbench-studio`), los cuales provocaban contrastes artificiales tipo terminal o gamer que no representan la identidad formal y técnica requerida para la plataforma educativa **Ingtelecto**.

Tras la evaluación del prototipo, se determinó el rechazo total a los fondos negros y se definió la necesidad quirúrgica de ofrecer tres alternativas estéticas exclusivas de alta luminosidad, legibilidad técnica y precisión editorial.

## Decisión

1. **Reemplazo total de temas oscuros en `src/styles/themes.css`**:
   Se eliminaron de raíz los estilos oscuros y se consolidaron tres identidades luminosas basadas en variables CSS semánticas:
   - **`laboratorio-calido`** (Predeterminado): Fondo papel técnico/arena cálido (`#f6eddd`), tonos madera y kraft de taller de prototipado físico, azul marino profundo para texto y acentos teal clásicos.
   - **`swiss-blueprint`**: Plano técnico de precisión industrial sobre fondo blanco milimétrico frío (`#f4f7fb`), cuadrícula ortogonal y líneas en azul cobalto (`#0047bb`).
   - **`nordic-minimal`**: Estudio contemporáneo blanco puro satinado (`#f8fafc`), gris aluminio anodizado suave (`#e2e8f0`), tipografía nítida y acentos cian/esmeralda (`#0d9488`).

2. **Sanitización profiláctica en tiempo de ejecución (`src/main.js`)**:
   Se añadió un filtro activo en el arranque que detecta y purga cualquier preferencia obsoleta de temas oscuros en `localStorage` (`dark-obsidian` o `workbench-studio`), forzando de forma segura el tema `laboratorio-calido` para evitar pantallas negras al recargar.

3. **Selector interactivo accesible en `src/ui/sidebar.js`**:
   Se actualizó el menú desplegable en el panel de configuración para que el usuario pueda alternar dinámicamente entre las 3 direcciones de diseño claras con persistencia reactiva.

## Consecuencias

### Positivas
- Cero fondos negros en toda la plataforma: la interfaz mantiene una experiencia de lectura técnica, descansada y luminosa.
- Flexibilidad total para evaluar y alternar entre tres direcciones visuales diferenciadas sin tocar la geometría ni el renderizado de Three.js.
- Compatibilidad completa con la escena 3D y su canvas transparente, armonizando la iluminación procedimental con el fondo de la página.

### Negativas / Mitigaciones
- Ninguna. Las capturas de pantalla automatizadas confirmaron el renderizado óptimo y el contraste cromático de los tres temas.
