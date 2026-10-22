import { useEffect, useState } from "react";
import { costing } from "../data/costing.js";
import { h, n0 } from "../lib/fmt.js";

export default function AutomationSlider() {
  const tools = costing.tools;
  const [i, setI] = useState(0);
  const n = tools.length;
  const go = (d) => setI((x) => (x + d + n) % n);
  const a = tools[i];
  const pct = Math.round((a.mid / a.hand) * 100);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="automations" className="section section--panel">
      <div className="section__head">
        <p className="eyebrow">The tools</p>
        <h2>{n} tools, one idea: stop doing it by hand.</h2>
        <p className="muted">Revit Tools, Navisworks add-ins and web apps. Hours are monthly planning estimates for a reference project of about 200 models.</p>
      </div>

      <div className="slider">
        <button className="slider__arrow" onClick={() => go(-1)} aria-label="Previous tool">←</button>

        <article className="slide" key={a.id}>
          <div className="slide__main">
            <p className="slide__kind">{a.set}</p>
            <h3>{a.name}</h3>
            <p className="slide__headline">{a.tagline}</p>
            <p>{a.summary}</p>
            <ul className="chips">{a.stack.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>

          <div className="slide__meter" aria-label="Hours a month">
            <div className="meter">
              <div className="meter__row">
                <span>By hand</span>
                <div className="meter__bar"><i style={{ width: "100%" }} /></div>
                <b>{n0(a.hand)} h</b>
              </div>
              <div className="meter__row meter__row--auto">
                <span>Hours saved</span>
                <div className="meter__bar"><i style={{ width: `${Math.max(3, pct)}%` }} /></div>
                <b>{h(a.mid)} h</b>
              </div>
            </div>
            <p className="slide__pct"><strong>{pct}%</strong> of the manual time handed back</p>
            <p className="muted small">Range {n0(a.low)}–{n0(a.high)} h a month · {a.functions} functions</p>
          </div>
        </article>

        <button className="slider__arrow" onClick={() => go(1)} aria-label="Next tool">→</button>
      </div>

      <div className="dots" role="tablist" aria-label="Choose tool">
        {tools.map((x, idx) => (
          <button key={x.id} role="tab" aria-selected={idx === i} aria-label={x.name} className={idx === i ? "dot is-active" : "dot"} onClick={() => setI(idx)} />
        ))}
      </div>
    </section>
  );
}
