import axios from 'axios';
import {
  DESTINATION_LIST_LOAD_MORE,
  DESTINATION_LIST_FETCH,
  DESTINATION_LIST_LOADING,
} from './actionTypes';

const setLoading = (loading) => ({
  type: DESTINATION_LIST_LOADING,
  payload: { loading },
});

const getDestinations = async ({
  offset, limit, orderBy, order, search,
}) => {
  const res = await axios.get(`/itineraries?offset=${offset}&limit=${limit}&order_by=${orderBy}&order=${order}&search=${search}`);
  return res;
};

export const fetchDestinations = () => async (dispatch, getState) => {
  const { destinations, filter } = getState().destinations;
  const { offset, limit } = filter;

  if (destinations.length <= offset) {
    dispatch(setLoading(true));

    const res = await getDestinations(filter);

    dispatch({
      type: DESTINATION_LIST_FETCH,
      payload: {
        destinations: res.data,
        loading: false,
        thereIsMore: res.data.length >= limit,
      },
    });
  }

  dispatch(setLoading(false));
};

export const loadMoreDestinations = (offsetFilter) => async (dispatch, getState) => {
  dispatch(setLoading(true));

  const { filter } = getState().destinations;
  // merge the current filter with new filter
  const newFilter = { ...filter, ...offsetFilter };
  // make request
  const res = await getDestinations(newFilter);

  dispatch({
    type: DESTINATION_LIST_LOAD_MORE,
    payload: {
      destinations: res.data,
      filter: newFilter,
      loading: false,
      thereIsMore: res.data.length >= filter.limit,
    },
  });

  dispatch(setLoading(false));
};

export const filterDestinations = (payload) => async (dispatch, getState) => {
  dispatch(setLoading(true));
  // reset the destinations data
  dispatch({
    type: DESTINATION_LIST_FETCH,
    payload: {
      destinations: [],
    },
  });

  const { filter } = getState().destinations;
  // merge the current filter with new filter
  const newFilter = { ...filter, ...payload };
  // make request
  const res = await getDestinations(newFilter);

  dispatch({
    type: DESTINATION_LIST_FETCH,
    payload: {
      destinations: res.data,
      filter: newFilter,
      loading: false,
      thereIsMore: res.data.length >= filter.limit,
    },
  });

  dispatch(setLoading(false));
};
