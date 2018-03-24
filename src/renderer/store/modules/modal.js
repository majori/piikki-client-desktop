const state = {
  show: false,
  type: null,
};

const mutations = {
  SHOW_MODAL(state, type) {
    state.show = true;
    state.type = type;
  },
  CLOSE_MODAL(state) {
    state.show = false;
  },
};

const actions = {
  showModal({ commit }, type) {
    commit('SHOW_MODAL', type);
  },
  closeModal({ commit }) {
    commit('CLOSE_MODAL');
  },
};

const getters = {
  isModalOpen: state => state.show,
  modalType: state => state.type,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
