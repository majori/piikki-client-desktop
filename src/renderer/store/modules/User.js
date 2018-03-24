import Vue from 'vue';
import router from '@/router';
import { format, subDays } from 'date-fns';
import * as _ from 'lodash';

const state = {
  username: '',
  saldo: null,
  errors: {
    failedAuth: false,
    create: null,
  },
  transactions: [],
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
    state.saldo = null;
  },
  USER_ERROR(state, { key, msg }) {
    state.errors[key] = msg;
  },
  SET_SALDO(state, saldo) {
    state.saldo = saldo;
  },
  SET_USER_TRANSACTIONS(state, transactions) {
    state.transactions = transactions;
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
      await commit('LOGIN', userInfo.username);
      router.push({ name: 'user-page' });
    } else {
      commit('LOGIN_ERROR');
    }
  },

  alternativeLogin: async ({ commit }, tag) => {
    const res = await Vue.http.post(
      '/users/authenticate/alternative',
      { key: tag, type: 20 }, // TODO: Get type somewhere else
    );

    // User was found with this tag
    if (res.data.result.authenticated) {
      commit('LOGIN', res.data.result.username);
      router.push({ name: 'user-page' });
    } else {
      commit('SET_TAG', tag);
    }
  },

  createAlternativeLogin: async ({ commit }, { username, tag }) => {
    const res = await Vue.http.post(
      '/users/authenticate/alternative/create',
      { username, key: tag, type: 20 },
    );

    if (res.data.ok) {
      commit('SET_TAG', null);
      alert('Card linked successfully!'); // eslint-disable-line
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
          commit('USER_ERROR', {
            key: 'create',
            msg: null,
          });

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

  getSaldo: async ({ commit, rootState }) => {
    const res = await Vue.http.get(`/group/members/${rootState.user.username}`);

    commit('SET_SALDO', res.data.result.saldo);
  },

  makeTransaction: async ({ commit }, transaction) => {
    const res = await Vue.http.post(
      '/transaction',
      transaction,
    );

    commit('SET_SALDO', res.data.result.saldo);
  },

  getUserTransactions: async ({ commit, state }, timestamp) => {
    const res = await Vue.http.get(
      `/group/transactions/${state.username}`,
      {
        params: {
          from: format(timestamp || subDays(new Date(), 90)),
        },
      },
    );

    commit(
      'SET_USER_TRANSACTIONS',
      _.map(res.data.result, trx => ({
        saldo: trx.newSaldo,
        timestamp: trx.timestamp,
      })),
    );
  },

  addUserTransaction: async ({ commit, state }, transaction) => {
    commit('SET_USER_TRANSACTIONS', _.concat([transaction], state.transactions));
  },
};

const getters = {
  loggedInUser: state => state.username,
  saldo: state => state.saldo,
  failedAuth: state => state.errors.failedAuth,
  userCreateError: state => state.errors.create,
  userTransactions: state => state.transactions,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
