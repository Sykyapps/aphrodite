import { Meta, StoryObj } from "@storybook/react"

import Button from "../button"

import { default as Empty } from "./empty"

const meta = {
  title: "States/Empty",
  component: Empty,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Empty state placeholder.",
      },
    },
  },
  argTypes: {
    type: {
      control: "radio",
      options: ["general", "search"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Empty>

type Story = StoryObj<typeof Empty>

export const Default: Story = {
  args: {
    type: "general",
    title: "Riwayat transaksi belum tersedia",
    subtitle: "Nasabah belum melakukan transaksi.",
  },
}

export const WithChildren: Story = {
  render: (args) => (
    <Empty type={args.type} title={args.title} subtitle={args.subtitle}>
      <Button buttonVariant="secondary" style={{ marginTop: "12px" }}>
        Reset
      </Button>
    </Empty>
  ),
  args: {
    type: "search",
    title: "Pencarian tidak ditemukan",
    subtitle: "Coba periksa atau ganti kata kunci yang ingin kamu cari.",
  },
}

export default meta
