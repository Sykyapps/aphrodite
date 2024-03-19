import { Meta, StoryObj } from "@storybook/react"

import { default as NavMenu, NavMenuProps } from "./navMenu"

const meta = {
  title: "Navigations/NavMenu",
  component: NavMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A NavMenu is a versatile inline menu for navigation used as part of a sidebar.",
      },
    },
  },
  argTypes: {
    selectedKeys: {
      control: "select",
      options: [["home"], ["settings"]],
    },
  },
} satisfies Meta<NavMenuProps>

type Story = StoryObj<typeof NavMenu>

const items: NavMenuProps["items"] = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "Settings",
    key: "settings",
    children: [
      {
        label: "Account Settings",
        key: "accountSettings",
      },
    ],
  },
  {
    label: "About",
    key: "about",
    disabled: true,
  },
]

export const Default: Story = {
  render: (args) => (
    <NavMenu
      items={items}
      defaultSelectedKeys={["1"]}
      selectedKeys={args.selectedKeys}
      style={{ minWidth: "200px" }}
    />
  ),
}

Default.args = {
  selectedKeys: ["home"],
}

export default meta
