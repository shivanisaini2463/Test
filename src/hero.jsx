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
          <strong>Senior AI-Native</strong> Product Designer, <strong>7+</strong> years of experience, turning complex workflows into simple, <strong>scalable</strong> products—combining <strong>AI-first</strong> product thinking, code-level prototyping, user research, testing and design leadership. Designed and shipped <strong>50+</strong> digital products across AI, Enterprise SaaS, FinTech, EdTech, SportsTech, Hospitality, Entertainment and Consumer domains. <strong>Led</strong> and <strong>mentored</strong> design teams, accelerated design delivery by <strong>75%</strong> and built <strong>scalable design systems</strong> from scratch.
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
