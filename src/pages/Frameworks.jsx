import { FRAMEWORKS } from '../data/frameworks.js'
import Card from '../components/Card.jsx'

export default function Frameworks() {
  return (
    <div className="page">
      <h1>Framework Library</h1>
      <p className="page-lede">
        A district does not need to invent a governance approach from scratch. Mature,
        license-free public frameworks already exist for cybersecurity, for AI readiness, and
        for state-level AI policy. The gap most districts face is not a lack of frameworks, it
        is knowing which one to reach for and how they fit together.
      </p>
      <div className="card-grid">
        {FRAMEWORKS.map((framework) => (
          <Card key={framework.id} to={`/frameworks/${framework.id}`}>
            <h2>{framework.shortName}</h2>
            <p>{framework.tagline}</p>
            <span className="card-cta">Read more &rarr;</span>
          </Card>
        ))}
      </div>
    </div>
  )
}
