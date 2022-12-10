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
      --blueDark : #2D4071;
      --red: #F21247;
      --borderColor: #F3F3F3;
      --bgCompleted: #F0F0F0;
      --colorCompleted: #A5A5A5;
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
