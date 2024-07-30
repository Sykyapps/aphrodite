import { Meta, StoryObj } from "@storybook/react"

import { default as TextAreaInput, TextAreaProps } from "./textArea"

const meta = {
  title: "Forms/Text Area",
  component: TextAreaInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "An input that enables multi-line input.",
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
} satisfies Meta<TextAreaProps>

type Story = StoryObj<typeof TextAreaInput>

export const Standard: Story = {
  args: {
    inputVariant: "standard",
    placeholder: "Masukkan password",
    autoHeight: true,
  },
}

export const Outlined: Story = {
  args: {
    inputVariant: "outlined",
    placeholder: "Masukkan password",
  },
}

export default meta
