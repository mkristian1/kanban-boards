import { avatar, chevron, logo } from "../../assets"
import { workspaceMenu } from "../../const"
import Search from "../../ui/Search/Search"
import {
  Container,
  Dropdown,
  DropdownItem,
  DropdownTitle,
  Logo,
  MainMenu,
  SubMenu,
  Worspace,
  Wrap,
} from "./sidebar.styles"

const Sidebar = () => {
  return (
    <Wrap>
      <MainMenu>
        <Container>
          <Logo alt="Logo" src={logo} />
          <Search placeholder="Search..." />
        </Container>
        <Worspace>
          <img src={avatar} alt="Avatar" /> My workspace
        </Worspace>
        <Container>
          <Dropdown>
            <DropdownTitle>
              <img src={chevron} alt="Chevron" /> Favorites
            </DropdownTitle>
            {workspaceMenu.favorites.map((favorite) => (
              <DropdownItem key={favorite.id}>{favorite.label}</DropdownItem>
            ))}
          </Dropdown>
          <Dropdown>
            <DropdownTitle>
              <img src={chevron} alt="Chevron" /> My Projects
            </DropdownTitle>
            {workspaceMenu.myProjects.map((favorite) => (
              <DropdownItem key={favorite.id}>{favorite.label}</DropdownItem>
            ))}
          </Dropdown>
        </Container>
      </MainMenu>
      <SubMenu>Tools</SubMenu>
    </Wrap>
  )
}

export default Sidebar
