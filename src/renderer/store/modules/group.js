import Vue from 'vue';
import * as _ from 'lodash';
import { format } from 'date-fns';

const state = {
  saldo: null,
  members: [],
  transactions: [],
};

const mutations = {
  SET_MEMBERS(state, members) {
    state.members = members;
  },
  SET_GROUP_SALDO(state, saldo) {
    state.saldo = saldo;
  },
  SET_GROUP_TRANSACTIONS(state, transactions) {
    state.transactions = transactions;
  },
};

const actions = {
  async getMembers({ commit }) {
    const res = await Vue.http.get(
      '/group/members',
    );

    commit('SET_MEMBERS', res.data.result);
  },

  async getGroupSaldo({ commit }, timestamp) {
    const res = await Vue.http.get(
      '/group/saldo',
      {
        params: {
          from: timestamp,
        },
      },
    );

    commit('SET_GROUP_SALDO', res.data.result.saldo);
  },

  async getGroupTransactions({ commit }, timestamp) {
    const res = await Vue.http.get(
      '/group/transactions',
      {
        params: {
          from: format(timestamp),
        },
      },
    );

    commit('SET_GROUP_TRANSACTIONS', res.data.result);
  },
};

const getters = {
  members: state => state.members,
  membersBySaldo: state => _.orderBy(state.members, ['saldo'], ['asc']),
  membersByUsername: state => _.orderBy(state.members, ['username'], ['asc']),
  groupSaldo: state => state.saldo,
  groupTransactions: state => _.map(state.transactions, trx => ({
    username: trx.username,
    timestamp: format(trx.timestamp, 'D.M. HH:mm'),
    diff: trx.newSaldo - trx.oldSaldo,
  })),
};

export default {
  state,
  mutations,
  actions,
  getters,
};
