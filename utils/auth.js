import axios from "axios";
import { destroyCookie, setCookie } from "nookies";
import setAxiosConfig from "./axios-config";

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
    localStorage.app_state = JSON.stringify({
      isLoggedIn: true,
      currentUser: await user.data
    });
  } catch (e) {
    return false;
  }

  return true;
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
      .finally(() => document.location.reload());
}
