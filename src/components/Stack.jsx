const groups = [
  {
    title: "Autodesk",
    items: ["Revit API", "Navisworks API", "Autodesk Construction Cloud", "Autodesk Platform Services", "Dynamo"],
  },
  {
    title: "Build",
    items: ["C# / .NET", "Python / pyRevit", "Node.js / Express", "React", "ClosedXML"],
  },
  {
    title: "Data & Power Platform",
    items: ["Power BI", "Power Automate", "Power Apps", "GraphQL / REST", "SharePoint"],
  },
  {
    title: "Delivery",
    items: ["Azure Web Apps", "AI-assisted development", "Git"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="section section--sand">
      <div className="section__head">
        <p className="eyebrow">Under the hood</p>
        <h2>The stack behind the tools.</h2>
      </div>
      <div className="stack">
        {groups.map((g) => (
          <div className="stack__col" key={g.title}>
            <h4>{g.title}</h4>
            <ul>
              {g.items.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
