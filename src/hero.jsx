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

function Hero() {
  const headline = ["I'm", "Shivani", "Saini"];
  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
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
          As a Senior Product Designer with 7 years of experience, I lead product evolution from discovery to delivery, combining product thinking, AI-first workflows, UX strategy and team leadership to transform complex ideas into trusted, scalable digital experiences. AI isn't just a productivity tool in my process—it's how I research faster, validate smarter and design with greater confidence.
        </p>
        <div className="hero-meta">
          <div className="item">
            <b>Reach out on</b>
            <SocialLinks className="hero-socials" />
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
window.HelloTicker = HelloTicker;
