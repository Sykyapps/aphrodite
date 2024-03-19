import { useState } from "react"

import type { Meta, StoryObj } from "@storybook/react"

import contextProvider from "../../providers/contextProvider"
import Button from "../button"
import { SortFilterIcon } from "../icons"
import { Input } from "../input"

import { default as Modal, ModalProps } from "./modal"

const meta = {
  title: "Overlays/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A Modal dialogs.",
      },
    },
  },
  argTypes: {
    onClose: {
      action: "onClose",
    },
    onOk: {
      action: "onOk",
    },
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState("")

    const { message } = contextProvider.useApp()

    const handleOpenModal = () => {
      setIsOpen(true)
    }

    const handleOk = () => {
      message.info(value)

      setIsOpen(false)
      setValue("")
    }

    const handleClose = () => {
      setIsOpen(false)
    }

    return (
      <>
        <Button
          buttonVariant="secondary"
          size="small"
          icon={<SortFilterIcon width={16} height={16} />}
          onClick={handleOpenModal}
        >
          Sort & Filter
        </Button>
        <Modal
          open={isOpen}
          disabled={value.length === 0}
          title={args.title}
          onOk={handleOk}
          onClose={handleClose}
          okText={args.okText}
        >
          <div style={{ padding: "20px 0" }}>
            <p>Search</p>
            <Input
              value={value}
              onChange={(e: any) => setValue(e.target.value)}
            />
          </div>
        </Modal>
      </>
    )
  },
} satisfies Meta<ModalProps>

type Story = StoryObj<ModalProps>

export const Default: Story = {
  args: {
    title: "Sort & Filter",
    okText: "Terapkan",
  },
}

export default meta
