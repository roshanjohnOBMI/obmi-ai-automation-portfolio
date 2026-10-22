import { useState } from "react";
import { costing } from "../data/costing.js";
import { h } from "../lib/fmt.js";
import LoopVideo from "./LoopVideo.jsx";

const hoursFor = (name) => costing.tools.find((t) => t.name === name);

const sets = [
  {
    id: "revit",
    label: "OBMI Revit Tools",
    image: "./media/snips/revit-ribbon.jpg",
    alt: "The OBMI add-ins stacked in the Revit ribbon: Clash Parameters, Shared Parameters, Parameter Mapper, Warning Remover, Workset Assigner, Link Loader, Model Health Check and Help",
    caption: "Real Revit ribbon with the OBMI tools installed (screenshot from the OBMI Revit Tools tutorial, v1.8.1).",
    clip: "./media/clip-revit-ribbon.mp4",
    poster: "./media/posters/clip-revit-ribbon.jpg",
    tools: ["Clash Parameters", "Shared Parameters", "Parameter Mapper", "Warning Remover", "Workset Assigner", "Link Loader", "Model Health Check"],
    blurb: {
      "Parameter Mapper": "Map and validate workbook parameters against the model.",
    },
  },
  {
    id: "navis",
    label: "OBMI Navisworks Tools",
    image: "./media/snips/navisworks-ribbon.jpg",
    alt: "The OBMI ribbon tab in Navisworks: Clash Tolerance, Clash Approval, Clash Analyser, Parameter Checker, Viewpoint Comments, Hide By Category and Help",
    caption: "The OBMI ribbon tab in Navisworks Manage, from the OBMI Navisworks Tools user guide (v2.0.0).",
    clip: "./media/clip-navisworks.mp4",
    poster: "./media/posters/clip-navisworks.jpg",
    tools: ["Clash Tolerance", "Clash Approval", "Clash Analyser", "Parameter Checker", "Viewpoint Comments", "Hide By Category"],
    blurb: {},
  },
];

export default function Ribbons() {
  const [id, setId] = useState("revit");
  const s = sets.find((x) => x.id === id);

  return (
    <section id="ribbons" className="section">
      <div className="section__head">
        <p className="eyebrow">In the toolbars</p>
        <h2>The add-ins, stacked in the ribbon.</h2>
        <p className="muted">One OBMI tab in Revit and one in Navisworks. Everything below is the actual tooling.</p>
      </div>

      <div className="tabs" role="tablist">
        {sets.map((x) => (
          <button key={x.id} role="tab" aria-selected={x.id === id} className={x.id === id ? "tab is-active" : "tab"} onClick={() => setId(x.id)}>
            {x.label}
          </button>
        ))}
      </div>

      <div className="ribbons">
        <figure className="ribbons__shot">
          <img src={s.image} alt={s.alt} />
          <figcaption>{s.caption}</figcaption>
        </figure>

        <ul className="ribbons__list">
          {s.tools.map((name) => {
            const t = hoursFor(name) || hoursFor(name === "Model Health Check" ? "Model Health Check" : name);
            return (
              <li key={name}>
                <b>{name}</b>
                <span>{t ? t.tagline : s.blurb[name]}</span>
                {t && <em>{h(t.mid)} h / month saved</em>}
              </li>
            );
          })}
        </ul>
      </div>

      <LoopVideo className="ribbons__clip" src={s.clip} poster={s.poster} label={s.id === "revit" ? "The OBMI Revit tools in motion" : "The Navisworks add-ins and the clash views they work on"} />
    </section>
  );
}
