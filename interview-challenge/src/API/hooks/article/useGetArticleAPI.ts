import { APIs } from 'API/axios'

import { IGetArticleAPIParam, IGetArticleAPIRes } from 'API/models'
import { useQuery, UseQueryOptions } from 'react-query'

type Param = IGetArticleAPIParam
type Data = IGetArticleAPIRes | undefined
type Options = Omit<UseQueryOptions<Data>, 'queryKey' | 'queryFn'>

export const GET_ARTICLE_QUERY = 'article'

export const useGetArticleAPI = (param: Param, options?: Options) => {
  return useQuery<Data>(
    [GET_ARTICLE_QUERY, param],
    async () => {
      try {
        const res = await APIs.article.get(param)
        return res
      } catch (error) {
        return Promise.reject(error)
      }
    },
    options
  )
}
