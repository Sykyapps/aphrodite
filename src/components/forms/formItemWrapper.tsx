import Form from "./form.tsx"

type FormItemContent = {
  name: string
  value: string | number | undefined
  onChange: any
}

type FormItemWrapperProps = {
  name: string
  label?: React.ReactNode
  labelClassName?: string
  value?: string | number | undefined
  onChange?: any
  item: ({ name, value, onChange }: FormItemContent) => JSX.Element
}

const FormItemWrapper = ({
  name,
  label,
  labelClassName = "",
  value,
  onChange,
  ...props
}: FormItemWrapperProps) => {
  const { status } = Form.Item.useStatus()
  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={name}
          className={`syky-form-item-label ${
            status === "error" ? "syky-form-item-label-error" : ""
          } ${labelClassName}`}
        >
          {label}
        </label>
      )}
      {props.item({ name, value, onChange })}
    </div>
  )
}

export default FormItemWrapper
