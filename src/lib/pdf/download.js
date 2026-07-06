import { pdf } from '@react-pdf/renderer'

export async function downloadPdf(document, filename) {
  const blob = await pdf(document).toBlob()
  const url = URL.createObjectURL(blob)
  const a = window.document.createElement('a')
  a.href = url
  a.download = filename
  window.document.body.appendChild(a)
  a.click()
  window.document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
