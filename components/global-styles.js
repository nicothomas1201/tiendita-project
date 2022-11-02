import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --white: #fefefe; 
    --malachite: #0ac763; 
    --silver: #bdbcbc; 
    --cocoabrown: #332927; 
    --boulder: #b8b4b4; 
    --scarlet: #ff1f18; 
    --cobalt: #0252bc; 
    --black: #333333; 
    --purple: #5e18bb; 
    --purple-bg: #f0e3fe; 
    --bg: #fafaf8; 
    --orange: #fc462d; 
    --logo-font: 900 italic 1.375rem/1rem Poppins;
    --headline1: 600 1.75rem/normal Poppins; 
    --headline2: 600 1.5rem/normal Poppins; 
    --headline3: 600 1.25rem/1.375rem Poppins; 
    --button: 400 0.875rem/1rem Poppins; 
    --body1-regular: 400 1rem/1.5rem Poppins; 
    --body1-bold: 700 1rem/1.5rem Poppins; 
    --body2-bold: 700 0.875rem/1.5rem Poppins; 
    --body2-regular: 400 0.875rem/1.5rem Poppins; 
    --caption-regular: 400 0.75rem/1rem Poppins; 
    --caption-bold: 600 0.75rem/1rem Poppins; 
  }

  body{
    background-color: var(--bg);
    color: var(--black);
    margin: 0;
  }
`

export default GlobalStyles