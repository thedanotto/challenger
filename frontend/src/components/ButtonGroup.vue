<template>
    <div class="field">
      <label>{{ label }}</label>
      <div class="input-container">
        <button v-for="option in searchData.searchOptions[searchOptionsList]" class="btn btn--sm" :class="{ 'btn--selected': isOptionSelected(isOptionSelectedComparer, option.api) }" @click="selectOption(storeAction, option.api)">
          {{ option.friendly }}
        </button>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Search',
  computed: {
    ...mapState([
      'searchData',
    ]),
  },
  props: {
    isOptionSelectedComparer: { required: true },
    label: { required: true },
    searchOptionsList: { required: true },
    storeAction: { required: true },
  },
  methods: {
    isOptionSelected(storeItem, value) {
      return value === this.searchData.search[storeItem];
    },
    selectOption(storeAction, value) {
      this.$store.dispatch(storeAction, value);
    },
  },
  mounted() {
    this.$store.dispatch('getResults');
  },
};
</script>

<style>
</style>
