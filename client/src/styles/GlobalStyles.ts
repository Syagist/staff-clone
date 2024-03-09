import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        min-width: 370px;
    }

    button {
        outline: 0;
        background: transparent;
        cursor: pointer;
    }
`;