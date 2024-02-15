import React from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

const PostsPage = () => {
    return (
        <div>
            <h3>Posts</h3>
            <Outlet/>
        </div>
    );
};

export default PostsPage;