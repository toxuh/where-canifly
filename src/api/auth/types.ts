import type { AnyObject } from '../../types';
import type { ErrorResponse } from '../utils/types';

export type SignInType = {
  username: string;
  password: string;
};

export type SignInDTO = {
  access_token: string;
  roles: string;
  username: string;
  errors?: AnyObject;
} & ErrorResponse;

export type SignUpType = {
  username: string;
  email: string;
  password: string;
};

export type SignUpDTO = {
  access_token: string;
  expiration: string;
  refresh_token: string;
};
