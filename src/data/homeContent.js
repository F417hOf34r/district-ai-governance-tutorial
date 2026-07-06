export const STATS = [
  {
    num: '62M+',
    label: 'Student records exposed in the December 2024 PowerSchool breach',
    note: 'One of the largest K-12 student-data incidents on record, tied to a single vendor credential.',
  },
  {
    num: '96%',
    label: 'Of apps commonly used in schools share student data with third parties',
    note: 'Based on ed-tech privacy research auditing classroom app data practices.',
  },
  {
    num: '$2.83M',
    label: 'Average cost for a local government or school entity to recover from one ransomware attack',
    note: 'Figures drawn from public-sector ransomware recovery surveys.',
  },
]

export const TIMELINE = [
  {
    date: 'Jan 2025',
    title: 'GaDOE publishes statewide AI guidance',
    description: 'Georgia becomes one of the first states to issue a formal K-12 AI framework, including a "traffic light" system for classifying AI use.',
  },
  {
    date: 'Apr 2025',
    title: 'White House executive order on AI in education',
    description: 'Sets an expectation for federal agencies to issue AI-in-education implementation guidance within 180 days.',
  },
  {
    date: '2031',
    title: 'Georgia HB 487 graduation requirement',
    description: 'State legislation moves AI literacy toward a formal requirement for high school graduation.',
  },
]

export const DEVELOPMENTS = [
  {
    title: 'GaDOE Publishes Statewide AI Guidance',
    date: 'January 2025',
    description: 'Georgia becomes one of the first states to issue a formal K-12 AI framework, including a "traffic light" system classifying prohibited, cautious, and encouraged AI uses.',
    source: { label: 'Georgia Department of Education', url: 'https://www.gadoe.org/' },
  },
  {
    title: 'PowerSchool Breach Exposes Tens of Millions of Student Records',
    date: 'December 2024',
    description: 'One of the largest K-12 student-data breaches on record puts vendor data-processing agreements and breach-response planning back on every superintendent\'s desk.',
    source: { label: 'Student Privacy Policy Office', url: 'https://studentprivacy.ed.gov/' },
  },
  {
    title: 'White House Executive Order on AI in Education',
    date: 'April 2025',
    description: 'Sets a 180-day expectation for federal agencies to issue implementation guidance on AI use in K-12 classrooms.',
    source: { label: 'NIST AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
  },
  {
    title: 'CISA Expands K-12 Cybersecurity Resources',
    date: 'Ongoing',
    description: 'Free assessments, advisories, and grant guidance specifically aimed at under-resourced school districts.',
    source: { label: 'CISA', url: 'https://www.cisa.gov/' },
  },
]

export const GLOSSARY = [
  { term: 'FERPA', definition: 'The federal law protecting student education records.', domainId: 'data-privacy' },
  { term: 'COPPA', definition: 'Requires verifiable parental consent before collecting data from kids under 13.', domainId: 'data-privacy' },
  { term: 'IDEA', definition: 'Governs special-education services and restricts AI in IEP decisions.', domainId: 'data-privacy' },
  { term: 'Traffic light framework', definition: 'GaDOE\'s system for classifying AI use as prohibited, cautious, or encouraged.', domainId: 'policy-governance' },
]

export const MYTHS = [
  {
    myth: '"We\'re too small to be a target."',
    reality: 'Smaller and rural districts are frequently targeted precisely because they tend to be under-resourced, not overlooked.',
  },
  {
    myth: '"This is just an IT problem."',
    reality: 'AI governance touches policy, curriculum, legal compliance, and the classroom. IT can\'t own it alone.',
  },
  {
    myth: '"We don\'t have budget for this."',
    reality: 'Much of this work is fundable through existing federal streams (Title II-A, IV-A, V-B Rural) without adding new positions.',
  },
]
