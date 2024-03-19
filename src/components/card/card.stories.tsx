import type { Meta, StoryObj } from "@storybook/react"

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
        key: "1",
        name: "John Brown",
        fundName: "Sucorinvest Anak Pintar",
        transactionType: "Redemption",
      },
      {
        key: "2",
        name: "John Doe",
        fundName: "Sucorinvest Sharia Money Market Fund",
        transactionType: "Subscription",
      },
      {
        key: "3",
        name: "John Wick",
        fundName: "KISI Fixed Income Plus Premium Fund",
        transactionType: "Other",
      },
    ]

    return (
      <Card
        title={args.title}
        subtitle={args.subtitle}
        icon={args.icon}
        removeContentPadding={args.removeContentPadding}
        titleContentGap={args.titleContentGap}
      >
        <div
          style={{ display: "flex", background: "#F5F6FA", fontWeight: 700 }}
        >
          <div style={{ padding: "20px" }}>
            <p>Nama Nasabah</p>
          </div>
          <div style={{ padding: "20px" }}>
            <p>Jenis Transaksi</p>
          </div>
        </div>
        {data.map((data) => {
          return (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              }}
            >
              <div style={{ padding: "20px" }}>
                <p>{data.name}</p>
              </div>
              <div style={{ padding: "20px" }}>
                <p>{data.transactionType}</p>
              </div>
            </div>
          )
        })}
      </Card>
    )
  },
  args: {
    title: "Daftar Pembelian",
    subtitle: "Pembelian terbaru pada saat ini",
    removeContentPadding: true,
    titleContentGap: 20,
  },
}

export default meta
