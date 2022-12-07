import { logo } from "../../assets"
import { Logo, Wrap } from "./styles"

const Sidebar = () => {
  return (
    <Wrap>
      <Logo alt="Logo" src={logo} />
    </Wrap>
  )
}

export default Sidebar
