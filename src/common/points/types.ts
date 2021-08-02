import { SET_POINTS } from './constants';

import type { Point } from '../../api';

export type PointsState = {
  points: Point[];
};

export type SetPointsAction = {
  type: typeof SET_POINTS;
  payload: Point[];
};

export type PointsActionTypes = SetPointsAction;
