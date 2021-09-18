import axios from "axios";
import { API_GLOBALHEALTH } from "./settings";


export const get = async (user) => await axios.post(`${API_GLOBALHEALTH}/usuario/list`, user)

