import { FC, useEffect, useRef, useState } from "react"
import { Chevron } from "../../assets"
import { Button, DropList, DropListItem } from "./dropdown.styles"

interface IDropdown {
  title: string
  list: { id: number; label: string; active: boolean }[]
}

const Dropdown: FC<IDropdown> = ({ title, list }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const listenOutsideClick = (event: Event) => {
      if (
        event.target ||
        (isOpen &&
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target))
      ) {
        setIsOpen(false)
      }
    }

    document.body.addEventListener("mousedown", listenOutsideClick)

    return () => {
      document.body.removeEventListener("mousedown", listenOutsideClick)
    }
  }, [isOpen])

  return (
    <Button onClick={() => setIsOpen((prev) => !prev)} active={isOpen}>
      {title} <Chevron />
      <DropList ref={dropdownRef as any} active={isOpen}>
        {list.map((item) => (
          <DropListItem active={item.active} key={item.id}>
            {item.label}
          </DropListItem>
        ))}
      </DropList>
    </Button>
  )
}

export default Dropdown
