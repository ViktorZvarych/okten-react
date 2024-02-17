import React, {useEffect, useState} from 'react';

const CommentDetails = ({commentDetails}) => {

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