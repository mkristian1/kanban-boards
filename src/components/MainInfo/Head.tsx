import { FC } from "react"
import Dropdown from "../../ui/Dropdown"
import { Button, Header } from "./head.styles"

const Head: FC = () => {
  return (
    <Header>
      <Button>+ Add new</Button>
      <Dropdown
        list={[
          { id: 1, label: "Board view", active: false },
          { id: 2, label: "Table view", active: false },
          { id: 3, label: "Kanban", active: true },
        ]}
        title="Kanban"
      />
      <Dropdown
        list={[
          { id: 1, label: "Test", active: false },
        ]}
        title="Filter"
      />
    </Header>
  )
}

export default Head
