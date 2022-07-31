import { IArticle } from "API/models";

export interface ICreateArticleAPIRes {
  article: IArticle;
}

export interface ICreateArticleAPIReq {
  article: {
    title: string;
    description: string;
    body: string;
    tagList?: string[];
  };
}
