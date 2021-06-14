import authReducer from './auth';
import destinationReducer from './destination';

const { combineReducers } = require('redux');

const rootReducers = combineReducers({
  destinations: destinationReducer,
  auth: authReducer,
});

export default rootReducers;
