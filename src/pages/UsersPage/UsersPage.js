import React from 'react';
import {Outlet} from "react-router-dom";

import css from './UsersPage.module.css'
import Users from "../../components/Users/Users";

const UsersPage = () => {
    return (
        <div>
            <h2>Users page</h2>
            <div className={css.users}>
                <Users/>
                <Outlet/>
            </div>

        </div>
    );
};

export default UsersPage;