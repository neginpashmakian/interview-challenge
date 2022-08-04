import { axiosHandler } from 'API/axios'
import {
  apiRoutes,
  ICreateArticleAPIReq,
  ICreateArticleAPIRes,
  IDeleteArticleAPIParam,
  IDeleteArticleAPIRes,
  IGetArticleAPIParam,
  IGetArticleAPIRes,
  IGetArticleListAPIQueryParam,
  IGetArticleListAPIRes,
  IGetTagListAPIRes,
  IUpdateArticleAPIParam,
  IUpdateArticleAPIReq,
  IUpdateArticleAPIRes,
} from 'API/models'

export const tagAPIs = new (class {
  getAll: axiosHandler<{}, IGetTagListAPIRes, {}> = async params => {
    return await axiosHandler.get(apiRoutes.tag.getAll(), { params })
  }
})()
