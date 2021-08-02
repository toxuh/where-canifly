import { combineReducers } from 'redux';

import appReducer from '../common/app/reducer';
import pointsReducer from '../common/points/reducer';

export default combineReducers({
  app: appReducer,
  points: pointsReducer,
});
