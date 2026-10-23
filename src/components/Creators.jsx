const lead = { img: "fred", name: "Frederic", role: "Digital Delivery Lead" };
const team = [
  { img: "roshan", name: "Roshan Kerketta", role: "BIM Manager" },
  { img: "bharathi", name: "Bharathi", role: "BIM Coordinator" },
  { img: "muthu", name: "Muthukumar Ramasamy", role: "BIM Manager" },
  { img: "chandu", name: "Chandra Shekhar Tamaada", role: "BIM Coordinator" },
  { img: "shifkhan", name: "Shifkhan", role: "BIM Manager" },
];

export default function Creators() {
  return (
    <section id="creators" className="creators">
      <p className="creators__built">Built by OBMI</p>
      <p className="eyebrow creators__made">Created by Fred and Team</p>
      <figure className="creators__lead">
        <img src={`./media/team/${lead.img}.jpg`} alt={lead.name} />
        <figcaption><b>{lead.name}</b><span>{lead.role}</span></figcaption>
      </figure>
      <div className="creators__team">
        {team.map((m) => (
          <figure key={m.img}>
            <img src={`./media/team/${m.img}.jpg`} alt={m.name} loading="lazy" />
            <figcaption><b>{m.name}</b><span>{m.role}</span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
