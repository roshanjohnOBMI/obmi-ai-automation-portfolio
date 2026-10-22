import { useEffect, useState } from "react";
import { costing } from "../data/costing.js";
import { h } from "../lib/fmt.js";

const shots = [
  { tool: "Clash Parameters", img: "revit-clash-dashboard", title: "Clash Parameters: the dashboard", note: "1,178 elements in scope, 17 missing a clash code, 98.6% complete, with the gaps charted by category." },
  { tool: "Shared Parameters", img: "revit-shared-parameters", title: "Shared Parameters", note: "Parameters created from an Excel rules sheet, with a preview and a per-row result." },
  { tool: null, name: "Parameter Mapper", img: "revit-parameter-mapper", title: "Parameter Mapper", note: "Trade-by-trade coverage tiles and progress against the reference workbook." },
  { tool: "Warning Remover", img: "revit-warning-remover", title: "Warning Remover", note: "Severity and category filters, then safe fixes with a preview before anything changes." },
  { tool: "Workset Assigner", img: "revit-workset-assigner", title: "Workset Assigner", note: "Rules by category, family and type decide the workset, first match wins." },
  { tool: "Link Loader", img: "revit-link-loader", title: "Link Loader", note: "Load or unload many links in one step, filtered by name and status." },
  { tool: "Model Health Check", img: "revit-mhc-tests", title: "Model Health Check: disciplines and tests", note: "Choose disciplines and tests from the OBMI quality catalogue." },
  { tool: "Model Health Check", img: "revit-mhc-results", title: "Model Health Check: results", note: "Pass, fail and not-applicable per test, with issue counts and an Excel report." },
];

export default function ToolShots() {
  const [i, setI] = useState(0);
  const n = shots.length;
  const go = (d) => setI((x) => (x + d + n) % n);
  useEffect(() => {
    const onKey = (e) => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const s = shots[i];
  const t = s.tool && costing.tools.find((x) => x.name === s.tool);

  return (
    <section id="screens" className="section section--panel">
      <div className="section__head">
        <p className="eyebrow">Snips from the tools</p>
        <h2>The real windows, inside Revit.</h2>
      </div>

      <div className="shots">
        <button className="slider__arrow" onClick={() => go(-1)} aria-label="Previous screen">←</button>
        <figure className="shots__main" key={s.img}>
          <img src={`./media/snips/${s.img}.jpg`} alt={s.title} />
          <figcaption>
            <b>{s.title}</b>
            <span>{s.note}</span>
            {t && <em>≈ {h(t.mid)} h a month saved (planning estimate)</em>}
          </figcaption>
        </figure>
        <button className="slider__arrow" onClick={() => go(1)} aria-label="Next screen">→</button>
      </div>
      <div className="thumbs">
        {shots.map((x, idx) => (
          <button key={x.img} className={idx === i ? "thumb is-active" : "thumb"} onClick={() => setI(idx)} aria-label={x.title}>
            <img src={`./media/snips/${x.img}.jpg`} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </section>
  );
}
