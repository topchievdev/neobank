import axios from 'axios'
import { API_BASE_URL_MAIN } from '../const/api'

export const mainApi = axios.create({ baseURL: API_BASE_URL_MAIN })
