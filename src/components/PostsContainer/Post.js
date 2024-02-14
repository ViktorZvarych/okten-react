import React from 'react';

const Post = ({post}) => {
    const {title, id, userId, body} = post;
    return (
        <div>
            <h4>title: {title}</h4>
            <p>id: {id}</p>
            <p>userId: {userId}</p>
            <p>body: {body}</p>
            <hr/>
        </div>
    );
};

export default Post;