import { api } from '../utils/api'
import { APP_URL, APP_ID } from './constants'

export const getToken = () =>
  api.post(`${APP_URL}/auth`, { headers: { 'x-app-id': APP_ID } })

export const Auth = {
  getToken
}
