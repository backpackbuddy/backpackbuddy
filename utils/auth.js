import axios from "axios";
import { destroyCookie, setCookie } from "nookies";
import setAxiosConfig from "./axios-config";

/**
 * Get the user token by given creds
 *
 * @param object
 * @return object
 */
export async function getToken (creds) {
  const res = await axios.post('/login', creds);
  return res.data;
}

/**
 * Login the user by given creds
 *
 * @param array
 * @return boolean
 */
export async function loginUtils ({ access_token, expires_at }) {
  setCookie(null, 'user_token', access_token, {
    path: '/',
    expires: new Date(expires_at)
  });

  // refresh token header config
  setAxiosConfig();

  // save the current user info
  const user = await axios.get('/customer/me');
  localStorage.app_state = JSON.stringify({
    isLoggedIn: true,
    currentUser: await user.data
  });
}

/**
 * Logout & remove the user token
 *
 * @return void
 */
export function logoutUtils () {
  localStorage.removeItem('app_state');
  destroyCookie(null, 'user_token');
  axios.post('/logout')
    .finally(() => {document.location.href = '/'});
}
