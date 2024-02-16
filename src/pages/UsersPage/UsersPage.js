// import React from 'react';
import {useLoaderData, useLocation, useNavigate} from "react-router-dom";

import {Users} from "../../components";

const UsersPage = () => {
    const {data} = useLoaderData();

    return (
        <div>
            <h2>Users Page</h2>
            <Users data={data}/>
        </div>
    );
};

export default UsersPage;