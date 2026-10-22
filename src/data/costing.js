// Generated from the OBMI time-saved explorer (obmiAppCosting, data as of 2026-10-15).
// Planning estimates, not measurements. Hours are per month; released functions only.
export const costing = {
 "generated": "2026-10-15",
 "reference": "About 200 models across 20+ disciplines; a Navisworks federation of 100-115 models per weekly cycle; about 10,000 TIDP/MIDP deliverables validated by hand a month (2-3 working days); 50 add-in users (team size not confirmed). The Revit add-in Model Health Check is for modellers; the ACC Model Health Check is a separate web app for BIM managers.",
 "total": {
  "low": 6670,
  "mid": 10609,
  "high": 15210,
  "fte": 66.3,
  "functions": 76
 },
 "apps": [
  {
   "name": "OBMI Revit Tools",
   "low": 5090.2,
   "mid": 7431.1,
   "high": 9772.0,
   "hand": 8266.7,
   "fns": 30
  },
  {
   "name": "OBMI Navisworks Tools",
   "low": 508.1,
   "mid": 1223.3,
   "high": 2243.6,
   "hand": 1274.6,
   "fns": 24
  },
  {
   "name": "ACC vs TIDP/MIDP Checker",
   "low": 91.7,
   "mid": 138.0,
   "high": 184.4,
   "hand": 138.2,
   "fns": 4
  },
  {
   "name": "ACC Model Health Check",
   "low": 374.8,
   "mid": 374.8,
   "high": 374.8,
   "hand": 375.0,
   "fns": 4
  },
  {
   "name": "Meridian",
   "low": 597.5,
   "mid": 1431.5,
   "high": 2622.2,
   "hand": 1480.9,
   "fns": 9
  },
  {
   "name": "Add-in Control",
   "low": 7.8,
   "mid": 10.2,
   "high": 12.5,
   "hand": 10.4,
   "fns": 5
  }
 ],
 "tools": [
  {
   "id": "warning-remover",
   "name": "Warning Remover",
   "app": "Revit",
   "set": "OBMI Revit Tools",
   "tagline": "Model warnings collected, reviewed and fixed safely, with a preview first.",
   "summary": "Severity and category filters, review one by one in 3D, safe fixes only, and Revit errors roll back the change.",
   "stack": [
    "Revit API",
    "C#",
    "3D review"
   ],
   "hand": 3337,
   "mid": 3016.1,
   "low": 1473,
   "high": 4559,
   "functions": 9,
   "top": {
    "fn": "Resolve Duplicates (Number, Mark, Type Mark)",
    "unit": "per model",
    "basis": "Renumbering duplicate marks and numbers one by one.",
    "handH": 0.55,
    "toolH": 0.04
   }
  },
  {
   "id": "clash-parameters",
   "name": "Clash Parameters",
   "app": "Revit",
   "set": "OBMI Revit Tools",
   "tagline": "Clash code and zone parameters, checked and filled across the whole model.",
   "summary": "Dashboard of missing values, parameter coverage, bulk Assign Values, Auto-Map from the clash matrix, Excel import and export.",
   "stack": [
    "Revit API",
    "C#",
    "WPF"
   ],
   "hand": 2470,
   "mid": 2173.3,
   "low": 2065,
   "high": 2282,
   "functions": 5,
   "top": {
    "fn": "Auto-Map Clash Code from the clash matrix",
    "unit": "per model",
    "basis": "Looking up each category's code in the clash matrix and entering it by hand.",
    "handH": 2.0,
    "toolH": 0.25
   }
  },
  {
   "id": "model-health-check-add-in",
   "name": "Model Health Check",
   "app": "Revit",
   "set": "OBMI Revit Tools",
   "tagline": "The OBMI quality catalogue run inside the model.",
   "summary": "Disciplines and tests, configurable thresholds, pass, fail or not-applicable results and an Excel report.",
   "stack": [
    "Revit API",
    "C#",
    "Excel"
   ],
   "hand": 2170,
   "mid": 1978.7,
   "low": 1397,
   "high": 2561,
   "functions": 5,
   "top": {
    "fn": "Run Health Check (automated and config-compared tests)",
    "unit": "per model",
    "basis": "Manually inspecting links, grids and levels, worksets, views and templates against the checklist.",
    "handH": 1.5,
    "toolH": 0.115
   }
  },
  {
   "id": "link-loader",
   "name": "Link Loader",
   "app": "Revit",
   "set": "OBMI Revit Tools",
   "tagline": "Many Revit links loaded or unloaded in one step.",
   "summary": "Filter links by name and status, tick a set, and unload for yourself without touching other users.",
   "stack": [
    "Revit API",
    "C#"
   ],
   "hand": 154,
   "mid": 137.6,
   "low": 80,
   "high": 195,
   "functions": 4,
   "top": {
    "fn": "Load Checked / Unload Checked (many links)",
    "unit": "per use",
    "basis": "Right-click each link in Manage Links: Unload or Reload.",
    "handH": 0.15,
    "toolH": 0.015
   }
  },
  {
   "id": "workset-assigner",
   "name": "Workset Assigner",
   "app": "Revit",
   "set": "OBMI Revit Tools",
   "tagline": "Elements moved to the right workset by rules, not by hand.",
   "summary": "First matching rule wins by category, family and type, with a preview grid before anything moves.",
   "stack": [
    "Revit API",
    "C#",
    "Worksets"
   ],
   "hand": 92,
   "mid": 85.0,
   "low": 49,
   "high": 121,
   "functions": 4,
   "top": {
    "fn": "Apply Checked (one transaction, creates missing worksets)",
    "unit": "per model",
    "basis": "Selecting elements and using the workset drop-down repeatedly; creating worksets by hand.",
    "handH": 0.6,
    "toolH": 0.04
   }
  },
  {
   "id": "shared-parameters",
   "name": "Shared Parameters",
   "app": "Revit",
   "set": "OBMI Revit Tools",
   "tagline": "Shared parameters created from an Excel rules sheet in one undo step.",
   "summary": "Preview the rules, tick what to add, and get a per-row Added, Extended or Failed result.",
   "stack": [
    "Revit API",
    "C#",
    "Excel"
   ],
   "hand": 44,
   "mid": 40.4,
   "low": 26,
   "high": 55,
   "functions": 3,
   "top": {
    "fn": "Apply Checked (Type or Instance, group, categories)",
    "unit": "per model",
    "basis": "Manage > Project Parameters: add each parameter, pick its group, tick its categories (~2 min each, 30-60 parameters).",
    "handH": 1.15,
    "toolH": 0.075
   }
  },
  {
   "id": "clash-approval",
   "name": "Clash Approval",
   "app": "Navisworks",
   "set": "OBMI Navisworks Tools",
   "tagline": "Clash results reviewed, approved and commented in one grid.",
   "summary": "Filter by status, distance or item, approve or comment in bulk and round-trip CSV or Excel.",
   "stack": [
    "Navisworks API",
    "C#",
    "CSV / Excel"
   ],
   "hand": 546,
   "mid": 526.5,
   "low": 225,
   "high": 954,
   "functions": 6,
   "top": {
    "fn": "Filtered results grid across all tests",
    "unit": "per cycle",
    "basis": "No cross-test filter exists: browsing results test by test and filtering by status, distance and approver.",
    "handH": 4.5,
    "toolH": 0.15
   }
  },
  {
   "id": "parameter-checker",
   "name": "Parameter Checker",
   "app": "Navisworks",
   "set": "OBMI Navisworks Tools",
   "tagline": "Required-parameter gaps found across the federated model.",
   "summary": "Scan one or more models for missing parameters, see them on a dashboard and export the list.",
   "stack": [
    "Navisworks API",
    "C#"
   ],
   "hand": 512,
   "mid": 495.6,
   "low": 190,
   "high": 942,
   "functions": 4,
   "top": {
    "fn": "Run Parameter Check (all elements in 100-115 files)",
    "unit": "per scan",
    "basis": "Opening each of 100-115 models and checking schedules or properties for gaps (~4-10 min per model).",
    "handH": 14.0,
    "toolH": 0.45
   }
  },
  {
   "id": "clash-analyser",
   "name": "Clash Analyser",
   "app": "Navisworks",
   "set": "OBMI Navisworks Tools",
   "tagline": "A dashboard and matrix over every clash test, with trends.",
   "summary": "Status and severity tiles, category matrix, run analysis on the whole federated model and track history.",
   "stack": [
    "Navisworks API",
    "C#",
    "Dashboard"
   ],
   "hand": 166,
   "mid": 155.1,
   "low": 65,
   "high": 284,
   "functions": 5,
   "top": {
    "fn": "Detailed Clash Export (open clashes by zone, file, asset)",
    "unit": "per cycle",
    "basis": "Compiling element-level clash lists by zone, source file and asset.",
    "handH": 2.25,
    "toolH": 0.15
   }
  },
  {
   "id": "hide-by-category",
   "name": "Hide By Category",
   "app": "Navisworks",
   "set": "OBMI Navisworks Tools",
   "tagline": "Hide or show whole categories in the federated model.",
   "summary": "Pick categories from what is loaded, then hide or show them across all models in one go.",
   "stack": [
    "Navisworks API",
    "C#"
   ],
   "hand": 38,
   "mid": 33.4,
   "low": 20,
   "high": 47,
   "functions": 2,
   "top": {
    "fn": "Hide All / Show All",
    "unit": "per use",
    "basis": "Resetting visibility category by category.",
    "handH": 0.175,
    "toolH": 0.007
   }
  },
  {
   "id": "viewpoint-comments",
   "name": "Viewpoint Comments",
   "app": "Navisworks",
   "set": "OBMI Navisworks Tools",
   "tagline": "Comments and viewpoints reviewed and exported without hunting for them.",
   "summary": "Review every comment and viewpoint, then export to Excel or an HTML report.",
   "stack": [
    "Navisworks API",
    "C#",
    "HTML export"
   ],
   "hand": 11,
   "mid": 9.6,
   "low": 7,
   "high": 13,
   "functions": 5,
   "top": {
    "fn": "Export Viewpoints Report (HTML with a screenshot each)",
    "unit": "per report (~60 viewpoints)",
    "basis": "Capturing and captioning a screenshot per viewpoint.",
    "handH": 1.25,
    "toolH": 0.15
   }
  },
  {
   "id": "clash-tolerance",
   "name": "Clash Tolerance",
   "app": "Navisworks",
   "set": "OBMI Navisworks Tools",
   "tagline": "One tolerance applied to many clash tests in a single pass.",
   "summary": "Bulk-set distance tolerances across selected clash tests instead of opening each one.",
   "stack": [
    "Navisworks API",
    "C#"
   ],
   "hand": 3,
   "mid": 3.2,
   "low": 2,
   "high": 4,
   "functions": 2,
   "top": {
    "fn": "Apply to Selected (one tolerance to many tests)",
    "unit": "per change",
    "basis": "Opening each test's properties and typing the tolerance (~30 s each across ~100 tests).",
    "handH": 0.7,
    "toolH": 0.035
   }
  },
  {
   "id": "acc-vs-tidp-midp-checker",
   "name": "ACC vs TIDP/MIDP Checker",
   "app": "Web app",
   "set": "ACC vs TIDP/MIDP Checker",
   "tagline": "Planned deliverables compared with what is actually issued in ACC.",
   "summary": "Pick the schedule, scan the shared folders, compare and report. Replaces days of manual checking each month.",
   "stack": [
    "Autodesk Construction Cloud",
    "Node.js",
    "React"
   ],
   "hand": 138,
   "mid": 138.0,
   "low": 92,
   "high": 184,
   "functions": 4,
   "top": {
    "fn": "Match every deliverable and format",
    "unit": "per 1,000 deliverables",
    "basis": "~10,000 deliverables by hand, including naming drift (extra suffixes, revision tags, casing).",
    "handH": 12.5,
    "toolH": 0.003
   }
  },
  {
   "id": "acc-model-health-check",
   "name": "ACC Model Health Check",
   "app": "Web app",
   "set": "ACC Model Health Check",
   "tagline": "Revit model QA at scale, in Autodesk's cloud.",
   "summary": "Models are opened in cloud Revit through Design Automation, tests run against the OBMI ruleset, results land in a dashboard with failures shown in 3D.",
   "stack": [
    "Autodesk Platform Services",
    "Design Automation",
    "React"
   ],
   "hand": 375,
   "mid": 374.8,
   "low": 375,
   "high": 375,
   "functions": 4,
   "top": {
    "fn": "Run the checks",
    "unit": "per model",
    "basis": "Run the QA checklist in Revit and wait for it to finish. A model check takes about an hour in Revit; the web app returns every check, with its own score, in 2-3 seconds.",
    "handH": 1.0,
    "toolH": 0.001
   }
  },
  {
   "id": "meridian",
   "name": "Meridian",
   "app": "Web app",
   "set": "Meridian",
   "tagline": "The command centre of BIM for OBMI: every project, every number, one place.",
   "summary": "Reads ACC, brings together model health, TIDP/MIDP, clash and issue data into live dashboards for every project.",
   "stack": [
    "Autodesk Platform Services",
    "Power BI",
    "React"
   ],
   "hand": 1481,
   "mid": 1431.5,
   "low": 598,
   "high": 2622,
   "functions": 9,
   "top": {
    "fn": "Model sharing (incl. NWC and NWD files)",
    "unit": "per project per week",
    "basis": "Walking each trade's ACC folders for ~200 models, checking versions and dates against the required list, flagging naming-rule breaks and stale files.",
    "handH": 12.0,
    "toolH": 0.3
   }
  },
  {
   "id": "add-in-control",
   "name": "Add-in Control",
   "app": "Web app",
   "set": "Add-in Control",
   "tagline": "Every add-in, every office, one switch.",
   "summary": "Deploy, update and switch add-ins on or off across the office from one place.",
   "stack": [
    "Azure",
    "Node.js",
    "React"
   ],
   "hand": 10,
   "mid": 10.2,
   "low": 8,
   "high": 12,
   "functions": 5,
   "top": {
    "fn": "Run the installer on each PC",
    "unit": "per release (50 PCs)",
    "basis": "5-8 min per PC including closing Revit or Navisworks.",
    "handH": 5.5,
    "toolH": 0.0
   }
  }
 ]
};
