import { Select as BaseSelect, SelectProps as BaseSelectProps } from "antd"

import { ArrowDownIcon } from "../icons"
import Shimmer from "../shimmer"

import "./select.scss"

type SelectProps = { loading?: boolean } & Omit<
  BaseSelectProps,
  "suffixIcon" | "dropdownStyle"
>

const Select = ({ loading = false, className = "", ...props }: SelectProps) => {
  return (
    <>
      {!loading ? (
        <BaseSelect
          className={`syky-select ${className}`}
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
