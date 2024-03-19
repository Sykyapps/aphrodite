import { useEffect, useState } from "react"

import { Meta, StoryObj } from "@storybook/react"

import { Button, Modal, Paragraph, SortFilterIcon, Tags } from "../components"

type FilterProps = {
  onOk: (filter: any) => void
}

const meta: Meta = {
  title: "Examples/Filter Modal",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An example of filter modal that can be used to filter and sort data.",
      },
    },
  },
  argTypes: {
    onOk: {
      action: "onOk",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<FilterProps>

type Story = StoryObj<FilterProps>

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    const [filter, setFilter] = useState({ nameSort: "", kycStatus: "" })
    const [selectedFilter, setSelectedFilter] = useState({
      nameSort: "",
      kycStatus: "",
    })

    const nameTags = [
      {
        name: "Nama A-Z",
        key: "nameAsc",
      },
      {
        name: "Nama Z-A",
        key: "namaDesc",
      },
    ]

    const kycStatusTags = [
      {
        name: "Verified",
        key: "verified",
      },
      {
        name: "On Verification",
        key: "onVerification",
      },
      {
        name: "Not Verified",
        key: "notVerified",
      },
    ]

    const handleSortName = (value: string[]) => {
      const selected = value[0]

      if (selected === undefined) {
        setFilter({
          ...filter,
          nameSort: "",
        })
        return
      }

      setFilter({
        ...filter,
        nameSort: selected,
      })
    }

    const handleKycStatusFilter = (value: string[]) => {
      const selected = value[0]

      if (selected === undefined) {
        setFilter({
          ...filter,
          kycStatus: "",
        })
        return
      }

      setFilter({
        ...filter,
        kycStatus: selected,
      })
    }

    const handleOpenFilter = () => {
      setIsOpen(true)
    }

    const handleOnOk = () => {
      setIsOpen(false)

      args.onOk(filter)
      setSelectedFilter(filter)
    }
    const handleOnClose = () => {
      setIsOpen(false)
    }

    useEffect(() => {
      setFilter({ ...selectedFilter })
    }, [isOpen])

    return (
      <div>
        <Button
          buttonVariant="secondary"
          size="small"
          icon={<SortFilterIcon width={16} height={16} />}
          onClick={handleOpenFilter}
        >
          Sort & Filter
        </Button>
        <Modal
          // className="hidden lg:block"
          title="Sort & Filter"
          onOk={handleOnOk}
          onClose={handleOnClose}
          open={isOpen}
          disabled={false}
        >
          <div className="space-y-2.5 py-5">
            <Paragraph level={2} bold>
              Nama Nasabah
            </Paragraph>
            <Tags
              items={nameTags}
              onSelect={handleSortName}
              selected={[filter.nameSort]}
            />
          </div>
          <div className="space-y-2.5 py-5">
            <Paragraph level={2} bold>
              Status KYC
            </Paragraph>
            <Tags
              items={kycStatusTags}
              onSelect={handleKycStatusFilter}
              selected={[filter.kycStatus]}
            />
          </div>
        </Modal>
      </div>
    )
  },
}

export default meta
