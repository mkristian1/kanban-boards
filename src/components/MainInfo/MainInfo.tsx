import { FC } from "react"
import styled from "styled-components"
import Boards from "./Boards"
import Head from "./Head"

const Wrap = styled.div`
  width: 100%;
`

const MainInfo: FC = () => {
  return (
    <Wrap>
      <Head />
      <Boards />
    </Wrap>
  )
}

export default MainInfo
