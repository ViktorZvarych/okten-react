import React from 'react';

import css from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={css.header}>
            <NavLink to={''}>Home</NavLink>
            <NavLink to={'users'}>Users</NavLink>
        </header>
    );
};

export default Header;