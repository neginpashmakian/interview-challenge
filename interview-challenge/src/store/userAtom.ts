import { IUser } from 'API/models'
import { atom } from 'recoil'

export type IUserAtom = IUser | undefined

export const userAtom = atom<IUserAtom>({
  key: 'user',
  default: undefined,
})
