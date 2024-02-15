import React from 'react';
import {Navigate, useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user;

    const navigate = useNavigate();

    const onDetailsButtonClickHandler = () => navigate(id.toString(), {state: {user}})

    return (
        <div>
            <p>Id: {id} - Name: {name}</p>
            <button onClick={onDetailsButtonClickHandler}>Details</button>
            <hr/>
        </div>
    );
};

export default User;