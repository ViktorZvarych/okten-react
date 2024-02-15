import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();
    const {state} = useLocation();
    // console.log(state)
const onclickHandler = () => navigate(id.toString(), {state: {user: state.user}})
    return (
        <div>
            <p>Id: {id} - Title: {title}</p>
            <button onClick={onclickHandler}>Post details</button>
        </div>
    );
};

export default Post;