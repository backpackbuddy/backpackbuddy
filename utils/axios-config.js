import axios from 'axios';

function setAxiosConfig() {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
}

export default setAxiosConfig;
