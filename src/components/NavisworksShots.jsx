import { useEffect, useState } from "react";
import { costing } from "../data/costing.js";
import { h, mins } from "../lib/fmt.js";
import LoopVideo from "./LoopVideo.jsx";

const slides = [
  { img: "navisworks-ribbon", title: "The OBMI tab in Navisworks Manage", note: "Clash Tolerance, Clash Approval, Clash Analyser, Parameter Checker, Viewpoint Comments, Hide By Category.", src: "OBMI Navisworks Tools user guide, v2.0.0" },
  { img: "navis-clash-approval", title: "Clash Approval on a federated model", note: "Review, filter, approve or resolve clashes with comments, with the clash points shown in 3D.", src: "OBMI brand film", tool: "Clash Approval" },
  { img: "navis-hide-by-category", title: "Hide By Category", note: "Clear the view in one click and see only the systems that matter.", src: "OBMI brand film", tool: "Hide By Category" },
];

const navTools = costing.tools.filter((t) => t.app === "Navisworks").sort((a, b) => b.mid - a.mid);
const navTotal = navTools.reduce((s, t) => s + t.mid, 0);

export default function NavisworksShots() {
  const [i, setI] = useState(0);
  const n = slides.length;
  const go = (d) => setI((x) => (x + d + n) % n);
  useEffect(() => {
    const onKey = (e) => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const s = slides[i];
  const t = s.tool && navTools.find((x) => x.name === s.tool);

  return (
    <section id="navisworks" className="section">
      <div className="section__head">
        <p className="eyebrow">Navisworks add-ins</p>
        <h2>The OBMI tab, inside Navisworks.</h2>
        <p className="muted">Six tools on one ribbon tab, about {h(navTotal)} hours a month saved across a 100–115 model federation (planning estimate).</p>
      </div>

      <div className="shots">
        <button className="slider__arrow" onClick={() => go(-1)} aria-label="Previous screen">←</button>
        <figure className="shots__main" key={s.img}>
          <img src={`./media/snips/${s.img}.jpg`} alt={s.title} />
          <figcaption>
            <b>{s.title}</b>
            <span>{s.note}</span>
            <small className="muted">Source: {s.src}</small>
            {t && <em>≈ {h(t.mid)} h a month saved (planning estimate)</em>}
          </figcaption>
        </figure>
        <button className="slider__arrow" onClick={() => go(1)} aria-label="Next screen">→</button>
      </div>
      <div className="thumbs">
        {slides.map((x, idx) => (
          <button key={x.img} className={idx === i ? "thumb is-active" : "thumb"} onClick={() => setI(idx)} aria-label={x.title}>
            <img src={`./media/snips/${x.img}.jpg`} alt="" loading="lazy" />
          </button>
        ))}
      </div>

      <div className="navtools">
        {navTools.map((x) => (
          <article key={x.id} className="navtool">
            <h4>{x.name}</h4>
            <p>{x.tagline}</p>
            <p className="navtool__time"><b>≈ {h(x.mid)} h</b> a month saved</p>
            <p className="muted small">{x.top.fn}: {mins(x.top.handH)} by hand, {mins(x.top.toolH)} with the tool ({x.top.unit}).</p>
          </article>
        ))}
      </div>

      <LoopVideo src="./media/clip-navisworks.mp4" poster="./media/posters/clip-navisworks.jpg" label="Navisworks add-ins on a federated model" />
    </section>
  );
}
