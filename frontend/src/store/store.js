import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import YelpQueryStringer from '../classes/YelpQueryStringer';

Vue.use(Vuex);
Vue.config.productionTip = false;

const searchData = {
  actions: {
    selectDistance: ({ commit }, value) => commit('SELECT_DISTANCE', value),
    selectTerm: ({ commit }, value) => commit('SELECT_TERM', value),
    togglePrice: ({ commit, state }, value) => {
      if (state.search.price.indexOf(value) !== -1) {
        commit('REMOVE_PRICE', value);
      } else {
        const newPriceArray = state.search.price;
        commit('ADD_PRICE', newPriceArray.concat([value]));
      }
    },
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
    ADD_PRICE(state, value) {
      state.search.price = value;
    },
    REMOVE_PRICE(state, value) {
      state.search.price = state.search.price.filter(item => item !== value);
    },
    SELECT_DISTANCE(state, value) {
      state.search.radius = value;
    },
    SELECT_TERM(state, value) {
      state.search.term = value;
    },
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
    searchOptions: {
      priceOptions: [
        {
          api: '1',
          friendly: '$',
        }, {
          api: '2',
          friendly: '$$',
        }, {
          api: '3',
          friendly: '$$$',
        }, {
          api: '4',
          friendly: '$$$$',
        },
      ],
      radiusOptions: [
        {
          api: 804,
          friendly: '0.5 mi',
        }, {
          api: 1608,
          friendly: '1 mi',
        }, {
          api: 3216,
          friendly: '2 mi',
        }, {
          api: 8040,
          friendly: '5 mi',
        },
      ],
      termOptions: [
        {
          api: 'Restaurants',
          friendly: 'Food',
        },
        {
          api: 'Bars',
          friendly: 'Drinks',
        },
      ],
    },
    search: {
      location: '720 East Wisconsin Ave. Milwaukee, WI 53202',
      radius: 804,
      price: ['1', '2', '3', '4'],
      openNow: true,
      term: 'Restaurants',
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

