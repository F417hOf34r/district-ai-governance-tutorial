import { StyleSheet } from '@react-pdf/renderer'

// Only Helvetica, Times-Roman, and Courier are built into @react-pdf/renderer without
// registering an external font file, which would require a network call at render time.
// Times-Roman echoes the site's Georgia heading font; Helvetica covers body copy.

export const COLORS = {
  gold: '#9a7a2e',
  textDark: '#161616',
  textMuted: '#4a4a4a',
  border: '#dddddd',
  bgSubtle: '#f7f5ef',
}

export const pdfStyles = StyleSheet.create({
  page: {
    padding: 48,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: COLORS.textDark,
  },
  eyebrow: {
    fontSize: 9,
    color: COLORS.gold,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  title: {
    fontFamily: 'Times-Roman',
    fontSize: 20,
    marginBottom: 4,
  },
  meta: {
    fontSize: 9,
    color: COLORS.textMuted,
    marginBottom: 18,
  },
  sectionTitle: {
    fontFamily: 'Times-Roman',
    fontSize: 13,
    marginTop: 18,
    marginBottom: 8,
    borderBottom: `1pt solid ${COLORS.border}`,
    paddingBottom: 4,
  },
  paragraph: {
    fontSize: 10,
    lineHeight: 1.5,
    marginBottom: 8,
    color: COLORS.textDark,
  },
  muted: {
    fontSize: 9,
    color: COLORS.textMuted,
  },
  bullet: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  bulletMark: {
    width: 12,
    fontSize: 10,
    color: COLORS.gold,
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
    lineHeight: 1.4,
  },
  table: {
    marginTop: 6,
    marginBottom: 6,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottom: `0.5pt solid ${COLORS.border}`,
    paddingVertical: 5,
  },
  tableHeaderRow: {
    flexDirection: 'row',
    backgroundColor: COLORS.bgSubtle,
    paddingVertical: 6,
    marginTop: 6,
  },
  tableHeaderCell: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    color: COLORS.textMuted,
  },
  tableCell: {
    fontSize: 9.5,
    paddingRight: 6,
  },
  footer: {
    position: 'absolute',
    bottom: 24,
    left: 48,
    right: 48,
    fontSize: 8,
    color: COLORS.textMuted,
    borderTop: `0.5pt solid ${COLORS.border}`,
    paddingTop: 6,
  },
})

export function formatDate() {
  return new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
}

export const SITE_NAME = 'District AI Governance Tutorial'
