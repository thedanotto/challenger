<template>
  <div>
    <div class="field">
      <label>Location</label>
      <div class="input-container">
        <input
          @focus="handleFocus($event)"
          :value="searchData.search.location"
          @input="updateLocation"
        />
      </div>
    </div>
    <button-group
      isOptionSelectedComparer='radius'
      label='Distance'
      searchOptionsList='radiusOptions'
      storeAction='selectDistance'
    ></button-group>
    <button-group
      isOptionSelectedComparer='term'
      label='Looking For?'
      searchOptionsList='termOptions'
      storeAction='selectTerm'
    ></button-group>
    <div class="field">
      <label>Budget?</label>
      <div class="input-container">
        <button v-for="option in searchData.searchOptions.priceOptions" class="btn btn--sm" :class="{ 'btn--selected': isPriceSelected(option.api) }" @click="selectOption('togglePrice', option.api)">
          {{ option.friendly }}
        </button>
      </div>
    </div>
    <div class="field">
      <button class="btn btn--submit" @click="getResults">Find Nearby {{ searchData.search.term }}!</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import ButtonGroup from './ButtonGroup';

export default {
  name: 'Search',
  components: {
    ButtonGroup,
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
    isPriceSelected(price) {
      return this.searchData.search.price.indexOf(price) !== -1;
    },
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
