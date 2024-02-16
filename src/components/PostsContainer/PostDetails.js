import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {createDetailsArray} from "../../helpers";
import {postsService} from "../../services";

const PostDetails = () => {
    const [postDetails, setPostDetails] = useState(null);

    const {state} = useLocation();
    const {id} = useParams();
    console.log(state)

    useEffect(() => {
        if (state?.post) {
            setPostDetails(createDetailsArray(state.post))
        } else {
            postsService
                .getById(id)
                .then(({data}) => setPostDetails(createDetailsArray(data)))
        }
    }, [id]);
    return (
        <div>
            {
                postDetails
                &&
                <div>
                    <h3>Post Details</h3>
                    {
                        postDetails.map(({key, value}) =>
                            (<p key={Math.random()}>
                                {key}: <b>{value}</b>
                            </p>))
                    }
                </div>
            }
        </div>
    );
};

export default PostDetails;