import { useEffect, useState } from "react";
import { automations } from "../data/automations.js";

export default function AutomationSlider() {
  const [i, setI] = useState(0);
  const n = automations.length;
  const go = (d) => setI((x) => (x + d + n) % n);
  const a = automations[i];
  const saved = a.manualMinutes - a.autoMinutes;
  const pct = Math.round((saved / a.manualMinutes) * 100);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="automations" className="section section--sand">
      <div className="section__head">
        <p className="eyebrow">The tools</p>
        <h2>Six automations, one idea: stop doing it by hand.</h2>
      </div>

      <div className="slider">
        <button className="slider__arrow" onClick={() => go(-1)} aria-label="Previous automation">
          ←
        </button>

        <article className="slide" key={a.id}>
          <div className="slide__main">
            <p className="slide__kind">{a.kind}</p>
            <h3>{a.name}</h3>
            <p className="slide__headline">{a.headline}</p>
            <p>{a.summary}</p>
            <ul className="chips">
              {a.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="slide__meter" aria-label="Time per run">
            <div className="meter">
              <div className="meter__row">
                <span>By hand</span>
                <div className="meter__bar">
                  <i style={{ width: "100%" }} />
                </div>
                <b>{a.manualMinutes} min</b>
              </div>
              <div className="meter__row meter__row--auto">
                <span>Automated</span>
                <div className="meter__bar">
                  <i style={{ width: `${Math.max(3, (a.autoMinutes / a.manualMinutes) * 100)}%` }} />
                </div>
                <b>{a.autoMinutes} min</b>
              </div>
            </div>
            <p className="slide__pct">
              <strong>{pct}%</strong> less time per run
            </p>
          </div>
        </article>

        <button className="slider__arrow" onClick={() => go(1)} aria-label="Next automation">
          →
        </button>
      </div>

      <div className="dots" role="tablist" aria-label="Choose automation">
        {automations.map((x, idx) => (
          <button
            key={x.id}
            role="tab"
            aria-selected={idx === i}
            aria-label={x.name}
            className={idx === i ? "dot is-active" : "dot"}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </section>
  );
}
