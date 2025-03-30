import axios, { type AxiosInstance } from "axios";
import { userStore } from "../store/auth/auth.store"; // Import store
import { getActivePinia } from "pinia"; // Lấy Pinia store đang hoạt động

const axiosClient: AxiosInstance = axios.create({
  baseURL: "https://api.example.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosClient.interceptors.request.use(
  (config) => {
    const pinia = getActivePinia(); // Lấy store hiện tại
    if (pinia) {
      const authStore = userStore(); // Sử dụng auth store
      const token = authStore.token;
      if (token) {
        config.headers["authorization"] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;
