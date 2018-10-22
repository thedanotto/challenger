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
        <button class="btn btn--sm" :class="{ 'btn--selected': this.isDistanceSelected(804) }" @click="selectDistance(804)">
          0.5 mi
        </button>
        <button class="btn btn--sm" :class="{ 'btn--selected': this.isDistanceSelected(1608) }" @click="selectDistance(1608)">
          1 mi
        </button>
        <button class="btn btn--sm" :class="{ 'btn--selected': this.isDistanceSelected(3216) }" @click="selectDistance(3216)">
          2 mi
        </button>
        <button class="btn btn--sm" :class="{ 'btn--selected': this.isDistanceSelected(8040) }" @click="selectDistance(8040)">
          5 mi
        </button>
      </div>
    </div>
    <div class="field">
      <label>Looking For?</label>
      <div class="input-container">
        <button
          class="btn btn--sm"
          :class="{ 'btn--selected': this.isTermSelected('Restaurants') }"
          @click="selectTerm('Restaurants')"
        >
          Food
        </button>
        <button
          class="btn btn--sm"
          :class="{ 'btn--selected': this.isTermSelected('Bars') }"
          @click="selectTerm('Bars')"
        >
          Drinks
        </button>
      </div>
    </div>
    <div class="field">
      <label>Budget?</label>
      <div class="input-container">
        <button class="btn btn--sm" :class="{ 'btn--selected': this.isPriceSelected('1') }" @click="togglePrice('1')">
          $
        </button>
        <button class="btn btn--sm" :class="{ 'btn--selected': this.isPriceSelected('2') }" @click="togglePrice('2')">
          $$
        </button>
        <button class="btn btn--sm" :class="{ 'btn--selected': this.isPriceSelected('3') }" @click="togglePrice('3')">
          $$$
        </button>
        <button class="btn btn--sm" :class="{ 'btn--selected': this.isPriceSelected('4') }" @click="togglePrice('4')">
          $$$$
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
    isDistanceSelected(dist) {
      return dist === this.searchData.search.radius;
    },
    isPriceSelected(price) {
      return this.searchData.search.price.indexOf(price) !== -1;
    },
    isTermSelected(term) {
      return term === this.searchData.search.term;
    },
    getResults() {
      this.$store.dispatch('getResults');
    },
    handleFocus(e) {
      e.target.select();
    },
    selectDistance(dist) {
      this.$store.dispatch('selectDistance', dist);
    },
    selectTerm(term) {
      this.$store.dispatch('selectTerm', term);
    },
    togglePrice(price) {
      this.$store.dispatch('togglePrice', price);
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
