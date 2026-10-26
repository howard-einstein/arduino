# 5. Desacoplamiento total, validación E2E y purgado de bundles legacy

Fecha: 2026-10-20

## Estado

Aceptado

## Contexto

Con la culminación de la Fase 3, el código fuente en `src/` implementó con éxito todas las capas del proyecto:
1. Capa de Dominio y Datos (`src/data/`)
2. Capa de Estado y Presentación (`src/state/`, `src/ui/`)
3. Capa de Infraestructura 3D, Simulación y Audio (`src/stage/`, `src/audio/`)

Sin embargo, el directorio `assets/` aún contenía 9 archivos legacy minificados (~39,700 líneas) provenientes de la compilación original del repositorio clonado (`index-*.js`, `kit-*.js`, `stage-*.js`, `thumbs-*.js` y sus versiones pretty).

Para garantizar la autonomía total del proyecto y verificar que ninguna parte del flujo de ejecución dependiera de código opaco o compilado de terceros, era necesario purgar estos bundles y someter la aplicación a validación end-to-end con un motor de navegador real.

## Decisión

1. **Eliminación definitiva de bundles minificados en `assets/`**:
   Se eliminaron todos los archivos `.js` y `.css` formateados obsoletos de `assets/`, conservando únicamente los activos estáticos estrictamente necesarios: fuentes tipográficas Web Open Font Format (`.woff2`) y la hoja de estilos base (`index-DM35LHSX.css`).

2. **Navegación e historial bidireccional**:
   Se implementó soporte reactivo para `hashchange` en `src/main.js`, permitiendo navegación fluida mediante botones de retroceso/avance del navegador y enlaces directos por ancla (ej. `#servo`, `#blink`, `#parking-sensor`).

3. **Verificación integral en runtime (Playwright Headless Shell)**:
   Se ejecutaron pruebas dinámicas en el servidor local (`http://localhost:3300/`):
   - Montaje del canvas WebGL y carga de modelos 3D sin errores ni advertencias de consola.
   - Navegación interactiva entre lecciones (LED, Servomotor, Sensor ultrasónico).
   - Simulación de circuitos, conmutación de pines, propagación de señales y volcado en tiempo real en el monitor serial.

## Consecuencias

### Positivas
- El proyecto es 100% autónomo y transparente: todo el código ejecutable vive en `src/` en ES modules modernos.
- El repositorio redujo sustancialmente su peso al eliminar ~40,000 líneas de código ofuscado innecesario.
- La compilación con Vite (`npm run build`) produce bundles limpios y optimizados a partir del código fuente en ~2.6 segundos.
- La experiencia de usuario en español está completamente afinada y validada en un navegador real sin regresiones ni dependencias fantasma.

### Negativas / Mitigaciones
- Ninguna. Las pruebas demostraron 0 errores en consola y paridad funcional total con respecto al comportamiento esperado.
