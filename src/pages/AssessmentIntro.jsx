import { useNavigate } from 'react-router-dom'
import { useAssessment } from '../context/AssessmentContext.jsx'
import { ROLE_OPTIONS, ENROLLMENT_OPTIONS, SCHOOL_COUNT_OPTIONS, GOAL_OPTIONS } from '../data/intake.js'
import { TOTAL_QUESTION_COUNT } from '../data/rubric.js'
import Button from '../components/Button.jsx'

export default function AssessmentIntro() {
  const navigate = useNavigate()
  const { intake, setIntakeField, toggleGoal, completeIntake } = useAssessment()

  function handleSubmit(e) {
    e.preventDefault()
    completeIntake()
    navigate('/assessment/questions')
  }

  return (
    <div className="page">
      <h1>Before you begin</h1>
      <p className="page-lede">
        This self-assessment walks through {TOTAL_QUESTION_COUNT} questions across six AI
        governance domains and gives you a scored, downloadable snapshot of where your district
        stands today.
      </p>

      <section className="section intro-steps">
        <h2>How it works</h2>
        <ol>
          <li>Tell us a little about your district and what you're hoping to get out of this (below) — takes under a minute.</li>
          <li>Answer {TOTAL_QUESTION_COUNT} questions, one governance domain at a time — about 10–15 minutes. You can go back, save and exit, and pick up where you left off.</li>
          <li>Get a scored report broken down by domain, which you can print or download to share with your team.</li>
        </ol>
        <p className="helper-text">
          Nothing you enter is sent anywhere — everything stays in your own browser. The
          questions below just help make your final report more useful to you.
        </p>
      </section>

      <form className="intake-form section" onSubmit={handleSubmit}>
        <h2>About you and your district</h2>

        <div className="form-field">
          <label htmlFor="districtName">District name <span className="optional-tag">(optional)</span></label>
          <input
            id="districtName"
            type="text"
            value={intake.districtName}
            onChange={(e) => setIntakeField('districtName', e.target.value)}
            placeholder="e.g., Riverbend County Schools"
          />
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="role">Your role</label>
            <select
              id="role"
              value={intake.role}
              onChange={(e) => setIntakeField('role', e.target.value)}
              required
            >
              <option value="" disabled>Select one&hellip;</option>
              {ROLE_OPTIONS.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="enrollment">District enrollment</label>
            <select
              id="enrollment"
              value={intake.enrollment}
              onChange={(e) => setIntakeField('enrollment', e.target.value)}
              required
            >
              <option value="" disabled>Select one&hellip;</option>
              {ENROLLMENT_OPTIONS.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="schoolCount">Number of schools</label>
            <select
              id="schoolCount"
              value={intake.schoolCount}
              onChange={(e) => setIntakeField('schoolCount', e.target.value)}
              required
            >
              <option value="" disabled>Select one&hellip;</option>
              {SCHOOL_COUNT_OPTIONS.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
        </div>

        <div className="form-field">
          <label>What are you hoping to accomplish with this assessment?</label>
          <div className="checkbox-group">
            {GOAL_OPTIONS.map((goal) => (
              <label key={goal} className="checkbox-option">
                <input
                  type="checkbox"
                  checked={intake.goals.includes(goal)}
                  onChange={() => toggleGoal(goal)}
                />
                {goal}
              </label>
            ))}
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="notes">Anything else that would help make sense of your results? <span className="optional-tag">(optional)</span></label>
          <textarea
            id="notes"
            rows={3}
            value={intake.notes}
            onChange={(e) => setIntakeField('notes', e.target.value)}
            placeholder="e.g., specific concerns, a recent incident, an upcoming board meeting..."
          />
        </div>

        <Button as="button" type="submit" variant="primary">Begin assessment &rarr;</Button>
      </form>
    </div>
  )
}
