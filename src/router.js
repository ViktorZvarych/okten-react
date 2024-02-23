import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {Characters, Episodes} from "./components";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Episodes/>},
            {path: 'characters', element: <Characters/>},
            {path: 'episodes', element: <Episodes/>}
        ]
    }
]);

export {router}