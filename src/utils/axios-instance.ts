import axios from "axios";

export const axiosInstance = axios.create({baseURL:process.env.NEXT_BASE_URL,timeout:10000})