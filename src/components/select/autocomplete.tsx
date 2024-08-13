import { useEffect, useState } from "react"
import {
  AutoComplete as BaseAutoComplete,
  AutoCompleteProps as BaseAutoCompleteProps,
} from "antd"

import { ArrowDownIcon } from "../icons"
import Shimmer from "../shimmer"

import "./select.scss"

type AutoCompleteProps = {
  selectVariant?: "standard" | "outlined"
  options: BaseAutoCompleteProps["options"]
  loading?: boolean
} & Omit<
  BaseAutoCompleteProps,
  "suffixIcon" | "dropdownStyle" | "variant" | "onSearch" | "options"
>

const AutoComplete = ({
  className = "",
  selectVariant = "standard",
  loading = false,
  options,
  ...props
}: AutoCompleteProps) => {
  const [optionList, setOptionList] = useState<any>([])

  const handleOnSearch = (value: string) => {
    if (!options) return

    const filterOptions = options.filter((option) => {
      if (!option.value) return false
      return option.value.toString().toLowerCase().includes(value.toLowerCase())
    })

    if (filterOptions.length === 0) {
      filterOptions.push({ value: value, label: value })
    }

    setOptionList(filterOptions)
  }

  useEffect(() => {
    if (!options) return
    if (optionList.length > 0) return

    setOptionList(options)
  }, [options])

  return (
    <>
      {!loading ? (
        <BaseAutoComplete
          className={`${
            selectVariant === "standard"
              ? "syky-standard-select"
              : "syky-outlined-select"
          } syky-select ${className}`}
          suffixIcon={
            <ArrowDownIcon className="text-lowEmphasis-iconPrimary text-xl" />
          }
          dropdownStyle={{ border: "1px solid #E0E3EF" }}
          options={optionList}
          onSearch={handleOnSearch}
          {...props}
        />
      ) : (
        <Shimmer className={`mt-2 ${className}`} height={36} />
      )}
    </>
  )
}

export type { AutoCompleteProps }
export default AutoComplete
