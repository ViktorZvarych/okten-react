import {axiosAPIService} from "./axiosAPI.service";
import {urls} from "../constants/urls";

const commentsService = {
    getAll: () => axiosAPIService.get(urls.comments.base),
    postNewComment: (newComment) => axiosAPIService.post(urls.comments.base, newComment)
}

export {commentsService};