const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts';

const urls = {
    users: {
        base: `${baseURL}${users}`,
        byId: (id) => `${baseURL}${users}${id}`
    },
    posts: {
        base: `${baseURL}${posts}`,
        byId: (id) => `${baseURL}${posts}/${id}`,
        byUserId:(userId)=>`${baseURL}${users}/${userId}/posts`
    }
}

export {
    baseURL,
    urls
};