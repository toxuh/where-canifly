import {
  LOG_IN,
  SELECT_CATEGORY,
  SET_CATEGORY_TYPES,
  SET_POSITION,
} from './constants';

import type { AppActionTypes, AppState } from './types';

const initialState: AppState = {
  types: [],
  currentType: '',
  isLogged: false,
  position: {
    lat: 55.7575757,
    lon: 37.6272607,
    zoom: 14,
  },
  isUserPosition: false,
};

const reducer = (state = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLogged: action.payload,
      };

    case SET_POSITION:
      return {
        ...state,
        position: {
          ...state.position,
          ...action.payload,
        },
        isUserPosition: true,
      };

    case SET_CATEGORY_TYPES:
      return {
        ...state,
        types: action.payload,
        currentType: action.payload[0].id,
      };

    case SELECT_CATEGORY:
      return {
        ...state,
        currentType: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
