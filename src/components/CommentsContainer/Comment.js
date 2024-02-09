import React from 'react';

const Comment = ({comment}) => {
    const {id, postId, name, email, body} = comment;
    return (
        <li>
            <h3>{name} (id: {id} post id: {postId}) </h3>
            <p>Email: {email}</p>
            <p>Comment: {body}</p>
        </li>
    );
};

export default Comment;