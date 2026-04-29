// 15 fictional client logos rendered as stylized wordmarks
const LOGOS = [
  { name: "Nebula", mark: "circle" },
  { name: "Parallax", mark: "slash" },
  { name: "Orbit", mark: "ring" },
  { name: "Flux", mark: "wave" },
  { name: "Lumen", mark: "square" },
  { name: "Kinetic", mark: "tri" },
  { name: "Vellum", mark: "serif" },
  { name: "Prism", mark: "hex" },
  { name: "Halide", mark: "dot" },
  { name: "Cortex", mark: "cross" },
  { name: "Vantage", mark: "arrow" },
  { name: "Quanta", mark: "q" },
  { name: "Meridian", mark: "line" },
  { name: "Aperture", mark: "ap" },
  { name: "Zenith", mark: "z" },
];

function LogoMark({ mark }) {
  const s = { width: 28, height: 28, flex: "none" };
  switch (mark) {
    case "circle":
      return <svg style={s} viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>;
    case "slash":
      return <svg style={s} viewBox="0 0 24 24"><path d="M5 19 L19 5 M5 5 L19 5 M5 19 L19 19" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>;
    case "ring":
      return <svg style={s} viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="2" fill="none"/><ellipse cx="12" cy="12" rx="4" ry="10" stroke="currentColor" strokeWidth="2" fill="none"/></svg>;
    case "wave":
      return <svg style={s} viewBox="0 0 24 24"><path d="M2 12 Q7 6 12 12 T22 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>;
    case "square":
      return <svg style={s} viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"/><rect x="9" y="9" width="6" height="6" fill="currentColor"/></svg>;
    case "tri":
      return <svg style={s} viewBox="0 0 24 24"><path d="M12 4 L20 20 L4 20 Z" stroke="currentColor" strokeWidth="2" fill="none"/></svg>;
    case "serif":
      return <svg style={s} viewBox="0 0 24 24"><path d="M4 4 H20 M12 4 V20 M8 20 H16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>;
    case "hex":
      return <svg style={s} viewBox="0 0 24 24"><path d="M12 3 L20 7.5 L20 16.5 L12 21 L4 16.5 L4 7.5 Z" stroke="currentColor" strokeWidth="2" fill="none"/></svg>;
    case "dot":
      return <svg style={s} viewBox="0 0 24 24"><circle cx="6" cy="12" r="2" fill="currentColor"/><circle cx="12" cy="12" r="3.5" fill="currentColor"/><circle cx="19" cy="12" r="2" fill="currentColor"/></svg>;
    case "cross":
      return <svg style={s} viewBox="0 0 24 24"><path d="M12 4 V20 M4 12 H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/></svg>;
    case "arrow":
      return <svg style={s} viewBox="0 0 24 24"><path d="M4 12 H18 M12 6 L20 12 L12 18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case "q":
      return <svg style={s} viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M15 15 L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>;
    case "line":
      return <svg style={s} viewBox="0 0 24 24"><path d="M2 8 H22 M2 16 H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="2.5" fill="currentColor"/></svg>;
    case "ap":
      return <svg style={s} viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M12 3 L12 21 M3 12 L21 12" stroke="currentColor" strokeWidth="1" opacity="0.6"/></svg>;
    case "z":
      return <svg style={s} viewBox="0 0 24 24"><path d="M5 5 H19 L5 19 H19" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    default: return null;
  }
}

function LogoItem({ name, mark }) {
  return (
    <div className="logo" data-cursor="view">
      <LogoMark mark={mark} />
      <span className="name" style={{ marginLeft: 12 }}>{name}</span>
    </div>
  );
}

function ClientMarquee() {
  // duplicate for seamless scroll
  const doubled = [...LOGOS, ...LOGOS];
  const rowA = doubled;
  const rowB = [...LOGOS.slice(7), ...LOGOS.slice(0, 7), ...LOGOS.slice(7), ...LOGOS.slice(0, 7)];
  return (
    <section className="clients" id="clients">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">02 — Trust</span>
            <h2>Fifteen teams. <span className="serif">One obsession</span> — craft.</h2>
          </div>
          <div className="right">
            A cross-section of the startups, studios and public companies I've shipped with over the past decade.
          </div>
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {rowA.map((l, i) => <LogoItem key={"a" + i} {...l} />)}
        </div>
      </div>
      <div style={{ height: 18 }} />
      <div className="marquee reverse">
        <div className="marquee-track">
          {rowB.map((l, i) => <LogoItem key={"b" + i} {...l} />)}
        </div>
      </div>
    </section>
  );
}

window.ClientMarquee = ClientMarquee;
