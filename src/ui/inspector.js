import { renderIcon } from './icons.js';

const SVG_NS = 'http://www.w3.org/2000/svg';
const EDGE_MARGIN = 16;

const INTERACT_HINTS = {
  slide: 'o arrástralo en la escena 3D',
  knob: 'o gira la perilla en la escena 3D',
  press: 'Mantenlo presionado en la escena 3D',
};

function formatUnit(param, val) {
  if (!param.unit) return String(val);
  return param.unit === '%' || param.unit === '°' ? `${val}${param.unit}` : `${val} ${param.unit}`;
}

/**
 * Inspector contextual para calibrar parámetros interactivos de piezas en la escena 3D.
 */
export class PartInspector {
  /**
   * @param {HTMLElement} root - Elemento #inspector.
   * @param {object} options
   * @param {SVGElement} options.svg - Contenedor de líneas de guía (#insp-lines).
   * @param {(key: string, value: any) => void} options.onParam
   * @param {() => void} [options.onFocus]
   * @param {() => void} [options.onClose]
   * @param {() => void} [options.onRun]
   */
  constructor(root, { svg, onParam, onFocus, onClose, onRun }) {
    this.root = root;
    this.onParam = onParam;
    this.onFocus = onFocus;
    this.onClose = onClose;
    this.onRun = onRun;
    this.side = 1;
    this.top = 112;
    this.dock = 'corner';
    this.controls = new Map();

    this.leader = document.createElementNS(SVG_NS, 'g');
    this.leader.setAttribute('class', 'insp-leader');

    this.path = document.createElementNS(SVG_NS, 'path');
    this.end = document.createElementNS(SVG_NS, 'circle');
    this.end.setAttribute('r', '4.6');
    this.end.setAttribute('class', 'dot-end');

    this.leader.append(this.path, this.end);
    svg.append(this.leader);

    root.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        this.onClose?.();
      }
    });
  }

  get isOpen() {
    return this.root.classList.contains('is-on');
  }

  open(sel, params, currentValues) {
    const isSame = this.isOpen && this.sel && (this.sel.id ?? this.sel.info) === (sel.id ?? sel.info);
    this.sel = sel;
    this.params = params;

    const r = this.root;
    const activeEl = r.contains(document.activeElement) ? document.activeElement : null;
    const activeKey = activeEl?.closest('.insp-row')?.dataset.key;
    const activeIdx = activeEl ? [...(activeEl.parentElement?.children ?? [])].indexOf(activeEl) : -1;

    const info = sel.info ?? {};
    const hint = INTERACT_HINTS[sel.interact];

    r.innerHTML = `
      <header class="insp-head">
        <h3>${info.name ?? 'Componente'}</h3>
        <button class="insp-close" type="button" aria-label="Cerrar">${renderIcon('close')}</button>
      </header>
      ${info.desc ? `<p class="insp-desc">${info.desc}</p>` : ''}
      <div class="insp-rows"></div>
      <footer class="insp-foot">
        <button class="insp-focus" type="button">${renderIcon('focus')}<span>Enfocar</span></button>
        ${hint ? `<span class="insp-hint">${hint}</span>` : ''}
        ${sel.live ? `<button class="insp-run" type="button">${renderIcon('play')}<span>Ejecutar para ver</span></button>` : ''}
      </footer>`;

    const rowsContainer = r.querySelector('.insp-rows');
    this.controls.clear();
    for (const p of params) {
      rowsContainer.append(this.createRow(p, currentValues[p.key]));
    }
    rowsContainer.hidden = !params.length;

    r.querySelector('.insp-close')?.addEventListener('click', () => this.onClose?.());
    r.querySelector('.insp-focus')?.addEventListener('click', () => this.onFocus?.());
    r.querySelector('.insp-run')?.addEventListener('click', () => this.onRun?.());

    this.size = null;
    this.placed = false;

    if (!isSame) {
      r.classList.remove('is-on');
      void r.offsetWidth;
    }
    r.classList.add('is-on');
    this.leader.classList.add('is-on');

    if (activeKey) {
      const activeRow = r.querySelector(`.insp-row[data-key="${activeKey}"]`);
      (activeRow?.querySelector('[role="radiogroup"]')?.children[activeIdx] ?? activeRow?.querySelector('input, button'))?.focus({
        preventScroll: true,
      });
    }
  }

  setRunning(isRunning) {
    this.root.classList.toggle('is-running', isRunning);
    this.size = null;
  }

  close() {
    this.sel = null;
    this.root.classList.remove('is-on');
    this.leader.classList.remove('is-on');
  }

  createRow(param, currentVal) {
    const rowEl = document.createElement('div');
    rowEl.className = `insp-row is-${param.type}`;
    rowEl.dataset.key = param.key;
    const inputId = `insp-${param.key}`;

    if (param.type === 'range') {
      rowEl.innerHTML = `
        <label for="${inputId}"><span>${param.label}</span><output></output></label>
        <input id="${inputId}" type="range" min="${param.min}" max="${param.max}" step="${param.step ?? 1}" />
        ${param.hint ? `<p class="insp-note">${param.hint}</p>` : ''}`;

      const input = rowEl.querySelector('input');
      const output = rowEl.querySelector('output');
      if (param.tint) {
        input.style.setProperty('--accent', param.tint);
      }

      input.addEventListener('input', () => this.onParam?.(param.key, Number(input.value)));

      const syncVal = (val) => {
        if (document.activeElement !== input || Number(input.value) !== val) {
          input.value = val;
        }
        const step = param.step ?? 1;
        output.textContent = formatUnit(param, +(Math.round(val / step) * step).toFixed(2));
        input.style.setProperty('--fill', `${((val - param.min) / (param.max - param.min)) * 100}%`);
      };

      this.controls.set(param.key, syncVal);
      syncVal(currentVal);
      return rowEl;
    }

    if (param.type === 'toggle') {
      rowEl.innerHTML = `
        <label class="insp-switch"><input id="${inputId}" type="checkbox" role="switch" /><span class="track"><span class="knob"></span></span><span>${param.label}</span></label>`;

      const input = rowEl.querySelector('input');
      input.addEventListener('change', () => this.onParam?.(param.key, input.checked));

      const syncToggle = (val) => {
        input.checked = !!val;
      };
      this.controls.set(param.key, syncToggle);
      syncToggle(currentVal);
      return rowEl;
    }

    const isSwatch = param.type === 'swatch';
    rowEl.innerHTML = `
      <div class="insp-label"><span>${param.label}</span>${isSwatch ? '<output></output>' : ''}</div>
      <div class="${isSwatch ? 'swatches' : 'seg'}" role="radiogroup" aria-label="${param.label}"></div>
      <p class="insp-note"></p>`;

    const radioGroup = rowEl.querySelector('[role="radiogroup"]');
    const noteEl = rowEl.querySelector('.insp-note');
    const outputEl = rowEl.querySelector('output');

    const buttons = param.options.map((opt) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('role', 'radio');
      if (isSwatch) {
        btn.className = 'swatch';
        btn.style.setProperty('--c', opt.color);
        btn.setAttribute('aria-label', opt.label);
        btn.title = opt.label;
      } else {
        btn.textContent = opt.label;
      }
      btn.addEventListener('click', () => this.onParam?.(param.key, opt.value));
      radioGroup.append(btn);
      return btn;
    });

    radioGroup.addEventListener('keydown', (e) => {
      const delta = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
      if (!delta) return;
      e.preventDefault();
      const currIdx = buttons.indexOf(document.activeElement);
      const nextIdx = (Math.max(0, currIdx) + delta + buttons.length) % buttons.length;
      buttons[nextIdx].focus();
      this.onParam?.(param.key, param.options[nextIdx].value);
    });

    const syncOptions = (val) => {
      const matched = param.options.find((opt) => opt.value === val);
      buttons.forEach((btn, idx) => {
        const isSelected = param.options[idx].value === val;
        btn.classList.toggle('is-on', isSelected);
        btn.setAttribute('aria-checked', String(isSelected));
      });
      if (outputEl) {
        outputEl.textContent = matched?.label ?? (isSwatch ? 'Personalizado' : '');
      }
      noteEl.textContent = matched?.note ?? '';
      noteEl.hidden = !matched?.note;
    };

    this.controls.set(param.key, syncOptions);
    syncOptions(currentVal);
    return rowEl;
  }

  sync(values) {
    if (this.isOpen) {
      for (const [key, syncFn] of this.controls) {
        syncFn(values[key]);
      }
      this.size = null;
    }
  }

  pulse(key) {
    const rowEl = this.root.querySelector(`.insp-row[data-key="${key}"]`);
    if (rowEl) {
      rowEl.classList.remove('is-pulse');
      void rowEl.offsetWidth;
      rowEl.classList.add('is-pulse');
      rowEl.querySelector('input, button')?.focus({ preventScroll: true });
    }
  }

  get footprint() {
    return this.isOpen && this.dock === 'bottom' ? this.root.offsetHeight + 20 : 0;
  }

  place(anchorScreen, width, height) {
    if (!this.isOpen || !anchorScreen) return;
    this.size ??= { w: this.root.offsetWidth, h: this.root.offsetHeight };
    const { w, h } = this.size;
    const margin = Math.min(EDGE_MARGIN, width / 30);

    if (this.dock === 'bottom') {
      const left = (width - w) / 2;
      const top = height - h - 10;
      this.root.style.transform = `translate(${Math.round(left)}px, ${Math.round(top)}px)`;

      const clampX = Math.min(left + w - 30, Math.max(left + 30, anchorScreen[0]));
      const isAbove = anchorScreen[1] < top - 8;
      this.path.setAttribute(
        'd',
        isAbove ? `M${clampX} ${top} L${clampX} ${Math.max(anchorScreen[1] + 4, top - 22)} L${anchorScreen[0]} ${anchorScreen[1]}` : ''
      );
      this.end.setAttribute('cx', anchorScreen[0]);
      this.end.setAttribute('cy', anchorScreen[1]);
      this.leader.classList.toggle(
        'is-away',
        !isAbove || anchorScreen[0] < -40 || anchorScreen[0] > width + 40 || anchorScreen[1] < -40
      );
      return;
    }

    const top = Math.max(margin, Math.min(this.top, height - h - 58));
    const calcLeft = (dir) => (dir < 0 ? margin : width - w - margin);
    const overlaps = (dir) => {
      const l = calcLeft(dir);
      return anchorScreen[0] > l - 24 && anchorScreen[0] < l + w + 24 && anchorScreen[1] < top + h + 24;
    };

    if (this.placed) {
      if (overlaps(this.side) && !overlaps(-this.side)) {
        this.side = -this.side;
      }
    } else {
      this.side = anchorScreen[0] > width / 2 ? -1 : 1;
    }
    this.placed = true;

    const left = calcLeft(this.side);
    this.root.style.transform = `translate(${Math.round(left)}px, ${Math.round(top)}px)`;

    const clampX = Math.min(left + w - 30, Math.max(left + 30, anchorScreen[0]));
    const bottomY = top + h;
    const joinY = Math.min(anchorScreen[1] - 4, bottomY + 26);

    const pathData =
      anchorScreen[1] > bottomY + 8
        ? `M${clampX} ${bottomY} L${clampX} ${joinY} L${anchorScreen[0]} ${anchorScreen[1]}`
        : `M${this.side < 0 ? left + w : left} ${top + h / 2} L${anchorScreen[0]} ${anchorScreen[1]}`;

    this.path.setAttribute('d', pathData);
    this.end.setAttribute('cx', anchorScreen[0]);
    this.end.setAttribute('cy', anchorScreen[1]);

    const isAway =
      anchorScreen[0] < -40 || anchorScreen[1] < -40 || anchorScreen[0] > width + 40 || anchorScreen[1] > height + 40;
    this.leader.classList.toggle('is-away', isAway);
  }
}
