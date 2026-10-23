import { useState } from "react";
import Hero from "./components/Hero.jsx";
import Meridian from "./components/Meridian.jsx";
import Ribbons from "./components/Ribbons.jsx";
import NavisworksShots from "./components/NavisworksShots.jsx";
import ToolShots from "./components/ToolShots.jsx";
import OutputClips from "./components/OutputClips.jsx";
import BrandFilm from "./components/BrandFilm.jsx";
import VideoReel from "./components/VideoReel.jsx";
import AutomationSlider from "./components/AutomationSlider.jsx";
import TimeCalculator from "./components/TimeCalculator.jsx";
import BeforeAfter from "./components/BeforeAfter.jsx";
import Stack from "./components/Stack.jsx";
import Creators from "./components/Creators.jsx";

function ThemeButton() {
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute("data-theme") || "dark");
  const flip = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("obmi-theme", next); } catch (e) {}
    setTheme(next);
  };
  return (
    <button type="button" className="themebtn" onClick={flip} aria-label={theme === "dark" ? "Switch to light background" : "Switch to dark background"} title={theme === "dark" ? "Light background" : "Dark background"}>
      {theme === "dark" ? "\u2600" : "\u263E"}
    </button>
  );
}

export default function App() {
  return (
    <>
      <header className="nav">
        <a className="nav__brand" href="#top">
          <img className="nav__logo" src="./brand/obmi-wordmark-offwhite.png" alt="OBMI" />
          <span className="tag">BIM &amp; Automation</span>
        </a>
        <nav className="nav__links">
          <a href="#reel">Reel</a>
          <a href="#meridian">Meridian</a>
          <a href="#ribbons">Add-ins</a>
          <a href="#navisworks">Navisworks</a>
          <a href="#automations">Tools</a>
          <a href="#time">Time saved</a>
          <a href="#compare">Before / after</a>
          <a href="#film">Film</a>
          <a href="#creators">Creators</a>
        </nav>
        <div className="navright">
          <div className="viewswitch" role="group" aria-label="Switch view">
            <a href="./overview.html">Overview</a>
            <a href="./index.html" className="is-on" aria-current="page">Full portfolio</a>
          </div>
          <ThemeButton />
        </div>
      </header>

      <main id="top">
        <Hero />
        <VideoReel />
        <Meridian />
        <Ribbons />
        <ToolShots />
        <NavisworksShots />
        <OutputClips />
        <AutomationSlider />
        <TimeCalculator />
        <BeforeAfter />
        <BrandFilm />
        <Stack />
        <Creators />
      </main>

      <footer className="footer">
        <div>
          <p className="footer__line">Elevate life, by design.</p>
          <p className="footer__small">
            BIM Manager, Architect, Automation &amp; Solutions Developer · Dubai
          </p>
        </div>
        <p className="footer__small">
          Time-saved figures are planning estimates from the OBMI time-saved explorer, not measurements (<code>src/data/costing.js</code>).
        </p>
      </footer>
    </>
  );
}
