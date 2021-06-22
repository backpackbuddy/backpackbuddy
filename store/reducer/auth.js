import { AUTHENTICATE, DEAUTHENTICATE, SET_AUTH } from '../actions/actionTypes';

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
    case SET_AUTH:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload.user,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
