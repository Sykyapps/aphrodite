import { useState } from "react"

import type { Meta, StoryObj } from "@storybook/react"

import { DateRange, default as DateRangePicker } from "./dateRangePicker"

const meta = {
  title: "Forms/Date Range Picker",
  component: DateRangePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A DateRangePicker is input for user to select range of dates.",
      },
    },
  },
  argTypes: {
    onSelect: {
      action: "onSelect",
    },
  },
} satisfies Meta<typeof DateRangePicker>

type Story = StoryObj<typeof DateRangePicker>

export const Default: Story = {
  render: () => {
    const [selectedRange, setSelectedRange] = useState<DateRange | undefined>()

    return (
      <div className="flex flex-col items-center">
        <span>Selected : {selectedRange && JSON.stringify(selectedRange)}</span>
        <DateRangePicker
          fromMonth={new Date(2021, 9)}
          toMonth={new Date()}
          selected={selectedRange}
          onSelect={setSelectedRange}
        />
      </div>
    )
  },
}

export default meta
