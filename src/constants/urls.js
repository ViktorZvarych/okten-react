const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts';
const comments = '/comments';

const urls = {
    users: {
        base: `${users}`,
        byId: (id) => `${users}/${id}`
    },
    posts: {
        base: `${baseURL}${posts}`,
        byId: (id) => `${posts}/${id}`,
        byUserId: (userId) => `${userId}${posts}`
    },
    comments: {
        base: `${baseURL}${comments}`,
        byId: (id) => `${comments}/${id}`,
        byUserId: (postId) => `${postId}${comments}`
    },
}

export {baseURL, urls};