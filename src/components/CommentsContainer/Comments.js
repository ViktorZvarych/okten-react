import React, {useEffect, useState} from 'react';

import Comment from "./Comment";

const Comments = ({data}) => {
    const [comments, setComments] =useState([]);

    useEffect(() => {
        setComments(data)
    }, []);
    return (
        <div>
            <h3>Comments</h3>
            <ul>
                {
                    comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
                }
            </ul>
        </div>
    );
};

export default Comments;