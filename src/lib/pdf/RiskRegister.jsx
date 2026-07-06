import { Document, Page, Text, View } from '@react-pdf/renderer'
import { DOMAINS } from '../../data/rubric.js'
import { pdfStyles } from './theme.js'
import { DocHeader, DocFooter } from './PdfChrome.jsx'

export default function RiskRegister({ intake, answers, skippedOptional }) {
  const rows = []
  DOMAINS.forEach((domain) => {
    if (domain.optional && skippedOptional) return
    domain.questions.forEach((q) => {
      const score = answers[q.id]
      if (typeof score !== 'number' || score > 1) return
      rows.push({
        id: q.id,
        domain: domain.title,
        risk: q.text,
        severity: score === 0 ? 'High' : 'Medium',
      })
    })
  })

  return (
    <Document title="Risk Register Template">
      <Page size="LETTER" style={pdfStyles.page}>
        <DocHeader eyebrow="Risk Register Template" title="AI Governance Risk Register" districtName={intake.districtName} />

        <Text style={pdfStyles.paragraph}>
          Each row below is drawn from a gap identified in your self-assessment. Likelihood and
          Owner are left blank for your team to fill in during review.
        </Text>

        {rows.length === 0 ? (
          <Text style={pdfStyles.paragraph}>No gaps scored "Not in place" or "Partially in place" were identified.</Text>
        ) : (
          <View style={pdfStyles.table}>
            <View style={pdfStyles.tableHeaderRow} fixed>
              <Text style={[pdfStyles.tableHeaderCell, { width: '13%' }]}>Domain</Text>
              <Text style={[pdfStyles.tableHeaderCell, { width: '37%' }]}>Risk</Text>
              <Text style={[pdfStyles.tableHeaderCell, { width: '12%' }]}>Severity</Text>
              <Text style={[pdfStyles.tableHeaderCell, { width: '18%' }]}>Likelihood</Text>
              <Text style={[pdfStyles.tableHeaderCell, { width: '20%' }]}>Owner</Text>
            </View>
            {rows.map((row) => (
              <View key={row.id} style={pdfStyles.tableRow} wrap={false}>
                <Text style={[pdfStyles.tableCell, { width: '13%' }]}>{row.domain}</Text>
                <Text style={[pdfStyles.tableCell, { width: '37%' }]}>{row.risk}</Text>
                <Text style={[pdfStyles.tableCell, { width: '12%' }]}>{row.severity}</Text>
                <Text style={[pdfStyles.tableCell, { width: '18%' }]}>To assess</Text>
                <Text style={[pdfStyles.tableCell, { width: '20%' }]}> </Text>
              </View>
            ))}
          </View>
        )}

        <DocFooter />
      </Page>
    </Document>
  )
}
