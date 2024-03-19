import "./card.scss"

type CardProps = {
  title?: string
  icon?: React.ReactNode
  subtitle?: string
  removeContentPadding?: boolean
  titleContentGap?: number
  children: React.ReactNode
}

const Card = ({
  title = "",
  icon = "",
  subtitle = "",
  removeContentPadding = false,
  titleContentGap = 10,
  children,
}: CardProps) => {
  return (
    <div className="syky-card" style={{ gap: titleContentGap }}>
      {(title || icon || subtitle) && (
        <div className="syky-card-header">
          {(icon || title) && (
            <div className="syky-card-title-wrapper">
              {icon && <span>{icon}</span>}
              {title && <p className="syky-card-title">{title}</p>}
            </div>
          )}
          {subtitle && <p className="syky-card-subtitle">{subtitle}</p>}
        </div>
      )}
      <div
        className={removeContentPadding ? "" : "syky-card-content-container"}
      >
        {children}
      </div>
    </div>
  )
}

export default Card
