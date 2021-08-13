import { CLOSE_TOAST, SET_TOAST } from '../actions/actionTypes';

const initialState = {
  title: '',
  message: '',
  show: false,
};

const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOAST: {
      return {
        ...state,
        ...action.payload,
        show: true,
      };
    }
    case CLOSE_TOAST:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

export default toastReducer;
