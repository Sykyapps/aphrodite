import { Modal as BaseModal, ModalProps as BaseModalProps } from "antd"

import Button from "../button"
import { CloseIcon } from "../icons"

import "./modal.scss"

type ModalProps = {
  title: string
  disabled?: boolean
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
  onOk,
  onClose,
  okText = "Terapkan",
  open,
  ...props
}: ModalProps) => {
  return (
    <BaseModal
      className={`syky-modal ${className}`}
      open={open}
      closeIcon={null}
      title={
        <div className="syky-modal-header">
          <button onClick={onClose} className="syky-modal-close-button">
            <CloseIcon height={16} width={16} />
          </button>
        </div>
      }
      footer={
        <Button
          onClick={onOk}
          disabled={disabled}
          style={{ width: "100%" }}
          size="large"
        >
          {okText}
        </Button>
      }
      onOk={onOk}
      onCancel={onClose}
      {...props}
    >
      <p className="syky-modal-title">{title}</p>
      {props.children}
    </BaseModal>
  )
}

export type { ModalProps }
export default Modal
