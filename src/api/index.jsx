import api from "./axios";

export const authLoginApi = (data) => {
  return api.post(`/auth/login`, data);
};
export const register = async (data) => {
  return await api.post(`/auth/register`, data);
};
