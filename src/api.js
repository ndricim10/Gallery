import axios from "axios";

const request_api = axios.create({
  baseURL: "https://api.imgur.com/3/",
});

export default request_api;
