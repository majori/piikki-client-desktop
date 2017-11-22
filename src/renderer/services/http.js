import axios from 'axios';
import store from '@/store';

const domain = process.env.NODE_ENV === 'production' ? 'piikki.ddns.net' : 'dev.piikki.ddns.net';

const http = axios.create({
  baseURL: `https://${domain}/api/v1/restricted`,
});

http.interceptors.request.use((request) => {
  // Set token
  request.headers = { Authorization: store.getters.token };
  store.dispatch('addPendingRequest', request);

  return request;
});

http.interceptors.response.use((response) => {
  store.dispatch('removePendingRequest', response);

  return response;
});

export default http;
