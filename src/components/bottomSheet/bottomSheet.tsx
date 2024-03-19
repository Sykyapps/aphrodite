import {
  BottomSheet as BaseBottomSheet,
  BottomSheetProps as BaseBottomSheetProps,
} from "react-spring-bottom-sheet"

import Button from "../button"
import { CloseIcon } from "../icons"

import "./bottomSheet.scss"

type BottomSheetProps = {
  title: string
  disabled?: boolean
  onOk: () => void
  onClose: () => void
  okText?: string
} & BaseBottomSheetProps

const BottomSheet = ({
  open,
  title,
  disabled = false,
  onOk,
  onClose,
  okText = "Terapkan",
  children,
  ...props
}: BottomSheetProps) => {
  return (
    <BaseBottomSheet
      className="syky-bottom-sheet"
      open={open}
      footer={
        <Button
          size="large"
          disabled={disabled}
          onClick={onOk}
          style={{ width: "100%" }}
        >
          {okText}
        </Button>
      }
      onDismiss={onClose}
      {...props}
    >
      <div className="syky-bottom-sheet-content-wrapper">
        <div className="syky-bottom-sheet-header">
          <button onClick={onClose} className="syky-bottom-sheet-close-button">
            <CloseIcon height={16} width={16} />
          </button>
        </div>
        <p className="syky-bottom-sheet-title">{title}</p>
        <div>{children}</div>
      </div>
    </BaseBottomSheet>
  )
}

export type { BottomSheetProps }
export default BottomSheet
