import axios from 'axios';

function setAxiosConfig(token) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
}

export default setAxiosConfig;
