const baseURL = 'https://rickandmortyapi.com/api';

const episodes = '/episode';
const characters = '/character';

const urls = {
    episodes: `${baseURL}${episodes}`,
    characters: `${baseURL}${characters}`,
}

export {
    baseURL,
    urls
}