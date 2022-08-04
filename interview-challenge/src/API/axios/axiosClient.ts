import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.realworld.io/api',
  timeout: 15000,
  // withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
})

export default instance
