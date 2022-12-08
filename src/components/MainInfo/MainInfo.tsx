import { FC } from "react"
import styled from "styled-components"
import Head from "./Head"

const MainInfo: FC = () => {
  const Wrap = styled.div`
    width: 100%;
  `
  return (
    <Wrap>
      <Head />
      <div>Cards</div>
    </Wrap>
  )
}

export default MainInfo
