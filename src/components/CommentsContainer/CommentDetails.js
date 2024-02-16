import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {createDetailsArray} from "../../helpers";
import {commentsService, usersService} from "../../services";

const CommentDetails = () => {
    const [commentDetails, setCommentDetails] = useState(null);

    const {state} = useLocation();
    const {id} = useParams();

    useEffect(() => {
        if (state?.comment) {
            setCommentDetails(createDetailsArray(state.comment))
        } else {
            commentsService
                .getById(id)
                .then(({data}) => setCommentDetails(createDetailsArray(data)))
        }
    }, [id]);
    return (
        <div>
            {
                commentDetails
                &&
                <div>
                    <h3>Comment Details</h3>
                    {
                        commentDetails.map(({key, value}) =>
                            (<p key={Math.random()}>
                                {key}: <b>{value}</b>
                            </p>))
                    }
                </div>
            }
        </div>
    );
};

export default CommentDetails;