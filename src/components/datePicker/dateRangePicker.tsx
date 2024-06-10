import { id } from "date-fns/locale"
import { DateRange, DayPicker, DayPickerRangeProps } from "react-day-picker"

import "./datePicker.scss"

type DateRangePickerProps = {
  onSelect: (range: DateRange | undefined) => void
} & Omit<
  DayPickerRangeProps,
  "locale" | "mode" | "captionLayout" | "disabled" | "onSelect"
>

const DateRangePicker = ({ onSelect, ...props }: DateRangePickerProps) => {
  const handleOnSelect = (range: DateRange | undefined) => {
    if (!range) {
      onSelect(undefined)
      return
    }

    const dateRange: DateRange = {
      from: range.from ? new Date(range.from.setHours(7)) : undefined,
      to: range.to ? new Date(range.to.setHours(7)) : undefined,
    }

    onSelect(dateRange)
  }

  return (
    <DayPicker
      mode="range"
      captionLayout="dropdown"
      locale={id}
      disabled={{
        from: new Date(+new Date() + 86400000),
        to: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
      }}
      onSelect={handleOnSelect}
      {...props}
    />
  )
}

export type { DateRange, DateRangePickerProps }
export default DateRangePicker
