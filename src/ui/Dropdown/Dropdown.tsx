import { FC, useState } from "react"
import { Chevron } from "../../assets"
import { Button } from "./dropdown.styles"

interface IDropdown {
  title: string
}

const Dropdown: FC<IDropdown> = ({ title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
console.log(isOpen);

  return (
    <Button onClick={() => setIsOpen((prev) => !prev)} active={isOpen}>
      {title} <Chevron />
    </Button>
  )
}

export default Dropdown
