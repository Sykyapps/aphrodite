import { id } from "date-fns/locale"
import { DayPicker, DayPickerSingleProps } from "react-day-picker"

import "./datePicker.scss"

type DatePickerProps = {
  onSelect: (range: Date | undefined) => void
} & Omit<
  DayPickerSingleProps,
  "locale" | "mode" | "captionLayout" | "disabled" | "onSelect"
>

const DatePicker = ({ onSelect, ...props }: DatePickerProps) => {
  const handleOnSelect = (date: Date | undefined) => {
    if (!date) {
      onSelect(undefined)
      return
    }

    const selectedDate = new Date(date.setHours(7))
    onSelect(selectedDate)
  }

  return (
    <DayPicker
      mode="single"
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

export type { DatePickerProps }
export default DatePicker
