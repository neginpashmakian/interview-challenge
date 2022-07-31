import { IAuthor } from "API/models";

export interface IArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: Date | string;
  updatedAt: Date | string; // "2016-02-18T03:48:35.824Z"
  favorited: boolean;
  favoritesCount: number;
  author: IAuthor;
}
