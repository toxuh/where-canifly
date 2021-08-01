import { LOG_IN, SET_POSITION } from './constants';
import { Position, SetPositionAction, SignInAction } from './types';

export const signInAction = (data: boolean): SignInAction => ({
  type: LOG_IN,
  payload: data,
});

export const setPositionAction = (data: Position): SetPositionAction => ({
  type: SET_POSITION,
  payload: data,
});
