import { IUser } from ".";

export interface IRegisterUserAPIRes {
  user: IUser;
}

export interface IRegisterUserAPIReq {
  user: {
    username: string;
    email: string;
    password: string;
  };
}
