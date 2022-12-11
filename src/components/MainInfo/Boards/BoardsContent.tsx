import { FC } from 'react'
import { useDrop } from "react-dnd"
import { ITEM_TYPE } from '../../../types'
import {
  BoardsContent as Content
} from "./boards.styles"
  
interface IBoardsContent {
  id?: number,
  children: React.ReactNode,
  handleDrop: (item: any) => void,
  status: string,
}

  const BoardsContent:FC<IBoardsContent> = ({id, children, handleDrop, status}) => {
    const [, drop] = useDrop({
      accept: ITEM_TYPE,
      canDrop: (item) => item.status !== status,
      drop: (item) => handleDrop(item, status),
    })

    return (
            <Content ref={drop} first={id === 1}>
                {children}
            </Content>
    )
  }
  
  export default BoardsContent
  