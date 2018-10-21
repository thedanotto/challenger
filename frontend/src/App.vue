<template>
  <div id="app">
    <Search/>
    <Results />
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

<style>
</style>
