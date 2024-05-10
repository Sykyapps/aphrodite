import type { Meta, StoryObj } from "@storybook/react"

import { default as Empty } from "../empty"

import { default as Table, TableProps } from "./table"

const meta = {
  title: "Data Display/Table",
  component: Table,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A Table displays rows of data.",
      },
    },
  },
  argTypes: {
    empty: {
      control: "select",
      options: ["general", "search"],
      mapping: {
        general: (
          <Empty
            type="general"
            title="Data transaksi belum tersedia"
            subtitle="Nasabah belum melakukan transaksi."
          />
        ),
        search: (
          <Empty
            type="search"
            title="Pencarian tidak ditemukan"
            subtitle="Coba periksa atau ganti kata kunci yang ingin kamu cari."
          />
        ),
      },
    },
    layout: {
      control: "radio",
      options: ["fixed", "auto"],
    },
    onRowClick: {
      action: "onChange",
    },
    onChange: {
      action: "onChange",
    },
  },
} satisfies Meta<TableProps>

type Story = StoryObj<typeof Table>

const columns: TableProps["columns"] = [
  {
    title: "Name Nasabah",
    dataIndex: "name",
    key: "name",
    width: 160,
  },
  {
    title: "Nama Fund",
    dataIndex: "fundName",
    key: "fundName",
    width: 180,
  },
  {
    title: "Gross Transaction Amount",
    dataIndex: "grossTransactionAmount",
    key: "grossTransactionAmount",
    width: 200,
  },
  {
    title: "Number of Unit",
    dataIndex: "unit",
    key: "unit",
    width: 120,
  },
  {
    title: "NAV per Unit",
    dataIndex: "nav",
    key: "nav",
    width: 130,
  },
  {
    title: "Transaction Date",
    dataIndex: "transactionDate",
    key: "transactionDate",
    width: 120,
  },
  {
    title: "Transaction Type",
    dataIndex: "type",
    key: "type",
    width: 120,
  },
]

const data = [
  {
    key: "1",
    name: "John Brown",
    fundName: "Sucorinvest Sharia Balanced Fund Plus",
    grossTransactionAmount: 100000000000,
    unit: "100000",
    nav: 100000,
    transactionDate: "15 Oktober 2024",
    type: "Redemption",
  },
  {
    key: "2",
    name: "John Brown",
    fundName: "Sucorinvest Sharia Balanced Fund Plus",
    grossTransactionAmount: 100000000000,
    unit: "100000",
    nav: 100000,
    transactionDate: "15 Oktober 2024",
    type: "Redemption",
  },
  {
    key: "3",
    name: "John Brown",
    fundName: "Sucorinvest Sharia Balanced Fund Plus",
    grossTransactionAmount: 100000000000,
    unit: "100000",
    nav: 100000,
    transactionDate: "15 Oktober 2024",
    type: "Redemption",
  },
]

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: "925px" }}>
      <Table
        loading={args.loading}
        defaultMobileLoadingLength={args.defaultMobileLoadingLength}
        clickable={args.clickable}
        hoverable={args.hoverable}
        layout={args.layout}
        breakpoint={args.breakpoint}
        empty={args.empty}
        columns={columns}
        dataSource={data}
        scroll={{ x: 100 }}
        onRowClick={args.onRowClick}
        onChange={args.onChange}
      />
    </div>
  ),
  args: {
    loading: false,
    clickable: true,
    hoverable: false,
    layout: "fixed",
    defaultMobileLoadingLength: 5,
    breakpoint: "lg",
  },
}

export const NoData: Story = {
  render: (args) => (
    <div style={{ maxWidth: "925px" }}>
      <Table
        loading={args.loading}
        defaultMobileLoadingLength={args.defaultMobileLoadingLength}
        clickable={args.clickable}
        layout={args.layout}
        breakpoint={args.breakpoint}
        empty={args.empty}
        columns={columns}
        dataSource={[]}
        onRowClick={args.onRowClick}
        onChange={args.onChange}
      />
    </div>
  ),
  args: {
    loading: false,
    clickable: false,
    layout: "fixed",
    defaultMobileLoadingLength: 5,
  },
}

export default meta
