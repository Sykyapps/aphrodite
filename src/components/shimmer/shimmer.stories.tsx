import { Meta, StoryObj } from "@storybook/react"

import Shimmer from "./index"

const meta = {
  title: "Animations/Shimmer",
  component: Shimmer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A shimmer is used to provide a placeholder while you wait for content to load, or to visualize content that doesn't exist yet.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Shimmer>

type Story = StoryObj<typeof Shimmer>

export const Default: Story = {
  args: {
    width: "300px",
    height: "24px",
  },
}

export default meta
