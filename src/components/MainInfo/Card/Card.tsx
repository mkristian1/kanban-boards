import { FC, useRef } from 'react';
import { useDrag, useDrop, XYCoord } from 'react-dnd';
import { IDragingItem, IItem, ITEM_TYPE } from '../../../types';
import CardWrap from './card.styles';

export interface ICard {
  item: IItem;
  index: number;
  handleMoveItem: (
    dragIndex: number,
    hoverIndex: number,
    status: string
  ) => void;
}

const Card: FC<ICard> = ({ item, index, handleMoveItem }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop<IDragingItem>({
    accept: ITEM_TYPE,
    hover(hoverItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = hoverItem.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
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
      handleMoveItem(dragIndex, hoverIndex, hoverItem.status);
      // eslint-disable-next-line no-param-reassign
      hoverItem.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag<
    IDragingItem,
    void,
    { isDragging: boolean }
  >({
    type: ITEM_TYPE,
    item: { ...item, index },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  drag(drop(ref));

  const { status, type, label, time } = item;

  return (
    <CardWrap
      style={{ opacity: isDragging ? 0.4 : 1 }}
      ref={ref}
      status={status}
      type={type}
    >
      <p>{label}</p>
      <time>{time}</time>
    </CardWrap>
  );
};

export default Card;
