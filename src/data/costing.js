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
   "low": 5090.225,
   "mid": 7431.119,
   "high": 9772.013,
   "hand": 8266.663,
   "fns": 30
  },
  {
   "name": "OBMI Navisworks Tools",
   "low": 508.068,
   "mid": 1223.342,
   "high": 2243.621,
   "hand": 1274.641,
   "fns": 24
  },
  {
   "name": "ACC vs TIDP/MIDP Checker",
   "low": 91.717,
   "mid": 138.04,
   "high": 184.363,
   "hand": 138.25,
   "fns": 4
  },
  {
   "name": "ACC Model Health Check",
   "low": 374.825,
   "mid": 374.825,
   "high": 374.825,
   "hand": 375.0,
   "fns": 4
  },
  {
   "name": "Meridian",
   "low": 597.54,
   "mid": 1431.498,
   "high": 2622.248,
   "hand": 1480.86,
   "fns": 9
  },
  {
   "name": "Add-in Control",
   "low": 7.8,
   "mid": 10.15,
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
   "hand": 3336.795,
   "mid": 3016.116,
   "low": 1473.39,
   "high": 4558.842,
   "functions": 9,
   "top": {
    "fn": "Resolve Duplicates (Number, Mark, Type Mark)",
    "unit": "per model",
    "basis": "Renumbering duplicate marks and numbers one by one.",
    "handH": 0.55,
    "toolH": 0.04
   },
   "fns": [
    {
     "fn": "Resolve Duplicates (Number, Mark, Type Mark)",
     "unit": "per model",
     "basis": "Renumbering duplicate marks and numbers one by one.",
     "handH": 0.55,
     "toolH": 0.04,
     "handMonth": 476.7,
     "savedMonth": 442.0
    },
    {
     "fn": "Resolve Overlaps (wall/wall, floor/floor, wall and room line)",
     "unit": "per model",
     "basis": "Cutting geometry or shortening room lines one overlap at a time.",
     "handH": 0.55,
     "toolH": 0.04,
     "handMonth": 476.7,
     "savedMonth": 442.0
    },
    {
     "fn": "Repair Sketches (off-axis lines)",
     "unit": "per model",
     "basis": "Opening each sketch and straightening lines so the loop stays closed.",
     "handH": 0.55,
     "toolH": 0.04,
     "handMonth": 476.7,
     "savedMonth": 442.0
    },
    {
     "fn": "Repair Constraints, Clean Up Rooms, Correct Alignment",
     "unit": "per model",
     "basis": "Fixing constraint, room and slightly-off-axis wall warnings individually.",
     "handH": 0.55,
     "toolH": 0.055,
     "handMonth": 476.7,
     "savedMonth": 429.0
    },
    {
     "fn": "Resolve Joins",
     "unit": "per model",
     "basis": "Unjoining and re-joining element pairs one at a time with the right priority.",
     "handH": 0.5,
     "toolH": 0.04,
     "handMonth": 433.4,
     "savedMonth": 398.7
    },
    {
     "fn": "Export CSV, Excel, JSON and summary",
     "unit": "per model",
     "basis": "Copying the warnings list into Excel for the BIM report.",
     "handH": 0.3,
     "toolH": 0.015,
     "handMonth": 260.0,
     "savedMonth": 247.0
    },
    {
     "fn": "Collect Warnings and the model-health dashboard",
     "unit": "per model",
     "basis": "Opening Review Warnings and scrolling a long, ungrouped list with no counts.",
     "handH": 0.3,
     "toolH": 0.025,
     "handMonth": 260.0,
     "savedMonth": 238.3
    },
    {
     "fn": "Review One by One (show in 3D, fix this one)",
     "unit": "per model",
     "basis": "Selecting each element pair, isolating it in 3D and fixing it by hand.",
     "handH": 0.35,
     "toolH": 0.1,
     "handMonth": 303.3,
     "savedMonth": 216.7
    },
    {
     "fn": "Filter and search (category, severity, fix-by, text)",
     "unit": "per model",
     "basis": "Reading the list to find which warnings belong together.",
     "handH": 0.2,
     "toolH": 0.015,
     "handMonth": 173.3,
     "savedMonth": 160.3
    }
   ]
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
   "hand": 2470.12,
   "mid": 2173.269,
   "low": 2064.919,
   "high": 2281.619,
   "functions": 5,
   "top": {
    "fn": "Auto-Map Clash Code from the clash matrix",
    "unit": "per model",
    "basis": "Looking up each category's code in the clash matrix and entering it by hand.",
    "handH": 2.0,
    "toolH": 0.25
   },
   "fns": [
    {
     "fn": "Auto-Map Clash Code from the clash matrix",
     "unit": "per model",
     "basis": "Looking up each category's code in the clash matrix and entering it by hand.",
     "handH": 2.0,
     "toolH": 0.25,
     "handMonth": 1733.4,
     "savedMonth": 1516.7
    },
    {
     "fn": "Dashboard: Run Analysis (missing code and zone by category)",
     "unit": "per run",
     "basis": "Counting elements with a blank Clash Code or Zone, category by category, with schedules and filters.",
     "handH": 0.2,
     "toolH": 0.01,
     "handMonth": 173.3,
     "savedMonth": 164.7
    },
    {
     "fn": "Parameter Coverage and missing-parameter CSV",
     "unit": "per check",
     "basis": "Finding which categories the parameter is not bound to, one category at a time, and listing them for the parameter owner.",
     "handH": 0.2,
     "toolH": 0.01,
     "handMonth": 173.3,
     "savedMonth": 164.7
    },
    {
     "fn": "Assign Values (by category, selection or preview rows)",
     "unit": "per batch",
     "basis": "Selecting elements category by category and typing the value into Properties.",
     "handH": 0.2,
     "toolH": 0.01,
     "handMonth": 173.3,
     "savedMonth": 164.7
    },
    {
     "fn": "Import / Export values through CSV or Excel",
     "unit": "per round trip",
     "basis": "Editing values in schedules or exporting by hand and re-keying them.",
     "handH": 1.0,
     "toolH": 0.25,
     "handMonth": 216.7,
     "savedMonth": 162.5
    }
   ]
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
   "hand": 2169.998,
   "mid": 1978.674,
   "low": 1396.686,
   "high": 2560.662,
   "functions": 5,
   "top": {
    "fn": "Run Health Check (automated and config-compared tests)",
    "unit": "per model",
    "basis": "Manually inspecting links, grids and levels, worksets, views and templates against the checklist.",
    "handH": 1.5,
    "toolH": 0.115
   },
   "fns": [
    {
     "fn": "Run Health Check (automated and config-compared tests)",
     "unit": "per model",
     "basis": "Manually inspecting links, grids and levels, worksets, views and templates against the checklist.",
     "handH": 1.5,
     "toolH": 0.115,
     "handMonth": 1300.1,
     "savedMonth": 1200.4
    },
    {
     "fn": "Export Excel report",
     "unit": "per model",
     "basis": "Writing the findings up in a report.",
     "handH": 0.4,
     "toolH": 0.015,
     "handMonth": 346.7,
     "savedMonth": 333.7
    },
    {
     "fn": "Review Fail and Needs review rows",
     "unit": "per model",
     "basis": "Reading findings and recording what to fix.",
     "handH": 0.45,
     "toolH": 0.075,
     "handMonth": 390.0,
     "savedMonth": 325.0
    },
    {
     "fn": "Choose disciplines and tests (143 tests in 5 disciplines)",
     "unit": "per model",
     "basis": "Working out which checklist items apply to this model.",
     "handH": 0.15,
     "toolH": 0.015,
     "handMonth": 130.0,
     "savedMonth": 117.0
    },
    {
     "fn": "Test Settings (naming, worksets, levels, angles)",
     "unit": "per project change",
     "basis": "Documenting the project standard so tests have something to compare against.",
     "handH": 0.75,
     "toolH": 0.15,
     "handMonth": 3.2,
     "savedMonth": 2.6
    }
   ]
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
   "hand": 154.5,
   "mid": 137.625,
   "low": 80.5,
   "high": 194.75,
   "functions": 4,
   "top": {
    "fn": "Load Checked / Unload Checked (many links)",
    "unit": "per use",
    "basis": "Right-click each link in Manage Links: Unload or Reload.",
    "handH": 0.15,
    "toolH": 0.015
   },
   "fns": [
    {
     "fn": "Load Checked / Unload Checked (many links)",
     "unit": "per use",
     "basis": "Right-click each link in Manage Links: Unload or Reload.",
     "handH": 0.15,
     "toolH": 0.015,
     "handMonth": 97.5,
     "savedMonth": 87.8
    },
    {
     "fn": "Filter by name and status; Check All / Uncheck All",
     "unit": "per use",
     "basis": "Scrolling Manage Links and picking rows one at a time.",
     "handH": 0.06,
     "toolH": 0.007,
     "handMonth": 39.0,
     "savedMonth": 34.1
    },
    {
     "fn": "Unload for me (workshared models)",
     "unit": "per use",
     "basis": "Using Unload for me per link.",
     "handH": 0.075,
     "toolH": 0.007,
     "handMonth": 11.3,
     "savedMonth": 10.1
    },
    {
     "fn": "Tick Revit Selection",
     "unit": "per use",
     "basis": "Selecting link instances and finding them in Manage Links.",
     "handH": 0.045,
     "toolH": 0.007,
     "handMonth": 6.8,
     "savedMonth": 5.6
    }
   ]
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
   "hand": 91.75,
   "mid": 85.025,
   "low": 48.75,
   "high": 121.3,
   "functions": 4,
   "top": {
    "fn": "Apply Checked (one transaction, creates missing worksets)",
    "unit": "per model",
    "basis": "Selecting elements and using the workset drop-down repeatedly; creating worksets by hand.",
    "handH": 0.6,
    "toolH": 0.04
   },
   "fns": [
    {
     "fn": "Apply Checked (one transaction, creates missing worksets)",
     "unit": "per model",
     "basis": "Selecting elements and using the workset drop-down repeatedly; creating worksets by hand.",
     "handH": 0.6,
     "toolH": 0.04,
     "handMonth": 39.0,
     "savedMonth": 36.4
    },
    {
     "fn": "Preview (will move, already correct, in groups, owned by others)",
     "unit": "per model",
     "basis": "Selecting category by category and checking each element's current workset.",
     "handH": 0.5,
     "toolH": 0.03,
     "handMonth": 32.5,
     "savedMonth": 30.6
    },
    {
     "fn": "Save / Load Config (share rules between models)",
     "unit": "per model",
     "basis": "Re-creating the same selection logic in each model.",
     "handH": 0.35,
     "toolH": 0.015,
     "handMonth": 15.7,
     "savedMonth": 15.1
    },
    {
     "fn": "Write rules (category, family, type to workset)",
     "unit": "per rule set",
     "basis": "Planning workset assignment and noting it down before selecting by category.",
     "handH": 0.45,
     "toolH": 0.15,
     "handMonth": 4.5,
     "savedMonth": 3.0
    }
   ]
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
   "hand": 43.5,
   "mid": 40.41,
   "low": 25.98,
   "high": 54.84,
   "functions": 3,
   "top": {
    "fn": "Apply Checked (Type or Instance, group, categories)",
    "unit": "per model",
    "basis": "Manage > Project Parameters: add each parameter, pick its group, tick its categories (~2 min each, 30-60 parameters).",
    "handH": 1.15,
    "toolH": 0.075
   },
   "fns": [
    {
     "fn": "Apply Checked (Type or Instance, group, categories)",
     "unit": "per model",
     "basis": "Manage > Project Parameters: add each parameter, pick its group, tick its categories (~2 min each, 30-60 parameters).",
     "handH": 1.15,
     "toolH": 0.075,
     "handMonth": 34.5,
     "savedMonth": 32.2
    },
    {
     "fn": "Preview (will add, will extend, already bound)",
     "unit": "per model",
     "basis": "Checking which parameters already exist and which categories are missing, parameter by parameter.",
     "handH": 0.225,
     "toolH": 0.025,
     "handMonth": 6.7,
     "savedMonth": 6.0
    },
    {
     "fn": "Export Template from a shared parameter file",
     "unit": "per file",
     "basis": "Typing each shared-parameter definition into a spreadsheet.",
     "handH": 0.375,
     "toolH": 0.015,
     "handMonth": 2.2,
     "savedMonth": 2.2
    }
   ]
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
   "hand": 545.58,
   "mid": 526.485,
   "low": 225.16,
   "high": 953.639,
   "functions": 6,
   "top": {
    "fn": "Filtered results grid across all tests",
    "unit": "per cycle",
    "basis": "No cross-test filter exists: browsing results test by test and filtering by status, distance and approver.",
    "handH": 4.5,
    "toolH": 0.15
   },
   "fns": [
    {
     "fn": "Filtered results grid across all tests",
     "unit": "per cycle",
     "basis": "No cross-test filter exists: browsing results test by test and filtering by status, distance and approver.",
     "handH": 4.5,
     "toolH": 0.15,
     "handMonth": 116.9,
     "savedMonth": 113.0
    },
    {
     "fn": "Load Asset Info (Element ID, family, type, workset, file)",
     "unit": "per cycle",
     "basis": "Selecting each clashing item and reading its properties; no bulk property pull exists.",
     "handH": 4.5,
     "toolH": 0.15,
     "handMonth": 116.9,
     "savedMonth": 113.0
    },
    {
     "fn": "Approve / Resolve Selected (records who and when)",
     "unit": "per cycle",
     "basis": "No bulk approve exists: approving results one by one and recording who and when by hand.",
     "handH": 4.5,
     "toolH": 0.175,
     "handMonth": 116.9,
     "savedMonth": 112.4
    },
    {
     "fn": "Export CSV / Import CSV (review round trip)",
     "unit": "per cycle",
     "basis": "No round trip exists: writing results out and re-keying decisions made elsewhere.",
     "handH": 3.0,
     "toolH": 0.075,
     "handMonth": 77.9,
     "savedMonth": 76.0
    },
    {
     "fn": "Test summary grid (New, Active, Reviewed, Approved, Resolved)",
     "unit": "per cycle",
     "basis": "No summary view exists: opening each of ~100 tests in Clash Detective and reading its counts.",
     "handH": 2.25,
     "toolH": 0.035,
     "handMonth": 58.5,
     "savedMonth": 57.5
    },
    {
     "fn": "Comments: add, edit, delete",
     "unit": "per cycle",
     "basis": "Typing comments result by result in the native panel; nothing is shared across tests.",
     "handH": 2.25,
     "toolH": 0.15,
     "handMonth": 58.5,
     "savedMonth": 54.6
    }
   ]
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
   "hand": 511.806,
   "mid": 495.568,
   "low": 190.0,
   "high": 941.515,
   "functions": 4,
   "top": {
    "fn": "Run Parameter Check (all elements in 100-115 files)",
    "unit": "per scan",
    "basis": "Opening each of 100-115 models and checking schedules or properties for gaps (~4-10 min per model).",
    "handH": 14.0,
    "toolH": 0.45
   },
   "fns": [
    {
     "fn": "Run Parameter Check (all elements in 100-115 files)",
     "unit": "per scan",
     "basis": "Opening each of 100-115 models and checking schedules or properties for gaps (~4-10 min per model).",
     "handH": 14.0,
     "toolH": 0.45,
     "handMonth": 363.7,
     "savedMonth": 352.0
    },
    {
     "fn": "Export CSV / Excel; double-click to isolate in 3D",
     "unit": "per scan",
     "basis": "Writing up missing elements and locating each one.",
     "handH": 3.0,
     "toolH": 0.075,
     "handMonth": 77.9,
     "savedMonth": 76.0
    },
    {
     "fn": "Dashboard (files scanned, elements missing, by file)",
     "unit": "per scan",
     "basis": "Compiling gaps by file.",
     "handH": 2.25,
     "toolH": 0.075,
     "handMonth": 58.5,
     "savedMonth": 56.5
    },
    {
     "fn": "Set required parameters and file scope",
     "unit": "per scan",
     "basis": "Listing what must be present and in which files.",
     "handH": 0.45,
     "toolH": 0.025,
     "handMonth": 11.7,
     "savedMonth": 11.0
    }
   ]
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
   "hand": 165.623,
   "mid": 155.101,
   "low": 64.604,
   "high": 284.394,
   "functions": 5,
   "top": {
    "fn": "Detailed Clash Export (open clashes by zone, file, asset)",
    "unit": "per cycle",
    "basis": "Compiling element-level clash lists by zone, source file and asset.",
    "handH": 2.25,
    "toolH": 0.15
   },
   "fns": [
    {
     "fn": "Detailed Clash Export (open clashes by zone, file, asset)",
     "unit": "per cycle",
     "basis": "Compiling element-level clash lists by zone, source file and asset.",
     "handH": 2.25,
     "toolH": 0.15,
     "handMonth": 58.5,
     "savedMonth": 54.6
    },
    {
     "fn": "Run Analysis: dashboard tiles (status and severity)",
     "unit": "per cycle",
     "basis": "Counting results per test and status in Clash Detective and Excel.",
     "handH": 1.5,
     "toolH": 0.125,
     "handMonth": 39.0,
     "savedMonth": 35.7
    },
    {
     "fn": "Categories & Matrix: category mapping and matrix validation",
     "unit": "per cycle",
     "basis": "Checking the clash matrix against the test list by hand.",
     "handH": 1.125,
     "toolH": 0.075,
     "handMonth": 29.2,
     "savedMonth": 27.3
    },
    {
     "fn": "Trend chart across past runs",
     "unit": "per cycle",
     "basis": "Keeping run-by-run history in a spreadsheet.",
     "handH": 0.75,
     "toolH": 0.015,
     "handMonth": 19.5,
     "savedMonth": 19.1
    },
    {
     "fn": "Tile filters and Clash Tests table with CSV / Excel export",
     "unit": "per cycle",
     "basis": "Filtering and exporting per-test summaries.",
     "handH": 0.75,
     "toolH": 0.04,
     "handMonth": 19.5,
     "savedMonth": 18.4
    }
   ]
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
   "hand": 37.5,
   "mid": 33.375,
   "low": 19.5,
   "high": 47.25,
   "functions": 2,
   "top": {
    "fn": "Hide All / Show All",
    "unit": "per use",
    "basis": "Resetting visibility category by category.",
    "handH": 0.175,
    "toolH": 0.007
   },
   "fns": [
    {
     "fn": "Filter, select categories, Hide Selected / Show Selected",
     "unit": "per use",
     "basis": "Building a search or selection per category and hiding it.",
     "handH": 0.115,
     "toolH": 0.015,
     "handMonth": 28.7,
     "savedMonth": 25.0
    },
    {
     "fn": "Hide All / Show All",
     "unit": "per use",
     "basis": "Resetting visibility category by category.",
     "handH": 0.175,
     "toolH": 0.007,
     "handMonth": 8.8,
     "savedMonth": 8.4
    }
   ]
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
   "hand": 10.776,
   "mid": 9.641,
   "low": 6.682,
   "high": 12.601,
   "functions": 5,
   "top": {
    "fn": "Export Viewpoints Report (HTML with a screenshot each)",
    "unit": "per report (~60 viewpoints)",
    "basis": "Capturing and captioning a screenshot per viewpoint.",
    "handH": 1.25,
    "toolH": 0.15
   },
   "fns": [
    {
     "fn": "Export Viewpoints Report (HTML with a screenshot each)",
     "unit": "per report (~60 viewpoints)",
     "basis": "Capturing and captioning a screenshot per viewpoint.",
     "handH": 1.25,
     "toolH": 0.15,
     "handMonth": 5.4,
     "savedMonth": 4.8
    },
    {
     "fn": "List viewpoints with comment counts and last comment",
     "unit": "per report",
     "basis": "Stepping through Saved Viewpoints one at a time.",
     "handH": 0.4,
     "toolH": 0.015,
     "handMonth": 1.7,
     "savedMonth": 1.7
    },
    {
     "fn": "Add, edit and delete comments",
     "unit": "per report",
     "basis": "Using the native panel per viewpoint.",
     "handH": 0.4,
     "toolH": 0.075,
     "handMonth": 1.7,
     "savedMonth": 1.4
    },
    {
     "fn": "Export comments (CSV / Excel)",
     "unit": "per report",
     "basis": "Copying comments out one by one.",
     "handH": 0.3,
     "toolH": 0.015,
     "handMonth": 1.3,
     "savedMonth": 1.2
    },
    {
     "fn": "Export Viewpoints (XML: camera, clipping, comments)",
     "unit": "per report",
     "basis": "Exporting and archiving viewpoint definitions by hand.",
     "handH": 0.3,
     "toolH": 0.015,
     "handMonth": 0.6,
     "savedMonth": 0.6
    }
   ]
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
   "hand": 3.356,
   "mid": 3.172,
   "low": 2.122,
   "high": 4.222,
   "functions": 2,
   "top": {
    "fn": "Apply to Selected (one tolerance to many tests)",
    "unit": "per change",
    "basis": "Opening each test's properties and typing the tolerance (~30 s each across ~100 tests).",
    "handH": 0.7,
    "toolH": 0.035
   },
   "fns": [
    {
     "fn": "Apply to Selected (one tolerance to many tests)",
     "unit": "per change",
     "basis": "Opening each test's properties and typing the tolerance (~30 s each across ~100 tests).",
     "handH": 0.7,
     "toolH": 0.035,
     "handMonth": 3.0,
     "savedMonth": 2.9
    },
    {
     "fn": "Filter tests by name; Select All",
     "unit": "per cycle",
     "basis": "Scrolling the Clash Detective test list to find the tests to change.",
     "handH": 0.075,
     "toolH": 0.007,
     "handMonth": 0.3,
     "savedMonth": 0.3
    }
   ]
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
   "hand": 138.25,
   "mid": 138.04,
   "low": 91.717,
   "high": 184.363,
   "functions": 4,
   "top": {
    "fn": "Match every deliverable and format",
    "unit": "per 1,000 deliverables",
    "basis": "~10,000 deliverables by hand, including naming drift (extra suffixes, revision tags, casing).",
    "handH": 12.5,
    "toolH": 0.003
   },
   "fns": [
    {
     "fn": "Match every deliverable and format",
     "unit": "per 1,000 deliverables",
     "basis": "~10,000 deliverables by hand, including naming drift (extra suffixes, revision tags, casing).",
     "handH": 12.5,
     "toolH": 0.003,
     "handMonth": 125.0,
     "savedMonth": 125.0
    },
    {
     "fn": "Build the Files Log",
     "unit": "per 1,000 deliverables",
     "basis": "Exporting or scanning the shared ACC folders of 20+ disciplines into a list, scoped to files that reached Shared.",
     "handH": 0.75,
     "toolH": 0.004,
     "handMonth": 7.5,
     "savedMonth": 7.5
    },
    {
     "fn": "Compile the QA/QC report",
     "unit": "per 1,000 deliverables",
     "basis": "Listing missing, partial, duplicate and extra files and saving the report back to ACC.",
     "handH": 0.375,
     "toolH": 0.007,
     "handMonth": 3.8,
     "savedMonth": 3.7
    },
    {
     "fn": "Load the schedule and map the columns",
     "unit": "per 1,000 deliverables",
     "basis": "Preparing the MIDP rows, finding the identifier, format and revision columns, filtering to filled rows across many tabs.",
     "handH": 0.2,
     "toolH": 0.007,
     "handMonth": 2.0,
     "savedMonth": 1.9
    }
   ]
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
   "hand": 375.0,
   "mid": 374.825,
   "low": 374.825,
   "high": 374.825,
   "functions": 4,
   "top": {
    "fn": "Run the checks",
    "unit": "per model",
    "basis": "Run the QA checklist in Revit and wait for it to finish. A model check takes about an hour in Revit; the web app returns every check, with its own score, in 2-3 seconds.",
    "handH": 1.0,
    "toolH": 0.001
   },
   "fns": [
    {
     "fn": "Run the checks",
     "unit": "per model",
     "basis": "Run the QA checklist in Revit and wait for it to finish. A model check takes about an hour in Revit; the web app returns every check, with its own score, in 2-3 seconds.",
     "handH": 1.0,
     "toolH": 0.001,
     "handMonth": 250.0,
     "savedMonth": 249.9
    },
    {
     "fn": "Export and format the report",
     "unit": "per model",
     "basis": "Export the results and tidy them into a report.",
     "handH": 0.2,
     "toolH": 0.0,
     "handMonth": 50.0,
     "savedMonth": 50.0
    },
    {
     "fn": "Save to ACC and keep track",
     "unit": "per model",
     "basis": "Upload the report to the right folder and tick the model off a list. The app saves each report as the model finishes.",
     "handH": 0.15,
     "toolH": 0.0,
     "handMonth": 37.5,
     "savedMonth": 37.5
    },
    {
     "fn": "Open the model",
     "unit": "per model",
     "basis": "",
     "handH": 0.15,
     "toolH": 0.0,
     "handMonth": 37.5,
     "savedMonth": 37.4
    }
   ]
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
   "hand": 1480.86,
   "mid": 1431.498,
   "low": 597.54,
   "high": 2622.248,
   "functions": 9,
   "top": {
    "fn": "Model sharing (incl. NWC and NWD files)",
    "unit": "per project per week",
    "basis": "Walking each trade's ACC folders for ~200 models, checking versions and dates against the required list, flagging naming-rule breaks and stale files.",
    "handH": 12.0,
    "toolH": 0.3
   },
   "fns": [
    {
     "fn": "Model sharing (incl. NWC and NWD files)",
     "unit": "per project per week",
     "basis": "Walking each trade's ACC folders for ~200 models, checking versions and dates against the required list, flagging naming-rule breaks and stale files.",
     "handH": 12.0,
     "toolH": 0.3,
     "handMonth": 311.8,
     "savedMonth": 304.0
    },
    {
     "fn": "Missing clash parameters",
     "unit": "per project per week",
     "basis": "Combining parameter-check results across 100-115 models, comparing runs, and splitting by trade, parameter and file; not practical by hand.",
     "handH": 11.0,
     "toolH": 0.15,
     "handMonth": 285.8,
     "savedMonth": 281.9
    },
    {
     "fn": "Model performance",
     "unit": "per project per week",
     "basis": "Opening and rolling up health reports across ~200 models into scores by discipline, failing checks and trends.",
     "handH": 7.5,
     "toolH": 0.225,
     "handMonth": 194.9,
     "savedMonth": 189.0
    },
    {
     "fn": "Exports and the full BIM QA/QC report",
     "unit": "per project per week",
     "basis": "Formatting an Excel or PDF pack with cover page and every board, each cycle.",
     "handH": 6.0,
     "toolH": 0.225,
     "handMonth": 155.9,
     "savedMonth": 150.0
    },
    {
     "fn": "Issue tracking and Issue Status Dashboard",
     "unit": "per project per week",
     "basis": "Exporting ACC issues, then pivoting by trade, asset, company, age and type, and building a one-page status per building or zone.",
     "handH": 6.0,
     "toolH": 0.3,
     "handMonth": 155.9,
     "savedMonth": 148.1
    },
    {
     "fn": "Clash report",
     "unit": "per project per week",
     "basis": "Building status and severity trends, the trade-against-trade matrix and package roll-ups from Clash Analyser exports.",
     "handH": 4.5,
     "toolH": 0.225,
     "handMonth": 116.9,
     "savedMonth": 111.1
    },
    {
     "fn": "Overview",
     "unit": "per project per week",
     "basis": "Pulling headline KPIs, a ranked 'what to chase first' list and a project table together from every other report.",
     "handH": 4.0,
     "toolH": 0.225,
     "handMonth": 103.9,
     "savedMonth": 98.1
    },
    {
     "fn": "TIDP/MIDP progress",
     "unit": "per project per week",
     "basis": "Reading the Checker's reports across packages and rolling completion up by trade and package.",
     "handH": 3.0,
     "toolH": 0.125,
     "handMonth": 77.9,
     "savedMonth": 74.7
    },
    {
     "fn": "Viewpoints report",
     "unit": "per project per week",
     "basis": "Comparing viewpoint snapshots, tracking what is new, fixed or closed, and checking cross-verification.",
     "handH": 3.0,
     "toolH": 0.125,
     "handMonth": 77.9,
     "savedMonth": 74.7
    }
   ]
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
   "hand": 10.4,
   "mid": 10.15,
   "low": 7.8,
   "high": 12.5,
   "functions": 5,
   "top": {
    "fn": "Run the installer on each PC",
    "unit": "per release (50 PCs)",
    "basis": "5-8 min per PC including closing Revit or Navisworks.",
    "handH": 5.5,
    "toolH": 0.0
   },
   "fns": [
    {
     "fn": "Run the installer on each PC",
     "unit": "per release (50 PCs)",
     "basis": "5-8 min per PC including closing Revit or Navisworks.",
     "handH": 5.5,
     "toolH": 0.0,
     "handMonth": 5.5,
     "savedMonth": 5.5
    },
    {
     "fn": "Chase and support problem PCs",
     "unit": "per release (50 PCs)",
     "basis": "Failed installs, wrong versions, people who missed the email.",
     "handH": 2.0,
     "toolH": 0.0,
     "handMonth": 2.0,
     "savedMonth": 2.0
    },
    {
     "fn": "Check who has what",
     "unit": "per release (50 PCs)",
     "basis": "Confirming versions and access per person; Devices and People pages do this automatically.",
     "handH": 2.0,
     "toolH": 0.0,
     "handMonth": 2.0,
     "savedMonth": 2.0
    },
    {
     "fn": "Send the installer and instructions",
     "unit": "per release (50 PCs)",
     "basis": "Distributing the installer and what to do.",
     "handH": 0.9,
     "toolH": 0.0,
     "handMonth": 0.9,
     "savedMonth": 0.9
    },
    {
     "fn": "Publish the release and check Devices",
     "unit": "per release (50 PCs)",
     "basis": "Upload the build, release it, glance at the Devices page.",
     "handH": 0.0,
     "toolH": 0.25,
     "handMonth": 0.0,
     "savedMonth": -0.2
    }
   ]
  }
 ]
};
