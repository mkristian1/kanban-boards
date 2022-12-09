import styled from "styled-components"

const Button = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => active ? "var(--grayActive)" : 'var(--grayBg)'};
  position: relative;
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 12px 20px;
  border-radius: 50px;
  svg {
    transition: transform 0.3s;
    color: var(--gray);
    transform: ${({ active }) => active && "rotate(180deg)"};
  }
`

const DropList = styled.ul<{ active: boolean }>`
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 100;
  min-width: 132px;
  background-color: var(--white);
  margin-top: 8px;
  padding: 6px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`

const DropListItem = styled.li<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "var(--grayBg)" : "initial")};
  padding: 12px 8px;
  border-radius: 4px;
  text-align: left;
`

export { Button, DropList, DropListItem }
