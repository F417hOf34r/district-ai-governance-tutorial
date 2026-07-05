import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DOMAINS } from '../data/rubric.js'
import { useAssessment } from '../context/AssessmentContext.jsx'
import { countAnsweredInDomain } from '../lib/scoring.js'
import QuestionCard from '../components/QuestionCard.jsx'
import ProgressBar from '../components/ProgressBar.jsx'
import Button from '../components/Button.jsx'

export default function AssessmentQuestions() {
  const navigate = useNavigate()
  const { answers, setAnswer, skippedOptional, setSkippedOptional, intakeComplete } = useAssessment()
  const [domainIndex, setDomainIndex] = useState(0)

  useEffect(() => {
    if (!intakeComplete) {
      navigate('/assessment', { replace: true })
    }
  }, [intakeComplete, navigate])

  if (!intakeComplete) return null

  const domain = DOMAINS[domainIndex]
  const isLastDomain = domainIndex === DOMAINS.length - 1
  const isFirstDomain = domainIndex === 0

  const totalAnswered = DOMAINS.reduce((sum, d) => {
    if (d.optional && skippedOptional) return sum
    return sum + countAnsweredInDomain(d, answers)
  }, 0)
  const totalQuestions = DOMAINS.reduce((sum, d) => {
    if (d.optional && skippedOptional) return sum
    return sum + d.questions.length
  }, 0)

  const answeredInDomain = countAnsweredInDomain(domain, answers)
  const unansweredInDomain = domain.questions.length - answeredInDomain

  function goNext() {
    if (isLastDomain) {
      navigate('/results')
      return
    }
    setDomainIndex((i) => i + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function goBack() {
    if (isFirstDomain) {
      navigate('/assessment')
      return
    }
    setDomainIndex((i) => i - 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleSkipOptional() {
    setSkippedOptional(true)
    navigate('/results')
  }

  return (
    <div className="page assessment-page">
      <p className="step-indicator">Domain {domainIndex + 1} of {DOMAINS.length}: {domain.title}</p>
      <ProgressBar value={totalAnswered} max={totalQuestions} label="Overall progress" />

      <h1>
        {domain.title}
        {domain.optional && <span className="badge">Optional</span>}
      </h1>
      <p className="page-lede">{domain.summary}</p>

      {domain.optional && (
        <div className="callout">
          <p>This domain is optional. You can skip it and still get a complete score for the other five domains.</p>
          <Button variant="secondary" onClick={handleSkipOptional}>Skip this section</Button>
        </div>
      )}

      <div className="question-list">
        {domain.questions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
            value={answers[question.id]}
            onAnswer={setAnswer}
          />
        ))}
      </div>

      {unansweredInDomain > 0 && (
        <p className="helper-text">{unansweredInDomain} question{unansweredInDomain === 1 ? '' : 's'} left unanswered in this domain — you can still continue.</p>
      )}

      <div className="assessment-nav">
        <Button variant="secondary" onClick={goBack}>Back</Button>
        <Button to="/" variant="ghost">Save &amp; exit</Button>
        <Button variant="primary" onClick={goNext}>
          {isLastDomain ? 'View results' : 'Next'}
        </Button>
      </div>
    </div>
  )
}
