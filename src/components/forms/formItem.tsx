import { FormItemProps as BaseFormItemProps } from "antd"

import Form from "./form.tsx"
import FormItemWrapper from "./formItemWrapper.tsx"

import "./formItem.scss"

type FormItemContent = {
  name: string
  value: string | number | undefined
  onChange: any
}

type FormItemProps = {
  name: string
  label?: React.ReactNode
  labelClassName?: string
  item: ({ name, value, onChange }: FormItemContent) => JSX.Element
} & Exclude<BaseFormItemProps, "label" | "name" | "children">

const FormItem = ({
  name,
  label,
  labelClassName = "",
  item,
  ...props
}: FormItemProps) => {
  return (
    <>
      <Form.Item name={name} label={null} {...props}>
        <FormItemWrapper
          name={name}
          label={label}
          labelClassName={labelClassName}
          item={item}
        />
      </Form.Item>
    </>
  )
}

export type { FormItemContent, FormItemProps }
export default FormItem
