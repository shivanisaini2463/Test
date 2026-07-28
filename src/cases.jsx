// 5 featured case studies with visuals, impact metrics, and dual CTAs

const CASES = [
  {
    num: "01",
    slug: "redrob-llm",
    logo: "assets/logo-case-redrob.png",
    preview: "assets/RedrobAI.png",
    client: "Redrob LLM",
    year: "2025-26",
    sector: "B2B & B2C",
    title: ["From Search Tool to", "AI Talent Intelligence Platform"],
    titleHighlight: 1,
    description: "Transforming a Recruiter Search Platform into an AI-Powered Professional Workspace",
    impact: [
      { k: "Platform modules", v: "1 for All" },
      { k: "Research time saved", v: "71%" },
      { k: "Profiles indexed", v: "1M+" },
    ],
    visual: { c1: "#3a3a3a", c2: "#0a0a0a", accent: "#e5e5e5" },  /* Mono — grey */
    live: "https://www.redrob.ai/",
  },
  {
    num: "02",
    slug: "phot-ai",
    logo: "assets/logo-case-photai.png",
    preview: "assets/photai-preview.jpg",
    client: "Phot AI",
    year: "2024-25",
    sector: "AI · Creative Tools with Studio",
    title: ["Designing the Future of", "AI-Powered Creative Workflows"],
    titleHighlight: 1,
    description: "Simplified complex AI image-generation and editing workflows into an intuitive creative platform, enabling users to generate, edit, and iterate professional-quality visuals with minimal effort.",
    impact: [
      { k: "Faster creative output", v: "10×" },
      { k: "Assets generated / mo", v: "500K+" },
      { k: "Saved Cost", v: "62%" },
    ],
    visual: { c1: "#333333", c2: "#0a0a0a", accent: "#d8d8d8" },  /* Mono — grey */
    live: "https://www.phot.ai/",
  },
  {
    num: "03",
    slug: "bcl",
    logo: "assets/logo-case-bcl.png",
    preview: "assets/bcl-preview.jpg",
    client: "Big Celebrity League",
    year: "2026",
    sector: "Sports · Entertainment",
    title: ["Building the Digital Home", "for a New Cricket League"],
    titleHighlight: 1,
    description: "Designed the official digital ecosystem for Big Cricket League, bringing together live matches, teams, players, fan engagement, and rich storytelling to create a unified experience for millions of cricket enthusiasts.",
    impact: [
      { k: "Celebrity teams", v: "6" },
      { k: "Leaderboard Stats", v: "90+" },
      { k: "Time saving", v: "62%" },
    ],
    visual: { c1: "#404040", c2: "#0d0d0d", accent: "#ececec" },  /* Mono — grey */
    live: null,
    locked: true,
  },
  {
    num: "04",
    slug: "pritam",
    logo: "assets/logo-case-pritam.png",
    preview: "assets/pritam-preview.jpg",
    client: "Pritam Restaurant",
    year: "2024",
    sector: "F&B · Heritage Brand",
    title: ["80 Years of Heritage,", "Reimagined Digitally."],
    titleHighlight: 1,
    description: "Designed the first official digital presence for one of Mumbai's most iconic restaurants by transforming decades of culinary heritage, history, and storytelling into an immersive brand experience without losing its authenticity.",
    impact: [
      { k: "Online reservations", v: "+57%" },
      { k: "Brand heritage", v: "Est. 1947" },
      { k: "Satisfaction score", v: "92%" },
    ],
    visual: { c1: "#383838", c2: "#0a0a0a", accent: "#dcdcdc" },  /* Mono — grey */
    live: "https://www.pritamrestaurant.com/",
  },
  {
    num: "05",
    slug: "pulpy-vpn",
    logo: "assets/logo-case-pulpyvpn.png",
    preview: "assets/pulpyvpn-preview.jpg",
    client: "Pulpy VPN",
    year: "2023",
    sector: "Privacy · Consumer App",
    title: ["Making digital privacy", "feel simple."],
    titleHighlight: 1,
    description: "Built a consumer VPN experience that removes complexity from online security through intuitive onboarding, clear interactions, and a seamless everyday experience.",
    impact: [
      { k: "Downloads", v: "100K+" },
      { k: "Avg. onboarding", v: "88s" },
      { k: "Play store rating", v: "4.2" },
    ],
    visual: { c1: "#464646", c2: "#101010", accent: "#f0f0f0" },  /* Mono — grey */
    live: "https://in.appyhigh.com/products/pulpy-vpn?sku_id=38266226",
  },
];

/* ── Redrob LLM custom visual ── */
function RedrobVisual({ active }) {
  return (
    <div className={"case-visual pv-frame pv-frame-tint " + (active ? "active" : "")}>
      <img
        src="assets/RedrobAI.png"
        alt="Redrob LLM — AI Intelligence Workspace"
        className="pv-svg-img pv-svg-img-contain"
      />
    </div>
  );
}

/* ── Pritam Restaurant custom visual ── */
function PritamVisual({ active }) {
  return (
    <div className={"case-visual pv-frame " + (active ? "active" : "")}>
      <img
        src="assets/pritam-preview.jpg"
        alt="Pritam Restaurant — 80 Years of Legacy"
        className="pv-svg-img"
      />
    </div>
  );
}

/* ── Phot AI custom visual ── */
function PhotAIVisual({ active }) {
  return (
    <div className={"case-visual pv-frame " + (active ? "active" : "")}>
      <img
        src="assets/MainCOver.png"
        alt="Phot AI — AI Creative Studio"
        className="pv-svg-img pv-svg-img-contain"
      />
    </div>
  );
}

