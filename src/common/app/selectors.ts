import { createSelector } from 'reselect';

import type { GlobalState } from '../../types';
import type { AppState } from './types';

const appSelector = (state: GlobalState): AppState => state.app;

export const isLoggedSelector = createSelector(
  appSelector,
  (app) => app.isLogged,
);

export const positionSelector = createSelector(
  appSelector,
  (app) => app.position,
);

export const isUserPositionSelector = createSelector(
  appSelector,
  (app) => app.isUserPosition,
);

export const typesSelector = createSelector(appSelector, (app) => app.types);

export const currentTypeSelector = createSelector(
  appSelector,
  (app) => app.currentType,
);
