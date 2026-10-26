# ADR 0003: Reconstrucción Modular de la UI, Estado y Punto de Entrada (Fase 2)

* **Estado:** Aceptado
* **Fecha:** 2026-10-20
* **Autor:** Carlos Julián (@carlosdevwp) & Antigravity AI

---

## Contexto y Problemática

En la Fase 2 del plan de reconstrucción arquitectónica (Ruta C), el objetivo es desarticular el bundle monolítico de interfaz de usuario (`assets/index-DUxJjXqx.js`), sustituyéndolo por componentes desacoplados, fuertemente tipados conceptualmente y testeables en `src/ui/`, `src/state/` y el punto de entrada principal `src/main.js`.

Hasta esta fase, `index.html` cargaba un blob precompilado ofuscado sin modularidad, impidiendo depuración en vivo (HMR) y manteniendo textos y etiquetas en inglés original.

## Decisión de Arquitectura

Se ha reconstruido la capa de presentación y control siguiendo el patrón de responsabilidad única (Single Responsibility Principle) y el patrón Strangler Fig para la transición suave hacia la Fase 3:

1. **Gestión de Estado (`src/state/appState.js`):**
   * Encapsula el estado reactivo (`lesson`, `running`, `settings`, `values`).
   * Sincroniza de forma persistente y segura con `localStorage` (`learn-arduino:values`, `learn-arduino:settings`).
   * Controla la validación y restricción de parámetros interactivos.

2. **Componentes de Interfaz de Usuario (`src/ui/`):**
   * **`icons.js`:** Catálogo vectorial SVG optimizado para todos los iconos del sistema.
   * **`clock.js`:** Reloj digital en tiempo real con nomenclatura cronológica en español.
   * **`loader.js`:** Pantalla de carga con telemetría de inicialización y fallback accesible.
   * **`infoCard.js`:** Panel lateral de 4 pestañas (Resumen, Pines, Código, Especificaciones) con navegación por teclado accesible (ARIA) y modo expandido.
   * **`codeCard.js`:** Visor de código C++ con resaltador de sintaxis propio para Arduino, botones de parámetros interactivos y monitor serial con consola de salida y trazado de ejecución en vivo.
   * **`lessonList.js`:** Carrusel horizontal con las 11 tarjetas interactivas, scroll inercial, arrastre de puntero y registro de lecciones completadas.
   * **`sidebar.js`:** Barra de navegación con cajones emergentes (flyouts) para selector de lecciones, catálogo de piezas en escena y panel de configuración.
   * **`viewbar.js`:** Herramientas de navegación 3D orbital con brújula azimutal y atajos de teclado.
   * **`minimap.js`:** Radar 2D sobre canvas que proyecta la cámara, orientación y piezas en tiempo real.
   * **`inspector.js`:** Cuadro de diálogo flotante contextual que conecta visualmente (mediante líneas guía SVG) con la pieza seleccionada en 3D.
   * **`callouts.js`:** Motor de superposición y anclaje de llamadas educativas 3D hacia el espacio 2D del DOM.

3. **Punto de Entrada (`src/main.js`):**
   * Orquestador central que vincula el estado, la UI, los atajos de teclado globales y la carga asíncrona de recursos.
   * Conecta provisionalmente el motor 3D compilado (`stage-btHE6-0n.js`) y el renderizador de miniaturas (`thumbs-gagaX1E4.js`) mientras se ejecuta la Fase 3.
   * Se actualizó `index.html` para consumir directamente `/src/main.js` como módulo nativo ES6 en Vite.

## Consecuencias

### Positivas:
* **HMR Funcional:** Cambios en componentes de UI, textos didácticos o lógica de estado se reflejan en milisegundos en el servidor Vite.
* **Separación de Responsabilidades:** Ningún componente de UI manipula el estado de forma opaca; todo fluye a través de callbacks explícitos.
* **Internacionalización y Accesibilidad:** Marcado semántico ARIA, títulos y descripciones en español en la totalidad de la interfaz de usuario.
* **Compilación de Producción Exitosa:** Verificada la compilación completa de Vite (`npm run build`) sin advertencias ni errores.

### Siguientes Pasos (Fase 3):
* Descompilar y modularizar `BoardStage` y el motor Three.js (`kit`) en `src/stage/` y `src/graphics/` para independizar por completo el proyecto de la carpeta `assets/`.
