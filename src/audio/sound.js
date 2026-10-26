let audioContext = null;

/**
 * Asegura que el AudioContext esté instanciado y activo (tras interacción de usuario).
 * @returns {AudioContext|null}
 */
export function ensureAudioContext() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (AudioCtx) {
    audioContext ??= new AudioCtx();
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
  }
  return audioContext;
}

/**
 * Sintetiza un tono de onda cuadrada a través del Web Audio API simulando el zumbador piezoeléctrico.
 * @param {number} freq - Frecuencia en hercios (Hz).
 * @param {number} durationMs - Duración en milisegundos.
 * @param {number} [volume=0.4] - Nivel de volumen normalizado (0 a 1).
 */
export function playTone(freq, durationMs, volume = 0.4) {
  const ctx = ensureAudioContext();
  if (!ctx || !freq || volume <= 0) return;

  const now = ctx.currentTime;
  const durSec = durationMs / 1000;
  const osc = ctx.createOscillator();
  osc.type = 'square';
  osc.frequency.value = freq;

  const gain = ctx.createGain();
  const peakGain = 0.06 * volume;

  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(peakGain, now + 0.006);
  gain.gain.setValueAtTime(peakGain, Math.max(now + 0.006, now + durSec - 0.03));
  gain.gain.linearRampToValueAtTime(0, now + durSec);

  osc.connect(gain).connect(ctx.destination);
  osc.start(now);
  osc.stop(now + durSec + 0.02);
}
