import { Meta, StoryObj } from "@storybook/react"

import Spin from "./index"

const meta = {
  title: "Animations/Spin",
  component: Spin,
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
  argTypes: {
    fullscreen: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: ["small", "default", "large"],
    },
  },
  render: (args) => (
    <Spin {...args}>
      <div className="h-20 w-40 bg-neutral-400" />
    </Spin>
  ),
} satisfies Meta<typeof Spin>

type Story = StoryObj<typeof Spin>

export const Default: Story = {
  args: {
    fullscreen: true,
    size: "default",
  },
}

export default meta
