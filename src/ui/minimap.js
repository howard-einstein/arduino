const MAP_WIDTH = 176;
const MAP_HEIGHT = 118;

const PART_COLORS = {
  board: ['#4a5d99', '#26324d'],
  breadboard: ['#efe7d6', '#b9a993'],
  car: ['#e3604b', '#8c3426'],
  sensor: ['#3a56a0', '#22325e'],
  motor: ['#cfc9bf', '#7c766d'],
  lights: ['#2c3242', '#141a2c'],
};

const DEFAULT_PART_COLOR = ['#8e8a84', '#4f535b'];

/**
 * Minimapa 2D en canvas que representa la huella de los componentes en la escena y la vista de cámara actual.
 */
export class Minimap {
  /**
   * @param {HTMLElement} root - Elemento #minimap.
   * @param {object} options
   * @param {(target: { x: number, z: number }, isDrag: boolean) => void} options.onMove
   */
  constructor(root, { onMove }) {
    this.root = root;
    this.onMove = onMove;
    this.canvas = root.querySelector('canvas');
    this.ctx = this.canvas?.getContext('2d');
    this.frame = null;
    this.visible = false;
    this.ratio = 0;
    this.fitKey = '';

    const getTargetFromPointer = (e) => {
      if (!this.frame || !this.canvas) return null;
      const rect = this.canvas.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * MAP_WIDTH;
      const py = ((e.clientY - rect.top) / rect.height) * MAP_HEIGHT;
      const { c, right, away, s, ox, oy } = this.frame;
      const u = (px - ox) / s;
      const v = (py - oy) / s;
      return { x: c.x + right.x * u - away.x * v, z: c.z + right.z * u - away.z * v };
    };

    let isPointerDown = false;
    root.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      isPointerDown = true;
      root.setPointerCapture(e.pointerId);
      const target = getTargetFromPointer(e);
      if (target) this.onMove(target, false);
    });

    root.addEventListener('pointermove', (e) => {
      if (!isPointerDown) return;
      const target = getTargetFromPointer(e);
      if (target) this.onMove(target, true);
    });

    const onPointerEnd = () => {
      isPointerDown = false;
    };
    root.addEventListener('pointerup', onPointerEnd);
    root.addEventListener('pointercancel', onPointerEnd);
  }

  setVisible(visible) {
    if (visible !== this.visible) {
      this.visible = visible;
      this.root.classList.toggle('is-on', visible);
    }
  }

  resize(deviceRatio) {
    const r = Math.min(3, Math.max(1, deviceRatio));
    if (r !== this.ratio && this.canvas) {
      this.ratio = r;
      this.canvas.width = Math.round(MAP_WIDTH * r);
      this.canvas.height = Math.round(MAP_HEIGHT * r);
    }
  }

  draw(stageState) {
    if (!this.visible || !this.ctx) return;
    const ctx = this.ctx;
    const controls = stageState.controls;
    const { right, away } = controls.axes();
    const footprints = stageState.footprints();
    const fitKey = `${stageState.lessonId}|${controls.view.azimuth.toFixed(3)}|${footprints.length}`;

    if (!this.frame || this.fitKey !== fitKey || stageState.tweens?.active) {
      this.fitKey = fitKey;
      let minX = Infinity;
      let maxX = -Infinity;
      let minZ = Infinity;
      let maxZ = -Infinity;
      let sumX = 0;
      let sumZ = 0;

      for (const fp of footprints) {
        sumX += (fp.x0 + fp.x1) / 2;
        sumZ += (fp.z0 + fp.z1) / 2;
      }

      const center = { x: sumX / (footprints.length || 1), z: sumZ / (footprints.length || 1) };
      const projectRel = (x, z) => [
        (x - center.x) * right.x + (z - center.z) * right.z,
        -((x - center.x) * away.x + (z - center.z) * away.z),
      ];

      for (const fp of footprints) {
        for (const [px, pz] of [
          [fp.x0, fp.z0],
          [fp.x1, fp.z0],
          [fp.x1, fp.z1],
          [fp.x0, fp.z1],
        ]) {
          const [rx, rz] = projectRel(px, pz);
          minX = Math.min(minX, rx);
          maxX = Math.max(maxX, rx);
          minZ = Math.min(minZ, rz);
          maxZ = Math.max(maxZ, rz);
        }
      }

      const scale = Math.min(152 / (maxX - minX + 44), 94 / (maxZ - minZ + 44));
      this.frame = {
        c: center,
        right,
        away,
        s: scale,
        ox: MAP_WIDTH / 2 - ((minX + maxX) / 2) * scale,
        oy: MAP_HEIGHT / 2 - ((minZ + maxZ) / 2) * scale,
      };
    }

    const { c: center, s: scale, ox, oy } = this.frame;
    const toMapCoord = (x, z) => {
      const rx = (x - center.x) * right.x + (z - center.z) * right.z;
      const rz = -((x - center.x) * away.x + (z - center.z) * away.z);
      return [ox + rx * scale, oy + rz * scale];
    };

    ctx.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
    ctx.clearRect(0, 0, MAP_WIDTH, MAP_HEIGHT);
    ctx.strokeStyle = 'rgba(190, 168, 138, 0.35)';
    ctx.lineWidth = 0.75;

    const drawLine = (p0, p1) => {
      ctx.beginPath();
      ctx.moveTo(...p0);
      ctx.lineTo(...p1);
      ctx.stroke();
    };

    for (let x = Math.floor((center.x - 260) / 20) * 20; x <= center.x + 260; x += 20) {
      drawLine(toMapCoord(x, center.z - 260), toMapCoord(x, center.z + 260));
    }
    for (let z = Math.floor((center.z - 260) / 20) * 20; z <= center.z + 260; z += 20) {
      drawLine(toMapCoord(center.x - 260, z), toMapCoord(center.x + 260, z));
    }

    // Dibujar rectángulos de piezas
    for (const fp of footprints) {
      const [fillColor, strokeColor] = PART_COLORS[fp.kind] ?? DEFAULT_PART_COLOR;
      const poly = [
        [fp.x0, fp.z0],
        [fp.x1, fp.z0],
        [fp.x1, fp.z1],
        [fp.x0, fp.z1],
      ].map(([x, z]) => toMapCoord(x, z));

      ctx.beginPath();
      poly.forEach(([px, py], i) => (i ? ctx.lineTo(px, py) : ctx.moveTo(px, py)));
      ctx.closePath();
      ctx.fillStyle = fillColor;
      ctx.fill();
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }

    // Dibujar trapezoide de campo de visión (frustum proyectado en suelo)
    const { w: sw, h: sh } = stageState.size;
    const frustumPoly = [
      [0, 0],
      [sw, 0],
      [sw, sh],
      [0, sh],
    ].map(([sx, sy]) => {
      const pt = controls.groundAt(sx, sy);
      return toMapCoord(pt.x, pt.z);
    });

    ctx.beginPath();
    frustumPoly.forEach(([px, py], i) => (i ? ctx.lineTo(px, py) : ctx.moveTo(px, py)));
    ctx.closePath();
    ctx.fillStyle = 'rgba(26, 163, 161, 0.12)';
    ctx.fill();
    ctx.strokeStyle = '#1aa3a1';
    ctx.lineWidth = 1.6;
    ctx.stroke();

    // Punto de mira (cámara target)
    const target = controls.view.target;
    const [tx, tz] = toMapCoord(target.x, target.z);
    ctx.fillStyle = '#1aa3a1';
    ctx.beginPath();
    ctx.arc(tx, tz, 2.4, 0, Math.PI * 2);
    ctx.fill();

    // Indicador norte/brújula miniatura
    const [nx, ny] = toMapCoord(center.x, center.z - 1);
    const [cx, cy] = toMapCoord(center.x, center.z);
    const angle = Math.atan2(ny - cy, nx - cx);

    ctx.save();
    ctx.translate(161, 15);
    ctx.rotate(angle + Math.PI / 2);
    ctx.fillStyle = '#e0523f';
    ctx.beginPath();
    ctx.moveTo(0, -7);
    ctx.lineTo(4, 3);
    ctx.lineTo(-4, 3);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
}
