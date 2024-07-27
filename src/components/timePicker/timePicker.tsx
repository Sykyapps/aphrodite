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
    second: new Date().getSeconds().toString(),
  })

  const selections = {
    hours: Array.from({ length: 24 }, (_, i) => i.toString()),
    minutes: Array.from({ length: 60 }, (_, i) => i.toString()),
    seconds: Array.from({ length: 60 }, (_, i) => i.toString()),
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
  }, [])

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
                className={
                  selected ? "font-semibold text-active-text" : "text-[#4E4E4E]"
                }
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
                className={
                  selected ? "font-semibold text-active-text" : "text-[#4E4E4E]"
                }
              >
                {minute}
              </div>
            )}
          </Picker.Item>
        ))}
      </Picker.Column>
      <Picker.Column name="second">
        {selections.seconds.map((second) => (
          <Picker.Item key={second} value={second}>
            {({ selected }) => (
              <div
                className={
                  selected ? "font-semibold text-active-text" : "text-[#4E4E4E]"
                }
              >
                {second}
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
