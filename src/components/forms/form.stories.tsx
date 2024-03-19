import { useState } from "react"

import type { Meta, StoryObj } from "@storybook/react"

import Button from "../button"
import { Input, InputPassword } from "../input"
import { PasswordValidator } from "../validator"

import { default as Form, FormProps } from "./form"
import { default as FormItem, FormItemContent } from "./formItem"

const meta = {
  title: "Forms/Form",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A Form component with data scope management. Including data collection, verification, and styles.",
      },
    },
  },
  argTypes: {
    onFinish: {
      action: "onFinish",
    },
    onChange: {
      action: "onChange",
    },
  },
} satisfies Meta<FormProps>

type Story = StoryObj<typeof Form>

export const Default: Story = {
  render: (args) => {
    const [passwordValue, setPasswordValue] = useState("")
    const [form] = Form.useForm()

    const handleOnChange = () => {
      const passwordValue = form.getFieldValue("password")
      setPasswordValue(passwordValue)
    }

    return (
      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        onFinish={args.onFinish}
        onChange={handleOnChange}
      >
        <FormItem
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Email wajib diisi." },
            { type: "email", message: "Format email tidak sesuai." },
          ]}
          item={({ name, value, onChange }: FormItemContent) => (
            <Input
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              placeholder="Masukkan email"
            />
          )}
        />
        <FormItem
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Password wajib diisi." },
            {
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
              message: "Password tidak sesuai format.",
            },
          ]}
          item={({ name, value, onChange }: FormItemContent) => (
            <InputPassword
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              placeholder="Masukkan password"
            />
          )}
        />
        <div style={{ marginBottom: "20px" }}>
          <PasswordValidator value={passwordValue} />
        </div>
        <Button htmlType="submit">Submit</Button>
      </Form>
    )
  },
}
export default meta
