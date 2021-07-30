import ls from 'store2';

import { LS_ACCESS_TOKEN_NAME, LS_REFRESH_TOKEN_NAME } from '../constants';

let accessToken = '';

const saveTokens = (access: string, refresh: string): void => {
  ls.set(LS_ACCESS_TOKEN_NAME, access);
  ls.set(LS_REFRESH_TOKEN_NAME, refresh);

  accessToken = access;
};

const checkLsAccessToken = (): boolean => {
  const token = ls.get(LS_ACCESS_TOKEN_NAME);

  if (token) {
    accessToken = token;
    return true;
  }

  return false;
};

const getAccessToken = (): string => accessToken;
const getRefreshToken = (): string => ls.get(LS_REFRESH_TOKEN_NAME);

const deleteTokens = (): void => {
  ls.remove(LS_ACCESS_TOKEN_NAME);
  ls.remove(LS_REFRESH_TOKEN_NAME);
};

export {
  deleteTokens,
  saveTokens,
  getAccessToken,
  getRefreshToken,
  checkLsAccessToken,
};
