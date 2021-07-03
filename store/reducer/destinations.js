import { ORDER_BY_NEWEST } from '../../constants/filter-destination';
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
    limit: 20,
    orderBy: ORDER_BY_NEWEST,
    order: 'DESC',
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
        filter: {
          ...state.filter,
          ...action.payload.filter,
          ...{ offset: 0 },
        },
        destinations: [...action.payload.destinations],
        thereIsMore: action.payload.thereIsMore,
      };
    case DESTINATION_LIST_LOAD_MORE:
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload.filter,
        },
        destinations: [
          ...state.destinations,
          ...action.payload.destinations,
        ],
        thereIsMore: action.payload.thereIsMore,
      };
    case DESTINATION_LIST_SET_FILTER:
      return {
        ...state,
        ...action.payload,
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
