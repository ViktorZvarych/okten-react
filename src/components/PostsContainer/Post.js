import React from 'react';
import {Button} from "../index";

const Post = ({post}) => {
    const {id, title} = post;

    return (
        <div>
            <p>Id: {id} - Title: {title}</p>
            <Button id={id}/>
        </div>

    )
        ;
};

export default Post;