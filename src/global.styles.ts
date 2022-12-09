import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
   :root {
      --black: #222222;
      --white: #fff;
      --gray: #8C939F;
      --grayActive: #E1E4E7;
      --grayBg: #F5F8FA;
      --blue: #0094FF;
      --blueActive: #0094FF;
   }
   body {
    font-family: 'Roboto', Arial;
    font-size: 14px;
    margin: 0;
    padding: 0;
   } 
   ul, li {
      list-style-type: none;
      padding: 0;
      margin: 0;
   }
   button {
      cursor: pointer;
      border: none;
      transition: .3s;
   }
`

export default GlobalStyles
