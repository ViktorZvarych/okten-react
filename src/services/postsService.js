import {apiService} from "./apiService";

import {urls} from "../constants";

const postsService = {
    getAll: () => apiService.get(urls.posts.base),
    getById: (id) => apiService.get(urls.posts.byId(id)),
    getByUserId: (userId) =>apiService.get(urls.posts.byUserId(userId)),
    getByUserIdAsParams: (userId) =>apiService.get(urls.posts.base, {params: {userId}}) //- the same result as with getByUserId
}

export {postsService};