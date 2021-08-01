import { LOG_IN } from './constants';
import { Position } from './types';

/* eslint-disable-next-line */
export const signInAction = (data: boolean) => ({
  type: LOG_IN,
  payload: data,
});

export const setPositionAction = (data: boolean) => ({
  type: LOG_IN,
  payload: data,
});
