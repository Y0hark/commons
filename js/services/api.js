import axios from 'axios';

const BASE_URL = 'http://your-api-url.com/api';

function config(bearerToken=null) {
	if (bearerToken === null) {
		return {};
	} else {
	  	return {
			headers: {
	 			Authorization: `Bearer ${bearerToken}`,
			},
		}
  	};
}

class HTTP {
  static get(url, params={}, bearerToken=null) {
	return axios.get(`${BASE_URL}${url}`, config(bearerToken));
  }

  static post(url, data, bearerToken=null) {
	return axios.post(`${BASE_URL}${url}`, data, config(bearerToken));
  }

  static put(url, data, bearerToken=null) {
	return axios.put(`${BASE_URL}${url}`, data, config(bearerToken));
  }

  static delete(url, bearerToken=null) {
	return axios.delete(`${BASE_URL}${url}`, config(bearerToken));
  }
}

class API {
  static login(email, password) {
	return HTTP.post('/login', { email, password });
  }
}