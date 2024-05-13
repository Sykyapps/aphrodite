import { Meta, StoryObj } from "@storybook/react"

import { SearchIcon } from "../icons"
import { Input } from "../input"

import type { InputProps } from "./input"

const meta = {
  title: "Forms/Input",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data.",
      },
    },
  },
  argTypes: {
    inputVariant: {
      control: "radio",
      options: ["standard", "outlined"],
    },
    prefix: {
      control: "select",
      options: ["search"],
      mapping: {
        search: <SearchIcon />,
      },
    },
    onChange: {
      action: "onChange",
    },
  },
  render: (args) => {
    return (
      <div className="w-96">
        <Input {...args} />
      </div>
    )
  },
} satisfies Meta<InputProps>

type Story = StoryObj<typeof Input>

export const Standard: Story = {
  args: {
    inputVariant: "standard",
    loading: false,
    placeholder: "Cari pengguna disini",
  },
}

export const Outlined: Story = {
  args: {
    inputVariant: "outlined",
    placeholder: "Cari pengguna disini",
  },
}
export default meta
