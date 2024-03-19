import {
  Pagination as BasePagination,
  PaginationProps as BasePaginationProps,
} from "antd"

import Shimmer from "../shimmer/shimmer.tsx"

import "./pagination.scss"

type PaginationProps = {
  loading?: boolean
  showSizeChanger?: boolean
} & Omit<BasePaginationProps, "showSizeChanger">

const Pagination = ({
  loading = false,
  showSizeChanger = false,
  className = "",
  ...props
}: PaginationProps) => {
  return (
    <>
      {!loading ? (
        <BasePagination
          className={`syky-pagination ${className}`}
          showSizeChanger={showSizeChanger}
          {...props}
        />
      ) : (
        <div className="syky-pagination-loading-wrapper">
          <Shimmer width={32} height={32} />
          <Shimmer width={32} height={32} />
          <Shimmer width={32} height={32} />
        </div>
      )}
    </>
  )
}

export type { PaginationProps }
export default Pagination
