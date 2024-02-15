import React from 'react';
import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";

import UserDetails from "../../components/Users/UserDetails";

const UserDetailsPage = () => {
    const {state} = useLocation();
    const {id} = useParams();

    const navigate = useNavigate();

    const onUserPostsButtonClickHandler = () => navigate('posts/'+id.toString(), {state: state})

    return (
        <div>
            <div>
                <UserDetails id={id} state={state}/>
                <button onClick={onUserPostsButtonClickHandler}>User Posts</button>
            </div>

            <Outlet/>
        </div>
    );
};

export default UserDetailsPage;