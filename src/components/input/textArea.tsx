import { Input } from "antd"
import type { TextAreaProps as BaseTextAreaProps } from "antd/es/input/TextArea"

import "./input.scss"

const { TextArea } = Input

type TextAreaProps = {
  inputVariant?: "standard" | "outlined"
  autoHeight?: boolean
} & BaseTextAreaProps

const TextAreaInput = ({
  inputVariant = "standard",
  autoHeight = false,
  rows = 1,
  id = "",
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
    <TextArea
      id={`${id}-${randomId}`}
      className={
        inputVariant === "standard"
          ? "syky-standard-input"
          : "syky-outlined-input"
      }
      onChange={handleOnChange}
      rows={rows}
      style={{ resize: "none" }}
      {...props}
    />
  )
}

export type { TextAreaProps }
export default TextAreaInput
