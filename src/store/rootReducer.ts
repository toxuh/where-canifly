import { combineReducers } from 'redux';

import appReducer from '../common/app/reducer';

export default combineReducers({
  app: appReducer,
});
