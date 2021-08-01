import { LOG_IN } from './constants';

export type Position = {
  lat: number;
  lon: number;
};

export type AppState = {
  isLogged: boolean;
  position: Position;
};

export type LogInAction = {
  type: typeof LOG_IN;
  payload: boolean;
};

export type AppActionTypes = LogInAction;
