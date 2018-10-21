<template>
  <div>
    <input :value="searchData.search.location" @input="updateLocation" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Search',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: {
    ...mapState([
      'searchData',
    ]),
  },
  methods: {
    updateLocation(e) {
      this.$store.dispatch('updateLocation', e.target.value);
    },
  },
};
</script>

<style>
</style>
