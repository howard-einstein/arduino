import { renderIcon } from './icons.js';

const TAB_KEYS = ['overview', 'pinout', 'example', 'specs'];

/**
 * Renderiza el contenido HTML correspondiente a cada pestaña de la tarjeta informativa.
 * @param {object} lesson - Lección activa.
 * @param {string} tab - Pestaña seleccionada.
 * @returns {string} Marcado HTML.
 */
function renderTabContent(lesson, tab) {
  if (!lesson) return '';

  switch (tab) {
    case 'pinout':
      return `
        <h2>Pin map</h2>
        <p class="sub">${lesson.id === 'board' ? 'How the Uno connectors are grouped' : 'How this circuit is wired'}.</p>
        <table class="pin-table">
          <thead><tr><th>Pin</th><th>Connects to</th><th>Function</th></tr></thead>
          <tbody>${lesson.pinout.map(([pin, conn, desc, color]) => `<tr><td><span class="wire-dot" style="--c:${color}"></span><code>${pin}</code></td><td>${conn}</td><td>${desc}</td></tr>`).join('')}</tbody>
        </table>`;

    case 'example':
      return `
        <h2>How the code works</h2>
        <ol class="steps">${lesson.example.map((step) => `<li>${step}</li>`).join('')}</ol>`;

    case 'specs':
      return `
        <h2>Specifications</h2>
        <dl class="spec-grid">${lesson.specs.map(([key, val]) => `<div><dt>${key}</dt><dd>${val}</dd></div>`).join('')}</dl>`;

    default: // 'overview'
      return `
        <h2>${lesson.heading}</h2>
        <p class="lede">${lesson.lede}</p>
        <ul class="features">${lesson.features.map(([icon, text]) => `<li><span class="feature-icon">${renderIcon(icon)}</span><span>${text}</span></li>`).join('')}</ul>`;
  }
}

/**
 * Panel de información pedagógica lateral (Resumen, Pines, Explicación de código y Especificaciones).
 */
export class InfoCard {
  /**
   * @param {HTMLElement} root - Elemento contenedor (.info-card).
   * @param {object} options - Callbacks.
   * @param {(expanded: boolean) => void} [options.onExpand]
   */
  constructor(root, { onExpand } = {}) {
    this.root = root;
    this.onExpand = onExpand;
    this.tabs = [...root.querySelectorAll('[role="tab"]')];
    this.content = root.querySelector('.info-content');
    this.expandBtn = root.querySelector('.expand');
    this.tab = 'overview';
    this.lesson = null;
    this.timer = null;

    this.tabs.forEach((tabEl, index) => {
      tabEl.dataset.tab = TAB_KEYS[index];
      tabEl.addEventListener('click', () => this.setTab(TAB_KEYS[index]));
      tabEl.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        const nextIndex = (index + (e.key === 'ArrowRight' ? 1 : TAB_KEYS.length - 1)) % TAB_KEYS.length;
        this.setTab(TAB_KEYS[nextIndex]);
        this.tabs[nextIndex].focus();
      });
    });

    this.expandBtn?.addEventListener('click', () => this.toggleExpanded());
  }

  /**
   * Actualiza la lección mostrada y repinta el contenido.
   * @param {object} lesson
   */
  setLesson(lesson) {
    this.lesson = lesson;
    this.paint(true);
  }

  /**
   * Cambia de pestaña activa.
   * @param {string} tab
   */
  setTab(tab) {
    if (tab !== this.tab) {
      this.tab = tab;
      this.paint(false);
    }
  }

  /**
   * Renderiza la pestaña seleccionada con transición fluida.
   * @param {boolean} isLessonChange
   */
  paint(isLessonChange) {
    this.tabs.forEach((tabEl) => {
      const active = tabEl.dataset.tab === this.tab;
      tabEl.classList.toggle('is-active', active);
      tabEl.setAttribute('aria-selected', String(active));
      tabEl.tabIndex = active ? 0 : -1;
    });

    const target = this.content;
    if (!target) return;

    target.classList.remove('is-in');
    target.classList.add('is-out');
    clearTimeout(this.timer);

    this.timer = setTimeout(
      () => {
        target.innerHTML = renderTabContent(this.lesson, this.tab);
        target.scrollTop = 0;
        target.classList.remove('is-out');
        void target.offsetWidth; // trigger reflow
        target.classList.add('is-in');
      },
      isLessonChange ? 220 : 120
    );
  }

  get expanded() {
    return this.root.classList.contains('is-expanded');
  }

  /**
   * Expande o contrae el panel ocupando mayor área visual.
   * @param {boolean} [force]
   */
  toggleExpanded(force) {
    const nextState = force ?? !this.expanded;
    if (nextState === this.expanded) return;

    this.root.classList.toggle('is-expanded', nextState);
    if (this.expandBtn) {
      this.expandBtn.innerHTML = renderIcon(nextState ? 'collapse' : 'expand');
      this.expandBtn.setAttribute('aria-label', nextState ? 'Collapse panel' : 'Expand panel');
    }

    const codeCard = document.querySelector('.code-card');
    if (codeCard) {
      codeCard.classList.toggle('is-covered', nextState);
      codeCard.inert = nextState;
    }

    this.onExpand?.(nextState);
  }

  /**
   * Marca el panel como cubierto cuando otra tarjeta se expande.
   * @param {boolean} covered
   */
  setCovered(covered) {
    this.root.classList.toggle('is-covered', covered);
    this.root.inert = covered;
  }
}
