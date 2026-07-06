import NextSection from '../components/NextSection.jsx'

const TIERS = [
  {
    num: '01',
    title: 'Handled in-house',
    description: 'Routine, recurring activities that existing staff can own on a predictable schedule.',
    items: ['Patching cadence', 'Account hygiene and offboarding', 'Acceptable-use policy enforcement', 'Basic staff awareness training'],
  },
  {
    num: '02',
    title: 'Shared services or fractional arrangements',
    description: 'Specialized work that does not justify a full-time hire but needs real expertise.',
    items: ['Vulnerability assessment', 'Policy development', 'Framework alignment work', 'Vendor risk review'],
  },
  {
    num: '03',
    title: 'Retained outside expertise',
    description: 'High-acuity events where the cost of being wrong is too high to learn on the job.',
    items: ['Incident response', 'Breach recovery', 'Legal exposure and regulatory response'],
  },
]

const COMPARISON = [
  { model: 'Full in-house', cost: 'High (dedicated headcount)', coverage: 'Broad, but stretched thin', risk: 'High (single point of failure, coverage gaps)' },
  { model: 'Full outsourced', cost: 'High (retainer plus incident rates)', coverage: 'Deep in specialty, weak on daily operations', risk: 'Moderate (slower on routine issues, response depends on contract terms)' },
  { model: 'Tiered model', cost: 'Moderate (staff time plus targeted contracts)', coverage: 'Right-sized: routine work in-house, specialty work contracted', risk: 'Lower (matches expertise to acuity, avoids both extremes)' },
]

export default function OperatingModel() {
  return (
    <div className="page">
      <h1>The Operating Model</h1>
      <p className="page-lede">
        Once a district accepts that cybersecurity and AI governance cannot both be handled by
        one overworked staff member alone, the next decision is how to allocate the work. A
        tiered operating model is the defensible middle path between doing everything in-house
        and outsourcing everything.
      </p>

      <section className="section">
        <h2>A tiered approach</h2>
        <div className="tier-grid">
          {TIERS.map((tier) => (
            <div key={tier.num} className="tier-card">
              <span className="engagement-num">{tier.num}</span>
              <h3>{tier.title}</h3>
              <p>{tier.description}</p>
              <ul className="check-list">
                {tier.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Cost and risk, compared</h2>
        <p>
          Neither extreme serves a resource-constrained district well. Full in-house coverage
          demands headcount most districts cannot fund and still leaves gaps when that one
          person is out sick or overwhelmed. Full outsourcing is expensive for routine work that
          in-house staff could easily handle, and it is slower to respond to day-to-day issues.
          The tiered model matches the acuity of the work to the right resource.
        </p>
        <div className="table-scroll">
          <table className="domain-table">
            <thead>
              <tr>
                <th scope="col">Model</th>
                <th scope="col">Cost</th>
                <th scope="col">Coverage</th>
                <th scope="col">Risk</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.model}>
                  <th scope="row">{row.model}</th>
                  <td>{row.cost}</td>
                  <td>{row.coverage}</td>
                  <td>{row.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2>What a board expects to see</h2>
        <p>
          Whichever model a district chooses, a board will eventually ask for documentation
          proving it is more than an idea. Three artifacts come up in almost every board
          conversation about AI and cybersecurity readiness:
        </p>
        <ul className="check-list">
          <li>An AI acceptable-use policy, adopted and posted, not just drafted</li>
          <li>A risk register naming specific gaps, their severity, and who owns closing them</li>
          <li>A regular board reporting cadence, so governance is a standing agenda item rather than a one-time briefing</li>
        </ul>
        <p>
          The self-assessment on this site generates starter versions of all three, scored
          against your district's own answers, so the first draft of each document reflects
          where your district actually stands today.
        </p>
      </section>

      <NextSection currentId="operating-model" />
    </div>
  )
}
