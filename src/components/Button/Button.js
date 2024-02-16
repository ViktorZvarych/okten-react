import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Button.module.css'

const Button = ({id = 1, title = 'Details'}) => {
    const navigate = useNavigate();
    const onClickHandler = () => navigate(id.toString(), {state: id});

    return (
        <button className={css.button} onClick={onClickHandler}>{title} </button>
    );
};

export default Button;