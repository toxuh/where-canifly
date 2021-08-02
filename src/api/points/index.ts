/* eslint-disable import/no-cycle */
import { AxiosResponse } from 'axios';
import handlePrivateRequest from '../utils/handlePrivateRequest';
import URL from '../utils/url';

import type { AddPointType, GetPointsType } from './types';

export const getPoints = (data: GetPointsType): Promise<AxiosResponse> =>
  handlePrivateRequest({
    url: URL('Location'),
    method: 'GET',
    params: {
      ...data,
      radius: 200,
    },
  });

export const addPoint = (data: AddPointType): Promise<AxiosResponse> =>
  handlePrivateRequest({
    url: URL('Location'),
    method: 'POST',
    data,
  });
