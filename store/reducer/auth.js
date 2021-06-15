import { AUTHENTICATE, DEAUTHENTICATE } from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  user: {},
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case DEAUTHENTICATE:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
