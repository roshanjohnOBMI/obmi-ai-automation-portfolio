import { useState } from "react";
import { automations } from "../data/automations.js";

export default function BeforeAfter() {
  const [id, setId] = useState(automations[0].id);
  const [pos, setPos] = useState(50);
  const a = automations.find((x) => x.id === id);

  return (
    <section id="compare" className="section section--sand">
      <div className="section__head">
        <p className="eyebrow">Before / after</p>
        <h2>Drag to compare the workflow.</h2>
      </div>

      <div className="tabs" role="tablist">
        {automations.map((x) => (
          <button
            key={x.id}
            role="tab"
            aria-selected={x.id === id}
            className={x.id === id ? "tab is-active" : "tab"}
            onClick={() => setId(x.id)}
          >
            {x.name}
          </button>
        ))}
      </div>

      <div className="compare">
        <div className="compare__pane compare__pane--after">
          <h4>Automated</h4>
          <ol>
            {a.automated.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <p className="compare__time">{a.autoMinutes} min</p>
        </div>

        <div
          className="compare__pane compare__pane--before"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <h4>By hand</h4>
          <ol>
            {a.manual.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <p className="compare__time">{a.manualMinutes} min</p>
        </div>

        <div className="compare__handle" style={{ left: `${pos}%` }} aria-hidden="true">
          <span>⇄</span>
        </div>

        <input
          className="compare__range"
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(+e.target.value)}
          aria-label="Compare manual and automated workflow"
        />
      </div>
    </section>
  );
}
