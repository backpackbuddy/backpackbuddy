import authReducer from './auth';
import destinationReducer from './destinations';
import myOrderReducer from './myOrders';
import toastReducer from './toast';

const { combineReducers } = require('redux');

const rootReducers = combineReducers({
  destinations: destinationReducer,
  myorders: myOrderReducer,
  auth: authReducer,
  toast: toastReducer,
});

export default rootReducers;
