import { createSelector } from 'reselect';

import type { GlobalState } from '../../types';
import type { PointsState } from './types';

const appSelector = (state: GlobalState): PointsState => state.points;

/* eslint-disable-next-line */
export const pointsSelector = createSelector(appSelector, (app) => app.points);
