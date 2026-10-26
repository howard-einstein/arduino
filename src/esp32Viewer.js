import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildEsp32Board } from './stage/esp32Kit.js';

/**
 * Visor interactivo 3D tipo estudio para la ESP32 DevKit V1.
 */
export function initEsp32Viewer(containerEl, infoEl) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0e1117);

  // Rejilla sutil en el suelo
  const grid = new THREE.GridHelper(160, 32, 0x2e3544, 0x1a1f2c);
  grid.position.y = -2.5;
  scene.add(grid);

  // Cámara en perspectiva de alta definición
  const camera = new THREE.PerspectiveCamera(
    42,
    containerEl.clientWidth / containerEl.clientHeight,
    0.1,
    1000
  );
  camera.position.set(45, 55, 65);

  // Renderizador WebGL de alta precisión
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(containerEl.clientWidth, containerEl.clientHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  containerEl.appendChild(renderer.domElement);

  // Controles orbitales suaves
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.maxPolarAngle = Math.PI / 2 + 0.1; // Permitir ligera vista inferior
  controls.minDistance = 15;
  controls.maxDistance = 220;
  controls.target.set(0, 4, 0);

  // ILUMINACIÓN DE ESTUDIO TÉCNICO
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
  scene.add(ambientLight);

  // Luz principal con sombras suaves (Key Light)
  const keyLight = new THREE.DirectionalLight(0xfff6ea, 2.2);
  keyLight.position.set(45, 70, 40);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 2048;
  keyLight.shadow.mapSize.height = 2048;
  keyLight.shadow.bias = -0.0004;
  keyLight.shadow.camera.near = 10;
  keyLight.shadow.camera.far = 180;
  keyLight.shadow.camera.left = -40;
  keyLight.shadow.camera.right = 40;
  keyLight.shadow.camera.top = 40;
  keyLight.shadow.camera.bottom = -40;
  scene.add(keyLight);

  // Luz de relleno fría (Fill Light)
  const fillLight = new THREE.DirectionalLight(0x9fc5e8, 1.1);
  fillLight.position.set(-50, 40, -40);
  scene.add(fillLight);

  // Luz de contorno metálico (Rim Light)
  const rimLight = new THREE.DirectionalLight(0xffffff, 1.4);
  rimLight.position.set(0, 30, -60);
  scene.add(rimLight);

  // Luz cenital suave
  const topLight = new THREE.PointLight(0xffffff, 0.8, 100);
  topLight.position.set(0, 35, 0);
  scene.add(topLight);

  // CONSTRUCCIÓN E INSERCIÓN DEL MODELO PROCEDURAL ESP32
  const esp32 = buildEsp32Board();
  scene.add(esp32);

  // Raycasting para inspección interactiva
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  const PART_INFO = {
    'ESP-WROOM-32_Module': {
      title: 'ESP-WROOM-32 module (Espressif Systems)',
      desc: 'Dual-core Tensilica Xtensa 32-bit LX6 SoC at 240 MHz. It integrates 520 KB SRAM, 4 MB SPI Flash, Wi‑Fi 802.11 b/g/n, and Bluetooth v4.2 BR/EDR + BLE with an on-board MIFA PCB trace antenna.',
    },
    'IC_CP2102': {
      title: 'CP2102 USB-to-UART bridge (Silicon Labs)',
      desc: 'Full-speed USB 2.0 function controller in a QFN-28 package. It handles serial communication for automatic sketch uploads (DTR/RTS) and serial monitor debugging.',
    },
    'IC_AMS1117_3V3': {
      title: 'AMS1117-3.3 LDO regulator',
      desc: 'Low-dropout linear regulator (SOT-223). It converts 5 V from the USB port or VIN to the 3.3 V operating voltage required by the ESP32, supplying up to 800 mA.',
    },
    'Micro_USB_Port': {
      title: 'Micro-USB Type-B connector',
      desc: 'Power input and communication channel with the PC. It lets you flash firmware and supply up to 500 mA of protected current.',
    },
    'Btn_EN': {
      title: 'EN button (hardware reset)',
      desc: 'Connected to the CHIP_PU line with a pull-up resistor. Pulling this pin LOW resets the microcontroller from address 0x40000000.',
    },
    'Btn_BOOT': {
      title: 'BOOT button (GPIO 0)',
      desc: 'Controls ROM boot mode. Holding it during reset enters UART firmware download mode (UART Download Boot).',
    },
  };

  function updateTooltip(partName) {
    if (!infoEl) return;
    const info = PART_INFO[partName];
    if (info) {
      infoEl.innerHTML = `
        <div class="part-badge">REAL-TIME INSPECTOR</div>
        <h3>${info.title}</h3>
        <p>${info.desc}</p>
      `;
      infoEl.classList.add('is-active');
    } else {
      infoEl.innerHTML = `
        <div class="part-badge">100% PROCEDURAL THREE.JS</div>
        <h3>ESP32 DevKit V1 (ESP-WROOM-32)</h3>
        <p>Hover over the shielded module, the CP2102 USB bridge, the AMS1117 regulator, the buttons, or the micro-USB port to see their specifications.</p>
      `;
      infoEl.classList.remove('is-active');
    }
  }

  containerEl.addEventListener('pointermove', (e) => {
    const rect = containerEl.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / containerEl.clientWidth) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / containerEl.clientHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(esp32.children, true);

    if (intersects.length > 0) {
      let cur = intersects[0].object;
      let matchedName = null;
      while (cur && cur !== esp32) {
        if (PART_INFO[cur.name]) {
          matchedName = cur.name;
          break;
        }
        cur = cur.parent;
      }
      updateTooltip(matchedName);
    } else {
      updateTooltip(null);
    }
  });

  // Animación del render
  let isAutoRotating = true;
  let animId = null;

  function animate() {
    animId = requestAnimationFrame(animate);

    if (isAutoRotating) {
      esp32.rotation.y += 0.005;
    }

    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  // Redimensionado responsivo
  window.addEventListener('resize', () => {
    camera.aspect = containerEl.clientWidth / containerEl.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(containerEl.clientWidth, containerEl.clientHeight);
  });

  return {
    toggleRotate: () => {
      isAutoRotating = !isAutoRotating;
      return isAutoRotating;
    },
    resetView: () => {
      esp32.rotation.y = 0;
      camera.position.set(45, 55, 65);
      controls.target.set(0, 4, 0);
      controls.update();
    },
    destroy: () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
    },
  };
}
