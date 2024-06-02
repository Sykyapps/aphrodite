import type { Meta, StoryObj } from "@storybook/react"

import CardTable from "../cardTable/cardTable"
import { EyeOpenIcon } from "../icons"

import { default as Card } from "./card"

const meta = {
  title: "Data Display/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Simple rectangular container.",
      },
    },
  },
  argTypes: {
    icon: {
      control: "select",
      options: ["eye"],
      mapping: {
        eye: <EyeOpenIcon />,
      },
    },
  },
} satisfies Meta<typeof Card>

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    title: "Total AUM",
    subtitle: "Kamu & 20 Nasabah",
    children: "Rp. 500.000.000",
  },
}

export const WithoutChildPadding: Story = {
  render: (args) => {
    const data = [
      {
        id: "1",
        name: "John Brown",
        transactionType: "Redemption",
      },
      {
        id: "2",
        name: "John Doe",
        transactionType: "Subscription",
      },
      {
        id: "3",
        name: "John Wick",
        transactionType: "Other",
      },
    ]

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Transaction Type",
        dataIndex: "transactionType",
        key: "transactionType",
      },
    ]

    return (
      <Card
        loading={args.loading}
        title={args.title}
        subtitle={args.subtitle}
        icon={args.icon}
        removeContentPadding={args.removeContentPadding}
        titleContentGap={args.titleContentGap}
      >
        <CardTable
          hoverable
          onRowClick={(data) => console.log(data)}
          loading={args.loading}
          columns={columns}
          dataSource={data}
        />
      </Card>
    )
  },
  args: {
    loading: false,
    title: "Daftar Pembelian",
    subtitle: "Pembelian terbaru pada saat ini",
    removeContentPadding: true,
    titleContentGap: 20,
  },
}

export default meta
