import React, {useCallback, useState} from 'react';
import PostList from './PostList';
import PostDetails from "./PostDetails";

import styles from './PostsContainer.module.css';

const PostsContainer = () => {
    console.log('PostsContainer render');

    const [selectedPostId, setSelectedPostId] = useState(1);

    const showPostDetails = useCallback((id) => {
        setSelectedPostId(id);
    }, []);

    return (
        <div className={styles.container}>
            <PostList showPostDetails={showPostDetails}/>

            <PostDetails postId={selectedPostId}/>
        </div>
    );
};

export default PostsContainer;