import { API_KEY_NEWS, API_URL_NEWS, API_COUNTRY_NEWS, API_CATEGORY_NEWS } from './settings'
import axios from 'axios'

const fromApiResponseToNews = apiResponse => {
    const data = apiResponse.data.articles
    if (Array.isArray(data)) {
        const news = data.map(newsItem => {
            const { title, description, publishedAt, url, urlToImage } = newsItem
            const { name } = newsItem.source
            return { title, description, urlToImage, publishedAt, url, name }
        })
        return news
    }
    return []
}
export default function getNewsList() {
        const apiURL = `${API_URL_NEWS}/top-headlines?country=${API_COUNTRY_NEWS}&category=${API_CATEGORY_NEWS}&apiKey=${API_KEY_NEWS}`

        return axios(apiURL)
        .then(res => fromApiResponseToNews(res))
    }

