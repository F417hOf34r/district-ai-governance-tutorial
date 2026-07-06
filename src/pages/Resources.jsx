import NextSection from '../components/NextSection.jsx'

const LEARN_MORE = [
  {
    group: 'Cybersecurity Frameworks',
    links: [
      { label: 'NIST Cybersecurity Framework (CSF) 2.0', url: 'https://doi.org/10.6028/NIST.CSWP.29', description: 'The six-function framework this site\'s Operating Model and assessment are aligned to.' },
      { label: 'CIS Critical Security Controls', url: 'https://www.cisecurity.org/', description: 'Prioritized, concrete technical safeguards, with Implementation Group 1 as a realistic starting point for small districts.' },
      { label: 'CISA', url: 'https://www.cisa.gov/', description: 'Free federal assessments, advisories, and grant guidance for under-resourced school districts.' },
    ],
  },
  {
    group: 'AI Governance',
    links: [
      { label: 'CoSN Generative AI Maturity Tool', url: 'https://www.cosn.org/ai/', description: 'A staged maturity model built specifically for K-12 AI adoption.' },
      { label: 'Georgia Department of Education AI Guidance', url: 'https://www.gadoe.org/', description: 'One of the earliest and most widely referenced state traffic light frameworks.' },
      { label: 'State AI guidance tracker (Ballotpedia)', url: 'https://ballotpedia.org/AI_guidance_issued_by_state_departments_of_education', description: 'A running tracker of every state department of education\'s published AI guidance.' },
    ],
  },
  {
    group: 'K-12 Threat Landscape',
    links: [
      { label: 'Rethinking K-12 cyber strategies amid federal budget cuts', url: 'https://www.eschoolnews.com/it-leadership/2025/07/21/rethinking-k-12-cyber-strategies-amid-federal-budget-cuts/', description: 'How districts are adapting cybersecurity strategy as federal support shrinks.' },
      { label: 'Top cyber security challenges facing K-12 schools', url: 'https://www.securus360.com/blog/top-cyber-security-challenges-facing-k12-schools', description: 'A rundown of staffing, budget, and legacy-system challenges common across districts.' },
      { label: 'Why Michigan school districts are prime targets for cyberattacks', url: 'https://www.yeoandyeo.com/resource/why-michigan-school-districts-are-prime-targets-for-cyberattacks', description: 'A concrete look at the budget and staffing gap that makes districts attractive targets.' },
    ],
  },
]

const REFERENCES = [
  { text: 'Agile Education Marketing. (2025). K-12 school district AI policy.', url: 'https://agile-ed.com/resources/k12-school-district-ai-policy-2025/' },
  { text: 'Ballotpedia. (2025). AI guidance issued by state departments of education.', url: 'https://ballotpedia.org/AI_guidance_issued_by_state_departments_of_education' },
  { text: 'Consortium for School Networking. (2025). Artificial intelligence in K-12 education.', url: 'https://www.cosn.org/ai/' },
  { text: 'Crawford. (2025). Rethinking K-12 cyber strategies amid federal budget cuts. eSchool News.', url: 'https://www.eschoolnews.com/it-leadership/2025/07/21/rethinking-k-12-cyber-strategies-amid-federal-budget-cuts/' },
  { text: 'Klein. (2026). How school districts are crafting AI policy on the fly. Education Week.', url: 'https://www.edweek.org/technology/how-school-districts-are-crafting-ai-policy-on-the-fly/2025/10' },
  { text: 'National Institute of Standards and Technology. (2024). The NIST Cybersecurity Framework (CSF) 2.0 (NIST CSWP 29).', url: 'https://doi.org/10.6028/NIST.CSWP.29' },
  { text: 'SchoolAI. (2025). AI in school districts: A roadmap for successful integration.', url: 'https://schoolai.com/blog/ai-in-school-districts-a-roadmap-for-successful-integration' },
  { text: 'Securus360. (n.d.). Top cyber security challenges facing K-12 schools.', url: 'https://www.securus360.com/blog/top-cyber-security-challenges-facing-k12-schools' },
  { text: 'Stone. (2024). How district leaders can improve cybersecurity. DATIA K12.', url: 'https://www.datiak12.io/technology/cybersecurity/article/15684567/how-district-leaders-can-improve-cybersecurity' },
  { text: 'Stone. (2025). Putting K-12 AI policies into practice. EdTech Magazine.', url: 'https://edtechmagazine.com/k12/article/2025/07/putting-k-12-ai-policies-practice' },
  { text: 'Yeo and Yeo Technology. (2026). Why Michigan school districts are prime targets for cyberattacks.', url: 'https://www.yeoandyeo.com/resource/why-michigan-school-districts-are-prime-targets-for-cyberattacks' },
]

export default function Resources() {
  return (
    <div className="page">
      <h1>Resources & References</h1>
      <p className="page-lede">
        Everything on this site draws from public, authoritative sources. This page collects
        them in one place: curated further reading, and the full reference list behind the
        content.
      </p>

      <section className="section">
        <h2>Learn more</h2>
        {LEARN_MORE.map((group) => (
          <div key={group.group} className="section">
            <h3>{group.group}</h3>
            <ul className="source-list">
              {group.links.map((link) => (
                <li key={link.url}>
                  <a href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
                  {': '}{link.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>References</h2>
        <ul className="reference-list">
          {REFERENCES.map((ref) => (
            <li key={ref.url}>
              {ref.text}{' '}
              <a href={ref.url} target="_blank" rel="noreferrer">{ref.url}</a>
            </li>
          ))}
        </ul>
      </section>

      <NextSection currentId="resources" />
    </div>
  )
}
