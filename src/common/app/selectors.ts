import { createSelector } from 'reselect';

import type { GlobalState } from '../../types';
import type { AppState } from './types';

const appSelector = (state: GlobalState): AppState => state.app;

/* eslint-disable-next-line */
export const isLoggedSelector = createSelector(
  appSelector,
  (app) => app.isLogged,
);
