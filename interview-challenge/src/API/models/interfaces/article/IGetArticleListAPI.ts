import { IArticle } from "API/models";

export interface IGetArticleListAPIRes {
  articles: IArticle[];
  articlesCount: number;
}

export interface IGetArticleListAPIQueryParam {
  limit?: number; // default is 20
  offset?: number; // default is 0
}
