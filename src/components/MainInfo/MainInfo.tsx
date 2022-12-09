import { FC } from "react"
import styled from "styled-components"
import Boards from "./Boards"
import Head from "./Head"

const MainInfo: FC = () => {
  const Wrap = styled.div`
    width: 100%;
  `
  return (
    <Wrap>
      <Head />
      <Boards />
    </Wrap>
  )
}

export default MainInfo
