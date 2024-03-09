import styled, {createGlobalStyle} from "styled-components";
import {ReactSVG} from "react-svg";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        min-width: 370px;
    }

    button {
        outline: 0;
        border: none    ;
        background: transparent;
        cursor: pointer;
    }
    
    svg {
        max-width: 100%;
        max-height: 100%;
    }
`;

export const StyledSVG = styled(ReactSVG)`
    cursor: pointer;
    width: 24px;
    height: 24px;
    padding: 5px;

    div {
        width: 100%;
        height: 100%;
    }
`;