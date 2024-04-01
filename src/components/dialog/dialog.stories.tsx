import { useState } from "react"

import { Meta, StoryObj } from "@storybook/react"

import contextProvider from "../../providers/contextProvider"
import Button from "../button"
import { Input } from "../input"

import { default as Dialog } from "./dialog"

const meta: Meta = {
  title: "Overlays/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A Dialog combines Bottom Sheet & Modal responsively",
      },
    },
  },
} satisfies Meta<typeof Dialog>

type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState("")

    const { message } = contextProvider.useApp()

    const handleOk = () => {
      message.info(value)

      setIsOpen(false)
      setValue("")
    }

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Dialog
          title={args.title}
          onOk={handleOk}
          onClose={() => setIsOpen(false)}
          open={isOpen}
          disabled={value.length === 0}
          width={args.width}
          breakpoint={args.breakpoint}
          okText={args.okText}
        >
          <div style={{ padding: "20px 0" }}>
            <p>Search</p>
            <Input
              value={value}
              onChange={(e: any) => setValue(e.target.value)}
            />
          </div>
        </Dialog>
      </>
    )
  },
  args: {
    title: "Sort & Filter",
    breakpoint: "lg",
    okText: "Terapkan",
  },
}

export default meta
