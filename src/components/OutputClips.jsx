import { costing } from "../data/costing.js";
import { n0 } from "../lib/fmt.js";
import LoopVideo from "./LoopVideo.jsx";

const clips = [
  { tool: "ACC Model Health Check", src: "clip-mhc", title: "ACC Model Health Check", text: "Models opened in cloud Revit through Design Automation, tests run against the OBMI ruleset, failures shown in 3D." },
  { tool: "ACC vs TIDP/MIDP Checker", src: "clip-tidp", title: "ACC vs TIDP/MIDP Checker", text: "Planned deliverables compared with what is issued in ACC, mapped and reported in one run." },
];

export default function OutputClips() {
  return (
    <section id="outputs" className="section">
      <div className="section__head">
        <p className="eyebrow">Outputs, dashboards and 3D views</p>
        <h2>Model Health Check and TIDP/MIDP, from rules to results.</h2>
      </div>
      <div className="clipgrid">
        {clips.map((c) => {
          const t = costing.tools.find((x) => x.name === c.tool);
          return (
            <article key={c.src} className="clipcard">
              <LoopVideo src={`./media/${c.src}.mp4`} poster={`./media/posters/${c.src}.jpg`} label={c.title} />
              <p>{c.text}</p>
              {t && <p className="clipcard__hours"><strong>{n0(t.mid)} h</strong> a month saved (planning estimate)</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
}
