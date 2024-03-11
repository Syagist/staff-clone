import styled from "styled-components";

export const TextInputStyles = styled.input`
    color: #b2b2b2;
    font-size: 16px;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Format: offset-x offset-y blur-radius color */
    width: 100%;
`;

export const TextInputErrorStyles = styled.div`
    color: #f60000;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: absolute;
    bottom: -20px;
    width: 100%;
`;

export const TextInputWrapperStyles = styled.div`
    position: relative;
    margin-bottom: 26px;
`;

export const TextInputChildrenStyles = styled.div`
    position: relative;
`;



export const TextInputLabelStyles = styled.label`
    display: block;
    font-size: 12px;
    margin-bottom: 5px;
`;




