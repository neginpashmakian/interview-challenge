import { getRecoil } from 'recoil-nexus'
import { IUserAtom, userAtom } from 'store'

export const TOKEN_STORAGE_KEY = 'my-tokeeeen'

/**
 * @returns Returns an object
 * @property {Function} get - Returns token
 */
export const accessToken = {
  get: () => {
    return (
      getRecoil(userAtom)?.token || sessionStorage.getItem(TOKEN_STORAGE_KEY)
    )
  },
  set: (token: string) => {
    sessionStorage.setItem(TOKEN_STORAGE_KEY, token)
  },
  clear: () => {
    sessionStorage.removeItem(TOKEN_STORAGE_KEY)
  },
}
