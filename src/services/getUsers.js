import axios from "axios";
import { API_GLOBALHEALTH } from "./settings";

export const register = async (user) => await axios.post(`${API_GLOBALHEALTH}/usuario/register`, user)

export const login = async (user) => 
  await axios.post(`${API_GLOBALHEALTH}/usuario/login`, user)

export const profile = async (token) => await axios.get(`${API_GLOBALHEALTH}/usuario/profile`, {
  headers: {
    token
  }
})