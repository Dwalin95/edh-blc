/* eslint-disable no-console */
import Axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error] [${JSON.stringify(error)}]`);
  throw new Error(error.message);
};

const onResponse = (response: AxiosResponse): AxiosResponse => response;

const onResponseError = (error: AxiosError) => {
  console.error(`[response error] [${JSON.stringify(error)}]`);

  switch (error?.response?.status) {
    case 302: // TIMEOUT SCRIVANIA
      if (error.response.headers['scrivania-logout']) {
        window.location.href = error.response.headers['location'];
        return;
      }
      return throwError(error);
    case 401: // UNAUTHORIZED
      if (!window.location.pathname.includes('/login')) {
        window.location.href = import.meta.env.BASE_URL + 'login';
        return;
      }
      return throwError(error);
    case 403:
      if (error.response.headers['filter-security-origin']) {
        document.getElementsByTagName('html')[0].innerHTML = error.response.data as string;
        return;
      }
      return throwError(error);
    case 420: // ERRORE SCRIVANIA
      if (error.response.headers['scrivania-redirect-url']) {
        window.location.href = error.response.headers['scrivania-redirect-url'];
        return;
      }
      return throwError(error);
    default:
      return throwError(error);
  }
};

function throwError(error: AxiosError) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errorData = error.response?.data as any;
  const message = errorData?.returnDescription || errorData?.message || error.message;
  throw new Error(message);
}

function setupInterceptors(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}

const axiosInstance = Axios.create({ baseURL: import.meta.env.VITE_API_CONTEXT });

const axios = setupInterceptors(axiosInstance);

export default axios;
