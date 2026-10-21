// ─────────────────────────────────────────────────────────────
// EDIT ME. Every number below is an ILLUSTRATIVE PLACEHOLDER so the
// calculator has something to show. Replace manualMinutes / autoMinutes /
// runsPerWeek with the values you have actually measured on OBMI projects.
// runsPerWeek is the team-wide total for a team of BASE_TEAM people.
// ─────────────────────────────────────────────────────────────

export const BASE_TEAM = 10;

export const automations = [
  {
    id: "clash-tolerance",
    name: "Clash Tolerance Manager",
    kind: "Navisworks add-in",
    stack: ["C#", ".NET", "Navisworks API"],
    headline: "One click instead of one clash test at a time.",
    summary:
      "Bulk-updates Clash Detective tolerances across every clash test in a federated model, using the API's copy / edit / commit pattern.",
    manualMinutes: 45,
    autoMinutes: 1,
    runsPerWeek: 4,
    manual: [
      "Open Clash Detective",
      "Select a clash test",
      "Edit its tolerance",
      "Repeat for every test",
      "Re-run and re-check",
    ],
    automated: [
      "Open the add-in",
      "Choose the new tolerance",
      "Apply to all tests",
    ],
  },
  {
    id: "clash-comment-sync",
    name: "ClashCommentSync",
    kind: "Navisworks add-in",
    stack: ["C#", "ClosedXML", "Excel"],
    headline: "Review clashes in Excel. Sync them back into the model.",
    summary:
      "Exports Clash Detective results and comments to Excel for offline review, then imports statuses and comments back in bulk.",
    manualMinutes: 60,
    autoMinutes: 5,
    runsPerWeek: 3,
    manual: [
      "Copy clash details by hand",
      "Paste into a tracker",
      "Collect comments from teams",
      "Re-type comments into Navisworks",
    ],
    automated: ["Export to Excel", "Teams comment offline", "Import and sync"],
  },
  {
    id: "workset-manager",
    name: "Workset Manager",
    kind: "Revit / pyRevit extension",
    stack: ["Python", "pyRevit", "WPF", "Excel"],
    headline: "Rule-based worksets, applied to thousands of elements.",
    summary:
      "A two-panel WPF tool that assigns elements to worksets by category and family name, with Excel rule import and specificity-based matching.",
    manualMinutes: 90,
    autoMinutes: 8,
    runsPerWeek: 2,
    manual: [
      "Filter by category",
      "Select elements manually",
      "Assign a workset",
      "Repeat per family",
      "Audit for missed elements",
    ],
    automated: ["Load rules from Excel", "Preview matches", "Apply in one pass"],
  },
  {
    id: "acc-powerbi",
    name: "ACC to Power BI Pipeline",
    kind: "APS + Power BI",
    stack: ["APS Data Exchange", "GraphQL", "Power Query", "Power BI"],
    headline: "Live model data in a dashboard, no exports.",
    summary:
      "A Power BI dataflow that pulls Revit data from ACC through the APS Data Exchange GraphQL API, authenticated in the browser and refreshed in the service.",
    manualMinutes: 120,
    autoMinutes: 2,
    runsPerWeek: 1,
    manual: [
      "Export schedules from Revit",
      "Clean and merge in Excel",
      "Rebuild the report",
      "Email the PDF",
    ],
    automated: ["Scheduled refresh", "Dashboard updates itself"],
  },
  {
    id: "acc-filelog",
    name: "ACC File-Log Automation",
    kind: "Power Platform + APS",
    stack: ["Power Automate", "Power Apps", "SharePoint", "APS OAuth"],
    headline: "Who changed what in ACC, logged automatically.",
    summary:
      "A Power Apps canvas app and Power Automate flow that extract file activity for selected ACC folders into SharePoint for reporting.",
    manualMinutes: 40,
    autoMinutes: 2,
    runsPerWeek: 5,
    manual: [
      "Open each ACC folder",
      "Check file history",
      "Copy into a spreadsheet",
      "Summarise for the team",
    ],
    automated: ["Pick folders in the app", "Flow logs to SharePoint"],
  },
  {
    id: "addin-hub",
    name: "Add-in Deployment Hub",
    kind: "Web platform (APS Command Center)",
    stack: ["Node.js", "Express", "APS sign-in", "Azure"],
    headline: "Every Revit and Navisworks add-in, deployed and tracked from one place.",
    summary:
      "A central control platform for add-in distribution with usage tracking, built to plug into the APS Command Center web app.",
    manualMinutes: 30,
    autoMinutes: 3,
    runsPerWeek: 3,
    manual: [
      "Send installers by email",
      "Walk users through setup",
      "Chase version mismatches",
      "Guess who uses what",
    ],
    automated: ["Publish once", "Users get the update", "Usage tracked centrally"],
  },
];
