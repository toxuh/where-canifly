import { LOG_IN, SET_CATEGORY_TYPES, SET_POSITION } from './constants';
import type {
  Category,
  Position,
  SetCategoriesAction,
  SetPositionAction,
  SignInAction,
} from './types';

export const signInAction = (data: boolean): SignInAction => ({
  type: LOG_IN,
  payload: data,
});

export const setPositionAction = (data: Position): SetPositionAction => ({
  type: SET_POSITION,
  payload: data,
});

export const setCategoriesAction = (data: Category[]): SetCategoriesAction => ({
  type: SET_CATEGORY_TYPES,
  payload: data,
});
