import React from 'react';

import {Button} from "../index";

const User = ({user}) => {
    const {id, name} = user;

    return (
        <div>
            <p>Id: {id} - Name: {name}</p>
            <Button id={id}/>
        </div>
    )
        ;
};

export default User;