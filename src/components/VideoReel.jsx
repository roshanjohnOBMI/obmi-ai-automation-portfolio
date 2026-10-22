import { useRef, useState } from "react";
import { REEL_SRC, REEL_POSTER, chapters } from "../data/storyboard.js";

const toSeconds = (t) => {
  const [m, s] = t.split(":").map(Number);
  return m * 60 + s;
};

export default function VideoReel() {
  const ref = useRef(null);
  const [missing, setMissing] = useState(false);
  const [active, setActive] = useState(0);

  const jump = (i) => {
    setActive(i);
    const v = ref.current;
    if (v && !missing) {
      v.currentTime = toSeconds(chapters[i].t);
      v.play().catch(() => {});
    }
  };
  const onTime = () => {
    const now = ref.current?.currentTime ?? 0;
    let idx = 0;
    chapters.forEach((c, i) => { if (now >= toSeconds(c.t)) idx = i; });
    setActive(idx);
  };

  return (
    <section id="reel" className="section section--wide">
      <div className="section__head">
        <p className="eyebrow">Brand reel</p>
        <h2>Under a minute on how the work gets lighter.</h2>
      </div>

      <div className="reel">
        <div className="reel__stage">
          {missing ? (
            <div className="reel__placeholder"><span className="ring ring--lg" aria-hidden="true" /><p>The reel is on its way.</p></div>
          ) : (
            <video ref={ref} src={REEL_SRC} poster={REEL_POSTER} controls playsInline preload="metadata" onError={() => setMissing(true)} onTimeUpdate={onTime} />
          )}
        </div>
        <ol className="reel__chapters" aria-label="Chapters">
          {chapters.map((c, i) => (
            <li key={c.t}>
              <button className={i === active ? "chapter is-active" : "chapter"} onClick={() => jump(i)}>
                <span className="chapter__t">{c.t}</span>
                <span className="chapter__title">{c.title}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
