import { A, D, Jn, Mt, N as N_1, O, R, S, Z, Zn, _, c, jn, kt, l, m, o, p, s, st, v, vt, w, x, yt } from "./kit-Ce41oYCW.js";
const T = Math.PI / 180;
function E(e, t, n = 0.35) {
    let i = document.createElement(`canvas`);
    i.width = i.height = 128;
    let a = i.getContext(`2d`);
    let s = a.createRadialGradient(64, 64, 6, 64, 64, 62);
    s.addColorStop(0, `rgba(110, 80, 45, ${n})`);
    s.addColorStop(1, `rgba(110, 80, 45, 0)`);
    a.fillStyle = s;
    a.fillRect(0, 0, 128, 128);
    let map = new R(i);
    let l = new vt(new Mt(e, t), new yt({
        map,
        transparent: true,
        depthWrite: false
    }));
    l.rotation.x = -Math.PI / 2;
    l.layers.set(1);
    l.renderOrder = -1;
    return l;
}
function led() {
    return {
        group: p(`#e8392e`),
        az: 20,
        el: 16,
        pad: 1.12,
        shadow: [
            9,
            5,
            0
        ]
    };
}
function sensor() {
    let e = D({
        withLabel: false
    });
    e.rotation.x = 68 * T;
    e.rotation.z = -8 * T;
    return {
        group: e,
        az: -30,
        el: 20,
        pad: 1.1,
        shadow: [
            52,
            22,
            -4
        ]
    };
}
function motor() {
    let e = m();
    e.rotation.y = 146 * T;
    e.position.y = 10;
    return {
        group: e,
        az: 20,
        el: 24,
        pad: 1.1,
        shadow: [
            30,
            16,
            2
        ]
    };
}
function gears() {
    return {
        group: l(),
        az: 18,
        el: 58,
        pad: 1.16,
        shadow: [
            0,
            0,
            0
        ]
    };
}
function button() {
    return {
        group: v(),
        az: 24,
        el: 34,
        pad: 1.14,
        shadow: [
            20,
            14,
            0
        ]
    };
}
function pot() {
    let e = _();
    e.userData.knob.rotation.y = -40 * T;
    return {
        group: e,
        az: 22,
        el: 26,
        pad: 1.12,
        shadow: [
            18,
            13,
            -1.5
        ]
    };
}
function buzzer() {
    return {
        group: o(),
        az: 20,
        el: 30,
        pad: 1.14,
        shadow: [
            18,
            14,
            0
        ]
    };
}
function servo() {
    let e = S();
    e.userData.horn.rotation.y = 50 * T;
    return {
        group: e,
        az: 28,
        el: 22,
        pad: 1.1,
        shadow: [
            44,
            20,
            0
        ]
    };
}
function rgb() {
    let e = x();
    w(e, 170, 0, 255);
    let { lens, base, hue } = e.userData.light;
    lens.color.copy(base).lerp(hue, 0.85);
    lens.emissiveIntensity = 0.6;
    return {
        group: e,
        az: 20,
        el: 16,
        pad: 1.12,
        shadow: [
            10,
            6,
            0
        ]
    };
}
function lamp() {
    let e = s();
    let { head, bulb, beam, pool } = e.userData.lamp;
    head.rotation.x = -0.8;
    bulb.emissiveIntensity = 1.4;
    beam.visible = false;
    pool.visible = false;
    return {
        group: e,
        az: -50,
        el: 18,
        pad: 1.1,
        shadow: [
            18,
            16,
            0
        ]
    };
}
function L(board) {
    let t = [];
    board.traverse((e)=>{
        t.push([
            e,
            e.userData
        ]);
        e.userData = {};
    });
    let n = board.clone();
    for (let [e, n] of t){
        e.userData = n;
    }
    return n;
}
function board({ renderer, board }) {
    return {
        group: board ? L(board) : O(renderer).root,
        keep: !!board,
        az: -32,
        el: 36,
        pad: 1.1,
        shadow: [
            86,
            70,
            0
        ]
    };
}
const z = {
    board,
    led,
    button,
    pot,
    rgb,
    lamp,
    sensor,
    buzzer,
    motor,
    servo,
    gears
};
function B(e, group, r, a, o, pad) {
    e.position.set(Math.sin(r * T) * Math.cos(a * T) * 300, Math.sin(a * T) * 300, Math.cos(r * T) * Math.cos(a * T) * 300);
    e.lookAt(0, 0, 0);
    e.updateMatrixWorld();
    let e_matrixWorldInverse = e.matrixWorldInverse;
    let l = new N_1;
    let u = new Jn;
    group.updateMatrixWorld(true);
    group.traverse((e)=>{
        if (!e.isMesh || e.layers.mask !== 1) {
            return;
        }
        let position = e.geometry.attributes.position;
        for(let n = 0; n < position.count; n += 1){
            u.fromBufferAttribute(position, n).applyMatrix4(e.matrixWorld).applyMatrix4(e_matrixWorldInverse);
            l.expandByPoint(u);
        }
    });
    let d = (l.min.x + l.max.x) / 2;
    let f = (l.min.y + l.max.y) / 2;
    let p = (l.max.x - l.min.x) * pad;
    let m = (l.max.y - l.min.y) * pad;
    if (p / m > o) {
        m = p / o;
    } else {
        p = m * o;
    }
    e.left = d - p / 2;
    e.right = d + p / 2;
    e.top = f + m / 2;
    e.bottom = f - m / 2;
    e.near = 1;
    e.far = 800;
    e.updateProjectionMatrix();
}
export async function renderThumbnails(t, { renderer, environment, board, onEach } = {}) {
    let s = new A(renderer, {
        lineColor: `#141a2c`,
        thickness: 1
    });
    let u = document.createElement(`canvas`);
    let m = u.getContext(`2d`);
    let h = [
        ...t
    ].filter((e)=>z[e.dataset.thumb]);
    let g = 0;
    let _ = [];
    for (let e of h){
        let t = e.clientWidth || 100;
        let v = e.clientHeight || 84;
        let b = Math.round(t * 3);
        let x = Math.round(v * 3);
        let S = new jn;
        S.environment = environment;
        S.environmentIntensity = 0.4;
        S.add(new st(`#fffaf3`, `#c2ae90`, 0.5));
        let C = new Z(`#fff6ea`, 1.2);
        C.position.set(-55, 100, 62);
        S.add(C);
        let w = new Z(`#ffffff`, 0.001);
        w.castShadow = true;
        S.add(w);
        let T = z[e.dataset.thumb]({
            renderer,
            board
        });
        S.add(T.group);
        let D = new kt;
        B(D, T.group, T.az, T.el, t / v, T.pad);
        if (T.shadow[0]) {
            let e = new N_1().setFromObject(T.group);
            let t = E(T.shadow[0], T.shadow[1]);
            t.position.set(0, e.min.y - 0.2, T.shadow[2]);
            S.add(t);
        }
        let O = new Zn(b, x);
        s.setSize(t, v, 3);
        let k = renderer.shadowMap.needsUpdate;
        s.render(S, D, O);
        renderer.shadowMap.needsUpdate = k;
        let A = new Uint8Array(b * x * 4);
        renderer.readRenderTargetPixels(O, 0, 0, b, x, A);
        O.dispose();
        w.dispose();
        if (T.keep) {
            S.remove(T.group);
        }
        c(S);
        let j = m.createImageData(b, x);
        let M = b * 4;
        for(let e = 0; e < x; e++){
            j.data.set(A.subarray((x - 1 - e) * M, (x - e) * M), e * M);
        }
        u.width = b;
        u.height = x;
        m.putImageData(j, 0, 0);
        let N = await new Promise((resolve)=>u.toBlob(resolve, `image/png`));
        if (N) {
            URL.revokeObjectURL(e.dataset.url ?? ``);
            e.dataset.url = URL.createObjectURL(N);
            e.src = e.dataset.url;
            _.push(e.decode().catch(()=>{}).then(()=>e.classList.add(`is-ready`)));
        }
        onEach?.(++g, h.length);
        await new Promise((resolve)=>setTimeout(resolve, 0));
    }
    s.dispose();
    await Promise.all(_);
}
