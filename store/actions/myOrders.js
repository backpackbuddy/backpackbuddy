import axios from 'axios';
import { MYORDER_FETCH, MYORDER_LOADING, MYORDER_UPDATE } from './actionTypes';

const setLoading = (loading) => ({
  type: MYORDER_LOADING,
  payload: { loading },
});

export const fetchMyOrders = () => async (dispatch) => {
  dispatch(setLoading(true));

  const res = await axios.get('/order');
  const data = await res.data;

  dispatch({
    type: MYORDER_FETCH,
    payload: {
      orders: data,
    },
  });

  dispatch(setLoading(false));
};

export const updateMyOrder = (orders, index) => ({
  type: MYORDER_UPDATE,
  payload: {
    orders,
    index,
  },
});
