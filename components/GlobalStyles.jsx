import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: Ubuntu, sans-serif;
        transition: all 0.20s linear;
    }

    a {
        color: #68cbf8;
    }
`
