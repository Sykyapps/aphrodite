import { Meta, StoryObj } from "@storybook/react"

import { default as Detail } from "./detail"

const meta: Meta = {
  title: "Data Display/Detail",
  component: Detail,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A Detail displays a detail of information.",
      },
    },
  },
} satisfies Meta<typeof Detail>

type Story = StoryObj<typeof Detail>

const items = [
  {
    title: "Nama Nasabah",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "SID",
    dataIndex: "sid",
    key: "sid",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Status KYC",
    dataIndex: "kycStatus",
    key: "kycStatus",
  },
  {
    title: "Tanggal Referral",
    dataIndex: "referralDate",
    key: "referralDate",
  },
  {
    title: "Tanggal Verified",
    dataIndex: "verifiedDate",
    key: "verifiedDate",
  },
]

const data = {
  name: "Jane Doe",
  sid: "123456789012345",
  email: "hi@sayakaya.id",
  kycStatus: "Verified",
  referralDate: "31 Maret 2024",
  verifiedDate: "31 Maret 2024",
}

export const Default: Story = {
  render: () => (
    <div className="w-full lg:w-[956px]">
      <Detail items={items} dataSource={data} />
    </div>
  ),
}

export default meta
