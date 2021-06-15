import axios from 'axios';
import { setCookie } from 'nookies';
import setAxiosConfig from './axios-config';

/**
 * Get the user token by given creds
 */
export async function getToken(creds) {
  const res = await axios.post('/login', creds);
  return res.data;
}

/**
 * Login the user by given creds
 */
export function setAuthenticated({ access_token, expires_at }) {
  setCookie(null, 'user_token', access_token, {
    path: '/',
    expires: new Date(expires_at),
  });

  // refresh token header config
  setAxiosConfig();
}
