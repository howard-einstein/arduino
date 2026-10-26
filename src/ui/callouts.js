import { renderIcon } from './icons.js';

const SVG_NS = 'http://www.w3.org/2000/svg';
const RING_OFFSET = 7;

function createSvgElement(tag, attrs = {}) {
  const el = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) {
    el.setAttribute(k, v);
  }
  return el;
}

function getCardAnchorPoint(callout, box, scale) {
  const ring = callout.ring ? RING_OFFSET : 0;
  const offset = callout.at * scale;
  switch (callout.side) {
    case 'top':
      return [box.x + offset, box.y - ring];
    case 'left':
      return [box.x - (callout.ring ? 0 : 1), box.y + offset];
    case 'right':
      return [box.x + box.w + (callout.ring ? 0 : 1), box.y + offset];
    default:
      return [box.x + offset, box.y + box.h + ring];
  }
}

function getLeaderLegPoint(callout, start, end, scale) {
  const leg = (callout.leg ?? 30) * scale;
  if (callout.approach === 'above') return [end[0], end[1] - leg];
  switch (callout.side) {
    case 'top':
      return [start[0], start[1] - leg];
    case 'left':
      return [start[0] - leg, start[1]];
    case 'right':
      return [start[0] + leg, start[1]];
    default:
      return [start[0], start[1] + leg];
  }
}

/**
 * Superposición 2D sobre el canvas 3D con tarjetas explicativas (callouts),
 * líneas guía vectoriales (leaders) y etiquetas flotantes (tags).
 */
export class CalloutOverlay {
  /**
   * @param {object} options
   * @param {HTMLElement} options.rig - Contenedor DOM para tarjetas (#rig).
   * @param {SVGElement} options.svg - SVG para líneas (#leaders).
   * @param {HTMLElement} options.tags - Contenedor para etiquetas flotantes (#tags).
   * @param {(callout: object) => void} options.onFocus
   */
  constructor({ rig, svg, tags, onFocus }) {
    this.rig = rig;
    this.svg = svg;
    this.tags = tags;
    this.onFocus = onFocus;
    this.origin = { x: 0, y: 0 };
    this.scale = 1;
    this.sets = [];
    this.current = null;
    this.free = false;
    this.hidden = false;

    this.readout = document.createElement('div');
    this.readout.className = 'readout';
    tags.append(this.readout);
  }

