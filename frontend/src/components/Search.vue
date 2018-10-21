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
      'YelpQueryStringer',
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
    axios.post('/user', {
      firstName: 'Fred',
      lastName: 'Flintstone',
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>
