import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Button.module.css'

const Button = ({id = 1, title = 'Details', user=null,post=null,comment=null }) => {
    const navigate = useNavigate();
    const onClickHandler = () => {
        if (user) {
            navigate(id.toString(), {state: {userId: id, user}});
        } else if (post) {
            navigate(id.toString(), {state: {postId: id, post}});
        } else if (comment) {
            navigate(id.toString(), {state: {postId: id, comment}});
        }
    }

    return (
        <button className={css.button} onClick={onClickHandler}>{title} </button>
    );
};

export default Button;