/* ── BCL custom visual ── */
function BCLVisual({ active }) {
  return (
    <div className={"case-visual pv-frame " + (active ? "active" : "")}>
      <img
        src="assets/bcl-preview.jpg"
        alt="Big Celebrity League — Cricket meets celebrity culture"
        className="pv-svg-img"
      />
    </div>
  );
}

/* ── Pulpy VPN custom visual ── */
function PulpyVisual({ active }) {
  return (
    <div className={"case-visual pv-frame " + (active ? "active" : "")}>
      <img
        src="assets/pulpyvpn-preview.jpg"
        alt="Pulpy VPN — Privacy, finally feels effortless"
        className="pv-svg-img"
      />
    </div>
  );
}

function CaseVisual({ c, active }) {
  if (c.slug === "redrob-llm") return <RedrobVisual active={active} />;
  if (c.slug === "phot-ai")    return <PhotAIVisual active={active} />;
  if (c.slug === "bcl")        return <BCLVisual    active={active} />;
  if (c.slug === "pritam")     return <PritamVisual active={active} />;
  if (c.slug === "pulpy-vpn")  return <PulpyVisual  active={active} />;
  return (
    <div className={"case-visual " + (active ? "active" : "")}
      style={{background:`linear-gradient(135deg, ${c.visual.c1} 0%, ${c.visual.c2} 100%)`}}>
      <div className="cv-pattern" />
      <div className="cv-glow" style={{background:`radial-gradient(circle, ${c.visual.accent}33, transparent 70%)`}} />
      <div className="cv-frame">
        <div className="cv-chrome">
          <span /><span /><span />
          <div className="cv-url">{c.client.toLowerCase().replace(/\s/g,'')}.app</div>
        </div>
        <div className="cv-body">
          {c.logo ? (
            <div className="cv-logo-display">
              <img src={c.logo} alt={c.client} className="cv-logo-img" />
              <div className="cv-logo-label">{c.client} — {c.sector}</div>
            </div>
          ) : (
            <>
              <div className="cv-bar" style={{width:"62%", background:c.visual.accent}} />
              <div className="cv-bar" style={{width:"88%"}} />
              <div className="cv-bar" style={{width:"48%"}} />
              <div className="cv-grid">
                <div/><div/><div/><div/><div/><div/>
              </div>
              <div className="cv-label">{c.client} — {c.sector}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Scroll-driven motion for a case row: one-time staggered reveal (via `.in-view`)
// plus a continuous parallax drift on the visual while the row is near the viewport.
function useCaseRowMotion() {
  const rowRef = React.useRef(null);
  const visualRef = React.useRef(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.matchMedia("(max-width: 900px)").matches;
    if (reduce || narrow) return;
    const row = rowRef.current, vis = visualRef.current;
    if (!row || !vis) return;
    let raf = null;
    const tick = () => {
      const rect = row.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = rect.top + rect.height / 2 - vh / 2;
      const progress = Math.max(-1, Math.min(1, center / (vh * 0.75)));
      vis.style.transform = `translateY(${progress * -30}px)`;
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!raf) raf = requestAnimationFrame(tick);
      } else if (raf) {
        cancelAnimationFrame(raf);
        raf = null;
        vis.style.transform = "";
      }
    }, { rootMargin: "250px 0px" });
    io.observe(row);
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return { rowRef, visualRef, inView };
}

function CaseRow({ c, index }) {
  const reverse = index % 2 === 1;
  const { rowRef, visualRef, inView } = useCaseRowMotion();
  const [showGate, setShowGate] = React.useState(false);
  return (
    <div ref={rowRef} className={"case-row " + (reverse ? "reverse " : "") + (inView ? "in-view" : "")}>
      <div className="case-row-glow" style={{background:`radial-gradient(600px 420px at ${reverse ? "80%" : "20%"} 15%, var(--accent-glow), transparent 65%)`}} />

      <div className="case-info case-row-info">
        <div className="meta">
          <span>{c.client}</span><span>{c.year}</span><span>{c.sector}</span>
        </div>
        <h3>
          {c.title.map((line, li) => (
            <span className="line" key={li}>
              {li === c.titleHighlight
                ? <em className="serif" style={{ fontWeight: 600 }}>{line}</em>
                : line}
            </span>
          ))}
        </h3>
        <p>{c.description}</p>

        <div className="impact">
          {c.impact.map((m, i) => (
            <div key={i} className="impact-stat">
              <b>{m.v}</b><span>{m.k}</span>
            </div>
          ))}
        </div>

        <div className="ctas" style={{marginTop:32}}>
          {c.locked ? (
            <button type="button" className="btn primary" data-cursor="open" onClick={() => setShowGate(true)}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              Unlock Casestudy
            </button>
          ) : (
            <a href={"case-" + c.slug + ".html"} className="btn primary" data-cursor="open">
              View case study
              <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 17 L17 7 M9 7 H17 V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          )}
          {c.live && (
            <a href={c.live} target="_blank" rel="noreferrer" className="btn ghost" data-cursor="open">
              Explore Live
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M14 4 H20 V10 M20 4 L10 14 M5 6 V19 H18 V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          )}
        </div>
      </div>

      <div className="case-row-visual" ref={visualRef}>
        <div className="case-visual-wrap">
          <CaseVisual c={c} active={true} />
        </div>
      </div>

      {showGate && (
        <PasswordGate
          slug={c.slug}
          variant="modal"
          onClose={() => setShowGate(false)}
          onUnlock={() => { window.location.href = "case-" + c.slug + ".html"; }}
        />
      )}
    </div>
  );
}

function CaseSlider() {
  return (
    <section className="case-slider-v2" id="cases" data-screen-label="02 Case Studies">
      <div className="container case-list">
        {CASES.map((c, i) => <CaseRow c={c} index={i} key={c.slug} />)}
      </div>
    </section>
  );
}

window.CaseSlider = CaseSlider;
window.CASES = CASES;
