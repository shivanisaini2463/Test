const ACCENTS = [
  { key: "mono",   hex: "#ffffff", hex2: "#ffffff", glow: "rgba(255,255,255,0.14)" },
  { key: "lime",   hex: "#b6ff3c", hex2: "#d6ff8a", glow: "rgba(182,255,60,0.3)" },
  { key: "ember",  hex: "#ff5a36", hex2: "#ffa387", glow: "rgba(255,90,54,0.3)" },
  { key: "aqua",   hex: "#00d3a7", hex2: "#7affde", glow: "rgba(0,211,167,0.3)" },
  { key: "cream",  hex: "#e9e4d8", hex2: "#f6f2e6", glow: "rgba(233,228,216,0.25)" },
];

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "mono",
  "cursor": "blended",
  "grain": true
}/*EDITMODE-END*/;

function applyAccent(key) {
  const r = document.documentElement.style;
  if (key === "mono") {
    r.removeProperty("--accent");
    r.removeProperty("--accent-2");
    r.removeProperty("--accent-glow");
    return;
  }
  const a = ACCENTS.find(x => x.key === key) || ACCENTS[0];
  r.setProperty("--accent", a.hex);
  r.setProperty("--accent-2", a.hex2);
  r.setProperty("--accent-glow", a.glow);
}
function applyGrain(on) {
  document.body.classList.toggle("no-grain", !on);
}
function applyCursor(mode) {
  document.body.classList.toggle("cursor-custom", mode !== "native");
}

function CustomCursor() {
  const ref = React.useRef(null);
  const labelRef = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let tx = x, ty = y;
    let raf;
    const loop = () => {
      tx += (x - tx) * 0.22;
      ty += (y - ty) * 0.22;
      el.style.transform = `translate(${tx}px, ${ty}px)`;
      raf = requestAnimationFrame(loop);
    };
    const onMove = (e) => { x = e.clientX; y = e.clientY; };
    const onOver = (e) => {
      const t = e.target.closest?.("[data-cursor], a, button");
      if (t) {
        el.classList.add("hover");
        const label = t.getAttribute("data-cursor");
        if (label && labelRef.current) {
          labelRef.current.textContent = label;
          labelRef.current.style.display = "block";
        } else if (labelRef.current) {
          labelRef.current.style.display = "none";
        }
      } else {
        el.classList.remove("hover");
        if (labelRef.current) labelRef.current.style.display = "none";
      }
    };
    loop();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);
  return (
    <div className="cursor" ref={ref}>
      <div className="dot" />
      <div className="label" ref={labelRef} />
    </div>
  );
}

function Tweaks() {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("tweaks") || "null");
      return { ...TWEAK_DEFAULTS, ...(saved || {}) };
    } catch { return TWEAK_DEFAULTS; }
  });

  React.useEffect(() => {
    applyAccent(state.accent);
    applyGrain(state.grain);
    applyCursor(state.cursor);
    try { localStorage.setItem("tweaks", JSON.stringify(state)); } catch {}
  }, [state]);

  React.useEffect(() => {
    const onMsg = (e) => {
      if (!e.data) return;
      if (e.data.type === "__activate_edit_mode") setOpen(true);
      if (e.data.type === "__deactivate_edit_mode") setOpen(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const update = (patch) => {
    const next = { ...state, ...patch };
    setState(next);
    try {
      window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*");
    } catch {}
  };

  return (
    <>
      <CustomCursor />
      <div className={"tweaks-panel " + (open ? "open" : "")}>
        <h4>
          <span>Tweaks</span>
          <button onClick={() => setOpen(false)} aria-label="Close">×</button>
        </h4>
        <div className="tweaks-row">
          <label>Accent</label>
          <div className="swatch-row">
            {ACCENTS.map(a => (
              <button
                key={a.key}
                className={"swatch " + (state.accent === a.key ? "active" : "")}
                style={{ background: a.hex }}
                onClick={() => update({ accent: a.key })}
                aria-label={a.key}
              />
            ))}
          </div>
        </div>
        <div className="tweaks-row">
          <label>Cursor</label>
          <div className="toggle-row">
            <button className={"chip " + (state.cursor === "blended" ? "active" : "")} onClick={() => update({ cursor: "blended" })}>Blended dot</button>
            <button className={"chip " + (state.cursor === "native" ? "active" : "")} onClick={() => update({ cursor: "native" })}>Native</button>
          </div>
        </div>
        <div className="tweaks-row">
          <label>Grain</label>
          <div className="toggle-row">
            <button className={"chip " + (state.grain ? "active" : "")} onClick={() => update({ grain: true })}>On</button>
            <button className={"chip " + (!state.grain ? "active" : "")} onClick={() => update({ grain: false })}>Off</button>
          </div>
        </div>
      </div>
    </>
  );
}

window.Tweaks = Tweaks;
