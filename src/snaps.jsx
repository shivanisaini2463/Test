// Snapshot tiles — real project imagery with gradient fillers
const SNAPS_A = [
  { label: "AI Pixel Go",           img: "assets/snap-new-ai-pixel-go-1.jpg" },
  { label: "AI Video Generator",    img: "assets/snap-new-ai-video-generator.jpg" },
  { label: "Agent Rider",           img: "assets/snap-new-agent-rider.jpg" },
  { label: "Akina",                 img: "assets/snap-new-akina.jpg" },
  { label: "Bricsgreen",            img: "assets/snap-new-bricsgreen.jpg" },
  { label: "Bytelearn",             img: "assets/snap-new-bytelearn.jpg" },
];

const SNAPS_B = [
  { label: "CCL",                   img: "assets/snap-new-ccl.jpg" },
  { label: "Cleaner Go",            img: "assets/snap-new-cleaner-go.jpg" },
  { label: "Grandmama's Café",      img: "assets/snap-new-grandmamas-cafe.jpg" },
  { label: "Imagine Go",            img: "assets/snap-new-imagine-go.jpg" },
  { label: "Scanner Go",            img: "assets/snap-new-scanner-go.jpg" },
  { label: "Sikka Play",            img: "assets/snap-new-sikka-play.jpg" },
];

function SnapTile({ s }) {
  return (
    <div className="snap" data-cursor="open">
      {s.img
        ? <img src={s.img} alt={s.label} className="snap-img" />
        : <div className="inner" style={{ "--c1": s.c1, "--c2": s.c2, "--deg": s.deg }} />
      }
      <div className="label">{s.label}</div>
    </div>
  );
}

function SnapRow({ items, reverse }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className={"snap-row " + (reverse ? "reverse" : "")}>
      {doubled.map((s, i) => <SnapTile s={s} key={i} />)}
    </div>
  );
}

function Snapshots() {
  return (
    <section className="snapshots" id="snapshots" data-screen-label="03 Snapshots">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">03 — Snapshots</span>
            <h2>More work. <span className="serif">Less explanation.</span></h2>
          </div>
          <div className="right">
            50+ projects spanning fintech, F&B, sports, SaaS, and consumer apps. No long reads — just the work.
          </div>
        </div>
      </div>
      <div className="snap-rows">
        <SnapRow items={SNAPS_A} />
        <SnapRow items={SNAPS_B} reverse />
      </div>
    </section>
  );
}

window.Snapshots = Snapshots;
