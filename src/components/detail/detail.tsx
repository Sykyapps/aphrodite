import { Paragraph } from "../typography"

import "./detail.scss"

type DetailItem = {
  title: string
  dataIndex: string
  key: string
  render?: (value: any) => React.ReactNode
}

type DetailProps = {
  items: DetailItem[]
  dataSource: Record<any, string | number>
}

const Detail = ({ items, dataSource }: DetailProps) => {
  return (
    <div className="syky-contained-list">
      {items.map((item, index) => {
        return (
          <div key={index} className="syky-contained-list-content">
            <div className="syky-contained-list-title">
              <Paragraph bold level={1}>
                {item.title}
              </Paragraph>
            </div>
            <div className="syky-contained-list-value">
              {item.render ? (
                item.render(dataSource[item.dataIndex])
              ) : (
                <Paragraph level={2}>{dataSource[item.dataIndex]}</Paragraph>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export type { DetailItem, DetailProps }
export default Detail
