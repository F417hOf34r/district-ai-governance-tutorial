import { DOMAINS, TOTAL_QUESTION_COUNT } from '../data/rubric.js'
import { MAX_SCORE } from '../lib/scoring.js'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <h1>District AI Governance Tutorial</h1>
        <p className="hero-lede">
          A practical guide and self-assessment for K-12 districts building responsible AI
          policy, data privacy practice, and staff readiness — organized around six governance
          domains.
        </p>
        <div className="hero-actions">
          <Button to="/tutorial" variant="primary">Explore the tutorial</Button>
          <Button to="/assessment" variant="secondary">Take the self-assessment</Button>
        </div>
      </section>

      <section className="section">
        <h2>Six domains at a glance</h2>
        <div className="card-grid">
          {DOMAINS.map((domain) => (
            <Card key={domain.id} to={`/tutorial/${domain.id}`}>
              <h3>
                {domain.title}
                {domain.optional && <span className="badge">Optional</span>}
              </h3>
              <p>{domain.tagline}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section about-assessment">
        <h2>About the self-assessment</h2>
        <p>
          {TOTAL_QUESTION_COUNT} questions across the six domains above, scored 0–3 each for a
          maximum of {MAX_SCORE} points. Takes about 10–15 minutes. Your answers are saved only in
          your own browser — nothing is sent anywhere else — so you can leave and come back
          without losing progress.
        </p>
      </section>
    </div>
  )
}
