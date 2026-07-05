export const ROLE_OPTIONS = [
  'Superintendent',
  'Assistant Superintendent / Cabinet',
  'Technology / IT Director',
  'Curriculum & Instruction Director',
  'Principal / Assistant Principal',
  'School Board Member',
  'Teacher',
  'Other',
]

export const ENROLLMENT_OPTIONS = [
  'Under 1,000 students',
  '1,000–4,999 students',
  '5,000–14,999 students',
  '15,000+ students',
  'Not sure',
]

export const SCHOOL_COUNT_OPTIONS = [
  '1–3 schools',
  '4–9 schools',
  '10–24 schools',
  '25+ schools',
  'Not sure',
]

export const GOAL_OPTIONS = [
  'Understand where we currently stand',
  'Prepare for a school board presentation or briefing',
  'Build a roadmap for policy development',
  'Support a grant or funding application',
  'Benchmark progress against a prior assessment',
  'Other',
]

export const EMPTY_INTAKE = {
  role: '',
  districtName: '',
  enrollment: '',
  schoolCount: '',
  goals: [],
  notes: '',
}
