import { useState } from 'react'
import { useAssessment } from '../context/AssessmentContext.jsx'
import { scoreAnswers, getMaturityTier } from '../lib/scoring.js'
import { buildReportText, downloadReport } from '../lib/report.js'
import Button from '../components/Button.jsx'

export default function Results() {
  const { answers, skippedOptional, intake, resetAnswers, hasAnyAnswers } = useAssessment()
  const [confirmingReset, setConfirmingReset] = useState(false)

  if (!hasAnyAnswers) {
    return (
      <div className="page">
        <h1>Results</h1>
        <p>You haven't completed the assessment yet.</p>
        <Button to="/assessment" variant="primary">Start the assessment &rarr;</Button>
      </div>
    )
  }

  const result = scoreAnswers(answers, skippedOptional)
  const tier = getMaturityTier(result.percent)

  function handleReset() {
    if (!confirmingReset) {
      setConfirmingReset(true)
      return
    }
    resetAnswers()
    setConfirmingReset(false)
  }

  function handleDownload() {
    const text = buildReportText({ intake, result, tier, answers, skippedOptional })
    const namePart = intake.districtName ? intake.districtName.replace(/[^a-z0-9]+/gi, '-').toLowerCase() : 'district'
    downloadReport(text, `ai-governance-assessment-${namePart}.txt`)
  }

  return (
    <div className="page results-page">
      <h1>Your results</h1>

      {(intake.districtName || intake.role) && (
        <section className="district-snapshot">
          {intake.districtName && <p><strong>{intake.districtName}</strong></p>}
          <p className="score-note">
            {[intake.role, intake.enrollment, intake.schoolCount].filter(Boolean).join(' · ')}
          </p>
        </section>
      )}

      <section className="score-summary">
        <div className="score-total">
          <span className="score-number">{result.totalEarned}</span>
          <span className="score-max"> / {result.totalMax}</span>
        </div>
        <p className="score-tier">{tier.label}</p>
        <p>{tier.description}</p>
        <p className="score-note">
          {result.totalAnswered} of {result.totalQuestions} questions answered
          {skippedOptional && ' — Infrastructure & Cybersecurity was skipped and is excluded from this score'}.
        </p>
      </section>

      <section className="section">
        <h2>By domain</h2>
        <table className="domain-table">
          <thead>
            <tr>
              <th scope="col">Domain</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {result.byDomain.map((d) => (
              <tr key={d.id}>
                <th scope="row">
                  {d.title}
                  {d.skipped && ' (skipped)'}
                </th>
                <td>
                  {d.skipped ? '—' : (
                    <>
                      <span className="domain-score-value">{d.earnedPoints} / {d.maxPoints}</span>
                      <span className="domain-score-bar" aria-hidden="true">
                        <span
                          className="domain-score-fill"
                          style={{ width: `${d.maxPoints === 0 ? 0 : (d.earnedPoints / d.maxPoints) * 100}%` }}
                        />
                      </span>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="results-actions no-print">
        <Button variant="primary" onClick={handleDownload}>Download report</Button>
        <Button variant="secondary" onClick={() => window.print()}>Print this page</Button>
        <Button variant="ghost" onClick={handleReset}>
          {confirmingReset ? 'Click again to confirm — this clears all answers' : 'Retake assessment'}
        </Button>
      </div>
    </div>
  )
}
