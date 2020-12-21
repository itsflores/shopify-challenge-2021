import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    --green: #50B83C;
    --black: #171717;
    --white: #FFFFFF;
    --surface: #17171740;
    --hover: 0px 0px 16px rgba(0, 0, 0, 0.25);

    margin: 0;
    font-family: 'Poppins', sans-serif;
  }
  
  h1 {
    font-weight: 500;
  }
  
  h2, h3, p {
    font-family: 'Poppins', sans-serif;
    font-weight: 400
  }
  
  p {
    margin: 0;
  }
  
  strong {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  .detail {
    font-size: 12px;
  }
`;
