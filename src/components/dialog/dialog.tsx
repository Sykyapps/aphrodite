import { useMediaQuery } from "react-responsive"

import { setBreakpoint } from "../../helpers/setBreakpoint.ts"
import BottomSheet from "../bottomSheet"
import Modal from "../modal"

interface DialogProps {
  title: string
  onOk: () => void
  onClose: () => void
  open: boolean
  loading?: boolean
  disabled?: boolean
  hideHeader?: boolean
  cancelButton?: boolean
  danger?: boolean
  children: React.ReactNode
  width?: string
  breakpoint?: "sm" | "md" | "lg" | "xl" | "xxl"
  okText?: string
  cancelText?: string
}

const Dialog = ({
  loading = false,
  disabled = false,
  breakpoint = "lg",
  okText = "Terapkan",
  cancelText = "Kembali",
  ...props
}: DialogProps) => {
  const isModal = useMediaQuery({ minWidth: setBreakpoint(breakpoint) })

  return (
    <>
      {isModal ? (
        <Modal
          title={props.title}
          onOk={props.onOk}
          onClose={!loading ? props.onClose : () => {}}
          open={props.open}
          loading={loading}
          disabled={disabled}
          hideHeader={props.hideHeader}
          cancelButton={props.cancelButton}
          danger={props.danger}
          centered
          width={props.width}
          okText={okText}
          cancelText={cancelText}
        >
          {props.children}
        </Modal>
      ) : (
        <BottomSheet
          title={props.title}
          onOk={props.onOk}
          onClose={!loading ? props.onClose : () => {}}
          open={props.open}
          loading={loading}
          disabled={disabled}
          hideHeader={props.hideHeader}
          cancelButton={props.cancelButton}
          danger={props.danger}
          okText={okText}
          cancelText={cancelText}
        >
          {props.children}
        </BottomSheet>
      )}
    </>
  )
}

export type { DialogProps }
export default Dialog
