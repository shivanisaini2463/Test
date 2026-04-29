// 5 featured case studies with visuals, impact metrics, and dual CTAs

const CASES = [
  {
    num: "01",
    slug: "redrob-llm",
    logo: "assets/logo-case-redrob.png",
    preview: "assets/redrob-preview.jpg",
    client: "Redrob LLM",
    year: "2025-26",
    sector: "B2B & B2C",
    title: ["One platform to", "know everything."],
    titleHighlight: 1,
    description: "AI-powered workspace for people search, company enrichment, resume ranking, and contact intelligence — built for teams that need answers fast.",
    impact: [
      { k: "Platform modules", v: "1 for All" },
      { k: "Research time saved", v: "71%" },
      { k: "Profiles indexed", v: "1M+" },
    ],
    visual: { c1: "#3a1e6b", c2: "#09060f", accent: "#b6a6ff" },  /* Purple */
    live: "https://redrob.example.com",
  },
  {
    num: "02",
    slug: "phot-ai",
    logo: "assets/logo-case-photai.png",
    preview: "assets/photai-preview.jpg",
    client: "Phot AI",
    year: "2024-25",
    sector: "AI · Creative Tools with Studio",
    title: ["Creatives that", "convert at scale."],
    titleHighlight: 1,
    description: "Full product design for an AI creative studio — from photo editing to ad generation — helping D2C brands produce performance creatives 10× faster.",
    impact: [
      { k: "Faster creative output", v: "10×" },
      { k: "Assets generated / mo", v: "500K+" },
      { k: "Saved Cost", v: "62%" },
    ],
    visual: { c1: "#6b1e5a", c2: "#0f050d", accent: "#ff9ee0" },  /* Pink */
    live: "https://photai.example.com",
  },
  {
    num: "03",
    slug: "bcl",
    logo: "assets/logo-case-bcl.png",
    preview: "assets/bcl-preview.jpg",
    client: "Big Celebrity League",
    year: "2026",
    sector: "Sports · Entertainment",
    title: ["Cricket meets", "celebrity culture."],
    titleHighlight: 1,
    description: "End-to-end design of a live cricket platform with scores, leaderboards, and fan engagement — built for India's love of celebrities and cricket.",
    impact: [
      { k: "Celebrity teams", v: "6" },
      { k: "Leaderboard Stats", v: "90+" },
      { k: "Time saving", v: "62%" },
    ],
    visual: { c1: "#1a5c2e", c2: "#050f08", accent: "#6effa0" },  /* Green */
    live: "https://bcl.example.com",
  },
  {
    num: "04",
    slug: "pritam",
    logo: "assets/logo-case-pritam.png",
    preview: "assets/pritam-preview.jpg",
    client: "Pritam Restaurant",
    year: "2024",
    sector: "F&B · Heritage Brand",
    title: ["80 years of", "legacy, reimagined."],
    titleHighlight: 1,
    description: "Translated a Mumbai institution est. 1947 into a modern digital presence — covering reservations, digital menus, and brand storytelling without losing heritage.",
    impact: [
      { k: "Online reservations", v: "+57%" },
      { k: "Brand heritage", v: "Est. 1947" },
      { k: "Satisfaction score", v: "92%" },
    ],
    visual: { c1: "#6b1e1e", c2: "#0f0505", accent: "#ff9a9a" },  /* Red */
    live: "https://pritam.example.com",
  },
  {
    num: "05",
    slug: "pulpy-vpn",
    logo: "assets/logo-case-pulpyvpn.png",
    preview: "assets/pulpyvpn-preview.jpg",
    client: "Pulpy VPN",
    year: "2023",
    sector: "Privacy · Consumer App",
    title: ["Privacy, finally", "feels effortless."],
    titleHighlight: 1,
    description: "Consumer VPN app designed from scratch — 90-second onboarding, higher trial-to-paid conversion, and security that feels effortless for everyday users.",
    impact: [
      { k: "Downloads", v: "100K+" },
      { k: "Avg. onboarding", v: "88s" },
      { k: "Play store rating", v: "4.2" },
    ],
    visual: { c1: "#6b3d0e", c2: "#0f0a03", accent: "#ffb347" },  /* Orange */
    live: "https://pulpyvpn.example.com",
  },
];

