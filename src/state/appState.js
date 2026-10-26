import { getLessonParamDefaults } from '../data/lessons.js';

/**
 * Lee un valor serializado en JSON de localStorage con respaldo seguro ante errores de acceso.
 * @param {string} key - Clave en localStorage.
 * @param {any} fallback - Valor por defecto.
 * @returns {any}
 */
export function loadStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

/**
 * Guarda un objeto en localStorage manejando cuotas o entornos restringidos.
 * @param {string} key - Clave en localStorage.
 * @param {any} value - Valor serializable.
 */
export function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn(`[Storage] No se pudo guardar ${key}:`, err);
  }
}

/**
 * Carga las preferencias del usuario combinando valores por defecto con las guardadas.
 * @returns {object}
 */
export function loadSettings() {
  const defaults = {
    labels: true,
    grid: true,
    autoRotate: false,
    sound: true,
    reducedMotion: window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false,
  };
  return { ...defaults, ...loadStorage('learn-arduino:settings', {}) };
}

/**
 * Obtiene los valores de parámetros reactivos para una lección dada, fusionando
 * los valores por defecto con cualquier ajuste previo guardado en localStorage.
 * @param {object} lesson - Lección seleccionada.
 * @param {Record<string, any>} savedStore - Diccionario de valores guardados.
 * @returns {Record<string, any>}
 */
export function resolveLessonValues(lesson, savedStore = {}) {
  const defaults = getLessonParamDefaults(lesson);
  const saved = savedStore[lesson.id] ?? {};

  for (const param of lesson.params ?? []) {
    if (!(param.key in saved)) continue;
    const val = saved[param.key];
    if (param.type === 'range' && typeof val === 'number') {
      defaults[param.key] = Math.min(param.max, Math.max(param.min, val));
    } else if (param.type === 'toggle' && typeof val === 'boolean') {
      defaults[param.key] = val;
    } else if (param.options?.some((opt) => opt.value === val)) {
      defaults[param.key] = val;
    }
  }

  lesson.constrain?.(defaults);
  return defaults;
}

/**
 * Inicializa y administra el contenedor de estado global de la aplicación.
 * @param {Array<object>} lessons - Catálogo de lecciones disponibles.
 * @returns {object} Instancia del estado reactivo.
 */
export function createAppState(lessons) {
  const hashId = location.hash.replace(/^#/, '');
  const initialLesson = lessons.find((l) => l.id === hashId) ?? lessons[0];
  const savedValues = loadStorage('learn-arduino:values', {});
  const settings = loadSettings();

  const state = {
    lesson: initialLesson,
    running: 'idle', // 'idle' | 'uploading' | 'running'
    settings,
    saved: savedValues,
    values: resolveLessonValues(initialLesson, savedValues),
  };

  let debounceTimer = null;
  state.saveCurrentValues = () => {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      debounceTimer = null;
      state.saved[state.lesson.id] = { ...state.values };
      saveStorage('learn-arduino:values', state.saved);
    }, 400);
  };

  state.saveSettings = () => {
    saveStorage('learn-arduino:settings', state.settings);
  };

  return state;
}
