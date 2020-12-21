import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    --green: #50B83C;
    --black: #171717;
    --white: #FFFFFF;
    --surface: #17171740;
    --hover: 0px 0px 12px rgba(0, 0, 0, 0.25);

    margin: 0;
    height: 100%;
    font-family: 'Poppins', sans-serif;
  }

  html {
    font-size: 100%;
    height: 100%;
  }

  #root {
    height: 100%;
  }

  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  
  h1 {
    font-weight: 500;
    margin: 0.5rem 0;
  }
  
  h2, h3, p {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  
  p, label {
    margin: 0 0 0.5rem 0;
  }
  
  strong {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }
  
  .detail {
    font-size: 12px;
  }
  
  .green {
    color: var(--green);
    font-weight: 600;
  }
`;
