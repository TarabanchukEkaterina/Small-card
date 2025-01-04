import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 *,
 *::before,
 *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color:rgb(80, 78, 78);
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', sans-serif;
    min-width: 320px;
    min-height: 100vh;
  }
`