import axios from "axios";

const BASE_URL = "http://localhost:8080";
export const getApiUrl = () => {
    return BASE_URL;
};

export const restApi = axios.create({
    baseURL: getApiUrl(),
});
