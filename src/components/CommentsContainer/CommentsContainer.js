import React from 'react';
import CreateNewCommentForm from "./CreateNewCommentForm";
import CommentsList from "./CommentsList";


const CommentsContainer = () => {
    return (
        <section>
            <CreateNewCommentForm/>
            <CommentsList/>
        </section>
    );
};

export default CommentsContainer;