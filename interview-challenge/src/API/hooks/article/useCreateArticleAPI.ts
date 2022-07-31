import { APIs } from "API/axios";
import {
  ICreateArticleAPIReq,
  ICreateArticleAPIRes,
  IErrorResponse,
} from "API/models";
import { useMutation, UseMutationOptions } from "react-query";

type Param = ICreateArticleAPIReq;
type Data = ICreateArticleAPIRes;
type Errors = IErrorResponse[] | undefined | null;
type Options = Omit<
  UseMutationOptions<Data, Errors, Param, unknown>,
  "mutationFn"
>;

export const useCreateArticleAPI = (options?: Options) => {
  return useMutation<Data, Errors, Param>(async (param) => {
    try {
      const res = await APIs.article.create(param);
      return res;
    } catch (err) {
      return Promise.reject(err);
    }
  }, options);
};
