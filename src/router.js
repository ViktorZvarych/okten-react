import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {Characters, Episodes} from "./components";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'episodes'}/>},
            {path: 'episodes', element: <Episodes/>, children: [
                    {path: 'characters', element: <Characters/>}
                ]},

        ]
    }
]);

export {router}