import type { BaseQueryApi, BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosHeaders, AxiosRequestConfig, AxiosResponse } from 'axios';
import Axios from 'axios';

import axios from './axios';

export interface AxiosBaseQueryArgs<Meta, Response = AxiosResponse> {
  meta?: Meta;
  prepareHeaders?: (headers: AxiosHeaders, api: BaseQueryApi) => AxiosHeaders;
  transformResponse?: (response: Response) => unknown;
}

export interface ServiceExtraOptions {
  authRequired?: boolean;
}

type RequestArgs = AxiosRequestConfig | string;

const getRequestConfig = (args: RequestArgs) => {
  if (typeof args === 'string') {
    return { url: args };
  }

  return args;
};

const axiosBaseQuery = <
  Args extends RequestArgs,
  Result = unknown,
  DefinitionExtraOptions extends ServiceExtraOptions = Record<string, unknown>,
  Meta = Record<string, unknown>,
>({ prepareHeaders, meta, transformResponse }: AxiosBaseQueryArgs<Meta> = {}): BaseQueryFn<
  Args,
  Result,
  unknown,
  DefinitionExtraOptions,
  Meta
> => {
  return async (args, api, extraOptions) => {
    try {
      const requestConfig = getRequestConfig(args);
      const response = await axios({
        ...requestConfig,
        headers: prepareHeaders?.((requestConfig.headers || {}) as AxiosHeaders, api) || requestConfig.headers,
        signal: api.signal,
        ...extraOptions,
      });

      const responseData = response.config.responseType === 'arraybuffer' ? response : response.data;

      return {
        data: transformResponse?.(responseData) ?? responseData,
      };
    } catch (err) {
      if (!Axios.isAxiosError(err)) {
        return {
          error: err,
          meta,
        };
      }

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
        meta,
      };
    }
  };
};

export default axiosBaseQuery;
