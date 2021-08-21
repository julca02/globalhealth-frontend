import { API_URL_COVID,  API_YESTERDAY_COVID } from "./settings";
import axios from 'axios'

const fromApiResponseToNewsCovid = apiResponse => {
    const data = apiResponse.data
    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
        const { todayCases, todayDeaths, todayRecovered } = data
        return { todayCases, todayDeaths, todayRecovered }
    }
    return []
}
const fromApiResponseToNewsCovidWorld = apiResponse => {
    const data = apiResponse.data
    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
        const { todayCases, todayDeaths, todayRecovered } = data
        return { todayCases, todayDeaths, todayRecovered }

    }
    return []
}
export default {
    getCovidCountry(pais) {
        const apiURL = `${API_URL_COVID}/countries/${pais}?yesterday=${API_YESTERDAY_COVID}&strict=true`
        return axios(apiURL)
            .then(fromApiResponseToNewsCovid)
    },
    getCovidWorld() {
        const apiURL = `${API_URL_COVID}/all`
        return axios(apiURL)
            .then(fromApiResponseToNewsCovidWorld)

    }
}
