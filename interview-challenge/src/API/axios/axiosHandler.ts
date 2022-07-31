import { AxiosRequestConfig } from "axios";
import axiosClient from "./axiosClient";

export type axiosHandler<param, result, requestBody = {}, queryString = {}> = (
  input: param & requestBody & queryString
) => Promise<result>;

export const axiosHandler = {
  ...axiosClient,
  get: async (url: string, config?: AxiosRequestConfig) => {
    const res = await axiosClient.get(url, {
      ...config,
      headers: { ...config?.headers },
    });
    return res.data;
  },

  delete: async (url: string, config?: AxiosRequestConfig) => {
    const res = await axiosClient.delete(url, {
      ...config,
      headers: { ...config?.headers },
    });
    return res.data;
  },

  post: async <input = unknown>(
    url: string,
    data?: input,
    config?: AxiosRequestConfig
  ) => {
    const res = await axiosClient.post(url, data, {
      ...config,
      headers: { ...config?.headers },
    });
    return res.data;
  },

  put: async <input = unknown>(
    url: string,
    data?: input,
    config?: AxiosRequestConfig
  ) => {
    const res = await axiosClient.put(url, data, {
      ...config,
      headers: { ...config?.headers },
    });
    return res.data;
  },

  patch: async <input = unknown>(
    url: string,
    data?: input,
    config?: AxiosRequestConfig
  ) => {
    const res = await axiosClient.patch(url, data, {
      ...config,
      headers: { ...config?.headers },
    });
    return res.data;
  },
};
