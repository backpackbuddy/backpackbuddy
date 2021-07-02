import { CLOSE_TOAST, SET_TOAST } from './actionTypes';

export const setToast = (payload) => ({
  type: SET_TOAST,
  payload,
});

export const closeToast = {
  type: CLOSE_TOAST,
};
