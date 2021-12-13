import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #969cb3;
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
  }

  html, body, #__next {
    height: 100%;
  }
`

export default GlobalStyle
