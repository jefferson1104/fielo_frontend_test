import { api } from '../utils/api'

const requestHeaders = (token: string) => {
  return {
    headers: {
      'x-access-token': token
    }
  }
}

const API_URL = process.env.FIELO_API_URL

// request to get all users
export const getUsers = (token: string) =>
  api.get(`${API_URL}/users`, requestHeaders(token))

// request to get specify user, using id with the param
export const getUser = (token: string, id: string) =>
  api.get(`${API_URL}/users/${id}`, requestHeaders(token))

// request to get the activities of a specific user
export const getActivities = (token: string, id: string) =>
  api.get(`${API_URL}/users/${id}/activities`, requestHeaders(token))

// request to get program data using specific program id
export const getPrograms = (token: string, id: string) =>
  api.get(`${API_URL}/programs/${id}`, requestHeaders(token))

// request to get the user level using specific user
export const getUserLevel = (token: string, id: string) =>
  api.get(`${API_URL}/levels/${id}`, requestHeaders(token))

export const Users = {
  getUsers,
  getUser,
  getActivities,
  getPrograms,
  getUserLevel
}
