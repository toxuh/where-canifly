import { LOG_IN, SET_POSITION } from './constants';

import type { AppActionTypes, AppState } from './types';

const initialState: AppState = {
  isLogged: false,
  position: {
    lat: 55.7575757,
    lon: 37.6272607,
  },
  isUserPosition: false,
};

const reducer = (state = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLogged: true,
      };

    case SET_POSITION:
      return {
        ...state,
        position: action.payload,
        isUserPosition: true,
      };

    default:
      return state;
  }
};

export default reducer;
