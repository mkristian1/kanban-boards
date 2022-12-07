import { logo } from "../../assets"
import { Logo, Wrap } from "./sidebar.styles"

const Sidebar = () => {
  return (
    <Wrap>
      <Logo alt="Logo" src={logo} />
    </Wrap>
  )
}

export default Sidebar
