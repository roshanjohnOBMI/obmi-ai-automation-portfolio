// Storyboard for the ~60s brand reel. Used by the page (Storyboard slider)
// and as the source of truth for the Runway generation plan.
// Drop the finished edit at public/media/obmi-ai-reel.mp4 (poster: poster.jpg).

export const REEL_SRC = "./media/obmi-ai-reel.mp4";
export const REEL_POSTER = "./media/poster.jpg";

export const scenes = [
  {
    t: "0:00",
    seconds: 6,
    title: "Places that belong",
    look: "Hyper-real dawn light over a coastal resort masterplan, slow aerial push-in.",
    voice: "Every OBMI project begins with a place.",
    tool: "Runway text-to-video",
  },
  {
    t: "0:06",
    seconds: 6,
    title: "The model wakes up",
    look: "The resort dissolves into a glowing Revit-style wireframe, levels and grids drawing in.",
    voice: "Behind every drawing is a model with thousands of decisions in it.",
    tool: "Runway image-to-video",
  },
  {
    t: "0:12",
    seconds: 8,
    title: "The slow part",
    look: "Screen capture: clash tests ticking over one by one, a worksets list, a spreadsheet. Desaturated, ticking clock.",
    voice: "And a lot of hours spent on clicks that a machine should be doing.",
    tool: "Your screen recording",
  },
  {
    t: "0:20",
    seconds: 8,
    title: "Automate",
    look: "Real add-in UI in colour: Clash Tolerance Manager applies to every test at once. Counter drops from 45 min to 1 min.",
    voice: "So I build the tools. Revit and Navisworks add-ins that do it in one click.",
    tool: "Your screen recording + motion graphics",
  },
  {
    t: "0:28",
    seconds: 8,
    title: "Data flows",
    look: "Abstract light-trail pipeline carries model data from the building to a live dashboard.",
    voice: "Autodesk Platform Services carry live model data into dashboards, with no exports.",
    tool: "Runway text-to-video",
  },
  {
    t: "0:36",
    seconds: 8,
    title: "The team gets time back",
    look: "Warm studio scene, designers lifting their heads from screens to a physical model, a review table.",
    voice: "The hours saved go back into design.",
    tool: "Runway text-to-video",
  },
  {
    t: "0:44",
    seconds: 8,
    title: "Built with AI",
    look: "Quick cuts of code, add-in builds and dashboards coming together, accelerated.",
    voice: "AI helps me prototype and ship these tools faster than ever.",
    tool: "Your screen recording",
  },
  {
    t: "0:52",
    seconds: 8,
    title: "Elevate life, by design",
    look: "Pull back to the finished resort at golden hour. OBMI end card.",
    voice: "Elevate life, by design. Now with time to spare.",
    tool: "Runway image-to-video + end card",
  },
];

// Chapters of the reel in public/media/obmi-ai-reel.mp4 (52 s): Runway hero
// shots (fictional resort, no real projects) around footage from the OBMI brand film.
export const chapters = [
  { t: "0:00", title: "Places that belong" },
  { t: "0:05", title: "OBMI Digital Delivery Suite" },
  { t: "0:10", title: "Revit tools" },
  { t: "0:17", title: "Navisworks tools" },
  { t: "0:24", title: "Model Health Check" },
  { t: "0:31", title: "TIDP / MIDP checker" },
  { t: "0:38", title: "The team gets time back" },
  { t: "0:43", title: "Elevate life, by design" },
  { t: "0:48", title: "OBMI" },
];
