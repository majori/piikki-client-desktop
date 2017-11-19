const state = {
  token: null,
};

const mutations = {
  SET_TOKEN(state, payload) {
    state.token = payload;
  },
};

const actions = {
  setToken: ({ commit }, token) => {
    commit('SET_TOKEN', token);
  },
};

const getters = {
  token: state => state.token,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
