import { Meta, StoryObj } from "@storybook/react"

import Pagination from "./index"

const meta = {
  title: "Buttons/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A long list can be divided into several pages using Pagination, and only one page will be loaded at a time.",
      },
    },
  },
  argTypes: {
    onChange: {
      action: "onChange",
    },
  },
} satisfies Meta<typeof Pagination>

type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {
    loading: false,
    total: 100,
    pageSize: 10,
    showSizeChanger: false,
  },
}

export default meta
