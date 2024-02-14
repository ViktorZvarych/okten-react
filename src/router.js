import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
// import Todos from "./components/TodosContainer/Todos";
import TodosPage from "./pages/TodosPage";
import CommentsPage from "./pages/CommentsPage";
import PostsPage from "./pages/PostsPage";
import AlbumsPage from "./pages/AlbumsPage";

const router = createBrowserRouter([
    {path: '/', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {index: true, element: <Navigate to={'todos'}/>},
            {path: 'todos', element: <TodosPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'albums', element: <AlbumsPage/>}
        ]}
])

export {router}