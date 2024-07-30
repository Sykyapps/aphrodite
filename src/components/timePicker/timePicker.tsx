import { useCallback, useEffect, useState } from "react"
import Picker, { PickerValue as TimePickerValue } from "react-mobile-picker"

type TimePickerProps = {
  value?: TimePickerValue
  onChange: (value: TimePickerValue) => void
}

const TimePicker = ({ value, onChange }: TimePickerProps) => {
  const [pickerValue, setPickerValue] = useState<TimePickerValue>({
    hour: new Date().getHours().toString(),
    minute: new Date().getMinutes().toString(),
  })

  const selections = {
    hours: Array.from({ length: 24 }, (_, i) => i.toString()),
    minutes: Array.from({ length: 60 }, (_, i) =>
      i < 10 ? i.toString().padStart(2, "0") : i.toString(),
    ),
  }

  const handlePickerChange = useCallback(
    (newValue: TimePickerValue, key: string) => {
      onChange(newValue)
      setPickerValue((prev) => ({ ...prev, [key]: newValue[key] }))
    },
    [],
  )

  useEffect(() => {
    if (!value) return

    setPickerValue(value)
  }, [value])

  return (
    <Picker
      value={pickerValue}
      onChange={handlePickerChange}
      wheelMode="normal"
    >
      <Picker.Column name="hour">
        {selections.hours.map((hour) => (
          <Picker.Item key={hour} value={hour}>
            {({ selected }) => (
              <div
                className={`${
                  selected ? "font-semibold text-active-text" : "text-[#4E4E4E]"
                } text-xl`}
              >
                {hour}
              </div>
            )}
          </Picker.Item>
        ))}
      </Picker.Column>
      <Picker.Column name="minute">
        {selections.minutes.map((minute) => (
          <Picker.Item key={minute} value={minute}>
            {({ selected }) => (
              <div
                className={`${
                  selected ? "font-semibold text-active-text" : "text-[#4E4E4E]"
                } text-xl`}
              >
                {minute}
              </div>
            )}
          </Picker.Item>
        ))}
      </Picker.Column>
    </Picker>
  )
}

export type { TimePickerProps, TimePickerValue }
export default TimePicker
