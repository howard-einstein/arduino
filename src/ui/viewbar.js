/**
 * Barra de herramientas flotante para navegación orbital 3D (giro, zoom y brújula).
 */
export class Viewbar {
  /**
   * @param {HTMLElement} root - Elemento #viewbar.
   * @param {object} options
   * @param {(dir: number) => void} options.onTurn
   * @param {(factor: number) => void} options.onZoom
   * @param {() => void} options.onReset
   */
  constructor(root, { onTurn, onZoom, onReset }) {
    this.root = root;
    this.needle = root.querySelector('.compass-needle');
    this.resetBtn = root.querySelector('[data-view="reset"]');
    this.hint = root.querySelector('.view-hint');
    this.hintTimer = null;

    root.querySelector('[data-view="left"]')?.addEventListener('click', () => onTurn(-1));
    root.querySelector('[data-view="right"]')?.addEventListener('click', () => onTurn(1));
    root.querySelector('[data-view="out"]')?.addEventListener('click', () => onZoom(1 / 1.35));
    root.querySelector('[data-view="in"]')?.addEventListener('click', () => onZoom(1.35));
    this.resetBtn?.addEventListener('click', () => onReset());
  }

  startHint() {
    if (this.hintTimer || this.hint?.classList.contains('is-gone')) return;
    this.hintTimer = setTimeout(() => this.dismissHint(), 9000);
  }

  dismissHint() {
    clearTimeout(this.hintTimer);
    this.hint?.classList.add('is-gone');
  }

  /**
   * Sincroniza la aguja de la brújula y la visibilidad de controles con la cámara 3D.
   * @param {number} angleDeg - Ángulo azimutal en grados.
   * @param {boolean} isHome - Si la cámara se encuentra en la posición inicial.
   */
  update(angleDeg, isHome) {
    if (this.needle) {
      this.needle.style.transform = `rotate(${-angleDeg}deg)`;
    }
    this.root.classList.toggle('is-away', !isHome);
  }
}
