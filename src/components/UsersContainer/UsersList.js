import React, {useEffect, useState} from 'react';
import {usersService} from "../../services/users.service";
import User from "./User";

const UsersList = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        usersService
            .getAll()
            .then(({data}) => setUsers(data));
    }, []);

    return (

        <>
            {
                users
                &&
                <>
                    <div>
                        <h2>Users</h2>
                        <ul>
                            {users.map(user => <User key={user.id} user={user}/>)}
                        </ul>
                    </div>
                </>
            }
        </>


    );
};

export default UsersList;