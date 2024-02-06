import React, {useEffect, useState} from 'react';
import {getPostDetailsFromApi} from "../../services/getDataFromApi.service";

const PostDetails = ({postId}) => {
    console.log('PostDetails render');

    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        getPostDetailsFromApi(postId)
            .then(response => setPostDetails(response));
    }, [postId])

    return (
        <article>
            <h2>Post Details</h2>
            {
                postId
                &&
                <div>
                    {
                        postDetails
                        &&
                        <>
                            <p>Post Id: {postId}</p>
                            <h3>Title: {postDetails.title}</h3>
                            <p>{postDetails.body}</p>
                        </>
                    }
                </div>
            }
        </article>

    );
};

export default PostDetails;