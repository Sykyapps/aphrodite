import { Input as BaseInput, InputProps as BaseInputProps } from "antd"

import Shimmer from "../shimmer"

import "./input.scss"

type InputProps = {
  inputVariant?: "standard" | "outlined"
  loading?: boolean
} & BaseInputProps

const Input = ({
  inputVariant = "standard",
  loading = false,
  ...props
}: InputProps) => {
  return (
    <>
      {!loading ? (
        <BaseInput
          className={
            inputVariant === "standard"
              ? "syky-standard-input"
              : "syky-outlined-input"
          }
          {...props}
        />
      ) : (
        <Shimmer className="mt-2" />
      )}
    </>
  )
}

export type { InputProps }
export default Input
