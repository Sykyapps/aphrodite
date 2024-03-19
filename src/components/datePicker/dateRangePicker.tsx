import { id } from "date-fns/locale"
import { DateRange, DayPicker, DayPickerRangeProps } from "react-day-picker"

import "./datePicker.scss"

type DateRangePickerProps = Omit<
  DayPickerRangeProps,
  "locale" | "mode" | "captionLayout" | "disabled"
>

const DateRangePicker = (props: DateRangePickerProps) => {
  return (
    <DayPicker
      mode="range"
      captionLayout="dropdown"
      locale={id}
      disabled={{
        from: new Date(+new Date() + 86400000),
        to: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
      }}
      {...props}
    />
  )
}

export type { DateRange, DateRangePickerProps }
export default DateRangePicker
