export default function ProgressBar({ value, max, label }) {
  const percent = max === 0 ? 0 : Math.round((value / max) * 100)
  return (
    <div className="progress-wrap" role="group" aria-label={label}>
      {label && (
        <div className="progress-label">
          <span>{label}</span>
          <span>{value} of {max} answered</span>
        </div>
      )}
      <progress className="progress-bar" value={value} max={max} aria-label={label}>
        {percent}%
      </progress>
    </div>
  )
}
