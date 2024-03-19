import PinInput from "react-pin-input"

type PinFieldProps = {
  value?: string
  onChange?: (value: string) => void
  isError?: boolean
}

const PinField = ({ isError = false, ...props }: PinFieldProps) => {
  return (
    <PinInput
      initialValue=""
      length={6}
      secret
      secretDelay={200}
      type="numeric"
      regexCriteria={/^[0-9]*$/}
      onChange={props.onChange}
      inputStyle={{
        width: "36px",
        height: "36px",
        fontSize: "24px",
        fontFamily:
          "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
        marginRight: "8px",
        marginLeft: "0px",
        backgroundColor: "#FFFFFF",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: `${isError ? "#FF3165" : "#E0E3EF"}`,
        borderRadius: "4px",
        textAlign: "center",
      }}
    />
  )
}

export type { PinFieldProps }
export default PinField
