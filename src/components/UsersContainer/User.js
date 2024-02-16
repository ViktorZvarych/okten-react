import React from 'react';

import {Button} from "../index";

const User = ({user}) => {
    const {id, name} = user;

    return (
        <div>
            <p>Id: {id} - Name: {name}</p>
            <Button id={id} user={user}/>
        </div>
    )
        ;
};

export default User;