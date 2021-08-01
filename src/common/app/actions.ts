import { LOG_IN } from './constants';

/* eslint-disable-next-line */
export const signInAction = (data: boolean) => ({
  type: LOG_IN,
  payload: data,
});
