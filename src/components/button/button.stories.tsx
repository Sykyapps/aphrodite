import { Meta, StoryObj } from "@storybook/react"

import { default as Button } from "../button"
import { SearchIcon, SortFilterIcon } from "../icons"

import type { ButtonProps } from "./button"

const meta = {
  title: "Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A Button is used to trigger an operation.",
      },
    },
  },
  argTypes: {
    buttonVariant: {
      control: "radio",
      options: ["primary", "secondary", "icon"],
    },
    icon: {
      control: "select",
      options: ["search", "filter"],
      mapping: {
        search: <SearchIcon height={20} width={20} />,
        filter: <SortFilterIcon height={20} width={20} />,
      },
    },
    size: {
      control: "radio",
      options: ["small", "middle", "large"],
    },
    onClick: { action: "onClick" },
  },
} satisfies Meta<ButtonProps>

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    disabled: false,
    loading: false,
    danger: false,
    disableHover: false,
    buttonVariant: "primary",
    size: "middle",
    children: "Search",
  },
}

export const Secondary: Story = {
  args: {
    disabled: false,
    loading: false,
    danger: false,
    disableHover: false,
    buttonVariant: "secondary",
    size: "middle",
    children: "Search",
  },
}

export const Icon: Story = {
  args: {
    disabled: false,
    loading: false,
    danger: false,
    disableHover: false,
    buttonVariant: "icon",
    size: "middle",
    icon: "search",
  },
}

export default meta
