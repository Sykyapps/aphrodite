import { Empty } from "antd"

import Shimmer from "../shimmer"

import "./cardTable.scss"

type CardTableProps = {
  loading?: boolean
  hoverable?: boolean
  columns: any
  dataSource: any
  empty?: React.ReactNode
  onRowClick?: (value: any) => void
}

const CardTable = ({
  loading = false,
  hoverable = false,
  dataSource,
  columns,
  empty,
  onRowClick,
}: CardTableProps) => {
  const loadingData = Array.from({ length: 8 }, (_, i) => i)

  if (loading) {
    return (
      <>
        <div className="syky-card-table-header">
          {columns?.map((column: any, index: number) => {
            return (
              <div key={index} className="syky-card-table-header-item-wrapper">
                <p className="syky-card-table-header-item">{column.title}</p>
              </div>
            )
          })}
        </div>
        {loadingData.map((_, index) => {
          return (
            <div key={index} className="syky-card-table-row">
              {columns?.map((_: any, index: number) => {
                return (
                  <div key={index} className="syky-card-table-row-item-wrapper">
                    <Shimmer />
                  </div>
                )
              })}
            </div>
          )
        })}
      </>
    )
  }

  return (
    <>
      <div className="syky-card-table-header">
        {columns?.map((column: any) => {
          return (
            <div
              key={column.key}
              className="syky-card-table-header-item-wrapper"
            >
              <p className="syky-card-table-header-item">{column.title}</p>
            </div>
          )
        })}
      </div>
      {dataSource && dataSource.length > 0 ? (
        dataSource.map((data: any) => {
          return (
            <div
              key={data.id}
              className={`syky-card-table-row ${
                hoverable ? "syky-card-table-hoverable" : ""
              }`}
              onClick={() => (onRowClick ? onRowClick(data) : null)}
            >
              {columns?.map((column: any) => {
                return (
                  <div
                    key={Math.random() + data[column.key]}
                    className="syky-card-table-row-item-wrapper"
                  >
                    <p className="syky-card-table-row-item">
                      {column.render
                        ? column.render(data[column.dataIndex], data)
                        : data[column.dataIndex]}
                    </p>
                  </div>
                )
              })}
            </div>
          )
        })
      ) : (
        <div className="flex flex-col justify-center h-56">
          {empty ? empty : <Empty />}
        </div>
      )}
    </>
  )
}

export type { CardTableProps }
export default CardTable
