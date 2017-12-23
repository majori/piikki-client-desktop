import Vue from 'vue';
import * as _ from 'lodash';

const state = {
  saldo: null,
  members: [],
};

const mutations = {
  SET_MEMBERS(state, members) {
    state.members = members;
  },
  SET_GROUP_SALDO(state, saldo) {
    state.saldo = saldo;
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
        from: timestamp,
      },
    );

    commit('SET_GROUP_SALDO', res.data.result.saldo);
  },
};

const getters = {
  members: state => state.members,
  membersBySaldo: state => _.orderBy(state.members, ['saldo'], ['asc']),
  groupSaldo: state => state.saldo,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
