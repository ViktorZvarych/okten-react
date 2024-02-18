import React from 'react';

import {CustomButton} from "../index";

const User = ({user}) => {
    const {id, name} = user;

    return (
        <div>
            <p>Id: {id} - Name: {name}</p>
            <CustomButton id={id} user={user}/>
        </div>
    )
        ;
};

export default User;