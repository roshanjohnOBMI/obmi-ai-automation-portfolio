import { useMemo, useState } from "react";
import { automations, BASE_TEAM } from "../data/automations.js";

export default function TimeCalculator() {
  const [team, setTeam] = useState(BASE_TEAM);
  const [weeks, setWeeks] = useState(46);
  const [runs, setRuns] = useState(100); // % of baseline usage

  const rows = useMemo(() => {
    const scale = (team / BASE_TEAM) * (runs / 100);
    return automations.map((a) => {
      const hrs = (((a.manualMinutes - a.autoMinutes) * a.runsPerWeek * scale * weeks) / 60);
      return { id: a.id, name: a.name, hrs };
    });
  }, [team, weeks, runs]);

  const total = rows.reduce((s, r) => s + r.hrs, 0);
  const days = total / 8;
  const max = Math.max(...rows.map((r) => r.hrs), 1);

  return (
    <section id="time" className="section">
      <div className="section__head">
        <p className="eyebrow">Time saved</p>
        <h2>Move the sliders. See the hours come back.</h2>
        <p className="muted">
          Defaults are illustrative estimates. Swap in measured values in{" "}
          <code>src/data/automations.js</code>.
        </p>
      </div>

      <div className="calc">
        <div className="calc__controls">
          <label className="range">
            <span>
              BIM team size <b>{team}</b>
            </span>
            <input type="range" min="1" max="60" value={team} onChange={(e) => setTeam(+e.target.value)} />
          </label>
          <label className="range">
            <span>
              Working weeks a year <b>{weeks}</b>
            </span>
            <input type="range" min="30" max="52" value={weeks} onChange={(e) => setWeeks(+e.target.value)} />
          </label>
          <label className="range">
            <span>
              Tool adoption <b>{runs}%</b>
            </span>
            <input type="range" min="10" max="200" step="10" value={runs} onChange={(e) => setRuns(+e.target.value)} />
          </label>

          <div className="calc__total">
            <strong>{Math.round(total).toLocaleString()}</strong>
            <span>hours back a year</span>
            <small>≈ {Math.round(days).toLocaleString()} working days of design time</small>
          </div>
        </div>

        <ul className="calc__bars">
          {rows.map((r) => (
            <li key={r.id}>
              <div className="calc__label">
                <span>{r.name}</span>
                <b>{Math.round(r.hrs).toLocaleString()} h</b>
              </div>
              <div className="calc__track">
                <i style={{ width: `${(r.hrs / max) * 100}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
