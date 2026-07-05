import { Link } from 'react-router-dom'

export default function Card({ to, className = '', children }) {
  const classes = `card${className ? ` ${className}` : ''}`
  if (to) {
    return (
      <Link to={to} className={`${classes} card-link`}>
        {children}
      </Link>
    )
  }
  return <div className={classes}>{children}</div>
}
