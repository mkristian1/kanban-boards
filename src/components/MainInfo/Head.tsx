import { FC } from "react"
import Dropdown from "../../ui/Dropdown"
import { Button, Header } from "./head.styles"

const Head: FC = () => {
  return (
    <Header>
      <Button>+ Add new</Button>
      <Dropdown title="Kanban" />
    </Header>
  )
}

export default Head
