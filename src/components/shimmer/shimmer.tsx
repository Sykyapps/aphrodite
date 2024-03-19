import "./shimmer.scss"

type ShimmerProps = {
  className?: string
  width?: string | number | "auto"
  height?: string | number
}

const Shimmer = ({
  className = "",
  width = "auto",
  height = "20px",
}: ShimmerProps) => {
  return (
    <div className="syky-shimmer-container">
      <span
        className={`syky-shimmer ${className}`}
        style={{
          width: width,
          height: height,
          flexGrow: width === "auto" ? 1 : undefined,
        }}
      />
    </div>
  )
}

export type { ShimmerProps }
export default Shimmer
