import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>
    }
])

root.render(
  <RouterProvider router={routes}/>
);

