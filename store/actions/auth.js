import axios from 'axios';

const { AUTHENTICATE, DEAUTHENTICATE } = require('./actionTypes');

export const authenticate = (creds) => async (dispatch) => {
  try {
    const { data } = await axios.post('/login', creds);

    dispatch({
      type: AUTHENTICATE,
      payload: data,
    });

    return {
      success: true,
      data,
    };
  } catch ({ response }) {
    return {
      success: false,
      err: response.data,
    };
  }
};

export const deauthenticate = () => async (dispatch) => {
  try {
    dispatch({
      type: DEAUTHENTICATE,
    });

    await axios.post('/logout');
  } catch (_) {
    // eslint-disable-next-line no-console
    console.error('Deauthenticate failed, probably the user was not authenticated');
  }
};
