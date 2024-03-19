import { Empty, Table as BaseTable, TableProps as BaseTableProps } from "antd"

import Shimmer from "../shimmer/shimmer.tsx"

import "./table.scss"

const { Column } = BaseTable

type TableProps = {
  clickable?: boolean
  layout?: "fixed" | "auto"
  onRowClick?: (value: any) => void
  loading?: boolean
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
  layout = "auto",
  loading = false,
  rowClassName = "",
  columns,
  dataSource,
  onRowClick,
  empty,
  ...props
}: TableProps) => {
  const generateLoadingData = () => {
    const loadingData = []
    const pageSize = 10

    for (let i = 0; i < pageSize; i++) {
      const obj: any = {}
      columns?.forEach((value: any) => {
        obj[value.dataIndex] = value.dataIndex
      })
      loadingData.push(obj)
    }

    return loadingData
  }

  const locale = {
    emptyText: empty ? empty : undefined,
  }

  return (
    <>
      <BaseTable
        className={`syky-table ${loading ? "syky-table-loading" : ""} ${
          layout === "fixed" ? "syky-table-fixed" : ""
        }`}
        dataSource={!loading ? dataSource : generateLoadingData()}
        rowClassName={`${rowClassName} ${
          clickable && !loading ? "syky-table-row-clickable" : ""
        }`}
        columns={undefined}
        onRow={(record) => {
          return {
            onClick: () => {
              onRowClick ? !loading && clickable && onRowClick(record) : null
            },
          }
        }}
        pagination={false}
        showSorterTooltip={false}
        locale={locale}
        {...props}
      >
        {columns?.map((column: any) => {
          return (
            <>
              {!loading ? (
                <Column {...column} />
              ) : (
                <Column
                  title={column.title}
                  dataIndex={column.dataIndex}
                  key={column.key}
                  width={column.width}
                  render={() => <Shimmer />}
                />
              )}
            </>
          )
        })}
      </BaseTable>
      <>
        {dataSource && dataSource.length > 0 ? (
          <div className="syky-table-mobile-container">
            {!loading ? (
              <>
                {dataSource.map((data: any, index: number) => {
                  return (
                    <div
                      key={Math.random() + index}
                      className={`syky-table-mobile-wrapper ${
                        clickable ? "syky-table-mobile-clickable" : ""
                      }`}
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
                                  ? column.render(data[column.dataIndex])
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
                {[1, 2, 3].map((_, index: number) => {
                  return (
                    <div
                      key={index}
                      className={`syky-table-mobile-wrapper ${
                        loading ? "syky-table-mobile-loading" : ""
                      }`}
                    >
                      <table className="syky-table-mobile">
                        <tbody>
                          {columns?.map((column: any) => (
                            <tr
                              key={Math.random() + index}
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
        ) : (
          <div className="syky-table-mobile-empty">
            {empty ? empty : <Empty />}
          </div>
        )}
      </>
    </>
  )
}

export type { TableProps }
export default Table
