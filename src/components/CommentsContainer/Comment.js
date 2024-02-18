import React from 'react';

import {CustomButton} from "../index";

const Comment = ({comment}) => {
    const {id, name} = comment;

    return (
        <div>
            <p>Id: {id} - Name: {name}</p>
            <CustomButton id={id} comment={comment}/>
        </div>
    );
};

export default Comment;