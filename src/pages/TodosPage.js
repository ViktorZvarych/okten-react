import React from 'react';

import Todos from "../components/TodosContainer/Todos";
import {Outlet} from "react-router-dom";

const TodosPage = () => {
    return (
        <div>
            <h2>Todos Page</h2>
            <Todos/>
            <Outlet/>
        </div>
    );
};

export default TodosPage;