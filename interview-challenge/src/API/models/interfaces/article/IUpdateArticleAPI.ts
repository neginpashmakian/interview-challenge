import { IArticle } from "API/models";

export interface IUpdateArticleAPIRes {
  article: IArticle;
}

export interface IUpdateArticleAPIReq {
  article: {
    title?: string;
    description?: string;
    body?: string;
    // tagList?: string[];
  };
}

export interface IUpdateArticleAPIParam {
  slug: string;
}
