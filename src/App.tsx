import { ThemeProvider } from 'styled-components';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import GlobalStyles from './global.styles';
import MainPage from './pages/MainPage';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
        <GlobalStyles />
        <MainPage />
      </DndProvider>
    </ThemeProvider>
  );
};

export default App;
