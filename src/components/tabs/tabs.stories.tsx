import { Meta, StoryObj } from "@storybook/react"

import { default as Tabs, TabsProps } from "./tabs"

const meta = {
  title: "Layouts/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A Tabs make it easy to switch between different views.",
      },
    },
  },
  argTypes: {
    items: {
      control: {
        type: "object",
      },
      description: "Hello",
    },
  },
} satisfies Meta<TabsProps>

type Story = StoryObj<typeof Tabs>

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Overview",
    children: (
      <>
        <span>Content of Overview</span>
      </>
    ),
  },
  {
    key: "2",
    label: "Riwayat Transaksi",
    children: (
      <>
        <span>Content of Riwayat Transaksi</span>
      </>
    ),
  },
]

export const Default: Story = {
  render: () => <Tabs items={items} className="w-96" />,
}

export default meta
