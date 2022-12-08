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
const SubMenu = styled.div`
  background-color: var(--grayBg);
  padding: 26px 0;
`
const SubMenuTitle = styled.h3`
  font-size: 18px;
  color: var(--black);
  font-weight: 400;
  margin: 0 0 40px 0;
`

const SubmenuList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`

const SubmenuListItem = styled.li<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "var(--white)" : "initial")};
  border-radius: 0px 8px 8px 0px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 24px 16px 14px;
  color: ${(props) => props.active && "var(--blueActive)"};
  &:before {
    content: "";
    visibility: ${(props) => (props.active ? "visible" : "hidden")};
    background-color: var(--blueActive);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
  }
`

export {
  SubmenuListItem,
  SubmenuList,
  SubMenuTitle,
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
