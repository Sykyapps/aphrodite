import { Empty, Table as BaseTable, TableProps as BaseTableProps } from "antd"
import { useMediaQuery } from "react-responsive"

import { setBreakpoint } from "../../helpers/setBreakpoint.ts"
import Shimmer from "../shimmer/shimmer.tsx"

import "./table.scss"

const { Column } = BaseTable

type TableProps = {
  clickable?: boolean
  hoverable?: boolean
  layout?: "fixed" | "auto"
  breakpoint?: "sm" | "md" | "lg" | "xl" | "xxl"
  onRowClick?: (value: any) => void
  loading?: boolean
  defaultMobileLoadingLength?: number
  columns: BaseTableProps["columns"]
  dataSource: any
  rowClassName?: string
  empty?: React.ReactNode
} & Exclude<
  BaseTableProps,
  "loading" | "columns" | "dataSource" | "pagination" | "onRow" | "locale"
>

const Table = ({
  clickable = false,
  hoverable = false,
  layout = "auto",
  breakpoint = "lg",
  loading = false,
  defaultMobileLoadingLength = 3,
  rowClassName = "",
  columns,
  dataSource,
  onRowClick,
  empty,
  ...props
}: TableProps) => {
  const isDesktop = useMediaQuery({ minWidth: setBreakpoint(breakpoint) })

  const mobileLoadingArray = Array.from(
    { length: defaultMobileLoadingLength },
    (_, i) => i,
  )

  const generateLoadingData = () => {
    const loadingData = []
    const pageSize = 10

    for (let i = 0; i < pageSize; i++) {
      const obj: any = {
        key: i,
      }
      columns?.forEach((value: any) => {
        obj[value.dataIndex] = value.dataIndex
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
            dataSource={!loading ? dataSource : generateLoadingData()}
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
              {empty ? empty : <Empty />}
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
                              {columns?.map((column: any) => (
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
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )
                    })}
                  </>
                ) : (
                  <>
                    {generateLoadingData().map((data: any, index: number) => {
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
                              {columns?.map((column: any) => (
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
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )
                    })}
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              {loading ? (
                <div className="syky-table-mobile-container">
                  {mobileLoadingArray.map((data: number) => {
                    return (
                      <div
                        key={data}
                        className={`syky-table-mobile-wrapper ${
                          loading ? "syky-table-mobile-loading" : ""
                        }`}
                      >
                        <table className="syky-table-mobile">
                          <tbody>
                            {columns?.map((column: any, index: number) => (
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
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="syky-table-mobile-empty">
                  {empty ? empty : <Empty />}
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  )
}

export type { TableProps }
export default Table
