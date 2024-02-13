import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './index.css';
import Main from "./pages/main-page/Main";
import UsersPage from './pages/users-page/UsersPage'
import PostsPage from "./pages/posts-page/PostsPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/users',
                element: <UsersPage />
            },
            {
                path: '/posts',
                element: <PostsPage />
            }
        ]
    }
])

root.render(
  <RouterProvider router={routes}/>
);

