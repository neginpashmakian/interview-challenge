import { IArticle } from "API/models";

export interface IGetArticleAPIRes {
  article: IArticle;
}

export interface IGetArticleAPIParam {
  slug: string;
}
