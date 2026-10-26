import { renderIcon } from './icons.js';
import { renderLessonCode } from '../data/lessons.js';

const MIN_CONSOLE_HEIGHT = 92;

const CPP_KEYWORDS = new Set([
  'void', 'int', 'long', 'const', 'for', 'if', 'else', 'while', 'return',
  'unsigned', 'bool', 'float', 'char', 'byte', 'sizeof', 'Servo',
]);

const ARDUINO_CONSTANTS = new Set([
  'HIGH', 'LOW', 'INPUT', 'OUTPUT', 'INPUT_PULLUP', 'LED_BUILTIN', 'A0', 'true', 'false',
]);

const TOKEN_PARAM_FLAG = '\u0001';
const ESCAPE_CHAR = '\u0002';
const CODE_REGEX = /(\/\/.*$)|("(?:[^"\\]|\\.)*")|\u0001(\w+)\u0002|(\b\d+\b)|([A-Za-z_]\w*)(\s*\()?|([^\w"/\u0001]+|\/)/gm;

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Resalta sintaxis de una línea individual de C++ para Arduino.
 * @param {string} line - Texto de la línea.
 * @param {Record<string, any>} values - Valores actuales de parámetros.
 * @returns {string} Marcado HTML con clases sintácticas.
 */
function highlightLine(line, values) {
  const directive = /^(\s*)(#\w+)(.*)$/.exec(line);
  if (directive) {
    return `${directive[1]}<span class="kw">${directive[2]}</span><span class="str">${escapeHtml(directive[3])}</span>`;
  }

  let result = '';
  CODE_REGEX.lastIndex = 0;
  let match;

  while ((match = CODE_REGEX.exec(line))) {
    const [, comment, str, paramKey, num, identifier, callParen, punctuation] = match;
    if (comment) {
      result += `<span class="cm">${escapeHtml(comment)}</span>`;
    } else if (str) {
      result += `<span class="str">${escapeHtml(str)}</span>`;
    } else if (paramKey) {
      const valStr = String(values[paramKey] ?? '');
      result += `<button type="button" class="param" data-param="${paramKey}" title="Haz clic para modificar">${escapeHtml(valStr)}</button>`;
    } else if (num) {
      result += `<span class="num">${num}</span>`;
    } else if (identifier) {
      let cls = 'id';
      if (CPP_KEYWORDS.has(identifier) || ARDUINO_CONSTANTS.has(identifier)) {
        cls = 'kw';
      } else if (callParen && identifier !== 'setup' && identifier !== 'loop') {
        cls = 'fn';
      }
      result += `<span class="${cls}">${identifier}</span>${callParen ? escapeHtml(callParen) : ''}`;
    } else if (punctuation) {
      result += escapeHtml(punctuation);
    }
    if (match[0] === '') CODE_REGEX.lastIndex++;
  }
  return result;
}

/**
 * Resalta un sketch completo de Arduino línea por línea.
 * @param {string} templateCode - Código plantilla con marcadores {{param}}.
 * @param {Record<string, any>} values - Valores actuales de parámetros.
 * @returns {string} Líneas formateadas en HTML.
 */
export function highlightCode(templateCode, values = {}) {
  return templateCode
    .replace(/\{\{(\w+)\}\}/g, `${TOKEN_PARAM_FLAG}$1${ESCAPE_CHAR}`)
    .split('\n')
    .map((line, idx) => `<span class="line"><span class="ln">${idx + 1}</span>${highlightLine(line, values) || ' '}</span>`)
    .join('');
}

/**
 * Componente de tarjeta de código C++ interactivo con monitor serial integrado.
 */
export class CodeCard {
  /**
   * @param {HTMLElement} root - Elemento raíz (.code-card).
   * @param {object} options
   * @param {() => void} options.onRun
   * @param {() => void} options.onStop
   * @param {(paramKey: string) => void} [options.onParam]
   * @param {(expanded: boolean) => void} [options.onExpand]
   */
  constructor(root, { onRun, onStop, onParam, onExpand }) {
    this.root = root;
    this.code = root.querySelector('code');
    this.pre = root.querySelector('pre');
    this.copyBtn = root.querySelector('.btn-copy');
    this.expandBtn = root.querySelector('.btn-expand');
    this.runBtn = root.querySelector('.btn-run');
    this.consoleEl = root.querySelector('.console');
    this.lines = root.querySelector('.console-lines');
    this.status = root.querySelector('.console-status');
    this.state = 'idle';
    this.onRun = onRun;
    this.onStop = onStop;
    this.onExpand = onExpand;
    this.lesson = null;
    this.values = {};
    this.marked = [];
    this.traced = null;

    this.copyBtn?.addEventListener('click', () => this.copy());
    this.expandBtn?.addEventListener('click', () => this.toggleExpanded());
    this.runBtn?.addEventListener('click', () => this.toggle());
    root.querySelector('.console-close')?.addEventListener('click', () => this.onStop());

    this.wrap = root.querySelector('.code-wrap');
    this.grip = root.querySelector('.console-grip');
    this.setupResize();

    this.code?.addEventListener('click', (e) => {
      const btn = e.target.closest('.param');
      if (btn) onParam?.(btn.dataset.param);
    });
  }

  setLesson(lesson, values) {
    this.lesson = lesson;
    this.values = values;
    this.marked = [];
    this.pre?.classList.add('is-out');

    clearTimeout(this.swapTimer);
    this.swapTimer = setTimeout(() => {
      this.paint();
      if (this.pre) {
        this.pre.scrollTop = 0;
        this.pre.classList.remove('is-out');
      }
    }, 180);

    this.setState('idle');
  }

  paint() {
    if (!this.lesson || !this.code) return '';
    // Resuelve nested params como {{melody.notes}}
    let template = this.lesson.code.replace(
      /\{\{(\w+)\.(\w+)\}\}/g,
      (_, key, prop) =>
        this.lesson.params
          ?.find((p) => p.key === key)
          ?.options?.find((o) => o.value === this.values[key])?.code?.[prop] ?? ''
    );

    this.code.innerHTML = highlightCode(template, this.values);
    if (this.marked?.length) {
      for (const btn of this.code.querySelectorAll('.param')) {
        btn.classList.toggle('is-marked', this.marked.includes(btn.dataset.param));
      }
    }
    this.markTrace(false);
    return template;
  }

  trace(tracedInfo) {
    this.traced = tracedInfo;
    this.markTrace(true);
  }

  markTrace(revealLine) {
    if (!this.code) return;
    const lines = [...this.code.querySelectorAll('.line')];
    lines.forEach((l) => l.classList.remove('is-running'));

    if (!this.traced) return;
    const { text, nth = 0 } = this.traced;
    const matched = lines.filter((l) => l.textContent.replace(/^\d+/, '').includes(text));
    const target = matched[Math.min(nth, matched.length - 1)];

    if (target) {
      target.classList.add('is-running');
      if (revealLine) this.reveal(target, this.consoleCover());
    }
  }

  setupResize() {
    const STORAGE_KEY = 'learn-arduino:console-h';
    let savedH = null;
    try {
      savedH = Number(localStorage.getItem(STORAGE_KEY)) || null;
    } catch {}

    this.consoleH = savedH ?? MIN_CONSOLE_HEIGHT;
    this.setConsoleHeight(this.consoleH, false);

    const persist = () => {
      try {
        localStorage.setItem(STORAGE_KEY, String(Math.round(this.consoleH)));
      } catch {}
    };

    const header = this.consoleEl?.querySelector('.console-head');
    let drag = null;

    const onPointerDown = (e) => {
      if (e.button !== 0 || e.target.closest('button') || document.documentElement.classList.contains('compact')) {
        return;
      }
      e.preventDefault();
      drag = { y: e.clientY, h: this.consoleEl.offsetHeight, target: e.currentTarget, id: e.pointerId };
      drag.target.setPointerCapture(e.pointerId);
      this.root.classList.add('is-sizing');
    };

    const onPointerMove = (e) => {
      if (drag && e.pointerId === drag.id) {
        this.setConsoleHeight(drag.h + (drag.y - e.clientY));
      }
    };

    const onPointerUp = (e) => {
      if (drag && e.pointerId === drag.id) {
        drag = null;
        this.root.classList.remove('is-sizing');
        persist();
      }
    };

    for (const el of [this.grip, header]) {
      if (!el) continue;
      el.addEventListener('pointerdown', onPointerDown);
      el.addEventListener('pointermove', onPointerMove);
      el.addEventListener('pointerup', onPointerUp);
      el.addEventListener('pointercancel', onPointerUp);
    }

    this.grip?.addEventListener('dblclick', () => {
      this.setConsoleHeight(MIN_CONSOLE_HEIGHT);
      persist();
    });

    this.grip?.addEventListener('keydown', (e) => {
      const step = { ArrowUp: 16, ArrowDown: -16, PageUp: 64, PageDown: -64 }[e.key];
      if (step) {
        e.preventDefault();
        e.stopPropagation();
        this.setConsoleHeight(this.consoleEl.offsetHeight + step);
        persist();
      }
    });

    if (this.wrap) {
      new ResizeObserver(() => this.setConsoleHeight(this.consoleH, false)).observe(this.wrap);
    }
  }

  setConsoleHeight(height, trackState = true) {
    if (!this.wrap) return;
    const maxHeight = this.wrap.clientHeight - 48;
    if (trackState) {
      this.consoleH = Math.max(MIN_CONSOLE_HEIGHT, Math.min(height, maxHeight));
    }

    const currentH = document.documentElement.classList.contains('compact')
      ? MIN_CONSOLE_HEIGHT
      : Math.round(Math.max(Math.min(MIN_CONSOLE_HEIGHT, maxHeight), Math.min(this.consoleH, maxHeight)));

    this.root.style.setProperty('--console-h', `${currentH}px`);
    this.grip?.setAttribute('aria-valuemin', String(MIN_CONSOLE_HEIGHT));
    this.grip?.setAttribute('aria-valuemax', String(Math.max(MIN_CONSOLE_HEIGHT, Math.round(maxHeight))));
    this.grip?.setAttribute('aria-valuenow', String(currentH));

    if (trackState && this.traced) {
      this.markTrace(true);
    }
  }

  consoleCover() {
    return this.consoleEl?.classList.contains('is-open')
      ? Math.max(0, this.pre.offsetTop + this.pre.offsetHeight - this.consoleEl.offsetTop)
      : 0;
  }

  update(values, changedKeys) {
    if (!this.lesson || this.pre?.classList.contains('is-out')) return;
    this.values = values;

    const oldLines = [...this.code.querySelectorAll('.line')].map((l) => l.textContent.replace(/^\d+/, ''));
    this.paint();

    const newLines = [...this.code.querySelectorAll('.line')];
    const oldSet = new Set(oldLines);
    let firstNew = null;

    for (const line of newLines) {
      if (!oldSet.has(line.textContent.replace(/^\d+/, ''))) {
        line.classList.add('is-new');
        firstNew ??= line;
      }
    }

    const matchedButtons = [...this.code.querySelectorAll('.param')].filter((b) =>
      [changedKeys].flat().includes(b.dataset.param)
    );
    for (const btn of matchedButtons) {
      btn.classList.add('is-flash');
    }
    this.reveal(matchedButtons[0] ?? firstNew);
  }

  mark(keys) {
    if (!this.code) return;
    for (const btn of this.code.querySelectorAll('.param')) {
      btn.classList.toggle('is-marked', keys.includes(btn.dataset.param));
    }
    this.marked = keys;
    const targetKey = keys.find((k) => this.code.querySelector(`.param[data-param="${k}"]`));
    if (targetKey) {
      this.reveal(this.code.querySelector(`.param[data-param="${targetKey}"]`));
    }
  }

  reveal(element, extraOffset = 0) {
    if (!element || !this.pre) return;
    const line = element.closest('.line') ?? element;
    const top = line.offsetTop;
    const { scrollTop } = this.pre;
    const visibleH = this.pre.clientHeight - extraOffset;

    if (top < scrollTop + 8) {
      this.pre.scrollTo({ top: Math.max(0, top - 30), behavior: 'smooth' });
    } else if (top + line.offsetHeight > scrollTop + visibleH - 8) {
      this.pre.scrollTo({ top: top + line.offsetHeight - visibleH + 30, behavior: 'smooth' });
    }
  }

  toggle() {
    if (this.state === 'idle') {
      this.onRun();
    } else {
      this.onStop();
    }
  }

  get expanded() {
    return this.root.classList.contains('is-expanded');
  }

  toggleExpanded(force) {
    const nextState = force ?? !this.expanded;
    if (nextState === this.expanded) return;

    this.root.classList.toggle('is-expanded', nextState);
    if (this.expandBtn) {
      this.expandBtn.innerHTML = renderIcon(nextState ? 'collapse' : 'expand');
      const label = nextState ? 'Collapse code' : 'Expand code';
      this.expandBtn.setAttribute('aria-label', label);
      this.expandBtn.title = label;
      this.expandBtn.setAttribute('aria-expanded', String(nextState));
    }
    this.onExpand?.(nextState);
  }

  setState(newState) {
    this.state = newState;
    this.root.dataset.state = newState;

    const isActive = newState !== 'idle';
    if (this.runBtn) {
      this.runBtn.innerHTML = renderIcon(isActive ? 'stop' : 'play');
      this.runBtn.setAttribute('aria-label', isActive ? 'Stop program' : 'Run program');
      this.runBtn.classList.toggle('is-busy', newState === 'uploading');
    }

    this.consoleEl?.classList.toggle('is-open', isActive);
    if (this.grip) {
      this.grip.tabIndex = isActive ? 0 : -1;
    }

    if (this.status) {
      this.status.textContent =
        newState === 'uploading' ? 'Uploading...' : newState === 'running' ? 'Running' : 'Stopped';
    }

    if (newState === 'uploading' && this.lines) {
      this.lines.innerHTML = '';
    }
  }

  log(message) {
    if (!this.lines) return;
    const div = document.createElement('div');
    div.textContent = message;
    this.lines.append(div);

    while (this.lines.children.length > 40) {
      this.lines.firstChild.remove();
    }
    this.lines.scrollTop = this.lines.scrollHeight;
  }

  async copy() {
    const codeStr = this.lesson ? renderLessonCode(this.lesson, this.values ?? {}) : '';
    try {
      await navigator.clipboard.writeText(codeStr);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = codeStr;
      document.body.append(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }

    if (this.copyBtn) {
      this.copyBtn.innerHTML = renderIcon('check');
      this.copyBtn.classList.add('is-done');
      clearTimeout(this.copyTimer);
      this.copyTimer = setTimeout(() => {
        this.copyBtn.innerHTML = renderIcon('copy');
        this.copyBtn.classList.remove('is-done');
      }, 1600);
    }
  }
}
