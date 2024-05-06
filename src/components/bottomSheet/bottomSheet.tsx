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
  hideHeader?: boolean
  cancelButton?: boolean
  danger?: boolean
  onOk: () => void
  onClose: () => void
  okText?: string
  cancelText?: string
} & BaseBottomSheetProps

const BottomSheet = ({
  open,
  title,
  disabled = false,
  hideHeader = false,
  cancelButton = false,
  danger = false,
  onOk,
  onClose,
  okText = "Terapkan",
  cancelText = "Kembali",
  children,
  ...props
}: BottomSheetProps) => {
  return (
    <BaseBottomSheet
      className="syky-bottom-sheet"
      open={open}
      footer={
        <div className="flex gap-3">
          {cancelButton && (
            <Button
              buttonVariant="secondary"
              size="large"
              onClick={onClose}
              danger={danger}
              style={{ width: "100%" }}
            >
              {cancelText}
            </Button>
          )}
          <Button
            size="large"
            disabled={disabled}
            onClick={onOk}
            danger={danger}
            style={{ width: "100%" }}
          >
            {okText}
          </Button>
        </div>
      }
      onDismiss={onClose}
      {...props}
    >
      <div className="syky-bottom-sheet-content-wrapper">
        {!hideHeader && (
          <>
            <div className="syky-bottom-sheet-header">
              <button
                onClick={onClose}
                className="syky-bottom-sheet-close-button"
              >
                <CloseIcon height={16} width={16} />
              </button>
            </div>
            <p className="syky-bottom-sheet-title">{title}</p>
          </>
        )}
        <div>{children}</div>
      </div>
    </BaseBottomSheet>
  )
}

export type { BottomSheetProps }
export default BottomSheet
