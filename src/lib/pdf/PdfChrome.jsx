import { Text, View } from '@react-pdf/renderer'
import { pdfStyles, formatDate, SITE_NAME } from './theme.js'

export function DocHeader({ eyebrow, title, districtName }) {
  return (
    <View>
      <Text style={pdfStyles.eyebrow}>{eyebrow}</Text>
      <Text style={pdfStyles.title}>{title}</Text>
      <Text style={pdfStyles.meta}>
        {districtName ? `${districtName} · ` : ''}Generated {formatDate()}
      </Text>
    </View>
  )
}

export function DocFooter() {
  return (
    <Text style={pdfStyles.footer} fixed>
      {SITE_NAME}. Generated in your browser on {formatDate()}. No data was transmitted or stored remotely.
    </Text>
  )
}
