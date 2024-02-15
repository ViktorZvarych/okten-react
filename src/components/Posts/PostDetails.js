import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postsService} from "../../services/postsService";

const PostDetails = () => {
    const {postId} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        postsService.getById(postId).then(({data}) => setPost(data))
    }, [postId]);

    useEffect(() => {
        console.log(post)
    }, [post])

    return (

            <div>
                {
                    post
                    &&
                    <div>
                        <h4>Post details</h4>
                        <p><b>Id: {post.id} - Title: {post.title}</b></p>
                        <p>{post.body}</p>
                        <hr/>
                    </div>
                }
            </div>



)
    ;
};

export default PostDetails;