import * as _ from 'lodash';

const state = {
  token: null,
  pending: {},
};

function getRequestKey(options) {
  const path = _.replace(options.url, options.baseURL, '');
  return `${options.method}:${path}`;
}

const mutations = {
  SET_TOKEN(state, payload) {
    state.token = payload;
  },
  ADD_PENDING(state, req) {
    state.pending[getRequestKey(req)] = req;
  },
  REMOVE_PENDING(state, res) {
    delete state.pending[getRequestKey(res.config)];
  },
};

const actions = {
  setToken: ({ commit }, token) => {
    localStorage.setItem('TOKEN', token);
    commit('SET_TOKEN', token);
  },
  addPendingRequest: ({ commit }, req) => {
    commit('ADD_PENDING', req);
  },
  removePendingRequest: ({ commit }, res) => {
    commit('REMOVE_PENDING', res);
  },
};

const getters = {
  token: state => state.token,
  loadingAll: state => !_.isEmpty(state.pending),
  loadingPath: state => (path, method) => _.has(state.pending, `${method}:${path}`),
};

export default {
  state,
  mutations,
  actions,
  getters,
};
