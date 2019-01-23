import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props => {
    return (
        <div>
            <NavLink to="/addfriend">Add Friend</NavLink>
        </div>
    )
}

export default Navigation;