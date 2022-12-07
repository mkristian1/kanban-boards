import styled from "styled-components"

const Logo = styled.img`
  width: 132px;
  margin-bottom: 26px;
`

const Wrap = styled.div`
  display: flex;
  min-height: 100vh;
`

const MainMenu = styled.nav`
  background-color: ${(props) => props.theme.colors.darkBlue};
  padding: 26px 0;
  color: ${(props) => props.theme.colors.textGray};
`

const Container = styled.div`
  padding: 0 16px;
`
const SubMenu = styled.div`
  padding: 16px 24px;
`

const Worspace = styled.div`
  display: flex;
  align-items: center;
  color: var(--white);
  gap: 8px;
  padding: 8px 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  background-color: ${(props) => props.theme.colors.divideBlue};
`

const Dropdown = styled.ul`
  margin-bottom: 22px;
`

const DropdownTitle = styled.p`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 22px;
  color: var(--white);
`
const DropdownItem = styled.li`
  color: var(--gray);
  margin-bottom: 18px;
`

export {
  Logo,
  Wrap,
  MainMenu,
  SubMenu,
  Worspace,
  Container,
  Dropdown,
  DropdownTitle,
  DropdownItem,
}
