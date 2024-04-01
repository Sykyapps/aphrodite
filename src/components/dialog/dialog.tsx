import { useMediaQuery } from "react-responsive"

import { setBreakpoint } from "../../helpers/setBreakpoint.ts"
import BottomSheet from "../bottomSheet"
import Modal from "../modal"

interface DialogProps {
  title: string
  onOk: () => void
  onClose: () => void
  open: boolean
  disabled: boolean
  children: React.ReactNode
  width?: string
  breakpoint?: "sm" | "md" | "lg" | "xl" | "xxl"
  okText?: string
}

const Dialog = ({
  breakpoint = "lg",
  okText = "Terapkan",
  ...props
}: DialogProps) => {
  const isModal = useMediaQuery({ minWidth: setBreakpoint(breakpoint) })

  return (
    <>
      {isModal ? (
        <Modal
          title={props.title}
          onOk={props.onOk}
          onClose={props.onClose}
          open={props.open}
          disabled={props.disabled}
          centered
          width={props.width}
          okText={okText}
        >
          {props.children}
        </Modal>
      ) : (
        <BottomSheet
          title={props.title}
          onOk={props.onOk}
          onClose={props.onClose}
          open={props.open}
          disabled={props.disabled}
          okText={okText}
        >
          {props.children}
        </BottomSheet>
      )}
    </>
  )
}

export type { DialogProps }
export default Dialog
