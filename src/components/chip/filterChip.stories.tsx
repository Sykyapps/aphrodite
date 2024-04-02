import { Meta, StoryObj } from "@storybook/react"

import { default as FilterChip } from "./filterChip"

const meta = {
  title: "Forms/FilterChip",
  component: FilterChip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Chip for filter.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onRemove: {
      action: "onRemove",
    },
  },
  render: (args) => <FilterChip value={args.value} onRemove={args.onRemove} />,
} satisfies Meta<typeof FilterChip>

type Story = StoryObj<typeof FilterChip>

export const Default: Story = {
  args: {
    value: "Hello",
  },
}

export default meta
