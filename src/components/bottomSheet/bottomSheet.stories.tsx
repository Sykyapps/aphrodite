import { useState } from "react"

import { Meta, StoryObj } from "@storybook/react"

import contextProvider from "../../providers/contextProvider"
import Button from "../button"
import { Input } from "../input"

import { default as BottomSheet } from "./bottomSheet"

const meta: Meta = {
  title: "Overlays/BottomSheet",
  component: BottomSheet,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A Bottom Sheet is a mobile UI element that slides up from the bottom to display extra content or options.",
      },
    },
  },
} satisfies Meta<typeof BottomSheet>

type Story = StoryObj<typeof BottomSheet>

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
        <BottomSheet
          open={isOpen}
          disabled={value.length === 0}
          title={args.title}
          onOk={handleOk}
          okText={args.okText}
          onDismiss={() => setIsOpen(false)}
          snapPoints={({ minHeight }) => minHeight * 2}
        >
          <div style={{ padding: "20px 0" }}>
            <p>Search</p>
            <Input
              value={value}
              onChange={(e: any) => setValue(e.target.value)}
            />
          </div>
        </BottomSheet>
      </>
    )
  },
  args: {
    title: "Sort & Filter",
    okText: "Terapkan",
  },
}

export default meta
