// District AI Governance Tutorial, assessment content
// Six governance domains, 46 questions, each scored 0-3 (max 138 points).

export const DOMAINS = [
  {
    id: 'policy-governance',
    order: 1,
    title: 'Policy & Governance',
    tagline: 'Does the district have a written, adopted AI policy, and does anyone own it?',
    summary:
      "Every other domain in this assessment assumes a policy foundation exists. Without a board-adopted AI policy, individual teachers end up setting district policy one classroom at a time, inconsistently, and with no legal footing to fall back on when a parent, reporter, or auditor asks a hard question.",
    whatGoodLooksLike: [
      'A board-adopted policy exists, is current, and is publicly posted.',
      'A named leader owns implementation and reports on it regularly.',
      'The policy is reviewed on a schedule, not only after something goes wrong.',
      'Teachers, parents, and students had a voice in shaping it.',
    ],
    commonGaps: [
      'A draft policy that was never formally adopted by the board.',
      'A policy that exists but nobody has communicated to staff.',
      'No single person responsible when questions or problems come up.',
      'A policy that has never been revisited since it was first written.',
    ],
    optional: false,
    sources: [
      { label: 'Georgia Department of Education', url: 'https://www.gadoe.org/' },
      { label: 'NIST AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
    ],
    questions: [
      {
        id: 'pg-1',
        text: 'Does the district have a formally adopted, written AI policy?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No AI policy exists in any form. The district has no documented position on AI use by staff or students. AI decisions, if made at all, are informal and inconsistent across schools and classrooms.', note: 'The district has no legal or operational foundation to respond to a parent complaint, board inquiry, or regulatory review about AI use. Every teacher is making their own rules.', example: 'A parent asks to see the district’s AI policy. The superintendent has nothing to show.' },
          { score: 1, label: 'Partially in place', description: 'A draft AI policy exists or AI is mentioned briefly in an existing technology or acceptable use policy, but it has not been formally adopted by the board, is not publicly posted, and has not been communicated to staff or students.', note: 'A draft that hasn’t been adopted provides no legal protection. It signals awareness but not action.', example: 'The curriculum director has been working on a draft for several months. The board has not seen it.' },
          { score: 2, label: 'Mostly in place', description: 'A written AI policy has been adopted by the board and is referenced in district materials, but it has gaps, it may not cover all GaDOE-required elements, may not have been widely communicated, or may not have been reviewed since initial adoption.', note: 'A policy with gaps still creates exposure. If the policy doesn’t address IEP restrictions or COPPA consent, it doesn’t protect the district in those areas.', example: 'The board adopted a one-page AI policy in spring 2024. Most teachers are unaware it exists.' },
          { score: 3, label: 'Fully in place', description: 'A comprehensive, board-adopted AI policy exists that covers all GaDOE-required elements. It has been publicly posted, communicated to all staff and students, incorporated into relevant handbooks, and reviewed within the past 12 months. A designated leader is responsible for its implementation.', note: 'A fully adopted, communicated AI policy gives the superintendent a documented, defensible position in any board meeting, parent conversation, or regulatory inquiry.', example: 'The board adopted a comprehensive AI policy in January 2026. All staff received training. It is posted on the district website and referenced in the student and staff handbooks.' },
        ],
      },
      {
        id: 'pg-2',
        text: 'Does the AI policy cover all GaDOE-required elements?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No policy exists, or the existing policy makes no reference to GaDOE’s required elements: ethical use, data privacy, grading implications, acceptable use, and consequences for misuse.', note: 'Missing any of GaDOE’s required elements leaves the district exposed in that specific area and out of alignment with state guidance.', example: 'The district has a basic acceptable use policy from 2019 that does not mention AI at all.' },
          { score: 1, label: 'Partially in place', description: 'The policy addresses one or two of GaDOE’s required elements, typically acceptable use, but is missing key components such as data privacy provisions, consequences for misuse, or grading and academic integrity guidelines.', note: 'Partial coverage creates uneven protection. A policy that covers acceptable use but not data privacy still leaves the district exposed to FERPA and COPPA risk.', example: 'The policy tells teachers they can use AI for lesson planning but says nothing about what student data they can enter into AI systems.' },
          { score: 2, label: 'Mostly in place', description: 'The policy covers most GaDOE-required elements but has identifiable gaps. It may address data privacy but not IDEA/IEP restrictions, or it may cover acceptable use but not define consequences for misuse.', note: 'Even one missing element can create exposure. GaDOE’s framework is specific, partial alignment is better than none but does not fully protect the district.', example: 'The policy covers ethical use, acceptable use, and data privacy but doesn’t address how AI intersects with grading or academic integrity.' },
          { score: 3, label: 'Fully in place', description: 'The policy explicitly addresses all GaDOE-required elements: ethical use guidelines, data privacy and FERPA/COPPA compliance, grading and academic integrity provisions, acceptable use definitions, consequences for misuse, and the traffic light system categorizing prohibited, permitted, and encouraged AI uses.', note: 'A policy that fully aligns with GaDOE’s framework positions the district to demonstrate compliance in any state review and respond confidently to any parent or board question about AI use.', example: 'The policy includes a traffic light appendix, explicit FERPA/COPPA provisions, academic integrity language, and a consequences matrix, all reviewed by district counsel.' },
        ],
      },
      {
        id: 'pg-3',
        text: 'Is the AI policy included in student and staff handbooks and actively communicated?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No AI policy exists in handbooks. Staff and students have received no communication about AI expectations. Each teacher is operating independently with no shared framework.', note: 'A policy that only exists on paper protects no one. If staff don’t know about it, they can’t follow it.', example: 'The IT director can locate the policy document, but no teacher in the district has seen it.' },
          { score: 1, label: 'Partially in place', description: 'The policy was emailed to staff once or mentioned at a single all-staff meeting, but it has not been incorporated into official handbooks and there is no systematic process for ensuring new staff or students receive it.', note: 'A one-time communication is insufficient. Staff turnover, time, and information overload mean a single email does not constitute adequate notice.', example: 'The superintendent mentioned the AI policy at the August back-to-school meeting. It was not covered in depth and is not in any handbook.' },
          { score: 2, label: 'Mostly in place', description: 'The policy is referenced in at least one handbook (staff or student), but it is not in both, or the communication process is inconsistent across schools. Some staff and students are aware; others are not.', note: 'Inconsistent communication creates inequity and inconsistency in practice. If some schools follow the policy and others don’t, the district’s protection is uneven.', example: 'The staff handbook references the AI policy, but the student handbook has not been updated and parents have received no communication.' },
          { score: 3, label: 'Fully in place', description: 'The AI policy is incorporated into both the staff and student handbooks. All staff received explicit training on the policy at the start of the year. Students received age-appropriate instruction on AI expectations. Parents received written notice. New staff receive the policy as part of onboarding.', note: 'Documented, consistent communication creates a district culture where AI expectations are understood at every level.', example: 'The policy is in both handbooks, covered in new staff orientation, referenced in the first-week student advisory curriculum, and summarized in the parent back-to-school newsletter.' },
        ],
      },
      {
        id: 'pg-4',
        text: 'Has the board of education been formally briefed on the district’s AI posture and policy?',
        levels: [
          { score: 0, label: 'Not in place', description: 'The board of education has had no formal discussion of AI, not in a policy adoption vote, a workshop, or a regular meeting agenda item. Board members are unaware of the district’s AI posture.', note: 'A board that has not been briefed cannot support a superintendent when questions arise publicly. The first time the board hears about AI is the worst possible time to be uninformed.', example: 'A community member raises AI concerns at a board meeting. Board members look to the superintendent with no shared context or position.' },
          { score: 1, label: 'Partially in place', description: 'AI has come up informally in a board meeting, perhaps in a public comment or as a sidebar in another agenda item, but there has been no formal briefing, no dedicated agenda item, and no board action.', note: 'Informal exposure is not the same as informed governance.', example: 'A board member asked about AI at last year’s technology update. The superintendent gave a brief verbal response. Nothing was documented.' },
          { score: 2, label: 'Mostly in place', description: 'The board has been briefed on AI, either through a workshop or a formal presentation, but the briefing was general and did not result in a documented policy position or board action.', note: 'Awareness without action leaves the district without formal board backing if a situation escalates.', example: 'The superintendent presented a 15-minute AI overview at the January board retreat. The board asked good questions but took no action.' },
          { score: 3, label: 'Fully in place', description: 'The board has received a formal briefing on the district’s AI posture, adopted an AI policy by official vote, and receives periodic updates (at minimum annually) on implementation progress. Board meeting minutes document AI-related actions.', note: 'A board that has formally engaged with AI governance is a board that can confidently respond to community questions and support the superintendent’s AI decisions.', example: 'The board adopted the AI policy by a recorded vote in February 2026. The superintendent provides a quarterly AI update as a standing agenda item.' },
        ],
      },
      {
        id: 'pg-5',
        text: 'Is there a designated district leader responsible for AI policy implementation and oversight?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No one in the district has been assigned responsibility for AI policy oversight. AI decisions are made ad hoc by whoever encounters the issue first.', note: 'Without ownership, nothing gets implemented consistently. Policy without an owner is a document, not a practice.', example: 'When a teacher has a question about AI, there is no clear person to ask.' },
          { score: 1, label: 'Partially in place', description: 'Responsibility for AI has been informally assumed by someone, typically the technology director or curriculum coordinator, but the role has not been formally designated, documented, or resourced.', note: 'Informal ownership disappears when staff change roles or leave. It creates single points of failure.', example: 'The technology director handles AI questions because no one else does, but it’s not in her job description.' },
          { score: 2, label: 'Mostly in place', description: 'A specific role or individual has been designated as the AI policy owner, but the responsibilities are not fully defined, the person has not received relevant training, or the designation has not been communicated to all staff.', note: 'A designated owner without clear responsibilities or training cannot effectively implement or enforce policy.', example: 'The assistant superintendent was named AI coordinator but has not received any training and doesn’t have a defined scope of responsibilities.' },
          { score: 3, label: 'Fully in place', description: 'A specific individual has been formally designated as the district AI policy lead with documented responsibilities including: maintaining the approved tool list, coordinating professional development, monitoring compliance, staying current on regulatory changes, and reporting to the superintendent and board.', note: 'A designated AI leader creates institutional capacity, this is the difference between a policy that sits in a drawer and one that actively protects the district.', example: 'The curriculum director has been formally designated as AI Coordinator with a written scope of responsibilities, quarterly reporting obligations, and a professional development budget.' },
        ],
      },
      {
        id: 'pg-6',
        text: 'Does the district have a defined process for reviewing and updating AI policies?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No review process exists. The policy, if one exists, was written once and has not been revisited. No mechanism exists to incorporate regulatory changes, new GaDOE guidance, or new AI tools.', note: 'AI regulations and technology are changing faster than any other area of school policy. A policy written in 2024 may already be inadequate in 2026 without any updates.', example: 'The district adopted an AI policy in 2024. No one has looked at it since. GaDOE’s January 2025 guidance was never incorporated.' },
          { score: 1, label: 'Partially in place', description: 'There is an informal understanding that the policy should be reviewed periodically, but no schedule, no trigger criteria, and no responsible party have been defined.', note: 'Without a formal schedule, reviews happen only when something goes wrong, which is the worst time to discover a policy gap.', example: 'The superintendent plans to ‘look at the AI policy again at some point this year’ but there is no scheduled review date.' },
          { score: 2, label: 'Mostly in place', description: 'An annual review is planned and the responsible party is identified, but the review criteria are not defined, the process has not been formally documented, or the first review has not yet occurred.', note: 'A planned review that hasn’t happened yet offers no current protection.', example: 'The AI coordinator has a reminder on her calendar for June to review the policy. No review checklist or criteria exist.' },
          { score: 3, label: 'Fully in place', description: 'A formal annual policy review process exists with: a scheduled review date, defined review criteria (checking against current GaDOE guidance, federal regulatory changes, new litigation, and new tools), a designated reviewer, a board approval process for any amendments, and documentation of each review.', note: 'A living policy review process means the district is always operating on current regulatory footing.', example: 'The AI policy is reviewed every June by the AI coordinator and legal counsel, compared against any new GaDOE guidance published that year, and any amendments are presented to the board at the August meeting.' },
        ],
      },
      {
        id: 'pg-7',
        text: 'Does the district use the GaDOE traffic light system?',
        levels: [
          { score: 0, label: 'Not in place', description: 'The district has no documented classification of AI uses as prohibited, permitted with caution, or encouraged. Staff have no framework for evaluating whether a specific AI use is appropriate.', note: 'Without a traffic light framework, every AI decision is a judgment call. Teachers will make inconsistent, and sometimes legally problematic, choices without guidance.', example: 'A teacher asks if she can use AI to evaluate a student’s IEP progress. There is no framework to answer that question.' },
          { score: 1, label: 'Partially in place', description: 'Staff have informal awareness that some AI uses are prohibited (such as IEP writing) but this has not been formally documented or communicated through the traffic light framework.', note: 'Informal awareness is inconsistent. Some staff know the rules; others don’t. Without formal documentation, the district cannot demonstrate due diligence.', example: 'The special education director knows AI can’t write IEP goals but this has never been communicated in writing to general education teachers.' },
          { score: 2, label: 'Mostly in place', description: 'The district has adopted a version of the traffic light framework and documented some prohibited, permitted, and encouraged uses, but the list is incomplete, has not been formally communicated to all staff, or has not been reviewed against GaDOE’s most current guidance.', note: 'An incomplete list creates false confidence. Staff may assume that anything not on the prohibited list is permitted.', example: 'The district has a one-page prohibited uses list but has not documented permitted or encouraged uses, leaving a significant gray area.' },
          { score: 3, label: 'Fully in place', description: 'The district has formally adopted GaDOE’s traffic light system with a documented, current list of: prohibited uses (IEP writing, educator evaluation, student placement decisions, subjective grading), permitted with caution uses (lesson planning with review, rubric development, multiple choice grading), and encouraged uses (reading level adaptation, communication drafting, data summarization).', note: 'A fully implemented traffic light system gives teachers confident, clear guidance they can act on immediately.', example: 'Every teacher has a laminated traffic light reference card. The full framework is in the staff handbook and covered in AI professional development.' },
        ],
      },
      {
        id: 'pg-8',
        text: 'Is there a stakeholder engagement process for AI policy development?',
        levels: [
          { score: 0, label: 'Not in place', description: 'AI policy was developed (or will be developed) by administration alone with no input from teachers, parents, students, or community members.', note: 'Policy developed without stakeholder input lacks buy-in and community trust. It is also out of alignment with GaDOE’s framework, which calls for transparent, inclusive development.', example: 'The superintendent drafted the AI policy over a weekend and presented it to the board for adoption. No one else was consulted.' },
          { score: 1, label: 'Partially in place', description: 'One stakeholder group, typically teachers, was informally consulted during policy development, but parents, students, and community members had no input.', note: 'Partial engagement still misses critical voices. Parent and student perspectives are specifically required by GaDOE.', example: 'The curriculum team reviewed a draft policy and gave feedback, but there was no parent survey, community forum, or student input.' },
          { score: 2, label: 'Mostly in place', description: 'A stakeholder engagement process occurred but was limited in scope, perhaps a single survey or one community meeting, rather than an ongoing, meaningful process with diverse representation.', note: 'Token engagement does not build genuine community trust or produce the best policy outcomes.', example: 'The district posted a survey on its website for 2 weeks. 14 people responded. The results were noted but didn’t meaningfully shape the final policy.' },
          { score: 3, label: 'Fully in place', description: 'A formal, documented stakeholder engagement process was conducted including: teacher focus groups, parent community meetings or surveys, student voice opportunities (age-appropriate), and board workshop discussion, all prior to policy adoption. Feedback was documented and demonstrably incorporated into the final policy.', note: 'Genuine stakeholder engagement produces policies that reflect the community’s actual values and needs.', example: 'The district held two community forums, conducted a staff survey with 87% participation, convened a student advisory panel at the high school, and documented how each major feedback theme was addressed in the final policy.' },
        ],
      },
    ],
  },

  {
    id: 'data-privacy',
    order: 2,
    title: 'Data Privacy & Legal Compliance',
    tagline: 'Is student data actually protected once AI tools enter the picture?',
    summary:
      "This is usually the highest-stakes domain in the assessment. FERPA, COPPA, IDEA, and PPRA all predate generative AI, but they apply fully to it, and a single untrained teacher entering student records into a consumer AI tool can create a real compliance incident, regardless of how good the district's written policy looks on paper.",
    whatGoodLooksLike: [
      'Staff are trained on what counts as protected student data and why it matters.',
      'Every AI vendor in use has a signed data agreement on file.',
      'Consent processes exist for tools used with younger students.',
      'There is a written plan for what happens if a vendor has a breach.',
    ],
    commonGaps: [
      'Teachers using consumer AI tools under consumer terms of service.',
      'No inventory of which vendors actually have signed agreements.',
      'No review of whether tools are accessible to students with disabilities.',
      'No one monitoring whether privacy practices are actually being followed day to day.',
    ],
    optional: false,
    sources: [
      { label: 'Student Privacy Policy Office (FERPA & PPRA)', url: 'https://studentprivacy.ed.gov/' },
      { label: 'FTC, Children’s Online Privacy Protection Act (COPPA)', url: 'https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy' },
      { label: 'U.S. Dept. of Education, IDEA', url: 'https://sites.ed.gov/idea/' },
    ],
    questions: [
      {
        id: 'dp-1',
        text: 'Are all staff trained on student PII and prohibition against entering it into AI systems?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No training has been provided. Staff have no formal awareness of what constitutes student PII under FERPA, and no directive exists prohibiting them from entering student information into AI systems.', note: 'This is the single highest-risk gap in the assessment. Staff using AI tools without PII training are creating FERPA violations in real time, potentially every day.', example: 'Teachers across the district are using ChatGPT for lesson planning, grading, and feedback generation. Student names, grades, and in some cases IEP content are being entered routinely.' },
          { score: 1, label: 'Partially in place', description: 'Some staff, typically technology-focused or administrative staff, have received informal guidance about PII, but no formal district-wide training has been delivered and no written directive has been issued.', note: 'Without universal training, the district cannot demonstrate it took reasonable steps to prevent violations. One untrained teacher is all it takes.', example: 'The technology director has mentioned PII concerns in department meetings, but the majority of classroom teachers have never heard the term in the context of AI.' },
          { score: 2, label: 'Mostly in place', description: 'A training session on PII and AI has been delivered to most staff, but it was a one-time event, records of completion are not maintained, or new staff have not received the training.', note: 'One-time training without documentation and a process for new staff creates gaps over time.', example: 'The district held an AI data privacy training in September. Substitute teachers, new hires since October, and some staff who were absent have not received it.' },
          { score: 3, label: 'Fully in place', description: 'All current staff have completed documented training on: what constitutes student PII under FERPA, specific examples of information that must never be entered into AI systems, the consequences of violations, and how to anonymize data before using AI tools. Training is part of new staff onboarding and refreshed annually.', note: 'Trained staff are the district’s primary defense against inadvertent FERPA violations.', example: 'All 247 district staff completed the 45-minute PII and AI training module in August. New hires complete it within their first week. Records are maintained in the HR system.' },
        ],
      },
      {
        id: 'dp-2',
        text: 'Does the district have a documented list of what constitutes PII under FERPA?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No documented PII definition exists. Staff have no reference point for determining what information they are prohibited from sharing with or entering into AI systems.', note: 'Without a documented definition, staff cannot protect what they cannot identify. The most common FERPA violations occur because staff didn’t know certain information was protected.', example: 'A teacher doesn’t realize that a student’s 504 accommodations constitute PII and includes them in a ChatGPT prompt.' },
          { score: 1, label: 'Partially in place', description: 'A general reference to FERPA exists in district policy, but there is no specific, plain-language list of what constitutes PII in the context of AI tool use.', note: 'A legal citation without practical guidance doesn’t help a classroom teacher make the right decision.', example: 'The staff handbook mentions FERPA compliance but doesn’t specify that IEP content, behavioral records, or free/reduced lunch status are protected.' },
          { score: 2, label: 'Mostly in place', description: 'A PII definition document exists and covers the most common categories (names, SSNs, grades) but is incomplete, it may not address disability accommodations, behavioral records, family income data, or biometric identifiers.', note: 'An incomplete list creates false confidence. Staff may believe they’re complying while still sharing protected information.', example: 'The district’s PII list covers names, addresses, and grades but doesn’t mention health records, disciplinary files, or IEP content.' },
          { score: 3, label: 'Fully in place', description: 'A comprehensive, plain-language PII reference document exists that specifically covers all FERPA-protected categories in the context of AI tool use, accessible to all staff and referenced in AI training.', note: 'A clear, specific PII reference document empowers every teacher and administrator to make the right decision in the moment.', example: 'The AI Policy Handbook includes a two-page PII Quick Reference with specific examples for each category and a ‘When in doubt’ decision tree for staff to use before entering any student information into an AI system.' },
        ],
      },
      {
        id: 'dp-3',
        text: 'Does the district have written vendor agreements with every AI tool in use?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No written vendor agreements exist for any AI tool currently in use. Teachers are using consumer AI products under consumer terms of service with no FERPA-compliant data processing agreements.', note: 'Every AI tool in use without a vendor agreement is a potential FERPA violation. In a breach scenario, the district has no contractual remedy and no documentation of due diligence.', example: 'Six teachers are using MagicSchool AI. The district has never contacted MagicSchool. No agreement exists. Student data flows through the platform under consumer terms of service.' },
          { score: 1, label: 'Partially in place', description: 'Vendor agreements exist for some major platforms (typically Google Workspace or Microsoft 365) but not for the AI-specific tools teachers have adopted individually.', note: 'Enterprise agreements for core platforms don’t cover the AI tools teachers adopt on their own.', example: 'The district has a Google Workspace EDU agreement but has no agreements with the AI tools teachers discovered through professional development.' },
          { score: 2, label: 'Mostly in place', description: 'The district has initiated vendor agreements with most approved AI tools but some remain without executed agreements, or existing agreements have not been reviewed to confirm they meet FERPA requirements.', note: 'An agreement that doesn’t meet FERPA standards provides limited protection.', example: 'The district has agreements with 4 of 7 approved AI tools. The other 3 are in process.' },
          { score: 3, label: 'Fully in place', description: 'Executed, FERPA-compliant data processing agreements exist for every AI tool on the district’s approved list, covering data use, security commitments, prohibition on selling student data, deletion timelines, and breach notification requirements. Agreements are reviewed annually.', note: 'Executed vendor agreements are the district’s primary legal protection when something goes wrong.', example: 'The district’s AI coordinator maintains a vendor agreement log. All 9 approved AI tools have executed agreements. Three are reviewed by district counsel annually.' },
        ],
      },
      {
        id: 'dp-4',
        text: 'Is the district compliant with COPPA for AI tools used by students under 13?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No COPPA compliance process exists. AI tools are being used with elementary students without any parental consent mechanism.', note: 'COPPA requires verifiable parental consent before online services collect personal information from children under 13. The district, not the vendor, is responsible for obtaining consent.', example: 'A 4th grade teacher has all 24 students using an AI reading tutor. No consent forms exist. Parents don’t know the tool is being used.' },
          { score: 1, label: 'Partially in place', description: 'Some awareness of COPPA exists at the administrative level, but no formal consent process has been implemented.', note: 'Awareness without action does not constitute compliance. Every day that an AI tool is used with under-13 students without consent is a day of exposure.', example: 'The technology director has told principals to ‘be careful’ about AI tools with elementary students but has not defined what that means.' },
          { score: 2, label: 'Mostly in place', description: 'A consent process exists for some AI tools or some grade levels, but it is not comprehensive.', note: 'Partial consent coverage leaves gaps. Any AI tool used with any under-13 student without consent is an exposure.', example: 'The district has COPPA consent built into its technology acceptable use agreement for district-adopted tools. Teachers’ individually-adopted AI tools are not covered.' },
          { score: 3, label: 'Fully in place', description: 'A comprehensive COPPA compliance process identifies all AI tools used with students under 13, obtains and documents verifiable parental consent where required, and reviews the tool list annually.', note: 'COPPA compliance protects the district from FTC enforcement action and parent litigation while building community trust.', example: 'The district’s annual parent packet includes a COPPA disclosure listing all AI tools used with K-8 students. Parents provide consent for each tool category.' },
        ],
      },
      {
        id: 'dp-5',
        text: 'Does the district ensure AI tools comply with IDEA and Section 504 for students with disabilities?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No review of AI tools for IDEA or Section 504 compliance has occurred. IEP content may be entering AI systems. AI tools may be inaccessible to students with disabilities.', note: 'Using AI to write IEP goals or make placement decisions without qualified professional judgment is a direct IDEA violation.', example: 'A special education teacher has been using ChatGPT to draft IEP goals to save time. The goals are used directly with minimal modification.' },
          { score: 1, label: 'Partially in place', description: 'Some awareness exists among special education staff that AI cannot make IEP decisions, but this has not been formally documented or communicated to general education teachers.', note: 'General education teachers frequently interact with students on IEPs. Without universal communication of these restrictions, violations can occur outside special education.', example: 'The special education coordinator has told her team that AI can’t write IEP goals. General education teachers who work with inclusion students have never received this guidance.' },
          { score: 2, label: 'Mostly in place', description: 'IDEA-related AI restrictions are documented and communicated to special education staff, but Section 504 compliance (accessibility of AI tools) has not been reviewed, or vice versa.', note: 'IDEA and Section 504 address different obligations. A district that addresses one but not the other has only partial protection.', example: 'The district has clear policy prohibiting AI for IEP decisions. No one has reviewed whether the AI tools used in classrooms are accessible to students using screen readers.' },
          { score: 3, label: 'Fully in place', description: 'The district has documented a clear prohibition on using AI to write IEP goals, make placement decisions, or determine eligibility; a requirement that AI tools be reviewed for accessibility before adoption; and a process for parents of students with IEPs or 504 plans to raise concerns.', note: 'IDEA and Section 504 compliance in the AI context protects the district’s most vulnerable students and the district’s federal funding simultaneously.', example: 'The AI tool vetting process includes a mandatory accessibility review. All staff have been trained on IDEA AI restrictions.' },
        ],
      },
      {
        id: 'dp-6',
        text: 'Does the district have a data breach response plan for AI vendor breaches?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No written incident response plan exists for a data breach scenario involving an AI vendor.', note: 'Georgia law (O.C.G.A. §10-1-912) requires notification within 30 days of a breach. Without a plan, the district will make critical decisions under maximum pressure with no roadmap.', example: 'PowerSchool notifies the district of a breach affecting 800 student records. The superintendent has no plan and spends the first 48 hours trying to figure out who to call.' },
          { score: 1, label: 'Partially in place', description: 'There is a general IT incident response plan or cybersecurity policy, but it does not specifically address AI vendor breaches or student data notification requirements.', note: 'A general IT plan is not sufficient for a student data breach. The regulatory obligations and communication needs are specific and distinct.', example: 'The district has a ransomware response plan. It doesn’t address what to do if a student data breach occurs at an AI vendor.' },
          { score: 2, label: 'Mostly in place', description: 'A breach response plan exists that covers the key elements, notification chain, legal counsel engagement, parent communication, but it has not been tested or key staff are unaware of it.', note: 'An untested plan often fails under real conditions. Key staff need to know the plan before an incident occurs.', example: 'The district counsel drafted a breach response protocol last year. The superintendent has read it. The principals have not.' },
          { score: 3, label: 'Fully in place', description: 'A written AI vendor breach response plan defines immediate actions, notification chain, parent and community communication timeline, Georgia O.C.G.A. §10-1-912 compliance steps, credit monitoring obligations, and annual plan review and tabletop exercise.', note: 'A tested breach response plan transforms a crisis from chaos into a managed process.', example: 'The district conducts an annual tabletop exercise simulating a vendor breach. All principals, the superintendent, and legal counsel participate.' },
        ],
      },
      {
        id: 'dp-7',
        text: 'Has the district reviewed PPRA requirements for AI tools that collect student information?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No review of AI tools for PPRA applicability has occurred.', note: 'AI tools that ask students reflective or personal questions, common in social-emotional learning tools, may trigger PPRA requirements. Unreviewed tools create unknown exposure.', example: 'The district uses an AI-powered social-emotional learning tool that asks students about family relationships and personal challenges. No PPRA review has occurred.' },
          { score: 1, label: 'Partially in place', description: 'Some awareness of PPRA exists but no formal review of AI tools for PPRA applicability has been conducted.', note: 'PPRA violations require specific remediation including parent notification and opt-out opportunities. Delayed discovery creates compounding exposure.', example: 'The counseling department knows PPRA exists but hasn’t reviewed the AI-powered mental wellness tools deployed this year.' },
          { score: 2, label: 'Mostly in place', description: 'A PPRA review was conducted for some AI tools but not all, or the review criteria did not fully cover all 8 PPRA-protected topics.', note: 'Partial review creates gaps. Some protected topics may appear unexpectedly in AI tool interactions.', example: 'The district reviewed its academic AI tools for PPRA but did not review the AI-powered career planning tools that ask about family income.' },
          { score: 3, label: 'Fully in place', description: 'All AI tools in use have been reviewed for PPRA applicability against all 8 protected topics. Tools that trigger PPRA requirements have appropriate parent notification and opt-out mechanisms.', note: 'PPRA compliance protects student privacy in its most sensitive dimensions and builds parent trust.', example: 'The district’s tool vetting checklist includes a PPRA screening section. Three tools were identified as PPRA-relevant. Opt-out mechanisms are in place.' },
        ],
      },
      {
        id: 'dp-8',
        text: 'Does the district use anonymized or aggregated data when interacting with AI systems?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No data anonymization practice or guidance exists. Staff routinely enter identifiable student information into AI systems without any instruction to remove or replace identifying details.', note: 'Every identifiable student record entered into a non-compliant AI system is a potential FERPA violation.', example: 'A teacher copies a student’s essay verbatim, including the student’s name in the header, into ChatGPT for feedback suggestions.' },
          { score: 1, label: 'Partially in place', description: 'Some staff have developed personal habits of anonymizing data before using AI tools, but this practice has not been formally instructed or adopted district-wide.', note: 'Individual good practices are not institutional protection.', example: 'Two teachers in the math department have started replacing student names with numbers before entering assessment data into AI tools.' },
          { score: 2, label: 'Mostly in place', description: 'Written guidance on anonymization has been provided to staff, but it is not systematically enforced or covered in training.', note: 'Guidance without training and enforcement creates inconsistent practice.', example: 'The AI policy mentions anonymization in passing but it was never covered in PD.' },
          { score: 3, label: 'Fully in place', description: 'All staff have been trained on specific, practical anonymization techniques for AI use, documented in the AI policy and reinforced in annual training.', note: 'Systematic data anonymization dramatically reduces FERPA risk while preserving the instructional value of AI tools.', example: 'The district’s AI training includes a practical module on anonymization with examples for each use case.' },
        ],
      },
      {
        id: 'dp-9',
        text: 'Is there a monitoring process for ongoing staff compliance with AI data privacy practices?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No monitoring mechanism exists. The district has no way of knowing whether staff are following data privacy practices related to AI tool use.', note: 'Without monitoring, violations accumulate invisibly until a parent complaint, regulatory inquiry, or breach surfaces them.', example: 'Teachers could be entering student PII into AI tools daily for months without anyone knowing.' },
          { score: 1, label: 'Partially in place', description: 'Principals or department heads are generally expected to monitor technology use but have no specific guidance, tools, or protocols for AI-related data privacy compliance.', note: 'General oversight expectations without specific AI protocols are insufficient.', example: 'Principals are responsible for ‘technology compliance’ in their buildings, but no one has told them what AI data privacy compliance looks like.' },
          { score: 2, label: 'Mostly in place', description: 'Some monitoring occurs, such as reviewing AI tool usage logs, but it is not systematic, not documented, and does not cover all schools or staff.', note: 'Inconsistent monitoring creates gaps that become the district’s exposure.', example: 'The technology director occasionally reviews Google Workspace activity logs. No one monitors individually-adopted AI tools.' },
          { score: 3, label: 'Fully in place', description: 'A systematic monitoring process includes regular usage log review, annual staff re-attestation, a clear reporting mechanism for violations, and quarterly compliance reports to the superintendent.', note: 'Active monitoring creates accountability that transforms policy from paper to practice.', example: 'The AI coordinator reviews monthly usage reports for all approved tools and reports compliance status to the superintendent quarterly.' },
        ],
      },
      {
        id: 'dp-10',
        text: 'Does the district’s Section 504 review extend to ensuring AI tools are accessible?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No accessibility review of AI tools occurs before adoption. AI tools may be in use that are inaccessible to students using screen readers, text-to-speech, or other assistive technology.', note: 'Deploying inaccessible AI tools to students with disabilities raises real Section 504 and ADA Title II concerns.', example: 'The district adopted an AI writing assistant that is not compatible with JAWS screen reader software.' },
          { score: 1, label: 'Partially in place', description: 'Accessibility is considered informally during tool selection but there is no formal accessibility review checklist or testing with assistive technology.', note: 'Informal consideration without documentation doesn’t protect the district in an OCR complaint.', example: 'The tool selection committee asks vendors about accessibility during demos, but no systematic testing or documentation occurs.' },
          { score: 2, label: 'Mostly in place', description: 'Accessibility is a documented criterion in the tool vetting process and vendor accessibility documents are requested, but actual testing with assistive technology has not occurred.', note: 'Vendor-provided documentation isn’t always accurate. Only actual testing confirms accessibility.', example: 'The district collects accessibility documents from vendors. No one has tested any of the tools with district students who use assistive technology.' },
          { score: 3, label: 'Fully in place', description: 'All AI tools are reviewed for Section 504 and ADA accessibility before adoption, including testing with the specific assistive technologies district students use.', note: 'Accessible AI tools ensure every student, including those with disabilities, can benefit from AI-enhanced learning.', example: 'Every tool in the vetting process is tested by the assistive technology specialist with district students who use screen readers and switch access.' },
        ],
      },
    ],
  },

  {
    id: 'vendor-tools',
    order: 3,
    title: 'AI Tool Inventory & Vendor Vetting',
    tagline: 'Does the district know which tools are actually in use, and why each one was approved?',
    summary:
      "Most districts underestimate how many AI tools their staff are actually using by a wide margin. A single unmanaged tool can carry every risk documented in the Data Privacy domain. This domain is about building, and keeping current, the list of what's approved, why, and by whom.",
    whatGoodLooksLike: [
      'A published, current list of approved tools exists and is easy to find.',
      'Someone has actually looked for tools teachers adopted on their own.',
      'A diverse committee, not one person, decides what gets approved.',
      'New tools are piloted before being rolled out district-wide.',
    ],
    commonGaps: [
      'A list that hasn’t been updated since it was first published.',
      'No one has ever asked teachers what they’re actually using.',
      'One administrator making every approval decision alone.',
      'Tools rolled out to every classroom with zero real-world testing first.',
    ],
    optional: false,
    sources: [
      { label: 'Georgia Department of Education', url: 'https://www.gadoe.org/' },
      { label: 'NIST AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
    ],
    questions: [
      {
        id: 'vt-1',
        text: 'Does the district maintain a published, current list of district-approved AI tools?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No approved AI tool list exists. Teachers adopt AI tools independently with no district awareness, approval, or oversight.', note: 'Without an approved list, the district cannot answer the most basic governance question: what AI tools are your students using?', example: 'There are at least 12 different AI tools in use across the district. The superintendent can name 2 of them.' },
          { score: 1, label: 'Partially in place', description: 'A list exists informally, perhaps in the technology director’s notes or a spreadsheet, but it is not official, not public, not complete, and not actively maintained.', note: 'An informal list is not a governance mechanism. It provides no accountability and no protection.', example: 'The technology director has a running list in a Google Sheet of tools she’s heard teachers mention. It hasn’t been updated in 4 months.' },
          { score: 2, label: 'Mostly in place', description: 'An official approved AI tool list exists and has been communicated to staff, but it is not publicly posted, not kept current, or does not include all tools in active use.', note: 'A list that doesn’t reflect reality is misleading. Tools in use that aren’t on the list represent unmanaged risk.', example: 'The district published an approved tool list in September. Three new tools have been requested since then. The list hasn’t been updated.' },
          { score: 3, label: 'Fully in place', description: 'A current, comprehensive, publicly posted approved AI tool list includes every tool approved for use, is updated within 30 days of any change, and links to the privacy policy and vendor agreement for each tool.', note: 'A current, published approved tool list is the operational backbone of your AI governance program.', example: 'The district’s AI tool list is published on the technology page of the district website. It shows 9 approved tools, 3 under review, and 4 explicitly prohibited.' },
        ],
      },
      {
        id: 'vt-2',
        text: 'Has the district conducted a shadow IT audit to identify all AI tools in use?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No audit has been conducted. The district has no mechanism for identifying AI tools adopted by teachers without formal approval.', note: 'Research indicates the average school district uses over 1,400 technology tools in a year. Each unapproved AI tool is an unmanaged liability.', example: 'The district believes 4 AI tools are in use. A shadow IT audit would likely find 15 to 25.' },
          { score: 1, label: 'Partially in place', description: 'An informal inquiry has been made, perhaps asking principals what tools their teachers are using, but no systematic survey or formal audit process has been conducted.', note: 'Informal inquiry relies on teachers voluntarily disclosing tools they may not realize require approval.', example: 'The superintendent asked principals to ask their teachers about AI tool use at a staff meeting. The responses were inconsistent and incomplete.' },
          { score: 2, label: 'Mostly in place', description: 'A formal staff survey has been conducted to identify AI tools in use, but the results have not been fully acted upon.', note: 'A one-time audit captures a snapshot but not an ongoing reality. New tools are adopted constantly.', example: 'The district surveyed staff about AI tool use in November. 23 tools were identified. 14 of them had no vendor agreements. No action was taken on the 14 without agreements.' },
          { score: 3, label: 'Fully in place', description: 'A formal shadow IT audit process exists including an annual all-staff survey, review of network access logs, and a formal process for responding to identified unapproved tools.', note: 'A complete tool inventory is the foundation of all other governance work.', example: 'The district conducts a mandatory annual tool disclosure survey every August. In 2025-26, the audit identified 31 AI tools, 12 were approved, 14 were added to the vetting queue, and 5 were immediately flagged for prohibited data practices.' },
        ],
      },
      {
        id: 'vt-3',
        text: 'Is there a formal review committee with diverse representation for AI tool evaluation?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No formal review process exists for AI tools. Tools are approved (or not) informally by the technology director or superintendent based on limited information.', note: 'Single-person approval processes miss critical perspectives, what seems fine from an IT lens may have pedagogical problems.', example: 'The technology director reviews AI tool requests and approves or denies them based on a quick privacy policy scan and her own judgment.' },
          { score: 1, label: 'Partially in place', description: 'An informal review occurs involving two or three people, but there is no formal committee, no defined evaluation criteria, and no documentation of the review process.', note: 'Informal review without diverse representation and documentation provides limited governance protection.', example: 'The technology director and curriculum coordinator review tool requests together. No parents, teachers, or students are involved.' },
          { score: 2, label: 'Mostly in place', description: 'A formal committee exists with defined membership but it lacks full stakeholder diversity (no parent or student representation), or meets infrequently.', note: 'GaDOE specifically calls for diverse representation including parents. A committee without parent voice is out of alignment with state guidance.', example: 'The technology committee reviews AI tools monthly. It includes the technology director, curriculum director, and a teacher representative. No parent or student representation exists.' },
          { score: 3, label: 'Fully in place', description: 'A formal AI Tool Review Committee exists with membership including technology, curriculum, special education, a classroom teacher, a parent representative, and documented evaluation criteria and decision records.', note: 'A diverse review committee produces better decisions, builds community trust, and creates a documented governance record.', example: 'The district’s AI Review Committee meets monthly. Its 7-member composition is published on the district website. The committee reviewed 14 tools in 2025-26, approved 9, denied 3, and requested additional information on 2.' },
        ],
      },
      {
        id: 'vt-4',
        text: 'Does the district evaluate AI tools against GaDOE’s rubric criteria?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No formal evaluation criteria exist for AI tools. Approval decisions are based on informal impressions, teacher recommendations, or vendor presentations.', note: 'Approving tools without systematic criteria means critical issues, data privacy vulnerabilities, age-inappropriateness, can be missed entirely.', example: 'A vendor presents a demo to the curriculum team. Everyone likes the interface. The tool is approved. No privacy review or age check was conducted.' },
          { score: 1, label: 'Partially in place', description: 'Some evaluation criteria are applied, typically a basic privacy policy review, but the evaluation does not cover GaDOE’s full rubric of educational value, data privacy, usability, cost, and age restrictions.', note: 'Partial evaluation creates partial protection. A tool that passes a privacy check may fail on age restrictions.', example: 'The technology director reviews vendor privacy policies before approval. She does not evaluate educational value, vendor reputation, or age restrictions.' },
          { score: 2, label: 'Mostly in place', description: 'A multi-criteria evaluation process exists that covers most of GaDOE’s rubric dimensions but may not include all of them, or the criteria are not consistently applied.', note: 'Inconsistent application of criteria means some tools receive thorough review while others receive cursory evaluation.', example: 'The review committee uses a 6-criteria checklist. Two of GaDOE’s eight recommended criteria are missing.' },
          { score: 3, label: 'Fully in place', description: 'All AI tool evaluations are conducted against a documented rubric aligned to GaDOE’s criteria, with scores documented for each criterion.', note: 'Systematic rubric-based evaluation produces consistently better tool selections and creates a documented audit trail.', example: 'The AI Review Committee uses a 47-point evaluation rubric aligned to GaDOE’s criteria. Every approved tool has a completed evaluation scorecard on file.' },
        ],
      },
      {
        id: 'vt-5',
        text: 'Are AI tools piloted and tested before district-wide adoption?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No piloting process exists. Tools are approved for district-wide use based on vendor demonstrations and committee review without any real-world classroom testing.', note: 'Tools that look promising in demos often reveal problems in real classrooms, usability issues, unexpected data collection, or technical incompatibility.', example: 'The district approved an AI tutoring platform for all 6th-12th grade math classes based on a vendor presentation. The first week of use revealed it was incompatible with the district’s Chromebooks.' },
          { score: 1, label: 'Partially in place', description: 'Informal classroom testing occurs, a willing teacher tries the tool and reports back informally, but there is no structured pilot protocol or systematic feedback collection.', note: 'Informal testing captures one teacher’s experience and may miss issues that emerge at scale.', example: 'The technology director knows a teacher who ‘tried out’ an AI tool and liked it. The tool was approved. No structured pilot occurred.' },
          { score: 2, label: 'Mostly in place', description: 'A structured pilot occurs with multiple teachers and a defined timeframe, but the feedback process is not systematic or the pilot findings were not formally documented.', note: 'A pilot without documented outcomes doesn’t contribute to the approval record and can’t be referenced if a decision is questioned later.', example: 'Five teachers piloted an AI reading tool for 6 weeks. The technology director gathered informal feedback. No written pilot report exists.' },
          { score: 3, label: 'Fully in place', description: 'All significant AI tool adoptions follow a defined pilot protocol including a minimum 4-week pilot with a diverse cohort of teachers, pre-defined success criteria, and a written pilot report presented to the review committee.', note: 'A structured pilot process ensures the district only deploys tools that work in its actual classrooms with its actual students and infrastructure.', example: 'The 2025-26 pilot of a new AI tutoring tool involved 8 teachers across 3 schools, collected weekly feedback via structured survey, and produced a 12-page pilot report.' },
        ],
      },
      {
        id: 'vt-6',
        text: 'Do formal vendor agreements exist with data use, security, and deletion terms?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No formal vendor agreements exist beyond standard consumer terms of service.', note: 'Consumer terms of service are written to protect vendors, not districts or students. They typically allow broad data use with no contractual remedies for violations.', example: 'The district’s ‘agreement’ with 8 of its 12 AI tools consists of a teacher clicking ‘I agree’ to consumer terms of service.' },
          { score: 1, label: 'Partially in place', description: 'Vendor agreements exist for some major platforms but most AI tools, especially those adopted by individual teachers, have no executed agreements.', note: 'The tools most likely to lack agreements are the ones most likely to be used with student data.', example: 'Google Workspace and Microsoft 365 have executed agreements. The 9 classroom AI tools teachers use have no agreements.' },
          { score: 2, label: 'Mostly in place', description: 'Vendor agreements exist for most approved AI tools, but some are missing key provisions or have not been reviewed by legal counsel.', note: 'An agreement that doesn’t cover key provisions provides false protection.', example: 'The district has agreements with all approved tools, but 4 of them were signed without legal review and don’t include data deletion timelines.' },
          { score: 3, label: 'Fully in place', description: 'Executed, FERPA-reviewed vendor agreements exist for all approved AI tools, including data deletion timelines, breach notification requirements, and annual review requirements.', note: 'Comprehensive vendor agreements are the district’s legal armor.', example: 'The district’s AI coordinator maintains a vendor agreement log with execution dates and review dates. All 11 approved tools have executed agreements reviewed by district counsel.' },
        ],
      },
      {
        id: 'vt-7',
        text: 'Has the district checked age restrictions and age-appropriateness for AI tools?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No age restriction review has been conducted. AI tools with minimum age requirements are in use with students who don’t meet those requirements.', note: 'Using AI tools with students below the tool’s minimum age violates both the vendor’s terms of service and COPPA.', example: 'A middle school teacher has 6th graders (age 11-12) using ChatGPT. OpenAI’s terms prohibit use by anyone under 13.' },
          { score: 1, label: 'Partially in place', description: 'Some age restrictions are known informally, but this has not been systematically checked for all tools or formally communicated to teachers.', note: 'Informal awareness doesn’t prevent violations. Teachers unaware of age restrictions will use tools with ineligible students.', example: 'The technology director has mentioned the ChatGPT age requirement a few times. No formal age review of other tools has occurred.' },
          { score: 2, label: 'Mostly in place', description: 'Age restrictions have been reviewed for most tools and are included in the approved tool list, but some recently adopted tools haven’t been checked.', note: 'Minimum age is only one dimension, tools appropriate for high school students may be developmentally inappropriate for elementary students.', example: 'The approved tool list includes age minimums for 8 of 11 tools. Grade-level appropriateness beyond minimum age hasn’t been evaluated.' },
          { score: 3, label: 'Fully in place', description: 'All AI tools are evaluated for vendor-specified minimum age, COPPA applicability, developmental appropriateness, and content appropriateness, documented and published in the approved tool list.', note: 'Age-appropriate AI tools protect students developmentally, legally, and from potentially inappropriate AI-generated content.', example: 'The district’s tool approval record includes an age/grade matrix for each tool. Three tools approved for high school are explicitly prohibited in middle school.' },
        ],
      },
      {
        id: 'vt-8',
        text: 'Does the district use an independent privacy validation framework (such as TrustEd Apps) for AI tools?',
        levels: [
          { score: 0, label: 'Not in place', description: 'The district has not heard of or used any independent tool validation framework. Privacy reviews consist of a quick review of vendor privacy policies, if that.', note: 'Vendor privacy policies are written by vendor lawyers to minimize vendor liability, not to provide an independent assessment of actual data practices.', example: 'The technology director reads vendor privacy policies and approves tools based on whether the policy ‘looks reasonable.’' },
          { score: 1, label: 'Partially in place', description: 'The district is aware of independent validation frameworks but has not formally incorporated them into the tool review process.', note: 'Awareness without use provides no protection.', example: 'The technology director has looked up a few tools on an independent validation site when a specific concern arose. It is not part of the standard review process.' },
          { score: 2, label: 'Mostly in place', description: 'Independent validation is used for some tool reviews, typically major adoptions, but is not a required step for all tools.', note: 'Inconsistent use of validation tools means some tools receive independent scrutiny while others don’t.', example: 'The district used an independent validation service for its three major AI platform adoptions this year. The 8 classroom tools teachers requested were not reviewed.' },
          { score: 3, label: 'Fully in place', description: 'An independent privacy validation framework is a required step in the AI tool review process for every tool, with scores documented in the tool approval record.', note: 'Independent privacy validation removes reliance on vendor self-reporting and provides defensible, documented evidence of due diligence.', example: 'All 14 tools reviewed in 2025-26 went through an independent validation review as a mandatory step. Two tools were denied approval based on the findings.' },
        ],
      },
    ],
  },

  {
    id: 'staff-readiness',
    order: 4,
    title: 'Staff Readiness & Professional Development',
    tagline: 'Do teachers actually know how to use AI well, and where the lines are?',
    summary:
      "Policy and vetted tools only matter if the people using them day to day understand how to use AI responsibly. This domain looks at whether staff have real, ongoing training, not a single kickoff session years ago that new hires never saw.",
    whatGoodLooksLike: [
      'Training happens on a recurring basis, not just once.',
      'Guidance is specific to different roles, not one-size-fits-all.',
      'Administrators receive their own leadership-specific training, not just the teacher session.',
      'Teacher fears and concerns about AI are actively addressed, not dismissed.',
    ],
    commonGaps: [
      'A single AI training session from years ago that new staff never received.',
      'No guidance distinguishing lesson-planning use from grading use.',
      'No completion tracking, so no one knows who is actually trained.',
      'Teacher anxiety about AI dismissed instead of addressed with real support.',
    ],
    optional: false,
    sources: [
      { label: 'Georgia Department of Education', url: 'https://www.gadoe.org/' },
      { label: 'NIST AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
    ],
    questions: [
      {
        id: 'sr-1',
        text: 'Have all district staff received formal AI professional development?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No formal AI professional development has been provided. Staff are using AI tools based on self-teaching, social media, and word of mouth.', note: 'Untrained staff make decisions based on incomplete understanding. Without formal PD, AI use across the district is uncontrolled and inconsistent.', example: 'Teachers are learning about AI from YouTube videos and colleagues. The district has provided no formal guidance.' },
          { score: 1, label: 'Partially in place', description: 'Some staff have received informal AI exposure, perhaps through a conference or a vendor demonstration, but no district-organized, all-staff formal PD has been delivered.', note: 'Informal exposure creates a two-tier staff: those who attended conferences and know something about AI, and those who don’t.', example: 'Several teachers attended an AI session at a technology conference. Nothing district-wide has been organized.' },
          { score: 2, label: 'Mostly in place', description: 'At least one formal all-staff AI PD session has been delivered, but it was a one-time event or a significant portion of staff missed it.', note: 'One-time PD fades quickly. Without reinforcement and follow-up, the learning doesn’t translate to changed practice.', example: 'The district held a 2-hour AI overview session at the August in-service. 30% of staff were not present. No follow-up has occurred.' },
          { score: 3, label: 'Fully in place', description: 'All district staff have completed formal, structured AI PD covering the AI framework, policy, data privacy, approved tools, and assessment redesign. PD is embedded in the annual calendar and completion is tracked.', note: 'Comprehensively trained staff are your district’s most powerful AI governance mechanism.', example: 'All 247 district staff completed a 6-hour AI PD series in 2025-26, delivered across three modules. Completion was tracked in the HR system.' },
        ],
      },
      {
        id: 'sr-2',
        text: 'Does PD include explicit training on data privacy and prohibition on entering student PII into AI?',
        levels: [
          { score: 0, label: 'Not in place', description: 'Data privacy and PII protection have not been covered in any AI professional development.', note: 'This is the gap most likely to create an actual violation. Teachers using AI tools without data privacy training will inevitably enter student PII.', example: 'The district’s AI PD covered how to use ChatGPT for lesson planning. Data privacy was not mentioned.' },
          { score: 1, label: 'Partially in place', description: 'Data privacy is briefly mentioned in AI training, perhaps a single slide, but is not treated as a substantive topic with practical guidance.', note: 'Cursory mention does not produce behavior change. Teachers need specific, practical guidance.', example: 'The AI training included one slide that said ‘remember FERPA.’ No specific guidance was provided.' },
          { score: 2, label: 'Mostly in place', description: 'Data privacy is a substantive component of AI training and covers the prohibition on entering student PII, but may not include practical anonymization techniques.', note: 'Understanding the rule without understanding how to follow it in practice produces incomplete compliance.', example: 'The AI training included a 20-minute module on FERPA and AI. Teachers understand they can’t enter student names but haven’t been taught how to anonymize data effectively.' },
          { score: 3, label: 'Fully in place', description: 'All staff AI training includes a dedicated data privacy module covering FERPA in plain language, practical anonymization techniques with worked examples, and verification that each participant can apply the guidance.', note: 'Data privacy training is the single highest-ROI professional development investment in the AI context.', example: 'The district’s AI training includes a 45-minute data privacy module with case studies, a PII identification exercise, and a completion quiz. 100% completion is tracked.' },
        ],
      },
      {
        id: 'sr-3',
        text: 'Have teachers received guidance on redesigning assignments for AI-era classrooms?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No guidance on assessment or assignment redesign in the context of AI has been provided.', note: 'Teachers without redesign guidance will either ignore AI, ban it, or allow it without structure. None of these outcomes serve students.', example: 'Teachers are still assigning the same 5-paragraph essays they assigned in 2022. Some ban AI. Some ignore the issue.' },
          { score: 1, label: 'Partially in place', description: 'Some teachers have independently adapted their assignments based on personal research, but the district has provided no formal guidance.', note: 'Individual adaptation is inequitable, students in some classrooms get thoughtful AI-integrated instruction while others don’t.', example: 'The English department chair has redesigned her assessments to incorporate AI critique activities. The other 14 English teachers are doing what they’ve always done.' },
          { score: 2, label: 'Mostly in place', description: 'The district has provided some guidance on assignment redesign, but it was presented once and hasn’t been applied consistently across classrooms.', note: 'General frameworks without subject-specific application and follow-up support don’t translate into changed practice at scale.', example: 'The district shared a one-page ‘AI-era assessment principles’ document at a staff meeting. Most teachers found it too abstract to apply.' },
          { score: 3, label: 'Fully in place', description: 'All teachers have received formal training on AI-era assignment redesign including subject-specific examples, a practical redesign workshop, and follow-up coaching.', note: 'Assignment redesign training is the most transformative professional development a district can provide in the AI era.', example: 'The district’s full-day PD session focused entirely on assignment redesign. 73% of teachers reported using a redesigned assessment within 30 days.' },
        ],
      },
      {
        id: 'sr-4',
        text: 'Have administrators received AI-specific governance and leadership training?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No AI-specific leadership training has been provided to principals or central office administrators.', note: 'Administrators who haven’t been trained can’t support teachers, answer parent questions, or lead AI governance implementation.', example: 'Principals know their teachers are using AI. None of them know what the district’s AI policy requires.' },
          { score: 1, label: 'Partially in place', description: 'Administrators received the same general AI training as teachers but have not received leadership-specific training on governance or community communication.', note: 'Teacher training and leadership training address different competencies. Administrators need governance fluency that goes beyond classroom application.', example: 'Principals attended the August AI PD with their staff. No additional leadership-specific AI content was provided.' },
          { score: 2, label: 'Mostly in place', description: 'Some leadership-specific AI training has been provided, but it was not comprehensive or applied to specific governance responsibilities.', note: 'Partial leadership training creates inconsistency across buildings.', example: 'The superintendent discussed AI governance at a principals’ retreat for 30 minutes. No structured leadership training has been provided.' },
          { score: 3, label: 'Fully in place', description: 'All administrators have completed dedicated AI leadership training covering policy implementation, parent communication, and evaluating AI-enhanced instruction, refreshed annually.', note: 'Trained administrative leaders are the multiplier for every other AI governance investment.', example: 'All 14 district administrators completed a 4-hour AI leadership training in September, including policy implementation scenarios and parent communication practice.' },
        ],
      },
      {
        id: 'sr-5',
        text: 'Is AI professional development integrated into annual requirements?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No AI professional development is planned for the future. Any AI training that has occurred was a one-time response.', note: 'AI regulations, tools, and best practices are changing faster than any other area of school practice.', example: 'The district held AI training last August. Nothing AI-related is on the PD calendar for the rest of the year.' },
          { score: 1, label: 'Partially in place', description: 'There is informal intention to ‘do more AI PD’ but no specific plan or schedule.', note: 'Without a formal schedule, AI PD competes with every other priority and consistently loses.', example: 'The superintendent intends to include more AI content in future PD days but no dates or structure have been planned.' },
          { score: 2, label: 'Mostly in place', description: 'AI PD appears on the calendar for the current year but is scheduled as a single session rather than a recurring series, with no plan for future years.', note: 'A single annual session is better than nothing but insufficient to keep pace with the rate of change in AI.', example: 'AI is on the calendar for one PD day this year. There is no plan for what content will be covered in future years.' },
          { score: 3, label: 'Fully in place', description: 'AI PD is embedded as a recurring component of the annual calendar with a multi-module structure and a multi-year plan outlining skill progression.', note: 'Embedded, recurring AI PD transforms staff capability continuously and keeps the district current with the rapidly evolving AI landscape.', example: 'The district’s 3-year AI PD plan integrates AI content into 4 PD sessions annually, building from fundamentals to advanced AI integration.' },
        ],
      },
      {
        id: 'sr-6',
        text: 'Does the district track staff completion of AI PD and maintain training records?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No tracking or documentation of AI professional development completion exists.', note: 'Without records, the district cannot demonstrate due diligence in a regulatory inquiry or identify staff who need follow-up training.', example: 'AI training has occurred but attendance was not formally recorded.' },
          { score: 1, label: 'Partially in place', description: 'Attendance was taken at some AI training sessions but records are informal and don’t cover all training that has occurred.', note: 'Informal attendance records can be lost or questioned.', example: 'There is a sign-in sheet from August’s AI training somewhere. It hasn’t been entered into any system.' },
          { score: 2, label: 'Mostly in place', description: 'Training completion is tracked in some form but the system is incomplete.', note: 'Incomplete records create gaps that undermine the district’s ability to demonstrate compliance.', example: 'The district has a spreadsheet tracking who attended AI training. It doesn’t include the training content or duration.' },
          { score: 3, label: 'Fully in place', description: 'All AI PD completion is formally documented in the district’s HR system, including training date, content summary, and attestation. Records are maintained for at least 3 years.', note: 'Comprehensive training records are your documentation of due diligence.', example: 'All AI training completion is entered into the district’s HR system within 5 business days of the training. Staff below 100% completion receive follow-up.' },
        ],
      },
      {
        id: 'sr-7',
        text: 'Has the district addressed teacher fears and concerns about AI?',
        levels: [
          { score: 0, label: 'Not in place', description: 'Teacher fears and concerns about AI have not been addressed. Staff may be anxious, resistant, or confused, and have received no support in processing these concerns.', note: 'Unaddressed fear produces resistant, non-compliant, or inconsistent implementation.', example: 'Several teachers have expressed concerns about AI replacing their jobs and about students cheating. These concerns have been dismissed or ignored.' },
          { score: 1, label: 'Partially in place', description: 'Teacher concerns have been acknowledged in passing but no substantive, evidence-based response has been provided.', note: 'Dismissive reassurance without evidence doesn’t resolve fear. It often amplifies it.', example: 'The superintendent said ‘AI is a tool, not a replacement’ at a faculty meeting. This did not visibly reduce teacher anxiety.' },
          { score: 2, label: 'Mostly in place', description: 'Teacher concerns have been substantively addressed in PD, but a formal, ongoing support mechanism doesn’t exist.', note: 'Addressing fears once doesn’t prevent them from recurring as AI evolves and new challenges emerge.', example: 'The August PD dedicated 30 minutes to addressing teacher AI concerns with specific responses. No ongoing support mechanism exists.' },
          { score: 3, label: 'Fully in place', description: 'The district has proactively addressed teacher AI concerns through surveys, evidence-based PD content, peer learning communities, and recognition of teacher AI innovation.', note: 'Teachers who feel heard, supported, and empowered around AI become the district’s most powerful ambassadors for responsible AI adoption.', example: 'The district surveyed all staff on AI concerns in spring 2025. An AI Teacher Community of Practice meets monthly. Teacher AI innovations are featured in the district newsletter.' },
        ],
      },
    ],
  },

  {
    id: 'student-parent-awareness',
    order: 5,
    title: 'Student & Parent Awareness',
    tagline: 'Do the families this policy is meant to protect actually know it exists?',
    summary:
      "A policy that lives entirely inside the administration building doesn't build the community trust it's meant to build. This domain is about whether students and parents know what's happening, understand the district's expectations, and have somewhere to go with questions.",
    whatGoodLooksLike: [
      'Students receive clear, age-appropriate written AI guidelines.',
      'Parents are told which tools their children actually use, with real specifics.',
      'Parents, including parents of students with IEPs or 504 plans, have a real channel to raise concerns.',
      'AI literacy is taught as a subject, not just used silently in the background.',
    ],
    commonGaps: [
      'Parents finding out about a tool from their child, not the school.',
      'Generic "use AI responsibly" guidance with no age-specific detail.',
      'No defined process for IEP/504 parents to raise AI-specific concerns.',
      'No AI literacy instruction anywhere in the curriculum.',
    ],
    optional: false,
    sources: [
      { label: 'Student Privacy Policy Office', url: 'https://studentprivacy.ed.gov/' },
      { label: 'Georgia Department of Education', url: 'https://www.gadoe.org/' },
    ],
    questions: [
      {
        id: 'sp-1',
        text: 'Do students have clear, age-appropriate written AI guidelines?',
        levels: [
          { score: 0, label: 'Not in place', description: 'Students have received no formal guidance on AI use expectations in school. Each teacher communicates (or doesn’t communicate) AI rules independently.', note: 'Students without clear guidelines will make self-directed decisions about AI use that range from overly restrictive to completely unguarded.', example: 'Different teachers have completely different AI rules. Students are confused and routinely receive conflicting guidance.' },
          { score: 1, label: 'Partially in place', description: 'Some teachers have communicated AI expectations in their individual classrooms, but no district-wide, consistent student-facing guidelines exist.', note: 'Classroom-by-classroom rules create inequity and confusion. Students who move between teachers face shifting expectations.', example: 'Some teachers have added AI expectations to their course syllabi. Others haven’t mentioned AI at all.' },
          { score: 2, label: 'Mostly in place', description: 'District-level student AI guidelines exist and have been communicated, but they are too general to be practically useful or haven’t reached all students.', note: 'Generic guidelines (‘use AI responsibly’) without specific, age-appropriate guidance don’t produce consistent behavior.', example: 'The district published a one-page ‘Student AI Guidelines’ document. It was emailed to parents in September. Most students haven’t read it.' },
          { score: 3, label: 'Fully in place', description: 'Age-appropriate, specific student AI guidelines exist for each grade band covering approved tools, disclosure requirements, and consequences for misuse, taught, not just distributed.', note: 'Clear student AI guidelines are the foundation of academic integrity in the AI era.', example: 'The district has a grade-band-specific AI Student Guide (K-5, 6-8, 9-12), taught in the first week through advisory or homeroom.' },
        ],
      },
      {
        id: 'sp-2',
        text: 'Has the district established COPPA-compliant parental consent for AI tools used by under-13 students?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No parental consent process exists for AI tools used with students under 13.', note: 'This is an active COPPA violation. The FTC holds districts responsible for ensuring consent is obtained.', example: 'Elementary students across the district are using AI tools. No parent has been asked for consent.' },
          { score: 1, label: 'Partially in place', description: 'COPPA compliance is being considered, perhaps a consent form is being drafted, but no consent process has been implemented.', note: 'Intention without action provides no legal protection.', example: 'The district is ‘working on’ a consent process. Meanwhile, elementary students continue using AI tools without consent.' },
          { score: 2, label: 'Mostly in place', description: 'A consent process exists for some AI tools or grade levels, but it may not meet COPPA’s ‘verifiable’ consent standard.', note: 'COPPA requires ‘verifiable parental consent’, not just notice.', example: 'The district included AI tool use in last year’s acceptable use agreement, which doesn’t meet the verifiable consent standard.' },
          { score: 3, label: 'Fully in place', description: 'A comprehensive COPPA compliance process identifies all relevant tools, obtains verifiable parental consent, and reviews the tool list annually.', note: 'COPPA compliance is both a legal requirement and a trust-building opportunity.', example: 'The district’s annual enrollment packet includes a COPPA AI Tool Consent form listing all AI tools used in grades K-8 that collect student information.' },
        ],
      },
      {
        id: 'sp-3',
        text: 'Are parents informed about what AI tools their children’s teachers are using?',
        levels: [
          { score: 0, label: 'Not in place', description: 'Parents have received no information about AI tools in use in their children’s classrooms.', note: 'Uninformed parents are surprised parents. The first time a parent learns about an AI tool is the worst possible time, through a negative news story.', example: 'Parents have no idea which AI tools their children’s teachers use.' },
          { score: 1, label: 'Partially in place', description: 'Some teachers mention AI tools in their course syllabi, but there is no district-wide systematic parent notification.', note: 'Teacher-by-teacher notification is inconsistent and incomplete.', example: 'Three teachers mention their AI tools in the course syllabus. The other 40 do not.' },
          { score: 2, label: 'Mostly in place', description: 'The district has communicated that AI tools are used in classrooms, but hasn’t provided specifics about which tools or what data they collect.', note: 'General communication without specifics leaves parents informed in name only.', example: 'The district sent a newsletter mentioning that ‘teachers may use AI tools to support instruction.’ No tools were named.' },
          { score: 3, label: 'Fully in place', description: 'Parents receive comprehensive, accessible information through an annual notification, a published approved tool list, and grade-level classroom communication.', note: 'Transparent parent communication about AI tools builds the community trust that makes AI adoption sustainable.', example: 'The district publishes an annual AI Tool Transparency Report on its website. Teachers send home a classroom-specific AI tool notice in the first week.' },
        ],
      },
      {
        id: 'sp-4',
        text: 'Does the district engage parents as stakeholders in AI policy, not just notification recipients?',
        levels: [
          { score: 0, label: 'Not in place', description: 'Parents have had no role in AI policy development or implementation.', note: 'AI policy developed without parent input lacks community legitimacy.', example: 'The AI policy was developed and adopted without any parent involvement.' },
          { score: 1, label: 'Partially in place', description: 'Parents have been notified about AI policy but have not been given a meaningful opportunity to provide input.', note: 'Notification without engagement doesn’t satisfy the standard of transparent, inclusive policy development.', example: 'The district sent parents a copy of the new AI policy after board adoption and asked them to contact the office with questions. No one called.' },
          { score: 2, label: 'Mostly in place', description: 'A parent feedback mechanism exists, but parent input hasn’t demonstrably influenced policy decisions.', note: 'Engagement that doesn’t visibly influence outcomes feels performative and undermines trust.', example: 'The district held a parent community forum on AI. 22 parents attended. Their feedback was noted but there is no evidence it shaped the final policy.' },
          { score: 3, label: 'Fully in place', description: 'Parents are genuinely engaged through committee representation, structured feedback before policy adoption, and annual updates on how feedback shaped decisions.', note: 'Genuine parent engagement builds the community trust that is the foundation of sustainable AI adoption.', example: 'Parent representatives serve on the AI Tool Review Committee. An annual AI Town Hall presents the year’s governance decisions.' },
        ],
      },
      {
        id: 'sp-5',
        text: 'Does the district have a process for parents of IEP/504 students to raise AI concerns?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No specific process exists for parents of students with IEPs or 504 plans to raise concerns about AI tool use.', note: 'A district that doesn’t provide a meaningful process for exercising these rights is potentially in violation of both IDEA and Section 504.', example: 'A parent learns that their child’s special education teacher has been using AI to generate IEP goals. There is no defined process for raising this concern.' },
          { score: 1, label: 'Partially in place', description: 'Parents can raise concerns through general parent communication channels, but staff are not trained to recognize or respond to AI-related IEP/504 concerns.', note: 'Without a defined process, AI-related concerns get triaged informally and may not reach the right decision-makers.', example: 'An IEP parent can email their child’s case manager, but the case manager isn’t sure how to respond and there’s no escalation path.' },
          { score: 2, label: 'Mostly in place', description: 'A defined process exists, but it has not been communicated to parents or staff aren’t trained to respond.', note: 'A process that exists but isn’t known or implemented provides no practical protection.', example: 'The AI policy mentions parents of IEP students can contact the special education director. This was not communicated to any IEP family.' },
          { score: 3, label: 'Fully in place', description: 'A specific, documented process exists with a designated contact, defined response timeline, and communication of these rights in annual parent notification materials.', note: 'A clear AI concern process for IEP and 504 families demonstrates the district’s commitment to its most vulnerable students.', example: 'All IEP annual review meetings now include a standing agenda item: AI tools used with this student.' },
        ],
      },
      {
        id: 'sp-6',
        text: 'Are students taught AI literacy as a subject?',
        levels: [
          { score: 0, label: 'Not in place', description: 'Students are not taught about AI, what it is, how it works, or its limitations. AI is used in classrooms but not taught as a subject.', note: 'Students who use AI tools without understanding them are vulnerable to misinformation, over-reliance, and manipulation.', example: 'Students use AI tools in multiple classes. None of them have been taught how AI actually works or why it sometimes gives wrong answers.' },
          { score: 1, label: 'Partially in place', description: 'Some teachers address AI literacy incidentally, but there is no intentional, district-wide AI literacy curriculum.', note: 'Incidental AI literacy is inconsistent and insufficient.', example: 'The computer science teacher covers AI in her class. No other subject-area teachers address AI literacy in any structured way.' },
          { score: 2, label: 'Mostly in place', description: 'AI literacy content exists in at least one course or grade level, but it is not embedded across subject areas and does not reach all students.', note: 'AI literacy limited to technology classes misses the reality that AI affects every subject.', example: '8th grade technology students get a unit on AI. Students who don’t take that elective receive no AI literacy instruction.' },
          { score: 3, label: 'Fully in place', description: 'AI literacy is intentionally embedded across subject areas and grade levels with a district-wide scope and sequence covering how AI works, algorithmic bias, and ethical use.', note: 'AI literacy instruction is the most future-facing investment a district can make.', example: 'The district has a K-12 AI literacy scope and sequence integrated into ELA, social studies, science, and math.' },
        ],
      },
    ],
  },

  {
    id: 'infrastructure-security',
    order: 6,
    title: 'Infrastructure & Cybersecurity',
    tagline: 'Optional deep dive, how well do AI platforms fit into the district’s broader security posture?',
    summary:
      "This domain is marked optional because it overlaps with a district's general cybersecurity program, which may already be assessed elsewhere. Included here for districts that want to specifically examine how AI platforms interact with authentication, monitoring, and incident response.",
    whatGoodLooksLike: [
      'MFA is enabled and enforced on all staff accounts, not just some.',
      'A cybersecurity risk assessment has actually been conducted in the last 24 months.',
      'Phishing awareness training is current and includes real simulation, not a passive video.',
      'Access to AI platforms is removed promptly when staff leave.',
    ],
    commonGaps: [
      'MFA required for some systems but not all, the gap becomes the target.',
      'No cybersecurity risk assessment ever conducted by an independent party.',
      'Phishing training that was a one-time video years ago.',
      'Former staff accounts on AI platforms still active months after departure.',
    ],
    optional: true,
    sources: [
      { label: 'CISA, Cybersecurity & Infrastructure Security Agency', url: 'https://www.cisa.gov/' },
      { label: 'NIST AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
    ],
    questions: [
      {
        id: 'is-1',
        text: 'Does the district have MFA enabled on all staff accounts?',
        levels: [
          { score: 0, label: 'Not in place', description: 'Multi-factor authentication is not enabled on staff accounts. Staff access email, student information systems, AI platforms, and other sensitive systems with username and password only.', note: 'MFA absence was the root cause of the December 2024 PowerSchool breach, the largest breach of children’s data in U.S. history.', example: 'A teacher’s email password is compromised in a phishing attack. The attacker now has access to the teacher’s email, grades, and any AI platforms, all with one password.' },
          { score: 1, label: 'Partially in place', description: 'MFA is enabled for some staff accounts or some systems, perhaps for administrators but not all teachers.', note: 'Partial MFA creates a security perimeter with holes. Attackers target the weakest entry point.', example: 'MFA is required for administrator accounts. The 180 teacher accounts in the district still use password-only authentication.' },
          { score: 2, label: 'Mostly in place', description: 'MFA is enabled for most staff accounts and most systems, but some exceptions exist, perhaps temporary accounts or legacy systems.', note: 'Exceptions are vulnerabilities. Ransomware actors specifically target accounts without MFA.', example: 'MFA is required for all staff on Google Workspace. The student information system still uses password-only authentication.' },
          { score: 3, label: 'Fully in place', description: 'MFA is enabled and enforced on all staff accounts across all district systems, including AI platforms with administrative access. Compliance is reviewed quarterly.', note: 'MFA is the single highest-ROI cybersecurity control available to school districts, blocking over 99% of automated account compromise attacks.', example: 'The technology director reviews MFA compliance monthly. Non-compliant accounts are flagged within 24 hours.' },
        ],
      },
      {
        id: 'is-2',
        text: 'Does the district have a written incident response plan for AI vendor data breaches?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No written incident response plan exists for any data breach scenario.', note: 'Georgia O.C.G.A. §10-1-912 requires breach notification within 30 days. Without a plan, districts routinely miss deadlines or fail to contain the breach promptly.', example: 'A vendor notifies the district of a breach affecting student data. The superintendent spends the first 3 days trying to figure out who to call.' },
          { score: 1, label: 'Partially in place', description: 'A general IT incident response plan exists but doesn’t specifically address AI vendor data breaches or student data notification requirements.', note: 'A general plan is not sufficient for a student data breach. The stakeholders and notification obligations are fundamentally different.', example: 'The district has a ransomware response protocol. It doesn’t address what to do when an AI vendor is breached.' },
          { score: 2, label: 'Mostly in place', description: 'A breach response plan addressing student data exists, but it has never been tested or key staff don’t know it exists.', note: 'An untested plan fails under real conditions.', example: 'District counsel drafted a breach response plan 18 months ago. The principals, IT director, and communications director have not seen it.' },
          { score: 3, label: 'Fully in place', description: 'A comprehensive, tested AI vendor breach response plan covers containment, notification chain, Georgia O.C.G.A. §10-1-912 compliance, and is exercised via annual tabletop simulation.', note: 'A tested breach response plan converts a crisis from chaos into a managed process.', example: 'The district conducts an annual tabletop breach response exercise. The October 2025 exercise simulated an AI tutoring platform breach affecting 1,200 student records.' },
        ],
      },
      {
        id: 'is-3',
        text: 'Has the district conducted a cybersecurity risk assessment in the past 24 months?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No formal cybersecurity risk assessment has been conducted. The district has no documented picture of its current vulnerabilities.', note: 'You cannot manage risks you haven’t identified. Unassessed districts typically have significant vulnerabilities that are known attack vectors.', example: 'The district has never had a formal cybersecurity assessment.' },
          { score: 1, label: 'Partially in place', description: 'Some elements of a security review have occurred, perhaps a network scan, but a comprehensive risk assessment covering all systems and vendors has not been conducted.', note: 'Partial assessments identify partial risks. Unreviewed areas remain unmanaged vulnerabilities.', example: 'The technology director ran a vulnerability scan on the district’s network last year. Vendor security practices and AI platform risks were not assessed.' },
          { score: 2, label: 'Mostly in place', description: 'A formal risk assessment was conducted within the past 24 months, but findings haven’t been fully addressed or it didn’t cover AI-specific risks.', note: 'An assessment without remediation is an inventory of vulnerabilities, not a security improvement.', example: 'A cybersecurity firm assessed the district’s network security 18 months ago. 14 vulnerabilities were identified. 8 remain open.' },
          { score: 3, label: 'Fully in place', description: 'A comprehensive assessment has been conducted within the past 24 months by a qualified independent assessor, covering network security, vendor risk, and AI-specific risks, with a prioritized remediation plan.', note: 'An independent assessment gives the district a complete picture of its actual risk posture, including risks it doesn’t know about.', example: 'The district commissioned an independent assessment in fall 2024. 17 of 22 findings have been remediated. The district used the assessment to support a CISA grant application.' },
        ],
      },
      {
        id: 'is-4',
        text: 'Has all district staff received phishing awareness training in the past 12 months?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No phishing awareness training has been provided to district staff.', note: 'Phishing is responsible for the majority of school district ransomware attacks, including the December 2024 PowerSchool breach.', example: 'A teacher receives a convincing phishing email appearing to be from Google. She complies. Her account, and every system it accesses, is compromised.' },
          { score: 1, label: 'Partially in place', description: 'Some staff have received phishing training, but it is not current, not district-wide, or not based on realistic simulations.', note: 'Old training is ineffective training. Phishing techniques evolve rapidly.', example: 'New hires receive a cybersecurity orientation that includes phishing awareness. Staff hired before 2023 have not received any phishing training.' },
          { score: 2, label: 'Mostly in place', description: 'A district-wide phishing training has been delivered within the past 12 months, but it was a passive presentation rather than a simulated exercise.', note: 'Passive awareness training is significantly less effective than simulation-based training.', example: 'The district showed a 20-minute phishing awareness video at the August in-service. No phishing simulation tests have been conducted.' },
          { score: 3, label: 'Fully in place', description: 'All staff have completed annual phishing training within the past 12 months, including simulated phishing exercises with feedback for staff who click.', note: 'Phishing training is the most effective per-dollar security investment available.', example: 'The district runs monthly simulated phishing exercises. Staff click rates have declined from 23% in 2023 to 4% in 2025.' },
        ],
      },
      {
        id: 'is-5',
        text: 'Does the district have adequate infrastructure for equitable AI tool access?',
        levels: [
          { score: 0, label: 'Not in place', description: 'Significant infrastructure gaps exist, inadequate bandwidth, insufficient device access, or unreliable connectivity, that prevent meaningful AI tool use by a substantial portion of students.', note: 'Infrastructure gaps create an AI equity divide within the district itself.', example: 'The district’s rural schools have bandwidth insufficient to support AI tools for more than a few concurrent users.' },
          { score: 1, label: 'Partially in place', description: 'Infrastructure supports AI tool access for most students in most locations, but significant gaps remain for specific schools or home access.', note: 'Partial infrastructure creates partial equity.', example: 'In-school AI tool access is generally adequate. Approximately 35% of students lack sufficient home internet access.' },
          { score: 2, label: 'Mostly in place', description: 'Infrastructure is generally adequate for current AI tool deployment but has not been assessed for scalability as adoption expands.', note: 'Infrastructure that works for current AI tool use may not scale. Planning ahead is less expensive than reactive remediation.', example: 'Current AI tools function adequately on the existing infrastructure. A planned district-wide AI tutoring deployment next year will exceed current bandwidth capacity.' },
          { score: 3, label: 'Fully in place', description: 'All students have equitable access to devices and connectivity, with a documented plan addressing home access gaps and an infrastructure refresh cycle.', note: 'Equitable infrastructure access ensures that AI-enhanced learning benefits every student, not just those in well-resourced locations.', example: 'The district completed a 1:1 device deployment. A hotspot lending program addresses home access gaps. The technology plan includes a 3-year AI infrastructure roadmap.' },
        ],
      },
      {
        id: 'is-6',
        text: 'Are there access controls limiting AI platform access to authorized staff only?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No formal access controls exist for AI platforms. Any staff member can create accounts or access administrative functions.', note: 'Excessive access creates excessive exposure. The broader the access, the greater the potential harm.', example: 'Any teacher can create an administrative account on the district’s AI platforms. Departed staff accounts are not removed.' },
          { score: 1, label: 'Partially in place', description: 'Access controls exist for major platforms but AI-specific tools adopted by teachers have no formal access control review.', note: 'AI tools that lack access controls often have broader data visibility than teachers realize.', example: 'The student information system has role-based access controls. The AI tutoring tools have no formal access control management.' },
          { score: 2, label: 'Mostly in place', description: 'Access controls are applied to AI platforms during initial deployment, but are not regularly reviewed or accounts for departed staff are not promptly removed.', note: 'Access controls that aren’t maintained become less effective over time.', example: 'Access controls were configured when AI tools were deployed. Accounts for 4 teachers who left last year are still active.' },
          { score: 3, label: 'Fully in place', description: 'Role-based access controls follow the principle of least privilege, are reviewed quarterly, and accounts are removed within 24 hours of departure.', note: 'Proper access controls significantly limit the blast radius of any security incident or insider threat.', example: 'The district’s IT department configures role-based access for every new AI platform. Last quarter’s review identified and removed 7 orphaned accounts.' },
        ],
      },
      {
        id: 'is-7',
        text: 'Does the district have a process to remove AI tool access when staff leave?',
        levels: [
          { score: 0, label: 'Not in place', description: 'No formal offboarding process exists for AI tool access. Departed staff accounts remain active indefinitely.', note: 'Active accounts for departed staff are a known, documented attack vector.', example: 'A teacher who resigned in June still has active accounts on 4 AI platforms in October.' },
          { score: 1, label: 'Partially in place', description: 'IT removes access to major systems during offboarding, but AI tools adopted by individual teachers are not included in the offboarding checklist.', note: 'Partial offboarding creates partial security.', example: 'Departed staff lose Google Workspace access on their last day. None of the AI tools they were using have been reviewed.' },
          { score: 2, label: 'Mostly in place', description: 'AI tools are on the offboarding checklist and access is generally removed, but the process depends on manual steps that are sometimes missed or delayed.', note: 'Delays in access removal leave a window of vulnerability.', example: 'AI tools are on the offboarding checklist. In practice, IT processes the list within 3-5 days of receiving it from HR.' },
          { score: 3, label: 'Fully in place', description: 'A comprehensive, automated offboarding process removes AI tool access on or before departure, with quarterly reconciliation to catch anything that slipped through.', note: 'A disciplined offboarding process for AI tools closes one of the most common attack vectors documented in edtech breach history.', example: 'HR departure notifications trigger an automated offboarding ticket. IT completes access removal within 24 hours of departure.' },
        ],
      },
    ],
  },
]

export const DOMAINS_BY_ID = Object.fromEntries(DOMAINS.map((d) => [d.id, d]))

export const TOTAL_QUESTION_COUNT = DOMAINS.reduce((sum, d) => sum + d.questions.length, 0)
