import { Select as BaseSelect, SelectProps as BaseSelectProps } from "antd"

import { ArrowDownIcon } from "../icons"

import "./select.scss"

type SelectProps = Omit<BaseSelectProps, "suffixIcon" | "dropdownStyle">

const Select = ({ className = "", ...props }: SelectProps) => {
  return (
    <BaseSelect
      className={`syky-select ${className}`}
      suffixIcon={
        <ArrowDownIcon className="text-lowEmphasis-iconPrimary text-xl" />
      }
      dropdownStyle={{ border: "1px solid #E0E3EF" }}
      {...props}
    />
  )
}

export type { SelectProps }
export default Select
