import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.mode === "development"
		? "http://localhost:5000"
		: `${import.meta.env.VITE_API_BASE_URL}`,
	withCredentials: true, // send cookies to the server
});


export default axiosInstance;
