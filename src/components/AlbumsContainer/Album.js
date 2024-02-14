import React from 'react';

const Album = ({album}) => {
    const {title, id, userId} = album;
    return (
        <div>
            <h4>title: {title}</h4>
            <p>id: {id}</p>
            <p>userId: {userId}</p>
            <hr/>
        </div>
    );
};

export default Album;