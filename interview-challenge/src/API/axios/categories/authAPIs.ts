import { axiosHandler } from 'API/axios'

import {
  apiRoutes,
  IAuthenticationAPIReq,
  IAuthenticationAPIRes,
  IRegisterUserAPIReq,
  IRegisterUserAPIRes,
  IGetCurrentUserAPIRes,
} from 'API/models'

export const authAPIs = new (class {
  login: axiosHandler<{}, IAuthenticationAPIRes, IAuthenticationAPIReq> =
    async param => {
      return await axiosHandler.post(apiRoutes.auth.login(), param)
    }

  register: axiosHandler<{}, IRegisterUserAPIRes, IRegisterUserAPIReq> =
    async ({ ...body }) => {
      return await axiosHandler.post<IRegisterUserAPIReq>(
        apiRoutes.auth.register(),
        body
      )
    }

  getCurrentUser: axiosHandler<{}, IGetCurrentUserAPIRes, {}, {}> =
    async () => {
      return await axiosHandler.get(apiRoutes.auth.getCurrentUser())
    }
})()
