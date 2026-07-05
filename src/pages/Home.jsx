import { DOMAINS, TOTAL_QUESTION_COUNT } from '../data/rubric.js'
import { MAX_SCORE } from '../lib/scoring.js'
import Button from '../components/Button.jsx'
import heroImage from '../assets/hero-k12.jpg'

const AUDIENCES = [
  {
    tag: 'Superintendents & cabinet',
    title: 'District Leadership',
    description: 'A clear, board-ready picture of where AI governance stands today and what to prioritize next.',
  },
  {
    tag: 'Technology & IT leaders',
    title: 'Technology Directors',
    description: 'A structured way to inventory tools, vendor agreements, and security practices already in place.',
  },
  {
    tag: 'Elected & appointed members',
    title: 'School Board Members',
    description: 'A plain-language way to understand the district’s AI posture before it comes up in a meeting.',
  },
  {
    tag: 'Curriculum & instruction',
    title: 'Curriculum Leaders',
    description: 'A domain-by-domain view of staff readiness, student awareness, and policy gaps to close.',
  },
]

const PROCESS_STEPS = [
  { num: '01', title: 'Tell us about your district', description: 'A one-minute intake so your results and report are grounded in your context.' },
  { num: '02', title: 'Explore the tutorial', description: 'Six governance domains, explained plainly, with authoritative sources for each.' },
  { num: '03', title: `Answer ${TOTAL_QUESTION_COUNT} questions`, description: 'One domain at a time, with the option to save and come back later.' },
  { num: '04', title: 'Get your scored report', description: 'A domain-by-domain breakdown you can print or download to share with your team.' },
]

export default function Home() {
  return (
    <div className="home-page">
      <section
        className="hero-image hero-home"
        style={{ '--hero-image': `url(${heroImage})` }}
      >
        <div className="container">
          <div className="hero-image-content">
            <span className="eyebrow eyebrow-gold">AI Policy &middot; Data Privacy &middot; Staff Readiness</span>
            <h1>Responsible AI governance, built for K-12 districts.</h1>
            <p className="hero-sub">
              A practical tutorial and self-assessment covering six governance domains —
              from board policy to classroom-level data privacy — so your district knows
              where it stands and what to do next.
            </p>
            <div className="hero-image-actions">
              <Button to="/assessment" variant="primary">Take the self-assessment</Button>
              <Button to="/tutorial" variant="ghost" className="hero-secondary-link">Explore the tutorial &rarr;</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities-home">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Six Domains</span>
            <h2>What this assessment covers</h2>
            <p>A complete picture of AI governance maturity, broken into six focused domains.</p>
          </div>
          <div className="cap-grid">
            {DOMAINS.map((domain) => (
              <a key={domain.id} href={`/tutorial/${domain.id}`} className="cap-card">
                <h3>
                  {domain.title}
                  {domain.optional && <span className="badge">Optional</span>}
                </h3>
                <p>{domain.tagline}</p>
                <span className="cap-card-link">
                  Learn more
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="audiences">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Who It's For</span>
            <h2>Built for Every Seat at the Table</h2>
            <p>Everyone involved in district AI decisions gets something different out of this assessment.</p>
          </div>
          <div className="audience-grid">
            {AUDIENCES.map((a) => (
              <div key={a.title} className="audience">
                <span className="audience-tag">{a.tag}</span>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="engagement">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow-gold">Process</span>
            <h2>How It Works</h2>
            <p>A structured path from intake to a report you can act on.</p>
          </div>
          <div className="engagement-steps">
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className="engagement-step">
                <span className="engagement-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Ready to check where your district stands?</h2>
          <p>
            {TOTAL_QUESTION_COUNT} questions, scored to {MAX_SCORE} points, about 10–15
            minutes — nothing you enter leaves your browser.
          </p>
          <Button to="/assessment" variant="primary">Take the self-assessment</Button>
        </div>
      </section>
    </div>
  )
}
