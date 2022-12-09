import styled from "styled-components"

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 2px 4px #f0f1f2;
`
const Button = styled.button`
  background-color: var(--blue);
  border-radius: 50px;
  padding: 10px 20px;
  color: var(--white);
  cursor: pointer;
`

const LSide = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
const RSide = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`

export { LSide, RSide, Button, Header }
