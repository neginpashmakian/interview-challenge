import { APIs } from "API/axios";
import {
  IErrorResponse,
  IUpdateArticleAPIParam,
  IUpdateArticleAPIReq,
  IUpdateArticleAPIRes,
} from "API/models";
import { useMutation, UseMutationOptions } from "react-query";

type Param = IUpdateArticleAPIReq & IUpdateArticleAPIParam;
type Data = IUpdateArticleAPIRes;
type Errors = IErrorResponse[] | undefined | null;
type Options = Omit<
  UseMutationOptions<Data, Errors, Param, unknown>,
  "mutationFn"
>;

export const useUpdateArticleAPI = (options?: Options) => {
  return useMutation<Data, Errors, Param>(async (param) => {
    try {
      const res = await APIs.article.update(param);
      return res;
    } catch (err) {
      return Promise.reject(err);
    }
  }, options);
};
