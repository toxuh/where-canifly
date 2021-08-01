import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { AnyObject } from '../../types';

export type OwnRequestConfig = {
  useHumps?: boolean;
};

export type RequestConfig = AxiosRequestConfig & OwnRequestConfig;

export type Response = AxiosResponse<AnyObject> & {
  response: AxiosResponse<AnyObject>;
};

export type ErrorResponse = {
  response?: {
    config: AnyObject;
    data: AnyObject;
    headers: AnyObject;
    request: AnyObject;
    status: number;
    statusText: string;
  };
};
