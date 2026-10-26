// Pistas decorativas de PCB para fondo SVG
var u = 1672,
  d = 941,
  f = [
    {
      a: `tl`,
      p: [
        [90, 410],
        [90, 104],
        [99, 95],
        [624, 95],
        [655, 63],
        [736, 63],
        [771, 28],
        [884, 28],
        [912, 0],
      ],
    },
    {
      a: `tl`,
      p: [
        [627, 88],
        [737, 88],
      ],
      end: `circle`,
    },
    {
      a: `tl`,
      p: [
        [750, 82],
        [785, 47],
        [893, 47],
        [940, 0],
      ],
    },
    {
      a: `tl`,
      p: [
        [108, 151],
        [108, 118],
        [116, 110],
        [540, 110],
        [552, 98],
      ],
    },
    {
      a: `tl`,
      p: [
        [60, 0],
        [60, 40],
        [76, 56],
      ],
    },
    {
      a: `tl`,
      p: [
        [90, 410],
        [113, 433],
        [113, 455],
      ],
      end: `circle`,
    },
    {
      a: `tl`,
      p: [
        [100, 405],
        [100, 395],
      ],
      start: `circle`,
    },
    {
      a: `tl`,
      p: [
        [136, 300],
        [136, 525],
        [96, 565],
        [96, 610],
        [72, 634],
      ],
    },
    {
      a: `tl`,
      p: [
        [112, 382],
        [124, 394],
        [124, 402],
      ],
      start: `circle`,
    },
    {
      a: `tl`,
      p: [
        [108, 492],
        [108, 520],
        [81, 547],
        [81, 600],
        [72, 609],
      ],
    },
    {
      a: `tl`,
      p: [
        [118, 585],
        [118, 545],
        [150, 513],
        [150, 470],
      ],
      end: `circle`,
    },
    {
      a: `bl`,
      p: [
        [0, 735],
        [64, 671],
        [64, 610],
        [72, 602],
      ],
    },
    {
      a: `bl`,
      p: [
        [0, 780],
        [30, 750],
        [30, 700],
        [45, 685],
      ],
    },
    {
      a: `bl`,
      p: [
        [0, 868],
        [72, 796],
      ],
    },
    {
      a: `bl`,
      p: [
        [106, 735],
        [143, 760],
        [226, 760],
        [266, 800],
        [1424, 800],
      ],
    },
    {
      a: `bl`,
      p: [
        [1436, 800],
        [1536, 800],
        [1596, 860],
        [1672, 860],
      ],
      start: `circle`,
    },
    {
      a: `bl`,
      p: [
        [200, 760],
        [218, 742],
        [218, 720],
      ],
      end: `circle`,
    },
    {
      a: `br`,
      p: [
        [1590, 924],
        [1622, 892],
        [1672, 892],
      ],
      start: `circle`,
    },
    {
      a: `br`,
      p: [
        [1636, 880],
        [1636, 870],
        [1652, 854],
        [1672, 854],
      ],
      start: `circle`,
    },
    {
      a: `br`,
      p: [
        [1592, 830],
        [1556, 830],
        [1536, 850],
        [1536, 941],
      ],
    },
    {
      a: `br`,
      p: [
        [1500, 941],
        [1500, 912],
        [1520, 892],
      ],
    },
    {
      a: `br`,
      p: [
        [1652, 941],
        [1652, 924],
        [1640, 912],
      ],
      end: `circle`,
    },
    {
      a: `tr`,
      p: [
        [1068, 81],
        [1086, 81],
        [1138, 19],
        [1150, 19],
      ],
      start: `circle`,
    },
    {
      a: `tr`,
      p: [
        [1620, 74],
        [1640, 94],
        [1640, 104],
        [1660, 124],
        [1660, 262],
      ],
      end: `circle`,
    },
    {
      a: `tr`,
      p: [
        [1650, 64],
        [1672, 86],
      ],
    },
    {
      a: `tr`,
      p: [
        [1590, 104],
        [1600, 114],
        [1600, 160],
      ],
    },
    {
      a: `tr`,
      p: [
        [1636, 84],
        [1636, 92],
        [1652, 108],
        [1652, 112],
      ],
    },
    {
      a: `tr`,
      p: [
        [1595, 104],
        [1595, 108],
        [1580, 108],
        [1582, 104],
      ],
    },
    {
      a: `tr`,
      p: [
        [1672, 300],
        [1666, 306],
        [1666, 470],
      ],
    },
    {
      a: `br`,
      p: [
        [1652, 520],
        [1652, 790],
        [1630, 812],
      ],
    },
  ],
  p = [
    {
      a: `tl`,
      s: [
        [925, 37, 11, 0.95],
        [1056, 22, 9, 0.45],
        [1068, 28, 7, 0.35],
        [1076, 22, 14, 0.75],
        [1063, 36, 13, 0.6],
        [1083, 36, 8, 0.5],
      ],
    },
    {
      a: `tr`,
      s: [
        [1612, 22, 13, 0.6],
        [1628, 20, 15, 0.8],
        [1645, 22, 10, 0.5],
        [1614, 36, 9, 0.45],
        [1630, 37, 12, 0.7],
        [1622, 49, 10, 0.55],
        [1640, 52, 9, 0.75],
        [1631, 64, 8, 0.85],
      ],
    },
    {
      a: `tl`,
      s: [
        [214, 350, 8, 0.45],
        [100, 678, 11, 0.6],
        [87, 694, 13, 0.55],
        [104, 698, 8, 0.4],
        [98, 712, 8, 0.45],
      ],
    },
    {
      a: `bl`,
      s: [
        [243, 760, 9, 0.5],
        [36, 815, 11, 0.6],
        [27, 830, 9, 0.5],
        [44, 830, 8, 0.45],
        [22, 844, 8, 0.4],
        [16, 912, 9, 0.5],
      ],
    },
    {
      a: `br`,
      s: [
        [1625, 808, 12, 0.6],
        [1640, 818, 13, 0.8],
        [1626, 824, 10, 0.55],
        [1652, 812, 9, 0.5],
        [1645, 832, 9, 0.7],
        [1510, 919, 8, 0.6],
      ],
    },
  ];


