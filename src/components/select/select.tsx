import { Select as BaseSelect, SelectProps as BaseSelectProps } from "antd"

import { ArrowDownIcon } from "../icons"
import Shimmer from "../shimmer"

import "./select.scss"

type SelectProps = {
  loading?: boolean
  selectVariant?: "standard" | "outlined"
} & Omit<BaseSelectProps, "suffixIcon" | "dropdownStyle" | "variant">

const Select = ({
  loading = false,
  className = "",
  selectVariant = "standard",
  ...props
}: SelectProps) => {
  return (
    <>
      {!loading ? (
        <BaseSelect
          className={`${
            selectVariant === "standard"
              ? "syky-standard-select"
              : "syky-outlined-select"
          } syky-select ${className}`}
          suffixIcon={
            <ArrowDownIcon className="text-lowEmphasis-iconPrimary text-xl" />
          }
          dropdownStyle={{ border: "1px solid #E0E3EF" }}
          {...props}
        />
      ) : (
        <Shimmer className="mt-2" />
      )}
    </>
  )
}

export type { SelectProps }
export default Select