  show(lesson, { delay = 0, hold = false } = {}) {
    for (const s of this.sets) {
      this.retire(s);
    }

    const set = {
      lesson,
      items: [],
      aligned: false,
      root: createSvgElement('g', { class: 'leader-set is-hidden' }),
    };
    this.svg.append(set.root);

    for (const c of lesson.callouts ?? []) {
      const card = document.createElement('article');
      card.className = 'callout is-hidden';
      card.tabIndex = 0;
      card.style.setProperty('--x', `${c.x}px`);
      card.style.setProperty('--y', `${c.y}px`);
      card.style.setProperty('--w', `${c.w}px`);

      const iconCls = ['callout-icon', c.tall ? 'tall' : '', c.wide ? 'wide' : ''].filter(Boolean).join(' ');
      card.innerHTML = `${renderIcon(c.icon, iconCls)}<div><h3>${c.title}</h3><p>${c.body}</p></div>`;
      this.rig.append(card);

      const leaderG = createSvgElement('g', { class: 'leader' });
      const path = createSvgElement('path');
      leaderG.append(path);

      let ring = null;
      if (c.ring) {
        ring = createSvgElement('circle', { r: '4.6', class: 'dot-end' });
        leaderG.append(ring);
      }

      const makeHotspot = (r) => {
        const h = createSvgElement('g', { class: 'hotspot' });
        h.append(
          createSvgElement('circle', { r: String(r + 6), class: 'dot-hit' }),
          createSvgElement('circle', { r: String(r), class: 'dot-halo' }),
          createSvgElement('circle', { r: String(r - 1.2), class: 'dot-anchor' })
        );
        leaderG.append(h);
        return h;
      };

      const via = c.via ? makeHotspot(7.2) : null;
      const dot = makeHotspot(7.6);
      if (c.anchor.startsWith('part:')) {
        dot.classList.add('is-passive');
      }
      set.root.append(leaderG);

      const tag = document.createElement('button');
      tag.className = 'tag is-hidden';
      tag.innerHTML = `<span>${c.title}</span>`;
      this.tags.append(tag);

      const item = { c, card, g: leaderG, path, ring, via, dot, tag, size: null };
      const focus = () => this.onFocus?.(c);

      card.addEventListener('click', focus);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          focus();
        }
      });
      dot.addEventListener('click', focus);
      tag.addEventListener('click', focus);

      for (const el of [card, dot, tag]) {
        el.addEventListener('pointerenter', () => leaderG.classList.add('is-hot'));
        el.addEventListener('pointerleave', () => leaderG.classList.remove('is-hot'));
      }

      set.items.push(item);
    }

    this.sets.push(set);
    this.current = set;

    const reveal = () => {
      if (this.current === set) {
        set.root.classList.remove('is-hidden');
        set.items.forEach((item, idx) => {
          item.card.style.transitionDelay = `${idx * 60}ms`;
          item.card.classList.remove('is-hidden');
          item.tag.classList.remove('is-hidden');
        });
      }
    };

    this.held = null;
    if (hold) {
      this.held = reveal;
    } else if (delay) {
      setTimeout(reveal, delay);
    } else {
      requestAnimationFrame(reveal);
    }
  }

  release() {
    const fn = this.held;
    this.held = null;
    fn?.();
  }

  retire(set) {
    set.root.classList.add('is-hidden');
    for (const item of set.items) {
      item.card.style.transitionDelay = '0ms';
      item.card.classList.add('is-leaving');
      item.tag.classList.add('is-hidden');
    }
    setTimeout(() => {
      set.root.remove();
      for (const item of set.items) {
        item.card.remove();
        item.tag.remove();
      }
      this.sets = this.sets.filter((s) => s !== set);
    }, 420);
  }

  setFree(isFree) {
    if (isFree !== this.free) {
      this.free = isFree;
      this.rig.classList.toggle('is-free', isFree);
      this.svg.classList.toggle('is-free', isFree);
      this.tags.classList.toggle('is-free', isFree);
    }
  }

  setVisible(visible) {
    this.hidden = !visible;
    for (const el of [this.rig, this.svg, this.tags]) {
      el.classList.toggle('is-off', !visible);
    }
  }

  layoutTags(tagList, width, height) {
    const placedBoxes = [];
    const anchorCoords = tagList.map(({ a }) => a);

    const fits = (box, anchor) =>
      box.x >= 0 &&
      box.y >= 0 &&
      box.x + box.w <= width &&
      box.y + box.h <= height &&
      placedBoxes.every(
        (b) => box.x >= b.x + b.w + 4 || b.x >= box.x + box.w + 4 || box.y >= b.y + b.h + 3 || b.y >= box.y + box.h + 3
      ) &&
      anchorCoords.every(
        (pt) => pt === anchor || pt[0] < box.x - 9 || pt[0] > box.x + box.w + 9 || pt[1] < box.y - 9 || pt[1] > box.y + box.h + 9
      );

    tagList.sort((a, b) => a.a[1] - b.a[1]);

    for (const { it: item, a: anchor } of tagList) {
      item.tagSize ??= { w: item.tag.offsetWidth, h: item.tag.offsetHeight };
      const { w, h } = item.tagSize;
      const candidates = [
        [anchor[0] + 13, anchor[1] - 13],
        [anchor[0] - 13 - w, anchor[1] - 13],
        [anchor[0] + 8, anchor[1] - h - 11],
        [anchor[0] + 8, anchor[1] + 11],
        [anchor[0] - 8 - w, anchor[1] - h - 11],
        [anchor[0] - 8 - w, anchor[1] + 11],
      ];
      const makeBox = (idx) => ({ x: candidates[idx][0], y: candidates[idx][1], w, h });

      let bestSpot = 0;
      if (!fits(makeBox(0), anchor)) {
        if (item.tagSpot && fits(makeBox(item.tagSpot), anchor)) {
          bestSpot = item.tagSpot;
        } else {
          bestSpot = Math.max(0, candidates.findIndex((_, idx) => fits(makeBox(idx), anchor)));
        }
      }

      item.tagSpot = bestSpot;
      placedBoxes.push(makeBox(bestSpot));
      item.tag.style.transform = `translate(${candidates[bestSpot][0]}px, ${candidates[bestSpot][1]}px)`;
    }
  }

  invalidate() {
    for (const set of this.sets) {
      set.aligned = false;
      for (const item of set.items) {
        item.size = null;
      }
    }
  }

  update(stageState) {
    const { w: width, h: height } = stageState.size;
    const tagList = [];

    for (const set of this.sets) {
      if (!set.aligned && set === this.current && stageState.isHome()) {
        for (const item of set.items) {
          if (!item.c.via) continue;
          const anchorPos = stageState.anchor(item.c.via);
          if (!anchorPos) continue;
          const [projX] = stageState.project(anchorPos);
          item.card.style.setProperty('--x', `${(projX - this.origin.x) / this.scale - item.c.at}px`);
          item.size = null;
        }
        set.aligned = true;
      }

      for (const item of set.items) {
        const anchorPos = stageState.anchor(item.c.anchor);
        if (!anchorPos) {
          item.g.style.display = 'none';
          item.tag.style.display = 'none';
          continue;
        }

        item.g.style.display = '';
        const proj = stageState.project(anchorPos);
        item.size ??= {
          w: item.card.offsetWidth,
          h: item.card.offsetHeight,
          x: item.card.offsetLeft,
          y: item.card.offsetTop,
        };

        const scale = this.scale;
        const box = {
          x: this.origin.x + item.size.x * scale,
          y: this.origin.y + item.size.y * scale,
          w: item.size.w * scale,
          h: item.size.h * scale,
        };
        const startPt = getCardAnchorPoint(item.c, box, scale);

        let pathData;
        if (item.c.via) {
          const viaPos = stageState.anchor(item.c.via);
          const viaProj = viaPos ? stageState.project(viaPos) : startPt;
          pathData = `M${startPt[0]} ${startPt[1]} L${viaProj[0]} ${viaProj[1]} L${proj[0]} ${proj[1]}`;
          item.via?.setAttribute('transform', `translate(${viaProj[0]} ${viaProj[1]})`);
        } else {
          const legPt = getLeaderLegPoint(item.c, startPt, proj, scale);
          pathData = `M${startPt[0]} ${startPt[1]} L${legPt[0]} ${legPt[1]} L${proj[0]} ${proj[1]}`;
        }

        item.path.setAttribute('d', pathData);
        if (item.ring) {
          item.ring.setAttribute('cx', startPt[0]);
          item.ring.setAttribute('cy', startPt[1]);
        }
        item.dot.setAttribute('transform', `translate(${proj[0]} ${proj[1]})`);

        const isVisible = proj[0] > 0 && proj[1] > 0 && proj[0] < width && proj[1] < height;
        item.dot.style.display = isVisible ? '' : 'none';
        item.tag.style.display = isVisible ? '' : 'none';

        if (isVisible && set === this.current) {
          tagList.push({ it: item, a: proj });
        } else {
          item.tag.style.transform = `translate(${proj[0] + 13}px, ${proj[1] - 13}px)`;
        }
      }
    }

    this.layoutTags(tagList, width, height);

    // Readout en tiempo real (distancia, ángulo, etc.)
    const readout = stageState.readoutState;
    if (readout) {
      const [rx, ry] = stageState.projectPoint(readout.position);
      this.readout.textContent = readout.text;
      this.readout.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      this.readout.classList.add('is-on');
    } else {
      this.readout.classList.remove('is-on');
    }
  }
}
