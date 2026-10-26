const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = [
    "assets/stage-btHE6-0n.js",
    "assets/kit-Ce41oYCW.js",
    "assets/thumbs-gagaX1E4.js"
]))=>i.map((i)=>d[i]);
(()=>{
    let relList = document.createElement(`link`).relList;
    if (relList && relList.supports && relList.supports(`modulepreload`)) {
        return;
    }
    for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)){
        n(e);
    }
    new MutationObserver((e)=>{
        for (let t of e){
            if (t.type === `childList`) {
                for (let e of t.addedNodes){
                    if (e.tagName === `LINK` && e.rel === `modulepreload`) {
                        n(e);
                    }
                }
            }
        }
    }).observe(document, {
        childList: true,
        subtree: true
    });
    function t(e) {
        let t = {};
        if (e.integrity) {
            t.integrity = e.integrity;
        }
        if (e.referrerPolicy) {
            t.referrerPolicy = e.referrerPolicy;
        }
        t.credentials = e.crossOrigin === `use-credentials` ? `include` : e.crossOrigin === `anonymous` ? `omit` : `same-origin`;
        return t;
    }
    function n(e) {
        if (e.ep) {
            return;
        }
        e.ep = true;
        let n = t(e);
        fetch(e.href, n);
    }
})();
const specs = [
    [
        `Microcontroller`,
        `ATmega328P`
    ],
    [
        `Operating voltage`,
        `5 V`
    ],
    [
        `Input voltage`,
        `7–12 V`
    ],
    [
        `Digital I/O pins`,
        `14 (6 PWM)`
    ],
    [
        `Analog inputs`,
        `6`
    ],
    [
        `Flash memory`,
        `32 KB`
    ],
    [
        `SRAM / EEPROM`,
        `2 KB / 1 KB`
    ],
    [
        `Clock speed`,
        `16 MHz`
    ],
    [
        `Size`,
        `68.6 × 53.4 mm`
    ]
];
const t = {
    key: `color`,
    part: `led`,
    label: `Colour`,
    type: `swatch`,
    value: `red`,
    options: [
        {
            value: `red`,
            label: `Red`,
            color: `#e8392e`
        },
        {
            value: `yellow`,
            label: `Yellow`,
            color: `#f2c23a`
        },
        {
            value: `green`,
            label: `Green`,
            color: `#3fbf6a`
        },
        {
            value: `blue`,
            label: `Blue`,
            color: `#3d7be0`
        },
        {
            value: `white`,
            label: `White`,
            color: `#f2efe6`
        }
    ]
};
const n = [
    {
        key: `obstacle`,
        part: `obstacle`,
        label: `Obstacle`,
        type: `choice`,
        value: `car`,
        options: [
            {
                value: `car`,
                label: `Car`
            },
            {
                value: `box`,
                label: `Box`
            },
            {
                value: `ball`,
                label: `Ball`
            },
            {
                value: `wall`,
                label: `Wall`
            }
        ]
    },
    {
        key: `gap`,
        part: `obstacle`,
        label: `Distance`,
        type: `range`,
        min: 5,
        max: 50,
        step: 1,
        value: 30,
        unit: `cm`
    },
    {
        key: `sweep`,
        part: `obstacle`,
        label: `Drive back and forth while running`,
        type: `toggle`,
        value: true
    }
];
const r = {
    purple: {
        rgb: [
            170,
            0,
            255
        ],
        color: `#a43cf0`,
        label: `Purple`
    },
    pink: {
        rgb: [
            255,
            30,
            110
        ],
        color: `#f2457f`,
        label: `Pink`
    },
    orange: {
        rgb: [
            255,
            90,
            0
        ],
        color: `#f57a1f`,
        label: `Orange`
    },
    yellow: {
        rgb: [
            255,
            190,
            0
        ],
        color: `#f5c330`,
        label: `Yellow`
    },
    teal: {
        rgb: [
            0,
            200,
            150
        ],
        color: `#1fbf98`,
        label: `Teal`
    },
    white: {
        rgb: [
            255,
            255,
            255
        ],
        color: `#f4f0e8`,
        label: `White`
    }
};
const i = {
    scale: [
        262,
        294,
        330,
        349,
        392,
        440,
        494,
        523
    ],
    twinkle: [
        262,
        262,
        392,
        392,
        440,
        440,
        392,
        349,
        349,
        330,
        330,
        294,
        294,
        262
    ],
    ode: [
        330,
        330,
        349,
        392,
        392,
        349,
        330,
        294,
        262,
        262,
        294,
        330,
        330,
        294,
        294
    ]
};
function a(e, t) {
    let n = [];
    for(let r = 0; r < e.length; r += t){
        n.push(`  ${e.slice(r, r + t).join(`, `)}`);
    }
    return `int melody[] = {
${n.join(`,
`)}
};`;
}
const lessons = [
    {
        id: `board`,
        title: `Meet the board`,
        cardTitle: `1. Meet the<br />board`,
        thumb: `board`,
        heading: `Arduino Uno`,
        lede: `The Arduino Uno is a popular microcontroller board based on the ATmega328P. It’s easy to use and perfect for learning electronics, programming, and prototyping.`,
        features: [
            [
                `chip`,
                `Open-source hardware`
            ],
            [
                `bulb`,
                `Wide community support`
            ],
            [
                `gear`,
                `Used in education, hobby projects, and<br />real-world applications`
            ]
        ],
        pinout: [
            [
                `D0–D13`,
                `Digital I/O`,
                `Read buttons, drive LEDs. ~3, 5, 6, 9, 10, 11 do PWM.`,
                `#2a56a3`
            ],
            [
                `A0–A5`,
                `Analog in`,
                `10-bit readings, 0–1023 for 0–5 V.`,
                `#1aa3a1`
            ],
            [
                `5V · 3.3V`,
                `Power out`,
                `Regulated supply for sensors and modules.`,
                `#d64a3a`
            ],
            [
                `GND`,
                `Ground`,
                `Every circuit returns here.`,
                `#2f3547`
            ],
            [
                `VIN`,
                `Power in`,
                `Raw jack voltage, 7–12 V.`,
                `#c0652d`
            ],
            [
                `RESET`,
                `Reset`,
                `Pull LOW to restart the sketch.`,
                `#8e9094`
            ]
        ],
        example: [
            `<code>setup()</code> runs once when the board powers up or resets.`,
            `<code>pinMode(LED_BUILTIN, OUTPUT)</code> makes pin 13 — wired to the on-board “L” LED — an output.`,
            `<code>loop()</code> then repeats forever. <code>digitalWrite(…, HIGH)</code> puts 5 V on the pin and lights the LED.`,
            `Press <b>Run</b> to upload: watch TX/RX flicker, then the L LED come on. Click any part to learn what it does.`
        ],
        specs,
        params: [],
        code: `void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
}`,
        callouts: [
            {
                anchor: `usb`,
                icon: `usb`,
                tall: true,
                title: `USB Port`,
                body: `Connects to your computer<br />for programming and power.`,
                x: -498,
                y: -314,
                w: 275,
                side: `bottom`,
                at: 131,
                leg: 30,
                ring: true
            },
            {
                anchor: `mcu`,
                via: `mcuWay`,
                icon: `chip`,
                title: `Microcontroller`,
                body: `ATmega328P runs<br />your code.`,
                x: -112,
                y: -347,
                w: 268,
                side: `bottom`,
                at: 84
            },
            {
                anchor: `digital`,
                icon: `pins`,
                title: `Digital Pins`,
                body: `Pins 0–13 for digital<br />input/output.<br />(~ PWM on some pins)`,
                x: 263,
                y: -301,
                w: 255,
                side: `left`,
                at: 59,
                leg: 36,
                approach: `above`
            },
            {
                anchor: `jack`,
                icon: `bolt`,
                title: `Power Jack`,
                body: `External DC power<br />(7–12V recommended).`,
                x: -498,
                y: 125,
                w: 253,
                side: `top`,
                at: 89,
                leg: 48,
                ring: true
            },
            {
                anchor: `power`,
                icon: `plug`,
                title: `Power Pins`,
                body: `5V, 3.3V, GND and<br />VIN for power.`,
                x: -198,
                y: 195,
                w: 225,
                side: `top`,
                at: 75,
                leg: 32,
                ring: true
            },
            {
                anchor: `analog`,
                icon: `wave`,
                wide: true,
                title: `Analog Pins`,
                body: `A0–A5 for reading<br />analog signals.`,
                x: 270,
                y: 183,
                w: 223,
                side: `left`,
                at: 54,
                leg: 46,
                ring: true
            }
        ],
        sim: `builtin`
    },
    {
        id: `blink`,
        title: `Blink an LED`,
        cardTitle: `2. Blink an LED`,
        thumb: `led`,
        heading: `Blink an LED`,
        lede: `Your first circuit: an LED and a resistor on a breadboard, driven by pin 13. Switching the pin on and off with a pause in between makes it blink.`,
        features: [
            [
                `pin`,
                `Digital output with <code>digitalWrite()</code>`
            ],
            [
                `resistor`,
                `Click the resistor to try other values`
            ],
            [
                `clock`,
                `Click the LED to change its colour and timing`
            ]
        ],
        pinout: [
            [
                `D13`,
                `Resistor → LED (+)`,
                `The sketch switches this pin HIGH and LOW.`,
                `#f0a53a`
            ],
            [
                `GND`,
                `LED (−)`,
                `The short leg returns current to the board.`,
                `#2f3547`
            ]
        ],
        example: [
            `<code>const int LED_PIN = 13;</code> gives the pin a readable name.`,
            `In <code>setup()</code>, <code>pinMode(LED_PIN, OUTPUT)</code> lets the pin drive current.`,
            `<code>loop()</code> writes HIGH, waits, writes LOW, waits again. The two delays set the rhythm.`,
            `A bigger resistor lets less current through: try 10 kΩ and watch the LED dim.`
        ],
        specs: [
            [
                `LED`,
                `5 mm, 1.8–3.2 V forward`
            ],
            [
                `Max current`,
                `20 mA`
            ],
            [
                `Resistor`,
                `220 Ω (red-red-brown)`
            ],
            [
                `LED current`,
                `≈ (5 − 2) ÷ 220 ≈ 14 mA`
            ],
            [
                `Pin 13 limit`,
                `40 mA absolute max`
            ]
        ],
        params: [
            t,
            {
                key: `on`,
                part: `led`,
                label: `On for`,
                type: `range`,
                min: 50,
                max: 2000,
                step: 50,
                value: 500,
                unit: `ms`
            },
            {
                key: `off`,
                part: `led`,
                label: `Off for`,
                type: `range`,
                min: 50,
                max: 2000,
                step: 50,
                value: 500,
                unit: `ms`
            },
            {
                key: `ohms`,
                part: `resistor`,
                label: `Resistance`,
                type: `choice`,
                value: 220,
                options: [
                    {
                        value: 220,
                        label: `220 Ω`,
                        note: `About 14 mA: bright and safe.`
                    },
                    {
                        value: 1000,
                        label: `1 kΩ`,
                        note: `About 3 mA: noticeably dimmer.`
                    },
                    {
                        value: 10000,
                        label: `10 kΩ`,
                        note: `About 0.3 mA: barely glowing.`
                    }
                ]
            }
        ],
        code: `const int LED_PIN = 13;

void setup() {
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_PIN, HIGH);
  delay({{on}});
  digitalWrite(LED_PIN, LOW);
  delay({{off}});
}`,
        callouts: [
            {
                anchor: `part:led`,
                icon: `led`,
                title: `LED`,
                body: `Lights up whenever pin 13 goes HIGH.`,
                x: 290,
                y: -350,
                w: 238,
                side: `bottom`,
                at: 40,
                leg: 30,
                ring: true
            },
            {
                anchor: `pin:D13`,
                icon: `pin`,
                title: `Pin 13`,
                body: `Your sketch switches it HIGH and LOW.`,
                x: -162,
                y: -350,
                w: 250,
                side: `bottom`,
                at: 40,
                leg: 30,
                ring: true
            },
            {
                anchor: `pin:GND`,
                icon: `ground`,
                title: `GND`,
                body: `The short leg (−) returns current here.`,
                x: -498,
                y: -330,
                w: 236,
                side: `right`,
                at: 46,
                leg: 30,
                ring: true
            },
            {
                anchor: `part:resistor`,
                icon: `resistor`,
                wide: true,
                title: `Resistor`,
                body: `Stops the LED drawing too much current.`,
                x: 270,
                y: 160,
                w: 238,
                side: `left`,
                at: 46,
                leg: 40,
                ring: true
            },
            {
                anchor: `ledL`,
                icon: `bulb`,
                title: `Built-in LED`,
                body: `The “L” LED mirrors pin 13 on the board.`,
                x: -498,
                y: 130,
                w: 250,
                side: `top`,
                at: 150,
                leg: 40,
                ring: true
            }
        ],
        sim: `blink`
    },
    {
        id: `button`,
        title: `Push a button`,
        cardTitle: `3. Push a button`,
        thumb: `button`,
        heading: `Push a button`,
        lede: `Inputs let the board sense the world. A push button connects pin 2 to 5 V while you hold it; a pull-down resistor keeps the pin at 0 V when you let go.`,
        features: [
            [
                `button`,
                `Click and hold the button in the scene`
            ],
            [
                `pin`,
                `Read a pin with <code>digitalRead()</code>`
            ],
            [
                `logic`,
                `Switch between “hold” and “toggle” logic`
            ]
        ],
        pinout: [
            [
                `5V`,
                `Button (left)`,
                `One side of the switch.`,
                `#d64a3a`
            ],
            [
                `D2`,
                `Button (right) + 10 kΩ`,
                `Reads HIGH while the button is held.`,
                `#3d6fc4`
            ],
            [
                `GND`,
                `10 kΩ pull-down`,
                `Pulls D2 LOW when the button is up.`,
                `#2f3547`
            ],
            [
                `D13`,
                `220 Ω → LED`,
                `The output you control.`,
                `#f0a53a`
            ]
        ],
        example: [
            `<code>pinMode(BUTTON, INPUT)</code> makes pin 2 listen instead of drive.`,
            `<code>digitalRead(BUTTON)</code> returns HIGH while the button is down, LOW otherwise.`,
            `In <b>hold</b> mode the LED simply copies the button.`,
            `In <b>toggle</b> mode the sketch remembers the last reading and flips the LED on each new press.`
        ],
        specs: [
            [
                `Button`,
                `12 mm tactile switch`
            ],
            [
                `Pull-down`,
                `10 kΩ to GND`
            ],
            [
                `Logic levels`,
                `LOW < 1.5 V, HIGH > 3 V`
            ],
            [
                `Bounce`,
                `Contacts chatter for ~5 ms`
            ],
            [
                `Tip`,
                `<code>INPUT_PULLUP</code> needs no resistor`
            ]
        ],
        params: [
            {
                key: `mode`,
                part: `button`,
                label: `Logic`,
                type: `choice`,
                value: `hold`,
                options: [
                    {
                        value: `hold`,
                        label: `Hold`,
                        note: `The LED is on only while you hold the button.`,
                        code: {
                            globals: ``,
                            logic: `  int pressed = digitalRead(BUTTON);
  digitalWrite(LED, pressed);`
                        }
                    },
                    {
                        value: `toggle`,
                        label: `Toggle`,
                        note: `Each press flips the LED on or off.`,
                        code: {
                            globals: `
int last = LOW;
bool lit = false;
`,
                            logic: `  int now = digitalRead(BUTTON);
  if (now == HIGH && last == LOW) {
    lit = !lit;
    digitalWrite(LED, lit);
    delay(30);  // debounce
  }
  last = now;`
                        }
                    }
                ]
            },
            t
        ],
        code: `const int BUTTON = 2;
const int LED = 13;
{{mode.globals}}
void setup() {
  pinMode(BUTTON, INPUT);
  pinMode(LED, OUTPUT);
}

void loop() {
{{mode.logic}}
}`,
        callouts: [
            {
                anchor: `part:button`,
                icon: `button`,
                title: `Push Button`,
                body: `Click and hold it — pin 2 reads HIGH.`,
                x: -162,
                y: -350,
                w: 256,
                side: `bottom`,
                at: 200,
                leg: 30,
                ring: true
            },
            {
                anchor: `part:pulldown`,
                icon: `resistor`,
                wide: true,
                title: `Pull-down`,
                body: `10 kΩ keeps pin 2 LOW when released.`,
                x: 270,
                y: 160,
                w: 238,
                side: `left`,
                at: 46,
                leg: 40,
                ring: true
            },
            {
                anchor: `part:led`,
                icon: `led`,
                title: `LED`,
                body: `Your sketch decides when it lights.`,
                x: 290,
                y: -350,
                w: 238,
                side: `bottom`,
                at: 40,
                leg: 30,
                ring: true
            },
            {
                anchor: `pin:D2`,
                icon: `pin`,
                title: `Pin 2 (input)`,
                body: `<code>digitalRead()</code> sees HIGH or LOW.`,
                x: -498,
                y: 130,
                w: 250,
                side: `top`,
                at: 150,
                leg: 40,
                ring: true
            }
        ],
        sim: `button`
    },
    {
        id: `knob`,
        title: `Turn a knob`,
        cardTitle: `4. Turn a knob`,
        thumb: `pot`,
        heading: `Turn a knob`,
        lede: `A potentiometer is a resistor with a slider. Turning the knob moves the middle leg anywhere from 0 V to 5 V, and an analog pin turns that into a number.`,
        features: [
            [
                `knob`,
                `Drag around the knob to turn it`
            ],
            [
                `wave`,
                `<code>analogRead()</code> gives 0–1023`
            ],
            [
                `pwm`,
                `<code>analogWrite()</code> dims the LED, 0–255`
            ]
        ],
        pinout: [
            [
                `5V`,
                `Pot (left)`,
                `Top of the voltage divider.`,
                `#d64a3a`
            ],
            [
                `A0`,
                `Pot (middle)`,
                `The wiper: 0–5 V as you turn.`,
                `#3fae6a`
            ],
            [
                `GND`,
                `Pot (right)`,
                `Bottom of the divider.`,
                `#2f3547`
            ],
            [
                `~D9`,
                `220 Ω → LED`,
                `PWM output sets the brightness.`,
                `#f0a53a`
            ]
        ],
        example: [
            `<code>analogRead(POT)</code> measures the wiper voltage: 0 V is 0, 5 V is 1023.`,
            `PWM only goes up to 255, so <code>value / 4</code> scales the reading to fit.`,
            `<code>analogWrite(LED, …)</code> pulses pin 9 so fast the LED looks dimmed.`,
            `Open the serial monitor (press Run) to watch the numbers as you turn.`
        ],
        specs: [
            [
                `Potentiometer`,
                `10 kΩ linear, 270° travel`
            ],
            [
                `ADC`,
                `10-bit, 0–1023`
            ],
            [
                `Resolution`,
                `≈ 4.9 mV per step`
            ],
            [
                `PWM`,
                `8-bit, 0–255 at ~490 Hz`
            ],
            [
                `Read time`,
                `≈ 100 µs per <code>analogRead()</code>`
            ]
        ],
        params: [
            {
                key: `pot`,
                part: `pot`,
                label: `Knob position`,
                type: `range`,
                min: 0,
                max: 1023,
                step: 1,
                value: 620
            },
            t
        ],
        code: `const int POT = A0;
const int LED = 9;

void setup() {
  Serial.begin(9600);
  pinMode(LED, OUTPUT);
}

void loop() {
  int value = analogRead(POT);  // 0-1023
  analogWrite(LED, value / 4);  // 0-255
  Serial.println(value);
  delay(50);
}`,
        callouts: [
            {
                anchor: `part:pot`,
                icon: `knob`,
                title: `Potentiometer`,
                body: `Drag around the knob to turn it.`,
                x: -162,
                y: -350,
                w: 252,
                side: `bottom`,
                at: 200,
                leg: 30,
                ring: true
            },
            {
                anchor: `pin:A0`,
                icon: `wave`,
                wide: true,
                title: `Pin A0`,
                body: `Reads the knob as a number, 0–1023.`,
                x: -498,
                y: 130,
                w: 252,
                side: `top`,
                at: 150,
                leg: 40,
                ring: true
            },
            {
                anchor: `part:led`,
                icon: `led`,
                title: `LED`,
                body: `Brightness follows the knob.`,
                x: 290,
                y: -350,
                w: 238,
                side: `bottom`,
                at: 40,
                leg: 30,
                ring: true
            },
            {
                anchor: `pin:D9`,
                icon: `pwm`,
                wide: true,
                title: `Pin ~9 (PWM)`,
                body: `Dims the LED with fast pulses.`,
                x: 270,
                y: 160,
                w: 238,
                side: `left`,
                at: 46,
                leg: 40,
                ring: true
            }
        ],
        sim: `knob`
    },
    {
        id: `rgb`,
        title: `Mix colours`,
        cardTitle: `5. Mix colours`,
        thumb: `rgb`,
        heading: `Mix colours`,
        lede: `An RGB LED is three LEDs — red, green and blue — under one milky lens. Dim each one with PWM and the light blends into almost any colour you like.`,
        features: [
            [
                `pwm`,
                `One PWM pin per colour, 0–255 each`
            ],
            [
                `bulb`,
                `Light mixes: red + green makes yellow`
            ],
            [
                `led`,
                `Click the LED to mix your own colour`
            ]
        ],
        pinout: [
            [
                `~D9`,
                `220 Ω → Red leg`,
                `Brightness of the red LED.`,
                `#ee7f62`
            ],
            [
                `~D10`,
                `220 Ω → Green leg`,
                `Brightness of the green LED.`,
                `#3fae6a`
            ],
            [
                `~D11`,
                `220 Ω → Blue leg`,
                `Brightness of the blue LED.`,
                `#3d6fc4`
            ],
            [
                `GND`,
                `Common (longest leg)`,
                `All three LEDs return here.`,
                `#2f3547`
            ]
        ],
        example: [
            `Pins <code>9</code>, <code>10</code> and <code>11</code> all support PWM, so each colour can be dimmed on its own.`,
            `<code>analogWrite(RED, 170)</code> runs the red LED at 170 out of 255 — about two-thirds brightness.`,
            `Mixing happens in your eye: red and blue together look purple, all three at 255 look white.`,
            `Each colour gets its own 220 Ω resistor, so no single LED draws too much current.`
        ],
        specs: [
            [
                `LED`,
                `5 mm RGB, common cathode`
            ],
            [
                `Forward voltage`,
                `R 2.0 V · G 3.0 V · B 3.0 V`
            ],
            [
                `Resistors`,
                `3 × 220 Ω`
            ],
            [
                `Colours`,
                `256³ ≈ 16.7 million`
            ],
            [
                `PWM pins used`,
                `~9, ~10, ~11`
            ]
        ],
        params: [
            {
                key: `preset`,
                part: `rgb`,
                label: `Presets`,
                type: `swatch`,
                value: `purple`,
                options: Object.entries(r).map(([e, t])=>({
                        value: e,
                        label: t.label,
                        color: t.color
                    }))
            },
            {
                key: `r`,
                part: `rgb`,
                label: `Red`,
                type: `range`,
                min: 0,
                max: 255,
                step: 1,
                value: 170,
                tint: `#e8392e`
            },
            {
                key: `g`,
                part: `rgb`,
                label: `Green`,
                type: `range`,
                min: 0,
                max: 255,
                step: 1,
                value: 0,
                tint: `#3fbf6a`
            },
            {
                key: `b`,
                part: `rgb`,
                label: `Blue`,
                type: `range`,
                min: 0,
                max: 255,
                step: 1,
                value: 255,
                tint: `#3d7be0`
            }
        ],
        constrain (e, t) {
            let n = r[e.preset];
            if (t === `preset` && n) {
                [e.r, e.g, e.b] = n.rgb;
            } else {
                e.preset = Object.keys(r).find((t)=>r[t].rgb.every((t, n)=>t === [
                            e.r,
                            e.g,
                            e.b
                        ][n])) ?? `custom`;
            }
        },
        code: `const int RED = 9;
const int GREEN = 10;
const int BLUE = 11;

void setup() {
  pinMode(RED, OUTPUT);
  pinMode(GREEN, OUTPUT);
  pinMode(BLUE, OUTPUT);
}

void loop() {
  analogWrite(RED, {{r}});
  analogWrite(GREEN, {{g}});
  analogWrite(BLUE, {{b}});
  delay(100);
}`,
        callouts: [
            {
                anchor: `part:rgb`,
                icon: `rgb`,
                title: `RGB LED`,
                body: `Three colours in one lens — click it to mix.`,
                x: 290,
                y: -350,
                w: 238,
                side: `bottom`,
                at: 40,
                leg: 30,
                ring: true
            },
            {
                anchor: `pin:D10`,
                icon: `pwm`,
                wide: true,
                title: `Pins ~9 ~10 ~11`,
                body: `One PWM pin for each colour.`,
                x: -162,
                y: -350,
                w: 252,
                side: `bottom`,
                at: 70,
                leg: 30,
                ring: true
            },
            {
                anchor: `pin:GND`,
                icon: `ground`,
                title: `GND`,
                body: `The longest leg is the shared ground.`,
                x: -498,
                y: -330,
                w: 236,
                side: `right`,
                at: 46,
                leg: 30,
                ring: true
            },
            {
                anchor: `part:r-green`,
                icon: `resistor`,
                wide: true,
                title: `3 Resistors`,
                body: `220 Ω on each colour keeps the current safe.`,
                x: 270,
                y: 160,
                w: 248,
                side: `left`,
                at: 46,
                leg: 40,
                ring: true
            }
        ],
        sim: `rgb`
    },
    {
        id: `light`,
        title: `Sense light`,
        cardTitle: `6. Sense light`,
        thumb: `lamp`,
        heading: `Sense light`,
        lede: `A light-dependent resistor (LDR) conducts better the more light falls on it. Paired with a fixed resistor it turns brightness into a voltage — just right for a night light that comes on when it gets dark.`,
        features: [
            [
                `wave`,
                `Read brightness with <code>analogRead()</code>`
            ],
            [
                `lamp`,
                `Drag the lamp away, or switch it off`
            ],
            [
                `logic`,
                `Switch the LED on below a threshold`
            ]
        ],
        pinout: [
            [
                `5V`,
                `LDR (left leg)`,
                `Top of the voltage divider.`,
                `#d64a3a`
            ],
            [
                `A0`,
                `LDR + 10 kΩ`,
                `The middle of the divider: higher when brighter.`,
                `#3fae6a`
            ],
            [
                `GND`,
                `10 kΩ`,
                `Bottom of the divider.`,
                `#2f3547`
            ],
            [
                `~D9`,
                `220 Ω → LED`,
                `The night light.`,
                `#f0a53a`
            ],
            [
                `GND`,
                `LED (−)`,
                `The LED’s return path.`,
                `#2f3547`
            ]
        ],
        example: [
            `The LDR and the 10 kΩ resistor form a voltage divider: more light, lower LDR resistance, higher voltage on A0.`,
            `<code>analogRead(SENSOR)</code> turns that voltage into a number from 0 (dark) to 1023 (very bright).`,
            `If the reading drops below the threshold the sketch decides it is dark and switches the LED on.`,
            `Move the lamp and watch the reading in the serial monitor — light falls off quickly with distance.`
        ],
        specs: [
            [
                `LDR`,
                `GL5528 photoresistor`
            ],
            [
                `In daylight`,
                `≈ 10–20 kΩ`
            ],
            [
                `In the dark`,
                `≈ 1 MΩ`
            ],
            [
                `Divider resistor`,
                `10 kΩ to GND`
            ],
            [
                `Response time`,
                `≈ 20–30 ms`
            ]
        ],
        params: [
            {
                key: `dist`,
                part: `lamp`,
                label: `Lamp distance`,
                type: `range`,
                min: 5,
                max: 50,
                step: 1,
                value: 18,
                unit: `cm`
            },
            {
                key: `lamp`,
                part: `lamp`,
                label: `Lamp switched on`,
                type: `toggle`,
                value: true
            },
            {
                key: `threshold`,
                part: `ldr`,
                label: `Dark below`,
                type: `range`,
                min: 50,
                max: 1000,
                step: 10,
                value: 400
            }
        ],
        code: `const int SENSOR = A0;
const int LED = 9;

void setup() {
  Serial.begin(9600);
  pinMode(LED, OUTPUT);
}

void loop() {
  int light = analogRead(SENSOR);  // more light = higher
  Serial.println(light);

  if (light < {{threshold}}) {
    digitalWrite(LED, HIGH);  // dark: night light on
  } else {
    digitalWrite(LED, LOW);
  }
  delay(100);
}`,
        callouts: [
            {
                anchor: `part:led`,
                icon: `led`,
                title: `Night Light`,
                body: `Comes on when the reading says “dark”.`,
                x: -162,
                y: -350,
                w: 252,
                side: `bottom`,
                at: 200,
                leg: 30,
                ring: true
            },
            {
                anchor: `part:ldr`,
                icon: `sun`,
                title: `Light Sensor`,
                body: `Less resistance the more light it gets.`,
                x: 290,
                y: -350,
                w: 238,
                side: `bottom`,
                at: 40,
                leg: 30,
                ring: true
            },
            {
                anchor: `pin:A0`,
                icon: `wave`,
                wide: true,
                title: `Pin A0`,
                body: `Reads the divider as 0–1023.`,
                x: -498,
                y: 130,
                w: 250,
                side: `top`,
                at: 150,
                leg: 40,
                ring: true
            },
            {
                anchor: `part:lamp`,
                icon: `lamp`,
                title: `Desk Lamp`,
                body: `Drag it away, or switch it off.`,
                x: 250,
                y: 160,
                w: 238,
                side: `top`,
                at: 72,
                leg: 40,
                ring: true
            }
        ],
        sim: `light`
    },
    {
        id: `sensor`,
        title: `Read a sensor`,
        cardTitle: `7. Read a sensor`,
        thumb: `sensor`,
        heading: `Read a sensor`,
        lede: `The HC-SR04 sends out a burst of ultrasound and listens for the echo. Timing how long it takes tells you how far away the obstacle is — click it to swap it or drag it closer.`,
        features: [
            [
                `wave`,
                `Trigger a ping, time the echo with <code>pulseIn()</code>`
            ],
            [
                `ruler`,
                `Every 58 µs of echo is about 1 cm`
            ],
            [
                `car`,
                `Swap the obstacle: some echo better than others`
            ]
        ],
        pinout: [
            [
                `5V`,
                `VCC`,
                `Powers the sensor.`,
                `#d64a3a`
            ],
            [
                `GND`,
                `Gnd`,
                `Common ground.`,
                `#2f3547`
            ],
            [
                `D9`,
                `Trig`,
                `A 10 µs HIGH pulse starts a ping.`,
                `#f0b53a`
            ],
            [
                `D10`,
                `Echo`,
                `Stays HIGH for as long as the sound travels.`,
                `#3fae6a`
            ]
        ],
        example: [
            `<code>Serial.begin(9600)</code> opens the serial monitor at 9600 baud.`,
            `A 10 µs pulse on <code>TRIG</code> fires eight 40 kHz pulses from the transmitter.`,
            `<code>pulseIn(ECHO, HIGH)</code> measures the echo time in microseconds.`,
            `Dividing by 58 converts it to centimetres (sound travels there and back).`
        ],
        specs: [
            [
                `Range`,
                `2–400 cm`
            ],
            [
                `Resolution`,
                `≈ 3 mm`
            ],
            [
                `Frequency`,
                `40 kHz`
            ],
            [
                `Beam angle`,
                `≈ 15°`
            ],
            [
                `Supply`,
                `5 V, 15 mA`
            ]
        ],
        params: [
            ...n,
            {
                key: `interval`,
                part: `sensor`,
                label: `Read every`,
                type: `range`,
                min: 50,
                max: 1000,
                step: 50,
                value: 100,
                unit: `ms`
            }
        ],
        code: `const int TRIG = 9;
const int ECHO = 10;

void setup() {
  Serial.begin(9600);
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
}

void loop() {
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);

  long cm = pulseIn(ECHO, HIGH) / 58;
  Serial.println(cm);
  delay({{interval}});
}`,
        callouts: [
            {
                anchor: `part:sensor`,
                icon: `sensor`,
                wide: true,
                title: `HC-SR04`,
                body: `Pings at 40 kHz and times the echo.`,
                x: 290,
                y: -350,
                w: 238,
                side: `bottom`,
                at: 40,
                leg: 30,
                ring: true
            },
            {
                anchor: `pin:D9`,
                icon: `pins`,
                title: `Trig · Echo`,
                body: `Pin 9 fires the ping, pin 10 hears the echo.`,
                x: -162,
                y: -350,
                w: 262,
                side: `bottom`,
                at: 70,
                leg: 30,
                ring: true
            },
            {
                anchor: `pin:5V`,
                icon: `plug`,
                title: `5V · GND`,
                body: `Power for the sensor, straight from the board.`,
                x: -498,
                y: 130,
                w: 250,
                side: `top`,
                at: 150,
                leg: 40,
                ring: true
            },
            {
                anchor: `part:obstacle`,
                icon: `car`,
                wide: true,
                title: `Obstacle`,
                body: `Click to swap it, drag to move it.`,
                x: 270,
                y: 160,
                w: 238,
                side: `left`,
                at: 46,
                leg: 40,
                ring: true
            }
        ],
        sim: `sensor`
    },
    {
        id: `sound`,
        title: `Make a sound`,
        cardTitle: `8. Make a sound`,
        thumb: `buzzer`,
        heading: `Make a sound`,
        lede: `A piezo buzzer clicks every time its pin flips. Flip it hundreds of times a second and you hear a note — <code>tone()</code> does exactly that.`,
        features: [
            [
                `speaker`,
                `Play notes with <code>tone(pin, Hz, ms)</code>`
            ],
            [
                `console`,
                `Store a tune in an array`
            ],
            [
                `clock`,
                `Click the buzzer to pick a tune and tempo`
            ]
        ],
        pinout: [
            [
                `D8`,
                `Buzzer (+)`,
                `Toggled at the note’s frequency.`,
                `#f0a53a`
            ],
            [
                `GND`,
                `Buzzer (−)`,
                `Return path.`,
                `#2f3547`
            ]
        ],
        example: [
            `The <code>melody</code> array holds each note’s frequency in hertz: 262 Hz is middle C.`,
            `<code>tone(BUZZER, hz, ms)</code> plays a square wave for <code>ms</code> milliseconds.`,
            `The <code>delay</code> after each note leaves a short gap so repeated notes sound separate.`,
            `After the last note the loop rests for a second, then starts again.`
        ],
        specs: [
            [
                `Buzzer`,
                `Passive piezo, 12 mm`
            ],
            [
                `Range`,
                `≈ 100 Hz – 10 kHz`
            ],
            [
                `Middle C`,
                `262 Hz`
            ],
            [
                `A above`,
                `440 Hz`
            ],
            [
                `Tip`,
                `An active buzzer only beeps at one pitch`
            ]
        ],
        params: [
            {
                key: `melody`,
                part: `buzzer`,
                label: `Tune`,
                type: `choice`,
                value: `twinkle`,
                options: [
                    {
                        value: `scale`,
                        label: `Scale`,
                        note: `C major, one octave.`,
                        code: {
                            notes: a(i.scale, 4)
                        }
                    },
                    {
                        value: `twinkle`,
                        label: `Twinkle`,
                        note: `Twinkle, twinkle, little star.`,
                        code: {
                            notes: a(i.twinkle, 7)
                        }
                    },
                    {
                        value: `ode`,
                        label: `Ode to Joy`,
                        note: `Beethoven’s Ninth, first phrase.`,
                        code: {
                            notes: a(i.ode, 5)
                        }
                    }
                ]
            },
            {
                key: `note`,
                part: `buzzer`,
                label: `Note length`,
                type: `range`,
                min: 80,
                max: 500,
                step: 10,
                value: 220,
                unit: `ms`
            },
            {
                key: `volume`,
                part: `buzzer`,
                label: `Speaker volume`,
                type: `range`,
                min: 0,
                max: 100,
                step: 5,
                value: 40,
                unit: `%`
            }
        ],
        code: `const int BUZZER = 8;
{{melody.notes}}
const int N = sizeof(melody) / sizeof(int);

void setup() {}

void loop() {
  for (int i = 0; i < N; i++) {
    tone(BUZZER, melody[i], {{note}});
    delay({{note}} + 50);
  }
  delay(1000);
}`,
        callouts: [
            {
                anchor: `part:buzzer`,
                icon: `speaker`,
                title: `Piezo Buzzer`,
                body: `Click it to pick a tune and tempo.`,
                x: 290,
                y: -350,
                w: 238,
                side: `bottom`,
                at: 40,
                leg: 30,
                ring: true
            },
            {
                anchor: `pin:D8`,
                icon: `pin`,
                title: `Pin 8`,
                body: `<code>tone()</code> toggles it at the note’s pitch.`,
                x: -162,
                y: -350,
                w: 262,
                side: `bottom`,
                at: 40,
                leg: 30,
                ring: true
            },
            {
                anchor: `pin:GND`,
                icon: `ground`,
                title: `GND`,
                body: `The buzzer’s other leg.`,
                x: -498,
                y: -330,
                w: 226,
                side: `right`,
                at: 46,
                leg: 30,
                ring: true
            },
            {
                anchor: `mcu`,
                icon: `chip`,
                title: `Timer`,
                body: `A hardware timer keeps each note in tune.`,
                x: -498,
                y: 130,
                w: 250,
                side: `top`,
                at: 150,
                leg: 40,
                ring: true
            }
        ],
        sim: `sound`
    },
    {
        id: `motor`,
        title: `Control a motor`,
        cardTitle: `9. Control a motor`,
        thumb: `motor`,
        heading: `Control a motor`,
        lede: `A pin can’t power a motor on its own, so a transistor does the heavy lifting. PWM switches it on and off very fast to set the speed.`,
        features: [
            [
                `pwm`,
                `Speed from 0 to 255 with <code>analogWrite()</code>`
            ],
            [
                `transistor`,
                `TIP120 switches the motor current`
            ],
            [
                `motor`,
                `Click the motor to change the ramp`
            ]
        ],
        pinout: [
            [
                `~D6`,
                `1 kΩ → Base`,
                `PWM signal from the sketch.`,
                `#ef8a3a`
            ],
            [
                `5V`,
                `Motor (+)`,
                `Motor supply.`,
                `#d64a3a`
            ],
            [
                `—`,
                `Motor (−) → Collector`,
                `The transistor completes the motor circuit.`,
                `#2f3547`
            ],
            [
                `GND`,
                `Emitter`,
                `Shared ground.`,
                `#2f3547`
            ]
        ],
        example: [
            `<code>analogWrite(MOTOR, s)</code> sets the PWM duty cycle: 0 is off, 255 is fully on.`,
            `The <code>for</code> loop raises <code>s</code> step by step every 40 ms — a smooth ramp.`,
            `After holding top speed, writing 0 lets the motor coast to a stop.`,
            `Pins ~3, 5, 6, 9, 10 and 11 support PWM; the ~ on the board marks them.`
        ],
        specs: [
            [
                `Motor`,
                `3–6 V DC, ~200 mA`
            ],
            [
                `Transistor`,
                `TIP120 Darlington, 5 A`
            ],
            [
                `Base resistor`,
                `1 kΩ (brown-black-red)`
            ],
            [
                `PWM on pin 6`,
                `≈ 980 Hz`
            ],
            [
                `Tip`,
                `Add a flyback diode across the motor`
            ]
        ],
        params: [
            {
                key: `top`,
                part: `motor`,
                label: `Top speed`,
                type: `range`,
                min: 50,
                max: 255,
                step: 5,
                value: 255
            },
            {
                key: `step`,
                part: `motor`,
                label: `Ramp step`,
                type: `range`,
                min: 1,
                max: 25,
                step: 1,
                value: 5
            }
        ],
        code: `const int MOTOR = 6;  // PWM pin

void setup() {
  pinMode(MOTOR, OUTPUT);
}

void loop() {
  for (int s = 0; s <= {{top}}; s += {{step}}) {
    analogWrite(MOTOR, s);
    delay(40);
  }
  delay(1500);
  analogWrite(MOTOR, 0);
  delay(1500);
}`,
        callouts: [
            {
                anchor: `part:transistor`,
                icon: `transistor`,
                title: `Transistor`,
                body: `A small base current switches the motor.`,
                x: 290,
                y: -350,
                w: 238,
                side: `bottom`,
                at: 40,
                leg: 30,
                ring: true
            },
            {
                anchor: `part:r1k`,
                icon: `resistor`,
                wide: true,
                title: `1 kΩ Resistor`,
                body: `Keeps the base current safe for the pin.`,
                x: 26,
                y: -350,
                w: 248,
                side: `bottom`,
                at: 190,
                leg: 30,
                ring: true
            },
            {
                anchor: `pin:D6`,
                icon: `pwm`,
                wide: true,
                title: `Pin ~6 (PWM)`,
                body: `<code>analogWrite()</code> sets the speed, 0–255.`,
                x: -300,
                y: -350,
                w: 260,
                side: `bottom`,
                at: 230,
                leg: 30,
                ring: true
            },
            {
                anchor: `part:motor`,
                icon: `motor`,
                wide: true,
                title: `DC Motor`,
                body: `Click it to change the ramp.`,
                x: 270,
                y: 160,
                w: 238,
                side: `left`,
                at: 46,
                leg: 40,
                ring: true
            }
        ],
        sim: `motor`
    },
    {
        id: `servo`,
        title: `Sweep a servo`,
        cardTitle: `10. Sweep a servo`,
        thumb: `servo`,
        heading: `Sweep a servo`,
        lede: `A servo is a motor that knows where it is. Tell it an angle from 0° to 180° and it turns there and holds — perfect for arms, flaps and pointers.`,
        features: [
            [
                `servo`,
                `Position with <code>arm.write(angle)</code>`
            ],
            [
                `console`,
                `The Servo library makes the pulses for you`
            ],
            [
                `clock`,
                `Click the servo to change the sweep`
            ]
        ],
        pinout: [
            [
                `GND`,
                `Brown wire`,
                `Ground.`,
                `#7a5034`
            ],
            [
                `5V`,
                `Red wire`,
                `Power for the motor.`,
                `#d64a3a`
            ],
            [
                `D9`,
                `Orange wire`,
                `Signal: a 1–2 ms pulse every 20 ms.`,
                `#f0a53a`
            ]
        ],
        example: [
            `<code>#include &lt;Servo.h&gt;</code> brings in the library; <code>Servo arm;</code> makes one servo.`,
            `<code>arm.attach(9)</code> starts sending position pulses on pin 9.`,
            `The first <code>for</code> loop steps the angle up one degree at a time, the second steps it back.`,
            `The <code>delay</code> sets how fast it sweeps: smaller is faster.`
        ],
        specs: [
            [
                `Servo`,
                `SG90 micro, 9 g`
            ],
            [
                `Travel`,
                `0–180°`
            ],
            [
                `Speed`,
                `≈ 0.1 s per 60°`
            ],
            [
                `Torque`,
                `1.8 kg·cm at 4.8 V`
            ],
            [
                `Signal`,
                `50 Hz, 0.5–2.4 ms pulses`
            ]
        ],
        params: [
            {
                key: `from`,
                part: `servo`,
                label: `From`,
                type: `range`,
                min: 0,
                max: 175,
                step: 5,
                value: 0,
                unit: `°`
            },
            {
                key: `to`,
                part: `servo`,
                label: `To`,
                type: `range`,
                min: 5,
                max: 180,
                step: 5,
                value: 180,
                unit: `°`
            },
            {
                key: `wait`,
                part: `servo`,
                label: `Step delay`,
                type: `range`,
                min: 2,
                max: 40,
                step: 1,
                value: 12,
                unit: `ms`
            }
        ],
        constrain (e, t) {
            if (e.from >= e.to) {
                if (t === `from`) {
                    e.to = Math.min(180, e.from + 5);
                } else {
                    e.from = Math.max(0, e.to - 5);
                }
            }
        },
        code: `#include <Servo.h>
Servo arm;

void setup() {
  arm.attach(9);
}

void loop() {
  for (int a = {{from}}; a <= {{to}}; a++) {
    arm.write(a);
    delay({{wait}});
  }
  for (int a = {{to}}; a >= {{from}}; a--) {
    arm.write(a);
    delay({{wait}});
  }
}`,
        callouts: [
            {
                anchor: `part:servo`,
                icon: `servo`,
                title: `SG90 Servo`,
                body: `Click it to change how far it sweeps.`,
                x: 290,
                y: -350,
                w: 238,
                side: `bottom`,
                at: 40,
                leg: 30,
                ring: true
            },
            {
                anchor: `pin:D9`,
                icon: `pwm`,
                wide: true,
                title: `Pin 9 (signal)`,
                body: `Pulse width sets the angle.`,
                x: -162,
                y: -350,
                w: 250,
                side: `bottom`,
                at: 40,
                leg: 30,
                ring: true
            },
            {
                anchor: `pin:5V`,
                icon: `plug`,
                title: `5V · GND`,
                body: `The servo’s red and brown wires.`,
                x: -498,
                y: 130,
                w: 250,
                side: `top`,
                at: 150,
                leg: 40,
                ring: true
            }
        ],
        sim: `servo`
    },
    {
        id: `project`,
        title: `Build a project`,
        cardTitle: `11. Build a project`,
        thumb: `gears`,
        heading: `Parking sensor`,
        lede: `Put it all together: the distance sensor watches the obstacle and a traffic light tells the driver when to stop. Click the lights to move the thresholds.`,
        features: [
            [
                `logic`,
                `Decisions with comparisons`
            ],
            [
                `lights`,
                `Three outputs, one for each colour`
            ],
            [
                `sensor`,
                `Reuses the distance code from lesson 7`
            ]
        ],
        pinout: [
            [
                `5V · GND`,
                `Sensor power`,
                `GND is bridged to the light module.`,
                `#d64a3a`
            ],
            [
                `D9 · D10`,
                `Trig · Echo`,
                `Same as lesson 7.`,
                `#3d6fc4`
            ],
            [
                `D4`,
                `Red`,
                `On when the obstacle is close.`,
                `#ee7f62`
            ],
            [
                `D3`,
                `Yellow`,
                `On in between.`,
                `#f0b53a`
            ],
            [
                `D2`,
                `Green`,
                `On when it is far away.`,
                `#3fae6a`
            ]
        ],
        example: [
            `The loop measures distance exactly as in lesson 7.`,
            `A comparison like <code>cm &gt; 30</code> is either true (1) or false (0).`,
            `Writing it straight to a pin turns that LED on or off — no <code>if</code> needed.`,
            `Only one condition can be true at a time, so exactly one light is lit.`
        ],
        specs: [
            [
                `Parts`,
                `Uno, HC-SR04, traffic light module`
            ],
            [
                `Wires`,
                `8 jumpers`
            ],
            [
                `Thresholds`,
                `Adjustable`
            ],
            [
                `Update rate`,
                `≈ 15 times a second`
            ],
            [
                `Next step`,
                `Add a buzzer from lesson 8`
            ]
        ],
        params: [
            ...n,
            {
                key: `far`,
                part: `lights`,
                label: `Green beyond`,
                type: `range`,
                min: 10,
                max: 50,
                step: 1,
                value: 30,
                unit: `cm`
            },
            {
                key: `near`,
                part: `lights`,
                label: `Red within`,
                type: `range`,
                min: 3,
                max: 45,
                step: 1,
                value: 15,
                unit: `cm`
            }
        ],
        constrain (e, t) {
            if (e.near >= e.far) {
                if (t === `near`) {
                    e.far = Math.min(50, e.near + 1);
                } else {
                    e.near = Math.max(3, e.far - 1);
                }
            }
        },
        code: `const int TRIG = 9, ECHO = 10;
const int RED = 4, YLW = 3, GRN = 2;

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  for (int p = 2; p <= 4; p++)
    pinMode(p, OUTPUT);
}

void loop() {
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long cm = pulseIn(ECHO, HIGH) / 58;

  digitalWrite(GRN, cm > {{far}});
  digitalWrite(YLW, cm > {{near}} && cm <= {{far}});
  digitalWrite(RED, cm <= {{near}});
  delay(60);
}`,
        callouts: [
            {
                anchor: `part:sensor`,
                icon: `sensor`,
                wide: true,
                title: `Distance Sensor`,
                body: `Keeps an eye on the obstacle.`,
                x: 0,
                y: -350,
                w: 250,
                side: `bottom`,
                at: 200,
                leg: 30,
                ring: true
            },
            {
                anchor: `part:lights`,
                icon: `lights`,
                title: `Traffic Light`,
                body: `Click it to change the thresholds.`,
                x: 290,
                y: -350,
                w: 238,
                side: `bottom`,
                at: 40,
                leg: 30,
                ring: true
            },
            {
                anchor: `mcu`,
                icon: `logic`,
                title: `Your Logic`,
                body: `Comparisons choose which light is on.`,
                x: -498,
                y: 130,
                w: 250,
                side: `top`,
                at: 150,
                leg: 40,
                ring: true
            },
            {
                anchor: `part:obstacle`,
                icon: `car`,
                wide: true,
                title: `Obstacle`,
                body: `Drag it closer and watch the lights.`,
                x: 270,
                y: 160,
                w: 238,
                side: `left`,
                at: 46,
                leg: 40,
                ring: true
            }
        ],
        sim: `project`
    }
];
function s(e) {
    return Object.fromEntries((e.params ?? []).map((e)=>[
            e.key,
            e.value
        ]));
}
function c(lesson, t) {
    return l(lesson, t).replace(/\{\{(\w+)\}\}/g, (e, n)=>String(t[n] ?? ``));
}
function l(lesson, t) {
    return lesson.code.replace(/\{\{(\w+)\.(\w+)\}\}/g, (n, r, i)=>lesson.params?.find((e)=>e.key === r)?.options?.find((e)=>e.value === t[r])?.code?.[i] ?? ``);
}
const u = 1672;
const d = 941;
const f = [
    {
        a: `tl`,
        p: [
            [
                90,
                410
            ],
            [
                90,
                104
            ],
            [
                99,
                95
            ],
            [
                624,
                95
            ],
            [
                655,
                63
            ],
            [
                736,
                63
            ],
            [
                771,
                28
            ],
            [
                884,
                28
            ],
            [
                912,
                0
            ]
        ]
    },
    {
        a: `tl`,
        p: [
            [
                627,
                88
            ],
            [
                737,
                88
            ]
        ],
        end: `circle`
    },
    {
        a: `tl`,
        p: [
            [
                750,
                82
            ],
            [
                785,
                47
            ],
            [
                893,
                47
            ],
            [
                940,
                0
            ]
        ]
    },
    {
        a: `tl`,
        p: [
            [
                108,
                151
            ],
            [
                108,
                118
            ],
            [
                116,
                110
            ],
            [
                540,
                110
            ],
            [
                552,
                98
            ]
        ]
    },
    {
        a: `tl`,
        p: [
            [
                60,
                0
            ],
            [
                60,
                40
            ],
            [
                76,
                56
            ]
        ]
    },
    {
        a: `tl`,
        p: [
            [
                90,
                410
            ],
            [
                113,
                433
            ],
            [
                113,
                455
            ]
        ],
        end: `circle`
    },
    {
        a: `tl`,
        p: [
            [
                100,
                405
            ],
            [
                100,
                395
            ]
        ],
        start: `circle`
    },
    {
        a: `tl`,
        p: [
            [
                136,
                300
            ],
            [
                136,
                525
            ],
            [
                96,
                565
            ],
            [
                96,
                610
            ],
            [
                72,
                634
            ]
        ]
    },
    {
        a: `tl`,
        p: [
            [
                112,
                382
            ],
            [
                124,
                394
            ],
            [
                124,
                402
            ]
        ],
        start: `circle`
    },
    {
        a: `tl`,
        p: [
            [
                108,
                492
            ],
            [
                108,
                520
            ],
            [
                81,
                547
            ],
            [
                81,
                600
            ],
            [
                72,
                609
            ]
        ]
    },
    {
        a: `tl`,
        p: [
            [
                118,
                585
            ],
            [
                118,
                545
            ],
            [
                150,
                513
            ],
            [
                150,
                470
            ]
        ],
        end: `circle`
    },
    {
        a: `bl`,
        p: [
            [
                0,
                735
            ],
            [
                64,
                671
            ],
            [
                64,
                610
            ],
            [
                72,
                602
            ]
        ]
    },
    {
        a: `bl`,
        p: [
            [
                0,
                780
            ],
            [
                30,
                750
            ],
            [
                30,
                700
            ],
            [
                45,
                685
            ]
        ]
    },
    {
        a: `bl`,
        p: [
            [
                0,
                868
            ],
            [
                72,
                796
            ]
        ]
    },
    {
        a: `bl`,
        p: [
            [
                106,
                735
            ],
            [
                143,
                760
            ],
            [
                226,
                760
            ],
            [
                266,
                800
            ],
            [
                1424,
                800
            ]
        ]
    },
    {
        a: `bl`,
        p: [
            [
                1436,
                800
            ],
            [
                1536,
                800
            ],
            [
                1596,
                860
            ],
            [
                1672,
                860
            ]
        ],
        start: `circle`
    },
    {
        a: `bl`,
        p: [
            [
                200,
                760
            ],
            [
                218,
                742
            ],
            [
                218,
                720
            ]
        ],
        end: `circle`
    },
    {
        a: `br`,
        p: [
            [
                1590,
                924
            ],
            [
                1622,
                892
            ],
            [
                1672,
                892
            ]
        ],
        start: `circle`
    },
    {
        a: `br`,
        p: [
            [
                1636,
                880
            ],
            [
                1636,
                870
            ],
            [
                1652,
                854
            ],
            [
                1672,
                854
            ]
        ],
        start: `circle`
    },
    {
        a: `br`,
        p: [
            [
                1592,
                830
            ],
            [
                1556,
                830
            ],
            [
                1536,
                850
            ],
            [
                1536,
                941
            ]
        ]
    },
    {
        a: `br`,
        p: [
            [
                1500,
                941
            ],
            [
                1500,
                912
            ],
            [
                1520,
                892
            ]
        ]
    },
    {
        a: `br`,
        p: [
            [
                1652,
                941
            ],
            [
                1652,
                924
            ],
            [
                1640,
                912
            ]
        ],
        end: `circle`
    },
    {
        a: `tr`,
        p: [
            [
                1068,
                81
            ],
            [
                1086,
                81
            ],
            [
                1138,
                19
            ],
            [
                1150,
                19
            ]
        ],
        start: `circle`
    },
    {
        a: `tr`,
        p: [
            [
                1620,
                74
            ],
            [
                1640,
                94
            ],
            [
                1640,
                104
            ],
            [
                1660,
                124
            ],
            [
                1660,
                262
            ]
        ],
        end: `circle`
    },
    {
        a: `tr`,
        p: [
            [
                1650,
                64
            ],
            [
                1672,
                86
            ]
        ]
    },
    {
        a: `tr`,
        p: [
            [
                1590,
                104
            ],
            [
                1600,
                114
            ],
            [
                1600,
                160
            ]
        ]
    },
    {
        a: `tr`,
        p: [
            [
                1636,
                84
            ],
            [
                1636,
                92
            ],
            [
                1652,
                108
            ],
            [
                1652,
                112
            ]
        ]
    },
    {
        a: `tr`,
        p: [
            [
                1595,
                104
            ],
            [
                1595,
                108
            ],
            [
                1580,
                108
            ],
            [
                1582,
                104
            ]
        ]
    },
    {
        a: `tr`,
        p: [
            [
                1672,
                300
            ],
            [
                1666,
                306
            ],
            [
                1666,
                470
            ]
        ]
    },
    {
        a: `br`,
        p: [
            [
                1652,
                520
            ],
            [
                1652,
                790
            ],
            [
                1630,
                812
            ]
        ]
    }
];
const p = [
    {
        a: `tl`,
        s: [
            [
                925,
                37,
                11,
                0.95
            ],
            [
                1056,
                22,
                9,
                0.45
            ],
            [
                1068,
                28,
                7,
                0.35
            ],
            [
                1076,
                22,
                14,
                0.75
            ],
            [
                1063,
                36,
                13,
                0.6
            ],
            [
                1083,
                36,
                8,
                0.5
            ]
        ]
    },
    {
        a: `tr`,
        s: [
            [
                1612,
                22,
                13,
                0.6
            ],
            [
                1628,
                20,
                15,
                0.8
            ],
            [
                1645,
                22,
                10,
                0.5
            ],
            [
                1614,
                36,
                9,
                0.45
            ],
            [
                1630,
                37,
                12,
                0.7
            ],
            [
                1622,
                49,
                10,
                0.55
            ],
            [
                1640,
                52,
                9,
                0.75
            ],
            [
                1631,
                64,
                8,
                0.85
            ]
        ]
    },
    {
        a: `tl`,
        s: [
            [
                214,
                350,
                8,
                0.45
            ],
            [
                100,
                678,
                11,
                0.6
            ],
            [
                87,
                694,
                13,
                0.55
            ],
            [
                104,
                698,
                8,
                0.4
            ],
            [
                98,
                712,
                8,
                0.45
            ]
        ]
    },
    {
        a: `bl`,
        s: [
            [
                243,
                760,
                9,
                0.5
            ],
            [
                36,
                815,
                11,
                0.6
            ],
            [
                27,
                830,
                9,
                0.5
            ],
            [
                44,
                830,
                8,
                0.45
            ],
            [
                22,
                844,
                8,
                0.4
            ],
            [
                16,
                912,
                9,
                0.5
            ]
        ]
    },
    {
        a: `br`,
        s: [
            [
                1625,
                808,
                12,
                0.6
            ],
            [
                1640,
                818,
                13,
                0.8
            ],
            [
                1626,
                824,
                10,
                0.55
            ],
            [
                1652,
                812,
                9,
                0.5
            ],
            [
                1645,
                832,
                9,
                0.7
            ],
            [
                1510,
                919,
                8,
                0.6
            ]
        ]
    }
];
const m = `http://www.w3.org/2000/svg`;
function h(e, t, n, r, i) {
    return [
        e.includes(`r`) ? t + r : t,
        e.includes(`b`) ? n + i : n
    ];
}
function ee(e, t, n) {
    let r = t - u;
    let i = n - d;
    e.setAttribute(`viewBox`, `0 0 ${t} ${n}`);
    e.replaceChildren();
    let a = document.createElementNS(m, `g`);
    let o = document.createElementNS(m, `g`);
    let s = document.createElementNS(m, `g`);
    for (let e of f){
        let t = e.p.map(([t, n])=>h(e.a, t, n, r, i));
        if (t.length > 1 && (t[0][0] !== t[1][0] || t[0][1] !== t[1][1])) {
            let e = document.createElementNS(m, `path`);
            e.setAttribute(`d`, `M` + t.map((e)=>e.join(` `)).join(` L`));
            a.append(e);
        }
        for (let [n, r, i] of [
            [
                `start`,
                t[0],
                t[1]
            ],
            [
                `end`,
                t[t.length - 1],
                t[t.length - 2]
            ]
        ]){
            if (e[n] !== `circle`) {
                continue;
            }
            let t = r[0] - i[0];
            let a = r[1] - i[1];
            let s = Math.hypot(t, a) || 1;
            let c = document.createElementNS(m, `circle`);
            c.setAttribute(`cx`, r[0] + t / s * 5.5);
            c.setAttribute(`cy`, r[1] + a / s * 5.5);
            c.setAttribute(`r`, 5.5);
            o.append(c);
        }
    }
    for (let e of p){
        for (let [t, n, a, o] of e.s){
            let [c, l] = h(e.a, t, n, r, i);
            let u = document.createElementNS(m, `rect`);
            u.setAttribute(`x`, c);
            u.setAttribute(`y`, l);
            u.setAttribute(`width`, a);
            u.setAttribute(`height`, a);
            u.setAttribute(`rx`, 1);
            u.setAttribute(`opacity`, o);
            u.setAttribute(`class`, `pix`);
            s.append(u);
        }
    }
    e.append(a, o, s);
}
const g = [
    `JAN`,
    `FEB`,
    `MAR`,
    `APR`,
    `MAY`,
    `JUN`,
    `JUL`,
    `AUG`,
    `SEP`,
    `OCT`,
    `NOV`,
    `DEC`
];
const _ = (e)=>String(e).padStart(2, `0`);
function te(e, t) {
    let n = ()=>{
        let n = new Date;
        e.textContent = `${g[n.getMonth()]} ${_(n.getDate())}, ${n.getFullYear()}`;
        t.textContent = `${_(n.getHours())}:${_(n.getMinutes())}:${_(n.getSeconds())}`;
    };
    n();
    setInterval(n, 1000);
}
const ne = {
    usb: [
        `0 0 32 52`,
        `<path d="M10.5 3.5h11v15h-11z"/><path d="M13.6 7.5v3.4M18.4 7.5v3.4"/><path d="M7 18.5h18v10.8c0 2.6-2.1 4.7-4.7 4.7h-8.6C9.1 34 7 31.9 7 29.3z"/><path d="M14 34v5h4v-5M16 39v10"/>`
    ],
    chip: [
        `0 0 40 40`,
        `<rect x="9.5" y="9.5" width="21" height="21" rx="2"/><rect x="14" y="14" width="12" height="12" rx="1" class="fill"/><path d="M14.5 4v5.5M20 4v5.5M25.5 4v5.5M14.5 30.5V36M20 30.5V36M25.5 30.5V36M4 14.5h5.5M4 20h5.5M4 25.5h5.5M30.5 14.5H36M30.5 20H36M30.5 25.5H36"/>`
    ],
    pins: [
        `0 0 40 40`,
        `<path d="M5 34.5h30M7.5 34.5v-6h25v6"/><path d="M12 28.5V8.5c0-1.4 1-2.5 2.2-2.5s2.3 1.1 2.3 2.5v20M23.5 28.5v-20c0-1.4 1-2.5 2.3-2.5s2.2 1.1 2.2 2.5v20"/>`
    ],
    bolt: [
        `0 0 40 46`,
        `<path d="M24.5 3 9.5 25.5h10L15.5 43 31 19.5H21z"/>`
    ],
    plug: [
        `0 0 40 46`,
        `<path d="M14 4v9M26 4v9"/><path d="M9 13h22v6.5c0 6.1-4.9 11-11 11s-11-4.9-11-11z"/><path d="M20 30.5v6c0 2.5-2 4.5-4.5 4.5"/>`
    ],
    wave: [
        `0 0 44 40`,
        `<path d="M2.5 23h6l4.5-11 6.5 19 6-25 5.5 21 3.5-7.5 2.5 3.5h5"/>`
    ],
    led: [
        `0 0 40 40`,
        `<path d="M13.5 23v-8.5a6.5 6.5 0 0 1 13 0V23"/><path d="M10.5 23h19"/><path d="M16.5 23v13M23.5 23v9"/><path d="M20 2.5v3.2M7.5 7.5l2.3 2.3M32.5 7.5l-2.3 2.3"/>`
    ],
    resistor: [
        `0 0 44 40`,
        `<path d="M2 20h8M34 20h8"/><rect x="10" y="13.5" width="24" height="13" rx="5.5"/><path d="M16.5 13.8v12.4M21.5 13.8v12.4M28 13.8v12.4"/>`
    ],
    pin: [
        `0 0 40 40`,
        `<rect x="12.5" y="21" width="15" height="13" rx="1.5"/><path d="M20 21V4"/><path d="M16.5 27.5h7"/>`
    ],
    ground: [
        `0 0 40 40`,
        `<path d="M20 4v15M7 19h26M12 25.5h16M16.5 32h7"/>`
    ],
    bulb: [
        `0 0 40 40`,
        `<path d="M20 9.5a8 8 0 0 0-4.8 14.4c.8.6 1.3 1.6 1.3 2.6v1h7v-1c0-1 .5-2 1.3-2.6A8 8 0 0 0 20 9.5zM16.8 31h6.4M17.8 34h4.4"/><path d="M20 2.5v3M8.8 7l2 2M31.2 7l-2 2M4.5 17.5h3M32.5 17.5h3"/>`
    ],
    sensor: [
        `0 0 44 40`,
        `<rect x="2.5" y="9" width="39" height="22" rx="3"/><circle cx="13" cy="20" r="6.5"/><circle cx="31" cy="20" r="6.5"/><circle cx="13" cy="20" r="2.2" class="fill"/><circle cx="31" cy="20" r="2.2" class="fill"/>`
    ],
    motor: [
        `0 0 44 40`,
        `<rect x="4" y="10" width="23" height="20" rx="4"/><path d="M27 14h4.5v12H27M31.5 20H41"/><path d="M10 10V6.5M20 10V6.5"/><path d="M9 20h12"/>`
    ],
    transistor: [
        `0 0 40 40`,
        `<rect x="10" y="3.5" width="20" height="9" rx="1"/><circle cx="20" cy="8" r="2.2"/><rect x="10" y="12.5" width="20" height="13" rx="1"/><path d="M14 25.5V37M20 25.5V37M26 25.5V37"/>`
    ],
    car: [
        `0 0 44 40`,
        `<path d="M3.5 27v-5.5l5-1.2 5.5-7.3h13.5l6.2 7.3 5.8 1.2V27z"/><circle cx="12.5" cy="28" r="4" class="fill"/><circle cx="31.5" cy="28" r="4" class="fill"/><path d="M15.5 20.3h17"/>`
    ],
    logic: [
        `0 0 40 40`,
        `<path d="M20 4.5 31.5 16 20 27.5 8.5 16z"/><path d="M20 27.5V36M8.5 16H3.5M31.5 16h5"/>`
    ],
    lights: [
        `0 0 40 40`,
        `<rect x="12.5" y="3" width="15" height="34" rx="4"/><circle cx="20" cy="11" r="3"/><circle cx="20" cy="20" r="3"/><circle cx="20" cy="29" r="3" class="fill"/>`
    ],
    pwm: [
        `0 0 44 40`,
        `<path d="M2.5 29h5V11h6v18h4V11h10v18h4V11h10"/>`
    ],
    console: [
        `0 0 40 40`,
        `<rect x="4.5" y="7.5" width="31" height="25" rx="3"/><path d="m11 15.5 5 4.5-5 4.5M19.5 25.5h9"/>`
    ],
    ruler: [
        `0 0 44 40`,
        `<rect x="3" y="13" width="38" height="14" rx="2"/><path d="M9 13v5M15 13v7M21 13v5M27 13v7M33 13v5"/>`
    ],
    clock: [
        `0 0 40 40`,
        `<circle cx="20" cy="21" r="14"/><path d="M20 12.5V21l6 4M16 3.5h8"/>`
    ],
    gear: [
        `0 0 32 32`,
        `<path d="M18 4.5h-4l-.6 3a9 9 0 0 0-2.4 1.4l-2.9-1-2 3.4 2.3 2a9 9 0 0 0 0 2.8l-2.3 2 2 3.4 2.9-1a9 9 0 0 0 2.4 1.4l.6 3h4l.6-3a9 9 0 0 0 2.4-1.4l2.9 1 2-3.4-2.3-2a9 9 0 0 0 0-2.8l2.3-2-2-3.4-2.9 1A9 9 0 0 0 18.6 7.5z"/><circle cx="16" cy="15" r="3.8"/>`
    ],
    button: [
        `0 0 40 40`,
        `<rect x="6" y="15" width="28" height="15" rx="2.5"/><path d="M13 15v-3.5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2V15"/><path d="M11 30v5M29 30v5"/><path d="M20 2.5v3.5"/>`
    ],
    knob: [
        `0 0 40 40`,
        `<circle cx="20" cy="22" r="11"/><path d="M20 22l-5.5-7"/><path d="M6.5 32.5a16 16 0 0 1 0-21M33.5 11.5a16 16 0 0 1 0 21"/>`
    ],
    speaker: [
        `0 0 40 40`,
        `<path d="M6 15.5h6.5L21 8v24l-8.5-7.5H6z"/><path d="M26.5 14.5a7.5 7.5 0 0 1 0 11M30.5 10a13.5 13.5 0 0 1 0 20"/>`
    ],
    servo: [
        `0 0 44 40`,
        `<rect x="4.5" y="15" width="26" height="18" rx="2"/><path d="M2 21h35"/><circle cx="23" cy="15" r="4"/><path d="M23 15 37 5.5"/><circle cx="37" cy="5.5" r="1.8" class="fill"/>`
    ],
    rgb: [
        `0 0 40 40`,
        `<circle cx="15" cy="15" r="9"/><circle cx="25" cy="15" r="9"/><circle cx="20" cy="24" r="9"/>`
    ],
    lamp: [
        `0 0 40 40`,
        `<path d="M11 36.5h14M18 36.5V24l-6-9 9-7"/><path d="m19 6.5 9.5-3.5 4 10-11 2.5z"/><path d="M27 16.5 29.5 22M33 14.5l3 4"/>`
    ],
    sun: [
        `0 0 40 40`,
        `<circle cx="20" cy="20" r="7"/><path d="M20 3.5v5M20 31.5v5M3.5 20h5M31.5 20h5M8.3 8.3l3.5 3.5M28.2 28.2l3.5 3.5M8.3 31.7l3.5-3.5M28.2 11.8l3.5-3.5"/>`
    ],
    check: [
        `0 0 24 24`,
        `<path d="m5 12.5 4.5 4.5L19 7.5"/>`
    ],
    copy: [
        `0 0 24 24`,
        `<rect x="8" y="8" width="11.5" height="12.5" rx="1.6"/><path d="M15.5 5.2V4.8c0-.9-.7-1.6-1.6-1.6H6.1c-.9 0-1.6.7-1.6 1.6v9.6c0 .9.7 1.6 1.6 1.6h.4"/>`
    ],
    play: [
        `0 0 24 24`,
        `<path d="M7.5 4.8v14.4L19 12z" class="fill"/>`
    ],
    stop: [
        `0 0 24 24`,
        `<rect x="6.5" y="6.5" width="11" height="11" rx="1.5" class="fill"/>`
    ],
    rotL: [
        `0 0 24 24`,
        `<path d="M4.5 10.5A8 8 0 1 1 6 17"/><path d="M4 5v5.8h5.8"/>`
    ],
    rotR: [
        `0 0 24 24`,
        `<path d="M19.5 10.5A8 8 0 1 0 18 17"/><path d="M20 5v5.8h-5.8"/>`
    ],
    plus: [
        `0 0 24 24`,
        `<path d="M12 5v14M5 12h14"/>`
    ],
    minus: [
        `0 0 24 24`,
        `<path d="M5 12h14"/>`
    ],
    home: [
        `0 0 24 24`,
        `<path d="M4 11.5 12 4.5l8 7"/><path d="M6.5 10v9.5h11V10"/>`
    ],
    expand: [
        `0 0 24 24`,
        `<path d="M3 8V3h5M16 3h5v5M21 16v5h-5M8 21H3v-5"/><circle cx="12" cy="12" r="1.3" class="fill"/>`
    ],
    collapse: [
        `0 0 24 24`,
        `<path d="M8 3v5H3M21 8h-5V3M16 21v-5h5M3 16h5v5"/>`
    ],
    close: [
        `0 0 24 24`,
        `<path d="m6 6 12 12M18 6 6 18"/>`
    ],
    focus: [
        `0 0 24 24`,
        `<circle cx="12" cy="12" r="3.5"/><path d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4"/>`
    ]
};
function v(e, t = ``) {
    let [n, r] = ne[e] ?? ne.chip;
    return `<svg viewBox="${n}" class="${t}" aria-hidden="true">${r}</svg>`;
}
const re = `http://www.w3.org/2000/svg`;
const ie = 7;
function y(e, t = {}) {
    let n = document.createElementNS(re, e);
    for (let [e, r] of Object.entries(t)){
        n.setAttribute(e, r);
    }
    return n;
}
function ae(e, t, n) {
    let r = e.ring ? ie : 0;
    let i = e.at * n;
    switch(e.side){
        case `top`:
            return [
                t.x + i,
                t.y - r
            ];
        case `left`:
            return [
                t.x - +!e.ring,
                t.y + i
            ];
        case `right`:
            return [
                t.x + t.w + +!e.ring,
                t.y + i
            ];
        default:
            return [
                t.x + i,
                t.y + t.h + r
            ];
    }
}
function oe(e, t, n, r) {
    let i = (e.leg ?? 30) * r;
    if (e.approach === `above`) {
        return [
            n[0],
            n[1] - i
        ];
    }
    switch(e.side){
        case `top`:
            return [
                t[0],
                t[1] - i
            ];
        case `left`:
            return [
                t[0] - i,
                t[1]
            ];
        case `right`:
            return [
                t[0] + i,
                t[1]
            ];
        default:
            return [
                t[0],
                t[1] + i
            ];
    }
}
class se {
    constructor({ rig, svg, tags, onFocus }){
        this.rig = rig;
        this.svg = svg;
        this.tags = tags;
        this.onFocus = onFocus;
        this.origin = {
            x: 0,
            y: 0
        };
        this.scale = 1;
        this.sets = [];
        this.current = null;
        this.free = false;
        this.hidden = false;
        this.readout = document.createElement(`div`);
        this.readout.className = `readout`;
        tags.append(this.readout);
    }
    show(lesson, { delay = 0, hold = false } = {}) {
        for (let e of this.sets){
            this.retire(e);
        }
        let r = {
            lesson,
            items: [],
            aligned: false,
            root: y(`g`, {
                class: `leader-set is-hidden`
            })
        };
        this.svg.append(r.root);
        for (let t of lesson.callouts){
            let card = document.createElement(`article`);
            card.className = `callout is-hidden`;
            card.tabIndex = 0;
            card.style.setProperty(`--x`, `${t.x}px`);
            card.style.setProperty(`--y`, `${t.y}px`);
            card.style.setProperty(`--w`, `${t.w}px`);
            let n = [
                `callout-icon`,
                t.tall ? `tall` : ``,
                t.wide ? `wide` : ``
            ].join(` `);
            card.innerHTML = `${v(t.icon, n)}<div><h3>${t.title}</h3><p>${t.body}</p></div>`;
            this.rig.append(card);
            let g_1 = y(`g`, {
                class: `leader`
            });
            let path = y(`path`);
            g_1.append(path);
            let ring = null;
            if (t.ring) {
                ring = y(`circle`, {
                    r: 4.6,
                    class: `dot-end`
                });
                g_1.append(ring);
            }
            let s = (r_1)=>{
                let t = y(`g`, {
                    class: `hotspot`
                });
                t.append(y(`circle`, {
                    r: r_1 + 6,
                    class: `dot-hit`
                }), y(`circle`, {
                    r: r_1,
                    class: `dot-halo`
                }), y(`circle`, {
                    r: r_1 - 1.2,
                    class: `dot-anchor`
                }));
                g_1.append(t);
                return t;
            };
            let via = t.via ? s(7.2) : null;
            let dot = s(7.6);
            if (t.anchor.startsWith(`part:`)) {
                dot.classList.add(`is-passive`);
            }
            r.root.append(g_1);
            let tag = document.createElement(`button`);
            tag.className = `tag is-hidden`;
            tag.innerHTML = `<span>${t.title}</span>`;
            this.tags.append(tag);
            let d = {
                c: t,
                card,
                g: g_1,
                path,
                ring,
                via,
                dot,
                tag,
                size: null
            };
            let f = ()=>this.onFocus?.(t);
            card.addEventListener(`click`, f);
            card.addEventListener(`keydown`, (e)=>{
                if (e.key === `Enter` || e.key === ` `) {
                    e.preventDefault();
                    f();
                }
            });
            dot.addEventListener(`click`, f);
            tag.addEventListener(`click`, f);
            for (let t of [
                card,
                dot,
                tag
            ]){
                t.addEventListener(`pointerenter`, ()=>g_1.classList.add(`is-hot`));
                t.addEventListener(`pointerleave`, ()=>g_1.classList.remove(`is-hot`));
            }
            r.items.push(d);
        }
        this.sets.push(r);
        this.current = r;
        let i = ()=>{
            if (this.current === r) {
                r.root.classList.remove(`is-hidden`);
                r.items.forEach((e, t)=>{
                    e.card.style.transitionDelay = `${t * 60}ms`;
                    e.card.classList.remove(`is-hidden`);
                    e.tag.classList.remove(`is-hidden`);
                });
            }
        };
        this.held = null;
        if (hold) {
            this.held = i;
        } else if (delay) {
            setTimeout(i, delay);
        } else {
            requestAnimationFrame(i);
        }
    }
    release() {
        let held = this.held;
        this.held = null;
        held?.();
    }
    retire(e) {
        e.root.classList.add(`is-hidden`);
        for (let t of e.items){
            t.card.style.transitionDelay = `0ms`;
            t.card.classList.add(`is-leaving`);
            t.tag.classList.add(`is-hidden`);
        }
        setTimeout(()=>{
            e.root.remove();
            for (let t of e.items){
                t.card.remove();
                t.tag.remove();
            }
            this.sets = this.sets.filter((t)=>t !== e);
        }, 420);
    }
    setFree(e) {
        if (e !== this.free) {
            this.free = e;
            this.rig.classList.toggle(`is-free`, e);
            this.svg.classList.toggle(`is-free`, e);
            this.tags.classList.toggle(`is-free`, e);
        }
    }
    setVisible(e) {
        this.hidden = !e;
        for (let t of [
            this.rig,
            this.svg,
            this.tags
        ]){
            t.classList.toggle(`is-off`, !e);
        }
    }
    layoutTags(e, t, n) {
        let r = [];
        let i = e.map(({ a })=>a);
        let a = (e, a)=>e.x >= 0 && e.y >= 0 && e.x + e.w <= t && e.y + e.h <= n && r.every((t)=>e.x >= t.x + t.w + 4 || t.x >= e.x + e.w + 4 || e.y >= t.y + t.h + 3 || t.y >= e.y + e.h + 3) && i.every((t)=>t === a || t[0] < e.x - 9 || t[0] > e.x + e.w + 9 || t[1] < e.y - 9 || t[1] > e.y + e.h + 9);
        e.sort((e, t)=>e.a[1] - t.a[1]);
        for (let { it, a: a_1 } of e){
            if (!it.tagSize?.w) {
                it.tagSize = {
                    w: it.tag.offsetWidth,
                    h: it.tag.offsetHeight
                };
            }
            let { w, h } = it.tagSize;
            let o = [
                [
                    a_1[0] + 13,
                    a_1[1] - 13
                ],
                [
                    a_1[0] - 13 - w,
                    a_1[1] - 13
                ],
                [
                    a_1[0] + 8,
                    a_1[1] - h - 11
                ],
                [
                    a_1[0] + 8,
                    a_1[1] + 11
                ],
                [
                    a_1[0] - 8 - w,
                    a_1[1] - h - 11
                ],
                [
                    a_1[0] - 8 - w,
                    a_1[1] + 11
                ]
            ];
            let s = (t)=>({
                    x: o[t][0],
                    y: o[t][1],
                    w,
                    h
                });
            let c = 0;
            if (!a(s(0), a_1)) {
                c = it.tagSpot && a(s(it.tagSpot), a_1) ? it.tagSpot : Math.max(0, o.findIndex((e, t)=>a(s(t), a_1)));
            }
            it.tagSpot = c;
            r.push(s(c));
            it.tag.style.transform = `translate(${o[c][0]}px, ${o[c][1]}px)`;
        }
    }
    invalidate() {
        for (let e of this.sets){
            e.aligned = false;
            for (let t of e.items){
                t.size = null;
            }
        }
    }
    update(e) {
        let { w, h } = e.size;
        let r = [];
        for (let i of this.sets){
            if (!i.aligned && i === this.current && e.isHome()) {
                for (let t of i.items){
                    if (!t.c.via) {
                        continue;
                    }
                    let n = e.anchor(t.c.via);
                    if (!n) {
                        continue;
                    }
                    let [r] = e.project(n);
                    t.card.style.setProperty(`--x`, `${(r - this.origin.x) / this.scale - t.c.at}px`);
                    t.size = null;
                }
                i.aligned = true;
            }
            for (let it_1 of i.items){
                let o = e.anchor(it_1.c.anchor);
                if (!o) {
                    it_1.g.style.display = `none`;
                    it_1.tag.style.display = `none`;
                    continue;
                }
                it_1.g.style.display = ``;
                let a_1 = e.project(o);
                it_1.size ??= {
                    w: it_1.card.offsetWidth,
                    h: it_1.card.offsetHeight,
                    x: it_1.card.offsetLeft,
                    y: it_1.card.offsetTop
                };
                let c = this.scale;
                let l = {
                    x: this.origin.x + it_1.size.x * c,
                    y: this.origin.y + it_1.size.y * c,
                    w: it_1.size.w * c,
                    h: it_1.size.h * c
                };
                let u = ae(it_1.c, l, c);
                let d;
                if (it_1.c.via) {
                    let t = e.anchor(it_1.c.via);
                    let n = t ? e.project(t) : u;
                    d = `M${u[0]} ${u[1]} L${n[0]} ${n[1]} L${a_1[0]} ${a_1[1]}`;
                    it_1.via?.setAttribute(`transform`, `translate(${n[0]} ${n[1]})`);
                } else {
                    let e = oe(it_1.c, u, a_1, c);
                    d = `M${u[0]} ${u[1]} L${e[0]} ${e[1]} L${a_1[0]} ${a_1[1]}`;
                }
                it_1.path.setAttribute(`d`, d);
                if (it_1.ring) {
                    it_1.ring.setAttribute(`cx`, u[0]);
                    it_1.ring.setAttribute(`cy`, u[1]);
                }
                it_1.dot.setAttribute(`transform`, `translate(${a_1[0]} ${a_1[1]})`);
                let f = a_1[0] > 0 && a_1[1] > 0 && a_1[0] < w && a_1[1] < h;
                it_1.dot.style.display = f ? `` : `none`;
                it_1.tag.style.display = f ? `` : `none`;
                if (f && i === this.current) {
                    r.push({
                        it: it_1,
                        a: a_1
                    });
                } else {
                    it_1.tag.style.transform = `translate(${a_1[0] + 13}px, ${a_1[1] - 13}px)`;
                }
            }
        }
        this.layoutTags(r, w, h);
        let e_readoutState = e.readoutState;
        if (e_readoutState) {
            let [t, n] = e.projectPoint(e_readoutState.position);
            this.readout.textContent = e_readoutState.text;
            this.readout.style.transform = `translate(${t}px, ${n}px) translate(-50%, -50%)`;
            this.readout.classList.add(`is-on`);
        } else {
            this.readout.classList.remove(`is-on`);
        }
    }
}
const b = [
    `overview`,
    `pinout`,
    `example`,
    `specs`
];
function ce(lesson, tab) {
    switch(tab){
        case `pinout`:
            return `
        <h2>Pinout</h2>
        <p class="sub">How ${lesson.id === `board` ? `the Uno’s headers are grouped` : `this circuit is wired`}.</p>
        <table class="pin-table">
          <thead><tr><th>Pin</th><th>Connects to</th><th>What it does</th></tr></thead>
          <tbody>${lesson.pinout.map(([e, t, n, r])=>`<tr><td><span class="wire-dot" style="--c:${r}"></span><code>${e}</code></td><td>${t}</td><td>${n}</td></tr>`).join(``)}</tbody>
        </table>`;
        case `example`:
            return `
        <h2>How the code works</h2>
        <ol class="steps">${lesson.example.map((e)=>`<li>${e}</li>`).join(``)}</ol>`;
        case `specs`:
            return `
        <h2>Specifications</h2>
        <dl class="spec-grid">${lesson.specs.map(([e, t])=>`<div><dt>${e}</dt><dd>${t}</dd></div>`).join(``)}</dl>`;
        default:
            return `
        <h2>${lesson.heading}</h2>
        <p class="lede">${lesson.lede}</p>
        <ul class="features">${lesson.features.map(([e, t])=>`<li><span class="feature-icon">${v(e)}</span><span>${t}</span></li>`).join(``)}</ul>`;
    }
}
class le {
    constructor(e, { onExpand } = {}){
        this.root = e;
        this.onExpand = onExpand;
        this.tabs = [
            ...e.querySelectorAll(`[role="tab"]`)
        ];
        this.content = e.querySelector(`.info-content`);
        this.expandBtn = e.querySelector(`.expand`);
        this.tab = `overview`;
        this.lesson = null;
        this.tabs.forEach((e, t)=>{
            e.dataset.tab = b[t];
            e.addEventListener(`click`, ()=>this.setTab(b[t]));
            e.addEventListener(`keydown`, (e)=>{
                if (e.key !== `ArrowRight` && e.key !== `ArrowLeft`) {
                    return;
                }
                let n = (t + (e.key === `ArrowRight` ? 1 : b.length - 1)) % b.length;
                this.setTab(b[n]);
                this.tabs[n].focus();
            });
        });
        this.expandBtn.addEventListener(`click`, ()=>this.toggleExpanded());
    }
    setLesson(e) {
        this.lesson = e;
        this.paint(true);
    }
    setTab(e) {
        if (e !== this.tab) {
            this.tab = e;
            this.paint(false);
        }
    }
    paint(e) {
        this.tabs.forEach((e)=>{
            let t = e.dataset.tab === this.tab;
            e.classList.toggle(`is-active`, t);
            e.setAttribute(`aria-selected`, String(t));
            e.tabIndex = t ? 0 : -1;
        });
        let content = this.content;
        content.classList.remove(`is-in`);
        content.classList.add(`is-out`);
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            content.innerHTML = ce(this.lesson, this.tab);
            content.scrollTop = 0;
            content.classList.remove(`is-out`);
            content.offsetWidth;
            content.classList.add(`is-in`);
        }, e ? 220 : 120);
    }
    get expanded() {
        return this.root.classList.contains(`is-expanded`);
    }
    toggleExpanded(e) {
        let t = e ?? !this.expanded;
        if (t === this.expanded) {
            return;
        }
        this.root.classList.toggle(`is-expanded`, t);
        this.expandBtn.innerHTML = v(t ? `collapse` : `expand`);
        this.expandBtn.setAttribute(`aria-label`, t ? `Collapse panel` : `Expand panel`);
        let n = document.querySelector(`.code-card`);
        n?.classList.toggle(`is-covered`, t);
        if (n) {
            n.inert = t;
        }
        this.onExpand?.(t);
    }
    setCovered(e) {
        this.root.classList.toggle(`is-covered`, e);
        this.root.inert = e;
    }
}
const ue = new Set([
    `void`,
    `int`,
    `long`,
    `const`,
    `for`,
    `if`,
    `else`,
    `while`,
    `return`,
    `unsigned`,
    `bool`,
    `float`,
    `char`,
    `byte`,
    `sizeof`,
    `Servo`
]);
const de = new Set([
    `HIGH`,
    `LOW`,
    `INPUT`,
    `OUTPUT`,
    `INPUT_PULLUP`,
    `LED_BUILTIN`,
    `A0`,
    `true`,
    `false`
]);
const fe = ``;
const x = /(\/\/.*$)|("(?:[^"\\]|\\.)*")|\u0001(\w+)\u0002|(\b\d+\b)|([A-Za-z_]\w*)(\s*\()?|([^\w"/\u0001]+|\/)/gm;
const S = (e)=>e.replace(/&/g, `&amp;`).replace(/</g, `&lt;`).replace(/>/g, `&gt;`);
function pe(e, t) {
    let n = /^(\s*)(#\w+)(.*)$/.exec(e);
    if (n) {
        return `${n[1]}<span class="kw">${n[2]}</span><span class="str">${S(n[3])}</span>`;
    }
    let r = ``;
    x.lastIndex = 0;
    let i;
    while(i = x.exec(e)){
        let [, e, n, a, o, s, c, l] = i;
        if (e) {
            r += `<span class="cm">${S(e)}</span>`;
        } else if (n) {
            r += `<span class="str">${S(n)}</span>`;
        } else if (a) {
            r += `<button type="button" class="param" data-param="${a}" title="Click to change">${S(String(t[a] ?? ``))}</button>`;
        } else if (o) {
            r += `<span class="num">${o}</span>`;
        } else if (s) {
            let e = `id`;
            if (ue.has(s) || de.has(s)) {
                e = `kw`;
            } else if (c && s !== `setup` && s !== `loop`) {
                e = `fn`;
            }
            r += `<span class="${e}">${s}</span>${c ? S(c) : ``}`;
        } else {
            if (l) {
                r += S(l);
            }
        }
        if (i[0] === ``) {
            x.lastIndex++;
        }
    }
    return r;
}
function me(e, t = {}) {
    return e.replace(/\{\{(\w+)\}\}/g, `${fe}$1\u0002`).split(`
`).map((e, n)=>`<span class="line"><span class="ln">${n + 1}</span>${pe(e, t) || ` `}</span>`).join(``);
}
const C = 92;
class he {
    constructor(e, { onRun, onStop, onParam, onExpand }){
        this.root = e;
        this.code = e.querySelector(`code`);
        this.pre = e.querySelector(`pre`);
        this.copyBtn = e.querySelector(`.btn-copy`);
        this.expandBtn = e.querySelector(`.btn-expand`);
        this.runBtn = e.querySelector(`.btn-run`);
        this.consoleEl = e.querySelector(`.console`);
        this.lines = e.querySelector(`.console-lines`);
        this.status = e.querySelector(`.console-status`);
        this.state = `idle`;
        this.onRun = onRun;
        this.onStop = onStop;
        this.onExpand = onExpand;
        this.copyBtn.addEventListener(`click`, ()=>this.copy());
        this.expandBtn.addEventListener(`click`, ()=>this.toggleExpanded());
        this.runBtn.addEventListener(`click`, ()=>this.toggle());
        e.querySelector(`.console-close`).addEventListener(`click`, ()=>this.onStop());
        this.wrap = e.querySelector(`.code-wrap`);
        this.grip = e.querySelector(`.console-grip`);
        this.resizable();
        this.code.addEventListener(`click`, (e)=>{
            let t = e.target.closest(`.param`);
            if (t) {
                onParam?.(t.dataset.param);
            }
        });
    }
    setLesson(e, t) {
        this.lesson = e;
        this.values = t;
        this.marked = [];
        this.pre.classList.add(`is-out`);
        clearTimeout(this.swapTimer);
        this.swapTimer = setTimeout(()=>{
            this.paint();
            this.pre.scrollTop = 0;
            this.pre.classList.remove(`is-out`);
        }, 180);
        this.setState(`idle`);
    }
    paint() {
        let e = l(this.lesson, this.values);
        this.code.innerHTML = me(e, this.values);
        if (this.marked?.length) {
            for (let e of this.code.querySelectorAll(`.param`)){
                e.classList.toggle(`is-marked`, this.marked.includes(e.dataset.param));
            }
        }
        this.markTrace(false);
        return e;
    }
    trace(e) {
        this.traced = e;
        this.markTrace(true);
    }
    markTrace(e) {
        let t = [
            ...this.code.querySelectorAll(`.line`)
        ];
        for (let e of t){
            e.classList.remove(`is-running`);
        }
        if (!this.traced) {
            return;
        }
        let { text, nth } = this.traced;
        let i = t.filter((e)=>e.textContent.replace(/^\d+/, ``).includes(text));
        let a = i[Math.min(nth, i.length - 1)];
        if (a) {
            a.classList.add(`is-running`);
            if (e) {
                this.reveal(a, this.consoleCover());
            }
        }
    }
    resizable() {
        let e = `console-height`;
        let t = null;
        try {
            t = Number(localStorage.getItem(e)) || null;
        } catch  {}
        this.consoleH = t ?? C;
        this.setConsoleHeight(this.consoleH, false);
        let n = ()=>{
            try {
                localStorage.setItem(e, String(Math.round(this.consoleH)));
            } catch  {}
        };
        let r = this.consoleEl.querySelector(`.console-head`);
        let i = null;
        let a = (e)=>{
            if (!(e.button !== 0 || e.target.closest(`button`) || document.documentElement.classList.contains(`compact`))) {
                e.preventDefault();
                i = {
                    y: e.clientY,
                    h: this.consoleEl.offsetHeight,
                    target: e.currentTarget,
                    id: e.pointerId
                };
                i.target.setPointerCapture(e.pointerId);
                this.root.classList.add(`is-sizing`);
            }
        };
        let o = (e)=>{
            if (i && e.pointerId === i.id) {
                this.setConsoleHeight(i.h + (i.y - e.clientY));
            }
        };
        let s = (e)=>{
            if (i && e.pointerId === i.id) {
                i = null;
                this.root.classList.remove(`is-sizing`);
                n();
            }
        };
        for (let e of [
            this.grip,
            r
        ]){
            e.addEventListener(`pointerdown`, a);
            e.addEventListener(`pointermove`, o);
            e.addEventListener(`pointerup`, s);
            e.addEventListener(`pointercancel`, s);
        }
        this.grip.addEventListener(`dblclick`, ()=>{
            this.setConsoleHeight(C);
            n();
        });
        this.grip.addEventListener(`keydown`, (e)=>{
            let t = {
                ArrowUp: 16,
                ArrowDown: -16,
                PageUp: 64,
                PageDown: -64
            }[e.key];
            if (t) {
                e.preventDefault();
                e.stopPropagation();
                this.setConsoleHeight(this.consoleEl.offsetHeight + t);
                n();
            }
        });
        new ResizeObserver(()=>this.setConsoleHeight(this.consoleH, false)).observe(this.wrap);
    }
    setConsoleHeight(e, t = true) {
        let n = this.wrap.clientHeight - 48;
        if (t) {
            this.consoleH = Math.max(C, Math.min(e, n));
        }
        let r = document.documentElement.classList.contains(`compact`) ? C : Math.round(Math.max(Math.min(C, n), Math.min(this.consoleH, n)));
        this.root.style.setProperty(`--console-h`, `${r}px`);
        this.grip.setAttribute(`aria-valuemin`, String(C));
        this.grip.setAttribute(`aria-valuemax`, String(Math.max(C, Math.round(n))));
        this.grip.setAttribute(`aria-valuenow`, String(r));
        if (t && this.traced) {
            this.markTrace(true);
        }
    }
    consoleCover() {
        if (this.consoleEl.classList.contains(`is-open`)) {
            return Math.max(0, this.pre.offsetTop + this.pre.offsetHeight - this.consoleEl.offsetTop);
        }
        return 0;
    }
    update(e, t) {
        if (!this.lesson || this.pre.classList.contains(`is-out`)) {
            return;
        }
        this.values = e;
        let n = [
            ...this.code.querySelectorAll(`.line`)
        ].map((e)=>e.textContent.replace(/^\d+/, ``));
        this.paint();
        let r = [
            ...this.code.querySelectorAll(`.line`)
        ];
        let i = new Set(n);
        let a = null;
        for (let e of r){
            if (!i.has(e.textContent.replace(/^\d+/, ``))) {
                e.classList.add(`is-new`);
                a ??= e;
            }
        }
        let o = [
            ...this.code.querySelectorAll(`.param`)
        ].filter((e)=>[
                t
            ].flat().includes(e.dataset.param));
        for (let e of o){
            e.classList.add(`is-flash`);
        }
        this.reveal(o[0] ?? a);
    }
    mark(e) {
        for (let t of this.code.querySelectorAll(`.param`)){
            t.classList.toggle(`is-marked`, e.includes(t.dataset.param));
        }
        this.marked = e;
        let t = e.find((e)=>this.code.querySelector(`.param[data-param="${e}"]`));
        if (t) {
            this.reveal(this.code.querySelector(`.param[data-param="${t}"]`));
        }
    }
    reveal(e, t = 0) {
        if (!e) {
            return;
        }
        let n = e.closest(`.line`) ?? e;
        let n_offsetTop = n.offsetTop;
        let { scrollTop } = this.pre;
        let a = this.pre.clientHeight - t;
        if (n_offsetTop < scrollTop + 8) {
            this.pre.scrollTo({
                top: Math.max(0, n_offsetTop - 30),
                behavior: `smooth`
            });
        } else if (n_offsetTop + n.offsetHeight > scrollTop + a - 8) {
            this.pre.scrollTo({
                top: n_offsetTop + n.offsetHeight - a + 30,
                behavior: `smooth`
            });
        }
    }
    toggle() {
        if (this.state === `idle`) {
            this.onRun();
        } else {
            this.onStop();
        }
    }
    get expanded() {
        return this.root.classList.contains(`is-expanded`);
    }
    toggleExpanded(e) {
        let t = e ?? !this.expanded;
        if (t !== this.expanded) {
            this.root.classList.toggle(`is-expanded`, t);
            this.expandBtn.innerHTML = v(t ? `collapse` : `expand`);
            this.expandBtn.setAttribute(`aria-label`, t ? `Collapse code` : `Expand code`);
            this.expandBtn.title = t ? `Collapse code` : `Expand code`;
            this.expandBtn.setAttribute(`aria-expanded`, String(t));
            this.onExpand?.(t);
        }
    }
    setState(e) {
        this.state = e;
        this.root.dataset.state = e;
        let t = e !== `idle`;
        this.runBtn.innerHTML = v(t ? `stop` : `play`);
        this.runBtn.setAttribute(`aria-label`, t ? `Stop sketch` : `Run sketch`);
        this.runBtn.classList.toggle(`is-busy`, e === `uploading`);
        this.consoleEl.classList.toggle(`is-open`, t);
        this.grip.tabIndex = t ? 0 : -1;
        this.status.textContent = e === `uploading` ? `Uploading` : e === `running` ? `Running` : `Stopped`;
        if (e === `uploading`) {
            this.lines.innerHTML = ``;
        }
    }
    log(e) {
        let t = document.createElement(`div`);
        t.textContent = e;
        this.lines.append(t);
        while(this.lines.children.length > 40){
            this.lines.firstChild.remove();
        }
        this.lines.scrollTop = this.lines.scrollHeight;
    }
    async copy() {
        let e = this.lesson ? c(this.lesson, this.values ?? {}) : ``;
        try {
            await navigator.clipboard.writeText(e);
        } catch  {
            let t = document.createElement(`textarea`);
            t.value = e;
            document.body.append(t);
            t.select();
            document.execCommand(`copy`);
            t.remove();
        }
        this.copyBtn.innerHTML = v(`check`);
        this.copyBtn.classList.add(`is-done`);
        clearTimeout(this.copyTimer);
        this.copyTimer = setTimeout(()=>{
            this.copyBtn.innerHTML = v(`copy`);
            this.copyBtn.classList.remove(`is-done`);
        }, 1600);
    }
}
const ge = {
    board: 124,
    led: 72,
    button: 84,
    pot: 78,
    rgb: 72,
    lamp: 84,
    sensor: 96,
    buzzer: 74,
    motor: 104,
    servo: 96,
    gears: 92
};
const _e = {
    board: 316,
    blink: 249,
    button: 268,
    knob: 254,
    rgb: 248,
    light: 252,
    sensor: 282,
    sound: 262,
    motor: 300,
    servo: 280,
    project: 286
};
const ve = (e)=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${e}" /></svg>`;
class ye {
    constructor(e, t, { onSelect }){
        this.list = e;
        this.section = e.closest(`.lessons`);
        this.lessons = t;
        this.done = new Set(this.load());
        e.innerHTML = t.map((e, t)=>`
        <li class="lesson" role="button" tabindex="0" data-id="${e.id}" style="--w: ${_e[e.id] ?? 260}; --tw: ${ge[e.thumb] ?? 96}" aria-label="Lesson ${t + 1}: ${e.title}">
          <img class="lesson-thumb" data-thumb="${e.thumb}" alt="" />
          <span class="lesson-title">${e.cardTitle}</span>
          <span class="lesson-done" aria-hidden="true">${v(`check`)}</span>
          <svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5.5 6.5 6.5L9 18.5" /></svg>
        </li>`).join(``);
        this.items = [
            ...e.children
        ];
        for (let e of this.items){
            let t = ()=>{
                if (!this.dragged) {
                    onSelect(e.dataset.id);
                }
            };
            e.addEventListener(`click`, t);
            e.addEventListener(`keydown`, (e)=>{
                if (e.key === `Enter` || e.key === ` `) {
                    e.preventDefault();
                    t();
                }
            });
        }
        this.paintDone();
        this.setupScroll();
    }
    setupScroll() {
        let list = this.list;
        let section = this.section;
        let n = document.createElement(`button`);
        n.className = `lesson-step prev`;
        n.setAttribute(`aria-label`, `Earlier lessons`);
        n.innerHTML = ve(`m15 5.5-6.5 6.5 6.5 6.5`);
        let r = document.createElement(`button`);
        r.className = `lesson-step next`;
        r.setAttribute(`aria-label`, `More lessons`);
        r.innerHTML = ve(`m9 5.5 6.5 6.5L9 18.5`);
        section.append(n, r);
        let i = (t)=>list.scrollBy({
                left: t * list.clientWidth * 0.7,
                behavior: `smooth`
            });
        n.addEventListener(`click`, ()=>i(-1));
        r.addEventListener(`click`, ()=>i(1));
        let a = ()=>{
            let n = list.scrollWidth - list.clientWidth;
            section.classList.toggle(`can-left`, list.scrollLeft > 2);
            section.classList.toggle(`can-right`, list.scrollLeft < n - 2);
        };
        list.addEventListener(`scroll`, a, {
            passive: true
        });
        window.addEventListener(`resize`, a);
        requestAnimationFrame(a);
        this.edges = a;
        list.addEventListener(`wheel`, (t)=>{
            if (list.scrollWidth <= list.clientWidth) {
                return;
            }
            let n = Math.abs(t.deltaX) > Math.abs(t.deltaY) ? t.deltaX : t.deltaY;
            if (n) {
                t.preventDefault();
                list.scrollLeft += t.deltaMode === 1 ? n * 16 : n;
            }
        }, {
            passive: false
        });
        let o = null;
        list.addEventListener(`pointerdown`, (t)=>{
            if (t.pointerType === `mouse` && t.button === 0) {
                o = {
                    x: t.clientX,
                    left: list.scrollLeft,
                    moved: false
                };
                this.dragged = false;
            }
        });
        window.addEventListener(`pointermove`, (t)=>{
            if (!o) {
                return;
            }
            let n = list.getBoundingClientRect().width / list.offsetWidth || 1;
            let r = (t.clientX - o.x) / n;
            if (!o.moved && Math.abs(r) > 5) {
                o.moved = true;
                list.classList.add(`is-dragging`);
            }
            if (o.moved) {
                list.scrollLeft = o.left - r;
            }
        });
        window.addEventListener(`pointerup`, ()=>{
            if (o) {
                this.dragged = o.moved;
                o = null;
                list.classList.remove(`is-dragging`);
                setTimeout(()=>{
                    this.dragged = false;
                }, 0);
            }
        });
    }
    reveal(e, t = true) {
        let list = this.list;
        let r = e.offsetLeft - list.offsetLeft;
        let i = r + e.offsetWidth;
        let a = null;
        if (r - 40 < list.scrollLeft) {
            a = r - 40;
        } else if (i + 40 > list.scrollLeft + list.clientWidth) {
            a = i + 40 - list.clientWidth;
        }
        if (a !== null) {
            list.scrollTo({
                left: Math.max(0, a),
                behavior: t ? `smooth` : `auto`
            });
        }
    }
    load() {
        try {
            return JSON.parse(localStorage.getItem(`learn-arduino:done`) ?? `[]`);
        } catch  {
            return [];
        }
    }
    setActive(e) {
        for (let t of this.items){
            let n = t.dataset.id === e;
            t.classList.toggle(`is-active`, n);
            t.setAttribute(`aria-current`, n ? `step` : `false`);
            if (n) {
                requestAnimationFrame(()=>this.reveal(t, this.revealed));
            }
        }
        this.revealed = true;
    }
    complete(e) {
        if (this.done.has(e)) {
            return false;
        }
        this.done.add(e);
        try {
            localStorage.setItem(`learn-arduino:done`, JSON.stringify([
                ...this.done
            ]));
        } catch  {}
        this.paintDone(e);
        return true;
    }
    paintDone(e) {
        for (let t of this.items){
            t.classList.toggle(`is-done`, this.done.has(t.dataset.id));
            if (t.dataset.id === e) {
                t.classList.remove(`just-done`);
                t.offsetWidth;
                t.classList.add(`just-done`);
            }
        }
    }
}
class be {
    constructor(e, t, n){
        this.root = e;
        this.flyout = t;
        this.api = n;
        this.open = null;
        this.toggleBtn = e.querySelector(`.side-toggle`);
        this.toggleBtn.addEventListener(`click`, ()=>this.setExpanded(!e.classList.contains(`is-open`)));
        for (let t of e.querySelectorAll(`[data-nav]`)){
            t.addEventListener(`click`, (e)=>{
                e.preventDefault();
                this.act(t.dataset.nav, t);
            });
        }
        document.addEventListener(`pointerdown`, (e)=>{
            if (this.open) {
                if (!(e.target.closest(`.flyout`) || e.target.closest(`[data-nav]`))) {
                    this.close();
                }
            }
        });
    }
    setExpanded(e) {
        this.root.classList.toggle(`is-open`, e);
        this.toggleBtn.setAttribute(`aria-expanded`, String(e));
        this.toggleBtn.setAttribute(`aria-label`, e ? `Collapse sidebar` : `Expand sidebar`);
        this.flyout.classList.toggle(`beside-open`, e);
    }
    act(e, t) {
        if (e === `home`) {
            this.close();
            this.api.home();
        } else if (e === `run`) {
            this.close();
            this.api.toggleRun();
        } else if (this.open === e) {
            this.close();
        } else {
            this.show(e, t);
        }
    }
    setActive(e, t) {
        this.root.querySelector(`[data-nav="${e}"]`)?.parentElement.classList.toggle(`is-on`, t);
    }
    close() {
        if (this.open) {
            this.setActive(this.open, false);
            this.open = null;
            this.flyout.classList.remove(`is-open`);
        }
    }
    refresh() {
        if (this.open) {
            this.show(this.open, null, true);
        }
    }
    show(e, t, n = false) {
        if (this.open && this.open !== e) {
            this.setActive(this.open, false);
        }
        this.open = e;
        this.setActive(e, true);
        let flyout = this.flyout;
        if (t) {
            flyout.style.setProperty(`--top`, `${Math.max(40, t.parentElement.offsetTop - 6)}px`);
        }
        flyout.dataset.kind = e;
        flyout.innerHTML = this[`render_${e}`]();
        this.bind(e);
        if (!n) {
            flyout.classList.remove(`is-open`);
            flyout.offsetWidth;
        }
        flyout.classList.add(`is-open`);
    }
    render_lessons() {
        let { lessons, current, done } = this.api.state();
        return `
      <header><h2>Lessons</h2><span>${done.size}/${lessons.length} done</span></header>
      <ol class="fly-list">${lessons.map((e, r)=>`
        <li><button data-lesson="${e.id}" class="${e.id === current ? `is-current` : ``}">
          <span class="fly-num">${done.has(e.id) ? v(`check`) : r + 1}</span>
          <span class="fly-text"><b>${e.title}</b><small>${e.heading}</small></span>
        </button></li>`).join(``)}</ol>`;
    }
    render_parts() {
        let e = this.api.parts();
        return `
      <header><h2>Components</h2><span>${e.length} in view</span></header>
      <ul class="fly-list">${e.map((e, t)=>`
        <li><button data-part="${t}">
          <span class="fly-num">${v(`focus`)}</span>
          <span class="fly-text"><b>${e.name}</b><small>${e.desc}</small></span>
        </button></li>`).join(``)}</ul>`;
    }
    render_settings() {
        let e = this.api.settings();
        let t = (t, n, r)=>`
      <li><label class="switch">
        <span class="fly-text"><b>${n}</b><small>${r}</small></span>
        <input type="checkbox" data-setting="${t}" ${e[t] ? `checked` : ``} />
        <span class="switch-track"><span></span></span>
      </label></li>`;
        return `
      <header><h2>Settings</h2></header>
      <ul class="fly-list">
        ${t(`labels`, `Callout labels`, `Cards and pointers around the 3D view`)}
        ${t(`grid`, `Floor grid`, `The faint grid under the board`)}
        ${t(`autoRotate`, `Turntable`, `Turn a quarter every few seconds when idle`)}
        ${t(`sound`, `Sound`, `Let the buzzer play out loud`)}
        ${t(`reducedMotion`, `Reduce motion`, `Near-instant transitions`)}
      </ul>
      <button class="fly-reset" data-reset>Reset progress</button>`;
    }
    bind(e) {
        let flyout = this.flyout;
        if (e === `lessons`) {
            flyout.querySelectorAll(`[data-lesson]`).forEach((e)=>e.addEventListener(`click`, ()=>{
                    this.close();
                    this.api.selectLesson(e.dataset.lesson);
                }));
        }
        if (e === `parts`) {
            let e = this.api.parts();
            flyout.querySelectorAll(`[data-part]`).forEach((t)=>t.addEventListener(`click`, ()=>this.api.focusPart(e[Number(t.dataset.part)])));
        }
        if (e === `settings`) {
            flyout.querySelectorAll(`[data-setting]`).forEach((e)=>e.addEventListener(`change`, ()=>this.api.setSetting(e.dataset.setting, e.checked)));
            flyout.querySelector(`[data-reset]`).addEventListener(`click`, ()=>{
                this.api.resetProgress();
                this.refresh();
            });
        }
    }
}
class xe {
    constructor(e, { onTurn, onZoom, onReset }){
        this.root = e;
        this.needle = e.querySelector(`.compass-needle`);
        this.resetBtn = e.querySelector(`[data-view="reset"]`);
        e.querySelector(`[data-view="left"]`).addEventListener(`click`, ()=>onTurn(-1));
        e.querySelector(`[data-view="right"]`).addEventListener(`click`, ()=>onTurn(1));
        e.querySelector(`[data-view="out"]`).addEventListener(`click`, ()=>onZoom(1 / 1.35));
        e.querySelector(`[data-view="in"]`).addEventListener(`click`, ()=>onZoom(1.35));
        this.resetBtn.addEventListener(`click`, ()=>onReset());
        this.hint = e.querySelector(`.view-hint`);
    }
    startHint() {
        if (!(this.hintTimer || this.hint?.classList.contains(`is-gone`))) {
            this.hintTimer = setTimeout(()=>this.dismissHint(), 9000);
        }
    }
    dismissHint() {
        clearTimeout(this.hintTimer);
        this.hint?.classList.add(`is-gone`);
    }
    update(e, t) {
        this.needle.style.transform = `rotate(${-e}deg)`;
        this.root.classList.toggle(`is-away`, !t);
    }
}
const Se = {
    board: [
        `#4a5d99`,
        `#26324d`
    ],
    breadboard: [
        `#efe7d6`,
        `#b9a993`
    ],
    car: [
        `#e3604b`,
        `#8c3426`
    ],
    sensor: [
        `#3a56a0`,
        `#22325e`
    ],
    motor: [
        `#cfc9bf`,
        `#7c766d`
    ],
    lights: [
        `#2c3242`,
        `#141a2c`
    ]
};
const Ce = [
    `#8e8a84`,
    `#4f535b`
];
const w = 176;
const T = 118;
class we {
    constructor(e, { onMove }){
        this.root = e;
        this.onMove = onMove;
        this.canvas = e.querySelector(`canvas`);
        this.ctx = this.canvas.getContext(`2d`);
        this.frame = null;
        this.visible = false;
        this.ratio = 0;
        let n = (e)=>{
            if (!this.frame) {
                return null;
            }
            let t = this.canvas.getBoundingClientRect();
            let n = (e.clientX - t.left) / t.width * w;
            let r = (e.clientY - t.top) / t.height * T;
            let { c: c_1, right, away, s, ox, oy } = this.frame;
            let u = (n - ox) / s;
            let d = (r - oy) / s;
            return {
                x: c_1.x + right.x * u - away.x * d,
                z: c_1.z + right.z * u - away.z * d
            };
        };
        let r = false;
        e.addEventListener(`pointerdown`, (t)=>{
            t.preventDefault();
            r = true;
            e.setPointerCapture(t.pointerId);
            let i = n(t);
            if (i) {
                this.onMove(i, false);
            }
        });
        e.addEventListener(`pointermove`, (e)=>{
            if (!r) {
                return;
            }
            let t = n(e);
            if (t) {
                this.onMove(t, true);
            }
        });
        let i = ()=>{
            r = false;
        };
        e.addEventListener(`pointerup`, i);
        e.addEventListener(`pointercancel`, i);
    }
    setVisible(e) {
        if (e !== this.visible) {
            this.visible = e;
            this.root.classList.toggle(`is-on`, e);
        }
    }
    resize(e) {
        let t = Math.min(3, Math.max(1, e));
        if (t !== this.ratio) {
            this.ratio = t;
            this.canvas.width = Math.round(w * t);
            this.canvas.height = Math.round(T * t);
        }
    }
    draw(e) {
        if (!this.visible) {
            return;
        }
        let ctx = this.ctx;
        let e_controls = e.controls;
        let { right, away } = e_controls.axes();
        let a = e.footprints();
        let o = `${e.lessonId}|${e_controls.view.azimuth.toFixed(3)}|${a.length}`;
        if (!this.frame || this.fitKey !== o || e.tweens.active) {
            this.fitKey = o;
            let e = Infinity;
            let t = -Infinity;
            let n = Infinity;
            let s = -Infinity;
            let c = 0;
            let l = 0;
            for (let e of a){
                c += (e.x0 + e.x1) / 2;
                l += (e.z0 + e.z1) / 2;
            }
            let u = {
                x: c / a.length,
                z: l / a.length
            };
            let d = (e, t)=>[
                    (e - u.x) * right.x + (t - u.z) * right.z,
                    -((e - u.x) * away.x + (t - u.z) * away.z)
                ];
            for (let r of a){
                for (let [i, a] of [
                    [
                        r.x0,
                        r.z0
                    ],
                    [
                        r.x1,
                        r.z0
                    ],
                    [
                        r.x1,
                        r.z1
                    ],
                    [
                        r.x0,
                        r.z1
                    ]
                ]){
                    let [r, o] = d(i, a);
                    e = Math.min(e, r);
                    t = Math.max(t, r);
                    n = Math.min(n, o);
                    s = Math.max(s, o);
                }
            }
            let s_2 = Math.min(152 / (t - e + 44), 94 / (s - n + 44));
            this.frame = {
                c: u,
                right,
                away,
                s: s_2,
                ox: w / 2 - (e + t) / 2 * s_2,
                oy: T / 2 - (n + s) / 2 * s_2
            };
        }
        let { c: c_1, s: s_1, ox, oy } = this.frame;
        let d = (e, t)=>[
                (e - c_1.x) * right.x + (t - c_1.z) * right.z,
                -((e - c_1.x) * away.x + (t - c_1.z) * away.z)
            ];
        let f = (e, t)=>{
            let [n, r] = d(e, t);
            return [
                ox + n * s_1,
                oy + r * s_1
            ];
        };
        ctx.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
        ctx.clearRect(0, 0, w, T);
        ctx.strokeStyle = `rgba(190, 168, 138, 0.35)`;
        ctx.lineWidth = 0.75;
        let p = (e, n)=>{
            ctx.beginPath();
            ctx.moveTo(...e);
            ctx.lineTo(...n);
            ctx.stroke();
        };
        for(let e = Math.floor((c_1.x - 260) / 20) * 20; e <= c_1.x + 260; e += 20){
            p(f(e, c_1.z - 260), f(e, c_1.z + 260));
        }
        for(let e = Math.floor((c_1.z - 260) / 20) * 20; e <= c_1.z + 260; e += 20){
            p(f(c_1.x - 260, e), f(c_1.x + 260, e));
        }
        for (let e of a){
            let [n, r] = Se[e.kind] ?? Ce;
            let i = [
                [
                    e.x0,
                    e.z0
                ],
                [
                    e.x1,
                    e.z0
                ],
                [
                    e.x1,
                    e.z1
                ],
                [
                    e.x0,
                    e.z1
                ]
            ].map(([e, t])=>f(e, t));
            ctx.beginPath();
            i.forEach((e, n)=>{
                if (n) {
                    return ctx.lineTo(...e);
                }
                return ctx.moveTo(...e);
            });
            ctx.closePath();
            ctx.fillStyle = n;
            ctx.fill();
            ctx.strokeStyle = r;
            ctx.lineWidth = 1.2;
            ctx.stroke();
        }
        let { w: w_1, h } = e.size;
        let ee = [
            [
                0,
                0
            ],
            [
                w_1,
                0
            ],
            [
                w_1,
                h
            ],
            [
                0,
                h
            ]
        ].map(([e, t])=>{
            let r = e_controls.groundAt(e, t);
            return f(r.x, r.z);
        });
        ctx.beginPath();
        ee.forEach((e, n)=>{
            if (n) {
                return ctx.lineTo(...e);
            }
            return ctx.moveTo(...e);
        });
        ctx.closePath();
        ctx.fillStyle = `rgba(26, 163, 161, 0.12)`;
        ctx.fill();
        ctx.strokeStyle = `#1aa3a1`;
        ctx.lineWidth = 1.6;
        ctx.stroke();
        let target = e_controls.view.target;
        let [_, te] = f(target.x, target.z);
        ctx.fillStyle = `#1aa3a1`;
        ctx.beginPath();
        ctx.arc(_, te, 2.4, 0, Math.PI * 2);
        ctx.fill();
        let [ne, v] = f(c_1.x, c_1.z - 1);
        let [re, ie] = f(c_1.x, c_1.z);
        let y = Math.atan2(v - ie, ne - re);
        ctx.save();
        ctx.translate(161, 15);
        ctx.rotate(y + Math.PI / 2);
        ctx.fillStyle = `#e0523f`;
        ctx.beginPath();
        ctx.moveTo(0, -7);
        ctx.lineTo(4, 3);
        ctx.lineTo(-4, 3);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
}
const E = `http://www.w3.org/2000/svg`;
const Te = 16;
const Ee = {
    slide: `or drag it in the scene`,
    knob: `or drag around the knob`,
    press: `Hold it down in the scene`
};
function De(e, t) {
    if (e.unit) {
        if (e.unit === `%` || e.unit === `°`) {
            return `${t}${e.unit}`;
        }
        return `${t} ${e.unit}`;
    }
    return String(t);
}
class Oe {
    constructor(e, { svg, onParam, onFocus, onClose, onRun }){
        this.root = e;
        this.onParam = onParam;
        this.onRun = onRun;
        this.onFocus = onFocus;
        this.onClose = onClose;
        this.side = 1;
        this.top = 112;
        this.dock = `corner`;
        this.controls = new Map;
        this.leader = document.createElementNS(E, `g`);
        this.leader.setAttribute(`class`, `insp-leader`);
        this.path = document.createElementNS(E, `path`);
        this.end = document.createElementNS(E, `circle`);
        this.end.setAttribute(`r`, `4.6`);
        this.end.setAttribute(`class`, `dot-end`);
        this.leader.append(this.path, this.end);
        svg.append(this.leader);
        e.addEventListener(`keydown`, (e)=>{
            if (e.key === `Escape`) {
                e.stopPropagation();
                this.onClose?.();
            }
        });
    }
    get isOpen() {
        return this.root.classList.contains(`is-on`);
    }
    open(e, t, n) {
        let r = this.isOpen && this.sel && (this.sel.id ?? this.sel.info) === (e.id ?? e.info);
        this.sel = e;
        this.params = t;
        let root = this.root;
        let a = root.contains(document.activeElement) ? document.activeElement : null;
        let o = a?.closest(`.insp-row`)?.dataset.key;
        let s = a ? [
            ...a.parentElement?.children ?? []
        ].indexOf(a) : -1;
        let c = e.info ?? {};
        let l = Ee[e.interact];
        root.innerHTML = `
      <header class="insp-head">
        <h3>${c.name ?? `Part`}</h3>
        <button class="insp-close" type="button" aria-label="Close">${v(`close`)}</button>
      </header>
      ${c.desc ? `<p class="insp-desc">${c.desc}</p>` : ``}
      <div class="insp-rows"></div>
      <footer class="insp-foot">
        <button class="insp-focus" type="button">${v(`focus`)}<span>Zoom to it</span></button>
        ${l ? `<span class="insp-hint">${l}</span>` : ``}
        ${e.live ? `<button class="insp-run" type="button">${v(`play`)}<span>Run to see it</span></button>` : ``}
      </footer>`;
        let u = root.querySelector(`.insp-rows`);
        this.controls.clear();
        for (let e of t){
            u.append(this.row(e, n[e.key]));
        }
        u.hidden = !t.length;
        root.querySelector(`.insp-close`).addEventListener(`click`, ()=>this.onClose?.());
        root.querySelector(`.insp-focus`).addEventListener(`click`, ()=>this.onFocus?.());
        root.querySelector(`.insp-run`)?.addEventListener(`click`, ()=>this.onRun?.());
        this.size = null;
        this.placed = false;
        if (!r) {
            root.classList.remove(`is-on`);
            root.offsetWidth;
        }
        root.classList.add(`is-on`);
        this.leader.classList.add(`is-on`);
        if (o) {
            let e = root.querySelector(`.insp-row[data-key="${o}"]`);
            (e?.querySelector(`[role="radiogroup"]`)?.children[s] ?? e?.querySelector(`input, button`))?.focus({
                preventScroll: true
            });
        }
    }
    setRunning(e) {
        this.root.classList.toggle(`is-running`, e);
        this.size = null;
    }
    close() {
        this.sel = null;
        this.root.classList.remove(`is-on`);
        this.leader.classList.remove(`is-on`);
    }
    row(e, t) {
        let n = document.createElement(`div`);
        n.className = `insp-row is-${e.type}`;
        n.dataset.key = e.key;
        let r = `insp-${e.key}`;
        if (e.type === `range`) {
            n.innerHTML = `
        <label for="${r}"><span>${e.label}</span><output></output></label>
        <input id="${r}" type="range" min="${e.min}" max="${e.max}" step="${e.step ?? 1}" />
        ${e.hint ? `<p class="insp-note">${e.hint}</p>` : ``}`;
            let i = n.querySelector(`input`);
            let a = n.querySelector(`output`);
            if (e.tint) {
                i.style.setProperty(`--accent`, e.tint);
            }
            i.addEventListener(`input`, ()=>this.onParam?.(e.key, Number(i.value)));
            let o = (t)=>{
                if (document.activeElement !== i || Number(i.value) !== t) {
                    i.value = t;
                }
                let n = e.step ?? 1;
                a.textContent = De(e, +(Math.round(t / n) * n).toFixed(2));
                i.style.setProperty(`--fill`, `${(t - e.min) / (e.max - e.min) * 100}%`);
            };
            this.controls.set(e.key, o);
            o(t);
            return n;
        }
        if (e.type === `toggle`) {
            n.innerHTML = `
        <label class="insp-switch"><input id="${r}" type="checkbox" role="switch" /><span class="track"><span class="knob"></span></span><span>${e.label}</span></label>`;
            let i = n.querySelector(`input`);
            i.addEventListener(`change`, ()=>this.onParam?.(e.key, i.checked));
            let a = (e)=>{
                i.checked = !!e;
            };
            this.controls.set(e.key, a);
            a(t);
            return n;
        }
        let i = e.type === `swatch`;
        n.innerHTML = `
      <div class="insp-label"><span>${e.label}</span>${i ? `<output></output>` : ``}</div>
      <div class="${i ? `swatches` : `seg`}" role="radiogroup" aria-label="${e.label}"></div>
      <p class="insp-note"></p>`;
        let a = n.querySelector(`[role="radiogroup"]`);
        let o = n.querySelector(`.insp-note`);
        let s = n.querySelector(`output`);
        let c = e.options.map((t)=>{
            let n = document.createElement(`button`);
            n.type = `button`;
            n.setAttribute(`role`, `radio`);
            if (i) {
                n.className = `swatch`;
                n.style.setProperty(`--c`, t.color);
                n.setAttribute(`aria-label`, t.label);
                n.title = t.label;
            } else {
                n.textContent = t.label;
            }
            n.addEventListener(`click`, ()=>this.onParam?.(e.key, t.value));
            a.append(n);
            return n;
        });
        a.addEventListener(`keydown`, (t)=>{
            let n = {
                ArrowLeft: -1,
                ArrowUp: -1,
                ArrowRight: 1,
                ArrowDown: 1
            }[t.key];
            if (!n) {
                return;
            }
            t.preventDefault();
            let r = c.indexOf(document.activeElement);
            let i = (Math.max(0, r) + n + c.length) % c.length;
            c[i].focus();
            this.onParam?.(e.key, e.options[i].value);
        });
        let l = (t)=>{
            let n = e.options.find((e)=>e.value === t);
            c.forEach((n, r)=>{
                let i = e.options[r].value === t;
                n.classList.toggle(`is-on`, i);
                n.setAttribute(`aria-checked`, String(i));
            });
            if (s) {
                s.textContent = n?.label ?? (i ? `Custom` : ``);
            }
            o.textContent = n?.note ?? ``;
            o.hidden = !n?.note;
        };
        this.controls.set(e.key, l);
        l(t);
        return n;
    }
    sync(e) {
        if (this.isOpen) {
            for (let [t, n] of this.controls){
                n(e[t]);
            }
            this.size = null;
        }
    }
    pulse(e) {
        let t = this.root.querySelector(`.insp-row[data-key="${e}"]`);
        if (t) {
            t.classList.remove(`is-pulse`);
            t.offsetWidth;
            t.classList.add(`is-pulse`);
            t.querySelector(`input, button`)?.focus({
                preventScroll: true
            });
        }
    }
    get footprint() {
        if (this.isOpen && this.dock === `bottom`) {
            return this.root.offsetHeight + 20;
        }
        return 0;
    }
    place(e, t, n) {
        if (!this.isOpen || !e) {
            return;
        }
        this.size ??= {
            w: this.root.offsetWidth,
            h: this.root.offsetHeight
        };
        let { w, h } = this.size;
        let a = Math.min(Te, t / 30);
        if (this.dock === `bottom`) {
            let a = (t - w) / 2;
            let o = n - h - 10;
            this.root.style.transform = `translate(${Math.round(a)}px, ${Math.round(o)}px)`;
            let s = Math.min(a + w - 30, Math.max(a + 30, e[0]));
            let c = e[1] < o - 8;
            this.path.setAttribute(`d`, c ? `M${s} ${o} L${s} ${Math.max(e[1] + 4, o - 22)} L${e[0]} ${e[1]}` : ``);
            this.end.setAttribute(`cx`, e[0]);
            this.end.setAttribute(`cy`, e[1]);
            this.leader.classList.toggle(`is-away`, !c || e[0] < -40 || e[0] > t + 40 || e[1] < -40);
            return;
        }
        let o = Math.max(a, Math.min(this.top, n - h - 58));
        let s = (e)=>{
            if (e < 0) {
                return a;
            }
            return t - w - a;
        };
        let c = (t)=>e[0] > s(t) - 24 && e[0] < s(t) + w + 24 && e[1] < o + h + 24;
        if (this.placed) {
            if (c(this.side) && !c(-this.side)) {
                this.side = -this.side;
            }
        } else {
            this.side = e[0] > t / 2 ? -1 : 1;
        }
        this.placed = true;
        let l = s(this.side);
        this.root.style.transform = `translate(${Math.round(l)}px, ${Math.round(o)}px)`;
        let u = Math.min(l + w - 30, Math.max(l + 30, e[0]));
        let d = o + h;
        let f = Math.min(e[1] - 4, d + 26);
        let p = e[1] > d + 8 ? `M${u} ${d} L${u} ${f} L${e[0]} ${e[1]}` : `M${this.side < 0 ? l + w : l} ${o + h / 2} L${e[0]} ${e[1]}`;
        this.path.setAttribute(`d`, p);
        this.end.setAttribute(`cx`, e[0]);
        this.end.setAttribute(`cy`, e[1]);
        let m = e[0] < -40 || e[1] < -40 || e[0] > t + 40 || e[1] > n + 40;
        this.leader.classList.toggle(`is-away`, m);
    }
}
class ke {
    constructor(e){
        this.root = e;
        this.fill = e?.querySelector(`.loader-fill`);
        this.label = e?.querySelector(`.loader-step`);
        this.value = 0;
        this.closed = !e;
    }
    step(e, t) {
        if (!this.closed) {
            if (e) {
                this.label.textContent = e;
            }
            if (t > this.value) {
                this.value = t;
                this.fill.style.transform = `scaleX(${t})`;
            }
        }
    }
    done() {
        if (this.closed) {
            return Promise.resolve();
        }
        this.closed = true;
        this.step(`Ready`, 1);
        document.documentElement.classList.remove(`is-loading`);
        this.root.classList.add(`is-done`);
        return new Promise((resolve)=>{
            let t = ()=>{
                this.root.remove();
                resolve();
            };
            let n = parseFloat(getComputedStyle(this.root).transitionDuration) * 1000 || 0;
            setTimeout(t, n + 50);
        });
    }
    fail(e) {
        if (this.root) {
            this.closed = true;
            this.root.classList.add(`is-failed`);
            this.label.textContent = e;
        }
    }
}
let D = null;
function Ae() {
    let e = window.AudioContext || window.webkitAudioContext;
    if (e) {
        D ??= new e;
        if (D.state === `suspended`) {
            D.resume();
        }
    }
}
function je(e, t, n = 0.4) {
    if (!D || !e || n <= 0) {
        return;
    }
    let D_currentTime = D.currentTime;
    let i = t / 1000;
    let a = D.createOscillator();
    a.type = `square`;
    a.frequency.value = e;
    let o = D.createGain();
    let s = 0.06 * n;
    o.gain.setValueAtTime(0, D_currentTime);
    o.gain.linearRampToValueAtTime(s, D_currentTime + 0.006);
    o.gain.setValueAtTime(s, Math.max(D_currentTime + 0.006, D_currentTime + i - 0.03));
    o.gain.linearRampToValueAtTime(0, D_currentTime + i);
    a.connect(o).connect(D.destination);
    a.start(D_currentTime);
    a.stop(D_currentTime + i + 0.02);
}
const Me = `modulepreload`;
const Ne = (e)=>`/` + e;
const Pe = {};
const Fe = (e)=>e.pathname.endsWith(`.css`);
const Ie = (e, href, n)=>{
    if (href in e) {
        return e[href];
    }
    let r = n();
    if (!r) {
        e[href] = undefined;
        return;
    }
    let i = r.then(()=>{
        e[href] = undefined;
    }, (n)=>{
        e[href] = undefined;
        throw n;
    });
    e[href] = i;
    return i;
};
const Le = (e, t, n)=>{
    let r = Promise.resolve();
    if (t && t.length > 0) {
        let e;
        let i = document.querySelector(`meta[property=csp-nonce]`);
        let a = i?.nonce || i?.getAttribute(`nonce`);
        function o(e) {
            return Promise.all(e.map((e)=>Promise.resolve(e).then((e)=>({
                        status: `fulfilled`,
                        value: e
                    }), (reason)=>({
                        status: `rejected`,
                        reason
                    }))));
        }
        function s(e) {
            if (import.meta.resolve) {
                return new URL(import.meta.resolve(e));
            }
            return new URL(e, import.meta.url);
        }
        r = o(t.map((t)=>{
            t = Ne(t, n);
            let r = s(t);
            let i = Fe(r);
            return Ie(Pe, r.href, ()=>{
                if (e === undefined) {
                    e = {
                        all: new Set,
                        styles: new Set
                    };
                    let t = document.getElementsByTagName(`link`);
                    for(let n = t.length - 1; n >= 0; n--){
                        let r = t[n];
                        e.all.add(r.href);
                        if (r.rel === `stylesheet`) {
                            e.styles.add(r.href);
                        }
                    }
                }
                if ((i ? e.styles : e.all).has(r.href)) {
                    return;
                }
                let t = document.createElement(`link`);
                t.rel = i ? `stylesheet` : Me;
                if (!i) {
                    t.as = `script`;
                }
                t.crossOrigin = ``;
                t.href = r.href;
                if (a) {
                    t.setAttribute(`nonce`, a);
                }
                document.head.appendChild(t);
                if (i) {
                    return new Promise((resolve, reject)=>{
                        t.addEventListener(`load`, resolve);
                        t.addEventListener(`error`, ()=>reject(Error(`Unable to preload CSS for ${r}`)));
                    });
                }
            });
        }).filter((e)=>e !== undefined));
    }
    function i(e) {
        let t = new Event(`vite:preloadError`, {
            cancelable: true
        });
        t.payload = e;
        window.dispatchEvent(t);
        if (!t.defaultPrevented) {
            throw e;
        }
    }
    return r.then((t)=>{
        for (let e of t || []){
            if (e.status === `rejected`) {
                i(e.reason);
            }
        }
        return e().catch(i);
    });
};
const Re = 1672;
const ze = 941;
const Be = 0.8;
const Ve = 1280;
const He = 0.62;
const Ue = {
    x: 10,
    y: 70
};
const We = 180 / Math.PI;
const O = (e)=>document.querySelector(e);
const k = O(`#app`);
const A = O(`#stage`);
const rig = O(`#rig`);
const M = O(`#tip`);
let N = 1;
let P = false;
let F = false;
const Ge = 0.85;
const I = lessons.find((e)=>`#${e.id}` === location.hash);
const state = {
    lesson: I ?? lessons[0],
    running: `idle`,
    settings: qe(),
    saved: Ke(`learn-arduino:values`, {}),
    values: {}
};
state.values = $e(state.lesson);
function Ke(e, t) {
    try {
        return JSON.parse(localStorage.getItem(e) ?? `null`) ?? t;
    } catch  {
        return t;
    }
}
function qe() {
    let e = {
        labels: true,
        grid: true,
        autoRotate: false,
        sound: true,
        reducedMotion: window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches ?? false
    };
    try {
        return {
            ...e,
            ...JSON.parse(localStorage.getItem(`learn-arduino:settings`) ?? `{}`)
        };
    } catch  {
        return e;
    }
}
function Je() {
    try {
        localStorage.setItem(`learn-arduino:settings`, JSON.stringify(state.settings));
    } catch  {}
}
function Ye() {
    let e = document.documentElement.clientWidth || window.innerWidth;
    let t = document.documentElement.clientHeight || window.innerHeight;
    let n = Math.min(e / Re, t / ze);
    if (n < Be) {
        n = Math.min(e / Ve, t / ze, Be);
    }
    P = n < He || e / t < 0.95;
    document.documentElement.classList.toggle(`compact`, P);
    if (P) {
        N = 1;
        k.style.width = ``;
        k.style.height = ``;
        k.style.transform = ``;
        return;
    }
    N = n;
    let r = e / N;
    let i = t / N;
    k.style.width = `${r}px`;
    k.style.height = `${i}px`;
    k.style.transform = `scale(${N})`;
    ee(O(`#traces`), r, i);
}
Ye();
te(O(`#clock-date`), O(`#clock-time`));
const R = new le(O(`.info-card`), {
    onExpand: (e)=>e && B.toggleExpanded(false)
});
var z = new ye(O(`#lesson-list`), lessons, {
    onSelect: (e)=>selectLesson(e)
});
var B = new he(O(`.code-card`), {
    onRun: ()=>run(),
    onStop: ()=>stop(),
    onParam: (e)=>it(e),
    onExpand: (e)=>{
        if (e) {
            R.toggleExpanded(false);
        }
        R.setCovered(e);
    }
});
var stage = null;
const Xe = 300;
let H = null;
let U = 0;
var inspector = new Oe(O(`#inspector`), {
    svg: O(`#insp-lines`),
    onParam: (e, t)=>setParam(e, t),
    onFocus: ()=>stage?.selection && stage.focusGroup(stage.selection.group),
    onClose: ()=>stage?.select(null),
    onRun: ()=>run()
});
var G = new se({
    rig,
    svg: O(`#leaders`),
    tags: O(`#tags`),
    onFocus: (e)=>{
        if (stage) {
            if (e.anchor.startsWith(`part:`) && stage.parts.has(e.anchor.slice(5))) {
                stage.select(e.anchor.slice(5));
            } else {
                stage.focusAnchor(e.anchor);
            }
        }
    }
});
const minimap = new we(O(`#minimap`), {
    onMove: (e, t)=>{
        if (!stage) {
            return;
        }
        let V_controls = stage.controls;
        if (t) {
            V_controls.stopAnimation();
            V_controls.view.target.set(e.x, 0, e.z);
            V_controls.clampTarget();
            stage.touch();
        } else {
            V_controls.animateTo({
                target: [
                    e.x,
                    0,
                    e.z
                ]
            }, {
                duration: 420
            });
        }
    }
});
const q = new xe(O(`#viewbar`), {
    onTurn: (e)=>stage?.controls.turn(e),
    onZoom: (e)=>stage?.controls.zoomBy(e),
    onReset: ()=>stage?.resetView()
});
var J = new be(O(`.sidebar`), O(`#flyout`), {
    home: ()=>{
        selectLesson(lessons[0].id);
        stage?.resetView();
    },
    toggleRun: ()=>{
        if (state.running === `idle`) {
            return run();
        }
        return stop();
    },
    state: ()=>({
            lessons,
            current: state.lesson.id,
            done: z.done
        }),
    selectLesson: (e)=>selectLesson(e),
    parts: ()=>ot(),
    focusPart: (e)=>{
        if (e.group && stage) {
            stage.focusGroup(e.group);
            stage.select(e.group);
        }
    },
    settings: ()=>state.settings,
    setSetting: (e, t)=>Qe(e, t),
    resetProgress: ()=>{
        z.done.clear();
        try {
            localStorage.removeItem(`learn-arduino:done`);
        } catch  {}
        z.paintDone();
        Ze();
    }
});
function Ze() {
    let size = z.done.size;
    let o_length = lessons.length;
    O(`#progress-count`).textContent = `${size}/${o_length}`;
    O(`#progress-fill`).style.width = `${size / o_length * 100}%`;
    O(`.progress-track`).setAttribute(`aria-valuenow`, String(size));
    O(`.progress-track`).setAttribute(`aria-valuemax`, String(o_length));
}
Ze();
function Qe(e, t) {
    state.settings[e] = t;
    Je();
    if (e === `labels`) {
        G.setVisible(t);
    }
    if (e === `grid`) {
        stage?.setGrid(t);
    }
    if (e === `autoRotate` && stage) {
        stage.autoRotate = t;
    }
    if (e === `reducedMotion`) {
        stage?.setReducedMotion(t);
        document.documentElement.classList.toggle(`reduce-motion`, t);
    }
}
function $e(e) {
    let t = s(e);
    let n = state.saved[e.id] ?? {};
    for (let r of e.params ?? []){
        if (!(r.key in n)) {
            continue;
        }
        let e = n[r.key];
        if (r.type === `range` && typeof e == `number`) {
            t[r.key] = Math.min(r.max, Math.max(r.min, e));
        } else if (r.type === `toggle` && typeof e == `boolean` || r.options?.some((t)=>t.value === e)) {
            t[r.key] = e;
        }
    }
    e.constrain?.(t);
    return t;
}
var et = 0;
function tt() {
    et ||= setTimeout(()=>{
        et = 0;
        state.saved[state.lesson.id] = {
            ...state.values
        };
        try {
            localStorage.setItem(`learn-arduino:values`, JSON.stringify(state.saved));
        } catch  {}
    }, 400);
}
function setParam(e, t, { fromSim = false } = {}) {
    let L_lesson = state.lesson;
    let i = L_lesson.params?.find((t)=>t.key === e);
    if (!i) {
        return;
    }
    let L_values = state.values;
    let o = t;
    if (i.type === `range`) {
        o = Math.min(i.max, Math.max(i.min, Number(t)));
    }
    if (i.type === `toggle`) {
        o = !!t;
    }
    if (L_values[e] === o) {
        return;
    }
    let s = {
        ...L_values
    };
    L_values[e] = o;
    L_lesson.constrain?.(L_values, e);
    stage?.updateParams(L_values);
    let c = (e)=>L_lesson.code.includes(`{{${e}}}`) || L_lesson.code.includes(`{{${e}.`);
    let l = Object.keys(L_values).filter((e)=>L_values[e] !== s[e] && c(e));
    if (l.length) {
        B.update(L_values, l);
    }
    if (stage?.selection && stage.selection.group.userData.part !== inspector.sel?.info) {
        rt();
    } else {
        inspector.sync(L_values);
    }
    if (!fromSim) {
        tt();
    }
}
function rt() {
    let e = stage?.selection;
    st(null);
    if (!e) {
        inspector.close();
        B.mark([]);
        return;
    }
    let t = e.id ? (state.lesson.params ?? []).filter((t)=>t.part === e.id) : [];
    let interact = e.id ? stage.parts.get(e.id)?.spec.interact?.type : null;
    inspector.open({
        id: e.id,
        info: e.group.userData.part,
        interact,
        live: !interact && t.length > 0
    }, t, state.values);
    B.mark(t.map((e)=>e.key));
    stage.touch();
    if (inspector.dock === `bottom` && !stage.controls.grab) {
        requestAnimationFrame(()=>stage.revealSelection(inspector.footprint));
    }
}
function it(e) {
    let t = state.lesson.params?.find((t)=>t.key === e);
    if (t && stage) {
        stage.select(t.part);
        inspector.pulse(e);
    }
}
function selectLesson(e) {
    let t = lessons.find((t)=>t.id === e) ?? lessons[0];
    if (t === state.lesson) {
        stage?.resetView();
    } else {
        stop();
        state.lesson = t;
        state.values = $e(t);
        z.setActive(t.id);
        R.setLesson(t);
        B.setLesson(t, state.values);
        G.show(t, {
            delay: state.settings.reducedMotion ? 0 : 1000
        });
        stage?.setLesson(t.id, {
            values: state.values
        });
        J.refresh();
        history.replaceState(null, ``, `#${t.id}`);
        document.title = at(t);
    }
}
function at(e) {
    return `${e.title} · Learn Arduino`;
}
async function run() {
    if (!stage) {
        return;
    }
    Ae();
    state.running = `uploading`;
    B.setState(`uploading`);
    inspector.setRunning(true);
    J.setActive(`run`, true);
    let L_lesson = state.lesson;
    if (await stage.runSketch(L_lesson.sim, {
        out: (e)=>B.log(e),
        trace: (e)=>B.trace(e)
    }) && L_lesson === state.lesson) {
        state.running = `running`;
        B.setState(`running`);
        if (z.complete(L_lesson.id)) {
            Ze();
            J.refresh();
        }
    }
}
function stop() {
    stage?.stopSim();
    B.trace(null);
    if (state.running !== `idle`) {
        B.log(`Stopped.`);
    }
    state.running = `idle`;
    B.setState(`idle`);
    inspector.setRunning(false);
    J.setActive(`run`, false);
}
function ot() {
    if (!stage) {
        return [];
    }
    let e = [];
    for (let { group } of stage.parts.values()){
        if (group.userData.part && !group.userData.wire) {
            e.push({
                ...group.userData.part,
                group
            });
        }
    }
    let t = [
        `dip`,
        `usb`,
        `jack`,
        `reset`,
        `digitalA`,
        `power`,
        `analog`,
        `qfn`,
        `crystal`
    ];
    stage.board.traverse((group_1)=>{
        let part = group_1.userData.part;
        if (part && t.includes(part.key) && !e.some((e)=>e.name === part.name)) {
            e.push({
                ...part,
                group: group_1
            });
        }
    });
    let n = (e)=>{
        if (e.key) {
            return t.indexOf(e.key) + 100;
        }
        return 0;
    };
    return e.sort((e, t)=>n(e) - n(t)).slice(0, 12);
}
function st(e, t) {
    if (e && stage?.selection?.group.userData.part === e) {
        e = null;
    }
    if (!e || !t) {
        M.classList.remove(`is-on`);
        return;
    }
    M.querySelector(`b`).textContent = e.name;
    M.querySelector(`span`).textContent = e.desc ?? ``;
    let n = toStage(t.x, t.y);
    let r = n.x > A.offsetWidth - 260;
    M.style.transform = `translate(${n.x + (r ? -16 : 16)}px, ${n.y + 18}px) translateX(${r ? `-100%` : `0`})`;
    M.classList.add(`is-on`);
}
function ct() {
    let e = A.getBoundingClientRect();
    let t = [];
    let n = (n, r = false)=>{
        let i = n.getBoundingClientRect();
        if (!i.width || !i.height) {
            return;
        }
        let a = getComputedStyle(n);
        if (!(a.display === `none` || !r && (a.visibility === `hidden` || Number(a.opacity) < 0.3))) {
            t.push({
                x0: (i.left - e.left) / N,
                y0: (i.top - e.top) / N,
                x1: (i.right - e.left) / N,
                y1: (i.bottom - e.top) / N
            });
        }
    };
    if (!rig.classList.contains(`is-free`) && !rig.classList.contains(`is-off`)) {
        document.querySelectorAll(`.callout:not(.is-leaving)`).forEach((e)=>n(e, true));
        document.querySelectorAll(`.leaders .leader path`).forEach((e)=>{
            let n = (e.getAttribute(`d`) ?? ``).match(/-?\d+(\.\d+)?/g)?.map(Number) ?? [];
            for(let e = 0; e + 3 < n.length; e += 2){
                t.push({
                    poly: [
                        [
                            n[e],
                            n[e + 1]
                        ],
                        [
                            n[e + 2],
                            n[e + 3]
                        ]
                    ]
                });
            }
        });
    } else {
        document.querySelectorAll(`.tags.is-free .tag:not(.is-hidden)`).forEach((e)=>n(e, true));
    }
    document.querySelectorAll(`.viewbar, .minimap, .inspector, .brand, .status`).forEach((e)=>n(e));
    return t;
}
function toStage(e, t) {
    let n = A.getBoundingClientRect();
    return {
        x: (e - n.left) / N,
        y: (t - n.top) / N
    };
}
R.setLesson(state.lesson);
B.setLesson(state.lesson, state.values);
z.setActive(state.lesson.id);
if (I) {
    document.title = at(I);
}
G.setVisible(state.settings.labels);
document.documentElement.classList.toggle(`reduce-motion`, state.settings.reducedMotion);
const Q = new ke(O(`#loader`));
const ut = 20000;
const dt = `The 3D board is drawn with WebGL, which this browser has turned off. Turn on hardware acceleration in its settings, or try another browser — the lessons and their code still work.`;
let $ = false;
function ft() {
    $ = true;
    O(`#app`).inert = false;
    Q.done();
}
function pt() {
    if (!$ && stage) {
        ft();
        setTimeout(()=>G.release(), 180);
        q.startHint();
    }
}
function mt() {
    if ($) {
        return;
    }
    A.classList.add(`no-webgl`);
    let e = document.createElement(`div`);
    e.className = `stage-note`;
    e.setAttribute(`role`, `note`);
    e.innerHTML = `<b>3D view unavailable</b><p>${dt}</p>`;
    A.append(e);
    ft();
}
const ht = (e)=>new Promise((resolve)=>{
        let n = ()=>{
            if (e-- > 0) {
                return requestAnimationFrame(n);
            }
            return resolve();
        };
        n();
    });
function gt(BoardStage) {
    return new BoardStage(O(`#board-canvas`), A, {
        toStage,
        onFrame: (e)=>{
            G.update(e);
            let t = e.isHome();
            G.setFree(!t || !!e.selection || F);
            q.update((e.view.azimuth - 36 / We) * We, t);
            let n = !P && !e.headingHome();
            let r = performance.now();
            if (n) {
                H ??= r;
            } else {
                H = null;
            }
            let i = n && r - H >= Xe;
            minimap.setVisible(i);
            if (n && !i && !U) {
                U = setTimeout(()=>{
                    U = 0;
                    if (stage) {
                        stage.dirty = true;
                    }
                }, Xe - (r - H) + 16);
            }
            minimap.draw(e);
            inspector.place(e.selectionScreen(), e.size.w, e.size.h);
        },
        onHover: (e, t)=>st(e, t),
        onSelect: ()=>rt(),
        blockers: ()=>ct(),
        onParam: (e, t, n)=>setParam(e, t, n),
        sound: ()=>state.settings.sound
    });
}
async function _t() {
    setTimeout(pt, ut);
    Q.step(`Loading fonts`, 0.08);
    await Promise.all([
        document.fonts.load(`700 40px "Barlow Semi Condensed"`),
        document.fonts.load(`600 40px "Barlow Semi Condensed"`),
        document.fonts.load(`500 40px "Barlow Semi Condensed"`)
    ]).catch(()=>{});
    Q.step(`Loading the 3D view`, 0.18);
    let { BoardStage } = await Le(async ()=>{
        let { BoardStage } = await import(`./stage-btHE6-0n.js`);
        return {
            BoardStage
        };
    }, __vite__mapDeps([
        0,
        1
    ]));
    Q.step(`Building the board`, 0.32);
    await ht(2);
    try {
        stage = gt(BoardStage);
    } catch (error) {
        console.error(error);
        mt();
        return;
    }
    stage.setGrid(state.settings.grid);
    stage.autoRotate = state.settings.autoRotate;
    stage.setReducedMotion(state.settings.reducedMotion);
    window.__app = {
        stage,
        selectLesson,
        run,
        stop,
        state,
        setParam,
        inspector,
        minimap
    };
    let t = ()=>{
        let A_offsetWidth = A.offsetWidth;
        let A_offsetHeight = A.offsetHeight;
        if (!A_offsetWidth || !A_offsetHeight) {
            return;
        }
        let n = Math.min(1, A_offsetWidth / 1090, A_offsetHeight / 800);
        F = P || n < Ge;
        let r = P ? 12 : 100;
        let i = F ? {
            w: A_offsetWidth - 28,
            h: A_offsetHeight - r - 70
        } : null;
        let x_1 = F ? A_offsetWidth / 2 : A_offsetWidth / 2 + Ue.x * n;
        let y_1 = F ? r + (A_offsetHeight - r - 58) / 2 : A_offsetHeight / 2 + Ue.y * n;
        let s = stage.isHome();
        rig.style.left = `${x_1}px`;
        rig.style.top = `${y_1}px`;
        rig.style.transform = n < 1 ? `scale(${n})` : ``;
        G.origin = {
            x: x_1,
            y: y_1
        };
        G.scale = n;
        G.invalidate();
        inspector.top = P ? 12 : 112;
        inspector.dock = P ? `bottom` : `corner`;
        let c = Math.min(2, Math.max(1.5, window.devicePixelRatio * N));
        stage.resize(A_offsetWidth, A_offsetHeight, x_1, y_1, c, n, i);
        minimap.resize(window.devicePixelRatio * N * 1.5);
        if (s) {
            stage.controls.jumpTo(stage.homeView());
        }
    };
    t();
    window.addEventListener(`resize`, ()=>{
        Ye();
        t();
    });
    new ResizeObserver(()=>t()).observe(A);
    stage.setLesson(state.lesson.id, {
        instant: true,
        values: state.values
    });
    G.show(state.lesson, {
        hold: true
    });
    A.addEventListener(`dblclick`, (e)=>{
        if (e.target !== O(`#board-canvas`)) {
            return;
        }
        let t = stage.pick(e.clientX, e.clientY);
        if (t && t.info.lift !== false) {
            stage.focusGroup(t.group);
        } else {
            stage.resetView();
        }
    });
    A.addEventListener(`pointerdown`, ()=>q.dismissHint(), {
        once: true
    });
    await ht(2);
    Q.step(`Drawing the lessons`, 0.6);
    try {
        let { renderThumbnails } = await Le(async ()=>{
            let { renderThumbnails } = await import(`./thumbs-gagaX1E4.js`);
            return {
                renderThumbnails
            };
        }, __vite__mapDeps([
            2,
            1
        ]));
        await renderThumbnails(document.querySelectorAll(`[data-thumb]`), {
            renderer: stage.renderer,
            environment: stage.scene.environment,
            board: stage.board,
            onEach: (e, t)=>Q.step(`Drawing the lessons · ${e} / ${t}`, 0.6 + 0.38 * e / t)
        });
    } catch (error) {
        console.error(error);
    }
    await ht(1);
    pt();
}
window.addEventListener(`keydown`, (e)=>{
    if (e.metaKey || e.ctrlKey || e.altKey || !$) {
        return;
    }
    let t = document.activeElement?.tagName;
    if (t === `INPUT` || t === `TEXTAREA`) {
        return;
    }
    let n = t === `BUTTON` || document.activeElement?.getAttribute(`role`) === `button`;
    let r = stage?.controls;
    let e_key = e.key;
    if (e_key === `Escape`) {
        if (stage?.selection) {
            stage.select(null);
            return;
        }
        J.close();
        if (R.expanded || B.expanded) {
            R.toggleExpanded(false);
            B.toggleExpanded(false);
            return;
        }
        stage?.resetView();
    } else if (r) {
        if (e_key === `r` || e_key === `R` || e_key === `Home`) {
            stage.resetView();
        } else if (/^[0-9]$/.test(e_key) && lessons[(Number(e_key) + 9) % 10]) {
            selectLesson(lessons[(Number(e_key) + 9) % 10].id);
        } else if (e_key === `[` || e_key === `]`) {
            let e = lessons.indexOf(state.lesson) + (e_key === `]` ? 1 : -1);
            if (lessons[e]) {
                selectLesson(lessons[e].id);
            }
        } else if (e_key === ` ` && !n) {
            if (state.running === `idle`) {
                run();
            } else {
                stop();
            }
        } else {
            return;
        }
        e.preventDefault();
    }
});
_t().catch((e)=>{
    console.error(e);
    Q.fail(`Something went wrong while starting. Try reloading the page.`);
});
export { i as n, je as t };
