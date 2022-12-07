import { FC } from "react"
import styled from "styled-components"
import { search } from "../../assets"

const Search: FC<{ placeholder: string }> = ({ placeholder }) => {
  const Wrap = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: ${(props) => props.theme.colors.divideBlue};
    border-radius: 4px;
  `

  const Input = styled.input`
    display: flex;
    background: none;
    border: none;
    color: #8c939f;
    font-size: 14px;
    &:active, &:focus {
        border: none;
        outline: none;
    }
  `

  const Button = styled.button`
    display: flex;
    background: none;
    border: none;
  `
  return (
    <Wrap>
      <Input placeholder={placeholder} />
      <Button>
        <img src={search} alt="Search" />
      </Button>
    </Wrap>
  )
}

export default Search
