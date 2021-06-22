import axios from 'axios';

const { AUTHENTICATE, DEAUTHENTICATE, SET_AUTH } = require('./actionTypes');

export const authenticate = (creds) => async (dispatch) => {
  const { data } = await axios.post('/login', creds);

  dispatch({
    type: AUTHENTICATE,
    payload: data,
  });
};

export const deauthenticate = () => async (dispatch) => {
  await axios.post('/logout');
  dispatch({ type: DEAUTHENTICATE });
};

export const setAuth = (username) => ({
  type: SET_AUTH,
  payload: {
    user: { username },
  },
});
