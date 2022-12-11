import { useState } from "react"
import { boardsData, tasksData } from "../../../data"
import { IItem } from "../../../types"
import Card from "../Card/Card"
import {
  BoardsColumn,
  BoardsHead,
  BoardsStatusPanel,
  BoardsTitle,
  BoardsWrap,
} from "./boards.styles"
import BoardsContent from "./BoardsContent"

const Boards = () => {
  const [tasks, setTasks] = useState<IItem[]>(tasksData)

  const handleDrop = (item:IItem, newStatus: string) => {
    const newTasks = tasks.filter((task) => task.id !== item.id)
    setTasks([...newTasks, { ...item, status: newStatus }])
  }

  const handleMoveItem = (dragIndex: number, hoverIndex: number, status: string) => {

    setTasks((prevItems) => {
      const newArrItems = prevItems
      const currentStatusItems = newArrItems.filter((item) => item.status === status)
      const otherStatusItems = newArrItems.filter(item => item.status !== status)
      const items = currentStatusItems.filter((item, idx) =>  dragIndex !== idx)
      const dragItem = currentStatusItems[dragIndex]

      items.splice(hoverIndex, 0, dragItem)

      return [...otherStatusItems, ...items]
    })
  }

  return (
    <BoardsWrap>
      {boardsData.map((board) => (
        <BoardsColumn key={board.id}>
          <BoardsHead>
            <BoardsTitle>
              {board.label} <span>4</span>
            </BoardsTitle>
          </BoardsHead>
          <BoardsContent
            key={board.id}
            status={board.status}
            id={board.id}
            handleDrop={handleDrop}
          >
            {tasks
              .filter((item) => item.status === board.status)
              .map((item, idx) => (
                <Card
                  key={item.id}
                  item={item}
                  index={idx}
                  handleMoveItem={handleMoveItem}
                />
              ))}
          </BoardsContent>
        </BoardsColumn>
      ))}
      <BoardsStatusPanel>+ Create status</BoardsStatusPanel>
    </BoardsWrap>
  )
}

export default Boards
