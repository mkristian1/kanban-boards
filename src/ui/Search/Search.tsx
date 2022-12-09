import { FC } from "react"
import styled from "styled-components"
import { search } from "../../assets"

const Search: FC<{ placeholder?: string; head?: boolean }> = ({
  placeholder = "Search...", head,
}) => {

  const Wrap = styled.div<{ head?: boolean }>`
    display: flex;
    align-items: center;
    padding: ${({head}) => head ? '14px 16px' : '10px'};
    background-color: ${({ head }) =>
      head ? "var(--grayBg)" : "var(--blueDark)"};
    border-radius: ${({head}) => head ? '50px' : '4px'};
  `

  const Input = styled.input`
    display: flex;
    background: none;
    border: none;
    color: #8c939f;
    font-size: 14px;
    &:active,
    &:focus {
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
    <Wrap head={head}>
      <Input placeholder={placeholder} />
      <Button>
        <img src={search} alt="Search" />
      </Button>
    </Wrap>
  )
}

export default Search
