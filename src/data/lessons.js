import { boardSpecs } from "./boardSpecs.js";
import {
  formatMelody,
  melodies,
  rgbPresets,
  ledColorParam,
  obstacleParams,
} from "./helpers.js";

export { boardSpecs, formatMelody, melodies, rgbPresets, ledColorParam, obstacleParams };

/**
 * Catálogo interactivo de las 11 lecciones del curso Aprender Arduino.
 * Cada lección encapsula metadatos didácticos, asignación de pines, código C++,
 * especificaciones técnicas, callouts 3D y parámetros reactivos de simulación.
 */
export const lessons = [
  {
    id: "board",
    title: "Meet the board",
    cardTitle: "1. Meet the<br />board",
    thumb: "board",
    heading: "Arduino Uno",
    lede: "The Arduino Uno is a development board based on the ATmega328P microcontroller. It is easy to use and ideal for learning electronics, programming, and prototyping.",
    features: [
      ["chip", "Open-source hardware"],
      ["bulb", "Large global maker community"],
      ["gear", "Used in education, maker projects, and<br />real-world applications"],
    ],
    pinout: [
      ["D0–D13", "E/S Digital", "Lee botones, conmuta LEDs. Los pines ~3, 5, 6, 9, 10, 11 soportan PWM.", "#2a56a3"],
      ["A0–A5", "Entradas analógicas", "Lecturas ADC de 10 bits: 0–1023 para voltajes de 0–5 V.", "#1aa3a1"],
      ["5V · 3.3V", "Alimentación", "Salidas de voltaje regulado para sensores y módulos.", "#d64a3a"],
      ["GND", "Tierra (GND)", "Punto de retorno común para todos los circuitos.", "#2f3547"],
      ["VIN", "Entrada de voltaje", "Voltaje directo del conector jack, rango 7–12 V.", "#c0652d"],
      ["RESET", "Reinicio (Reset)", "Nivel BAJO (LOW) para reiniciar la ejecución del programa.", "#8e9094"],
    ],
    example: [
      "<code>setup()</code> runs once when the board powers on or resets.",
      "<code>pinMode(LED_BUILTIN, OUTPUT)</code> configures pin 13 (connected to the built-in “L” LED) as an output.",
      "<code>loop()</code> repeats forever. <code>digitalWrite(…, HIGH)</code> applies 5 V to the pin and turns the LED on.",
      "Press <b>Run</b> to upload the code: watch the TX/RX blink and the L LED turn on. Click any component to learn its function.",
    ],
    specs: boardSpecs,
    code: "void setup() {\n  pinMode(LED_BUILTIN, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(LED_BUILTIN, HIGH);\n  delay(1000);\n}",
    callouts: [
      {"anchor": "usb", "icon": "usb", "tall": true, "title": "USB port", "body": "Connect it to your computer<br />to program and power the board.", "x": -498, "y": -314, "w": 275, "side": "bottom", "at": 131, "leg": 30, "ring": true},
      {"anchor": "mcu", "via": "mcuWay", "icon": "chip", "title": "Microcontroller", "body": "The ATmega328P chip runs<br />your C++ code.", "x": -112, "y": -347, "w": 268, "side": "bottom", "at": 84},
      {"anchor": "digital", "icon": "pins", "title": "Digital pins", "body": "Pins 0–13 for digital<br />input and output.<br />(~ PWM on select pins)", "x": 263, "y": -301, "w": 255, "side": "left", "at": 59, "leg": 36, "approach": "above"},
      {"anchor": "jack", "icon": "bolt", "title": "Jack connector", "body": "External DC power<br />(recommended 7–12V).", "x": -498, "y": 125, "w": 253, "side": "top", "at": 89, "leg": 48, "ring": true},
      {"anchor": "power", "icon": "plug", "title": "Power pins", "body": "5V, 3.3V, GND, and<br />VIN for power.", "x": -198, "y": 195, "w": 225, "side": "top", "at": 75, "leg": 32, "ring": true},
      {"anchor": "analog", "icon": "wave", "wide": true, "title": "Analog pins", "body": "A0–A5 to read<br />variable voltages.", "x": 270, "y": 183, "w": 223, "side": "left", "at": 54, "leg": 46, "ring": true},
    ],
    sim: "builtin",
  },
  {
    id: "blink",
    title: "Blink an LED",
    cardTitle: "2. Blink an LED",
    thumb: "led",
    heading: "Blink an LED",
    lede: "Your first circuit: a light-emitting diode (LED) and a resistor on the breadboard, controlled from pin 13. Toggling the pin with a pause in between creates the blink.",
    features: [
      ["pin", "Digital output using <code>digitalWrite()</code>"],
      ["resistor", "Click the resistor to try different values"],
      ["clock", "Click the LED to change color and timing"],
    ],
    pinout: [
      ["D13", "Resistor → LED (+)", "The program toggles this pin between HIGH (5 V) and LOW (0 V).", "#f0a53a"],
      ["GND", "LED (−)", "The short lead (cathode) returns current to ground.", "#2f3547"],
    ],
    example: [
      "<code>const int LED_PIN = 13;</code> assigns a clear, readable name to the control pin.",
      "In <code>setup()</code>, <code>pinMode(LED_PIN, OUTPUT)</code> enables the pin to supply current.",
      "<code>loop()</code> writes HIGH, waits, writes LOW, and pauses again. Both delays define the rhythm.",
      "A larger resistor reduces current: try 10 kΩ and notice how much dimmer the LED becomes.",
    ],
    specs: [
      ["LED", "5 mm, 1.8–3.2 V forward"],
      ["Maximum current", "20 mA"],
      ["Resistor", "220 Ω (red-red-brown)"],
      ["LED current", "≈ (5 − 2) ÷ 220 ≈ 14 mA"],
      ["Pin 13 limit", "40 mA absolute maximum"],
    ],
    params: [
      ledColorParam,
      {
      "key": "on",
      "part": "led",
      "label": "On time",
      "type": "range",
      "min": 50,
      "max": 2000,
      "step": 50,
      "value": 500,
      "unit": "ms"
},
      {
      "key": "off",
      "part": "led",
      "label": "Off time",
      "type": "range",
      "min": 50,
      "max": 2000,
      "step": 50,
      "value": 500,
      "unit": "ms"
},
      {
      "key": "ohms",
      "part": "resistor",
      "label": "Resistance",
      "type": "choice",
      "value": 220,
      "options": [
            {
                  "value": 220,
                  "label": "220 Ω",
                  "note": "Approx. 14 mA: optimal brightness and safe operation."
            },
            {
                  "value": 1000,
                  "label": "1 kΩ",
                  "note": "Approx. 3 mA: noticeably dimmer."
            },
            {
                  "value": 10000,
                  "label": "10 kΩ",
                  "note": "Approx. 0.3 mA: barely visible."
            }
      ]
},
    ],
    code: "const int LED_PIN = 13;\n\nvoid setup() {\n  pinMode(LED_PIN, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(LED_PIN, HIGH);\n  delay({{on}});\n  digitalWrite(LED_PIN, LOW);\n  delay({{off}});\n}\n",
    callouts: [
      {"anchor": "part:led", "icon": "led", "title": "LED diode", "body": "It lights up when pin 13 goes HIGH.", "x": 290, "y": -350, "w": 238, "side": "bottom", "at": 40, "leg": 30, "ring": true},
      {"anchor": "pin:D13", "icon": "pin", "title": "Digital pin 13", "body": "Your code toggles it between HIGH and LOW.", "x": -162, "y": -350, "w": 250, "side": "bottom", "at": 40, "leg": 30, "ring": true},
      {"anchor": "pin:GND", "icon": "ground", "title": "GND line", "body": "The short lead (−) closes the circuit to ground.", "x": -498, "y": -330, "w": 236, "side": "right", "at": 46, "leg": 30, "ring": true},
      {"anchor": "part:resistor", "icon": "resistor", "wide": true, "title": "Current-limiting resistor", "body": "Protects the LED by dissipating excess current.", "x": 270, "y": 160, "w": 238, "side": "left", "at": 46, "leg": 40, "ring": true},
      {"anchor": "ledL", "icon": "bulb", "title": "Built-in LED (L)", "body": "The onboard LED reflects the state of pin 13.", "x": -498, "y": 130, "w": 250, "side": "top", "at": 150, "leg": 40, "ring": true},
    ],
    sim: "blink",
  },
  {
    id: "button",
    title: "Push a button",
    cardTitle: "3. Push a button",
    thumb: "button",
    heading: "Push a button",
    lede: "Inputs allow the board to interact with the physical world. A pushbutton connects pin 2 to 5 V when pressed; a pull-down resistor keeps it at 0 V when released.",
    features: [
      ["button", "Click and hold the button in the scene"],
      ["pin", "Read input signals with <code>digitalRead()</code>"],
      ["logic", "Compare momentary (“hold”) and toggled (“toggle”) logic"],
    ],
    pinout: [
      ["5V", "Button (left)", "Power terminal of the switch.", "#d64a3a"],
      ["D2", "Button (right) + 10 kΩ", "Reads HIGH (1) while it is held down.", "#3d6fc4"],
      ["GND", "10 kΩ pull-down resistor", "Pulls the pin to ground to ensure LOW when released.", "#2f3547"],
      ["D13", "220 Ω → LED", "Visual output controlled by the button.", "#f0a53a"],
    ],
    example: [
      "<code>pinMode(BUTTON, INPUT)</code> configures pin 2 as high-impedance so it can read voltage without disturbing the circuit.",
      "<code>digitalRead(BUTTON)</code> returns HIGH (1) when the button is pressed and LOW (0) when released.",
      "In <b>momentary</b> mode, pin 13 mirrors the state: pressed turns it on, released turns it off.",
      "In <b>toggle</b> mode, the software detects the rising edge and flips the LED state with debounce.",
    ],
    specs: [
      ["Button", "12 mm tactile switch"],
      ["Pull-down", "10 kΩ connected to GND"],
      ["Logic thresholds", "LOW < 1.5 V, HIGH > 3 V"],
      ["Mechanical bounce", "Contact chatter for about ~5 ms"],
      ["Pro tip", "<code>INPUT_PULLUP</code> uses internal resistors without extra components"],
    ],
    params: [
      {
      "key": "mode",
      "part": "button",
      "label": "Control logic",
      "type": "choice",
      "value": "hold",
      "options": [
            {
                  "value": "hold",
                  "label": "Momentary",
                  "note": "The LED turns on only while you hold the button down.",
                  "code": {
                        "globals": "",
                        "logic": "  int pressed = digitalRead(BUTTON);\n  digitalWrite(LED, pressed);"
                  }
            },
            {
                  "value": "toggle",
                  "label": "Toggle",
                  "note": "Each press toggles the LED between on and off.",
                  "code": {
                        "globals": "\nint last = LOW;\nbool lit = false;\n",
                        "logic": "  int now = digitalRead(BUTTON);\n  if (now == HIGH && last == LOW) {\n    lit = !lit;\n    digitalWrite(LED, lit);\n    delay(30);  // debounce\n  }\n  last = now;"
                  }
            }
      ]
},
      ledColorParam,
    ],
    code: "const int BUTTON = 2;\nconst int LED = 13;\n{{mode.globals}}\nvoid setup() {\n  pinMode(BUTTON, INPUT);\n  pinMode(LED, OUTPUT);\n}\n\nvoid loop() {\n{{mode.logic}}\n}\n",
    callouts: [
      {"anchor": "part:button", "icon": "button", "title": "Tactile button", "body": "Hold it down to connect 5 V directly to pin 2.", "x": -162, "y": -350, "w": 256, "side": "bottom", "at": 200, "leg": 30, "ring": true},
      {"anchor": "part:pulldown", "icon": "resistor", "wide": true, "title": "Pull-down", "body": "10 kΩ keeps pin 2 LOW when released.", "x": 270, "y": 160, "w": 238, "side": "left", "at": 46, "leg": 40, "ring": true},
      {"anchor": "part:led", "icon": "led", "title": "Status LED", "body": "Shows the result of the programmed logic visually.", "x": 290, "y": -350, "w": 238, "side": "bottom", "at": 40, "leg": 30, "ring": true},
      {"anchor": "pin:D2", "icon": "pin", "title": "Pin 2 (Input)", "body": "<code>digitalRead()</code> detects HIGH or LOW logic states.", "x": -498, "y": 130, "w": 250, "side": "top", "at": 150, "leg": 40, "ring": true},
    ],
    sim: "button",
  },
  {
    id: "knob",
    title: "Turn a knob",
    cardTitle: "4. Turn a<br />knob",
    thumb: "pot",
    heading: "Turn a knob",
    lede: "A potentiometer is a variable resistor with three terminals. As you turn its shaft, the center terminal sweeps a resistive track from 0 V to 5 V, and the ADC converts that voltage into digital data.",
    features: [
      ["knob", "Drag the cursor around the knob to turn it"],
      ["wave", "<code>analogRead()</code> returns discrete readings from 0 to 1023"],
      ["pwm", "<code>analogWrite()</code> modulates LED brightness from 0 to 255"],
    ],
    pinout: [
      ["5V", "Potentiometer (left)", "Top end of the voltage divider.", "#d64a3a"],
      ["A0", "Potentiometer (middle)", "Wiper varies continuously from 0 to 5 V as the knob turns.", "#3fae6a"],
      ["GND", "Potentiometer (right)", "Lower reference end tied to ground.", "#2f3547"],
      ["~D9", "220 Ω → LED", "PWM output whose modulation adjusts LED brightness.", "#f0a53a"],
    ],
    example: [
      "<code>analogRead(A0)</code> samples the wiper voltage using the board’s 10-bit ADC.",
      "The converter returns a whole number from 0 to 1023 (where 0 means 0 V and 1023 means 5 V).",
      "Dividing by 4 maps the value into the 0–255 range used by the 8-bit <code>analogWrite()</code> resolution.",
      "Open the Serial Monitor to observe the live stream while you turn the knob.",
    ],
    specs: [
      ["Potentiometer", "10 kΩ linear, 270° rotation"],
      ["ADC resolution", "10 bits, range 0 to 1023"],
      ["Sensitivity", "≈ 4.9 mV per digital unit"],
      ["PWM resolution", "8 bits (0–255) at ~490 Hz"],
      ["Conversion time", "≈ 100 µs per <code>analogRead()</code> call"],
    ],
    params: [
      {
      "key": "pot",
      "part": "pot",
      "label": "Knob position",
      "type": "range",
      "min": 0,
      "max": 1023,
      "step": 1,
      "value": 620
},
      ledColorParam,
    ],
    code: "const int POT = A0;\nconst int LED = 9;\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(LED, OUTPUT);\n}\n\nvoid loop() {\n  int value = analogRead(POT);  // 0-1023\n  analogWrite(LED, value / 4);  // 0-255\n  Serial.println(value);\n  delay(50);\n}\n",
    callouts: [
      {"anchor": "part:pot", "icon": "knob", "title": "Linear potentiometer", "body": "Turn the knob to vary the voltage divider from 0 V to 5 V.", "x": -162, "y": -350, "w": 252, "side": "bottom", "at": 200, "leg": 30, "ring": true},
      {"anchor": "pin:A0", "icon": "wave", "wide": true, "title": "Analog pin A0", "body": "Digitizes the voltage as an integer from 0 to 1023.", "x": -498, "y": 130, "w": 252, "side": "top", "at": 150, "leg": 40, "ring": true},
      {"anchor": "part:led", "icon": "led", "title": "Controlled LED", "body": "Its brightness varies in proportion to the shaft position.", "x": 290, "y": -350, "w": 238, "side": "bottom", "at": 40, "leg": 30, "ring": true},
      {"anchor": "pin:D9", "icon": "pwm", "wide": true, "title": "Pin ~9 (PWM)", "body": "Modulates the duty cycle to regulate power output.", "x": 270, "y": 160, "w": 238, "side": "left", "at": 46, "leg": 40, "ring": true},
    ],
    sim: "knob",
  },
  {
    id: "rgb",
    title: "Mix colours",
    cardTitle: "5. Mix<br />colours",
    thumb: "rgb",
    heading: "Mix colours",
    lede: "An RGB LED combines three emitters (red, green, and blue) in one diffused package. By adjusting the intensity of each channel with PWM, you can create almost any shade in the visible spectrum.",
    features: [
      ["pwm", "Three independent PWM pins, 0–255 per channel"],
      ["bulb", "Additive mix: red + green makes yellow"],
      ["led", "Click the LED to mix your own combination"],
    ],
    pinout: [
      ["~D9", "220 Ω → Red terminal", "Intensity and duty cycle for the red channel.", "#ee7f62"],
      ["~D10", "220 Ω → Green terminal", "Intensity and duty cycle for the green channel.", "#3fae6a"],
      ["~D11", "220 Ω → Blue terminal", "Intensity and duty cycle for the blue channel.", "#3d6fc4"],
      ["GND", "Common cathode (long leg)", "Shared return line for all three channels.", "#2f3547"],
    ],
    example: [
      "Each colour is assigned to its own PWM pin: pin 9 for red, 10 for green, and 11 for blue.",
      "The three internal LEDs share the common cathode terminal (the longer leg).",
      "<code>analogWrite(pin, intensity)</code> sets the duty cycle from 0 (off) to 255 (maximum brightness).",
      "Move the RGB sliders or choose a preset to see additive colour synthesis in action.",
    ],
    specs: [
      ["LED", "5 mm RGB, common-cathode configuration"],
      ["Forward voltage (Vf)", "R 2.0 V · G 3.0 V · B 3.0 V"],
      ["Bias resistors", "3 × 220 Ω"],
      ["PWM generators", "Independent hardware timers"],
      ["Colour depth", "256³ ≈ 16.7 million colour combinations"],
    ],
    params: [
      {
      "key": "preset",
      "part": "rgb",
      "label": "Presets",
      "type": "swatch",
      "value": "purple",
      "options": [
            {
                  "value": "purple",
                  "label": "Purple",
                  "color": "#a43cf0"
            },
            {
                  "value": "pink",
                  "label": "Pink",
                  "color": "#f2457f"
            },
            {
                  "value": "orange",
                  "label": "Orange",
                  "color": "#f57a1f"
            },
            {
                  "value": "yellow",
                  "label": "Yellow",
                  "color": "#f5c330"
            },
            {
                  "value": "teal",
                  "label": "Teal",
                  "color": "#1fbf98"
            },
            {
                  "value": "white",
                  "label": "White",
                  "color": "#f4f0e8"
            }
      ]
},
      {
      "key": "r",
      "part": "rgb",
      "label": "Red channel (R)",
      "type": "range",
      "min": 0,
      "max": 255,
      "step": 1,
      "value": 170,
      "tint": "#e8392e"
},
      {
      "key": "g",
      "part": "rgb",
      "label": "Green channel (G)",
      "type": "range",
      "min": 0,
      "max": 255,
      "step": 1,
      "value": 0,
      "tint": "#3fbf6a"
},
      {
      "key": "b",
      "part": "rgb",
      "label": "Blue channel (B)",
      "type": "range",
      "min": 0,
      "max": 255,
      "step": 1,
      "value": 255,
      "tint": "#3d7be0"
},
    ],
    code: "const int RED = 9;\nconst int GREEN = 10;\nconst int BLUE = 11;\n\nvoid setup() {\n  pinMode(RED, OUTPUT);\n  pinMode(GREEN, OUTPUT);\n  pinMode(BLUE, OUTPUT);\n}\n\nvoid loop() {\n  analogWrite(RED, {{r}});\n  analogWrite(GREEN, {{g}});\n  analogWrite(BLUE, {{b}});\n  delay(100);\n}\n",
    callouts: [
      {"anchor": "part:rgb", "icon": "rgb", "title": "Integrated RGB LED", "body": "Three semiconductor dies (R, G, B) under one diffuser lens.", "x": 290, "y": -350, "w": 238, "side": "bottom", "at": 40, "leg": 30, "ring": true},
      {"anchor": "pin:D10", "icon": "pwm", "wide": true, "title": "Pins ~9 ~10 ~11", "body": "One PWM pin for each colour.", "x": -162, "y": -350, "w": 252, "side": "bottom", "at": 70, "leg": 30, "ring": true},
      {"anchor": "pin:GND", "icon": "ground", "title": "Common cathode (GND)", "body": "Unified electrical return connected to ground.", "x": -498, "y": -330, "w": 236, "side": "right", "at": 46, "leg": 30, "ring": true},
      {"anchor": "part:r-green", "icon": "resistor", "wide": true, "title": "3 resistors", "body": "220 Ω on each colour keeps the current safe.", "x": 270, "y": 160, "w": 248, "side": "left", "at": 46, "leg": 40, "ring": true},
    ],
    sim: "rgb",
  },
  {
    id: "light",
    title: "Sense light",
    cardTitle: "6. Sense light",
    thumb: "lamp",
    heading: "Sense light",
    lede: "A photoresistor (LDR) drops in resistance as the light falling on it increases. Together with a fixed 10 kΩ resistor, it forms a voltage divider that measures light level.",
    features: [
      ["bulb", "More ambient light reduces the internal resistance"],
      ["lamp", "Click or drag the lamp to change the light flow"],
      ["code", "Turns the LED on automatically as the light falls"],
    ],
    pinout: [
      ["5V", "LDR (top end)", "Positive supply for the resistive divider.", "#d64a3a"],
      ["A0", "LDR + 10 kΩ (middle node)", "Intermediate voltage proportional to the light level.", "#3fae6a"],
      ["GND", "10 kΩ resistor (bottom end)", "Ground reference for the divider.", "#2f3547"],
      ["~D9", "220 Ω → LED", "Automatic lighting output (night light).", "#f0a53a"],
      ["GND", "LED (−)", "Ground return line for the LED.", "#2f3547"],
    ],
    example: [
      "The photoresistor and the fixed 10 kΩ resistor divide the 5 V supply according to the brightness level.",
      "With more light, the sensor’s resistance falls and the voltage at A0 approaches 5 V.",
      "When the reading drops below <code>threshold</code>, the program turns the LED on like a night-light.",
      "Move the lamp closer, farther away, or switch it off to confirm the readings reported in the serial console.",
    ],
    specs: [
      ["Photoresistor", "GL5528-type LDR"],
      ["Resistance in light", "≈ 10–20 kΩ"],
      ["Resistance in darkness", "≈ 1 MΩ"],
      ["Reference resistor", "10 kΩ connected to GND"],
      ["Response time", "≈ 20–30 ms"],
    ],
    params: [
      {
      "key": "dist",
      "part": "lamp",
      "label": "Source distance",
      "type": "range",
      "min": 5,
      "max": 50,
      "step": 1,
      "value": 18,
      "unit": "cm"
},
      {
      "key": "lamp",
      "part": "lamp",
      "label": "Lamp on",
      "type": "toggle",
      "value": true
},
      {
      "key": "threshold",
      "part": "ldr",
      "label": "Dark threshold",
      "type": "range",
      "min": 50,
      "max": 1000,
      "step": 10,
      "value": 400
},
    ],
    code: "const int SENSOR = A0;\nconst int LED = 9;\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(LED, OUTPUT);\n}\n\nvoid loop() {\n  int light = analogRead(SENSOR);  // more light = higher\n  Serial.println(light);\n\n  if (light < {{threshold}}) {\n    digitalWrite(LED, HIGH);  // dark: night light on\n  } else {\n    digitalWrite(LED, LOW);\n  }\n  delay(100);\n}\n",
    callouts: [
      {"anchor": "part:led", "icon": "led", "title": "Night light", "body": "Turns on automatically when the environment darkens.", "x": -162, "y": -350, "w": 252, "side": "bottom", "at": 200, "leg": 30, "ring": true},
      {"anchor": "part:ldr", "icon": "sun", "title": "LDR sensor", "body": "A photosensitive semiconductor whose resistance drops as photons arrive.", "x": 290, "y": -350, "w": 238, "side": "bottom", "at": 40, "leg": 30, "ring": true},
      {"anchor": "pin:A0", "icon": "wave", "wide": true, "title": "Analog pin A0", "body": "Digitizes the intermediate voltage created by the divider.", "x": -498, "y": 130, "w": 250, "side": "top", "at": 150, "leg": 40, "ring": true},
      {"anchor": "part:lamp", "icon": "lamp", "title": "Light source", "body": "Switch it on or drag it to illuminate or shadow the sensor.", "x": 250, "y": 160, "w": 238, "side": "top", "at": 72, "leg": 40, "ring": true},
    ],
    sim: "light",
  },
  {
    id: "sensor",
    title: "Read an ultrasonic sensor",
    cardTitle: "7. Read a sensor",
    thumb: "sensor",
    heading: "Read a sensor",
    lede: "The HC-SR04 ultrasonic module fires inaudible sound bursts and times the reflected echo. By using sound propagation speed, it infers the exact distance to the target object.",
    features: [
      ["wave", "Send a pulse and measure the response with <code>pulseIn()</code>"],
      ["ruler", "Every 58 microseconds of travel equals 1 cm"],
      ["car", "Swap obstacles: different surfaces have different acoustic reflectivity"],
    ],
    pinout: [
      ["5V", "VCC", "Stable 5 V supply for the transmitter and receiver.", "#d64a3a"],
      ["GND", "GND", "Common ground reference.", "#2f3547"],
      ["D9", "Trig (Trigger)", "A 10 µs pulse at HIGH triggers 8 ultrasonic cycles.", "#f0b53a"],
      ["D10", "Echo", "Stays HIGH for the time the wave takes to go out and come back.", "#3fae6a"],
    ],
    example: [
      "The Trig pin receives a 10-microsecond pulse to start the ultrasonic burst.",
      "The acoustic transducer emits 8 cycles at 40 kHz and raises the Echo pin to HIGH at the same time.",
      "<code>pulseIn(ECHO, HIGH)</code> measures the receive pulse duration in microseconds with high precision.",
      "Dividing the recorded time by 58 converts the duration to centimeters (based on 343 m/s sound speed in air).",
    ],
    specs: [
      ["Useful range", "2 cm – 400 cm"],
      ["Reading resolution", "≈ 3 mm"],
      ["Operating frequency", "40 kHz ultrasonic"],
      ["Coverage angle", "≈ 15° cone"],
      ["Current draw", "5 V, ≈ 15 mA idle"],
    ],
    params: [
      ...obstacleParams,
      {
      "key": "interval",
      "part": "sensor",
      "label": "Read frequency",
      "type": "range",
      "min": 50,
      "max": 1000,
      "step": 50,
      "value": 100,
      "unit": "ms"
},
    ],
    code: "const int TRIG = 9;\nconst int ECHO = 10;\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(TRIG, OUTPUT);\n  pinMode(ECHO, INPUT);\n}\n\nvoid loop() {\n  digitalWrite(TRIG, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(TRIG, LOW);\n\n  long cm = pulseIn(ECHO, HIGH) / 58;\n  Serial.println(cm);\n  delay({{interval}});\n}\n",
    callouts: [
      {"anchor": "part:sensor", "icon": "sensor", "wide": true, "title": "HC-SR04 sensor", "body": "Emits 40 kHz waves and calculates acoustic flight time.", "x": 290, "y": -350, "w": 238, "side": "bottom", "at": 40, "leg": 30, "ring": true},
      {"anchor": "pin:D9", "icon": "pins", "title": "Trig and Echo pins", "body": "Pin 9 starts the pulse train and pin 10 receives the reflected echo.", "x": -162, "y": -350, "w": 262, "side": "bottom", "at": 70, "leg": 30, "ring": true},
      {"anchor": "pin:5V", "icon": "plug", "title": "5V and GND", "body": "Direct power supply provided by the board.", "x": -498, "y": 130, "w": 250, "side": "top", "at": 150, "leg": 40, "ring": true},
      {"anchor": "part:obstacle", "icon": "car", "wide": true, "title": "Dynamic obstacle", "body": "Click to change the object or drag it to alter the distance.", "x": 270, "y": 160, "w": 238, "side": "left", "at": 46, "leg": 40, "ring": true},
    ],
    sim: "sensor",
  },
  {
    id: "sound",
    title: "Make a sound",
    cardTitle: "8. Make a sound",
    thumb: "buzzer",
    heading: "Make a sound",
    lede: "A piezo buzzer produces a mechanical click every time its polarity reverses. By oscillating it hundreds of times per second, you create a musical note: the <code>tone()</code> instruction does it with precise timing.",
    features: [
      ["speaker", "Generate musical notes with <code>tone(pin, Hz, ms)</code>"],
      ["console", "Store melody sequences in arrays"],
      ["clock", "Click the buzzer to change the song or tempo"],
    ],
    pinout: [
      ["D8", "Buzzer (+)", "Signal switched to the exact frequency of each note.", "#f0a53a"],
      ["GND", "Buzzer (−)", "Current returns to the ground line.", "#2f3547"],
    ],
    example: [
      "The <code>melody</code> array stores the root frequencies in hertz (262 Hz corresponds to middle C).",
      "<code>tone(BUZZER, hz, ms)</code> modulates a square wave on the selected pin for <code>ms</code> milliseconds.",
      "The pause created by <code>delay</code> gives a short silent gap between repeated notes so they do not blur together.",
      "After the melody finishes, the loop pauses for a second before starting again.",
    ],
    specs: [
      ["Acoustic transducer", "Passive piezo, 12 mm"],
      ["Frequency range", "≈ 100 Hz – 10 kHz"],
      ["Middle C (C4)", "262 Hz"],
      ["A4 tuning note", "440 Hz"],
      ["Technical note", "An active buzzer vibrates internally and only emits a fixed tone"],
    ],
    params: [
      {
        key: "melody",
        part: "buzzer",
        label: "Melody",
        type: "choice",
        value: "twinkle",
        options: [
          {
            value: "scale",
            label: "Scale",
            note: "A full octave of C major.",
            code: { notes: formatMelody(melodies.scale, 4) },
          },
          {
            value: "twinkle",
            label: "Twinkle",
            note: "Twinkle, twinkle, little star.",
            code: { notes: formatMelody(melodies.twinkle, 7) },
          },
          {
            value: "ode",
            label: "Ode to Joy",
            note: "Beethoven’s Ninth Symphony, main theme.",
            code: { notes: formatMelody(melodies.ode, 5) },
          },
        ],
      },
      {
      "key": "note",
      "part": "buzzer",
      "label": "Note duration",
      "type": "range",
      "min": 80,
      "max": 500,
      "step": 10,
      "value": 220,
      "unit": "ms"
},
      {
      "key": "volume",
      "part": "buzzer",
      "label": "Speaker volume",
      "type": "range",
      "min": 0,
      "max": 100,
      "step": 5,
      "value": 40,
      "unit": "%"
},
    ],
    code: "const int BUZZER = 8;\n{{melody.notes}}\nconst int N = sizeof(melody) / sizeof(int);\n\nvoid setup() {}\n\nvoid loop() {\n  for (int i = 0; i < N; i++) {\n    tone(BUZZER, melody[i], {{note}});\n    delay({{note}} + 50);\n  }\n  delay(1000);\n}\n",
    callouts: [
      {"anchor": "part:buzzer", "icon": "speaker", "title": "Passive buzzer", "body": "A ceramic diaphragm vibrates according to the electrical signals applied.", "x": 290, "y": -350, "w": 238, "side": "bottom", "at": 40, "leg": 30, "ring": true},
      {"anchor": "pin:D8", "icon": "pin", "title": "Audio pin D8", "body": "<code>tone()</code> oscillates this pin at exact audible frequencies.", "x": -162, "y": -350, "w": 262, "side": "bottom", "at": 40, "leg": 30, "ring": true},
      {"anchor": "pin:GND", "icon": "ground", "title": "Ground terminal", "body": "Closes the electro-acoustic circuit to the board ground.", "x": -498, "y": -330, "w": 226, "side": "right", "at": 46, "leg": 30, "ring": true},
      {"anchor": "mcu", "icon": "chip", "title": "MCU timer", "body": "A hardware timer keeps the frequency and pitch stable.", "x": -498, "y": 130, "w": 250, "side": "top", "at": 150, "leg": 40, "ring": true},
    ],
    sim: "sound",
  },
  {
    id: "motor",
    title: "Control a motor",
    cardTitle: "9. Control a motor",
    thumb: "motor",
    heading: "Control a motor",
    lede: "A microcontroller cannot power a motor coil directly because of its current demands; a Darlington transistor handles the heavy load. PWM switches the power on and off at high frequency to control the rotation speed.",
    features: [
      ["pwm", "Speed control from 0 to 255 with <code>analogWrite()</code>"],
      ["transistor", "The TIP120 transistor switches the main power current"],
      ["motor", "Click the motor to configure the acceleration ramp"],
    ],
    pinout: [
      ["~D6", "1 kΩ → Base", "PWM control signal generated by the program.", "#ef8a3a"],
      ["5V", "Motor (+)", "Power line for the DC motor.", "#d64a3a"],
      ["—", "Motor (−) → Collector", "The transistor acts like a switch and closes the circuit to ground.", "#2f3547"],
      ["GND", "Emitter", "Shared ground connection for the system.", "#2f3547"],
    ],
    example: [
      "<code>analogWrite(MOTOR, s)</code> sets the PWM duty cycle: 0 keeps the motor stopped and 255 delivers 100% power.",
      "The <code>for</code> loop gradually increases <code>s</code> every 40 ms to produce a smooth acceleration ramp.",
      "After holding the top speed, setting 0 stops the transistor and lets the motor slow by inertia.",
      "Pins marked with a tilde (~) on the silkscreen (3, 5, 6, 9, 10, 11) include hardware PWM modulation.",
    ],
    specs: [
      ["Motor", "DC 3–6 V, nominal draw ~200 mA"],
      ["Power transistor", "Darlington TIP120 (up to 5 A capacity)"],
      ["Base resistor", "1 kΩ (brown-black-red) for safe saturation"],
      ["PWM frequency on pin 6", "≈ 980 Hz"],
      ["Essential protection", "Flyback diode in antiparallel with the inductive terminals"],
    ],
    params: [
      {
      "key": "top",
      "part": "motor",
      "label": "Max speed",
      "type": "range",
      "min": 50,
      "max": 255,
      "step": 5,
      "value": 255
},
      {
      "key": "step",
      "part": "motor",
      "label": "Ramp step",
      "type": "range",
      "min": 1,
      "max": 25,
      "step": 1,
      "value": 5
},
    ],
    code: "const int MOTOR = 6;  // PWM pin\n\nvoid setup() {\n  pinMode(MOTOR, OUTPUT);\n}\n\nvoid loop() {\n  for (int s = 0; s <= {{top}}; s += {{step}}) {\n    analogWrite(MOTOR, s);\n    delay(40);\n  }\n  delay(1500);\n  analogWrite(MOTOR, 0);\n  delay(1500);\n}\n",
    callouts: [
      {"anchor": "part:transistor", "icon": "transistor", "title": "Power transistor", "body": "A tiny base current controls the motor’s heavy current draw.", "x": 290, "y": -350, "w": 238, "side": "bottom", "at": 40, "leg": 30, "ring": true},
      {"anchor": "part:r1k", "icon": "resistor", "wide": true, "title": "1 kΩ resistor", "body": "Limits base current and protects the microcontroller output pin.", "x": 26, "y": -350, "w": 248, "side": "bottom", "at": 190, "leg": 30, "ring": true},
      {"anchor": "pin:D6", "icon": "pwm", "wide": true, "title": "Pin ~6 (PWM)", "body": "<code>analogWrite()</code> modulates the effective output power (0–255).", "x": -300, "y": -350, "w": 260, "side": "bottom", "at": 230, "leg": 30, "ring": true},
      {"anchor": "part:motor", "icon": "motor", "wide": true, "title": "DC motor", "body": "Click to calibrate the speed ramp and maximum regime.", "x": 270, "y": 160, "w": 238, "side": "left", "at": 46, "leg": 40, "ring": true},
    ],
    sim: "motor",
  },
  {
    id: "servo",
    title: "Sweep a servo",
    cardTitle: "10. Sweep a<br />servo",
    thumb: "servo",
    heading: "Sweep a servo",
    lede: "A servomotor is a closed-loop actuator with a built-in position sensor. When told an angle between 0° and 180°, it rotates to that position and holds it firmly; it is essential in robotics, steering, and models.",
    features: [
      ["servo", "Direct angular control with <code>arm.write(angle)</code>"],
      ["console", "The official Servo library synthesizes the PPM pulse train"],
      ["clock", "Click the servo to adjust sweep range and speed"],
    ],
    pinout: [
      ["GND", "Brown wire", "Ground reference (GND).", "#7a5034"],
      ["5V", "Red wire", "5 V DC power line.", "#d64a3a"],
      ["D9", "Orange wire", "Signal channel: 1–2 ms pulses every 20 ms (50 Hz).", "#f0a53a"],
    ],
    example: [
      "<code>#include &lt;Servo.h&gt;</code> imports the timing routines and <code>Servo arm;</code> declares the actuator object.",
      "<code>arm.attach(9)</code> initializes periodic position modulation on digital pin 9.",
      "The first <code>for</code> loop increases the angle one degree at a time; the complementary loop sweeps back in reverse.",
      "The <code>delay</code> value adjusts angular speed: a shorter wait makes the motion quicker and more immediate.",
    ],
    specs: [
      ["Servomotor", "Micro SG90 with plastic gears, mass 9 g"],
      ["Angular range", "0° to 180°"],
      ["Response speed", "≈ 0.1 s to sweep 60°"],
      ["Torque", "1.8 kg·cm at nominal 4.8 V"],
      ["Control protocol", "50 Hz signal with 0.5 ms to 2.4 ms pulses"],
    ],
    params: [
      {
      "key": "from",
      "part": "servo",
      "label": "Initial angle",
      "type": "range",
      "min": 0,
      "max": 175,
      "step": 5,
      "value": 0,
      "unit": "°"
},
      {
      "key": "to",
      "part": "servo",
      "label": "Final angle",
      "type": "range",
      "min": 5,
      "max": 180,
      "step": 5,
      "value": 180,
      "unit": "°"
},
      {
      "key": "wait",
      "part": "servo",
      "label": "Step delay",
      "type": "range",
      "min": 2,
      "max": 40,
      "step": 1,
      "value": 12,
      "unit": "ms"
},
    ],
    code: "#include <Servo.h>\nServo arm;\n\nvoid setup() {\n  arm.attach(9);\n}\n\nvoid loop() {\n  for (int a = {{from}}; a <= {{to}}; a++) {\n    arm.write(a);\n    delay({{wait}});\n  }\n  for (int a = {{to}}; a >= {{from}}; a--) {\n    arm.write(a);\n    delay({{wait}});\n  }\n}\n",
    callouts: [
      {"anchor": "part:servo", "icon": "servo", "title": "SG90 servomotor", "body": "Click to define the movement limits and speed.", "x": 290, "y": -350, "w": 238, "side": "bottom", "at": 40, "leg": 30, "ring": true},
      {"anchor": "pin:D9", "icon": "pwm", "wide": true, "title": "Signal pin D9", "body": "The pulse width determines the shaft angle.", "x": -162, "y": -350, "w": 250, "side": "bottom", "at": 40, "leg": 30, "ring": true},
      {"anchor": "pin:5V", "icon": "plug", "title": "5V power and GND", "body": "Red and brown wires feed the gearbox motor internally.", "x": -498, "y": 130, "w": 250, "side": "top", "at": 150, "leg": 40, "ring": true},
    ],
    sim: "servo",
  },
  {
    id: "project",
    title: "Build a project: Parking sensor",
    cardTitle: "11. Build a<br />project",
    thumb: "gears",
    heading: "Parking sensor",
    lede: "A complete integration of concepts: the ultrasonic sensor keeps watch on a vehicle’s approach and a tricolour traffic-light module gives visual guidance on when to stop. Click the traffic light to tune the proximity thresholds.",
    features: [
      ["logic", "Conditional flow control using direct boolean comparisons"],
      ["lights", "Three independent digital outputs, one per traffic-light LED"],
      ["sensor", "Reuses the ultrasonic telemetry algorithm from lesson 7"],
    ],
    pinout: [
      ["5V · GND", "Unified power", "Shared 5 V line and GND bus connected to the traffic-light module.", "#d64a3a"],
      ["D9 · D10", "Trig · Echo", "The same ultrasonic control connections used in lesson 7.", "#3d6fc4"],
      ["D4", "Red LED", "Lights up when the obstacle enters the critical-risk zone.", "#ee7f62"],
      ["D3", "Yellow LED", "Activates at intermediate distance as a warning signal.", "#f0b53a"],
      ["D2", "Green LED", "Stays on while the distance remains safe and clear.", "#3fae6a"],
    ],
    example: [
      "The runtime loop calculates the distance in centimetres using the same procedure as lesson 7.",
      "A boolean expression like <code>cm &gt; 30</code> evaluates naturally to true (1) or false (0).",
      "Passing the comparison result directly to <code>digitalWrite()</code> controls each light concisely without nested <code>if</code> blocks.",
      "Because the conditions are mutually exclusive, one light stays active at all times.",
    ],
    specs: [
      ["Components", "Arduino Uno, HC-SR04 sensor, and 3-light LED traffic module"],
      ["Connections", "8 jumper wires on a breadboard"],
      ["Distance thresholds", "Fully configurable in real time"],
      ["Sampling cadence", "≈ 15 measurements per second"],
      ["Extension idea", "Integrate the buzzer from lesson 8 for proportional acoustic signalling"],
    ],
    params: [
      ...obstacleParams,
      {
      "key": "far",
      "part": "lights",
      "label": "Green zone beyond",
      "type": "range",
      "min": 10,
      "max": 50,
      "step": 1,
      "value": 30,
      "unit": "cm"
},
      {
      "key": "near",
      "part": "lights",
      "label": "Red zone below",
      "type": "range",
      "min": 3,
      "max": 45,
      "step": 1,
      "value": 15,
      "unit": "cm"
},
    ],
    code: "const int TRIG = 9, ECHO = 10;\nconst int RED = 4, YLW = 3, GRN = 2;\n\nvoid setup() {\n  pinMode(TRIG, OUTPUT);\n  pinMode(ECHO, INPUT);\n  for (int p = 2; p <= 4; p++)\n    pinMode(p, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(TRIG, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(TRIG, LOW);\n  long cm = pulseIn(ECHO, HIGH) / 58;\n\n  digitalWrite(GRN, cm > {{far}});\n  digitalWrite(YLW, cm > {{near}} && cm <= {{far}});\n  digitalWrite(RED, cm <= {{near}});\n  delay(60);\n}\n",
    callouts: [
      {"anchor": "part:sensor", "icon": "sensor", "wide": true, "title": "Proximity sensor", "body": "Continuously tracks physical distance to the target obstacle.", "x": 0, "y": -350, "w": 250, "side": "bottom", "at": 200, "leg": 30, "ring": true},
      {"anchor": "part:lights", "icon": "lights", "title": "Visual traffic light", "body": "Click to redefine the proximity thresholds for each colour.", "x": 290, "y": -350, "w": 238, "side": "bottom", "at": 40, "leg": 30, "ring": true},
      {"anchor": "mcu", "icon": "logic", "title": "Boolean logic", "body": "Direct mathematical evaluations switch the corresponding light.", "x": -498, "y": 130, "w": 250, "side": "top", "at": 150, "leg": 40, "ring": true},
      {"anchor": "part:obstacle", "icon": "car", "wide": true, "title": "Vehicle / object", "body": "Move it closer or farther to watch the light transition in real time.", "x": 270, "y": 160, "w": 238, "side": "left", "at": 46, "leg": 40, "ring": true},
    ],
    sim: "project",
  },
  {
    id: "esp32",
    title: "Meet the ESP32: the jump to Wi‑Fi and IoT",
    cardTitle: "12. Meet the<br />ESP32",
    thumb: "esp32",
    heading: "ESP32 DevKit V1",
    lede: "The ESP32 is the bigger, connected sibling of the Arduino Uno: a 240 MHz dual-core 32-bit processor, native Wi‑Fi, and Bluetooth. Compare both boards side by side and see the leap toward the Internet of Things (IoT).",
    features: [
      ["chip", "Xtensa dual-core 32-bit processor @ 240 MHz (vs 16 MHz on Uno)"],
      ["bulb", "Built-in Wi‑Fi 802.11 b/g/n and Bluetooth 4.2 BLE"],
      ["gear", "520 KB SRAM and 4 MB Flash (vs 2 KB and 32 KB on Uno)"],
    ],
    pinout: [
      ["D23 · D22 · D21", "GPIO / I²C", "Multi-purpose digital pins and native I²C bus.", "#2a56a3"],
      ["TX0/RX0 · TX2/RX2", "UART Serial", "Two independent hardware serial interfaces.", "#1aa3a1"],
      ["D34 · D35 · VN · VP", "Input-only", "Analog/digital inputs without pull-up resistors.", "#d64a3a"],
      ["TOUCH 0–9", "Capacitive sensor", "10 pins with touch detection and no external parts.", "#8a63c9"],
      ["3V3 · VIN · GND", "Power", "Native 3.3 V logic; AMS1117 regulator for 5 V input.", "#2f3547"],
      ["EN · BOOT", "Boot and reset", "EN resets the CPU; BOOT activates the ROM download mode.", "#8e9094"],
    ],
    example: [
      "The ESP32 is 100% compatible with the Arduino IDE and libraries.",
      "The native <code>WiFi.h</code> library connects the board to your local network in just three lines of code.",
      "Unlike the Uno’s 5 V logic, the ESP32’s inputs and outputs operate at <b>3.3 V</b>.",
      "Press <b>Run program</b> to see the microcontroller boot sequence and Wi‑Fi connection in the serial monitor.",
    ],
    specs: [
      ["Microcontroller", "Espressif ESP-WROOM-32 (Xtensa Dual-Core 32-bit)"],
      ["Clock speed", "240 MHz (up to 600 DMIPS)"],
      ["SRAM", "520 KB internal"],
      ["Flash", "4 MB external SPI"],
      ["Logic voltage", "3.3 V (requires a resistor divider for 5 V signals)"],
      ["Wireless connectivity", "Wi‑Fi 802.11 b/g/n (150 Mbps) + Bluetooth v4.2 BR/EDR and BLE"],
      ["ADC channels", "18 ADC channels, 12-bit (0–4095)"],
      ["DAC outputs", "2 channels, 8-bit analog outputs"],
    ],
    code: "#include <WiFi.h>\n\nconst char* ssid = \"Laboratorio-IoT\";\nconst char* password = \"clave_secreta\";\nconst int LED_PIN = 2;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN, OUTPUT);\n\n  Serial.println(\"Starting ESP32 DevKit V1...\");\n  WiFi.begin(ssid, password);\n\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(300);\n    Serial.print(\".\");\n  }\n\n  Serial.println(\"\\nWiFi connected!\");\n  Serial.print(\"Assigned IP: \");\n  Serial.println(WiFi.localIP());\n}\n\nvoid loop() {\n  digitalWrite(LED_PIN, HIGH);\n  delay(500);\n  digitalWrite(LED_PIN, LOW);\n  delay(500);\n}\n",
    callouts: [
      {"anchor": "part:esp32", "icon": "chip", "wide": true, "title": "ESP32 DevKit V1", "body": "32-bit microcontroller with Wi‑Fi, Bluetooth, and built-in MIFA antenna.", "x": 280, "y": -330, "w": 260, "side": "bottom", "at": 140, "leg": 35, "ring": true},
      {"anchor": "mcu", "icon": "chip", "title": "Arduino Uno R3", "body": "Compare: 8-bit vs 32-bit, 16 MHz vs 240 MHz, 2 KB vs 520 KB RAM.", "x": -260, "y": -340, "w": 260, "side": "bottom", "at": 90},
      {"anchor": "digital", "icon": "pins", "title": "Serial interconnect", "body": "5V lines (red), GND (navy), and D2 data (blue) linking both boards.", "x": 40, "y": 140, "w": 260, "side": "top", "at": 120, "leg": 40, "ring": true},
    ],
    sim: "esp32",
  },
];

/**
 * Obtiene los valores iniciales por defecto de los parámetros de una lección.
 * @param {object} lesson - Lección seleccionada.
 * @returns {Record<string, any>} Mapa clave-valor de parámetros.
 */
export function getLessonParamDefaults(lesson) {
  return Object.fromEntries((lesson.params ?? []).map((p) => [p.key, p.value]));
}

/**
 * Resuelve e interpola las variables dinámicas de los parámetros dentro del código C++.
 * @param {object} lesson - Lección seleccionada con su plantilla de código.
 * @param {Record<string, any>} paramValues - Valores actuales de los parámetros interactivos.
 * @returns {string} Código fuente final de Arduino listo para mostrar/ejecutar.
 */
export function renderLessonCode(lesson, paramValues) {
  let code = lesson.code.replace(
    /\{\{(\w+)\.(\w+)\}\}/g,
    (_, key, prop) =>
      lesson.params
        ?.find((p) => p.key === key)
        ?.options?.find((o) => o.value === paramValues[key])?.code?.[prop] ?? ""
  );
  return code.replace(/\{\{(\w+)\}\}/g, (_, key) => String(paramValues[key] ?? ""));
}

