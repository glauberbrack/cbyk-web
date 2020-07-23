import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    } 
    
    body {
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        background-color: #E5E5E5;
        font-family: 'Poppins', sans-serif;
    }

    
    html, body, #root {
        height: 100%;
    }

    a {
        text-decoration: none;
    }

    textarea:focus, input:focus{
        outline: none!important;
    }

    button {
        cursor: pointer;
    }
`;