<template>
  <div>
    <div v-if="searchData.loading" class="loading">
      <circle8></circle8>
    </div>
    <div v-else-if="hasResults === false">
      No Results. Try a different Location.
    </div>
    <div v-else v-for="biz in alphabetizeBusinesses" :key="biz.id" class="result">
      <div class="result__main-attributes">
        <h2 class="result__h2">{{ biz.name }}</h2>
        <div class="result__reviews">
          <div class="result__stars" :class="`result__stars--${stripPeriod(biz.rating)}`" style="backgroundImage: url(https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_design_web/9b34e39ccbeb/assets/img/stars/stars.png);"></div>
          <span>{{ biz.review_count }} Reviews, {{ biz.price }}</span>
        </div>
        <div class="result__contact">
          <p class="result__p">{{ biz.location.display_address.join(", ") }}</p>
          <p class="result__p">{{ biz.display_phone }}</p>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Circle8 } from 'vue-loading-spinner';

export default {
  name: 'Results',
  components: {
    Circle8
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState([
      'searchData',
    ]),
    alphabetizeBusinesses() {
      const businesses = this.searchData.results.businesses || [];
      return businesses.sort((a, b) => a.name.localeCompare(b.name));
    },
    hasResults() {
      if (this.searchData.results) {
        return this.searchData.results.total > 0;
      } else {
        return false;
      }
    }
  },
  methods: {
    stripPeriod(rating) {
      return rating.toString().replace('.', '');
    },
  },
};
</script>

<style>
</style>
