import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import YelpQueryStringer from '../classes/YelpQueryStringer';

Vue.use(Vuex);
Vue.config.productionTip = false;

const searchData = {
  actions: {
    updateLocation: ({ commit }, value) => commit('UPDATE_LOCATION', value),
    updateResults: ({ commit }, value) => commit('UPDATE_RESULTS', value),
    getResults: ({ commit, getters }) => {
      commit('UPDATE_LOADING', true);
      axios.post('https://dry-peak-89639.herokuapp.com/api/v1/yelp_request', {
        yelp_request: {
          url: getters.yelpQueryStringer.requestUrl(),
        },
      })
        .then((response) => {
          commit('UPDATE_RESULTS', response.data);
        })
        .catch(() => {
        })
        .finally(() => {
          commit('UPDATE_LOADING', false);
        });
    },
  },
  mutations: {
    UPDATE_LOADING(state, value) {
      state.loading = value;
    },
    UPDATE_LOCATION(state, value) {
      state.search.location = value;
    },
    UPDATE_RESULTS(state, value) {
      state.results = value;
    },
  },
  state: {
    loading: false,
    search: {
      location: '720 East Wisconsin Ave. Milwaukee, WI 53202',
      radius: '804',
      price: [1, 2, 3, 4],
      openNow: true,
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

