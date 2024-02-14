import React from 'react';
import {NavLink} from "react-router-dom";

import './Header.module.css'

const Header = () => {
    return (
        <header>
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'todos'}>Todos</NavLink></li>
                <li><NavLink to={'posts'}>Posts</NavLink></li>
                <li><NavLink to={'comments'}>Comments</NavLink></li>
                <li><NavLink to={'albums'}>Albums</NavLink></li>
            </ul>
        </header>
    );
};

export default Header;