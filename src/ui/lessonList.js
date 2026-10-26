import { renderIcon } from './icons.js';

const CARD_WIDTHS = {
  board: 316,
  blink: 249,
  button: 268,
  knob: 254,
  rgb: 248,
  light: 252,
  sensor: 282,
  sound: 262,
  motor: 300,
  servo: 280,
  project: 286,
  esp32: 300,
};

const THUMB_WIDTHS = {
  board: 124,
  led: 72,
  button: 84,
  pot: 78,
  rgb: 72,
  lamp: 84,
  sensor: 96,
  buzzer: 74,
  motor: 104,
  servo: 96,
  gears: 92,
  esp32: 110,
};

const makeSvgPath = (d) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}" /></svg>`;

/**
 * Carrusel interactivo inferior con las 11 tarjetas de lecciones.
 */
export class LessonList {
  /**
   * @param {HTMLElement} listEl - Elemento <ol class="lesson-list">.
   * @param {Array<object>} lessons - Catálogo de lecciones.
   * @param {object} options
   * @param {(lessonId: string) => void} options.onSelect
   */
  constructor(listEl, lessons, { onSelect }) {
    this.list = listEl;
    this.section = listEl.closest('.lessons');
    this.lessons = lessons;
    this.done = new Set(this.load());
    this.dragged = false;
    this.revealed = false;

    this.list.innerHTML = lessons
      .map(
        (l, idx) => `
        <li class="lesson" role="button" tabindex="0" data-id="${l.id}" style="--w: ${CARD_WIDTHS[l.id] ?? 260}; --tw: ${THUMB_WIDTHS[l.thumb] ?? 96}" aria-label="Lesson ${idx + 1}: ${l.title}">
          <img class="lesson-thumb" data-thumb="${l.thumb}" alt="" />
          <span class="lesson-title">${l.cardTitle}</span>
          <span class="lesson-done" aria-hidden="true">${renderIcon('check')}</span>
          <svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5.5 6.5 6.5L9 18.5" /></svg>
        </li>`
      )
      .join('');

    this.items = [...this.list.children];

    for (const item of this.items) {
      const select = () => {
        if (!this.dragged) onSelect(item.dataset.id);
      };
      item.addEventListener('click', select);
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          select();
        }
      });
    }

    this.paintDone();
    this.setupScroll();
  }

  setupScroll() {
    const list = this.list;
    const section = this.section;

    const prevBtn = document.createElement('button');
    prevBtn.className = 'lesson-step prev';
    prevBtn.setAttribute('aria-label', 'Previous lessons');
    prevBtn.innerHTML = makeSvgPath('m15 5.5-6.5 6.5 6.5 6.5');

    const nextBtn = document.createElement('button');
    nextBtn.className = 'lesson-step next';
    nextBtn.setAttribute('aria-label', 'Next lessons');
    nextBtn.innerHTML = makeSvgPath('m9 5.5 6.5 6.5L9 18.5');

    section?.append(prevBtn, nextBtn);

    const stepScroll = (dir) => list.scrollBy({ left: dir * list.clientWidth * 0.7, behavior: 'smooth' });
    prevBtn.addEventListener('click', () => stepScroll(-1));
    nextBtn.addEventListener('click', () => stepScroll(1));

    const updateEdges = () => {
      const maxScroll = list.scrollWidth - list.clientWidth;
      section?.classList.toggle('can-left', list.scrollLeft > 2);
      section?.classList.toggle('can-right', list.scrollLeft < maxScroll - 2);
    };

    list.addEventListener('scroll', updateEdges, { passive: true });
    window.addEventListener('resize', updateEdges);
    requestAnimationFrame(updateEdges);

    // Scroll horizontal con rueda del mouse
    list.addEventListener(
      'wheel',
      (e) => {
        if (list.scrollWidth <= list.clientWidth) return;
        const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        if (delta) {
          e.preventDefault();
          list.scrollLeft += e.deltaMode === 1 ? delta * 16 : delta;
        }
      },
      { passive: false }
    );

    // Arrastre con puntero (click & drag)
    let dragStart = null;
    list.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' && e.button === 0) {
        dragStart = { x: e.clientX, left: list.scrollLeft, moved: false };
        this.dragged = false;
      }
    });

    window.addEventListener('pointermove', (e) => {
      if (!dragStart) return;
      const scale = list.getBoundingClientRect().width / list.offsetWidth || 1;
      const dx = (e.clientX - dragStart.x) / scale;
      if (!dragStart.moved && Math.abs(dx) > 5) {
        dragStart.moved = true;
        list.classList.add('is-dragging');
      }
      if (dragStart.moved) {
        list.scrollLeft = dragStart.left - dx;
      }
    });

    window.addEventListener('pointerup', () => {
      if (dragStart) {
        this.dragged = dragStart.moved;
        dragStart = null;
        list.classList.remove('is-dragging');
        setTimeout(() => {
          this.dragged = false;
        }, 0);
      }
    });
  }

  reveal(itemEl, smooth = true) {
    const list = this.list;
    const start = itemEl.offsetLeft - list.offsetLeft;
    const end = start + itemEl.offsetWidth;
    let target = null;

    if (start - 40 < list.scrollLeft) {
      target = start - 40;
    } else if (end + 40 > list.scrollLeft + list.clientWidth) {
      target = end + 40 - list.clientWidth;
    }

    if (target !== null) {
      list.scrollTo({ left: Math.max(0, target), behavior: smooth ? 'smooth' : 'auto' });
    }
  }

  load() {
    try {
      return JSON.parse(localStorage.getItem('learn-arduino:done') ?? '[]');
    } catch {
      return [];
    }
  }

  setActive(lessonId) {
    for (const item of this.items) {
      const isActive = item.dataset.id === lessonId;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-current', isActive ? 'step' : 'false');
      if (isActive) {
        requestAnimationFrame(() => this.reveal(item, this.revealed));
      }
    }
    this.revealed = true;
  }

  complete(lessonId) {
    if (this.done.has(lessonId)) return false;
    this.done.add(lessonId);
    try {
      localStorage.setItem('learn-arduino:done', JSON.stringify([...this.done]));
    } catch {}
    this.paintDone(lessonId);
    return true;
  }

  paintDone(justDoneId) {
    for (const item of this.items) {
      item.classList.toggle('is-done', this.done.has(item.dataset.id));
      if (item.dataset.id === justDoneId) {
        item.classList.remove('just-done');
        void item.offsetWidth;
        item.classList.add('just-done');
      }
    }
  }
}
