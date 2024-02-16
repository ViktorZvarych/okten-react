import React, {useEffect, useState} from 'react';

import Post from "./Post";

const Posts = ({data}) => {
    const [posts, setPosts] =useState([]);

    useEffect(() => {
        setPosts(data)
    }, []);

    return (
        <div>
            <h3>Posts</h3>
            <ul>
                {
                    posts.map(post => <li key={post.id}><Post post={post}/></li>)
                }
            </ul>
        </div>
    );
};

export default Posts;