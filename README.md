# Learn Arduino 

A  clone of the interactive Arduino learning experience from `learn-arduino-red.vercel.app`, rebuilt as a client-side web app with a 3D board view and lesson-based learning flow.

This project explores how an educational Arduino simulator can be packaged in a browser using Three.js, custom UI panels, interactive components, and code-based exercises.

## Overview

The app teaches core Arduino concepts through a guided set of lessons, each focused on a different hardware pattern:

- LEDs and digital output
- Inputs such as buttons and sensors
- Analog signals and PWM
- Sound and motors
- Servo control and integrated projects

It is designed as a hands-on visual learning environment where learners can inspect the board, read code examples, and observe simulated hardware behavior in real time.

## Features

- 3D Arduino board visualization
- Layered lesson navigation
- Embedded code examples and simulation logic
- Interactive inspector and callout system
- Audio feedback for sound-related lessons
- Browser-only implementation with no backend

## Project structure

```text
learn-arduino/
├── index.html              # Main app entry
├── package.json            # Project scripts and dependencies
├── vite.config.js         # Vite configuration
├── assets/                 # Production bundle assets
│   ├── index-DUxJjXqx.js   # Main app logic
│   ├── stage-btHE6-0n.js   # 3D rendering and board logic
│   ├── kit-Ce41oYCW.js     # Three.js core helpers
│   ├── thumbs-gagaX1E4.js  # Thumbnail generation
│   ├── index-DM35LHSX.css  # App styles
│   └── *.woff2             # Fonts
├── public/                 # Static assets
│   ├── favicon.ico/svg
│   ├── icon-192/512.png
│   ├── og-image.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── analysis/               # De-minified source for inspection
│   ├── index.pretty.js
│   ├── stage.pretty.js
│   ├── kit.pretty.js
│   ├── thumbs.pretty.js
│   └── index.pretty.css
└── src/                    # Source files used by the app
    ├── main.js
    ├── esp32Viewer.js
    ├── audio/
    ├── data/
    ├── stage/
    ├── state/
    ├── styles/
    └── ui/
```

## Quick start

### 1) Install dependencies

```bash
npm install
```

### 2) Start the dev server

```bash
npm run dev
```

### 3) Open the app

Visit:

```text
http://localhost:3000
```

### Alternative static serving

```bash
npx serve -s . -l 3000
```

Or:

```bash
python3 -m http.server 3000
```

## Lesson set

The app includes 11 lessons:

1. **board** — Intro to the Arduino Uno board
2. **blink** — LED blinking with `digitalWrite` and delays
3. **button** — Button input with pull-down resistors
4. **knob** — Potentiometer and analog input
5. **rgb** — RGB LED and PWM mixing
6. **light** — Light-sensing with an LDR
7. **sensor** — Ultrasonic sensor readings
8. **sound** — Buzzer and tone generation
9. **motor** — DC motor control with a transistor
10. **servo** — Servo movement patterns
11. **project** — Combined project with multiple components

## Architecture notes

### Main JS bundles

| Bundle | Size | Purpose |
|---|---:|---|
| `index-DUxJjXqx.js` | 88KB | App logic, lessons, simulator, UI state |
| `stage-btHE6-0n.js` | 404KB | 3D board rendering and simulation |
| `kit-Ce41oYCW.js` | 283KB | Three.js core helpers and rendering pipeline |
| `thumbs-gagaX1E4.js` | 4KB | Lesson thumbnail rendering |

### Core concepts

- `BoardStage` — main 3D board controller
- `LessonList` — lesson navigation and selection
- `CodePanel` — editor and serial monitor UI
- `Inspector` — component property and metadata panel
- `Callouts` — annotations placed in the 3D board
- `HintSystem` — in-context guidance and tooltips
- `Simulator` — executes Arduino-like behavior in the browser

## Tech stack

- **Build tool:** Vite
- **3D rendering:** Three.js
- **Audio:** Web Audio API
- **UI:** Custom client-side interface components
- **Runtime model:** Fully browser-based, no backend required

## Why this repo exists

This repository serves as a reference and learning aid for understanding how a complex educational interactive app is structured. The `analysis/` folder contains de-minified sources so the code can be inspected more easily than in the production bundle.

## Code analysis

The de-minified versions are available in `analysis/` and are useful for:

- understanding the app architecture
- modifying existing lessons
- adding new tutorial modules
- studying the Arduino simulation logic
- inspecting the 3D rendering pipeline

## Notes

- The code was de-minified using Prettier 3.3.3.
- Variable names are intentionally minified, but the structure remains readable.
- No source maps are available from the original deployment.
- The app is 100% client-side and has no server-side logic.
- Original author: Dilum Sanjaya (@DilumSanjaya)
- Stay breezy 
- PEACE, IRONMAN out

# arduino
