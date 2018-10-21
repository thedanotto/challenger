import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.config.productionTip = false;

const searchData = {
  actions: {
    updateLocation: ({ commit }, value) => commit('UPDATE_LOCATION', value),
  },
  mutations: {
    UPDATE_LOCATION(state, value) {
      state.search.location = value;
    },
  },
  state: {
    search: {
      location: '720 East Wisconsin Ave. Milwaukee, WI 53202',
      radius: '804.672',
      price: [1, 2, 3, 4],
      open_now: false,
    },
    results: {},
  },
  getters: {
  },
};

export default new Vuex.Store({
  modules: {
    searchData,
  },
});

