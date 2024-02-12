import React from 'react';

import UsersList from "./UsersList";
import CreateNewUserForm from "./CreateNewUserForm";

const UsersContainer = () => {
    return (
        <section>
            <CreateNewUserForm/>
            <UsersList/>
        </section>
    );
};

export default UsersContainer;