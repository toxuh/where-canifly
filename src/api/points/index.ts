/* eslint-disable import/no-cycle */
import { AxiosResponse } from 'axios';
import handlePrivateRequest from '../utils/handlePrivateRequest';
import URL from '../utils/url';

import type { AddPointType, GetPointsType } from './types';

export const getPoints = (data: GetPointsType): Promise<AxiosResponse> => {
  const radius = (
    (156543033.92 * Math.cos((data.latitude * Math.PI) / 180)) /
    2 ** data.zoom
  ).toFixed(0);

  return handlePrivateRequest({
    url: URL('Location'),
    method: 'GET',
    params: {
      ...data,
      radius,
    },
  });
};

export const addPoint = (data: AddPointType): Promise<AxiosResponse> =>
  handlePrivateRequest({
    url: URL('Location'),
    method: 'POST',
    data,
  });
