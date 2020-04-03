import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.51:3333"
});
console.log(process.env.REACT_APP_API_URL);
export default api;
