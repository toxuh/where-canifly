import { LOG_IN } from './constants';

import type { AppActionTypes, AppState } from './types';

const initialState: AppState = {
  isLogged: false,
};

const reducer = (state = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLogged: true,
      };

    default:
      return state;
  }
};

export default reducer;
