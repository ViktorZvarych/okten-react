const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts';
const comments = '/comments';

const urls = {
    users: {
        base: `${baseURL}${users}`,
        byId: (id) => `${baseURL}${users}/${id}`
    },
    posts: {
        base: `${baseURL}${posts}`,
        byId: (id) => `${baseURL}${posts}/${id}`,
        byUserId: (userId) => `${baseURL}/${userId}${posts}`
    },
    comments: {
        base: `${baseURL}${comments}`,
        byId: (id) => `${baseURL}${comments}/${id}`,
        byUserId: (postId) => `${baseURL}/${postId}${comments}`
    },
}

export {baseURL, urls};