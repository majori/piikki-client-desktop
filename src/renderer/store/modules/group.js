import Vue from 'vue';
import * as _ from 'lodash';
import { format } from 'date-fns';

const state = {
  info: {
    name: null,
  },
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
  SET_GROUP(state, group) {
    state.info = group;
  },
};

const actions = {
  async getGroup({ commit }) {
    const res = await Vue.http.get('/group');

    commit('SET_GROUP', res.data.result);
  },

  async getMembers({ commit }) {
    const res = await Vue.http.get('/group/members');

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

  async addCurrentUserToGroup({ rootState }) {
    await Vue.http.post(
      '/group/addMember',
      { username: rootState.user.username },
    );
  },
};

const getters = {
  group: state => state.info.name,
  members: state => state.members,
  membersBySaldo: state => (dir = 'asc') => _.orderBy(state.members, ['saldo'], [dir]),
  membersByUsername: state => (dir = 'asc') => _.orderBy(state.members, ['username'], [dir]),
  groupSaldo: state => state.saldo,
  groupTransactions: state => _.map(state.transactions, trx => ({
    username: trx.username,
    timestamp: format(trx.timestamp, 'D.M. HH:mm'),
    diff: _.round(trx.newSaldo - trx.oldSaldo, 2),
  })),
};

export default {
  state,
  mutations,
  actions,
  getters,
};
