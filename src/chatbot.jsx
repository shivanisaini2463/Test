// Shivani's assistant — floating pill → ⌘K glass panel, streams from /api/chat.
// Self-mounts into its own root, so any page that loads this script gets it.

const CBOT_STARTERS = [
  "What's your experience with AI products?",
  "Walk me through the Redrob AI case study",
  "What tools and skills do you work with?",
];

function Chatbot() {
  const [open, setOpen] = React.useState(false);
  const [msgs, setMsgs] = React.useState([]); // {role:'user'|'assistant', content}
  const [input, setInput] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const threadRef = React.useRef(null);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  React.useEffect(() => {
    if (open && inputRef.current) setTimeout(() => inputRef.current.focus(), 300);
  }, [open]);

  React.useEffect(() => {
    if (threadRef.current) threadRef.current.scrollTop = threadRef.current.scrollHeight;
  }, [msgs, open]);

  async function ask(text) {
    text = (text || "").trim();
    if (!text || busy) return;
    const history = msgs.map((m) => ({ role: m.role, content: m.content }));
    setMsgs((m) => [...m, { role: "user", content: text }, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history }),
      });
      if (!res.ok || !res.body) throw new Error("bad response");
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      let acc = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += dec.decode(value, { stream: true });
        setMsgs((m) => {
          const c = m.slice();
          c[c.length - 1] = { role: "assistant", content: acc };
          return c;
        });
      }
      if (!acc.trim()) throw new Error("empty");
    } catch (e) {
      setMsgs((m) => {
        const c = m.slice();
        c[c.length - 1] = {
          role: "assistant",
          content:
            "Sorry — I couldn't reach the server just now. You can email shivanisaini2463@gmail.com or connect on LinkedIn, and I'll get back to you.",
        };
        return c;
      });
    } finally {
      setBusy(false);
    }
  }

  const submit = (e) => {
    if (e) e.preventDefault();
    ask(input);
  };

  return (
    <>
      <button className="cbot-pill" onClick={() => setOpen(true)} data-cursor="chat" aria-label="Ask Shivani's assistant">
        <span className="cbot-pulse" />
        Ask me anything
        <kbd className="cbot-kbd">⌘K</kbd>
      </button>

      <div className={"cbot-overlay" + (open ? " open" : "")} onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }} role="dialog" aria-modal="true" aria-label="Chat with Shivani's assistant">
        <div className="cbot-panel">
          <div className="cbot-head">
            <span className="cbot-pulse" />
            <div>
              <div className="cbot-title">Shivani's assistant</div>
              <div className="cbot-sub">Ask about my work, process, and case studies</div>
            </div>
            <button className="cbot-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
          </div>

          <div className="cbot-thread" ref={threadRef}>
            {msgs.length === 0 && (
              <>
                <div className="cbot-greet">Hi! Ask me about my <span className="serif">work</span>, process, or a specific project — here are a few places to start:</div>
                <div className="cbot-chips">
                  {CBOT_STARTERS.map((q) => (
                    <button key={q} className="cbot-chip" onClick={() => ask(q)}>{q}</button>
                  ))}
                </div>
              </>
            )}

            {msgs.map((m, i) =>
              m.role === "user" ? (
                <div key={i} className="cbot-msg me"><div className="cbot-bubble">{m.content}</div></div>
              ) : (
                <div key={i} className="cbot-msg ai">
                  <div className="cbot-av">S</div>
                  <div className="cbot-bubble">
                    {m.content
                      ? m.content
                      : <span className="cbot-typing"><span /><span /><span /></span>}
                  </div>
                </div>
              )
            )}
          </div>

          <form className="cbot-foot" onSubmit={submit}>
            <div className="cbot-composer">
              <input
                ref={inputRef}
                className="cbot-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my work…"
                autoComplete="off"
              />
              <button className="cbot-send" type="submit" disabled={!input.trim() || busy} aria-label="Send">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 19V5M12 5l-6 6M12 5l6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
            <div className="cbot-hint">
              <span>Grounded only in Shivani's real experience</span>
              <span><kbd className="cbot-kbd">↵</kbd> send · <kbd className="cbot-kbd">esc</kbd> close</span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

window.Chatbot = Chatbot;

// Self-mount into a dedicated root so it works on every page independently.
(function () {
  var id = "cbot-root";
  if (document.getElementById(id)) return;
  var el = document.createElement("div");
  el.id = id;
  document.body.appendChild(el);
  ReactDOM.createRoot(el).render(React.createElement(Chatbot));
})();
