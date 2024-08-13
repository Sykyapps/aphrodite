import { Input } from "antd"
import type { TextAreaProps as BaseTextAreaProps } from "antd/es/input/TextArea"

import Shimmer from "../shimmer"

import "./input.scss"

const { TextArea } = Input

type TextAreaProps = {
  className?: string
  inputVariant?: "standard" | "outlined"
  autoHeight?: boolean
  loading?: boolean
} & BaseTextAreaProps

const TextAreaInput = ({
  inputVariant = "standard",
  autoHeight = false,
  rows = 1,
  id = "",
  loading = false,
  onChange = () => {},
  ...props
}: TextAreaProps) => {
  const randomId = Math.random().toString(36).substring(7)

  const adjustHeight = () => {
    const textArea = document.getElementById(
      `${id}-${randomId}`,
    ) as HTMLTextAreaElement

    if (autoHeight) {
      textArea.style.overflow = `hidden`
      textArea.style.height = `auto`
      textArea.style.height = `${textArea.scrollHeight}px`
    }
  }

  const handleOnChange = (e: any) => {
    onChange(e.target.value)
    adjustHeight()
  }

  return (
    <>
      {!loading ? (
        <TextArea
          id={`${id}-${randomId}`}
          className={`${
            inputVariant === "standard"
              ? "syky-standard-input"
              : "syky-outlined-input"
          } ${props.className}`}
          onChange={handleOnChange}
          rows={rows}
          style={{ resize: "none" }}
          {...props}
        />
      ) : (
        <Shimmer className={`mt-2 ${props.className}`} height={36} />
      )}
    </>
  )
}

export type { TextAreaProps }
export default TextAreaInput
