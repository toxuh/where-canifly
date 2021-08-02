/* eslint-disable import/no-cycle */
import { AxiosResponse } from 'axios';
import handlePrivateRequest from '../utils/handlePrivateRequest';
import URL from '../utils/url';

/* eslint-disable-next-line */
export const getCategories = (): Promise<AxiosResponse> =>
  handlePrivateRequest({
    url: URL('LocationType'),
    method: 'GET',
  });
