import { FC } from "react"
import { CardWrap } from "./card.styles"
import { useDrag } from "react-dnd"
import { IItem, ITEM_TYPE } from "../../types"

const Card: FC<IItem> = ({ item }) => {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: ITEM_TYPE,
      item: item,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    []
  )

  const { status, type, label, time } = item

  return (
    <CardWrap ref={drag} status={status} type={type}>
      <p>{label}</p>
      <time>{time}</time>
    </CardWrap>
  )
}

export default Card
