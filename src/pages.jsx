// Work page + About page + Contact page

const WORK_CATS = [
  {
    id: "fnb",
    name: "F&B",
    projects: [
      { t: "Gupta Brands",          s: "Multi-brand F&B identity system",       c1: "#5a3a0a", img: "assets/work-gupta-brands.jpg" },
      { t: "Grandmama's Café",      s: "Comfort dining, served with nostalgia", c1: "#6b3a2a", img: "assets/work-grandmamas.jpg" },
      { t: "Akina",                 s: "Contemporary Japanese dining",          c1: "#3a1a2a", img: "assets/work-akina.jpg" },
      { t: "The Food Town",         s: "QR-first ordering for dine-in crowds",  c1: "#6b3a1a", img: "assets/work-foodtown.jpg" },
      { t: "Taftoon Bar & Kitchen", s: "Modern Indian brasserie, redesigned",   c1: "#4a4a1a", img: "assets/work-taftoon.jpg" },
      { t: "Qinling",               s: "Refined Chinese dining, digitised",     c1: "#2a1a1a", img: "assets/work-qinling.jpg" },
      { t: "SpiceKlub",             s: "Bold flavours, bolder digital presence",c1: "#6b2a0a", img: "assets/work-spiceklub.jpg" },
      { t: "Rolling Pin",           s: "Artisan bakery brand & ordering app",   c1: "#5a3a1a", img: "assets/work-rollingpin.jpg" },
    ],
  },
  {
    id: "ai",
    name: "AI-based",
    projects: [
      { t: "Kyral AI",               s: "AI-powered productivity suite for modern teams",      c1: "#2a1e5a", img: "assets/work-kyral.jpg" },
      { t: "AI Beauty App",          s: "Personalised AI skincare & beauty analysis app",      c1: "#5a1a4a", img: "assets/work-beauty-app.jpg" },
      { t: "AI Pixel Go",            s: "One-tap AI image enhancement for mobile",             c1: "#1a2a5a", img: "assets/work-ai-pixel-go.jpg" },
      { t: "Kuwaiti Bot",            s: "Conversational AI chatbot for Gulf market users",     c1: "#1a4a3a", img: "assets/work-kuwaiti-bot.jpg" },
      { t: "AI Avatar Generator",    s: "Generative AI portrait studio for digital identities",c1: "#4a1a5a", img: "assets/work-ai-avatar.jpg" },
      { t: "Pictoon",                s: "AI-driven cartoon & illustration creator app",        c1: "#5a2a1a", img: "assets/work-pictoon.jpg" },
      { t: "AI Video Generator",     s: "Text-to-video AI tool for creators & marketers",     c1: "#1a3a5a", img: "assets/work-ai-video-gen.jpg" },
      { t: "Imagine Go",             s: "AI image generation platform for visual storytelling",c1: "#3a1a5a", img: "assets/work-imagine-go.jpg" },
    ],
  },
  {
    id: "edtech",
    name: "Ed-tech",
    projects: [
      { t: "WWI Virtual Academy", s: "Media education for the digital age",       c1: "#1e5a5a", img: "assets/work-wwi.jpg" },
      { t: "eVidya",              s: "Accessible e-learning for every learner",   c1: "#1a4a5a", img: "assets/work-evidya.jpg" },
      { t: "Bytelearn",           s: "Personalised coding education platform",    c1: "#1a3a6b", img: "assets/work-bytelearn.jpg" },
      { t: "Elite Education",     s: "Premium tutoring platform, built to scale", c1: "#5a1e6b", img: "assets/work-elite.jpg" },
    ],
  },
  {
    id: "gaming",
    name: "Gaming & Sports",
    projects: [
      { t: "Big Celebrity League",      s: "Celebrity cricket fantasy platform for India",        c1: "#1a5c2e", img: "assets/work-bcl.jpg" },
      { t: "Fantom Play",               s: "Fantasy sports & real-time fan engagement app",       c1: "#4a1e6b", img: "assets/work-fantomplay.jpg" },
      { t: "Sikka Play",                s: "Skill-based gaming platform with real rewards",       c1: "#6b3a0a", img: "assets/work-sikkaplay.jpg" },
      { t: "Celebrity Cricket League",  s: "Live cricket experience for celebrity team fans",     c1: "#1a3a5c", img: "assets/work-ccl.jpg" },
    ],
  },
  {
    id: "entertainment",
    name: "Entertainment & Media",
    projects: [
      { t: "Needy",       s: "Social platform connecting people through shared needs",  c1: "#3a2a5a", img: "assets/work-needy.jpg" },
      { t: "Flyer",       s: "Event discovery & social nightlife planning app",         c1: "#5a1e4a", img: "assets/work-flyer.jpg" },
      { t: "Eventy",      s: "End-to-end event ticketing & experience platform",        c1: "#4a1a5a", img: "assets/work-eventy.jpg" },
      { t: "Masterfeed",  s: "Personalised content feed for creators & consumers",     c1: "#5a1a2a", img: "assets/work-masterfeed.jpg" },
    ],
  },
  {
    id: "realestate",
    name: "Real Estate",
    projects: [
      { t: "Condo Kharido", s: "Smart property search & buying platform",   c1: "#1a3a5a", img: "assets/work-condo-kharido.jpg" },
      { t: "Builder CRM",   s: "End-to-end CRM for real estate developers", c1: "#2a3a4a", img: "assets/work-builder-crm.jpg" },
      { t: "Agent Rider",   s: "Field agent app for on-ground property ops", c1: "#1a2a4a", img: "assets/work-agent-rider.jpg" },
    ],
  },
  {
    id: "misc",
    name: "Miscellaneous",
    projects: [
      { t: "TV Lens",         s: "AI-powered TV content discovery platform",           c1: "#2a2a5a", img: "assets/work-tv-lens.jpg" },
      { t: "Cleaner Go",      s: "Smart phone cleaner & storage optimiser app",        c1: "#1a3a2a", img: "assets/work-cleaner-go.jpg" },
      { t: "Steelora",        s: "B2B steel procurement & supply chain platform",      c1: "#2a3a4a", img: "assets/work-steelora.jpg" },
      { t: "Share Karo",      s: "Fast peer-to-peer file sharing app for mobile",      c1: "#1e3a6b", img: "assets/work-share-karo.jpg" },
      { t: "Stock",           s: "Real-time stock portfolio tracking & alerts app",    c1: "#1a4a2a", img: "assets/work-stock.jpg" },
      { t: "Bricsgreen",      s: "Sustainable investment platform for green projects", c1: "#1e4a2a", img: "assets/work-bricsgreen.jpg" },
      { t: "Scanner Go",      s: "AI-powered document scanner & PDF converter app",   c1: "#1a3a5a", img: "assets/work-scanner-go.jpg" },
      { t: "Screen Recorder", s: "Lightweight screen recording & editing tool",        c1: "#3a2a4a", img: "assets/work-screen-recorder.jpg" },
    ],
  },
];

