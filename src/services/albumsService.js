import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const albumsService = {
    getAll: () => apiService.get(urls.albums.base),
    getById: (id) => apiService.get(urls.albums.byId(id)),
}

export {albumsService};