import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000/",
  baseURL: "https://my-portfolio-server-mauve.vercel.app/",
});
const UseAxiosSecure = () => {
  return axiosInstance;
};

export default UseAxiosSecure;
