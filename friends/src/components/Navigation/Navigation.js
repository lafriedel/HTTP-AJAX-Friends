import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.div`
padding: 20px 10px;
display: flex;
border-bottom: 3px solid black;
margin-bottom: 20px;

a {
    font-size: 2.4rem;
    text-decoration: overline;
    font-weight: 700;

    &:hover {
        text-decoration: underline;
    }
}
`;


const Navigation = () => {

    return (
        <NavWrapper>
            <NavLink to="/form">Add Friend</NavLink>
        </NavWrapper>
    )
}

export default Navigation;