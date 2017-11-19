import Vue from 'vue';

import 'materialize-css/dist/js/materialize.js';

import App from './App';
import router from './router';
import store from './store';
import http from './services/http';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));

Vue.http = Vue.prototype.$http = http;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
