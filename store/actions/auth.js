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

export const deauthenticate = {
  type: DEAUTHENTICATE,
};
