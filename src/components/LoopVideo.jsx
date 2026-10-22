import { useRef, useState } from "react";

// Muted, looping, autoplaying clip with a poster and a click-to-pause toggle.
export default function LoopVideo({ src, poster, label, className = "" }) {
  const ref = useRef(null);
  const [paused, setPaused] = useState(false);
  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play().catch(() => {}); setPaused(false); }
    else { v.pause(); setPaused(true); }
  };
  return (
    <figure className={`loopvideo ${className}`}>
      <video ref={ref} src={src} poster={poster} autoPlay muted loop playsInline preload="metadata" onClick={toggle} aria-label={label} />
      <button className="loopvideo__btn" onClick={toggle} aria-label={paused ? "Play clip" : "Pause clip"}>
        {paused ? "▶" : "❚❚"}
      </button>
      {label && <figcaption>{label}</figcaption>}
    </figure>
  );
}
