import axios from "axios";

const axiosApiIntances = axios.create({
  // baseURL: "https://event-organizing-backend.vercel.app/",

  baseURL: "http://localhost:3001/",
});
// Add a request interceptor
axiosApiIntances.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosApiIntances;
