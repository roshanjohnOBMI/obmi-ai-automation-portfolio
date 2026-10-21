import Hero from "./components/Hero.jsx";
import VideoReel from "./components/VideoReel.jsx";
import AutomationSlider from "./components/AutomationSlider.jsx";
import TimeCalculator from "./components/TimeCalculator.jsx";
import BeforeAfter from "./components/BeforeAfter.jsx";
import StoryboardSlider from "./components/StoryboardSlider.jsx";
import Stack from "./components/Stack.jsx";

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
          <a href="#automations">Automations</a>
          <a href="#time">Time saved</a>
          <a href="#compare">Before / after</a>
          <a href="#stack">Stack</a>
        </nav>
      </header>

      <main id="top">
        <Hero />
        <VideoReel />
        <AutomationSlider />
        <TimeCalculator />
        <BeforeAfter />
        <StoryboardSlider />
        <Stack />
      </main>

      <footer className="footer">
        <div>
          <p className="footer__line">Elevate life, by design.</p>
          <p className="footer__small">
            BIM Manager, Architect, Automation &amp; Solutions Developer · Dubai
          </p>
        </div>
        <p className="footer__small">
          Time-saved figures are editable estimates (see <code>src/data/automations.js</code>).
        </p>
      </footer>
    </>
  );
}
