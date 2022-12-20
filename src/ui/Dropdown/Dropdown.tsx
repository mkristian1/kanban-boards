import { FC, useRef, useState } from 'react';
import { Chevron } from '../../assets';
import { useOutsideClick } from '../../hooks/useOutsideClick';

import { Button, DropList, DropListItem } from './dropdown.styles';

interface IDropdown {
  title: string;
  list: { id: number; label: string; active: boolean }[];
}

const Dropdown: FC<IDropdown> = ({ title, list }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(isOpen, setIsOpen, dropdownRef);

  const handleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div ref={dropdownRef}>
      <Button onClick={handleDropdown} active={isOpen}>
        {title} <Chevron />
        <DropList data-testid="list" active={isOpen}>
          {list.map((item) => (
            <DropListItem active={item.active} key={item.id}>
              {item.label}
            </DropListItem>
          ))}
        </DropList>
      </Button>
    </div>
  );
};

export default Dropdown;
