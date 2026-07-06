// Framework Library content: four mature, license-free public frameworks a district can
// apply without hiring a consultant, once someone shows them how the pieces fit together.

export const FRAMEWORKS = [
  {
    id: 'nist-csf',
    order: 1,
    title: 'NIST Cybersecurity Framework 2.0',
    shortName: 'NIST CSF 2.0',
    tagline: 'A common vocabulary for organizing every cybersecurity activity a district already does, or should.',
    whatItIs:
      'The NIST Cybersecurity Framework (CSF) 2.0 is a voluntary, free framework published by the National Institute of Standards and Technology. It organizes cybersecurity work into six functions: Govern, Identify, Protect, Detect, Respond, and Recover. Version 2.0, released in 2024, added Govern as a standalone function, making leadership accountability and risk decision-making an explicit, first-class part of the framework rather than an afterthought.',
    whyUseful:
      'Districts rarely lack cybersecurity activity entirely. What they lack is a shared vocabulary connecting the patch management IT already does, the policy the board already adopted, and the incident response plan sitting in a drawer. CSF 2.0 gives a superintendent, an IT director, and a school board member the same six words to describe the same work, which matters when budget requests, audits, or a breach all require everyone to be talking about the same thing.',
    howToApply:
      'A small district without dedicated cybersecurity staff does not need to implement every CSF outcome at once. Start with Govern: name one person accountable for cybersecurity decisions, even if it is the same person who already handles IT. Then walk the other five functions in order, asking one question per function: what do we have (Identify), how do we protect it (Protect), how would we know if something went wrong (Detect), what do we do when it does (Respond), and how do we get back to normal (Recover). The assessment on this site is organized so that answering it produces a rough first-pass CSF profile without requiring a consultant to build one from scratch.',
    whereItFits:
      'CSF 2.0 is the umbrella framework in this library. Identify and Protect map closely to CIS Controls implementation work; Govern maps to the policy and board-reporting practices covered in the Operating Model page; and the AI-specific questions in this assessment sit inside CSF\'s Identify and Govern functions as a specialized subset.',
    mapsToOthers:
      'Where CIS Controls tell you exactly which technical control to implement, CSF tells you which of six categories that control belongs to and why leadership should care about it. Use CSF for the board-level conversation and CIS Controls for the implementation checklist.',
    source: { label: 'NIST Cybersecurity Framework (CSF) 2.0', url: 'https://doi.org/10.6028/NIST.CSWP.29' },
  },
  {
    id: 'cis-k12',
    order: 2,
    title: 'CIS Critical Security Controls',
    shortName: 'CIS Controls',
    tagline: 'A prioritized, concrete checklist that turns "improve cybersecurity" into a specific to-do list.',
    whatItIs:
      'The CIS Critical Security Controls, maintained by the Center for Internet Security, are a prioritized set of specific technical and administrative safeguards, grouped into three Implementation Groups (IG1, IG2, IG3) ordered from basic to advanced. CIS also publishes K-12-specific benchmark guidance that maps these controls directly to the realities of school district technology environments.',
    whyUseful:
      'CSF 2.0 tells a district what categories of work matter. CIS Controls tell a district exactly what to do inside each category: which accounts need multi-factor authentication, how often to review administrator access, what an acceptable patch cadence looks like. For a district with one overworked IT director and no dedicated security staff, that specificity is the difference between a good intention and a completed task.',
    howToApply:
      'Implementation Group 1 (IG1) is the realistic starting point for a small or resource-constrained district. It covers the baseline safeguards every organization should have regardless of size or sector, things like maintaining an inventory of devices and software, enforcing unique passwords, and applying security patches on a defined schedule. Example: a district with one shared administrative login for its student information system is failing a basic IG1 control around unique account management. A district that patches servers only when something breaks is failing the IG1 control around a defined patch management process. Working through IG1 control by control, even a handful per semester, produces steady, documentable progress.',
    whereItFits:
      'CIS Controls sit primarily inside the CSF Identify and Protect functions, giving technical substance to what would otherwise be a governance-level conversation.',
    mapsToOthers:
      'Use CIS Controls as the technical backlog behind CSF\'s Identify and Protect functions, and as evidence in board reporting that the district\'s stated cybersecurity policy (from the Operating Model and Policy & Governance domain) is actually being implemented, not just written down.',
    source: { label: 'CIS Critical Security Controls', url: 'https://www.cisecurity.org/' },
  },
  {
    id: 'cosn-genai',
    order: 3,
    title: 'CoSN Generative AI Maturity Tool',
    shortName: 'CoSN GenAI Maturity Tool',
    tagline: 'A baseline for AI readiness, built the same way districts already measure technology maturity.',
    whatItIs:
      'A maturity model describes progress in stages rather than as a pass or fail checklist. It lets an organization say honestly "we are early on this dimension and further along on that one" instead of forcing a single yes or no answer. The Consortium for School Networking (CoSN) publishes a Generative AI maturity tool built for K-12 districts, letting them baseline where they stand across the dimensions of AI adoption: policy, instructional use, staff capacity, data privacy, and more.',
    whyUseful:
      'Cybersecurity frameworks like CSF and CIS Controls were not written with generative AI in mind. A maturity model built specifically for K-12 AI adoption fills that gap, giving districts language for AI-specific progress (piloting, adopting, scaling) that a general-purpose security framework does not provide.',
    howToApply:
      'Districts use the CoSN tool the same way they would use any maturity self-assessment: answer honestly about current state rather than aspirational state, revisit it on a fixed schedule (annually is common), and use the gap between current and desired stage to prioritize the next round of policy work, staff training, or tool vetting. It pairs naturally with this site\'s self-assessment, which asks similar staged questions across the same underlying domains.',
    whereItFits:
      'The CoSN tool is the AI-specific layer that sits alongside, not inside, the cybersecurity frameworks above. It is most relevant to the Policy & Governance, Staff Readiness, and Student & Parent Awareness domains in this site\'s assessment.',
    mapsToOthers:
      'Think of CSF and CIS Controls as answering "how secure are we," and the CoSN tool as answering "how ready are we for AI specifically." A district doing both gets a complete picture: secure infrastructure plus deliberate AI adoption, rather than one without the other.',
    source: { label: 'CoSN Generative AI Maturity Tool', url: 'https://www.cosn.org/ai/' },
  },
  {
    id: 'state-guidance',
    order: 4,
    title: 'State DOE AI Guidance',
    shortName: 'State DOE Guidance',
    tagline: 'The fastest-moving layer: state-level rules that increasingly carry legal weight, not just recommendations.',
    whatItIs:
      'Since 2024, a majority of U.S. state departments of education have published official guidance on AI use in K-12 schools. Approaches vary: some states publish tiered maturity frameworks similar to CoSN\'s; others use a stoplight or traffic light model that sorts AI uses into prohibited, restricted (use with caution or human review), and permitted categories. Ohio and Tennessee have gone further, enacting legal mandates that require districts to adopt a local AI policy, not merely recommending one.',
    whyUseful:
      'Federal privacy law (FERPA, COPPA, IDEA) sets a floor, and cybersecurity frameworks set best practice, but state guidance is what a district\'s own state education agency and, in mandate states, its own legislature will actually hold it accountable to. Ignoring state guidance is not a hypothetical risk; it is the guidance a state auditor or the local newspaper will reach for first.',
    howToApply:
      'A district should identify its own state\'s published AI guidance (if any exists yet), determine whether it is a recommendation or a mandate, and cross-reference its structure (tiered versus stoplight) against the district\'s own draft policy so the local policy uses compatible language. In a mandate state like Ohio or Tennessee, this is not optional groundwork, it is a compliance requirement with a real deadline.',
    whereItFits:
      'State guidance is the most locally binding layer in this library and should be checked first when drafting or revising the AI policy discussed in Policy & Governance and produced as a starter outline by this site\'s assessment.',
    mapsToOthers:
      'Where CSF, CIS Controls, and the CoSN tool are voluntary and national in scope, state guidance is often state-specific and, in a growing number of states, legally required. Treat it as the layer that overrides or narrows the others whenever the two conflict.',
    source: { label: 'State AI guidance tracker (Ballotpedia)', url: 'https://ballotpedia.org/AI_guidance_issued_by_state_departments_of_education' },
  },
]

export const FRAMEWORKS_BY_ID = Object.fromEntries(FRAMEWORKS.map((f) => [f.id, f]))
