import { NavLink } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/tutorial', label: 'Tutorial' },
  { to: '/assessment', label: 'Assessment' },
  { to: '/about', label: 'About' },
]

export default function Nav() {
  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <NavLink to="/" className="brand" end>
          <span className="brand-mark" aria-hidden="true">AI</span>
          <span className="brand-text">District AI Governance Tutorial</span>
        </NavLink>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
