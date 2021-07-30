import { AxiosRequestConfig } from 'axios';

export type AddHeadersOptions = {
  request: AxiosRequestConfig;
  accessToken?: string;
};

const addHeaders = ({
  request,
  accessToken = '',
}: AddHeadersOptions): AxiosRequestConfig => {
  const newRequest = {
    ...request,
    headers: {
      ...request.headers,
    },
  };

  if (accessToken) {
    newRequest.headers.Authorization = `Bearer ${accessToken}`;
  }

  return newRequest;
};

export default addHeaders;
