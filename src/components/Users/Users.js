import React, {useEffect, useState} from 'react';

import {usersService} from "../../services/usersService";
import User from "./User";
import {useLoaderData} from "react-router-dom";

const Users = () => {
    // const [users, setUsers] = useState(null);
    //
    // useEffect(() => {
    //     usersService.getAll().then(({data}) => setUsers(data));
    // }, []);

    const {data:users} = useLoaderData();
    // console.log(users)

    return (
        <div>
            <h3>Users</h3>
            {
                users
                &&
                <ul>
                    {users.map(user => <li key={user.id}><User key={user.id+user} user={user}/></li>)}
                </ul>
            }
        </div>
    );
};

export default Users;