import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Main = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/users'}>Users</Link></li>
                <li><Link to={'/posts'}>Posts</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default Main;