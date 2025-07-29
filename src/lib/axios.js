import axios from "axios";
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:5000"
    : `${import.meta.env.VITE_API_BASE_URL}`,
  withCredentials: true, // send cookies to the server
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    const token = Cookies.get('jwt-netflix');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;