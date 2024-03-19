import { Meta, StoryObj } from "@storybook/react"

import { default as Heading } from "./heading"

const meta = {
  title: "Typography/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Larger text as heading.",
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
} satisfies Meta<typeof Heading>

type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    level: 1,
    color: "high-emphasis",
    children: "Hello",
  },
}

export const WithAdditionalClass: Story = {
  args: {
    level: 1,
    color: "high-emphasis",
    className: "underline",
    children: "Hello",
  },
}

export default meta
