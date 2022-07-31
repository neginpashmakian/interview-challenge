import { APIs } from "API/axios";
import {
  IGetArticleListAPIQueryParam,
  IGetArticleListAPIRes,
} from "API/models";
import { useQuery, UseQueryOptions } from "react-query";

type Param = IGetArticleListAPIQueryParam;
type Data = IGetArticleListAPIRes | undefined;
type Options = Omit<UseQueryOptions<Data>, "queryKey" | "queryFn">;

export const GET_ARTICLE_LIST_QUERY = "article-list";

export const useGetArticleListAPI = (param: Param, options?: Options) => {
  return useQuery<Data>(
    [GET_ARTICLE_LIST_QUERY, param],
    async () => {
      try {
        const res = await APIs.article.getAll(param);
        return res;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    options
  );
};
