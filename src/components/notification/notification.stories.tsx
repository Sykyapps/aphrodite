import { Meta, StoryObj } from "@storybook/react"

import ContextProvider from "../../providers/contextProvider"
import Button from "../button"

import { NotificationProps, showNotification } from "./index"

const meta = {
  title: "Overlays/Notification",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A simple notification showing success/error result of an action.",
      },
    },
  },
  argTypes: {
    type: {
      control: "select",
      options: ["success", "error"],
    },
  },
  render: (args) => {
    const { notification } = ContextProvider.useApp()

    const handleOpenNotification = () => {
      showNotification({
        notification,
        type: args.type,
        message: args.message,
      })
    }

    return <Button onClick={handleOpenNotification}>Show Notification</Button>
  },
} satisfies Meta<NotificationProps>

type Story = StoryObj<NotificationProps>

export const Default: Story = {
  args: {
    type: "success",
    message: "Hello World",
    duration: 5,
  },
}

export default meta
