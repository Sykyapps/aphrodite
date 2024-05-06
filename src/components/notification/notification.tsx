import { ArgsProps, NotificationInstance } from "antd/es/notification/interface"

import "./notification.scss"

export type NotificationProps = {
  notification: NotificationInstance
} & Omit<ArgsProps, "icon" | "closeIcon" | "placement" | "className">

export const showNotification = ({
  notification,
  type,
  message,
  description = null,
  duration = 3,
}: NotificationProps) => {
  const className = `syky-notification syky-notification-${type}`

  return notification.open({
    type,
    message,
    description,
    duration,
    className,
    placement: "bottom",
    icon: <></>,
    closeIcon: false,
  })
}
