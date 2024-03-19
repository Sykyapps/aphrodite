import { useEffect, useState } from "react"

import { ArrowDownIcon, ArrowUpIcon } from "../icons"

import "./collapsible.scss"

type CollapsibleProps = {
  title: string
  icon?: React.ReactNode
  onChange?: (isOpen: boolean) => void
  children: React.ReactNode
}

const Collapsible = ({ onChange, ...props }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    onChange && onChange(isOpen)
  }, [isOpen])

  return (
    <div
      className={`syky-collapsible ${
        isOpen ? "syky-collapsible-open" : "syky-collapsible-closed"
      }`}
    >
      <button
        className="syky-collapsible-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="syky-collapsible-title-wrapper">
          {props.icon && (
            <span className="syky-collapsible-icon">{props.icon}</span>
          )}
          <span className="syky-collapsible-title">{props.title}</span>
        </div>
        <div className="syky-collapsible-icon">
          {isOpen ? (
            <ArrowUpIcon height={20} width={20} />
          ) : (
            <ArrowDownIcon height={20} width={20} />
          )}
        </div>
      </button>
      <div
        className={`syky-collapsible-content-wrapper ${
          isOpen
            ? "syky-collapsible-content-show"
            : "syky-collapsible-content-hide"
        }`}
      >
        {props.children}
      </div>
    </div>
  )
}

export type { CollapsibleProps }
export default Collapsible
