import { Meta, StoryObj } from "@storybook/react"

import { InputPassword, InputPasswordProps } from "../input"

const meta = {
  title: "Forms/Input Password",
  component: InputPassword,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A basic widget for getting the user password input is a text field.",
      },
    },
  },
  argTypes: {
    inputVariant: {
      control: "radio",
      options: ["standard", "outlined"],
    },
    onChange: {
      action: "onChange",
    },
  },
} satisfies Meta<InputPasswordProps>

type Story = StoryObj<typeof InputPassword>

export const Standard: Story = {
  args: {
    inputVariant: "standard",
    placeholder: "Masukkan password",
  },
}

export const Outlined: Story = {
  args: {
    inputVariant: "outlined",
    placeholder: "Masukkan password",
  },
}

export default meta
