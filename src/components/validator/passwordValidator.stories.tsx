import { Meta, StoryObj } from "@storybook/react"

import { default as PasswordValidator } from "./passwordValidator"

const meta = {
  title: "Forms/PasswordValidator",
  component: PasswordValidator,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Provides visualisation on validation for password according to password format specification.",
      },
    },
  },
  tags: ["autodocs"],
  render: (args) => (
    <div>
      <p>Input : {args.value}</p>
      <PasswordValidator value={args.value} />
    </div>
  ),
} satisfies Meta<typeof PasswordValidator>

type Story = StoryObj<typeof PasswordValidator>

export const Default: Story = {
  args: {
    value: "",
  },
}

export default meta
