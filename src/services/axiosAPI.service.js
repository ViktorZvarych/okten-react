import axios from "axios";
import {jsonPlaceHolderBaseUrl} from "../constants/urls";

const axiosAPIService = axios.create({
    baseURL: jsonPlaceHolderBaseUrl,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
});

export {axiosAPIService};