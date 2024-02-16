import React from 'react';
import {Button} from "../index";

const Comment = ({comment}) => {
    const {id, name} = comment;

    return (
        <div>
            <p>Id: {id} - Name: {name}</p>
            <Button id={id} comment={comment}/>
        </div>
    );
};

export default Comment;