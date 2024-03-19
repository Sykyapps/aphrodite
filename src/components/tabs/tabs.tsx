import { Tabs as BaseTabs, TabsProps as BaseTabsProps } from "antd"

import "./tabs.scss"

type TabsProps = {
  items: BaseTabsProps["items"]
} & Omit<BaseTabsProps, "items">

const Tabs = ({ items, className = "", ...props }: TabsProps) => {
  return (
    <BaseTabs className={`syky-tabs ${className}`} items={items} {...props} />
  )
}

export type { TabsProps }
export default Tabs
