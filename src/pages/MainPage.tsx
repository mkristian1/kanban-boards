import { FC } from 'react';
import styled from 'styled-components';
import MainInfo from '../components/MainInfo';
import Sidebar from '../components/Sidebar';

const Main = styled.main`
  display: flex;
`;

const MainPage: FC = () => {
  return (
    <Main>
      <Sidebar />
      <MainInfo />
    </Main>
  );
};

export default MainPage;
