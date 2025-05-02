import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://freelancify-pzti.onrender.com/api",
  withCredentials: true,
});

// Add token to request headers
newRequest.interceptors.request.use(
  function (config) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser?.token) {
      config.headers.Authorization = `Bearer ${currentUser.token}`;
    }

    console.log(`Making ${config.method.toUpperCase()} request to: ${config.baseURL}${config.url}`);
    return config;
  },
  function (error) {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Logging the response
newRequest.interceptors.response.use(
  function (response) {
    console.log(`Response from ${response.config.url}:`, response.status);
    return response;
  },
  function (error) {
    console.error("Response error:", error);
    if (error.response) {
      console.error("Error status:", error.response.status);
      console.error("Error data:", error.response.data);
    }
    return Promise.reject(error);
  }
);

export default newRequest;
