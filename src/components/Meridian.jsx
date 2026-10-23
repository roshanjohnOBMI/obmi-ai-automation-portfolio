import { costing } from "../data/costing.js";
import { n0 } from "../lib/fmt.js";
import LoopVideo from "./LoopVideo.jsx";

// Boards in Meridian 2.0, as shown in the brand film's tour (demo project).
const boards = [
  { name: "Overview", note: "A status on every board, and what needs attention first." },
  { name: "Issue tracking", note: "Issues live from ACC, with a status dashboard for every building or zone." },
  { name: "Model sharing", note: "Required against submitted, trade by trade. Oversized Revit models flagged." },
  { name: "Model performance", note: "Every health check run, scored and trended." },
  { name: "TIDP/MIDP progress", note: "Planned against issued deliverables, by package and discipline." },
  { name: "Missing clash parameters", note: "Tracked from one report to the next, by trade and by parameter." },
  { name: "Viewpoints and clash report", note: "One page for a tower, a podium or external works." },
  { name: "Setup", note: "Five guided steps: project, folders, reports, rules and team." },
];

export default function Meridian() {
  const m = costing.apps.find((a) => a.name === "Meridian");
  const share = Math.round((m.mid / costing.total.mid) * 100);
  return (
    <section id="meridian" className="section section--feature">
      <div className="meridian">
        <div className="meridian__copy">
          <p className="eyebrow">The main app</p>
          <h2>OBMI <em>Meridian</em></h2>
          <p className="lede">The command centre of BIM for OBMI. Every project, every model, every number, in one place, reading straight from Autodesk Construction Cloud.</p>
          <ul className="ticks">
            <li>An Overview board that says what needs attention first, with a project switcher across every setup</li>
            <li>Model sharing, issues, model performance, TIDP/MIDP, clash parameters, viewpoints and clashes, one board each</li>
            <li>Add-in Control: usage by office and user, versions, rollback and a kill switch for every OBMI add-in</li>
            <li>Excel and PDF exports on every board, in a light or a dark theme</li>
          </ul>
          <div className="meridian__stats">
            <div><strong>{n0(m.mid)}</strong><span>hours saved a month</span></div>
            <div><strong>{share}%</strong><span>of the suite's total</span></div>
            <div><strong>{n0(m.low)}–{n0(m.high)}</strong><span>low to high range</span></div>
          </div>
          <p className="muted small">Planning estimates, not measurements. Source: OBMI time-saved explorer.</p>
        </div>
        <LoopVideo className="meridian__hero" src="./media/meridian-spotlight.mp4" poster="./media/posters/meridian-spotlight.jpg" label="How everything reaches Meridian, and the live picture" />
      </div>
      <div className="meridian__wide">
        <LoopVideo src="./media/meridian-dashboards.mp4" poster="./media/posters/meridian-dashboards.jpg" label="Meridian 2.0, board by board (built-in demo project)" />
      </div>
      <ol className="mboards" aria-label="Meridian boards">
        {boards.map((b, i) => (
          <li key={b.name}><span>{String(i + 1).padStart(2, "0")}</span><b>{b.name}</b><em>{b.note}</em></li>
        ))}
      </ol>
      <div className="meridian__wide">
        <LoopVideo src="./media/meridian-addin.mp4" poster="./media/posters/meridian-addin.jpg" label="Add-in Control: track, control and onboard every OBMI add-in (sample data)" />
      </div>
    </section>
  );
}
