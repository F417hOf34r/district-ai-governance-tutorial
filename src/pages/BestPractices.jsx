import { useMemo, useState } from 'react'
import STATES from '../data/states.json'
import Card from '../components/Card.jsx'
import NextSection from '../components/NextSection.jsx'

const STATUS_OPTIONS = [
  'All statuses',
  'Legal Mandate',
  'Official Guidance Published',
  'In Development',
  'No Published Guidance',
]

const SPOTLIGHTS = [
  {
    state: 'Ohio',
    heading: 'A hard legal deadline',
    takeaway:
      'Ohio gives districts a firm compliance date (July 1, 2026) and a defined list of required policy elements. Districts elsewhere can borrow that same structure, publish a policy against a real deadline, and assign a named owner, even without a legal mandate forcing the timeline.',
  },
  {
    state: 'Tennessee',
    heading: 'A model policy and toolkit',
    takeaway:
      'Tennessee paired its mandate with a ready-made model policy and toolkit through its school boards association, lowering the lift for small districts with no policy staff. Any district can use a published model policy as a starting draft rather than writing one from a blank page.',
  },
  {
    state: 'Georgia',
    heading: 'A stoplight system anyone can explain in a sentence',
    takeaway:
      'Georgia\'s red, yellow, green traffic light system sorts AI uses into prohibited, cautious, and encouraged categories. It is easy for a teacher to remember and easy for a board member to understand at a glance, which is exactly what makes a policy usable rather than shelfware.',
  },
]

export default function BestPractices() {
  const [status, setStatus] = useState('All statuses')
  const [search, setSearch] = useState('')

  const counts = useMemo(() => {
    const mandates = STATES.filter((s) => s.status === 'Legal Mandate').length
    const published = STATES.filter((s) => s.status === 'Official Guidance Published').length
    return { mandates, published }
  }, [])

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return STATES.filter((s) => {
      const matchesStatus = status === 'All statuses' || s.status === status
      const matchesSearch =
        term === '' ||
        s.state.toLowerCase().includes(term) ||
        s.summary.toLowerCase().includes(term) ||
        (s.approachStyle ?? '').toLowerCase().includes(term)
      return matchesStatus && matchesSearch
    })
  }, [status, search])

  return (
    <div className="page">
      <h1>Best Practices Portal</h1>
      <p className="page-lede">
        A state-by-state view of published K-12 AI guidance, so a district can see what
        neighboring or peer states have already worked out, rather than starting from zero.
      </p>

      <div className="stat-row">
        <div className="stat-card">
          <div className="stat-num">{counts.mandates}</div>
          <div className="stat-label">States with a legal mandate</div>
          <p className="stat-note">States that require districts to adopt a local AI policy by law.</p>
        </div>
        <div className="stat-card">
          <div className="stat-num">{counts.published}</div>
          <div className="stat-label">States with published guidance</div>
          <p className="stat-note">States whose department of education has issued official AI guidance.</p>
        </div>
        <div className="stat-card">
          <div className="stat-num">{STATES.length}</div>
          <div className="stat-label">States and territories tracked</div>
          <p className="stat-note">Reviewed and updated periodically, not a live feed.</p>
        </div>
      </div>

      <section className="section">
        <h2>Spotlight: what other districts can borrow</h2>
        <div className="card-grid">
          {SPOTLIGHTS.map((spot) => (
            <Card key={spot.state}>
              <h3>{spot.state}</h3>
              <p><strong>{spot.heading}</strong></p>
              <p>{spot.takeaway}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Browse by state</h2>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="statusFilter">Filter by status</label>
            <select id="statusFilter" value={status} onChange={(e) => setStatus(e.target.value)}>
              {STATUS_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="stateSearch">Search by state or keyword</label>
            <input
              id="stateSearch"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="e.g., Georgia, traffic light, mandate"
            />
          </div>
        </div>
        <p className="helper-text">{filtered.length} of {STATES.length} states shown.</p>

        <div className="card-grid">
          {filtered.map((s) => (
            <Card key={s.state}>
              <h3>
                {s.state}
                <span className="badge">{s.status}</span>
              </h3>
              <p>{s.summary}</p>
              <p className="helper-text">
                {s.yearPublished ? `Published ${s.yearPublished}` : 'No publication year on record'}
                {s.approachStyle ? ` · ${s.approachStyle}` : ''}
              </p>
              <p className="helper-text">Last reviewed {s.lastReviewed}</p>
            </Card>
          ))}
        </div>
      </section>

      <NextSection currentId="best-practices" />
    </div>
  )
}
