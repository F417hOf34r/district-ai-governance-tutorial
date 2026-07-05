import { Link, useParams } from 'react-router-dom'
import { DOMAINS_BY_ID } from '../data/rubric.js'
import Button from '../components/Button.jsx'

export default function TutorialDomain() {
  const { domainSlug } = useParams()
  const domain = DOMAINS_BY_ID[domainSlug]

  if (!domain) {
    return (
      <div className="page">
        <h1>Domain not found</h1>
        <p><Link to="/tutorial">Back to the tutorial index</Link></p>
      </div>
    )
  }

  return (
    <div className="page">
      <p className="breadcrumb"><Link to="/tutorial">Tutorial</Link> / {domain.title}</p>
      <h1>
        {domain.title}
        {domain.optional && <span className="badge">Optional</span>}
      </h1>
      <p className="page-lede">{domain.summary}</p>

      <div className="two-col">
        <section>
          <h2>What good looks like</h2>
          <ul className="check-list">
            {domain.whatGoodLooksLike.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Common gaps</h2>
          <ul className="gap-list">
            {domain.commonGaps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="section">
        <h2>Authoritative sources</h2>
        <ul className="source-list">
          {domain.sources.map((source) => (
            <li key={source.url}>
              <a href={source.url} target="_blank" rel="noreferrer">{source.label}</a>
            </li>
          ))}
        </ul>
      </section>

      <section className="section domain-cta">
        <h2>Ready to check where your district stands?</h2>
        <Button to="/assessment" variant="primary">Start the self-assessment &rarr;</Button>
      </section>
    </div>
  )
}
