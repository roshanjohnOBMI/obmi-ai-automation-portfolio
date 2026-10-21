import { useState } from "react";
import { scenes } from "../data/storyboard.js";

export default function StoryboardSlider() {
  const [i, setI] = useState(0);
  const s = scenes[i];

  return (
    <section id="storyboard" className="section">
      <div className="section__head">
        <p className="eyebrow">Behind the reel</p>
        <h2>The storyboard, scene by scene.</h2>
      </div>

      <div className="story">
        <div className="story__frame">
          <span className="story__time">{s.t}</span>
          <h3>{s.title}</h3>
          <p className="story__look">{s.look}</p>
          <p className="story__voice">“{s.voice}”</p>
          <small>{s.tool}</small>
        </div>

        <label className="range range--story">
          <span>
            Scene <b>{i + 1}</b> of {scenes.length}
          </span>
          <input
            type="range"
            min="0"
            max={scenes.length - 1}
            value={i}
            onChange={(e) => setI(+e.target.value)}
          />
        </label>
      </div>
    </section>
  );
}
