import { api } from '../utils/api'
import { APP_URL } from './constants'

const requestHeaders = (token: string) => {
  return {
    headers: {
      'x-access-token': token
    }
  }
}

export const getUsers = (token: string) =>
  api.get(`${APP_URL}/users`, requestHeaders(token))

export const User = {
  getUsers
}
