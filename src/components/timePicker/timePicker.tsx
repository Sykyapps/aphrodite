import { useCallback, useEffect, useState } from "react"
import Picker, { PickerValue } from "react-mobile-picker"

type TimePickerProps = {
  value?: string
  onChange: (value: string) => void
}

const TimePicker = ({ value, onChange }: TimePickerProps) => {
  const [pickerValue, setPickerValue] = useState<PickerValue>({
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
    (newValue: PickerValue, key: string) => {
      const value = `${newValue.hour}:${newValue.minute}:${newValue.second}`
      onChange(value)
      setPickerValue((prev) => ({ ...prev, [key]: newValue[key] }))
    },
    [],
  )

  useEffect(() => {
    if (!value) return

    const hour = new Date(value).getHours().toString()
    const minute = new Date(value).getMinutes().toString()
    const second = new Date(value).getSeconds().toString()
    setPickerValue({ hour, minute, second })
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

export type { TimePickerProps }
export default TimePicker