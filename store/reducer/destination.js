import { DESTINATION } from '../actions/actionTypes';

export const initialState = {
  lastUpdate: 0,
  destination: {},
};

const destinationReducer = (state = initialState, action) => {
  switch (action.type) {
    case DESTINATION:
      return {
        ...state,
        lastUpdate: action.lastUpdate,
        destinations: action.destinations,
      };
    default:
      return state;
  }
};

export default destinationReducer;
