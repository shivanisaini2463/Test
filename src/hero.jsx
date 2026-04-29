// Hero background — "Lineage"
// Classy, modern, interactive: flowing silk-like curves drawn as Bezier ribbons
// that respond to the cursor with gentle bulges. Editorial feel, no chaos.

const HELLOS = [
  "Hello",         // English
  "नमस्ते",          // Hindi
  "Bonjour",       // French
  "Hallo",         // German
  "Hola",          // Spanish
];

function HelloTicker() {
  const [i, setI] = React.useState(0);
  const [phase, setPhase] = React.useState("in");
  React.useEffect(() => {
    const show = setTimeout(() => setPhase("out"), 900);
    const next = setTimeout(() => {
      setI((x) => (x + 1) % HELLOS.length);
      setPhase("in");
    }, 1200);
    return () => { clearTimeout(show); clearTimeout(next); };
  }, [i, phase]);
  return (
    <span className="hello-ticker" aria-live="polite">
      <span key={i} className={"word " + (phase === "out" ? "out" : "in")}>{HELLOS[i]}</span>
    </span>
  );
}

function HeroSilk() {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, raf, t0 = performance.now();
    let mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999, active: false };

    const resize = () => {
      w = canvas.offsetWidth; h = canvas.offsetHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.tx = e.clientX - r.left;
      mouse.ty = e.clientY - r.top;
      mouse.active = true;
    };
    const onLeave = () => { mouse.active = false; };

    const RIBBONS = 22;
    const SEGMENTS = 22;
    const ribbons = [];
    for (let i = 0; i < RIBBONS; i++) {
      const t = i / (RIBBONS - 1);
      ribbons.push({
        y: t,
        phase: Math.random() * Math.PI * 2,
        speed: 0.12 + Math.random() * 0.16,
        amp: 14 + Math.random() * 22,
        wave: 1.2 + Math.random() * 1.6,
        hue: i % 3,
      });
    }

    const palette = [
      "rgba(182, 166, 255, ",
      "rgba(124, 92, 255, ",
      "rgba(255, 255, 255, ",
    ];

    const draw = () => {
      const t = (performance.now() - t0) / 1000;

      if (mouse.active) {
        mouse.x = mouse.x === -9999 ? mouse.tx : mouse.x + (mouse.tx - mouse.x) * 0.08;
        mouse.y = mouse.y === -9999 ? mouse.ty : mouse.y + (mouse.ty - mouse.y) * 0.08;
      }

      ctx.clearRect(0, 0, w, h);
      const wash = ctx.createLinearGradient(0, 0, w, h);
      wash.addColorStop(0, "rgba(12, 10, 22, 0)");
      wash.addColorStop(1, "rgba(20, 14, 40, 0.35)");
      ctx.fillStyle = wash;
      ctx.fillRect(0, 0, w, h);

      if (mouse.active) {
        const rg = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 460);
        rg.addColorStop(0, "rgba(182, 166, 255, 0.10)");
        rg.addColorStop(0.6, "rgba(124, 92, 255, 0.02)");
        rg.addColorStop(1, "rgba(124, 92, 255, 0)");
        ctx.fillStyle = rg;
        ctx.fillRect(0, 0, w, h);
      }

      ctx.globalCompositeOperation = "lighter";

      for (let r = 0; r < ribbons.length; r++) {
        const rb = ribbons[r];
        const baseY = rb.y * h;
        const pts = [];
        for (let s = 0; s <= SEGMENTS; s++) {
          const fx = s / SEGMENTS;
          const x = fx * w;
          const phase = rb.phase + t * rb.speed + fx * rb.wave * Math.PI;
          let y = baseY + Math.sin(phase) * rb.amp;
          y += Math.sin(phase * 2.3 + t * 0.4) * rb.amp * 0.25;

          if (mouse.active) {
            const dx = x - mouse.x;
            const dy = baseY - mouse.y;
            const d2 = dx * dx + dy * dy;
            const radius = 280;
            const falloff = Math.exp(-d2 / (radius * radius));
            y += (mouse.y - baseY) * falloff * 0.55;
          }

          pts.push({ x, y });
        }

        const alpha = 0.10 + (r % 3 === 1 ? 0.06 : 0);
        ctx.strokeStyle = palette[rb.hue] + alpha + ")";
        ctx.lineWidth = r % 7 === 0 ? 1.6 : 0.8;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 0; i < pts.length - 1; i++) {
          const cx = (pts[i].x + pts[i + 1].x) / 2;
          const cy = (pts[i].y + pts[i + 1].y) / 2;
          ctx.quadraticCurveTo(pts[i].x, pts[i].y, cx, cy);
        }
        ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
        ctx.stroke();

        if (r % 3 === 1) {
          ctx.strokeStyle = "rgba(255,255,255,0.04)";
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }

      const filaments = 5;
      for (let i = 0; i < filaments; i++) {
        const fx = (i + 0.5) / filaments;
        const x = fx * w + Math.sin(t * 0.3 + i) * 24;
        const grad = ctx.createLinearGradient(x, 0, x, h);
        grad.addColorStop(0, "rgba(182,166,255,0)");
        grad.addColorStop(0.5, "rgba(182,166,255,0.05)");
        grad.addColorStop(1, "rgba(182,166,255,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(draw);
    };

    resize(); draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}

// Quieter glyph field — less busy, more editorial
function GlyphField() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const glyphs = el.querySelectorAll(".glyph");
    const onMove = (e) => {
      const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      glyphs.forEach((g) => {
        const depth = parseFloat(g.dataset.depth || 1);
        g.style.transform = `translate3d(${-dx * 16 * depth}px, ${-dy * 16 * depth}px, 0)`;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const items = [
    { ch: "✦", x: "90%", y: "16%", d: 1.4, size: 44 },
    { ch: "—", x: "6%",  y: "78%", d: 0.8, size: 80 },
    { ch: "•", x: "92%", y: "72%", d: 1.6, size: 24 },
  ];

  return (
    <div ref={ref} className="glyph-field" aria-hidden="true">
      {items.map((g, i) => (
        <span key={i} className="glyph" data-depth={g.d}
          style={{left: g.x, top: g.y, fontSize: g.size}}>{g.ch}</span>
      ))}
    </div>
  );
}

function Hero() {
  const headline = ["Designing", "calm", "systems", "for", "loud", "problems."];
  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <HeroSilk />
      <GlyphField />

      <div className="container hero-inner">
        <div className="hero-greeting">
          <span className="ping" />
          <HelloTicker />
        </div>
        <h1>
          {headline.map((w, i) => (
            <React.Fragment key={i}>
              <span className="word">
                <span style={{ animationDelay: `${0.08 + i * 0.09}s` }}>
                  {w === "calm" ? <em className="serif">{w}</em> : w}
                </span>
              </span>
              {i < headline.length - 1 && " "}
            </React.Fragment>
          ))}
        </h1>
        <div className="hero-meta">
          <div className="item"><b>Role</b><span>Senior Product Designer</span></div>
          <div className="item"><b>Based</b><span>Delhi, India</span></div>
          <div className="item"><b>Experience</b><span>6.5+ years</span></div>
        </div>
      </div>

      <div className="scroll-hint">
        <span>scroll</span>
        <span className="line" />
      </div>
    </section>
  );
}

window.Hero = Hero;
window.HelloTicker = HelloTicker;
