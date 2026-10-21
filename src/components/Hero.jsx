import { automations, BASE_TEAM } from "../data/automations.js";

function yearlyHours() {
  const weeks = 46;
  const mins = automations.reduce(
    (sum, a) => sum + (a.manualMinutes - a.autoMinutes) * a.runsPerWeek * weeks,
    0
  );
  return Math.round(mins / 60);
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__copy">
        <p className="eyebrow">Places that belong, delivered faster</p>
        <h1>
          Automation that gives <em>BIM teams</em> their design time back.
        </h1>
        <p className="lede">
          Revit and Navisworks add-ins, Autodesk Platform Services integrations and live
          dashboards, built to remove the repetitive clicks from hospitality design delivery.
        </p>
        <div className="hero__cta">
          <a className="btn btn--solid" href="#reel">Watch the reel</a>
          <a className="btn" href="#time">See the time saved</a>
        </div>
      </div>

      <aside className="hero__stats" aria-label="Headline figures">
        <div className="stat">
          <strong>{automations.length}</strong>
          <span>tools in production</span>
        </div>
        <div className="stat">
          <strong>~{yearlyHours().toLocaleString()}</strong>
          <span>hours a year saved for a team of {BASE_TEAM} (estimate)</span>
        </div>
        <div className="stat">
          <strong>3</strong>
          <span>platforms joined up: Revit, Navisworks, ACC</span>
        </div>
        <span className="ring ring--xl" aria-hidden="true" />
      </aside>
    </section>
  );
}
