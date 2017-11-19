import Vue from 'vue';
import axios from 'axios';

import 'materialize-css/dist/js/materialize.js';

import App from './App';
import router from './router';
import store from './store';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));

Vue.http = Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000/api/v1/restricted',
  headers: {
    Authorization: 'restricted_token',
  },
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
