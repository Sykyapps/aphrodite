import { Tabs as BaseTabs, TabsProps as BaseTabsProps } from "antd"
import { useMediaQuery } from "react-responsive"

import { setBreakpoint } from "../../helpers/setBreakpoint.ts"

import "./tabs.scss"

type TabsProps = {
  items: BaseTabsProps["items"]
  breakpoint?: "sm" | "md" | "lg" | "xl" | "xxl"
} & Omit<BaseTabsProps, "items">

const Tabs = ({
  items,
  centered,
  breakpoint = "lg",
  className = "",
  ...props
}: TabsProps) => {
  const isDesktop = useMediaQuery({ minWidth: setBreakpoint(breakpoint) })

  return (
    <BaseTabs
      className={`syky-tabs ${className}`}
      items={items}
      centered={centered ? centered : !isDesktop}
      {...props}
    />
  )
}

export type { TabsProps }
export default Tabs
