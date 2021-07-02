import authReducer from './auth';
import destinationReducer from './destinations';
import toastReducer from './toast';

const { combineReducers } = require('redux');

const rootReducers = combineReducers({
  destinations: destinationReducer,
  auth: authReducer,
  toast: toastReducer,
});

export default rootReducers;
