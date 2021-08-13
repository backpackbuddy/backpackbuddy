import { MYORDER_FETCH, MYORDER_LOADING, MYORDER_UPDATE } from '../actions/actionTypes';

const initState = {
  orders: [],
  loading: false,
};

function myOrderReducer(state = initState, action) {
  switch (action.type) {
    case MYORDER_FETCH:
      return {
        ...initState,
        ...action.payload,
      };
    case MYORDER_UPDATE: {
      const newState = { ...state };
      newState.orders[action.payload.index] = action.payload.orders;
      return newState;
    }
    case MYORDER_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
}

export default myOrderReducer;
