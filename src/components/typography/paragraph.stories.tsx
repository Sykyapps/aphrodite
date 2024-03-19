import { Meta, StoryObj } from "@storybook/react"

import { default as Paragraph } from "./paragraph"

const meta = {
  title: "Typography/Paragraph",
  component: Paragraph,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Regular text as paragraph.",
      },
    },
  },
  argTypes: {
    level: {
      control: "radio",
      options: [1, 2, 3],
    },
    color: {
      control: "select",
      options: [
        "high-emphasis",
        "low-emphasis",
        "disabled",
        "white",
        "positive",
        "negative",
        "primary",
        "active",
      ],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Paragraph>

type Story = StoryObj<typeof Paragraph>

export const Default: Story = {
  args: {
    level: 2,
    bold: false,
    color: "high-emphasis",
    children: "Hello",
  },
}

export const WithAdditionalClass: Story = {
  args: {
    level: 1,
    bold: false,
    color: "high-emphasis",
    className: "underline",
    children: "Hello",
  },
}

export default meta
