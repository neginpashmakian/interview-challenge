import { APIs } from "API/axios";
import {
  IErrorResponse,
  IRegisterUserAPIReq,
  IRegisterUserAPIRes,
} from "API/models";
import { useMutation, UseMutationOptions } from "react-query";

type Param = IRegisterUserAPIReq;
type Data = IRegisterUserAPIRes;
type Errors = IErrorResponse[] | undefined | null;
type Options = Omit<
  UseMutationOptions<Data, Errors, Param, unknown>,
  "mutationFn"
>;

export const useRegisterAPI = (options?: Options) => {
  return useMutation<Data, Errors, Param>(async (param) => {
    try {
      const res = await APIs.auth.register(param);
      return res;
    } catch (err) {
      return Promise.reject(err);
    }
  }, options);
};
