<template>
  <div class="field">
    <label>Location</label>
    <div class="input-container">
      <input
        :value="searchData.search.location"
        @blur="updateLocation"
        @input="debounceUpdateLocation"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import debounce from 'lodash.debounce';

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
    // eslint-disable-next-line
    debounceUpdateLocation: debounce(function (e) {
      this.$store.dispatch('updateLocation', e.target.value);
      this.$store.dispatch('getResults');
    }, 1000),
    updateLocation(e) {
      this.$store.dispatch('updateLocation', e.target.value);
      this.$store.dispatch('getResults');
    },
  },
  mounted() {
    this.$store.dispatch('getResults');
  },
};
</script>

<style>
</style>
