import { FC, useState } from "react"
import { Chevron } from "../../assets"
import { Button, DropList, DropListItem } from "./dropdown.styles"

interface IDropdown {
  title: string
  list: { id: number; label: string, active: boolean }[]
}

const Dropdown: FC<IDropdown> = ({ title, list }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Button onClick={() => setIsOpen((prev) => !prev)} active={isOpen}>
      {title} <Chevron />
      <DropList active={isOpen}>
        {list.map((item) => (
          <DropListItem active={item.active} key={item.id}>{item.label}</DropListItem>
        ))}
      </DropList>
    </Button>
  )
}

export default Dropdown
