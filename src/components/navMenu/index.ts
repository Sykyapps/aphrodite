import { MenuProps } from "antd"

import { default as NavMenu, NavMenuProps } from "./navMenu.tsx"

type NavMenuItem = Required<MenuProps>["items"][number]

export type { NavMenuItem, NavMenuProps }
export default NavMenu
