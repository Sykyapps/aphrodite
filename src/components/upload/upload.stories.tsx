import type { Meta, StoryObj } from "@storybook/react"

import Button from "../button"
import { Form, FormItem, FormItemContent } from "../forms"

import { default as Upload } from "./upload"

const meta = {
  title: "Forms/Upload",
  component: Upload,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A Upload is input for user to select time.",
      },
    },
  },
} satisfies Meta<typeof Upload>

type Story = StoryObj<typeof Upload>

export const Default: Story = {
  render: () => {
    return <Upload title="Hello" />
  },
}

export const WithForm: Story = {
  render: () => {
    const [form] = Form.useForm()

    const handleOnFinish = (values: any) => {
      console.log(values)
    }

    return (
      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        onFinish={handleOnFinish}
      >
        <FormItem
          name="email"
          label="Email"
          item={({ name, value, onChange }: FormItemContent) => (
            <Upload name={name} value={value} onChange={onChange} multiple />
          )}
        />
        <Button htmlType="submit">Submit</Button>
      </Form>
    )
  },
}

export default meta
