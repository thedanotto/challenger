<template>
  <div>
    <input :value="searchData.search.location" @input="updateLocation" />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import axios from 'axios';

export default {
  name: 'Search',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: {
    ...mapGetters([
      'yelpQueryStringer',
    ]),
    ...mapState([
      'searchData',
    ]),
  },
  methods: {
    updateLocation(e) {
      this.$store.dispatch('updateLocation', e.target.value);
    },
  },
  mounted() {
    axios.post('http://localhost:3000/api/v1/yelp_request', {
      yelp_request: {
        url: this.yelpQueryStringer.requestUrl(),
      },
    })
      .then((response) => {
        this.$store.dispatch('updateResults', response);
      })
      .catch((error) => {
        // TODO: Handle Errors
      });
  },
};
</script>

<style>
</style>
