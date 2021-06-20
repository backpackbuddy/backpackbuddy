import {
  DESTINATION_LIST_LOADING,
  DESTINATION_LIST_FETCH,
  DESTINATION_LIST_SET_FILTER,
  DESTINATION_LIST_LOAD_MORE,
} from '../actions/actionTypes';

export const initialState = {
  destinations: [],
  filter: {
    offset: 0,
    limit: 12,
    orderBy: '',
    order: '',
    search: '',
  },
  loading: false,
  thereIsMore: true,
};

const destinationReducer = (state = initialState, action) => {
  switch (action.type) {
    case DESTINATION_LIST_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case DESTINATION_LIST_FETCH:
      return {
        ...state,
        ...action.payload,
        destinations: [...action.payload.destinations],
      };
    case DESTINATION_LIST_LOAD_MORE:
      return {
        ...state,
        ...action.payload,
        destinations: [
          ...state.destinations,
          ...action.payload.destinations,
        ],
      };
    case DESTINATION_LIST_SET_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload.filter,
        },
      };
    default:
      return state;
  }
};

export default destinationReducer;
