import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://random-data-api.com/api/v2/",
});

axiosInstance.interceptors.request.use((config) => {
  return config;
});

export default axiosInstance;
