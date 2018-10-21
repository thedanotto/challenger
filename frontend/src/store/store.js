import Vue from 'vue';
import Vuex from 'vuex';
import YelpQueryStringer from '../classes/YelpQueryStringer';

Vue.use(Vuex);
Vue.config.productionTip = false;

const searchData = {
  actions: {
    updateLocation: ({ commit }, value) => commit('UPDATE_LOCATION', value),
    updateResults: ({ commit }, value) => commit('UPDATE_RESULTS', value),
  },
  mutations: {
    UPDATE_LOCATION(state, value) {
      state.search.location = value;
    },
    UPDATE_RESULTS(state, value) {
      state.results = value.data;
    },
  },
  state: {
    search: {
      location: '720 East Wisconsin Ave. Milwaukee, WI 53202',
      radius: '804',
      price: [1, 2, 3, 4],
    },
    results: {
      businesses: [],
    },
  },
  getters: {
    yelpQueryStringer: state => new YelpQueryStringer(state.search),
  },
};

export default new Vuex.Store({
  modules: {
    searchData,
  },
});

