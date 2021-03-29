import axios from 'axios';

export const baseUrl = "http://localHost:3000";

const axiosInstance = axios.create({
    baseURL:baseUrl
})

export { axiosInstance }