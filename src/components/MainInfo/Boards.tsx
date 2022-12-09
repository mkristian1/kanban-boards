import {
  BoardsHead,
  BoardsTitle,
  BoardsWrap,
  BoardsColumn,
  BoardsContent,
  BoardsStatusPanel,
} from "./boards.styles"
import { useState } from "react"
import { boardsMock } from "../../const"
import Card from "./Card"

const Boards = () => {
  const [boards, setBoards] = useState(boardsMock)

  return (
    <BoardsWrap>
      {boards.map((board) => (
        <BoardsColumn key={board.id}>
          <BoardsHead>
            <BoardsTitle>
              {board.label} <span>{board.items.length}</span>
            </BoardsTitle>
          </BoardsHead>
          <BoardsContent>
            {board.items.map((item) => (
              <Card key={item.id} title={item.label} time={item.date} />
            ))}
          </BoardsContent>
        </BoardsColumn>
      ))}
      <BoardsStatusPanel>+ Create status</BoardsStatusPanel>
    </BoardsWrap>
  )
}

export default Boards
