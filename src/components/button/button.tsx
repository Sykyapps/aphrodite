import { Button as BaseButton, ButtonProps as BaseButtonProps } from "antd"

import Spinner from "../spinner/spinner.tsx"

import "./button.scss"

type ButtonProps = {
  buttonVariant?: "primary" | "secondary" | "icon"
  disableHover?: boolean
} & Omit<BaseButtonProps, "type">

const Button = ({
  buttonVariant = "primary",
  disableHover = false,
  size = "middle",
  className = "",
  loading,
  icon,
  children,
  ...props
}: ButtonProps) => {
  return (
    <BaseButton
      className={`syky-button syky-button-${buttonVariant} syky-button-${size} ${
        props.danger ? "syky-button-dangerous" : ""
      } ${disableHover ? "syky-button-disable-hover" : ""} ${className}`}
      type={buttonVariant !== "icon" ? "primary" : "text"}
      icon={undefined}
      {...props}
    >
      <div className="syky-button-inner-container">
        {loading && (
          <span className="syky-button-loading-spinner-wrapper">
            <Spinner />
          </span>
        )}
        <span
          className={`syky-button-text ${
            loading ? "syky-button-loading-text" : ""
          }`}
        >
          {icon} {children}
        </span>
      </div>
    </BaseButton>
  )
}

export type { ButtonProps }
export default Button