const SVG_NS = 'http://www.w3.org/2000/svg';

function alignPoint(anchor, x, y, dx, dy) {
  return [anchor.includes('r') ? x + dx : x, anchor.includes('b') ? y + dy : y];
}

/**
 * Renderiza las pistas y detalles decorativos de PCB en el SVG de fondo.
 * @param {SVGElement} svg - Elemento SVG contenedor (#traces).
 * @param {number} width - Ancho en píxeles.
 * @param {number} height - Alto en píxeles.
 */
export function renderPcbTraces(svg, width, height) {
  const dx = width - u;
  const dy = height - d;
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svg.replaceChildren();

  const pathsGroup = document.createElementNS(SVG_NS, 'g');
  const circlesGroup = document.createElementNS(SVG_NS, 'g');
  const rectsGroup = document.createElementNS(SVG_NS, 'g');

  for (const trace of f) {
    const points = trace.p.map(([px, py]) => alignPoint(trace.a, px, py, dx, dy));
    if (points.length > 1 && (points[0][0] !== points[1][0] || points[0][1] !== points[1][1])) {
      const path = document.createElementNS(SVG_NS, 'path');
      path.setAttribute('d', 'M' + points.map((pt) => pt.join(' ')).join(' L'));
      pathsGroup.append(path);
    }
    for (const [pos, curr, prev] of [
      ['start', points[0], points[1]],
      ['end', points[points.length - 1], points[points.length - 2]],
    ]) {
      if (trace[pos] !== 'circle') continue;
      const vx = curr[0] - prev[0];
      const vy = curr[1] - prev[1];
      const dist = Math.hypot(vx, vy) || 1;
      const circle = document.createElementNS(SVG_NS, 'circle');
      circle.setAttribute('cx', curr[0] + (vx / dist) * 5.5);
      circle.setAttribute('cy', curr[1] + (vy / dist) * 5.5);
      circle.setAttribute('r', 5.5);
      circlesGroup.append(circle);
    }
  }

  for (const cluster of p) {
    for (const [px, py, size, opacity] of cluster.s) {
      const [rx, ry] = alignPoint(cluster.a, px, py, dx, dy);
      const rect = document.createElementNS(SVG_NS, 'rect');
      rect.setAttribute('x', rx);
      rect.setAttribute('y', ry);
      rect.setAttribute('width', size);
      rect.setAttribute('height', size);
      rect.setAttribute('rx', 1);
      rect.setAttribute('opacity', opacity);
      rect.setAttribute('class', 'pix');
      rectsGroup.append(rect);
    }
  }

  svg.append(pathsGroup, circlesGroup, rectsGroup);
}
