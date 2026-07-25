import STATES from '../data/states.json'

// Shared by the results page and the generated PDFs so the state callout reads
// the same wherever it appears.

export function findStateGuidance(stateName) {
  if (!stateName) return null
  return STATES.find((s) => s.state === stateName) ?? null
}

export function stateGuidanceRecommendation(entry) {
  if (!entry) return ''
  switch (entry.status) {
    case 'Legal Mandate':
      return 'Your state requires districts to adopt a local AI policy. Treat the state-required elements as the minimum bar for the Policy & Governance domain, and check your adoption date against the state deadline.'
    case 'Official Guidance Published':
      return 'Map your policy against the published state framework element by element. Anything the framework requires that your policy does not address is a documented gap you can close before it is found for you.'
    case 'In Development':
      return 'Statewide guidance is still being written. Draft against a published framework from a peer state now, and schedule a policy review for the quarter after your state publishes.'
    case 'No Published Guidance':
      return 'Your state has not published K-12 AI guidance. Monitor your state department of education for updates, and in the meantime adopt a neighboring state’s published framework as your working model rather than waiting.'
    default:
      return 'Check your state department of education for current K-12 AI guidance before finalizing policy.'
  }
}

// One-line descriptor of publication year and approach, e.g. "Published 2024 · Principles-based".
export function stateGuidanceMeta(entry) {
  if (!entry) return ''
  const parts = []
  if (entry.yearPublished) parts.push(`Published ${entry.yearPublished}`)
  if (entry.approachStyle) parts.push(entry.approachStyle)
  return parts.join(' · ')
}
