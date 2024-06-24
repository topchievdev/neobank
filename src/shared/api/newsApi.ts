import axios from 'axios'
import { API_BASE_URL_NEWS, API_KEY_NEWS } from '../const/api'

export const newsApi = axios.create({
  baseURL: API_BASE_URL_NEWS,
  headers: {
    'X-Api-Key': API_KEY_NEWS
  }
})
