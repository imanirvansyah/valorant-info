import axios from "axios";

export const callApi = axios.create({
    baseURL: 'https://valorant-api.com/',
    headers: {
        accept: "application/json",
        applicationType: "web",
    }
})