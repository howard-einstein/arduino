import { lessons } from './data/lessons.js';
import { renderPcbTraces } from './data/pcbTraces.js';
import { createAppState, resolveLessonValues } from './state/appState.js';
import { initClock } from './ui/clock.js';
import { Loader } from './ui/loader.js';
import { InfoCard } from './ui/infoCard.js';
import { CodeCard } from './ui/codeCard.js';
import { LessonList } from './ui/lessonList.js';
import { Sidebar } from './ui/sidebar.js';
import { Viewbar } from './ui/viewbar.js';
import { Minimap } from './ui/minimap.js';
import { PartInspector } from './ui/inspector.js';
import { CalloutOverlay } from './ui/callouts.js';
import { ensureAudioContext } from './audio/sound.js';

// Constantes de diseño para escala responsiva
const DESIGN_W = 1672;
const DESIGN_H = 941;
const MIN_FACTOR = 0.8;
const MIN_WIDTH = 1280;
const COMPACT_FACTOR = 0.62;
const MIN_FIT_SCALE = 0.85;
const RIG_OFFSET = { x: 10, y: 70 };
const RAD_TO_DEG = 180 / Math.PI;
const DEG_TO_RAD = Math.PI / 180;
const MINIMAP_DELAY = 300;
const STARTUP_TIMEOUT = 20000;

// Referencias a elementos raíz del DOM
const artboardEl = document.querySelector('#app');
const stageEl = document.querySelector('#stage');
const rigEl = document.querySelector('#rig');
const tipEl = document.querySelector('#tip');
const tracesSvg = document.querySelector('#traces');

let artboardScale = 1;
let isCompact = false;
let isFitted = false;
let isAppReady = false;
let stage = null;
let minimapStartTime = null;
let minimapTimer = 0;

/**
 * Escala el lienzo responsivo (.artboard) y redibuja las trazas decorativas de PCB.
 */
function updateArtboard() {
  const clientW = document.documentElement.clientWidth || window.innerWidth;
  const clientH = document.documentElement.clientHeight || window.innerHeight;
  let factor = Math.min(clientW / DESIGN_W, clientH / DESIGN_H);

  if (factor < MIN_FACTOR) {
    factor = Math.min(clientW / MIN_WIDTH, clientH / DESIGN_H, MIN_FACTOR);
  }

  isCompact = factor < COMPACT_FACTOR || clientW / clientH < 0.95;
  document.documentElement.classList.toggle('compact', isCompact);

  if (isCompact) {
    artboardScale = 1;
    artboardEl.style.width = '';
    artboardEl.style.height = '';
    artboardEl.style.transform = '';
    return;
  }

  artboardScale = factor;
  const virtW = clientW / artboardScale;
  const virtH = clientH / artboardScale;
  artboardEl.style.width = `${virtW}px`;
  artboardEl.style.height = `${virtH}px`;
  artboardEl.style.transform = `scale(${artboardScale})`;

  if (tracesSvg) {
    renderPcbTraces(tracesSvg, virtW, virtH);
  }
}

updateArtboard();
initClock(document.querySelector('#clock-date'), document.querySelector('#clock-time'));

// Inicialización de estado y componentes de la UI
const state = createAppState(lessons);

const infoCard = new InfoCard(document.querySelector('.info-card'), {
  onExpand: (expanded) => expanded && codeCard.toggleExpanded(false),
});

const lessonList = new LessonList(document.querySelector('#lesson-list'), lessons, {
  onSelect: (id) => selectLesson(id),
});

const codeCard = new CodeCard(document.querySelector('.code-card'), {
  onRun: () => runSketch(),
  onStop: () => stopSketch(),
  onParam: (paramKey) => focusCodeParam(paramKey),
  onExpand: (expanded) => {
    if (expanded) infoCard.toggleExpanded(false);
    infoCard.setCovered(expanded);
  },
});

const inspector = new PartInspector(document.querySelector('#inspector'), {
  svg: document.querySelector('#insp-lines'),
  onParam: (key, val) => setParam(key, val),
  onFocus: () => stage?.selection && stage.focusGroup(stage.selection.group),
  onClose: () => stage?.select(null),
  onRun: () => runSketch(),
});

const callouts = new CalloutOverlay({
  rig: rigEl,
  svg: document.querySelector('#leaders'),
  tags: document.querySelector('#tags'),
  onFocus: (c) => {
    if (!stage) return;
    if (c.anchor.startsWith('part:') && stage.parts.has(c.anchor.slice(5))) {
      stage.select(c.anchor.slice(5));
    } else {
      stage.focusAnchor(c.anchor);
    }
  },
});

