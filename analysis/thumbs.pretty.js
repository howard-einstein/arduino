npm notice run npx
npm notice run 'prettier' --parser babel --print-width 120 --tab-width 2 /tmp/arduino_clone/assets/thumbs-gagaX1E4.js
import {
  A as e,
  D as t,
  Jn as n,
  Mt as r,
  N as i,
  O as a,
  R as o,
  S as s,
  Z as c,
  Zn as l,
  _ as u,
  c as d,
  jn as f,
  kt as p,
  l as m,
  m as h,
  o as g,
  p as _,
  s as v,
  st as y,
  v as b,
  vt as x,
  w as S,
  x as C,
  yt as w,
} from "./kit-Ce41oYCW.js";
var T = Math.PI / 180;
function E(e, t, n = 0.35) {
  let i = document.createElement(`canvas`);
  i.width = i.height = 128;
  let a = i.getContext(`2d`),
    s = a.createRadialGradient(64, 64, 6, 64, 64, 62);
  s.addColorStop(0, `rgba(110, 80, 45, ${n})`),
    s.addColorStop(1, `rgba(110, 80, 45, 0)`),
    (a.fillStyle = s),
    a.fillRect(0, 0, 128, 128);
  let c = new o(i),
    l = new x(new r(e, t), new w({ map: c, transparent: !0, depthWrite: !1 }));
  return (l.rotation.x = -Math.PI / 2), l.layers.set(1), (l.renderOrder = -1), l;
}
function D() {
  return { group: _(`#e8392e`), az: 20, el: 16, pad: 1.12, shadow: [9, 5, 0] };
}
function O() {
  let e = t({ withLabel: !1 });
  return (
    (e.rotation.x = 68 * T), (e.rotation.z = -8 * T), { group: e, az: -30, el: 20, pad: 1.1, shadow: [52, 22, -4] }
  );
}
function k() {
  let e = h();
  return (e.rotation.y = 146 * T), (e.position.y = 10), { group: e, az: 20, el: 24, pad: 1.1, shadow: [30, 16, 2] };
}
function A() {
  return { group: m(), az: 18, el: 58, pad: 1.16, shadow: [0, 0, 0] };
}
function j() {
  return { group: b(), az: 24, el: 34, pad: 1.14, shadow: [20, 14, 0] };
}
function M() {
  let e = u();
  return (e.userData.knob.rotation.y = -40 * T), { group: e, az: 22, el: 26, pad: 1.12, shadow: [18, 13, -1.5] };
}
function N() {
  return { group: g(), az: 20, el: 30, pad: 1.14, shadow: [18, 14, 0] };
}
function P() {
  let e = s();
  return (e.userData.horn.rotation.y = 50 * T), { group: e, az: 28, el: 22, pad: 1.1, shadow: [44, 20, 0] };
}
function F() {
  let e = C();
  S(e, 170, 0, 255);
  let { lens: t, base: n, hue: r } = e.userData.light;
  return (
    t.color.copy(n).lerp(r, 0.85),
    (t.emissiveIntensity = 0.6),
    { group: e, az: 20, el: 16, pad: 1.12, shadow: [10, 6, 0] }
  );
}
function I() {
  let e = v(),
    { head: t, bulb: n, beam: r, pool: i } = e.userData.lamp;
  return (
    (t.rotation.x = -0.8),
    (n.emissiveIntensity = 1.4),
    (r.visible = !1),
    (i.visible = !1),
    { group: e, az: -50, el: 18, pad: 1.1, shadow: [18, 16, 0] }
  );
}
function L(e) {
  let t = [];
  e.traverse((e) => {
    t.push([e, e.userData]), (e.userData = {});
  });
  let n = e.clone();
  for (let [e, n] of t) e.userData = n;
  return n;
}
function R({ renderer: e, board: t }) {
  return { group: t ? L(t) : a(e).root, keep: !!t, az: -32, el: 36, pad: 1.1, shadow: [86, 70, 0] };
}
var z = { board: R, led: D, button: j, pot: M, rgb: F, lamp: I, sensor: O, buzzer: N, motor: k, servo: P, gears: A };
function B(e, t, r, a, o, s) {
  e.position.set(
    Math.sin(r * T) * Math.cos(a * T) * 300,
    Math.sin(a * T) * 300,
    Math.cos(r * T) * Math.cos(a * T) * 300,
  ),
    e.lookAt(0, 0, 0),
    e.updateMatrixWorld();
  let c = e.matrixWorldInverse,
    l = new i(),
    u = new n();
  t.updateMatrixWorld(!0),
    t.traverse((e) => {
      if (!e.isMesh || e.layers.mask !== 1) return;
      let t = e.geometry.attributes.position;
      for (let n = 0; n < t.count; n += 1)
        u.fromBufferAttribute(t, n).applyMatrix4(e.matrixWorld).applyMatrix4(c), l.expandByPoint(u);
    });
  let d = (l.min.x + l.max.x) / 2,
    f = (l.min.y + l.max.y) / 2,
    p = (l.max.x - l.min.x) * s,
    m = (l.max.y - l.min.y) * s;
  p / m > o ? (m = p / o) : (p = m * o),
    (e.left = d - p / 2),
    (e.right = d + p / 2),
    (e.top = f + m / 2),
    (e.bottom = f - m / 2),
    (e.near = 1),
    (e.far = 800),
    e.updateProjectionMatrix();
}
async function V(t, { renderer: n, environment: r, board: a, onEach: o } = {}) {
  let s = new e(n, { lineColor: `#141a2c`, thickness: 1 }),
    u = document.createElement(`canvas`),
    m = u.getContext(`2d`),
    h = [...t].filter((e) => z[e.dataset.thumb]),
    g = 0,
    _ = [];
  for (let e of h) {
    let t = e.clientWidth || 100,
      v = e.clientHeight || 84,
      b = Math.round(t * 3),
      x = Math.round(v * 3),
      S = new f();
    (S.environment = r), (S.environmentIntensity = 0.4), S.add(new y(`#fffaf3`, `#c2ae90`, 0.5));
    let C = new c(`#fff6ea`, 1.2);
    C.position.set(-55, 100, 62), S.add(C);
    let w = new c(`#ffffff`, 0.001);
    (w.castShadow = !0), S.add(w);
    let T = z[e.dataset.thumb]({ renderer: n, board: a });
    S.add(T.group);
    let D = new p();
    if ((B(D, T.group, T.az, T.el, t / v, T.pad), T.shadow[0])) {
      let e = new i().setFromObject(T.group),
        t = E(T.shadow[0], T.shadow[1]);
      t.position.set(0, e.min.y - 0.2, T.shadow[2]), S.add(t);
    }
    let O = new l(b, x);
    s.setSize(t, v, 3);
    let k = n.shadowMap.needsUpdate;
    s.render(S, D, O), (n.shadowMap.needsUpdate = k);
    let A = new Uint8Array(b * x * 4);
    n.readRenderTargetPixels(O, 0, 0, b, x, A), O.dispose(), w.dispose(), T.keep && S.remove(T.group), d(S);
    let j = m.createImageData(b, x),
      M = b * 4;
    for (let e = 0; e < x; e++) j.data.set(A.subarray((x - 1 - e) * M, (x - e) * M), e * M);
    (u.width = b), (u.height = x), m.putImageData(j, 0, 0);
    let N = await new Promise((e) => u.toBlob(e, `image/png`));
    N &&
      (URL.revokeObjectURL(e.dataset.url ?? ``),
      (e.dataset.url = URL.createObjectURL(N)),
      (e.src = e.dataset.url),
      _.push(
        e
          .decode()
          .catch(() => {})
          .then(() => e.classList.add(`is-ready`)),
      )),
      o?.(++g, h.length),
      await new Promise((e) => setTimeout(e, 0));
  }
  s.dispose(), await Promise.all(_);
}
export { V as renderThumbnails };
