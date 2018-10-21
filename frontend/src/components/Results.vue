<template>
  <div>
    <div v-for="biz in alphabetizeBusinesses" :key="biz.id">
      {{ biz.name }}<br />
      {{ biz.image_url }}<br />
      {{ biz.review_count }}<br />
      {{ biz.rating }}<br />
      {{ biz.price }}<br />
      {{ biz.location.display_address.join(", ") }}<br />
      {{ biz.display_phone }}<br />
      {{ biz.is_closed }}<br />
      {{ biz.distance }}
      <br /><br />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Results',
  data() {
    return {
    };
  },
  computed: {
    ...mapState([
      'searchData',
    ]),
    alphabetizeBusinesses() {
      const businesses = this.searchData.results.businesses;
      return businesses.sort((a, b) => a.name.localeCompare(b.name));
    },
  },
  methods: {
  },
};
</script>

<style>
</style>
