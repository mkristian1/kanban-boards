import { FC } from 'react';
import { search } from '../../assets';
import { Button, Input, Wrap } from './search.styles';

export interface ISearch {
  placeholder?: string;
  head?: boolean;
}

const Search: FC<ISearch> = ({ placeholder = 'Search...', head = false }) => (
  <Wrap head={head}>
    <Input placeholder={placeholder} />
    <Button>
      <img src={search} alt="Search" />
    </Button>
  </Wrap>
);

export default Search;
