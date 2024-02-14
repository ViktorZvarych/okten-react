import React from 'react';

const Todo = ({todo}) => {
    const {id, userId, title, completed} = todo;
    return (
        <li>
            <h4>title: {title}</h4>
            <p>id: {id}</p>
            <p>userId: {userId}</p>
            <p>completed: {completed.toString()}</p>
            <hr/>
        </li>
    );
};

export default Todo;