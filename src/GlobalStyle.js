import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    h1, h2, h3, p{
        margin: 0;
    }
    img{
        display: block;
    }
    a{
        text-decoration: none;
    }

`