/**
 * Real-time digital clock for the top bar.
 * Shows the current date and time in HH:MM:SS format.
 */
const MONTHS_EN = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const pad2 = (n) => String(n).padStart(2, '0');

/**
 * Inicializa la actualización continua del reloj en los elementos DOM provistos.
 * @param {HTMLElement} dateEl - Elemento para la fecha (#clock-date).
 * @param {HTMLElement} timeEl - Elemento para la hora (#clock-time).
 * @returns {() => void} Función para detener el temporizador si se desmonta.
 */
export function initClock(dateEl, timeEl) {
  if (!dateEl || !timeEl) return () => {};

  const tick = () => {
    const now = new Date();
    dateEl.textContent = `${MONTHS_EN[now.getMonth()]} ${pad2(now.getDate())}, ${now.getFullYear()}`;
    timeEl.textContent = `${pad2(now.getHours())}:${pad2(now.getMinutes())}:${pad2(now.getSeconds())}`;
  };

  tick();
  const timer = setInterval(tick, 1000);
  return () => clearInterval(timer);
}
