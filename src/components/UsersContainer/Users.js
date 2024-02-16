import React, {useEffect, useState} from 'react';

import User from "./User";
import {useNavigate} from "react-router-dom";

const Users = ({data}) => {
    const navigate = useNavigate();
    navigate('', {state: {users: data}})

    const [users, setUsers] =useState([]);

    useEffect(() => {
        setUsers(data)
    }, [data]);

    return (
        <div>
            <h3>Users</h3>
            <ul>
                {
                    users.map(user => <li key={user.id}><User user={user}/></li>)
                }
            </ul>

        </div>
    );
};

export default Users;