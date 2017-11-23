const state = {
  tag: null,
  readerOnline: false,
  errors: {
    reader: null,
    card: null,
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
  SET_NFC_READER_STATUS(state, status) {
    state.readerOnline = status;
  },
  SET_NFC_CARD_ERROR(state, msg) {
    state.errors.card = msg;
  },
  SET_NFC_READER_ERROR(state, msg) {
    state.errors.reader = msg;
  },
};

const actions = {
  setTag: ({ commit }, tag) => {
    commit('SET_TAG', tag);
  },
  setReaderStatus: ({ commit }, status) => {
    commit('SET_NFC_READER_STATUS', status);
  },
  setCardError: ({ commit }, msg) => {
    commit('SET_NFC_CARD_ERROR', msg);
  },
  setReaderError: ({ commit }, msg) => {
    commit('SET_NFC_READER_ERROR', msg);
  },
};

const getters = {
  tag: state => state.tag,
  readerOnline: state => state.readerOnline,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
