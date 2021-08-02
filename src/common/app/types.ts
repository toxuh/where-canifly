import { LOG_IN, SET_CATEGORY_TYPES, SET_POSITION } from './constants';

export type Category = {
  id: string;
  title: string;
};

export type Position = {
  lat?: number;
  lon?: number;
  radius?: number;
};

export type AppState = {
  categories: Category[];
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

export type SetCategoriesAction = {
  type: typeof SET_CATEGORY_TYPES;
  payload: Category[];
};

export type AppActionTypes =
  | SignInAction
  | SetCategoriesAction
  | SetPositionAction;
