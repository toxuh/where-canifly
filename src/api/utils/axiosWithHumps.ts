import axios from 'axios';
import { stringify } from 'query-string';
import { camelizeKeys, decamelizeKeys } from 'humps';

import { AnyObject } from '../../types';

export interface AxiosTransformer {
  (data: AnyObject, headers?: AnyObject[]): AnyObject;
}

export const appAxiosConfig = {
  paramsSerializer: (params: AnyObject): string =>
    stringify(decamelizeKeys(params), { encode: false }),

  transformRequest: [
    (data: AnyObject): AnyObject => {
      if (data instanceof FormData) {
        return data;
      }

      return decamelizeKeys(data) as AnyObject;
    },
    ...(axios.defaults.transformRequest as AxiosTransformer[]),
  ],

  transformResponse: [
    ...(axios.defaults.transformResponse as AxiosTransformer[]),
    (data: AnyObject): AnyObject =>
      camelizeKeys(data, (key, convert) => {
        if (/^[A-Za-z0-9_]+$/.test(key)) {
          return convert(key);
        }

        return key;
      }) as AnyObject,
  ],
};

const axiosInstance = axios.create(appAxiosConfig);

export default axiosInstance;
