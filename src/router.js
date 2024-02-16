import {createBrowserRouter} from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";
import {commentsService, postsService, usersService} from "./services";
import {
    CommentDetailsPage,
    CommentsPage, ErrorPage,
    HomePage,
    PostDetailsPage,
    PostsPage,
    UserDetailsPage,
    UsersPage
} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {index:true, element: <HomePage/>},
            {
                path: 'users',
                element: <UsersPage/>,
                loader: () => usersService.getAll()
            },
            {
                path: 'users/:userId',
                element:<UserDetailsPage/>
            },
            {
                path: 'posts',
                element: <PostsPage/>,
                loader: () => postsService.getAll()
            },
            {
                path: 'posts/:postId',
                element:<PostDetailsPage/>
            },
            {
                path: 'comments',
                element: <CommentsPage/>,
                loader: () => commentsService.getAll(),
                children: [
                    {path: ':commentId', element: <CommentDetailsPage/>}
                ]
            }
        ]
    }
])

export {router}