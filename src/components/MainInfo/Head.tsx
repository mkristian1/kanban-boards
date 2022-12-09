import { FC } from "react"
import { avatar, bell } from "../../assets"
import Dropdown from "../../ui/Dropdown"
import Search from "../../ui/Search"
import { Button, Header, LSide, Notification, RSide, WrapNotification } from "./head.styles"

const Head: FC = () => {
  return (
    <Header>
      <LSide>
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
          list={[{ id: 1, label: "Test", active: false }]}
          title="Filter"
        />
      </LSide>
      <RSide>
        <Search head />
        <WrapNotification>
          <img src={bell} alt="Bell" />
          <Notification>
            99+
          </Notification>
        </WrapNotification>
        <img src={avatar} alt="Avatar" />
      </RSide>
    </Header>
  )
}

export default Head
