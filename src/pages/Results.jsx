import { useState } from 'react'
import { useAssessment } from '../context/AssessmentContext.jsx'
import { scoreAnswers, getMaturityTier } from '../lib/scoring.js'
import { findStateGuidance, stateGuidanceRecommendation, stateGuidanceMeta } from '../lib/stateGuidance.js'
import { downloadPdf } from '../lib/pdf/download.js'
import GapAssessmentReport from '../lib/pdf/GapAssessmentReport.jsx'
import PolicyOutline from '../lib/pdf/PolicyOutline.jsx'
import RiskRegister from '../lib/pdf/RiskRegister.jsx'
import BoardCadence from '../lib/pdf/BoardCadence.jsx'
import Button from '../components/Button.jsx'
import NextSection from '../components/NextSection.jsx'

export default function Results() {
  const { answers, skippedOptional, intake, resetAnswers, hasAnyAnswers } = useAssessment()
  const [confirmingReset, setConfirmingReset] = useState(false)
  const [downloading, setDownloading] = useState('')

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
  const namePart = intake.districtName ? intake.districtName.replace(/[^a-z0-9]+/gi, '-').toLowerCase() : 'district'
  const stateGuidance = findStateGuidance(intake.state)
  const docProps = { intake, result, tier, answers, skippedOptional }

  function handleReset() {
    if (!confirmingReset) {
      setConfirmingReset(true)
      return
    }
    resetAnswers()
    setConfirmingReset(false)
  }

  async function handleDownload(kind, element, filename) {
    setDownloading(kind)
    try {
      await downloadPdf(element, filename)
    } finally {
      setDownloading('')
    }
  }

  const DOWNLOADS = [
    {
      kind: 'gap-report',
      label: 'Gap Assessment Report',
      filename: `gap-assessment-report-${namePart}.pdf`,
      element: <GapAssessmentReport {...docProps} />,
    },
    {
      kind: 'policy-outline',
      label: 'AI Acceptable-Use Policy Outline',
      filename: `ai-policy-outline-${namePart}.pdf`,
      element: <PolicyOutline {...docProps} />,
    },
    {
      kind: 'risk-register',
      label: 'Risk Register Template',
      filename: `risk-register-${namePart}.pdf`,
      element: <RiskRegister {...docProps} />,
    },
    {
      kind: 'board-cadence',
      label: 'Board Reporting Cadence',
      filename: `board-reporting-cadence-${namePart}.pdf`,
      element: <BoardCadence {...docProps} />,
    },
  ]

  return (
    <div className="page results-page">
      <h1>Your results</h1>

      {(intake.districtName || intake.role || intake.state) && (
        <section className="district-snapshot">
          {intake.districtName && <p><strong>{intake.districtName}</strong></p>}
          <p className="score-note">
            {[intake.state, intake.role, intake.enrollment, intake.schoolCount].filter(Boolean).join(' · ')}
          </p>
        </section>
      )}

      {stateGuidance && (
        <section className="state-callout">
          <h2>Your state's guidance</h2>
          <p>
            <strong>{stateGuidance.state}</strong>
            <span className="badge">{stateGuidance.status}</span>
          </p>
          {stateGuidanceMeta(stateGuidance) && (
            <p className="helper-text">{stateGuidanceMeta(stateGuidance)}</p>
          )}
          <p>{stateGuidance.summary}</p>
          <p>{stateGuidanceRecommendation(stateGuidance)}</p>
          <p className="helper-text">
            Last reviewed {stateGuidance.lastReviewed}. See the{' '}
            <a href="/best-practices">Best Practices portal</a> for how other states have approached this.
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
          {skippedOptional && ' (Infrastructure and Cybersecurity was skipped and is excluded from this score)'}.
        </p>
      </section>

      <section className="section">
        <h2>By domain</h2>
        <div className="table-scroll">
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
                    {d.skipped ? 'Skipped' : (
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
        </div>
      </section>

      <section className="section no-print">
        <h2>Download your reports</h2>
        <p className="helper-text">
          Each report is generated in your browser as a PDF. Nothing is uploaded or transmitted.
        </p>
        <div className="results-actions">
          {DOWNLOADS.map((doc) => (
            <Button
              key={doc.kind}
              variant="primary"
              disabled={downloading !== ''}
              onClick={() => handleDownload(doc.kind, doc.element, doc.filename)}
            >
              {downloading === doc.kind ? 'Preparing…' : doc.label}
            </Button>
          ))}
        </div>
      </section>

      <div className="results-actions no-print">
        <Button variant="secondary" onClick={() => window.print()}>Print this page</Button>
        <Button variant="ghost" onClick={handleReset}>
          {confirmingReset ? 'Click again to confirm, this clears all answers' : 'Retake assessment'}
        </Button>
      </div>

      <NextSection currentId="assessment" />
    </div>
  )
}
