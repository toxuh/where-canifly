import { LOG_IN } from './constants';

export type AppState = {
  isLogged: boolean;
};

export type LogInAction = {
  type: typeof LOG_IN;
  payload: boolean;
};

export type AppActionTypes = LogInAction;
