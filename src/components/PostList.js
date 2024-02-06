import React, {memo, useEffect, useState} from 'react';
import Post from './Post';
import {getPostsFromApi} from "../services/getDataFromApi.service";

const PostList = memo(({showPostDetails}) => {
    console.log('PostList render');

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        getPostsFromApi()
            .then(response => setPosts(response));
    }, []);

    return (
        <section>
            <h2>Posts</h2>
            {posts &&
                posts.map(post => (
                    <Post key={post.id} post={post} showPostDetails={showPostDetails}/>
                ))}
        </section>
    );
});

export default PostList;