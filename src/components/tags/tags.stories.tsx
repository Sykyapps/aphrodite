import { Meta, StoryObj } from "@storybook/react"

import { default as Tags, TagsProps } from "./tags"

const meta = {
  title: "Forms/Tags",
  component: Tags,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Tag for categorizing or markup.",
      },
    },
  },
  argTypes: {
    onSelect: {
      action: "onSelect",
    },
  },
} satisfies Meta<TagsProps>

type Story = StoryObj<typeof Tags>

export const Default: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({ items, ...args }) => {
    const tags = [
      {
        name: "Transaksi terlama",
        key: "oldestTransaction",
      },
      {
        name: "Transaksi terbaru",
        key: "latestTransaction",
      },
    ]
    return <Tags items={tags} {...args} />
  },
  args: {
    multiple: true,
  },
}

export default meta