const minimap = new Minimap(document.querySelector('#minimap'), {
  onMove: (target, isDrag) => {
    if (!stage) return;
    const ctrl = stage.controls;
    if (isDrag) {
      ctrl.stopAnimation();
      ctrl.view.target.set(target.x, 0, target.z);
      ctrl.clampTarget();
      stage.touch();
    } else {
      ctrl.animateTo({ target: [target.x, 0, target.z] }, { duration: 420 });
    }
  },
});

const viewbar = new Viewbar(document.querySelector('#viewbar'), {
  onTurn: (dir) => stage?.controls.turn(dir),
  onZoom: (factor) => stage?.controls.zoomBy(factor),
  onReset: () => stage?.resetView(),
});

const sidebar = new Sidebar(document.querySelector('.sidebar'), document.querySelector('#flyout'), {
  home: () => {
    selectLesson(lessons[0].id);
    stage?.resetView();
  },
  toggleRun: () => (state.running === 'idle' ? runSketch() : stopSketch()),
  state: () => ({ lessons, current: state.lesson.id, done: lessonList.done }),
  selectLesson: (id) => selectLesson(id),
  parts: () => getSceneParts(),
  focusPart: (part) => {
    if (part.group && stage) {
      stage.focusGroup(part.group);
      stage.select(part.group);
    }
  },
  settings: () => state.settings,
  setSetting: (key, val) => updateSetting(key, val),
  resetProgress: () => {
    lessonList.done.clear();
    try {
      localStorage.removeItem('learn-arduino:done');
    } catch {}
    lessonList.paintDone();
    updateProgressUI();
  },
});

const loader = new Loader(document.querySelector('#loader'));

function updateProgressUI() {
  const completed = lessonList.done.size;
  const total = lessons.length;
  const countEl = document.querySelector('#progress-count');
  const fillEl = document.querySelector('#progress-fill');
  const trackEl = document.querySelector('.progress-track');

  if (countEl) countEl.textContent = `${completed}/${total}`;
  if (fillEl) fillEl.style.width = `${(completed / total) * 100}%`;
  if (trackEl) {
    trackEl.setAttribute('aria-valuenow', String(completed));
    trackEl.setAttribute('aria-valuemax', String(total));
  }
}
updateProgressUI();

function updateSetting(key, val) {
  state.settings[key] = val;
  state.saveSettings();

  if (key === 'labels') callouts.setVisible(val);
  if (key === 'grid') stage?.setGrid(val);
  if (key === 'autoRotate' && stage) stage.autoRotate = val;
  if (key === 'reducedMotion') {
    stage?.setReducedMotion(val);
    document.documentElement.classList.toggle('reduce-motion', val);
  }
}

function setParam(key, value, { fromSim = false } = {}) {
  const lesson = state.lesson;
  const paramDef = lesson.params?.find((p) => p.key === key);
  if (!paramDef) return;

  let parsed = value;
  if (paramDef.type === 'range') parsed = Math.min(paramDef.max, Math.max(paramDef.min, Number(value)));
  if (paramDef.type === 'toggle') parsed = Boolean(value);

  if (state.values[key] === parsed) return;

  const previous = { ...state.values };
  state.values[key] = parsed;
  lesson.constrain?.(state.values, key);
  stage?.updateParams(state.values);

  const isInterpolated = (k) => lesson.code.includes(`{{${k}}}`) || lesson.code.includes(`{{${k}.`);
  const changed = Object.keys(state.values).filter((k) => state.values[k] !== previous[k] && isInterpolated(k));
  if (changed.length) {
    codeCard.update(state.values, changed);
  }

  if (stage?.selection && stage.selection.group.userData.part !== inspector.sel?.info) {
    handleSelectionChanged();
  } else {
    inspector.sync(state.values);
  }

  if (!fromSim) {
    state.saveCurrentValues();
  }
}

function handleSelectionChanged() {
  const sel = stage?.selection;
  showTooltip(null);

  if (!sel) {
    inspector.close();
    codeCard.mark([]);
    return;
  }

  const partParams = sel.id ? (state.lesson.params ?? []).filter((p) => p.part === sel.id) : [];
  const interactType = sel.id ? stage.parts.get(sel.id)?.spec.interact?.type : null;

  inspector.open(
    { id: sel.id, info: sel.group.userData.part, interact: interactType, live: !interactType && partParams.length > 0 },
    partParams,
    state.values
  );

  codeCard.mark(partParams.map((p) => p.key));
  stage.touch();

  if (inspector.dock === 'bottom' && !stage.controls.grab) {
    requestAnimationFrame(() => stage.revealSelection(inspector.footprint));
  }
}

