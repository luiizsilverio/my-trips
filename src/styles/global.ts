import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --highlight: rgb(202,211,146); // #e20e8d;
    --background: rgb(26,90,158);  //#030518;
    --white: #eeeeee;

    --container: 100rem;
    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

  html {
    font-size: 62.5%; //rem
  }

  body {
    font-family: --apple-system, 'Segoe UI', Open-Sans, sans-serif;
    background: var(--background);
    color: var(--white);
  }

  html, body, #__next {
    height: 100%;
  }

  p, a {
    font-size: 2rem;
    line-height: var(--medium);
  }

  a {
    color: var(--highlight);
  }
`

export default GlobalStyle
