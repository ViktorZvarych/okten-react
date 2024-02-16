import React, {useEffect, useState} from 'react';

import User from "./User";

const Users = ({data}) => {
    const [users, setUsers] =useState([]);

    useEffect(() => {
        setUsers(data)
    }, []);

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