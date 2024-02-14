import React, {useEffect, useState} from 'react';

import {commentsService} from "../../services/commentsService";
import Comment from '../CommentsContainer/Comment'

const Comments = () => {
    const [comments, setComments] = useState(null);

    useEffect( () => {
        commentsService.getAll().then(({data}) => setComments(data))
    }, []);

    return (
        <ol>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </ol>
    );
};

export default Comments;