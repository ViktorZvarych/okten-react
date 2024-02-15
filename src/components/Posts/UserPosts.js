import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {postsService} from "../../services/postsService";
import Post from "./Post";

const UserPosts = () => {
    const [userPosts, setUserPosts] = useState(null);

    const {userId} = useParams();

    useEffect(() => {
        postsService.getByUserId(userId).then(({data})=>{
            setUserPosts(data)
            console.log(data)
        })
    }, [userId]);

    return (
        <div>
            <Outlet/>
            {
                userPosts
                &&
                userPosts.map(post=><Post key={post.id} post={post}/>)
            }
        </div>

    );
};

export default UserPosts;