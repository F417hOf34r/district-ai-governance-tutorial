import { Document, Page, Text, View } from '@react-pdf/renderer'
import { pdfStyles } from './theme.js'
import { DocHeader, DocFooter } from './PdfChrome.jsx'

const SCHEDULE = [
  {
    when: 'Quarter 1',
    topic: 'Policy status and adoption',
    detail: 'Report whether the AI acceptable-use policy is adopted, posted, and communicated to staff, students, and parents.',
  },
  {
    when: 'Quarter 2',
    topic: 'Tool inventory and vendor review',
    detail: 'Report the current approved AI tool list, any vendor risk assessments completed, and any tools removed for non-compliance.',
  },
  {
    when: 'Quarter 3',
    topic: 'Staff readiness and training',
    detail: 'Report staff training completion rates and any professional development delivered on AI use and data privacy.',
  },
  {
    when: 'Quarter 4',
    topic: 'Risk register and annual reassessment',
    detail: 'Review the risk register, close or update items, and retake the self-assessment to measure year-over-year progress.',
  },
]

export default function BoardCadence({ intake, result }) {
  const weakest = [...result.byDomain]
    .filter((d) => !d.skipped)
    .sort((a, b) => (a.earnedPoints / a.maxPoints) - (b.earnedPoints / b.maxPoints))
    .slice(0, 2)

  return (
    <Document title="Board Reporting Cadence">
      <Page size="LETTER" style={pdfStyles.page}>
        <DocHeader eyebrow="Board Reporting Cadence" title="Recommended Reporting Schedule" districtName={intake.districtName} />

        <Text style={pdfStyles.paragraph}>
          A standing quarterly reporting cadence keeps AI governance and cybersecurity readiness
          as an ongoing board topic rather than a one-time briefing. Based on your assessment
          results, near-term reports should give particular attention to{' '}
          {weakest.map((d) => d.title).join(' and ')}.
        </Text>

        {SCHEDULE.map((item) => (
          <View key={item.when} style={{ marginBottom: 12 }} wrap={false}>
            <Text style={{ fontFamily: 'Helvetica-Bold', fontSize: 11, marginBottom: 2 }}>
              {item.when}: {item.topic}
            </Text>
            <Text style={pdfStyles.paragraph}>{item.detail}</Text>
          </View>
        ))}

        <Text style={pdfStyles.sectionTitle}>Standing agenda items</Text>
        <View style={pdfStyles.bullet}>
          <Text style={pdfStyles.bulletMark}>-</Text>
          <Text style={pdfStyles.bulletText}>Any AI-related incident or data privacy concern since the last report.</Text>
        </View>
        <View style={pdfStyles.bullet}>
          <Text style={pdfStyles.bulletMark}>-</Text>
          <Text style={pdfStyles.bulletText}>Status of open risk register items and their owners.</Text>
        </View>
        <View style={pdfStyles.bullet}>
          <Text style={pdfStyles.bulletMark}>-</Text>
          <Text style={pdfStyles.bulletText}>Any new AI tools proposed for adoption since the last report.</Text>
        </View>

        <DocFooter />
      </Page>
    </Document>
  )
}
