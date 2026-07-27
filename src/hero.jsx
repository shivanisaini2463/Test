// Hero background — "Vortex"
// Silky monochrome smoke streamlines swirling into a soft vortex, warped by the cursor.

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

function HeroVortex() {
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

    const STREAMS = 30;
    const STEPS = 46;
    const streams = [];
    for (let i = 0; i < STREAMS; i++) {
      streams.push({
        angle0: (i / STREAMS) * Math.PI * 2 + Math.random() * 0.3,
        rSpread: 0.7 + Math.random() * 0.3,
        speed: 0.5 + Math.random() * 0.4,
        dir: i % 2 === 0 ? 1 : -1,
        widthMul: 0.5 + Math.random() * 1.1,
      });
    }

    const pal = { stroke: "255, 255, 255" };

    const draw = () => {
      const t = (performance.now() - t0) / 1000;

      if (mouse.active) {
        mouse.x = mouse.x === -9999 ? mouse.tx : mouse.x + (mouse.tx - mouse.x) * 0.06;
        mouse.y = mouse.y === -9999 ? mouse.ty : mouse.y + (mouse.ty - mouse.y) * 0.06;
      }

      ctx.clearRect(0, 0, w, h);

      const baseCx = w * 0.5, baseCy = h * 0.44;
      const pullX = mouse.active ? (mouse.x - baseCx) * 0.15 : 0;
      const pullY = mouse.active ? (mouse.y - baseCy) * 0.15 : 0;
      const cx = baseCx + pullX, cy = baseCy + pullY;
      const squash = 0.62;
      const maxR = Math.min(w, h) * 0.6;

      ctx.globalCompositeOperation = "lighter";

      for (const s of streams) {
        const rot = t * 0.055 * s.speed * s.dir + s.angle0;
        let x = cx + Math.cos(rot) * maxR * s.rSpread;
        let y = cy + Math.sin(rot) * maxR * s.rSpread * squash;
        const pts = [{ x, y }];

        for (let k = 0; k < STEPS; k++) {
          const dx = x - cx, dy = (y - cy) / squash;
          const r = Math.sqrt(dx * dx + dy * dy) || 1;
          const baseAngle = Math.atan2(dy, dx);
          const swirl = baseAngle + s.dir * (Math.PI / 2) + s.dir * (2.4 / (r * 0.012 + 1));
          const stepLen = 5.4;
          x += Math.cos(swirl) * stepLen;
          y += Math.sin(swirl) * stepLen * squash;

          if (mouse.active) {
            const mdx = x - mouse.x, mdy = y - mouse.y;
            const mr = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mr < 260) {
              const kick = (1 - mr / 260) * 9;
              const ang = Math.atan2(mdy, mdx) + Math.PI / 2;
              x += Math.cos(ang) * kick * 0.4;
              y += Math.sin(ang) * kick * 0.4;
            }
          }
          pts.push({ x, y });
        }

        const n = pts.length - 1;
        const grad = ctx.createLinearGradient(pts[0].x, pts[0].y, pts[n].x, pts[n].y);
        const base = 0.2 * s.widthMul;
        grad.addColorStop(0, `rgba(${pal.stroke}, 0)`);
        grad.addColorStop(0.18, `rgba(${pal.stroke}, ${base * 0.7})`);
        grad.addColorStop(0.5, `rgba(${pal.stroke}, ${base})`);
        grad.addColorStop(0.85, `rgba(${pal.stroke}, ${base * 0.5})`);
        grad.addColorStop(1, `rgba(${pal.stroke}, 0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4 * s.widthMul;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let k = 1; k < n; k++) {
          const mx = (pts[k].x + pts[k + 1].x) / 2, my = (pts[k].y + pts[k + 1].y) / 2;
          ctx.quadraticCurveTo(pts[k].x, pts[k].y, mx, my);
        }
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

  return <canvas ref={canvasRef} className="hero-canvas hero-vortex-canvas" aria-hidden="true" />;
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

function HeroVideoBg() {
  return (
    <video
      className="hero-canvas hero-bg-video"
      autoPlay muted loop playsInline preload="auto"
      aria-hidden="true"
    >
      <source src="assets/hero-bg-smoke.mp4" type="video/mp4" />
    </video>
  );
}

function HeroBg() {
  const [useVideo, setUseVideo] = React.useState(() => !window.matchMedia("(max-width: 720px)").matches);
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 720px)");
    const update = () => setUseVideo(!mq.matches);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return useVideo ? <HeroVideoBg /> : <HeroVortex />;
}

function Hero() {
  const headline = ["I'm", "Shivani", "Saini"];
  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <HeroBg />
      <div className="hero-scrim" aria-hidden="true" />
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
                  {i > 0 ? <em className="serif">{w}</em> : w}
                </span>
              </span>
              {i < headline.length - 1 && " "}
            </React.Fragment>
          ))}
        </h1>
        <p className="hero-sub">
          Senior Product Designer with hands-on experience of <strong>7 years</strong> creating impactful digital products from start to finish.
        </p>
        <div className="hero-meta">
          <div className="item">
            <b>Reach out on</b>
            <SocialLinks className="hero-socials" />
          </div>
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
