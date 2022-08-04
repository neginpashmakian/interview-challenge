import { getRecoil } from 'recoil-nexus'
import { IUserAtom, userAtom } from 'store'

/**
 * @returns Returns an object
 * @property {Function} get - Returns token
 */
export const accessToken = {
  get: () => {
    return getRecoil(userAtom)?.token
  },
}
