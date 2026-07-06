import { DOMAINS } from '../data/rubric.js'

export const POINTS_PER_QUESTION = 3

export const MAX_SCORE = DOMAINS.reduce(
  (sum, d) => sum + d.questions.length * POINTS_PER_QUESTION,
  0,
)

const OPTIONAL_DOMAIN_IDS = DOMAINS.filter((d) => d.optional).map((d) => d.id)

export function scoreAnswers(answers, skippedOptional) {
  const byDomain = DOMAINS.map((domain) => {
    const skipped = domain.optional && skippedOptional
    const maxPoints = domain.questions.length * POINTS_PER_QUESTION
    const earnedPoints = skipped
      ? 0
      : domain.questions.reduce((sum, q) => {
          const score = answers[q.id]
          return sum + (typeof score === 'number' ? score : 0)
        }, 0)
    const answeredCount = skipped
      ? 0
      : domain.questions.filter((q) => typeof answers[q.id] === 'number').length

    return {
      id: domain.id,
      title: domain.title,
      optional: domain.optional,
      skipped,
      earnedPoints,
      maxPoints,
      answeredCount,
      questionCount: domain.questions.length,
    }
  })

  const relevantDomains = byDomain.filter((d) => !d.skipped)
  const totalEarned = relevantDomains.reduce((sum, d) => sum + d.earnedPoints, 0)
  const totalMax = relevantDomains.reduce((sum, d) => sum + d.maxPoints, 0)
  const totalAnswered = relevantDomains.reduce((sum, d) => sum + d.answeredCount, 0)
  const totalQuestions = relevantDomains.reduce((sum, d) => sum + d.questionCount, 0)

  return {
    byDomain,
    totalEarned,
    totalMax,
    totalAnswered,
    totalQuestions,
    percent: totalMax === 0 ? 0 : Math.round((totalEarned / totalMax) * 100),
  }
}

export function getMaturityTier(percent) {
  if (percent < 40) {
    return {
      label: 'Emerging',
      description: 'AI governance is largely informal or not yet started. This is the most common starting point. The assessment below points to where to focus first.',
    }
  }
  if (percent < 70) {
    return {
      label: 'Developing',
      description: 'Some foundational pieces are in place, but coverage is inconsistent across domains. A few focused efforts would meaningfully close the gap.',
    }
  }
  if (percent < 90) {
    return {
      label: 'Established',
      description: 'Most governance areas are well covered, with a handful of specific gaps left to close.',
    }
  }
  return {
    label: 'Advanced',
    description: 'Governance is comprehensive and well-documented across nearly every area assessed.',
  }
}

export function countAnsweredInDomain(domain, answers) {
  return domain.questions.filter((q) => typeof answers[q.id] === 'number').length
}
