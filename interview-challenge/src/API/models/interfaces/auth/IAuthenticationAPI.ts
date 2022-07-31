import { IUser } from ".";

export interface IAuthenticationAPIRes {
  user: IUser;
}

export interface IAuthenticationAPIReq {
  user: {
    email: string;
    password: string;
  };
}
