import { Modal as BaseModal, ModalProps as BaseModalProps } from "antd"

import Button from "../button"
import { CloseIcon } from "../icons"

import "./modal.scss"

type ModalProps = {
  title: string
  disabled?: boolean
  hideHeader?: boolean
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
  disabled = false,
  hideHeader = false,
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
        <div className="flex gap-3">
          {cancelButton && (
            <Button
              buttonVariant="secondary"
              size="large"
              danger={danger}
              onClick={onClose}
              style={{ width: "100%" }}
            >
              {cancelText}
            </Button>
          )}
          <Button
            size="large"
            danger={danger}
            disabled={disabled}
            onClick={onOk}
            style={{ width: "100%" }}
          >
            {okText}
          </Button>
        </div>
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
