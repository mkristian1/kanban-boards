import { ThemeProvider } from "styled-components"
import GlobalStyles from "./global"
import MainPage from "./pages/MainPage"
import { theme } from "./theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainPage />
    </ThemeProvider>
  )
}

export default App