function WorkCategories() {
  const [cat, setCat] = React.useState("fnb");
  const projects = WORK_CATS.find(c => c.id === cat).projects;
  return (
    <section style={{padding:"80px 0 140px", borderTop:"1px solid var(--border)"}}>
      <div className="container">
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end", gap:40, flexWrap:"wrap", marginBottom:40}}>
          <div>
            <span className="eyebrow">By Category</span>
            <h2 style={{fontFamily:"Geist", fontSize:"clamp(32px, 5vw, 60px)", fontWeight:500, letterSpacing:"-0.035em", lineHeight:1, margin:"12px 0 0"}}>
              Browse by <span className="serif" style={{fontFamily:"Instrument Serif", fontStyle:"italic", color:"var(--accent-2)", fontWeight:400}}>discipline</span>.
            </h2>
          </div>
          <p style={{color:"var(--text-dim)", maxWidth:340, fontSize:14, lineHeight:1.5}}>
            Explore work by industry. Click any card to open the Dribbble shot.
          </p>
        </div>

        <div className="cat-tabs">
          {WORK_CATS.map(c => (
            <button key={c.id} className={"cat-tab " + (cat === c.id ? "active" : "")} onClick={() => setCat(c.id)}>
              {c.name}
              <span className="count">{c.projects.length}</span>
            </button>
          ))}
        </div>

        <div className="cat-grid" key={cat}>
          {projects.map((p, i) => (
            <a key={i} href="https://dribbble.com/shivanisaini_designer" target="_blank" rel="noreferrer"
               className="cat-card" style={{animationDelay: (i*0.08)+"s"}} data-cursor="open">
              <div className="cat-img" style={{background:`linear-gradient(135deg, ${p.c1} 0%, #0a0a15 100%)`}}>
                {p.img
                  ? <img src={p.img} alt={p.t} className="cat-preview-img" />
                  : <div className="cat-img-pat" />
                }
              </div>
              <div className="cat-body">
                <div className="cat-text">
                  <h4>{p.t}</h4>
                  <p>{p.s}</p>
                </div>
                <div className="cat-arr">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 17 L17 7 M9 7 H17 V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkIndex() {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e) => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.4 && rect.bottom > window.innerHeight * 0.6;
      if (!inView) return;
      if (Math.abs(e.deltaY) < 5) return;
      const max = el.scrollWidth - el.clientWidth;
      const atStart = el.scrollLeft <= 0 && e.deltaY < 0;
      const atEnd = el.scrollLeft >= max - 1 && e.deltaY > 0;
      if (atStart || atEnd) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <>
      <section className="work-hero noise-bg">
        <div className="orb a" />
        <div className="container">
          <span className="eyebrow">Selected Work</span>
          <h1 style={{fontFamily:"Geist", fontSize:"clamp(44px, 8vw, 132px)", letterSpacing:"-0.045em", lineHeight:0.95, margin:"24px 0 32px", fontWeight:500}}>
            Six years of<br/><em className="serif" style={{fontFamily:"Instrument Serif", fontStyle:"italic", color:"var(--accent-2)", fontWeight:400}}>shipping things</em> that matter.
          </h1>
          <p style={{maxWidth:600, color:"var(--text-dim)", fontSize:18, lineHeight:1.6}}>
            50+ products across fintech, F&B, sports, SaaS, and consumer apps — each one a different problem worth solving.
          </p>
        </div>
      </section>

      <section className="work-rail-section">
        <div className="container rail-head">
          <div>
            <span className="eyebrow">02 — Featured</span>
            <h2 className="rail-h2">Horizontal <span className="serif">stories</span>, one at a time.</h2>
          </div>
          <div className="rail-hint">
            <span>Scroll or drag →</span>
          </div>
        </div>

        <div className="work-rail" ref={containerRef}>
          <div className="rail-inner">
            {CASES.map((c) => (
              <a key={c.slug} href={"case-" + c.slug + ".html"} className="rail-card" data-cursor="open">
                <div className="rail-visual" style={{background: `linear-gradient(135deg, ${c.visual.c1} 0%, #0a0a18 100%)`}}>
                  <div className="rail-index">{c.num}</div>
                  {c.preview
                    ? <img src={c.preview} alt={c.client} className="rail-preview-img" />
                    : <div className="rail-pat" />
                  }
                  <div className="rail-tags">
                    <span>{c.sector}</span>
                    <span>{c.year}</span>
                  </div>
                </div>
                <div className="rail-body">
                  <div className="rail-client">{c.client}</div>
                  <h3 className="rail-title" style={{"--rail-accent": c.visual.accent}}>{c.title[0]} <em className="serif">{c.title[1]}</em></h3>
                  <p className="rail-desc">{c.description}</p>
                  <div className="rail-kpis">
                    {c.impact.map((m, ii) => (
                      <div key={ii}><b>{m.v}</b><span>{m.k}</span></div>
                    ))}
                  </div>
                  <div className="rail-go">
                    <span>View Casestudy</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 17 L17 7 M9 7 H17 V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <WorkCategories />
    </>
  );
}

/* ---------- About ---------- */

// si = Simple Icons CDN (svg coloured by hex)
const si = (slug, hex) => `https://cdn.simpleicons.org/${slug}/${hex}`;

const TOOLKIT = [
  {
    cat: "Design & Prototyping",
    num: "01",
    accent: "#b6a6ff",
    items: [
      { name: "Figma",             icon: si("figma","F24E1E"),            c: "#F24E1E", role: "Primary design tool" },
      { name: "Adobe Illustrator", icon: si("adobeillustrator","FF9A00"), c: "#FF9A00", role: "Vector & illustration", fallbackGlyph: "Ai" },
      { name: "Framer",            icon: si("framer","0055FF"),           c: "#0055FF", role: "Interactive prototypes" },
      { name: "Webflow",           icon: si("webflow","4353FF"),          c: "#4353FF", role: "No-code publishing" },
    ],
  },
  {
    cat: "AI Tools",
    num: "02",
    accent: "#ff9ee0",
    items: [
      { name: "Claude",      icon: "https://unpkg.com/@lobehub/icons-static-png@latest/dark/claude.png",      c: "#D97757", role: "Thinking partner" },
      { name: "ChatGPT",     icon: "https://unpkg.com/@lobehub/icons-static-png@latest/dark/chatgpt.png",   c: "#10A37F", role: "Ideation & writing" },
      { name: "Midjourney",  icon: "https://unpkg.com/@lobehub/icons-static-png@latest/dark/midjourney.png", c: "#8B5CF6", role: "Visual exploration" },
      { name: "Galileo AI",  icon: "https://unpkg.com/@lobehub/icons-static-png@latest/dark/galileoai.png",  c: "#FF5A5F", role: "UI generation", fallbackGlyph: "G" },
    ],
  },
  {
    cat: "Research & Testing",
    num: "03",
    accent: "#6effa0",
    items: [
      { name: "Maze",             icon: si("maze","2E5BFF"),            c: "#2E5BFF", role: "Usability testing" },
      { name: "Hotjar",           icon: si("hotjar","FF3C5F"),          c: "#FF3C5F", role: "Heatmaps & replay" },
      { name: "Google Analytics", icon: si("googleanalytics","E8710A"), c: "#E8710A", role: "Traffic & behaviour" },
      { name: "Mixpanel",         icon: si("mixpanel","7856FF"),        c: "#7856FF", role: "Product analytics" },
    ],
  },
  {
    cat: "Collaboration & Workflow",
    num: "04",
    accent: "#ffb347",
    items: [
      { name: "Notion", icon: si("notion","ffffff"),   c: "#cccccc", role: "Documentation" },
      { name: "Loom",   icon: si("loom","625DF5"),     c: "#625DF5", role: "Async handoffs" },
      { name: "FigJam", icon: si("figma","1ABCFE"),    c: "#1ABCFE", role: "Collaborative whiteboard" },
      { name: "Jira",   icon: si("jira","0052CC"),     c: "#0052CC", role: "Project tracking" },
    ],
  },
];

function Toolkit() {
  return (
    <section style={{padding:"100px 0", borderTop:"1px solid var(--border)"}}>
      <div className="container">
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end", gap:40, flexWrap:"wrap", marginBottom:56}}>
          <div>
            <span className="eyebrow">03 — Toolkit</span>
            <h2 style={{fontFamily:"Geist", fontSize:"clamp(32px, 5vw, 60px)", fontWeight:500, letterSpacing:"-0.035em", lineHeight:1, margin:"12px 0 0"}}>
              The tools in <span className="serif" style={{fontFamily:"Instrument Serif", fontStyle:"italic", color:"var(--accent-2)", fontWeight:400}}>rotation</span>.
            </h2>
          </div>
          <p style={{maxWidth:320, color:"var(--text-dim)", fontSize:14, lineHeight:1.5}}>
            Sixteen tools I reach for daily — four per discipline, chosen for depth not breadth.
          </p>
        </div>

        <div className="tk-wall-v2">
          {TOOLKIT.map((cat, ci) => (
            <div className="tk-card-v2" key={ci} style={{"--tk-accent": cat.accent}}>
              {/* Watermark number */}
              <div className="tk-watermark">{cat.num}</div>
              {/* Header */}
              <div className="tk-card-header">
                <div className="tk-card-accent-line" />
                <div className="tk-card-meta">
                  <span className="tk-card-num">{cat.num}</span>
                  <h4 className="tk-card-title">{cat.cat}</h4>
                </div>
              </div>
              {/* Tool rows */}
              <div className="tk-rows">
                {cat.items.map((t, i) => (
                  <div className="tk-row" key={i} style={{"--tc": t.c}}>
                    <div className="tk-row-icon" style={{color: t.c, borderColor: t.c + "40", background: t.c + "12"}}>
                      {t.icon
                        ? <img src={t.icon} alt={t.name} className="tk-icon-img"
                            onError={e => { e.target.style.display="none"; e.target.nextSibling && (e.target.nextSibling.style.display=""); }}
                          />
                        : null}
                      <span style={{display: t.icon ? "none" : ""}}>
                        {t.glyph || t.fallbackGlyph || ""}
                      </span>
                    </div>
                    <div className="tk-row-body">
                      <span className="tk-row-name">{t.name}</span>
                      <span className="tk-row-role">{t.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const RECOG = [
  { title: "Motion Design with Figma", detail: "Udemy", url: "https://www.udemy.com/certificate/UC-f7b639b8-4f95-49c7-8ec9-ab4cd9ef4525/" },
  { title: "Design Thinking Guide for Successful Professionals", detail: "Udemy", url: "https://www.udemy.com/certificate/UC-5bbb06ed-55da-4c4a-879f-1db95885cd05/" },
  { title: "Build Wireframes and Low-Fidelity Prototypes", detail: "Google", url: "https://www.coursera.org/account/accomplishments/certificate/2KQ5ZC45GBE3" },
  { title: "Start the UX Design Process: Empathize, Define, and Ideate", detail: "Google", url: "https://www.coursera.org/account/accomplishments/certificate/RAHWADLBEHVA" },
  { title: "Foundations of User Experience (UX) Design", detail: "Google", url: "https://www.coursera.org/account/accomplishments/certificate/3HJRJBYKF4NM" },
];

const TESTIMONIALS = [
  {
    q: "I've had the pleasure of working with Shivani on multiple projects, including Needy and Elite. She consistently demonstrates a strong understanding of user experience and design strategy. Shivani is not only highly creative and detail-oriented but also extremely reliable — always responsive, punctual, and committed to delivering high-quality work on time.",
    n: "Mohit Chauhan",
    d: "Developer",
    init: "MC",
    c1: "#b6a6ff", c2: "#7c5cff",
  },
  {
    q: "Shivani single-handedly managed the entire design process for Fantom Play — from in-depth research and user flows to design ideation and seamless developer handoff. Her communication was clear, proactive, and always aligned with our goals. The level of detail, strategic thinking, and dedication she brought truly stood out.",
    n: "Alok Nadkar",
    d: "Director, Fantom Play",
    init: "AN",
    c1: "#ff9ee0", c2: "#6b1e5a",
  },
  {
    q: "Shivani possesses a rare blend of creativity, precision, and deep understanding of user behavior. From the first wireframe to the final pixel, her work exudes aesthetic finesse and functional brilliance. She doesn't just design interfaces — she crafts experiences. I'm incredibly grateful for her contribution.",
    n: "Ashish Aggarwal",
    d: "Founder, Capginn",
    init: "AA",
    c1: "#6effa0", c2: "#1a5c2e",
  },
  {
    q: "Over the course of just 3–4 months, Shivani guided me through the entire design process — from foundational theory to real-world application. She has a remarkable ability to break down complex concepts into clear, actionable insights. Thanks to her guidance, I was able to land a role as a UI/UX Designer with confidence.",
    n: "Mohnish Malbhage",
    d: "Designer & Student",
    init: "MM",
    c1: "#ffb347", c2: "#6b3d0e",
  },
];

function Testimonials() {
  return (
    <section style={{padding:"100px 0", borderTop:"1px solid var(--border)"}}>
      <div className="container">
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end", gap:40, flexWrap:"wrap", marginBottom:40}}>
          <div>
            <span className="eyebrow">05 — Kind Words</span>
            <h2 style={{fontFamily:"Geist", fontSize:"clamp(32px, 5vw, 60px)", fontWeight:500, letterSpacing:"-0.035em", lineHeight:1, margin:"12px 0 0"}}>
              Heard from <span className="serif" style={{fontFamily:"Instrument Serif", fontStyle:"italic", color:"var(--accent-2)", fontWeight:400}}>the rooms</span> I've been in.
            </h2>
          </div>
        </div>
        <div className="testim-grid">
          {TESTIMONIALS.map((t, i) => (
            <figure className="testim reveal" key={i} style={{animationDelay: (i*0.1)+"s"}}>
              <svg className="quote-mark" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M7 22 C 7 15 10 10 15 8 L 16 11 C 12 12.5 10 15.5 10 19 L 14 19 L 14 23 L 7 23 Z M 19 22 C 19 15 22 10 27 8 L 28 11 C 24 12.5 22 15.5 22 19 L 26 19 L 26 23 L 19 23 Z" fill="currentColor" opacity="0.6"/>
              </svg>
              <blockquote>{t.q}</blockquote>
              <figcaption>
                <div className="avatar" style={{background:`linear-gradient(135deg, ${t.c1}, ${t.c2})`}}>
                  <span>{t.init}</span>
                </div>
                <div className="who">
                  <b>{t.n}</b>
                  <span>{t.d}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* About page — floating gradient orb background, full-width aurora effect */
function AboutBg() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, raf;
    const t0 = performance.now();
    let last = 0;
    let mx = 0.5, my = 0.5;

    const resize = () => {
      const parent = canvas.parentElement;
      w = parent ? parent.offsetWidth : window.innerWidth;
      h = parent ? parent.offsetHeight : window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mx = (e.clientX - r.left) / (w || 1);
      my = (e.clientY - r.top)  / (h || 1);
    };

    // 5 orbs: [cx, cy, orbRadius, orbitR, orbitRy, speed, angleOffset, r, g, b, alpha]
    const ORBS = [
      { cx:0.20, cy:0.45, gr:0.65, ox:0.14, oy:0.10, sp:0.14, a0:0.00, r:124, g:92,  b:255, al:0.30 },
      { cx:0.78, cy:0.55, gr:0.55, ox:0.12, oy:0.14, sp:0.10, a0:2.10, r:182, g:166, b:255, al:0.22 },
      { cx:0.50, cy:0.15, gr:0.50, ox:0.18, oy:0.08, sp:0.18, a0:4.20, r:100, g:60,  b:255, al:0.22 },
      { cx:0.88, cy:0.25, gr:0.42, ox:0.08, oy:0.12, sp:0.12, a0:1.05, r:210, g:195, b:255, al:0.16 },
      { cx:0.12, cy:0.80, gr:0.48, ox:0.10, oy:0.10, sp:0.20, a0:3.14, r:150, g:100, b:255, al:0.18 },
    ];

    const draw = (ts) => {
      raf = requestAnimationFrame(draw);
      if (ts - last < 20) return;   // ~50 fps cap
      last = ts;
      const t = (ts - t0) / 1000;

      ctx.clearRect(0, 0, w, h);

      ORBS.forEach(o => {
        // Elliptical orbit + gentle mouse drift
        const px = (o.cx + Math.cos(t * o.sp + o.a0) * o.ox + (mx - 0.5) * 0.05) * w;
        const py = (o.cy + Math.sin(t * o.sp * 0.65 + o.a0) * o.oy + (my - 0.5) * 0.05) * h;
        const pr = o.gr * Math.min(w, h);

        const g = ctx.createRadialGradient(px, py, 0, px, py, pr);
        g.addColorStop(0,   `rgba(${o.r},${o.g},${o.b},${o.al})`);
        g.addColorStop(0.45,`rgba(${o.r},${o.g},${o.b},${(o.al * 0.35).toFixed(3)})`);
        g.addColorStop(1,   `rgba(${o.r},${o.g},${o.b},0)`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      });

      // Faint cursor halo
      if (mx > 0 && my > 0) {
        const hx = mx * w, hy = my * h;
        const hg = ctx.createRadialGradient(hx, hy, 0, hx, hy, 280);
        hg.addColorStop(0, "rgba(182,166,255,0.09)");
        hg.addColorStop(1, "rgba(182,166,255,0)");
        ctx.fillStyle = hg;
        ctx.fillRect(0, 0, w, h);
      }
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);
  return <canvas ref={ref} className="about-bg-canvas" />;
}

const TIMELINE = [
  { yr: "Jul 2025 — Present", role: "Senior Product Designer", co: "Mckinley Rice", loc: "Noida" },
  { yr: "May 2024 — Jun 2025", role: "Senior UI UX Designer", co: "Phot.AI", loc: "Gurugram" },
  { yr: "Sep 2020 — Apr 2024", role: "UI UX Designer", co: "Appyhigh", loc: "Gurugram" },
  { yr: "Feb 2020 — Aug 2020", role: "UI UX Designer", co: "Dreampool Developers Pvt. Ltd.", loc: "Delhi" },
  { yr: "Aug 2019 — Jan 2020", role: "Freelance Product & UI UX Designer", co: "Self Employed", loc: "Remote" },
];

function AboutPage() {
  return (
    <>
      <section className="about-hero noise-bg">
        <AboutBg />
        <div className="container" style={{position:"relative", zIndex:2}}>
          <span className="eyebrow">About</span>
          <h1>Great design is invisible.<br/><span className="serif">Mine gets remembered.</span></h1>
          <p className="lede">
            I'm a product designer who operates at the intersection of business strategy and interface craft. Six-plus years, fifty-plus products, and one consistent belief — that clarity is the hardest thing to design, and the most valuable thing to ship.
          </p>
        </div>
      </section>

      <section style={{padding:"80px 0", borderTop:"1px solid var(--border)"}}>
        <div className="container">
          <span className="eyebrow">02 — Career</span>
          <h2 style={{fontFamily:"Geist", fontSize:"clamp(32px, 5vw, 60px)", fontWeight:500, letterSpacing:"-0.035em", lineHeight:1, margin:"12px 0 32px"}}>
            Six years. <span className="serif" style={{fontFamily:"Instrument Serif", fontStyle:"italic", color:"var(--accent-2)", fontWeight:400}}>Five chapters.</span> Still unfinished.
          </h2>
          <div className="timeline">
            {TIMELINE.map((r, i) => (
              <div key={i} className="timeline-row">
                <div className="yr">{r.yr}</div>
                <div className="role">{r.role}</div>
                <div className="co">{r.co}</div>
                <div className="loc">{r.loc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Toolkit />

      <section style={{padding:"100px 0", borderTop:"1px solid var(--border)"}}>
        <div className="container">
          <span className="eyebrow">04 — Certifications</span>
          <h2 style={{fontFamily:"Geist", fontSize:"clamp(32px, 5vw, 60px)", fontWeight:500, letterSpacing:"-0.035em", lineHeight:1, margin:"12px 0 48px"}}>
            Courses & <span className="serif" style={{fontFamily:"Instrument Serif", fontStyle:"italic", color:"var(--accent-2)", fontWeight:400}}>certifications</span>.
          </h2>
          <div className="recog-list">
            {RECOG.map((r, i) => (
              <a key={i} href={r.url} target="_blank" rel="noreferrer" className="recog-row reveal" data-cursor="open">
                <div className="recog-num">0{i+1}</div>
                <div className="recog-main">
                  <div className="recog-title">{r.title}</div>
                  <div className="recog-detail">{r.detail}</div>
                </div>
                <div className="recog-arr">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 17 L17 7 M9 7 H17 V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}

function ContactPage() {
  const [sent, setSent] = React.useState(false);
  const nameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const companyRef = React.useRef(null);
  const briefRef = React.useRef(null);
  const submit = (e) => {
    e.preventDefault();
    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const company = companyRef.current?.value || "";
    const brief = briefRef.current?.value || "";
    const body = `Name: ${name}\nEmail: ${email}\nCompany / Role: ${company}\n\nProject Brief:\n${brief}`;
    window.open(`mailto:shivani.sainidesigner@gmail.com?subject=Project Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(body)}`);
    setSent(true);
  };
  return (
    <>
      <section className="contact-hero noise-bg">
        <div className="orb a" />
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1 style={{fontFamily:"Geist", fontSize:"clamp(44px, 8vw, 132px)", letterSpacing:"-0.045em", lineHeight:0.95, margin:"24px 0 32px", fontWeight:500}}>
            Let's make<br/><em className="serif" style={{fontFamily:"Instrument Serif", fontStyle:"italic", color:"var(--accent-2)", fontWeight:400}}>something real</em>.
          </h1>
          <p style={{maxWidth:600, color:"var(--text-dim)", fontSize:18, lineHeight:1.6}}>
            Good work starts with a good conversation. If you have a project worth building, I want to hear about it. Usually reply same day.
          </p>
        </div>
      </section>
      <section>
        <div className="container contact-grid">
          <div className="contact-card">
            <h3>Start a project</h3>
            {!sent ? (
              <form className="contact-field" onSubmit={submit}>
                <div className="group"><label>Your name</label><input ref={nameRef} required placeholder="Alex Chen" /></div>
                <div className="group"><label>Email</label><input ref={emailRef} required type="email" placeholder="alex@company.com" /></div>
                <div className="group"><label>Company / Role</label><input ref={companyRef} placeholder="Acme · Head of Product" /></div>
                <div className="group"><label>Project brief</label><textarea ref={briefRef} required placeholder="Tell me about what you're building, timeline, team shape…" /></div>
                <button type="submit" className="btn primary" style={{alignSelf:"flex-start", marginTop:8}} data-cursor="send">
                  Send Inquiry
                  <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 17 L17 7 M9 7 H17 V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </form>
            ) : (
              <div style={{padding:"40px 0", textAlign:"center"}}>
                <div style={{width:60, height:60, borderRadius:"50%", background:"var(--accent)", display:"inline-flex", alignItems:"center", justifyContent:"center", marginBottom:20, boxShadow:"0 0 30px var(--accent-glow)"}}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 13 L10 18 L20 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p style={{fontSize:18, margin:"0 0 8px"}}>Got it. Talk soon.</p>
                <p style={{color:"var(--text-dim)", fontSize:14, margin:0}}>I usually reply within 48 hours.</p>
              </div>
            )}
          </div>
          <div className="contact-info">
            <div className="block"><h4>Email</h4><p><a href="mailto:shivani.sainidesigner@gmail.com">shivani.sainidesigner@gmail.com</a></p></div>
            <div className="block"><h4>Based in</h4><p>Delhi, India · GMT+5:30</p></div>
            <div className="block"><h4>Social</h4><p>
              <a href="https://www.behance.net/shivanisaini1#" target="_blank" rel="noreferrer">Behance</a> · <a href="https://dribbble.com/shivanisaini_designer" target="_blank" rel="noreferrer">Dribbble</a> · <a href="https://www.linkedin.com/in/shivanisainidesigner/" target="_blank" rel="noreferrer">LinkedIn</a>
            </p></div>
          </div>
        </div>
      </section>
    </>
  );
}

window.WorkIndex = WorkIndex;
window.AboutPage = AboutPage;
window.ContactPage = ContactPage;
