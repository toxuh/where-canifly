/* eslint-disable import/no-cycle */

import { redirectToAuth } from '../../utils/react';
import {
  deleteTokens,
  // getAccessToken,
  // getRefreshToken,
  saveTokens,
} from '../../utils/tokens';

// import { refreshAppToken } from '../auth';

import { Response } from './types';

let refreshTokenRequest: Promise<Response> | null = null;

/* export const refreshTokenRequestIsPending = (): boolean =>
  refreshTokenRequest !== null; */

export const setRefreshTokenRequest = (
  request: Promise<Response> | null,
): void => {
  refreshTokenRequest = request;
};

const handleRefreshToken = async (): Promise<Response | null> => {
  /* if (!refreshTokenRequestIsPending()) {
    setRefreshTokenRequest(
      refreshAppToken(getAccessToken(), getRefreshToken()),
    );
  } */

  try {
    const tokens = await refreshTokenRequest;
    saveTokens(
      (tokens as { accessToken?: string })?.accessToken || '',
      (tokens as { refreshToken?: string })?.refreshToken || '',
    );
    setRefreshTokenRequest(null);

    return null;
  } catch (refreshTokenError) {
    deleteTokens();
    redirectToAuth();

    return refreshTokenError;
  }
};

export default handleRefreshToken;
