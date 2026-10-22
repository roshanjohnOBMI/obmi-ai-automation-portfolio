import { costing } from "../data/costing.js";
import { n0 } from "../lib/fmt.js";

export default function Hero() {
  const t = costing.total;
  return (
    <section className="hero">
      <div className="hero__copy">
        <p className="eyebrow">Places that belong, delivered faster</p>
        <h1>
          Automation that gives <em>BIM teams</em> their design time back.
        </h1>
        <p className="lede">
          OBMI Revit Tools, Navisworks add-ins and the Meridian command centre, built on Autodesk
          Platform Services to take the repetitive clicks out of hospitality design delivery.
        </p>
        <div className="hero__cta">
          <a className="btn btn--solid" href="#reel">Watch the reel</a>
          <a className="btn" href="#meridian">Meet Meridian</a>
          <a className="btn" href="#time">See the hours saved</a>
        </div>
      </div>

      <aside className="hero__stats" aria-label="Headline figures">
        <div className="stat">
          <strong>{n0(t.mid)}</strong>
          <span>hours saved a month across the tools (planning estimate)</span>
        </div>
        <div className="stat">
          <strong>≈{Math.round(t.fte)}</strong>
          <span>full-time equivalents of work given back</span>
        </div>
        <div className="stat">
          <strong>{costing.tools.length}</strong>
          <span>tools live: Revit, Navisworks and web apps</span>
        </div>
        <span className="ring ring--xl" aria-hidden="true" />
      </aside>
    </section>
  );
}