function focusCodeParam(paramKey) {
  const paramDef = state.lesson.params?.find((p) => p.key === paramKey);
  if (paramDef && stage) {
    stage.select(paramDef.part);
    inspector.pulse(paramKey);
  }
}

function selectLesson(lessonId) {
  const target = lessons.find((l) => l.id === lessonId) ?? lessons[0];
  if (target === state.lesson) {
    stage?.resetView();
    return;
  }

  stopSketch();
  state.lesson = target;
  state.values = resolveLessonValues(target, state.saved);

  lessonList.setActive(target.id);
  infoCard.setLesson(target);
  codeCard.setLesson(target, state.values);
  callouts.show(target, { delay: state.settings.reducedMotion ? 0 : 1000 });
  stage?.setLesson(target.id, { values: state.values });
  sidebar.refresh();

  if (location.hash.replace(/^#/, '') !== target.id) {
    history.pushState(null, '', `#${target.id}`);
  }
  document.title = `${target.title} · Learn Arduino`;
}

window.addEventListener('hashchange', () => {
  const hashId = location.hash.replace(/^#/, '');
  if (hashId && hashId !== state.lesson.id) {
    selectLesson(hashId);
  }
});

async function runSketch() {
  if (!stage) return;
  ensureAudioContext();

  state.running = 'uploading';
  codeCard.setState('uploading');
  inspector.setRunning(true);
  sidebar.setActive('run', true);

  const currentLesson = state.lesson;
  const success = await stage.runSketch(currentLesson.sim, {
    out: (line) => codeCard.log(line),
    trace: (info) => codeCard.trace(info),
  });

  if (success && currentLesson === state.lesson) {
    state.running = 'running';
    codeCard.setState('running');
    if (lessonList.complete(currentLesson.id)) {
      updateProgressUI();
      sidebar.refresh();
    }
  }
}

function stopSketch() {
  stage?.stopSim();
  codeCard.trace(null);
  if (state.running !== 'idle') {
    codeCard.log('Stopped.');
  }
  state.running = 'idle';
  codeCard.setState('idle');
  inspector.setRunning(false);
  sidebar.setActive('run', false);
}

function getSceneParts() {
  if (!stage) return [];
  const parts = [];
  for (const { group } of stage.parts.values()) {
    if (group.userData.part && !group.userData.wire) {
      parts.push({ ...group.userData.part, group });
    }
  }

  const priorityKeys = ['dip', 'usb', 'jack', 'reset', 'digitalA', 'power', 'analog', 'qfn', 'crystal'];
  stage.board.traverse((node) => {
    const part = node.userData.part;
    if (part && priorityKeys.includes(part.key) && !parts.some((p) => p.name === part.name)) {
      parts.push({ ...part, group: node });
    }
  });

  const getRank = (p) => (p.key ? priorityKeys.indexOf(p.key) + 100 : 0);
  return parts.sort((a, b) => getRank(a) - getRank(b)).slice(0, 12);
}

function toStageCoords(clientX, clientY) {
  const rect = stageEl.getBoundingClientRect();
  return {
    x: (clientX - rect.left) / artboardScale,
    y: (clientY - rect.top) / artboardScale,
  };
}

function showTooltip(part, coords) {
  if (part && stage?.selection?.group.userData.part === part) {
    part = null;
  }
  if (!part || !coords) {
    tipEl?.classList.remove('is-on');
    return;
  }

  const titleEl = tipEl.querySelector('b');
  const descEl = tipEl.querySelector('span');
  if (titleEl) titleEl.textContent = part.name;
  if (descEl) descEl.textContent = part.desc ?? '';

  const pt = toStageCoords(coords.x, coords.y);
  const flipLeft = pt.x > stageEl.offsetWidth - 260;
  tipEl.style.transform = `translate(${pt.x + (flipLeft ? -16 : 16)}px, ${pt.y + 18}px) translateX(${flipLeft ? '-100%' : '0'})`;
  tipEl.classList.add('is-on');
}

function getBlockers() {
  const stageRect = stageEl.getBoundingClientRect();
  const blockers = [];

  const pushBox = (el, force = false) => {
    const box = el.getBoundingClientRect();
    if (!box.width || !box.height) return;
    const style = getComputedStyle(el);
    if (style.display === 'none' || (!force && (style.visibility === 'hidden' || Number(style.opacity) < 0.3))) return;

    blockers.push({
      x0: (box.left - stageRect.left) / artboardScale,
      y0: (box.top - stageRect.top) / artboardScale,
      x1: (box.right - stageRect.left) / artboardScale,
      y1: (box.bottom - stageRect.top) / artboardScale,
    });
  };

  if (!rigEl.classList.contains('is-free') && !rigEl.classList.contains('is-off')) {
    document.querySelectorAll('.callout:not(.is-leaving)').forEach((el) => pushBox(el, true));
    document.querySelectorAll('.leaders .leader path').forEach((path) => {
      const nums = (path.getAttribute('d') ?? '').match(/-?\d+(\.\d+)?/g)?.map(Number) ?? [];
      for (let i = 0; i + 3 < nums.length; i += 2) {
        blockers.push({ poly: [[nums[i], nums[i + 1]], [nums[i + 2], nums[i + 3]]] });
      }
    });
  } else {
    document.querySelectorAll('.tags.is-free .tag:not(.is-hidden)').forEach((el) => pushBox(el, true));
  }

  document.querySelectorAll('.viewbar, .minimap, .inspector, .brand, .status').forEach((el) => pushBox(el));
  return blockers;
}

const nextFrames = (count) =>
  new Promise((resolve) => {
    const step = () => (count-- > 0 ? requestAnimationFrame(step) : resolve());
    step();
  });

function initStage(BoardStageClass) {
  return new BoardStageClass(document.querySelector('#board-canvas'), stageEl, {
    toStage: toStageCoords,
    onFrame: (frame) => {
      callouts.update(frame);
      const isHome = frame.isHome();
      callouts.setFree(!isHome || !!frame.selection || isFitted);
      viewbar.update((frame.view.azimuth - 36 * DEG_TO_RAD) * RAD_TO_DEG, isHome);

      const canShowMinimap = !isCompact && !frame.headingHome();
      const now = performance.now();
      if (canShowMinimap) {
        minimapStartTime ??= now;
      } else {
        minimapStartTime = null;
      }
      const showMinimap = canShowMinimap && now - minimapStartTime >= MINIMAP_DELAY;
      minimap.setVisible(showMinimap);

      if (canShowMinimap && !showMinimap && !minimapTimer) {
        minimapTimer = setTimeout(() => {
          minimapTimer = 0;
          if (stage) stage.dirty = true;
        }, MINIMAP_DELAY - (now - minimapStartTime) + 16);
      }

      minimap.draw(frame);
      inspector.place(frame.selectionScreen(), frame.size.w, frame.size.h);
    },
    onHover: (part, coords) => showTooltip(part, coords),
    onSelect: () => handleSelectionChanged(),
    blockers: () => getBlockers(),
    onParam: (key, val, opts) => setParam(key, val, opts),
    sound: () => state.settings.sound,
  });
}

function finishStartup() {
  if (isAppReady) return;
  isAppReady = true;
  document.querySelector('#app').inert = false;
  loader.done();
  setTimeout(() => callouts.release(), 180);
  viewbar.startHint();
}

function showWebGlUnavailable() {
  if (isAppReady) return;
  stageEl.classList.add('no-webgl');
  const note = document.createElement('div');
  note.className = 'stage-note';
  note.setAttribute('role', 'note');
  note.innerHTML = `
    <b>3D view unavailable</b>
    <p>The 3D board requires WebGL hardware acceleration, which is disabled in this browser. Enable hardware acceleration in your browser settings or try another browser; the lessons and code still work fully.</p>
  `;
  stageEl.append(note);
  finishStartup();
}

// Identidad visual oficial: Swiss Blueprint (Ingeniería y Precisión)
document.documentElement.dataset.theme = 'swiss-blueprint';

// Inicialización de la vista
infoCard.setLesson(state.lesson);
codeCard.setLesson(state.lesson, state.values);
lessonList.setActive(state.lesson.id);
callouts.setVisible(state.settings.labels);
document.documentElement.classList.toggle('reduce-motion', state.settings.reducedMotion);
document.title = `${state.lesson.title} · Learn Arduino`;

async function startApp() {
  setTimeout(finishStartup, STARTUP_TIMEOUT);

  loader.step('Loading typography...', 0.08);
  await Promise.all([
    document.fonts.load('700 40px "Barlow Semi Condensed"'),
    document.fonts.load('600 40px "Barlow Semi Condensed"'),
    document.fonts.load('500 40px "Barlow Semi Condensed"'),
  ]).catch(() => {});

  loader.step('Loading 3D engine...', 0.18);
  const { BoardStage } = await import('./stage/BoardStage.js');

  loader.step('Assembling 3D circuit...', 0.32);
  await nextFrames(2);

  try {
    stage = initStage(BoardStage);
  } catch (err) {
    console.error('Error al inicializar WebGL:', err);
    showWebGlUnavailable();
    return;
  }

  stage.setGrid(state.settings.grid);
  stage.autoRotate = state.settings.autoRotate;
  stage.setReducedMotion(state.settings.reducedMotion);

  window.__app = {
    stage,
    selectLesson,
    run: runSketch,
    stop: stopSketch,
    state,
    setParam,
    inspector,
    minimap,
  };

  const handleResize = () => {
    const sw = stageEl.offsetWidth;
    const sh = stageEl.offsetHeight;
    if (!sw || !sh) return;

    const factor = Math.min(1, sw / 1090, sh / 800);
    isFitted = isCompact || factor < MIN_FIT_SCALE;
    const topMargin = isCompact ? 12 : 100;
    const padding = isFitted ? { w: sw - 28, h: sh - topMargin - 70 } : null;
    const originX = isFitted ? sw / 2 : sw / 2 + RIG_OFFSET.x * factor;
    const originY = isFitted ? topMargin + (sh - topMargin - 58) / 2 : sh / 2 + RIG_OFFSET.y * factor;
    const isHome = stage.isHome();

    rigEl.style.left = `${originX}px`;
    rigEl.style.top = `${originY}px`;
    rigEl.style.transform = factor < 1 ? `scale(${factor})` : '';
    callouts.origin = { x: originX, y: originY };
    callouts.scale = factor;
    callouts.invalidate();

    inspector.top = isCompact ? 12 : 112;
    inspector.dock = isCompact ? 'bottom' : 'corner';

    const dpr = Math.min(2, Math.max(1.5, window.devicePixelRatio * artboardScale));
    stage.resize(sw, sh, originX, originY, dpr, factor, padding);
    minimap.resize(window.devicePixelRatio * artboardScale * 1.5);
    if (isHome) {
      stage.controls.jumpTo(stage.homeView());
    }
  };

  handleResize();
  window.addEventListener('resize', () => {
    updateArtboard();
    handleResize();
  });
  new ResizeObserver(handleResize).observe(stageEl);

  stage.setLesson(state.lesson.id, { instant: true, values: state.values });
  callouts.show(state.lesson, { hold: true });

  stageEl.addEventListener('dblclick', (e) => {
    if (e.target !== document.querySelector('#board-canvas')) return;
    const pick = stage.pick(e.clientX, e.clientY);
    if (pick && pick.info.lift !== false) {
      stage.focusGroup(pick.group);
    } else {
      stage.resetView();
    }
  });

  stageEl.addEventListener('pointerdown', () => viewbar.dismissHint(), { once: true });

  await nextFrames(2);
  loader.step('Generating lesson thumbnails...', 0.6);

  try {
    const { renderThumbnails } = await import('./stage/thumbs.js');
    await renderThumbnails(document.querySelectorAll('[data-thumb]'), {
      renderer: stage.renderer,
      environment: stage.scene.environment,
      board: stage.board,
      onEach: (done, total) =>
        loader.step(`Rendering lessons · ${done} / ${total}`, 0.6 + (0.38 * done) / total),
    });
  } catch (err) {
    console.error('Error renderizando miniaturas:', err);
  }

  await nextFrames(1);
  finishStartup();
}

// Control global por teclado
window.addEventListener('keydown', (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey || !isAppReady) return;
  const tag = document.activeElement?.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA') return;

  const isButton = tag === 'BUTTON' || document.activeElement?.getAttribute('role') === 'button';
  const ctrl = stage?.controls;
  const key = e.key;

  if (key === 'Escape') {
    if (stage?.selection) {
      stage.select(null);
      return;
    }
    if (sidebar.open) {
      sidebar.close();
      return;
    }
    if (infoCard.expanded || codeCard.expanded) {
      infoCard.toggleExpanded(false);
      codeCard.toggleExpanded(false);
      return;
    }
    stage?.resetView();
  } else if (ctrl) {
    if (key === 'r' || key === 'R' || key === 'Home') {
      stage.resetView();
    } else if (/^[0-9]$/.test(key)) {
      const idx = (Number(key) + 9) % 10;
      if (lessons[idx]) selectLesson(lessons[idx].id);
    } else if (key === '[' || key === ']') {
      const currIdx = lessons.indexOf(state.lesson);
      const nextIdx = currIdx + (key === ']' ? 1 : -1);
      if (lessons[nextIdx]) selectLesson(lessons[nextIdx].id);
    } else if (key === ' ' && !isButton) {
      if (state.running === 'idle') runSketch();
      else stopSketch();
    } else {
      return;
    }
    e.preventDefault();
  }
});

startApp().catch((err) => {
  console.error('Error al inicializar la aplicación:', err);
  loader.fail('A problem occurred during startup. Try reloading the page.');
});
