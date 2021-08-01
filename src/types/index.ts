import type { AppState } from '../common/app/types';

export type AnyObject = Record<string, unknown>;

export type GlobalState = {
  app: AppState;
};
