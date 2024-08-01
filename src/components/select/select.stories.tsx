import { Meta, StoryObj } from "@storybook/react"

import { default as Select, SelectProps } from "./select"

const meta = {
  title: "Forms/Select",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A long list can be divided into several pages using Select, and only one page will be loaded at a time.",
      },
    },
  },
  argTypes: {
    selectVariant: {
      control: "radio",
      options: ["standard", "outlined"],
    },
    onChange: {
      action: "onChange",
    },
  },
  render: (args) => {
    return <Select className="w-64" onChange={args.onChange} {...args} />
  },
} satisfies Meta<SelectProps>

type Story = StoryObj<SelectProps>

export const Default: Story = {
  args: {
    placeholder: "Pilih Peran",
    selectVariant: "outlined",
    options: [
      { value: "ADMIN", label: "Super User" },
      { value: "REMISIER", label: "Remisier" },
    ],
  },
}

export default meta
