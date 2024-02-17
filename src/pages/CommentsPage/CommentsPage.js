import React from 'react';
import {Outlet, useLoaderData} from "react-router-dom";

import {Comments} from "../../components";
import css from './CommentsPage.module.css'

const CommentsPage = () => {
    const {data} = useLoaderData();

    return (
        <div className={css.comments}>
            <div>
                <h2>Comments Page</h2>
                <Comments data={data}/>
            </div>
            <Outlet/>
        </div>
    );
};

export default CommentsPage;