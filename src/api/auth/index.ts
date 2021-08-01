/* eslint-disable import/no-cycle */
import { AxiosResponse } from 'axios';
import handlePublicRequest from '../utils/handlePublicRequest';
import URL from '../utils/url';

import type { SignInType, SignUpType } from './types';

/* export const refreshAppToken = (
  accessToken: string,
  refreshToken: string,
): Promise<Response> =>
  handlePublicRequest({
    url: URL('auth/refresh'),
    method: 'POST',
    data: {
      accessToken,
      refreshToken,
    },
  }); */

export const signIn = ({
  username,
  password,
}: SignInType): Promise<AxiosResponse> =>
  handlePublicRequest({
    url: URL('auth'),
    method: 'POST',
    data: {
      username,
      password,
    },
  });

export const signUp = ({
  email,
  password,
  username,
}: SignUpType): Promise<AxiosResponse> =>
  handlePublicRequest({
    url: URL('User/registration'),
    method: 'POST',
    data: {
      email,
      password,
      username,
    },
  });
