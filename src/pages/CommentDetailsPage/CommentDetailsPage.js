import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {CommentDetails} from "../../components";
import {createDetailsArray} from "../../helpers";
import {commentsService} from "../../services";

const CommentDetailsPage = () => {
    const [commentDetails, setCommentDetails] = useState(null);

    const {state} = useLocation();
    const {commentId} = useParams();

    useEffect(() => {
        if (state?.comment) {
            console.log(state.comment.id)
            setCommentDetails(createDetailsArray(state.comment));
        } else {
            commentsService
                .getById(commentId)
                .then(({data}) => setCommentDetails(createDetailsArray(data)))
        }
    }, [commentId, state.comment.id]);

    return (
        <div>
            <h2>Comment Details Page</h2>
            <CommentDetails commentDetails={commentDetails}/>
        </div>
    );
};

export default CommentDetailsPage;