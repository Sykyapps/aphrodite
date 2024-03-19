import { Menu, MenuProps } from "antd"

import "./navMenu.scss"

type NavMenuProps = {
  items: MenuProps["items"]
} & Exclude<MenuProps, "theme" | "mode">

const NavMenu = ({ items, className = "", ...props }: NavMenuProps) => {
  return (
    <Menu
      className={`syky-navMenu ${className}`}
      theme="light"
      mode="inline"
      items={items}
      {...props}
    />
  )
}

export type { NavMenuProps }
export default NavMenu
