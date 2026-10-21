import { useRef, useState } from "react";
import { REEL_SRC, REEL_POSTER, chapters as scenes } from "../data/storyboard.js";

function toSeconds(t) {
  const [m, s] = t.split(":").map(Number);
  return m * 60 + s;
}

export default function VideoReel() {
  const ref = useRef(null);
  const [missing, setMissing] = useState(false);
  const [active, setActive] = useState(0);

  const jump = (i) => {
    setActive(i);
    const v = ref.current;
    if (v && !missing) {
      v.currentTime = toSeconds(scenes[i].t);
      v.play().catch(() => {});
    }
  };

  const onTime = () => {
    const v = ref.current;
    if (!v) return;
    const now = v.currentTime;
    let idx = 0;
    scenes.forEach((s, i) => {
      if (now >= toSeconds(s.t)) idx = i;
    });
    setActive(idx);
  };

  return (
    <section id="reel" className="section">
      <div className="section__head">
        <p className="eyebrow">Brand reel</p>
        <h2>Under a minute on how the work gets lighter.</h2>
      </div>

      <div className="reel">
        <div className="reel__stage">
          {missing ? (
            <div className="reel__placeholder">
              <span className="ring ring--lg" aria-hidden="true" />
              <p>The reel is on its way.</p>
              <small>
                Add <code>public/media/obmi-ai-reel.mp4</code> and it plays here.
              </small>
            </div>
          ) : (
            <video
              ref={ref}
              src={REEL_SRC}
              poster={REEL_POSTER}
              controls
              playsInline
              preload="metadata"
              onError={() => setMissing(true)}
              onTimeUpdate={onTime}
            />
          )}
        </div>

        <ol className="reel__chapters" aria-label="Chapters">
          {scenes.map((s, i) => (
            <li key={s.t}>
              <button
                className={i === active ? "chapter is-active" : "chapter"}
                onClick={() => jump(i)}
              >
                <span className="chapter__t">{s.t}</span>
                <span className="chapter__title">{s.title}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
