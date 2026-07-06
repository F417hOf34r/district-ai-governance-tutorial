export default function About() {
  return (
    <div className="page">
      <h1>About this project</h1>
      <p>
        This site was developed as a capstone project for ISSC698 (Managerial Cybersecurity
        Website Tutorial). It presents a self-assessment framework for K-12 district AI
        governance, organized around six domains: Policy &amp; Governance, Data Privacy &amp;
        Legal Compliance, AI Tool Inventory &amp; Vendor Vetting, Staff Readiness &amp;
        Professional Development, Student &amp; Parent Awareness, and Infrastructure &amp;
        Cybersecurity.
      </p>
      <p>
        The content is informed by the Georgia Department of Education's AI guidance for schools
        and federal K-12 privacy and disability law (FERPA, COPPA, IDEA, and PPRA), along with
        general cybersecurity best practice from CISA and the NIST AI Risk Management Framework.
        It is not affiliated with any specific school district, vendor, or consulting
        organization.
      </p>
      <p>
        The self-assessment runs entirely in your browser. Answers are stored only in your
        browser's local storage. Nothing is transmitted to a server, and nothing is collected by
        this site.
      </p>
      <h2>Sources referenced throughout this site</h2>
      <ul className="source-list">
        <li><a href="https://www.gadoe.org/" target="_blank" rel="noreferrer">Georgia Department of Education</a></li>
        <li><a href="https://studentprivacy.ed.gov/" target="_blank" rel="noreferrer">Student Privacy Policy Office (FERPA &amp; PPRA)</a></li>
        <li><a href="https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy" target="_blank" rel="noreferrer">FTC: Children's Online Privacy Protection Act (COPPA)</a></li>
        <li><a href="https://sites.ed.gov/idea/" target="_blank" rel="noreferrer">U.S. Dept. of Education: IDEA</a></li>
        <li><a href="https://www.cisa.gov/" target="_blank" rel="noreferrer">CISA: Cybersecurity &amp; Infrastructure Security Agency</a></li>
        <li><a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noreferrer">NIST AI Risk Management Framework</a></li>
      </ul>
    </div>
  )
}
