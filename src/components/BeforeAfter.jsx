import { useState } from "react";
import { costing } from "../data/costing.js";
import { mins } from "../lib/fmt.js";

const picks = costing.tools.filter((t) => t.top.handH > t.top.toolH);

export default function BeforeAfter() {
  const [id, setId] = useState(picks[0].id);
  const [pos, setPos] = useState(50);
  const a = picks.find((x) => x.id === id);
  const { top } = a;

  return (
    <section id="compare" className="section section--panel">
      <div className="section__head">
        <p className="eyebrow">Before / after</p>
        <h2>Drag to compare one task, by hand and with the tool.</h2>
      </div>

      <div className="tabs" role="tablist">
        {picks.map((x) => (
          <button key={x.id} role="tab" aria-selected={x.id === id} className={x.id === id ? "tab is-active" : "tab"} onClick={() => setId(x.id)}>
            {x.name}
          </button>
        ))}
      </div>

      <div className="compare" style={{ "--pos": `${pos}%` }}>
        <div className="compare__pane compare__pane--after">
          <h4>With the tool</h4>
          <p className="compare__what">{top.fn}</p>
          <p className="compare__sub">{a.tagline}</p>
          <p className="compare__time">{mins(top.toolH)}</p>
          <small>{top.unit}</small>
        </div>

        <div className="compare__pane compare__pane--before">
          <h4>By hand</h4>
          <p className="compare__what">{top.basis}</p>
          <p className="compare__time">{mins(top.handH)}</p>
          <small>{top.unit}</small>
        </div>

        <div className="compare__handle" aria-hidden="true"><span>⇄</span></div>

        <input
          className="compare__range"
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(+e.target.value)}
          aria-label="Drag to compare by hand with the tool"
        />
      </div>
      <p className="muted small">Planning estimates for one use of the function, from the OBMI time-saved explorer.</p>
    </section>
  );
}
