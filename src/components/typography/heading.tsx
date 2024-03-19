type HeadingProps = {
  level: 1 | 2 | 3
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

const Heading = ({
  level,
  color = "high-emphasis",
  className = "",
  children,
}: HeadingProps) => {
  function applyStyle(color: string) {
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
    <>
      {level === 1 ? (
        <h1
          className={`heading-3 lg:heading-1 ${applyStyle(color)} ${className}`}
        >
          {children}
        </h1>
      ) : level === 2 ? (
        <h2 className={`heading-2 ${applyStyle(color)} ${className}`}>
          {children}
        </h2>
      ) : (
        <h3 className={`heading-3 ${applyStyle(color)} ${className}`}>
          {children}
        </h3>
      )}
    </>
  )
}

export type { HeadingProps }
export default Heading
