const baseURL = 'https://jsonplaceholder.typicode.com';

const todos = '/todos';

const albums = '/albums';

const comments = '/comments';

const posts = '/posts';

const urls = {
    todos: {
        base: `${baseURL}${todos}`,
        byId: id => `${baseURL}${todos}/${id}`
    },
    albums: {
        base: `${baseURL}${albums}`,
        byId: id => `${baseURL}${albums}/${id}`
    },
    comments: {
        base: `${baseURL}${comments}`,
        byId: id => `${baseURL}${comments}/${id}`,
    },
    posts: {
        base: `${baseURL}${posts}`,
        byId: id => `${baseURL}${posts}/${id}`
    },
}

export {
    baseURL,
    urls
}