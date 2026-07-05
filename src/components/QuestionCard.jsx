import { useState } from 'react'

export default function QuestionCard({ question, value, onAnswer }) {
  const [justSaved, setJustSaved] = useState(false)

  function handleSelect(score) {
    onAnswer(question.id, score)
    setJustSaved(true)
    window.clearTimeout(handleSelect._t)
    handleSelect._t = window.setTimeout(() => setJustSaved(false), 1500)
  }

  return (
    <fieldset className="question-card">
      <legend className="question-text">{question.text}</legend>
      <div className="question-options" role="radiogroup">
        {question.levels.map((level) => {
          const selected = value === level.score
          return (
            <label
              key={level.score}
              className={selected ? 'option-card selected' : 'option-card'}
            >
              <input
                type="radio"
                name={question.id}
                value={level.score}
                checked={selected}
                onChange={() => handleSelect(level.score)}
              />
              <span className="option-label">{level.label}</span>
              <span className="option-description">{level.description}</span>
              <details className="option-more">
                <summary>Why it matters</summary>
                <p>{level.note}</p>
                {level.example && <p className="option-example">Example: {level.example}</p>}
              </details>
            </label>
          )
        })}
      </div>
      <p className="save-flash" aria-live="polite">{justSaved ? 'Saved' : ' '}</p>
    </fieldset>
  )
}
