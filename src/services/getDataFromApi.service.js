import axiosService from "./axios.service";
import {urls} from "../constants/urls";

async function getPostsFromApi() {
    const response = await axiosService(urls.posts.base);
    const posts = await response.data;
    console.log(urls.posts.base)

    return posts;
}

async function getPostDetailsFromApi(id) {
    const responseJson = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const response = await responseJson.json();

    return response;
}

export {getPostsFromApi, getPostDetailsFromApi};