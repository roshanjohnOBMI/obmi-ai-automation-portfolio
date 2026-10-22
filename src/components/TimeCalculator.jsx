import { useMemo, useState } from "react";
import { costing } from "../data/costing.js";
import { h, n0 } from "../lib/fmt.js";

const apps = costing.apps.map((a) => a.name);

export default function TimeCalculator() {
  const [scale, setScale] = useState(100);
  const [on, setOn] = useState(apps);
  const [basis, setBasis] = useState("mid");

  const toggle = (a) => setOn((cur) => (cur.includes(a) ? cur.filter((x) => x !== a) : [...cur, a]));

  const rows = useMemo(
    () => costing.tools.filter((t) => on.includes(t.set)).map((t) => ({ ...t, v: (t[basis] * scale) / 100, lo: (t.low * scale) / 100, hi: (t.high * scale) / 100 })),
    [on, scale, basis]
  );
  const total = rows.reduce((s, r) => s + r.v, 0);
  const max = Math.max(...rows.map((r) => r.hi), 1);
  const sorted = [...rows].sort((a, b) => b.v - a.v);

  return (
    <section id="time" className="section">
      <div className="section__head">
        <p className="eyebrow">Time saved</p>
        <h2>Move the sliders. See the hours come back.</h2>
        <p className="muted">
          Planning estimates from the OBMI time-saved explorer ({costing.total.functions} released functions), not measurements.
          Reference: about 200 models across 20+ disciplines, a 100–115 model Navisworks federation each week, about 10,000 TIDP/MIDP deliverables a month.
        </p>
      </div>

      <div className="calc">
        <div className="calc__controls">
          <label className="range">
            <span>Volume vs the reference project <b>{scale}%</b></span>
            <input type="range" min="25" max="200" step="5" value={scale} onChange={(e) => setScale(+e.target.value)} />
          </label>

          <div className="range">
            <span>Estimate</span>
            <div className="segmented" role="group" aria-label="Estimate basis">
              {[["low", "Low"], ["mid", "Mid"], ["high", "High"]].map(([k, l]) => (
                <button key={k} className={basis === k ? "seg is-active" : "seg"} onClick={() => setBasis(k)}>{l}</button>
              ))}
            </div>
          </div>

          <div className="range">
            <span>Applications</span>
            <div className="chipsel">
              {apps.map((a) => (
                <button key={a} className={on.includes(a) ? "chipbtn is-on" : "chipbtn"} onClick={() => toggle(a)} aria-pressed={on.includes(a)}>{a}</button>
              ))}
            </div>
          </div>

          <div className="calc__total">
            <strong>{n0(total)}</strong>
            <span>hours saved a month</span>
            <small>≈ {(total / 160).toFixed(1)} full-time equivalents · {n0(total * 12)} hours a year</small>
          </div>
        </div>

        <ul className="calc__bars">
          {sorted.map((r) => (
            <li key={r.id}>
              <div className="calc__label"><span>{r.name}</span><b>{h(r.v)} h</b></div>
              <div className="calc__track">
                <i style={{ width: `${(r.v / max) * 100}%` }} />
                <u style={{ left: `${(r.lo / max) * 100}%`, width: `${Math.max(0.5, ((r.hi - r.lo) / max) * 100)}%` }} title="Low to high range" />
              </div>
            </li>
          ))}
          {sorted.length === 0 && <li className="muted">Pick at least one application.</li>}
        </ul>
      </div>
    </section>
  );
}
