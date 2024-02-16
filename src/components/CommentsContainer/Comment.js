import React from 'react';
import {Button} from "../index";

const Comment = ({comment}) => {
    const {id, name} = comment;

    return (
        <div>
            <p>Id: {id} - Name: {name}</p>
            <Button id={id}/>
        </div>
    );
};

export default Comment;