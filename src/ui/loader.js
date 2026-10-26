/**
 * Controlador de la pantalla de carga inicial interactiva.
 * Muestra el progreso de precarga de fuentes, compilación de modelos 3D y renderizado de miniaturas.
 */
export class Loader {
  /**
   * @param {HTMLElement|null} element - Elemento raíz del loader (#loader).
   */
  constructor(element) {
    this.root = element;
    this.fill = element?.querySelector('.loader-fill');
    this.label = element?.querySelector('.loader-step');
    this.value = 0;
    this.closed = !element;
  }

  /**
   * Avanza la barra de progreso a un porcentaje dado con una etiqueta descriptiva.
   * @param {string} label - Mensaje de estado visible.
   * @param {number} progress - Valor flotante entre 0 y 1.
   */
  step(label, progress) {
    if (this.closed) return;
    if (label && this.label) {
      this.label.textContent = label;
    }
    if (progress > this.value && this.fill) {
      this.value = progress;
      this.fill.style.transform = `scaleX(${progress})`;
    }
  }

  /**
   * Concluye la carga, ejecuta la animación de salida y elimina el nodo del DOM.
   * @returns {Promise<void>}
   */
  done() {
    if (this.closed) return Promise.resolve();
    this.closed = true;
    this.step('Listo', 1);
    document.documentElement.classList.remove('is-loading');
    this.root?.classList.add('is-done');

    return new Promise((resolve) => {
      const duration = (parseFloat(getComputedStyle(this.root).transitionDuration) * 1000) || 0;
      setTimeout(() => {
        this.root?.remove();
        resolve();
      }, duration + 50);
    });
  }

  /**
   * Muestra un mensaje de error crítico en la pantalla de carga si falla la inicialización WebGL.
   * @param {string} message - Descripción del error.
   */
  fail(message) {
    if (!this.root) return;
    this.closed = true;
    this.root.classList.add('is-failed');
    if (this.label) {
      this.label.textContent = message;
    }
  }
}
