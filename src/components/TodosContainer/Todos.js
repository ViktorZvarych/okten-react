import React, {useEffect, useState} from 'react';
import {todosService} from "../../services/todosService";
import Todo from "./Todo";

const Todos = () => {
    const [todos, setTodos] = useState(null);

    useEffect( () => {
        todosService.getAll().then(({data}) => setTodos(data))
    }, []);

    return (
        <ol>
            {todos && todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </ol>
    );
};

export default Todos;