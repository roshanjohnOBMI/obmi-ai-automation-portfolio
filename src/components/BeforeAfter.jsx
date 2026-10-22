import { useState } from "react";
import { costing } from "../data/costing.js";
import { h, n0, mins } from "../lib/fmt.js";

const picks = costing.tools.filter((t) => t.hand > t.mid).sort((a, b) => b.hand - a.hand);
const withTool = (t) => Math.max(t.hand - t.mid, 0);
const days = (hours) => hours / 8;

export default function BeforeAfter() {
  const [id, setId] = useState(picks[0].id);
  const [pos, setPos] = useState(50);
  const a = picks.find((x) => x.id === id);
  const toolH = withTool(a);
  const maxFn = Math.max(...a.fns.map((f) => f.handMonth), 1);

  return (
    <section id="compare" className="section section--panel">
      <div className="section__head">
        <p className="eyebrow">Before / after</p>
        <h2>Drag to compare a whole month of work, by hand and with the tool.</h2>
        <p className="muted">{costing.reference}</p>
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
          <p className="compare__what">{a.name}: {a.functions} functions, compiled by the tool.</p>
          <p className="compare__sub">{a.tagline}</p>
          <p className="compare__time">{n0(toolH)} h</p>
          <small>a month, about {n0(days(toolH))} working days</small>
        </div>

        <div className="compare__pane compare__pane--before">
          <h4>By hand</h4>
          <p className="compare__what">The same {a.functions} functions, compiled and checked manually across the whole month&rsquo;s volume.</p>
          <p className="compare__time">{n0(a.hand)} h</p>
          <small>a month, about {n0(days(a.hand))} working days</small>
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

      <p className="compare__saved"><b>≈ {n0(a.mid)} hours a month saved</b> on {a.name} (≈ {h(a.mid / 160)} FTE), planning estimate.</p>

      <div className="fnlist">
        <h4>Where the month goes: hours by hand vs with the tool</h4>
        {a.fns.map((f) => (
          <div key={f.fn} className="fnrow">
            <div className="fnrow__name">{f.fn}<small> · {mins(f.handH)} → {mins(f.toolH)} {f.unit}</small></div>
            <div className="fnrow__bars" aria-hidden="true">
              <i className="fnrow__hand" style={{ width: `${(f.handMonth / maxFn) * 100}%` }} />
              <i className="fnrow__tool" style={{ width: `${Math.max(((f.handMonth - f.savedMonth) / maxFn) * 100, 0.6)}%` }} />
            </div>
            <div className="fnrow__nums">{n0(f.handMonth)} h → {n0(Math.max(f.handMonth - f.savedMonth, 0))} h</div>
          </div>
        ))}
      </div>

      <p className="muted small compare__note">Planning estimates from the OBMI time-saved explorer, mid case, per month at the stated project volume. Not measurements.</p>
    </section>
  );
}
