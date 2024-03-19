import { id } from "date-fns/locale"
import { DayPicker, DayPickerSingleProps } from "react-day-picker"

import "./datePicker.scss"

type DatePickerProps = Omit<DayPickerSingleProps, "locale">

const DatePicker = (props: DatePickerProps) => {
  return <DayPicker locale={id} {...props} />
}

export type { DatePickerProps }
export default DatePicker
