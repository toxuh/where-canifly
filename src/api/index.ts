import { signIn, signUp } from './auth';
import type {
  SignInDTO,
  SignInType,
  SignUpDTO,
  SignUpType,
} from './auth/types';

import { getCategories } from './categories';
import type { Category } from './categories/types';

import { addPoint, getPoints } from './points';
import {
  AddPointType,
  GetPointsDTO,
  GetPointsType,
  Point,
  Position,
  SetNewPositionType,
} from './points/types';

export type {
  AddPointType,
  Category,
  GetPointsDTO,
  GetPointsType,
  Point,
  Position,
  SignInDTO,
  SignInType,
  SignUpDTO,
  SignUpType,
  SetNewPositionType,
};

export { addPoint, getCategories, getPoints, signIn, signUp };
