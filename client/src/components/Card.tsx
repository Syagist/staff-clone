import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
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
        <CardStyle>
            {children}
        </CardStyle>
    );
};

export default Card;