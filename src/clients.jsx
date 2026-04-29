// Client logo grid — real PNG logos, 5×2 grid, synchronised flash animation

const LOGOS = [
  { id: "poonawalla", src: "assets/logo-poonawalla.png", alt: "Poonawalla Fincorp" },
  { id: "photai",     src: "assets/logo-photai.png",     alt: "Phot.AI" },
  { id: "tata",       src: "assets/logo-tata.png",       alt: "TATA Mutual Fund" },
  { id: "akina",      src: "assets/logo-akina.png",      alt: "Akina" },
  { id: "redrob",     src: "assets/logo-redrob.png",     alt: "Redrob" },
  { id: "bricsgreen", src: "assets/logo-bricsgreen.png", alt: "BRICS Green" },
  { id: "wwi",        src: "assets/logo-wwi.png",        alt: "WWI Virtual Academy" },
  { id: "fantom",     src: "assets/logo-fantomplay.png", alt: "Fantom Play" },
  { id: "pritam",     src: "assets/logo-pritam.png",     alt: "Pritam" },
  { id: "gupta",      src: "assets/logo-gupta.png",      alt: "Gupta Brands" },
];

function LogoCell({ logo }) {
  return (
    <div className="bg-cell">
      <div className="bg-logo">
        <img src={logo.src} alt={logo.alt} className="bg-logo-img" />
      </div>
    </div>
  );
}

function Clients() {
  return (
    <section className="bg-section" id="clients" data-screen-label="Clients">
      <div className="container">
        <p className="bg-eyebrow">Brands worked with</p>
        <div className="bg-grid">
          {LOGOS.map(l => <LogoCell key={l.id} logo={l} />)}
        </div>
      </div>
    </section>
  );
}

window.Clients = Clients;
