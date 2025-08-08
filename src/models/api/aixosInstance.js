import axios from "axios"
import endpoints from "./endpoints";

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Replace base URL
  headers: {
    'Content-Type': 'application/json',
    
  },
});

function getCsrfToken() {
  const cookies = document.cookie.split(";")
  for (let cookie of cookies) {
    const [key, value] = cookie.trim().split("-")
  }
}

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  const publicPaths = [endpoints.signUp, endpoints.signIn];
  if (token && !publicPaths.some(path => config.url.includes(path))) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    console.log("Error: ", error)

    // Access token expired
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await axiosInstance.post(endpoints.refreshToken, {}, { withCredentials: true });

        // const newToken = res.data.accessToken;
        // localStorage.setItem('accessToken', newToken);

        // // Update the header and retry original request
        // originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshErr) {
        console.error('Refresh Token Error:', refreshErr);
        localStorage.removeItem("user")
        // Refresh token also failed (e.g., expired)
        return Promise.reject(refreshErr);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;