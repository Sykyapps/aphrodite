import { useEffect, useState } from "react"
import { Tag as BaseTag, TagProps as BaseTagProps } from "antd"

import "./tags.scss"

type TagsItem = {
  name: string
  key: string
}

type TagsProps = {
  items: TagsItem[]
  multiple?: boolean
  onSelect: (value: string[]) => void
  selected?: string[]
} & Exclude<BaseTagProps, "key" | "checked" | "onChange">

const Tags = ({
  className = "",
  items,
  multiple = false,
  onSelect,
  selected,
  ...props
}: TagsProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>(
    selected ? [...selected] : [],
  )

  const handleOnSelect = (tag: string, checked: boolean) => {
    if (!multiple) {
      const nextSelectedTags = checked ? [tag] : []
      setSelectedTags(nextSelectedTags)
      onSelect(nextSelectedTags)
      return
    }

    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag)
    setSelectedTags(nextSelectedTags)
    onSelect(nextSelectedTags)
  }

  useEffect(() => {
    setSelectedTags(selected ? [...selected] : [])
  }, [selected])

  return (
    <div className="syky-tags-wrapper">
      {items.map((tag: any) => {
        return (
          <BaseTag.CheckableTag
            className={`syky-tags ${className}`}
            key={tag.key}
            checked={selectedTags.includes(tag.key)}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onChange={(checked) => handleOnSelect(tag.key, checked)}
            {...props}
          >
            {tag.name}
          </BaseTag.CheckableTag>
        )
      })}
    </div>
  )
}

export type { TagsItem, TagsProps }
export default Tags
