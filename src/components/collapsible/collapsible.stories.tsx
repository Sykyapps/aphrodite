import type { Meta, StoryObj } from "@storybook/react"

import { SearchIcon } from "../icons"

import { CollapsibleProps, default as Collapsible } from "./collapsible"

const meta = {
  title: "Layouts/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A Collapsible is a content area which can be collapsed and expanded.",
      },
    },
  },
  argTypes: {
    icon: {
      control: "select",
      options: ["search"],
      mapping: {
        search: <SearchIcon />,
      },
    },
  },
  render: ({ children, ...args }) => {
    return (
      <div style={{ minWidth: "500px" }}>
        <Collapsible {...args}>
          <p>{children}</p>
        </Collapsible>
      </div>
    )
  },
} satisfies Meta<CollapsibleProps>

type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  args: {
    title: "Ubah Pencarian",
    children: "Hasil Pencarian",
  },
}

export default meta
