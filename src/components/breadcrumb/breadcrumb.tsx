import {
  Breadcrumb as BaseBreadcrumb,
  BreadcrumbProps as BaseBreadcrumbProps,
} from "antd"

import { ArrowRightIcon } from "../icons"

import "./breadcrumb.scss"

type BreadcrumbProps = {
  items: BaseBreadcrumbProps["items"]
} & Exclude<BaseBreadcrumbProps, "items" | "separator">

const Breadcrumb = ({ items, className = "", ...props }: BreadcrumbProps) => {
  return (
    <BaseBreadcrumb
      className={`syky-breadcrumb ${className}`}
      items={items}
      separator={<ArrowRightIcon />}
      {...props}
    />
  )
}

export type { BreadcrumbProps }
export default Breadcrumb
