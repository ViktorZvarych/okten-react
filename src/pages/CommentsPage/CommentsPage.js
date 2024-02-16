import React from 'react';
import {Outlet, useLoaderData} from "react-router-dom";

import {Comments} from "../../components";

const CommentsPage = () => {
    const {data} = useLoaderData();

    return (
        <div>
            <h2>Comments Page</h2>
            <Comments data={data}/>
            <Outlet/>
        </div>
    );
};

export default CommentsPage;