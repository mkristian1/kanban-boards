import styled from "styled-components"

const Button = styled.button<{ active: boolean }>`
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 12px 20px;
  background-color: var(--grayBg);
  border-radius: 50px;
  svg {
    transition: transform 0.3s;
    color: var(--gray);
    transform: ${({ active }) => active && "rotate(180deg)"};
  }
`

export { Button }
