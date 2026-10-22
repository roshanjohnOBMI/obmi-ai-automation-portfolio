import { costing } from "../data/costing.js";
import { h, n0 } from "../lib/fmt.js";
import LoopVideo from "./LoopVideo.jsx";

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
            <li>Model health, TIDP/MIDP, clash and issue data on one board per project</li>
            <li>Live dashboards, trends and 3D views, not spreadsheets</li>
            <li>One connected suite: Revit Tools, Navisworks Tools and the web apps all report into it</li>
          </ul>
          <div className="meridian__stats">
            <div><strong>{n0(m.mid)}</strong><span>hours saved a month</span></div>
            <div><strong>{share}%</strong><span>of the suite's total</span></div>
            <div><strong>{n0(m.low)}–{n0(m.high)}</strong><span>low to high range</span></div>
          </div>
          <p className="muted small">Planning estimates, not measurements. Source: OBMI time-saved explorer.</p>
        </div>
        <LoopVideo className="meridian__hero" src="./media/meridian-spotlight.mp4" poster="./media/posters/meridian-spotlight.jpg" label="OBMI Meridian, animated" />
      </div>
      <div className="meridian__wide">
        <LoopVideo src="./media/meridian-dashboards.mp4" poster="./media/posters/meridian-dashboards.jpg" label="Meridian dashboards: headline numbers, health runs and trends" />
      </div>
    </section>
  );
}
