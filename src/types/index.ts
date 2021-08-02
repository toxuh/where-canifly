import type { AppState } from '../common/app/types';
import type { PointsState } from '../common/points/types';

export type AnyObject = Record<string, unknown>;

export type GlobalState = {
  app: AppState;
  points: PointsState;
};
