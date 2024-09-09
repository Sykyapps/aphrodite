import { Modal as BaseModal, ModalProps as BaseModalProps } from "antd"

import Button from "../button"
import { CloseIcon } from "../icons"

import "./modal.scss"

type ModalProps = {
  title: string
  loading?: boolean
  disabled?: boolean
  hideHeader?: boolean
  hideFooter?: boolean
  cancelButton?: boolean
  danger?: boolean
  onOk: () => void
  onClose: () => void
  okText?: string
  open: boolean
} & Exclude<
  BaseModalProps,
  "title" | "closeIcon" | "onOk" | "onCancel" | "open"
>

const Modal = ({
  className = "",
  title,
  loading = false,
  disabled = false,
  hideHeader = false,
  hideFooter = false,
  cancelButton = false,
  danger = false,
  onOk,
  onClose,
  okText = "Terapkan",
  cancelText = "Kembali",
  open,
  ...props
}: ModalProps) => {
  return (
    <BaseModal
      className={`syky-modal ${className}`}
      open={open}
      closeIcon={null}
      title={
        !hideHeader ? (
          <div className="syky-modal-header">
            <button onClick={onClose} className="syky-modal-close-button">
              <CloseIcon height={16} width={16} />
            </button>
          </div>
        ) : null
      }
      footer={
        !hideFooter && (
          <div className="flex gap-3">
            {cancelButton && (
              <Button
                buttonVariant="secondary"
                disableHover
                size="large"
                danger={danger}
                disabled={loading}
                onClick={onClose}
                style={{ width: "100%" }}
              >
                {cancelText}
              </Button>
            )}
            <Button
              size="large"
              danger={danger}
              loading={loading}
              disabled={disabled}
              onClick={onOk}
              style={{ width: "100%" }}
            >
              {okText}
            </Button>
          </div>
        )
      }
      onOk={onOk}
      onCancel={onClose}
      {...props}
    >
      {!hideHeader && <p className="syky-modal-title">{title}</p>}
      {props.children}
    </BaseModal>
  )
}

export type { ModalProps }
export default Modal
