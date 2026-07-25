export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p>
          Developed as a capstone project for ISSC698, informed by published state department of
          education AI guidance and federal K-12 privacy law (FERPA, COPPA, IDEA). Not affiliated
          with any school district or vendor.
        </p>
        <nav aria-label="Footer">
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/problem">The Problem</a></li>
            <li><a href="/frameworks">Frameworks</a></li>
            <li><a href="/operating-model">Operating Model</a></li>
            <li><a href="/tutorial">Tutorial</a></li>
            <li><a href="/assessment">Assessment</a></li>
            <li><a href="/best-practices">Best Practices</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
