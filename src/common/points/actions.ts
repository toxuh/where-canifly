import { SET_POINTS } from './constants';
import type { SetPointsAction } from './types';

import type { Point } from '../../api';

/* eslint-disable-next-line */
export const setPointsAction = (data: Point[]): SetPointsAction => ({
  type: SET_POINTS,
  payload: data,
});
