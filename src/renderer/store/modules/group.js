import Vue from 'vue';
import * as _ from 'lodash';

const state = {
  members: [],
};

const mutations = {
  SET_MEMBERS(state, members) {
    state.members = members;
  },
};

const actions = {
  async getMembers({ commit }) {
    const res = await Vue.http.get(
      '/group/members',
    );

    commit('SET_MEMBERS', res.data.result);
  },
};

const getters = {
  members: state => state.members,
  membersBySaldo: state => _.orderBy(state.members, ['saldo'], ['asc']),
};

export default {
  state,
  mutations,
  actions,
  getters,
};
