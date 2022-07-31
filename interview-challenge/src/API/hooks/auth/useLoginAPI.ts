import { APIs } from "API/axios";
import {
  IAuthenticationAPIReq,
  IAuthenticationAPIRes,
  IErrorResponse,
} from "API/models";
import { useMutation, UseMutationOptions } from "react-query";

type Param = IAuthenticationAPIReq;
type Data = IAuthenticationAPIRes;
type Errors = IErrorResponse[] | undefined | null;
type Options = Omit<
  UseMutationOptions<Data, Errors, Param, unknown>,
  "mutationFn"
>;

export const useLoginAPI = (options?: Options) => {
  return useMutation<Data, Errors, Param>(async (param) => {
    try {
      const res = await APIs.auth.login(param);
      return res;
    } catch (err) {
      return Promise.reject(err);
    }
  }, options);
};
