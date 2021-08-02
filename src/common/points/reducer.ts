import { SET_POINTS } from './constants';

import type { PointsActionTypes, PointsState } from './types';

const initialState: PointsState = {
  points: [],
};

const reducer = (
  state = initialState,
  action: PointsActionTypes,
): PointsState => {
  switch (action.type) {
    case SET_POINTS:
      return {
        ...state,
        points: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
