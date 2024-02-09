import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services/comments.service";
import Comment from "./Comment";

const CommentsList = () => {
    const [comments, setComments] = useState(null);

    useEffect(() => {
        commentsService
            .getAll()
            .then(({data}) => setComments(data));
    }, []);

    return (
        <>
            {
                comments
                &&
                <>
                    <div>
                        <h2>Comments</h2>
                        <ul>
                            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
                        </ul>
                    </div>

                </>
            }
        </>


    );
};

export default CommentsList;