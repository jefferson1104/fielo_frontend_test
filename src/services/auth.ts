import { api } from '../utils/api'

export const getToken = () =>
  api.post(`${process.env.FIELO_API_URL}/auth`, {
    headers: { 'x-app-id': process.env.FIELO_APP_ID }
  })

export const Auth = {
  getToken
}
