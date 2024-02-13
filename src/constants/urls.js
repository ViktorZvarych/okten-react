const baseURL = 'http://owu.linkpc.net/carsAPI/v1';

const cars = '/cars'

const urls = {
    base: cars,
    getById: (id) => `${cars}/${id}`
}

export {
    baseURL,
    urls
};