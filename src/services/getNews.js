import { API_KEY_NEWS, API_URL_NEWS, API_COUNTRY_NEWS, API_CATEGORY_NEWS } from './settings'
import axios from 'axios'

export default {
    
    getNewsList() {
        const apiURL = `${API_URL_NEWS}/top-headlines?country=${API_COUNTRY_NEWS}&category=${API_CATEGORY_NEWS}&apiKey=${API_KEY_NEWS}`

        return axios(apiURL)
    }
}
