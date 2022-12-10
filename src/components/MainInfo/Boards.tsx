import {
  BoardsHead,
  BoardsTitle,
  BoardsWrap,
  BoardsColumn,
  BoardsContent,
  BoardsStatusPanel,
} from "./boards.styles"
import { useState } from "react"
import { boardsData, tasksData } from "../../data"
import Card from "./Card"
import { STATUS } from "../../const"
import { useDrop } from "react-dnd"
import { ITEM_TYPE } from "../../types"

const Boards = () => {
  const [tasks, setTasks] = useState(tasksData)

  const handleDrag = (itemStatus: number, itemId: number) => {
    const newTasks = tasks.map((task) =>
      itemId === task.id ? { ...task, status: STATUS.Completed } : task
    )
    setTasks(newTasks)
  }

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    drop: () => console.log("drop"),
  })

  return (
    <BoardsWrap>
      {boardsData.map((board) => (
        <BoardsColumn key={board.id}>
          <BoardsHead>
            <BoardsTitle>
              {board.label} <span>4</span>
            </BoardsTitle>
          </BoardsHead>
          <BoardsContent ref={drop} first={board.id === 1}>
            {tasks
              .filter((item) => item.status === board.status)
              .map((item) => (
                <Card key={item.id} item={item} />
              ))}
          </BoardsContent>
        </BoardsColumn>
      ))}
      <BoardsStatusPanel>+ Create status</BoardsStatusPanel>
    </BoardsWrap>
  )
}

export default Boards
