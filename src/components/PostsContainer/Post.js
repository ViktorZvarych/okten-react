import React from 'react';

import {CustomButton} from "../index";

const Post = ({post}) => {
    const {id, title} = post;

    return (
        <div>
            <p>Id: {id} - Title: {title}</p>
            <CustomButton id={id} post={post}/>
        </div>

    )
        ;
};

export default Post;