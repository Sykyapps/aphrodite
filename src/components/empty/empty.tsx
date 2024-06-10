import emptyError from "../../assets/images/illustration/empty-error.png"
import emptyGeneral from "../../assets/images/illustration/empty-general.png"
import emptySearch from "../../assets/images/illustration/empty-search.png"

import "./empty.scss"

type EmptyProps = {
  type?: "general" | "search" | "error"
  title?: React.ReactNode
  subtitle?: React.ReactNode
  children?: React.ReactNode
}

const Empty = ({
  type = "search",
  title = "Pencarian tidak ditemukan",
  subtitle = "Coba periksa atau ganti kata kunci yang ingin kamu cari.",
  children,
}: EmptyProps) => {
  const setEmtpyImage = (errorType: string) => {
    switch (errorType) {
      case "search":
        return emptySearch
      case "error":
        return emptyError
      default:
        return emptyGeneral
    }
  }

  return (
    <div className="syky-empty">
      <img
        className="syky-empty-image"
        src={setEmtpyImage(type)}
        alt="Empty"
        width={120}
        height={120}
      />
      <div className="syky-empty-content-wrapper">
        <p className="syky-empty-title">{title}</p>
        <p className="syky-empty-subtitle">{subtitle}</p>
      </div>
      {children}
    </div>
  )
}

export type { EmptyProps }
export default Empty
