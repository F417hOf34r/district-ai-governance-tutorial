import { Document, Page, Text, View } from '@react-pdf/renderer'
import { pdfStyles } from './theme.js'
import { DocHeader, DocFooter } from './PdfChrome.jsx'

const SECTION_TEMPLATES = {
  'policy-governance': {
    heading: 'Purpose, scope, and ownership',
    items: [
      'State the policy\'s purpose: to govern the use of artificial intelligence tools by staff and students district-wide.',
      'Name a single accountable owner for AI policy implementation and updates.',
      'Set a review schedule (at minimum annually) and a process for board re-adoption.',
      'Describe how staff, students, and parents had input into this policy.',
    ],
  },
  'data-privacy': {
    heading: 'Data privacy and legal compliance',
    items: [
      'State the policy\'s alignment with FERPA, COPPA, and IDEA.',
      'Define what student data may and may not be entered into an AI tool.',
      'Require a data processing agreement review before any new AI vendor is approved.',
      'Describe parental notification and consent procedures for AI tools that process student data.',
    ],
  },
  'vendor-tools': {
    heading: 'Approved tools and acceptable use',
    items: [
      'Maintain a single, published list of approved AI tools.',
      'Define a vetting process a tool must pass before staff may adopt it.',
      'Use a traffic light structure (prohibited, restricted, permitted) to classify specific AI uses.',
      'Set a recurring review cycle for tools already on the approved list.',
    ],
  },
}

const DOMAIN_LABELS = {
  'policy-governance': 'Policy & Governance',
  'data-privacy': 'Data Privacy & Legal Compliance',
  'vendor-tools': 'AI Tool Inventory & Vendor Vetting',
}

export default function PolicyOutline({ intake, result }) {
  const orderedDomains = ['policy-governance', 'data-privacy', 'vendor-tools']
    .map((id) => result.byDomain.find((d) => d.id === id))
    .filter(Boolean)
    .sort((a, b) => (a.earnedPoints / a.maxPoints) - (b.earnedPoints / b.maxPoints))

  return (
    <Document title="AI Acceptable-Use Policy Outline">
      <Page size="LETTER" style={pdfStyles.page}>
        <DocHeader eyebrow="AI Acceptable-Use Policy Outline" title="Starter Policy Structure" districtName={intake.districtName} />

        <Text style={pdfStyles.paragraph}>
          This is a starting outline, not a finished policy. Sections are ordered by how your
          district scored on the related assessment domain, so the area needing the most
          attention appears first.
        </Text>

        {orderedDomains.map((domain, index) => {
          const pct = Math.round((domain.earnedPoints / domain.maxPoints) * 100)
          const template = SECTION_TEMPLATES[domain.id]
          const priority = pct < 40 ? 'High priority' : pct < 70 ? 'Medium priority' : 'Lower priority'
          return (
            <View key={domain.id} wrap={false}>
              <Text style={pdfStyles.sectionTitle}>
                {index + 1}. {template.heading} ({DOMAIN_LABELS[domain.id]})
              </Text>
              <Text style={pdfStyles.muted}>
                Current score: {domain.earnedPoints} / {domain.maxPoints} ({pct}%), {priority}
              </Text>
              {template.items.map((item) => (
                <View key={item} style={pdfStyles.bullet}>
                  <Text style={pdfStyles.bulletMark}>-</Text>
                  <Text style={pdfStyles.bulletText}>{item}</Text>
                </View>
              ))}
            </View>
          )
        })}

        <Text style={pdfStyles.sectionTitle}>Enforcement and communication</Text>
        <View style={pdfStyles.bullet}>
          <Text style={pdfStyles.bulletMark}>-</Text>
          <Text style={pdfStyles.bulletText}>Define consequences for policy violations, for both staff and students.</Text>
        </View>
        <View style={pdfStyles.bullet}>
          <Text style={pdfStyles.bulletMark}>-</Text>
          <Text style={pdfStyles.bulletText}>Add this policy to both the staff and student handbooks.</Text>
        </View>
        <View style={pdfStyles.bullet}>
          <Text style={pdfStyles.bulletMark}>-</Text>
          <Text style={pdfStyles.bulletText}>Train all staff on the policy before the start of each school year.</Text>
        </View>

        <DocFooter />
      </Page>
    </Document>
  )
}
