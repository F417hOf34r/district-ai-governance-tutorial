import { Link, useParams } from 'react-router-dom'
import { FRAMEWORKS_BY_ID } from '../data/frameworks.js'
import NextSection from '../components/NextSection.jsx'

export default function FrameworkDetail() {
  const { slug } = useParams()
  const framework = FRAMEWORKS_BY_ID[slug]

  if (!framework) {
    return (
      <div className="page">
        <h1>Framework not found</h1>
        <p><Link to="/frameworks">Back to the framework library</Link></p>
      </div>
    )
  }

  return (
    <div className="page">
      <p className="breadcrumb"><Link to="/frameworks">Framework Library</Link> / {framework.shortName}</p>
      <h1>{framework.title}</h1>
      <p className="page-lede">{framework.tagline}</p>

      <section className="section">
        <h2>What it is</h2>
        <p>{framework.whatItIs}</p>
      </section>

      <section className="section">
        <h2>Why it is useful to a district</h2>
        <p>{framework.whyUseful}</p>
      </section>

      <section className="section">
        <h2>How to apply it</h2>
        <p>{framework.howToApply}</p>
      </section>

      <section className="section">
        <h2>Where it fits in the unified control set</h2>
        <p>{framework.whereItFits}</p>
      </section>

      <section className="section callout">
        <p><strong>How this framework maps to the others:</strong> {framework.mapsToOthers}</p>
      </section>

      <section className="section">
        <h2>Source</h2>
        <ul className="source-list">
          <li><a href={framework.source.url} target="_blank" rel="noreferrer">{framework.source.label}</a></li>
        </ul>
      </section>

      <NextSection currentId={framework.id} />
    </div>
  )
}
