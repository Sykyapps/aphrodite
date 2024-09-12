import { Empty, Table as BaseTable, TableProps as BaseTableProps } from "antd"
import { useMediaQuery } from "react-responsive"

import { setBreakpoint } from "../../helpers/setBreakpoint.ts"
import Shimmer from "../shimmer/shimmer.tsx"

import "./table.scss"

const { Column } = BaseTable

type ActionTableColumnType = {
  isAction?: boolean
} & BaseTableProps["columns"]

type TableProps = {
  rowKey?: string | number
  clickable?: boolean
  hoverable?: boolean
  layout?: "fixed" | "auto"
  breakpoint?: "sm" | "md" | "lg" | "xl" | "xxl"
  onRowClick?: (value: any) => void
  loading?: boolean
  defaultMobileLoadingLength?: number
  pageSize?: number
  columns: BaseTableProps["columns"]
  dataSource: any
  rowClassName?: string
  empty?: React.ReactNode
  isError?: boolean
  errorPlaceholder?: React.ReactNode
  isSearch?: boolean
  emptySearchPlaceholder?: React.ReactNode
} & Exclude<
  BaseTableProps,
  | "loading"
  | "columns"
  | "dataSource"
  | "pagination"
  | "onRow"
  | "locale"
  | "rowKey"
>

