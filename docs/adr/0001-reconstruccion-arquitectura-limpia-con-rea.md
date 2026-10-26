# ADR 0001: Reconstrucción de Arquitectura Limpia e Ingeniería Inversa con REA

* **Estado:** Aceptado
* **Fecha:** 2026-10-20
* **Autor:** Carlos Julián (@carlosdevwp) & Antigravity AI

---

## Contexto y Problemática

El proyecto `aprender-arduino` es una aplicación web interactiva educativa en 3D para aprender Arduino (con simulador de circuitos, editor C++ interactivo y visualización Three.js en tiempo real). Fue inicialmente clonado a partir de un despliegue de producción ofuscado (`learn-arduino-red.vercel.app`).

El análisis forense inicial evidenció que:
1. El directorio `src/` se encontraba completamente vacío.
2. `index.html` consumía directamente bundles minificados en `assets/` (`index-DUxJjXqx.js`, `stage-btHE6-0n.js`, `kit-Ce41oYCW.js`, `thumbs-gagaX1E4.js`).
3. Todas las variables y llamadas internas estaban mangled (`e`, `t`, `n`, etc.), impidiendo un desarrollo profesional, modularización, pruebas unitarias y personalización idiomática (Ruta C seleccionada por el usuario).

## Decisión de Arquitectura

Se decide aplicar el framework de ingeniería inversa **REA (`morluto/rea`)** respaldado por el motor de descompilación estructural **Wakaru (1.14.0)** para:
1. **Descompilar y reconstruir el AST** de los 4 bundles compilados, generando mapas de fuentes (*source maps*) y restaurando identificadores semánticos.
2. **Reconstruir la arquitectura en `src/` bajo Clean Architecture**, desacoplando:
   * **Capa de Dominio & Datos (`src/data/`):** Definición de las 11 lecciones de Arduino, esquemas de pines, especificaciones de hardware y snippets C++.
   * **Capa de Aplicación & Estado (`src/app/` o `src/state/`):** Máquina de estados (idle, running, stopped), atajos de teclado y eventos.
   * **Capa de Presentación & UI (`src/ui/`):** Loader interactivo, terminal del monitor serial, inspector de componentes y tarjetas.
   * **Capa de Simulación & 3D (`src/stage/` & `src/graphics/`):** Motor de física/circuitería `BoardStage` y subsistema WebGL/Three.js (`kit`).
   * **Punto de Entrada (`src/main.js`):** Reemplazar la carga de bundles estáticos en `index.html` por `src/main.js` nativo ES6 servido dinámicamente por Vite.

## Consecuencias

### Positivas:
* **Código Fuente Limpio y Mantenible:** Se elimina la dependencia de blobs precompilados opacos en `assets/`.
* **Localización y Extensibilidad:** Capacidad total para traducir al español, añadir nuevos sensores, componentes (ej. relés, pantallas OLED) y nuevas lecciones de robótica/electrónica.
* **Depuración y HMR Real:** Hot Module Replacement nativo de Vite funcionando sobre archivos fuente individuales en `src/`.
* **Adherencia a Formalidades:** Respeto a las reglas de ingeniería del equipo (Git commits descriptivos, separación de responsabilidades y tipado progresivo).

### Desafíos:
* Requiere refactorizar manualmente llamadas residuales de nombres de variables no recuperables hacia nombres semánticos del dominio de electrónica.
