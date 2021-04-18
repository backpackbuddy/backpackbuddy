import axios from "axios";
import { setCookie } from "nookies";
import setAxiosConfig from "./axios-config";

/**
 * Get the current user info from localStorage
 *
 * @return Object
 */
export function getCurrentUserInfo () {
  const user = localStorage.getItem('current_user');
  return user && JSON.parse(user);
}

/**
 * Save the current user info to localStorage
 *
 * @param object
 * @return void
 */
export function setCurrentUserInfo (data) {
  localStorage.setItem('current_user', JSON.stringify(data));
}

/**
 * Remove current user info from localStorage
 *
 * @return void
 */
export function removeCurrentUserInfo () {
  localStorage.removeItem('current_user');
}

/**
 * Login the user by given creds
 *
 * @param array
 * @return boolean
 */
export async function loginUtils (data) {
  try {
    const res = await axios.post('/login', data);
    const { access_token, expires_at } = await res.data;

    setCookie(null, 'user_token', access_token, {
      path: '/',
      expires: new Date(expires_at)
    });

    // refresh token header config
    setAxiosConfig();

    // save the current user info
    const user = await axios.get('/current-user');
    setCurrentUserInfo(await user.data);
  } catch (e) {
    return false;
  }

  return true;
}

/**
 * Logout & remove the user token
 *
 * @return void;
 */
export async function logoutUtils () {
  try {
    await axios.post('/logout');
    removeCurrentUserInfo();
  } catch (e) {
    return false;
  }

  return true;
}
