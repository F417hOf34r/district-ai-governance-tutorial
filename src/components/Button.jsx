import { Link } from 'react-router-dom'

export default function Button({
  as,
  to,
  variant = 'primary',
  className = '',
  children,
  ...rest
}) {
  const classes = `btn btn-${variant}${className ? ` ${className}` : ''}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  const Tag = as || 'button'
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  )
}
