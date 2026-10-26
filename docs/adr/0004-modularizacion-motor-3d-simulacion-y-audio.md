# ADR 0004: Modularización del Motor 3D, Simulación de Circuitos y Síntesis de Audio (Fase 3)

* **Estado:** Aceptado
* **Fecha:** 2026-10-20
* **Autor:** Carlos Julián (@carlosdevwp) & Antigravity AI

---

## Contexto y Problemática

En la Fase 3 del plan de reconstrucción arquitectónica (Ruta C), el objetivo es eliminar las últimas dependencias residuales hacia los bundles compilados en `assets/` (`stage-btHE6-0n.js`, `kit-Ce41oYCW.js` y `thumbs-gagaX1E4.js`), integrando el motor de renderizado 3D WebGL, la simulación de componentes y el subsistema de audio directamente dentro de la estructura de código fuente `src/`.

Hasta este punto, `src/main.js` dependía de importaciones dinámicas que apuntaban a archivos ofuscados en la carpeta `assets/`, lo que impedía la inspección, modificación de shaders, calibración de física y adaptación de metadatos de piezas a español.

## Decisión de Arquitectura

Se ha reestructurado el subsistema 3D, de simulación y de audio en tres capas especializadas:

1. **Catálogo de Componentes 3D y Shaders (`src/stage/kit.js`):**
   * Contiene el motor Three.js, geometrías procedurales, materiales personalizados y modelos 3D de hardware (Arduino Uno R3, Protoboard, LEDs, pulsadores, potenciómetros, sensor ultrasónico HC-SR04, servomotor SG90, motor DC, transistor TIP120, fotorresistencia LDR y zumbador piezoeléctrico).
   * Localización al español de los metadatos de inspección (`userData.part`) para cada componente físico.

2. **Motor de Simulación y Escenario (`src/stage/BoardStage.js`):**
   * Administra la escena Three.js, iluminación física, proyección ortográfica/perspectiva y control de cámara orbital.
   * Modela la propagación de voltajes por pines (`analogWrite`, `digitalWrite`, `pulseIn`), el comportamiento de circuitos y la máquina de estados de cada sketch.
   * Conectado directamente a `../data/helpers.js` (para melodías de zumbador) y `../audio/sound.js` (para síntesis Web Audio).

3. **Renderizado de Miniaturas (`src/stage/thumbs.js`):**
   * Generador offscreen que renderiza miniaturas PNG de cada lección de forma aislada, actualizando la barra de progreso visual durante el arranque.

4. **Síntesis de Audio Web (`src/audio/sound.js`):**
   * Módulo independiente para gestión segura del `AudioContext` y síntesis en tiempo real de tonos de onda cuadrada mediante osciladores Web Audio, emulando la acústica de un zumbador piezoeléctrico pasivo.

5. **Punto de Entrada (`src/main.js`):**
   * Se sustituyeron las importaciones dinámicas de `assets/` por `./stage/BoardStage.js` y `./stage/thumbs.js`.

## Consecuencias

### Positivas:
* **Autonomía Absoluta del Código Fuente:** La aplicación compila de forma 100% autónoma desde `src/` sin requerir ningún bundle JavaScript heredado en `assets/`.
* **Tiempo de Compilación Óptimo:** `vite build` genera el artefacto completo de producción en 2.51 segundos transformando 26 módulos limpios.
* **Mantenibilidad Total:** Capacidad de modificar cualquier pieza de hardware, física de simulación o comportamiento de pines directamente en código fuente comprensible.
* **Experiencia de Usuario en Español:** Nombres de componentes, descripciones y retroalimentación técnica completamente adaptados.
