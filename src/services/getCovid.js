import { API_URL_COVID, API_OUTFIELDS_COVID, API_WHERE_COVID } from "./settings";
import axios from 'axios'

export default {
    getCovidList(){
        const apiURL = `${API_URL_COVID}/FeatureServer/6/query?where=${API_WHERE_COVID}&outFields=${API_OUTFIELDS_COVID}&outSR=4326&f=json`
        return axios(apiURL)
    }
}
