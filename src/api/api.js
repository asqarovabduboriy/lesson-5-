import axios from "axios";

const api = axios.create({
    baseURL: "http://dummyjson.com",
});

export default api