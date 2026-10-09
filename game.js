(() => {
  "use strict";

  /* ------------------------------------------------------------------ *
   *  Themes. To add a game, add an entry here – nothing else to change.
   *  e   = emoji picture      (or svg = drawn picture, plus k = unique key)
   *  n   = name that is spoken when it is matched correctly.
   * ------------------------------------------------------------------ */

  // Shapes are drawn (not emoji) so every one has a clearly different outline.
  const svg = (inner, color) =>
    `<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="${color}" stroke="${color}" stroke-width="8" stroke-linejoin="round">${inner}</g></svg>`;
  const poly = (n, R, r, rot = -90) => Array.from({ length: n }, (_, i) => {
    const a = (rot + (i * 360) / n) * Math.PI / 180, rad = r && i % 2 ? r : R;
    return `${(50 + rad * Math.cos(a)).toFixed(1)},${(50 + rad * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
  const SHAPES = [
    { k: "circle",   n: "Circle",   svg: svg(`<circle cx="50" cy="50" r="38"/>`, "#ff5d5d") },
    { k: "square",   n: "Square",   svg: svg(`<rect x="15" y="15" width="70" height="70" rx="4"/>`, "#3b9cff") },
    { k: "triangle", n: "Triangle", svg: svg(`<polygon points="50,14 88,82 12,82"/>`, "#ffbe0b") },
    { k: "star",     n: "Star",     svg: svg(`<polygon points="${poly(10, 44, 19)}"/>`, "#ff9f1c") },
    { k: "heart",    n: "Heart",    svg: svg(`<path d="M50 84 C14 58 10 36 26 24 C38 16 48 24 50 32 C52 24 62 16 74 24 C90 36 86 58 50 84 Z"/>`, "#ff4f9a") },
    { k: "diamond",  n: "Diamond",  svg: svg(`<polygon points="50,10 86,50 50,90 14,50"/>`, "#8f5cf7") },
    { k: "oval",     n: "Oval",     svg: svg(`<ellipse cx="50" cy="50" rx="40" ry="26"/>`, "#2ec4b6") },
    { k: "hexagon",  n: "Hexagon",  svg: svg(`<polygon points="${poly(6, 40, 0, 0)}"/>`, "#7bc950") },
  ];

  const THEMES = [
    { id: "vehicles", label: "Vehicles", icon: "🚗", card: "#ffd9d9", bg: ["#ffe1e1", "#fff4f0"], items: [
      { e: "🚗", n: "Car" }, { e: "🚌", n: "Bus" }, { e: "🚒", n: "Fire engine" }, { e: "🚜", n: "Tractor" },
      { e: "🚲", n: "Bicycle" }, { e: "✈️", n: "Aeroplane" }, { e: "🚂", n: "Train" }, { e: "🚁", n: "Helicopter" },
      { e: "🚤", n: "Boat" }, { e: "🛵", n: "Scooter" }, { e: "🚑", n: "Ambulance" } ] },
    { id: "fruit", label: "Fruit", icon: "🍎", card: "#ffe9c2", bg: ["#fff0cf", "#fffaf0"], items: [
      { e: "🍎", n: "Apple" }, { e: "🍌", n: "Banana" }, { e: "🍇", n: "Grapes" }, { e: "🍓", n: "Strawberry" },
      { e: "🍊", n: "Orange" }, { e: "🍉", n: "Watermelon" }, { e: "🍐", n: "Pear" }, { e: "🍒", n: "Cherries" },
      { e: "🍍", n: "Pineapple" }, { e: "🍋", n: "Lemon" } ] },
    { id: "clothes", label: "Clothes", icon: "👕", card: "#d3dbff", bg: ["#dde3ff", "#f4f6ff"], items: [
      { e: "👕", n: "T-shirt" }, { e: "👖", n: "Trousers" }, { e: "🧦", n: "Socks" }, { e: "🧢", n: "Cap" },
      { e: "👗", n: "Dress" }, { e: "🧥", n: "Coat" }, { e: "👟", n: "Trainer" }, { e: "🧤", n: "Gloves" },
      { e: "🧣", n: "Scarf" }, { e: "👒", n: "Hat" } ] },
    { id: "sea", label: "Sea", icon: "🐙", card: "#cdeeff", bg: ["#bfe6ff", "#e9f7ff"], items: [
      { e: "🐟", n: "Fish" }, { e: "🐙", n: "Octopus" }, { e: "🐳", n: "Whale" }, { e: "🐬", n: "Dolphin" },
      { e: "🦀", n: "Crab" }, { e: "🐢", n: "Turtle" }, { e: "🦈", n: "Shark" }, { e: "🦞", n: "Lobster" },
      { e: "🐡", n: "Puffer fish" }, { e: "🦭", n: "Seal" } ] },
    { id: "farm", label: "Farm", icon: "🐄", card: "#d9f5c9", bg: ["#dff6d0", "#f6fff0"], items: [
      { e: "🐄", n: "Cow" }, { e: "🐷", n: "Pig" }, { e: "🐑", n: "Sheep" }, { e: "🐔", n: "Chicken" },
      { e: "🐴", n: "Horse" }, { e: "🦆", n: "Duck" }, { e: "🐐", n: "Goat" }, { e: "🐇", n: "Rabbit" },
      { e: "🐕", n: "Dog" }, { e: "🐈", n: "Cat" } ] },
    { id: "food", label: "Yummy", icon: "🍦", card: "#ffdff0", bg: ["#ffe3f2", "#fff6fb"], items: [
      { e: "🍕", n: "Pizza" }, { e: "🍔", n: "Burger" }, { e: "🍦", n: "Ice cream" }, { e: "🍩", n: "Doughnut" },
      { e: "🍪", n: "Biscuit" }, { e: "🍞", n: "Bread" }, { e: "🥕", n: "Carrot" }, { e: "🌽", n: "Corn" },
      { e: "🧁", n: "Cupcake" }, { e: "🥚", n: "Egg" } ] },
    { id: "dinos", label: "Dinosaurs", icon: "🦖", card: "#c9efe0", bg: ["#cdf1e3", "#f1fffa"],
      must: ["🦕", "🦖"],            // these two are in every round
      items: [
      { e: "🦕", n: "Long neck" }, { e: "🦖", n: "T-Rex" }, { e: "🦎", n: "Lizard" }, { e: "🐊", n: "Crocodile" },
      { e: "🥚", n: "Egg" }, { e: "🦴", n: "Bone" }, { e: "🌋", n: "Volcano" } ] },
    { id: "princess", label: "Princesses", icon: "👸", card: "#f3c9ff", bg: ["#f6d9ff", "#fdf3ff"], items: [
      { e: "👸", n: "Princess" }, { e: "👑", n: "Crown" }, { e: "🏰", n: "Castle" }, { e: "🦄", n: "Unicorn" },
      { e: "🧚", n: "Fairy" }, { e: "🧜‍♀️", n: "Mermaid" }, { e: "🪄", n: "Magic wand" }, { e: "👠", n: "Shoe" },
      { e: "🐸", n: "Frog" }, { e: "🎀", n: "Bow" } ] },
    { id: "shapes", label: "Shapes", icon: SHAPES[3].svg, card: "#fff1a8", bg: ["#fff5b8", "#fffdf0"], items: SHAPES },
  ];

  // every picture needs a unique key; emoji use themselves, drawn shapes use k
  const keyOf = (item) => item.k || item.e;
  const glyphOf = (item) => item.svg || item.e;

  /* ------------------------------ helpers ------------------------------ */
  const $ = (id) => document.getElementById(id);
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* ignore */ } },
  };

  const state = {
    theme: null,
    count: store.get("count", 4),
    sound: store.get("sound", true),
    remaining: 0,
  };

  /* ------------------------------ audio ------------------------------ */
  let ctx = null;
  function audio() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) ctx = new AC();
    }
    if (ctx && ctx.state === "suspended") ctx.resume();
    return ctx;
  }
  function tone(freq, start, dur, { type = "sine", vol = 0.25, to = null } = {}) {
    const c = audio(); if (!c || !state.sound) return;
    const t0 = c.currentTime + start;
    const o = c.createOscillator(), g = c.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t0);
    if (to) o.frequency.exponentialRampToValueAtTime(to, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g).connect(c.destination);
    o.start(t0); o.stop(t0 + dur + 0.05);
  }
  const sfx = {
    pick() { tone(520, 0, 0.08, { type: "triangle", vol: 0.12 }); },
    good() {
      tone(523, 0, 0.14, { type: "triangle" });
      tone(659, 0.09, 0.14, { type: "triangle" });
      tone(784, 0.18, 0.28, { type: "triangle" });
    },
    oops() { tone(300, 0, 0.25, { type: "sine", vol: 0.22, to: 150 }); },
    cheer() {
      [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.12, 0.35, { type: "triangle", vol: 0.22 }));
      tone(1047, 0.55, 0.7, { type: "triangle", vol: 0.22 });
      applause(2.6);
    },
  };
  // synthesized applause: lots of tiny filtered noise claps
  function applause(seconds) {
    const c = audio(); if (!c || !state.sound) return;
    const len = Math.floor(c.sampleRate * seconds);
    const buf = c.createBuffer(1, len, c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) {
      const t = i / c.sampleRate;
      const env = Math.min(1, t / 0.2) * Math.min(1, (seconds - t) / 0.9);
      const clap = Math.random() < 0.012 ? 1 : 0;           // random claps
      d[i] = (Math.random() * 2 - 1) * (0.08 + clap * 0.9) * env;
    }
    const src = c.createBufferSource(); src.buffer = buf;
    const f = c.createBiquadFilter(); f.type = "bandpass"; f.frequency.value = 1800; f.Q.value = 0.6;
    const g = c.createGain(); g.gain.value = 0.7;
    src.connect(f).connect(g).connect(c.destination);
    src.start();
  }
  function speak(text, { rate = 0.9, pitch = 1.3 } = {}) {
    if (!state.sound || !("speechSynthesis" in window)) return;
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.rate = rate; u.pitch = pitch; u.lang = "en-GB";
      speechSynthesis.speak(u);
    } catch { /* ignore */ }
  }

  /* ------------------------------ screens ------------------------------ */
  function show(id) {
    document.querySelectorAll(".screen").forEach((s) => s.classList.toggle("active", s.id === id));
  }
  function setBackground(bg) {
    document.documentElement.style.setProperty("--bg1", bg[0]);
    document.documentElement.style.setProperty("--bg2", bg[1]);
  }
  function goHome() {
    $("win").hidden = true;
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    setBackground(["#bfe6ff", "#e9f7ff"]);
    show("home");
  }

  function buildHome() {
    const box = $("themes");
    THEMES.forEach((t) => {
      const b = document.createElement("button");
      b.className = "theme-card";
      b.style.setProperty("--card", t.card);
      b.innerHTML = `<span class="icon">${t.icon}</span><span class="label">${t.label}</span>`;
      b.addEventListener("click", () => { audio(); sfx.pick(); startRound(t); });
      box.appendChild(b);
    });
    document.querySelectorAll(".level-btn").forEach((b) => {
      b.addEventListener("click", () => {
        state.count = Number(b.dataset.n);
        store.set("count", state.count);
        syncLevel();
        audio(); sfx.pick();
      });
    });
    syncLevel();
  }
  function syncLevel() {
    document.querySelectorAll(".level-btn").forEach((b) =>
      b.classList.toggle("selected", Number(b.dataset.n) === state.count));
  }
  function syncSound() {
    $("btn-sound").textContent = state.sound ? "🔊" : "🔇";
  }

  /* ------------------------------ a round ------------------------------ */
  function startRound(theme) {
    state.theme = theme;
    $("win").hidden = true;
    setBackground(theme.bg);

    // some themes always include certain pictures (e.g. dinosaurs in the dinosaur game)
    const musts = theme.items.filter((i) => (theme.must || []).includes(keyOf(i))).slice(0, state.count);
    const rest = shuffle(theme.items.filter((i) => !musts.includes(i))).slice(0, state.count - musts.length);
    const picks = shuffle([...musts, ...rest]);
    state.remaining = picks.length;

    // shadows (targets) and pieces in different orders
    const targetOrder = shuffle(picks);
    let trayOrder = shuffle(picks);
    for (let i = 0; i < 10 && trayOrder.every((p, idx) => p === targetOrder[idx]); i++) trayOrder = shuffle(picks);

    const targets = $("targets"), tray = $("tray"), dots = $("dots");
    targets.innerHTML = tray.innerHTML = dots.innerHTML = "";

    targetOrder.forEach((item) => {
      const slot = document.createElement("div");
      slot.className = "slot";
      slot.dataset.key = keyOf(item);
      slot.innerHTML = `<span class="shadow">${glyphOf(item)}</span>`;
      targets.appendChild(slot);
      dots.insertAdjacentHTML("beforeend", `<span class="dot"></span>`);
    });
    trayOrder.forEach((item) => tray.appendChild(makePiece(item)));

    show("game");
    speak("Match them up!", { rate: 0.95 });
  }

  function makePiece(item) {
    const p = document.createElement("div");
    p.className = "piece";
    p.dataset.key = keyOf(item);
    p.dataset.name = item.n;
    p.setAttribute("role", "button");
    p.setAttribute("aria-label", item.n);
    p.innerHTML = `<span class="glyph">${glyphOf(item)}</span>`;
    enableDrag(p);
    return p;
  }

  /* ------------------------------ dragging ------------------------------ */
  function enableDrag(piece) {
    let startX = 0, startY = 0, tx = 0, ty = 0, pid = null;

    piece.addEventListener("pointerdown", (e) => {
      if (pid !== null || piece.classList.contains("placed")) return;
      pid = e.pointerId;
      piece.setPointerCapture(pid);
      piece.classList.remove("wrong");
      piece.classList.add("dragging");
      startX = e.clientX - tx;
      startY = e.clientY - ty;
      audio(); sfx.pick();
      e.preventDefault();
    });

    piece.addEventListener("pointermove", (e) => {
      if (e.pointerId !== pid) return;
      tx = e.clientX - startX;
      ty = e.clientY - startY;
      piece.style.transform = `translate(${tx}px, ${ty}px)`;
    });

    const finish = (e) => {
      if (e.pointerId !== pid) return;
      try { piece.releasePointerCapture(pid); } catch { /* ignore */ }
      pid = null;
      piece.classList.remove("dragging");
      drop(piece, e, (nx, ny) => { tx = nx; ty = ny; });
    };
    piece.addEventListener("pointerup", finish);
    piece.addEventListener("pointercancel", finish);
  }

  function center(el) {
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2, w: r.width };
  }

  function drop(piece, e, setOffset) {
    const slot = [...document.querySelectorAll(".slot")]
      .find((s) => s.dataset.key === piece.dataset.key && !s.classList.contains("done"));
    const pc = center(piece);
    const sc = slot && center(slot);
    const close = slot && Math.hypot(pc.x - sc.x, pc.y - sc.y) < sc.w * 0.8;   // generous for little fingers

    if (close) {
      // slide into place, then lock in
      const m = /translate\(([-\d.]+)px,\s*([-\d.]+)px\)/.exec(piece.style.transform) || [0, 0, 0];
      const nx = Number(m[1]) + (sc.x - pc.x);
      const ny = Number(m[2]) + (sc.y - pc.y);
      piece.style.transform = `translate(${nx}px, ${ny}px)`;
      setOffset(nx, ny);
      slot.classList.add("done");
      piece.style.pointerEvents = "none";
      setTimeout(() => {
        // keep an empty spot in the tray so the other pieces don't jump around
        const spacer = document.createElement("div");
        spacer.className = "piece-spacer";
        piece.parentElement.insertBefore(spacer, piece);
        piece.classList.add("placed");
        piece.style.transform = "";
        piece.style.pointerEvents = "";
        slot.appendChild(piece);
        slot.classList.add("hit");
      }, 260);
      sfx.good();
      speak(piece.dataset.name);
      document.querySelectorAll(".dot:not(.on)")[0]?.classList.add("on");
      if (--state.remaining === 0) setTimeout(win, 900);
    } else {
      // gently go back to the tray
      piece.classList.add("wrong");
      piece.style.transform = "translate(0px, 0px)";
      setOffset(0, 0);
      sfx.oops();
    }
  }

  /* ------------------------------ winning ------------------------------ */
  function win() {
    sfx.cheer();
    setTimeout(() => speak("Well done!", { rate: 0.9, pitch: 1.4 }), 600);
    confetti();
    $("win").hidden = false;
  }
  function confetti() {
    const box = $("confetti");
    const bits = ["⭐", "🎈", "🎉", "✨", "💖", "🌈"];
    for (let i = 0; i < 45; i++) {
      const s = document.createElement("span");
      s.textContent = bits[i % bits.length];
      s.style.left = Math.random() * 100 + "vw";
      s.style.fontSize = 22 + Math.random() * 30 + "px";
      s.style.animationDuration = 2.2 + Math.random() * 2.2 + "s";
      s.style.animationDelay = Math.random() * 0.9 + "s";
      box.appendChild(s);
      setTimeout(() => s.remove(), 6000);
    }
  }

  /* ------------------------------ wiring ------------------------------ */
  $("btn-home").addEventListener("click", goHome);
  $("btn-win-home").addEventListener("click", goHome);
  $("btn-again").addEventListener("click", () => { audio(); startRound(state.theme); });
  $("btn-sound").addEventListener("click", () => {
    state.sound = !state.sound;
    store.set("sound", state.sound);
    if (!state.sound && "speechSynthesis" in window) speechSynthesis.cancel();
    syncSound();
    sfx.pick();
  });

  // stop pinch-zoom / double-tap zoom on iOS
  ["gesturestart", "dblclick"].forEach((ev) => document.addEventListener(ev, (e) => e.preventDefault()));
  document.addEventListener("contextmenu", (e) => e.preventDefault());

  buildHome();
  syncSound();
})();
