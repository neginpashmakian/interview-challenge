import { axiosHandler } from "API/axios";
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
  IUpdateArticleAPIParam,
  IUpdateArticleAPIReq,
  IUpdateArticleAPIRes,
} from "API/models";

export const articleAPIs = new (class {
  get: axiosHandler<IGetArticleAPIParam, IGetArticleAPIRes, {}> = async ({
    slug,
  }) => {
    return await axiosHandler.get(apiRoutes.article.get(slug));
  };

  getAll: axiosHandler<
    {},
    IGetArticleListAPIRes,
    {},
    IGetArticleListAPIQueryParam
  > = async (params) => {
    return await axiosHandler.get(apiRoutes.article.getAll(), { params });
  };

  create: axiosHandler<{}, ICreateArticleAPIRes, ICreateArticleAPIReq> =
    async () => {
      return await axiosHandler.post(apiRoutes.article.create());
    };

  update: axiosHandler<
    IUpdateArticleAPIParam,
    IUpdateArticleAPIRes,
    IUpdateArticleAPIReq
  > = async ({ slug, article }) => {
    return await axiosHandler.put(apiRoutes.article.update(slug), article);
  };

  delete: axiosHandler<IDeleteArticleAPIParam, IDeleteArticleAPIRes, {}> =
    async ({ slug }) => {
      return await axiosHandler.delete(apiRoutes.article.delete(slug));
    };
})();
