import type { Meta, StoryObj } from "@storybook/react"

import { default as TimePicker } from "./timePicker"

const meta = {
  title: "Forms/Time Picker",
  component: TimePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A TimePicker is input for user to select time.",
      },
    },
  },
  argTypes: {
    onChange: {
      action: "onChange",
    },
  },
} satisfies Meta<typeof TimePicker>

type Story = StoryObj<typeof TimePicker>

export const Default: Story = {
  render: (args) => {
    return (
      <div className="w-96">
        <TimePicker
          value={new Date("2024-07-24T10:20:55.139Z").toISOString()}
          onChange={args.onChange}
        />
      </div>
    )
  },
}

export default meta
