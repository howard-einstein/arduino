# Learn Arduino — Clone

Clon completo de `learn-arduino-red.vercel.app` — aplicación educativa interactiva de Arduino en 3D con Three.js.

## Estructura

```
learn-arduino/
├── index.html              # HTML principal (247 líneas)
├── package.json            # Config del proyecto
├── vite.config.js         # Config de Vite
├── assets/                 # Assets compilados (funcionales)
│   ├── index-DUxJjXqx.js   # App principal (88KB) — lecciones, UI, simulador
│   ├── stage-btHE6-0n.js   # BoardStage 3D + Three.js (404KB)
│   ├── kit-Ce41oYCW.js     # Three.js core kit (283KB)
│   ├── thumbs-gagaX1E4.js  # Renderizado de thumbnails (4KB)
│   ├── index-DM35LHSX.css  # Estilos (52KB)
│   └── *.woff2             # Fuentes (Barlow, JetBrains Mono)
├── public/                 # Assets estáticos
│   ├── favicon.ico/svg
│   ├── icon-192/512.png
│   ├── og-image.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
└── analysis/               # Código de-minificado para análisis
    ├── index.pretty.js     # 3,830 líneas — app principal legible
    ├── stage.pretty.js     # 14,485 líneas — 3D engine legible
    ├── kit.pretty.js       # 13,409 líneas — Three.js core legible
    ├── thumbs.pretty.js    # 191 líneas — thumbnails legible
    └── index.pretty.css    # 3,216 líneas — CSS legible
```

## Arquitectura

### Chunks JS (4 archivos)

| Chunk | Tamaño | Líneas (pretty) | Función |
|-------|--------|-----------------|---------|
| `index-DUxJjXqx.js` | 88KB | 3,830 | App principal: lecciones, UI, simulador Arduino, state management |
| `stage-btHE6-0n.js` | 404KB | 14,485 | BoardStage: renderizado 3D del Arduino Uno, interacción, simulación |
| `kit-Ce41oYCW.js` | 283KB | 13,409 | Three.js core: WebGLRenderer, geometrías, materiales, shaders |
| `thumbs-gagaX1E4.js` | 4KB | 191 | Renderizado de thumbnails para lesson cards |

### Lecciones (11 total)

1. **board** — Meet the board (Arduino Uno overview)
2. **blink** — Blink an LED (digitalWrite, delays)
3. **button** — Push a button (digitalRead, pull-down resistor)
4. **knob** — Turn a knob (potentiometer, analogRead, PWM)
5. **rgb** — Mix colours (RGB LED, analogWrite)
6. **light** — Sense light (LDR, analog input)
7. **sensor** — Read a sensor (HC-SR04 ultrasonic)
8. **sound** — Make a sound (buzzer, tones)
9. **motor** — Control a motor (transistor + DC motor)
10. **servo** — Sweep a servo (Servo library)
11. **project** — Build a project (combined sensor + traffic light)

### Clases principales (index.pretty.js)

- `se` — LessonList (navegación de lecciones)
- `le` — CodePanel (editor de código + serial monitor)
- `he` — Inspector (panel de propiedades de componentes)
- `ye` — Callouts (anotaciones 3D en el board)
- `be` — Tags (etiquetas flotantes)
- `xe` — Minimap
- `we` — ProgressTracker
- `Oe` — Loader (pantalla de carga)
- `ke` — HintSystem (tooltips)

### Clases principales (stage.pretty.js)

- `BoardStage` — Controlador principal del 3D
- `Kt` — PMREMGenerator (environment maps)
- `tn` — WebGLRenderer wrapper
- `fr/pr/mr` — Geometry builders (componentes Arduino)
- `vr` — Board builder (Arduino Uno PCB)
- `ni/ri` — Part builders (LEDs, resistors, buttons, etc.)
- `ji/Mi` — Wire builders (cables)
- `Bi` — Controls (cámara, pan, zoom, rotate)
- `Vi/Wi/na` — Interaction (raycaster, pick, select)
- `Ma/Na/za` — Simulator (ejecución de sketches Arduino)
- `Ya/uo` — Sound system (Web Audio API)

### Stack

- **Build tool:** Vite (Rollup)
- **3D:** Three.js (WebGL, custom shaders, PMREM)
- **Simulador:** Arduino simulator custom (no usa Wokwi ni simulador externo)
- **Audio:** Web Audio API (tones, melodías)
- **Fuentes:** Barlow Semi Condensed + JetBrains Mono (self-hosted woff2)
- **Sin dependencias externas:** Todo es self-contained

## Uso

```bash
# Opción 1: Vite dev server
npm install
npm run dev

# Opción 2: Server estático simple
npx serve -s . -l 3000

# Opción 3: Python
python3 -m http.server 3000
```

Abrir `http://localhost:3000`

## Análisis de código

Las versiones de-minificadas están en `analysis/`. Usar para:

- Entender la arquitectura de la app
- Modificar lecciones existentes o añadir nuevas
- Estudiar el simulador Arduino
- Estudiar el rendering 3D con Three.js

## Notas

- El código fue de-minificado con Prettier 3.3.3
- Los nombres de variables son los del minificador (single-letter), pero la estructura es legible
- No hay source maps disponibles (403/404 en Vercel)
- La app es 100% client-side, sin backend
- Autor original: Dilum Sanjaya (@DilumSanjaya)
# arduino
