import axios, { AxiosRequestConfig } from 'axios'
import { accessToken } from 'modules/auth'

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

const onfulfilled = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const access_token = accessToken.get()

  if (!config.headers) config.headers = {}
  if (access_token) config.headers['Authorization'] = `Token ${access_token}`

  return config
}

instance.interceptors.request.use(onfulfilled)

export default instance
