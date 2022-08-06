import { APIs } from 'API/axios'
import { IGetCurrentUserAPIReq, IGetCurrentUserAPIRes } from 'API/models'
import { useQuery, UseQueryOptions } from 'react-query'

type Param = IGetCurrentUserAPIReq
type Data = IGetCurrentUserAPIRes | undefined
type Options = Omit<UseQueryOptions<Data>, 'queryKey' | 'queryFn'>

export const CURRENT_USER_QUERY = 'current-user'

export const useGetCurrentUserAPI = (options?: Options) => {
  return useQuery<Data>(
    [CURRENT_USER_QUERY],
    async () => {
      try {
        const res = await APIs.auth.getCurrentUser({})
        return res
      } catch (error) {
        return Promise.reject(error)
      }
    },
    options
  )
}
