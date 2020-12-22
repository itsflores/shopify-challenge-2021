import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    --green: #50B83C;
    --black: #171717;
    --white: #FFFFFF;
    --surface: #17171740;
    --hover: 0px 0px 12px rgba(0, 0, 0, 0.25);
    --success: 0px 0px 12px rgba(80, 184, 60, 0.75); 

    margin: 0;
    height: 100%;
    font-family: 'Poppins', sans-serif;
  }

  html {
    font-size: 100%;
  }

  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  
  h1 {
    font-size: 2rem;
    font-weight: 500;
    margin: 0.5rem 0;
  }
  
  h2, h3, p {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  
  p, label {
    font-size: 1rem;
    margin: 0;
  }

  .Polaris-Labelled__LabelWrapper {
    :host {
      width: 100%;
    }
  }

  .Polaris-Label__Text {
    font-size: 1rem;
  }

  input.Polaris-TextField__Input {
    font-size: 1rem;
  }
  
  strong {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }
  
  .detail {
    font-weight: 400;
    font-size: 12px;
  }
  
  .green {
    color: var(--green);
    font-weight: 600;
  }

  @keyframes slideDown {
    0% {
      transform: translateY(calc(-100% - 120px));
    }

    25% {
      transform: translateY(1rem);
    }

    75% {
      transform: translateY(1rem);
    }

    100% {
      transform: translateY(calc(-100% - 120px));
    }
  }
`;
