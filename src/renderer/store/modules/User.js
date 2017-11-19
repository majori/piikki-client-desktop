import Vue from 'vue';
import router from '@/router';

const state = {
  username: '',
};

const mutations = {
  LOGIN(state, username) {
    state.username = username;
  },
};

const actions = {
  login: async ({ commit }, userInfo) => {
    const res = await Vue.http.post(
      '/users/authenticate',
      userInfo,
    );

    if (res.data.ok && res.data.result.authenticated) {
      commit('LOGIN', userInfo.username);
      router.push({ path: '/user' });
    }
  },
};

const getters = {
  loggedInUser: state => state.username,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
