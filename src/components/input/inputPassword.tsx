import { Input as BaseInput, InputProps as BaseInputProps } from "antd"

import { EyeCloseIcon, EyeOpenIcon } from "../icons"

import "./input.scss"

type InputPasswordProps = {
  inputVariant?: "standard" | "outlined"
} & BaseInputProps

const InputPassword = ({
  inputVariant = "standard",
  ...props
}: InputPasswordProps) => {
  return (
    <BaseInput.Password
      className={
        inputVariant === "standard"
          ? "syky-standard-input"
          : "syky-outlined-input"
      }
      iconRender={(visible) =>
        visible ? (
          <EyeCloseIcon height={20} width={20} />
        ) : (
          <EyeOpenIcon height={20} width={20} />
        )
      }
      {...props}
    />
  )
}

export type { InputPasswordProps }
export default InputPassword
