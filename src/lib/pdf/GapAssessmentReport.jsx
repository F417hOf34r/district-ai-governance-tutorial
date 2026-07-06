import { Document, Page, Text, View } from '@react-pdf/renderer'
import { DOMAINS } from '../../data/rubric.js'
import { pdfStyles } from './theme.js'
import { DocHeader, DocFooter } from './PdfChrome.jsx'

export default function GapAssessmentReport({ intake, result, tier, answers, skippedOptional }) {
  const weakestFirst = [...result.byDomain]
    .filter((d) => !d.skipped)
    .sort((a, b) => (a.earnedPoints / a.maxPoints) - (b.earnedPoints / b.maxPoints))

  return (
    <Document title="Gap Assessment Report">
      <Page size="LETTER" style={pdfStyles.page}>
        <DocHeader eyebrow="Gap Assessment Report" title="District AI Governance Readiness" districtName={intake.districtName} />

        <Text style={pdfStyles.sectionTitle}>Overall score</Text>
        <Text style={pdfStyles.paragraph}>
          {result.totalEarned} of {result.totalMax} points ({result.percent}%), {tier.label}
        </Text>
        <Text style={pdfStyles.paragraph}>{tier.description}</Text>
        <Text style={pdfStyles.muted}>
          {result.totalAnswered} of {result.totalQuestions} questions answered
          {skippedOptional ? '. Infrastructure and Cybersecurity was skipped and excluded from this score.' : '.'}
        </Text>

        <Text style={pdfStyles.sectionTitle}>Score by domain</Text>
        <View style={pdfStyles.tableHeaderRow}>
          <Text style={[pdfStyles.tableHeaderCell, { width: '55%' }]}>Domain</Text>
          <Text style={[pdfStyles.tableHeaderCell, { width: '20%' }]}>Score</Text>
          <Text style={[pdfStyles.tableHeaderCell, { width: '25%' }]}>Percent</Text>
        </View>
        {result.byDomain.map((d) => (
          <View key={d.id} style={pdfStyles.tableRow}>
            <Text style={[pdfStyles.tableCell, { width: '55%' }]}>{d.title}</Text>
            <Text style={[pdfStyles.tableCell, { width: '20%' }]}>
              {d.skipped ? 'Skipped' : `${d.earnedPoints} / ${d.maxPoints}`}
            </Text>
            <Text style={[pdfStyles.tableCell, { width: '25%' }]}>
              {d.skipped ? '-' : `${Math.round((d.earnedPoints / d.maxPoints) * 100)}%`}
            </Text>
          </View>
        ))}

        <Text style={pdfStyles.sectionTitle}>Priority gaps</Text>
        <Text style={pdfStyles.muted}>Questions scored "Not in place" or "Partially in place."</Text>
        {DOMAINS.map((domain) => {
          if (domain.optional && skippedOptional) return null
          const gaps = domain.questions.filter((q) => {
            const score = answers[q.id]
            return typeof score === 'number' && score <= 1
          })
          if (gaps.length === 0) return null
          return (
            <View key={domain.id} style={{ marginTop: 8 }}>
              <Text style={{ fontFamily: 'Helvetica-Bold', fontSize: 10, marginBottom: 3 }}>{domain.title}</Text>
              {gaps.map((q) => {
                const level = q.levels.find((l) => l.score === answers[q.id])
                return (
                  <View key={q.id} style={pdfStyles.bullet}>
                    <Text style={pdfStyles.bulletMark}>-</Text>
                    <Text style={pdfStyles.bulletText}>[{level.label}] {q.text}</Text>
                  </View>
                )
              })}
            </View>
          )
        })}

        <Text style={pdfStyles.sectionTitle}>Recommended next steps</Text>
        <View style={pdfStyles.bullet}>
          <Text style={pdfStyles.bulletMark}>1.</Text>
          <Text style={pdfStyles.bulletText}>
            Start with {weakestFirst[0]?.title ?? 'your lowest-scoring domain'}, the lowest-scoring
            domain in this assessment, and assign a single owner to close its highest-severity gaps.
          </Text>
        </View>
        <View style={pdfStyles.bullet}>
          <Text style={pdfStyles.bulletMark}>2.</Text>
          <Text style={pdfStyles.bulletText}>
            Use the AI Acceptable-Use Policy Outline and Risk Register generated alongside this
            report as a starting draft rather than writing either document from scratch.
          </Text>
        </View>
        <View style={pdfStyles.bullet}>
          <Text style={pdfStyles.bulletMark}>3.</Text>
          <Text style={pdfStyles.bulletText}>
            Put governance on a recurring board agenda using the Board Reporting Cadence, so
            progress is tracked on a schedule rather than only revisited after an incident.
          </Text>
        </View>

        <DocFooter />
      </Page>
    </Document>
  )
}
