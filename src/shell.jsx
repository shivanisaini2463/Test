// Shared nav + footer + shared utilities used across all pages

const SOCIALS = [
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/shivanisainidesigner/" },
  { id: "dribbble", label: "Dribbble", href: "https://dribbble.com/shivanisaini_designer" },
  { id: "behance",  label: "Behance",  href: "https://www.behance.net/shivanisaini1#" },
];

function SocialIcon({ id }) {
  if (id === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M7.5 10.5V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="7.5" cy="7.3" r="1.1" fill="currentColor"/>
        <path d="M11 17V10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M11 13c0-2.2 4-2.2 4 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    );
  }
  if (id === "dribbble") {
    return (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M4.3 9c4.3 1.5 10 1.7 15.4.6M3.6 14.6c4.8-1 9.7.4 12.6 5M14.3 4c2.2 3 3.6 8.4 3.1 14.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  }
  return <span className="social-glyph">Be</span>;
}

function SocialLinks({ className }) {
  return (
    <div className={"social-links " + (className || "")}>
      {SOCIALS.map(s => (
        <a key={s.id} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} data-cursor="open" className="social-link">
          <SocialIcon id={s.id} />
        </a>
      ))}
    </div>
  );
}

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
          <div className="nav-actions">
            <a href="assets/shivani-saini-resume.pdf" className="cta nav-cta-desktop" data-cursor="download" download>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 3V15M12 15L8 11M12 15L16 11M5 19H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Resume
            </a>
            {/* Hamburger — mobile only */}
            <button className={"nav-burger " + (open ? "open" : "")} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={"mobile-nav " + (open ? "open" : "")} aria-hidden={!open}>
        <div className="mobile-nav-inner">
          <a href="work.html" className={current==='work'?'active':''} onClick={close}>Work</a>
          <a href="about.html" className={current==='about'?'active':''} onClick={close}>About</a>
          <a href="contact.html" className={current==='contact'?'active':''} onClick={close}>Contact</a>
          <a href="assets/shivani-saini-resume.pdf" className="mobile-nav-cta" download onClick={close}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 3V15M12 15L8 11M12 15L16 11M5 19H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Resume
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
          <h2>Thanks for stopping by,<br/>let's <span className="serif">chat</span>!</h2>
          <a href="mailto:shivanisaini2463@gmail.com" className="link-big" data-cursor="email">
            <span style={{width:10,height:10,borderRadius:"50%",background:"var(--ok)",boxShadow:"0 0 12px var(--ok)"}} />
            shivanisaini2463@gmail.com
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 17 L17 7 M9 7 H17 V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
        <div className="footer-bottom">
          <div className="footer-credit">Designed &amp; developed using Figma and Claude Code.</div>
          <div className="footer-madewith">
            Made with <span>💛</span> &amp; <span>🍵</span>
          </div>
          <div className="footer-connect">
            <span className="footer-connect-label">Let's connect</span>
            <SocialLinks />
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
window.SocialLinks = SocialLinks;
