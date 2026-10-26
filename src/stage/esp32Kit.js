import * as THREE from 'three';

/**
 * Generador procedural 3D de alta fidelidad para el módulo ESP32 DevKit V1 (ESP-WROOM-32).
 * Creado 100% mediante primitivas matemáticas de Three.js y CanvasTextures en memoria RAM.
 * Cero modelos externos (.glb / .gltf / .obj).
 */

const PITCH = 2.54; // Pitch estándar 100 mil en mm
const BOARD_W = 28.5; // Ancho placa (mm)
const BOARD_L = 51.5; // Largo placa (mm)
const BOARD_THICK = 1.6; // Grosor FR-4 estándar (mm)

// Paleta de materiales PBR de instrumentación electrónica
function createMaterials() {
  return {
    pcbEdge: new THREE.MeshStandardMaterial({
      color: 0x8a7b5e,
      roughness: 0.85,
      metalness: 0.05,
    }),
    metalSilver: new THREE.MeshStandardMaterial({
      color: 0xe8ecf0,
      roughness: 0.28,
      metalness: 0.88,
    }),
    metalDark: new THREE.MeshStandardMaterial({
      color: 0x9aa0a6,
      roughness: 0.45,
      metalness: 0.75,
    }),
    metalGold: new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.32,
      metalness: 0.85,
    }),
    plasticBlack: new THREE.MeshStandardMaterial({
      color: 0x181a1f,
      roughness: 0.65,
      metalness: 0.1,
    }),
    plasticHeader: new THREE.MeshStandardMaterial({
      color: 0x1e2126,
      roughness: 0.55,
      metalness: 0.15,
    }),
    chipBody: new THREE.MeshStandardMaterial({
      color: 0x22252c,
      roughness: 0.5,
      metalness: 0.12,
    }),
    solderTin: new THREE.MeshStandardMaterial({
      color: 0xd2d7df,
      roughness: 0.25,
      metalness: 0.9,
    }),
    ceramicTan: new THREE.MeshStandardMaterial({
      color: 0xc8b088,
      roughness: 0.6,
      metalness: 0.05,
    }),
    ledPwrRed: new THREE.MeshStandardMaterial({
      color: 0xff3b30,
      emissive: 0xff2211,
      emissiveIntensity: 1.6,
      roughness: 0.2,
      metalness: 0.1,
    }),
    ledUserBlue: new THREE.MeshStandardMaterial({
      color: 0x007aff,
      emissive: 0x0055ff,
      emissiveIntensity: 1.8,
      roughness: 0.2,
      metalness: 0.1,
    }),
  };
}

/**
 * Genera la textura de serigrafía superior de la placa madre DevKit V1 en Canvas 2D.
 */
function createMotherboardTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1140; // 40 px/mm
  canvas.height = 2060;
  const ctx = canvas.getContext('2d');

  const W = canvas.width;
  const H = canvas.height;
  const scale = 40; // 40 px por mm

  // Máscara de soldadura negro mate obsidiana
  ctx.fillStyle = '#14171d';
  ctx.fillRect(0, 0, W, H);

  // Gradiente sutil para acabado de máscara mate
  const grad = ctx.createRadialGradient(W / 2, H / 2, 200, W / 2, H / 2, 1100);
  grad.addColorStop(0, 'rgba(35, 40, 50, 0.25)');
  grad.addColorStop(1, 'rgba(10, 12, 16, 0.45)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Pistas de cobre con enrutado a 45 grados (estilo KiCAD)
  ctx.strokeStyle = 'rgba(50, 58, 72, 0.4)';
  ctx.lineWidth = 6;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  function drawTrace(points) {
    ctx.beginPath();
    points.forEach(([px, py], i) => {
      const x = W / 2 + px * scale;
      const y = H / 2 + py * scale;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }

  // Rutas internas de buses
  for (let i = -6; i <= 6; i++) {
    drawTrace([
      [-11, i * 2.5],
      [-7, i * 2.5 + (i > 0 ? 3 : -3)],
      [-3, i * 2.5 + (i > 0 ? 3 : -3)],
    ]);
    drawTrace([
      [11, i * 2.5],
      [7, i * 2.5 + (i > 0 ? 3 : -3)],
      [3, i * 2.5 + (i > 0 ? 3 : -3)],
    ]);
  }

  // Vías de cobre metalizadas (vias)
  ctx.fillStyle = '#cfaf6d';
  function drawVia(mx, my) {
    const x = W / 2 + mx * scale;
    const y = H / 2 + my * scale;
    ctx.beginPath();
    ctx.arc(x, y, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#0a0d12';
    ctx.beginPath();
    ctx.arc(x, y, 3.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#cfaf6d';
  }

  for (let i = -5; i <= 5; i++) {
    drawVia(-4.5, i * 3.8);
    drawVia(4.5, i * 3.8);
    drawVia(-6.2, i * 3.2);
    drawVia(6.2, i * 3.2);
  }

  // Anillos dorados ENIG de los 4 orificios para tornillos en las esquinas
  const holeOffset = { x: 12.0 * scale, y: 23.0 * scale };
  [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ].forEach(([sx, sy]) => {
    const hx = W / 2 + sx * holeOffset.x;
    const hy = H / 2 + sy * holeOffset.y;
    ctx.fillStyle = '#d4af37';
    ctx.beginPath();
    ctx.arc(hx, hy, 2.4 * scale, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#0a0d12';
    ctx.beginPath();
    ctx.arc(hx, hy, 1.4 * scale, 0, Math.PI * 2);
    ctx.fill();
  });

  // Pads dorados de las dos tiras de pines (15 pines cada una, paso 2.54mm)
  const pinStartX = 12.7 * scale;
  const pinStartY = -17.78 * scale;
  const pinStep = 2.54 * scale;

  for (let i = 0; i < 15; i++) {
    const py = H / 2 + pinStartY + i * pinStep;

    // Pin izquierdo
    ctx.fillStyle = '#cfaf6d';
    ctx.beginPath();
    ctx.roundRect(W / 2 - pinStartX - 28, py - 18, 56, 36, 8);
    ctx.fill();
    ctx.fillStyle = '#0c0e12';
    ctx.beginPath();
    ctx.arc(W / 2 - pinStartX, py, 12, 0, Math.PI * 2);
    ctx.fill();

    // Pin derecho
    ctx.fillStyle = '#cfaf6d';
    ctx.beginPath();
    ctx.roundRect(W / 2 + pinStartX - 28, py - 18, 56, 36, 8);
    ctx.fill();
    ctx.fillStyle = '#0c0e12';
    ctx.beginPath();
    ctx.arc(W / 2 + pinStartX, py, 12, 0, Math.PI * 2);
    ctx.fill();
  }

  // SERIGRAFÍA BLANCA INDUSTRIAL
  ctx.fillStyle = '#eef0f4';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.font = 'bold 34px "Barlow Semi Condensed", "JetBrains Mono", sans-serif';

  // Nombres de pines izquierdos
  const leftPins = [
    '3V3', 'EN', 'VP', 'VN', 'D34', 'D35', 'D32', 'D33',
    'D25', 'D26', 'D27', 'D14', 'D12', 'GND', 'D13'
  ];
  leftPins.forEach((pin, i) => {
    const py = H / 2 + pinStartY + i * pinStep;
    ctx.fillText(pin, W / 2 - pinStartX + 36, py);
  });

  // Nombres de pines derechos
  ctx.textAlign = 'right';
  const rightPins = [
    'VIN', 'GND', 'D13', 'D12', 'D14', 'D27', 'D26', 'D25',
    'D33', 'D32', 'D35', 'D34', 'VN', 'VP', 'EN' // variante serigrafiada
  ];
  const rightPinsAlt = [
    'D23', 'D22', 'TX0', 'RX0', 'D21', 'D19', 'D18', 'D5',
    'TX2', 'RX2', 'D4', 'D2', 'D15', 'GND', 'VIN'
  ];
  rightPinsAlt.forEach((pin, i) => {
    const py = H / 2 + pinStartY + i * pinStep;
    ctx.fillText(pin, W / 2 + pinStartX - 36, py);
  });

  // Líneas divisorias de serigrafía
  ctx.strokeStyle = '#eef0f4';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(W / 2 - pinStartX + 28, H / 2 + pinStartY - 30);
  ctx.lineTo(W / 2 - pinStartX + 28, H / 2 + pinStartY + 14 * pinStep + 30);
  ctx.moveTo(W / 2 + pinStartX - 28, H / 2 + pinStartY - 30);
  ctx.lineTo(W / 2 + pinStartX - 28, H / 2 + pinStartY + 14 * pinStep + 30);
  ctx.stroke();

  // Branding central
  ctx.textAlign = 'center';
  ctx.font = 'bold 44px "Barlow Semi Condensed", sans-serif';
  ctx.fillText('ESP32 DEVKIT V1', W / 2, H / 2 + 180);

  ctx.font = '600 30px "Barlow Semi Condensed", sans-serif';
  ctx.fillStyle = '#a0a8b4';
  ctx.fillText('NodeMCU-32S / DOIT', W / 2, H / 2 + 230);

  // Etiquetas de pulsadores y LEDs
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 36px "Barlow Semi Condensed", sans-serif';
  ctx.fillText('EN', W / 2 - 280, H / 2 + 880);
  ctx.fillText('BOOT', W / 2 + 280, H / 2 + 880);

  ctx.font = '500 26px "Barlow Semi Condensed", sans-serif';
  ctx.fillText('PWR', W / 2 - 160, H / 2 + 750);
  ctx.fillText('IO2', W / 2 + 160, H / 2 + 750);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

/**
 * Genera la textura de grabado láser del blindaje metálico del ESP-WROOM-32.
 */
function createShieldLaserTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 920;
  const ctx = canvas.getContext('2d');

  // Fondo níquel pulido mate con ruido metálico
  ctx.fillStyle = '#d8dce2';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Efecto de cepillado horizontal metálico
  ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
  for (let y = 0; y < canvas.height; y += 4) {
    if (Math.random() > 0.4) {
      ctx.fillRect(0, y, canvas.width, 2);
    }
  }

  // Grabado láser en gris oscuro satinado
  ctx.fillStyle = 'rgba(45, 50, 60, 0.88)';
  ctx.textAlign = 'center';

  // Logo Espressif (círculo con ondas)
  ctx.beginPath();
  ctx.arc(512, 130, 48, 0, Math.PI * 2);
  ctx.lineWidth = 10;
  ctx.strokeStyle = 'rgba(45, 50, 60, 0.88)';
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(512, 130, 26, 0, Math.PI * 2);
  ctx.stroke();

  // Texto principal
  ctx.font = 'bold 64px "Barlow Semi Condensed", "Helvetica", sans-serif';
  ctx.fillText('ESPRESSIF', 512, 235);

  ctx.font = '800 78px "Barlow Semi Condensed", sans-serif';
  ctx.letterSpacing = '2px';
  ctx.fillText('ESP-WROOM-32', 512, 335);

  // Especificaciones técnicas de homologación
  ctx.font = '500 38px "Barlow Semi Condensed", monospace';
  ctx.fillText('FCC ID: 2AC7Z-ESPWROOM32', 512, 415);
  ctx.fillText('IC: 21098-ESPWROOM32', 512, 465);
  ctx.fillText('CMIIT ID: 2016DP4852', 512, 515);

  // Iconos Wi-Fi y Bluetooth
  ctx.font = 'bold 34px "Barlow Semi Condensed", sans-serif';
  ctx.fillText('Wi-Fi + BT + BLE MCU Module', 512, 595);

  // Código de serie y marcado CE
  ctx.font = '600 32px "JetBrains Mono", monospace';
  ctx.fillText('K120-0982-AA  ROHS', 512, 665);

  ctx.font = 'bold 58px sans-serif';
  ctx.fillText('CE', 512, 750);

  // Falso código DataMatrix / QR en la esquina
  ctx.fillStyle = 'rgba(45, 50, 60, 0.88)';
  for (let r = 0; r < 7; r++) {
    for (let c = 0; c < 7; c++) {
      if ((r + c * 3) % 2 === 0 || r === 0 || c === 0 || r === 6 || c === 6) {
        ctx.fillRect(810 + c * 18, 120 + r * 18, 14, 14);
      }
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * Genera la textura de la sección de antena PCB MIFA (Meandering Inverted-F Antenna).
 */
function createAntennaTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 720;
  canvas.height = 260;
  const ctx = canvas.getContext('2d');

  // Máscara oscura
  ctx.fillStyle = '#0d0f14';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Antena serpentine MIFA en oro/cobre brillante
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 14;
  ctx.lineCap = 'square';
  ctx.lineJoin = 'miter';

  ctx.beginPath();
  ctx.moveTo(80, 220);
  ctx.lineTo(80, 50);
  ctx.lineTo(640, 50);

  // Dientes en zigzag característicos de la antena de 2.4 GHz de Espressif
  const teethX = [140, 200, 260, 320, 380, 440, 500, 560, 620];
  teethX.forEach((tx, idx) => {
    ctx.moveTo(tx, 50);
    ctx.lineTo(tx, idx % 2 === 0 ? 190 : 150);
  });

  ctx.stroke();

  // Pista de tierra
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(80, 220);
  ctx.lineTo(240, 220);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * Construye la placa base ESP32 DevKit V1 completa.
 * @returns {THREE.Group} Grupo Three.js listo para ser renderizado.
 */
export function buildEsp32Board() {
  const root = new THREE.Group();
  root.name = 'ESP32_DevKit_V1';

  const mats = createMaterials();

  // =========================================================================
  // 1. PLACA BASE PCB (FR-4 con esquinas redondeadas y 4 taladros de montaje)
  // =========================================================================
  const pcbShape = new THREE.Shape();
  const halfW = BOARD_W / 2;
  const halfL = BOARD_L / 2;
  const cornerR = 1.5;

  pcbShape.moveTo(-halfW + cornerR, -halfL);
  pcbShape.lineTo(halfW - cornerR, -halfL);
  pcbShape.absarc(halfW - cornerR, -halfL + cornerR, cornerR, -Math.PI / 2, 0, false);
  pcbShape.lineTo(halfW, halfL - cornerR);
  pcbShape.absarc(halfW - cornerR, halfL - cornerR, cornerR, 0, Math.PI / 2, false);
  pcbShape.lineTo(-halfW + cornerR, halfL);
  pcbShape.absarc(-halfW + cornerR, halfL - cornerR, cornerR, Math.PI / 2, Math.PI, false);
  pcbShape.lineTo(-halfW, -halfL + cornerR);
  pcbShape.absarc(-halfW + cornerR, -halfL + cornerR, cornerR, Math.PI, Math.PI * 1.5, false);

  // 4 Taladros de sujeción M2.5
  const holeRadius = 1.25;
  const holeOffset = { x: 12.0, y: 23.0 };
  [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ].forEach(([sx, sy]) => {
    const hole = new THREE.Path();
    hole.absarc(sx * holeOffset.x, sy * holeOffset.y, holeRadius, 0, Math.PI * 2, true);
    pcbShape.holes.push(hole);
  });

  const pcbGeom = new THREE.ExtrudeGeometry(pcbShape, {
    depth: BOARD_THICK,
    bevelEnabled: false,
    curveSegments: 24,
  });
  pcbGeom.rotateX(Math.PI / 2); // Orientar plano horizontal X-Z

  const mbTexture = createMotherboardTexture();
  const topPcbMat = new THREE.MeshStandardMaterial({
    map: mbTexture,
    roughness: 0.65,
    metalness: 0.15,
  });

  const pcbMesh = new THREE.Mesh(pcbGeom, [topPcbMat, mats.pcbEdge]);
  pcbMesh.receiveShadow = true;
  pcbMesh.castShadow = true;
  root.add(pcbMesh);

  // =========================================================================
  // 2. MÓDULO ESP-WROOM-32 (18mm x 25.5mm)
  // =========================================================================
  const wroomGroup = new THREE.Group();
  wroomGroup.name = 'ESP-WROOM-32_Module';
  wroomGroup.position.set(0, BOARD_THICK, -halfL + 25.5 / 2 + 1.2);

  // Sub-PCB propia del módulo WROOM
  const wroomPcbGeom = new THREE.BoxGeometry(18.0, 0.8, 25.5);
  const wroomPcbMesh = new THREE.Mesh(
    wroomPcbGeom,
    new THREE.MeshStandardMaterial({ color: 0x141820, roughness: 0.7 })
  );
  wroomPcbMesh.position.y = 0.4;
  wroomGroup.add(wroomPcbMesh);

  // Sección de antena PCB integrada (parte superior que asoma)
  const antennaGeom = new THREE.PlaneGeometry(18.0, 6.5);
  const antennaMat = new THREE.MeshStandardMaterial({
    map: createAntennaTexture(),
    roughness: 0.5,
    metalness: 0.4,
  });
  const antennaMesh = new THREE.Mesh(antennaGeom, antennaMat);
  antennaMesh.rotation.x = -Math.PI / 2;
  antennaMesh.position.set(0, 0.81, -25.5 / 2 + 6.5 / 2);
  wroomGroup.add(antennaMesh);

  // Caja de blindaje metálico RF (Shielding Can)
  const shieldW = 18.0;
  const shieldL = 16.0;
  const shieldH = 2.4;
  const shieldGeom = new THREE.BoxGeometry(shieldW, shieldH, shieldL);

  const shieldLaserMat = new THREE.MeshStandardMaterial({
    map: createShieldLaserTexture(),
    color: 0xdee2e6,
    metalness: 0.82,
    roughness: 0.32,
  });

  // Material del blindaje: grabado en la tapa superior, níquel en los laterales
  const shieldMaterials = [
    mats.metalSilver, // +X
    mats.metalSilver, // -X
    shieldLaserMat,   // +Y (tapa con grabado láser)
    mats.metalSilver, // -Y
    mats.metalSilver, // +Z
    mats.metalSilver, // -Z
  ];

  const shieldMesh = new THREE.Mesh(shieldGeom, shieldMaterials);
  shieldMesh.position.set(0, 0.8 + shieldH / 2, 25.5 / 2 - shieldL / 2);
  shieldMesh.castShadow = true;
  wroomGroup.add(shieldMesh);

  // Almenas / Pads de soldadura almenados (Castellated Vias) alrededor del módulo
  const padGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.7, 12);
  for (let i = 0; i < 11; i++) {
    const zPos = -3.5 + i * 1.27;
    // Lado izquierdo
    const padL = new THREE.Mesh(padGeo, mats.solderTin);
    padL.position.set(-9.0, 0.4, zPos);
    wroomGroup.add(padL);
    // Lado derecho
    const padR = new THREE.Mesh(padGeo, mats.solderTin);
    padR.position.set(9.0, 0.4, zPos);
    wroomGroup.add(padR);
  }

  root.add(wroomGroup);

  // =========================================================================
  // 3. PUERTO MICRO-USB (Carcasa metálica con chaflanes y lengua interior)
  // =========================================================================
  const usbGroup = new THREE.Group();
  usbGroup.name = 'Micro_USB_Port';
  usbGroup.position.set(0, BOARD_THICK, halfL - 1.2);

  // Cuerpo metálico
  const usbOuter = new THREE.Mesh(new THREE.BoxGeometry(7.5, 2.8, 5.8), mats.metalSilver);
  usbOuter.position.set(0, 1.4, -1.2);
  usbOuter.castShadow = true;
  usbGroup.add(usbOuter);

  // Cavidad de inserción frontal
  const usbHole = new THREE.Mesh(
    new THREE.BoxGeometry(6.6, 2.0, 1.2),
    new THREE.MeshStandardMaterial({ color: 0x05070a, roughness: 0.9 })
  );
  usbHole.position.set(0, 1.4, 1.6);
  usbGroup.add(usbHole);

  // Lengüeta central de plástico interior con pines dorados
  const usbTongue = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.5, 3.2), mats.plasticBlack);
  usbTongue.position.set(0, 1.0, 0.6);
  usbGroup.add(usbTongue);

  // 4 Patas de soldadura de retención mecánica
  [
    [-3.8, -3.2],
    [3.8, -3.2],
    [-3.8, 0.6],
    [3.8, 0.6],
  ].forEach(([px, pz]) => {
    const tab = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.8, 1.2), mats.solderTin);
    tab.position.set(px, 0.9, pz);
    usbGroup.add(tab);
  });

  root.add(usbGroup);

  // =========================================================================
  // 4. CHIP USB-A-UART CP2102 (Silicon Labs QFN-28)
  // =========================================================================
  const cp2102Group = new THREE.Group();
  cp2102Group.name = 'IC_CP2102';
  cp2102Group.position.set(0, BOARD_THICK, 7.5);

  const qfnBody = new THREE.Mesh(new THREE.BoxGeometry(5.0, 0.9, 5.0), mats.chipBody);
  qfnBody.position.y = 0.45;
  qfnBody.castShadow = true;
  cp2102Group.add(qfnBody);

  // Grabado láser superior del CP2102
  const cpCanvas = document.createElement('canvas');
  cpCanvas.width = 256;
  cpCanvas.height = 256;
  const cpCtx = cpCanvas.getContext('2d');
  cpCtx.fillStyle = '#1e2128';
  cpCtx.fillRect(0, 0, 256, 256);
  cpCtx.fillStyle = 'rgba(210, 215, 225, 0.65)';
  cpCtx.font = 'bold 36px monospace';
  cpCtx.textAlign = 'center';
  cpCtx.fillText('SILABS', 128, 80);
  cpCtx.font = '500 32px monospace';
  cpCtx.fillText('CP2102', 128, 135);
  cpCtx.font = '400 24px monospace';
  cpCtx.fillText('DCL00K', 128, 185);
  // Punto indicador de pin 1
  cpCtx.beginPath();
  cpCtx.arc(36, 36, 12, 0, Math.PI * 2);
  cpCtx.fill();

  const cpTexture = new THREE.CanvasTexture(cpCanvas);
  const cpLabelMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(4.8, 4.8),
    new THREE.MeshStandardMaterial({ map: cpTexture, roughness: 0.5 })
  );
  cpLabelMesh.rotation.x = -Math.PI / 2;
  cpLabelMesh.position.y = 0.91;
  cp2102Group.add(cpLabelMesh);

  // 28 Pines metálicos miniatura en los 4 costados
  const pinMat = mats.solderTin;
  for (let i = 0; i < 7; i++) {
    const offset = -1.8 + i * 0.6;
    // Pines norte y sur
    [-2.5, 2.5].forEach((z) => {
      const pin = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.3, 0.5), pinMat);
      pin.position.set(offset, 0.15, z);
      cp2102Group.add(pin);
    });
    // Pines este y oeste
    [-2.5, 2.5].forEach((x) => {
      const pin = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.3, 0.35), pinMat);
      pin.position.set(x, 0.15, offset);
      cp2102Group.add(pin);
    });
  }

  root.add(cp2102Group);

  // =========================================================================
  // 5. REGULADOR DE TENSIÓN AMS1117-3.3 (Encapsulado SOT-223)
  // =========================================================================
  const vregGroup = new THREE.Group();
  vregGroup.name = 'IC_AMS1117_3V3';
  vregGroup.position.set(-6.2, BOARD_THICK, 13.5);

  // Cuerpo principal SOT-223
  const vregBody = new THREE.Mesh(new THREE.BoxGeometry(6.5, 1.6, 3.5), mats.chipBody);
  vregBody.position.y = 0.8;
  vregGroup.add(vregBody);

  // Pestaña metálica de disipación trasera
  const vregTab = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.35, 1.8), mats.solderTin);
  vregTab.position.set(0, 0.2, -2.4);
  vregGroup.add(vregTab);

  // 3 Terminales frontales acodados (gull-wing)
  [-2.3, 0, 2.3].forEach((px) => {
    const pin = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.3, 1.8), mats.solderTin);
    pin.position.set(px, 0.15, 2.4);
    vregGroup.add(pin);
  });

  root.add(vregGroup);

  // =========================================================================
  // 6. PULSADORES TÁCTILES SMD ('EN' / Reset y 'BOOT')
  // =========================================================================
  function createTactileButton(name) {
    const btn = new THREE.Group();
    btn.name = name;

    // Caja metálica
    const base = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.6, 3.0), mats.metalSilver);
    base.position.y = 0.8;
    btn.add(base);

    // Botón / émbolo circular central
    const plunger = new THREE.Mesh(
      new THREE.CylinderGeometry(0.9, 0.9, 0.8, 16),
      new THREE.MeshStandardMaterial({ color: 0x222226, roughness: 0.5 })
    );
    plunger.position.y = 1.8;
    btn.add(plunger);

    // 4 Patas de soldadura en las esquinas
    [
      [-1.8, -1.2],
      [1.8, -1.2],
      [-1.8, 1.2],
      [1.8, 1.2],
    ].forEach(([lx, lz]) => {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.3, 0.6), mats.solderTin);
      leg.position.set(lx, 0.15, lz);
      btn.add(leg);
    });

    return btn;
  }

  const btnEn = createTactileButton('Btn_EN');
  btnEn.position.set(-6.8, BOARD_THICK, halfL - 5.5);
  root.add(btnEn);

  const btnBoot = createTactileButton('Btn_BOOT');
  btnBoot.position.set(6.8, BOARD_THICK, halfL - 5.5);
  root.add(btnBoot);

  // =========================================================================
  // 7. LEDS INDICADORES SMD 0603 (Rojo Power y Azul GPIO 2)
  // =========================================================================
  function createSmdLed(material) {
    const led = new THREE.Group();
    // Base blanca cerámica
    const base = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.4, 0.8),
      new THREE.MeshStandardMaterial({ color: 0xf5f5f7, roughness: 0.8 })
    );
    base.position.y = 0.2;
    led.add(base);

    // Lente luminosa con emisión activa
    const lens = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.5, 0.6), material);
    lens.position.y = 0.45;
    led.add(lens);

    // Terminales metálicos soldados
    [-0.7, 0.7].forEach((x) => {
      const pad = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.42, 0.82), mats.solderTin);
      pad.position.set(x, 0.21, 0);
      led.add(pad);
    });

    return led;
  }

  const pwrLed = createSmdLed(mats.ledPwrRed);
  pwrLed.position.set(-3.8, BOARD_THICK, halfL - 10.5);
  root.add(pwrLed);

  const io2Led = createSmdLed(mats.ledUserBlue);
  io2Led.position.set(3.8, BOARD_THICK, halfL - 10.5);
  root.add(io2Led);

  // =========================================================================
  // 8. TIRAS DE PINES PASANTES (2 x 15 pines macho / espadines)
  // =========================================================================
  function createPinHeaderStrip(side) {
    const strip = new THREE.Group();
    const pinCount = 15;
    const stripL = pinCount * PITCH;
    const stripW = 2.5;
    const stripH = 8.5; // Altura estándar de conector hembra/macho

    // Bloque aislante de plástico negro
    const bodyGeom = new THREE.BoxGeometry(stripW, 2.5, stripL);
    const bodyMesh = new THREE.Mesh(bodyGeom, mats.plasticHeader);
    bodyMesh.position.y = 1.25;
    strip.add(bodyMesh);

    // Pines metálicos cuadrados de 0.64 x 0.64 mm
    for (let i = 0; i < pinCount; i++) {
      const z = -stripL / 2 + PITCH / 2 + i * PITCH;

      // Pin superior
      const topPin = new THREE.Mesh(new THREE.BoxGeometry(0.64, 6.0, 0.64), mats.metalGold);
      topPin.position.set(0, 5.5, z);
      topPin.castShadow = true;
      strip.add(topPin);

      // Pin inferior que atraviesa el PCB hacia abajo
      const btmPin = new THREE.Mesh(new THREE.BoxGeometry(0.64, 4.0, 0.64), mats.metalGold);
      btmPin.position.set(0, -2.5, z);
      strip.add(btmPin);

      // Cono de soldadura en la cara superior del PCB
      const solderRing = new THREE.Mesh(
        new THREE.CylinderGeometry(0.9, 1.2, 0.5, 12),
        mats.solderTin
      );
      solderRing.position.set(0, 0.25, z);
      strip.add(solderRing);
    }

    return strip;
  }

  const leftHeader = createPinHeaderStrip('left');
  leftHeader.position.set(-12.7, BOARD_THICK, 0);
  root.add(leftHeader);

  const rightHeader = createPinHeaderStrip('right');
  rightHeader.position.set(12.7, BOARD_THICK, 0);
  root.add(rightHeader);

  // =========================================================================
  // 9. CONDENSADORES Y RESISTENCIAS SMD 0603 PASIVOS
  // =========================================================================
  function createPassive0603(isCapacitor = true) {
    const comp = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.7, 0.8),
      isCapacitor ? mats.ceramicTan : mats.chipBody
    );
    body.position.y = 0.35;
    comp.add(body);

    [-0.7, 0.7].forEach((x) => {
      const cap = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.72, 0.82), mats.solderTin);
      cap.position.set(x, 0.36, 0);
      comp.add(cap);
    });

    return comp;
  }

  // Componentes pasivos alrededor del USB y regulador
  const passivesCoords = [
    [-3.2, 17.5, false], // Resistencia pull-up
    [3.2, 17.5, false],
    [-2.5, 11.2, true],  // Condensador desacoplo 100nF
    [2.5, 11.2, true],
    [-8.5, 17.2, true],  // Condensador tantalio entrada
    [-4.5, 5.2, true],
    [4.5, 5.2, true],
  ];

  passivesCoords.forEach(([px, pz, isCap]) => {
    const smd = createPassive0603(isCap);
    smd.position.set(px, BOARD_THICK, pz);
    root.add(smd);
  });

  return root;
}
