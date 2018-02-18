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
  REQUEST_PENDING(state, req) {
    state.pending[getRequestKey(req)] = req;
  },
  REQUEST_COMPLETE(state, res) {
    delete state.pending[getRequestKey(res.config)];
  },
};

const actions = {
  setToken: ({ commit }, token) => {
    commit('SET_TOKEN', token);
  },
  addPendingRequest: ({ commit }, req) => {
    commit('REQUEST_PENDING', req);
  },
  removePendingRequest: ({ commit }, res) => {
    commit('REQUEST_COMPLETE', res);
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
