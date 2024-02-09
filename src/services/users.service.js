import {axiosAPIService} from "./axiosAPI.service";
import {urls} from "../constants/urls";

const usersService = {
    getAll: () => axiosAPIService.get(urls.users.base),
    postNewUser: (newUser) => axiosAPIService.post(urls.users.base, newUser)
}

export {usersService};