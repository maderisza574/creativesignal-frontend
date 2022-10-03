import axios from "axios";

const axiosApiIntences = axios.create({
  //   baseURL: "https://fazzpay-d3aubygex-bagusth15.vercel.app/",
  baseURL: "http://localhost:3001/",
});

export default axiosApiIntences;
