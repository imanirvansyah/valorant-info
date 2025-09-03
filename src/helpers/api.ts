import axios from "axios";
import { ENV } from "@/constant/env";

export const callApi = axios.create({
    baseURL: 'https://valorant-api.com/',
    headers: {
        accept: "application/json",
        applicationType: "web",
    }
})

export const callIndependentApi = axios.create({
    baseURL: ENV.API_URL,
    headers: {
        accept: "application/json",
    }
})