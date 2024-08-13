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
  render: (args) => {
    const [form] = Form.useForm()

    const handleOnFinish = (values: any) => {
      console.log(values)
    }

    form.setFieldsValue({
      email: [
        {
          uid: "1",
          name: "file1",
          url: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*X5BonbxAt1vwmI_lOxU3lQ@2x.jpeg",
        },
        {
          uid: "2",
          name: "file2",
          url: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*X5BonbxAt1vwmI_lOxU3lQ@2x.jpeg",
        },
      ],
    })

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
            <Upload
              loading={args.loading}
              name={name}
              value={value}
              onChange={onChange}
              multiple
              downloadable
            />
          )}
        />
        <Button htmlType="submit">Submit</Button>
      </Form>
    )
  },
  args: {
    loading: false,
  },
}

export default meta
