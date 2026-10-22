import { useState } from "react";
import { FILM_SRC, FILM_POSTER } from "../data/storyboard.js";
import { costing } from "../data/costing.js";
import { n0 } from "../lib/fmt.js";

const shots = [
  { img: "costing-summary", title: "Summary view", note: "Hours saved a month, by application." },
  { img: "costing-detail", title: "Detail view", note: "Slicers, ranges and monthly hours by tool." },
];

export default function BrandFilm() {
  const [i, setI] = useState(0);
  const s = shots[i];
  return (
    <section id="film" className="section section--wide">
      <div className="section__head">
        <p className="eyebrow">The brand film</p>
        <h2>From the model to the command centre.</h2>
      </div>
      <div className="film">
        <video src={FILM_SRC} poster={FILM_POSTER} controls playsInline preload="none" />
      </div>

      <div className="section__head costing__head">
        <p className="eyebrow">Behind the numbers</p>
        <h3>The costing app: {n0(costing.total.mid)} hours a month, {costing.total.functions} functions.</h3>
        <p className="muted">An explorer built to size the saving per tool, with slicers, ranges and a what-if table. Planning estimates, not measurements.</p>
      </div>
      <div className="costing">
        <figure className="costing__shot" key={s.img}>
          <img src={`./media/costing/${s.img}.jpg`} alt={`OBMI time-saved explorer, ${s.title}`} />
          <figcaption><b>{s.title}</b> {s.note}</figcaption>
        </figure>
        <div className="dots">
          {shots.map((x, idx) => (
            <button key={x.img} className={idx === i ? "dot is-active" : "dot"} aria-label={x.title} onClick={() => setI(idx)} />
          ))}
        </div>
      </div>
    </section>
  );
}
