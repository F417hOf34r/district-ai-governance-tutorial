import NextSection from '../components/NextSection.jsx'

const STATS = [
  {
    num: '#1',
    label: 'Sector for ransomware attacks',
    note: 'Education, including K-12 districts, is consistently ranked as the leading target for ransomware in national threat reporting.',
  },
  {
    num: '~2/3',
    label: 'Of districts have no full-time cybersecurity position',
    note: 'Cybersecurity work typically falls to an IT director or CTO already carrying a full network and systems workload.',
  },
  {
    num: '2-3%',
    label: 'Average district IT budget, as a share of operating expenditures',
    note: 'Compared to 12 to 15 percent in comparable private-sector organizations of similar size and complexity.',
  },
]

export default function Problem() {
  return (
    <div className="page">
      <h1>The Two-Front Problem</h1>
      <p className="page-lede">
        District technology leaders are not fighting one battle right now. They are fighting
        two, at the same time, with roughly the staffing of one.
      </p>

      <section className="section">
        <h2>The cybersecurity front</h2>
        <p>
          Education is the leading ransomware target in the country, year over year. Yet
          roughly two-thirds of districts operate without a full-time cybersecurity position,
          leaving the work to an IT director or CTO who is already responsible for networks,
          devices, the student information system, and the help desk.
        </p>
        <p>
          A typical breach costs a district one to three million dollars to recover from, and
          costs students three to ten lost instructional days while systems are rebuilt.
          District IT budgets average only 2 to 3 percent of operating expenditures, compared
          to 12 to 15 percent in comparable private-sector organizations. Common findings in
          district technology reviews include delayed patching, outdated incident response
          documentation, limited multi-factor authentication coverage, and missing vendor risk
          assessments for the third-party platforms holding student data.
        </p>
        <p>
          Making matters harder, the K-12 Cybersecurity Government Coordinating Council was
          suspended in 2025, reducing the threat intelligence support available to small
          districts precisely when they need it most.
        </p>
        <div className="stat-row">
          {STATS.map((s) => (
            <div key={s.label} className="stat-card">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
              <p className="stat-note">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>The AI governance front</h2>
        <p>
          Generative AI entered classrooms in late 2022, well before any state had published
          guidance on how districts should handle it. State departments of education did not
          begin releasing structured AI guidance until 2024, and by mid-2025, more than half of
          U.S. states had published official K-12 AI guidance of some form. Ohio and Tennessee
          went further, enacting legal mandates that require every district to adopt a local AI
          policy, not merely recommending one.
        </p>
        <p>
          Despite that guidance, nearly half of educators report their district still has no AI
          policy at all, and only about half of teachers have received any AI training. On top
          of policy and training gaps, districts must evaluate every AI tool teachers adopt for
          FERPA and COPPA compliance before student data ever touches it.
        </p>
        <blockquote className="pull-quote">
          "We had a policy in draft for eight months. In the meantime, every teacher in the
          building made their own rules."
        </blockquote>
      </section>

      <section className="section">
        <h2>Where both fronts converge</h2>
        <p>
          In practice, both of these workloads land on the same desk. The district IT director
          or CTO is expected to harden the network, respond to incidents, vet AI vendors, draft
          policy language, and train staff, all without additional headcount. That is not a
          staffing gap that more effort can close. It is a structural mismatch between the scope
          of the work and the resources assigned to it.
        </p>
        <p>
          That mismatch is exactly why a framework-aligned operating model matters: a way to
          decide, deliberately, what stays in-house, what gets shared or contracted out, and
          what requires outside expertise, rather than leaving the answer to whoever has time
          left at the end of the week.
        </p>
      </section>

      <NextSection currentId="problem" />
    </div>
  )
}
