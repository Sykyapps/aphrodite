import Button from "../button"
import { Paragraph } from "../typography"

import "./filterChip.scss"

type FilterChipProps = {
  value: string
  onRemove: () => void
}

const FilterChip = (props: FilterChipProps) => {
  return (
    <div className="syky-filter-chip">
      <Paragraph level={3} color="primary">
        {props.value}
      </Paragraph>
      <Button
        className="syky-filter-chip-remove-button"
        buttonVariant="icon"
        size="small"
        onClick={props.onRemove}
      >
        x
      </Button>
    </div>
  )
}

export type { FilterChipProps }
export default FilterChip
