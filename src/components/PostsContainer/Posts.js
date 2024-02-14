import React, {useEffect, useState} from 'react';

import {postsService} from "../../services/postsService";
import Post from "../PostsContainer/Post";

const Posts = () => {
    const [posts, setPosts] = useState(null);

    useEffect( () => {
        postsService.getAll().then(({data}) => setPosts(data))
    }, []);

    return (
        <ol>
            {posts && posts.map(post => <Post key={post.id} post={post}/>)}
        </ol>
    );
};

export default Posts;