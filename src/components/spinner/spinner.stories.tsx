import { Meta, StoryObj } from "@storybook/react"

import Spinner from "./index"

const meta = {
  title: "Animations/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A spinner for displaying loading state of a page or a section.",
      },
    },
  },
  tags: ["autodocs"],
  render: () => {
    return (
      <div style={{ color: "#6756C1" }}>
        <Spinner />
      </div>
    )
  },
} satisfies Meta<typeof Spinner>

type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  args: {},
}

export default meta
