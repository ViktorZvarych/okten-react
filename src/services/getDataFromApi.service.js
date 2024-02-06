async function getPostsFromApi() {
    const responseJson = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await responseJson.json();

    return response;
}

async function getPostDetailsFromApi(id) {
    const responseJson = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const response = await responseJson.json();

    return response;
}

export {getPostsFromApi, getPostDetailsFromApi};