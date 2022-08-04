import { APIs } from 'API/axios'
import { IGetTagListAPIRes } from 'API/models'
import { useQuery, UseQueryOptions } from 'react-query'

type Data = IGetTagListAPIRes['tags'] | undefined
type Options = Omit<UseQueryOptions<Data>, 'queryKey' | 'queryFn'>

export const GET_TAG_LIST_QUERY = 'tag-list'

export const useGetTagListAPI = (options?: Options) => {
  return useQuery<Data>(
    [GET_TAG_LIST_QUERY],
    async () => {
      try {
        const res = await APIs.tag.getAll({})
        return res.tags
      } catch (error) {
        return Promise.reject(error)
      }
    },
    options
  )
}
