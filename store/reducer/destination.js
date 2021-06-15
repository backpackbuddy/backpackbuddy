import { DESTINATION } from '../actions/actionTypes';

export const initialState = {
  lastUpdate: 0,
  destinations: [],
};

const destinationReducer = (state = initialState, action) => {
  switch (action.type) {
    case DESTINATION:
      return {
        ...state,
        lastUpdate: action.payload.lastUpdate,
        destinations: [...state.destinations, action.payload.destination],
      };
    default:
      return state;
  }
};

export default destinationReducer;
