import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    color: #333;
    font-size: 16px;
    padding: 10px;
    background-color: #f0f0f0;
`;

interface CardProps {
    children: React.ReactNode
}

const Card = ({children}: CardProps) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    );
};

export default Card;