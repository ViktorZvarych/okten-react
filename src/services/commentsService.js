import {apiService} from "./apiService";

import {urls} from "../constants";

const commentsService = {
    getAll: () => apiService.get(urls.comments.base),
    getById: (id) => apiService.get(urls.comments.byId(id)),
    getByUserId: (userId) =>apiService.get(urls.comments.byUserId(userId)),
    getByUserIdAsParams: (userId) =>apiService.get(urls.comments.base, {params: {userId}}) //- the same result as with getByUserId
}

export {commentsService};