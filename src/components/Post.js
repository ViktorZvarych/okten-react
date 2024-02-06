import React from 'react';

const Post = ({post: {id, title}, showPostDetails}) => {
    console.log('Post render');

    const onClickHandler = () => showPostDetails(id);
    return (
        <article>
            <p>Id: {id}</p>
            <p>Title: {title}</p>
            <button onClick={onClickHandler}>Show post details</button>
            <hr/>
        </article>
    );
};

export default Post;