import styled from "styled-components"

const BoardsWrap = styled.div`
  display: flex;
`
const BoardsColumn = styled.div`
  width: calc(80% / 4);
  &:first-child {
    width: calc(80% / 4) + 10px;
  }
`

const BoardsHead = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 26px 8px 12px 8px;
  border-bottom: 1px solid var(--borderColor);
`

const BoardsTitle = styled.h3`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  margin: 0;
  span {
    padding: 4px 12px;
    background-color: #e8ebef;
    color: var(--gray);
    font-weight: 400;
    border-radius: 100px;
  }
`

const BoardsContent = styled.div<{ first: boolean }>`
  min-height: calc(100vh - 200px);
  padding: ${({ first }) =>
    first ? "40px 10px 10px 20px" : "40px 10px 10px 10px"};
  border-right: 1px solid var(--borderColor);
`

const BoardsStatusPanel = styled.div`
  width: 20%;
  border-bottom: 1px solid var(--borderColor);
  border-left: 1px solid var(--borderColor);
  color: var(--gray);
  padding: 26px 8px 12px 34px;
  height: 25px;
`

export {
  BoardsWrap,
  BoardsTitle,
  BoardsHead,
  BoardsColumn,
  BoardsContent,
  BoardsStatusPanel,
}
