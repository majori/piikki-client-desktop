const state = {
  tag: null,
  errors: {
    reader: false,
    card: false,
  },
};

const mutations = {
  SET_TAG(state, tag) {
    state.tag = tag;
    state.errors = {
      reader: false,
      card: false,
    };
  },
  SET_NFC_CARD_ERROR(state) {
    state.errors.card = true;
  },
  SET_NFC_READER_ERROR(state) {
    state.errors.reader = true;
  },
};

const actions = {
  setTag: ({ commit }, tag) => {
    commit('SET_TAG', tag);
  },
};

const getters = {
  tag: state => state.tag,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
