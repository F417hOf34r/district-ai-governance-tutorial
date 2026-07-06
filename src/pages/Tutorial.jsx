import { DOMAINS } from '../data/rubric.js'
import Card from '../components/Card.jsx'

export default function Tutorial() {
  return (
    <div className="page">
      <h1>Tutorial</h1>
      <p className="page-lede">
        Six governance domains cover the full picture of responsible AI adoption in a K-12
        district. Start with whichever domain matters most to you right now. Each page explains
        why it matters, what good practice looks like, and where to find authoritative guidance.
      </p>
      <div className="card-grid">
        {DOMAINS.map((domain) => (
          <Card key={domain.id} to={`/tutorial/${domain.id}`}>
            <h2>
              {domain.title}
              {domain.optional && <span className="badge">Optional</span>}
            </h2>
            <p>{domain.tagline}</p>
            <span className="card-cta">Read more &rarr;</span>
          </Card>
        ))}
      </div>
    </div>
  )
}
