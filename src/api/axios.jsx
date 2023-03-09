import axios from "axios";
import { getBearerToken } from "../helper/utility";

const api = axios.create({
  baseURL: "https://sms-twox.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: getBearerToken() || null,
  },
});

export default api;
