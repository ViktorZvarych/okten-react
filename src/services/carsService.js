import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const carsService = {
    getAll: () => apiService.get(urls.base),
    create: (data) => apiService.post(urls.base, data),
    getCar: (id) => apiService.get(urls.getById(id)),
    update: (id, data) => apiService.put(urls.getById(id), data),
    delete: (id) => apiService.delete(urls.getById(id)),
}

export {carsService};