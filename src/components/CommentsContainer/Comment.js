import React from 'react';

const Comment = ({comment}) => {
    const {id, postId, body, email, name} = comment;
    return (
        <div>
            <h4>name: {name}</h4>
            <p>postId: {postId}</p>
            <p>body: {body}</p>
            <p>email: {email}</p>
            <p>id: {id}</p>
            <hr/>
        </div>
    );
};

export default Comment;