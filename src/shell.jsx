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
            <a href="https://drive.google.com/file/d/1w-f3pujuuSCP8YM9i7Eykn4Uc5ahKfaq/view?usp=drive_link" className="cta nav-cta-desktop" data-cursor="download" target="_blank" rel="noopener noreferrer">
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
          <a href="https://drive.google.com/file/d/1w-f3pujuuSCP8YM9i7Eykn4Uc5ahKfaq/view?usp=drive_link" className="mobile-nav-cta" target="_blank" rel="noopener noreferrer" onClick={close}>
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

// Password-gated case studies — client-side friction gate, not real security
const CASE_LOCKS = { bcl: "bcl26" };

function isCaseUnlocked(slug) {
  if (!CASE_LOCKS[slug]) return true;
  return sessionStorage.getItem("unlocked-case-" + slug) === "1";
}

function unlockCase(slug, pwd) {
  if (pwd === CASE_LOCKS[slug]) {
    sessionStorage.setItem("unlocked-case-" + slug, "1");
    return true;
  }
  return false;
}

function PasswordGate({ slug, variant, onUnlock, onClose }) {
  const [pwd, setPwd] = React.useState("");
  const [error, setError] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (unlockCase(slug, pwd)) {
      setError(false);
      onUnlock && onUnlock();
    } else {
      setError(true);
    }
  };

  const box = (
    <form className="password-gate-box" onSubmit={submit} onClick={(e) => e.stopPropagation()}>
      <div className="password-gate-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
      </div>
      <div className="password-gate-title">This case study is password protected</div>
      <div className="password-gate-sub">Enter the password to unlock it.</div>
      <input
        type="password"
        className="password-gate-input"
        placeholder="Password"
        value={pwd}
        onChange={(e) => { setPwd(e.target.value); setError(false); }}
        autoFocus
      />
      {error && <div className="password-gate-error">Incorrect password — try again.</div>}
      <div className="password-gate-actions">
        <button type="submit" className="btn primary">Unlock</button>
        {onClose && <button type="button" className="btn ghost" onClick={onClose}>Cancel</button>}
      </div>
    </form>
  );

  if (variant === "modal") {
    return (
      <div className="password-gate-overlay" onClick={onClose}>
        {box}
      </div>
    );
  }

  return <div className="password-gate-page container">{box}</div>;
}

window.Nav = Nav;
window.Footer = Footer;
window.PageShell = PageShell;
window.useReveal = useReveal;
window.SocialLinks = SocialLinks;
window.CASE_LOCKS = CASE_LOCKS;
window.isCaseUnlocked = isCaseUnlocked;
window.unlockCase = unlockCase;
window.PasswordGate = PasswordGate;
