import { avatar, Chevron, logo } from '../../assets';
import { toolsMenu, workspaceMenu } from '../../const';
import Search from '../../ui/Search';
import {
  Container,
  Dropdown,
  DropdownItem,
  DropdownTitle,
  Logo,
  MainMenu,
  SubMenu,
  SubmenuList,
  SubmenuListItem,
  SubMenuTitle,
  Worspace,
  Wrap,
} from './sidebar.styles';

const Sidebar = () => {
  return (
    <Wrap>
      <MainMenu>
        <Container>
          <Logo alt="Logo" src={logo} />
          <Search placeholder="Search..." />
        </Container>
        <Worspace>
          <img width={22} src={avatar} alt="Avatar" /> My workspace
        </Worspace>
        <Container>
          <Dropdown>
            <DropdownTitle>
              <Chevron /> Favorites
            </DropdownTitle>
            {workspaceMenu.favorites.map((favorite) => (
              <DropdownItem key={favorite.id}>{favorite.label}</DropdownItem>
            ))}
          </Dropdown>
          <Dropdown>
            <DropdownTitle>
              <Chevron /> My Projects
            </DropdownTitle>
            {workspaceMenu.myProjects.map((favorite) => (
              <DropdownItem key={favorite.id}>{favorite.label}</DropdownItem>
            ))}
          </Dropdown>
        </Container>
      </MainMenu>
      <SubMenu>
        <Container>
          <SubMenuTitle>Tools</SubMenuTitle>
        </Container>
        <SubmenuList>
          {toolsMenu.map((item) => (
            <SubmenuListItem active={item.active} key={item.id}>
              <img src={item.img} alt={item.img} /> {item.label}
            </SubmenuListItem>
          ))}
        </SubmenuList>
      </SubMenu>
    </Wrap>
  );
};

export default Sidebar;
