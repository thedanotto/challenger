<template>
  <div class="field">
    <label>Location</label>
    <div class="input-container">
      <input
        @focus="handleFocus($event)"
        :value="searchData.search.location"
        @input="updateLocation"
      />
      <button @click="getResults">Show Me Open Restaurants!</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'Search',
  computed: {
    ...mapGetters([
      'yelpQueryStringer',
    ]),
    ...mapState([
      'searchData',
    ]),
  },
  methods: {
    getResults() {
      this.$store.dispatch('getResults');
    },
    handleFocus(e) {
      e.target.select();
    },
    updateLocation(e) {
      this.$store.dispatch('updateLocation', e.target.value);
    },
  },
  mounted() {
    this.$store.dispatch('getResults');
  },
};
</script>

<style>
</style>
