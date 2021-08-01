import { LOG_IN, SET_POSITION } from './constants';

export type Position = {
  lat: number;
  lon: number;
};

export type AppState = {
  isLogged: boolean;
  position: Position;
  isUserPosition: boolean;
};

export type SignInAction = {
  type: typeof LOG_IN;
  payload: boolean;
};

export type SetPositionAction = {
  type: typeof SET_POSITION;
  payload: Position;
};

export type AppActionTypes = SignInAction | SetPositionAction;
