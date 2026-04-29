// Shared nav + footer + shared utilities used across all pages

function Nav({ current }) {
  const [open, setOpen] = React.useState(false);
  // Close menu on route-link click
  const close = () => setOpen(false);
  // Prevent body scroll when menu open
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="index.html" className="brand"><span className="dot"></span> Shivani Saini</a>
          {/* Desktop links */}
          <div className="links">
            <a href="work.html" className={current==='work'?'active':''}>Work</a>
            <a href="about.html" className={current==='about'?'active':''}>About</a>
            <a href="contact.html" className={current==='contact'?'active':''}>Contact</a>
          </div>
          <a href="assets/shivani-saini-resume.pdf" className="cta nav-cta-desktop" data-cursor="download" download>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M10 14 L14 10 M8 12 L6 14 A3 3 0 0 0 10 18 L12 16 M12 8 L14 6 A3 3 0 0 1 18 10 L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Download Resume
          </a>
          {/* Hamburger — mobile only */}
          <button className={"nav-burger " + (open ? "open" : "")} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={"mobile-nav " + (open ? "open" : "")} aria-hidden={!open}>
        <div className="mobile-nav-inner">
          <a href="work.html" className={current==='work'?'active':''} onClick={close}>Work</a>
          <a href="about.html" className={current==='about'?'active':''} onClick={close}>About</a>
          <a href="contact.html" className={current==='contact'?'active':''} onClick={close}>Contact</a>
          <a href="assets/shivani-saini-resume.pdf" className="mobile-nav-cta" download onClick={close}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M10 14 L14 10 M8 12 L6 14 A3 3 0 0 0 10 18 L12 16 M12 8 L14 6 A3 3 0 0 1 18 10 L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer noise-bg" id="contact" data-screen-label="Footer">
      <div className="container">
        <div className="footer-cta">
          <span className="eyebrow">Let's talk</span>
          <h2>Have something<br/>worth <span className="serif">making</span>?</h2>
          <a href="mailto:shivani.sainidesigner@gmail.com" className="link-big" data-cursor="email">
            <span style={{width:10,height:10,borderRadius:"50%",background:"var(--ok)",boxShadow:"0 0 12px var(--ok)"}} />
            shivani.sainidesigner@gmail.com
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 17 L17 7 M9 7 H17 V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Shivani Saini. Crafted in India.</div>
          <div className="socials">
            <a href="https://www.behance.net/shivanisaini1#" target="_blank" rel="noreferrer" data-cursor="open">Behance</a>
            <a href="https://dribbble.com/shivanisaini_designer" target="_blank" rel="noreferrer" data-cursor="open">Dribbble</a>
            <a href="https://www.linkedin.com/in/shivanisainidesigner/" target="_blank" rel="noreferrer" data-cursor="open">LinkedIn</a>
          </div>
          <div style={{fontFamily:"JetBrains Mono, monospace", fontSize:11, letterSpacing:"0.1em"}}>
            LAT 28.6139° · LON 77.2090°
          </div>
        </div>
      </div>
      <div className="footer-huge">Shivani Saini · Shivani Saini</div>
    </footer>
  );
}

// Reveal on scroll
function useReveal() {
  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// Page transition wrapper: fade+rise on mount
function PageShell({ children, current }) {
  useReveal();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => { requestAnimationFrame(() => setMounted(true)); }, []);
  return (
    <div className={"page " + (mounted ? "page-in" : "")}>
      <Tweaks />
      <Nav current={current} />
      {children}
      <Footer />
    </div>
  );
}

window.Nav = Nav;
window.Footer = Footer;
window.PageShell = PageShell;
window.useReveal = useReveal;
