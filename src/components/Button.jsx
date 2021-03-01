import React from 'react'
import styled from 'styled-components';

const Buttons = styled.button`
    background: linear-gradient(90deg, rgba(49,211,92,1), rgba(43,183,218,1));
    outline:none;
    border:none;
    color:hsl(220, 16%, 96%);
    border-radius:20px;
    font-size:0.7rem;
    font-weight:700;
    padding:15px 35px;
    cursor:pointer;

    &:hover{
        opacity:0.6;
    }
`;

const Button = () => {
    return (
        <Buttons>
            Request Invite
        </Buttons>
    )
}

export default Button
