import { Input as BaseInput, InputProps as BaseInputProps } from "antd"

import "./input.scss"

type InputProps = {
  inputVariant?: "standard" | "outlined"
} & BaseInputProps

const Input = ({ inputVariant = "standard", ...props }: InputProps) => {
  return (
    <BaseInput
      className={
        inputVariant === "standard"
          ? "syky-standard-input"
          : "syky-outlined-input"
      }
      {...props}
    />
  )
}

export type { InputProps }
export default Input
