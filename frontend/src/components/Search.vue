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
    <div class="field">
      <label>Distance</label>
      <div class="input-container">
        <button v-for="option in searchData.searchOptions.radiusOptions" class="btn btn--sm" :class="{ 'btn--selected': isOptionSelected('radius', option.api) }" @click="selectOption('selectDistance', option.api)">
          {{ option.friendly }}
        </button>
      </div>
    </div>
    <div class="field">
      <label>Looking For?</label>
      <div class="input-container">
        <button v-for="option in searchData.searchOptions.termOptions" class="btn btn--sm" :class="{ 'btn--selected': isOptionSelected('term', option.api) }" @click="selectOption('selectTerm', option.api)">
          {{ option.friendly }}
        </button>
      </div>
    </div>
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
    isOptionSelected(storeItem, value) {
      return value === this.searchData.search[storeItem];
    },
    isPriceSelected(price) {
      return this.searchData.search.price.indexOf(price) !== -1;
    },
    getResults() {
      this.$store.dispatch('getResults');
    },
    handleFocus(e) {
      e.target.select();
    },
    selectOption(storeAction, value) {
      this.$store.dispatch(storeAction, value);
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
