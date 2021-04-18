import axios from "axios";
import { parseCookies } from "nookies";

function setAxiosConfig () {
	axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;
	axios.defaults.headers.common.Authorization = `Bearer ${parseCookies().user_token}`
	axios.defaults.headers.post['Content-Type'] = 'application/json';
}

export default setAxiosConfig;
