import { FC, useRef } from "react"
import { CardWrap } from "./card.styles"
import { useDrag, useDrop, XYCoord } from "react-dnd"
import { IItem, ITEM_TYPE } from "../../../types"

export interface ICard {
  item: IItem,
  index: number,
  handleMoveItem: (dragIndex: number, hoverIndex: number, status: string) => void
}

const Card: FC<ICard> = ({ item, index, handleMoveItem }) => {
  const ref = useRef<HTMLDivElement | null>(null)

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover(item, monitor) {
        if (!ref.current) {
            return
        }
        const dragIndex = item.index;
        const hoverIndex = index;
        
        if (dragIndex === hoverIndex) {
          return
        }

        const hoveredRect = ref.current.getBoundingClientRect();
        const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
        const mousePosition = monitor.getClientOffset() as XYCoord;
        const hoverClientY = mousePosition.y - hoveredRect.top;

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }
        handleMoveItem(dragIndex, hoverIndex, item.status);
        item.index = hoverIndex;
    },
});

  const [, drag] = useDrag({
      type: ITEM_TYPE,
      item: {...item, index},
    }
  )

  drag(drop(ref));

  const { status, type, label, time } = item

  return (
    <CardWrap ref={ref} status={status} type={type}>
      <p>{label}</p>
      <time>{time}</time>
    </CardWrap>
  )
}

export default Card
