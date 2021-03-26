import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f2f0f5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body: {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  
`