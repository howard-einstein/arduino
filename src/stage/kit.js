/**
 * Motor Three.js y catálogo procedural de componentes 3D.
 * Reconstruido bajo Clean Architecture para Aprender Arduino.
 */
const e = 1000;
const t = 1001;
const n = 1002;
var r = 1003;
const i = 1004;
var a = 1005;
const minFilter = 1006;
const s = 1007;
var c = 1008;
const l = 1009;
const u = 1010;
const d = 1011;
const f = 1012;
const p = 1013;
const m = 1014;
const h = 1015;
var g = 1016;
const _ = 1017;
const v = 1018;
var y = 1020;
var b = 35902;
var x = 35899;
const S = 1021;
const C = 1022;
var w = 1023;
const T = 1026;
const E = 1027;
const D = 1028;
const O = 1029;
const k = 1030;
const A = 1031;
const ee = 1033;
const te = 33776;
const j = 33777;
const ne = 33778;
const re = 33779;
const ie = 35840;
const ae = 35841;
const oe = 35842;
const se = 35843;
const ce = 36196;
const le = 37492;
const ue = 37496;
const de = 37488;
const fe = 37489;
const pe = 37490;
const me = 37491;
const he = 37808;
const ge = 37809;
const _e = 37810;
const ve = 37811;
const ye = 37812;
const be = 37813;
const xe = 37814;
const Se = 37815;
const Ce = 37816;
const we = 37817;
const Te = 37818;
const Ee = 37819;
const De = 37820;
const Oe = 37821;
const ke = 36492;
const Ae = 36494;
const je = 36495;
const Me = 36283;
const Ne = 36284;
const Pe = 36285;
const Fe = 36286;
const Ie = 2300;
const Le = 2301;
const Re = 2302;
const ze = 2303;
const Be = 2400;
const Ve = 2401;
const He = 2402;
const Ue = `srgb`;
const workingColorSpace = `srgb-linear`;
const Ge = `linear`;
const Ke = `srgb`;
const qe = 7680;
const Je = 35044;
const Ye = `300 es`;
const Xe = 2000;
function Ze(e) {
    for(let t = e.length - 1; t >= 0; --t){
        if (e[t] >= 65535) {
            return true;
        }
    }
    return false;
}
function Qe(values) {
    return ArrayBuffer.isView(values) && !(values instanceof DataView);
}
function $e(e) {
    return document.createElementNS(`http://www.w3.org/1999/xhtml`, e);
}
function et() {
    let e = $e(`canvas`);
    e.style.display = `block`;
    return e;
}
const tt = {};
function nt(...e) {
    let t = `THREE.` + e.shift();
    console.log(t, ...e);
}
function rt(e) {
    let t = e[0];
    if (typeof t == `string` && t.startsWith(`TSL:`)) {
        let t = e[1];
        if (t && t.isStackTrace) {
            e[0] += ` ` + t.getLocation();
        } else {
            e[1] = `Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`;
        }
    }
    return e;
}
function M(...e) {
    e = rt(e);
    let t = `THREE.` + e.shift();
    {
        let n = e[0];
        if (n && n.isStackTrace) {
            console.warn(n.getError(t));
        } else {
            console.warn(t, ...e);
        }
    }
}
function N(...e) {
    e = rt(e);
    let t = `THREE.` + e.shift();
    {
        let n = e[0];
        if (n && n.isStackTrace) {
            console.error(n.getError(t));
        } else {
            console.error(t, ...e);
        }
    }
}
function it(...e) {
    let t = e.join(` `);
    if (!(t in tt)) {
        tt[t] = true;
        M(...e);
    }
}
function at(e, t, n) {
    return new Promise((resolve, reject)=>{
        function a() {
            switch(e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0)){
                case e.WAIT_FAILED:
                    reject();
                    break;
                case e.TIMEOUT_EXPIRED:
                    setTimeout(a, n);
                    break;
                default:
                    resolve();
            }
        }
        setTimeout(a, n);
    });
}
const ot = {
    0: 1,
    2: 6,
    4: 7,
    3: 5,
    1: 0,
    6: 2,
    7: 4,
    5: 3
};
class st {
    addEventListener(e, t) {
        if (this._listeners === undefined) {
            this._listeners = {};
        }
        let _listeners = this._listeners;
        if (_listeners[e] === undefined) {
            _listeners[e] = [];
        }
        if (_listeners[e].indexOf(t) === -1) {
            _listeners[e].push(t);
        }
    }
    hasEventListener(e, t) {
        let _listeners = this._listeners;
        return _listeners !== undefined && _listeners[e] !== undefined && _listeners[e].indexOf(t) !== -1;
    }
    removeEventListener(e, t) {
        let _listeners = this._listeners;
        if (_listeners === undefined) {
            return;
        }
        let r = _listeners[e];
        if (r !== undefined) {
            let e = r.indexOf(t);
            if (e !== -1) {
                r.splice(e, 1);
            }
        }
    }
    dispatchEvent(e) {
        let _listeners = this._listeners;
        if (_listeners === undefined) {
            return;
        }
        let n = _listeners[e.type];
        if (n !== undefined) {
            e.target = this;
            let t = n.slice(0);
            for(let n = 0, r = t.length; n < r; n++){
                t[n].call(this, e);
            }
            e.target = null;
        }
    }
}
const ct = `00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`);
const lt = Math.PI / 180;
const ut = 180 / Math.PI;
function dt() {
    let e = Math.random() * 4294967295 | 0;
    let t = Math.random() * 4294967295 | 0;
    let n = Math.random() * 4294967295 | 0;
    let r = Math.random() * 4294967295 | 0;
    return (ct[e & 255] + ct[e >> 8 & 255] + ct[e >> 16 & 255] + ct[e >> 24 & 255] + `-` + ct[t & 255] + ct[t >> 8 & 255] + `-` + ct[t >> 16 & 15 | 64] + ct[t >> 24 & 255] + `-` + ct[n & 63 | 128] + ct[n >> 8 & 255] + `-` + ct[n >> 16 & 255] + ct[n >> 24 & 255] + ct[r & 255] + ct[r >> 8 & 255] + ct[r >> 16 & 255] + ct[r >> 24 & 255]).toLowerCase();
}
function P(e, t, n) {
    return Math.max(t, Math.min(n, e));
}
function ft(e, t) {
    return (e % t + t) % t;
}
function pt(e, t, n) {
    return (1 - n) * e + n * t;
}
function mt(e, t) {
    switch(t.constructor){
        case Float32Array:
            return e;
        case Uint32Array:
            return e / 4294967295;
        case Uint16Array:
            return e / 65535;
        case Uint8Array:
        case Uint8ClampedArray:
            return e / 255;
        case Int32Array:
            return Math.max(e / 2147483647, -1);
        case Int16Array:
            return Math.max(e / 32767, -1);
        case Int8Array:
            return Math.max(e / 127, -1);
        default:
            throw Error(`THREE.MathUtils: Invalid component type.`);
    }
}
function F(e, t) {
    switch(t.constructor){
        case Float32Array:
            return e;
        case Uint32Array:
            return Math.round(e * 4294967295);
        case Uint16Array:
            return Math.round(e * 65535);
        case Uint8Array:
        case Uint8ClampedArray:
            return Math.round(e * 255);
        case Int32Array:
            return Math.round(e * 2147483647);
        case Int16Array:
            return Math.round(e * 32767);
        case Int8Array:
            return Math.round(e * 127);
        default:
            throw Error(`THREE.MathUtils: Invalid component type.`);
    }
}
const I = class e {
    static{
        e.prototype.isVector2 = true;
    }
    constructor(e = 0, t = 0){
        this.x = e;
        this.y = t;
    }
    get width() {
        return this.x;
    }
    set width(e) {
        this.x = e;
    }
    get height() {
        return this.y;
    }
    set height(e) {
        this.y = e;
    }
    set(e, t) {
        this.x = e;
        this.y = t;
        return this;
    }
    setScalar(e) {
        this.x = e;
        this.y = e;
        return this;
    }
    setX(e) {
        this.x = e;
        return this;
    }
    setY(e) {
        this.y = e;
        return this;
    }
    setComponent(e, t) {
        switch(e){
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            default:
                throw Error(`THREE.Vector2: index is out of range: ` + e);
        }
        return this;
    }
    getComponent(e) {
        switch(e){
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw Error(`THREE.Vector2: index is out of range: ` + e);
        }
    }
    clone() {
        return new this.constructor(this.x, this.y);
    }
    copy(e) {
        this.x = e.x;
        this.y = e.y;
        return this;
    }
    add(e) {
        this.x += e.x;
        this.y += e.y;
        return this;
    }
    addScalar(e) {
        this.x += e;
        this.y += e;
        return this;
    }
    addVectors(e, t) {
        this.x = e.x + t.x;
        this.y = e.y + t.y;
        return this;
    }
    addScaledVector(e, t) {
        this.x += e.x * t;
        this.y += e.y * t;
        return this;
    }
    sub(e) {
        this.x -= e.x;
        this.y -= e.y;
        return this;
    }
    subScalar(e) {
        this.x -= e;
        this.y -= e;
        return this;
    }
    subVectors(e, t) {
        this.x = e.x - t.x;
        this.y = e.y - t.y;
        return this;
    }
    multiply(e) {
        this.x *= e.x;
        this.y *= e.y;
        return this;
    }
    multiplyScalar(e) {
        this.x *= e;
        this.y *= e;
        return this;
    }
    divide(e) {
        this.x /= e.x;
        this.y /= e.y;
        return this;
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e);
    }
    applyMatrix3(e) {
        let t = this.x;
        let n = this.y;
        let e_elements = e.elements;
        this.x = e_elements[0] * t + e_elements[3] * n + e_elements[6];
        this.y = e_elements[1] * t + e_elements[4] * n + e_elements[7];
        return this;
    }
    min(e) {
        this.x = Math.min(this.x, e.x);
        this.y = Math.min(this.y, e.y);
        return this;
    }
    max(e) {
        this.x = Math.max(this.x, e.x);
        this.y = Math.max(this.y, e.y);
        return this;
    }
    clamp(e, t) {
        this.x = P(this.x, e.x, t.x);
        this.y = P(this.y, e.y, t.y);
        return this;
    }
    clampScalar(e, t) {
        this.x = P(this.x, e, t);
        this.y = P(this.y, e, t);
        return this;
    }
    clampLength(e, t) {
        let n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(P(n, e, t));
    }
    floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
    }
    ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this;
    }
    round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
    roundToZero() {
        this.x = Math.trunc(this.x);
        this.y = Math.trunc(this.y);
        return this;
    }
    negate() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    }
    dot(e) {
        return this.x * e.x + this.y * e.y;
    }
    cross(e) {
        return this.x * e.y - this.y * e.x;
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
        return this.divideScalar(this.length() || 1);
    }
    angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(e) {
        let t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (t === 0) {
            return Math.PI / 2;
        }
        let n = this.dot(e) / t;
        return Math.acos(P(n, -1, 1));
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
        let t = this.x - e.x;
        let n = this.y - e.y;
        return t * t + n * n;
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
        this.x += (e.x - this.x) * t;
        this.y += (e.y - this.y) * t;
        return this;
    }
    lerpVectors(e, t, n) {
        this.x = e.x + (t.x - e.x) * n;
        this.y = e.y + (t.y - e.y) * n;
        return this;
    }
    equals(e) {
        return e.x === this.x && e.y === this.y;
    }
    fromArray(e, t = 0) {
        this.x = e[t];
        this.y = e[t + 1];
        return this;
    }
    toArray(e = [], t = 0) {
        e[t] = this.x;
        e[t + 1] = this.y;
        return e;
    }
    fromBufferAttribute(e, t) {
        this.x = e.getX(t);
        this.y = e.getY(t);
        return this;
    }
    rotateAround(e, t) {
        let n = Math.cos(t);
        let r = Math.sin(t);
        let i = this.x - e.x;
        let a = this.y - e.y;
        this.x = i * n - a * r + e.x;
        this.y = i * r + a * n + e.y;
        return this;
    }
    random() {
        this.x = Math.random();
        this.y = Math.random();
        return this;
    }
    *[Symbol.iterator]() {
        yield this.x;
        yield this.y;
    }
};
class ht {
    constructor(e = 0, t = 0, n = 0, r = 1){
        this.isQuaternion = true;
        this._x = e;
        this._y = t;
        this._z = n;
        this._w = r;
    }
    static slerpFlat(e, t, n, r, i, a, o) {
        let s = n[r + 0];
        let c = n[r + 1];
        let l = n[r + 2];
        let u = n[r + 3];
        let d = i[a + 0];
        let f = i[a + 1];
        let p = i[a + 2];
        let m = i[a + 3];
        if (u !== m || s !== d || c !== f || l !== p) {
            let e = s * d + c * f + l * p + u * m;
            if (e < 0) {
                d = -d;
                f = -f;
                p = -p;
                m = -m;
                e = -e;
            }
            let t = 1 - o;
            if (e < 0.9995) {
                let n = Math.acos(e);
                let r = Math.sin(n);
                t = Math.sin(t * n) / r;
                o = Math.sin(o * n) / r;
                s = s * t + d * o;
                c = c * t + f * o;
                l = l * t + p * o;
                u = u * t + m * o;
            } else {
                s = s * t + d * o;
                c = c * t + f * o;
                l = l * t + p * o;
                u = u * t + m * o;
                let e = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
                s *= e;
                c *= e;
                l *= e;
                u *= e;
            }
        }
        e[t] = s;
        e[t + 1] = c;
        e[t + 2] = l;
        e[t + 3] = u;
    }
    static multiplyQuaternionsFlat(e, t, n, r, i, a) {
        let o = n[r];
        let s = n[r + 1];
        let c = n[r + 2];
        let l = n[r + 3];
        let u = i[a];
        let d = i[a + 1];
        let f = i[a + 2];
        let p = i[a + 3];
        e[t] = o * p + l * u + s * f - c * d;
        e[t + 1] = s * p + l * d + c * u - o * f;
        e[t + 2] = c * p + l * f + o * d - s * u;
        e[t + 3] = l * p - o * u - s * d - c * f;
        return e;
    }
    get x() {
        return this._x;
    }
    set x(e) {
        this._x = e;
        this._onChangeCallback();
    }
    get y() {
        return this._y;
    }
    set y(e) {
        this._y = e;
        this._onChangeCallback();
    }
    get z() {
        return this._z;
    }
    set z(e) {
        this._z = e;
        this._onChangeCallback();
    }
    get w() {
        return this._w;
    }
    set w(e) {
        this._w = e;
        this._onChangeCallback();
    }
    set(e, t, n, r) {
        this._x = e;
        this._y = t;
        this._z = n;
        this._w = r;
        this._onChangeCallback();
        return this;
    }
    clone() {
        return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(e) {
        this._x = e.x;
        this._y = e.y;
        this._z = e.z;
        this._w = e.w;
        this._onChangeCallback();
        return this;
    }
    setFromEuler({ _x, _y, _z, _order }, t = true) {
        let Math_cos = Math.cos;
        let Math_sin = Math.sin;
        let c = Math_cos(_x / 2);
        let l = Math_cos(_y / 2);
        let u = Math_cos(_z / 2);
        let d = Math_sin(_x / 2);
        let f = Math_sin(_y / 2);
        let p = Math_sin(_z / 2);
        switch(_order){
            case `XYZ`:
                this._x = d * l * u + c * f * p;
                this._y = c * f * u - d * l * p;
                this._z = c * l * p + d * f * u;
                this._w = c * l * u - d * f * p;
                break;
            case `YXZ`:
                this._x = d * l * u + c * f * p;
                this._y = c * f * u - d * l * p;
                this._z = c * l * p - d * f * u;
                this._w = c * l * u + d * f * p;
                break;
            case `ZXY`:
                this._x = d * l * u - c * f * p;
                this._y = c * f * u + d * l * p;
                this._z = c * l * p + d * f * u;
                this._w = c * l * u - d * f * p;
                break;
            case `ZYX`:
                this._x = d * l * u - c * f * p;
                this._y = c * f * u + d * l * p;
                this._z = c * l * p - d * f * u;
                this._w = c * l * u + d * f * p;
                break;
            case `YZX`:
                this._x = d * l * u + c * f * p;
                this._y = c * f * u + d * l * p;
                this._z = c * l * p - d * f * u;
                this._w = c * l * u - d * f * p;
                break;
            case `XZY`:
                this._x = d * l * u - c * f * p;
                this._y = c * f * u - d * l * p;
                this._z = c * l * p + d * f * u;
                this._w = c * l * u + d * f * p;
                break;
            default:
                M(`Quaternion: .setFromEuler() encountered an unknown order: ` + _order);
        }
        if (t === true) {
            this._onChangeCallback();
        }
        return this;
    }
    setFromAxisAngle(e, t) {
        let n = t / 2;
        let r = Math.sin(n);
        this._x = e.x * r;
        this._y = e.y * r;
        this._z = e.z * r;
        this._w = Math.cos(n);
        this._onChangeCallback();
        return this;
    }
    setFromRotationMatrix({ elements }) {
        let n = elements[0];
        let r = elements[4];
        let i = elements[8];
        let a = elements[1];
        let o = elements[5];
        let s = elements[9];
        let c = elements[2];
        let l = elements[6];
        let u = elements[10];
        let d = n + o + u;
        if (d > 0) {
            let e = 0.5 / Math.sqrt(d + 1);
            this._w = 0.25 / e;
            this._x = (l - s) * e;
            this._y = (i - c) * e;
            this._z = (a - r) * e;
        } else if (n > o && n > u) {
            let e = 2 * Math.sqrt(1 + n - o - u);
            this._w = (l - s) / e;
            this._x = 0.25 * e;
            this._y = (r + a) / e;
            this._z = (i + c) / e;
        } else if (o > u) {
            let e = 2 * Math.sqrt(1 + o - n - u);
            this._w = (i - c) / e;
            this._x = (r + a) / e;
            this._y = 0.25 * e;
            this._z = (s + l) / e;
        } else {
            let e = 2 * Math.sqrt(1 + u - n - o);
            this._w = (a - r) / e;
            this._x = (i + c) / e;
            this._y = (s + l) / e;
            this._z = 0.25 * e;
        }
        this._onChangeCallback();
        return this;
    }
    setFromUnitVectors(e, t) {
        let n = e.dot(t) + 1;
        if (n < 1e-8) {
            n = 0;
            if (Math.abs(e.x) > Math.abs(e.z)) {
                this._x = -e.y;
                this._y = e.x;
                this._z = 0;
                this._w = n;
            } else {
                this._x = 0;
                this._y = -e.z;
                this._z = e.y;
                this._w = n;
            }
        } else {
            this._x = e.y * t.z - e.z * t.y;
            this._y = e.z * t.x - e.x * t.z;
            this._z = e.x * t.y - e.y * t.x;
            this._w = n;
        }
        return this.normalize();
    }
    angleTo(e) {
        return 2 * Math.acos(Math.abs(P(this.dot(e), -1, 1)));
    }
    rotateTowards(e, t) {
        let n = this.angleTo(e);
        if (n === 0) {
            return this;
        }
        let r = Math.min(1, t / n);
        this.slerp(e, r);
        return this;
    }
    identity() {
        return this.set(0, 0, 0, 1);
    }
    invert() {
        return this.conjugate();
    }
    conjugate() {
        this._x *= -1;
        this._y *= -1;
        this._z *= -1;
        this._onChangeCallback();
        return this;
    }
    dot(e) {
        return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
    }
    lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
        let e = this.length();
        if (e === 0) {
            this._x = 0;
            this._y = 0;
            this._z = 0;
            this._w = 1;
        } else {
            e = 1 / e;
            this._x *= e;
            this._y *= e;
            this._z *= e;
            this._w *= e;
        }
        this._onChangeCallback();
        return this;
    }
    multiply(e) {
        return this.multiplyQuaternions(this, e);
    }
    premultiply(e) {
        return this.multiplyQuaternions(e, this);
    }
    multiplyQuaternions({ _x, _y, _z, _w }, t) {
        let o = t._x;
        let s = t._y;
        let c = t._z;
        let l = t._w;
        this._x = _x * l + _w * o + _y * c - _z * s;
        this._y = _y * l + _w * s + _z * o - _x * c;
        this._z = _z * l + _w * c + _x * s - _y * o;
        this._w = _w * l - _x * o - _y * s - _z * c;
        this._onChangeCallback();
        return this;
    }
    slerp(e, t) {
        let n = e._x;
        let r = e._y;
        let i = e._z;
        let a = e._w;
        let o = this.dot(e);
        if (o < 0) {
            n = -n;
            r = -r;
            i = -i;
            a = -a;
            o = -o;
        }
        let s = 1 - t;
        if (o < 0.9995) {
            let e = Math.acos(o);
            let c = Math.sin(e);
            s = Math.sin(s * e) / c;
            t = Math.sin(t * e) / c;
            this._x = this._x * s + n * t;
            this._y = this._y * s + r * t;
            this._z = this._z * s + i * t;
            this._w = this._w * s + a * t;
            this._onChangeCallback();
        } else {
            this._x = this._x * s + n * t;
            this._y = this._y * s + r * t;
            this._z = this._z * s + i * t;
            this._w = this._w * s + a * t;
            this.normalize();
        }
        return this;
    }
    slerpQuaternions(e, t, n) {
        return this.copy(e).slerp(t, n);
    }
    random() {
        let e = 2 * Math.PI * Math.random();
        let t = 2 * Math.PI * Math.random();
        let n = Math.random();
        let r = Math.sqrt(1 - n);
        let i = Math.sqrt(n);
        return this.set(r * Math.sin(e), r * Math.cos(e), i * Math.sin(t), i * Math.cos(t));
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
    }
    fromArray(e, t = 0) {
        this._x = e[t];
        this._y = e[t + 1];
        this._z = e[t + 2];
        this._w = e[t + 3];
        this._onChangeCallback();
        return this;
    }
    toArray(e = [], t = 0) {
        e[t] = this._x;
        e[t + 1] = this._y;
        e[t + 2] = this._z;
        e[t + 3] = this._w;
        return e;
    }
    fromBufferAttribute(e, t) {
        this._x = e.getX(t);
        this._y = e.getY(t);
        this._z = e.getZ(t);
        this._w = e.getW(t);
        this._onChangeCallback();
        return this;
    }
    toJSON() {
        return this.toArray();
    }
    _onChange(e) {
        this._onChangeCallback = e;
        return this;
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x;
        yield this._y;
        yield this._z;
        yield this._w;
    }
}
const L = class e {
    static{
        e.prototype.isVector3 = true;
    }
    constructor(e = 0, t = 0, n = 0){
        this.x = e;
        this.y = t;
        this.z = n;
    }
    set(e, t, n = this.z) {
        this.x = e;
        this.y = t;
        this.z = n;
        return this;
    }
    setScalar(e) {
        this.x = e;
        this.y = e;
        this.z = e;
        return this;
    }
    setX(e) {
        this.x = e;
        return this;
    }
    setY(e) {
        this.y = e;
        return this;
    }
    setZ(e) {
        this.z = e;
        return this;
    }
    setComponent(e, t) {
        switch(e){
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            default:
                throw Error(`THREE.Vector3: index is out of range: ` + e);
        }
        return this;
    }
    getComponent(e) {
        switch(e){
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw Error(`THREE.Vector3: index is out of range: ` + e);
        }
    }
    clone() {
        return new this.constructor(this.x, this.y, this.z);
    }
    copy(e) {
        this.x = e.x;
        this.y = e.y;
        this.z = e.z;
        return this;
    }
    add(e) {
        this.x += e.x;
        this.y += e.y;
        this.z += e.z;
        return this;
    }
    addScalar(e) {
        this.x += e;
        this.y += e;
        this.z += e;
        return this;
    }
    addVectors(e, t) {
        this.x = e.x + t.x;
        this.y = e.y + t.y;
        this.z = e.z + t.z;
        return this;
    }
    addScaledVector(e, t) {
        this.x += e.x * t;
        this.y += e.y * t;
        this.z += e.z * t;
        return this;
    }
    sub(e) {
        this.x -= e.x;
        this.y -= e.y;
        this.z -= e.z;
        return this;
    }
    subScalar(e) {
        this.x -= e;
        this.y -= e;
        this.z -= e;
        return this;
    }
    subVectors(e, t) {
        this.x = e.x - t.x;
        this.y = e.y - t.y;
        this.z = e.z - t.z;
        return this;
    }
    multiply(e) {
        this.x *= e.x;
        this.y *= e.y;
        this.z *= e.z;
        return this;
    }
    multiplyScalar(e) {
        this.x *= e;
        this.y *= e;
        this.z *= e;
        return this;
    }
    multiplyVectors(e, t) {
        this.x = e.x * t.x;
        this.y = e.y * t.y;
        this.z = e.z * t.z;
        return this;
    }
    applyEuler(e) {
        return this.applyQuaternion(_t.setFromEuler(e));
    }
    applyAxisAngle(e, t) {
        return this.applyQuaternion(_t.setFromAxisAngle(e, t));
    }
    applyMatrix3(e) {
        let t = this.x;
        let n = this.y;
        let r = this.z;
        let e_elements = e.elements;
        this.x = e_elements[0] * t + e_elements[3] * n + e_elements[6] * r;
        this.y = e_elements[1] * t + e_elements[4] * n + e_elements[7] * r;
        this.z = e_elements[2] * t + e_elements[5] * n + e_elements[8] * r;
        return this;
    }
    applyNormalMatrix(e) {
        return this.applyMatrix3(e).normalize();
    }
    applyMatrix4(e) {
        let t = this.x;
        let n = this.y;
        let r = this.z;
        let e_elements = e.elements;
        let a = 1 / (e_elements[3] * t + e_elements[7] * n + e_elements[11] * r + e_elements[15]);
        this.x = (e_elements[0] * t + e_elements[4] * n + e_elements[8] * r + e_elements[12]) * a;
        this.y = (e_elements[1] * t + e_elements[5] * n + e_elements[9] * r + e_elements[13]) * a;
        this.z = (e_elements[2] * t + e_elements[6] * n + e_elements[10] * r + e_elements[14]) * a;
        return this;
    }
    applyQuaternion(e) {
        let t = this.x;
        let n = this.y;
        let r = this.z;
        let i = e.x;
        let a = e.y;
        let o = e.z;
        let s = e.w;
        let c = 2 * (a * r - o * n);
        let l = 2 * (o * t - i * r);
        let u = 2 * (i * n - a * t);
        this.x = t + s * c + a * u - o * l;
        this.y = n + s * l + o * c - i * u;
        this.z = r + s * u + i * l - a * c;
        return this;
    }
    project(e) {
        return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
    }
    unproject(e) {
        return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
    }
    transformDirection(e) {
        let t = this.x;
        let n = this.y;
        let r = this.z;
        let e_elements = e.elements;
        this.x = e_elements[0] * t + e_elements[4] * n + e_elements[8] * r;
        this.y = e_elements[1] * t + e_elements[5] * n + e_elements[9] * r;
        this.z = e_elements[2] * t + e_elements[6] * n + e_elements[10] * r;
        return this.normalize();
    }
    divide(e) {
        this.x /= e.x;
        this.y /= e.y;
        this.z /= e.z;
        return this;
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e);
    }
    min(e) {
        this.x = Math.min(this.x, e.x);
        this.y = Math.min(this.y, e.y);
        this.z = Math.min(this.z, e.z);
        return this;
    }
    max(e) {
        this.x = Math.max(this.x, e.x);
        this.y = Math.max(this.y, e.y);
        this.z = Math.max(this.z, e.z);
        return this;
    }
    clamp(e, t) {
        this.x = P(this.x, e.x, t.x);
        this.y = P(this.y, e.y, t.y);
        this.z = P(this.z, e.z, t.z);
        return this;
    }
    clampScalar(e, t) {
        this.x = P(this.x, e, t);
        this.y = P(this.y, e, t);
        this.z = P(this.z, e, t);
        return this;
    }
    clampLength(e, t) {
        let n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(P(n, e, t));
    }
    floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        return this;
    }
    ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        return this;
    }
    round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        return this;
    }
    roundToZero() {
        this.x = Math.trunc(this.x);
        this.y = Math.trunc(this.y);
        this.z = Math.trunc(this.z);
        return this;
    }
    negate() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z;
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
        return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
        this.x += (e.x - this.x) * t;
        this.y += (e.y - this.y) * t;
        this.z += (e.z - this.z) * t;
        return this;
    }
    lerpVectors(e, t, n) {
        this.x = e.x + (t.x - e.x) * n;
        this.y = e.y + (t.y - e.y) * n;
        this.z = e.z + (t.z - e.z) * n;
        return this;
    }
    cross(e) {
        return this.crossVectors(this, e);
    }
    crossVectors({ x, y, z }, t) {
        let a = t.x;
        let o = t.y;
        let s = t.z;
        this.x = y * s - z * o;
        this.y = z * a - x * s;
        this.z = x * o - y * a;
        return this;
    }
    projectOnVector(e) {
        let t = e.lengthSq();
        if (t === 0) {
            return this.set(0, 0, 0);
        }
        let n = e.dot(this) / t;
        return this.copy(e).multiplyScalar(n);
    }
    projectOnPlane(e) {
        gt.copy(this).projectOnVector(e);
        return this.sub(gt);
    }
    reflect(e) {
        return this.sub(gt.copy(e).multiplyScalar(2 * this.dot(e)));
    }
    angleTo(e) {
        let t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (t === 0) {
            return Math.PI / 2;
        }
        let n = this.dot(e) / t;
        return Math.acos(P(n, -1, 1));
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
        let t = this.x - e.x;
        let n = this.y - e.y;
        let r = this.z - e.z;
        return t * t + n * n + r * r;
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
    }
    setFromSpherical(e) {
        return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
    }
    setFromSphericalCoords(e, t, n) {
        let r = Math.sin(t) * e;
        this.x = r * Math.sin(n);
        this.y = Math.cos(t) * e;
        this.z = r * Math.cos(n);
        return this;
    }
    setFromCylindrical(e) {
        return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
    }
    setFromCylindricalCoords(e, t, n) {
        this.x = e * Math.sin(t);
        this.y = n;
        this.z = e * Math.cos(t);
        return this;
    }
    setFromMatrixPosition({ elements }) {
        this.x = elements[12];
        this.y = elements[13];
        this.z = elements[14];
        return this;
    }
    setFromMatrixScale(e) {
        let t = this.setFromMatrixColumn(e, 0).length();
        let n = this.setFromMatrixColumn(e, 1).length();
        let r = this.setFromMatrixColumn(e, 2).length();
        this.x = t;
        this.y = n;
        this.z = r;
        return this;
    }
    setFromMatrixColumn(e, t) {
        return this.fromArray(e.elements, t * 4);
    }
    setFromMatrix3Column(e, t) {
        return this.fromArray(e.elements, t * 3);
    }
    setFromEuler(e) {
        this.x = e._x;
        this.y = e._y;
        this.z = e._z;
        return this;
    }
    setFromColor(e) {
        this.x = e.r;
        this.y = e.g;
        this.z = e.b;
        return this;
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z;
    }
    fromArray(e, t = 0) {
        this.x = e[t];
        this.y = e[t + 1];
        this.z = e[t + 2];
        return this;
    }
    toArray(e = [], t = 0) {
        e[t] = this.x;
        e[t + 1] = this.y;
        e[t + 2] = this.z;
        return e;
    }
    fromBufferAttribute(e, t) {
        this.x = e.getX(t);
        this.y = e.getY(t);
        this.z = e.getZ(t);
        return this;
    }
    random() {
        this.x = Math.random();
        this.y = Math.random();
        this.z = Math.random();
        return this;
    }
    randomDirection() {
        let e = Math.random() * Math.PI * 2;
        let t = Math.random() * 2 - 1;
        let n = Math.sqrt(1 - t * t);
        this.x = n * Math.cos(e);
        this.y = t;
        this.z = n * Math.sin(e);
        return this;
    }
    *[Symbol.iterator]() {
        yield this.x;
        yield this.y;
        yield this.z;
    }
};
var gt = new L;
var _t = new ht;
const vt = class e {
    static{
        e.prototype.isMatrix3 = true;
    }
    constructor(e, t, n, r, i, a, o, s, c){
        this.elements = [
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1
        ];
        if (e !== undefined) {
            this.set(e, t, n, r, i, a, o, s, c);
        }
    }
    set(e, t, n, r, i, a, o, s, c) {
        let elements = this.elements;
        elements[0] = e;
        elements[1] = r;
        elements[2] = o;
        elements[3] = t;
        elements[4] = i;
        elements[5] = s;
        elements[6] = n;
        elements[7] = a;
        elements[8] = c;
        return this;
    }
    identity() {
        this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
        return this;
    }
    copy(e) {
        let elements = this.elements;
        let e_elements = e.elements;
        elements[0] = e_elements[0];
        elements[1] = e_elements[1];
        elements[2] = e_elements[2];
        elements[3] = e_elements[3];
        elements[4] = e_elements[4];
        elements[5] = e_elements[5];
        elements[6] = e_elements[6];
        elements[7] = e_elements[7];
        elements[8] = e_elements[8];
        return this;
    }
    extractBasis(e, t, n) {
        e.setFromMatrix3Column(this, 0);
        t.setFromMatrix3Column(this, 1);
        n.setFromMatrix3Column(this, 2);
        return this;
    }
    setFromMatrix4({ elements }) {
        this.set(elements[0], elements[4], elements[8], elements[1], elements[5], elements[9], elements[2], elements[6], elements[10]);
        return this;
    }
    multiply(e) {
        return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this);
    }
    multiplyMatrices({ elements }, t) {
        let t_elements = t.elements;
        let elements_1 = this.elements;
        let a = elements[0];
        let o = elements[3];
        let s = elements[6];
        let c = elements[1];
        let l = elements[4];
        let u = elements[7];
        let d = elements[2];
        let f = elements[5];
        let p = elements[8];
        let m = t_elements[0];
        let h = t_elements[3];
        let g = t_elements[6];
        let _ = t_elements[1];
        let v = t_elements[4];
        let y = t_elements[7];
        let b = t_elements[2];
        let x = t_elements[5];
        let S = t_elements[8];
        elements_1[0] = a * m + o * _ + s * b;
        elements_1[3] = a * h + o * v + s * x;
        elements_1[6] = a * g + o * y + s * S;
        elements_1[1] = c * m + l * _ + u * b;
        elements_1[4] = c * h + l * v + u * x;
        elements_1[7] = c * g + l * y + u * S;
        elements_1[2] = d * m + f * _ + p * b;
        elements_1[5] = d * h + f * v + p * x;
        elements_1[8] = d * g + f * y + p * S;
        return this;
    }
    multiplyScalar(e) {
        let elements = this.elements;
        elements[0] *= e;
        elements[3] *= e;
        elements[6] *= e;
        elements[1] *= e;
        elements[4] *= e;
        elements[7] *= e;
        elements[2] *= e;
        elements[5] *= e;
        elements[8] *= e;
        return this;
    }
    determinant() {
        let elements = this.elements;
        let t = elements[0];
        let n = elements[1];
        let r = elements[2];
        let i = elements[3];
        let a = elements[4];
        let o = elements[5];
        let s = elements[6];
        let c = elements[7];
        let l = elements[8];
        return t * a * l - t * o * c - n * i * l + n * o * s + r * i * c - r * a * s;
    }
    invert() {
        let elements = this.elements;
        let t = elements[0];
        let n = elements[1];
        let r = elements[2];
        let i = elements[3];
        let a = elements[4];
        let o = elements[5];
        let s = elements[6];
        let c = elements[7];
        let l = elements[8];
        let u = l * a - o * c;
        let d = o * s - l * i;
        let f = c * i - a * s;
        let p = t * u + n * d + r * f;
        if (p === 0) {
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
        let m = 1 / p;
        elements[0] = u * m;
        elements[1] = (r * c - l * n) * m;
        elements[2] = (o * n - r * a) * m;
        elements[3] = d * m;
        elements[4] = (l * t - r * s) * m;
        elements[5] = (r * i - o * t) * m;
        elements[6] = f * m;
        elements[7] = (n * s - c * t) * m;
        elements[8] = (a * t - n * i) * m;
        return this;
    }
    transpose() {
        let e;
        let elements = this.elements;
        e = elements[1];
        elements[1] = elements[3];
        elements[3] = e;
        e = elements[2];
        elements[2] = elements[6];
        elements[6] = e;
        e = elements[5];
        elements[5] = elements[7];
        elements[7] = e;
        return this;
    }
    getNormalMatrix(e) {
        return this.setFromMatrix4(e).invert().transpose();
    }
    transposeIntoArray(e) {
        let elements = this.elements;
        e[0] = elements[0];
        e[1] = elements[3];
        e[2] = elements[6];
        e[3] = elements[1];
        e[4] = elements[4];
        e[5] = elements[7];
        e[6] = elements[2];
        e[7] = elements[5];
        e[8] = elements[8];
        return this;
    }
    setUvTransform(e, t, n, r, i, a, o) {
        let s = Math.cos(i);
        let c = Math.sin(i);
        this.set(n * s, n * c, -n * (s * a + c * o) + a + e, -r * c, r * s, -r * (-c * a + s * o) + o + t, 0, 0, 1);
        return this;
    }
    scale(e, t) {
        it(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`);
        this.premultiply(yt.makeScale(e, t));
        return this;
    }
    rotate(e) {
        it(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`);
        this.premultiply(yt.makeRotation(-e));
        return this;
    }
    translate(e, t) {
        it(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`);
        this.premultiply(yt.makeTranslation(e, t));
        return this;
    }
    makeTranslation(e, t) {
        if (e.isVector2) {
            this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1);
        } else {
            this.set(1, 0, e, 0, 1, t, 0, 0, 1);
        }
        return this;
    }
    makeRotation(e) {
        let t = Math.cos(e);
        let n = Math.sin(e);
        this.set(t, -n, 0, n, t, 0, 0, 0, 1);
        return this;
    }
    makeScale(e, t) {
        this.set(e, 0, 0, 0, t, 0, 0, 0, 1);
        return this;
    }
    equals(e) {
        let elements = this.elements;
        let e_elements = e.elements;
        for(let e = 0; e < 9; e++){
            if (elements[e] !== e_elements[e]) {
                return false;
            }
        }
        return true;
    }
    fromArray(e, t = 0) {
        for(let n = 0; n < 9; n++){
            this.elements[n] = e[n + t];
        }
        return this;
    }
    toArray(e = [], t = 0) {
        let elements = this.elements;
        e[t] = elements[0];
        e[t + 1] = elements[1];
        e[t + 2] = elements[2];
        e[t + 3] = elements[3];
        e[t + 4] = elements[4];
        e[t + 5] = elements[5];
        e[t + 6] = elements[6];
        e[t + 7] = elements[7];
        e[t + 8] = elements[8];
        return e;
    }
    clone() {
        return new this.constructor().fromArray(this.elements);
    }
};
var yt = new vt;
const toXYZ = new vt().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322);
const fromXYZ = new vt().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function St() {
    let e = {
        enabled: true,
        workingColorSpace,
        spaces: {},
        convert: function(e, t, n) {
            if (!(this.enabled === false || t === n || !t || !n)) {
                if (this.spaces[t].transfer === `srgb`) {
                    e.r = wt(e.r);
                    e.g = wt(e.g);
                    e.b = wt(e.b);
                }
                if (this.spaces[t].primaries !== this.spaces[n].primaries) {
                    e.applyMatrix3(this.spaces[t].toXYZ);
                    e.applyMatrix3(this.spaces[n].fromXYZ);
                }
                if (this.spaces[n].transfer === `srgb`) {
                    e.r = Tt(e.r);
                    e.g = Tt(e.g);
                    e.b = Tt(e.b);
                }
            }
            return e;
        },
        workingToColorSpace: function(e, t) {
            return this.convert(e, this.workingColorSpace, t);
        },
        colorSpaceToWorking: function(e, t) {
            return this.convert(e, t, this.workingColorSpace);
        },
        getPrimaries: function(e) {
            return this.spaces[e].primaries;
        },
        getTransfer: function(e) {
            if (e === ``) {
                return Ge;
            }
            return this.spaces[e].transfer;
        },
        getToneMappingMode: function(e) {
            return this.spaces[e].outputColorSpaceConfig.toneMappingMode || `standard`;
        },
        getLuminanceCoefficients: function(e, t = this.workingColorSpace) {
            return e.fromArray(this.spaces[t].luminanceCoefficients);
        },
        define: function(e) {
            Object.assign(this.spaces, e);
        },
        _getMatrix: function(e, t, n) {
            return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ);
        },
        _getDrawingBufferColorSpace: function(e) {
            return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
        },
        _getUnpackColorSpace: function(e = this.workingColorSpace) {
            return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
        },
        fromWorkingColorSpace: function(t, n) {
            it(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`);
            return e.workingToColorSpace(t, n);
        },
        toWorkingColorSpace: function(t, n) {
            it(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`);
            return e.colorSpaceToWorking(t, n);
        }
    };
    let primaries = [
        0.64,
        0.33,
        0.3,
        0.6,
        0.15,
        0.06
    ];
    let luminanceCoefficients = [
        0.2126,
        0.7152,
        0.0722
    ];
    let whitePoint = [
        0.3127,
        0.329
    ];
    e.define({
        [workingColorSpace]: {
            primaries,
            whitePoint,
            transfer: Ge,
            toXYZ,
            fromXYZ,
            luminanceCoefficients,
            workingColorSpaceConfig: {
                unpackColorSpace: Ue
            },
            outputColorSpaceConfig: {
                drawingBufferColorSpace: Ue
            }
        },
        [Ue]: {
            primaries,
            whitePoint,
            transfer: Ke,
            toXYZ,
            fromXYZ,
            luminanceCoefficients,
            outputColorSpaceConfig: {
                drawingBufferColorSpace: Ue
            }
        }
    });
    return e;
}
const Ct = St();
function wt(e) {
    if (e < 0.04045) {
        return e * 0.0773993808;
    }
    return (e * 0.9478672986 + 0.0521327014) ** 2.4;
}
function Tt(e) {
    if (e < 0.0031308) {
        return e * 12.92;
    }
    return 1.055 * e ** 0.41666 - 0.055;
}
let Et;
class Dt {
    static getDataURL(e, t = `image/png`) {
        if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > `u`) {
            return e.src;
        }
        let n;
        if (e instanceof HTMLCanvasElement) {
            n = e;
        } else {
            if (Et === undefined) {
                Et = $e(`canvas`);
            }
            Et.width = e.width;
            Et.height = e.height;
            let t = Et.getContext(`2d`);
            if (e instanceof ImageData) {
                t.putImageData(e, 0, 0);
            } else {
                t.drawImage(e, 0, 0, e.width, e.height);
            }
            n = Et;
        }
        return n.toDataURL(t);
    }
    static sRGBToLinear(e) {
        if (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement || typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement || typeof ImageBitmap < `u` && e instanceof ImageBitmap) {
            let t = $e(`canvas`);
            t.width = e.width;
            t.height = e.height;
            let n = t.getContext(`2d`);
            n.drawImage(e, 0, 0, e.width, e.height);
            let r = n.getImageData(0, 0, e.width, e.height);
            let i = r.data;
            for(let e = 0; e < i.length; e++){
                i[e] = wt(i[e] / 255) * 255;
            }
            n.putImageData(r, 0, 0);
            return t;
        }
        if (e.data) {
            let t = e.data.slice(0);
            for(let e = 0; e < t.length; e++){
                if (t instanceof Uint8Array || t instanceof Uint8ClampedArray) {
                    t[e] = Math.floor(wt(t[e] / 255) * 255);
                } else {
                    t[e] = wt(t[e]);
                }
            }
            return {
                data: t,
                width: e.width,
                height: e.height
            };
        }
        M(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`);
        return e;
    }
}
let Ot = 0;
class kt {
    constructor(e = null){
        this.isTextureSource = true;
        Object.defineProperty(this, "id", {
            value: Ot++
        });
        this.uuid = dt();
        this.data = e;
        this.dataReady = true;
        this.version = 0;
    }
    getSize(e) {
        let data = this.data;
        if (typeof HTMLVideoElement < `u` && data instanceof HTMLVideoElement) {
            e.set(data.videoWidth, data.videoHeight, 0);
        } else if (typeof VideoFrame < `u` && data instanceof VideoFrame) {
            e.set(data.displayWidth, data.displayHeight, 0);
        } else if (data === null) {
            e.set(0, 0, 0);
        } else {
            e.set(data.width, data.height, data.depth || 0);
        }
        return e;
    }
    set needsUpdate(e) {
        if (e === true) {
            this.version++;
        }
    }
    toJSON(e) {
        let t = e === undefined || typeof e == `string`;
        if (!t && e.images[this.uuid] !== undefined) {
            return e.images[this.uuid];
        }
        let n = {
            uuid: this.uuid,
            url: ``
        };
        let data = this.data;
        if (data !== null) {
            let e;
            if (Array.isArray(data)) {
                e = [];
                for(let t = 0, n = data.length; t < n; t++){
                    if (data[t].isDataTexture) {
                        e.push(At(data[t].image));
                    } else {
                        e.push(At(data[t]));
                    }
                }
            } else {
                e = At(data);
            }
            n.url = e;
        }
        if (!t) {
            e.images[this.uuid] = n;
        }
        return n;
    }
}
function At(e) {
    if (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement || typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement || typeof ImageBitmap < `u` && e instanceof ImageBitmap) {
        return Dt.getDataURL(e);
    }
    if (e.data) {
        return {
            data: Array.from(e.data),
            width: e.width,
            height: e.height,
            type: e.data.constructor.name
        };
    }
    M(`Texture: Unable to serialize Texture.`);
    return {};
}
let jt = 0;
const Mt = new L;
const Nt = class r extends st {
    constructor(e = r.DEFAULT_IMAGE, n = r.DEFAULT_MAPPING, i = t, a = t, s = minFilter, u = c, d = w, f = l, p = r.DEFAULT_ANISOTROPY, m = ``){
        super();
        this.isTexture = true;
        Object.defineProperty(this, "id", {
            value: jt++
        });
        this.uuid = dt();
        this.name = ``;
        this.source = new kt(e);
        this.mipmaps = [];
        this.mapping = n;
        this.channel = 0;
        this.wrapS = i;
        this.wrapT = a;
        this.magFilter = s;
        this.minFilter = u;
        this.anisotropy = p;
        this.format = d;
        this.internalFormat = null;
        this.type = f;
        this.offset = new I(0, 0);
        this.repeat = new I(1, 1);
        this.center = new I(0, 0);
        this.rotation = 0;
        this.matrixAutoUpdate = true;
        this.matrix = new vt;
        this.generateMipmaps = true;
        this.premultiplyAlpha = false;
        this.flipY = true;
        this.unpackAlignment = 4;
        this.colorSpace = m;
        this.userData = {};
        this.updateRanges = [];
        this.version = 0;
        this.onUpdate = null;
        this.renderTarget = null;
        this.isRenderTargetTexture = false;
        this.isArrayTexture = !!(e && e.depth && e.depth > 1);
        this.pmremVersion = 0;
        this.normalized = false;
    }
    get width() {
        return this.source.getSize(Mt).x;
    }
    get height() {
        return this.source.getSize(Mt).y;
    }
    get depth() {
        return this.source.getSize(Mt).z;
    }
    get image() {
        return this.source.data;
    }
    set image(e) {
        this.source.data = e;
    }
    updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    addUpdateRange(e, t) {
        this.updateRanges.push({
            start: e,
            count: t
        });
    }
    clearUpdateRanges() {
        this.updateRanges.length = 0;
    }
    clone() {
        return new this.constructor().copy(this);
    }
    copy(e) {
        this.name = e.name;
        this.source = e.source;
        this.mipmaps = e.mipmaps.slice(0);
        this.mapping = e.mapping;
        this.channel = e.channel;
        this.wrapS = e.wrapS;
        this.wrapT = e.wrapT;
        this.magFilter = e.magFilter;
        this.minFilter = e.minFilter;
        this.anisotropy = e.anisotropy;
        this.format = e.format;
        this.internalFormat = e.internalFormat;
        this.type = e.type;
        this.normalized = e.normalized;
        this.offset.copy(e.offset);
        this.repeat.copy(e.repeat);
        this.center.copy(e.center);
        this.rotation = e.rotation;
        this.matrixAutoUpdate = e.matrixAutoUpdate;
        this.matrix.copy(e.matrix);
        this.generateMipmaps = e.generateMipmaps;
        this.premultiplyAlpha = e.premultiplyAlpha;
        this.flipY = e.flipY;
        this.unpackAlignment = e.unpackAlignment;
        this.colorSpace = e.colorSpace;
        this.renderTarget = e.renderTarget;
        this.isRenderTargetTexture = e.isRenderTargetTexture;
        this.isArrayTexture = e.isArrayTexture;
        this.userData = JSON.parse(JSON.stringify(e.userData));
        this.needsUpdate = true;
        return this;
    }
    setValues(e) {
        for(let t in e){
            let n = e[t];
            if (n === undefined) {
                M(`Texture.setValues(): parameter '${t}' has value of undefined.`);
                continue;
            }
            let r = this[t];
            if (r === undefined) {
                M(`Texture.setValues(): property '${t}' does not exist.`);
            } else if (r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3) {
                r.copy(n);
            } else {
                this[t] = n;
            }
        }
    }
    toJSON(e) {
        let t = e === undefined || typeof e == `string`;
        if (!t && e.textures[this.uuid] !== undefined) {
            return e.textures[this.uuid];
        }
        let n = {
            metadata: {
                version: 4.7,
                type: `Texture`,
                generator: `Texture.toJSON`
            },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(e).uuid,
            mapping: this.mapping,
            channel: this.channel,
            repeat: [
                this.repeat.x,
                this.repeat.y
            ],
            offset: [
                this.offset.x,
                this.offset.y
            ],
            center: [
                this.center.x,
                this.center.y
            ],
            rotation: this.rotation,
            wrap: [
                this.wrapS,
                this.wrapT
            ],
            format: this.format,
            internalFormat: this.internalFormat,
            type: this.type,
            normalized: this.normalized,
            colorSpace: this.colorSpace,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            generateMipmaps: this.generateMipmaps,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
        };
        if (Object.keys(this.userData).length > 0) {
            n.userData = this.userData;
        }
        if (!t) {
            e.textures[this.uuid] = n;
        }
        return n;
    }
    dispose() {
        this.dispatchEvent({
            type: `dispose`
        });
    }
    transformUv(r) {
        if (this.mapping !== 300) {
            return r;
        }
        r.applyMatrix3(this.matrix);
        if (r.x < 0 || r.x > 1) {
            switch(this.wrapS){
                case e:
                    r.x -= Math.floor(r.x);
                    break;
                case t:
                    r.x = r.x < 0 ? 0 : 1;
                    break;
                case n:
                    if (Math.abs(Math.floor(r.x) % 2) === 1) {
                        r.x = Math.ceil(r.x) - r.x;
                    } else {
                        r.x -= Math.floor(r.x);
                    }
            }
        }
        if (r.y < 0 || r.y > 1) {
            switch(this.wrapT){
                case e:
                    r.y -= Math.floor(r.y);
                    break;
                case t:
                    r.y = r.y < 0 ? 0 : 1;
                    break;
                case n:
                    if (Math.abs(Math.floor(r.y) % 2) === 1) {
                        r.y = Math.ceil(r.y) - r.y;
                    } else {
                        r.y -= Math.floor(r.y);
                    }
            }
        }
        if (this.flipY) {
            r.y = 1 - r.y;
        }
        return r;
    }
    set needsUpdate(e) {
        if (e === true) {
            this.version++;
            this.source.needsUpdate = true;
        }
    }
    set needsPMREMUpdate(e) {
        if (e === true) {
            this.pmremVersion++;
        }
    }
};
Nt.DEFAULT_IMAGE = null;
Nt.DEFAULT_MAPPING = 300;
Nt.DEFAULT_ANISOTROPY = 1;
const Pt = class e {
    static{
        e.prototype.isVector4 = true;
    }
    constructor(e = 0, t = 0, n = 0, r = 1){
        this.x = e;
        this.y = t;
        this.z = n;
        this.w = r;
    }
    get width() {
        return this.z;
    }
    set width(e) {
        this.z = e;
    }
    get height() {
        return this.w;
    }
    set height(e) {
        this.w = e;
    }
    set(e, t, n, r) {
        this.x = e;
        this.y = t;
        this.z = n;
        this.w = r;
        return this;
    }
    setScalar(e) {
        this.x = e;
        this.y = e;
        this.z = e;
        this.w = e;
        return this;
    }
    setX(e) {
        this.x = e;
        return this;
    }
    setY(e) {
        this.y = e;
        return this;
    }
    setZ(e) {
        this.z = e;
        return this;
    }
    setW(e) {
        this.w = e;
        return this;
    }
    setComponent(e, t) {
        switch(e){
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            case 3:
                this.w = t;
                break;
            default:
                throw Error(`THREE.Vector4: index is out of range: ` + e);
        }
        return this;
    }
    getComponent(e) {
        switch(e){
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw Error(`THREE.Vector4: index is out of range: ` + e);
        }
    }
    clone() {
        return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(e) {
        this.x = e.x;
        this.y = e.y;
        this.z = e.z;
        this.w = e.w === undefined ? 1 : e.w;
        return this;
    }
    add(e) {
        this.x += e.x;
        this.y += e.y;
        this.z += e.z;
        this.w += e.w;
        return this;
    }
    addScalar(e) {
        this.x += e;
        this.y += e;
        this.z += e;
        this.w += e;
        return this;
    }
    addVectors(e, t) {
        this.x = e.x + t.x;
        this.y = e.y + t.y;
        this.z = e.z + t.z;
        this.w = e.w + t.w;
        return this;
    }
    addScaledVector(e, t) {
        this.x += e.x * t;
        this.y += e.y * t;
        this.z += e.z * t;
        this.w += e.w * t;
        return this;
    }
    sub(e) {
        this.x -= e.x;
        this.y -= e.y;
        this.z -= e.z;
        this.w -= e.w;
        return this;
    }
    subScalar(e) {
        this.x -= e;
        this.y -= e;
        this.z -= e;
        this.w -= e;
        return this;
    }
    subVectors(e, t) {
        this.x = e.x - t.x;
        this.y = e.y - t.y;
        this.z = e.z - t.z;
        this.w = e.w - t.w;
        return this;
    }
    multiply(e) {
        this.x *= e.x;
        this.y *= e.y;
        this.z *= e.z;
        this.w *= e.w;
        return this;
    }
    multiplyScalar(e) {
        this.x *= e;
        this.y *= e;
        this.z *= e;
        this.w *= e;
        return this;
    }
    applyMatrix4(e) {
        let t = this.x;
        let n = this.y;
        let r = this.z;
        let i = this.w;
        let e_elements = e.elements;
        this.x = e_elements[0] * t + e_elements[4] * n + e_elements[8] * r + e_elements[12] * i;
        this.y = e_elements[1] * t + e_elements[5] * n + e_elements[9] * r + e_elements[13] * i;
        this.z = e_elements[2] * t + e_elements[6] * n + e_elements[10] * r + e_elements[14] * i;
        this.w = e_elements[3] * t + e_elements[7] * n + e_elements[11] * r + e_elements[15] * i;
        return this;
    }
    divide(e) {
        this.x /= e.x;
        this.y /= e.y;
        this.z /= e.z;
        this.w /= e.w;
        return this;
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e);
    }
    setAxisAngleFromQuaternion(e) {
        this.w = 2 * Math.acos(e.w);
        let t = Math.sqrt(1 - e.w * e.w);
        if (t < 0.0001) {
            this.x = 1;
            this.y = 0;
            this.z = 0;
        } else {
            this.x = e.x / t;
            this.y = e.y / t;
            this.z = e.z / t;
        }
        return this;
    }
    setAxisAngleFromRotationMatrix(e) {
        let t;
        let n;
        let r;
        let i;
        let a = 0.01;
        let o = 0.1;
        let e_elements = e.elements;
        let c = e_elements[0];
        let l = e_elements[4];
        let u = e_elements[8];
        let d = e_elements[1];
        let f = e_elements[5];
        let p = e_elements[9];
        let m = e_elements[2];
        let h = e_elements[6];
        let g = e_elements[10];
        if (Math.abs(l - d) < a && Math.abs(u - m) < a && Math.abs(p - h) < a) {
            if (Math.abs(l + d) < o && Math.abs(u + m) < o && Math.abs(p + h) < o && Math.abs(c + f + g - 3) < o) {
                this.set(1, 0, 0, 0);
                return this;
            }
            t = Math.PI;
            let e = (c + 1) / 2;
            let s = (f + 1) / 2;
            let _ = (g + 1) / 2;
            let v = (l + d) / 4;
            let y = (u + m) / 4;
            let b = (p + h) / 4;
            if (e > s && e > _) {
                if (e < a) {
                    n = 0;
                    r = 0.707106781;
                    i = 0.707106781;
                } else {
                    n = Math.sqrt(e);
                    r = v / n;
                    i = y / n;
                }
            } else if (s > _) {
                if (s < a) {
                    n = 0.707106781;
                    r = 0;
                    i = 0.707106781;
                } else {
                    r = Math.sqrt(s);
                    n = v / r;
                    i = b / r;
                }
            } else if (_ < a) {
                n = 0.707106781;
                r = 0.707106781;
                i = 0;
            } else {
                i = Math.sqrt(_);
                n = y / i;
                r = b / i;
            }
            this.set(n, r, i, t);
            return this;
        }
        let _ = Math.sqrt((h - p) * (h - p) + (u - m) * (u - m) + (d - l) * (d - l));
        if (Math.abs(_) < 0.001) {
            _ = 1;
        }
        this.x = (h - p) / _;
        this.y = (u - m) / _;
        this.z = (d - l) / _;
        this.w = Math.acos((c + f + g - 1) / 2);
        return this;
    }
    setFromMatrixPosition({ elements }) {
        this.x = elements[12];
        this.y = elements[13];
        this.z = elements[14];
        this.w = elements[15];
        return this;
    }
    min(e) {
        this.x = Math.min(this.x, e.x);
        this.y = Math.min(this.y, e.y);
        this.z = Math.min(this.z, e.z);
        this.w = Math.min(this.w, e.w);
        return this;
    }
    max(e) {
        this.x = Math.max(this.x, e.x);
        this.y = Math.max(this.y, e.y);
        this.z = Math.max(this.z, e.z);
        this.w = Math.max(this.w, e.w);
        return this;
    }
    clamp(e, t) {
        this.x = P(this.x, e.x, t.x);
        this.y = P(this.y, e.y, t.y);
        this.z = P(this.z, e.z, t.z);
        this.w = P(this.w, e.w, t.w);
        return this;
    }
    clampScalar(e, t) {
        this.x = P(this.x, e, t);
        this.y = P(this.y, e, t);
        this.z = P(this.z, e, t);
        this.w = P(this.w, e, t);
        return this;
    }
    clampLength(e, t) {
        let n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(P(n, e, t));
    }
    floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        this.w = Math.floor(this.w);
        return this;
    }
    ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        this.w = Math.ceil(this.w);
        return this;
    }
    round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        this.w = Math.round(this.w);
        return this;
    }
    roundToZero() {
        this.x = Math.trunc(this.x);
        this.y = Math.trunc(this.y);
        this.z = Math.trunc(this.z);
        this.w = Math.trunc(this.w);
        return this;
    }
    negate() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        this.w = -this.w;
        return this;
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
        return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
        this.x += (e.x - this.x) * t;
        this.y += (e.y - this.y) * t;
        this.z += (e.z - this.z) * t;
        this.w += (e.w - this.w) * t;
        return this;
    }
    lerpVectors(e, t, n) {
        this.x = e.x + (t.x - e.x) * n;
        this.y = e.y + (t.y - e.y) * n;
        this.z = e.z + (t.z - e.z) * n;
        this.w = e.w + (t.w - e.w) * n;
        return this;
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
    }
    fromArray(e, t = 0) {
        this.x = e[t];
        this.y = e[t + 1];
        this.z = e[t + 2];
        this.w = e[t + 3];
        return this;
    }
    toArray(e = [], t = 0) {
        e[t] = this.x;
        e[t + 1] = this.y;
        e[t + 2] = this.z;
        e[t + 3] = this.w;
        return e;
    }
    fromBufferAttribute(e, t) {
        this.x = e.getX(t);
        this.y = e.getY(t);
        this.z = e.getZ(t);
        this.w = e.getW(t);
        return this;
    }
    random() {
        this.x = Math.random();
        this.y = Math.random();
        this.z = Math.random();
        this.w = Math.random();
        return this;
    }
    *[Symbol.iterator]() {
        yield this.x;
        yield this.y;
        yield this.z;
        yield this.w;
    }
};
class Ft extends st {
    constructor(e = 1, t = 1, n = {}){
        super();
        n = {
            generateMipmaps: false,
            internalFormat: null,
            minFilter,
            depthBuffer: true,
            stencilBuffer: false,
            resolveColorBuffer: true,
            resolveDepthBuffer: true,
            resolveStencilBuffer: true,
            storeMultisampledColorBuffer: true,
            storeMultisampledDepthBuffer: true,
            storeMultisampledStencilBuffer: true,
            depthTexture: null,
            samples: 0,
            count: 1,
            depth: 1,
            multiview: false,
            useArrayDepthTexture: false,
            ...n
        };
        this.isRenderTarget = true;
        this.width = e;
        this.height = t;
        this.depth = n.depth;
        this.scissor = new Pt(0, 0, e, t);
        this.scissorTest = false;
        this.viewport = new Pt(0, 0, e, t);
        this.textures = [];
        let r = new Nt({
            width: e,
            height: t,
            depth: n.depth
        });
        let i = n.count;
        for(let e = 0; e < i; e++){
            this.textures[e] = r.clone();
            this.textures[e].isRenderTargetTexture = true;
            this.textures[e].renderTarget = this;
        }
        this._setTextureOptions(n);
        this.depthBuffer = n.depthBuffer;
        this.stencilBuffer = n.stencilBuffer;
        this.resolveColorBuffer = n.resolveColorBuffer;
        this.resolveDepthBuffer = n.resolveDepthBuffer;
        this.resolveStencilBuffer = n.resolveStencilBuffer;
        this.storeMultisampledColorBuffer = n.storeMultisampledColorBuffer;
        this.storeMultisampledDepthBuffer = n.storeMultisampledDepthBuffer;
        this.storeMultisampledStencilBuffer = n.storeMultisampledStencilBuffer;
        this._depthTexture = null;
        this.depthTexture = n.depthTexture;
        this.samples = n.samples;
        this.multiview = n.multiview;
        this.useArrayDepthTexture = n.useArrayDepthTexture;
    }
    _setTextureOptions(e = {}) {
        let t = {
            minFilter,
            generateMipmaps: false,
            flipY: false,
            internalFormat: null
        };
        if (e.mapping !== undefined) {
            t.mapping = e.mapping;
        }
        if (e.wrapS !== undefined) {
            t.wrapS = e.wrapS;
        }
        if (e.wrapT !== undefined) {
            t.wrapT = e.wrapT;
        }
        if (e.wrapR !== undefined) {
            t.wrapR = e.wrapR;
        }
        if (e.magFilter !== undefined) {
            t.magFilter = e.magFilter;
        }
        if (e.minFilter !== undefined) {
            t.minFilter = e.minFilter;
        }
        if (e.format !== undefined) {
            t.format = e.format;
        }
        if (e.type !== undefined) {
            t.type = e.type;
        }
        if (e.anisotropy !== undefined) {
            t.anisotropy = e.anisotropy;
        }
        if (e.colorSpace !== undefined) {
            t.colorSpace = e.colorSpace;
        }
        if (e.flipY !== undefined) {
            t.flipY = e.flipY;
        }
        if (e.generateMipmaps !== undefined) {
            t.generateMipmaps = e.generateMipmaps;
        }
        if (e.internalFormat !== undefined) {
            t.internalFormat = e.internalFormat;
        }
        for(let e = 0; e < this.textures.length; e++){
            this.textures[e].setValues(t);
        }
    }
    get texture() {
        return this.textures[0];
    }
    set texture(e) {
        this.textures[0] = e;
    }
    set depthTexture(e) {
        if (this._depthTexture !== null && this._depthTexture.renderTarget === this) {
            this._depthTexture.renderTarget = null;
        }
        if (e !== null && e.renderTarget === null) {
            e.renderTarget = this;
        }
        this._depthTexture = e;
    }
    get depthTexture() {
        return this._depthTexture;
    }
    setSize(e, t, n = 1) {
        if (this.width !== e || this.height !== t || this.depth !== n) {
            this.width = e;
            this.height = t;
            this.depth = n;
            for(let r = 0, i = this.textures.length; r < i; r++){
                this.textures[r].image.width = e;
                this.textures[r].image.height = t;
                this.textures[r].image.depth = n;
                if (this.textures[r].isData3DTexture !== true) {
                    this.textures[r].isArrayTexture = this.textures[r].image.depth > 1;
                }
            }
            this.dispose();
        }
        this.viewport.set(0, 0, e, t);
        this.scissor.set(0, 0, e, t);
    }
    clone() {
        return new this.constructor().copy(this);
    }
    copy(e) {
        this.width = e.width;
        this.height = e.height;
        this.depth = e.depth;
        this.scissor.copy(e.scissor);
        this.scissorTest = e.scissorTest;
        this.viewport.copy(e.viewport);
        this.textures.length = 0;
        for(let t = 0, n = e.textures.length; t < n; t++){
            this.textures[t] = e.textures[t].clone();
            this.textures[t].isRenderTargetTexture = true;
            this.textures[t].renderTarget = this;
            let n = {
                ...e.textures[t].image
            };
            this.textures[t].source = new kt(n);
        }
        this.depthBuffer = e.depthBuffer;
        this.stencilBuffer = e.stencilBuffer;
        this.resolveColorBuffer = e.resolveColorBuffer;
        this.resolveDepthBuffer = e.resolveDepthBuffer;
        this.resolveStencilBuffer = e.resolveStencilBuffer;
        this.storeMultisampledColorBuffer = e.storeMultisampledColorBuffer;
        this.storeMultisampledDepthBuffer = e.storeMultisampledDepthBuffer;
        this.storeMultisampledStencilBuffer = e.storeMultisampledStencilBuffer;
        if (e.depthTexture !== null) {
            if (e.depthTexture.renderTarget === e) {
                let t = e.depthTexture.clone();
                t.renderTarget = null;
                this.depthTexture = t;
            } else {
                this.depthTexture = e.depthTexture;
            }
        }
        this.samples = e.samples;
        this.multiview = e.multiview;
        this.useArrayDepthTexture = e.useArrayDepthTexture;
        return this;
    }
    dispose() {
        this.dispatchEvent({
            type: `dispose`
        });
    }
}
class It extends Ft {
    constructor(e = 1, t = 1, n = {}){
        super(e, t, n);
        this.isWebGLRenderTarget = true;
    }
}
class Lt extends Nt {
    constructor(e = null, n = 1, i = 1, a = 1){
        super(null);
        this.isDataArrayTexture = true;
        this.image = {
            data: e,
            width: n,
            height: i,
            depth: a
        };
        this.magFilter = r;
        this.minFilter = r;
        this.wrapR = t;
        this.generateMipmaps = false;
        this.flipY = false;
        this.unpackAlignment = 1;
        this.layerUpdates = new Set;
    }
    copy(e) {
        super.copy(e);
        this.wrapR = e.wrapR;
        return this;
    }
    addLayerUpdate(e) {
        this.layerUpdates.add(e);
    }
    clearLayerUpdates() {
        this.layerUpdates.clear();
    }
}
class Rt extends Nt {
    constructor(e = null, n = 1, i = 1, a = 1){
        super(null);
        this.isData3DTexture = true;
        this.image = {
            data: e,
            width: n,
            height: i,
            depth: a
        };
        this.magFilter = r;
        this.minFilter = r;
        this.wrapR = t;
        this.generateMipmaps = false;
        this.flipY = false;
        this.unpackAlignment = 1;
    }
    copy(e) {
        super.copy(e);
        this.wrapR = e.wrapR;
        return this;
    }
}
const R = class e {
    static{
        e.prototype.isMatrix4 = true;
    }
    constructor(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h){
        this.elements = [
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        ];
        if (e !== undefined) {
            this.set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h);
        }
    }
    set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
        let elements = this.elements;
        elements[0] = e;
        elements[4] = t;
        elements[8] = n;
        elements[12] = r;
        elements[1] = i;
        elements[5] = a;
        elements[9] = o;
        elements[13] = s;
        elements[2] = c;
        elements[6] = l;
        elements[10] = u;
        elements[14] = d;
        elements[3] = f;
        elements[7] = p;
        elements[11] = m;
        elements[15] = h;
        return this;
    }
    identity() {
        this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this;
    }
    clone() {
        return new e().fromArray(this.elements);
    }
    copy(e) {
        let elements = this.elements;
        let e_elements = e.elements;
        elements[0] = e_elements[0];
        elements[1] = e_elements[1];
        elements[2] = e_elements[2];
        elements[3] = e_elements[3];
        elements[4] = e_elements[4];
        elements[5] = e_elements[5];
        elements[6] = e_elements[6];
        elements[7] = e_elements[7];
        elements[8] = e_elements[8];
        elements[9] = e_elements[9];
        elements[10] = e_elements[10];
        elements[11] = e_elements[11];
        elements[12] = e_elements[12];
        elements[13] = e_elements[13];
        elements[14] = e_elements[14];
        elements[15] = e_elements[15];
        return this;
    }
    copyPosition(e) {
        let elements = this.elements;
        let e_elements = e.elements;
        elements[12] = e_elements[12];
        elements[13] = e_elements[13];
        elements[14] = e_elements[14];
        return this;
    }
    setFromMatrix3({ elements }) {
        this.set(elements[0], elements[3], elements[6], 0, elements[1], elements[4], elements[7], 0, elements[2], elements[5], elements[8], 0, 0, 0, 0, 1);
        return this;
    }
    extractBasis(e, t, n) {
        if (this.determinantAffine() === 0) {
            e.set(1, 0, 0);
            t.set(0, 1, 0);
            n.set(0, 0, 1);
            return this;
        }
        e.setFromMatrixColumn(this, 0);
        t.setFromMatrixColumn(this, 1);
        n.setFromMatrixColumn(this, 2);
        return this;
    }
    makeBasis(e, t, n) {
        this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1);
        return this;
    }
    extractRotation(e) {
        if (e.determinantAffine() === 0) {
            return this.identity();
        }
        let elements = this.elements;
        let e_elements = e.elements;
        let r = 1 / zt.setFromMatrixColumn(e, 0).length();
        let i = 1 / zt.setFromMatrixColumn(e, 1).length();
        let a = 1 / zt.setFromMatrixColumn(e, 2).length();
        elements[0] = e_elements[0] * r;
        elements[1] = e_elements[1] * r;
        elements[2] = e_elements[2] * r;
        elements[3] = 0;
        elements[4] = e_elements[4] * i;
        elements[5] = e_elements[5] * i;
        elements[6] = e_elements[6] * i;
        elements[7] = 0;
        elements[8] = e_elements[8] * a;
        elements[9] = e_elements[9] * a;
        elements[10] = e_elements[10] * a;
        elements[11] = 0;
        elements[12] = 0;
        elements[13] = 0;
        elements[14] = 0;
        elements[15] = 1;
        return this;
    }
    makeRotationFromEuler(e) {
        let elements = this.elements;
        let n = e.x;
        let r = e.y;
        let i = e.z;
        let a = Math.cos(n);
        let o = Math.sin(n);
        let s = Math.cos(r);
        let c = Math.sin(r);
        let l = Math.cos(i);
        let u = Math.sin(i);
        if (e.order === `XYZ`) {
            let e = a * l;
            let n = a * u;
            let r = o * l;
            let i = o * u;
            elements[0] = s * l;
            elements[4] = -s * u;
            elements[8] = c;
            elements[1] = n + r * c;
            elements[5] = e - i * c;
            elements[9] = -o * s;
            elements[2] = i - e * c;
            elements[6] = r + n * c;
            elements[10] = a * s;
        } else if (e.order === `YXZ`) {
            let e = s * l;
            let n = s * u;
            let r = c * l;
            let i = c * u;
            elements[0] = e + i * o;
            elements[4] = r * o - n;
            elements[8] = a * c;
            elements[1] = a * u;
            elements[5] = a * l;
            elements[9] = -o;
            elements[2] = n * o - r;
            elements[6] = i + e * o;
            elements[10] = a * s;
        } else if (e.order === `ZXY`) {
            let e = s * l;
            let n = s * u;
            let r = c * l;
            let i = c * u;
            elements[0] = e - i * o;
            elements[4] = -a * u;
            elements[8] = r + n * o;
            elements[1] = n + r * o;
            elements[5] = a * l;
            elements[9] = i - e * o;
            elements[2] = -a * c;
            elements[6] = o;
            elements[10] = a * s;
        } else if (e.order === `ZYX`) {
            let e = a * l;
            let n = a * u;
            let r = o * l;
            let i = o * u;
            elements[0] = s * l;
            elements[4] = r * c - n;
            elements[8] = e * c + i;
            elements[1] = s * u;
            elements[5] = i * c + e;
            elements[9] = n * c - r;
            elements[2] = -c;
            elements[6] = o * s;
            elements[10] = a * s;
        } else if (e.order === `YZX`) {
            let e = a * s;
            let n = a * c;
            let r = o * s;
            let i = o * c;
            elements[0] = s * l;
            elements[4] = i - e * u;
            elements[8] = r * u + n;
            elements[1] = u;
            elements[5] = a * l;
            elements[9] = -o * l;
            elements[2] = -c * l;
            elements[6] = n * u + r;
            elements[10] = e - i * u;
        } else if (e.order === `XZY`) {
            let e = a * s;
            let n = a * c;
            let r = o * s;
            let i = o * c;
            elements[0] = s * l;
            elements[4] = -u;
            elements[8] = c * l;
            elements[1] = e * u + i;
            elements[5] = a * l;
            elements[9] = n * u - r;
            elements[2] = r * u - n;
            elements[6] = o * l;
            elements[10] = i * u + e;
        }
        elements[3] = 0;
        elements[7] = 0;
        elements[11] = 0;
        elements[12] = 0;
        elements[13] = 0;
        elements[14] = 0;
        elements[15] = 1;
        return this;
    }
    makeRotationFromQuaternion(e) {
        return this.compose(Vt, e, Ht);
    }
    lookAt(e, t, n) {
        let elements = this.elements;
        Gt.subVectors(e, t);
        if (Gt.lengthSq() === 0) {
            Gt.z = 1;
        }
        Gt.normalize();
        Ut.crossVectors(n, Gt);
        if (Ut.lengthSq() === 0) {
            if (Math.abs(n.z) === 1) {
                Gt.x += 0.0001;
            } else {
                Gt.z += 0.0001;
            }
            Gt.normalize();
            Ut.crossVectors(n, Gt);
        }
        Ut.normalize();
        Wt.crossVectors(Gt, Ut);
        elements[0] = Ut.x;
        elements[4] = Wt.x;
        elements[8] = Gt.x;
        elements[1] = Ut.y;
        elements[5] = Wt.y;
        elements[9] = Gt.y;
        elements[2] = Ut.z;
        elements[6] = Wt.z;
        elements[10] = Gt.z;
        return this;
    }
    multiply(e) {
        return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this);
    }
    multiplyMatrices({ elements }, t) {
        let t_elements = t.elements;
        let elements_1 = this.elements;
        let a = elements[0];
        let o = elements[4];
        let s = elements[8];
        let c = elements[12];
        let l = elements[1];
        let u = elements[5];
        let d = elements[9];
        let f = elements[13];
        let p = elements[2];
        let m = elements[6];
        let h = elements[10];
        let g = elements[14];
        let _ = elements[3];
        let v = elements[7];
        let y = elements[11];
        let b = elements[15];
        let x = t_elements[0];
        let S = t_elements[4];
        let C = t_elements[8];
        let w = t_elements[12];
        let T = t_elements[1];
        let E = t_elements[5];
        let D = t_elements[9];
        let O = t_elements[13];
        let k = t_elements[2];
        let A = t_elements[6];
        let ee = t_elements[10];
        let te = t_elements[14];
        let j = t_elements[3];
        let ne = t_elements[7];
        let re = t_elements[11];
        let ie = t_elements[15];
        elements_1[0] = a * x + o * T + s * k + c * j;
        elements_1[4] = a * S + o * E + s * A + c * ne;
        elements_1[8] = a * C + o * D + s * ee + c * re;
        elements_1[12] = a * w + o * O + s * te + c * ie;
        elements_1[1] = l * x + u * T + d * k + f * j;
        elements_1[5] = l * S + u * E + d * A + f * ne;
        elements_1[9] = l * C + u * D + d * ee + f * re;
        elements_1[13] = l * w + u * O + d * te + f * ie;
        elements_1[2] = p * x + m * T + h * k + g * j;
        elements_1[6] = p * S + m * E + h * A + g * ne;
        elements_1[10] = p * C + m * D + h * ee + g * re;
        elements_1[14] = p * w + m * O + h * te + g * ie;
        elements_1[3] = _ * x + v * T + y * k + b * j;
        elements_1[7] = _ * S + v * E + y * A + b * ne;
        elements_1[11] = _ * C + v * D + y * ee + b * re;
        elements_1[15] = _ * w + v * O + y * te + b * ie;
        return this;
    }
    multiplyScalar(e) {
        let elements = this.elements;
        elements[0] *= e;
        elements[4] *= e;
        elements[8] *= e;
        elements[12] *= e;
        elements[1] *= e;
        elements[5] *= e;
        elements[9] *= e;
        elements[13] *= e;
        elements[2] *= e;
        elements[6] *= e;
        elements[10] *= e;
        elements[14] *= e;
        elements[3] *= e;
        elements[7] *= e;
        elements[11] *= e;
        elements[15] *= e;
        return this;
    }
    determinant() {
        let elements = this.elements;
        let t = elements[0];
        let n = elements[4];
        let r = elements[8];
        let i = elements[12];
        let a = elements[1];
        let o = elements[5];
        let s = elements[9];
        let c = elements[13];
        let l = elements[2];
        let u = elements[6];
        let d = elements[10];
        let f = elements[14];
        let p = elements[3];
        let m = elements[7];
        let h = elements[11];
        let g = elements[15];
        let _ = s * f - c * d;
        let v = o * f - c * u;
        let y = o * d - s * u;
        let b = a * f - c * l;
        let x = a * d - s * l;
        let S = a * u - o * l;
        return t * (m * _ - h * v + g * y) - n * (p * _ - h * b + g * x) + r * (p * v - m * b + g * S) - i * (p * y - m * x + h * S);
    }
    determinantAffine() {
        let elements = this.elements;
        let t = elements[0];
        let n = elements[4];
        let r = elements[8];
        let i = elements[1];
        let a = elements[5];
        let o = elements[9];
        let s = elements[2];
        let c = elements[6];
        let l = elements[10];
        return t * (a * l - o * c) - n * (i * l - o * s) + r * (i * c - a * s);
    }
    transpose() {
        let elements = this.elements;
        let t;
        t = elements[1];
        elements[1] = elements[4];
        elements[4] = t;
        t = elements[2];
        elements[2] = elements[8];
        elements[8] = t;
        t = elements[6];
        elements[6] = elements[9];
        elements[9] = t;
        t = elements[3];
        elements[3] = elements[12];
        elements[12] = t;
        t = elements[7];
        elements[7] = elements[13];
        elements[13] = t;
        t = elements[11];
        elements[11] = elements[14];
        elements[14] = t;
        return this;
    }
    setPosition(e, t, n) {
        let elements = this.elements;
        if (e.isVector3) {
            elements[12] = e.x;
            elements[13] = e.y;
            elements[14] = e.z;
        } else {
            elements[12] = e;
            elements[13] = t;
            elements[14] = n;
        }
        return this;
    }
    invert() {
        let elements = this.elements;
        let t = elements[0];
        let n = elements[1];
        let r = elements[2];
        let i = elements[3];
        let a = elements[4];
        let o = elements[5];
        let s = elements[6];
        let c = elements[7];
        let l = elements[8];
        let u = elements[9];
        let d = elements[10];
        let f = elements[11];
        let p = elements[12];
        let m = elements[13];
        let h = elements[14];
        let g = elements[15];
        let _ = t * o - n * a;
        let v = t * s - r * a;
        let y = t * c - i * a;
        let b = n * s - r * o;
        let x = n * c - i * o;
        let S = r * c - i * s;
        let C = l * m - u * p;
        let w = l * h - d * p;
        let T = l * g - f * p;
        let E = u * h - d * m;
        let D = u * g - f * m;
        let O = d * g - f * h;
        let k = _ * O - v * D + y * E + b * T - x * w + S * C;
        if (k === 0) {
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
        let A = 1 / k;
        elements[0] = (o * O - s * D + c * E) * A;
        elements[1] = (r * D - n * O - i * E) * A;
        elements[2] = (m * S - h * x + g * b) * A;
        elements[3] = (d * x - u * S - f * b) * A;
        elements[4] = (s * T - a * O - c * w) * A;
        elements[5] = (t * O - r * T + i * w) * A;
        elements[6] = (h * y - p * S - g * v) * A;
        elements[7] = (l * S - d * y + f * v) * A;
        elements[8] = (a * D - o * T + c * C) * A;
        elements[9] = (n * T - t * D - i * C) * A;
        elements[10] = (p * x - m * y + g * _) * A;
        elements[11] = (u * y - l * x - f * _) * A;
        elements[12] = (o * w - a * E - s * C) * A;
        elements[13] = (t * E - n * w + r * C) * A;
        elements[14] = (m * v - p * b - h * _) * A;
        elements[15] = (l * b - u * v + d * _) * A;
        return this;
    }
    scale(e) {
        let elements = this.elements;
        let n = e.x;
        let r = e.y;
        let i = e.z;
        elements[0] *= n;
        elements[4] *= r;
        elements[8] *= i;
        elements[1] *= n;
        elements[5] *= r;
        elements[9] *= i;
        elements[2] *= n;
        elements[6] *= r;
        elements[10] *= i;
        elements[3] *= n;
        elements[7] *= r;
        elements[11] *= i;
        return this;
    }
    getMaxScaleOnAxis() {
        let elements = this.elements;
        let t = elements[0] * elements[0] + elements[1] * elements[1] + elements[2] * elements[2];
        let n = elements[4] * elements[4] + elements[5] * elements[5] + elements[6] * elements[6];
        let r = elements[8] * elements[8] + elements[9] * elements[9] + elements[10] * elements[10];
        return Math.sqrt(Math.max(t, n, r));
    }
    makeTranslation(e, t, n) {
        if (e.isVector3) {
            this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1);
        } else {
            this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1);
        }
        return this;
    }
    makeRotationX(e) {
        let t = Math.cos(e);
        let n = Math.sin(e);
        this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1);
        return this;
    }
    makeRotationY(e) {
        let t = Math.cos(e);
        let n = Math.sin(e);
        this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1);
        return this;
    }
    makeRotationZ(e) {
        let t = Math.cos(e);
        let n = Math.sin(e);
        this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this;
    }
    makeRotationAxis(e, t) {
        let n = Math.cos(t);
        let r = Math.sin(t);
        let i = 1 - n;
        let a = e.x;
        let o = e.y;
        let s = e.z;
        let c = i * a;
        let l = i * o;
        this.set(c * a + n, c * o - r * s, c * s + r * o, 0, c * o + r * s, l * o + n, l * s - r * a, 0, c * s - r * o, l * s + r * a, i * s * s + n, 0, 0, 0, 0, 1);
        return this;
    }
    makeScale(e, t, n) {
        this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1);
        return this;
    }
    makeShear(e, t, n, r, i, a) {
        this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1);
        return this;
    }
    compose(e, t, n) {
        let elements = this.elements;
        let i = t._x;
        let a = t._y;
        let o = t._z;
        let s = t._w;
        let c = i + i;
        let l = a + a;
        let u = o + o;
        let d = i * c;
        let f = i * l;
        let p = i * u;
        let m = a * l;
        let h = a * u;
        let g = o * u;
        let _ = s * c;
        let v = s * l;
        let y = s * u;
        let b = n.x;
        let x = n.y;
        let S = n.z;
        elements[0] = (1 - (m + g)) * b;
        elements[1] = (f + y) * b;
        elements[2] = (p - v) * b;
        elements[3] = 0;
        elements[4] = (f - y) * x;
        elements[5] = (1 - (d + g)) * x;
        elements[6] = (h + _) * x;
        elements[7] = 0;
        elements[8] = (p + v) * S;
        elements[9] = (h - _) * S;
        elements[10] = (1 - (d + m)) * S;
        elements[11] = 0;
        elements[12] = e.x;
        elements[13] = e.y;
        elements[14] = e.z;
        elements[15] = 1;
        return this;
    }
    decompose(e, t, n) {
        let elements = this.elements;
        e.x = elements[12];
        e.y = elements[13];
        e.z = elements[14];
        let i = this.determinantAffine();
        if (i === 0) {
            n.set(1, 1, 1);
            t.identity();
            return this;
        }
        let a = zt.set(elements[0], elements[1], elements[2]).length();
        let o = zt.set(elements[4], elements[5], elements[6]).length();
        let s = zt.set(elements[8], elements[9], elements[10]).length();
        if (i < 0) {
            a = -a;
        }
        Bt.copy(this);
        let c = 1 / a;
        let l = 1 / o;
        let u = 1 / s;
        Bt.elements[0] *= c;
        Bt.elements[1] *= c;
        Bt.elements[2] *= c;
        Bt.elements[4] *= l;
        Bt.elements[5] *= l;
        Bt.elements[6] *= l;
        Bt.elements[8] *= u;
        Bt.elements[9] *= u;
        Bt.elements[10] *= u;
        t.setFromRotationMatrix(Bt);
        n.x = a;
        n.y = o;
        n.z = s;
        return this;
    }
    makePerspective(e, t, n, r, i, a, o = Xe, s = false) {
        let elements = this.elements;
        let l = 2 * i / (t - e);
        let u = 2 * i / (n - r);
        let d = (t + e) / (t - e);
        let f = (n + r) / (n - r);
        let p;
        let m;
        if (s) {
            p = i / (a - i);
            m = a * i / (a - i);
        } else if (o === 2000) {
            p = -(a + i) / (a - i);
            m = -2 * a * i / (a - i);
        } else if (o === 2001) {
            p = -a / (a - i);
            m = -a * i / (a - i);
        } else {
            throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: ` + o);
        }
        elements[0] = l;
        elements[4] = 0;
        elements[8] = d;
        elements[12] = 0;
        elements[1] = 0;
        elements[5] = u;
        elements[9] = f;
        elements[13] = 0;
        elements[2] = 0;
        elements[6] = 0;
        elements[10] = p;
        elements[14] = m;
        elements[3] = 0;
        elements[7] = 0;
        elements[11] = -1;
        elements[15] = 0;
        return this;
    }
    makeOrthographic(e, t, n, r, i, a, o = Xe, s = false) {
        let elements = this.elements;
        let l = 2 / (t - e);
        let u = 2 / (n - r);
        let d = -(t + e) / (t - e);
        let f = -(n + r) / (n - r);
        let p;
        let m;
        if (s) {
            p = 1 / (a - i);
            m = a / (a - i);
        } else if (o === 2000) {
            p = -2 / (a - i);
            m = -(a + i) / (a - i);
        } else if (o === 2001) {
            p = -1 / (a - i);
            m = -i / (a - i);
        } else {
            throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ` + o);
        }
        elements[0] = l;
        elements[4] = 0;
        elements[8] = 0;
        elements[12] = d;
        elements[1] = 0;
        elements[5] = u;
        elements[9] = 0;
        elements[13] = f;
        elements[2] = 0;
        elements[6] = 0;
        elements[10] = p;
        elements[14] = m;
        elements[3] = 0;
        elements[7] = 0;
        elements[11] = 0;
        elements[15] = 1;
        return this;
    }
    equals(e) {
        let elements = this.elements;
        let e_elements = e.elements;
        for(let e = 0; e < 16; e++){
            if (elements[e] !== e_elements[e]) {
                return false;
            }
        }
        return true;
    }
    fromArray(e, t = 0) {
        for(let n = 0; n < 16; n++){
            this.elements[n] = e[n + t];
        }
        return this;
    }
    toArray(e = [], t = 0) {
        let elements = this.elements;
        e[t] = elements[0];
        e[t + 1] = elements[1];
        e[t + 2] = elements[2];
        e[t + 3] = elements[3];
        e[t + 4] = elements[4];
        e[t + 5] = elements[5];
        e[t + 6] = elements[6];
        e[t + 7] = elements[7];
        e[t + 8] = elements[8];
        e[t + 9] = elements[9];
        e[t + 10] = elements[10];
        e[t + 11] = elements[11];
        e[t + 12] = elements[12];
        e[t + 13] = elements[13];
        e[t + 14] = elements[14];
        e[t + 15] = elements[15];
        return e;
    }
};
var zt = new L;
var Bt = new R;
var Vt = new L(0, 0, 0);
var Ht = new L(1, 1, 1);
var Ut = new L;
var Wt = new L;
var Gt = new L;
const Kt = new R;
const qt = new ht;
const Jt = class e {
    constructor(t = 0, n = 0, r = 0, i = e.DEFAULT_ORDER){
        this.isEuler = true;
        this._x = t;
        this._y = n;
        this._z = r;
        this._order = i;
    }
    get x() {
        return this._x;
    }
    set x(e) {
        this._x = e;
        this._onChangeCallback();
    }
    get y() {
        return this._y;
    }
    set y(e) {
        this._y = e;
        this._onChangeCallback();
    }
    get z() {
        return this._z;
    }
    set z(e) {
        this._z = e;
        this._onChangeCallback();
    }
    get order() {
        return this._order;
    }
    set order(e) {
        this._order = e;
        this._onChangeCallback();
    }
    set(e, t, n, r = this._order) {
        this._x = e;
        this._y = t;
        this._z = n;
        this._order = r;
        this._onChangeCallback();
        return this;
    }
    clone() {
        return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(e) {
        this._x = e._x;
        this._y = e._y;
        this._z = e._z;
        this._order = e._order;
        this._onChangeCallback();
        return this;
    }
    setFromRotationMatrix({ elements }, t = this._order, n = true) {
        let i = elements[0];
        let a = elements[4];
        let o = elements[8];
        let s = elements[1];
        let c = elements[5];
        let l = elements[9];
        let u = elements[2];
        let d = elements[6];
        let f = elements[10];
        switch(t){
            case `XYZ`:
                this._y = Math.asin(P(o, -1, 1));
                if (Math.abs(o) < 0.9999999) {
                    this._x = Math.atan2(-l, f);
                    this._z = Math.atan2(-a, i);
                } else {
                    this._x = Math.atan2(d, c);
                    this._z = 0;
                }
                break;
            case `YXZ`:
                this._x = Math.asin(-P(l, -1, 1));
                if (Math.abs(l) < 0.9999999) {
                    this._y = Math.atan2(o, f);
                    this._z = Math.atan2(s, c);
                } else {
                    this._y = Math.atan2(-u, i);
                    this._z = 0;
                }
                break;
            case `ZXY`:
                this._x = Math.asin(P(d, -1, 1));
                if (Math.abs(d) < 0.9999999) {
                    this._y = Math.atan2(-u, f);
                    this._z = Math.atan2(-a, c);
                } else {
                    this._y = 0;
                    this._z = Math.atan2(s, i);
                }
                break;
            case `ZYX`:
                this._y = Math.asin(-P(u, -1, 1));
                if (Math.abs(u) < 0.9999999) {
                    this._x = Math.atan2(d, f);
                    this._z = Math.atan2(s, i);
                } else {
                    this._x = 0;
                    this._z = Math.atan2(-a, c);
                }
                break;
            case `YZX`:
                this._z = Math.asin(P(s, -1, 1));
                if (Math.abs(s) < 0.9999999) {
                    this._x = Math.atan2(-l, c);
                    this._y = Math.atan2(-u, i);
                } else {
                    this._x = 0;
                    this._y = Math.atan2(o, f);
                }
                break;
            case `XZY`:
                this._z = Math.asin(-P(a, -1, 1));
                if (Math.abs(a) < 0.9999999) {
                    this._x = Math.atan2(d, c);
                    this._y = Math.atan2(o, i);
                } else {
                    this._x = Math.atan2(-l, f);
                    this._y = 0;
                }
                break;
            default:
                M(`Euler: .setFromRotationMatrix() encountered an unknown order: ` + t);
        }
        this._order = t;
        if (n === true) {
            this._onChangeCallback();
        }
        return this;
    }
    setFromQuaternion(e, t, n) {
        Kt.makeRotationFromQuaternion(e);
        return this.setFromRotationMatrix(Kt, t, n);
    }
    setFromVector3(e, t = this._order) {
        return this.set(e.x, e.y, e.z, t);
    }
    reorder(e) {
        qt.setFromEuler(this);
        return this.setFromQuaternion(qt, e);
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
    }
    fromArray(e) {
        this._x = e[0];
        this._y = e[1];
        this._z = e[2];
        if (e[3] !== undefined) {
            this._order = e[3];
        }
        this._onChangeCallback();
        return this;
    }
    toArray(e = [], t = 0) {
        e[t] = this._x;
        e[t + 1] = this._y;
        e[t + 2] = this._z;
        e[t + 3] = this._order;
        return e;
    }
    _onChange(e) {
        this._onChangeCallback = e;
        return this;
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x;
        yield this._y;
        yield this._z;
        yield this._order;
    }
};
Jt.DEFAULT_ORDER = `XYZ`;
class Yt {
    constructor(){
        this.mask = 1;
    }
    set(e) {
        this.mask = 1 << e >>> 0;
    }
    enable(e) {
        this.mask |= 1 << e;
    }
    enableAll() {
        this.mask = -1;
    }
    toggle(e) {
        this.mask ^= 1 << e;
    }
    disable(e) {
        this.mask &= ~(1 << e);
    }
    disableAll() {
        this.mask = 0;
    }
    test(e) {
        return (this.mask & e.mask) !== 0;
    }
    isEnabled(e) {
        return !!(this.mask & 1 << e);
    }
}
let Xt = 0;
const Zt = new L;
const Qt = new ht;
const $t = new R;
const en = new L;
const tn = new L;
const nn = new L;
const rn = new ht;
const an = new L(1, 0, 0);
const on = new L(0, 1, 0);
const sn = new L(0, 0, 1);
const cn = {
    type: `added`
};
const ln = {
    type: `removed`
};
const un = {
    type: `childadded`,
    child: null
};
const dn = {
    type: `childremoved`,
    child: null
};
const fn = class e extends st {
    constructor(){
        super();
        this.isObject3D = true;
        Object.defineProperty(this, "id", {
            value: Xt++
        });
        this.uuid = dt();
        this.name = ``;
        this.type = `Object3D`;
        this.parent = null;
        this.children = [];
        this.up = e.DEFAULT_UP.clone();
        let t = new L;
        let n = new Jt;
        let r = new ht;
        let i = new L(1, 1, 1);
        function a() {
            r.setFromEuler(n, false);
        }
        function o() {
            n.setFromQuaternion(r, undefined, false);
        }
        n._onChange(a);
        r._onChange(o);
        Object.defineProperties(this, {
            position: {
                configurable: true,
                enumerable: true,
                value: t
            },
            rotation: {
                configurable: true,
                enumerable: true,
                value: n
            },
            quaternion: {
                configurable: true,
                enumerable: true,
                value: r
            },
            scale: {
                configurable: true,
                enumerable: true,
                value: i
            },
            modelViewMatrix: {
                value: new R
            },
            normalMatrix: {
                value: new vt
            }
        });
        this.matrix = new R;
        this.matrixWorld = new R;
        this.matrixAutoUpdate = e.DEFAULT_MATRIX_AUTO_UPDATE;
        this.matrixWorldAutoUpdate = e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE;
        this.matrixWorldNeedsUpdate = false;
        this.layers = new Yt;
        this.visible = true;
        this.castShadow = false;
        this.receiveShadow = false;
        this.frustumCulled = true;
        this.renderOrder = 0;
        this.animations = [];
        this.customDepthMaterial = undefined;
        this.customDistanceMaterial = undefined;
        this.static = false;
        this.userData = {};
        this.pivot = null;
    }
    onBeforeShadow() {}
    onAfterShadow() {}
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) {
        if (this.matrixAutoUpdate) {
            this.updateMatrix();
        }
        this.matrix.premultiply(e);
        this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(e) {
        this.quaternion.premultiply(e);
        return this;
    }
    setRotationFromAxisAngle(e, t) {
        this.quaternion.setFromAxisAngle(e, t);
    }
    setRotationFromEuler(e) {
        this.quaternion.setFromEuler(e, true);
    }
    setRotationFromMatrix(e) {
        this.quaternion.setFromRotationMatrix(e);
    }
    setRotationFromQuaternion(e) {
        this.quaternion.copy(e);
    }
    rotateOnAxis(e, t) {
        Qt.setFromAxisAngle(e, t);
        this.quaternion.multiply(Qt);
        return this;
    }
    rotateOnWorldAxis(e, t) {
        Qt.setFromAxisAngle(e, t);
        this.quaternion.premultiply(Qt);
        return this;
    }
    rotateX(e) {
        return this.rotateOnAxis(an, e);
    }
    rotateY(e) {
        return this.rotateOnAxis(on, e);
    }
    rotateZ(e) {
        return this.rotateOnAxis(sn, e);
    }
    translateOnAxis(e, t) {
        Zt.copy(e).applyQuaternion(this.quaternion);
        this.position.add(Zt.multiplyScalar(t));
        return this;
    }
    translateX(e) {
        return this.translateOnAxis(an, e);
    }
    translateY(e) {
        return this.translateOnAxis(on, e);
    }
    translateZ(e) {
        return this.translateOnAxis(sn, e);
    }
    localToWorld(e) {
        this.updateWorldMatrix(true, false);
        return e.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(e) {
        this.updateWorldMatrix(true, false);
        return e.applyMatrix4($t.copy(this.matrixWorld).invert());
    }
    lookAt(e, t, n) {
        if (e.isVector3) {
            en.copy(e);
        } else {
            en.set(e, t, n);
        }
        let parent = this.parent;
        this.updateWorldMatrix(true, false);
        tn.setFromMatrixPosition(this.matrixWorld);
        if (this.isCamera || this.isLight) {
            $t.lookAt(tn, en, this.up);
        } else {
            $t.lookAt(en, tn, this.up);
        }
        this.quaternion.setFromRotationMatrix($t);
        if (parent) {
            $t.extractRotation(parent.matrixWorld);
            Qt.setFromRotationMatrix($t);
            this.quaternion.premultiply(Qt.invert());
        }
    }
    add(e) {
        if (arguments.length > 1) {
            for(let e = 0; e < arguments.length; e++){
                this.add(arguments[e]);
            }
            return this;
        }
        if (e === this) {
            N(`Object3D.add: object can't be added as a child of itself.`, e);
            return this;
        }
        if (e && e.isObject3D) {
            e.removeFromParent();
            e.parent = this;
            this.children.push(e);
            e.dispatchEvent(cn);
            un.child = e;
            this.dispatchEvent(un);
            un.child = null;
        } else {
            N(`Object3D.add: object not an instance of THREE.Object3D.`, e);
        }
        return this;
    }
    remove(e) {
        if (arguments.length > 1) {
            for(let e = 0; e < arguments.length; e++){
                this.remove(arguments[e]);
            }
            return this;
        }
        let t = this.children.indexOf(e);
        if (t !== -1) {
            e.parent = null;
            this.children.splice(t, 1);
            e.dispatchEvent(ln);
            dn.child = e;
            this.dispatchEvent(dn);
            dn.child = null;
        }
        return this;
    }
    removeFromParent() {
        let parent = this.parent;
        if (parent !== null) {
            parent.remove(this);
        }
        return this;
    }
    clear() {
        return this.remove(...this.children);
    }
    attach(e) {
        this.updateWorldMatrix(true, false);
        $t.copy(this.matrixWorld).invert();
        if (e.parent !== null) {
            e.parent.updateWorldMatrix(true, false);
            $t.multiply(e.parent.matrixWorld);
        }
        e.applyMatrix4($t);
        e.removeFromParent();
        e.parent = this;
        this.children.push(e);
        e.updateWorldMatrix(false, true);
        e.dispatchEvent(cn);
        un.child = e;
        this.dispatchEvent(un);
        un.child = null;
        return this;
    }
    getObjectById(e) {
        return this.getObjectByProperty(`id`, e);
    }
    getObjectByName(e) {
        return this.getObjectByProperty(`name`, e);
    }
    getObjectByProperty(e, t) {
        if (this[e] === t) {
            return this;
        }
        for(let n = 0, r = this.children.length; n < r; n++){
            let r = this.children[n].getObjectByProperty(e, t);
            if (r !== undefined) {
                return r;
            }
        }
    }
    getObjectsByProperty(e, t, n = []) {
        if (this[e] === t) {
            n.push(this);
        }
        let children = this.children;
        for(let i = 0, a = children.length; i < a; i++){
            children[i].getObjectsByProperty(e, t, n);
        }
        return n;
    }
    getWorldPosition(e) {
        this.updateWorldMatrix(true, false);
        return e.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(e) {
        this.updateWorldMatrix(true, false);
        this.matrixWorld.decompose(tn, e, nn);
        return e;
    }
    getWorldScale(e) {
        this.updateWorldMatrix(true, false);
        this.matrixWorld.decompose(tn, rn, e);
        return e;
    }
    getWorldDirection(e) {
        this.updateWorldMatrix(true, false);
        let elements = this.matrixWorld.elements;
        return e.set(elements[8], elements[9], elements[10]).normalize();
    }
    raycast() {}
    intersectsFrustum() {}
    traverse(e) {
        e(this);
        let children = this.children;
        for(let n = 0, r = children.length; n < r; n++){
            children[n].traverse(e);
        }
    }
    traverseVisible(e) {
        if (this.visible === false) {
            return;
        }
        e(this);
        let children = this.children;
        for(let n = 0, r = children.length; n < r; n++){
            children[n].traverseVisible(e);
        }
    }
    traverseAncestors(e) {
        let parent = this.parent;
        if (parent !== null) {
            e(parent);
            parent.traverseAncestors(e);
        }
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale);
        let pivot = this.pivot;
        if (pivot !== null) {
            let t = pivot.x;
            let n = pivot.y;
            let r = pivot.z;
            let i = this.matrix.elements;
            i[12] += t - i[0] * t - i[4] * n - i[8] * r;
            i[13] += n - i[1] * t - i[5] * n - i[9] * r;
            i[14] += r - i[2] * t - i[6] * n - i[10] * r;
        }
        this.matrixWorldNeedsUpdate = true;
    }
    updateMatrixWorld(e) {
        if (this.matrixAutoUpdate) {
            this.updateMatrix();
        }
        if (this.matrixWorldNeedsUpdate || e) {
            if (this.matrixWorldAutoUpdate === true) {
                if (this.parent === null) {
                    this.matrixWorld.copy(this.matrix);
                } else {
                    this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
                }
            }
            this.matrixWorldNeedsUpdate = false;
            e = true;
        }
        let children = this.children;
        for(let n = 0, r = children.length; n < r; n++){
            children[n].updateMatrixWorld(e);
        }
    }
    updateWorldMatrix(e, t, n = false) {
        let parent = this.parent;
        if (e === true && parent !== null) {
            parent.updateWorldMatrix(true, false);
        }
        if (this.matrixAutoUpdate) {
            this.updateMatrix();
        }
        if (this.matrixWorldNeedsUpdate || n) {
            if (this.matrixWorldAutoUpdate === true) {
                if (this.parent === null) {
                    this.matrixWorld.copy(this.matrix);
                } else {
                    this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
                }
            }
            this.matrixWorldNeedsUpdate = false;
            n = true;
        }
        if (t === true) {
            let e = this.children;
            for(let t = 0, r = e.length; t < r; t++){
                e[t].updateWorldMatrix(false, true, n);
            }
        }
    }
    toJSON(e) {
        let t = e === undefined || typeof e == `string`;
        let n = {};
        if (t) {
            e = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {},
                skeletons: {},
                animations: {},
                nodes: {}
            };
            n.metadata = {
                version: 4.7,
                type: `Object`,
                generator: `Object3D.toJSON`
            };
        }
        let r = {};
        r.uuid = this.uuid;
        r.type = this.type;
        r.name = this.name;
        r.castShadow = this.castShadow;
        r.receiveShadow = this.receiveShadow;
        r.visible = this.visible;
        r.frustumCulled = this.frustumCulled;
        r.renderOrder = this.renderOrder;
        r.static = this.static;
        r.matrixAutoUpdate = this.matrixAutoUpdate;
        if (Object.keys(this.userData).length > 0) {
            r.userData = this.userData;
        }
        r.layers = this.layers.mask;
        r.matrix = this.matrix.toArray();
        r.up = this.up.toArray();
        if (this.pivot !== null) {
            r.pivot = this.pivot.toArray();
        }
        if (this.morphTargetDictionary !== undefined) {
            r.morphTargetDictionary = {
                ...this.morphTargetDictionary
            };
        }
        if (this.morphTargetInfluences !== undefined) {
            r.morphTargetInfluences = this.morphTargetInfluences.slice();
        }
        if (this.isInstancedMesh) {
            r.type = `InstancedMesh`;
            r.count = this.count;
            r.instanceMatrix = this.instanceMatrix.toJSON();
            if (this.instanceColor !== null) {
                r.instanceColor = this.instanceColor.toJSON();
            }
        }
        if (this.isBatchedMesh) {
            r.type = `BatchedMesh`;
            r.perObjectFrustumCulled = this.perObjectFrustumCulled;
            r.sortObjects = this.sortObjects;
            r.drawRanges = this._drawRanges;
            r.reservedRanges = this._reservedRanges;
            r.geometryInfo = this._geometryInfo.map((e)=>({
                    ...e,
                    boundingBox: e.boundingBox ? e.boundingBox.toJSON() : undefined,
                    boundingSphere: e.boundingSphere ? e.boundingSphere.toJSON() : undefined
                }));
            r.instanceInfo = this._instanceInfo.map((e)=>({
                    ...e
                }));
            r.availableInstanceIds = this._availableInstanceIds.slice();
            r.availableGeometryIds = this._availableGeometryIds.slice();
            r.nextIndexStart = this._nextIndexStart;
            r.nextVertexStart = this._nextVertexStart;
            r.geometryCount = this._geometryCount;
            r.maxInstanceCount = this._maxInstanceCount;
            r.maxVertexCount = this._maxVertexCount;
            r.maxIndexCount = this._maxIndexCount;
            r.geometryInitialized = this._geometryInitialized;
            r.matricesTexture = this._matricesTexture.toJSON(e);
            r.indirectTexture = this._indirectTexture.toJSON(e);
            if (this._colorsTexture !== null) {
                r.colorsTexture = this._colorsTexture.toJSON(e);
            }
            if (this.boundingSphere !== null) {
                r.boundingSphere = this.boundingSphere.toJSON();
            }
            if (this.boundingBox !== null) {
                r.boundingBox = this.boundingBox.toJSON();
            }
        }
        function i(t, n) {
            if (t[n.uuid] === undefined) {
                t[n.uuid] = n.toJSON(e);
            }
            return n.uuid;
        }
        if (this.isScene) {
            if (this.background) {
                if (this.background.isColor) {
                    r.background = this.background.toJSON();
                } else if (this.background.isTexture) {
                    r.background = this.background.toJSON(e).uuid;
                }
            }
            if (this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true) {
                r.environment = this.environment.toJSON(e).uuid;
            }
        } else if (this.isMesh || this.isLine || this.isPoints) {
            r.geometry = i(e.geometries, this.geometry);
            let t = this.geometry.parameters;
            if (t !== undefined && t.shapes !== undefined) {
                let n = t.shapes;
                if (Array.isArray(n)) {
                    for(let t = 0, r = n.length; t < r; t++){
                        let r = n[t];
                        i(e.shapes, r);
                    }
                } else {
                    i(e.shapes, n);
                }
            }
        }
        if (this.isSkinnedMesh) {
            r.bindMode = this.bindMode;
            r.bindMatrix = this.bindMatrix.toArray();
            if (this.skeleton !== undefined) {
                i(e.skeletons, this.skeleton);
                r.skeleton = this.skeleton.uuid;
            }
        }
        if (this.material !== undefined) {
            if (Array.isArray(this.material)) {
                let t = [];
                for(let n = 0, r = this.material.length; n < r; n++){
                    t.push(i(e.materials, this.material[n]));
                }
                r.material = t;
            } else {
                r.material = i(e.materials, this.material);
            }
        }
        if (this.children.length > 0) {
            r.children = [];
            for(let t = 0; t < this.children.length; t++){
                r.children.push(this.children[t].toJSON(e).object);
            }
        }
        if (this.animations.length > 0) {
            r.animations = [];
            for(let t = 0; t < this.animations.length; t++){
                let animation = this.animations[t];
                r.animations.push(i(e.animations, animation));
            }
        }
        if (t) {
            let t = a(e.geometries);
            let r = a(e.materials);
            let i = a(e.textures);
            let o = a(e.images);
            let s = a(e.shapes);
            let c = a(e.skeletons);
            let l = a(e.animations);
            let u = a(e.nodes);
            if (t.length > 0) {
                n.geometries = t;
            }
            if (r.length > 0) {
                n.materials = r;
            }
            if (i.length > 0) {
                n.textures = i;
            }
            if (o.length > 0) {
                n.images = o;
            }
            if (s.length > 0) {
                n.shapes = s;
            }
            if (c.length > 0) {
                n.skeletons = c;
            }
            if (l.length > 0) {
                n.animations = l;
            }
            if (u.length > 0) {
                n.nodes = u;
            }
        }
        n.object = r;
        return n;
        function a(e) {
            let t = [];
            for(let n in e){
                let r = e[n];
                delete r.metadata;
                t.push(r);
            }
            return t;
        }
    }
    clone(e) {
        return new this.constructor().copy(this, e);
    }
    copy(e, t = true) {
        this.name = e.name;
        this.up.copy(e.up);
        this.position.copy(e.position);
        this.rotation.order = e.rotation.order;
        this.quaternion.copy(e.quaternion);
        this.scale.copy(e.scale);
        this.pivot = e.pivot === null ? null : e.pivot.clone();
        this.matrix.copy(e.matrix);
        this.matrixWorld.copy(e.matrixWorld);
        this.matrixAutoUpdate = e.matrixAutoUpdate;
        this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate;
        this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate;
        this.layers.mask = e.layers.mask;
        this.visible = e.visible;
        this.castShadow = e.castShadow;
        this.receiveShadow = e.receiveShadow;
        this.frustumCulled = e.frustumCulled;
        this.renderOrder = e.renderOrder;
        this.static = e.static;
        this.animations = e.animations.slice();
        this.userData = JSON.parse(JSON.stringify(e.userData));
        if (t === true) {
            for(let t = 0; t < e.children.length; t++){
                let child = e.children[t];
                this.add(child.clone());
            }
        }
        return this;
    }
    dispose() {
        this.dispatchEvent({
            type: `dispose`
        });
    }
};
fn.DEFAULT_UP = new L(0, 1, 0);
fn.DEFAULT_MATRIX_AUTO_UPDATE = true;
fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
var z = class extends fn {
    constructor(){
        super();
        this.isGroup = true;
        this.type = `Group`;
    }
};
const pn = {
    type: `move`
};
class mn {
    constructor(){
        this._targetRay = null;
        this._grip = null;
        this._hand = null;
    }
    getHandSpace() {
        if (this._hand === null) {
            this._hand = new z;
            this._hand.matrixAutoUpdate = false;
            this._hand.visible = false;
            this._hand.joints = {};
            this._hand.inputState = {
                pinching: false
            };
        }
        return this._hand;
    }
    getTargetRaySpace() {
        if (this._targetRay === null) {
            this._targetRay = new z;
            this._targetRay.matrixAutoUpdate = false;
            this._targetRay.visible = false;
            this._targetRay.hasLinearVelocity = false;
            this._targetRay.linearVelocity = new L;
            this._targetRay.hasAngularVelocity = false;
            this._targetRay.angularVelocity = new L;
        }
        return this._targetRay;
    }
    getGripSpace() {
        if (this._grip === null) {
            this._grip = new z;
            this._grip.matrixAutoUpdate = false;
            this._grip.visible = false;
            this._grip.hasLinearVelocity = false;
            this._grip.linearVelocity = new L;
            this._grip.hasAngularVelocity = false;
            this._grip.angularVelocity = new L;
            this._grip.eventsEnabled = false;
        }
        return this._grip;
    }
    dispatchEvent(e) {
        if (this._targetRay !== null) {
            this._targetRay.dispatchEvent(e);
        }
        if (this._grip !== null) {
            this._grip.dispatchEvent(e);
        }
        if (this._hand !== null) {
            this._hand.dispatchEvent(e);
        }
        return this;
    }
    connect(e) {
        if (e && e.hand) {
            let t = this._hand;
            if (t) {
                for (let n of e.hand.values()){
                    this._getHandJoint(t, n);
                }
            }
        }
        this.dispatchEvent({
            type: `connected`,
            data: e
        });
        return this;
    }
    disconnect(e) {
        this.dispatchEvent({
            type: `disconnected`,
            data: e
        });
        if (this._targetRay !== null) {
            this._targetRay.visible = false;
        }
        if (this._grip !== null) {
            this._grip.visible = false;
        }
        if (this._hand !== null) {
            this._hand.visible = false;
        }
        return this;
    }
    update(e, t, n) {
        let r = null;
        let i = null;
        let a = null;
        let _targetRay = this._targetRay;
        let _grip = this._grip;
        let _hand = this._hand;
        if (e && t.session.visibilityState !== `visible-blurred`) {
            if (_hand && e.hand) {
                a = true;
                for (let r of e.hand.values()){
                    let e = t.getJointPose(r, n);
                    let i = this._getHandJoint(_hand, r);
                    if (e !== null) {
                        i.matrix.fromArray(e.transform.matrix);
                        i.matrix.decompose(i.position, i.rotation, i.scale);
                        i.matrixWorldNeedsUpdate = true;
                        i.jointRadius = e.radius;
                    }
                    i.visible = e !== null;
                }
                let r = _hand.joints[`index-finger-tip`];
                let i = _hand.joints[`thumb-tip`];
                let o = r.position.distanceTo(i.position);
                if (_hand.inputState.pinching && o > 0.025) {
                    _hand.inputState.pinching = false;
                    this.dispatchEvent({
                        type: `pinchend`,
                        handedness: e.handedness,
                        target: this
                    });
                } else if (!_hand.inputState.pinching && o <= 0.015) {
                    _hand.inputState.pinching = true;
                    this.dispatchEvent({
                        type: `pinchstart`,
                        handedness: e.handedness,
                        target: this
                    });
                }
            } else {
                if (_grip !== null && e.gripSpace) {
                    i = t.getPose(e.gripSpace, n);
                    if (i !== null) {
                        _grip.matrix.fromArray(i.transform.matrix);
                        _grip.matrix.decompose(_grip.position, _grip.rotation, _grip.scale);
                        _grip.matrixWorldNeedsUpdate = true;
                        if (i.linearVelocity) {
                            _grip.hasLinearVelocity = true;
                            _grip.linearVelocity.copy(i.linearVelocity);
                        } else {
                            _grip.hasLinearVelocity = false;
                        }
                        if (i.angularVelocity) {
                            _grip.hasAngularVelocity = true;
                            _grip.angularVelocity.copy(i.angularVelocity);
                        } else {
                            _grip.hasAngularVelocity = false;
                        }
                        if (_grip.eventsEnabled) {
                            _grip.dispatchEvent({
                                type: `gripUpdated`,
                                data: e,
                                target: this
                            });
                        }
                    }
                }
            }
            if (_targetRay !== null) {
                r = t.getPose(e.targetRaySpace, n);
                if (r === null && i !== null) {
                    r = i;
                }
                if (r !== null) {
                    _targetRay.matrix.fromArray(r.transform.matrix);
                    _targetRay.matrix.decompose(_targetRay.position, _targetRay.rotation, _targetRay.scale);
                    _targetRay.matrixWorldNeedsUpdate = true;
                    if (r.linearVelocity) {
                        _targetRay.hasLinearVelocity = true;
                        _targetRay.linearVelocity.copy(r.linearVelocity);
                    } else {
                        _targetRay.hasLinearVelocity = false;
                    }
                    if (r.angularVelocity) {
                        _targetRay.hasAngularVelocity = true;
                        _targetRay.angularVelocity.copy(r.angularVelocity);
                    } else {
                        _targetRay.hasAngularVelocity = false;
                    }
                    this.dispatchEvent(pn);
                }
            }
        }
        if (_targetRay !== null) {
            _targetRay.visible = r !== null;
        }
        if (_grip !== null) {
            _grip.visible = i !== null;
        }
        if (_hand !== null) {
            _hand.visible = a !== null;
        }
        return this;
    }
    _getHandJoint(e, t) {
        if (e.joints[t.jointName] === undefined) {
            let n = new z;
            n.matrixAutoUpdate = false;
            n.visible = false;
            e.joints[t.jointName] = n;
            e.add(n);
        }
        return e.joints[t.jointName];
    }
}
const hn = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
};
const gn = {
    h: 0,
    s: 0,
    l: 0
};
const _n = {
    h: 0,
    s: 0,
    l: 0
};
function vn(e, t, n) {
    if (n < 0) {
        n += 1;
    }
    if (n > 1) {
        --n;
    }
    if (n < 1 / 6) {
        return e + (t - e) * 6 * n;
    }
    if (n < 1 / 2) {
        return t;
    }
    if (n < 2 / 3) {
        return e + (t - e) * 6 * (2 / 3 - n);
    }
    return e;
}
class B {
    constructor(e, t, n){
        this.isColor = true;
        this.r = 1;
        this.g = 1;
        this.b = 1;
        return this.set(e, t, n);
    }
    set(e, t, n) {
        if (t === undefined && n === undefined) {
            let t = e;
            if (t && t.isColor) {
                this.copy(t);
            } else if (typeof t == `number`) {
                this.setHex(t);
            } else if (typeof t == `string`) {
                this.setStyle(t);
            }
        } else {
            this.setRGB(e, t, n);
        }
        return this;
    }
    setScalar(e) {
        this.r = e;
        this.g = e;
        this.b = e;
        return this;
    }
    setHex(e, t = Ue) {
        e = Math.floor(e);
        this.r = (e >> 16 & 255) / 255;
        this.g = (e >> 8 & 255) / 255;
        this.b = (e & 255) / 255;
        Ct.colorSpaceToWorking(this, t);
        return this;
    }
    setRGB(e, t, n, r = Ct.workingColorSpace) {
        this.r = e;
        this.g = t;
        this.b = n;
        Ct.colorSpaceToWorking(this, r);
        return this;
    }
    setHSL(e, t, n, r = Ct.workingColorSpace) {
        e = ft(e, 1);
        t = P(t, 0, 1);
        n = P(n, 0, 1);
        if (t === 0) {
            this.r = this.g = this.b = n;
        } else {
            let r = n <= 0.5 ? n * (1 + t) : n + t - n * t;
            let i = 2 * n - r;
            this.r = vn(i, r, e + 1 / 3);
            this.g = vn(i, r, e);
            this.b = vn(i, r, e - 1 / 3);
        }
        Ct.colorSpaceToWorking(this, r);
        return this;
    }
    setStyle(e, t = Ue) {
        function n(t) {
            if (t !== undefined && parseFloat(t) < 1) {
                M(`Color: Alpha component of ` + e + ` will be ignored.`);
            }
        }
        let r;
        if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
            let i;
            let a = r[1];
            let o = r[2];
            switch(a){
                case `rgb`:
                case `rgba`:
                    if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) {
                        n(i[4]);
                        return this.setRGB(Math.min(255, parseInt(i[1], 10)) / 255, Math.min(255, parseInt(i[2], 10)) / 255, Math.min(255, parseInt(i[3], 10)) / 255, t);
                    }
                    if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) {
                        n(i[4]);
                        return this.setRGB(Math.min(100, parseInt(i[1], 10)) / 100, Math.min(100, parseInt(i[2], 10)) / 100, Math.min(100, parseInt(i[3], 10)) / 100, t);
                    }
                    break;
                case `hsl`:
                case `hsla`:
                    if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) {
                        n(i[4]);
                        return this.setHSL(parseFloat(i[1]) / 360, parseFloat(i[2]) / 100, parseFloat(i[3]) / 100, t);
                    }
                    break;
                default:
                    M(`Color: Unknown color model ` + e);
            }
        } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
            let n = r[1];
            let i = n.length;
            if (i === 3) {
                return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, t);
            }
            if (i === 6) {
                return this.setHex(parseInt(n, 16), t);
            }
            M(`Color: Invalid hex color ` + e);
        } else if (e && e.length > 0) {
            return this.setColorName(e, t);
        }
        return this;
    }
    setColorName(e, t = Ue) {
        let n = hn[e.toLowerCase()];
        if (n === undefined) {
            M(`Color: Unknown color ` + e);
        } else {
            this.setHex(n, t);
        }
        return this;
    }
    clone() {
        return new this.constructor(this.r, this.g, this.b);
    }
    copy(e) {
        this.r = e.r;
        this.g = e.g;
        this.b = e.b;
        return this;
    }
    copySRGBToLinear(e) {
        this.r = wt(e.r);
        this.g = wt(e.g);
        this.b = wt(e.b);
        return this;
    }
    copyLinearToSRGB(e) {
        this.r = Tt(e.r);
        this.g = Tt(e.g);
        this.b = Tt(e.b);
        return this;
    }
    convertSRGBToLinear() {
        this.copySRGBToLinear(this);
        return this;
    }
    convertLinearToSRGB() {
        this.copyLinearToSRGB(this);
        return this;
    }
    getHex(e = Ue) {
        Ct.workingToColorSpace(yn.copy(this), e);
        return Math.round(P(yn.r * 255, 0, 255)) * 65536 + Math.round(P(yn.g * 255, 0, 255)) * 256 + Math.round(P(yn.b * 255, 0, 255));
    }
    getHexString(e = Ue) {
        return (`000000` + this.getHex(e).toString(16)).slice(-6);
    }
    getHSL(e, t = Ct.workingColorSpace) {
        Ct.workingToColorSpace(yn.copy(this), t);
        let n = yn.r;
        let r = yn.g;
        let i = yn.b;
        let a = Math.max(n, r, i);
        let o = Math.min(n, r, i);
        let s;
        let c;
        let l = (o + a) / 2;
        if (o === a) {
            s = 0;
            c = 0;
        } else {
            let e = a - o;
            c = l <= 0.5 ? e / (a + o) : e / (2 - a - o);
            switch(a){
                case n:
                    s = (r - i) / e + (r < i ? 6 : 0);
                    break;
                case r:
                    s = (i - n) / e + 2;
                    break;
                case i:
                    s = (n - r) / e + 4;
            }
            s /= 6;
        }
        e.h = s;
        e.s = c;
        e.l = l;
        return e;
    }
    getRGB(e, t = Ct.workingColorSpace) {
        Ct.workingToColorSpace(yn.copy(this), t);
        e.r = yn.r;
        e.g = yn.g;
        e.b = yn.b;
        return e;
    }
    getStyle(e = Ue) {
        Ct.workingToColorSpace(yn.copy(this), e);
        let t = yn.r;
        let n = yn.g;
        let r = yn.b;
        if (e === `srgb`) {
            return `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
        }
        return `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`;
    }
    offsetHSL(e, t, n) {
        this.getHSL(gn);
        return this.setHSL(gn.h + e, gn.s + t, gn.l + n);
    }
    add(e) {
        this.r += e.r;
        this.g += e.g;
        this.b += e.b;
        return this;
    }
    addColors(e, t) {
        this.r = e.r + t.r;
        this.g = e.g + t.g;
        this.b = e.b + t.b;
        return this;
    }
    addScalar(e) {
        this.r += e;
        this.g += e;
        this.b += e;
        return this;
    }
    sub(e) {
        this.r = Math.max(0, this.r - e.r);
        this.g = Math.max(0, this.g - e.g);
        this.b = Math.max(0, this.b - e.b);
        return this;
    }
    multiply(e) {
        this.r *= e.r;
        this.g *= e.g;
        this.b *= e.b;
        return this;
    }
    multiplyScalar(e) {
        this.r *= e;
        this.g *= e;
        this.b *= e;
        return this;
    }
    lerp(e, t) {
        this.r += (e.r - this.r) * t;
        this.g += (e.g - this.g) * t;
        this.b += (e.b - this.b) * t;
        return this;
    }
    lerpColors(e, t, n) {
        this.r = e.r + (t.r - e.r) * n;
        this.g = e.g + (t.g - e.g) * n;
        this.b = e.b + (t.b - e.b) * n;
        return this;
    }
    lerpHSL(e, t) {
        this.getHSL(gn);
        e.getHSL(_n);
        let n = pt(gn.h, _n.h, t);
        let r = pt(gn.s, _n.s, t);
        let i = pt(gn.l, _n.l, t);
        this.setHSL(n, r, i);
        return this;
    }
    setFromVector3(e) {
        this.r = e.x;
        this.g = e.y;
        this.b = e.z;
        return this;
    }
    applyMatrix3(e) {
        let t = this.r;
        let n = this.g;
        let r = this.b;
        let e_elements = e.elements;
        this.r = e_elements[0] * t + e_elements[3] * n + e_elements[6] * r;
        this.g = e_elements[1] * t + e_elements[4] * n + e_elements[7] * r;
        this.b = e_elements[2] * t + e_elements[5] * n + e_elements[8] * r;
        return this;
    }
    equals(e) {
        return e.r === this.r && e.g === this.g && e.b === this.b;
    }
    fromArray(e, t = 0) {
        this.r = e[t];
        this.g = e[t + 1];
        this.b = e[t + 2];
        return this;
    }
    toArray(e = [], t = 0) {
        e[t] = this.r;
        e[t + 1] = this.g;
        e[t + 2] = this.b;
        return e;
    }
    fromBufferAttribute(e, t) {
        this.r = e.getX(t);
        this.g = e.getY(t);
        this.b = e.getZ(t);
        return this;
    }
    toJSON() {
        return this.getHex();
    }
    *[Symbol.iterator]() {
        yield this.r;
        yield this.g;
        yield this.b;
    }
}
var yn = new B;
B.NAMES = hn;
class bn extends fn {
    constructor(){
        super();
        this.isScene = true;
        this.type = `Scene`;
        this.background = null;
        this.environment = null;
        this.fog = null;
        this.backgroundBlurriness = 0;
        this.backgroundIntensity = 1;
        this.backgroundRotation = new Jt;
        this.environmentIntensity = 1;
        this.environmentRotation = new Jt;
        this.overrideMaterial = null;
        if (typeof __THREE_DEVTOOLS__ < `u`) {
            __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`, {
                detail: this
            }));
        }
    }
    copy(e, t) {
        super.copy(e, t);
        if (e.background !== null) {
            this.background = e.background.clone();
        }
        if (e.environment !== null) {
            this.environment = e.environment.clone();
        }
        if (e.fog !== null) {
            this.fog = e.fog.clone();
        }
        this.backgroundBlurriness = e.backgroundBlurriness;
        this.backgroundIntensity = e.backgroundIntensity;
        this.backgroundRotation.copy(e.backgroundRotation);
        this.environmentIntensity = e.environmentIntensity;
        this.environmentRotation.copy(e.environmentRotation);
        if (e.overrideMaterial !== null) {
            this.overrideMaterial = e.overrideMaterial.clone();
        }
        this.matrixAutoUpdate = e.matrixAutoUpdate;
        return this;
    }
    toJSON(e) {
        let t = super.toJSON(e);
        if (this.fog !== null) {
            t.object.fog = this.fog.toJSON();
        }
        t.object.backgroundBlurriness = this.backgroundBlurriness;
        t.object.backgroundIntensity = this.backgroundIntensity;
        t.object.backgroundRotation = this.backgroundRotation.toArray();
        t.object.environmentIntensity = this.environmentIntensity;
        t.object.environmentRotation = this.environmentRotation.toArray();
        return t;
    }
}
const xn = new L;
const Sn = new L;
const Cn = new L;
const wn = new L;
const Tn = new L;
const En = new L;
const Dn = new L;
const On = new L;
const kn = new L;
const An = new L;
const jn = new Pt;
const Mn = new Pt;
const Nn = new Pt;
const Pn = class e {
    constructor(e = new L, t = new L, n = new L){
        this.a = e;
        this.b = t;
        this.c = n;
    }
    static getNormal(e, t, n, r) {
        r.subVectors(n, t);
        xn.subVectors(e, t);
        r.cross(xn);
        let i = r.lengthSq();
        if (i > 0) {
            return r.multiplyScalar(1 / Math.sqrt(i));
        }
        return r.set(0, 0, 0);
    }
    static getBarycoord(e, t, n, r, i) {
        xn.subVectors(r, t);
        Sn.subVectors(n, t);
        Cn.subVectors(e, t);
        let a = xn.dot(xn);
        let o = xn.dot(Sn);
        let s = xn.dot(Cn);
        let c = Sn.dot(Sn);
        let l = Sn.dot(Cn);
        let u = a * c - o * o;
        if (u === 0) {
            i.set(0, 0, 0);
            return null;
        }
        let d = 1 / u;
        let f = (c * s - o * l) * d;
        let p = (a * l - o * s) * d;
        return i.set(1 - f - p, p, f);
    }
    static containsPoint(e, t, n, r) {
        return this.getBarycoord(e, t, n, r, wn) !== null && wn.x >= 0 && wn.y >= 0 && wn.x + wn.y <= 1;
    }
    static getInterpolation(e, t, n, r, i, a, o, s) {
        if (this.getBarycoord(e, t, n, r, wn) === null) {
            s.x = 0;
            s.y = 0;
            if (`z` in s) {
                s.z = 0;
            }
            if (`w` in s) {
                s.w = 0;
            }
            return null;
        }
        s.setScalar(0);
        s.addScaledVector(i, wn.x);
        s.addScaledVector(a, wn.y);
        s.addScaledVector(o, wn.z);
        return s;
    }
    static getInterpolatedAttribute(e, t, n, r, i, a) {
        jn.setScalar(0);
        Mn.setScalar(0);
        Nn.setScalar(0);
        jn.fromBufferAttribute(e, t);
        Mn.fromBufferAttribute(e, n);
        Nn.fromBufferAttribute(e, r);
        a.setScalar(0);
        a.addScaledVector(jn, i.x);
        a.addScaledVector(Mn, i.y);
        a.addScaledVector(Nn, i.z);
        return a;
    }
    static isFrontFacing(e, t, n, r) {
        xn.subVectors(n, t);
        Sn.subVectors(e, t);
        return xn.cross(Sn).dot(r) < 0;
    }
    set(e, t, n) {
        this.a.copy(e);
        this.b.copy(t);
        this.c.copy(n);
        return this;
    }
    setFromPointsAndIndices(e, t, n, r) {
        this.a.copy(e[t]);
        this.b.copy(e[n]);
        this.c.copy(e[r]);
        return this;
    }
    setFromAttributeAndIndices(e, t, n, r) {
        this.a.fromBufferAttribute(e, t);
        this.b.fromBufferAttribute(e, n);
        this.c.fromBufferAttribute(e, r);
        return this;
    }
    clone() {
        return new this.constructor().copy(this);
    }
    copy(e) {
        this.a.copy(e.a);
        this.b.copy(e.b);
        this.c.copy(e.c);
        return this;
    }
    getArea() {
        xn.subVectors(this.c, this.b);
        Sn.subVectors(this.a, this.b);
        return xn.cross(Sn).length() * 0.5;
    }
    getMidpoint(e) {
        return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(t) {
        return e.getNormal(this.a, this.b, this.c, t);
    }
    getPlane(e) {
        return e.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(t, n) {
        return e.getBarycoord(t, this.a, this.b, this.c, n);
    }
    getInterpolation(t, n, r, i, a) {
        return e.getInterpolation(t, this.a, this.b, this.c, n, r, i, a);
    }
    containsPoint(t) {
        return e.containsPoint(t, this.a, this.b, this.c);
    }
    isFrontFacing(t) {
        return e.isFrontFacing(this.a, this.b, this.c, t);
    }
    intersectsBox(e) {
        return e.intersectsTriangle(this);
    }
    closestPointToPoint(e, t) {
        let n = this.a;
        let r = this.b;
        let i = this.c;
        let a;
        let o;
        Tn.subVectors(r, n);
        En.subVectors(i, n);
        On.subVectors(e, n);
        let s = Tn.dot(On);
        let c = En.dot(On);
        if (s <= 0 && c <= 0) {
            return t.copy(n);
        }
        kn.subVectors(e, r);
        let l = Tn.dot(kn);
        let u = En.dot(kn);
        if (l >= 0 && u <= l) {
            return t.copy(r);
        }
        let d = s * u - l * c;
        if (d <= 0 && s >= 0 && l <= 0) {
            a = s / (s - l);
            return t.copy(n).addScaledVector(Tn, a);
        }
        An.subVectors(e, i);
        let f = Tn.dot(An);
        let p = En.dot(An);
        if (p >= 0 && f <= p) {
            return t.copy(i);
        }
        let m = f * c - s * p;
        if (m <= 0 && c >= 0 && p <= 0) {
            o = c / (c - p);
            return t.copy(n).addScaledVector(En, o);
        }
        let h = l * p - f * u;
        if (h <= 0 && u - l >= 0 && f - p >= 0) {
            Dn.subVectors(i, r);
            o = (u - l) / (u - l + (f - p));
            return t.copy(r).addScaledVector(Dn, o);
        }
        let g = 1 / (h + m + d);
        a = m * g;
        o = d * g;
        return t.copy(n).addScaledVector(Tn, a).addScaledVector(En, o);
    }
    equals(e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
    }
};
class Fn {
    constructor(e = new L(Infinity, Infinity, Infinity), t = new L(-Infinity, -Infinity, -Infinity)){
        this.isBox3 = true;
        this.min = e;
        this.max = t;
    }
    set(e, t) {
        this.min.copy(e);
        this.max.copy(t);
        return this;
    }
    setFromArray(e) {
        this.makeEmpty();
        for(let t = 0, n = e.length; t < n; t += 3){
            this.expandByPoint(Ln.fromArray(e, t));
        }
        return this;
    }
    setFromBufferAttribute(e) {
        this.makeEmpty();
        for(let t = 0, n = e.count; t < n; t++){
            this.expandByPoint(Ln.fromBufferAttribute(e, t));
        }
        return this;
    }
    setFromPoints(e) {
        this.makeEmpty();
        for(let t = 0, n = e.length; t < n; t++){
            this.expandByPoint(e[t]);
        }
        return this;
    }
    setFromCenterAndSize(e, t) {
        let n = Ln.copy(t).multiplyScalar(0.5);
        this.min.copy(e).sub(n);
        this.max.copy(e).add(n);
        return this;
    }
    setFromObject(e, t = false) {
        this.makeEmpty();
        return this.expandByObject(e, t);
    }
    clone() {
        return new this.constructor().copy(this);
    }
    copy(e) {
        this.min.copy(e.min);
        this.max.copy(e.max);
        return this;
    }
    makeEmpty() {
        this.min.x = this.min.y = this.min.z = Infinity;
        this.max.x = this.max.y = this.max.z = -Infinity;
        return this;
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(e) {
        if (this.isEmpty()) {
            return e.set(0, 0, 0);
        }
        return e.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(e) {
        if (this.isEmpty()) {
            return e.set(0, 0, 0);
        }
        return e.subVectors(this.max, this.min);
    }
    expandByPoint(e) {
        this.min.min(e);
        this.max.max(e);
        return this;
    }
    expandByVector(e) {
        this.min.sub(e);
        this.max.add(e);
        return this;
    }
    expandByScalar(e) {
        this.min.addScalar(-e);
        this.max.addScalar(e);
        return this;
    }
    expandByObject(e, t = false) {
        e.updateWorldMatrix(false, false);
        let e_geometry = e.geometry;
        if (e_geometry !== undefined) {
            let r = e_geometry.getAttribute(`position`);
            if (t === true && r !== undefined && e.isInstancedMesh !== true) {
                for(let t = 0, n = r.count; t < n; t++){
                    if (e.isMesh === true) {
                        e.getVertexPosition(t, Ln);
                    } else {
                        Ln.fromBufferAttribute(r, t);
                    }
                    Ln.applyMatrix4(e.matrixWorld);
                    this.expandByPoint(Ln);
                }
            } else {
                if (e.boundingBox === undefined) {
                    if (e_geometry.boundingBox === null) {
                        e_geometry.computeBoundingBox();
                    }
                    Rn.copy(e_geometry.boundingBox);
                } else {
                    if (e.boundingBox === null) {
                        e.computeBoundingBox();
                    }
                    Rn.copy(e.boundingBox);
                }
                Rn.applyMatrix4(e.matrixWorld);
                this.union(Rn);
            }
        }
        let e_children = e.children;
        for(let e = 0, n = e_children.length; e < n; e++){
            this.expandByObject(e_children[e], t);
        }
        return this;
    }
    containsPoint(e) {
        return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
    }
    containsBox(e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
    }
    getParameter(e, t) {
        return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
    }
    intersectsBox(e) {
        return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
    }
    intersectsSphere(e) {
        this.clampPoint(e.center, Ln);
        return Ln.distanceToSquared(e.center) <= e.radius * e.radius;
    }
    intersectsPlane(e) {
        let t;
        let n;
        if (e.normal.x > 0) {
            t = e.normal.x * this.min.x;
            n = e.normal.x * this.max.x;
        } else {
            t = e.normal.x * this.max.x;
            n = e.normal.x * this.min.x;
        }
        if (e.normal.y > 0) {
            t += e.normal.y * this.min.y;
            n += e.normal.y * this.max.y;
        } else {
            t += e.normal.y * this.max.y;
            n += e.normal.y * this.min.y;
        }
        if (e.normal.z > 0) {
            t += e.normal.z * this.min.z;
            n += e.normal.z * this.max.z;
        } else {
            t += e.normal.z * this.max.z;
            n += e.normal.z * this.min.z;
        }
        return t <= -e.constant && n >= -e.constant;
    }
    intersectsTriangle(e) {
        if (this.isEmpty()) {
            return false;
        }
        this.getCenter(Gn);
        Kn.subVectors(this.max, Gn);
        zn.subVectors(e.a, Gn);
        Bn.subVectors(e.b, Gn);
        Vn.subVectors(e.c, Gn);
        Hn.subVectors(Bn, zn);
        Un.subVectors(Vn, Bn);
        Wn.subVectors(zn, Vn);
        let t = [
            0,
            -Hn.z,
            Hn.y,
            0,
            -Un.z,
            Un.y,
            0,
            -Wn.z,
            Wn.y,
            Hn.z,
            0,
            -Hn.x,
            Un.z,
            0,
            -Un.x,
            Wn.z,
            0,
            -Wn.x,
            -Hn.y,
            Hn.x,
            0,
            -Un.y,
            Un.x,
            0,
            -Wn.y,
            Wn.x,
            0
        ];
        if (!Yn(t, zn, Bn, Vn, Kn) || (t = [
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1
        ], !Yn(t, zn, Bn, Vn, Kn))) {
            return false;
        }
        qn.crossVectors(Hn, Un);
        t = [
            qn.x,
            qn.y,
            qn.z
        ];
        return Yn(t, zn, Bn, Vn, Kn);
    }
    clampPoint(e, t) {
        return t.copy(e).clamp(this.min, this.max);
    }
    distanceToPoint(e) {
        return this.clampPoint(e, Ln).distanceTo(e);
    }
    getBoundingSphere(e) {
        if (this.isEmpty()) {
            e.makeEmpty();
        } else {
            this.getCenter(e.center);
            e.radius = this.getSize(Ln).length() * 0.5;
        }
        return e;
    }
    intersect(e) {
        this.min.max(e.min);
        this.max.min(e.max);
        if (this.isEmpty()) {
            this.makeEmpty();
        }
        return this;
    }
    union(e) {
        this.min.min(e.min);
        this.max.max(e.max);
        return this;
    }
    applyMatrix4(e) {
        if (!this.isEmpty()) {
            In[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e);
            In[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e);
            In[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e);
            In[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e);
            In[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e);
            In[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e);
            In[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e);
            In[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e);
            this.setFromPoints(In);
        }
        return this;
    }
    translate(e) {
        this.min.add(e);
        this.max.add(e);
        return this;
    }
    equals(e) {
        return e.min.equals(this.min) && e.max.equals(this.max);
    }
    toJSON() {
        return {
            min: this.min.toArray(),
            max: this.max.toArray()
        };
    }
    fromJSON(e) {
        this.min.fromArray(e.min);
        this.max.fromArray(e.max);
        return this;
    }
}
var In = [
    new L,
    new L,
    new L,
    new L,
    new L,
    new L,
    new L,
    new L
];
var Ln = new L;
var Rn = new Fn;
var zn = new L;
var Bn = new L;
var Vn = new L;
var Hn = new L;
var Un = new L;
var Wn = new L;
var Gn = new L;
var Kn = new L;
var qn = new L;
var Jn = new L;
function Yn(e, t, n, r, i) {
    for(let a = 0, o = e.length - 3; a <= o; a += 3){
        Jn.fromArray(e, a);
        let o = i.x * Math.abs(Jn.x) + i.y * Math.abs(Jn.y) + i.z * Math.abs(Jn.z);
        let s = t.dot(Jn);
        let c = n.dot(Jn);
        let l = r.dot(Jn);
        if (Math.max(-Math.max(s, c, l), Math.min(s, c, l)) > o) {
            return false;
        }
    }
    return true;
}
const V = new L;
const Xn = new I;
let Zn = 0;
class Qn extends st {
    constructor(e, t, n = false){
        super();
        if (Array.isArray(e)) {
            throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);
        }
        this.isBufferAttribute = true;
        Object.defineProperty(this, "id", {
            value: Zn++
        });
        this.name = ``;
        this.array = e;
        this.itemSize = t;
        this.count = e === undefined ? 0 : e.length / t;
        this.normalized = n;
        this.usage = Je;
        this.updateRanges = [];
        this.gpuType = h;
        this.version = 0;
    }
    onUploadCallback() {}
    set needsUpdate(e) {
        if (e === true) {
            this.version++;
        }
    }
    setUsage(e) {
        this.usage = e;
        return this;
    }
    addUpdateRange(e, t) {
        this.updateRanges.push({
            start: e,
            count: t
        });
    }
    clearUpdateRanges() {
        this.updateRanges.length = 0;
    }
    copy(e) {
        this.name = e.name;
        this.array = new e.array.constructor(e.array);
        this.itemSize = e.itemSize;
        this.count = e.count;
        this.normalized = e.normalized;
        this.usage = e.usage;
        this.gpuType = e.gpuType;
        return this;
    }
    copyAt(e, t, n) {
        e *= this.itemSize;
        n *= t.itemSize;
        for(let r = 0, i = this.itemSize; r < i; r++){
            this.array[e + r] = t.array[n + r];
        }
        return this;
    }
    copyArray(e) {
        this.array.set(e);
        return this;
    }
    applyMatrix3(e) {
        if (this.itemSize === 2) {
            for(let t = 0, n = this.count; t < n; t++){
                Xn.fromBufferAttribute(this, t);
                Xn.applyMatrix3(e);
                this.setXY(t, Xn.x, Xn.y);
            }
        } else if (this.itemSize === 3) {
            for(let t = 0, n = this.count; t < n; t++){
                V.fromBufferAttribute(this, t);
                V.applyMatrix3(e);
                this.setXYZ(t, V.x, V.y, V.z);
            }
        }
        return this;
    }
    applyMatrix4(e) {
        for(let t = 0, n = this.count; t < n; t++){
            V.fromBufferAttribute(this, t);
            V.applyMatrix4(e);
            this.setXYZ(t, V.x, V.y, V.z);
        }
        return this;
    }
    applyNormalMatrix(e) {
        for(let t = 0, n = this.count; t < n; t++){
            V.fromBufferAttribute(this, t);
            V.applyNormalMatrix(e);
            this.setXYZ(t, V.x, V.y, V.z);
        }
        return this;
    }
    transformDirection(e) {
        for(let t = 0, n = this.count; t < n; t++){
            V.fromBufferAttribute(this, t);
            V.transformDirection(e);
            this.setXYZ(t, V.x, V.y, V.z);
        }
        return this;
    }
    set(e, t = 0) {
        this.array.set(e, t);
        return this;
    }
    getComponent(e, t) {
        let n = this.array[e * this.itemSize + t];
        if (this.normalized) {
            n = mt(n, this.array);
        }
        return n;
    }
    setComponent(e, t, n) {
        if (this.normalized) {
            n = F(n, this.array);
        }
        this.array[e * this.itemSize + t] = n;
        return this;
    }
    getX(e) {
        let t = this.array[e * this.itemSize];
        if (this.normalized) {
            t = mt(t, this.array);
        }
        return t;
    }
    setX(e, t) {
        if (this.normalized) {
            t = F(t, this.array);
        }
        this.array[e * this.itemSize] = t;
        return this;
    }
    getY(e) {
        let t = this.array[e * this.itemSize + 1];
        if (this.normalized) {
            t = mt(t, this.array);
        }
        return t;
    }
    setY(e, t) {
        if (this.normalized) {
            t = F(t, this.array);
        }
        this.array[e * this.itemSize + 1] = t;
        return this;
    }
    getZ(e) {
        let t = this.array[e * this.itemSize + 2];
        if (this.normalized) {
            t = mt(t, this.array);
        }
        return t;
    }
    setZ(e, t) {
        if (this.normalized) {
            t = F(t, this.array);
        }
        this.array[e * this.itemSize + 2] = t;
        return this;
    }
    getW(e) {
        let t = this.array[e * this.itemSize + 3];
        if (this.normalized) {
            t = mt(t, this.array);
        }
        return t;
    }
    setW(e, t) {
        if (this.normalized) {
            t = F(t, this.array);
        }
        this.array[e * this.itemSize + 3] = t;
        return this;
    }
    setXY(e, t, n) {
        e *= this.itemSize;
        if (this.normalized) {
            t = F(t, this.array);
            n = F(n, this.array);
        }
        this.array[e + 0] = t;
        this.array[e + 1] = n;
        return this;
    }
    setXYZ(e, t, n, r) {
        e *= this.itemSize;
        if (this.normalized) {
            t = F(t, this.array);
            n = F(n, this.array);
            r = F(r, this.array);
        }
        this.array[e + 0] = t;
        this.array[e + 1] = n;
        this.array[e + 2] = r;
        return this;
    }
    setXYZW(e, t, n, r, i) {
        e *= this.itemSize;
        if (this.normalized) {
            t = F(t, this.array);
            n = F(n, this.array);
            r = F(r, this.array);
            i = F(i, this.array);
        }
        this.array[e + 0] = t;
        this.array[e + 1] = n;
        this.array[e + 2] = r;
        this.array[e + 3] = i;
        return this;
    }
    onUpload(e) {
        this.onUploadCallback = e;
        return this;
    }
    clone() {
        return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
        let e = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.from(this.array),
            normalized: this.normalized
        };
        e.name = this.name;
        e.usage = this.usage;
        e.gpuType = this.gpuType;
        return e;
    }
    dispose() {
        this.dispatchEvent({
            type: `dispose`
        });
    }
}
class $n extends Qn {
    constructor(e, t, n){
        super(new Uint16Array(e), t, n);
    }
}
class er extends Qn {
    constructor(e, t, n){
        super(new Uint32Array(e), t, n);
    }
}
class H extends Qn {
    constructor(e, t, n){
        super(new Float32Array(e), t, n);
    }
}
const tr = new Fn;
const nr = new L;
const rr = new L;
class ir {
    constructor(e = new L, t = -1){
        this.isSphere = true;
        this.center = e;
        this.radius = t;
    }
    set(e, t) {
        this.center.copy(e);
        this.radius = t;
        return this;
    }
    setFromPoints(e, t) {
        let center = this.center;
        if (t === undefined) {
            tr.setFromPoints(e).getCenter(center);
        } else {
            center.copy(t);
        }
        let r = 0;
        for(let t = 0, i = e.length; t < i; t++){
            r = Math.max(r, center.distanceToSquared(e[t]));
        }
        this.radius = Math.sqrt(r);
        return this;
    }
    copy(e) {
        this.center.copy(e.center);
        this.radius = e.radius;
        return this;
    }
    isEmpty() {
        return this.radius < 0;
    }
    makeEmpty() {
        this.center.set(0, 0, 0);
        this.radius = -1;
        return this;
    }
    containsPoint(e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(e) {
        return e.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(e) {
        let t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t;
    }
    intersectsBox(e) {
        return e.intersectsSphere(this);
    }
    intersectsPlane(e) {
        return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(e, t) {
        let n = this.center.distanceToSquared(e);
        t.copy(e);
        if (n > this.radius * this.radius) {
            t.sub(this.center).normalize();
            t.multiplyScalar(this.radius).add(this.center);
        }
        return t;
    }
    getBoundingBox(e) {
        if (this.isEmpty()) {
            e.makeEmpty();
            return e;
        }
        e.set(this.center, this.center);
        e.expandByScalar(this.radius);
        return e;
    }
    applyMatrix4(e) {
        this.center.applyMatrix4(e);
        this.radius *= e.getMaxScaleOnAxis();
        return this;
    }
    translate(e) {
        this.center.add(e);
        return this;
    }
    expandByPoint(e) {
        if (this.isEmpty()) {
            this.center.copy(e);
            this.radius = 0;
            return this;
        }
        nr.subVectors(e, this.center);
        let t = nr.lengthSq();
        if (t > this.radius * this.radius) {
            let e = Math.sqrt(t);
            let n = (e - this.radius) * 0.5;
            this.center.addScaledVector(nr, n / e);
            this.radius += n;
        }
        return this;
    }
    union(e) {
        if (e.isEmpty()) {
            return this;
        }
        if (this.isEmpty()) {
            this.copy(e);
            return this;
        }
        if (this.center.equals(e.center) === true) {
            this.radius = Math.max(this.radius, e.radius);
        } else {
            rr.subVectors(e.center, this.center).setLength(e.radius);
            this.expandByPoint(nr.copy(e.center).add(rr));
            this.expandByPoint(nr.copy(e.center).sub(rr));
        }
        return this;
    }
    equals(e) {
        return e.center.equals(this.center) && e.radius === this.radius;
    }
    clone() {
        return new this.constructor().copy(this);
    }
    toJSON() {
        return {
            radius: this.radius,
            center: this.center.toArray()
        };
    }
    fromJSON(e) {
        this.radius = e.radius;
        this.center.fromArray(e.center);
        return this;
    }
}
let ar = 0;
const or = new R;
const sr = new fn;
const cr = new L;
const lr = new Fn;
const ur = new Fn;
const U = new L;
const dr = class e extends st {
    constructor(){
        super();
        this.isBufferGeometry = true;
        Object.defineProperty(this, "id", {
            value: ar++
        });
        this.uuid = dt();
        this.name = ``;
        this.type = `BufferGeometry`;
        this.index = null;
        this.indirect = null;
        this.indirectOffset = 0;
        this.attributes = {};
        this.morphAttributes = {};
        this.morphTargetsRelative = false;
        this.groups = [];
        this.boundingBox = null;
        this.boundingSphere = null;
        this.drawRange = {
            start: 0,
            count: Infinity
        };
        this.userData = {};
        this._transformed = false;
    }
    getIndex() {
        return this.index;
    }
    setIndex(e) {
        this.index = Array.isArray(e) ? new (Ze(e) ? er : $n)(e, 1) : e;
        return this;
    }
    setIndirect(e, t = 0) {
        this.indirect = e;
        this.indirectOffset = t;
        return this;
    }
    getIndirect() {
        return this.indirect;
    }
    getAttribute(e) {
        return this.attributes[e];
    }
    setAttribute(e, t) {
        this.attributes[e] = t;
        return this;
    }
    deleteAttribute(e) {
        delete this.attributes[e];
        return this;
    }
    hasAttribute(e) {
        return this.attributes[e] !== undefined;
    }
    addGroup(e, t, materialIndex = 0) {
        this.groups.push({
            start: e,
            count: t,
            materialIndex
        });
    }
    clearGroups() {
        this.groups = [];
    }
    setDrawRange(e, t) {
        this.drawRange.start = e;
        this.drawRange.count = t;
    }
    applyMatrix4(e) {
        let position = this.attributes.position;
        if (position !== undefined) {
            position.applyMatrix4(e);
            position.needsUpdate = true;
        }
        let normal = this.attributes.normal;
        if (normal !== undefined) {
            let t = new vt().getNormalMatrix(e);
            normal.applyNormalMatrix(t);
            normal.needsUpdate = true;
        }
        let tangent = this.attributes.tangent;
        if (tangent !== undefined) {
            tangent.transformDirection(e);
            tangent.needsUpdate = true;
        }
        if (this.boundingBox !== null) {
            this.computeBoundingBox();
        }
        if (this.boundingSphere !== null) {
            this.computeBoundingSphere();
        }
        this._transformed = true;
        return this;
    }
    applyQuaternion(e) {
        or.makeRotationFromQuaternion(e);
        this.applyMatrix4(or);
        return this;
    }
    rotateX(e) {
        or.makeRotationX(e);
        this.applyMatrix4(or);
        return this;
    }
    rotateY(e) {
        or.makeRotationY(e);
        this.applyMatrix4(or);
        return this;
    }
    rotateZ(e) {
        or.makeRotationZ(e);
        this.applyMatrix4(or);
        return this;
    }
    translate(e, t, n) {
        or.makeTranslation(e, t, n);
        this.applyMatrix4(or);
        return this;
    }
    scale(e, t, n) {
        or.makeScale(e, t, n);
        this.applyMatrix4(or);
        return this;
    }
    lookAt(e) {
        sr.lookAt(e);
        sr.updateMatrix();
        this.applyMatrix4(sr.matrix);
        return this;
    }
    center() {
        this.computeBoundingBox();
        this.boundingBox.getCenter(cr).negate();
        this.translate(cr.x, cr.y, cr.z);
        return this;
    }
    setFromPoints(e) {
        let t = this.getAttribute(`position`);
        if (t === undefined) {
            let t = [];
            for(let n = 0, r = e.length; n < r; n++){
                let r = e[n];
                t.push(r.x, r.y, r.z || 0);
            }
            this.setAttribute(`position`, new H(t, 3));
        } else {
            let n = Math.min(e.length, t.count);
            for(let r = 0; r < n; r++){
                let n = e[r];
                t.setXYZ(r, n.x, n.y, n.z || 0);
            }
            if (e.length > t.count) {
                M(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`);
            }
            t.needsUpdate = true;
        }
        return this;
    }
    computeBoundingBox() {
        if (this.boundingBox === null) {
            this.boundingBox = new Fn;
        }
        let position = this.attributes.position;
        let position_1 = this.morphAttributes.position;
        if (position && position.isGLBufferAttribute) {
            N(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`, this);
            this.boundingBox.set(new L(-Infinity, -Infinity, -Infinity), new L(Infinity, Infinity, Infinity));
        } else {
            if (position !== undefined) {
                this.boundingBox.setFromBufferAttribute(position);
                if (position_1) {
                    for(let e = 0, n = position_1.length; e < n; e++){
                        let n = position_1[e];
                        lr.setFromBufferAttribute(n);
                        if (this.morphTargetsRelative) {
                            U.addVectors(this.boundingBox.min, lr.min);
                            this.boundingBox.expandByPoint(U);
                            U.addVectors(this.boundingBox.max, lr.max);
                            this.boundingBox.expandByPoint(U);
                        } else {
                            this.boundingBox.expandByPoint(lr.min);
                            this.boundingBox.expandByPoint(lr.max);
                        }
                    }
                }
            } else {
                this.boundingBox.makeEmpty();
            }
            if (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) {
                N(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`, this);
            }
        }
    }
    computeBoundingSphere() {
        if (this.boundingSphere === null) {
            this.boundingSphere = new ir;
        }
        let position = this.attributes.position;
        let position_1 = this.morphAttributes.position;
        if (position && position.isGLBufferAttribute) {
            N(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`, this);
            this.boundingSphere.set(new L, Infinity);
        } else if (position) {
            let n = this.boundingSphere.center;
            lr.setFromBufferAttribute(position);
            if (position_1) {
                for(let e = 0, n = position_1.length; e < n; e++){
                    let n = position_1[e];
                    ur.setFromBufferAttribute(n);
                    if (this.morphTargetsRelative) {
                        U.addVectors(lr.min, ur.min);
                        lr.expandByPoint(U);
                        U.addVectors(lr.max, ur.max);
                        lr.expandByPoint(U);
                    } else {
                        lr.expandByPoint(ur.min);
                        lr.expandByPoint(ur.max);
                    }
                }
            }
            lr.getCenter(n);
            let r = 0;
            for(let t = 0, i = position.count; t < i; t++){
                U.fromBufferAttribute(position, t);
                r = Math.max(r, n.distanceToSquared(U));
            }
            if (position_1) {
                for(let i = 0, a = position_1.length; i < a; i++){
                    let a = position_1[i];
                    let o = this.morphTargetsRelative;
                    for(let t = 0, i = a.count; t < i; t++){
                        U.fromBufferAttribute(a, t);
                        if (o) {
                            cr.fromBufferAttribute(position, t);
                            U.add(cr);
                        }
                        r = Math.max(r, n.distanceToSquared(U));
                    }
                }
            }
            this.boundingSphere.radius = Math.sqrt(r);
            if (isNaN(this.boundingSphere.radius)) {
                N(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`, this);
            }
        }
    }
    computeTangents() {
        let index = this.index;
        let attributes = this.attributes;
        if (index === null || attributes.position === undefined || attributes.normal === undefined || attributes.uv === undefined) {
            N(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);
            return;
        }
        let t_position = attributes.position;
        let t_normal = attributes.normal;
        let attributes_uv = attributes.uv;
        let a = this.getAttribute(`tangent`);
        if (a === undefined || a.count !== t_position.count) {
            a = new Qn(new Float32Array(4 * t_position.count), 4);
            this.setAttribute(`tangent`, a);
        }
        let o = [];
        let s = [];
        for(let e = 0; e < t_position.count; e++){
            o[e] = new L;
            s[e] = new L;
        }
        let c = new L;
        let l = new L;
        let u = new L;
        let d = new I;
        let f = new I;
        let p = new I;
        let m = new L;
        let h = new L;
        function g(e, t, r) {
            c.fromBufferAttribute(t_position, e);
            l.fromBufferAttribute(t_position, t);
            u.fromBufferAttribute(t_position, r);
            d.fromBufferAttribute(attributes_uv, e);
            f.fromBufferAttribute(attributes_uv, t);
            p.fromBufferAttribute(attributes_uv, r);
            l.sub(c);
            u.sub(c);
            f.sub(d);
            p.sub(d);
            let a = 1 / (f.x * p.y - p.x * f.y);
            if (isFinite(a)) {
                m.copy(l).multiplyScalar(p.y).addScaledVector(u, -f.y).multiplyScalar(a);
                h.copy(u).multiplyScalar(f.x).addScaledVector(l, -p.x).multiplyScalar(a);
                o[e].add(m);
                o[t].add(m);
                o[r].add(m);
                s[e].add(h);
                s[t].add(h);
                s[r].add(h);
            }
        }
        let groups = this.groups;
        if (groups.length === 0) {
            groups = [
                {
                    start: 0,
                    count: index.count
                }
            ];
        }
        for(let t = 0, n = groups.length; t < n; ++t){
            let group = groups[t];
            let r = group.start;
            let i = group.count;
            for(let t = r, n = r + i; t < n; t += 3){
                g(index.getX(t + 0), index.getX(t + 1), index.getX(t + 2));
            }
        }
        let v = new L;
        let y = new L;
        let b = new L;
        let x = new L;
        function S(e) {
            b.fromBufferAttribute(t_normal, e);
            x.copy(b);
            let t = o[e];
            v.copy(t);
            v.sub(b.multiplyScalar(b.dot(t))).normalize();
            y.crossVectors(x, t);
            let n = y.dot(s[e]) < 0 ? -1 : 1;
            a.setXYZW(e, v.x, v.y, v.z, n);
        }
        for(let t = 0, n = groups.length; t < n; ++t){
            let group = groups[t];
            let r = group.start;
            let i = group.count;
            for(let t = r, n = r + i; t < n; t += 3){
                S(index.getX(t + 0));
                S(index.getX(t + 1));
                S(index.getX(t + 2));
            }
        }
        this._transformed = true;
    }
    computeVertexNormals() {
        let index = this.index;
        let t = this.getAttribute(`position`);
        if (t !== undefined) {
            let n = this.getAttribute(`normal`);
            if (n === undefined || n.count !== t.count) {
                n = new Qn(new Float32Array(t.count * 3), 3);
                this.setAttribute(`normal`, n);
            } else {
                for(let e = 0, t = n.count; e < t; e++){
                    n.setXYZ(e, 0, 0, 0);
                }
            }
            let r = new L;
            let i = new L;
            let a = new L;
            let o = new L;
            let s = new L;
            let c = new L;
            let l = new L;
            let u = new L;
            if (index) {
                for(let d = 0, f = index.count; d < f; d += 3){
                    let f = index.getX(d + 0);
                    let p = index.getX(d + 1);
                    let m = index.getX(d + 2);
                    r.fromBufferAttribute(t, f);
                    i.fromBufferAttribute(t, p);
                    a.fromBufferAttribute(t, m);
                    l.subVectors(a, i);
                    u.subVectors(r, i);
                    l.cross(u);
                    o.fromBufferAttribute(n, f);
                    s.fromBufferAttribute(n, p);
                    c.fromBufferAttribute(n, m);
                    o.add(l);
                    s.add(l);
                    c.add(l);
                    n.setXYZ(f, o.x, o.y, o.z);
                    n.setXYZ(p, s.x, s.y, s.z);
                    n.setXYZ(m, c.x, c.y, c.z);
                }
            } else {
                for(let e = 0, o = t.count; e < o; e += 3){
                    r.fromBufferAttribute(t, e + 0);
                    i.fromBufferAttribute(t, e + 1);
                    a.fromBufferAttribute(t, e + 2);
                    l.subVectors(a, i);
                    u.subVectors(r, i);
                    l.cross(u);
                    n.setXYZ(e + 0, l.x, l.y, l.z);
                    n.setXYZ(e + 1, l.x, l.y, l.z);
                    n.setXYZ(e + 2, l.x, l.y, l.z);
                }
            }
            this.normalizeNormals();
            n.needsUpdate = true;
        }
    }
    normalizeNormals() {
        let normal = this.attributes.normal;
        for(let t = 0, n = normal.count; t < n; t++){
            U.fromBufferAttribute(normal, t);
            U.normalize();
            normal.setXYZ(t, U.x, U.y, U.z);
        }
    }
    toNonIndexed() {
        function t(e, array) {
            let e_array = e.array;
            let e_itemSize = e.itemSize;
            let e_normalized = e.normalized;
            let a = new e_array.constructor(array.length * e_itemSize);
            let o = 0;
            let s = 0;
            for(let i = 0, c = array.length; i < c; i++){
                o = e.isInterleavedBufferAttribute ? array[i] * e.data.stride + e.offset : array[i] * e_itemSize;
                for(let e = 0; e < e_itemSize; e++){
                    a[s++] = e_array[o++];
                }
            }
            return new Qn(a, e_itemSize, e_normalized);
        }
        if (this.index === null) {
            M(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`);
            return this;
        }
        let n = new e;
        let array = this.index.array;
        let attributes = this.attributes;
        for(let e in attributes){
            let a = attributes[e];
            let o = t(a, array);
            n.setAttribute(e, o);
        }
        let morphAttributes = this.morphAttributes;
        for(let e in morphAttributes){
            let i = [];
            let o = morphAttributes[e];
            for(let e = 0, n = o.length; e < n; e++){
                let n = o[e];
                let a = t(n, array);
                i.push(a);
            }
            n.morphAttributes[e] = i;
        }
        n.morphTargetsRelative = this.morphTargetsRelative;
        let groups = this.groups;
        for(let e = 0, t = groups.length; e < t; e++){
            let group = groups[e];
            n.addGroup(group.start, group.count, group.materialIndex);
        }
        return n;
    }
    toJSON() {
        let e = {
            metadata: {
                version: 4.7,
                type: `BufferGeometry`,
                generator: `BufferGeometry.toJSON`
            }
        };
        e.uuid = this.uuid;
        e.type = this.parameters !== undefined && this._transformed === true ? `BufferGeometry` : this.type;
        e.name = this.name;
        if (Object.keys(this.userData).length > 0) {
            e.userData = this.userData;
        }
        if (this.parameters !== undefined && this._transformed !== true) {
            let t = this.parameters;
            for(let n in t){
                if (t[n] !== undefined) {
                    e[n] = t[n];
                }
            }
            return e;
        }
        e.data = {
            attributes: {}
        };
        let index = this.index;
        if (index !== null) {
            e.data.index = {
                type: index.array.constructor.name,
                array: Array.prototype.slice.call(index.array)
            };
        }
        let attributes = this.attributes;
        for(let t in attributes){
            let r = attributes[t];
            e.data.attributes[t] = r.toJSON(e.data);
        }
        let r = {};
        let i = false;
        for(let t in this.morphAttributes){
            let n = this.morphAttributes[t];
            let a = [];
            for(let t = 0, r = n.length; t < r; t++){
                let r = n[t];
                a.push(r.toJSON(e.data));
            }
            if (a.length > 0) {
                r[t] = a;
                i = true;
            }
        }
        if (i) {
            e.data.morphAttributes = r;
            e.data.morphTargetsRelative = this.morphTargetsRelative;
        }
        let groups = this.groups;
        if (groups.length > 0) {
            e.data.groups = JSON.parse(JSON.stringify(groups));
        }
        let boundingSphere = this.boundingSphere;
        if (boundingSphere !== null) {
            e.data.boundingSphere = boundingSphere.toJSON();
        }
        return e;
    }
    clone() {
        return new this.constructor().copy(this);
    }
    copy(e) {
        this.index = null;
        this.attributes = {};
        this.morphAttributes = {};
        this.groups = [];
        this.boundingBox = null;
        this.boundingSphere = null;
        let t = {};
        this.name = e.name;
        let e_index = e.index;
        if (e_index !== null) {
            this.setIndex(e_index.clone());
        }
        let e_attributes = e.attributes;
        for(let e in e_attributes){
            let n = e_attributes[e];
            this.setAttribute(e, n.clone(t));
        }
        let e_morphAttributes = e.morphAttributes;
        for(let e in e_morphAttributes){
            let n = [];
            let r = e_morphAttributes[e];
            for(let e = 0, i = r.length; e < i; e++){
                n.push(r[e].clone(t));
            }
            this.morphAttributes[e] = n;
        }
        this.morphTargetsRelative = e.morphTargetsRelative;
        let e_groups = e.groups;
        for(let e = 0, t = e_groups.length; e < t; e++){
            let group = e_groups[e];
            this.addGroup(group.start, group.count, group.materialIndex);
        }
        let e_boundingBox = e.boundingBox;
        if (e_boundingBox !== null) {
            this.boundingBox = e_boundingBox.clone();
        }
        let e_boundingSphere = e.boundingSphere;
        if (e_boundingSphere !== null) {
            this.boundingSphere = e_boundingSphere.clone();
        }
        this.drawRange.start = e.drawRange.start;
        this.drawRange.count = e.drawRange.count;
        this.userData = e.userData;
        this._transformed = e._transformed;
        return this;
    }
    dispose() {
        this.dispatchEvent({
            type: `dispose`
        });
    }
};
class fr {
    constructor(e, t){
        this.isInterleavedBuffer = true;
        this.array = e;
        this.stride = t;
        this.count = e === undefined ? 0 : e.length / t;
        this.usage = Je;
        this.updateRanges = [];
        this.version = 0;
        this.uuid = dt();
    }
    onUploadCallback() {}
    set needsUpdate(e) {
        if (e === true) {
            this.version++;
        }
    }
    setUsage(e) {
        this.usage = e;
        return this;
    }
    addUpdateRange(e, t) {
        this.updateRanges.push({
            start: e,
            count: t
        });
    }
    clearUpdateRanges() {
        this.updateRanges.length = 0;
    }
    copy(e) {
        this.array = new e.array.constructor(e.array);
        this.count = e.count;
        this.stride = e.stride;
        this.usage = e.usage;
        return this;
    }
    copyAt(e, t, n) {
        e *= this.stride;
        n *= t.stride;
        for(let r = 0, i = this.stride; r < i; r++){
            this.array[e + r] = t.array[n + r];
        }
        return this;
    }
    set(e, t = 0) {
        this.array.set(e, t);
        return this;
    }
    clone(e) {
        if (e.arrayBuffers === undefined) {
            e.arrayBuffers = {};
        }
        if (this.array.buffer._uuid === undefined) {
            this.array.buffer._uuid = dt();
        }
        if (e.arrayBuffers[this.array.buffer._uuid] === undefined) {
            e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer;
        }
        let t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]);
        let n = new this.constructor(t, this.stride);
        n.setUsage(this.usage);
        return n;
    }
    onUpload(e) {
        this.onUploadCallback = e;
        return this;
    }
    toJSON(e) {
        if (e.arrayBuffers === undefined) {
            e.arrayBuffers = {};
        }
        if (this.array.buffer._uuid === undefined) {
            this.array.buffer._uuid = dt();
        }
        if (e.arrayBuffers[this.array.buffer._uuid] === undefined) {
            e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer));
        }
        let t = {
            uuid: this.uuid,
            buffer: this.array.buffer._uuid,
            type: this.array.constructor.name,
            stride: this.stride
        };
        t.usage = this.usage;
        return t;
    }
}
const pr = new L;
const mr = class e {
    constructor(e, t, n, r = false){
        this.isInterleavedBufferAttribute = true;
        this.name = ``;
        this.data = e;
        this.itemSize = t;
        this.offset = n;
        this.normalized = r;
    }
    get count() {
        return this.data.count;
    }
    get array() {
        return this.data.array;
    }
    set needsUpdate(e) {
        this.data.needsUpdate = e;
    }
    applyMatrix4(e) {
        for(let t = 0, n = this.data.count; t < n; t++){
            pr.fromBufferAttribute(this, t);
            pr.applyMatrix4(e);
            this.setXYZ(t, pr.x, pr.y, pr.z);
        }
        return this;
    }
    applyNormalMatrix(e) {
        for(let t = 0, n = this.count; t < n; t++){
            pr.fromBufferAttribute(this, t);
            pr.applyNormalMatrix(e);
            this.setXYZ(t, pr.x, pr.y, pr.z);
        }
        return this;
    }
    transformDirection(e) {
        for(let t = 0, n = this.count; t < n; t++){
            pr.fromBufferAttribute(this, t);
            pr.transformDirection(e);
            this.setXYZ(t, pr.x, pr.y, pr.z);
        }
        return this;
    }
    getComponent(e, t) {
        let n = this.array[e * this.data.stride + this.offset + t];
        if (this.normalized) {
            n = mt(n, this.array);
        }
        return n;
    }
    setComponent(e, t, n) {
        if (this.normalized) {
            n = F(n, this.array);
        }
        this.data.array[e * this.data.stride + this.offset + t] = n;
        return this;
    }
    setX(e, t) {
        if (this.normalized) {
            t = F(t, this.array);
        }
        this.data.array[e * this.data.stride + this.offset] = t;
        return this;
    }
    setY(e, t) {
        if (this.normalized) {
            t = F(t, this.array);
        }
        this.data.array[e * this.data.stride + this.offset + 1] = t;
        return this;
    }
    setZ(e, t) {
        if (this.normalized) {
            t = F(t, this.array);
        }
        this.data.array[e * this.data.stride + this.offset + 2] = t;
        return this;
    }
    setW(e, t) {
        if (this.normalized) {
            t = F(t, this.array);
        }
        this.data.array[e * this.data.stride + this.offset + 3] = t;
        return this;
    }
    getX(e) {
        let t = this.data.array[e * this.data.stride + this.offset];
        if (this.normalized) {
            t = mt(t, this.array);
        }
        return t;
    }
    getY(e) {
        let t = this.data.array[e * this.data.stride + this.offset + 1];
        if (this.normalized) {
            t = mt(t, this.array);
        }
        return t;
    }
    getZ(e) {
        let t = this.data.array[e * this.data.stride + this.offset + 2];
        if (this.normalized) {
            t = mt(t, this.array);
        }
        return t;
    }
    getW(e) {
        let t = this.data.array[e * this.data.stride + this.offset + 3];
        if (this.normalized) {
            t = mt(t, this.array);
        }
        return t;
    }
    setXY(e, t, n) {
        e = e * this.data.stride + this.offset;
        if (this.normalized) {
            t = F(t, this.array);
            n = F(n, this.array);
        }
        this.data.array[e + 0] = t;
        this.data.array[e + 1] = n;
        return this;
    }
    setXYZ(e, t, n, r) {
        e = e * this.data.stride + this.offset;
        if (this.normalized) {
            t = F(t, this.array);
            n = F(n, this.array);
            r = F(r, this.array);
        }
        this.data.array[e + 0] = t;
        this.data.array[e + 1] = n;
        this.data.array[e + 2] = r;
        return this;
    }
    setXYZW(e, t, n, r, i) {
        e = e * this.data.stride + this.offset;
        if (this.normalized) {
            t = F(t, this.array);
            n = F(n, this.array);
            r = F(r, this.array);
            i = F(i, this.array);
        }
        this.data.array[e + 0] = t;
        this.data.array[e + 1] = n;
        this.data.array[e + 2] = r;
        this.data.array[e + 3] = i;
        return this;
    }
    clone(t) {
        if (t === undefined) {
            nt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);
            let e = [];
            for(let t = 0; t < this.count; t++){
                let n = t * this.data.stride + this.offset;
                for(let t = 0; t < this.itemSize; t++){
                    e.push(this.data.array[n + t]);
                }
            }
            return new Qn(new this.array.constructor(e), this.itemSize, this.normalized);
        }
        if (t.interleavedBuffers === undefined) {
            t.interleavedBuffers = {};
        }
        if (t.interleavedBuffers[this.data.uuid] === undefined) {
            t.interleavedBuffers[this.data.uuid] = this.data.clone(t);
        }
        return new e(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
    }
    toJSON(e) {
        if (e === undefined) {
            nt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);
            let array = [];
            for(let t = 0; t < this.count; t++){
                let n = t * this.data.stride + this.offset;
                for(let t = 0; t < this.itemSize; t++){
                    array.push(this.data.array[n + t]);
                }
            }
            return {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array,
                normalized: this.normalized
            };
        }
        if (e.interleavedBuffers === undefined) {
            e.interleavedBuffers = {};
        }
        if (e.interleavedBuffers[this.data.uuid] === undefined) {
            e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e);
        }
        return {
            isInterleavedBufferAttribute: true,
            itemSize: this.itemSize,
            data: this.data.uuid,
            offset: this.offset,
            normalized: this.normalized
        };
    }
};
const hr = new L;
const gr = new L;
const _r = new vt;
class vr {
    constructor(e = new L(1, 0, 0), t = 0){
        this.isPlane = true;
        this.normal = e;
        this.constant = t;
    }
    set(e, t) {
        this.normal.copy(e);
        this.constant = t;
        return this;
    }
    setComponents(e, t, n, r) {
        this.normal.set(e, t, n);
        this.constant = r;
        return this;
    }
    setFromNormalAndCoplanarPoint(e, t) {
        this.normal.copy(e);
        this.constant = -t.dot(this.normal);
        return this;
    }
    setFromCoplanarPoints(e, t, n) {
        let r = hr.subVectors(n, t).cross(gr.subVectors(e, t)).normalize();
        this.setFromNormalAndCoplanarPoint(r, e);
        return this;
    }
    copy(e) {
        this.normal.copy(e.normal);
        this.constant = e.constant;
        return this;
    }
    normalize() {
        let e = 1 / this.normal.length();
        this.normal.multiplyScalar(e);
        this.constant *= e;
        return this;
    }
    negate() {
        this.constant *= -1;
        this.normal.negate();
        return this;
    }
    distanceToPoint(e) {
        return this.normal.dot(e) + this.constant;
    }
    distanceToSphere(e) {
        return this.distanceToPoint(e.center) - e.radius;
    }
    projectPoint(e, t) {
        return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
    }
    intersectLine(e, t, n = true) {
        let r = e.delta(hr);
        let i = this.normal.dot(r);
        if (i === 0) {
            if (this.distanceToPoint(e.start) === 0) {
                return t.copy(e.start);
            }
            return null;
        }
        let a = -(e.start.dot(this.normal) + this.constant) / i;
        if (n === true && (a < 0 || a > 1)) {
            return null;
        }
        return t.copy(e.start).addScaledVector(r, a);
    }
    intersectsLine(e) {
        let t = this.distanceToPoint(e.start);
        let n = this.distanceToPoint(e.end);
        return t < 0 && n > 0 || n < 0 && t > 0;
    }
    intersectsBox(e) {
        return e.intersectsPlane(this);
    }
    intersectsSphere(e) {
        return e.intersectsPlane(this);
    }
    coplanarPoint(e) {
        return e.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(e, t) {
        let n = t || _r.getNormalMatrix(e);
        let r = this.coplanarPoint(hr).applyMatrix4(e);
        let i = this.normal.applyMatrix3(n).normalize();
        this.constant = -r.dot(i);
        return this;
    }
    translate(e) {
        this.constant -= e.dot(this.normal);
        return this;
    }
    equals(e) {
        return e.normal.equals(this.normal) && e.constant === this.constant;
    }
    clone() {
        return new this.constructor().copy(this);
    }
    toJSON() {
        return {
            normal: this.normal.toArray(),
            constant: this.constant
        };
    }
    fromJSON(e) {
        this.normal.fromArray(e.normal);
        this.constant = e.constant;
        return this;
    }
}
let yr = 0;
class br extends st {
    constructor(){
        super();
        this.isMaterial = true;
        Object.defineProperty(this, "id", {
            value: yr++
        });
        this.uuid = dt();
        this.name = ``;
        this.type = `Material`;
        this.blending = 1;
        this.side = 0;
        this.vertexColors = false;
        this.opacity = 1;
        this.transparent = false;
        this.alphaHash = false;
        this.blendSrc = 204;
        this.blendDst = 205;
        this.blendEquation = 100;
        this.blendSrcAlpha = null;
        this.blendDstAlpha = null;
        this.blendEquationAlpha = null;
        this.blendColor = new B(0, 0, 0);
        this.blendAlpha = 0;
        this.depthFunc = 3;
        this.depthTest = true;
        this.depthWrite = true;
        this.stencilWriteMask = 255;
        this.stencilFunc = 519;
        this.stencilRef = 0;
        this.stencilFuncMask = 255;
        this.stencilFail = qe;
        this.stencilZFail = qe;
        this.stencilZPass = qe;
        this.stencilWrite = false;
        this.clippingPlanes = null;
        this.clipIntersection = false;
        this.clipShadows = false;
        this.shadowSide = null;
        this.colorWrite = true;
        this.precision = null;
        this.polygonOffset = false;
        this.polygonOffsetFactor = 0;
        this.polygonOffsetUnits = 0;
        this.dithering = false;
        this.alphaToCoverage = false;
        this.premultipliedAlpha = false;
        this.forceSinglePass = false;
        this.allowOverride = true;
        this.visible = true;
        this.toneMapped = true;
        this.userData = {};
        this.version = 0;
        this._alphaTest = 0;
    }
    get alphaTest() {
        return this._alphaTest;
    }
    set alphaTest(e) {
        if (this._alphaTest > 0 != e > 0) {
            this.version++;
        }
        this._alphaTest = e;
    }
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
        return this.onBeforeCompile.toString();
    }
    setValues(e) {
        if (e !== undefined) {
            for(let t in e){
                let n = e[t];
                if (n === undefined) {
                    M(`Material: parameter '${t}' has value of undefined.`);
                    continue;
                }
                let r = this[t];
                if (r === undefined) {
                    M(`Material: '${t}' is not a property of THREE.${this.type}.`);
                } else if (r && r.isColor) {
                    r.set(n);
                } else if (r && r.isVector2 && n && n.isVector2 || r && r.isEuler && n && n.isEuler || r && r.isVector3 && n && n.isVector3) {
                    r.copy(n);
                } else {
                    this[t] = n;
                }
            }
        }
    }
    toJSON(e) {
        let t = e === undefined || typeof e == `string`;
        if (t) {
            e = {
                textures: {},
                images: {}
            };
        }
        let n = {
            metadata: {
                version: 4.7,
                type: `Material`,
                generator: `Material.toJSON`
            }
        };
        n.uuid = this.uuid;
        n.type = this.type;
        n.blending = this.blending;
        n.side = this.side;
        n.shadowSide = this.shadowSide;
        n.vertexColors = this.vertexColors;
        n.opacity = this.opacity;
        n.transparent = this.transparent;
        n.blendSrc = this.blendSrc;
        n.blendDst = this.blendDst;
        n.blendEquation = this.blendEquation;
        n.blendSrcAlpha = this.blendSrcAlpha;
        n.blendDstAlpha = this.blendDstAlpha;
        n.blendEquationAlpha = this.blendEquationAlpha;
        n.blendColor = this.blendColor.getHex();
        n.blendAlpha = this.blendAlpha;
        n.depthFunc = this.depthFunc;
        n.depthTest = this.depthTest;
        n.depthWrite = this.depthWrite;
        n.colorWrite = this.colorWrite;
        n.clipIntersection = this.clipIntersection;
        n.clipShadows = this.clipShadows;
        n.stencilWriteMask = this.stencilWriteMask;
        n.stencilFunc = this.stencilFunc;
        n.stencilRef = this.stencilRef;
        n.stencilFuncMask = this.stencilFuncMask;
        n.stencilFail = this.stencilFail;
        n.stencilZFail = this.stencilZFail;
        n.stencilZPass = this.stencilZPass;
        n.stencilWrite = this.stencilWrite;
        n.polygonOffset = this.polygonOffset;
        n.polygonOffsetFactor = this.polygonOffsetFactor;
        n.polygonOffsetUnits = this.polygonOffsetUnits;
        n.dithering = this.dithering;
        n.alphaTest = this.alphaTest;
        n.alphaHash = this.alphaHash;
        n.alphaToCoverage = this.alphaToCoverage;
        n.premultipliedAlpha = this.premultipliedAlpha;
        n.forceSinglePass = this.forceSinglePass;
        n.allowOverride = this.allowOverride;
        n.visible = this.visible;
        n.toneMapped = this.toneMapped;
        n.name = this.name;
        if (this.color && this.color.isColor) {
            n.color = this.color.getHex();
        }
        if (this.roughness !== undefined) {
            n.roughness = this.roughness;
        }
        if (this.metalness !== undefined) {
            n.metalness = this.metalness;
        }
        if (this.sheen !== undefined) {
            n.sheen = this.sheen;
        }
        if (this.sheenColor && this.sheenColor.isColor) {
            n.sheenColor = this.sheenColor.getHex();
        }
        if (this.sheenRoughness !== undefined) {
            n.sheenRoughness = this.sheenRoughness;
        }
        if (this.emissive && this.emissive.isColor) {
            n.emissive = this.emissive.getHex();
        }
        if (this.emissiveIntensity !== undefined) {
            n.emissiveIntensity = this.emissiveIntensity;
        }
        if (this.specular && this.specular.isColor) {
            n.specular = this.specular.getHex();
        }
        if (this.specularIntensity !== undefined) {
            n.specularIntensity = this.specularIntensity;
        }
        if (this.specularColor && this.specularColor.isColor) {
            n.specularColor = this.specularColor.getHex();
        }
        if (this.shininess !== undefined) {
            n.shininess = this.shininess;
        }
        if (this.clearcoat !== undefined) {
            n.clearcoat = this.clearcoat;
        }
        if (this.clearcoatRoughness !== undefined) {
            n.clearcoatRoughness = this.clearcoatRoughness;
        }
        if (this.clearcoatMap && this.clearcoatMap.isTexture) {
            n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid;
        }
        if (this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture) {
            n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid;
        }
        if (this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture) {
            n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid;
            n.clearcoatNormalScale = this.clearcoatNormalScale.toArray();
        }
        if (this.sheenColorMap && this.sheenColorMap.isTexture) {
            n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid;
        }
        if (this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture) {
            n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid;
        }
        if (this.dispersion !== undefined) {
            n.dispersion = this.dispersion;
        }
        if (this.retroreflectivity !== undefined) {
            n.retroreflectivity = this.retroreflectivity;
        }
        if (this.iridescence !== undefined) {
            n.iridescence = this.iridescence;
        }
        if (this.iridescenceIOR !== undefined) {
            n.iridescenceIOR = this.iridescenceIOR;
        }
        if (this.iridescenceThicknessRange !== undefined) {
            n.iridescenceThicknessRange = this.iridescenceThicknessRange;
        }
        if (this.iridescenceMap && this.iridescenceMap.isTexture) {
            n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid;
        }
        if (this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture) {
            n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid;
        }
        if (this.anisotropy !== undefined) {
            n.anisotropy = this.anisotropy;
        }
        if (this.anisotropyRotation !== undefined) {
            n.anisotropyRotation = this.anisotropyRotation;
        }
        if (this.anisotropyMap && this.anisotropyMap.isTexture) {
            n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid;
        }
        if (this.map && this.map.isTexture) {
            n.map = this.map.toJSON(e).uuid;
        }
        if (this.matcap && this.matcap.isTexture) {
            n.matcap = this.matcap.toJSON(e).uuid;
        }
        if (this.alphaMap && this.alphaMap.isTexture) {
            n.alphaMap = this.alphaMap.toJSON(e).uuid;
        }
        if (this.lightMap && this.lightMap.isTexture) {
            n.lightMap = this.lightMap.toJSON(e).uuid;
            n.lightMapIntensity = this.lightMapIntensity;
        }
        if (this.aoMap && this.aoMap.isTexture) {
            n.aoMap = this.aoMap.toJSON(e).uuid;
            n.aoMapIntensity = this.aoMapIntensity;
        }
        if (this.bumpMap && this.bumpMap.isTexture) {
            n.bumpMap = this.bumpMap.toJSON(e).uuid;
            n.bumpScale = this.bumpScale;
        }
        if (this.normalMap && this.normalMap.isTexture) {
            n.normalMap = this.normalMap.toJSON(e).uuid;
            n.normalMapType = this.normalMapType;
            n.normalScale = this.normalScale.toArray();
        }
        if (this.displacementMap && this.displacementMap.isTexture) {
            n.displacementMap = this.displacementMap.toJSON(e).uuid;
            n.displacementScale = this.displacementScale;
            n.displacementBias = this.displacementBias;
        }
        if (this.roughnessMap && this.roughnessMap.isTexture) {
            n.roughnessMap = this.roughnessMap.toJSON(e).uuid;
        }
        if (this.metalnessMap && this.metalnessMap.isTexture) {
            n.metalnessMap = this.metalnessMap.toJSON(e).uuid;
        }
        if (this.emissiveMap && this.emissiveMap.isTexture) {
            n.emissiveMap = this.emissiveMap.toJSON(e).uuid;
        }
        if (this.specularMap && this.specularMap.isTexture) {
            n.specularMap = this.specularMap.toJSON(e).uuid;
        }
        if (this.specularIntensityMap && this.specularIntensityMap.isTexture) {
            n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid;
        }
        if (this.specularColorMap && this.specularColorMap.isTexture) {
            n.specularColorMap = this.specularColorMap.toJSON(e).uuid;
        }
        if (this.envMap && this.envMap.isTexture) {
            n.envMap = this.envMap.toJSON(e).uuid;
            if (this.combine !== undefined) {
                n.combine = this.combine;
            }
        }
        if (this.envMapRotation !== undefined) {
            n.envMapRotation = this.envMapRotation.toArray();
        }
        if (this.envMapIntensity !== undefined) {
            n.envMapIntensity = this.envMapIntensity;
        }
        if (this.reflectivity !== undefined) {
            n.reflectivity = this.reflectivity;
        }
        if (this.refractionRatio !== undefined) {
            n.refractionRatio = this.refractionRatio;
        }
        if (this.gradientMap && this.gradientMap.isTexture) {
            n.gradientMap = this.gradientMap.toJSON(e).uuid;
        }
        if (this.transmission !== undefined) {
            n.transmission = this.transmission;
        }
        if (this.transmissionMap && this.transmissionMap.isTexture) {
            n.transmissionMap = this.transmissionMap.toJSON(e).uuid;
        }
        if (this.thickness !== undefined) {
            n.thickness = this.thickness;
        }
        if (this.thicknessMap && this.thicknessMap.isTexture) {
            n.thicknessMap = this.thicknessMap.toJSON(e).uuid;
        }
        if (this.attenuationDistance !== undefined) {
            n.attenuationDistance = this.attenuationDistance;
        }
        if (this.attenuationColor !== undefined) {
            n.attenuationColor = this.attenuationColor.getHex();
        }
        if (this.size !== undefined) {
            n.size = this.size;
        }
        if (this.sizeAttenuation !== undefined) {
            n.sizeAttenuation = this.sizeAttenuation;
        }
        if (Array.isArray(this.clippingPlanes) && this.clippingPlanes.length > 0) {
            n.clippingPlanes = this.clippingPlanes.map((e)=>e.toJSON());
        }
        if (this.rotation !== undefined) {
            n.rotation = this.rotation;
        }
        if (this.depthPacking !== undefined) {
            n.depthPacking = this.depthPacking;
        }
        if (this.linewidth !== undefined) {
            n.linewidth = this.linewidth;
        }
        if (this.linecap !== undefined) {
            n.linecap = this.linecap;
        }
        if (this.linejoin !== undefined) {
            n.linejoin = this.linejoin;
        }
        if (this.dashSize !== undefined) {
            n.dashSize = this.dashSize;
        }
        if (this.gapSize !== undefined) {
            n.gapSize = this.gapSize;
        }
        if (this.scale !== undefined) {
            n.scale = this.scale;
        }
        if (this.wireframe !== undefined) {
            n.wireframe = this.wireframe;
        }
        if (this.wireframeLinewidth !== undefined) {
            n.wireframeLinewidth = this.wireframeLinewidth;
        }
        if (this.wireframeLinecap !== undefined) {
            n.wireframeLinecap = this.wireframeLinecap;
        }
        if (this.wireframeLinejoin !== undefined) {
            n.wireframeLinejoin = this.wireframeLinejoin;
        }
        if (this.flatShading !== undefined) {
            n.flatShading = this.flatShading;
        }
        if (this.fog !== undefined) {
            n.fog = this.fog;
        }
        if (Object.keys(this.userData).length > 0) {
            n.userData = this.userData;
        }
        function r(e) {
            let t = [];
            for(let n in e){
                let r = e[n];
                delete r.metadata;
                t.push(r);
            }
            return t;
        }
        if (t) {
            let t = r(e.textures);
            let i = r(e.images);
            if (t.length > 0) {
                n.textures = t;
            }
            if (i.length > 0) {
                n.images = i;
            }
        }
        return n;
    }
    fromJSON(e, t) {
        if (e.uuid !== undefined) {
            this.uuid = e.uuid;
        }
        if (e.name !== undefined) {
            this.name = e.name;
        }
        if (e.color !== undefined && this.color !== undefined) {
            this.color.setHex(e.color);
        }
        if (e.roughness !== undefined) {
            this.roughness = e.roughness;
        }
        if (e.metalness !== undefined) {
            this.metalness = e.metalness;
        }
        if (e.sheen !== undefined) {
            this.sheen = e.sheen;
        }
        if (e.sheenColor !== undefined) {
            this.sheenColor = new B().setHex(e.sheenColor);
        }
        if (e.sheenRoughness !== undefined) {
            this.sheenRoughness = e.sheenRoughness;
        }
        if (e.emissive !== undefined && this.emissive !== undefined) {
            this.emissive.setHex(e.emissive);
        }
        if (e.specular !== undefined && this.specular !== undefined) {
            this.specular.setHex(e.specular);
        }
        if (e.specularIntensity !== undefined) {
            this.specularIntensity = e.specularIntensity;
        }
        if (e.specularColor !== undefined && this.specularColor !== undefined) {
            this.specularColor.setHex(e.specularColor);
        }
        if (e.shininess !== undefined) {
            this.shininess = e.shininess;
        }
        if (e.clearcoat !== undefined) {
            this.clearcoat = e.clearcoat;
        }
        if (e.clearcoatRoughness !== undefined) {
            this.clearcoatRoughness = e.clearcoatRoughness;
        }
        if (e.dispersion !== undefined) {
            this.dispersion = e.dispersion;
        }
        if (e.retroreflectivity !== undefined) {
            this.retroreflectivity = e.retroreflectivity;
        }
        if (e.iridescence !== undefined) {
            this.iridescence = e.iridescence;
        }
        if (e.iridescenceIOR !== undefined) {
            this.iridescenceIOR = e.iridescenceIOR;
        }
        if (e.iridescenceThicknessRange !== undefined) {
            this.iridescenceThicknessRange = e.iridescenceThicknessRange;
        }
        if (e.transmission !== undefined) {
            this.transmission = e.transmission;
        }
        if (e.thickness !== undefined) {
            this.thickness = e.thickness;
        }
        if (e.attenuationDistance !== undefined) {
            this.attenuationDistance = e.attenuationDistance;
        }
        if (e.attenuationColor !== undefined && this.attenuationColor !== undefined) {
            this.attenuationColor.setHex(e.attenuationColor);
        }
        if (e.anisotropy !== undefined) {
            this.anisotropy = e.anisotropy;
        }
        if (e.anisotropyRotation !== undefined) {
            this.anisotropyRotation = e.anisotropyRotation;
        }
        if (e.fog !== undefined) {
            this.fog = e.fog;
        }
        if (e.flatShading !== undefined) {
            this.flatShading = e.flatShading;
        }
        if (e.blending !== undefined) {
            this.blending = e.blending;
        }
        if (e.combine !== undefined) {
            this.combine = e.combine;
        }
        if (e.side !== undefined) {
            this.side = e.side;
        }
        if (e.shadowSide !== undefined) {
            this.shadowSide = e.shadowSide;
        }
        if (e.opacity !== undefined) {
            this.opacity = e.opacity;
        }
        if (e.transparent !== undefined) {
            this.transparent = e.transparent;
        }
        if (e.alphaTest !== undefined) {
            this.alphaTest = e.alphaTest;
        }
        if (e.alphaHash !== undefined) {
            this.alphaHash = e.alphaHash;
        }
        if (e.depthFunc !== undefined) {
            this.depthFunc = e.depthFunc;
        }
        if (e.depthTest !== undefined) {
            this.depthTest = e.depthTest;
        }
        if (e.depthWrite !== undefined) {
            this.depthWrite = e.depthWrite;
        }
        if (e.colorWrite !== undefined) {
            this.colorWrite = e.colorWrite;
        }
        if (e.clippingPlanes !== undefined) {
            this.clippingPlanes = e.clippingPlanes.map((e)=>new vr().fromJSON(e));
        }
        if (e.clipIntersection !== undefined) {
            this.clipIntersection = e.clipIntersection;
        }
        if (e.clipShadows !== undefined) {
            this.clipShadows = e.clipShadows;
        }
        if (e.depthPacking !== undefined) {
            this.depthPacking = e.depthPacking;
        }
        if (e.blendSrc !== undefined) {
            this.blendSrc = e.blendSrc;
        }
        if (e.blendDst !== undefined) {
            this.blendDst = e.blendDst;
        }
        if (e.blendEquation !== undefined) {
            this.blendEquation = e.blendEquation;
        }
        if (e.blendSrcAlpha !== undefined) {
            this.blendSrcAlpha = e.blendSrcAlpha;
        }
        if (e.blendDstAlpha !== undefined) {
            this.blendDstAlpha = e.blendDstAlpha;
        }
        if (e.blendEquationAlpha !== undefined) {
            this.blendEquationAlpha = e.blendEquationAlpha;
        }
        if (e.blendColor !== undefined && this.blendColor !== undefined) {
            this.blendColor.setHex(e.blendColor);
        }
        if (e.blendAlpha !== undefined) {
            this.blendAlpha = e.blendAlpha;
        }
        if (e.stencilWriteMask !== undefined) {
            this.stencilWriteMask = e.stencilWriteMask;
        }
        if (e.stencilFunc !== undefined) {
            this.stencilFunc = e.stencilFunc;
        }
        if (e.stencilRef !== undefined) {
            this.stencilRef = e.stencilRef;
        }
        if (e.stencilFuncMask !== undefined) {
            this.stencilFuncMask = e.stencilFuncMask;
        }
        if (e.stencilFail !== undefined) {
            this.stencilFail = e.stencilFail;
        }
        if (e.stencilZFail !== undefined) {
            this.stencilZFail = e.stencilZFail;
        }
        if (e.stencilZPass !== undefined) {
            this.stencilZPass = e.stencilZPass;
        }
        if (e.stencilWrite !== undefined) {
            this.stencilWrite = e.stencilWrite;
        }
        if (e.wireframe !== undefined) {
            this.wireframe = e.wireframe;
        }
        if (e.wireframeLinewidth !== undefined) {
            this.wireframeLinewidth = e.wireframeLinewidth;
        }
        if (e.wireframeLinecap !== undefined) {
            this.wireframeLinecap = e.wireframeLinecap;
        }
        if (e.wireframeLinejoin !== undefined) {
            this.wireframeLinejoin = e.wireframeLinejoin;
        }
        if (e.rotation !== undefined) {
            this.rotation = e.rotation;
        }
        if (e.linewidth !== undefined) {
            this.linewidth = e.linewidth;
        }
        if (e.linecap !== undefined) {
            this.linecap = e.linecap;
        }
        if (e.linejoin !== undefined) {
            this.linejoin = e.linejoin;
        }
        if (e.dashSize !== undefined) {
            this.dashSize = e.dashSize;
        }
        if (e.gapSize !== undefined) {
            this.gapSize = e.gapSize;
        }
        if (e.scale !== undefined) {
            this.scale = e.scale;
        }
        if (e.polygonOffset !== undefined) {
            this.polygonOffset = e.polygonOffset;
        }
        if (e.polygonOffsetFactor !== undefined) {
            this.polygonOffsetFactor = e.polygonOffsetFactor;
        }
        if (e.polygonOffsetUnits !== undefined) {
            this.polygonOffsetUnits = e.polygonOffsetUnits;
        }
        if (e.dithering !== undefined) {
            this.dithering = e.dithering;
        }
        if (e.alphaToCoverage !== undefined) {
            this.alphaToCoverage = e.alphaToCoverage;
        }
        if (e.premultipliedAlpha !== undefined) {
            this.premultipliedAlpha = e.premultipliedAlpha;
        }
        if (e.forceSinglePass !== undefined) {
            this.forceSinglePass = e.forceSinglePass;
        }
        if (e.allowOverride !== undefined) {
            this.allowOverride = e.allowOverride;
        }
        if (e.visible !== undefined) {
            this.visible = e.visible;
        }
        if (e.toneMapped !== undefined) {
            this.toneMapped = e.toneMapped;
        }
        if (e.userData !== undefined) {
            this.userData = e.userData;
        }
        if (e.vertexColors !== undefined) {
            this.vertexColors = typeof e.vertexColors == `number` ? e.vertexColors > 0 : e.vertexColors;
        }
        if (e.size !== undefined) {
            this.size = e.size;
        }
        if (e.sizeAttenuation !== undefined) {
            this.sizeAttenuation = e.sizeAttenuation;
        }
        if (e.map !== undefined) {
            this.map = t[e.map] || null;
        }
        if (e.matcap !== undefined) {
            this.matcap = t[e.matcap] || null;
        }
        if (e.alphaMap !== undefined) {
            this.alphaMap = t[e.alphaMap] || null;
        }
        if (e.bumpMap !== undefined) {
            this.bumpMap = t[e.bumpMap] || null;
        }
        if (e.bumpScale !== undefined) {
            this.bumpScale = e.bumpScale;
        }
        if (e.normalMap !== undefined) {
            this.normalMap = t[e.normalMap] || null;
        }
        if (e.normalMapType !== undefined) {
            this.normalMapType = e.normalMapType;
        }
        if (e.normalScale !== undefined) {
            let t = e.normalScale;
            if (Array.isArray(t) === false) {
                t = [
                    t,
                    t
                ];
            }
            this.normalScale = new I().fromArray(t);
        }
        if (e.displacementMap !== undefined) {
            this.displacementMap = t[e.displacementMap] || null;
        }
        if (e.displacementScale !== undefined) {
            this.displacementScale = e.displacementScale;
        }
        if (e.displacementBias !== undefined) {
            this.displacementBias = e.displacementBias;
        }
        if (e.roughnessMap !== undefined) {
            this.roughnessMap = t[e.roughnessMap] || null;
        }
        if (e.metalnessMap !== undefined) {
            this.metalnessMap = t[e.metalnessMap] || null;
        }
        if (e.emissiveMap !== undefined) {
            this.emissiveMap = t[e.emissiveMap] || null;
        }
        if (e.emissiveIntensity !== undefined) {
            this.emissiveIntensity = e.emissiveIntensity;
        }
        if (e.specularMap !== undefined) {
            this.specularMap = t[e.specularMap] || null;
        }
        if (e.specularIntensityMap !== undefined) {
            this.specularIntensityMap = t[e.specularIntensityMap] || null;
        }
        if (e.specularColorMap !== undefined) {
            this.specularColorMap = t[e.specularColorMap] || null;
        }
        if (e.envMap !== undefined) {
            this.envMap = t[e.envMap] || null;
        }
        if (e.envMapRotation !== undefined) {
            this.envMapRotation.fromArray(e.envMapRotation);
        }
        if (e.envMapIntensity !== undefined) {
            this.envMapIntensity = e.envMapIntensity;
        }
        if (e.reflectivity !== undefined) {
            this.reflectivity = e.reflectivity;
        }
        if (e.refractionRatio !== undefined) {
            this.refractionRatio = e.refractionRatio;
        }
        if (e.lightMap !== undefined) {
            this.lightMap = t[e.lightMap] || null;
        }
        if (e.lightMapIntensity !== undefined) {
            this.lightMapIntensity = e.lightMapIntensity;
        }
        if (e.aoMap !== undefined) {
            this.aoMap = t[e.aoMap] || null;
        }
        if (e.aoMapIntensity !== undefined) {
            this.aoMapIntensity = e.aoMapIntensity;
        }
        if (e.gradientMap !== undefined) {
            this.gradientMap = t[e.gradientMap] || null;
        }
        if (e.clearcoatMap !== undefined) {
            this.clearcoatMap = t[e.clearcoatMap] || null;
        }
        if (e.clearcoatRoughnessMap !== undefined) {
            this.clearcoatRoughnessMap = t[e.clearcoatRoughnessMap] || null;
        }
        if (e.clearcoatNormalMap !== undefined) {
            this.clearcoatNormalMap = t[e.clearcoatNormalMap] || null;
        }
        if (e.clearcoatNormalScale !== undefined) {
            this.clearcoatNormalScale = new I().fromArray(e.clearcoatNormalScale);
        }
        if (e.iridescenceMap !== undefined) {
            this.iridescenceMap = t[e.iridescenceMap] || null;
        }
        if (e.iridescenceThicknessMap !== undefined) {
            this.iridescenceThicknessMap = t[e.iridescenceThicknessMap] || null;
        }
        if (e.transmissionMap !== undefined) {
            this.transmissionMap = t[e.transmissionMap] || null;
        }
        if (e.thicknessMap !== undefined) {
            this.thicknessMap = t[e.thicknessMap] || null;
        }
        if (e.anisotropyMap !== undefined) {
            this.anisotropyMap = t[e.anisotropyMap] || null;
        }
        if (e.sheenColorMap !== undefined) {
            this.sheenColorMap = t[e.sheenColorMap] || null;
        }
        if (e.sheenRoughnessMap !== undefined) {
            this.sheenRoughnessMap = t[e.sheenRoughnessMap] || null;
        }
        return this;
    }
    clone() {
        return new this.constructor().copy(this);
    }
    copy(e) {
        this.name = e.name;
        this.blending = e.blending;
        this.side = e.side;
        this.vertexColors = e.vertexColors;
        this.opacity = e.opacity;
        this.transparent = e.transparent;
        this.blendSrc = e.blendSrc;
        this.blendDst = e.blendDst;
        this.blendEquation = e.blendEquation;
        this.blendSrcAlpha = e.blendSrcAlpha;
        this.blendDstAlpha = e.blendDstAlpha;
        this.blendEquationAlpha = e.blendEquationAlpha;
        this.blendColor.copy(e.blendColor);
        this.blendAlpha = e.blendAlpha;
        this.depthFunc = e.depthFunc;
        this.depthTest = e.depthTest;
        this.depthWrite = e.depthWrite;
        this.stencilWriteMask = e.stencilWriteMask;
        this.stencilFunc = e.stencilFunc;
        this.stencilRef = e.stencilRef;
        this.stencilFuncMask = e.stencilFuncMask;
        this.stencilFail = e.stencilFail;
        this.stencilZFail = e.stencilZFail;
        this.stencilZPass = e.stencilZPass;
        this.stencilWrite = e.stencilWrite;
        let e_clippingPlanes = e.clippingPlanes;
        let n = null;
        if (e_clippingPlanes !== null) {
            let e = e_clippingPlanes.length;
            n = Array(e);
            for(let r = 0; r !== e; ++r){
                n[r] = e_clippingPlanes[r].clone();
            }
        }
        this.clippingPlanes = n;
        this.clipIntersection = e.clipIntersection;
        this.clipShadows = e.clipShadows;
        this.shadowSide = e.shadowSide;
        this.colorWrite = e.colorWrite;
        this.precision = e.precision;
        this.polygonOffset = e.polygonOffset;
        this.polygonOffsetFactor = e.polygonOffsetFactor;
        this.polygonOffsetUnits = e.polygonOffsetUnits;
        this.dithering = e.dithering;
        this.alphaTest = e.alphaTest;
        this.alphaHash = e.alphaHash;
        this.alphaToCoverage = e.alphaToCoverage;
        this.premultipliedAlpha = e.premultipliedAlpha;
        this.forceSinglePass = e.forceSinglePass;
        this.allowOverride = e.allowOverride;
        this.visible = e.visible;
        this.toneMapped = e.toneMapped;
        this.userData = JSON.parse(JSON.stringify(e.userData));
        return this;
    }
    dispose() {
        this.dispatchEvent({
            type: `dispose`
        });
    }
    set needsUpdate(e) {
        if (e === true) {
            this.version++;
        }
    }
}
class xr extends br {
    constructor(e){
        super();
        this.isSpriteMaterial = true;
        this.type = `SpriteMaterial`;
        this.color = new B(16777215);
        this.map = null;
        this.alphaMap = null;
        this.rotation = 0;
        this.sizeAttenuation = true;
        this.transparent = true;
        this.fog = true;
        this.setValues(e);
    }
    copy(e) {
        super.copy(e);
        this.color.copy(e.color);
        this.map = e.map;
        this.alphaMap = e.alphaMap;
        this.rotation = e.rotation;
        this.sizeAttenuation = e.sizeAttenuation;
        this.fog = e.fog;
        return this;
    }
}
let Sr;
const Cr = new L;
const wr = new L;
const Tr = new L;
const Er = new I;
const Dr = new I;
const Or = new R;
const kr = new L;
const Ar = new L;
const jr = new L;
const Mr = new I;
const Nr = new I;
const Pr = new I;
class Fr extends fn {
    constructor(e = new xr){
        super();
        this.isSprite = true;
        this.type = `Sprite`;
        if (Sr === undefined) {
            Sr = new dr;
            let e = new fr(new Float32Array([
                -0.5,
                -0.5,
                0,
                0,
                0,
                0.5,
                -0.5,
                0,
                1,
                0,
                0.5,
                0.5,
                0,
                1,
                1,
                -0.5,
                0.5,
                0,
                0,
                1
            ]), 5);
            Sr.setIndex([
                0,
                1,
                2,
                0,
                2,
                3
            ]);
            Sr.setAttribute(`position`, new mr(e, 3, 0, false));
            Sr.setAttribute(`uv`, new mr(e, 2, 3, false));
        }
        this.geometry = Sr;
        this.material = e;
        this.center = new I(0.5, 0.5);
        this.count = 1;
    }
    intersectsFrustum(e) {
        return e.intersectsSprite(this);
    }
    raycast(e, t) {
        if (e.camera === null) {
            N(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`);
        }
        wr.setFromMatrixScale(this.matrixWorld);
        Or.copy(e.camera.matrixWorld);
        this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld);
        Tr.setFromMatrixPosition(this.modelViewMatrix);
        if (e.camera.isPerspectiveCamera && this.material.sizeAttenuation === false) {
            wr.multiplyScalar(-Tr.z);
        }
        let rotation = this.material.rotation;
        let r;
        let i;
        if (rotation !== 0) {
            i = Math.cos(rotation);
            r = Math.sin(rotation);
        }
        let center = this.center;
        Ir(kr.set(-0.5, -0.5, 0), Tr, center, wr, r, i);
        Ir(Ar.set(0.5, -0.5, 0), Tr, center, wr, r, i);
        Ir(jr.set(0.5, 0.5, 0), Tr, center, wr, r, i);
        Mr.set(0, 0);
        Nr.set(1, 0);
        Pr.set(1, 1);
        let o = e.ray.intersectTriangle(kr, Ar, jr, false, Cr);
        if (o === null && (Ir(Ar.set(-0.5, 0.5, 0), Tr, center, wr, r, i), Nr.set(0, 1), o = e.ray.intersectTriangle(kr, jr, Ar, false, Cr), o === null)) {
            return;
        }
        let s = e.ray.origin.distanceTo(Cr);
        if (!(s < e.near || s > e.far)) {
            t.push({
                distance: s,
                point: Cr.clone(),
                uv: Pn.getInterpolation(Cr, kr, Ar, jr, Mr, Nr, Pr, new I),
                face: null,
                object: this
            });
        }
    }
    copy(e, t) {
        super.copy(e, t);
        if (e.center !== undefined) {
            this.center.copy(e.center);
        }
        this.material = e.material;
        return this;
    }
}
function Ir(e, t, center, r, i, a) {
    Er.subVectors(e, center).addScalar(0.5).multiply(r);
    if (i === undefined) {
        Dr.copy(Er);
    } else {
        Dr.x = a * Er.x - i * Er.y;
        Dr.y = i * Er.x + a * Er.y;
    }
    e.copy(t);
    e.x += Dr.x;
    e.y += Dr.y;
    e.applyMatrix4(Or);
}
const Lr = new L;
const Rr = new L;
const zr = new L;
const Br = new L;
class Vr {
    constructor(e = new L, t = new L(0, 0, -1)){
        this.origin = e;
        this.direction = t;
    }
    set(e, t) {
        this.origin.copy(e);
        this.direction.copy(t);
        return this;
    }
    copy(e) {
        this.origin.copy(e.origin);
        this.direction.copy(e.direction);
        return this;
    }
    at(e, t) {
        return t.copy(this.origin).addScaledVector(this.direction, e);
    }
    lookAt(e) {
        this.direction.copy(e).sub(this.origin).normalize();
        return this;
    }
    recast(e) {
        this.origin.copy(this.at(e, Lr));
        return this;
    }
    closestPointToPoint(e, t) {
        t.subVectors(e, this.origin);
        let n = t.dot(this.direction);
        if (n < 0) {
            return t.copy(this.origin);
        }
        return t.copy(this.origin).addScaledVector(this.direction, n);
    }
    distanceToPoint(e) {
        return Math.sqrt(this.distanceSqToPoint(e));
    }
    distanceSqToPoint(e) {
        let t = Lr.subVectors(e, this.origin).dot(this.direction);
        if (t < 0) {
            return this.origin.distanceToSquared(e);
        }
        Lr.copy(this.origin).addScaledVector(this.direction, t);
        return Lr.distanceToSquared(e);
    }
    distanceSqToSegment(e, t, n, r) {
        Rr.copy(e).add(t).multiplyScalar(0.5);
        zr.copy(t).sub(e).normalize();
        Br.copy(this.origin).sub(Rr);
        let i = e.distanceTo(t) * 0.5;
        let a = -this.direction.dot(zr);
        let o = Br.dot(this.direction);
        let s = -Br.dot(zr);
        let c = Br.lengthSq();
        let l = Math.abs(1 - a * a);
        let u;
        let d;
        let f;
        let p;
        if (l > 0) {
            u = a * s - o;
            d = a * o - s;
            p = i * l;
            if (u >= 0) {
                if (d >= -p) {
                    if (d <= p) {
                        let e = 1 / l;
                        u *= e;
                        d *= e;
                        f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * s) + c;
                    } else {
                        d = i;
                        u = Math.max(0, -(a * d + o));
                        f = -u * u + d * (d + 2 * s) + c;
                    }
                } else {
                    d = -i;
                    u = Math.max(0, -(a * d + o));
                    f = -u * u + d * (d + 2 * s) + c;
                }
            } else {
                if (d <= -p) {
                    u = Math.max(0, -(-a * i + o));
                    d = u > 0 ? -i : Math.min(Math.max(-i, -s), i);
                    f = -u * u + d * (d + 2 * s) + c;
                } else if (d <= p) {
                    u = 0;
                    d = Math.min(Math.max(-i, -s), i);
                    f = d * (d + 2 * s) + c;
                } else {
                    u = Math.max(0, -(a * i + o));
                    d = u > 0 ? i : Math.min(Math.max(-i, -s), i);
                    f = -u * u + d * (d + 2 * s) + c;
                }
            }
        } else {
            d = a > 0 ? -i : i;
            u = Math.max(0, -(a * d + o));
            f = -u * u + d * (d + 2 * s) + c;
        }
        if (n) {
            n.copy(this.origin).addScaledVector(this.direction, u);
        }
        if (r) {
            r.copy(Rr).addScaledVector(zr, d);
        }
        return f;
    }
    intersectSphere(e, t) {
        if (e.radius < 0) {
            return null;
        }
        Lr.subVectors(e.center, this.origin);
        let n = Lr.dot(this.direction);
        let r = Lr.dot(Lr) - n * n;
        let i = e.radius * e.radius;
        if (r > i) {
            return null;
        }
        let a = Math.sqrt(i - r);
        let o = n - a;
        let s = n + a;
        if (s < 0) {
            return null;
        }
        if (o < 0) {
            return this.at(s, t);
        }
        return this.at(o, t);
    }
    intersectsSphere(e) {
        if (e.radius < 0) {
            return false;
        }
        return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
    }
    distanceToPlane(e) {
        let t = e.normal.dot(this.direction);
        if (t === 0) {
            if (e.distanceToPoint(this.origin) === 0) {
                return 0;
            }
            return null;
        }
        let n = -(this.origin.dot(e.normal) + e.constant) / t;
        if (n >= 0) {
            return n;
        }
        return null;
    }
    intersectPlane(e, t) {
        let n = this.distanceToPlane(e);
        if (n === null) {
            return null;
        }
        return this.at(n, t);
    }
    intersectsPlane(e) {
        let t = e.distanceToPoint(this.origin);
        return t === 0 || e.normal.dot(this.direction) * t < 0;
    }
    intersectBox(e, t) {
        let n;
        let r;
        let i;
        let a;
        let o;
        let s;
        let c = 1 / this.direction.x;
        let l = 1 / this.direction.y;
        let u = 1 / this.direction.z;
        let origin = this.origin;
        if (c >= 0) {
            n = (e.min.x - origin.x) * c;
            r = (e.max.x - origin.x) * c;
        } else {
            n = (e.max.x - origin.x) * c;
            r = (e.min.x - origin.x) * c;
        }
        if (l >= 0) {
            i = (e.min.y - origin.y) * l;
            a = (e.max.y - origin.y) * l;
        } else {
            i = (e.max.y - origin.y) * l;
            a = (e.min.y - origin.y) * l;
        }
        if (n > a || i > r || ((i > n || isNaN(n)) && (n = i), (a < r || isNaN(r)) && (r = a), u >= 0 ? (o = (e.min.z - origin.z) * u, s = (e.max.z - origin.z) * u) : (o = (e.max.z - origin.z) * u, s = (e.min.z - origin.z) * u), n > s || o > r) || ((o > n || n !== n) && (n = o), (s < r || r !== r) && (r = s), r < 0)) {
            return null;
        }
        return this.at(n >= 0 ? n : r, t);
    }
    intersectsBox(e) {
        return this.intersectBox(e, Lr) !== null;
    }
    intersectTriangle(e, t, n, r, i) {
        let origin = this.origin;
        let direction = this.direction;
        let direction_x = direction.x;
        let direction_y = direction.y;
        let direction_z = direction.z;
        let u = e.x - origin.x;
        let d = e.y - origin.y;
        let f = e.z - origin.z;
        let p = t.x - origin.x;
        let m = t.y - origin.y;
        let h = t.z - origin.z;
        let g = n.x - origin.x;
        let _ = n.y - origin.y;
        let v = n.z - origin.z;
        let y = Math.abs(direction_x);
        let b = Math.abs(direction_y);
        let x = Math.abs(direction_z);
        let S;
        let C;
        let w;
        let T;
        let E;
        let D;
        let O;
        let k;
        let A;
        let ee;
        let te;
        let j;
        if (y >= b && y >= x) {
            w = direction_x;
            D = u;
            A = p;
            j = g;
            if (direction_x >= 0) {
                S = direction_y;
                C = direction_z;
                T = d;
                E = f;
                O = m;
                k = h;
                ee = _;
                te = v;
            } else {
                S = direction_z;
                C = direction_y;
                T = f;
                E = d;
                O = h;
                k = m;
                ee = v;
                te = _;
            }
        } else if (b >= x) {
            w = direction_y;
            D = d;
            A = m;
            j = _;
            if (direction_y >= 0) {
                S = direction_z;
                C = direction_x;
                T = f;
                E = u;
                O = h;
                k = p;
                ee = v;
                te = g;
            } else {
                S = direction_x;
                C = direction_z;
                T = u;
                E = f;
                O = p;
                k = h;
                ee = g;
                te = v;
            }
        } else {
            w = direction_z;
            D = f;
            A = h;
            j = v;
            if (direction_z >= 0) {
                S = direction_x;
                C = direction_y;
                T = u;
                E = d;
                O = p;
                k = m;
                ee = g;
                te = _;
            } else {
                S = direction_y;
                C = direction_x;
                T = d;
                E = u;
                O = m;
                k = p;
                ee = _;
                te = g;
            }
        }
        if (w === 0) {
            return null;
        }
        let ne = S / w;
        let re = C / w;
        let ie = 1 / w;
        let ae = T - ne * D;
        let oe = E - re * D;
        let se = O - ne * A;
        let ce = k - re * A;
        let le = ee - ne * j;
        let ue = te - re * j;
        let de = le * ce - ue * se;
        let fe = ae * ue - oe * le;
        let pe = se * oe - ce * ae;
        if (r) {
            if (de < 0 || fe < 0 || pe < 0) {
                return null;
            }
        } else if ((de < 0 || fe < 0 || pe < 0) && (de > 0 || fe > 0 || pe > 0)) {
            return null;
        }
        let me = de + fe + pe;
        if (me === 0) {
            return null;
        }
        let he = ie * (de * D + fe * A + pe * j);
        if (me > 0 ? he < 0 : he > 0) {
            return null;
        }
        return this.at(he / me, i);
    }
    applyMatrix4(e) {
        this.origin.applyMatrix4(e);
        this.direction.transformDirection(e);
        return this;
    }
    equals(e) {
        return e.origin.equals(this.origin) && e.direction.equals(this.direction);
    }
    clone() {
        return new this.constructor().copy(this);
    }
}
class Hr extends br {
    constructor(e){
        super();
        this.isMeshBasicMaterial = true;
        this.type = `MeshBasicMaterial`;
        this.color = new B(16777215);
        this.map = null;
        this.lightMap = null;
        this.lightMapIntensity = 1;
        this.aoMap = null;
        this.aoMapIntensity = 1;
        this.specularMap = null;
        this.alphaMap = null;
        this.envMap = null;
        this.envMapRotation = new Jt;
        this.combine = 0;
        this.reflectivity = 1;
        this.refractionRatio = 0.98;
        this.wireframe = false;
        this.wireframeLinewidth = 1;
        this.wireframeLinecap = `round`;
        this.wireframeLinejoin = `round`;
        this.fog = true;
        this.setValues(e);
    }
    copy(e) {
        super.copy(e);
        this.color.copy(e.color);
        this.map = e.map;
        this.lightMap = e.lightMap;
        this.lightMapIntensity = e.lightMapIntensity;
        this.aoMap = e.aoMap;
        this.aoMapIntensity = e.aoMapIntensity;
        this.specularMap = e.specularMap;
        this.alphaMap = e.alphaMap;
        this.envMap = e.envMap;
        this.envMapRotation.copy(e.envMapRotation);
        this.combine = e.combine;
        this.reflectivity = e.reflectivity;
        this.refractionRatio = e.refractionRatio;
        this.wireframe = e.wireframe;
        this.wireframeLinewidth = e.wireframeLinewidth;
        this.wireframeLinecap = e.wireframeLinecap;
        this.wireframeLinejoin = e.wireframeLinejoin;
        this.fog = e.fog;
        return this;
    }
}
const Ur = new R;
const Wr = new Vr;
const Gr = new ir;
const Kr = new L;
const qr = new L;
const Jr = new L;
const Yr = new L;
const Xr = new L;
const Zr = new L;
const Qr = new L;
const $r = new L;
class W extends fn {
    constructor(e = new dr, t = new Hr){
        super();
        this.isMesh = true;
        this.type = `Mesh`;
        this.geometry = e;
        this.material = t;
        this.morphTargetDictionary = undefined;
        this.morphTargetInfluences = undefined;
        this.count = 1;
        this.updateMorphTargets();
    }
    copy(e, t) {
        super.copy(e, t);
        if (e.morphTargetInfluences !== undefined) {
            this.morphTargetInfluences = e.morphTargetInfluences.slice();
        }
        if (e.morphTargetDictionary !== undefined) {
            this.morphTargetDictionary = {
                ...e.morphTargetDictionary
            };
        }
        this.material = Array.isArray(e.material) ? e.material.slice() : e.material;
        this.geometry = e.geometry;
        return this;
    }
    updateMorphTargets() {
        let morphAttributes = this.geometry.morphAttributes;
        let t = Object.keys(morphAttributes);
        if (t.length > 0) {
            let n = morphAttributes[t[0]];
            if (n !== undefined) {
                this.morphTargetInfluences = [];
                this.morphTargetDictionary = {};
                for(let e = 0, t = n.length; e < t; e++){
                    let t = n[e].name || String(e);
                    this.morphTargetInfluences.push(0);
                    this.morphTargetDictionary[t] = e;
                }
            }
        }
    }
    getVertexPosition(e, t) {
        let geometry = this.geometry;
        let position = geometry.attributes.position;
        let position_1 = geometry.morphAttributes.position;
        let n_morphTargetsRelative = geometry.morphTargetsRelative;
        t.fromBufferAttribute(position, e);
        let morphTargetInfluences = this.morphTargetInfluences;
        if (position_1 && morphTargetInfluences) {
            Zr.set(0, 0, 0);
            for(let n = 0, r = position_1.length; n < r; n++){
                let r = morphTargetInfluences[n];
                let s = position_1[n];
                if (r !== 0) {
                    Xr.fromBufferAttribute(s, e);
                    if (n_morphTargetsRelative) {
                        Zr.addScaledVector(Xr, r);
                    } else {
                        Zr.addScaledVector(Xr.sub(t), r);
                    }
                }
            }
            t.add(Zr);
        }
        return t;
    }
    intersectsFrustum(e) {
        return e.intersectsObject(this);
    }
    raycast(e, t) {
        let geometry = this.geometry;
        let material = this.material;
        let matrixWorld = this.matrixWorld;
        if (material !== undefined) {
            if (geometry.boundingSphere === null) {
                geometry.computeBoundingSphere();
            }
            Gr.copy(geometry.boundingSphere);
            Gr.applyMatrix4(matrixWorld);
            Wr.copy(e.ray).recast(e.near);
            if (!(Gr.containsPoint(Wr.origin) === false && (Wr.intersectSphere(Gr, Kr) === null || Wr.origin.distanceToSquared(Kr) > (e.far - e.near) ** 2))) {
                Ur.copy(matrixWorld).invert();
                Wr.copy(e.ray).applyMatrix4(Ur);
                if (geometry.boundingBox === null || Wr.intersectsBox(geometry.boundingBox) !== false) {
                    this._computeIntersections(e, t, Wr);
                }
            }
        }
    }
    _computeIntersections(e, t, n) {
        let r;
        let geometry = this.geometry;
        let material = this.material;
        let i_index = geometry.index;
        let position = geometry.attributes.position;
        let c = geometry.attributes.uv;
        let uv1 = geometry.attributes.uv1;
        let normal = geometry.attributes.normal;
        let i_groups = geometry.groups;
        let i_drawRange = geometry.drawRange;
        if (i_index !== null) {
            if (Array.isArray(material)) {
                for(let i = 0, s = i_groups.length; i < s; i++){
                    let group = i_groups[i];
                    let p = material[group.materialIndex];
                    let m = Math.max(group.start, i_drawRange.start);
                    let h = Math.min(i_index.count, Math.min(group.start + group.count, i_drawRange.start + i_drawRange.count));
                    for(let i = m, a = h; i < a; i += 3){
                        let a = i_index.getX(i);
                        let d = i_index.getX(i + 1);
                        let f = i_index.getX(i + 2);
                        r = ti(this, p, e, n, c, uv1, normal, a, d, f);
                        if (r) {
                            r.faceIndex = Math.floor(i / 3);
                            r.face.materialIndex = group.materialIndex;
                            t.push(r);
                        }
                    }
                }
            } else {
                let i = Math.max(0, i_drawRange.start);
                let s = Math.min(i_index.count, i_drawRange.start + i_drawRange.count);
                for(let d = i, f = s; d < f; d += 3){
                    let i = i_index.getX(d);
                    let s = i_index.getX(d + 1);
                    let f = i_index.getX(d + 2);
                    r = ti(this, material, e, n, c, uv1, normal, i, s, f);
                    if (r) {
                        r.faceIndex = Math.floor(d / 3);
                        t.push(r);
                    }
                }
            }
        } else if (position !== undefined) {
            if (Array.isArray(material)) {
                for(let i = 0, o = i_groups.length; i < o; i++){
                    let group = i_groups[i];
                    let p = material[group.materialIndex];
                    let m = Math.max(group.start, i_drawRange.start);
                    let h = Math.min(position.count, Math.min(group.start + group.count, i_drawRange.start + i_drawRange.count));
                    for(let i = m, a = h; i < a; i += 3){
                        let a = i;
                        let s = i + 1;
                        let d = i + 2;
                        r = ti(this, p, e, n, c, uv1, normal, a, s, d);
                        if (r) {
                            r.faceIndex = Math.floor(i / 3);
                            r.face.materialIndex = group.materialIndex;
                            t.push(r);
                        }
                    }
                }
            } else {
                let i = Math.max(0, i_drawRange.start);
                let o = Math.min(position.count, i_drawRange.start + i_drawRange.count);
                for(let s = i, d = o; s < d; s += 3){
                    let i = s;
                    let o = s + 1;
                    let d = s + 2;
                    r = ti(this, material, e, n, c, uv1, normal, i, o, d);
                    if (r) {
                        r.faceIndex = Math.floor(s / 3);
                        t.push(r);
                    }
                }
            }
        }
    }
}
function ei(object, t, n, r, i, a, o, s) {
    let c;
    c = t.side === 1 ? r.intersectTriangle(o, a, i, true, s) : r.intersectTriangle(i, a, o, t.side === 0, s);
    if (c === null) {
        return null;
    }
    $r.copy(s);
    $r.applyMatrix4(object.matrixWorld);
    let l = n.ray.origin.distanceTo($r);
    if (l < n.near || l > n.far) {
        return null;
    }
    return {
        distance: l,
        point: $r.clone(),
        object
    };
}
function ti(e, t, n, r, i, a, normal, a_1, b_1, c_1) {
    e.getVertexPosition(a_1, qr);
    e.getVertexPosition(b_1, Jr);
    e.getVertexPosition(c_1, Yr);
    let u = ei(e, t, n, r, qr, Jr, Yr, Qr);
    if (u) {
        let e = new L;
        Pn.getBarycoord(Qr, qr, Jr, Yr, e);
        if (i) {
            u.uv = Pn.getInterpolatedAttribute(i, a_1, b_1, c_1, e, new I);
        }
        if (a) {
            u.uv1 = Pn.getInterpolatedAttribute(a, a_1, b_1, c_1, e, new I);
        }
        if (normal) {
            u.normal = Pn.getInterpolatedAttribute(normal, a_1, b_1, c_1, e, new L);
            if (u.normal.dot(r.direction) > 0) {
                u.normal.multiplyScalar(-1);
            }
        }
        let t = {
            a: a_1,
            b: b_1,
            c: c_1,
            normal: new L,
            materialIndex: 0
        };
        Pn.getNormal(qr, Jr, Yr, t.normal);
        u.face = t;
        u.barycoord = e;
    }
    return u;
}
class ni extends Nt {
    constructor(e = null, t = 1, n = 1, i, a, o, s, c, l = r, u = r, d, f){
        super(null, o, s, c, l, u, i, a, d, f);
        this.isDataTexture = true;
        this.image = {
            data: e,
            width: t,
            height: n
        };
        this.generateMipmaps = false;
        this.flipY = false;
        this.unpackAlignment = 1;
    }
}
class ri extends Qn {
    constructor(e, t, n, r = 1){
        super(e, t, n);
        this.isInstancedBufferAttribute = true;
        this.meshPerAttribute = r;
    }
    copy(e) {
        super.copy(e);
        this.meshPerAttribute = e.meshPerAttribute;
        return this;
    }
    toJSON() {
        let e = super.toJSON();
        e.meshPerAttribute = this.meshPerAttribute;
        e.isInstancedBufferAttribute = true;
        return e;
    }
}
const ii = new R;
const ai = new R;
const oi = [];
const si = new Fn;
const ci = new R;
const li = new W;
const ui = new ir;
class di extends W {
    constructor(e, t, n){
        super(e, t);
        this.isInstancedMesh = true;
        this.instanceMatrix = new ri(new Float32Array(n * 16), 16);
        this.instanceColor = null;
        this.morphTexture = null;
        this.count = n;
        this.boundingBox = null;
        this.boundingSphere = null;
        for(let e = 0; e < n; e++){
            this.setMatrixAt(e, ci);
        }
    }
    computeBoundingBox() {
        let geometry = this.geometry;
        let count = this.count;
        if (this.boundingBox === null) {
            this.boundingBox = new Fn;
        }
        if (geometry.boundingBox === null) {
            geometry.computeBoundingBox();
        }
        this.boundingBox.makeEmpty();
        for(let n = 0; n < count; n++){
            this.getMatrixAt(n, ii);
            si.copy(geometry.boundingBox).applyMatrix4(ii);
            this.boundingBox.union(si);
        }
    }
    computeBoundingSphere() {
        let geometry = this.geometry;
        let count = this.count;
        if (this.boundingSphere === null) {
            this.boundingSphere = new ir;
        }
        if (geometry.boundingSphere === null) {
            geometry.computeBoundingSphere();
        }
        this.boundingSphere.makeEmpty();
        for(let n = 0; n < count; n++){
            this.getMatrixAt(n, ii);
            ui.copy(geometry.boundingSphere).applyMatrix4(ii);
            this.boundingSphere.union(ui);
        }
    }
    copy(e, t) {
        super.copy(e, t);
        this.instanceMatrix.copy(e.instanceMatrix);
        if (e.morphTexture !== null) {
            this.morphTexture = e.morphTexture.clone();
        }
        if (e.instanceColor !== null) {
            this.instanceColor = e.instanceColor.clone();
        }
        this.count = e.count;
        if (e.boundingBox !== null) {
            this.boundingBox = e.boundingBox.clone();
        }
        if (e.boundingSphere !== null) {
            this.boundingSphere = e.boundingSphere.clone();
        }
        return this;
    }
    getColorAt(e, t) {
        if (this.instanceColor === null) {
            return t.setRGB(1, 1, 1);
        }
        return t.fromArray(this.instanceColor.array, e * 3);
    }
    getMatrixAt(e, t) {
        return t.fromArray(this.instanceMatrix.array, e * 16);
    }
    getMorphAt(e, { morphTargetInfluences }) {
        let data = this.morphTexture.source.data.data;
        let i = e * (morphTargetInfluences.length + 1) + 1;
        for(let e = 0; e < morphTargetInfluences.length; e++){
            morphTargetInfluences[e] = data[i + e];
        }
    }
    raycast(e, t) {
        let matrixWorld = this.matrixWorld;
        let count = this.count;
        li.geometry = this.geometry;
        li.material = this.material;
        if (li.material !== undefined && (this.boundingSphere === null && this.computeBoundingSphere(), ui.copy(this.boundingSphere), ui.applyMatrix4(matrixWorld), e.ray.intersectsSphere(ui) !== false)) {
            for(let i = 0; i < count; i++){
                this.getMatrixAt(i, ii);
                ai.multiplyMatrices(matrixWorld, ii);
                li.matrixWorld = ai;
                li.raycast(e, oi);
                for(let e = 0, n = oi.length; e < n; e++){
                    let n = oi[e];
                    n.instanceId = i;
                    n.object = this;
                    t.push(n);
                }
                oi.length = 0;
            }
        }
    }
    setColorAt(e, t) {
        if (this.instanceColor === null) {
            this.instanceColor = new ri(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3);
        }
        t.toArray(this.instanceColor.array, e * 3);
        return this;
    }
    setMatrixAt(e, t) {
        t.toArray(this.instanceMatrix.array, e * 16);
        return this;
    }
    setMorphAt(e, { morphTargetInfluences }) {
        let r = morphTargetInfluences.length + 1;
        if (this.morphTexture === null) {
            this.morphTexture = new ni(new Float32Array(r * this.count), r, this.count, D, h);
        }
        let data = this.morphTexture.source.data.data;
        let a = 0;
        for(let e = 0; e < morphTargetInfluences.length; e++){
            a += morphTargetInfluences[e];
        }
        let o = this.geometry.morphTargetsRelative ? 1 : 1 - a;
        let s = r * e;
        data[s] = o;
        data.set(morphTargetInfluences, s + 1);
        return this;
    }
    updateMorphTargets() {}
    dispose() {
        super.dispose();
        if (this.morphTexture !== null) {
            this.morphTexture.dispose();
            this.morphTexture = null;
        }
    }
}
const fi = new ir;
const pi = new I(0.5, 0.5);
const mi = new L;
class hi {
    constructor(e = new vr, t = new vr, n = new vr, r = new vr, i = new vr, a = new vr){
        this.planes = [
            e,
            t,
            n,
            r,
            i,
            a
        ];
    }
    set(e, t, n, r, i, a) {
        let planes = this.planes;
        planes[0].copy(e);
        planes[1].copy(t);
        planes[2].copy(n);
        planes[3].copy(r);
        planes[4].copy(i);
        planes[5].copy(a);
        return this;
    }
    copy(e) {
        let planes = this.planes;
        for(let n = 0; n < 6; n++){
            planes[n].copy(e.planes[n]);
        }
        return this;
    }
    setFromProjectionMatrix(e, t = Xe, n = false) {
        let planes = this.planes;
        let e_elements = e.elements;
        let a = e_elements[0];
        let o = e_elements[1];
        let s = e_elements[2];
        let c = e_elements[3];
        let l = e_elements[4];
        let u = e_elements[5];
        let d = e_elements[6];
        let f = e_elements[7];
        let p = e_elements[8];
        let m = e_elements[9];
        let h = e_elements[10];
        let g = e_elements[11];
        let _ = e_elements[12];
        let v = e_elements[13];
        let y = e_elements[14];
        let b = e_elements[15];
        planes[0].setComponents(c - a, f - l, g - p, b - _).normalize();
        planes[1].setComponents(c + a, f + l, g + p, b + _).normalize();
        planes[2].setComponents(c + o, f + u, g + m, b + v).normalize();
        planes[3].setComponents(c - o, f - u, g - m, b - v).normalize();
        if (n) {
            planes[4].setComponents(s, d, h, y).normalize();
            planes[5].setComponents(c - s, f - d, g - h, b - y).normalize();
        } else {
            planes[4].setComponents(c - s, f - d, g - h, b - y).normalize();
            if (t === 2000) {
                planes[5].setComponents(c + s, f + d, g + h, b + y).normalize();
            } else if (t === 2001) {
                planes[5].setComponents(s, d, h, y).normalize();
            } else {
                throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: ` + t);
            }
        }
        return this;
    }
    intersectsObject(e) {
        if (e.boundingSphere !== undefined) {
            if (e.boundingSphere === null) {
                e.computeBoundingSphere();
            }
            fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
        } else {
            let t = e.geometry;
            if (t.boundingSphere === null) {
                t.computeBoundingSphere();
            }
            fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
        }
        return this.intersectsSphere(fi);
    }
    intersectsSprite(e) {
        fi.center.set(0, 0, 0);
        fi.radius = 0.7071067811865476 + pi.distanceTo(e.center);
        fi.applyMatrix4(e.matrixWorld);
        return this.intersectsSphere(fi);
    }
    intersectsSphere(e) {
        let planes = this.planes;
        let e_center = e.center;
        let r = -e.radius;
        for(let e = 0; e < 6; e++){
            if (planes[e].distanceToPoint(e_center) < r) {
                return false;
            }
        }
        return true;
    }
    intersectsBox(e) {
        let planes = this.planes;
        for(let n = 0; n < 6; n++){
            let r = planes[n];
            mi.x = r.normal.x > 0 ? e.max.x : e.min.x;
            mi.y = r.normal.y > 0 ? e.max.y : e.min.y;
            mi.z = r.normal.z > 0 ? e.max.z : e.min.z;
            if (r.distanceToPoint(mi) < 0) {
                return false;
            }
        }
        return true;
    }
    containsPoint(e) {
        let planes = this.planes;
        for(let n = 0; n < 6; n++){
            if (planes[n].distanceToPoint(e) < 0) {
                return false;
            }
        }
        return true;
    }
    clone() {
        return new this.constructor().copy(this);
    }
}
class gi extends Nt {
    constructor(e = [], t = 301, n, r, i, a, o, s, c, l){
        super(e, t, n, r, i, a, o, s, c, l);
        this.isCubeTexture = true;
        this.flipY = false;
    }
    get images() {
        return this.image;
    }
    set images(e) {
        this.image = e;
    }
}
class _i extends Nt {
    constructor(e, t, n, r, i, a, o, s, c){
        super(e, t, n, r, i, a, o, s, c);
        this.isCanvasTexture = true;
        this.needsUpdate = true;
    }
}
class vi extends Nt {
    constructor(e, t, n = m, i, a, o, s = r, c = r, l, u = T, d = 1){
        if (u !== 1026 && u !== 1027) {
            throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);
        }
        super({
            width: e,
            height: t,
            depth: d
        }, i, a, o, s, c, u, n, l);
        this.isDepthTexture = true;
        this.flipY = false;
        this.generateMipmaps = false;
        this.compareFunction = null;
    }
    copy(e) {
        super.copy(e);
        this.source = new kt({
            ...e.image
        });
        this.compareFunction = e.compareFunction;
        return this;
    }
    toJSON(e) {
        let t = super.toJSON(e);
        t.compareFunction = this.compareFunction;
        return t;
    }
}
class yi extends vi {
    constructor(e, t = m, n = 301, i, a, o = r, s = r, c, l = T){
        let u = {
            width: e,
            height: e,
            depth: 1
        };
        let d = [
            u,
            u,
            u,
            u,
            u,
            u
        ];
        super(e, e, t, n, i, a, o, s, c, l);
        this.image = d;
        this.isCubeDepthTexture = true;
        this.isCubeTexture = true;
    }
    get images() {
        return this.image;
    }
    set images(e) {
        this.image = e;
    }
}
class bi extends Nt {
    constructor(e = null){
        super();
        this.sourceTexture = e;
        this.isExternalTexture = true;
    }
    copy(e) {
        super.copy(e);
        this.sourceTexture = e.sourceTexture;
        return this;
    }
}
const xi = class e extends dr {
    constructor(e = 1, t = 1, n = 1, r = 1, i = 1, depthSegments = 1){
        super();
        this.type = `BoxGeometry`;
        this.parameters = {
            width: e,
            height: t,
            depth: n,
            widthSegments: r,
            heightSegments: i,
            depthSegments
        };
        let o = this;
        r = Math.floor(r);
        i = Math.floor(i);
        depthSegments = Math.floor(depthSegments);
        let s = [];
        let c = [];
        let l = [];
        let u = [];
        let d = 0;
        let f = 0;
        p(`z`, `y`, `x`, -1, -1, n, t, e, depthSegments, i, 0);
        p(`z`, `y`, `x`, 1, -1, n, t, -e, depthSegments, i, 1);
        p(`x`, `z`, `y`, 1, 1, e, n, t, r, depthSegments, 2);
        p(`x`, `z`, `y`, 1, -1, e, n, -t, r, depthSegments, 3);
        p(`x`, `y`, `z`, 1, -1, e, t, n, r, i, 4);
        p(`x`, `y`, `z`, -1, -1, e, t, -n, r, i, 5);
        this.setIndex(s);
        this.setAttribute(`position`, new H(c, 3));
        this.setAttribute(`normal`, new H(l, 3));
        this.setAttribute(`uv`, new H(u, 2));
        function p(e, t, n, r, i, a, p, m, h, g, _) {
            let v = a / h;
            let y = p / g;
            let b = a / 2;
            let x = p / 2;
            let S = m / 2;
            let C = h + 1;
            let w = g + 1;
            let T = 0;
            let E = 0;
            let D = new L;
            for(let a = 0; a < w; a++){
                let o = a * y - x;
                for(let s = 0; s < C; s++){
                    D[e] = (s * v - b) * r;
                    D[t] = o * i;
                    D[n] = S;
                    c.push(D.x, D.y, D.z);
                    D[e] = 0;
                    D[t] = 0;
                    D[n] = m > 0 ? 1 : -1;
                    l.push(D.x, D.y, D.z);
                    u.push(s / h);
                    u.push(1 - a / g);
                    T += 1;
                }
            }
            for(let e = 0; e < g; e++){
                for(let t = 0; t < h; t++){
                    let n = d + t + C * e;
                    let r = d + t + C * (e + 1);
                    let i = d + (t + 1) + C * (e + 1);
                    let a = d + (t + 1) + C * e;
                    s.push(n, r, a);
                    s.push(r, i, a);
                    E += 6;
                }
            }
            o.addGroup(f, E, _);
            f += E;
            d += T;
        }
    }
    copy(e) {
        super.copy(e);
        this.parameters = {
            ...e.parameters
        };
        return this;
    }
    static fromJSON(t) {
        return new e(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
    }
};
const Si = class e extends dr {
    constructor(e = 1, t = 32, n = 0, r = Math.PI * 2){
        super();
        this.type = `CircleGeometry`;
        this.parameters = {
            radius: e,
            segments: t,
            thetaStart: n,
            thetaLength: r
        };
        t = Math.max(3, t);
        let i = [];
        let a = [];
        let o = [];
        let s = [];
        let c = new L;
        let l = new I;
        a.push(0, 0, 0);
        o.push(0, 0, 1);
        s.push(0.5, 0.5);
        for(let i = 0, u = 3; i <= t; i++, u += 3){
            let d = n + i / t * r;
            c.x = e * Math.cos(d);
            c.y = e * Math.sin(d);
            a.push(c.x, c.y, c.z);
            o.push(0, 0, 1);
            l.x = (a[u] / e + 1) / 2;
            l.y = (a[u + 1] / e + 1) / 2;
            s.push(l.x, l.y);
        }
        for(let e = 1; e <= t; e++){
            i.push(e, e + 1, 0);
        }
        this.setIndex(i);
        this.setAttribute(`position`, new H(a, 3));
        this.setAttribute(`normal`, new H(o, 3));
        this.setAttribute(`uv`, new H(s, 2));
    }
    copy(e) {
        super.copy(e);
        this.parameters = {
            ...e.parameters
        };
        return this;
    }
    static fromJSON(t) {
        return new e(t.radius, t.segments, t.thetaStart, t.thetaLength);
    }
};
const G = class e extends dr {
    constructor(radiusTop = 1, radiusBottom = 1, n = 1, r = 32, i = 1, a = false, o = 0, s = Math.PI * 2){
        super();
        this.type = `CylinderGeometry`;
        this.parameters = {
            radiusTop,
            radiusBottom,
            height: n,
            radialSegments: r,
            heightSegments: i,
            openEnded: a,
            thetaStart: o,
            thetaLength: s
        };
        let c = this;
        r = Math.floor(r);
        i = Math.floor(i);
        let l = [];
        let u = [];
        let d = [];
        let f = [];
        let p = 0;
        let m = [];
        let h = n / 2;
        let g = 0;
        _();
        if (a === false) {
            if (radiusTop > 0) {
                v(true);
            }
            if (radiusBottom > 0) {
                v(false);
            }
        }
        this.setIndex(l);
        this.setAttribute(`position`, new H(u, 3));
        this.setAttribute(`normal`, new H(d, 3));
        this.setAttribute(`uv`, new H(f, 2));
        function _() {
            let a = new L;
            let _ = new L;
            let v = 0;
            let y = (radiusBottom - radiusTop) / n;
            for(let c = 0; c <= i; c++){
                let l = [];
                let g = c / i;
                let v = g * (radiusBottom - radiusTop) + radiusTop;
                for(let e = 0; e <= r; e++){
                    let t = e / r;
                    let i = t * s + o;
                    let c = Math.sin(i);
                    let m = Math.cos(i);
                    _.x = v * c;
                    _.y = -g * n + h;
                    _.z = v * m;
                    u.push(_.x, _.y, _.z);
                    a.set(c, y, m).normalize();
                    d.push(a.x, a.y, a.z);
                    f.push(t, 1 - g);
                    l.push(p++);
                }
                m.push(l);
            }
            for(let n = 0; n < r; n++){
                for(let r = 0; r < i; r++){
                    let a = m[r][n];
                    let o = m[r + 1][n];
                    let s = m[r + 1][n + 1];
                    let c = m[r][n + 1];
                    if (radiusTop > 0 || r !== 0) {
                        l.push(a, o, c);
                        v += 3;
                    }
                    if (radiusBottom > 0 || r !== i - 1) {
                        l.push(o, s, c);
                        v += 3;
                    }
                }
            }
            c.addGroup(g, v, 0);
            g += v;
        }
        function v(n) {
            let i = p;
            let a = new I;
            let m = new L;
            let _ = 0;
            let v = n === true ? radiusTop : radiusBottom;
            let y = n === true ? 1 : -1;
            for(let e = 1; e <= r; e++){
                u.push(0, h * y, 0);
                d.push(0, y, 0);
                f.push(0.5, 0.5);
                p++;
            }
            let b = p;
            for(let e = 0; e <= r; e++){
                let t = e / r * s + o;
                let n = Math.cos(t);
                let i = Math.sin(t);
                m.x = v * i;
                m.y = h * y;
                m.z = v * n;
                u.push(m.x, m.y, m.z);
                d.push(0, y, 0);
                a.x = n * 0.5 + 0.5;
                a.y = i * 0.5 * y + 0.5;
                f.push(a.x, a.y);
                p++;
            }
            for(let e = 0; e < r; e++){
                let t = i + e;
                let r = b + e;
                if (n === true) {
                    l.push(r, r + 1, t);
                } else {
                    l.push(r + 1, r, t);
                }
                _ += 3;
            }
            c.addGroup(g, _, n === true ? 1 : 2);
            g += _;
        }
    }
    copy(e) {
        super.copy(e);
        this.parameters = {
            ...e.parameters
        };
        return this;
    }
    static fromJSON(t) {
        return new e(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
    }
};
const Ci = class e extends G {
    constructor(e = 1, t = 1, n = 32, r = 1, i = false, a = 0, o = Math.PI * 2){
        super(0, e, t, n, r, i, a, o);
        this.type = `ConeGeometry`;
        this.parameters = {
            radius: e,
            height: t,
            radialSegments: n,
            heightSegments: r,
            openEnded: i,
            thetaStart: a,
            thetaLength: o
        };
    }
    static fromJSON(t) {
        return new e(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
    }
};
class wi {
    constructor(){
        this.type = `Curve`;
        this.arcLengthDivisions = 200;
        this.needsUpdate = false;
        this.cacheArcLengths = null;
    }
    getPoint() {
        M(`Curve: .getPoint() not implemented.`);
    }
    getPointAt(e, t) {
        let n = this.getUtoTmapping(e);
        return this.getPoint(n, t);
    }
    getPoints(e = 5) {
        let t = [];
        for(let n = 0; n <= e; n++){
            t.push(this.getPoint(n / e));
        }
        return t;
    }
    getSpacedPoints(e = 5) {
        let t = [];
        for(let n = 0; n <= e; n++){
            t.push(this.getPointAt(n / e));
        }
        return t;
    }
    getLength() {
        let e = this.getLengths();
        return e[e.length - 1];
    }
    getLengths(e = this.arcLengthDivisions) {
        if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) {
            return this.cacheArcLengths;
        }
        this.needsUpdate = false;
        let t = [];
        let n;
        let r = this.getPoint(0);
        let i = 0;
        t.push(0);
        for(let a = 1; a <= e; a++){
            n = this.getPoint(a / e);
            i += n.distanceTo(r);
            t.push(i);
            r = n;
        }
        this.cacheArcLengths = t;
        return t;
    }
    updateArcLengths() {
        this.needsUpdate = true;
        this.getLengths();
    }
    getUtoTmapping(e, t = null) {
        let n = this.getLengths();
        let r = 0;
        let n_length = n.length;
        let a;
        a = t || e * n[n_length - 1];
        let o = 0;
        let s = n_length - 1;
        let c;
        while(o <= s){
            r = Math.floor(o + (s - o) / 2);
            c = n[r] - a;
            if (c < 0) {
                o = r + 1;
            } else if (c > 0) {
                s = r - 1;
            } else {
                s = r;
                break;
            }
        }
        r = s;
        if (n[r] === a) {
            return r / (n_length - 1);
        }
        let l = n[r];
        let u = n[r + 1] - l;
        let d = (a - l) / u;
        return (r + d) / (n_length - 1);
    }
    getTangent(e, t) {
        let n = 0.0001;
        let r = e - n;
        let i = e + n;
        if (r < 0) {
            r = 0;
        }
        if (i > 1) {
            i = 1;
        }
        let a = this.getPoint(r);
        let o = this.getPoint(i);
        let s = t || (a.isVector2 ? new I : new L);
        s.copy(o).sub(a).normalize();
        return s;
    }
    getTangentAt(e, t) {
        let n = this.getUtoTmapping(e);
        return this.getTangent(n, t);
    }
    computeFrenetFrames(e, t = false) {
        let n = new L;
        let tangents = [];
        let normals = [];
        let binormals = [];
        let o = new L;
        let s = new R;
        for(let t = 0; t <= e; t++){
            let n = t / e;
            tangents[t] = this.getTangentAt(n, new L);
        }
        normals[0] = new L;
        binormals[0] = new L;
        let Number_MAX_VALUE = Number.MAX_VALUE;
        let l = Math.abs(tangents[0].x);
        let u = Math.abs(tangents[0].y);
        let d = Math.abs(tangents[0].z);
        if (l <= Number_MAX_VALUE) {
            Number_MAX_VALUE = l;
            n.set(1, 0, 0);
        }
        if (u <= Number_MAX_VALUE) {
            Number_MAX_VALUE = u;
            n.set(0, 1, 0);
        }
        if (d <= Number_MAX_VALUE) {
            n.set(0, 0, 1);
        }
        o.crossVectors(tangents[0], n).normalize();
        normals[0].crossVectors(tangents[0], o);
        binormals[0].crossVectors(tangents[0], normals[0]);
        for(let t = 1; t <= e; t++){
            normals[t] = normals[t - 1].clone();
            binormals[t] = binormals[t - 1].clone();
            o.crossVectors(tangents[t - 1], tangents[t]);
            if (o.length() > 2 ** -52) {
                o.normalize();
                let e = Math.acos(P(tangents[t - 1].dot(tangents[t]), -1, 1));
                normals[t].applyMatrix4(s.makeRotationAxis(o, e));
            }
            binormals[t].crossVectors(tangents[t], normals[t]);
        }
        if (t === true) {
            let t = Math.acos(P(normals[0].dot(normals[e]), -1, 1));
            t /= e;
            if (tangents[0].dot(o.crossVectors(normals[0], normals[e])) > 0) {
                t = -t;
            }
            for(let n = 1; n <= e; n++){
                normals[n].applyMatrix4(s.makeRotationAxis(tangents[n], t * n));
                binormals[n].crossVectors(tangents[n], normals[n]);
            }
        }
        return {
            tangents,
            normals,
            binormals
        };
    }
    clone() {
        return new this.constructor().copy(this);
    }
    copy(e) {
        this.arcLengthDivisions = e.arcLengthDivisions;
        return this;
    }
    toJSON() {
        let e = {
            metadata: {
                version: 4.7,
                type: `Curve`,
                generator: `Curve.toJSON`
            }
        };
        e.arcLengthDivisions = this.arcLengthDivisions;
        e.type = this.type;
        return e;
    }
    fromJSON(e) {
        this.arcLengthDivisions = e.arcLengthDivisions;
        return this;
    }
}
class Ti extends wi {
    constructor(e = 0, t = 0, n = 1, r = 1, i = 0, a = Math.PI * 2, o = false, s = 0){
        super();
        this.isEllipseCurve = true;
        this.type = `EllipseCurve`;
        this.aX = e;
        this.aY = t;
        this.xRadius = n;
        this.yRadius = r;
        this.aStartAngle = i;
        this.aEndAngle = a;
        this.aClockwise = o;
        this.aRotation = s;
    }
    getPoint(e, t = new I) {
        let n = t;
        let r = Math.PI * 2;
        let i = this.aEndAngle - this.aStartAngle;
        let a = Math.abs(i) < 2 ** -52;
        while(i < 0){
            i += r;
        }
        while(i > r){
            i -= r;
        }
        if (i < 2 ** -52) {
            i = a ? 0 : r;
        }
        if (this.aClockwise === true && !a) {
            if (i === r) {
                i = -r;
            } else {
                i -= r;
            }
        }
        let o = this.aStartAngle + e * i;
        let s = this.aX + this.xRadius * Math.cos(o);
        let c = this.aY + this.yRadius * Math.sin(o);
        if (this.aRotation !== 0) {
            let e = Math.cos(this.aRotation);
            let t = Math.sin(this.aRotation);
            let n = s - this.aX;
            let r = c - this.aY;
            s = n * e - r * t + this.aX;
            c = n * t + r * e + this.aY;
        }
        return n.set(s, c);
    }
    copy(e) {
        super.copy(e);
        this.aX = e.aX;
        this.aY = e.aY;
        this.xRadius = e.xRadius;
        this.yRadius = e.yRadius;
        this.aStartAngle = e.aStartAngle;
        this.aEndAngle = e.aEndAngle;
        this.aClockwise = e.aClockwise;
        this.aRotation = e.aRotation;
        return this;
    }
    toJSON() {
        let e = super.toJSON();
        e.aX = this.aX;
        e.aY = this.aY;
        e.xRadius = this.xRadius;
        e.yRadius = this.yRadius;
        e.aStartAngle = this.aStartAngle;
        e.aEndAngle = this.aEndAngle;
        e.aClockwise = this.aClockwise;
        e.aRotation = this.aRotation;
        return e;
    }
    fromJSON(e) {
        super.fromJSON(e);
        this.aX = e.aX;
        this.aY = e.aY;
        this.xRadius = e.xRadius;
        this.yRadius = e.yRadius;
        this.aStartAngle = e.aStartAngle;
        this.aEndAngle = e.aEndAngle;
        this.aClockwise = e.aClockwise;
        this.aRotation = e.aRotation;
        return this;
    }
}
class ArcCurve extends Ti {
    constructor(e, t, n, r, i, a){
        super(e, t, n, n, r, i, a);
        this.isArcCurve = true;
        this.type = `ArcCurve`;
    }
}
function Di() {
    let e = 0;
    let t = 0;
    let n = 0;
    let r = 0;
    function i(i, a, o, s) {
        e = i;
        t = o;
        n = -3 * i + 3 * a - 2 * o - s;
        r = 2 * i - 2 * a + o + s;
    }
    return {
        initCatmullRom: function(e, t, n, r, a) {
            i(t, n, a * (n - e), a * (r - t));
        },
        initNonuniformCatmullRom: function(e, t, n, r, a, o, s) {
            let c = (t - e) / a - (n - e) / (a + o) + (n - t) / o;
            let l = (n - t) / o - (r - t) / (o + s) + (r - n) / s;
            c *= o;
            l *= o;
            i(t, n, c, l);
        },
        calc: function(i) {
            let a = i * i;
            let o = a * i;
            return e + t * i + n * a + r * o;
        }
    };
}
const Oi = new L;
const ki = new L;
const Ai = new Di;
const ji = new Di;
const Mi = new Di;
class CatmullRomCurve3 extends wi {
    constructor(e = [], t = false, n = `centripetal`, r = 0.5){
        super();
        this.isCatmullRomCurve3 = true;
        this.type = `CatmullRomCurve3`;
        this.points = e;
        this.closed = t;
        this.curveType = n;
        this.tension = r;
    }
    getPoint(e, t = new L) {
        let n = t;
        let points = this.points;
        let r_length = points.length;
        let a = (r_length - +!this.closed) * e;
        let o = Math.floor(a);
        let s = a - o;
        if (this.closed) {
            o += o > 0 ? 0 : (Math.floor(Math.abs(o) / r_length) + 1) * r_length;
        } else if (s === 0 && o === r_length - 1) {
            o = r_length - 2;
            s = 1;
        }
        let c;
        let l;
        if (this.closed || o > 0) {
            c = points[(o - 1) % r_length];
        } else {
            ki.subVectors(points[0], points[1]).add(points[0]);
            c = ki;
        }
        let u = points[o % r_length];
        let d = points[(o + 1) % r_length];
        if (this.closed || o + 2 < r_length) {
            l = points[(o + 2) % r_length];
        } else {
            Oi.subVectors(points[r_length - 1], points[r_length - 2]).add(points[r_length - 1]);
            l = Oi;
        }
        if (this.curveType === `centripetal` || this.curveType === `chordal`) {
            let e = this.curveType === `chordal` ? 0.5 : 0.25;
            let t = c.distanceToSquared(u) ** +e;
            let n = u.distanceToSquared(d) ** +e;
            let r = d.distanceToSquared(l) ** +e;
            if (n < 0.0001) {
                n = 1;
            }
            if (t < 0.0001) {
                t = n;
            }
            if (r < 0.0001) {
                r = n;
            }
            Ai.initNonuniformCatmullRom(c.x, u.x, d.x, l.x, t, n, r);
            ji.initNonuniformCatmullRom(c.y, u.y, d.y, l.y, t, n, r);
            Mi.initNonuniformCatmullRom(c.z, u.z, d.z, l.z, t, n, r);
        } else {
            if (this.curveType === `catmullrom`) {
                Ai.initCatmullRom(c.x, u.x, d.x, l.x, this.tension);
                ji.initCatmullRom(c.y, u.y, d.y, l.y, this.tension);
                Mi.initCatmullRom(c.z, u.z, d.z, l.z, this.tension);
            }
        }
        n.set(Ai.calc(s), ji.calc(s), Mi.calc(s));
        return n;
    }
    copy(e) {
        super.copy(e);
        this.points = [];
        for(let t = 0, n = e.points.length; t < n; t++){
            let point = e.points[t];
            this.points.push(point.clone());
        }
        this.closed = e.closed;
        this.curveType = e.curveType;
        this.tension = e.tension;
        return this;
    }
    toJSON() {
        let e = super.toJSON();
        e.points = [];
        for(let t = 0, n = this.points.length; t < n; t++){
            let point = this.points[t];
            e.points.push(point.toArray());
        }
        e.closed = this.closed;
        e.curveType = this.curveType;
        e.tension = this.tension;
        return e;
    }
    fromJSON(e) {
        super.fromJSON(e);
        this.points = [];
        for(let t = 0, n = e.points.length; t < n; t++){
            let point = e.points[t];
            this.points.push(new L().fromArray(point));
        }
        this.closed = e.closed;
        this.curveType = e.curveType;
        this.tension = e.tension;
        return this;
    }
}
function Pi(e, t, n, r, i) {
    let a = (r - t) * 0.5;
    let o = (i - n) * 0.5;
    let s = e * e;
    let c = e * s;
    return (2 * n - 2 * r + a + o) * c + (-3 * n + 3 * r - 2 * a - o) * s + a * e + n;
}
function Fi(e, t) {
    let n = 1 - e;
    return n * n * t;
}
function Ii(e, t) {
    return 2 * (1 - e) * e * t;
}
function Li(e, t) {
    return e * e * t;
}
function Ri(e, t, n, r) {
    return Fi(e, t) + Ii(e, n) + Li(e, r);
}
function zi(e, t) {
    let n = 1 - e;
    return n * n * n * t;
}
function Bi(e, t) {
    let n = 1 - e;
    return 3 * n * n * e * t;
}
function Vi(e, t) {
    return 3 * (1 - e) * e * e * t;
}
function Hi(e, t) {
    return e * e * e * t;
}
function Ui(e, t, n, r, i) {
    return zi(e, t) + Bi(e, n) + Vi(e, r) + Hi(e, i);
}
class Wi extends wi {
    constructor(e = new I, t = new I, n = new I, r = new I){
        super();
        this.isCubicBezierCurve = true;
        this.type = `CubicBezierCurve`;
        this.v0 = e;
        this.v1 = t;
        this.v2 = n;
        this.v3 = r;
    }
    getPoint(e, t = new I) {
        let n = t;
        let r = this.v0;
        let i = this.v1;
        let a = this.v2;
        let o = this.v3;
        n.set(Ui(e, r.x, i.x, a.x, o.x), Ui(e, r.y, i.y, a.y, o.y));
        return n;
    }
    copy(e) {
        super.copy(e);
        this.v0.copy(e.v0);
        this.v1.copy(e.v1);
        this.v2.copy(e.v2);
        this.v3.copy(e.v3);
        return this;
    }
    toJSON() {
        let e = super.toJSON();
        e.v0 = this.v0.toArray();
        e.v1 = this.v1.toArray();
        e.v2 = this.v2.toArray();
        e.v3 = this.v3.toArray();
        return e;
    }
    fromJSON(e) {
        super.fromJSON(e);
        this.v0.fromArray(e.v0);
        this.v1.fromArray(e.v1);
        this.v2.fromArray(e.v2);
        this.v3.fromArray(e.v3);
        return this;
    }
}
class Gi extends wi {
    constructor(e = new L, t = new L, n = new L, r = new L){
        super();
        this.isCubicBezierCurve3 = true;
        this.type = `CubicBezierCurve3`;
        this.v0 = e;
        this.v1 = t;
        this.v2 = n;
        this.v3 = r;
    }
    getPoint(e, t = new L) {
        let n = t;
        let r = this.v0;
        let i = this.v1;
        let a = this.v2;
        let o = this.v3;
        n.set(Ui(e, r.x, i.x, a.x, o.x), Ui(e, r.y, i.y, a.y, o.y), Ui(e, r.z, i.z, a.z, o.z));
        return n;
    }
    copy(e) {
        super.copy(e);
        this.v0.copy(e.v0);
        this.v1.copy(e.v1);
        this.v2.copy(e.v2);
        this.v3.copy(e.v3);
        return this;
    }
    toJSON() {
        let e = super.toJSON();
        e.v0 = this.v0.toArray();
        e.v1 = this.v1.toArray();
        e.v2 = this.v2.toArray();
        e.v3 = this.v3.toArray();
        return e;
    }
    fromJSON(e) {
        super.fromJSON(e);
        this.v0.fromArray(e.v0);
        this.v1.fromArray(e.v1);
        this.v2.fromArray(e.v2);
        this.v3.fromArray(e.v3);
        return this;
    }
}
class Ki extends wi {
    constructor(e = new I, t = new I){
        super();
        this.isLineCurve = true;
        this.type = `LineCurve`;
        this.v1 = e;
        this.v2 = t;
    }
    getPoint(e, t = new I) {
        let n = t;
        if (e === 1) {
            n.copy(this.v2);
        } else {
            n.copy(this.v2).sub(this.v1);
            n.multiplyScalar(e).add(this.v1);
        }
        return n;
    }
    getPointAt(e, t) {
        return this.getPoint(e, t);
    }
    getTangent(e, t = new I) {
        return t.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(e, t) {
        return this.getTangent(e, t);
    }
    copy(e) {
        super.copy(e);
        this.v1.copy(e.v1);
        this.v2.copy(e.v2);
        return this;
    }
    toJSON() {
        let e = super.toJSON();
        e.v1 = this.v1.toArray();
        e.v2 = this.v2.toArray();
        return e;
    }
    fromJSON(e) {
        super.fromJSON(e);
        this.v1.fromArray(e.v1);
        this.v2.fromArray(e.v2);
        return this;
    }
}
class qi extends wi {
    constructor(e = new L, t = new L){
        super();
        this.isLineCurve3 = true;
        this.type = `LineCurve3`;
        this.v1 = e;
        this.v2 = t;
    }
    getPoint(e, t = new L) {
        let n = t;
        if (e === 1) {
            n.copy(this.v2);
        } else {
            n.copy(this.v2).sub(this.v1);
            n.multiplyScalar(e).add(this.v1);
        }
        return n;
    }
    getPointAt(e, t) {
        return this.getPoint(e, t);
    }
    getTangent(e, t = new L) {
        return t.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(e, t) {
        return this.getTangent(e, t);
    }
    copy(e) {
        super.copy(e);
        this.v1.copy(e.v1);
        this.v2.copy(e.v2);
        return this;
    }
    toJSON() {
        let e = super.toJSON();
        e.v1 = this.v1.toArray();
        e.v2 = this.v2.toArray();
        return e;
    }
    fromJSON(e) {
        super.fromJSON(e);
        this.v1.fromArray(e.v1);
        this.v2.fromArray(e.v2);
        return this;
    }
}
class Ji extends wi {
    constructor(e = new I, t = new I, n = new I){
        super();
        this.isQuadraticBezierCurve = true;
        this.type = `QuadraticBezierCurve`;
        this.v0 = e;
        this.v1 = t;
        this.v2 = n;
    }
    getPoint(e, t = new I) {
        let n = t;
        let r = this.v0;
        let i = this.v1;
        let a = this.v2;
        n.set(Ri(e, r.x, i.x, a.x), Ri(e, r.y, i.y, a.y));
        return n;
    }
    copy(e) {
        super.copy(e);
        this.v0.copy(e.v0);
        this.v1.copy(e.v1);
        this.v2.copy(e.v2);
        return this;
    }
    toJSON() {
        let e = super.toJSON();
        e.v0 = this.v0.toArray();
        e.v1 = this.v1.toArray();
        e.v2 = this.v2.toArray();
        return e;
    }
    fromJSON(e) {
        super.fromJSON(e);
        this.v0.fromArray(e.v0);
        this.v1.fromArray(e.v1);
        this.v2.fromArray(e.v2);
        return this;
    }
}
class Yi extends wi {
    constructor(e = new L, t = new L, n = new L){
        super();
        this.isQuadraticBezierCurve3 = true;
        this.type = `QuadraticBezierCurve3`;
        this.v0 = e;
        this.v1 = t;
        this.v2 = n;
    }
    getPoint(e, t = new L) {
        let n = t;
        let r = this.v0;
        let i = this.v1;
        let a = this.v2;
        n.set(Ri(e, r.x, i.x, a.x), Ri(e, r.y, i.y, a.y), Ri(e, r.z, i.z, a.z));
        return n;
    }
    copy(e) {
        super.copy(e);
        this.v0.copy(e.v0);
        this.v1.copy(e.v1);
        this.v2.copy(e.v2);
        return this;
    }
    toJSON() {
        let e = super.toJSON();
        e.v0 = this.v0.toArray();
        e.v1 = this.v1.toArray();
        e.v2 = this.v2.toArray();
        return e;
    }
    fromJSON(e) {
        super.fromJSON(e);
        this.v0.fromArray(e.v0);
        this.v1.fromArray(e.v1);
        this.v2.fromArray(e.v2);
        return this;
    }
}
class Xi extends wi {
    constructor(e = []){
        super();
        this.isSplineCurve = true;
        this.type = `SplineCurve`;
        this.points = e;
    }
    getPoint(e, t = new I) {
        let n = t;
        let points = this.points;
        let i = (points.length - 1) * e;
        let a = Math.floor(i);
        let o = i - a;
        let s = points[a === 0 ? a : a - 1];
        let c = points[a];
        let l = points[a > points.length - 2 ? points.length - 1 : a + 1];
        let u = points[a > points.length - 3 ? points.length - 1 : a + 2];
        n.set(Pi(o, s.x, c.x, l.x, u.x), Pi(o, s.y, c.y, l.y, u.y));
        return n;
    }
    copy(e) {
        super.copy(e);
        this.points = [];
        for(let t = 0, n = e.points.length; t < n; t++){
            let point = e.points[t];
            this.points.push(point.clone());
        }
        return this;
    }
    toJSON() {
        let e = super.toJSON();
        e.points = [];
        for(let t = 0, n = this.points.length; t < n; t++){
            let point = this.points[t];
            e.points.push(point.toArray());
        }
        return e;
    }
    fromJSON(e) {
        super.fromJSON(e);
        this.points = [];
        for(let t = 0, n = e.points.length; t < n; t++){
            let point = e.points[t];
            this.points.push(new I().fromArray(point));
        }
        return this;
    }
}
const Zi = Object.freeze({
    __proto__: null,
    ArcCurve,
    CatmullRomCurve3,
    CubicBezierCurve: Wi,
    CubicBezierCurve3: Gi,
    EllipseCurve: Ti,
    LineCurve: Ki,
    LineCurve3: qi,
    QuadraticBezierCurve: Ji,
    QuadraticBezierCurve3: Yi,
    SplineCurve: Xi
});
class Qi extends wi {
    constructor(){
        super();
        this.type = `CurvePath`;
        this.curves = [];
        this.autoClose = false;
    }
    add(e) {
        this.curves.push(e);
    }
    closePath() {
        let e = this.curves[0].getPoint(0);
        let t = this.curves[this.curves.length - 1].getPoint(1);
        if (!e.equals(t)) {
            let n = e.isVector2 === true ? `LineCurve` : `LineCurve3`;
            this.curves.push(new Zi[n](t, e));
        }
        return this;
    }
    getPoint(e, t) {
        let n = e * this.getLength();
        let r = this.getCurveLengths();
        let i = 0;
        while(i < r.length){
            if (r[i] >= n) {
                let e = r[i] - n;
                let a = this.curves[i];
                let o = a.getLength();
                let s = o === 0 ? 0 : 1 - e / o;
                return a.getPointAt(s, t);
            }
            i++;
        }
        return null;
    }
    getLength() {
        let e = this.getCurveLengths();
        return e[e.length - 1];
    }
    updateArcLengths() {
        this.needsUpdate = true;
        this.cacheLengths = null;
        this.getCurveLengths();
    }
    getCurveLengths() {
        if (this.cacheLengths && this.cacheLengths.length === this.curves.length) {
            return this.cacheLengths;
        }
        let e = [];
        let t = 0;
        for(let n = 0, r = this.curves.length; n < r; n++){
            t += this.curves[n].getLength();
            e.push(t);
        }
        this.cacheLengths = e;
        return e;
    }
    getSpacedPoints(e = 40) {
        let t = [];
        for(let n = 0; n <= e; n++){
            t.push(this.getPoint(n / e));
        }
        if (this.autoClose) {
            t.push(t[0]);
        }
        return t;
    }
    getPoints(e = 12) {
        let t = [];
        let n;
        for (const a of this.curves){
            let o = a.isEllipseCurve ? e * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? e * a.points.length : e;
            let s = a.getPoints(o);
            for (const r of s){
                if (!(n && n.equals(r))) {
                    t.push(r);
                    n = r;
                }
            }
        }
        if (this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0])) {
            t.push(t[0]);
        }
        return t;
    }
    copy(e) {
        super.copy(e);
        this.curves = [];
        for(let t = 0, n = e.curves.length; t < n; t++){
            let curve = e.curves[t];
            this.curves.push(curve.clone());
        }
        this.autoClose = e.autoClose;
        return this;
    }
    toJSON() {
        let e = super.toJSON();
        e.autoClose = this.autoClose;
        e.curves = [];
        for(let t = 0, n = this.curves.length; t < n; t++){
            let curve = this.curves[t];
            e.curves.push(curve.toJSON());
        }
        return e;
    }
    fromJSON(e) {
        super.fromJSON(e);
        this.autoClose = e.autoClose;
        this.curves = [];
        for(let t = 0, n = e.curves.length; t < n; t++){
            let curve = e.curves[t];
            this.curves.push(new Zi[curve.type]().fromJSON(curve));
        }
        return this;
    }
}
class $i extends Qi {
    constructor(e){
        super();
        this.type = `Path`;
        this.currentPoint = new I;
        if (e) {
            this.setFromPoints(e);
        }
    }
    setFromPoints(e) {
        this.moveTo(e[0].x, e[0].y);
        for(let t = 1, n = e.length; t < n; t++){
            this.lineTo(e[t].x, e[t].y);
        }
        return this;
    }
    moveTo(e, t) {
        this.currentPoint.set(e, t);
        return this;
    }
    lineTo(e, t) {
        let n = new Ki(this.currentPoint.clone(), new I(e, t));
        this.curves.push(n);
        this.currentPoint.set(e, t);
        return this;
    }
    quadraticCurveTo(e, t, n, r) {
        let i = new Ji(this.currentPoint.clone(), new I(e, t), new I(n, r));
        this.curves.push(i);
        this.currentPoint.set(n, r);
        return this;
    }
    bezierCurveTo(e, t, n, r, i, a) {
        let o = new Wi(this.currentPoint.clone(), new I(e, t), new I(n, r), new I(i, a));
        this.curves.push(o);
        this.currentPoint.set(i, a);
        return this;
    }
    splineThru(e) {
        let t = new Xi([
            this.currentPoint.clone()
        ].concat(e));
        this.curves.push(t);
        this.currentPoint.copy(e[e.length - 1]);
        return this;
    }
    arc(e, t, n, r, i, a) {
        let o = this.currentPoint.x;
        let s = this.currentPoint.y;
        this.absarc(e + o, t + s, n, r, i, a);
        return this;
    }
    absarc(e, t, n, r, i, a) {
        this.absellipse(e, t, n, n, r, i, a);
        return this;
    }
    ellipse(e, t, n, r, i, a, o, s) {
        let c = this.currentPoint.x;
        let l = this.currentPoint.y;
        this.absellipse(e + c, t + l, n, r, i, a, o, s);
        return this;
    }
    absellipse(e, t, n, r, i, a, o, s) {
        let c = new Ti(e, t, n, r, i, a, o, s);
        if (this.curves.length > 0) {
            let e = c.getPoint(0);
            if (!e.equals(this.currentPoint)) {
                this.lineTo(e.x, e.y);
            }
        }
        this.curves.push(c);
        let l = c.getPoint(1);
        this.currentPoint.copy(l);
        return this;
    }
    copy(e) {
        super.copy(e);
        this.currentPoint.copy(e.currentPoint);
        return this;
    }
    toJSON() {
        let e = super.toJSON();
        e.currentPoint = this.currentPoint.toArray();
        return e;
    }
    fromJSON(e) {
        super.fromJSON(e);
        this.currentPoint.fromArray(e.currentPoint);
        return this;
    }
}
class ea extends $i {
    constructor(e){
        super(e);
        this.uuid = dt();
        this.type = `Shape`;
        this.holes = [];
    }
    getPointsHoles(e) {
        let t = [];
        for(let n = 0, r = this.holes.length; n < r; n++){
            t[n] = this.holes[n].getPoints(e);
        }
        return t;
    }
    extractPoints(e) {
        return {
            shape: this.getPoints(e),
            holes: this.getPointsHoles(e)
        };
    }
    copy(e) {
        super.copy(e);
        this.holes = [];
        for(let t = 0, n = e.holes.length; t < n; t++){
            let hole = e.holes[t];
            this.holes.push(hole.clone());
        }
        return this;
    }
    toJSON() {
        let e = super.toJSON();
        e.uuid = this.uuid;
        e.holes = [];
        for(let t = 0, n = this.holes.length; t < n; t++){
            let hole = this.holes[t];
            e.holes.push(hole.toJSON());
        }
        return e;
    }
    fromJSON(e) {
        super.fromJSON(e);
        this.uuid = e.uuid;
        this.holes = [];
        for(let t = 0, n = e.holes.length; t < n; t++){
            let hole = e.holes[t];
            this.holes.push(new $i().fromJSON(hole));
        }
        return this;
    }
}
function ta(e, t, n = 2) {
    let r = t && t.length;
    let i = r ? t[0] * n : e.length;
    let a = na(e, 0, i, n, true);
    let o = [];
    if (!a || a.next === a.prev) {
        return o;
    }
    let s;
    let c;
    let l;
    if (r) {
        a = la(e, t, a, n);
    }
    if (e.length > 80 * n) {
        s = e[0];
        c = e[1];
        let t = s;
        let r = c;
        for(let a = n; a < i; a += n){
            let n = e[a];
            let i = e[a + 1];
            if (n < s) {
                s = n;
            }
            if (i < c) {
                c = i;
            }
            if (n > t) {
                t = n;
            }
            if (i > r) {
                r = i;
            }
        }
        l = Math.max(t - s, r - c);
        l = l === 0 ? 0 : 32767 / l;
    }
    ia(a, o, n, s, c, l, 0);
    return o;
}
function na(e, t, n, r, i) {
    let a;
    if (i === Ma(e, t, n, r) > 0) {
        for(let i = t; i < n; i += r){
            a = ka(i / r | 0, e[i], e[i + 1], a);
        }
    } else {
        for(let i = n - r; i >= t; i -= r){
            a = ka(i / r | 0, e[i], e[i + 1], a);
        }
    }
    if (a && xa(a, a.next)) {
        Aa(a);
        a = a.next;
    }
    return a;
}
function ra(e, t) {
    if (!e) {
        return e;
    }
    t ||= e;
    let n = e;
    let r;
    do {
        r = false;
        if (!n.steiner && (xa(n, n.next) || K(n.prev, n, n.next) === 0)) {
            Aa(n);
            n = t = n.prev;
            if (n === n.next) {
                break;
            }
            r = true;
        } else {
            n = n.next;
        }
    }while (r || n !== t)
    return t;
}
function ia(e, t, n, r, i, a, o) {
    if (!e) {
        return;
    }
    if (!o && a) {
        ma(e, r, i, a);
    }
    let s = e;
    while(e.prev !== e.next){
        let c = e.prev;
        let l = e.next;
        if (a ? oa(e, r, i, a) : aa(e)) {
            t.push(c.i, e.i, l.i);
            Aa(e);
            e = l.next;
            s = l.next;
        } else {
            e = l;
            if (e === s) {
                if (o) {
                    if (o === 1) {
                        e = sa(ra(e), t);
                        ia(e, t, n, r, i, a, 2);
                    } else if (o === 2) {
                        ca(e, t, n, r, i, a);
                    }
                } else {
                    ia(ra(e), t, n, r, i, a, 1);
                }
                break;
            }
        }
    }
}
function aa(e) {
    let e_prev = e.prev;
    let n = e;
    let e_next = e.next;
    if (K(e_prev, n, e_next) >= 0) {
        return false;
    }
    let e_prev_x = e_prev.x;
    let a = n.x;
    let e_next_x = e_next.x;
    let e_prev_y = e_prev.y;
    let c = n.y;
    let e_next_y = e_next.y;
    let u = Math.min(e_prev_x, a, e_next_x);
    let d = Math.min(e_prev_y, c, e_next_y);
    let f = Math.max(e_prev_x, a, e_next_x);
    let p = Math.max(e_prev_y, c, e_next_y);
    let r_next = e_next.next;
    while(r_next !== e_prev){
        if (r_next.x >= u && r_next.x <= f && r_next.y >= d && r_next.y <= p && ya(e_prev_x, e_prev_y, a, c, e_next_x, e_next_y, r_next.x, r_next.y) && K(r_next.prev, r_next, r_next.next) >= 0) {
            return false;
        }
        r_next = r_next.next;
    }
    return true;
}
function oa(e, t, n, r) {
    let e_prev = e.prev;
    let a = e;
    let e_next = e.next;
    if (K(e_prev, a, e_next) >= 0) {
        return false;
    }
    let e_prev_x = e_prev.x;
    let c = a.x;
    let e_next_x = e_next.x;
    let e_prev_y = e_prev.y;
    let d = a.y;
    let e_next_y = e_next.y;
    let p = Math.min(e_prev_x, c, e_next_x);
    let m = Math.min(e_prev_y, d, e_next_y);
    let h = Math.max(e_prev_x, c, e_next_x);
    let g = Math.max(e_prev_y, d, e_next_y);
    let _ = ga(p, m, t, n, r);
    let v = ga(h, g, t, n, r);
    let e_prevZ = e.prevZ;
    let e_nextZ = e.nextZ;
    while(e_prevZ && e_prevZ.z >= _ && e_nextZ && e_nextZ.z <= v){
        if (e_prevZ.x >= p && e_prevZ.x <= h && e_prevZ.y >= m && e_prevZ.y <= g && e_prevZ !== e_prev && e_prevZ !== e_next && ya(e_prev_x, e_prev_y, c, d, e_next_x, e_next_y, e_prevZ.x, e_prevZ.y) && K(e_prevZ.prev, e_prevZ, e_prevZ.next) >= 0 || (e_prevZ = e_prevZ.prevZ, e_nextZ.x >= p && e_nextZ.x <= h && e_nextZ.y >= m && e_nextZ.y <= g && e_nextZ !== e_prev && e_nextZ !== e_next && ya(e_prev_x, e_prev_y, c, d, e_next_x, e_next_y, e_nextZ.x, e_nextZ.y) && K(e_nextZ.prev, e_nextZ, e_nextZ.next) >= 0)) {
            return false;
        }
        e_nextZ = e_nextZ.nextZ;
    }
    while(e_prevZ && e_prevZ.z >= _){
        if (e_prevZ.x >= p && e_prevZ.x <= h && e_prevZ.y >= m && e_prevZ.y <= g && e_prevZ !== e_prev && e_prevZ !== e_next && ya(e_prev_x, e_prev_y, c, d, e_next_x, e_next_y, e_prevZ.x, e_prevZ.y) && K(e_prevZ.prev, e_prevZ, e_prevZ.next) >= 0) {
            return false;
        }
        e_prevZ = e_prevZ.prevZ;
    }
    while(e_nextZ && e_nextZ.z <= v){
        if (e_nextZ.x >= p && e_nextZ.x <= h && e_nextZ.y >= m && e_nextZ.y <= g && e_nextZ !== e_prev && e_nextZ !== e_next && ya(e_prev_x, e_prev_y, c, d, e_next_x, e_next_y, e_nextZ.x, e_nextZ.y) && K(e_nextZ.prev, e_nextZ, e_nextZ.next) >= 0) {
            return false;
        }
        e_nextZ = e_nextZ.nextZ;
    }
    return true;
}
function sa(e, t) {
    let n = e;
    do {
        let r = n.prev;
        let i = n.next.next;
        if (!xa(r, i) && Sa(r, n, n.next, i) && Ea(r, i) && Ea(i, r)) {
            t.push(r.i, n.i, i.i);
            Aa(n);
            Aa(n.next);
            e = i;
            n = i;
        }
        n = n.next;
    }while (n !== e)
    return ra(n);
}
function ca(e, t, n, r, i, a) {
    let o = e;
    do {
        let e = o.next.next;
        while(e !== o.prev){
            if (o.i !== e.i && ba(o, e)) {
                let s = Oa(o, e);
                o = ra(o, o.next);
                s = ra(s, s.next);
                ia(o, t, n, r, i, a, 0);
                ia(s, t, n, r, i, a, 0);
                return;
            }
            e = e.next;
        }
        o = o.next;
    }while (o !== e)
}
function la(e, t, n, r) {
    let i = [];
    for(let n = 0, a = t.length; n < a; n++){
        let o = na(e, t[n] * r, n < a - 1 ? t[n + 1] * r : e.length, r, false);
        if (o === o.next) {
            o.steiner = true;
        }
        i.push(_a(o));
    }
    i.sort(ua);
    for(let e = 0; e < i.length; e++){
        n = da(i[e], n);
    }
    return n;
}
function ua(e, t) {
    let n = e.x - t.x;
    if (n === 0) {
        n = e.y - t.y;
        if (n === 0) {
            n = (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x);
        }
    }
    return n;
}
function da(e, t) {
    let n = fa(e, t);
    if (!n) {
        return t;
    }
    let r = Oa(n, e);
    ra(r, r.next);
    return ra(n, n.next);
}
function fa(e, t) {
    let n = t;
    let r = e.x;
    let i = e.y;
    let a = -Infinity;
    let o;
    if (xa(e, n)) {
        return n;
    }
    do {
        if (xa(e, n.next)) {
            return n.next;
        }
        if (i <= n.y && i >= n.next.y && n.next.y !== n.y) {
            let e = n.x + (i - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
            if (e <= r && e > a && (a = e, o = n.x < n.next.x ? n : n.next, e === r)) {
                return o;
            }
        }
        n = n.next;
    }while (n !== t)
    if (!o) {
        return null;
    }
    let s = o;
    let c = o.x;
    let l = o.y;
    let u = Infinity;
    n = o;
    do {
        if (r >= n.x && n.x >= c && r !== n.x && va(i < l ? r : a, i, c, l, i < l ? a : r, i, n.x, n.y)) {
            let t = Math.abs(i - n.y) / (r - n.x);
            if (Ea(n, e) && (t < u || t === u && (n.x > o.x || n.x === o.x && pa(o, n)))) {
                o = n;
                u = t;
            }
        }
        n = n.next;
    }while (n !== s)
    return o;
}
function pa(e, t) {
    return K(e.prev, e, t.prev) < 0 && K(t.next, e, e.next) < 0;
}
function ma(e, t, n, r) {
    let i = e;
    do {
        if (i.z === 0) {
            i.z = ga(i.x, i.y, t, n, r);
        }
        i.prevZ = i.prev;
        i.nextZ = i.next;
        i = i.next;
    }while (i !== e)
    i.prevZ.nextZ = null;
    i.prevZ = null;
    ha(i);
}
function ha(e) {
    let t;
    let n = 1;
    do {
        let r = e;
        let i;
        e = null;
        let a = null;
        for(t = 0; r;){
            t++;
            let o = r;
            let s = 0;
            for(let e = 0; e < n && (s++, o = o.nextZ, o); e++);
            let c = n;
            while(s > 0 || c > 0 && o){
                if (s !== 0 && (c === 0 || !o || r.z <= o.z)) {
                    i = r;
                    r = r.nextZ;
                    s--;
                } else {
                    i = o;
                    o = o.nextZ;
                    c--;
                }
                if (a) {
                    a.nextZ = i;
                } else {
                    e = i;
                }
                i.prevZ = a;
                a = i;
            }
            r = o;
        }
        a.nextZ = null;
        n *= 2;
    }while (t > 1)
    return e;
}
function ga(e, t, n, r, i) {
    e = (e - n) * i | 0;
    t = (t - r) * i | 0;
    e = (e | e << 8) & 16711935;
    e = (e | e << 4) & 252645135;
    e = (e | e << 2) & 858993459;
    e = (e | e << 1) & 1431655765;
    t = (t | t << 8) & 16711935;
    t = (t | t << 4) & 252645135;
    t = (t | t << 2) & 858993459;
    t = (t | t << 1) & 1431655765;
    return e | t << 1;
}
function _a(e) {
    let t = e;
    let n = e;
    do {
        if (t.x < n.x || t.x === n.x && t.y < n.y) {
            n = t;
        }
        t = t.next;
    }while (t !== e)
    return n;
}
function va(e, t, n, r, i, a, o, s) {
    return (i - o) * (t - s) >= (e - o) * (a - s) && (e - o) * (r - s) >= (n - o) * (t - s) && (n - o) * (a - s) >= (i - o) * (r - s);
}
function ya(e, t, n, r, i, a, o, s) {
    return (e !== o || t !== s) && va(e, t, n, r, i, a, o, s);
}
function ba(e, t) {
    return e.next.i !== t.i && e.prev.i !== t.i && !Ta(e, t) && (Ea(e, t) && Ea(t, e) && Da(e, t) && (K(e.prev, e, t.prev) || K(e, t.prev, t)) || xa(e, t) && K(e.prev, e, e.next) > 0 && K(t.prev, t, t.next) > 0);
}
function K(e, t, n) {
    return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function xa(e, t) {
    return e.x === t.x && e.y === t.y;
}
function Sa(e, t, n, r) {
    let i = wa(K(e, t, n));
    let a = wa(K(e, t, r));
    let o = wa(K(n, r, e));
    let s = wa(K(n, r, t));
    return !!(i !== a && o !== s || i === 0 && Ca(e, n, t) || a === 0 && Ca(e, r, t) || o === 0 && Ca(n, e, r) || s === 0 && Ca(n, t, r));
}
function Ca(e, t, n) {
    return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function wa(e) {
    if (e > 0) {
        return 1;
    }
    if (e < 0) {
        return -1;
    }
    return 0;
}
function Ta(e, t) {
    let n = e;
    do {
        if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && Sa(n, n.next, e, t)) {
            return true;
        }
        n = n.next;
    }while (n !== e)
    return false;
}
function Ea(e, t) {
    if (K(e.prev, e, e.next) < 0) {
        return K(e, t, e.next) >= 0 && K(e, e.prev, t) >= 0;
    }
    return K(e, t, e.prev) < 0 || K(e, e.next, t) < 0;
}
function Da(e, t) {
    let n = e;
    let r = false;
    let i = (e.x + t.x) / 2;
    let a = (e.y + t.y) / 2;
    do {
        if (n.y > a != n.next.y > a && n.next.y !== n.y && i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x) {
            r = !r;
        }
        n = n.next;
    }while (n !== e)
    return r;
}
function Oa(e, t) {
    let n = ja(e.i, e.x, e.y);
    let r = ja(t.i, t.x, t.y);
    let e_next = e.next;
    let t_prev = t.prev;
    e.next = t;
    t.prev = e;
    n.next = e_next;
    e_next.prev = n;
    r.next = n;
    n.prev = r;
    t_prev.next = r;
    r.prev = t_prev;
    return r;
}
function ka(e, t, n, r) {
    let i = ja(e, t, n);
    if (r) {
        i.next = r.next;
        i.prev = r;
        r.next.prev = i;
        r.next = i;
    } else {
        i.prev = i;
        i.next = i;
    }
    return i;
}
function Aa(e) {
    e.next.prev = e.prev;
    e.prev.next = e.next;
    if (e.prevZ) {
        e.prevZ.nextZ = e.nextZ;
    }
    if (e.nextZ) {
        e.nextZ.prevZ = e.prevZ;
    }
}
function ja(i_1, x_1, y_1) {
    return {
        i: i_1,
        x: x_1,
        y: y_1,
        prev: null,
        next: null,
        z: 0,
        prevZ: null,
        nextZ: null,
        steiner: false
    };
}
function Ma(e, t, n, r) {
    let i = 0;
    for(let a = t, o = n - r; a < n; a += r){
        i += (e[o] - e[a]) * (e[a + 1] + e[o + 1]);
        o = a;
    }
    return i;
}
class Na {
    static triangulate(e, t, n = 2) {
        return ta(e, t, n);
    }
}
const Pa = class e {
    static area(e) {
        let e_length = e.length;
        let n = 0;
        for(let r = e_length - 1, i = 0; i < e_length; r = i++){
            n += e[r].x * e[i].y - e[i].x * e[r].y;
        }
        return n * 0.5;
    }
    static isClockWise(t) {
        return e.area(t) < 0;
    }
    static triangulateShape(e, t) {
        let n = [];
        let r = [];
        let i = [];
        Fa(e);
        Ia(n, e);
        let e_length = e.length;
        t.forEach(Fa);
        for(let e = 0; e < t.length; e++){
            r.push(e_length);
            e_length += t[e].length;
            Ia(n, t[e]);
        }
        let o = Na.triangulate(n, r);
        for(let e = 0; e < o.length; e += 3){
            i.push(o.slice(e, e + 3));
        }
        return i;
    }
};
function Fa(e) {
    let e_length = e.length;
    if (e_length > 2 && e[e_length - 1].equals(e[0])) {
        e.pop();
    }
}
function Ia(e, t) {
    for(let n = 0; n < t.length; n++){
        e.push(t[n].x);
        e.push(t[n].y);
    }
}
const La = class e extends dr {
    constructor(shapes = new ea([
        new I(0.5, 0.5),
        new I(-0.5, 0.5),
        new I(-0.5, -0.5),
        new I(0.5, -0.5)
    ]), options = {}){
        super();
        this.type = `ExtrudeGeometry`;
        this.parameters = {
            shapes,
            options
        };
        shapes = Array.isArray(shapes) ? shapes : [
            shapes
        ];
        let n = this;
        let r = [];
        let i = [];
        for(let t = 0, n = shapes.length; t < n; t++){
            let shape = shapes[t];
            a(shape);
        }
        this.setAttribute(`position`, new H(r, 3));
        this.setAttribute(`uv`, new H(i, 2));
        this.computeVertexNormals();
        function a(shape) {
            let a = [];
            let o = options.curveSegments === undefined ? 12 : options.curveSegments;
            let s = options.steps === undefined ? 1 : options.steps;
            let c = options.depth === undefined ? 1 : options.depth;
            let l = options.bevelEnabled === undefined || options.bevelEnabled;
            let u = options.bevelThickness === undefined ? 0.2 : options.bevelThickness;
            let d = options.bevelSize === undefined ? u - 0.1 : options.bevelSize;
            let f = options.bevelOffset === undefined ? 0 : options.bevelOffset;
            let p = options.bevelSegments === undefined ? 3 : options.bevelSegments;
            let t_extrudePath = options.extrudePath;
            let h = options.UVGenerator === undefined ? Ra : options.UVGenerator;
            let g;
            let _ = false;
            let v;
            let y;
            let b;
            let x;
            if (t_extrudePath) {
                g = t_extrudePath.getSpacedPoints(s);
                _ = true;
                l = false;
                let e = t_extrudePath.isCatmullRomCurve3 ? t_extrudePath.closed : false;
                v = t_extrudePath.computeFrenetFrames(s, e);
                y = new L;
                b = new L;
                x = new L;
            }
            if (!l) {
                p = 0;
                u = 0;
                d = 0;
                f = 0;
            }
            let S = shape.extractPoints(o);
            let S_shape = S.shape;
            let S_holes = S.holes;
            if (!Pa.isClockWise(S_shape)) {
                S_shape = S_shape.reverse();
                for(let e = 0, t = S_holes.length; e < t; e++){
                    let hole = S_holes[e];
                    if (Pa.isClockWise(hole)) {
                        S_holes[e] = hole.reverse();
                    }
                }
            }
            function T(e) {
                let t = e[0];
                for(let n = 1; n <= e.length; n++){
                    let r = n % e.length;
                    let i = e[r];
                    let a = i.x - t.x;
                    let o = i.y - t.y;
                    let s = a * a + o * o;
                    let c = Math.max(Math.abs(i.x), Math.abs(i.y), Math.abs(t.x), Math.abs(t.y));
                    if (s <= 1.0000000000000001e-20 * c * c) {
                        e.splice(r, 1);
                        n--;
                    } else {
                        t = i;
                    }
                }
            }
            T(S_shape);
            S_holes.forEach(T);
            let w_length = S_holes.length;
            let D = S_shape;
            for(let e = 0; e < w_length; e++){
                let t = S_holes[e];
                S_shape = S_shape.concat(t);
            }
            function O(e, t, n) {
                if (!t) {
                    N(`ExtrudeGeometry: vec does not exist`);
                }
                return e.clone().addScaledVector(t, n);
            }
            let C_length = S_shape.length;
            function A(e, t, n) {
                let r;
                let i;
                let a;
                let o = e.x - t.x;
                let s = e.y - t.y;
                let c = n.x - e.x;
                let l = n.y - e.y;
                let u = o * o + s * s;
                let d = o * l - s * c;
                if (Math.abs(d) > 2 ** -52) {
                    let d = Math.sqrt(u);
                    let f = Math.sqrt(c * c + l * l);
                    let p = t.x - s / d;
                    let m = t.y + o / d;
                    let h = n.x - l / f;
                    let g = n.y + c / f;
                    let _ = ((h - p) * l - (g - m) * c) / (o * l - s * c);
                    r = p + o * _ - e.x;
                    i = m + s * _ - e.y;
                    let v = r * r + i * i;
                    if (v <= 2) {
                        return new I(r, i);
                    }
                    a = Math.sqrt(v / 2);
                } else {
                    let e = false;
                    if (o > 2 ** -52) {
                        if (c > 2 ** -52) {
                            e = true;
                        }
                    } else if (o < -(2 ** -52)) {
                        if (c < -(2 ** -52)) {
                            e = true;
                        }
                    } else if (Math.sign(s) === Math.sign(l)) {
                        e = true;
                    }
                    if (e) {
                        r = -s;
                        i = o;
                        a = Math.sqrt(u);
                    } else {
                        r = o;
                        i = s;
                        a = Math.sqrt(u / 2);
                    }
                }
                return new I(r / a, i / a);
            }
            let ee = [];
            for(let e = 0, t = D.length, n = t - 1, r = e + 1; e < t; e++, n++, r++){
                if (n === t) {
                    n = 0;
                }
                if (r === t) {
                    r = 0;
                }
                ee[e] = A(D[e], D[n], D[r]);
            }
            let te = [];
            let j;
            let ne = ee.concat();
            for(let e = 0, t = w_length; e < t; e++){
                let t = S_holes[e];
                j = [];
                for(let e = 0, n = t.length, r = n - 1, i = e + 1; e < n; e++, r++, i++){
                    if (r === n) {
                        r = 0;
                    }
                    if (i === n) {
                        i = 0;
                    }
                    j[e] = A(t[e], t[r], t[i]);
                }
                te.push(j);
                ne = ne.concat(j);
            }
            let re;
            if (p === 0) {
                re = Pa.triangulateShape(D, S_holes);
            } else {
                let e = [];
                let t = [];
                for(let n = 0; n < p; n++){
                    let r = n / p;
                    let i = u * Math.cos(r * Math.PI / 2);
                    let a = d * Math.sin(r * Math.PI / 2) + f;
                    for(let t = 0, n = D.length; t < n; t++){
                        let n = O(D[t], ee[t], a);
                        le(n.x, n.y, -i);
                        if (r === 0) {
                            e.push(n);
                        }
                    }
                    for(let e = 0, n = w_length; e < n; e++){
                        let n = S_holes[e];
                        j = te[e];
                        let o = [];
                        for(let e = 0, t = n.length; e < t; e++){
                            let t = O(n[e], j[e], a);
                            le(t.x, t.y, -i);
                            if (r === 0) {
                                o.push(t);
                            }
                        }
                        if (r === 0) {
                            t.push(o);
                        }
                    }
                }
                re = Pa.triangulateShape(e, t);
            }
            let re_length = re.length;
            let ae = d + f;
            for(let e = 0; e < C_length; e++){
                let t = l ? O(S_shape[e], ne[e], ae) : S_shape[e];
                if (_) {
                    b.copy(v.normals[0]).multiplyScalar(t.x);
                    y.copy(v.binormals[0]).multiplyScalar(t.y);
                    x.copy(g[0]).add(b).add(y);
                    le(x.x, x.y, x.z);
                } else {
                    le(t.x, t.y, 0);
                }
            }
            for(let e = 1; e <= s; e++){
                for(let t = 0; t < C_length; t++){
                    let n = l ? O(S_shape[t], ne[t], ae) : S_shape[t];
                    if (_) {
                        b.copy(v.normals[e]).multiplyScalar(n.x);
                        y.copy(v.binormals[e]).multiplyScalar(n.y);
                        x.copy(g[e]).add(b).add(y);
                        le(x.x, x.y, x.z);
                    } else {
                        le(n.x, n.y, c / s * e);
                    }
                }
            }
            for(let e = p - 1; e >= 0; e--){
                let t = e / p;
                let n = u * Math.cos(t * Math.PI / 2);
                let r = d * Math.sin(t * Math.PI / 2) + f;
                for(let e = 0, t = D.length; e < t; e++){
                    let t = O(D[e], ee[e], r);
                    le(t.x, t.y, c + n);
                }
                for(let e = 0, t = S_holes.length; e < t; e++){
                    let hole = S_holes[e];
                    j = te[e];
                    for(let e = 0, i = hole.length; e < i; e++){
                        let i = O(hole[e], j[e], r);
                        if (_) {
                            le(i.x, i.y + g[s - 1].y, g[s - 1].x + n);
                        } else {
                            le(i.x, i.y, c + n);
                        }
                    }
                }
            }
            oe();
            se();
            function oe() {
                let e = r.length / 3;
                if (l) {
                    let e = 0;
                    let t = C_length * e;
                    for(let e = 0; e < re_length; e++){
                        let n = re[e];
                        ue(n[2] + t, n[1] + t, n[0] + t);
                    }
                    e = s + p * 2;
                    t = C_length * e;
                    for(let e = 0; e < re_length; e++){
                        let n = re[e];
                        ue(n[0] + t, n[1] + t, n[2] + t);
                    }
                } else {
                    for(let e = 0; e < re_length; e++){
                        let t = re[e];
                        ue(t[2], t[1], t[0]);
                    }
                    for(let e = 0; e < re_length; e++){
                        let t = re[e];
                        ue(t[0] + C_length * s, t[1] + C_length * s, t[2] + C_length * s);
                    }
                }
                n.addGroup(e, r.length / 3 - e, 0);
            }
            function se() {
                let e = r.length / 3;
                let t = 0;
                ce(D, t);
                t += D.length;
                for(let e = 0, n = S_holes.length; e < n; e++){
                    let hole = S_holes[e];
                    ce(hole, t);
                    t += hole.length;
                }
                n.addGroup(e, r.length / 3 - e, 1);
            }
            function ce(e, t) {
                let e_length = e.length;
                while(--e_length >= 0){
                    let r = e_length;
                    let i = e_length - 1;
                    if (i < 0) {
                        i = e.length - 1;
                    }
                    for(let e = 0, n = s + p * 2; e < n; e++){
                        let n = C_length * e;
                        let a = C_length * (e + 1);
                        de(t + r + n, t + i + n, t + i + a, t + r + a);
                    }
                }
            }
            function le(e, t, n) {
                a.push(e);
                a.push(t);
                a.push(n);
            }
            function ue(e, t, i) {
                fe(e);
                fe(t);
                fe(i);
                let a = r.length / 3;
                let o = h.generateTopUV(n, r, a - 3, a - 2, a - 1);
                pe(o[0]);
                pe(o[1]);
                pe(o[2]);
            }
            function de(e, t, i, a) {
                fe(e);
                fe(t);
                fe(a);
                fe(t);
                fe(i);
                fe(a);
                let o = r.length / 3;
                let s = h.generateSideWallUV(n, r, o - 6, o - 3, o - 2, o - 1);
                pe(s[0]);
                pe(s[1]);
                pe(s[3]);
                pe(s[1]);
                pe(s[2]);
                pe(s[3]);
            }
            function fe(e) {
                r.push(a[e * 3 + 0]);
                r.push(a[e * 3 + 1]);
                r.push(a[e * 3 + 2]);
            }
            function pe(e) {
                i.push(e.x);
                i.push(e.y);
            }
        }
    }
    copy(e) {
        super.copy(e);
        this.parameters = {
            ...e.parameters
        };
        return this;
    }
    toJSON() {
        let e = super.toJSON();
        let shapes = this.parameters.shapes;
        let options = this.parameters.options;
        return za(shapes, options, e);
    }
    static fromJSON(t, n) {
        let r = [];
        for(let e = 0, i = t.shapes.length; e < i; e++){
            let i = n[t.shapes[e]];
            r.push(i);
        }
        let extrudePath = t.options.extrudePath;
        if (extrudePath !== undefined) {
            t.options.extrudePath = new Zi[extrudePath.type]().fromJSON(extrudePath);
        }
        return new e(r, t.options);
    }
};
var Ra = {
    generateTopUV: function(e, t, n, r, i) {
        let a = t[n * 3];
        let o = t[n * 3 + 1];
        let s = t[r * 3];
        let c = t[r * 3 + 1];
        let l = t[i * 3];
        let u = t[i * 3 + 1];
        return [
            new I(a, o),
            new I(s, c),
            new I(l, u)
        ];
    },
    generateSideWallUV: function(e, t, n, r, i, a) {
        let o = t[n * 3];
        let s = t[n * 3 + 1];
        let c = t[n * 3 + 2];
        let l = t[r * 3];
        let u = t[r * 3 + 1];
        let d = t[r * 3 + 2];
        let f = t[i * 3];
        let p = t[i * 3 + 1];
        let m = t[i * 3 + 2];
        let h = t[a * 3];
        let g = t[a * 3 + 1];
        let _ = t[a * 3 + 2];
        if (Math.abs(s - u) < Math.abs(o - l)) {
            return [
                new I(o, 1 - c),
                new I(l, 1 - d),
                new I(f, 1 - m),
                new I(h, 1 - _)
            ];
        }
        return [
            new I(s, 1 - c),
            new I(u, 1 - d),
            new I(p, 1 - m),
            new I(g, 1 - _)
        ];
    }
};
function za(shapes, options, n) {
    n.shapes = [];
    if (Array.isArray(shapes)) {
        for(let t = 0, r = shapes.length; t < r; t++){
            let shape = shapes[t];
            n.shapes.push(shape.uuid);
        }
    } else {
        n.shapes.push(shapes.uuid);
    }
    n.options = {
        ...options
    };
    if (options.extrudePath !== undefined) {
        n.options.extrudePath = options.extrudePath.toJSON();
    }
    return n;
}
const Ba = class e extends dr {
    constructor(points = [
        new I(0, -0.5),
        new I(0.5, 0),
        new I(0, 0.5)
    ], t = 12, n = 0, r = Math.PI * 2){
        super();
        this.type = `LatheGeometry`;
        this.parameters = {
            points,
            segments: t,
            phiStart: n,
            phiLength: r
        };
        t = Math.floor(t);
        r = P(r, 0, Math.PI * 2);
        let i = [];
        let a = [];
        let o = [];
        let s = [];
        let c = [];
        let l = 1 / t;
        let u = new L;
        let d = new I;
        let f = new L;
        let p = new L;
        let m = new L;
        let h = 0;
        let g = 0;
        for(let t = 0; t <= points.length - 1; t++){
            switch(t){
                case 0:
                    h = points[t + 1].x - points[t].x;
                    g = points[t + 1].y - points[t].y;
                    f.x = g * 1;
                    f.y = -h;
                    f.z = g * 0;
                    m.copy(f);
                    f.normalize();
                    s.push(f.x, f.y, f.z);
                    break;
                case points.length - 1:
                    s.push(m.x, m.y, m.z);
                    break;
                default:
                    h = points[t + 1].x - points[t].x;
                    g = points[t + 1].y - points[t].y;
                    f.x = g * 1;
                    f.y = -h;
                    f.z = g * 0;
                    p.copy(f);
                    f.x += m.x;
                    f.y += m.y;
                    f.z += m.z;
                    f.normalize();
                    s.push(f.x, f.y, f.z);
                    m.copy(p);
            }
        }
        for(let i = 0; i <= t; i++){
            let f = n + i * l * r;
            let p = Math.sin(f);
            let m = Math.cos(f);
            for(let n = 0; n <= points.length - 1; n++){
                u.x = points[n].x * p;
                u.y = points[n].y;
                u.z = points[n].x * m;
                a.push(u.x, u.y, u.z);
                d.x = i / t;
                d.y = n / (points.length - 1);
                o.push(d.x, d.y);
                let r = s[3 * n + 0] * p;
                let l = s[3 * n + 1];
                let f = s[3 * n + 0] * m;
                c.push(r, l, f);
            }
        }
        for(let n = 0; n < t; n++){
            for(let t = 0; t < points.length - 1; t++){
                let r = t + n * points.length;
                let a = r;
                let o = r + points.length;
                let s = r + points.length + 1;
                let c = r + 1;
                i.push(a, o, c);
                i.push(s, c, o);
            }
        }
        this.setIndex(i);
        this.setAttribute(`position`, new H(a, 3));
        this.setAttribute(`uv`, new H(o, 2));
        this.setAttribute(`normal`, new H(c, 3));
    }
    copy(e) {
        super.copy(e);
        this.parameters = {
            ...e.parameters
        };
        return this;
    }
    static fromJSON(t) {
        return new e(t.points, t.segments, t.phiStart, t.phiLength);
    }
};
const Va = class e extends dr {
    constructor(e = 1, t = 1, n = 1, r = 1){
        super();
        this.type = `PlaneGeometry`;
        this.parameters = {
            width: e,
            height: t,
            widthSegments: n,
            heightSegments: r
        };
        let i = e / 2;
        let a = t / 2;
        let o = Math.floor(n);
        let s = Math.floor(r);
        let c = o + 1;
        let l = s + 1;
        let u = e / o;
        let d = t / s;
        let f = [];
        let p = [];
        let m = [];
        let h = [];
        for(let e = 0; e < l; e++){
            let t = e * d - a;
            for(let n = 0; n < c; n++){
                let r = n * u - i;
                p.push(r, -t, 0);
                m.push(0, 0, 1);
                h.push(n / o);
                h.push(1 - e / s);
            }
        }
        for(let e = 0; e < s; e++){
            for(let t = 0; t < o; t++){
                let n = t + c * e;
                let r = t + c * (e + 1);
                let i = t + 1 + c * (e + 1);
                let a = t + 1 + c * e;
                f.push(n, r, a);
                f.push(r, i, a);
            }
        }
        this.setIndex(f);
        this.setAttribute(`position`, new H(p, 3));
        this.setAttribute(`normal`, new H(m, 3));
        this.setAttribute(`uv`, new H(h, 2));
    }
    copy(e) {
        super.copy(e);
        this.parameters = {
            ...e.parameters
        };
        return this;
    }
    static fromJSON(t) {
        return new e(t.width, t.height, t.widthSegments, t.heightSegments);
    }
};
const Ha = class e extends dr {
    constructor(innerRadius = 0.5, outerRadius = 1, thetaSegments = 32, phiSegments = 1, i = 0, a = Math.PI * 2){
        super();
        this.type = `RingGeometry`;
        this.parameters = {
            innerRadius,
            outerRadius,
            thetaSegments,
            phiSegments,
            thetaStart: i,
            thetaLength: a
        };
        thetaSegments = Math.max(3, thetaSegments);
        phiSegments = Math.max(1, phiSegments);
        let o = [];
        let s = [];
        let c = [];
        let l = [];
        let u = innerRadius;
        let d = (outerRadius - innerRadius) / phiSegments;
        let f = new L;
        let p = new I;
        for(let e = 0; e <= phiSegments; e++){
            for(let e = 0; e <= thetaSegments; e++){
                let r = i + e / thetaSegments * a;
                f.x = u * Math.cos(r);
                f.y = u * Math.sin(r);
                s.push(f.x, f.y, f.z);
                c.push(0, 0, 1);
                p.x = (f.x / outerRadius + 1) / 2;
                p.y = (f.y / outerRadius + 1) / 2;
                l.push(p.x, p.y);
            }
            u += d;
        }
        for(let e = 0; e < phiSegments; e++){
            let t = e * (thetaSegments + 1);
            for(let e = 0; e < thetaSegments; e++){
                let r = e + t;
                let i = r;
                let a = r + thetaSegments + 1;
                let s = r + thetaSegments + 2;
                let c = r + 1;
                o.push(i, a, c);
                o.push(a, s, c);
            }
        }
        this.setIndex(o);
        this.setAttribute(`position`, new H(s, 3));
        this.setAttribute(`normal`, new H(c, 3));
        this.setAttribute(`uv`, new H(l, 2));
    }
    copy(e) {
        super.copy(e);
        this.parameters = {
            ...e.parameters
        };
        return this;
    }
    static fromJSON(t) {
        return new e(t.innerRadius, t.outerRadius, t.thetaSegments, t.phiSegments, t.thetaStart, t.thetaLength);
    }
};
const Ua = class e extends dr {
    constructor(e = 1, t = 32, n = 16, r = 0, i = Math.PI * 2, a = 0, o = Math.PI){
        super();
        this.type = `SphereGeometry`;
        this.parameters = {
            radius: e,
            widthSegments: t,
            heightSegments: n,
            phiStart: r,
            phiLength: i,
            thetaStart: a,
            thetaLength: o
        };
        t = Math.max(3, Math.floor(t));
        n = Math.max(2, Math.floor(n));
        let s = Math.min(a + o, Math.PI);
        let c = 0;
        let l = [];
        let u = new L;
        let d = new L;
        let f = [];
        let p = [];
        let m = [];
        let h = [];
        for(let f = 0; f <= n; f++){
            let g = [];
            let _ = f / n;
            let v = a + _ * o;
            let y = e * Math.cos(v);
            let b = Math.sqrt(e * e - y * y);
            let x = 0;
            if (f === 0 && a === 0) {
                x = 0.5 / t;
            } else if (f === n && s === Math.PI) {
                x = -0.5 / t;
            }
            for(let e = 0; e <= t; e++){
                let n = e / t;
                let a = r + n * i;
                u.x = -b * Math.cos(a);
                u.y = y;
                u.z = b * Math.sin(a);
                p.push(u.x, u.y, u.z);
                d.copy(u).normalize();
                m.push(d.x, d.y, d.z);
                h.push(n + x, 1 - _);
                g.push(c++);
            }
            l.push(g);
        }
        for(let e = 0; e < n; e++){
            for(let r = 0; r < t; r++){
                let t = l[e][r + 1];
                let i = l[e][r];
                let o = l[e + 1][r];
                let c = l[e + 1][r + 1];
                if (e !== 0 || a > 0) {
                    f.push(t, i, c);
                }
                if (e !== n - 1 || s < Math.PI) {
                    f.push(i, o, c);
                }
            }
        }
        this.setIndex(f);
        this.setAttribute(`position`, new H(p, 3));
        this.setAttribute(`normal`, new H(m, 3));
        this.setAttribute(`uv`, new H(h, 2));
    }
    copy(e) {
        super.copy(e);
        this.parameters = {
            ...e.parameters
        };
        return this;
    }
    static fromJSON(t) {
        return new e(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
    }
};
const Wa = class e extends dr {
    constructor(e = 1, t = 0.4, n = 12, r = 48, arc = Math.PI * 2, a = 0, o = Math.PI * 2){
        super();
        this.type = `TorusGeometry`;
        this.parameters = {
            radius: e,
            tube: t,
            radialSegments: n,
            tubularSegments: r,
            arc,
            thetaStart: a,
            thetaLength: o
        };
        n = Math.floor(n);
        r = Math.floor(r);
        let s = [];
        let c = [];
        let l = [];
        let u = [];
        let d = new L;
        let f = new L;
        let p = new L;
        for(let s = 0; s <= n; s++){
            let m = a + s / n * o;
            for(let a = 0; a <= r; a++){
                let o = a / r * arc;
                f.x = (e + t * Math.cos(m)) * Math.cos(o);
                f.y = (e + t * Math.cos(m)) * Math.sin(o);
                f.z = t * Math.sin(m);
                c.push(f.x, f.y, f.z);
                d.x = e * Math.cos(o);
                d.y = e * Math.sin(o);
                p.subVectors(f, d).normalize();
                l.push(p.x, p.y, p.z);
                u.push(a / r);
                u.push(s / n);
            }
        }
        for(let e = 1; e <= n; e++){
            for(let t = 1; t <= r; t++){
                let n = (r + 1) * e + t - 1;
                let i = (r + 1) * (e - 1) + t - 1;
                let a = (r + 1) * (e - 1) + t;
                let o = (r + 1) * e + t;
                s.push(n, i, o);
                s.push(i, a, o);
            }
        }
        this.setIndex(s);
        this.setAttribute(`position`, new H(c, 3));
        this.setAttribute(`normal`, new H(l, 3));
        this.setAttribute(`uv`, new H(u, 2));
    }
    copy(e) {
        super.copy(e);
        this.parameters = {
            ...e.parameters
        };
        return this;
    }
    static fromJSON(t) {
        return new e(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc, t.thetaStart, t.thetaLength);
    }
};
const Ga = class e extends dr {
    constructor(path = new Yi(new L(-1, -1, 0), new L(-1, 1, 0), new L(1, 1, 0)), t = 64, n = 1, r = 8, closed = false){
        super();
        this.type = `TubeGeometry`;
        this.parameters = {
            path,
            tubularSegments: t,
            radius: n,
            radialSegments: r,
            closed
        };
        let a = path.computeFrenetFrames(t, closed);
        this.tangents = a.tangents;
        this.normals = a.normals;
        this.binormals = a.binormals;
        let o = new L;
        let s = new L;
        let c = new I;
        let l = new L;
        let u = [];
        let d = [];
        let f = [];
        let p = [];
        m();
        this.setIndex(p);
        this.setAttribute(`position`, new H(u, 3));
        this.setAttribute(`normal`, new H(d, 3));
        this.setAttribute(`uv`, new H(f, 2));
        function m() {
            for(let e = 0; e < t; e++){
                h(e);
            }
            h(closed === false ? t : 0);
            _();
            g();
        }
        function h(i) {
            l = path.getPointAt(i / t, l);
            let c = a.normals[i];
            let f = a.binormals[i];
            for(let e = 0; e <= r; e++){
                let t = e / r * Math.PI * 2;
                let i = Math.sin(t);
                let a = -Math.cos(t);
                s.x = a * c.x + i * f.x;
                s.y = a * c.y + i * f.y;
                s.z = a * c.z + i * f.z;
                s.normalize();
                d.push(s.x, s.y, s.z);
                o.x = l.x + n * s.x;
                o.y = l.y + n * s.y;
                o.z = l.z + n * s.z;
                u.push(o.x, o.y, o.z);
            }
        }
        function g() {
            for(let e = 1; e <= t; e++){
                for(let t = 1; t <= r; t++){
                    let n = (r + 1) * (e - 1) + (t - 1);
                    let i = (r + 1) * e + (t - 1);
                    let a = (r + 1) * e + t;
                    let o = (r + 1) * (e - 1) + t;
                    p.push(n, i, o);
                    p.push(i, a, o);
                }
            }
        }
        function _() {
            for(let e = 0; e <= t; e++){
                for(let n = 0; n <= r; n++){
                    c.x = e / t;
                    c.y = n / r;
                    f.push(c.x, c.y);
                }
            }
        }
    }
    copy(e) {
        super.copy(e);
        this.parameters = {
            ...e.parameters
        };
        return this;
    }
    toJSON() {
        let e = super.toJSON();
        e.path = this.parameters.path.toJSON();
        return e;
    }
    static fromJSON(t) {
        return new e(new Zi[t.path.type]().fromJSON(t.path), t.tubularSegments, t.radius, t.radialSegments, t.closed);
    }
};
class Ka extends br {
    constructor(e){
        super();
        this.isShadowMaterial = true;
        this.type = `ShadowMaterial`;
        this.color = new B(0);
        this.transparent = true;
        this.fog = true;
        this.setValues(e);
    }
    copy(e) {
        super.copy(e);
        this.color.copy(e.color);
        this.fog = e.fog;
        return this;
    }
}
function clone(e) {
    let t = {};
    for(let n in e){
        t[n] = {};
        for(let r in e[n]){
            let i = e[n][r];
            if (Ya(i)) {
                if (i.isRenderTargetTexture) {
                    M(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`);
                    t[n][r] = null;
                } else {
                    t[n][r] = i.clone();
                }
            } else if (Array.isArray(i)) {
                if (Ya(i[0])) {
                    let e = [];
                    for(let t = 0, n = i.length; t < n; t++){
                        e[t] = i[t].clone();
                    }
                    t[n][r] = e;
                } else {
                    t[n][r] = i.slice();
                }
            } else {
                t[n][r] = i;
            }
        }
    }
    return t;
}
function merge(e) {
    let t = {};
    for(let n = 0; n < e.length; n++){
        let r = clone(e[n]);
        for(let e in r){
            t[e] = r[e];
        }
    }
    return t;
}
function Ya(e) {
    return e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture || e.isQuaternion);
}
function Xa(uniformsGroups) {
    let t = [];
    for(let n = 0; n < uniformsGroups.length; n++){
        t.push(uniformsGroups[n].clone());
    }
    return t;
}
function Za(e) {
    let t = e.getRenderTarget();
    if (t === null) {
        return e.outputColorSpace;
    }
    if (t.isXRRenderTarget === true) {
        return t.texture.colorSpace;
    }
    return Ct.workingColorSpace;
}
const Qa = {
    clone,
    merge
};
const $a = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;
const eo = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class to extends br {
    constructor(e){
        super();
        this.isShaderMaterial = true;
        this.type = `ShaderMaterial`;
        this.defines = {};
        this.uniforms = {};
        this.uniformsGroups = [];
        this.vertexShader = $a;
        this.fragmentShader = eo;
        this.linewidth = 1;
        this.wireframe = false;
        this.wireframeLinewidth = 1;
        this.fog = false;
        this.lights = false;
        this.clipping = false;
        this.forceSinglePass = true;
        this.extensions = {
            clipCullDistance: false,
            multiDraw: false
        };
        this.defaultAttributeValues = {
            color: [
                1,
                1,
                1
            ],
            uv: [
                0,
                0
            ],
            uv1: [
                0,
                0
            ]
        };
        this.index0AttributeName = undefined;
        this.uniformsNeedUpdate = false;
        this.glslVersion = null;
        if (e !== undefined) {
            this.setValues(e);
        }
    }
    copy(e) {
        super.copy(e);
        this.fragmentShader = e.fragmentShader;
        this.vertexShader = e.vertexShader;
        this.uniforms = clone(e.uniforms);
        this.uniformsGroups = Xa(e.uniformsGroups);
        this.defines = {
            ...e.defines
        };
        this.wireframe = e.wireframe;
        this.wireframeLinewidth = e.wireframeLinewidth;
        this.fog = e.fog;
        this.lights = e.lights;
        this.clipping = e.clipping;
        this.extensions = {
            ...e.extensions
        };
        this.glslVersion = e.glslVersion;
        this.defaultAttributeValues = {
            ...e.defaultAttributeValues
        };
        this.index0AttributeName = e.index0AttributeName;
        this.uniformsNeedUpdate = e.uniformsNeedUpdate;
        return this;
    }
    toJSON(e) {
        let t = super.toJSON(e);
        t.glslVersion = this.glslVersion;
        t.uniforms = {};
        for(let n in this.uniforms){
            let r = this.uniforms[n].value;
            if (r && r.isTexture) {
                t.uniforms[n] = {
                    type: `t`,
                    value: r.toJSON(e).uuid
                };
            } else if (r && r.isColor) {
                t.uniforms[n] = {
                    type: `c`,
                    value: r.getHex()
                };
            } else if (r && r.isVector2) {
                t.uniforms[n] = {
                    type: `v2`,
                    value: r.toArray()
                };
            } else if (r && r.isVector3) {
                t.uniforms[n] = {
                    type: `v3`,
                    value: r.toArray()
                };
            } else if (r && r.isVector4) {
                t.uniforms[n] = {
                    type: `v4`,
                    value: r.toArray()
                };
            } else if (r && r.isMatrix3) {
                t.uniforms[n] = {
                    type: `m3`,
                    value: r.toArray()
                };
            } else if (r && r.isMatrix4) {
                t.uniforms[n] = {
                    type: `m4`,
                    value: r.toArray()
                };
            } else {
                t.uniforms[n] = {
                    value: r
                };
            }
        }
        if (Object.keys(this.defines).length > 0) {
            t.defines = this.defines;
        }
        t.vertexShader = this.vertexShader;
        t.fragmentShader = this.fragmentShader;
        t.lights = this.lights;
        t.clipping = this.clipping;
        let n = {};
        for(let e in this.extensions){
            if (this.extensions[e] === true) {
                n[e] = true;
            }
        }
        if (Object.keys(n).length > 0) {
            t.extensions = n;
        }
        return t;
    }
    fromJSON(e, t) {
        super.fromJSON(e, t);
        if (e.uniforms !== undefined) {
            for(let n in e.uniforms){
                let r = e.uniforms[n];
                this.uniforms[n] = {};
                switch(r.type){
                    case `t`:
                        this.uniforms[n].value = t[r.value] || null;
                        break;
                    case `c`:
                        this.uniforms[n].value = new B().setHex(r.value);
                        break;
                    case `v2`:
                        this.uniforms[n].value = new I().fromArray(r.value);
                        break;
                    case `v3`:
                        this.uniforms[n].value = new L().fromArray(r.value);
                        break;
                    case `v4`:
                        this.uniforms[n].value = new Pt().fromArray(r.value);
                        break;
                    case `m3`:
                        this.uniforms[n].value = new vt().fromArray(r.value);
                        break;
                    case `m4`:
                        this.uniforms[n].value = new R().fromArray(r.value);
                        break;
                    default:
                        this.uniforms[n].value = r.value;
                }
            }
        }
        if (e.defines !== undefined) {
            this.defines = e.defines;
        }
        if (e.vertexShader !== undefined) {
            this.vertexShader = e.vertexShader;
        }
        if (e.fragmentShader !== undefined) {
            this.fragmentShader = e.fragmentShader;
        }
        if (e.glslVersion !== undefined) {
            this.glslVersion = e.glslVersion;
        }
        if (e.extensions !== undefined) {
            for(let t in e.extensions){
                this.extensions[t] = e.extensions[t];
            }
        }
        if (e.lights !== undefined) {
            this.lights = e.lights;
        }
        if (e.clipping !== undefined) {
            this.clipping = e.clipping;
        }
        return this;
    }
}
class no extends to {
    constructor(e){
        super(e);
        this.isRawShaderMaterial = true;
        this.type = `RawShaderMaterial`;
    }
}
class ro extends br {
    constructor(e){
        super();
        this.isMeshStandardMaterial = true;
        this.type = `MeshStandardMaterial`;
        this.defines = {
            STANDARD: ``
        };
        this.color = new B(16777215);
        this.roughness = 1;
        this.metalness = 0;
        this.map = null;
        this.lightMap = null;
        this.lightMapIntensity = 1;
        this.aoMap = null;
        this.aoMapIntensity = 1;
        this.emissive = new B(0);
        this.emissiveIntensity = 1;
        this.emissiveMap = null;
        this.bumpMap = null;
        this.bumpScale = 1;
        this.normalMap = null;
        this.normalMapType = 0;
        this.normalScale = new I(1, 1);
        this.displacementMap = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.roughnessMap = null;
        this.metalnessMap = null;
        this.alphaMap = null;
        this.envMap = null;
        this.envMapRotation = new Jt;
        this.envMapIntensity = 1;
        this.wireframe = false;
        this.wireframeLinewidth = 1;
        this.wireframeLinecap = `round`;
        this.wireframeLinejoin = `round`;
        this.flatShading = false;
        this.fog = true;
        this.setValues(e);
    }
    copy(e) {
        super.copy(e);
        this.defines = {
            STANDARD: ``
        };
        this.color.copy(e.color);
        this.roughness = e.roughness;
        this.metalness = e.metalness;
        this.map = e.map;
        this.lightMap = e.lightMap;
        this.lightMapIntensity = e.lightMapIntensity;
        this.aoMap = e.aoMap;
        this.aoMapIntensity = e.aoMapIntensity;
        this.emissive.copy(e.emissive);
        this.emissiveMap = e.emissiveMap;
        this.emissiveIntensity = e.emissiveIntensity;
        this.bumpMap = e.bumpMap;
        this.bumpScale = e.bumpScale;
        this.normalMap = e.normalMap;
        this.normalMapType = e.normalMapType;
        this.normalScale.copy(e.normalScale);
        this.displacementMap = e.displacementMap;
        this.displacementScale = e.displacementScale;
        this.displacementBias = e.displacementBias;
        this.roughnessMap = e.roughnessMap;
        this.metalnessMap = e.metalnessMap;
        this.alphaMap = e.alphaMap;
        this.envMap = e.envMap;
        this.envMapRotation.copy(e.envMapRotation);
        this.envMapIntensity = e.envMapIntensity;
        this.wireframe = e.wireframe;
        this.wireframeLinewidth = e.wireframeLinewidth;
        this.wireframeLinecap = e.wireframeLinecap;
        this.wireframeLinejoin = e.wireframeLinejoin;
        this.flatShading = e.flatShading;
        this.fog = e.fog;
        return this;
    }
}
class io extends br {
    constructor(e){
        super();
        this.isMeshNormalMaterial = true;
        this.type = `MeshNormalMaterial`;
        this.bumpMap = null;
        this.bumpScale = 1;
        this.normalMap = null;
        this.normalMapType = 0;
        this.normalScale = new I(1, 1);
        this.displacementMap = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.wireframe = false;
        this.wireframeLinewidth = 1;
        this.flatShading = false;
        this.setValues(e);
    }
    copy(e) {
        super.copy(e);
        this.bumpMap = e.bumpMap;
        this.bumpScale = e.bumpScale;
        this.normalMap = e.normalMap;
        this.normalMapType = e.normalMapType;
        this.normalScale.copy(e.normalScale);
        this.displacementMap = e.displacementMap;
        this.displacementScale = e.displacementScale;
        this.displacementBias = e.displacementBias;
        this.wireframe = e.wireframe;
        this.wireframeLinewidth = e.wireframeLinewidth;
        this.flatShading = e.flatShading;
        return this;
    }
}
class ao extends br {
    constructor(e){
        super();
        this.isMeshLambertMaterial = true;
        this.type = `MeshLambertMaterial`;
        this.color = new B(16777215);
        this.map = null;
        this.lightMap = null;
        this.lightMapIntensity = 1;
        this.aoMap = null;
        this.aoMapIntensity = 1;
        this.emissive = new B(0);
        this.emissiveIntensity = 1;
        this.emissiveMap = null;
        this.bumpMap = null;
        this.bumpScale = 1;
        this.normalMap = null;
        this.normalMapType = 0;
        this.normalScale = new I(1, 1);
        this.displacementMap = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.specularMap = null;
        this.alphaMap = null;
        this.envMap = null;
        this.envMapRotation = new Jt;
        this.combine = 0;
        this.reflectivity = 1;
        this.envMapIntensity = 1;
        this.refractionRatio = 0.98;
        this.wireframe = false;
        this.wireframeLinewidth = 1;
        this.wireframeLinecap = `round`;
        this.wireframeLinejoin = `round`;
        this.flatShading = false;
        this.fog = true;
        this.setValues(e);
    }
    copy(e) {
        super.copy(e);
        this.color.copy(e.color);
        this.map = e.map;
        this.lightMap = e.lightMap;
        this.lightMapIntensity = e.lightMapIntensity;
        this.aoMap = e.aoMap;
        this.aoMapIntensity = e.aoMapIntensity;
        this.emissive.copy(e.emissive);
        this.emissiveMap = e.emissiveMap;
        this.emissiveIntensity = e.emissiveIntensity;
        this.bumpMap = e.bumpMap;
        this.bumpScale = e.bumpScale;
        this.normalMap = e.normalMap;
        this.normalMapType = e.normalMapType;
        this.normalScale.copy(e.normalScale);
        this.displacementMap = e.displacementMap;
        this.displacementScale = e.displacementScale;
        this.displacementBias = e.displacementBias;
        this.specularMap = e.specularMap;
        this.alphaMap = e.alphaMap;
        this.envMap = e.envMap;
        this.envMapRotation.copy(e.envMapRotation);
        this.combine = e.combine;
        this.reflectivity = e.reflectivity;
        this.envMapIntensity = e.envMapIntensity;
        this.refractionRatio = e.refractionRatio;
        this.wireframe = e.wireframe;
        this.wireframeLinewidth = e.wireframeLinewidth;
        this.wireframeLinecap = e.wireframeLinecap;
        this.wireframeLinejoin = e.wireframeLinejoin;
        this.flatShading = e.flatShading;
        this.fog = e.fog;
        return this;
    }
}
export class bt extends br {
    constructor(e){
        super();
        this.isMeshDepthMaterial = true;
        this.type = `MeshDepthMaterial`;
        this.depthPacking = 3200;
        this.map = null;
        this.alphaMap = null;
        this.displacementMap = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.wireframe = false;
        this.wireframeLinewidth = 1;
        this.setValues(e);
    }
    copy(e) {
        super.copy(e);
        this.depthPacking = e.depthPacking;
        this.map = e.map;
        this.alphaMap = e.alphaMap;
        this.displacementMap = e.displacementMap;
        this.displacementScale = e.displacementScale;
        this.displacementBias = e.displacementBias;
        this.wireframe = e.wireframe;
        this.wireframeLinewidth = e.wireframeLinewidth;
        return this;
    }
}
export class xt extends br {
    constructor(e){
        super();
        this.isMeshDistanceMaterial = true;
        this.type = `MeshDistanceMaterial`;
        this.map = null;
        this.alphaMap = null;
        this.displacementMap = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.setValues(e);
    }
    copy(e) {
        super.copy(e);
        this.map = e.map;
        this.alphaMap = e.alphaMap;
        this.displacementMap = e.displacementMap;
        this.displacementScale = e.displacementScale;
        this.displacementBias = e.displacementBias;
        return this;
    }
}
function co(e, t) {
    if (!e || e.constructor === t) {
        return e;
    }
    if (typeof t.BYTES_PER_ELEMENT == `number`) {
        return new t(e);
    }
    return Array.prototype.slice.call(e);
}
function lo(settings) {
    return settings !== undefined && settings.inTangents !== undefined && settings.outTangents !== undefined;
}
class uo {
    constructor(e, t, n, r){
        this.parameterPositions = e;
        this._cachedIndex = 0;
        this.resultBuffer = r === undefined ? new t.constructor(n) : r;
        this.sampleValues = t;
        this.valueSize = n;
        this.settings = null;
        this.DefaultSettings_ = {};
    }
    evaluate(e) {
        let parameterPositions = this.parameterPositions;
        let _cachedIndex = this._cachedIndex;
        let r = parameterPositions[_cachedIndex];
        let i = parameterPositions[_cachedIndex - 1];
        validate_interval: {
            seek: {
                let a;
                linear_scan: {
                    forward_scan: if (!(e < r)) {
                        for(let a = _cachedIndex + 2;;){
                            if (r === undefined) {
                                if (e < i) {
                                    break forward_scan;
                                }
                                _cachedIndex = parameterPositions.length;
                                this._cachedIndex = _cachedIndex;
                                return this.copySampleValue_(_cachedIndex - 1);
                            }
                            if (_cachedIndex === a) {
                                break;
                            }
                            i = r;
                            r = parameterPositions[++_cachedIndex];
                            if (e < r) {
                                break seek;
                            }
                        }
                        a = parameterPositions.length;
                        break linear_scan;
                    }
                    if (!(e >= i)) {
                        let o = parameterPositions[1];
                        if (e < o) {
                            _cachedIndex = 2;
                            i = o;
                        }
                        for(let a = _cachedIndex - 2;;){
                            if (i === undefined) {
                                this._cachedIndex = 0;
                                return this.copySampleValue_(0);
                            }
                            if (_cachedIndex === a) {
                                break;
                            }
                            r = i;
                            i = parameterPositions[--_cachedIndex - 1];
                            if (e >= i) {
                                break seek;
                            }
                        }
                        a = _cachedIndex;
                        _cachedIndex = 0;
                        break linear_scan;
                    }
                    break validate_interval;
                }
                while(_cachedIndex < a){
                    let r = _cachedIndex + a >>> 1;
                    if (e < parameterPositions[r]) {
                        a = r;
                    } else {
                        _cachedIndex = r + 1;
                    }
                }
                r = parameterPositions[_cachedIndex];
                i = parameterPositions[_cachedIndex - 1];
                if (i === undefined) {
                    this._cachedIndex = 0;
                    return this.copySampleValue_(0);
                }
                if (r === undefined) {
                    _cachedIndex = parameterPositions.length;
                    this._cachedIndex = _cachedIndex;
                    return this.copySampleValue_(_cachedIndex - 1);
                }
            }
            this._cachedIndex = _cachedIndex;
            this.intervalChanged_(_cachedIndex, i, r);
        }
        return this.interpolate_(_cachedIndex, i, e, r);
    }
    getSettings_() {
        return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(e) {
        let resultBuffer = this.resultBuffer;
        let sampleValues = this.sampleValues;
        let valueSize = this.valueSize;
        let i = e * valueSize;
        for(let e = 0; e !== valueSize; ++e){
            resultBuffer[e] = sampleValues[i + e];
        }
        return resultBuffer;
    }
    interpolate_() {
        throw Error(`THREE.Interpolant: Call to abstract method.`);
    }
    intervalChanged_() {}
}
class fo extends uo {
    constructor(e, t, n, r){
        super(e, t, n, r);
        this._weightPrev = -0;
        this._offsetPrev = -0;
        this._weightNext = -0;
        this._offsetNext = -0;
        this.DefaultSettings_ = {
            endingStart: Be,
            endingEnd: Be
        };
    }
    intervalChanged_(e, t, n) {
        let parameterPositions = this.parameterPositions;
        let i = e - 2;
        let a = e + 1;
        let o = parameterPositions[i];
        let s = parameterPositions[a];
        if (o === undefined) {
            switch(this.getSettings_().endingStart){
                case Ve:
                    i = e;
                    o = 2 * t - n;
                    break;
                case He:
                    i = parameterPositions.length - 2;
                    o = t + parameterPositions[i] - parameterPositions[i + 1];
                    break;
                default:
                    i = e;
                    o = n;
            }
        }
        if (s === undefined) {
            switch(this.getSettings_().endingEnd){
                case Ve:
                    a = e;
                    s = 2 * n - t;
                    break;
                case He:
                    a = 1;
                    s = n + parameterPositions[1] - parameterPositions[0];
                    break;
                default:
                    a = e - 1;
                    s = t;
            }
        }
        let c = (n - t) * 0.5;
        let valueSize = this.valueSize;
        this._weightPrev = c / (t - o);
        this._weightNext = c / (s - n);
        this._offsetPrev = i * valueSize;
        this._offsetNext = a * valueSize;
    }
    interpolate_(e, t, n, r) {
        let resultBuffer = this.resultBuffer;
        let sampleValues = this.sampleValues;
        let valueSize = this.valueSize;
        let s = e * valueSize;
        let c = s - valueSize;
        let _offsetPrev = this._offsetPrev;
        let _offsetNext = this._offsetNext;
        let _weightPrev = this._weightPrev;
        let _weightNext = this._weightNext;
        let p = (n - t) / (r - t);
        let m = p * p;
        let h = m * p;
        let g = -_weightPrev * h + 2 * _weightPrev * m - _weightPrev * p;
        let _ = (1 + _weightPrev) * h + (-1.5 - 2 * _weightPrev) * m + (-0.5 + _weightPrev) * p + 1;
        let v = (-1 - _weightNext) * h + (1.5 + _weightNext) * m + 0.5 * p;
        let y = _weightNext * h - _weightNext * m;
        for(let e = 0; e !== valueSize; ++e){
            resultBuffer[e] = g * sampleValues[_offsetPrev + e] + _ * sampleValues[c + e] + v * sampleValues[s + e] + y * sampleValues[_offsetNext + e];
        }
        return resultBuffer;
    }
}
class po extends uo {
    constructor(e, t, n, r){
        super(e, t, n, r);
    }
    interpolate_(e, t, n, r) {
        let resultBuffer = this.resultBuffer;
        let sampleValues = this.sampleValues;
        let valueSize = this.valueSize;
        let s = e * valueSize;
        let c = s - valueSize;
        let l = (n - t) / (r - t);
        let u = 1 - l;
        for(let e = 0; e !== valueSize; ++e){
            resultBuffer[e] = sampleValues[c + e] * u + sampleValues[s + e] * l;
        }
        return resultBuffer;
    }
}
class mo extends uo {
    constructor(e, t, n, r){
        super(e, t, n, r);
    }
    interpolate_(e) {
        return this.copySampleValue_(e - 1);
    }
}
class ho extends uo {
    interpolate_(e, t, n, r) {
        let resultBuffer = this.resultBuffer;
        let sampleValues = this.sampleValues;
        let valueSize = this.valueSize;
        let s = e * valueSize;
        let c = s - valueSize;
        let inTangents = this.inTangents;
        let outTangents = this.outTangents;
        if (!inTangents || !outTangents) {
            let e = (n - t) / (r - t);
            let l = 1 - e;
            for(let t = 0; t !== valueSize; ++t){
                resultBuffer[t] = sampleValues[c + t] * l + sampleValues[s + t] * e;
            }
            return resultBuffer;
        }
        let d = valueSize * 2;
        let f = e - 1;
        for(let p = 0; p !== valueSize; ++p){
            let o = sampleValues[c + p];
            let m = sampleValues[s + p];
            let h = f * d + p * 2;
            let g = outTangents[h];
            let _ = outTangents[h + 1];
            let v = e * d + p * 2;
            let y = inTangents[v];
            let b = inTangents[v + 1];
            let x = vo(n, t, g, y, r);
            resultBuffer[p] = go(x, o, _, b, m);
        }
        return resultBuffer;
    }
}
function go(e, t, n, r, i) {
    let a = 1 - e;
    return a * a * a * t + 3 * a * a * e * n + 3 * a * e * e * r + e * e * e * i;
}
function _o(e, t, n, r, i) {
    let a = 1 - e;
    return 3 * a * a * (n - t) + 6 * a * e * (r - n) + 3 * e * e * (i - r);
}
function vo(e, t, n, r, i) {
    let a = (e - t) / (i - t);
    for(let o = 0; o < 8; o++){
        let o = go(a, t, n, r, i) - e;
        if (Math.abs(o) < 1e-10) {
            break;
        }
        let s = _o(a, t, n, r, i);
        if (Math.abs(s) < 1e-10) {
            break;
        }
        a = Math.max(0, Math.min(1, a - o / s));
    }
    return a;
}
class yo {
    constructor(e, t, n, r){
        if (e === undefined) {
            throw Error(`THREE.KeyframeTrack: track name is undefined`);
        }
        if (t === undefined || t.length === 0) {
            throw Error(`THREE.KeyframeTrack: no keyframes in track named ` + e);
        }
        this.name = e;
        this.times = co(t, this.TimeBufferType);
        this.values = co(n, this.ValueBufferType);
        this.setInterpolation(r || this.DefaultInterpolation);
    }
    static toJSON(e) {
        let e_constructor = e.constructor;
        let n;
        if (e_constructor.toJSON !== this.toJSON) {
            n = e_constructor.toJSON(e);
        } else {
            n = {
                name: e.name,
                times: co(e.times, Array),
                values: co(e.values, Array)
            };
            let t = e.getInterpolation();
            if (t !== e.DefaultInterpolation) {
                n.interpolation = t;
            }
            if (lo(e.settings)) {
                n.settings = {
                    inTangents: co(e.settings.inTangents, Array),
                    outTangents: co(e.settings.outTangents, Array)
                };
            }
        }
        n.type = e.ValueTypeName;
        return n;
    }
    InterpolantFactoryMethodDiscrete(e) {
        return new mo(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodLinear(e) {
        return new po(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodSmooth(e) {
        return new fo(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodBezier(e) {
        let t = new ho(this.times, this.values, this.getValueSize(), e);
        if (this.settings) {
            t.inTangents = this.settings.inTangents;
            t.outTangents = this.settings.outTangents;
        }
        return t;
    }
    setInterpolation(e) {
        let t;
        switch(e){
            case Ie:
                t = this.InterpolantFactoryMethodDiscrete;
                break;
            case Le:
                t = this.InterpolantFactoryMethodLinear;
                break;
            case Re:
                t = this.InterpolantFactoryMethodSmooth;
                break;
            case ze:
                t = this.InterpolantFactoryMethodBezier;
        }
        if (t === undefined) {
            let t = `unsupported interpolation for ` + this.ValueTypeName + ` keyframe track named ` + this.name;
            if (this.createInterpolant === undefined) {
                if (e !== this.DefaultInterpolation) {
                    this.setInterpolation(this.DefaultInterpolation);
                } else {
                    throw Error(t);
                }
            }
            M(`KeyframeTrack:`, t);
            return this;
        }
        this.createInterpolant = t;
        return this;
    }
    getInterpolation() {
        switch(this.createInterpolant){
            case this.InterpolantFactoryMethodDiscrete:
                return Ie;
            case this.InterpolantFactoryMethodLinear:
                return Le;
            case this.InterpolantFactoryMethodSmooth:
                return Re;
            case this.InterpolantFactoryMethodBezier:
                return ze;
        }
    }
    getValueSize() {
        return this.values.length / this.times.length;
    }
    shift(e) {
        if (e !== 0) {
            let t = this.times;
            for(let n = 0, r = t.length; n !== r; ++n){
                t[n] += e;
            }
        }
        return this;
    }
    scale(e) {
        if (e !== 1) {
            let t = this.times;
            for(let n = 0, r = t.length; n !== r; ++n){
                t[n] *= e;
            }
            if (lo(this.settings)) {
                bo(this.settings.inTangents, e);
                bo(this.settings.outTangents, e);
            }
        }
        return this;
    }
    trim(e, t) {
        let times = this.times;
        let n_length = times.length;
        let i = 0;
        let a = n_length - 1;
        while(i !== n_length && times[i] < e){
            ++i;
        }
        while(a !== -1 && times[a] > t){
            --a;
        }
        ++a;
        if (i !== 0 || a !== n_length) {
            if (i >= a) {
                a = Math.max(a, 1);
                i = a - 1;
            }
            let e = this.getValueSize();
            this.times = times.slice(i, a);
            this.values = this.values.slice(i * e, a * e);
        }
        return this;
    }
    validate() {
        let e = true;
        let t = this.getValueSize();
        if (t - Math.floor(t) !== 0) {
            N(`KeyframeTrack: Invalid value size in track.`, this);
            e = false;
        }
        let times = this.times;
        let values = this.values;
        let n_length = times.length;
        if (n_length === 0) {
            N(`KeyframeTrack: Track is empty.`, this);
            e = false;
        }
        let a = null;
        for(let t = 0; t !== n_length; t++){
            let r = times[t];
            if (typeof r == `number` && isNaN(r)) {
                N(`KeyframeTrack: Time is not a valid number.`, this, t, r);
                e = false;
                break;
            }
            if (a !== null && a > r) {
                N(`KeyframeTrack: Out of order keys.`, this, t, r, a);
                e = false;
                break;
            }
            a = r;
        }
        if (values !== undefined && Qe(values)) {
            for(let t = 0, n = values.length; t !== n; ++t){
                let n = values[t];
                if (isNaN(n)) {
                    N(`KeyframeTrack: Value is not a valid number.`, this, t, n);
                    e = false;
                    break;
                }
            }
        }
        return e;
    }
    optimize() {
        let e = this.times.slice();
        let t = this.values.slice();
        let n = this.getValueSize();
        let r = this.getInterpolation() === Re;
        let i = e.length - 1;
        let a = 1;
        for(let o = 1; o < i; ++o){
            let i = false;
            let s = e[o];
            if (s !== e[o + 1] && (o !== 1 || s !== e[0])) {
                if (r) {
                    i = true;
                } else {
                    let e = o * n;
                    let r = e - n;
                    let a = e + n;
                    for(let o = 0; o !== n; ++o){
                        let n = t[e + o];
                        if (n !== t[r + o] || n !== t[a + o]) {
                            i = true;
                            break;
                        }
                    }
                }
            }
            if (i) {
                if (o !== a) {
                    e[a] = e[o];
                    let r = o * n;
                    let i = a * n;
                    for(let e = 0; e !== n; ++e){
                        t[i + e] = t[r + e];
                    }
                }
                ++a;
            }
        }
        if (i > 0) {
            e[a] = e[i];
            for(let e = i * n, r = a * n, o = 0; o !== n; ++o){
                t[r + o] = t[e + o];
            }
            ++a;
        }
        if (a === e.length) {
            this.times = e;
            this.values = t;
        } else {
            this.times = e.slice(0, a);
            this.values = t.slice(0, a * n);
        }
        return this;
    }
    clone() {
        let e = this.times.slice();
        let t = this.values.slice();
        let constructor = this.constructor;
        let r = new constructor(this.name, e, t);
        r.createInterpolant = this.createInterpolant;
        if (lo(this.settings)) {
            r.settings = {
                inTangents: this.settings.inTangents.slice(),
                outTangents: this.settings.outTangents.slice()
            };
        }
        return r;
    }
}
function bo(e, t) {
    for(let n = 0, r = e.length; n !== r; n += 2){
        e[n] *= t;
    }
}
yo.prototype.ValueTypeName = ``;
yo.prototype.TimeBufferType = Float32Array;
yo.prototype.ValueBufferType = Float32Array;
yo.prototype.DefaultInterpolation = Le;
class xo extends yo {
    constructor(e, t, n){
        super(e, t, n);
    }
}
xo.prototype.ValueTypeName = `bool`;
xo.prototype.ValueBufferType = Array;
xo.prototype.DefaultInterpolation = Ie;
xo.prototype.InterpolantFactoryMethodLinear = undefined;
xo.prototype.InterpolantFactoryMethodSmooth = undefined;
class So extends yo {
    constructor(e, t, n, r){
        super(e, t, n, r);
    }
}
So.prototype.ValueTypeName = `color`;
class Co extends yo {
    constructor(e, t, n, r){
        super(e, t, n, r);
    }
}
Co.prototype.ValueTypeName = `number`;
class wo extends uo {
    constructor(e, t, n, r){
        super(e, t, n, r);
    }
    interpolate_(e, t, n, r) {
        let resultBuffer = this.resultBuffer;
        let sampleValues = this.sampleValues;
        let valueSize = this.valueSize;
        let s = (n - t) / (r - t);
        let c = e * valueSize;
        for(let e = c + valueSize; c !== e; c += 4){
            ht.slerpFlat(resultBuffer, 0, sampleValues, c - valueSize, sampleValues, c, s);
        }
        return resultBuffer;
    }
}
class To extends yo {
    constructor(e, t, n, r){
        super(e, t, n, r);
    }
    InterpolantFactoryMethodLinear(e) {
        return new wo(this.times, this.values, this.getValueSize(), e);
    }
}
To.prototype.ValueTypeName = `quaternion`;
To.prototype.InterpolantFactoryMethodSmooth = undefined;
class Eo extends yo {
    constructor(e, t, n){
        super(e, t, n);
    }
}
Eo.prototype.ValueTypeName = `string`;
Eo.prototype.ValueBufferType = Array;
Eo.prototype.DefaultInterpolation = Ie;
Eo.prototype.InterpolantFactoryMethodLinear = undefined;
Eo.prototype.InterpolantFactoryMethodSmooth = undefined;
class Do extends yo {
    constructor(e, t, n, r){
        super(e, t, n, r);
    }
}
Do.prototype.ValueTypeName = `vector`;
class Oo extends fn {
    constructor(e, t = 1){
        super();
        this.isLight = true;
        this.type = `Light`;
        this.color = new B(e);
        this.intensity = t;
    }
    copy(e, t) {
        super.copy(e, t);
        this.color.copy(e.color);
        this.intensity = e.intensity;
        return this;
    }
    toJSON(e) {
        let t = super.toJSON(e);
        t.object.color = this.color.getHex();
        t.object.intensity = this.intensity;
        return t;
    }
}
class ko extends Oo {
    constructor(e, t, n){
        super(e, n);
        this.isHemisphereLight = true;
        this.type = `HemisphereLight`;
        this.position.copy(fn.DEFAULT_UP);
        this.updateMatrix();
        this.groundColor = new B(t);
    }
    copy(e, t) {
        super.copy(e, t);
        this.groundColor.copy(e.groundColor);
        return this;
    }
    toJSON(e) {
        let t = super.toJSON(e);
        t.object.groundColor = this.groundColor.getHex();
        return t;
    }
}
const Ao = new R;
const jo = new L;
const Mo = new L;
class No {
    constructor(e){
        this.camera = e;
        this.intensity = 1;
        this.bias = 0;
        this.biasNode = null;
        this.normalBias = 0;
        this.radius = 1;
        this.blurSamples = 8;
        this.mapSize = new I(512, 512);
        this.mapType = l;
        this.map = null;
        this.mapPass = null;
        this.matrix = new R;
        this.autoUpdate = true;
        this.needsUpdate = false;
        this._frustum = new hi;
        this._frameExtents = new I(1, 1);
        this._viewportCount = 1;
        this._viewports = [
            new Pt(0, 0, 1, 1)
        ];
    }
    getViewportCount() {
        return this._viewportCount;
    }
    getCamera() {
        return this.camera;
    }
    getFrustum() {
        return this._frustum;
    }
    updateMatrices(e) {
        let camera = this.camera;
        jo.setFromMatrixPosition(e.matrixWorld);
        camera.position.copy(jo);
        Mo.setFromMatrixPosition(e.target.matrixWorld);
        camera.lookAt(Mo);
        camera.updateMatrixWorld();
        this._updateMatrix(camera, this.matrix, this._frustum);
    }
    _updateMatrix(e, t, n, r) {
        Ao.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse);
        n.setFromProjectionMatrix(Ao, e.coordinateSystem, e.reversedDepth);
        let _frameExtents = this._frameExtents;
        let a = r ? r.z / _frameExtents.x : 1;
        let o = r ? r.w / _frameExtents.y : 1;
        let s = r ? r.x / _frameExtents.x : 0;
        let c = r ? r.y / _frameExtents.y : 0;
        if (e.coordinateSystem === 2001 || e.reversedDepth) {
            t.set(0.5 * a, 0, 0, 0.5 * a + s, 0, 0.5 * o, 0, 0.5 * o + c, 0, 0, 1, 0, 0, 0, 0, 1);
        } else {
            t.set(0.5 * a, 0, 0, 0.5 * a + s, 0, 0.5 * o, 0, 0.5 * o + c, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
        }
        t.multiply(Ao);
    }
    getViewport(e) {
        return this._viewports[e];
    }
    getFrameExtents() {
        return this._frameExtents;
    }
    dispose() {
        if (this.map) {
            this.map.dispose();
        }
        if (this.mapPass) {
            this.mapPass.dispose();
        }
    }
    copy(e) {
        this.camera = e.camera.clone();
        this.intensity = e.intensity;
        this.bias = e.bias;
        this.radius = e.radius;
        this.autoUpdate = e.autoUpdate;
        this.needsUpdate = e.needsUpdate;
        this.normalBias = e.normalBias;
        this.blurSamples = e.blurSamples;
        this.mapSize.copy(e.mapSize);
        this.biasNode = e.biasNode;
        return this;
    }
    clone() {
        return new this.constructor().copy(this);
    }
    toJSON() {
        let e = {};
        e.intensity = this.intensity;
        e.bias = this.bias;
        e.normalBias = this.normalBias;
        e.radius = this.radius;
        e.blurSamples = this.blurSamples;
        e.mapSize = this.mapSize.toArray();
        e.camera = this.camera.toJSON(false).object;
        delete e.camera.matrix;
        return e;
    }
}
const Po = new L;
const Fo = new ht;
const Io = new L;
class Lo extends fn {
    constructor(){
        super();
        this.isCamera = true;
        this.type = `Camera`;
        this.matrixWorldInverse = new R;
        this.projectionMatrix = new R;
        this.projectionMatrixInverse = new R;
        this.coordinateSystem = Xe;
        this._reversedDepth = false;
    }
    get reversedDepth() {
        return this._reversedDepth;
    }
    copy(e, t) {
        super.copy(e, t);
        this.matrixWorldInverse.copy(e.matrixWorldInverse);
        this.projectionMatrix.copy(e.projectionMatrix);
        this.projectionMatrixInverse.copy(e.projectionMatrixInverse);
        this.coordinateSystem = e.coordinateSystem;
        return this;
    }
    getWorldDirection(e) {
        return super.getWorldDirection(e).negate();
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e);
        this.matrixWorld.decompose(Po, Fo, Io);
        if (Io.x === 1 && Io.y === 1 && Io.z === 1) {
            this.matrixWorldInverse.copy(this.matrixWorld).invert();
        } else {
            this.matrixWorldInverse.compose(Po, Fo, Io.set(1, 1, 1)).invert();
        }
    }
    updateWorldMatrix(e, t, n = false) {
        super.updateWorldMatrix(e, t, n);
        this.matrixWorld.decompose(Po, Fo, Io);
        if (Io.x === 1 && Io.y === 1 && Io.z === 1) {
            this.matrixWorldInverse.copy(this.matrixWorld).invert();
        } else {
            this.matrixWorldInverse.compose(Po, Fo, Io.set(1, 1, 1)).invert();
        }
    }
    clone() {
        return new this.constructor().copy(this);
    }
}
const Ro = new L;
const zo = new I;
const Bo = new I;
class Vo extends Lo {
    constructor(e = 50, t = 1, n = 0.1, r = 2000){
        super();
        this.isPerspectiveCamera = true;
        this.type = `PerspectiveCamera`;
        this.fov = e;
        this.zoom = 1;
        this.near = n;
        this.far = r;
        this.focus = 10;
        this.aspect = t;
        this.view = null;
        this.filmGauge = 35;
        this.filmOffset = 0;
        this.updateProjectionMatrix();
    }
    copy(e, t) {
        super.copy(e, t);
        this.fov = e.fov;
        this.zoom = e.zoom;
        this.near = e.near;
        this.far = e.far;
        this.focus = e.focus;
        this.aspect = e.aspect;
        this.view = e.view === null ? null : {
            ...e.view
        };
        this.filmGauge = e.filmGauge;
        this.filmOffset = e.filmOffset;
        return this;
    }
    setFocalLength(e) {
        let t = 0.5 * this.getFilmHeight() / e;
        this.fov = ut * 2 * Math.atan(t);
        this.updateProjectionMatrix();
    }
    getFocalLength() {
        let e = Math.tan(lt * 0.5 * this.fov);
        return 0.5 * this.getFilmHeight() / e;
    }
    getEffectiveFOV() {
        return ut * 2 * Math.atan(Math.tan(lt * 0.5 * this.fov) / this.zoom);
    }
    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1);
    }
    getViewBounds(e, t, n) {
        Ro.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse);
        t.set(Ro.x, Ro.y).multiplyScalar(-e / Ro.z);
        Ro.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse);
        n.set(Ro.x, Ro.y).multiplyScalar(-e / Ro.z);
    }
    getViewSize(e, t) {
        this.getViewBounds(e, zo, Bo);
        return t.subVectors(Bo, zo);
    }
    setViewOffset(e, t, n, r, i, a) {
        this.aspect = e / t;
        if (this.view === null) {
            this.view = {
                enabled: true,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            };
        }
        this.view.enabled = true;
        this.view.fullWidth = e;
        this.view.fullHeight = t;
        this.view.offsetX = n;
        this.view.offsetY = r;
        this.view.width = i;
        this.view.height = a;
        this.updateProjectionMatrix();
    }
    clearViewOffset() {
        if (this.view !== null) {
            this.view.enabled = false;
        }
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
        let near = this.near;
        let t = near * Math.tan(lt * 0.5 * this.fov) / this.zoom;
        let n = 2 * t;
        let r = this.aspect * n;
        let i = -0.5 * r;
        let view = this.view;
        if (this.view !== null && this.view.enabled) {
            let e = view.fullWidth;
            let o = view.fullHeight;
            i += view.offsetX * r / e;
            t -= view.offsetY * n / o;
            r *= view.width / e;
            n *= view.height / o;
        }
        let filmOffset = this.filmOffset;
        if (filmOffset !== 0) {
            i += near * filmOffset / this.getFilmWidth();
        }
        this.projectionMatrix.makePerspective(i, i + r, t, t - n, near, this.far, this.coordinateSystem, this.reversedDepth);
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e) {
        let t = super.toJSON(e);
        t.object.fov = this.fov;
        t.object.zoom = this.zoom;
        t.object.near = this.near;
        t.object.far = this.far;
        t.object.focus = this.focus;
        t.object.aspect = this.aspect;
        if (this.view !== null) {
            t.object.view = {
                ...this.view
            };
        }
        t.object.filmGauge = this.filmGauge;
        t.object.filmOffset = this.filmOffset;
        return t;
    }
}
class Ho extends No {
    constructor(){
        super(new Vo(90, 1, 0.5, 500));
        this.isPointLightShadow = true;
    }
}
class Uo extends Oo {
    constructor(e, t, n = 0, r = 2){
        super(e, t);
        this.isPointLight = true;
        this.type = `PointLight`;
        this.distance = n;
        this.decay = r;
        this.shadow = new Ho;
    }
    get power() {
        return this.intensity * 4 * Math.PI;
    }
    set power(e) {
        this.intensity = e / (4 * Math.PI);
    }
    dispose() {
        super.dispose();
        this.shadow.dispose();
    }
    copy(e, t) {
        super.copy(e, t);
        this.distance = e.distance;
        this.decay = e.decay;
        this.shadow = e.shadow.clone();
        return this;
    }
    toJSON(e) {
        let t = super.toJSON(e);
        t.object.distance = this.distance;
        t.object.decay = this.decay;
        t.object.shadow = this.shadow.toJSON();
        return t;
    }
}
class Wo extends Lo {
    constructor(e = -1, t = 1, n = 1, r = -1, i = 0.1, a = 2000){
        super();
        this.isOrthographicCamera = true;
        this.type = `OrthographicCamera`;
        this.zoom = 1;
        this.view = null;
        this.left = e;
        this.right = t;
        this.top = n;
        this.bottom = r;
        this.near = i;
        this.far = a;
        this.updateProjectionMatrix();
    }
    copy(e, t) {
        super.copy(e, t);
        this.left = e.left;
        this.right = e.right;
        this.top = e.top;
        this.bottom = e.bottom;
        this.near = e.near;
        this.far = e.far;
        this.zoom = e.zoom;
        this.view = e.view === null ? null : {
            ...e.view
        };
        return this;
    }
    setViewOffset(e, t, n, r, i, a) {
        if (this.view === null) {
            this.view = {
                enabled: true,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            };
        }
        this.view.enabled = true;
        this.view.fullWidth = e;
        this.view.fullHeight = t;
        this.view.offsetX = n;
        this.view.offsetY = r;
        this.view.width = i;
        this.view.height = a;
        this.updateProjectionMatrix();
    }
    clearViewOffset() {
        if (this.view !== null) {
            this.view.enabled = false;
        }
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
        let e = (this.right - this.left) / (2 * this.zoom);
        let t = (this.top - this.bottom) / (2 * this.zoom);
        let n = (this.right + this.left) / 2;
        let r = (this.top + this.bottom) / 2;
        let i = n - e;
        let a = n + e;
        let o = r + t;
        let s = r - t;
        if (this.view !== null && this.view.enabled) {
            let e = (this.right - this.left) / this.view.fullWidth / this.zoom;
            let t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            i += e * this.view.offsetX;
            a = i + e * this.view.width;
            o -= t * this.view.offsetY;
            s = o - t * this.view.height;
        }
        this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far, this.coordinateSystem, this.reversedDepth);
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e) {
        let t = super.toJSON(e);
        t.object.zoom = this.zoom;
        t.object.left = this.left;
        t.object.right = this.right;
        t.object.top = this.top;
        t.object.bottom = this.bottom;
        t.object.near = this.near;
        t.object.far = this.far;
        if (this.view !== null) {
            t.object.view = {
                ...this.view
            };
        }
        return t;
    }
}
class Go extends No {
    constructor(){
        super(new Wo(-5, 5, 5, -5, 0.5, 500));
        this.isDirectionalLightShadow = true;
    }
}
class Ko extends Oo {
    constructor(e, t){
        super(e, t);
        this.isDirectionalLight = true;
        this.type = `DirectionalLight`;
        this.position.copy(fn.DEFAULT_UP);
        this.updateMatrix();
        this.target = new fn;
        this.shadow = new Go;
    }
    dispose() {
        super.dispose();
        this.shadow.dispose();
    }
    copy(e) {
        super.copy(e);
        this.target = e.target.clone();
        this.shadow = e.shadow.clone();
        return this;
    }
    toJSON(e) {
        let t = super.toJSON(e);
        t.object.shadow = this.shadow.toJSON();
        t.object.target = this.target.uuid;
        return t;
    }
}
const qo = -90;
const Jo = 1;
class Yo extends fn {
    constructor(e, t, n){
        super();
        this.type = `CubeCamera`;
        this.renderTarget = n;
        this.coordinateSystem = null;
        this.activeMipmapLevel = 0;
        let r = new Vo(qo, Jo, e, t);
        r.layers = this.layers;
        this.add(r);
        let i = new Vo(qo, Jo, e, t);
        i.layers = this.layers;
        this.add(i);
        let a = new Vo(qo, Jo, e, t);
        a.layers = this.layers;
        this.add(a);
        let o = new Vo(qo, Jo, e, t);
        o.layers = this.layers;
        this.add(o);
        let s = new Vo(qo, Jo, e, t);
        s.layers = this.layers;
        this.add(s);
        let c = new Vo(qo, Jo, e, t);
        c.layers = this.layers;
        this.add(c);
    }
    updateCoordinateSystem() {
        let coordinateSystem = this.coordinateSystem;
        let t = this.children.concat();
        let [n, r, i, a, o, s] = t;
        for (let e of t){
            this.remove(e);
        }
        if (coordinateSystem === 2000) {
            n.up.set(0, 1, 0);
            n.lookAt(1, 0, 0);
            r.up.set(0, 1, 0);
            r.lookAt(-1, 0, 0);
            i.up.set(0, 0, -1);
            i.lookAt(0, 1, 0);
            a.up.set(0, 0, 1);
            a.lookAt(0, -1, 0);
            o.up.set(0, 1, 0);
            o.lookAt(0, 0, 1);
            s.up.set(0, 1, 0);
            s.lookAt(0, 0, -1);
        } else if (coordinateSystem === 2001) {
            n.up.set(0, -1, 0);
            n.lookAt(-1, 0, 0);
            r.up.set(0, -1, 0);
            r.lookAt(1, 0, 0);
            i.up.set(0, 0, 1);
            i.lookAt(0, 1, 0);
            a.up.set(0, 0, -1);
            a.lookAt(0, -1, 0);
            o.up.set(0, -1, 0);
            o.lookAt(0, 0, 1);
            s.up.set(0, -1, 0);
            s.lookAt(0, 0, -1);
        } else {
            throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: ` + coordinateSystem);
        }
        for (let e of t){
            this.add(e);
            e.updateMatrixWorld();
        }
    }
    update(e, t) {
        if (this.parent === null) {
            this.updateMatrixWorld();
        }
        let { renderTarget, activeMipmapLevel } = this;
        if (this.coordinateSystem !== e.coordinateSystem) {
            this.coordinateSystem = e.coordinateSystem;
            this.updateCoordinateSystem();
        }
        let [i, a, o, s, c, l] = this.children;
        let u = e.getRenderTarget();
        let d = e.getActiveCubeFace();
        let f = e.getActiveMipmapLevel();
        let enabled = e.xr.enabled;
        e.xr.enabled = false;
        let generateMipmaps = renderTarget.texture.generateMipmaps;
        renderTarget.texture.generateMipmaps = false;
        let h = false;
        h = e.isWebGLRenderer === true ? e.state.buffers.depth.getReversed() : e.reversedDepthBuffer;
        e.setRenderTarget(renderTarget, 0, activeMipmapLevel);
        if (h && e.autoClear === false) {
            e.clearDepth();
        }
        e.render(t, i);
        e.setRenderTarget(renderTarget, 1, activeMipmapLevel);
        if (h && e.autoClear === false) {
            e.clearDepth();
        }
        e.render(t, a);
        e.setRenderTarget(renderTarget, 2, activeMipmapLevel);
        if (h && e.autoClear === false) {
            e.clearDepth();
        }
        e.render(t, o);
        e.setRenderTarget(renderTarget, 3, activeMipmapLevel);
        if (h && e.autoClear === false) {
            e.clearDepth();
        }
        e.render(t, s);
        e.setRenderTarget(renderTarget, 4, activeMipmapLevel);
        if (h && e.autoClear === false) {
            e.clearDepth();
        }
        e.render(t, c);
        renderTarget.texture.generateMipmaps = generateMipmaps;
        e.setRenderTarget(renderTarget, 5, activeMipmapLevel);
        if (h && e.autoClear === false) {
            e.clearDepth();
        }
        e.render(t, l);
        e.setRenderTarget(u, d, f);
        e.xr.enabled = enabled;
        renderTarget.texture.needsPMREMUpdate = true;
    }
}
class Xo extends Vo {
    constructor(e = []){
        super();
        this.isArrayCamera = true;
        this.isMultiViewCamera = false;
        this.cameras = e;
    }
}
const Zo = `\\[\\]\\.:\\/`;
const Qo = RegExp(`[\\[\\]\\.:\\/]`, `g`);
const $o = `[^\\[\\]\\.:\\/]`;
const es = `[^` + Zo.replace(`\\.`, ``) + `]`;
const ts = `((?:WC+[\\/:])*)`.replace(`WC`, $o);
const ns = `(WCOD+)?`.replace(`WCOD`, es);
const rs = `(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`, $o);
const is = `\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`, $o);
const as = RegExp(`^` + ts + ns + rs + is + `$`);
const os = [
    `material`,
    `materials`,
    `bones`,
    `map`
];
class ss {
    constructor(e, t, n){
        let r = n || q.parseTrackName(t);
        this._targetGroup = e;
        this._bindings = e.subscribe_(t, r);
    }
    getValue(e, t) {
        this.bind();
        let nCachedObjects_ = this._targetGroup.nCachedObjects_;
        let r = this._bindings[nCachedObjects_];
        if (r !== undefined) {
            r.getValue(e, t);
        }
    }
    setValue(e, t) {
        let _bindings = this._bindings;
        for(let r = this._targetGroup.nCachedObjects_, i = _bindings.length; r !== i; ++r){
            _bindings[r].setValue(e, t);
        }
    }
    bind() {
        let _bindings = this._bindings;
        for(let t = this._targetGroup.nCachedObjects_, n = _bindings.length; t !== n; ++t){
            _bindings[t].bind();
        }
    }
    unbind() {
        let _bindings = this._bindings;
        for(let t = this._targetGroup.nCachedObjects_, n = _bindings.length; t !== n; ++t){
            _bindings[t].unbind();
        }
    }
}
var q = class e {
    constructor(t, n, r){
        this.path = n;
        this.parsedPath = r || e.parseTrackName(n);
        this.node = e.findNode(t, this.parsedPath.nodeName);
        this.rootNode = t;
        this.getValue = this._getValue_unbound;
        this.setValue = this._setValue_unbound;
    }
    static create(t, n, r) {
        if (t && t.isAnimationObjectGroup) {
            return new e.Composite(t, n, r);
        }
        return new e(t, n, r);
    }
    static sanitizeNodeName(e) {
        return e.replace(/\s/g, `_`).replace(Qo, ``);
    }
    static parseTrackName(e) {
        let t = as.exec(e);
        if (t === null) {
            throw Error(`THREE.PropertyBinding: Cannot parse trackName: ` + e);
        }
        let n = {
            nodeName: t[2],
            objectName: t[3],
            objectIndex: t[4],
            propertyName: t[5],
            propertyIndex: t[6]
        };
        let r = n.nodeName && n.nodeName.lastIndexOf(`.`);
        if (r !== undefined && r !== -1) {
            let e = n.nodeName.substring(r + 1);
            if (os.indexOf(e) !== -1) {
                n.nodeName = n.nodeName.substring(0, r);
                n.objectName = e;
            }
        }
        if (n.propertyName === null || n.propertyName.length === 0) {
            throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: ` + e);
        }
        return n;
    }
    static findNode(e, t) {
        if (t === undefined || t === `` || t === `.` || t === -1 || t === e.name || t === e.uuid) {
            return e;
        }
        if (e.skeleton) {
            let n = e.skeleton.getBoneByName(t);
            if (n !== undefined) {
                return n;
            }
        }
        if (e.children) {
            let n = (children)=>{
                for (const i of children){
                    if (i.name === t || i.uuid === t) {
                        return i;
                    }
                    let a = n(i.children);
                    if (a) {
                        return a;
                    }
                }
                return null;
            };
            let r = n(e.children);
            if (r) {
                return r;
            }
        }
        return null;
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(e, t) {
        e[t] = this.targetObject[this.propertyName];
    }
    _getValue_array(e, t) {
        let resolvedProperty = this.resolvedProperty;
        for(let r = 0, i = resolvedProperty.length; r !== i; ++r){
            e[t++] = resolvedProperty[r];
        }
    }
    _getValue_arrayElement(e, t) {
        e[t] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(e, t) {
        this.resolvedProperty.toArray(e, t);
    }
    _setValue_direct(e, t) {
        this.targetObject[this.propertyName] = e[t];
    }
    _setValue_direct_setNeedsUpdate(e, t) {
        this.targetObject[this.propertyName] = e[t];
        this.targetObject.needsUpdate = true;
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
        this.targetObject[this.propertyName] = e[t];
        this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_array(e, t) {
        let resolvedProperty = this.resolvedProperty;
        for(let r = 0, i = resolvedProperty.length; r !== i; ++r){
            resolvedProperty[r] = e[t++];
        }
    }
    _setValue_array_setNeedsUpdate(e, t) {
        let resolvedProperty = this.resolvedProperty;
        for(let r = 0, i = resolvedProperty.length; r !== i; ++r){
            resolvedProperty[r] = e[t++];
        }
        this.targetObject.needsUpdate = true;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
        let resolvedProperty = this.resolvedProperty;
        for(let r = 0, i = resolvedProperty.length; r !== i; ++r){
            resolvedProperty[r] = e[t++];
        }
        this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_arrayElement(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t];
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t];
        this.targetObject.needsUpdate = true;
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t];
        this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_fromArray(e, t) {
        this.resolvedProperty.fromArray(e, t);
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
        this.resolvedProperty.fromArray(e, t);
        this.targetObject.needsUpdate = true;
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
        this.resolvedProperty.fromArray(e, t);
        this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _getValue_unbound(e, t) {
        this.bind();
        this.getValue(e, t);
    }
    _setValue_unbound(e, t) {
        this.bind();
        this.setValue(e, t);
    }
    bind() {
        let node = this.node;
        let parsedPath = this.parsedPath;
        let n_objectName = parsedPath.objectName;
        let n_propertyName = parsedPath.propertyName;
        let n_propertyIndex = parsedPath.propertyIndex;
        if (!node) {
            node = e.findNode(this.rootNode, parsedPath.nodeName);
            this.node = node;
        }
        this.getValue = this._getValue_unavailable;
        this.setValue = this._setValue_unavailable;
        if (!node) {
            M(`PropertyBinding: No target node found for track: ` + this.path + `.`);
            return;
        }
        if (n_objectName) {
            let e = parsedPath.objectIndex;
            switch(n_objectName){
                case `materials`:
                    if (!node.material) {
                        N(`PropertyBinding: Can not bind to material as node does not have a material.`, this);
                        return;
                    }
                    if (!node.material.materials) {
                        N(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`, this);
                        return;
                    }
                    node = node.material.materials;
                    break;
                case `bones`:
                    if (!node.skeleton) {
                        N(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`, this);
                        return;
                    }
                    node = node.skeleton.bones;
                    for(let n = 0; n < node.length; n++){
                        if (node[n].name === e) {
                            e = n;
                            break;
                        }
                    }
                    break;
                case `map`:
                    if (`map` in node) {
                        node = node.map;
                        break;
                    }
                    if (!node.material) {
                        N(`PropertyBinding: Can not bind to material as node does not have a material.`, this);
                        return;
                    }
                    if (!node.material.map) {
                        N(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`, this);
                        return;
                    }
                    node = node.material.map;
                    break;
                default:
                    if (node[n_objectName] === undefined) {
                        N(`PropertyBinding: Can not bind to objectName of node undefined.`, this);
                        return;
                    }
                    node = node[n_objectName];
            }
            if (e !== undefined) {
                if (node[e] === undefined) {
                    N(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`, this, node);
                    return;
                }
                node = node[e];
            }
        }
        let o = node[n_propertyName];
        if (o === undefined) {
            let e = parsedPath.nodeName;
            N(`PropertyBinding: Trying to update property for track: ` + e + `.` + n_propertyName + ` but it wasn't found.`, node);
            return;
        }
        let None = this.Versioning.None;
        this.targetObject = node;
        if (node.isMaterial === true) {
            None = this.Versioning.NeedsUpdate;
        } else if (node.isObject3D === true) {
            None = this.Versioning.MatrixWorldNeedsUpdate;
        }
        let Direct = this.BindingType.Direct;
        if (n_propertyIndex !== undefined) {
            if (n_propertyName === `morphTargetInfluences`) {
                if (!node.geometry) {
                    N(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`, this);
                    return;
                }
                if (!node.geometry.morphAttributes) {
                    N(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`, this);
                    return;
                }
                if (node.morphTargetDictionary[n_propertyIndex] !== undefined) {
                    n_propertyIndex = node.morphTargetDictionary[n_propertyIndex];
                }
            }
            Direct = this.BindingType.ArrayElement;
            this.resolvedProperty = o;
            this.propertyIndex = n_propertyIndex;
        } else {
            if (o.fromArray !== undefined && o.toArray !== undefined) {
                Direct = this.BindingType.HasFromToArray;
                this.resolvedProperty = o;
            } else if (Array.isArray(o)) {
                Direct = this.BindingType.EntireArray;
                this.resolvedProperty = o;
            } else {
                this.propertyName = n_propertyName;
            }
        }
        this.getValue = this.GetterByBindingType[Direct];
        this.setValue = this.SetterByBindingTypeAndVersioning[Direct][None];
    }
    unbind() {
        this.node = null;
        this.getValue = this._getValue_unbound;
        this.setValue = this._setValue_unbound;
    }
};
q.Composite = ss;
q.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
};
q.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
};
q.prototype.GetterByBindingType = [
    q.prototype._getValue_direct,
    q.prototype._getValue_array,
    q.prototype._getValue_arrayElement,
    q.prototype._getValue_toArray
];
q.prototype.SetterByBindingTypeAndVersioning = [
    [
        q.prototype._setValue_direct,
        q.prototype._setValue_direct_setNeedsUpdate,
        q.prototype._setValue_direct_setMatrixWorldNeedsUpdate
    ],
    [
        q.prototype._setValue_array,
        q.prototype._setValue_array_setNeedsUpdate,
        q.prototype._setValue_array_setMatrixWorldNeedsUpdate
    ],
    [
        q.prototype._setValue_arrayElement,
        q.prototype._setValue_arrayElement_setNeedsUpdate,
        q.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
    ],
    [
        q.prototype._setValue_fromArray,
        q.prototype._setValue_fromArray_setNeedsUpdate,
        q.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
    ]
];
const cs = new R;
class ls {
    constructor(e, t, n = 0, r = Infinity){
        this.ray = new Vr(e, t);
        this.near = n;
        this.far = r;
        this.camera = null;
        this.layers = new Yt;
        this.params = {
            Mesh: {},
            Line: {
                threshold: 1
            },
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        };
    }
    set(e, t) {
        this.ray.set(e, t);
    }
    setFromCamera(e, t) {
        if (t.isPerspectiveCamera) {
            this.ray.origin.setFromMatrixPosition(t.matrixWorld);
            this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize();
            this.camera = t;
        } else if (t.isOrthographicCamera) {
            this.ray.origin.set(e.x, e.y, t.projectionMatrix.elements[14]).unproject(t);
            this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld);
            this.camera = t;
        } else {
            N(`Raycaster: Unsupported camera type: ` + t.type);
        }
    }
    setFromXRController(e) {
        cs.identity().extractRotation(e.matrixWorld);
        this.ray.origin.setFromMatrixPosition(e.matrixWorld);
        this.ray.direction.set(0, 0, -1).applyMatrix4(cs);
        return this;
    }
    intersectObject(e, t = true, n = []) {
        ds(e, this, n, t);
        n.sort(us);
        return n;
    }
    intersectObjects(e, t = true, n = []) {
        for(let r = 0, i = e.length; r < i; r++){
            ds(e[r], this, n, t);
        }
        n.sort(us);
        return n;
    }
}
function us(e, t) {
    return e.distance - t.distance;
}
function ds(e, t, n, r) {
    let i = true;
    if (e.layers.test(t.layers) && e.raycast(t, n) === false) {
        i = false;
    }
    if (i === true && r === true) {
        let r = e.children;
        for(let e = 0, i = r.length; e < i; e++){
            ds(r[e], t, n, true);
        }
    }
}
(class e {
    static{
        e.prototype.isMatrix2 = true;
    }
    constructor(e, t, n, r){
        this.elements = [
            1,
            0,
            0,
            1
        ];
        if (e !== undefined) {
            this.set(e, t, n, r);
        }
    }
    identity() {
        this.set(1, 0, 0, 1);
        return this;
    }
    fromArray(e, t = 0) {
        for(let n = 0; n < 4; n++){
            this.elements[n] = e[n + t];
        }
        return this;
    }
    set(e, t, n, r) {
        let elements = this.elements;
        elements[0] = e;
        elements[2] = t;
        elements[1] = n;
        elements[3] = r;
        return this;
    }
});
function fs(e, t, n, r) {
    let i = ps(r);
    switch(n){
        case S:
            return e * t;
        case D:
            return e * t / i.components * i.byteLength;
        case O:
            return e * t / i.components * i.byteLength;
        case k:
            return e * t * 2 / i.components * i.byteLength;
        case A:
            return e * t * 2 / i.components * i.byteLength;
        case C:
            return e * t * 3 / i.components * i.byteLength;
        case w:
            return e * t * 4 / i.components * i.byteLength;
        case ee:
            return e * t * 4 / i.components * i.byteLength;
        case te:
        case j:
            return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
        case ne:
        case re:
            return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
        case ae:
        case se:
            return Math.max(e, 16) * Math.max(t, 8) / 4;
        case ie:
        case oe:
            return Math.max(e, 8) * Math.max(t, 8) / 2;
        case ce:
        case le:
        case de:
        case fe:
            return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
        case ue:
        case pe:
        case me:
            return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
        case he:
            return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
        case ge:
            return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
        case _e:
            return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
        case ve:
            return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
        case ye:
            return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
        case be:
            return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
        case xe:
            return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
        case Se:
            return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
        case Ce:
            return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
        case we:
            return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
        case Te:
            return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
        case Ee:
            return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
        case De:
            return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
        case Oe:
            return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
        case ke:
        case Ae:
        case je:
            return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
        case Me:
        case Ne:
            return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
        case Pe:
        case Fe:
            return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
    }
    throw Error(`Unable to determine texture byte length for ${n} format.`);
}
function ps(e) {
    switch(e){
        case l:
        case u:
            return {
                byteLength: 1,
                components: 1
            };
        case f:
        case d:
        case g:
            return {
                byteLength: 2,
                components: 1
            };
        case _:
        case v:
            return {
                byteLength: 2,
                components: 4
            };
        case m:
        case p:
        case h:
            return {
                byteLength: 4,
                components: 1
            };
        case b:
        case x:
            return {
                byteLength: 4,
                components: 3
            };
    }
    throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`);
}
if (typeof __THREE_DEVTOOLS__ < `u`) {
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`, {
        detail: {
            revision: `186`
        }
    }));
}
if (typeof window < `u`) {
    if (window.__THREE__) {
        M(`WARNING: Multiple instances of Three.js being imported.`);
    } else {
        window.__THREE__ = `186`;
    }
}
const ms = new Wo(-1, 1, 1, -1, 0, 1);
const hs = new class extends dr {
    constructor(){
        super();
        this.setAttribute(`position`, new H([
            -1,
            3,
            0,
            -1,
            -1,
            0,
            3,
            -1,
            0
        ], 3));
        this.setAttribute(`uv`, new H([
            0,
            2,
            0,
            0,
            2,
            0
        ], 2));
    }
};
class gs {
    constructor(e){
        this._mesh = new W(hs, e);
    }
    dispose() {
        this._mesh.geometry.dispose();
    }
    render(e) {
        e.render(this._mesh, ms);
    }
    get material() {
        return this._mesh.material;
    }
    set material(e) {
        this._mesh.material = e;
    }
}
const _s = 0;
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;
const fragmentShader = `
  uniform sampler2D tColor;
  uniform sampler2D tNormal;
  uniform sampler2D tDepth;
  uniform vec2 texel;
  uniform float thickness;
  uniform float depthRange;
  uniform float depthThreshold;
  uniform float normalThreshold;
  uniform vec3 lineColor;
  uniform float lineOpacity;
  uniform bool srgbOut;
  varying vec2 vUv;

  float depthAt(vec2 uv) { return texture2D(tDepth, uv).r * depthRange; }

  // Edge strength between the centre pixel and a pair of opposite neighbours.
  float edgePair(vec2 uv, vec2 off, float d0, vec4 n0) {
    vec4 na = texture2D(tNormal, uv + off);
    vec4 nb = texture2D(tNormal, uv - off);
    float da = depthAt(uv + off);
    float db = depthAt(uv - off);

    // silhouette against empty space
    float e = max(abs(na.a - n0.a), abs(nb.a - n0.a));

    if (n0.a > 0.5) {
      // depth: second derivative ignores sloped planes, catches steps
      float lap = abs(da + db - 2.0 * d0);
      float stepA = (na.a > 0.5) ? abs(da - d0) : 0.0;
      float stepB = (nb.a > 0.5) ? abs(db - d0) : 0.0;
      float dEdge = smoothstep(depthThreshold, depthThreshold * 2.0, min(lap, max(stepA, stepB) * 2.0));
      e = max(e, dEdge);

      // normal creases
      vec3 c = n0.xyz * 2.0 - 1.0;
      float ca = na.a > 0.5 ? 1.0 - dot(c, na.xyz * 2.0 - 1.0) : 0.0;
      float cb = nb.a > 0.5 ? 1.0 - dot(c, nb.xyz * 2.0 - 1.0) : 0.0;
      e = max(e, 0.9 * smoothstep(normalThreshold, normalThreshold * 2.2, max(ca, cb)));
    }
    return e;
  }

  void main() {
    vec4 col = texture2D(tColor, vUv);
    vec4 n0 = texture2D(tNormal, vUv);
    float d0 = depthAt(vUv);

    vec2 o = texel * thickness;
    float e = 0.0;
    e = max(e, edgePair(vUv, vec2(o.x, 0.0), d0, n0));
    e = max(e, edgePair(vUv, vec2(0.0, o.y), d0, n0));
    e = max(e, edgePair(vUv, vec2(o.x, o.y) * 0.7071, d0, n0));
    e = max(e, edgePair(vUv, vec2(o.x, -o.y) * 0.7071, d0, n0));
    // a softer outer ring for smoother line edges
    float e2 = 0.0;
    vec2 o2 = o * 1.5;
    e2 = max(e2, edgePair(vUv, vec2(o2.x, 0.0), d0, n0));
    e2 = max(e2, edgePair(vUv, vec2(0.0, o2.y), d0, n0));
    e = max(e, e2 * 0.35);
    e *= lineOpacity;

    // colour target holds premultiplied linear colour
    vec3 rgb = col.a > 0.0 ? col.rgb / col.a : vec3(0.0);
    float a = col.a;
    float outA = a + e * (1.0 - a);
    // blend un-premultiplied colours weighted by coverage
    vec3 mixed = (rgb * a * (1.0 - e) + lineColor * e) / max(outA, 1e-4);
    gl_FragColor = vec4(mixed, outA);
    #include <colorspace_fragment>
    // offscreen (a picture to read back): plain sRGB with straight alpha;
    // on screen: premultiplied, as the canvas expects
    if (srgbOut) gl_FragColor = sRGBTransferOETF(gl_FragColor);
    else gl_FragColor.rgb *= gl_FragColor.a;
  }
`;
class bs {
    constructor(e, { lineColor = `#151a2c`, thickness = 1, opacity = 1 } = {}){
        this.renderer = e;
        this.thickness = thickness;
        this.colorTarget = new It(1, 1, {
            type: g,
            samples: 4
        });
        this.normalTarget = new It(1, 1, {
            type: g,
            depthTexture: new vi(1, 1, h)
        });
        this.normalMaterial = new io;
        this.material = new to({
            vertexShader,
            fragmentShader,
            uniforms: {
                tColor: {
                    value: this.colorTarget.texture
                },
                tNormal: {
                    value: this.normalTarget.texture
                },
                tDepth: {
                    value: this.normalTarget.depthTexture
                },
                texel: {
                    value: new I
                },
                thickness: {
                    value: thickness
                },
                depthRange: {
                    value: 1
                },
                depthThreshold: {
                    value: 0.35
                },
                normalThreshold: {
                    value: 0.22
                },
                lineColor: {
                    value: new B(lineColor)
                },
                lineOpacity: {
                    value: opacity
                },
                srgbOut: {
                    value: false
                }
            },
            depthTest: false,
            depthWrite: false,
            transparent: true,
            blending: 0
        });
        this.quad = new gs(this.material);
        this.clearColor = new B;
    }
    setSize(e, t, n) {
        let r = Math.max(1, Math.round(e * n));
        let i = Math.max(1, Math.round(t * n));
        this.colorTarget.setSize(r, i);
        this.normalTarget.setSize(r, i);
        this.material.uniforms.texel.value.set(1 / r, 1 / i);
        this.pixelRatio = n;
        this.setLineScale(this.lineScale ?? 1);
    }
    setLineScale(e) {
        this.lineScale = e;
        this.material.uniforms.thickness.value = this.thickness * (this.pixelRatio ?? 1) * e;
    }
    render(e, t, n = null) {
        let renderer = this.renderer;
        let i = renderer.getClearAlpha();
        renderer.getClearColor(this.clearColor);
        let mask = t.layers.mask;
        this.material.uniforms.depthRange.value = t.far - t.near;
        renderer.setClearColor(0, 0);
        t.layers.set(_s);
        e.overrideMaterial = this.normalMaterial;
        renderer.setRenderTarget(this.normalTarget);
        renderer.clear();
        renderer.render(e, t);
        e.overrideMaterial = null;
        t.layers.enableAll();
        renderer.setRenderTarget(this.colorTarget);
        renderer.clear();
        renderer.render(e, t);
        t.layers.mask = mask;
        this.material.uniforms.srgbOut.value = !!n;
        renderer.setRenderTarget(n);
        renderer.clear();
        this.quad.render(renderer);
        if (n) {
            renderer.setRenderTarget(null);
        }
        renderer.setClearColor(this.clearColor, i);
    }
    dispose() {
        this.colorTarget.dispose();
        this.normalTarget.dispose();
        this.normalMaterial.dispose();
        this.material.dispose();
        this.quad.dispose();
    }
}
function xs(e, t = false) {
    let n = e[0].index !== null;
    let r = new Set(Object.keys(e[0].attributes));
    let i = new Set(Object.keys(e[0].morphAttributes));
    let a = {};
    let o = {};
    let morphTargetsRelative = e[0].morphTargetsRelative;
    let c = new dr;
    let l = 0;
    for(let u = 0; u < e.length; ++u){
        let d = e[u];
        let f = 0;
        if (n !== (d.index !== null)) {
            console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` + u + `. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`);
            return null;
        }
        for(let e in d.attributes){
            if (!r.has(e)) {
                console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` + u + `. All geometries must have compatible attributes; make sure "` + e + `" attribute exists among all geometries, or in none of them.`);
                return null;
            }
            if (a[e] === undefined) {
                a[e] = [];
            }
            a[e].push(d.attributes[e]);
            f++;
        }
        if (f !== r.size) {
            console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` + u + `. Make sure all geometries have the same number of attributes.`);
            return null;
        }
        if (morphTargetsRelative !== d.morphTargetsRelative) {
            console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` + u + `. .morphTargetsRelative must be consistent throughout all geometries.`);
            return null;
        }
        for(let e in d.morphAttributes){
            if (!i.has(e)) {
                console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` + u + `.  .morphAttributes must be consistent throughout all geometries.`);
                return null;
            }
            if (o[e] === undefined) {
                o[e] = [];
            }
            o[e].push(d.morphAttributes[e]);
        }
        if (t) {
            let e;
            if (n) {
                e = d.index.count;
            } else if (d.attributes.position !== undefined) {
                e = d.attributes.position.count;
            } else {
                console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` + u + `. The geometry must have either an index or a position attribute`);
                return null;
            }
            c.addGroup(l, e, u);
            l += e;
        }
    }
    if (n) {
        let t = 0;
        let n = [];
        for(let r = 0; r < e.length; ++r){
            let i = e[r].index;
            for(let e = 0; e < i.count; ++e){
                n.push(i.getX(e) + t);
            }
            t += e[r].attributes.position.count;
        }
        c.setIndex(n);
    }
    for(let e in a){
        let t = Ss(a[e]);
        if (!t) {
            console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ` + e + ` attribute.`);
            return null;
        }
        c.setAttribute(e, t);
    }
    for(let e in o){
        let t = o[e][0].length;
        if (t !== 0) {
            c.morphAttributes = c.morphAttributes || {};
            c.morphAttributes[e] = [];
            for(let n = 0; n < t; ++n){
                let t = [];
                for(let r = 0; r < o[e].length; ++r){
                    t.push(o[e][r][n]);
                }
                let r = Ss(t);
                if (!r) {
                    console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ` + e + ` morphAttribute.`);
                    return null;
                }
                c.morphAttributes[e].push(r);
            }
        }
    }
    return c;
}
function Ss(e) {
    let t;
    let n;
    let r;
    let i = -1;
    let a = 0;
    for (const s of e){
        if (t === undefined) {
            t = s.array.constructor;
        }
        if (t !== s.array.constructor) {
            console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`);
            return null;
        }
        if (n === undefined) {
            n = s.itemSize;
        }
        if (n !== s.itemSize) {
            console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`);
            return null;
        }
        if (r === undefined) {
            r = s.normalized;
        }
        if (r !== s.normalized) {
            console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`);
            return null;
        }
        if (i === -1) {
            i = s.gpuType;
        }
        if (i !== s.gpuType) {
            console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`);
            return null;
        }
        a += s.count * n;
    }
    let o = new t(a);
    let s = new Qn(o, n, r);
    let c = 0;
    for (const r of e){
        if (r.isInterleavedBufferAttribute) {
            let e = c / n;
            for(let t = 0, i = r.count; t < i; t++){
                for(let i = 0; i < n; i++){
                    let n = r.getComponent(t, i);
                    s.setComponent(t + e, i, n);
                }
            }
        } else {
            o.set(r.array, c);
        }
        c += r.count * n;
    }
    if (i !== undefined) {
        s.gpuType = i;
    }
    return s;
}
const Cs = 68.58;
const ws = 53.34;
const Ts = 1.6;
const Es = [
    [
        0,
        0
    ],
    [
        66.04,
        0
    ],
    [
        68.58,
        2.54
    ],
    [
        68.58,
        37.85
    ],
    [
        66.04,
        40.39
    ],
    [
        66.04,
        51.82
    ],
    [
        64.52,
        53.34
    ],
    [
        0,
        53.34
    ]
];
const Ds = [
    [
        13.97,
        2.54
    ],
    [
        15.24,
        50.8
    ],
    [
        66.04,
        7.62
    ],
    [
        66.04,
        35.56
    ]
];
const headers = [
    {
        id: `digitalA`,
        n: 10,
        x: 30.23,
        y: 50.8
    },
    {
        id: `digitalB`,
        n: 8,
        x: 54.61,
        y: 50.8
    },
    {
        id: `power`,
        n: 8,
        x: 36.83,
        y: 2.54
    },
    {
        id: `analog`,
        n: 6,
        x: 57.15,
        y: 2.54
    }
];
const ks = [
    {
        type: `usb`,
        x: 1.8,
        y: 38.1
    },
    {
        type: `jack`,
        x: 5.3,
        y: 7.85
    },
    {
        type: `reset`,
        x: 6.9,
        y: 49
    },
    {
        type: `dip`,
        x: 47,
        y: 19
    },
    {
        type: `maleHeader`,
        cols: 2,
        rows: 3,
        x: 64.9,
        y: 29.6,
        id: `icsp`
    },
    {
        type: `maleHeader`,
        cols: 3,
        rows: 2,
        x: 20.2,
        y: 45.4,
        id: `icsp2`
    },
    {
        type: `ecap`,
        x: 17.7,
        y: 9.4
    },
    {
        type: `ecap`,
        x: 24.6,
        y: 8.2
    },
    {
        type: `crystal`,
        x: 17.4,
        y: 30.4
    },
    {
        type: `qfn`,
        x: 22.6,
        y: 37.4,
        rot: 45
    },
    {
        type: `polyfuse`,
        x: 13.4,
        y: 41,
        rot: 90
    },
    {
        type: `sot223`,
        x: 5.6,
        y: 18.8,
        rot: 180
    },
    {
        type: `soic8`,
        x: 29.6,
        y: 43.6,
        rot: 90
    },
    {
        type: `sma`,
        x: 9.6,
        y: 24.6,
        rot: 0
    },
    {
        type: `sot23`,
        x: 21.4,
        y: 15
    },
    {
        type: `sot23`,
        x: 12.6,
        y: 25.6,
        rot: 90
    },
    {
        type: `sot23`,
        x: 35.2,
        y: 39.2
    },
    {
        type: `resonator`,
        x: 41.2,
        y: 26.4
    },
    {
        type: `ferrite`,
        x: 9.6,
        y: 29.4,
        rot: 90
    },
    {
        type: `led`,
        x: 27.3,
        y: 40.2,
        color: `amber`,
        name: `L`
    },
    {
        type: `led`,
        x: 27.3,
        y: 36.9,
        color: `amber`,
        name: `TX`
    },
    {
        type: `led`,
        x: 27.3,
        y: 35,
        color: `amber`,
        name: `RX`
    },
    {
        type: `led`,
        x: 58.6,
        y: 28,
        color: `green`,
        name: `ON`
    },
    {
        type: `c0603`,
        x: 19.3,
        y: 39.6,
        rot: 45
    },
    {
        type: `c0603`,
        x: 19.6,
        y: 35,
        rot: -45
    },
    {
        type: `r0603`,
        x: 25.6,
        y: 39.4,
        rot: -45
    },
    {
        type: `r0603`,
        x: 24.9,
        y: 34.4,
        rot: 45
    },
    {
        type: `c0603`,
        x: 22.6,
        y: 32.8
    },
    {
        type: `r0603`,
        x: 12.6,
        y: 35.4
    },
    {
        type: `r0603`,
        x: 12.6,
        y: 33.6
    },
    {
        type: `c0603`,
        x: 16,
        y: 37.6,
        rot: 90
    },
    {
        type: `c0603`,
        x: 11.4,
        y: 50.6
    },
    {
        type: `r0603`,
        x: 11.4,
        y: 48.6
    },
    {
        type: `r0603`,
        x: 29.4,
        y: 40.2
    },
    {
        type: `r0603`,
        x: 29.4,
        y: 36.9
    },
    {
        type: `r0603`,
        x: 29.4,
        y: 35
    },
    {
        type: `c0603`,
        x: 33.2,
        y: 44.6,
        rot: 90
    },
    {
        type: `r0603`,
        x: 34.9,
        y: 44.6,
        rot: 90
    },
    {
        type: `rarray`,
        x: 38.6,
        y: 44.2,
        rot: 90
    },
    {
        type: `r0603`,
        x: 39.4,
        y: 36.6
    },
    {
        type: `c0603`,
        x: 38.2,
        y: 26.4,
        rot: 90
    },
    {
        type: `c0603`,
        x: 44.4,
        y: 26.4,
        rot: 90
    },
    {
        type: `r0603`,
        x: 46.2,
        y: 26.4,
        rot: 90
    },
    {
        type: `c0603`,
        x: 33.6,
        y: 26.8
    },
    {
        type: `c0603`,
        x: 52,
        y: 26.5
    },
    {
        type: `r0603`,
        x: 60.6,
        y: 28,
        rot: 90
    },
    {
        type: `c0603`,
        x: 61,
        y: 33.6
    },
    {
        type: `c0603`,
        x: 10.2,
        y: 17.6,
        rot: 90
    },
    {
        type: `c0603`,
        x: 2.6,
        y: 23.6,
        rot: 90
    },
    {
        type: `r0603`,
        x: 13.2,
        y: 16.6
    },
    {
        type: `r0603`,
        x: 13.2,
        y: 14.9
    },
    {
        type: `c0603`,
        x: 25.6,
        y: 17,
        rot: 90
    },
    {
        type: `r0603`,
        x: 18.6,
        y: 18.8
    },
    {
        type: `c0603`,
        x: 16.8,
        y: 23.8
    },
    {
        type: `r0603`,
        x: 26.4,
        y: 27.6,
        rot: 90
    }
];
const labels = [
    {
        t: `RESET`,
        x: 6.9,
        y: 45,
        s: 1.15,
        w: 700
    },
    {
        t: `ICSP`,
        x: 61.1,
        y: 31.4,
        s: 1.25,
        rot: 90,
        w: 700
    },
    {
        t: `ICSP`,
        x: 20.2,
        y: 42,
        s: 1.1,
        w: 700
    },
    {
        t: `L`,
        x: 25.5,
        y: 40.2,
        s: 1.2,
        w: 700
    },
    {
        t: `TX`,
        x: 25.2,
        y: 36.9,
        s: 1.1,
        w: 700
    },
    {
        t: `RX`,
        x: 25.2,
        y: 35,
        s: 1.1,
        w: 700
    },
    {
        t: `ON`,
        x: 58.6,
        y: 29.7,
        s: 1.2,
        w: 700
    },
    {
        t: `AREF`,
        x: 23.9,
        y: 45.4,
        s: 0.9
    },
    {
        t: `C4`,
        x: 21.3,
        y: 12.6,
        s: 0.95
    },
    {
        t: `R2`,
        x: 16,
        y: 16,
        s: 0.95
    },
    {
        t: `C7`,
        x: 33.6,
        y: 28.2,
        s: 0.95
    },
    {
        t: `Y1`,
        x: 17.4,
        y: 33.4,
        s: 1
    },
    {
        t: `U3`,
        x: 22.6,
        y: 30.9,
        s: 0.95
    },
    {
        t: `F1`,
        x: 15.3,
        y: 41,
        s: 0.95
    },
    {
        t: `X1`,
        x: 11.6,
        y: 6,
        s: 1
    },
    {
        t: `D1`,
        x: 9.6,
        y: 22.2,
        s: 0.95
    },
    {
        t: `+`,
        x: 20.9,
        y: 7,
        s: 1.4
    },
    {
        t: `+`,
        x: 27.8,
        y: 5.9,
        s: 1.4
    },
    {
        t: `TM`,
        x: 48.4,
        y: 39.6,
        s: 0.8
    },
    {
        t: `MADE IN ITALY`,
        x: 53.4,
        y: 38.8,
        s: 0.95
    }
];
const js = {
    usb: [
        `USB-B port`,
        `Uploads sketches and powers the board from your computer.`
    ],
    jack: [
        `DC power jack`,
        `Run the board from a 7–12 V adapter or battery.`
    ],
    reset: [
        `Reset button`,
        `Restarts your sketch from the top.`
    ],
    dip: [
        `ATmega328P`,
        `The 8-bit microcontroller that runs your code at 16 MHz.`
    ],
    icsp: [
        `ICSP header`,
        `Programs the ATmega328P directly, without the bootloader.`
    ],
    icsp2: [
        `ICSP header (USB chip)`,
        `Programs the ATmega16U2 USB interface.`
    ],
    ecap: [
        `47 µF capacitor`,
        `Smooths the supply voltage.`
    ],
    crystal: [
        `16 MHz crystal`,
        `Keeps time for the USB interface chip.`
    ],
    qfn: [
        `ATmega16U2`,
        `Turns USB into serial so your computer can talk to the board.`
    ],
    polyfuse: [
        `Resettable fuse`,
        `Protects your USB port from short circuits.`
    ],
    sot223: [
        `5 V regulator`,
        `Steps the jack voltage down to a steady 5 V.`
    ],
    soic8: [
        `LMV358 op-amp`,
        `Switches between USB and jack power automatically.`
    ],
    sma: [
        `Protection diode`,
        `Blocks reverse voltage from the power jack.`
    ],
    sot23: [
        `Transistor`,
        `A tiny switch used by the power circuitry.`
    ],
    resonator: [
        `16 MHz resonator`,
        `Clocks the ATmega328P.`
    ],
    ferrite: [
        `Ferrite bead`,
        `Filters noise on the USB supply.`
    ],
    L: [
        `“L” LED`,
        `Wired to pin 13 — blinks with LED_BUILTIN.`
    ],
    TX: [
        `TX LED`,
        `Flickers when the board sends serial data.`
    ],
    RX: [
        `RX LED`,
        `Flickers when the board receives serial data.`
    ],
    ON: [
        `Power LED`,
        `Lit whenever the board has power.`
    ],
    r0603: [
        `Resistor`,
        `A surface-mount resistor.`
    ],
    c0603: [
        `Capacitor`,
        `A surface-mount decoupling capacitor.`
    ],
    rarray: [
        `Resistor network`,
        `Four resistors in one package.`
    ],
    digitalA: [
        `Digital pins 8–13`,
        `Plus GND, AREF and the I²C pins SDA/SCL.`
    ],
    digitalB: [
        `Digital pins 0–7`,
        `Pins 0 and 1 double as serial RX/TX.`
    ],
    power: [
        `Power pins`,
        `5 V, 3.3 V, GND and VIN for your circuits.`
    ],
    analog: [
        `Analog pins A0–A5`,
        `Read voltages between 0 and 5 V.`
    ],
    board: [
        `Arduino Uno R3`,
        `Hover the parts to learn what they do.`
    ]
};
const Ms = {
    SCL: 18.8,
    SDA: 21.34,
    AREF: 23.88,
    GND: 26.42,
    D13: 28.96,
    D12: 31.5,
    D11: 34.04,
    D10: 36.58,
    D9: 39.12,
    D8: 41.66,
    D7: 45.72,
    D6: 48.26,
    D5: 50.8,
    D4: 53.34,
    D3: 55.88,
    D2: 58.42,
    D1: 60.96,
    D0: 63.5
};
const Ns = {
    IOREF: 30.48,
    RESET: 33.02,
    "3V3": 35.56,
    "5V": 38.1,
    GND1: 40.64,
    GND2: 43.18,
    VIN: 45.72
};
function Ps(e) {
    let t;
    let n;
    if (e in Ms) {
        t = Ms[e];
        n = 50.8;
    } else if (e in Ns) {
        t = Ns[e];
        n = 2.54;
    } else if (/^A[0-5]$/.test(e)) {
        t = 50.8 + Number(e[1]) * 2.54;
        n = 2.54;
    } else {
        throw Error(`Unknown pin ${e}`);
    }
    return [
        t - Cs / 2,
        8.5,
        ws / 2 - n
    ];
}
const logo = {
    x: 40.6,
    y: 37.6
};
const uno = {
    x: 53,
    y: 34
};
const Ls = {
    usb: {
        w: 9.2,
        d: 11.6,
        h: 10.4,
        dx: 2.8
    },
    jack: {
        w: 12.4,
        d: 9,
        h: 11,
        dx: 0.9
    },
    reset: {
        w: 6,
        d: 6,
        h: 3.6
    },
    dip: {
        w: 36.6,
        d: 10.2,
        h: 6
    },
    ecap: {
        w: 6.6,
        d: 6.6,
        h: 6.9
    },
    crystal: {
        w: 11.2,
        d: 4.9,
        h: 3.6
    },
    qfn: {
        w: 5,
        d: 5,
        h: 0.9,
        silk: true
    },
    polyfuse: {
        w: 4.5,
        d: 3.2,
        h: 1.1,
        silk: true
    },
    sot223: {
        w: 6.6,
        d: 7,
        h: 1.7,
        silk: true
    },
    soic8: {
        w: 4.9,
        d: 6,
        h: 1.5,
        silk: true
    },
    sma: {
        w: 4.4,
        d: 2.7,
        h: 2.1,
        silk: true
    },
    sot23: {
        w: 2.9,
        d: 2.5,
        h: 1.1,
        silk: true
    },
    resonator: {
        w: 3.4,
        d: 1.4,
        h: 1.2,
        silk: true
    },
    ferrite: {
        w: 3.2,
        d: 1.6,
        h: 1.1
    },
    led: {
        w: 2,
        d: 1.25,
        h: 0.8
    },
    r0603: {
        w: 1.6,
        d: 0.8,
        h: 0.45
    },
    c0603: {
        w: 1.6,
        d: 0.8,
        h: 0.8
    },
    rarray: {
        w: 3.2,
        d: 1.6,
        h: 0.5
    }
};
function Rs(e) {
    let t = [];
    let n = (n, r, w_1, d_1)=>{
        let o = (e.rot ?? 0) * Math.PI / 180;
        t.push({
            x: e.x + n * Math.cos(o) - r * Math.sin(o),
            y: e.y + n * Math.sin(o) + r * Math.cos(o),
            w: w_1,
            d: d_1,
            rot: e.rot ?? 0
        });
    };
    switch(e.type){
        case `r0603`:
        case `c0603`:
            n(-0.8, 0, 0.75, 0.95);
            n(0.8, 0, 0.75, 0.95);
            break;
        case `led`:
            n(-1, 0, 0.8, 1.35);
            n(1, 0, 0.8, 1.35);
            break;
        case `ferrite`:
            n(-1.55, 0, 0.9, 1.8);
            n(1.55, 0, 0.9, 1.8);
            break;
        case `sma`:
            n(-2.3, 0, 1.4, 1.8);
            n(2.3, 0, 1.4, 1.8);
            break;
        case `sot23`:
            n(-0.95, -1.15, 0.6, 0.8);
            n(0.95, -1.15, 0.6, 0.8);
            n(0, 1.15, 0.6, 0.8);
            break;
        case `soic8`:
            for(let e = 0; e < 4; e++){
                n(-1.905 + e * 1.27, -2.7, 0.55, 1.1);
                n(-1.905 + e * 1.27, 2.7, 0.55, 1.1);
            }
            break;
        case `sot223`:
            n(-2.3, -3.1, 1, 1.6);
            n(0, -3.1, 1, 1.6);
            n(2.3, -3.1, 1, 1.6);
            n(0, 3.1, 3.4, 1.6);
            break;
        case `qfn`:
            for(let e = 0; e < 8; e++){
                let t = -2.1 + e * 0.6;
                n(t, -2.7, 0.3, 0.6);
                n(t, 2.7, 0.3, 0.6);
                n(-2.7, t, 0.6, 0.3);
                n(2.7, t, 0.6, 0.3);
            }
            break;
        case `polyfuse`:
            n(-2.3, 0, 1.1, 3.4);
            n(2.3, 0, 1.1, 3.4);
            break;
        case `resonator`:
            n(-1.2, 0, 0.6, 1.5);
            n(0, 0, 0.6, 1.5);
            n(1.2, 0, 0.6, 1.5);
            break;
        case `rarray`:
            for(let e = 0; e < 4; e++){
                n(-1.2 + e * 0.8, -0.95, 0.45, 0.6);
                n(-1.2 + e * 0.8, 0.95, 0.45, 0.6);
            }
    }
    return t;
}
function zs() {
    let footprints = [];
    let pads = [];
    for (let n of ks){
        let r = Ls[n.type];
        if (n.type === `maleHeader`) {
            r = {
                w: n.cols * 2.54,
                d: n.rows * 2.54,
                h: 2.5
            };
        }
        if (!r) {
            continue;
        }
        let i = (n.rot ?? 0) * Math.PI / 180;
        let a = r.dx ?? 0;
        footprints.push({
            x: n.x + a * Math.cos(i),
            y: n.y + a * Math.sin(i),
            w: r.w,
            d: r.d,
            h: r.h,
            rot: n.rot ?? 0,
            silk: r.silk
        });
        pads.push(...Rs(n));
    }
    for (let t of headers){
        footprints.push({
            x: t.x,
            y: t.y,
            w: t.n * 2.54,
            d: 2.54,
            h: 8.5
        });
    }
    for (let [e, n, r] of [
        [
            31,
            26,
            0
        ],
        [
            36,
            30.5,
            90
        ],
        [
            57.5,
            36,
            0
        ],
        [
            63,
            20.4,
            90
        ],
        [
            8.4,
            33,
            90
        ],
        [
            6,
            27.8,
            0
        ]
    ]){
        let [i, a] = r ? [
            0,
            0.8
        ] : [
            0.8,
            0
        ];
        pads.push({
            x: e - i,
            y: n - a,
            w: 0.75,
            d: 0.95,
            rot: r
        }, {
            x: e + i,
            y: n + a,
            w: 0.75,
            d: 0.95,
            rot: r
        });
    }
    return {
        footprints,
        pads,
        headers,
        labels,
        logo,
        uno,
        chip: ks.find((e)=>e.type === `dip`)
    };
}
const J = 30;
const Bs = `M24 6.5a18.5 18.5 0 1 0 0 37c8.7 0 13.4-6.6 22-18.5S59.3 6.5 68 6.5a18.5 18.5 0 1 1 0 37c-8.7 0-13.4-6.6-22-18.5S32.7 6.5 24 6.5z`;
const Vs = {
    base: `#4a5d99`,
    baseDeep: `#475683`,
    trace: `rgba(116, 136, 186, 0.42)`,
    traceEdge: `rgba(38, 48, 86, 0.28)`,
    via: `#8090b8`,
    viaHole: `#273055`,
    silk: `#eef0f3`,
    pad: `#cdb07a`,
    padShade: `#a88e5f`
};
function Hs(e) {
    let t = e >>> 0;
    return ()=>{
        t += 1831565813;
        let e = Math.imul(t ^ t >>> 15, 1 | t);
        e ^= e + Math.imul(e ^ e >>> 7, 61 | e);
        return ((e ^ e >>> 14) >>> 0) / 4294967296;
    };
}
const Us = (e)=>e * J;
const Ws = (e)=>(ws - e) * J;
function Gs(e, t, n, r, i, a, o) {
    e.save();
    e.translate(Us(t), Ws(n));
    e.rotate(-a * Math.PI / 180);
    o(-(r * J) / 2, -(i * J) / 2, r * J, i * J);
    e.restore();
}
function Ks(e, t, n, r, i, { rot = 0, align = `center`, weight = 600, base = `middle`, spacing = 0 } = {}) {
    e.save();
    e.translate(Us(n), Ws(r));
    e.rotate(-rot * Math.PI / 180);
    e.font = `${weight} ${i * J}px "Barlow Semi Condensed", "Barlow", sans-serif`;
    e.textAlign = align;
    e.textBaseline = base;
    if (spacing) {
        e.letterSpacing = `${spacing * J}px`;
    }
    e.fillText(t, 0, 0);
    e.restore();
}
function qs(e, t) {
    e.beginPath();
    t.forEach(([t, n], r)=>{
        if (r) {
            return e.lineTo(Us(t), Ws(n));
        }
        return e.moveTo(Us(t), Ws(n));
    });
    e.stroke();
}
function Js(e, t, n) {
    let [r, i] = e;
    let [a, o] = t;
    let s = a - r;
    let c = o - i;
    let l = Math.min(Math.abs(s), Math.abs(c));
    let u = Math.sign(s);
    let d = Math.sign(c);
    if (Math.abs(s) > Math.abs(c)) {
        let a = Math.abs(s) - l;
        if (n) {
            return [
                e,
                [
                    r + u * a,
                    i
                ],
                t
            ];
        }
        return [
            e,
            [
                r + u * l,
                i + d * l
            ],
            t
        ];
    }
    let f = Math.abs(c) - l;
    if (n) {
        return [
            e,
            [
                r,
                i + d * f
            ],
            t
        ];
    }
    return [
        e,
        [
            r + u * l,
            i + d * l
        ],
        t
    ];
}
function Ys(e, t) {
    let n = document.createElement(`canvas`);
    n.width = Math.round(Cs * J);
    n.height = Math.round(ws * J);
    let r = n.getContext(`2d`);
    let i = Hs(7);
    r.fillStyle = Vs.base;
    r.fillRect(0, 0, n.width, n.height);
    let a = r.createRadialGradient(Us(40), Ws(30), 240, Us(34), Ws(26), 1440);
    a.addColorStop(0, `rgba(255,255,255,0.035)`);
    a.addColorStop(1, `rgba(20,28,60,0.10)`);
    r.fillStyle = a;
    r.fillRect(0, 0, n.width, n.height);
    r.lineCap = `round`;
    r.lineJoin = `round`;
    let o = [];
    let e_chip = e.chip;
    for(let e = 0; e < 14; e++){
        let t = e_chip.x - 16.51 + e * 2.54;
        let n = e_chip.y + 3.81;
        let r = e_chip.y - 3.81;
        if (e < 12) {
            let r = e < 6 ? 28.96 + e * 2.54 : 45.72 + (e - 6) * 2.54;
            let i = n + 4 + e * 0.75;
            o.push([
                [
                    t,
                    n + 0.5
                ],
                [
                    t,
                    i
                ],
                ...Js([
                    t,
                    i
                ], [
                    r,
                    46.2
                ], e % 2 == 0).slice(1),
                [
                    r,
                    49.6
                ]
            ]);
        }
        if (e > 2) {
            let n = e < 9 ? 27.94 + (e - 3) * 2.54 : 50.8 + (e - 9) * 2.54;
            let i = r - 1.6 - e % 4 * 0.55;
            o.push([
                [
                    t,
                    r - 0.5
                ],
                [
                    t,
                    i
                ],
                [
                    n,
                    Math.max(i - Math.abs(n - t), 4.4)
                ],
                [
                    n,
                    3.6
                ]
            ]);
        }
    }
    for(let e = 0; e < 70; e++){
        let e = [
            2 + i() * 62,
            2 + i() * 49
        ];
        let t = 3 + i() * 12;
        let n = Math.floor(i() * 8) * (Math.PI / 4);
        let r = [
            e[0] + Math.cos(n) * t,
            e[1] + Math.sin(n) * t
        ];
        let a = [
            r[0] + (i() - 0.5) * 10,
            r[1] + (i() - 0.5) * 10
        ];
        o.push(Js(e, r, i() > 0.5).concat(Js(r, a, i() > 0.5).slice(1)));
    }
    for (let e of o){
        let t = e.map(([e, t])=>[
                Math.min(Math.max(e, 1), Cs - 1.5),
                Math.min(Math.max(t, 1), ws - 1)
            ]);
        r.strokeStyle = Vs.traceEdge;
        r.lineWidth = 0.62 * J;
        qs(r, t);
        r.strokeStyle = Vs.trace;
        r.lineWidth = 0.36 * J;
        qs(r, t);
    }
    for(let e = 0; e < 110; e++){
        let e = 2 + i() * 64;
        let t = 2 + i() * 49;
        r.fillStyle = Vs.via;
        r.beginPath();
        r.arc(Us(e), Ws(t), 0.42 * J, 0, Math.PI * 2);
        r.fill();
        r.fillStyle = Vs.viaHole;
        r.beginPath();
        r.arc(Us(e), Ws(t), 0.18 * J, 0, Math.PI * 2);
        r.fill();
    }
    for (let t of e.footprints){
        let e = t.h ?? 1;
        let n = Math.min(0.35 + Math.sqrt(e) * 0.42, 1.8);
        let i = Math.min(0.1 + e * 0.07, 0.8);
        r.save();
        r.filter = `blur(${n * J}px)`;
        r.fillStyle = `rgba(14, 18, 44, ${Math.min(0.28 + e * 0.03, 0.55)})`;
        let a = Math.min(e * 0.09, 0.9);
        Gs(r, t.x - a * 0.6, t.y - a, t.w + i, t.d + i, t.rot ?? 0, (e, t, n, i)=>r.fillRect(e, t, n, i));
        r.restore();
    }
    for (let t of e.pads){
        Gs(r, t.x, t.y, t.w, t.d, t.rot ?? 0, (e, t, n, i)=>{
            r.fillStyle = Vs.padShade;
            r.fillRect(e - 0.06 * J, t - 0.06 * J, n + 0.12 * J, i + 0.12 * J);
            r.fillStyle = Vs.pad;
            r.fillRect(e, t, n, i);
        });
    }
    r.fillStyle = Vs.silk;
    r.strokeStyle = Vs.silk;
    r.lineWidth = 0.2 * J;
    for (let t of e.footprints){
        if (t.silk) {
            Gs(r, t.x, t.y, t.w + 0.9, t.d + 0.9, t.rot ?? 0, (e, t, n, i)=>{
                r.lineWidth = 0.17 * J;
                r.strokeRect(e, t, n, i);
            });
        }
    }
    for (let t of e.headers){
        r.lineWidth = 0.22 * J;
        Gs(r, t.x, t.y, t.n * 2.54 + 0.5, 3.1, 0, (e, t, n, i)=>r.strokeRect(e, t, n, i));
    }
    let l = [
        `SCL`,
        `SDA`,
        `AREF`,
        `GND`,
        `13`,
        `12`,
        `~11`,
        `~10`,
        `~9`,
        `8`,
        `7`,
        `~6`,
        `~5`,
        `4`,
        `~3`,
        `2`,
        `TX 1`,
        `RX 0`
    ];
    let u = [
        18.8,
        21.34,
        23.88,
        26.42,
        28.96,
        31.5,
        34.04,
        36.58,
        39.12,
        41.66,
        45.72,
        48.26,
        50.8,
        53.34,
        55.88,
        58.42,
        60.96,
        63.5
    ];
    l.forEach((e, t)=>{
        if (e.length > 2) {
            Ks(r, e, u[t], 47.6, 1.3, {
                rot: 90,
                align: `right`,
                weight: 600
            });
        } else {
            Ks(r, e, u[t], 47.3, 1.45, {
                weight: 700
            });
        }
    });
    Ks(r, `DIGITAL (PWM~)`, 55.6, 43.4, 1.9, {
        weight: 700,
        spacing: 0.12
    });
    r.lineWidth = 0.24 * J;
    qs(r, [
        [
            44.6,
            44.9
        ],
        [
            47.6,
            44.9
        ]
    ]);
    qs(r, [
        [
            63.6,
            44.9
        ],
        [
            65,
            44.9
        ]
    ]);
    qs(r, [
        [
            65,
            44.9
        ],
        [
            65,
            45.8
        ]
    ]);
    [
        ``,
        `IOREF`,
        `RESET`,
        `3.3V`,
        `5V`,
        `GND`,
        `GND`,
        `VIN`
    ].forEach((e, t)=>{
        if (e) {
            Ks(r, e, 27.94 + t * 2.54, 4.6, 1.15, {
                rot: 90,
                align: `left`,
                weight: 600
            });
        }
    });
    [
        `A0`,
        `A1`,
        `A2`,
        `A3`,
        `A4`,
        `A5`
    ].forEach((e, t)=>Ks(r, e, 50.8 + t * 2.54, 5.1, 1.25, {
            weight: 700
        }));
    Ks(r, `POWER`, 37.4, 11.6, 1.9, {
        weight: 700,
        spacing: 0.12
    });
    Ks(r, `ANALOG IN`, 57.2, 11.6, 1.9, {
        weight: 700,
        spacing: 0.12
    });
    r.lineWidth = 0.24 * J;
    qs(r, [
        [
            27.2,
            11.6
        ],
        [
            33,
            11.6
        ]
    ]);
    qs(r, [
        [
            41.8,
            11.6
        ],
        [
            46.8,
            11.6
        ]
    ]);
    qs(r, [
        [
            49.6,
            11.6
        ],
        [
            51.6,
            11.6
        ]
    ]);
    qs(r, [
        [
            62.8,
            11.6
        ],
        [
            65,
            11.6
        ]
    ]);
    qs(r, [
        [
            27.2,
            11.6
        ],
        [
            27.2,
            10.6
        ]
    ]);
    qs(r, [
        [
            65,
            11.6
        ],
        [
            65,
            10.6
        ]
    ]);
    let d = new Path2D(Bs);
    r.save();
    r.translate(Us(e.logo.x - 7.4), Ws(e.logo.y + 4));
    r.scale(14.8 / 92 * J, 14.8 / 92 * J);
    r.lineWidth = 6.4;
    r.stroke(d);
    r.lineCap = `round`;
    r.lineWidth = 3.4;
    r.stroke(new Path2D(`M16 25h11M63 25h10M68 20v10`));
    r.restore();
    Ks(r, `ARDUINO`, e.logo.x - 0.6, e.logo.y - 6.2, 3, {
        weight: 700,
        spacing: 0.18
    });
    r.lineWidth = 0.32 * J;
    let e_uno = e.uno;
    r.beginPath();
    r.roundRect(Us(e_uno.x - 5.1), Ws(e_uno.y + 2.4), 10.2 * J, 4.8 * J, 2.4 * J);
    r.stroke();
    Ks(r, `UNO`, e_uno.x, e_uno.y - 0.05, 3.5, {
        weight: 500,
        spacing: 0.3
    });
    for (let t of e.labels){
        Ks(r, t.t, t.x, t.y, t.s ?? 1.05, {
            rot: t.rot ?? 0,
            weight: t.w ?? 600
        });
    }
    for (let [e, t] of Ds){
        r.fillStyle = `#d9d2c2`;
        r.beginPath();
        r.arc(Us(e), Ws(t), 2.75 * J, 0, Math.PI * 2);
        r.fill();
        r.fillStyle = `#b9ad94`;
        r.beginPath();
        r.arc(Us(e), Ws(t), 60, 0, Math.PI * 2);
        r.fill();
    }
    let p = new _i(n);
    p.colorSpace = Ue;
    p.anisotropy = t.capabilities.getMaxAnisotropy();
    p.repeat.set(1 / Cs, 1 / ws);
    p.generateMipmaps = true;
    p.minFilter = c;
    return p;
}
function Xs(e, t, n) {
    let r = document.createElement(`canvas`);
    r.width = e;
    r.height = t;
    n(r.getContext(`2d`), e, t);
    let i = new _i(r);
    i.colorSpace = Ue;
    return i;
}
const Zs = 2.54;
const Y = (e, t = 0.6, n = 0, r = {})=>new ro({
        color: e,
        roughness: t,
        metalness: n,
        ...r
    });
function Qs() {
    return {
        edge: Y(`#e0c39c`, 0.8),
        header: Y(`#33374a`, 0.5),
        headerHole: Y(`#0d0f17`, 0.9),
        plastic: Y(`#2c3041`, 0.5),
        chip: Y(`#2a2d38`, 0.45),
        metal: Y(`#efe4d2`, 0.42, 0.35),
        metalDark: Y(`#cdc2b0`, 0.5, 0.3),
        pin: Y(`#e8e2d6`, 0.32, 0.55),
        red: Y(`#ec5a4b`, 0.4),
        can: Y(`#ebebe6`, 0.34, 0.45),
        cream: Y(`#f1e4c8`, 0.55),
        tan: Y(`#d6b98c`, 0.5, 0.2),
        resBody: Y(`#25272f`, 0.5),
        amber: Y(`#f5b444`, 0.35, 0, {
            emissive: `#7a4300`,
            emissiveIntensity: 0.35
        }),
        green: Y(`#8bd67c`, 0.35, 0, {
            emissive: `#1d5a12`,
            emissiveIntensity: 0.35
        }),
        ledBase: Y(`#f3eee4`, 0.6),
        darkMetal: Y(`#8f949c`, 0.45, 0.4)
    };
}
function $s(e, t, n = {}) {
    let r = new La(e, {
        depth: t,
        bevelEnabled: false,
        curveSegments: 24,
        ...n
    });
    r.rotateX(-Math.PI / 2);
    return r;
}
function ec(e, t, n = 0, r = 0) {
    let i = new ea;
    i.moveTo(n - e / 2, r - t / 2);
    i.lineTo(n + e / 2, r - t / 2);
    i.lineTo(n + e / 2, r + t / 2);
    i.lineTo(n - e / 2, r + t / 2);
    i.closePath();
    return i;
}
function tc(e, t, n, r) {
    let i = new $i;
    i.moveTo(n - e / 2, r - t / 2);
    i.lineTo(n - e / 2, r + t / 2);
    i.lineTo(n + e / 2, r + t / 2);
    i.lineTo(n + e / 2, r - t / 2);
    i.closePath();
    return i;
}
function X(e, t, n, r, i = 0, a = 0, o = 0) {
    let s = new W(new xi(e, t, n), r);
    s.position.set(i, a + t / 2, o);
    return s;
}
function nc(e, t) {
    let n = new z;
    let r = e * Zs;
    n.add(X(r - 0.06, 7.4, 2.48, t.header));
    let i = ec(r - 0.06, 2.48);
    for(let t = 0; t < e; t++){
        i.holes.push(tc(1.05, 1.05, -r / 2 + Zs / 2 + t * Zs, 0));
    }
    let a = new W($s(i, 1.1), t.header);
    a.position.y = 7.4;
    n.add(a);
    for(let i = 0; i < e; i++){
        let e = new W(new Va(1.05, 1.05), t.headerHole);
        e.rotation.x = -Math.PI / 2;
        e.position.set(-r / 2 + Zs / 2 + i * Zs, 7.41, 0);
        n.add(e);
    }
    for(let i = 1; i < e; i++){
        n.add(X(0.12, 0.9, 0.08, t.headerHole, -r / 2 + i * Zs, 7.5, Zs / 2 - 0.02));
    }
    return n;
}
function rc(cols, rows, n) {
    let r = new z;
    r.add(X(cols * Zs - 0.06, 2.5, rows * Zs - 0.06, n.plastic));
    let i = [];
    for(let n = 0; n < cols; n++){
        for(let r = 0; r < rows; r++){
            let a = new xi(0.64, 6, 0.64);
            a.translate((n - (cols - 1) / 2) * Zs, 5.5, -(r - (rows - 1) / 2) * Zs);
            i.push(a);
            let o = new Ci(0.45, 0.5, 4, 1);
            o.rotateY(Math.PI / 4);
            o.translate((n - (cols - 1) / 2) * Zs, 8.75, -(r - (rows - 1) / 2) * Zs);
            i.push(o.toNonIndexed());
        }
    }
    r.add(new W(xs(i.map((e)=>{
        if (e.index) {
            return e.toNonIndexed();
        }
        return e;
    })), n.pin));
    return r;
}
function ic(e) {
    let t = new z;
    let n = 35.4;
    let r = 7.62;
    for (let n of [
        -1,
        1
    ]){
        t.add(X(36.6, 2.6, 2.4, e.plastic, 0, 0, n * 4.01));
    }
    t.add(X(1.6, 2, r, e.plastic, -17.5, 0, 0));
    t.add(X(1.6, 2, r, e.plastic, 17.5, 0, 0));
    let i = X(n, 3.1, 6.9, e.chip, 0, 2.95, 0);
    t.add(i);
    let a = Xs(1024, 200, (e, t, n)=>{
        e.fillStyle = `#2a2c36`;
        e.fillRect(0, 0, t, n);
        e.fillStyle = `#1a1b22`;
        e.beginPath();
        e.arc(0, n / 2, 26, -Math.PI / 2, Math.PI / 2);
        e.fill();
        e.beginPath();
        e.arc(70, n - 44, 13, 0, Math.PI * 2);
        e.fill();
        e.fillStyle = `rgba(205, 205, 215, 0.42)`;
        e.font = `600 44px "Barlow Semi Condensed", sans-serif`;
        e.textBaseline = `middle`;
        e.fillText(`ATMEGA328P-PU`, 300, n / 2 - 22);
        e.font = `500 30px "Barlow Semi Condensed", sans-serif`;
        e.fillText(`AU 1952   ◆ ATMEL`, 300, n / 2 + 30);
    });
    let o = new W(new Va(n, 6.9), Y(`#ffffff`, 0.45, 0, {
        map: a
    }));
    o.rotation.x = -Math.PI / 2;
    o.position.y = 6.055000000000001;
    t.add(o);
    let s = [];
    for(let e = 0; e < 14; e++){
        let t = -16.51 + e * Zs;
        for (let e of [
            -1,
            1
        ]){
            let n = new xi(1.3, 0.32, 0.8);
            n.translate(t, 4.050000000000001, e * 3.85);
            let r = new xi(1.4, 1, 0.32);
            r.translate(t, 3.5700000000000003, e * 4.35);
            let i = new xi(0.55, 3.25, 0.32);
            i.translate(t, 3.25 / 2, e * 4.35);
            s.push(n, r, i);
        }
    }
    t.add(new W(xs(s), e.pin));
    return t;
}
function ac(e) {
    let t = new z;
    let n = 14.8;
    let r = 11.6;
    let i = 10.4;
    t.add(X(n, i, r, e.metal));
    t.add(X(10.4, 0.18, 8.2, e.metal, 1.3, i, 0));
    t.add(X(5.6, 5, 0.22, e.metal, 3.3, 2.5, r / 2));
    t.add(X(0.25, 7.8, 0.12, e.metal, -1.3, 1.3, 5.859999999999999));
    t.add(X(0.24, 6, 7, e.metal, n / 2, 2.4, 0.8));
    t.add(X(0.2, 2, 2.4, e.metal, 7.6000000000000005, 0.6, -3.4));
    t.add(X(1.4, 1.6, 0.35, e.metalDark, 5.4, -1.2, 5.9799999999999995));
    t.add(X(1.4, 1.6, 0.35, e.metalDark, 5.4, -1.2, -11.6 / 2 - 0.18));
    t.add(X(0.2, 7.4, 8.2, e.plastic, -14.8 / 2 - 0.01, 1.7, 0));
    t.add(X(0.3, 2.6, 5.2, e.cream, -14.8 / 2 - 0.1, 3.2, 0));
    return t;
}
function oc(e) {
    let t = new z;
    t.add(X(3.4, 11, 9, e.plastic, -5.4, 0, 0));
    t.add(X(10.8, 6, 9, e.plastic, 1.7, 0, 0));
    let n = new W(new G(9 / 2, 9 / 2, 10.8, 40, 1), e.plastic);
    n.rotation.z = Math.PI / 2;
    n.position.set(1.7, 6, 0);
    t.add(n);
    let r = new W(new G(1.6, 1.6, 0.6, 28), e.tan);
    r.rotation.z = Math.PI / 2;
    r.position.set(7.4, 6.4, 0);
    t.add(r);
    t.add(X(0.5, 4.2, 2.2, e.metal, 7.6, 0, 0));
    t.add(X(2.6, 0.5, 2.2, e.metal, 8.3, 0, 0));
    t.add(X(0.5, 3, 2, e.metal, 1.6, 0, 4.75));
    let i = new W(new G(3.1, 3.1, 0.3, 32), e.headerHole);
    i.rotation.z = Math.PI / 2;
    i.position.set(-7.12, 6, 0);
    t.add(i);
    let a = new W(new G(1, 1, 1.2, 20), e.tan);
    a.rotation.z = Math.PI / 2;
    a.position.set(-7.4, 6, 0);
    t.add(a);
    return t;
}
let sc;
function cc(e) {
    let t = new z;
    t.add(X(6.6, 1.3, 6.6, e.plastic));
    let n = new W(new G(3.15, 3.15, 5.4, 48), e.can);
    n.position.y = 4;
    t.add(n);
    let r = new W(new Wa(2.95, 0.22, 10, 48), e.can);
    r.rotation.x = Math.PI / 2;
    r.position.y = 6.62;
    t.add(r);
    sc ??= Xs(256, 256, (e, t, n)=>{
        e.fillStyle = `#dcdcd7`;
        e.fillRect(0, 0, t, n);
        e.fillStyle = `#2b2d36`;
        e.beginPath();
        e.arc(t / 2, n / 2, t / 2, Math.PI * 0.62, Math.PI * 1.38);
        e.fill();
        e.fillStyle = `#d8d8d2`;
        e.beginPath();
        e.arc(t / 2 + 6, n / 2, t / 2 - 22, 0, Math.PI * 2);
        e.fill();
        e.fillStyle = `#3a3c44`;
        e.font = `700 54px "Barlow Semi Condensed", sans-serif`;
        e.textAlign = `center`;
        e.textBaseline = `middle`;
        e.fillText(`47`, t / 2 + 14, n / 2 - 30);
        e.fillText(`25V`, t / 2 + 14, n / 2 + 32);
    });
    sc.userData.shared = true;
    let i = new W(new Si(2.8, 48), Y(`#ffffff`, 0.4, 0.35, {
        map: sc
    }));
    i.rotation.x = -Math.PI / 2;
    i.rotation.z = Math.PI / 2;
    i.position.y = 6.71;
    t.add(i);
    return t;
}
function lc(e, t) {
    let n = t / 2;
    let r = new ea;
    r.moveTo(-e / 2 + n, -n);
    r.lineTo(e / 2 - n, -n);
    r.absarc(e / 2 - n, 0, n, -Math.PI / 2, Math.PI / 2, false);
    r.lineTo(-e / 2 + n, n);
    r.absarc(-e / 2 + n, 0, n, Math.PI / 2, Math.PI * 3 / 2, false);
    return r;
}
function uc(e) {
    let t = new z;
    let n = new W($s(lc(11.2, 4.9), 0.5), e.metalDark);
    t.add(n);
    let r = new W($s(lc(10.4, 4.1), 2.7, {
        bevelEnabled: true,
        bevelThickness: 0.35,
        bevelSize: 0.35,
        bevelSegments: 4
    }), e.metal);
    r.position.y = 0.85;
    t.add(r);
    return t;
}
function dc(e) {
    let t = new z;
    t.add(X(6, 2.4, 6, e.plastic));
    t.add(X(5.2, 0.35, 5.2, e.chip, 0, 2.4, 0));
    for (let [n, r] of [
        [
            -1,
            -1
        ],
        [
            1,
            -1
        ],
        [
            -1,
            1
        ],
        [
            1,
            1
        ]
    ]){
        let i = new W(new G(0.42, 0.42, 0.25, 16), e.pin);
        i.position.set(n * 2.15, 2.85, r * 2.15);
        t.add(i);
        t.add(X(0.7, 0.9, 0.5, e.pin, n * 2, 0, r * 3.2));
    }
    let n = new W(new Ba([
        new I(0, 0),
        new I(1.85, 0),
        new I(1.85, 1),
        new I(1.7, 1.35),
        new I(1.3, 1.5),
        new I(0, 1.55)
    ], 40), e.red);
    n.position.y = 2.75;
    t.add(n);
    return t;
}
function fc(e, t = 8, n = 4.9, r = 3.9, i = 1.45) {
    let a = new z;
    a.add(X(n, i, r, e.chip, 0, 0.12, 0));
    let o = [];
    let s = t / 2;
    for(let e = 0; e < s; e++){
        let t = (e - (s - 1) / 2) * 1.27;
        for (let e of [
            -1,
            1
        ]){
            let n = new xi(0.42, 0.2, 0.7);
            n.translate(t, 0.75, e * (r / 2 + 0.3));
            let i = new xi(0.42, 0.75, 0.2);
            i.translate(t, 0.45, e * (r / 2 + 0.6));
            let a = new xi(0.42, 0.18, 0.55);
            a.translate(t, 0.09, e * (r / 2 + 0.85));
            o.push(n, i, a);
        }
    }
    a.add(new W(xs(o), e.pin));
    let c = new W(new Si(0.32, 16), e.headerHole);
    c.rotation.x = -Math.PI / 2;
    c.position.set(-n / 2 + 0.8, i + 0.13, r / 2 - 0.8);
    a.add(c);
    return a;
}
function pc(e) {
    let t = new z;
    t.add(X(6.5, 1.6, 3.5, e.chip, 0, 0.1, 0));
    t.add(X(3, 0.25, 1.7, e.pin, 0, 0, -2.6));
    for (let n of [
        -2.3,
        0,
        2.3
    ]){
        t.add(X(0.7, 0.25, 1.8, e.pin, n, 0, 2.5));
        t.add(X(0.7, 0.6, 0.25, e.pin, n, 0.2, 1.75));
    }
    return t;
}
function mc(e) {
    let t = new z;
    t.add(X(2.9, 1, 1.4, e.chip, 0, 0.12, 0));
    for (let [n, r] of [
        [
            -0.95,
            1
        ],
        [
            0.95,
            1
        ],
        [
            0,
            -1
        ]
    ]){
        t.add(X(0.42, 0.18, 0.7, e.pin, n, 0, r * 1));
    }
    return t;
}
function hc(e) {
    let t = new z;
    t.add(X(5, 0.9, 5, e.chip));
    let n = new W(new Si(0.35, 16), e.headerHole);
    n.rotation.x = -Math.PI / 2;
    n.position.set(-1.7, 0.91, 1.7);
    t.add(n);
    return t;
}
function gc(e, type) {
    let n = new z;
    if (type === `r0603`) {
        n.add(X(1, 0.45, 0.8, e.resBody));
        n.add(X(0.32, 0.47, 0.82, e.pin, -0.66, 0, 0));
        n.add(X(0.32, 0.47, 0.82, e.pin, 0.66, 0, 0));
    } else {
        n.add(X(1, 0.8, 0.8, e.tan));
        n.add(X(0.32, 0.82, 0.82, e.pin, -0.66, 0, 0));
        n.add(X(0.32, 0.82, 0.82, e.pin, 0.66, 0, 0));
    }
    return n;
}
function _c(e, color) {
    let n = new z;
    n.add(X(2, 0.35, 1.25, e.ledBase));
    let r = (color === `green` ? e.green : e.amber).clone();
    n.add(X(1.5, 0.45, 1.1, r, 0, 0.35, 0));
    n.userData.lens = r;
    return n;
}
function vc(e, t) {
    switch(e.type){
        case `usb`:
            return ac(t);
        case `jack`:
            return oc(t);
        case `reset`:
            return dc(t);
        case `dip`:
            return ic(t);
        case `maleHeader`:
            return rc(e.cols, e.rows, t);
        case `ecap`:
            return cc(t);
        case `crystal`:
            return uc(t);
        case `qfn`:
            return hc(t);
        case `soic8`:
            return fc(t);
        case `sot223`:
            return pc(t);
        case `sot23`:
            return mc(t);
        case `polyfuse`:
            {
                let e = new z;
                e.add(X(3.4, 1.05, 3.2, t.cream));
                e.add(X(0.6, 1.1, 3.25, t.pin, -2, 0, 0));
                e.add(X(0.6, 1.1, 3.25, t.pin, 2, 0, 0));
                return e;
            }
        case `sma`:
            {
                let e = new z;
                e.add(X(3.6, 2, 2.6, t.chip));
                e.add(X(0.5, 0.02, 2.62, t.metalDark, -1.25, 2, 0));
                e.add(X(0.9, 0.25, 1.5, t.pin, -2.1, 0, 0));
                e.add(X(0.9, 0.25, 1.5, t.pin, 2.1, 0, 0));
                return e;
            }
        case `resonator`:
            {
                let e = new z;
                e.add(X(3.2, 1.2, 1.3, t.cream));
                return e;
            }
        case `ferrite`:
            {
                let e = new z;
                e.add(X(2.2, 1.1, 1.6, t.darkMetal));
                e.add(X(0.5, 1.12, 1.62, t.pin, -1.35, 0, 0));
                e.add(X(0.5, 1.12, 1.62, t.pin, 1.35, 0, 0));
                return e;
            }
        case `rarray`:
            {
                let e = new z;
                e.add(X(3.2, 0.5, 1.6, t.resBody));
                return e;
            }
        case `led`:
            return _c(t, e.color);
        case `r0603`:
        case `c0603`:
            return gc(t, e.type);
        default:
            return null;
    }
}
function yc(e, t) {
    let n = new ea;
    let e_length = e.length;
    for(let i = 0; i < e_length; i++){
        let [a, o] = e[(i - 1 + e_length) % e_length];
        let [s, c] = e[i];
        let [l, u] = e[(i + 1) % e_length];
        let d = Math.hypot(s - a, c - o);
        let f = Math.hypot(l - s, u - c);
        let p = Math.min(t, d / 2);
        let m = Math.min(t, f / 2);
        let h = s + (a - s) / d * p;
        let g = c + (o - c) / d * p;
        let _ = s + (l - s) / f * m;
        let v = c + (u - c) / f * m;
        if (i === 0) {
            n.moveTo(h, g);
        } else {
            n.lineTo(h, g);
        }
        n.quadraticCurveTo(s, c, _, v);
    }
    n.closePath();
    return n;
}
function bc(e, t) {
    let n = yc(Es, 1.1);
    for (let [e, t] of Ds){
        let r = new $i;
        r.absarc(e, t, 1.6, 0, Math.PI * 2, true);
        n.holes.push(r);
    }
    let r = $s(n, Ts, {
        curveSegments: 32
    });
    r.translate(0, -Ts, 0);
    return new W(r, [
        Y(`#ffffff`, 0.78, 0, {
            map: t
        }),
        e.edge
    ]);
}
function xc(e) {
    let t = Qs();
    let n = Ys(zs(), e);
    let root = new z;
    let i = new z;
    i.position.set(-Cs / 2, 0, ws / 2);
    root.add(i);
    let a = (e, t, n, r = 0, a = 0)=>{
        e.position.set(t, r, -n);
        e.rotation.y = a * Math.PI / 180;
        i.add(e);
        return e;
    };
    let o = (e)=>{
        let [t, desc] = js[e] ?? [];
        if (t) {
            return {
                name: t,
                desc,
                key: e
            };
        }
        return null;
    };
    let s = bc(t, n);
    s.userData.part = {
        ...o(`board`),
        lift: false
    };
    i.add(s);
    for (let e of headers){
        let n = a(nc(e.n, t), e.x, e.y);
        n.userData.part = o(e.id);
    }
    let leds = {};
    for (let e of ks){
        let n = vc(e, t);
        if (n) {
            a(n, e.x, e.y, 0, e.rot ?? 0);
            n.userData.part = o(e.name ?? e.id ?? e.type);
            if (e.name && n.userData.lens) {
                leds[e.name] = n.userData.lens;
            }
        }
    }
    root.traverse((e)=>{
        if (e.isMesh) {
            e.castShadow = true;
            e.receiveShadow = false;
        }
    });
    let l = (e, t, n)=>{
        let r = new fn;
        a(r, e, t, n);
        return r;
    };
    return {
        root,
        anchors: {
            usb: l(-3, 32.3, 7.8),
            mcuWay: l(22.6, 37.4, 0.95),
            mcu: l(44, 19, 6.1),
            digital: l(42.9, 50.8, 8.5),
            jack: l(-0.4, 3.35, 7.4),
            power: l(32, 2.54, 8.5),
            analog: l(57.1, 2.54, 8.5),
            ledL: l(27.3, 40.2, 0.9)
        },
        leds
    };
}
const Sc = 2.54;
const Cc = Math.PI / 180;
const Z = (e, t = 0.5, n = 0, r = {})=>new ro({
        color: e,
        roughness: t,
        metalness: n,
        ...r
    });
function wc(e) {
    e.traverse((e)=>{
        if (e.isMesh || e.isSprite || e.isLine) {
            e.geometry?.dispose();
            for (let t of [].concat(e.material)){
                if (t && !t.userData.shared) {
                    if (t.map && !t.map.userData.shared) {
                        t.map.dispose();
                    }
                    t.dispose();
                }
            }
        }
    });
}
function Q(e, t, n, r, i = 0, a = 0, o = 0) {
    let s = new W(new xi(e, t, n), r);
    s.position.set(i, a + t / 2, o);
    return s;
}
function $(e, t, n, r) {
    let i = new fn;
    i.position.set(t, n, r);
    e.add(i);
    e.userData.anchor = i;
    return i;
}
function Tc(e, t, n) {
    let r = document.createElement(`canvas`);
    r.width = e;
    r.height = t;
    n(r.getContext(`2d`), e, t);
    let i = new _i(r);
    i.colorSpace = Ue;
    i.anisotropy = 8;
    return i;
}
let Ec;
function Dc(e, t) {
    Ec ??= Tc(128, 128, (e)=>{
        let t = e.createRadialGradient(64, 64, 2, 64, 64, 63);
        t.addColorStop(0, `rgba(255,255,255,1)`);
        t.addColorStop(0.25, `rgba(255,255,255,0.55)`);
        t.addColorStop(1, `rgba(255,255,255,0)`);
        e.fillStyle = t;
        e.fillRect(0, 0, 128, 128);
    });
    Ec.userData.shared = true;
    let n = new Fr(new xr({
        map: Ec,
        color: e,
        transparent: true,
        opacity: 0,
        depthWrite: false
    }));
    n.scale.set(t, t, 1);
    n.layers.set(1);
    return n;
}
const Oc = {
    cols: 23,
    height: 8.5,
    width: 62,
    depth: 35,
    rows: {
        a: 13.97,
        b: 11.43,
        c: 8.89,
        d: 6.35,
        e: 3.81,
        f: -3.81,
        g: -6.35,
        h: -8.89,
        i: -11.43,
        j: -13.97
    }
};
function kc(e, t) {
    return new L((e - 12) * Sc, Oc.height, Oc.rows[t]);
}
function Ac(e) {
    let { width } = Oc;
    return Tc(Math.round(width * 22), 350, (n, r, i)=>{
        n.fillStyle = `#f5efe3`;
        n.fillRect(0, 0, r, i);
        let a = e ? 1.6 : -17.5;
        let o = e ? [
            `e`,
            `d`,
            `c`,
            `b`,
            `a`
        ] : [
            `j`,
            `i`,
            `h`,
            `g`,
            `f`
        ];
        for (let e of o){
            let i = (Oc.rows[e] - a) * 22;
            for(let e = 1; e <= Oc.cols; e++){
                let r = (width / 2 + (e - 12) * Sc) * 22;
                n.fillStyle = `#e1d7c4`;
                n.fillRect(r - 17.16, i - 17.16, 34.32, 34.32);
                n.fillStyle = `#3b3d47`;
                n.fillRect(r - 0.52 * 22, i - 0.52 * 22, 1.04 * 22, 1.04 * 22);
            }
            n.fillStyle = `#a69c8b`;
            n.font = `600 33px "Barlow Semi Condensed", sans-serif`;
            n.textAlign = `center`;
            n.textBaseline = `middle`;
            n.fillText(e, 33, i);
            n.fillText(e, r - 33, i);
        }
        n.font = `600 28.6px "Barlow Semi Condensed", sans-serif`;
        let s = e ? i - 20.9 : 20.9;
        for (let e of [
            1,
            5,
            10,
            15,
            20
        ]){
            n.fillText(String(e), (width / 2 + (e - 12) * Sc) * 22, s);
        }
    });
}
function jc() {
    let e = new z;
    let { width, height, depth } = Oc;
    let i = Z(`#ebe3d2`, 0.75);
    for (let r of [
        true,
        false
    ]){
        let a = Z(`#ffffff`, 0.7, 0, {
            map: Ac(r)
        });
        let o = new W(new xi(width, height, 15.9), [
            i,
            i,
            a,
            i,
            i,
            i
        ]);
        o.position.set(0, height / 2, (r ? 1 : -1) * 9.55);
        e.add(o);
    }
    e.add(Q(width, height - 2.4, 3.2, i));
    e.add(Q(width - 2, 0.6, depth - 2, Z(`#d9cfbb`, 0.8), 0, -0.6, 0));
    e.userData.part = {
        name: `Protoboard`,
        desc: `Los orificios de cada fila corta de cinco están conectados internamente.`
    };
    $(e, -width / 2 + 6, height, 0);
    return e;
}
function Mc(e = `#e8392e`, { height = 9 } = {}) {
    let n = new z;
    let r = Z(e, 0.22, 0, {
        emissive: e,
        emissiveIntensity: 0.05
    });
    let i = [
        [
            0,
            0
        ],
        [
            2.95,
            0
        ],
        [
            2.95,
            1.1
        ],
        [
            2.5,
            1.1
        ],
        [
            2.5,
            5.6
        ]
    ].map(([e, t])=>new I(e, t));
    for(let e = 1; e <= 12; e++){
        let t = e / 12 * (Math.PI / 2);
        i.push(new I(Math.cos(t) * 2.5, 5.6 + Math.sin(t) * 2.5));
    }
    let a = new W(new Ba(i, 48), r);
    a.position.y = height;
    n.add(a);
    let o = Z(`#d2cfc8`, 0.35, 0.6);
    for (let e of [
        -1.27,
        1.27
    ]){
        n.add(Q(0.55, height, 0.55, o, e, 0, 0));
    }
    let s = Dc(e, 26);
    s.position.y = height + 4.5;
    n.add(s);
    n.userData.light = {
        lens: r,
        glow: s
    };
    n.userData.part = {
        name: `LED de 5 mm`,
        desc: `Se ilumina cuando la corriente fluye desde el terminal largo (ánodo) al corto (cátodo).`
    };
    $(n, 0, height + 8.2, 0);
    return n;
}
const Nc = {
    black: `#2b2b2b`,
    brown: `#7a4a2a`,
    red: `#d0412f`,
    orange: `#e8892f`,
    yellow: `#efc540`,
    gold: `#c9a54a`
};
function Pc(e = [
    `red`,
    `red`,
    `brown`,
    `gold`
], t = 4 * Sc, { lift = 3.4, name = `220 Ω resistor` } = {}) {
    let i = new z;
    let a = Z(`#e6cfa4`, 0.55);
    let o = [];
    let s = 6.4;
    let c = [
        [
            0,
            -6.4 / 2 - 0.4
        ],
        [
            0.75,
            -6.4 / 2 - 0.35
        ],
        [
            1.25,
            -6.4 / 2
        ],
        [
            1.3,
            -2.1
        ],
        [
            1.08,
            -6.4 / 2 + 1.7
        ],
        [
            1.08,
            s / 2 - 1.7
        ],
        [
            1.3,
            s / 2 - 1.1
        ],
        [
            1.25,
            s / 2
        ],
        [
            0.75,
            3.5500000000000003
        ],
        [
            0,
            3.6
        ]
    ];
    for (let [e, t] of c){
        o.push(new I(e, t));
    }
    let l = new W(new Ba(o, 32), a);
    l.rotation.z = Math.PI / 2;
    l.position.y = lift;
    i.add(l);
    let u = [
        -2,
        -1,
        0,
        1.9
    ];
    e.forEach((e, t)=>{
        let r = Math.abs(u[t]) > 1.6 ? 1.33 : 1.12;
        let a = new W(new G(r, r, 0.5, 32, 1, true), Z(Nc[e], 0.5));
        a.rotation.z = Math.PI / 2;
        a.position.set(u[t], lift, 0);
        i.add(a);
    });
    let d = Z(`#d4d0c8`, 0.3, 0.65);
    for (let e of [
        -1,
        1
    ]){
        let r = new Qi;
        let a = new L(e * s / 2, lift, 0);
        let o = new L(e * t / 2 - e * 0.6, lift, 0);
        let c = new L(e * t / 2, lift - 0.6, 0);
        let l = new L(e * t / 2, -0.5, 0);
        r.add(new qi(a, o));
        r.add(new Yi(o, new L(e * t / 2, lift, 0), c));
        r.add(new qi(c, l));
        i.add(new W(new Ga(r, 24, 0.3, 6, false), d));
    }
    i.userData.part = {
        name,
        desc: `Limita la corriente que circula por el circuito protegiendo los componentes.`
    };
    $(i, 0, lift + 1.3, 0);
    return i;
}
const Fc = (e)=>{
    e.userData.shared = true;
    return e;
};
const Ic = Fc(Z(`#24272f`, 0.5));
const Lc = Fc(Z(`#d9d4ca`, 0.3, 0.7));
function Rc(e, t, n, { arch = 14, lean = 0.18, leanB = lean, endA = true, endB = true } = {}) {
    let c = new z;
    let l = 8.5;
    let u = e.clone();
    let d = t.clone();
    if (endA) {
        u.y += l;
    }
    if (endB) {
        d.y += l;
    }
    let f = Math.max(u.y, d.y) + arch;
    let p = new L(u.x, f, u.z).lerp(d, lean);
    p.y = f;
    let m = new L(d.x, f, d.z).lerp(u, leanB);
    m.y = f;
    let h = new Gi(u, p, m, d);
    let g = new Ga(h, 96, 0.72, 8, false);
    let _ = new W(g, Z(n, 0.42));
    c.add(_);
    let ends = [];
    for (let [r, i] of [
        [
            endA,
            e
        ],
        [
            endB,
            t
        ]
    ]){
        let e = new z;
        e.position.copy(i);
        if (r) {
            e.add(Q(2.45, l, 2.45, Ic));
            e.add(Q(2.6, 1.6, 2.6, Z(n, 0.42), 0, 6.9, 0));
            e.add(Q(0.6, 1.2, 0.6, Lc, 0, -1, 0));
        }
        c.add(e);
        ends.push(e);
    }
    c.userData.wire = {
        tube: _,
        count: g.index.count,
        ends
    };
    c.userData.part = {
        name: `Jumper cable`,
        desc: `Carries a logic signal or power between two points.`
    };
    $(c, h.getPoint(0.5).x, h.getPoint(0.5).y, h.getPoint(0.5).z);
    return c;
}
function zc({ withLabel = true } = {}) {
    let t = new z;
    let n = Tc(900, 400, (t, n, r)=>{
        t.fillStyle = `#3a56a0`;
        t.fillRect(0, 0, n, r);
        t.strokeStyle = `rgba(255,255,255,0.85)`;
        t.fillStyle = `rgba(255,255,255,0.9)`;
        t.lineWidth = 5;
        t.beginPath();
        t.arc(190, 190, 172, 0, Math.PI * 2);
        t.arc(710, 190, 172, 0, Math.PI * 2);
        t.stroke();
        t.font = `700 40px "Barlow Semi Condensed", sans-serif`;
        t.textAlign = `center`;
        if (withLabel) {
            t.fillText(`HC-SR04`, 450, 70);
        }
        t.font = `700 30px "Barlow Semi Condensed", sans-serif`;
        t.fillText(`T`, 190, 385);
        t.fillText(`R`, 710, 385);
        t.font = `600 26px "Barlow Semi Condensed", sans-serif`;
        [
            `VCC`,
            `Trig`,
            `Echo`,
            `Gnd`
        ].forEach((e, n)=>t.fillText(e, 374 + n * 51, 370));
    });
    let r = Z(`#33509a`, 0.6);
    let i = new W(new xi(45, 1.6, 20), [
        r,
        r,
        Z(`#ffffff`, 0.6, 0, {
            map: n
        }),
        r,
        r,
        r
    ]);
    t.add(i);
    let a = Z(`#e2e1dc`, 0.3, 0.55);
    let o = Z(`#3b3e48`, 0.85);
    for (let e of [
        -13,
        13
    ]){
        let n = new W(new G(8, 8, 12, 48, 1, true), a);
        n.position.set(e, 6.8, 0);
        t.add(n);
        let r = new W(new Ha(6.2, 8, 48), a);
        r.rotation.x = -Math.PI / 2;
        r.position.set(e, 12.8, 0);
        t.add(r);
        let i = new W(new Si(6.2, 48), o);
        i.rotation.x = -Math.PI / 2;
        i.position.set(e, 12, 0);
        t.add(i);
        let s = new W(new G(6.2, 6.2, 0.8, 48, 1, true), a);
        s.position.set(e, 12.4, 0);
        t.add(s);
    }
    let s = Q(6, 2.6, 2.4, a, 0, 0.8, -5.5);
    t.add(s);
    t.add(Q(5, 1.2, 4, Z(`#262833`, 0.5), 0, 0.8, 3));
    t.add(Q(10.2, 2.5, 2.5, Z(`#2a2d3a`, 0.5), 0, -1.25, 11.2));
    for(let e = 0; e < 4; e++){
        let n = new W(new xi(0.64, 0.64, 8), Lc);
        n.position.set(-3.81 + e * Sc, 0, 14.2);
        t.add(n);
    }
    t.userData.part = {
        name: `HC-SR04 ultrasonic sensor`,
        desc: `Measures distance by timing the echo from a 40 kHz acoustic pulse.`
    };
    $(t, 0, 0.8, -10);
    t.userData.emitters = [
        new L(-13, 13, 0),
        new L(13, 13, 0)
    ];
    return t;
}
function Bc({ fan = false } = {}) {
    let t = new z;
    let n = 7.6;
    let r = Math.asin(n / 10);
    let i = new ea;
    i.absarc(0, 0, 10, -r, r, false);
    i.lineTo(-Math.cos(r) * 10, n);
    i.absarc(0, 0, 10, Math.PI - r, Math.PI + r, false);
    i.lineTo(Math.cos(r) * 10, -7.6);
    let a = Z(`#dbd8d1`, 0.32, 0.6);
    t.add(new W(new La(i, {
        depth: 22,
        bevelEnabled: false,
        curveSegments: 40
    }), a));
    let o = new W(new G(3.2, 3.2, 1.6, 32), a);
    o.rotation.x = Math.PI / 2;
    o.position.z = -0.8;
    t.add(o);
    let s = new W(new G(1, 1, 8, 20), Z(`#bfbdb8`, 0.25, 0.8));
    s.rotation.x = Math.PI / 2;
    s.position.z = -5.5;
    t.add(s);
    let c = new W(new La(i, {
        depth: 4,
        bevelEnabled: true,
        bevelSize: 0.5,
        bevelThickness: 0.6,
        bevelSegments: 2,
        curveSegments: 40
    }), Z(`#cfa66e`, 0.5));
    c.scale.set(0.92, 0.92, 1);
    c.position.z = 22;
    t.add(c);
    let l = Z(`#c47a3c`, 0.35, 0.6);
    for (let e of [
        -4.5,
        4.5
    ]){
        t.add(Q(1.6, 2.4, 3.2, l, e, 7.4, 25.5));
    }
    let u = new W(new G(2.4, 2.4, 1.2, 28), l);
    u.rotation.x = Math.PI / 2;
    u.position.z = 27.2;
    t.add(u);
    if (fan) {
        let e = new z;
        e.position.z = -9.2;
        let n = Z(`#f29a45`, 0.45);
        let r = new W(new G(3.2, 3.6, 4, 28), n);
        r.rotation.x = Math.PI / 2;
        e.add(r);
        let i = new ea;
        i.moveTo(0, -2.2);
        i.bezierCurveTo(9, -4.6, 20, -3.6, 21, 0);
        i.bezierCurveTo(20, 3.4, 9, 4.2, 0, 2.2);
        i.closePath();
        let a = new La(i, {
            depth: 0.9,
            bevelEnabled: false,
            curveSegments: 16
        });
        a.translate(0, 0, -0.45);
        for(let t = 0; t < 3; t++){
            let r = new W(a, n);
            let i = new z;
            r.rotation.x = 28 * Cc;
            i.rotation.z = (t * 120 + 15) * Cc;
            i.add(r);
            e.add(i);
        }
        t.add(e);
        t.userData.prop = e;
    }
    t.userData.part = {
        name: `DC motor`,
        desc: `Spins faster as the average voltage increases through PWM modulation.`
    };
    $(t, 0, n, 11);
    t.userData.terminals = [
        new L(-4.5, 9.8, 25.5),
        new L(4.5, 9.8, 25.5)
    ];
    return t;
}
function Vc() {
    let e = new z;
    let t = Bc({
        fan: true
    });
    t.rotation.y = Math.PI;
    t.position.set(0, 12.6, 0);
    e.add(t);
    let n = Z(`#d9b98b`, 0.7);
    e.add(Q(18, 3.2, 20, n, 0, 0, -13));
    for (let t of [
        -7.6,
        7.6
    ]){
        e.add(Q(2.6, 6.2, 16, n, t, 3.2, -13));
    }
    e.userData.part = t.userData.part;
    e.userData.prop = t.userData.prop;
    t.updateMatrix();
    e.userData.anchor = t.userData.anchor;
    e.userData.terminals = t.userData.terminals.map((e)=>e.clone().applyMatrix4(t.matrix));
    return e;
}
function Hc() {
    let e = new z;
    let t = Z(`#d4d0c8`, 0.3, 0.65);
    for (let n of [
        -2.54,
        0,
        Sc
    ]){
        e.add(Q(0.8, 5.2, 0.45, t, n, -0.4, 0));
    }
    let n = Z(`#262934`, 0.5);
    e.add(Q(10, 9, 4.4, n, 0, 4.6, 0.6));
    let r = new ea;
    r.moveTo(-5, 0);
    r.lineTo(5, 0);
    r.lineTo(5, 6.2);
    r.lineTo(-5, 6.2);
    r.closePath();
    let i = new $i;
    i.absarc(0, 3.2, 1.8, 0, Math.PI * 2, true);
    r.holes.push(i);
    let a = new W(new La(r, {
        depth: 1.3,
        bevelEnabled: false,
        curveSegments: 24
    }), Z(`#d9d6cf`, 0.3, 0.7));
    a.position.set(0, 13.6, -1.6);
    e.add(a);
    let o = Tc(256, 220, (e, t, n)=>{
        e.fillStyle = `#262934`;
        e.fillRect(0, 0, t, n);
        e.fillStyle = `rgba(220,220,230,0.6)`;
        e.font = `700 54px "Barlow Semi Condensed", sans-serif`;
        e.textAlign = `center`;
        e.fillText(`TIP120`, t / 2, n / 2 + 18);
    });
    let s = new W(new Va(10, 9), Z(`#ffffff`, 0.5, 0, {
        map: o
    }));
    s.position.set(0, 9.1, 2.81);
    e.add(s);
    e.userData.part = {
        name: `TIP120 transistor`,
        desc: `A small base current switches the motor’s heavier current.`
    };
    $(e, 0, 19.8, -1);
    return e;
}
function Uc() {
    let e = new z;
    let t = Z(`#2c3242`, 0.55);
    e.add(Q(11, 30, 1.6, t, 0, 4, 0));
    let n = Z(`#d9d4ca`, 0.3, 0.7);
    for(let t = 0; t < 4; t++){
        e.add(Q(0.64, 7, 0.64, n, -3.81 + t * Sc, -2.6, 0));
    }
    e.add(Q(10.2, 2.5, 2.5, Z(`#24272f`, 0.5), 0, 1.6, 0));
    let r = [
        `#e8392e`,
        `#f2c23a`,
        `#3fbf6a`
    ];
    let i = [];
    r.forEach((t, n)=>{
        let r = 28 - n * 8.4;
        let a = Z(t, 0.25, 0, {
            emissive: t,
            emissiveIntensity: 0.05
        });
        let o = new W(new Ua(2.6, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), a);
        o.rotation.x = Math.PI / 2;
        o.position.set(0, r, 0.8);
        e.add(o);
        let s = new W(new G(3, 3, 0.8, 32), Z(`#e9e4d8`, 0.5));
        s.rotation.x = Math.PI / 2;
        s.position.set(0, r, 1);
        e.add(s);
        let c = Dc(t, 22);
        c.position.set(0, r, 4);
        e.add(c);
        i.push({
            lens: a,
            glow: c
        });
    });
    e.userData.lights = i;
    e.userData.part = {
        name: `Traffic light module`,
        desc: `Three LEDs with built-in current-limiting resistors: red, yellow, and green.`
    };
    $(e, 0, 34, 0);
    return e;
}
function Wc() {
    let e = new z;
    let t = new z;
    t.scale.setScalar(0.72);
    e.add(t);
    let n = new z;
    let r = new ea;
    r.moveTo(-20, 3);
    r.lineTo(20, 3);
    r.quadraticCurveTo(21.5, 3, 21.5, 5);
    r.lineTo(21.2, 9);
    r.quadraticCurveTo(21, 10.2, 18.5, 10.6);
    r.lineTo(11.5, 11.2);
    r.lineTo(6.5, 17);
    r.quadraticCurveTo(5.8, 17.6, 4.6, 17.6);
    r.lineTo(-8.2, 17.6);
    r.quadraticCurveTo(-9.4, 17.6, -10, 16.9);
    r.lineTo(-14.6, 11.2);
    r.lineTo(-19.4, 10.6);
    r.quadraticCurveTo(-21.5, 10.2, -21.5, 8);
    r.lineTo(-21.5, 5);
    r.quadraticCurveTo(-21.5, 3, -20, 3);
    let i = Z(`#e3604b`, 0.45);
    let a = new W(new La(r, {
        depth: 16,
        bevelEnabled: true,
        bevelSize: 1,
        bevelThickness: 1.2,
        bevelSegments: 3,
        curveSegments: 12
    }), i);
    a.position.z = -8;
    n.add(a);
    let o = Z(`#f2ead7`, 0.35);
    let s = new ea;
    s.moveTo(-13.4, 11.6);
    s.lineTo(10.2, 11.6);
    s.lineTo(5.8, 16.4);
    s.lineTo(-9.4, 16.4);
    s.closePath();
    for (let e of [
        9.25,
        -9.25
    ]){
        let t = new W(new La(s, {
            depth: 0.3,
            bevelEnabled: false
        }), o);
        t.position.z = e - 0.15;
        n.add(t);
    }
    let c = Q(1.2, 5.2, 18.6, i, -1.2, 11.4, 0);
    n.add(c);
    let l = new W(new xi(0.4, 4.4, 13), o);
    l.position.set(8.9, 14.1, 0);
    l.rotation.z = 0.86;
    n.add(l);
    t.add(n);
    let u = Z(`#2a2d38`, 0.7);
    let d = Z(`#efe6d4`, 0.45);
    let f = [];
    for (let e of [
        -12.5,
        12.5
    ]){
        for (let n of [
            -8.6,
            8.6
        ]){
            let r = new z;
            let i = new W(new G(4.4, 4.4, 3.2, 28), u);
            i.rotation.x = Math.PI / 2;
            r.add(i);
            let a = new W(new G(2, 2, 3.4, 20), d);
            a.rotation.x = Math.PI / 2;
            r.add(a);
            r.position.set(e, 4.4, n);
            t.add(r);
            f.push(r);
        }
    }
    e.userData.wheels = f;
    e.userData.part = {
        name: `Toy car`,
        desc: `Mobile test object used to measure distance with the sensor.`
    };
    $(t, -2, 18.8, 0);
    e.userData.anchor = t.userData.anchor;
    return e;
}
function Gc(e, t, n, r) {
    let i = new ea;
    let a = Math.PI * 2 / e;
    for(let r = 0; r < e; r++){
        let e = r * a;
        [
            [
                e - a * 0.5,
                t
            ],
            [
                e - a * 0.26,
                t
            ],
            [
                e - a * 0.17,
                n
            ],
            [
                e + a * 0.17,
                n
            ],
            [
                e + a * 0.26,
                t
            ]
        ].forEach(([e, t], n)=>{
            let a = Math.cos(e) * t;
            let o = Math.sin(e) * t;
            if (r === 0 && n === 0) {
                i.moveTo(a, o);
            } else {
                i.lineTo(a, o);
            }
        });
    }
    i.closePath();
    let o = new $i;
    o.absarc(0, 0, r, 0, Math.PI * 2, true);
    i.holes.push(o);
    return i;
}
function Kc() {
    let e = new z;
    let t = Z(`#aeb3bb`, 0.45, 0.2);
    let n = (n, r, i, a, o, s, c)=>{
        let l = new La(Gc(n, r, i, a), {
            depth: 3.2,
            bevelEnabled: true,
            bevelSize: 0.35,
            bevelThickness: 0.35,
            bevelSegments: 1,
            curveSegments: 24
        });
        l.rotateX(-Math.PI / 2);
        let u = new W(l, t);
        u.position.set(o, 0, s);
        u.rotation.y = c;
        e.add(u);
        let d = new W(new Ha(a + 0.01, a + 2.4, 32), Z(`#959aa4`, 0.45, 0.2));
        d.rotation.x = -Math.PI / 2;
        d.position.set(o, 3.6, s);
        e.add(d);
    };
    n(10, 9.2, 12.2, 3.6, -8.5, -7, 0.1);
    n(9, 7.6, 10.4, 3, 11.6, 6.8, 0.33);
    return e;
}
const qc = {
    220: {
        bands: [
            `red`,
            `red`,
            `brown`,
            `gold`
        ],
        name: `220 Ω resistor`
    },
    1e3: {
        bands: [
            `brown`,
            `black`,
            `red`,
            `gold`
        ],
        name: `1 kΩ resistor`
    },
    1e4: {
        bands: [
            `brown`,
            `black`,
            `orange`,
            `gold`
        ],
        name: `10 kΩ resistor`
    }
};
function Jc(e, t = 4 * Sc, { lift } = {}) {
    let r = qc[e] ?? qc[220];
    return Pc(r.bands, t, {
        name: r.name,
        lift
    });
}
function Yc(e, t, n) {
    let r = new z;
    r.add(e);
    r.userData.part = t;
    r.userData.echo = n;
    r.userData.anchor = e.userData.anchor;
    r.userData.wheels = e.userData.wheels;
    return r;
}
function car() {
    let e = Wc();
    e.rotation.y = 90 * Cc;
    e.position.z = 21.5 * 0.72;
    return Yc(e, {
        name: `Toy car`,
        desc: `Its flat bumper sends back a clear echo.`
    }, {
        jitter: 0.4,
        miss: 0
    });
}
function box() {
    let e = new z;
    let t = Q(26, 21, 22, Z(`#cfa36c`, 0.85), 0, 0, 11);
    e.add(t);
    e.add(Q(26.4, 1.2, 10.6, Z(`#c39660`, 0.85), 0, 21, 5.6));
    e.add(Q(26.4, 1.2, 10.6, Z(`#c39660`, 0.85), 0, 21, 66 / 4 - 0.1));
    e.add(Q(5.5, 1.35, 22.2, Z(`#e7d8b4`, 0.6), 0, 21, 11));
    let n = Tc(256, 200, (e, t, n)=>{
        e.fillStyle = `#cfa36c`;
        e.fillRect(0, 0, t, n);
        e.strokeStyle = `#7a5530`;
        e.lineWidth = 7;
        e.strokeRect(40, 46, 176, 108);
        e.fillStyle = `#7a5530`;
        e.font = `700 40px "Barlow Semi Condensed", sans-serif`;
        e.textAlign = `center`;
        e.fillText(`THIS`, t / 2, 92);
        e.fillText(`SIDE UP`, t / 2, 136);
    });
    let r = new W(new Va(20.8, 14.7), Z(`#ffffff`, 0.85, 0, {
        map: n
    }));
    r.rotation.y = Math.PI;
    r.position.set(0, 21 / 2, -0.02);
    e.add(r);
    $(e, 0, 22.4, 11);
    return Yc(e, {
        name: `Cardboard box`,
        desc: `Flat and hard: a strong, steady echo.`
    }, {
        jitter: 0.2,
        miss: 0
    });
}
function ball() {
    let e = new z;
    let t = Tc(512, 256, (e, t, n)=>{
        let r = [
            `#e3604b`,
            `#f6efe1`,
            `#f0b53a`,
            `#f6efe1`,
            `#3d7be0`,
            `#f6efe1`
        ];
        r.forEach((i, a)=>{
            e.fillStyle = i;
            e.fillRect(a * t / r.length, 0, t / r.length + 1, n);
        });
        e.fillStyle = `#f6efe1`;
        e.fillRect(0, 0, t, 18);
        e.fillRect(0, n - 18, t, 18);
    });
    let n = new W(new Ua(11, 48, 24), Z(`#ffffff`, 0.35, 0, {
        map: t
    }));
    n.position.set(0, 11, 11);
    n.rotation.set(0.5, 0.3, 0.2);
    e.add(n);
    $(e, 0, 22.5, 11);
    return Yc(e, {
        name: `Beach ball`,
        desc: `Round surfaces scatter the sound, so readings wobble.`
    }, {
        jitter: 2.6,
        miss: 0.08
    });
}
function wall() {
    let e = new z;
    let t = Z(`#ffffff`, 0.85, 0, {
        map: Tc(460, 300, (e, t, n)=>{
            e.fillStyle = `#e8dcc4`;
            e.fillRect(0, 0, t, n);
            for(let r = 0; r * 37 < n; r++){
                let n = r % 2 ? -38 : 0;
                for(let i = n; i < t; i += 76){
                    e.fillStyle = (r * 7 + Math.round(i / 76) * 3) % 5 == 0 ? `#c56a4f` : `#d27a5c`;
                    e.fillRect(i + 3, r * 37 + 3, 70, 31);
                }
            }
        })
    });
    let n = Z(`#c97254`, 0.85);
    let r = new W(new xi(46, 30, 6), [
        n,
        n,
        Z(`#d9c9ad`, 0.85),
        n,
        t,
        t
    ]);
    r.position.set(0, 15, 3);
    e.add(r);
    $(e, 0, 30.5, 3);
    return Yc(e, {
        name: `Brick wall`,
        desc: `A big flat surface: the cleanest echo of all.`
    }, {
        jitter: 0,
        miss: 0
    });
}
const el = {
    car,
    box,
    ball,
    wall
};
function tl(e = `car`) {
    return (el[e] ?? car)();
}
function nl(e = `#e3604b`) {
    let t = new z;
    let n = Z(`#d4d0c8`, 0.3, 0.65);
    for (let e of [
        -2.54,
        2.54
    ]){
        for (let r of [
            -3.81,
            3.81
        ]){
            t.add(Q(0.7, 3.2, 0.5, n, e, -0.6, r));
        }
    }
    t.add(Q(12, 3.6, 12, Z(`#2a2d3a`, 0.5), 0, 2.4, 0));
    t.add(Q(12.4, 0.5, 12.4, Z(`#d9d6cf`, 0.32, 0.6), 0, 6, 0));
    for (let e of [
        -4.6,
        4.6
    ]){
        for (let n of [
            -4.6,
            4.6
        ]){
            let r = new W(new G(0.7, 0.7, 0.3, 14), Z(`#1d1f29`, 0.6));
            r.position.set(e, 6.6, n);
            t.add(r);
        }
    }
    let r = new z;
    let i = new W(new Ba([
        [
            0,
            0
        ],
        [
            4.6,
            0
        ],
        [
            4.6,
            2.6
        ],
        [
            4.2,
            3.3
        ],
        [
            3.2,
            3.6
        ],
        [
            0,
            3.7
        ]
    ].map(([e, t])=>new I(e, t)), 40), Z(e, 0.4));
    r.add(i);
    r.position.y = 6.4;
    t.add(r);
    t.userData.cap = r;
    t.userData.capY = r.position.y;
    t.userData.part = {
        name: `Push button`,
        desc: `Hold it down: both contacts connect while it remains pressed.`
    };
    $(t, 0, 10.4, 0);
    return t;
}
function rl() {
    let e = new z;
    let t = Z(`#d4d0c8`, 0.3, 0.65);
    for (let n of [
        -2.54,
        0,
        Sc
    ]){
        e.add(Q(0.7, 3.4, 0.5, t, n, -0.6, 0));
    }
    e.add(Q(10.5, 6.5, 10, Z(`#3b62b3`, 0.5), 0, 2.4, -1.5));
    let n = new W(new G(4.6, 4.6, 1.2, 32), Z(`#d9d6cf`, 0.32, 0.6));
    n.position.set(0, 9.5, -1.5);
    e.add(n);
    let r = new z;
    r.position.set(0, 10.1, -1.5);
    let i = new W(new G(6.1, 6.4, 7, 24), Z(`#2c3242`, 0.45, 0, {
        flatShading: true
    }));
    i.position.y = 3.5;
    r.add(i);
    let a = new W(new G(5.4, 6.2, 0.9, 32), Z(`#353b4d`, 0.4));
    a.position.y = 7.4;
    r.add(a);
    let o = Q(1.1, 0.4, 4.4, Z(`#f4efe3`, 0.4), 0, 7.85, 2.6);
    r.add(o);
    e.add(r);
    e.userData.knob = r;
    e.userData.part = {
        name: `10 kΩ potentiometer`,
        desc: `Turn the knob: the center terminal sweeps smoothly from 0 V to 5 V.`
    };
    $(e, 0, 18.6, -1.5);
    return e;
}
function il() {
    let e = new z;
    let t = Z(`#d4d0c8`, 0.3, 0.65);
    for (let n of [
        -3.81,
        3.81
    ]){
        e.add(Q(0.6, 2.4, 0.6, t, n, -0.4, 0));
    }
    let n = new W(new G(6, 6, 9.5, 48), Z(`#25272f`, 0.45));
    n.position.y = 6.55;
    e.add(n);
    let r = new W(new Wa(5.8, 0.25, 8, 48), Z(`#2f323c`, 0.4));
    r.rotation.x = Math.PI / 2;
    r.position.y = 11.3;
    e.add(r);
    let i = new W(new Si(1.2, 24), Z(`#0d0f17`, 0.9));
    i.rotation.x = -Math.PI / 2;
    i.position.y = 11.32;
    e.add(i);
    let a = Q(0.35, 0.05, 1.6, Z(`#e9e4d8`, 0.5), -3.3, 11.3, 0);
    e.add(a, Q(1.6, 0.05, 0.35, Z(`#e9e4d8`, 0.5), -3.3, 11.3, 0));
    e.add(Q(12.6, 1.8, 12.6, Z(`#1f2128`, 0.55), 0, 0, 0));
    e.userData.top = new L(0, 11.5, 0);
    e.userData.part = {
        name: `Piezo buzzer`,
        desc: `Ceramic disc that vibrates when the pin toggles, generating the audible sound wave.`
    };
    $(e, 0, 11.6, 0);
    return e;
}
function al() {
    let e = new z;
    let t = Z(`#3f67c4`, 0.4);
    e.add(Q(22.8, 22.7, 12.2, t, 0, 0, 0));
    e.add(Q(32.4, 2.5, 12.2, t, 0, 15.6, 0));
    let n = new W(new G(6.1, 6.1, 4.2, 32), t);
    n.position.set(5.6, 24.8, 0);
    e.add(n);
    let r = new W(new G(3.2, 3.2, 4.2, 24), t);
    r.position.set(-1.4, 24.8, 0);
    e.add(r);
    let i = Tc(400, 300, (e, t, n)=>{
        e.fillStyle = `#3f67c4`;
        e.fillRect(0, 0, t, n);
        e.fillStyle = `#f4efe3`;
        e.font = `800 92px "Barlow Semi Condensed", sans-serif`;
        e.textAlign = `center`;
        e.fillText(`SG90`, t / 2, 150);
        e.font = `600 40px "Barlow Semi Condensed", sans-serif`;
        e.fillText(`MICRO SERVO 9g`, t / 2, 210);
    });
    let a = new W(new Va(20, 13), Z(`#ffffff`, 0.45, 0, {
        map: i
    }));
    a.position.set(0, 7.5, 6.11);
    e.add(a);
    let o = new z;
    o.position.set(5.6, 26.9, 0);
    let s = new ea;
    s.moveTo(-3.6, 0);
    s.absarc(0, 0, 3.6, Math.PI, 0, false);
    s.lineTo(1.6, 17);
    s.absarc(0, 17, 1.6, 0, Math.PI, false);
    s.closePath();
    for(let e = 0; e < 4; e++){
        let t = new $i;
        t.absarc(0, 5 + e * 3.6, 0.55, 0, Math.PI * 2, true);
        s.holes.push(t);
    }
    let c = new La(s, {
        depth: 1.6,
        bevelEnabled: false,
        curveSegments: 20
    });
    c.rotateX(-Math.PI / 2);
    let l = new W(c, Z(`#f4efe3`, 0.45));
    o.add(l);
    let u = new W(new G(1.2, 1.2, 0.6, 16), Z(`#bfbdb8`, 0.3, 0.7));
    u.position.y = 1.9;
    o.add(u);
    e.add(o);
    e.userData.horn = o;
    e.userData.cable = new L(-11.4, 3.4, 0);
    e.userData.part = {
        name: `SG90 servomotor`,
        desc: `Closed-loop gearbox motor: tell it an angle and it will hold it firmly.`
    };
    $(e, 5.6, 29, 0);
    return e;
}
const ol = {
    red: `#e8392e`,
    yellow: `#f2c23a`,
    green: `#3fbf6a`,
    blue: `#3d7be0`,
    white: `#f2efe6`
};
const sl = {
    red: 2,
    yellow: 2.1,
    green: 2.2,
    blue: 3,
    white: 3.1
};
function cl(e, t) {
    let light = e.userData.light;
    if (light) {
        light.lens.color.set(t);
        light.lens.emissive.set(t);
        light.glow.material.color.set(t);
    }
}
function ll({ height = 9 } = {}) {
    let t = new z;
    let n = Z(`#f4f0e8`, 0.5, 0, {
        emissive: `#000000`,
        emissiveIntensity: 0.05
    });
    let r = [
        [
            0,
            0
        ],
        [
            2.95,
            0
        ],
        [
            2.95,
            1.1
        ],
        [
            2.5,
            1.1
        ],
        [
            2.5,
            5.6
        ]
    ].map(([e, t])=>new I(e, t));
    for(let e = 1; e <= 12; e++){
        let t = e / 12 * (Math.PI / 2);
        r.push(new I(Math.cos(t) * 2.5, 5.6 + Math.sin(t) * 2.5));
    }
    let i = new W(new Ba(r, 48), n);
    i.position.y = height;
    t.add(i);
    let a = Z(`#d2cfc8`, 0.35, 0.6);
    [
        -1.5,
        -0.5,
        0.5,
        1.5
    ].forEach((n)=>{
        let r = n * Sc;
        let i = new L(n * 0.9, height, 0);
        let o = new L(r, height - 3, 0);
        let s = new L(r, 0, 0);
        let c = new Qi;
        c.add(new qi(i, o));
        c.add(new qi(o, s));
        t.add(new W(new Ga(c, 8, 0.28, 6, false), a));
    });
    let o = Dc(`#ffffff`, 28);
    o.position.y = height + 4.5;
    t.add(o);
    t.userData.light = {
        lens: n,
        glow: o,
        gain: 0.7,
        base: n.color.clone(),
        hue: new B(`#ffffff`)
    };
    t.userData.part = {
        name: `RGB LED`,
        desc: `Three emitters (red, green, and blue) under a single diffuser lens, sharing the common cathode to ground.`
    };
    $(t, 0, height + 8.2, 0);
    return t;
}
function ul(e, t, n, r) {
    let light = e.userData.light;
    if (!light) {
        return;
    }
    let a = Math.max(t, n, r, 1);
    let o = new B().setRGB(t / a, n / a, r / a, Ue);
    light.lens.emissive.copy(o);
    light.glow.material.color.copy(o);
    light.hue.copy(o);
}
function dl() {
    let e = new z;
    let t = Z(`#d4d0c8`, 0.3, 0.65);
    for (let n of [
        -1.27,
        1.27
    ]){
        e.add(Q(0.5, 5, 0.5, t, n, 0, 0));
    }
    let n = Tc(256, 256, (e, t, n)=>{
        e.fillStyle = `#d9a35e`;
        e.fillRect(0, 0, t, n);
        e.fillStyle = `#e8e4dc`;
        e.fillRect(0, 0, t, 40);
        e.fillRect(0, n - 40, t, 40);
        e.strokeStyle = `#8a3f22`;
        e.lineWidth = 15;
        e.lineJoin = `round`;
        e.beginPath();
        for(let r = 0; r <= 7; r++){
            let i = 28 + r * (t - 56) / 7;
            e.lineTo(i, r % 2 ? n - 52 : 52);
        }
        e.stroke();
    });
    let r = new W(new G(2.6, 2.6, 1.8, 32), [
        Z(`#c98d4f`, 0.5),
        Z(`#ffffff`, 0.45, 0, {
            map: n
        }),
        Z(`#b97f45`, 0.5)
    ]);
    r.position.y = 5.9;
    e.add(r);
    let i = new W(new G(2.7, 2.7, 0.3, 32), Z(`#f6e7c8`, 0.15, 0, {
        transparent: true,
        opacity: 0.35
    }));
    i.position.y = 6.95;
    e.add(i);
    e.userData.part = {
        name: `Light sensor (LDR)`,
        desc: `Its resistance drops with light: ≈ 1 MΩ in darkness and ≈ 10 kΩ in daylight.`
    };
    $(e, 0, 7.4, 0);
    return e;
}
let fl;
function pl(e, t, n, r) {
    let i = new L().subVectors(t, e);
    let a = new W(new G(n, n, i.length(), 14), r);
    a.position.copy(e).addScaledVector(i, 0.5);
    a.quaternion.setFromUnitVectors(new L(0, 1, 0), i.normalize());
    return a;
}
function ml() {
    let e = new z;
    let t = Z(`#e3604b`, 0.42);
    let n = Z(`#cfcac0`, 0.3, 0.6);
    let r = new W(new G(7, 7.8, 2.4, 40), Z(`#2f3d5c`, 0.5));
    r.position.y = 1.2;
    e.add(r);
    e.add(Q(2.6, 1, 1.6, Z(`#d9d6cf`, 0.4), 3.6, 2.4, 3.2));
    let i = new L(0, 19, 5.5);
    let neck = new L(0, 30, -1.5);
    e.add(pl(new L(0, 2.4, 2), i, 0.85, n));
    e.add(pl(i, neck, 0.85, n));
    for (let n of [
        i,
        neck
    ]){
        let r = new W(new Ua(1.5, 16, 12), t);
        r.position.copy(n);
        e.add(r);
    }
    let head = new z;
    head.position.copy(neck);
    let s = new W(new G(2.4, 6.4, 7.5, 40, 1, true), Z(`#e3604b`, 0.42, 0, {
        side: 2
    }));
    s.position.y = -3.75;
    head.add(s);
    let c = new W(new G(2.4, 2.4, 1.2, 24), t);
    c.position.y = 0.4;
    head.add(c);
    let bulb = Z(`#fff6dc`, 0.3, 0, {
        emissive: `#ffe7a3`,
        emissiveIntensity: 0.1
    });
    let u = new W(new Ua(2.3, 20, 14), bulb);
    u.position.y = -4.8;
    head.add(u);
    let d = new G(2.2, 9, 1, 40, 1, true);
    d.translate(0, -0.5, 0);
    let beam = new W(d, new to({
        transparent: true,
        depthWrite: false,
        side: 2,
        uniforms: {
            color: {
                value: new B(`#ffc53d`)
            },
            opacity: {
                value: 0.5
            }
        },
        vertexShader: `
        varying float vAlong;
        varying float vFacing;
        void main() {
          vAlong = uv.y;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vec3 n = normalize(normalMatrix * normal);
          vFacing = abs(dot(n, normalize(-mv.xyz)));
          gl_Position = projectionMatrix * mv;
        }
      `,
        fragmentShader: `
        uniform vec3 color;
        uniform float opacity;
        varying float vAlong;
        varying float vFacing;
        void main() {
          float a = opacity * mix(0.25, 1.0, vAlong) * pow(vFacing, 1.4);
          gl_FragColor = vec4(color, a);
          #include <colorspace_fragment>
        }
      `
    }));
    beam.position.y = -4.8;
    beam.layers.set(1);
    beam.renderOrder = 2;
    head.add(beam);
    e.add(head);
    fl ??= Tc(128, 128, (e)=>{
        let t = e.createRadialGradient(64, 64, 4, 64, 64, 63);
        t.addColorStop(0, `rgba(255, 200, 70, 1)`);
        t.addColorStop(0.45, `rgba(255, 196, 70, 0.6)`);
        t.addColorStop(1, `rgba(255, 190, 60, 0)`);
        e.fillStyle = t;
        e.fillRect(0, 0, 128, 128);
    });
    fl.userData.shared = true;
    let pool = new W(new Si(1, 40), new Hr({
        map: fl,
        transparent: true,
        depthWrite: false,
        opacity: 0.9
    }));
    pool.rotation.x = -Math.PI / 2;
    pool.layers.set(1);
    pool.renderOrder = 1;
    e.add(pool);
    e.userData.lamp = {
        head,
        bulb,
        beam,
        pool,
        neck
    };
    e.userData.part = {
        name: `Table lamp`,
        desc: `Shines on the photoresistor. Drag it closer or farther to vary the light.`
    };
    $(e, 0, 33, 0);
    return e;
}
function hl(e, t, { on = true, level = 1, floorY = 0 } = {}) {
    let lamp = e.userData.lamp;
    if (!lamp) {
        return;
    }
    let o = new L(e.position.x, e.userData.baseY ?? e.position.y, e.position.z);
    let s = new ht().setFromEuler(e.rotation).invert();
    let c = (e)=>e.clone().sub(o).applyQuaternion(s);
    let l = c(t).sub(lamp.neck);
    let u = l.length();
    lamp.head.quaternion.setFromUnitVectors(new L(0, -1, 0), l.normalize());
    lamp.beam.scale.set(1, Math.max(1, u - 4.8), 1);
    lamp.beam.visible = on;
    lamp.beam.material.uniforms.opacity.value = 0.22 + 0.45 * level;
    lamp.bulb.emissiveIntensity = on ? 1.5 : 0.05;
    lamp.pool.visible = on;
    lamp.pool.position.copy(c(t.clone().setY(floorY + 0.06)));
    let d = 8 + u * 0.16;
    lamp.pool.scale.set(d, d, 1);
    lamp.pool.material.opacity = 0.35 + 0.65 * level;
}
export { st as $, clone as $n, xe as $t, bs as A, Ke as An, Vo as At, B, x as Bn, ee as Bt, cl as C, ot as Cn, ro as Ct, zc as D, Ne as Dn, i as Dt, Hc as E, Fe as En, a as Et, Qn as F, Nt as Fn, ut as Ft, Rt as G, v as Gn, De as Gt, Yo as H, b as Hn, Ce as Ht, dr as I, $n as In, Pe as It, T as J, L as Jn, ge as Jt, Lt as K, f as Kn, Oe as Kt, u as L, er as Ln, Me as Lt, Xo as M, to as Mn, Va as Mt, Fn as N, Ka as Nn, Uo as Nt, xc as O, me as On, fn as Ot, xi as P, d as Pn, de as Pt, Jt as Q, mn as Qn, be as Qt, _i as R, Qa as Rn, pe as Rt, al as S, e as Sn, ao as St, Uc as T, fe as Tn, r as Tt, yi as U, m as Un, we as Ut, Ct as V, y as Vn, Ee as Vt, gi as W, _ as Wn, Te as Wt, vi as X, Xe as Xn, ve as Xt, E as Y, Pt as Yn, _e as Yt, Ko as Z, It as Zn, ye as Zt, rl as _, A as _n, R as _t, jc as a, j as an, nt as ar, z as at, Jc as b, D as bn, wc as c, C as cn, M as cr, di as ct, Rc as d, ce as dn, minFilter as dt, Se as en, et as er, bi as et, dl as f, le as fn, c as ft, tl as g, k as gn, vt as gt, Vc as h, te as hn, Ge as ht, hl as i, oe as in, Za as ir, Ye as it, S as j, bn as jn, vr as jt, Ps as k, Ue as kn, Wo as kt, Kc as l, Ae as ln, it as lr, p as lt, Bc as m, ie as mn, workingColorSpace as mt, sl as n, ue as nn, N as nr, h as nt, il as o, ne as on, merge as or, g as ot, Mc as p, ae as pn, s as pt, ni as q, I as qn, he as qt, Sc as r, se as rn, fs as rr, hi as rt, ml as s, re as sn, at as sr, ko as st, ol as t, ke as tn, $e as tr, H as tt, kc as u, je as un, Yt as ut, nl as v, no as vn, W as vt, ul as w, Ha as wn, n as wt, ll as x, O as xn, Pc as y, ls as yn, Hr as yt, t as z, l as zn, w as zt };
