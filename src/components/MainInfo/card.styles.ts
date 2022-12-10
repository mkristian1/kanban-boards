import styled from "styled-components"
import { STATUS } from "../../const"

const CardWrap = styled.div<{ type: string; status: number }>`
  background: ${({ theme, status, type }) =>
    status === STATUS.Completed ? "var(--bgCompleted)" : theme.cardType[type]};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 10px;
  p {
    margin-top: 0;
    margin-bottom: 4px;
    ${({ status }) =>
      status === STATUS.Completed &&
      `text-decoration: line-through; color: var(--colorCompleted)`}
  }
  time {
    color: #435e52;
    ${({ status }) =>
      status === STATUS.Completed && `color: var(--colorCompleted)`}
  }
`

export { CardWrap }
