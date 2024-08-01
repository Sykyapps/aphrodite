import { Meta, StoryObj } from "@storybook/react"

import { AutoCompleteProps, default as AutoComplete } from "./autocomplete"

const meta = {
  title: "Forms/Auto Complete",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A select with input for custom options.",
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
    return <AutoComplete className="w-64" onChange={args.onChange} {...args} />
  },
} satisfies Meta<AutoCompleteProps>

type Story = StoryObj<AutoCompleteProps>

export const Default: Story = {
  args: {
    placeholder: "Pilih Peran",
    selectVariant: "standard",
    options: [
      { value: "ADMIN", label: "ADMIN" },
      { value: "REMISIER", label: "REMISIER" },
    ],
  },
}

export default meta
