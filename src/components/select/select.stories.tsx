import { SelectProps } from "antd"

import { Meta, StoryObj } from "@storybook/react"

import Select from "./index"

const meta = {
  title: "Forms/Select",
  component: Select,
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
    onChange: {
      action: "onChange",
    },
  },
  render: (args) => {
    return (
      <Select
        placeholder="Pilih Peran"
        options={[
          { value: "ADMIN", label: "Super User" },
          { value: "REMISIER", label: "Remisier" },
        ]}
        onChange={args.onChange}
      />
    )
  },
} satisfies Meta<SelectProps>

type Story = StoryObj<SelectProps>

export const Default: Story = {
  args: {},
}

export default meta
