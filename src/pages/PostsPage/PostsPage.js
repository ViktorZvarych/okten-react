import React from 'react';
import {useLoaderData} from "react-router-dom";

import {Posts} from "../../components";

const PostsPage = () => {
    const {data} = useLoaderData();

    return (
        <div>
            <h2>Posts Page</h2>
            <Posts data={data}/>
        </div>
    );
};

export default PostsPage;