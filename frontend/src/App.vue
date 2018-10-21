<template>
  <div class="wrapper">
    <div class="container">
      <div class="grid">
        <div class="inputs-container">
          <Search/>
        </div>
        <div class="results-container">
          <Results />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from './components/Search';
import Results from './components/Results';

export default {
  name: 'App',
  components: {
    Search,
    Results,
  },
};
</script>

<style lang="scss">
  @import "~style/application.scss"
</style>
