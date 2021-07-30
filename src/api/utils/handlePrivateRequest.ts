/* eslint-disable import/no-cycle */
import axios from 'axios';
import { toast } from 'react-toastify';

import { getAccessToken } from '../../utils/tokens';

import { SHOULD_REFRESH_TOKENS_STATUS_CODE } from '../../constants';

import axiosWithHumps from './axiosWithHumps';
import addHeaders from './addHeaders';
import handleRefreshToken from './handleRefreshToken';
import { RequestConfig, Response } from './types';

const handlePrivateRequest = async (
  request: RequestConfig,
): Promise<Response> => {
  const { useHumps = false, ...requestConfig } = request;
  const accessToken = getAccessToken();
  const requestWithHeaders = addHeaders({
    request: requestConfig,
    accessToken,
  });
  const axiosInstance = useHumps ? axiosWithHumps : axios;

  try {
    const { data } = await axiosInstance(requestWithHeaders);

    return data;
  } catch (error) {
    const { response = {} } = error;

    if (response.status === SHOULD_REFRESH_TOKENS_STATUS_CODE) {
      const refreshTokenError = await handleRefreshToken();

      if (!refreshTokenError) {
        return handlePrivateRequest(request);
      }
    } else {
      toast.error('Request error');
    }

    return error;
  }
};

export default handlePrivateRequest;
