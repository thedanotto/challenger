<template>
  <div>
    <div v-for="biz in searchData.results.businesses">
      {{ biz.name }}<br />
      {{ biz.image_url }}<br />
      {{ biz.review_count }}<br />
      {{ biz.rating }}<br />
      {{ biz.price }}<br />
      {{ biz.location.display_address }}<br />
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
  },
  methods: {
  },
};
</script>

<style>
</style>
