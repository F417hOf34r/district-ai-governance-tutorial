import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}
