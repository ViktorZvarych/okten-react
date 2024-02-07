// ---AXIOS---
import React from 'react';
import axios from "axios";

    const AxiosComponent = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(response => console.log('1. fetch', response));

        axios('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.data)
            .then(response => console.log('2. axios', response));

        axios
            .create({baseURL: 'https://jsonplaceholder.typicode.com'})
            .get('/posts')
            .then(({data}) => console.log('3. axios with create baseURL', data));

// src/
// |---components/
//     |---PostsContainer/
//         |---PostsContainer.js
//         |---PostsList.js
//         |---Post.js
//         |---PostDetails.js
// |---constants/
//     |---urls.js
// |---services/
//     |---axiosAPIService.js
//     |---postsService.js




// constants/urls
        const postsJsonBaseUrl = 'https://jsonplaceholder.typicode.com'
        const spaceXJsonBaseUrl = 'https://api.spacexdata.com/v3'

        const users = '/users'
        const posts = '/posts'
        const launches = '/launches'

        const urls = {
            users: {
                base:'/users',
                byId: (id) => `${users}/${id}`
            },
            posts:{
                base:posts,
                byId: (id) => `${posts}/${id}`
            },
            launches:{
                base:launches,
                byId: (id) => `${launches}/${id}`
            }
        }

        // export {
        // postsJsonBaseUrl,
        // spaceXJsonBaseUrl,
        // urls
        // }

//--- services/axiosAPIService.js
        // import axios from "axios";
        // import {postsJsonBaseUrl} from "../constants/urls";

        const axiosAPIService = axios.create({baseURL: postsJsonBaseUrl})

        // export {axiosAPIService}

//--- services/postsService.js
        // import {axiosAPIService} from "./axiosPostService.service";
        // import {urls} from "../constants/urls";

        const postsService = {
            getAll: () => axiosAPIService.get(urls.posts.base)
        }

        // export {postsService}

        postsService.getAll().then(({data}) => console.log('4. postService', data));

        return (
            <div>

            </div>
        );
    };


export default AxiosComponent;

