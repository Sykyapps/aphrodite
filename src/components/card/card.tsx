import Shimmer from "../shimmer"

import "./card.scss"

type CardProps = {
  loading?: boolean
  title?: string
  icon?: React.ReactNode
  subtitle?: React.ReactNode
  removeContentPadding?: boolean
  titleContentGap?: number
  children: React.ReactNode
  additionalClass?: string
}

const Card = ({
  loading = false,
  title = "",
  icon = "",
  subtitle = "",
  removeContentPadding = false,
  titleContentGap = 10,
  children,
  additionalClass = "",
}: CardProps) => {
  return (
    <div
      className={`syky-card ${additionalClass}`}
      style={{ gap: titleContentGap }}
    >
      {(title || icon || subtitle) && (
        <div className="syky-card-header">
          {(icon || title) && (
            <div className="syky-card-title-wrapper">
              {icon && <span>{icon}</span>}
              {title && <p className="syky-card-title">{title}</p>}
            </div>
          )}
          {subtitle && (
            <>
              {loading ? (
                <Shimmer height={16} />
              ) : (
                <div className="syky-card-subtitle">{subtitle}</div>
              )}
            </>
          )}
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

export type { CardProps }
export default Card
