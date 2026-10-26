# ADR 0002: Modularización y Localización de la Capa de Dominio (Lecciones y Especificaciones)

* **Estado:** Aceptado
* **Fecha:** 2026-10-20
* **Autor:** Carlos Julián (@carlosdevwp) & Antigravity AI

---

## Contexto y Problemática

En la Fase 1 del plan de reconstrucción arquitectónica (Ruta C), el objetivo es extraer, sanear, modularizar y traducir al español neutro y técnico todo el catálogo de lecciones, especificaciones técnicas de hardware y parámetros reactivos de simulación originalmente ofuscados dentro del bundle de producción.

Los datos originales presentaban duplicación implícita de estructuras y dependencias no aisladas entre los parámetros interactivos de simulación (colores de LED, distancias de obstáculos ultrasónicos, melodías para zumbadores piezoeléctricos) y el código fuente C++ para la placa.

## Decisión de Arquitectura

Se ha estructurado la capa de dominio en `src/data/` dividida en tres módulos altamente cohesivos y desacoplados:

1. **`src/data/boardSpecs.js`:**
   * Centraliza las especificaciones técnicas oficiales de la placa Arduino Uno R3 (ATmega328P, voltajes de operación, memoria Flash, SRAM/EEPROM, reloj de 16 MHz y dimensiones).
   * Reutilizado tanto en la lección introductoria de hardware como en los paneles de inspección técnica.

2. **`src/data/helpers.js`:**
   * Implementa el principio DRY (Don't Repeat Yourself) para componentes de simulación transversales:
     * `ledColorParam`: Paleta cromática de LEDs compartida entre lecciones 2, 3 y 4.
     * `obstacleParams`: Configuración física del obstáculo dinámico compartida entre lecciones 7 (ultrasónico) y 11 (sensor de aparcamiento).
     * `rgbPresets`: Valores cromáticos y vectoriales RGB para la síntesis aditiva.
     * `melodies` y `formatMelody()`: Generador dinámico de arrays C++ de frecuencias en Hz para el zumbador pasivo.

3. **`src/data/lessons.js`:**
   * Catálogo íntegro de las 11 lecciones interactivas traducidas con rigor pedagógico y técnico al español.
   * Preserva intactos los anclajes de visualización 3D (`anchor`, coordenadas `x, y, w`), identificación de pines (`D0–D13`, `A0–A5`, `5V`, `GND`) y plantillas de código C++.
   * Exporta las funciones puras de resolución de dominio:
     * `getLessonParamDefaults(lesson)`: Extrae el mapa inicial de parámetros por lección.
     * `renderLessonCode(lesson, paramValues)`: Motor de interpolación que sustituye selectores (`{{key}}` y anidados `{{melody.notes}}`, `{{mode.logic}}`) produciendo sketches C++ listos para compilación o renderizado.

## Consecuencias

### Positivas:
* **Independencia del Framework:** Toda la capa de datos es JavaScript puro (Vanilla ES Modules), sin ataduras a Vite, Three.js o frameworks reactivos.
* **Fidelidad y Rigor Pedagógico:** Terminología técnica precisa en español (conversión ADC, modulación PWM, resistencias pull-down, rebote mecánico).
* **Testabilidad Inmediata:** Las funciones puras `renderLessonCode` y `getLessonParamDefaults` se validan mediante pruebas unitarias directas.
* **Facilidad de Extensión:** Agregar una nueva lección o componente requiere únicamente registrar su entrada en este catálogo sin modificar el motor de simulación 3D.
