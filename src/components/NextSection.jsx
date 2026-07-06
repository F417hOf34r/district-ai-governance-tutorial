import { getNextInFlow } from '../data/siteFlow.js'
import Button from './Button.jsx'

export default function NextSection({ currentId }) {
  const next = getNextInFlow(currentId)
  if (!next) return null

  return (
    <section className="section domain-cta">
      <p className="eyebrow">Next section</p>
      <h2>{next.label}</h2>
      <Button to={next.path} variant="primary">Continue &rarr;</Button>
    </section>
  )
}
