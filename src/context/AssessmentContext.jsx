import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { EMPTY_INTAKE } from '../data/intake.js'

const STORAGE_KEY = 'district-ai-governance-tutorial:v2'

const AssessmentContext = createContext(null)

function loadFromStorage() {
  const fallback = { answers: {}, skippedOptional: false, intake: EMPTY_INTAKE, intakeComplete: false }
  if (typeof window === 'undefined') return fallback
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return fallback
    const parsed = JSON.parse(raw)
    return {
      answers: parsed.answers ?? {},
      skippedOptional: Boolean(parsed.skippedOptional),
      intake: { ...EMPTY_INTAKE, ...(parsed.intake ?? {}) },
      intakeComplete: Boolean(parsed.intakeComplete),
    }
  } catch {
    return fallback
  }
}

export function AssessmentProvider({ children }) {
  const initial = loadFromStorage()
  const [answers, setAnswers] = useState(initial.answers)
  const [skippedOptional, setSkippedOptional] = useState(initial.skippedOptional)
  const [intake, setIntakeState] = useState(initial.intake)
  const [intakeComplete, setIntakeComplete] = useState(initial.intakeComplete)
  const [lastSavedAt, setLastSavedAt] = useState(null)

  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ answers, skippedOptional, intake, intakeComplete }),
      )
      setLastSavedAt(Date.now())
    } catch {
      // localStorage unavailable (private browsing, quota) — assessment still works in-memory
    }
  }, [answers, skippedOptional, intake, intakeComplete])

  const setAnswer = useCallback((questionId, score) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }))
  }, [])

  const setIntakeField = useCallback((field, value) => {
    setIntakeState((prev) => ({ ...prev, [field]: value }))
  }, [])

  const toggleGoal = useCallback((goal) => {
    setIntakeState((prev) => {
      const goals = prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal]
      return { ...prev, goals }
    })
  }, [])

  const completeIntake = useCallback(() => {
    setIntakeComplete(true)
  }, [])

  const resetAnswers = useCallback(() => {
    setAnswers({})
    setSkippedOptional(false)
    setIntakeState(EMPTY_INTAKE)
    setIntakeComplete(false)
  }, [])

  const hasAnyAnswers = useMemo(() => Object.keys(answers).length > 0, [answers])

  const value = useMemo(
    () => ({
      answers,
      setAnswer,
      skippedOptional,
      setSkippedOptional,
      intake,
      setIntakeField,
      toggleGoal,
      intakeComplete,
      completeIntake,
      resetAnswers,
      hasAnyAnswers,
      lastSavedAt,
    }),
    [
      answers,
      setAnswer,
      skippedOptional,
      intake,
      setIntakeField,
      toggleGoal,
      intakeComplete,
      completeIntake,
      resetAnswers,
      hasAnyAnswers,
      lastSavedAt,
    ],
  )

  return <AssessmentContext.Provider value={value}>{children}</AssessmentContext.Provider>
}

export function useAssessment() {
  const ctx = useContext(AssessmentContext)
  if (!ctx) throw new Error('useAssessment must be used within an AssessmentProvider')
  return ctx
}
