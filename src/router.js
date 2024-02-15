import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import TodosPage from "./pages/TodosPage";
import PostsPage from "./pages/PostsPage";
import Post from "./components/PostsContainer/Post";
import CommentsPage from "./pages/CommentsPage";
import AlbumsPage from "./pages/AlbumsPage";
import Todo from "./components/TodosContainer/Todo";
import Album from "./components/AlbumsContainer/Album";
import Comment from "./components/CommentsContainer/Comment";


const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {index: true, element: <Navigate to={'home'}/>},
            {path: 'home', element: <MainPage/>},
            {
                path: 'todos', element: <TodosPage/>, children: [
                    {path: 'todo', element: <Todo/>}
                ]
            },
            {
                path: 'posts', element: <PostsPage/>, children: [
                    {
                        path: 'post', element: <Post/>, children: [
                            {path: 'comments', element: <CommentsPage/>},
                        ]
                    }

                ]
            },
            {
                path: 'albums', element: <AlbumsPage/>, children: [
                    {path: 'album', element: <Album/>}
                ]
            },
            {
                path: 'comments', element: <CommentsPage/>, children: [
                    {path: 'comment', element: <Comment/>}
                ]
            }
        ]
    }
])

export {router}