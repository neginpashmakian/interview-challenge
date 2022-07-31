import { APIs } from "API/axios";
import {
  IDeleteArticleAPIParam,
  IDeleteArticleAPIRes,
  IErrorResponse,
} from "API/models";
import { useMutation, UseMutationOptions } from "react-query";

type Param = IDeleteArticleAPIParam;
type Data = IDeleteArticleAPIRes;
type Errors = IErrorResponse[] | undefined | null;
type Options = Omit<
  UseMutationOptions<Data, Errors, Param, unknown>,
  "mutationFn"
>;

export const useDeleteArticleAPI = (options?: Options) => {
  return useMutation<Data, Errors, Param>(async (param) => {
    try {
      const res = await APIs.article.delete(param);
      return res;
    } catch (err) {
      return Promise.reject(err);
    }
  }, options);
};
