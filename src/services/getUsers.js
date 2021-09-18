import axios from "axios";
import { API_GLOBALHEALTH } from "./settings";

const userAxios = axios.create({
  baseURL: `${API_GLOBALHEALTH}/usuario`,

})
userAxios.interceptors.request.use(function (config) {
  config.headers.token = `${localStorage.getItem('token')}`
  return config;
}, function (error) {
  return Promise.reject(error)
})

const fromApiResponseToUsers = apiResponse => {
  const data = apiResponse.data
  if (Array.isArray(data)) {
      const users = data.map(userItem => {
          const { _id, name, email, phone, createdAt, gender } = userItem
          const dateFormat = new Date(createdAt).toLocaleString()
          return { _id, name, email, phone, dateFormat, gender }
      })
      return users
  }
  return []
}

export const getUsers = async (rol) => await userAxios.post(`/list/`, {rol}).then(res => fromApiResponseToUsers(res))

export const getUserDetail = async(id) => await userAxios.get(`/list/${id}`,)

export const register = async (user) => await userAxios.post(`/register`, user)

export const login = async (user) => await userAxios.post(`/login`, user)

export const profile = async () => await userAxios.get(`/profile`)

export const updateProfile = async (user, id) => await userAxios.put(`/update/${id}`, user)

