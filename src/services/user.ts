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

export const getUser = (token: string, id: string) =>
  api.get(`${APP_URL}/users/${id}`, requestHeaders(token))

export const getActivities = (token: string, id: string) =>
  api.get(`${APP_URL}/users/${id}/activities`, requestHeaders(token))

export const getPrograms = (token: string, id: string) =>
  api.get(`${APP_URL}/programs/${id}`, requestHeaders(token))

export const getUserLevel = (token: string, id: string) =>
  api.get(`${APP_URL}/programs/${id}/levels`, requestHeaders(token))

export const Users = {
  getUsers,
  getUser,
  getActivities,
  getPrograms,
  getUserLevel
}
