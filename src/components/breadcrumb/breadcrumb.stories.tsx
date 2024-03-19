import { Meta, StoryObj } from "@storybook/react"

import { BreadcrumbProps, default as Breadcrumb } from "./breadcrumb"

const meta: Meta = {
  title: "Navigations/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A Breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.",
      },
    },
  },
} satisfies Meta<BreadcrumbProps>

type Story = StoryObj<typeof Breadcrumb>

const items: BreadcrumbProps["items"] = [
  {
    title: <a>Transaksi</a>,
  },
  {
    title: <a>Daftar Transaksi</a>,
  },
  {
    title: "TRF-081-2230KlO91",
  },
]

export const Default: Story = {
  render: () => <Breadcrumb items={items} />,
}

export default meta
