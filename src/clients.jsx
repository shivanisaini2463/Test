// Client logo grid — real PNG logos, 5×2 grid, synchronised flash animation

const LOGOS = [
  { id: "tata",       src: "assets/logo-tata-mono.png",       alt: "TATA Mutual Fund" },
  { id: "poonawalla", src: "assets/logo-poonawalla-mono.png", alt: "Poonawalla Fincorp" },
  { id: "redrob",     src: "assets/logo-redrob-mono.png",     alt: "Redrob" },
  { id: "photai",     src: "assets/logo-photai-mono.png",     alt: "Phot AI" },
  { id: "akina",      src: "assets/logo-akina-mono.png",      alt: "Akina" },
  { id: "wwi",        src: "assets/logo-wwi-mono.png",        alt: "WWI Virtual Academy" },
  { id: "bcl",        alt: "Big Celebrity League", text: "Big Celebrity League" },
  { id: "pritam",     src: "assets/logo-pritam-mono.png",     alt: "Pritam da Dhaba" },
];

function LogoCell({ logo }) {
  const [broken, setBroken] = React.useState(false);
  return (
    <div className="bg-cell">
      <div className="bg-logo">
        {!logo.src || (logo.text && broken)
          ? <span className="bg-logo-text">{logo.text}</span>
          : <img src={logo.src} alt={logo.alt} className="bg-logo-img" onError={() => setBroken(true)} />}
      </div>
    </div>
  );
}

function Clients() {
  return (
    <section className="bg-section" id="clients" data-screen-label="Clients">
      <div className="container">
        <p className="bg-eyebrow">Brands worked on</p>
        <div className="bg-grid">
          {LOGOS.map((l) => <LogoCell key={l.id} logo={l} />)}
        </div>
      </div>
    </section>
  );
}

window.Clients = Clients;
