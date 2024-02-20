import axios from "axios";

const charactersService = {
    getByUrl: (url) => axios.get(url)
}

export {charactersService};