import React from 'react';
import {Outlet} from "react-router-dom";

import Comments from "../components/CommentsContainer/Comments";

const CommentsPage = () => {
    return (
        <div>
            <h2>Comments Page</h2>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export default CommentsPage;