import Vue from 'vue';
import router from '@/router';

const state = {
  username: '',
  errors: {
    failedAuth: false,
    create: null,
  },
};

const mutations = {
  LOGIN(state, username) {
    state.username = username;
    state.errors.failedAuth = false;
  },
  LOGIN_ERROR(state) {
    state.errors.failedAuth = true;
  },
  LOGOUT(state) {
    state.username = '';
  },
  USER_ERROR(state, { key, msg }) {
    state.errors[key] = msg;
  },
};

const actions = {
  login: async ({ commit }, userInfo) => {
    if (!userInfo.username || !userInfo.password) {
      return;
    }

    const res = await Vue.http.post(
      '/users/authenticate',
      userInfo,
    );

    if (res.data.result.authenticated) {
      commit('LOGIN', userInfo.username);
      router.push({ name: 'user-page' });
    } else {
      commit('LOGIN_ERROR');
    }
  },

  logout: ({ commit }) => {
    commit('LOGOUT');
    router.push({ name: 'login-page' });
  },

  createUser: async ({ commit }, user) => {
    if (!user.username || !user.password) {
      return;
    }

    try {
      const createRes = await Vue.http.post(
        '/users/create',
        user,
      );

      if (createRes.data.ok) {
        const addMemberRes = await Vue.http.post(
          '/group/addMember',
          { username: createRes.data.result },
        );

        if (addMemberRes.data.ok) {
          commit('LOGIN', createRes.data.result);
          router.push({ name: 'user-page' });
        }
      }
    } catch (err) {
      commit('USER_ERROR', {
        key: 'create',
        msg: err.response.data.error.message,
      });
    }
  },
};

const getters = {
  loggedInUser: state => state.username,
  failedAuth: state => state.errors.failedAuth,
  userCreateError: state => state.errors.create,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
