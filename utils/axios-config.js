import axios from "axios";
import { parseCookies } from "nookies";

function setAxiosConfig () {
  const token = parseCookies().user_token
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${parseCookies().user_token}`
  }

  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
}

export default setAxiosConfig;
