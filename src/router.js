import {createBrowserRouter} from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";
import MainPage from "./pages/MainPage/MainPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import PostDetails from "./components/Posts/PostDetails";
import UserPosts from "./components/Posts/UserPosts";
import {usersService} from "./services/usersService";

const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, errorElement: <ErrorPage/>,children: [
            {index: true, element: <MainPage/>},
            {path: 'users',
                element: <UsersPage/>,
                loader: () => usersService.getAll(),
                children: [
                    {path: ':id', element: <UserDetailsPage/>, children: [
                            {path: 'posts', element: <PostsPage/>,children: [
                                    {path: ':userId', element: <UserPosts/>,children:[
                                            {path: ':postId', element: <PostDetails/>}
                                        ]},

                                ]}
                        ]}
                ]}
        ]},

]);

export {router}