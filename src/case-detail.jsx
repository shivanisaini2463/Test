// Case-detail renderer — reads CASE_DETAILS from case-data.jsx

function CaseKicker({ children }) {
  return <div className="cd-kicker">{children}</div>;
}

function CaseHero({ c }) {
  return (
    <section className="case-detail-hero noise-bg" style={{
      background: `radial-gradient(ellipse 80% 60% at 70% 20%, ${c.cover?.c1}55, transparent 65%), var(--bg)`
    }}>
      <div className="bg-blur" style={{ background: `radial-gradient(circle, ${c.cover?.c1}44, transparent 70%)` }} />
      <div className="container">
        <div className="meta-row">
          <span>{c.client}</span>{!c.phases && <span>{c.year}</span>}<span>{c.sector}</span>
        </div>
        <h1>
          {c.title[0]} <span className="serif">{c.title[1]}</span>
        </h1>
        <p className="brief">{c.brief}</p>
        <div className="case-facts">
          {c.facts.map((f, i) => (
            <div className="f" key={i}><b>{f.k}</b><span>{f.v}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cover({ cover }) {
  if (cover.img) {
    return (
      <div className="container">
        <div className="case-cover case-cover-img">
          <img src={cover.img} alt={cover.label} className="case-cover-photo" />
          <div className="case-cover-label">{cover.label}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="case-cover" style={{background: `repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0 2px, transparent 2px 14px), linear-gradient(135deg, ${cover.c1}, ${cover.c2})`}}>
        <div className="label">{cover.label}</div>
      </div>
    </div>
  );
}

/* ---------- Phase-based case study layout (used when c.phases is present) ---------- */

function OverviewSection({ overview }) {
  if (!overview) return null;
  return (
    <section className="cd-section">
      <div className="container cd-grid">
        <div className="cd-left">
          <CaseKicker>Overview</CaseKicker>
        </div>
        <div className="cd-right">
          <p className="cd-overview-statement">{overview}</p>
        </div>
      </div>
    </section>
  );
}

function ProblemStatementSection({ p }) {
  if (!p) return null;
  return (
    <section className="cd-section cd-alt">
      <div className="container cd-grid">
        <div className="cd-left">
          <CaseKicker>Problem Statement</CaseKicker>
        </div>
        <div className="cd-right">
          <p className="cd-p">{p.intro}</p>
          <div className="cd-artifacts">
            {p.challenges.map((c, i) => (
              <div className="cd-artifact" key={i}>
                <div className="cd-challenge-k">{c.k}</div>
                <div className="cd-challenge-v">{c.v}</div>
              </div>
            ))}
          </div>
          {p.closing && <p className="cd-p" style={{marginTop: 32, marginBottom: 0}}>{p.closing}</p>}
        </div>
      </div>
    </section>
  );
}

function BusinessGoalsSection({ businessGoals }) {
  if (!businessGoals) return null;
  return (
    <section className="cd-section">
      <div className="container cd-grid">
        <div className="cd-left"><CaseKicker>Business Goals</CaseKicker></div>
        <div className="cd-right">
          <p className="cd-p" style={{marginBottom: 0}}>{businessGoals}</p>
        </div>
      </div>
    </section>
  );
}

function MyRoleSection({ myRoleDetail }) {
  if (!myRoleDetail) return null;
  return (
    <section className="cd-section cd-alt">
      <div className="container cd-grid">
        <div className="cd-left"><CaseKicker>My Role</CaseKicker></div>
        <div className="cd-right">
          <ul className="cd-summary-list">
            {myRoleDetail.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function TargetAudienceSection({ targetAudience }) {
  if (!targetAudience) return null;
  return (
    <section className="cd-section">
      <div className="container cd-grid">
        <div className="cd-left"><CaseKicker>Target Audience</CaseKicker></div>
        <div className="cd-right">
          <div className="cd-pills">
            {targetAudience.map((a, i) => <span className="cd-pill" key={i}>{a}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhaseImagePlaceholder({ label }) {
  return (
    <div className="cd-phase-image">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M21 15l-5.5-5.5a1.5 1.5 0 0 0-2.12 0L5 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span>Screenshot placeholder — {label}</span>
    </div>
  );
}

function PhaseSection({ phase, index, reveal }) {
  const num = String(index + 1).padStart(2, "0");
  const alt = index % 2 === 1;
  return (
    <section className={"cd-section cd-phase-section" + (alt ? " cd-alt" : "")}>
      <div className="container cd-grid">
        <div className="cd-left">
          <div className="cd-phase-marker">
            <span className="cd-phase-marker-label">Phase</span>
            <span className="cd-phase-marker-num">{num}</span>
          </div>
        </div>
        <div className="cd-right">
          <h3 className="cd-h">{phase.name}</h3>

          <div className="cd-phase-cols">
            <div className="cd-phase-col">
              <div className="cd-phase-col-label pain">Triggering Points</div>
              <ul className="cd-phase-list trigger">
                {phase.triggers.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
            <div className="cd-phase-col">
              <div className="cd-phase-col-label">Research &amp; Process</div>
              <ul className="cd-phase-list">
                {phase.research.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
            <div className="cd-phase-col">
              <div className="cd-phase-col-label gain">Key Decisions</div>
              <ul className="cd-phase-list decision">
                {phase.decisions.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
          </div>

          <div className="cd-phase-outcomes">
            {phase.outcomes.map((o, i) => (
              <div className="cd-phase-outcome" key={i}>
                <b>{o.v}</b>
                <span>{o.k}</span>
              </div>
            ))}
          </div>

          <PhaseImagePlaceholder label={`Phase ${num} — ${phase.name}`} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Generic flexible section — used for simpler, non-phase case studies ---------- */
function GenericSection({ kicker, body, body2, items, table, image, imgFit, breakdown, alt }) {
  return (
    <section className={"cd-section" + (alt ? " cd-alt" : "")}>
      <div className="container cd-grid">
        <div className="cd-left"><CaseKicker>{kicker}</CaseKicker></div>
        <div className="cd-right">
          {body && <p className="cd-p">{body}</p>}
          {items && (
            <ul className="cd-summary-list" style={{marginTop: body ? 8 : 0, marginBottom: body2 || image ? 32 : 0}}>
              {items.map((it, i) => (
                <li key={i}>
                  {typeof it === "string" ? it : <><strong style={{color: "var(--text)"}}>{it.k}: </strong>{it.v}</>}
                </li>
              ))}
            </ul>
          )}
          {table && (
            <div className="cd-datagrid" style={{margin: "8px 0 0"}}>
              {table.map((row, i) => (
                <div className="cd-datacell" key={i}>
                  <div className="cd-datak">{row.k}</div>
                  <div className="cd-datav">{row.v}</div>
                </div>
              ))}
            </div>
          )}
          {breakdown && (
            <div className="cd-breakdown-list">
              {breakdown.map((b, i) => (
                <div className="cd-breakdown-item" key={i}>
                  <h3 className="cd-h">{b.title}</h3>
                  <p className="cd-p">{b.subtext}</p>
                  {b.img
                    ? <img src={b.img} alt={b.title} className={"cd-phase-image cd-phase-photo" + (b.imgFit ? " cd-phase-photo-fit" : "")} />
                    : <PhaseImagePlaceholder label={b.title} />}
                </div>
              ))}
            </div>
          )}
          {body2 && <p className="cd-p" style={{marginTop: 24, marginBottom: 0}}>{body2}</p>}
          {image && (
            image.startsWith("assets/")
              ? <img src={image} alt={kicker} className={"cd-phase-image cd-phase-photo" + (imgFit ? " cd-phase-photo-fit" : "")} />
              : <PhaseImagePlaceholder label={image} />
          )}
        </div>
      </div>
    </section>
  );
}

function ContextSection({ ctx }) {
  if (!ctx) return null;
  return (
    <section className="cd-section">
      <div className="container cd-grid">
        <div className="cd-left">
          <CaseKicker>{ctx.kicker}</CaseKicker>
        </div>
        <div className="cd-right">
          <h3 className="cd-h">{ctx.h}</h3>
          <p className="cd-p">{ctx.b}</p>
          <div className="cd-pills">
            {ctx.pills.map((p, i) => <span className="cd-pill" key={i}>{p}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResearchSection({ r }) {
  return (
    <section className="cd-section cd-alt">
      <div className="container cd-grid">
        <div className="cd-left">
          <CaseKicker>{r.kicker}</CaseKicker>
        </div>
        <div className="cd-right">
          <h3 className="cd-h">{r.h}</h3>
          <p className="cd-p">{r.b}</p>
          <div className="cd-datagrid">
            {r.bullets.map((b, i) => (
              <div className="cd-datacell" key={i}>
                <div className="cd-datak">{b.k}</div>
                <div className="cd-datav">{b.v}</div>
              </div>
            ))}
          </div>
          <div className="cd-insights">
            <div className="cd-insights-label">Key insights</div>
            <ul>
              {r.insights.map((ins, i) => (
                <li key={i}><span className="cd-insnum">{String(i+1).padStart(2,"0")}</span><span>{ins}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PersonaSection({ personas }) {
  if (!personas || personas.length === 0) return null;
  return (
    <section className="cd-section">
      <div className="container cd-grid">
        <div className="cd-left">
          <CaseKicker>User Personas</CaseKicker>
        </div>
        <div className="cd-right">
          <h3 className="cd-h">Who we were designing for.</h3>
          <p className="cd-p" style={{marginBottom: 40}}>
            Synthesised from research into 3 primary archetypes — each representing a distinct relationship with the product and a different set of needs.
          </p>
          <div className="cd-personas">
            {personas.map((p, i) => (
              <div className="cd-persona" key={i}>
                <div className="cd-persona-head">
                  <div className="cd-persona-avatar">{p.initial}</div>
                  <div>
                    <div className="cd-persona-name">{p.name}</div>
                    <div className="cd-persona-role">{p.role}</div>
                  </div>
                </div>
                <blockquote className="cd-persona-quote">"{p.quote}"</blockquote>
                <div className="cd-persona-tags">
                  <div className="cd-persona-col">
                    <div className="cd-persona-col-label">Goals</div>
                    {p.goals.map((g, j) => <div key={j} className="cd-persona-goal"><span>✓</span>{g}</div>)}
                  </div>
                  <div className="cd-persona-col">
                    <div className="cd-persona-col-label">Pain Points</div>
                    {p.pains.map((g, j) => <div key={j} className="cd-persona-pain"><span>✗</span>{g}</div>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection({ p }) {
  return (
    <section className="cd-section cd-alt">
      <div className="container cd-grid">
        <div className="cd-left">
          <CaseKicker>{p.kicker}</CaseKicker>
        </div>
        <div className="cd-right">
          <h3 className="cd-h">{p.h}</h3>
          <p className="cd-p">{p.b}</p>
          <div className="cd-callout">
            <div className="cd-callout-label">How Might We</div>
            <div className="cd-callout-body">{p.statement}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneySection({ j }) {
  return (
    <section className="cd-section">
      <div className="container cd-grid">
        <div className="cd-left">
          <CaseKicker>{j.kicker}</CaseKicker>
        </div>
        <div className="cd-right">
          <h3 className="cd-h">{j.h}</h3>
          <p className="cd-p">{j.b}</p>
          <div className="cd-journey">
            {j.phases.map((ph, i) => (
              <div className="cd-phase" key={i}>
                <div className="cd-phase-idx">{String(i+1).padStart(2,"0")}</div>
                <div className="cd-phase-name">{ph.name}</div>
                <ul className="cd-phase-tasks">
                  {ph.tasks.map((t, k) => <li key={k}>{t}</li>)}
                </ul>
                <div className="cd-phase-pain">
                  <span className="cd-phase-pain-label">Pain</span>
                  <span>{ph.pain}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ pr }) {
  return (
    <section className="cd-section cd-alt">
      <div className="container cd-grid">
        <div className="cd-left">
          <CaseKicker>{pr.kicker}</CaseKicker>
        </div>
        <div className="cd-right">
          <h3 className="cd-h">{pr.h}</h3>
          <p className="cd-p">{pr.b}</p>
          <div className="cd-artifacts">
            {pr.artifacts.map((a, i) => (
              <div className="cd-artifact" key={i}>
                <div className="cd-artifact-k">{a.k}</div>
                <div className="cd-artifact-v">{a.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionSection({ s }) {
  return (
    <section className="cd-section">
      <div className="container cd-grid">
        <div className="cd-left">
          <CaseKicker>{s.kicker}</CaseKicker>
        </div>
        <div className="cd-right">
          <h3 className="cd-h">{s.h}</h3>
          <p className="cd-p">{s.b}</p>
          <ol className="cd-highlights">
            {s.highlights.map((h, i) => (
              <li key={i}>
                <span className="cd-hidx">{String(i+1).padStart(2,"0")}</span>
                <span>{h}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Gallery({ gallery, accent }) {
  return (
    <section className="cd-gallery-section">
      <div className="container">
        <div className="case-gallery">
          {gallery.map((g, i) => (
            <div key={i} className={"shot reveal" + (g.wide ? " wide" : "")}>
              {g.img
                ? <img src={g.img} alt={g.cap || ""} className="shot-img" />
                : <div className="shot-bg" style={{ background: `linear-gradient(${g.deg || "135deg"}, ${g.c1}, ${g.c2})` }} />
              }
              {g.cap && <div className="shot-cap">{g.cap}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OutcomesSection({ o }) {
  return (
    <section className="cd-section cd-outcomes">
      <div className="container cd-grid">
        <div className="cd-left">
          <CaseKicker>{o.kicker}</CaseKicker>
        </div>
        <div className="cd-right">
          <h3 className="cd-h">{o.h}</h3>
          <div className="cd-metrics">
            {o.metrics.map((m, i) => (
              <div className="cd-metric" key={i}>
                <div className="cd-metric-v">{m.v}</div>
                <div className="cd-metric-k">{m.k}</div>
                <div className="cd-metric-sub">{m.sub}</div>
              </div>
            ))}
          </div>
          {o.quote && (
            <blockquote className="cd-quote">
              <div className="cd-quote-mark">"</div>
              <div className="cd-quote-q">{o.quote.q}</div>
              <div className="cd-quote-a">— {o.quote.a}</div>
            </blockquote>
          )}
        </div>
      </div>
    </section>
  );
}

function ReflectionSection({ r }) {
  return (
    <section className="cd-section">
      <div className="container cd-grid">
        <div className="cd-left">
          <CaseKicker>{r.kicker}</CaseKicker>
        </div>
        <div className="cd-right">
          <h3 className="cd-h">{r.h}</h3>
          <p className="cd-p">{r.b}</p>
        </div>
      </div>
    </section>
  );
}

function NextCase({ c }) {
  const next = CASE_DETAILS[c.next];
  if (!next) return null;
  return (
    <section className="cd-next-section">
      <div className="container">
        <a href={"case-" + c.next + ".html"} className="case-next" data-cursor="next">
          <div>
            <div className="lbl">Next case — {next.num}</div>
            <h2>{next.title[0]} <span className="serif">{next.title[1]}</span></h2>
          </div>
          <div className="go">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7 17 L17 7 M9 7 H17 V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </a>
      </div>
    </section>
  );
}

function CaseDetail({ slug }) {
  const c = CASE_DETAILS[slug];
  if (!c) return <div style={{padding:200, textAlign:"center"}}>Case not found.</div>;

  if (c.phases) {
    return (
      <>
        <CaseHero c={c} />
        <Cover cover={c.cover} />
        <OverviewSection overview={c.overview} />
        <ProblemStatementSection p={c.problemStatement} />
        <BusinessGoalsSection businessGoals={c.businessGoals} />
        <MyRoleSection myRoleDetail={c.myRoleDetail} />
        <TargetAudienceSection targetAudience={c.targetAudience} />
        {c.phases.map((phase, i) => <PhaseSection phase={phase} index={i} key={i} />)}
        <NextCase c={c} />
      </>
    );
  }

  if (c.sections) {
    return (
      <>
        <CaseHero c={c} />
        <Cover cover={c.cover} />
        {c.sections.map((s, i) => <GenericSection {...s} alt={i % 2 === 1} key={i} />)}
        <NextCase c={c} />
      </>
    );
  }

  return (
    <>
      <CaseHero c={c} />
      <Cover cover={c.cover} />
      <ContextSection ctx={c.context} />
      <ResearchSection r={c.research} />
      <PersonaSection personas={c.personas} />
      <ProblemSection p={c.problem} />
      <JourneySection j={c.journey} />
      <ProcessSection pr={c.process} />
      <SolutionSection s={c.solution} />
      <Gallery gallery={c.gallery} />
      <OutcomesSection o={c.outcomes} />
      <ReflectionSection r={c.reflection} />
      <NextCase c={c} />
    </>
  );
}

window.CaseDetail = CaseDetail;