/* ── Redrob LLM custom visual ── */
function RedrobVisual({ active }) {
  return (
    <div className={"case-visual pv-frame " + (active ? "active" : "")}>
      <img
        src="assets/redrob-preview.jpg"
        alt="Redrob LLM — AI Intelligence Workspace"
        className="pv-svg-img"
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
        src="assets/photai-preview.jpg"
        alt="Phot AI — AI Creative Studio"
        className="pv-svg-img"
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

function CaseSlider() {
  const [idx, setIdx] = React.useState(0);
  const len = CASES.length;
  const touchStart = React.useRef(null);

  React.useEffect(() => {
    const t = setTimeout(() => setIdx(i => (i + 1) % len), 7000);
    return () => clearTimeout(t);
  }, [idx, len]);

  const go = (n) => setIdx(n);
  const next = () => setIdx((i) => (i + 1) % len);
  const prev = () => setIdx((i) => (i - 1 + len) % len);

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStart.current == null) return;
    const d = e.changedTouches[0].clientX - touchStart.current;
    if (d < -40) next();
    else if (d > 40) prev();
    touchStart.current = null;
  };

  const c = CASES[idx];

  return (
    <section className="case-slider-v2" id="cases" data-screen-label="02 Case Studies"
      onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>

      {/* Backdrop tint transitions */}
      {CASES.map((cs, i) => (
        <div key={i} className={"case-backdrop " + (idx === i ? "active" : "")}
          style={{background:`radial-gradient(900px 600px at 80% 20%, ${cs.visual.c1}, transparent 60%)`}} />
      ))}

      <div className="container case-head">
        <span className="eyebrow">02 — Selected Work</span>
        <h2 className="case-h2">Five stories, <span className="serif">6 years</span> in the making.</h2>
      </div>

      <div className="container case-stage">
        <div className="big-num-wrap">
          <span key={idx + "-num"} className="big-num anim">{c.num}</span>
        </div>

        <div className="case-grid" key={idx}>
          <div className="case-info">
            <div className="meta">
              <span>{c.client}</span><span>{c.year}</span><span>{c.sector}</span>
            </div>
            <h3>
              {c.title.map((line, li) => (
                <span className="line" key={li}>
                  <span style={{ animationDelay: (0.05 + li * 0.12) + "s" }}>
                    {li === c.titleHighlight
                      ? <em className="serif" style={{ fontStyle: "italic", color: c.visual.accent }}>{line}</em>
                      : line}
                  </span>
                </span>
              ))}
            </h3>
            <p>{c.description}</p>

            <div className="impact">
              {c.impact.map((m, i) => (
                <div key={i} className="impact-stat" style={{animationDelay: (0.3 + i*0.1) + "s"}}>
                  <b>{m.v}</b><span>{m.k}</span>
                </div>
              ))}
            </div>

            <div className="ctas" style={{marginTop:32}}>
              <a href={"case-" + c.slug + ".html"} className="btn primary" data-cursor="open">
                View case study
                <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 17 L17 7 M9 7 H17 V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href={c.live} target="_blank" rel="noreferrer" className="btn ghost" data-cursor="open">
                Explore Live
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M14 4 H20 V10 M20 4 L10 14 M5 6 V19 H18 V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>

          <div className="case-visual-wrap">
            <CaseVisual c={c} active={true} key={"v-"+idx} />
          </div>
        </div>

        <div className="case-footer-row">
          <div className="case-thumbs">
            {CASES.map((cs, i) => (
              <button key={i} className={idx === i ? "active" : ""} onClick={() => go(i)} aria-label={"Case " + cs.num} />
            ))}
          </div>
          <div className="case-controls">
            <div className="counter">
              <span className="curr">{String(idx + 1).padStart(2, "0")}</span>
              <span> / {String(len).padStart(2, "0")}</span>
            </div>
            <button onClick={prev} aria-label="Previous" data-cursor="prev">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 6 L9 12 L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button onClick={next} aria-label="Next" data-cursor="next">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6 L15 12 L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

window.CaseSlider = CaseSlider;
window.CASES = CASES;
