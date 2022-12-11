import { FC } from "react";
import { search } from "../../assets";
import { Button, Input, Wrap } from "./search.styles";

  
const Search: FC<{ placeholder?: string; head?: boolean }> = ({
  placeholder = "Search...", head,
}) => {

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