const Table = ({
  rowKey = "id",
  clickable = false,
  hoverable = true,
  layout = "auto",
  breakpoint = "lg",
  loading = false,
  pageSize = 10,
  defaultMobileLoadingLength = 3,
  rowClassName = "",
  columns,
  dataSource,
  onRowClick,
  empty = <Empty />,
  isError = false,
  errorPlaceholder = <Empty />,
  isSearch = false,
  emptySearchPlaceholder = <Empty />,
  ...props
}: TableProps) => {
  const isDesktop = useMediaQuery({ minWidth: setBreakpoint(breakpoint) })

  const defaultMobileLoadingArray = Array.from(
    { length: defaultMobileLoadingLength },
    (_, i) => i,
  )

  const generatePageLoadingData = () => {
    const loadingData = []

    for (let i = 0; i < pageSize; i++) {
      const obj: any = {
        key: i,
      }
      columns?.forEach((value: any) => {
        obj[value.dataIndex] = value.dataIndex + i
      })
      loadingData.push(obj)
    }
    return loadingData
  }

  return (
    <>
      {isDesktop ? (
        <>
          <BaseTable
            className={`syky-table ${loading ? "syky-table-loading" : ""} ${
              layout === "fixed" ? "syky-table-fixed" : ""
            } ${
              !loading && dataSource && dataSource.length === 0
                ? "syky-table-empty"
                : ""
            } ${!hoverable ? "syky-table-disable-hover" : ""}`}
            dataSource={!loading ? dataSource : generatePageLoadingData()}
            rowClassName={`${rowClassName} ${
              clickable && !loading ? "syky-table-row-clickable" : ""
            }`}
            columns={undefined}
            onRow={(record) => {
              return {
                onClick: () => {
                  onRowClick
                    ? !loading && clickable && onRowClick(record)
                    : null
                },
              }
            }}
            pagination={false}
            showSorterTooltip={false}
            locale={undefined}
            rowKey={loading ? "key" : rowKey}
            {...props}
          >
            {loading &&
              columns?.map(({ key, ...column }: any) => {
                return (
                  <Column
                    key={key}
                    title={column.title}
                    dataIndex={column.dataIndex}
                    width={column.width}
                    render={() => <Shimmer />}
                  />
                )
              })}
            {!loading &&
              columns?.map(({ key, ...column }: any) => {
                return <Column key={key} {...column} />
              })}
          </BaseTable>
          {dataSource && dataSource.length === 0 && !loading && (
            <div className="syky-table-empty-wrapper">
              {isError
                ? errorPlaceholder
                : isSearch
                  ? emptySearchPlaceholder
                  : empty}
            </div>
          )}
        </>
      ) : (
        <>
          {dataSource && dataSource.length > 0 ? (
            <>
              <div className="syky-table-mobile-container">
                {!loading ? (
                  <>
                    {dataSource.map((data: any, index: number) => {
                      return (
                        <div
                          key={index}
                          className={`syky-table-mobile-wrapper ${
                            clickable ? "syky-table-mobile-clickable" : ""
                          } ${!hoverable ? "syky-table-disable-hover" : ""}`}
                          onClick={() =>
                            onRowClick ? clickable && onRowClick(data) : null
                          }
                        >
                          <table className="syky-table-mobile">
                            <tbody>
                              {columns?.map((column: any) => {
                                if (column.isAction) {
                                  return (
                                    <tr
                                      key={Math.random() + data[column.key]}
                                      className="syky-table-mobile-row"
                                    >
                                      <td
                                        colSpan={2}
                                        className="syky-table-mobile-column-value"
                                      >
                                        {column.render
                                          ? column.render(data, data)
                                          : data[column.dataIndex]}
                                      </td>
                                    </tr>
                                  )
                                }

                                return (
                                  <tr
                                    key={Math.random() + data[column.key]}
                                    className="syky-table-mobile-row"
                                  >
                                    <td className="syky-table-mobile-column-title">
                                      {column.title}
                                    </td>
                                    <td className="syky-table-mobile-column-value">
                                      {column.render
                                        ? column.render(
                                            data[column.dataIndex],
                                            data,
                                          )
                                        : data[column.dataIndex]}
                                    </td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                      )
                    })}
                  </>
                ) : (
                  <>
                    {generatePageLoadingData().map(
                      (data: any, index: number) => {
                        return (
                          <div
                            key={index}
                            className={`syky-table-mobile-wrapper ${
                              loading ? "syky-table-mobile-loading" : ""
                            }`}
                            onClick={() => {}}
                          >
                            <table className="syky-table-mobile">
                              <tbody>
                                {columns?.map((column: any) => {
                                  if (column.isAction) {
                                    return (
                                      <tr
                                        key={Math.random() + data[column.key]}
                                        className="syky-table-mobile-row"
                                      >
                                        <td
                                          colSpan={2}
                                          className="syky-table-mobile-column-value"
                                        >
                                          <Shimmer />
                                        </td>
                                      </tr>
                                    )
                                  }

                                  return (
                                    <tr
                                      key={Math.random() + data[column.key]}
                                      className="syky-table-mobile-row"
                                    >
                                      <td className="syky-table-mobile-column-title">
                                        {column.title}
                                      </td>
                                      <td className="syky-table-mobile-column-value">
                                        <Shimmer />
                                      </td>
                                    </tr>
                                  )
                                })}
                              </tbody>
                            </table>
                          </div>
                        )
                      },
                    )}
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              {loading ? (
                <div className="syky-table-mobile-container">
                  {defaultMobileLoadingArray.map((data: number) => {
                    return (
                      <div
                        key={data}
                        className={`syky-table-mobile-wrapper ${
                          loading ? "syky-table-mobile-loading" : ""
                        }`}
                      >
                        <table className="syky-table-mobile">
                          <tbody>
                            {columns?.map((column: any, index: number) => {
                              if (column.isAction) {
                                return (
                                  <tr
                                    key={data + index}
                                    className="syky-table-mobile-row"
                                  >
                                    <td
                                      colSpan={2}
                                      className="syky-table-mobile-column-value"
                                    >
                                      <Shimmer />
                                    </td>
                                  </tr>
                                )
                              }

                              return (
                                <tr
                                  key={data + index}
                                  className="syky-table-mobile-row"
                                >
                                  <td className="syky-table-mobile-column-title">
                                    {column.title}
                                  </td>
                                  <td className="syky-table-mobile-column-value">
                                    <Shimmer />
                                  </td>
                                </tr>
                              )
                            })}
                          </tbody>
                        </table>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="syky-table-mobile-empty">
                  {isError
                    ? errorPlaceholder
                    : isSearch
                      ? emptySearchPlaceholder
                      : empty}
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  )
}

export type { ActionTableColumnType, TableProps }
export default Table
