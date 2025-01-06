import { createGlobalStyle } from "styled-components";
import {MyTheme} from './MyTheme.styled'

export const GlobalStyles = createGlobalStyle`
 *,
 *::before,
 *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    display: flex;
    place-items: center;
    justify-content: center;
    min-width: 320px;
    min-height: 100vh;
    
    font-family: "Inter", sans-serif;
    line-height: 1.5;

    background-color: ${MyTheme.colors.grey.dark};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    border: none;
    background-color: inherit;
  }
`