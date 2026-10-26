/**
 * Formatea un arreglo de frecuencias en hercios como una declaración de arreglo en C++ de Arduino.
 * @param {number[]} notes - Arreglo de frecuencias en Hz.
 * @param {number} wrap - Número de notas por línea en el código C++.
 * @returns {string} Código fuente formateado para Arduino.
 */
export function formatMelody(notes, wrap = 4) {
  const lines = [];
  for (let i = 0; i < notes.length; i += wrap) {
    lines.push(`  ${notes.slice(i, i + wrap).join(', ')}`);
  }
  return `int melody[] = {\n${lines.join(',\n')}\n};`;
}

/**
 * Melodías predeterminadas para la lección de sonido (frecuencias en Hz).
 */
export const melodies = {
  scale: [262, 294, 330, 349, 392, 440, 494, 523],
  twinkle: [262, 262, 392, 392, 440, 440, 392, 349, 349, 330, 330, 294, 294, 262],
  ode: [330, 330, 349, 392, 392, 349, 330, 294, 262, 262, 294, 330, 330, 294, 294],
};

/**
 * Preajustes de color para el LED RGB con sus componentes y representación hexadecimal.
 */
export const rgbPresets = {
  purple: { rgb: [170, 0, 255], color: '#a43cf0', label: 'Púrpura' },
  pink: { rgb: [255, 30, 110], color: '#f2457f', label: 'Rosa' },
  orange: { rgb: [255, 90, 0], color: '#f57a1f', label: 'Naranja' },
  yellow: { rgb: [255, 190, 0], color: '#f5c330', label: 'Amarillo' },
  teal: { rgb: [0, 200, 150], color: '#1fbf98', label: 'Turquesa' },
  white: { rgb: [255, 255, 255], color: '#f4f0e8', label: 'Blanco' },
};

/**
 * Parámetro reutilizable para la selección de color del LED estándar.
 */
export const ledColorParam = {
  key: 'color',
  part: 'led',
  label: 'Color',
  type: 'swatch',
  value: 'red',
  options: [
    { value: 'red', label: 'Rojo', color: '#e8392e' },
    { value: 'yellow', label: 'Amarillo', color: '#f2c23a' },
    { value: 'green', label: 'Verde', color: '#3fbf6a' },
    { value: 'blue', label: 'Azul', color: '#3d7be0' },
    { value: 'white', label: 'Blanco', color: '#f2efe6' },
  ],
};

/**
 * Parámetros reutilizables para el obstáculo interactivo en la simulación ultrasónica.
 */
export const obstacleParams = [
  {
    key: 'obstacle',
    part: 'obstacle',
    label: 'Obstáculo',
    type: 'choice',
    value: 'car',
    options: [
      { value: 'car', label: 'Coche' },
      { value: 'box', label: 'Caja' },
      { value: 'ball', label: 'Pelota' },
      { value: 'wall', label: 'Pared' },
    ],
  },
  {
    key: 'gap',
    part: 'obstacle',
    label: 'Distancia',
    type: 'range',
    min: 5,
    max: 50,
    step: 1,
    value: 30,
    unit: 'cm',
  },
  {
    key: 'sweep',
    part: 'obstacle',
    label: 'Mover hacia adelante y atrás durante la ejecución',
    type: 'toggle',
    value: true,
  },
];
