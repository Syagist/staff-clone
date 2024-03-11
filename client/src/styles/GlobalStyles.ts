import styled, {createGlobalStyle} from "styled-components";
import {ReactSVG} from "react-svg";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        min-width: 370px;
    }

    * {
        box-sizing: border-box;
    }

    button {
        outline: 0;
        border: none;
        background: transparent;
        cursor: pointer;
    }

    input {
        outline: 0;
        border: none;
        padding: 0;
        margin: 0
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
    z-index: 5;

    div {
        width: 100%;
        height: 100%;
    }
`;

export const ActionRowStyles = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 8px;
`;

export const ActionItemStyles = styled.div`
    flex: 0 0 50%;
`;