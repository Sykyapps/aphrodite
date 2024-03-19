type ParagraphProps = {
  level: 1 | 2 | 3
  bold?: boolean
  color?:
    | "high-emphasis"
    | "low-emphasis"
    | "disabled"
    | "white"
    | "positive"
    | "negative"
    | "primary"
    | "active"
  className?: string
  children: React.ReactNode
}

const Paragraph = ({
  level,
  bold = false,
  color = "high-emphasis",
  className = "",
  children,
}: ParagraphProps) => {
  const applyLevel = (level: 1 | 2 | 3) => {
    switch (level) {
      case 1:
        return "body-1"
      case 2:
        return "body-2"
      case 3:
        return "body-3"
    }
  }

  const applyStyle = (color: string) => {
    switch (color) {
      case "low-emphasis":
        return "!text-lowEmphasis-text"
      case "disabled":
        return "!text-disabled-text"
      case "white":
        return "!text-white"
      case "positive":
        return "!text-positive-text"
      case "negative":
        return "!text-negative-text"
      case "primary":
        return "!text-primary-text"
      case "active":
        return "!text-active-text"
      default:
        return "text-highEmphasis-text"
    }
  }

  return (
    <p
      className={`${applyLevel(level)} ${bold ? "font-bold" : ""} ${applyStyle(
        color,
      )} ${className}`}
    >
      {children}
    </p>
  )
}

export type { ParagraphProps }
export default Paragraph
