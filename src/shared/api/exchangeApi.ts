import axios from 'axios'
import {
  API_BASE_URL_EXCHANGE,
  API_HOST_EXCHANGE,
  API_KEY_EXCHANGE
} from '../const/api'

export const exchangeApi = axios.create({
  baseURL: API_BASE_URL_EXCHANGE,
  headers: {
    'x-rapidapi-key': API_KEY_EXCHANGE,
    'x-repidapi-host': API_HOST_EXCHANGE
  }
})
