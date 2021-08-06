import {
  LOG_IN,
  SELECT_CATEGORY,
  SET_CATEGORY_TYPES,
  SET_POSITION,
} from './constants';

export type Category = {
  id: string;
  title: string;
};

export type Position = {
  lat?: number;
  lon?: number;
  zoom?: number;
};

export type AppState = {
  types: Category[];
  currentType: string;
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

export type SelectCategoryAction = {
  type: typeof SELECT_CATEGORY;
  payload: string;
};

export type AppActionTypes =
  | SignInAction
  | SelectCategoryAction
  | SetCategoriesAction
  | SetPositionAction;
