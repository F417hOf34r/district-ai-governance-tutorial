// Ordered list of every leaf content page, used by NextSection to find "what comes next"
// in tutorial order. Hub/index pages (Frameworks index, Tutorial index) are intentionally
// left out: they already present their own grid of forward links.

export const SITE_FLOW = [
  { id: 'problem', path: '/problem', label: 'The Two-Front Problem' },
  { id: 'nist-csf', path: '/frameworks/nist-csf', label: 'NIST Cybersecurity Framework 2.0' },
  { id: 'cis-k12', path: '/frameworks/cis-k12', label: 'CIS Critical Security Controls' },
  { id: 'cosn-genai', path: '/frameworks/cosn-genai', label: 'CoSN Generative AI Maturity Tool' },
  { id: 'state-guidance', path: '/frameworks/state-guidance', label: 'State DOE AI Guidance' },
  { id: 'operating-model', path: '/operating-model', label: 'The Operating Model' },
  { id: 'policy-governance', path: '/tutorial/policy-governance', label: 'Policy & Governance' },
  { id: 'data-privacy', path: '/tutorial/data-privacy', label: 'Data Privacy & Legal Compliance' },
  { id: 'vendor-tools', path: '/tutorial/vendor-tools', label: 'AI Tool Inventory & Vendor Vetting' },
  { id: 'staff-readiness', path: '/tutorial/staff-readiness', label: 'Staff Readiness & Professional Development' },
  { id: 'student-parent-awareness', path: '/tutorial/student-parent-awareness', label: 'Student & Parent Awareness' },
  { id: 'infrastructure-security', path: '/tutorial/infrastructure-security', label: 'Infrastructure & Cybersecurity' },
  { id: 'assessment', path: '/assessment', label: 'The Self-Assessment' },
  { id: 'best-practices', path: '/best-practices', label: 'Best Practices Portal' },
  { id: 'resources', path: '/resources', label: 'Resources & References' },
  { id: 'about', path: '/about', label: 'About This Project' },
]

export function getNextInFlow(currentId) {
  const index = SITE_FLOW.findIndex((item) => item.id === currentId)
  if (index === -1 || index === SITE_FLOW.length - 1) return null
  return SITE_FLOW[index + 1]
}
