import React from 'react';

const User = ({user}) => {
    const {id, name, email} = user;
    return (
        <li>
            <h3>Name: {name} (id: {id}) </h3>
            <p>Email: {email}</p>
        </li>
    );
};

export default User;